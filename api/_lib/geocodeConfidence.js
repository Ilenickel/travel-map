// Confirme si deux noms désignent le même lieu touristique, pour valider un
// résultat de géocodage (Geoapify) avant de l'accepter.
//
// La comparaison lexicale seule (isSimilar, Levenshtein) échoue sur des
// reformulations pourtant évidentes pour un humain : "Base de Panda" vs
// "Centre de Panda", "Yu Yuan" vs "Jardin Yu Yuan" — la substitution d'un mot
// entier ("centre"/"base") fait chuter le ratio de similarité sous le seuil,
// même si c'est manifestement le même lieu. Élargir bêtement ce seuil
// réintroduirait le risque inverse (rapprocher deux lieux réels différents
// mais proches par hasard, ex. "Grand Palace" à Bangkok / "Grand Place" à
// Bruxelles). Le repli IA (même fonction que la détection de doublons de
// destinations/lieux) tranche correctement les deux cas grâce à sa
// connaissance du monde, sans le coût d'un appel IA pour les correspondances
// déjà évidentes lexicalement.
import { isSimilar } from './similarity.js';
import { checkSemanticDuplicate } from './moderation.js';

export async function confirmPlaceMatch(nameA, nameB) {
  if (isSimilar(nameA, nameB)) return true;
  const sem = await checkSemanticDuplicate(nameA, [nameB]);
  return !!sem.duplicate;
}
