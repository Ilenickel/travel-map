// Résout et met en cache les coordonnées d'un lieu communautaire, statique ou
// éditorial (mustSee) via Geoapify, au moment où l'utilisateur choisit de
// l'ajouter à sa planification (voir get-place-suggestions.js). Cache
// permanent en base (destination_places/static_destination_places pour les
// deux premiers, editorial_place_geocache pour le troisième) : un lieu
// physique ne bouge pas. N'accepte le résultat Geoapify que si son nom
// correspond au nom du lieu — lexicalement, ou via IA en repli (voir
// api/_lib/geocodeConfidence.js) pour les reformulations qu'une simple
// comparaison de caractères ne peut pas voir. Si la recherche dans la langue
// d'origine échoue, un repli tente aussi la version anglaise du nom (traduite
// via le cache déjà utilisé pour l'affichage — voir api/_lib/translation.js) :
// Geoapify/OSM connaît souvent mieux un lieu sous son nom anglais.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { confirmPlaceMatch } from './_lib/geocodeConfidence.js';
import { extractLabelVariants } from './_lib/labelVariants.js';
import { getTranslatedField } from './_lib/translation.js';

const GEOAPIFY_API_KEY = process.env.VITE_GEOAPIFY_API_KEY;

// `countryAlpha2` restreint la recherche à un pays (paramètre `filter` de
// Geoapify) : sans ça, un nom de lieu ambigu (ex. "The Bund", qui existe aussi
// comme toponyme aux États-Unis) peut renvoyer un résultat dans le mauvais
// pays, silencieusement accepté si son nom correspond au texte recherché.
// `lang` demande à Geoapify de renvoyer le nom du résultat dans cette langue :
// sans ça, Geoapify répond dans sa langue par défaut (souvent l'anglais ou la
// langue locale du pays), qui ne correspondra jamais au nom stocké si celui-ci
// a été soumis dans une autre langue (ex. "Concession française" comparé à un
// résultat renvoyé en anglais échouerait systématiquement le test de similarité).
async function geocodeViaGeoapify(text, countryAlpha2, lang) {
  if (!GEOAPIFY_API_KEY) return null;
  try {
    // Encodage explicite : ces valeurs viennent du corps de la requête, sans
    // ça un appelant pourrait injecter des paramètres supplémentaires dans
    // l'URL Geoapify (ex. lang="fr&foo=bar").
    const filterParam = countryAlpha2 ? `&filter=countrycode:${encodeURIComponent(countryAlpha2)}` : '';
    const langParam = lang ? `&lang=${encodeURIComponent(lang)}` : '';
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(text)}&limit=1${filterParam}${langParam}&apiKey=${GEOAPIFY_API_KEY}`;
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
  const { authToken, placeType, placeId, staticCountryCode, cityName, countryName, countryAlpha2, lang, countryCode, labelFr, labelEn } = body;

  if (!['community', 'static', 'editorial'].includes(placeType)) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  if ((placeType === 'community' || placeType === 'static') && !placeId) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  if (placeType === 'static' && !staticCountryCode) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  if (placeType === 'editorial' && (!countryCode || !body.staticDestId || !labelFr)) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) {
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  // ── Lieu éditorial figé (mustSee) : pas de ligne DB propre, cache dédié
  //    dans editorial_place_geocache — voir supabase/editorial_place_geocache_table.sql.
  //    Clé de cache = labelFr (stable), mais la recherche essaie l'anglais
  //    D'ABORD : constaté empiriquement que Geoapify/OSM connaît souvent bien
  //    mieux un lieu sous son nom anglais que sa traduction française (ex.
  //    "The Bund" trouve le lieu, "Le Bund" renvoie un résultat sans rapport
  //    en Mongolie ; "Shanghai Tower" trouve la tour, "tour de Shanghai"
  //    renvoie une école de langue).
  if (placeType === 'editorial') {
    const staticDestId = String(body.staticDestId);
    const { data: cached } = await admin
      .from('editorial_place_geocache')
      .select('lat, lng')
      .eq('country_code', countryCode)
      .eq('static_dest_id', staticDestId)
      .eq('label', labelFr)
      .maybeSingle();
    if (cached) {
      return res.status(200).json({ ok: true, geocoded: cached.lat != null, lat: cached.lat, lng: cached.lng });
    }

    const candidates = [
      ...(labelEn ? extractLabelVariants(labelEn).map((text) => ({ text, lang: 'en' })) : []),
      ...extractLabelVariants(labelFr).map((text) => ({ text, lang: 'fr' })),
    ];

    let found = null;
    for (const { text: candidate, lang: candLang } of candidates) {
      const searchText = [candidate, cityName, countryName].filter(Boolean).join(', ');
      const r = await geocodeViaGeoapify(searchText, countryAlpha2, candLang);
      if (!r) continue;
      if (await confirmPlaceMatch(r.name, candidate)) { found = r; break; }
    }

    await admin.from('editorial_place_geocache').upsert(
      {
        country_code: countryCode,
        static_dest_id: staticDestId,
        label: labelFr,
        lat: found?.lat ?? null,
        lng: found?.lng ?? null,
        geocoded_at: new Date().toISOString(),
      },
      { onConflict: 'country_code,static_dest_id,label' }
    );

    return res.status(200).json({ ok: true, geocoded: !!found, lat: found?.lat ?? null, lng: found?.lng ?? null });
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
  let result = await geocodeViaGeoapify(searchText, countryAlpha2, lang);
  let matched = result ? await confirmPlaceMatch(result.name, existing.name) : false;

  // Repli anglais si la recherche dans la langue d'origine échoue : Geoapify/OSM
  // connaît souvent mieux un lieu sous son nom anglais (voir le repli identique
  // pour les lieux éditoriaux ci-dessus). Réutilise le cache de traduction déjà
  // en place pour l'affichage des lieux (voir api/_lib/translation.js) — ne
  // traduit que si pas déjà en cache, et ne coûte donc rien pour un lieu déjà
  // consulté dans cette langue par ailleurs.
  if (!matched) {
    try {
      const englishName = await getTranslatedField({
        admin,
        contentType: placeType === 'community' ? 'destination_place' : 'static_destination_place',
        contentId: placeId,
        field: 'name',
        sourceText: existing.name,
        targetLanguage: 'en',
      });
      if (englishName && englishName !== existing.name) {
        const searchTextEn = [englishName, cityName, countryName].filter(Boolean).join(', ');
        result = await geocodeViaGeoapify(searchTextEn, countryAlpha2, 'en');
        matched = result ? await confirmPlaceMatch(result.name, englishName) : false;
      }
    } catch {
      // Traduction indisponible : on garde le résultat (ou l'absence de résultat) de la tentative d'origine.
    }
  }

  if (!result || !matched) {
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
