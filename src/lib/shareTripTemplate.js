// Partage un voyage comme "modèles" de planning (planning-modèle communautaire,
// branche planModel) — appelle api/share-trip-templates.js. Partagé entre le
// bouton de l'en-tête (TripEditorHeader) et la popup de fin de voyage
// (EndTripSharePrompt), pour ne pas dupliquer le calcul du code alpha-2 par
// destination (nécessaire au géocodage des villes, voir api/_lib/cityGeocode.js).
import { callModeration } from './moderation';
import { COUNTRIES } from '../data/index';
import { countryAlpha2FromEmoji } from './planningUtils';

export async function shareTripAsTemplates(tripId, destinations) {
  const destinationAlpha2 = Object.fromEntries(
    (destinations || []).map((d) => [d.id, countryAlpha2FromEmoji(COUNTRIES[d.country_code]?.emoji)])
  );
  return callModeration('share-trip-templates', { tripId, destinationAlpha2 });
}
