// Renvoie les lieux communautaires + statiques déjà connus pour la destination
// correspondant à une ville de planification, traduits dans la langue demandée.
// Voir api/_lib/placeSuggestions.js pour la logique de correspondance ville ↔ destination.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { findMatchingCommunityDestinations } from './_lib/placeSuggestions.js';
import { getTranslatedField, TranslationUnavailableError, SUPPORTED_TARGET_LANGUAGES } from './_lib/translation.js';

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
  const { authToken, cityName, countryCode, staticDestIds = [], targetLanguage = 'fr' } = body;

  if (!cityName || !countryCode || !SUPPORTED_TARGET_LANGUAGES.includes(targetLanguage)) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) {
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  const communityDestinationIds = await findMatchingCommunityDestinations(admin, cityName, countryCode);

  const places = [];

  if (communityDestinationIds.length) {
    const { data } = await admin
      .from('destination_places')
      .select('id, name, lat, lng')
      .in('destination_id', communityDestinationIds);
    for (const p of data || []) places.push({ id: p.id, type: 'community', name: p.name, lat: p.lat, lng: p.lng });
  }

  const cleanStaticDestIds = (Array.isArray(staticDestIds) ? staticDestIds : []).filter((id) => typeof id === 'string' && id);
  for (const staticDestId of cleanStaticDestIds) {
    const { data } = await admin
      .from('static_destination_places')
      .select('id, name, lat, lng')
      .eq('country_code', countryCode)
      .eq('static_dest_id', staticDestId);
    for (const p of data || []) places.push({ id: p.id, type: 'static', name: p.name, lat: p.lat, lng: p.lng });
  }

  let translatedPlaces;
  try {
    translatedPlaces = await Promise.all(
      places.map(async (p) => ({
        ...p,
        name: await getTranslatedField({
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
