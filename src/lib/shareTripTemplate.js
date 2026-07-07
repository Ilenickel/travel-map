// Partage un voyage comme "modèles" de planning (planning-modèle communautaire,
// branche planModel) — appelle api/trip-templates.js (action: 'share'; les 3
// endpoints du planning-modèle sont regroupés dans un seul fichier serverless
// pour rester sous la limite de 12 fonctions du plan Hobby de Vercel). Partagé
// entre le bouton de l'en-tête (TripEditorHeader) et la popup de fin de voyage
// (EndTripSharePrompt), pour ne pas dupliquer le calcul du code alpha-2 par
// destination (nécessaire au géocodage des villes, voir api/_lib/cityGeocode.js).
import { callModeration } from './moderation';
import { COUNTRIES } from '../data/index';
import { countryAlpha2FromEmoji } from './planningUtils';

export async function shareTripAsTemplates(tripId, destinations) {
  const destinationAlpha2 = Object.fromEntries(
    (destinations || []).map((d) => [d.id, countryAlpha2FromEmoji(COUNTRIES[d.country_code]?.emoji)])
  );
  return callModeration('trip-templates', { action: 'share', tripId, destinationAlpha2 });
}
