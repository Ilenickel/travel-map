// Résout et met en cache les coordonnées d'un lieu communautaire/statique via
// Geoapify, au moment où l'utilisateur choisit de l'ajouter à sa planification
// (voir get-place-suggestions.js). Cache permanent en base (lat/lng/geocoded_at) :
// un lieu physique ne bouge pas. N'accepte le résultat Geoapify que si son nom
// correspond raisonnablement au nom du lieu (même logique de correspondance
// floue que placeSuggestions.js) : sinon, pas de géolocalisation plutôt qu'une
// association hasardeuse.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';

const GEOAPIFY_API_KEY = process.env.VITE_GEOAPIFY_API_KEY;

function normalize(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD').replace(/\p{Mn}/gu, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function namesMatch(a, b) {
  const na = normalize(a);
  const nb = normalize(b);
  if (!na || !nb) return false;
  return na === nb || na.includes(nb) || nb.includes(na);
}

// `countryAlpha2` restreint la recherche à un pays (paramètre `filter` de
// Geoapify) : sans ça, un nom de lieu ambigu (ex. "The Bund", qui existe aussi
// comme toponyme aux États-Unis) peut renvoyer un résultat dans le mauvais
// pays, silencieusement accepté si son nom correspond au texte recherché.
async function geocodeViaGeoapify(text, countryAlpha2) {
  if (!GEOAPIFY_API_KEY) return null;
  try {
    const filterParam = countryAlpha2 ? `&filter=countrycode:${countryAlpha2}` : '';
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(text)}&limit=1${filterParam}&apiKey=${GEOAPIFY_API_KEY}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return null;
    const data = await res.json();
    const f = data.features?.[0];
    if (!f) return null;
    const p = f.properties;
    const name = p.name || p.address_line1 || p.formatted?.split(',')[0];
    return { name, lat: p.lat, lng: p.lon };
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, reason: 'Méthode non autorisée.' });
  }

  let admin;
  try { admin = getAdminClient(); } catch {
    return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const { authToken, placeType, placeId, staticCountryCode, cityName, countryName, countryAlpha2 } = body;

  if (!['community', 'static'].includes(placeType) || !placeId) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  if (placeType === 'static' && !staticCountryCode) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) {
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  const table = placeType === 'community' ? 'destination_places' : 'static_destination_places';

  // Le nom utilisé pour géocoder ET vérifier la correspondance vient TOUJOURS
  // de la base, jamais du corps de la requête : sinon un utilisateur connecté
  // pourrait faire pointer un lieu existant (placeId réel) vers des
  // coordonnées arbitraires en fournissant un nom fabriqué qui matche un lieu
  // totalement différent — corruption persistante (cache permanent) visible
  // ensuite par tous les visiteurs de ce lieu.
  const { data: existing } = await admin.from(table).select('name, lat, lng').eq('id', placeId).maybeSingle();
  if (!existing) {
    return res.status(404).json({ ok: false, reason: 'Lieu introuvable.' });
  }
  // Déjà géocodé ? (0 est une coordonnée valide, ne pas tester en falsy)
  if (existing.lat != null && existing.lng != null) {
    return res.status(200).json({ ok: true, geocoded: true, lat: existing.lat, lng: existing.lng });
  }

  const searchText = [existing.name, cityName, countryName].filter(Boolean).join(', ');
  const result = await geocodeViaGeoapify(searchText, countryAlpha2);

  if (!result || !namesMatch(result.name, existing.name)) {
    return res.status(200).json({ ok: true, geocoded: false });
  }

  const { error } = await admin
    .from(table)
    .update({ lat: result.lat, lng: result.lng, geocoded_at: new Date().toISOString() })
    .eq('id', placeId);
  if (error) {
    console.error('[geocode-place] update:', error);
    return res.status(200).json({ ok: true, geocoded: false });
  }

  return res.status(200).json({ ok: true, geocoded: true, lat: result.lat, lng: result.lng });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
