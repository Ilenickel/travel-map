// Choisit, parmi plusieurs résultats Geoapify candidats pour un lieu
// recherché, celui qui correspond réellement — pour valider un résultat de
// géocodage avant de l'accepter (voir pickBestPlaceMatch).
//
// La comparaison lexicale seule (isSimilar, Levenshtein) échoue sur des
// reformulations pourtant évidentes pour un humain : "Base de Panda" vs
// "Centre de Panda", "Yu Yuan" vs "Jardin Yu Yuan" — la substitution d'un mot
// entier ("centre"/"base") fait chuter le ratio de similarité sous le seuil,
// même si c'est manifestement le même lieu. Élargir bêtement ce seuil
// réintroduirait le risque inverse (rapprocher deux lieux réels différents
// mais proches par hasard, ex. "Grand Palace" à Bangkok / "Grand Place" à
// Bruxelles).
import { isSimilar } from './similarity.js';
import { checkSemanticDuplicate, pickPlaceAmongCandidates } from './moderation.js';

// Préfixes de catégories Geoapify considérés comme "site touristique" : à
// nom égal, un site de ce type doit être préféré à un commerce homonyme
// (ex. "Ground Zero" doit matcher le mémorial du 11-Septembre — catégorie
// tourism.sights.memorial — plutôt que "Ground Zero Museum Workshop", un
// atelier photo à Chelsea dont le nom contient aussi "Ground Zero").
const TOURISTY_CATEGORY_PREFIXES = ['tourism', 'heritage', 'natural', 'religion', 'building.historic'];

function isTouristy(candidate) {
  return !!candidate.category && TOURISTY_CATEGORY_PREFIXES.some((p) => candidate.category.startsWith(p));
}

/**
 * Choisit, parmi plusieurs résultats Geoapify candidats pour un même lieu
 * recherché, celui qui correspond réellement — plutôt que de se fier
 * aveuglément au premier résultat (qui peut être un homonyme sans rapport,
 * mieux classé par Geoapify pour des raisons de popularité/proximité).
 *
 * Cas réel ayant motivé cette fonction : chercher "Ground Zero" renvoyait en
 * 1re position "Ground Zero Museum Workshop" (un atelier photo à Chelsea,
 * New York — nom lexicalement collant), et seulement en 2e position le vrai
 * lieu, "National September 11 Memorial & Museum" (catégorie
 * tourism.sights.memorial), dont le nom ne matche PAS lexicalement "Ground
 * Zero". Se fier au seul 1er résultat, ou même au seul match lexical,
 * acceptait donc systématiquement le mauvais lieu — et checkSemanticDuplicate
 * (conçu pour l'équivalence de traduction, pas pour les surnoms) s'est
 * révélé, testé en réel, tout aussi sujet à se faire piéger par la
 * ressemblance textuelle. D'où pickPlaceAmongCandidates, un prompt IA dédié
 * qui reçoit le nom ET la catégorie de chaque candidat.
 *
 * 1 seul candidat nommé : comportement de l'ancien confirmPlaceMatch
 * (lexical, puis IA de secours sur ce candidat unique).
 * Plusieurs candidats :
 *   a) au moins un match lexical de catégorie touristique → gagne
 *      directement sans appel IA (signal fort, cas majoritaire) ;
 *   b) un seul match lexical, non touristique, et AUCUN autre candidat
 *      touristique au nom différent en lice → accepté directement, sans IA
 *      (cas normal d'un restaurant/hôtel/commerce ajouté par un
 *      utilisateur : rien n'indique qu'il s'agirait du surnom d'un autre
 *      lieu, il ne faut pas payer un appel IA pour rien) ;
 *   c) sinon (ambiguïté réelle : plusieurs matchs lexicaux non tranchés
 *      par la catégorie, OU un concurrent touristique au nom différent qui
 *      pourrait être le "vrai" lieu derrière un surnom) → un seul appel IA
 *      (pickPlaceAmongCandidates) sur la liste complète (noms + catégories)
 *      pour trancher — peut donc choisir un candidat même sans similarité
 *      lexicale (le cas "Ground Zero" ci-dessus) ;
 *   d) si l'IA ne tranche pas, on retombe sur le meilleur match lexical
 *      (ordre de pertinence Geoapify) plutôt que d'abandonner — jamais pire
 *      que l'ancien code, qui acceptait toujours aveuglément le 1er résultat.
 *
 * @returns le candidat retenu, ou null si aucun ne correspond.
 */
export async function pickBestPlaceMatch(searchName, candidates, { cityName, countryName } = {}) {
  const named = (candidates || []).filter((c) => c.name);
  if (!named.length) return null;

  if (named.length === 1) {
    const c = named[0];
    if (isSimilar(c.name, searchName)) return c;
    const sem = await checkSemanticDuplicate(searchName, [c.name]);
    return sem.duplicate ? c : null;
  }

  const lexicalMatches = named.filter((c) => isSimilar(c.name, searchName));

  const touristyLexical = lexicalMatches.filter(isTouristy);
  if (touristyLexical.length) return touristyLexical[0];

  // Un concurrent touristique au nom DIFFÉRENT existe : le nom recherché
  // pourrait être le surnom du vrai lieu plutôt que le commerce homonyme
  // trouvé par similarité lexicale seule (cas "Ground Zero") → l'IA arbitre.
  const competingTouristy = named.filter((c) => isTouristy(c) && !lexicalMatches.includes(c));
  if (lexicalMatches.length === 1 && !competingTouristy.length) return lexicalMatches[0];

  const idx = await pickPlaceAmongCandidates({ placeName: searchName, cityName, countryName, candidates: named });
  if (idx != null) return named[idx];

  return lexicalMatches[0] || null;
}
