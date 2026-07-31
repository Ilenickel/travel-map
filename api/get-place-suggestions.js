// Renvoie les lieux communautaires + statiques déjà connus pour la destination
// correspondant à une ville de planification, traduits dans la langue demandée.
// Voir api/_lib/placeSuggestions.js pour la logique de correspondance ville ↔ destination.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { findMatchingCommunityDestinations } from './_lib/placeSuggestions.js';
import { getTranslatedPlaceName, TranslationUnavailableError, SUPPORTED_TARGET_LANGUAGES } from './_lib/translation.js';

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
  // `category` : 'place' (lieux de visite, défaut) ou 'restaurant'. Les deux
  // vivent dans les mêmes tables depuis supabase/restaurants_v1.sql — sans ce
  // filtre, les restaurants remonteraient dans « lieux conseillés ».
  const { authToken, cityName, countryCode, staticDestIds = [], targetLanguage = 'fr', category = 'place' } = body;

  if (!cityName || !countryCode || !SUPPORTED_TARGET_LANGUAGES.includes(targetLanguage)) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  if (!['place', 'restaurant'].includes(category)) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) {
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  const communityDestinationIds = await findMatchingCommunityDestinations(admin, cityName, countryCode);

  const places = [];

  // Un restaurant a besoin de ses attributs propres (budget, cuisine, adresse,
  // note) que la liste de lieux de visite n'affiche pas : on ne les demande que
  // dans ce mode, pour ne pas alourdir la réponse la plus fréquente.
  const isRestaurant = category === 'restaurant';
  const COLUMNS = isRestaurant
    ? 'id, name, name_latin, lat, lng, image_url, source, cuisine_tags, budget_level, address, rating_avg, rating_count, user_id'
    : 'id, name, lat, lng, image_url';

  const shape = (p, type) => ({
    id: p.id,
    type,
    name: p.name,
    lat: p.lat,
    lng: p.lng,
    imageUrl: p.image_url || null,
    ...(isRestaurant ? {
      nameLatin: p.name_latin || null,
      source: p.source || 'community',
      cuisineTags: p.cuisine_tags || [],
      budgetLevel: p.budget_level ?? null,
      address: p.address || null,
      ratingAvg: p.rating_avg != null ? Number(p.rating_avg) : null,
      ratingCount: p.rating_count ?? 0,
      userId: p.user_id || null,
    } : {}),
  });

  if (communityDestinationIds.length) {
    const { data } = await admin
      .from('destination_places')
      .select(COLUMNS)
      .eq('category', category)
      .in('destination_id', communityDestinationIds);
    for (const p of data || []) places.push(shape(p, 'community'));
  }

  // Dédoublonné : le même identifiant présent deux fois interrogerait deux fois
  // la même destination et renverrait chaque lieu en double — soit, côté React,
  // deux éléments de liste avec la même clé.
  const cleanStaticDestIds = [...new Set(
    (Array.isArray(staticDestIds) ? staticDestIds : []).filter((id) => typeof id === 'string' && id)
  )];
  for (const staticDestId of cleanStaticDestIds) {
    const { data } = await admin
      .from('static_destination_places')
      .select(COLUMNS)
      .eq('category', category)
      .eq('country_code', countryCode)
      .eq('static_dest_id', staticDestId);
    for (const p of data || []) places.push(shape(p, 'static'));
  }

  // Traduction via Wikipédia/Wikidata (voir wikipediaPlaceName.js), pas
  // Google Translate : un nom de lieu est souvent un nom propre ("High
  // Line") que Google Translate traduit littéralement à tort ("Ligne
  // Haute") — même correctif du 2026-07-24 que pour PlacesList.jsx et les
  // noms de ville de modèles partagés (api/get-translated-content.js),
  // manquant ici jusqu'à présent (signalé le 2026-07-24 : lieux "Cité
  // Interdite"/"Temple du Ciel" restant en français en anglais). Repli sur
  // le nom d'origine si rien de vérifiable trouvé (voir
  // getTranslatedPlaceName) — jamais de traduction mot à mot non vérifiée.
  // Jamais pour les restaurants : un nom d'établissement est un nom propre
  // ("Chen Mapo Tofu"), il n'a pas d'équivalent Wikipédia et la traduction ne
  // ferait que consommer du quota pour retomber sur le nom d'origine.
  if (isRestaurant) {
    return res.status(200).json({ ok: true, places });
  }

  let translatedPlaces;
  try {
    translatedPlaces = await Promise.all(
      places.map(async (p) => ({
        ...p,
        name: await getTranslatedPlaceName({
          admin,
          contentType: p.type === 'community' ? 'destination_place' : 'static_destination_place',
          contentId: p.id,
          field: 'name',
          sourceText: p.name,
          targetLanguage,
        }),
      }))
    );
  } catch (err) {
    if (err instanceof TranslationUnavailableError) {
      // Traduction indisponible : on renvoie quand même les lieux dans leur langue d'origine
      // plutôt que de bloquer toute la fonctionnalité de suggestion.
      console.error('[get-place-suggestions] traduction indisponible:', err.message);
      translatedPlaces = places;
    } else {
      throw err;
    }
  }

  return res.status(200).json({ ok: true, places: translatedPlaces });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
