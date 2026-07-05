// Détection de doublons de lieux (places) au sein d'une même destination, avec
// repli sur l'IA pour les cas qu'une simple comparaison lexicale ne peut pas
// voir (traduction : "Luohon Temple" / "Temple Luohon"). Utilisé par
// api/add-place.js (ajout d'un lieu unique) et api/moderate-destination.js
// (branche fusion de destination).
import { isSimilar } from './similarity.js';
import { checkSemanticDuplicate } from './moderation.js';

/**
 * @param {string} newName
 * @param {{id: string|null, name: string, matchName?: string}[]} existingPlaces - lieux déjà présents dans
 *        la MÊME destination. `name` est le texte comparé (peut être une variante extraite d'un libellé
 *        éditorial composé, ex. "Yu Garden" extrait de "Old town (Yu Garden)") ; `matchName` (optionnel)
 *        est le libellé complet à afficher à l'utilisateur si différent de `name`. `id` vaut `null` pour
 *        un lieu éditorial figé (pas de ligne DB, donc pas de vote possible dessus).
 * @returns {Promise<{duplicate: boolean, matchedName?: string, matchedPlaceId?: string|null}>}
 */
export async function findDuplicatePlace(newName, existingPlaces) {
  const lexical = existingPlaces.find((p) => isSimilar(p.name, newName));
  if (lexical) return { duplicate: true, matchedName: lexical.matchName ?? lexical.name, matchedPlaceId: lexical.id ?? null };
  if (!existingPlaces.length) return { duplicate: false };

  // Lexical ne suffit pas pour une traduction ou une reformulation : repli sur
  // l'IA (même fonction déjà utilisée pour les noms de destination, générique,
  // réutilisable telle quelle).
  const sem = await checkSemanticDuplicate(newName, existingPlaces.map((p) => p.name));
  if (!sem.duplicate) return { duplicate: false };
  const matched = existingPlaces.find((p) => p.name === sem.matchedName);
  return { duplicate: true, matchedName: matched?.matchName ?? sem.matchedName, matchedPlaceId: matched?.id ?? null };
}

/**
 * Enregistre un upvote automatique pour le soumissionnaire d'un lieu détecté
 * en double, sur le lieu existant — proposer un lieu vaut implicitement une
 * recommandation. Même contrat que le vote client (PlacesList.jsx handleVote) :
 * upsert direct dans place_votes, c'est cette table que PlacesList compte en
 * direct pour l'affichage.
 */
export async function registerAutoVote(admin, placeType, placeId, userId) {
  if (!placeId) return;
  await admin.from('place_votes').upsert(
    { place_id: placeId, user_id: userId, place_type: placeType, vote_type: 'up' },
    { onConflict: 'user_id,place_id,place_type' }
  );
}
