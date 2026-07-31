// Un libellé éditorial (mustSee, écrit en dur dans src/data/<pays>.js) est
// parfois composé pour la lecture humaine ("Pudong — Shanghai Tower", "Old
// town (Yu Garden)") plutôt qu'un nom exact ou géocodable tel quel. Extrait
// des variantes candidates (segment après un tiret, contenu entre
// parenthèses) pour donner plusieurs chances à une comparaison de nom
// (géocodage, détection de doublon) de reconnaître le lieu réel désigné.
//
// Un segment n'est retenu que s'il commence par une majuscule — un segment qui
// commence par une minuscule ("dernière demeure de Léonard de Vinci", "ski de
// poudreuse", "10 000 torii") est presque toujours la partie DESCRIPTIVE du
// libellé composé, jamais un nom de lieu réel. Vérifié sur les ~1500 libellés
// composés réels du projet : cette règle sépare proprement les deux cas, sans
// faux négatif repéré sur l'échantillon. Sans ce filtre, ces fragments
// descriptifs étaient eux aussi essayés comme candidats de géocodage — ex.
// "Clos Lucé — dernière demeure de Léonard de Vinci" pouvait aboutir sur un
// géocodage de "dernière demeure de Léonard de Vinci" plutôt que "Clos Lucé"
// — et comme candidats de détection de doublon, où un fragment générique
// ("ski de poudreuse") matchait par inclusion un lieu communautaire sans
// rapport nommé juste "Ski" (voir isSimilar dans similarity.js).
function looksLikePlaceName(s) {
  return /^\p{Lu}/u.test(s);
}

export function extractLabelVariants(rawName) {
  // Ne découpe que les tirets typographiques utilisés comme séparateurs.
  // Les traits d'union de Saint-Émilion ou Baux-de-Provence font partie du nom.
  const dashParts = rawName.split(/\s+[—–-]\s+/).map((s) => s.trim()).filter(Boolean);
  const parenMatch = rawName.match(/\(([^)]+)\)/);

  const segments = [];
  if (dashParts.length > 1) segments.push(...dashParts);
  if (parenMatch) segments.push(parenMatch[1].trim());

  // Le libellé complet reste en tout dernier recours (match exact tel quel
  // possible, mais rarement géocodable/comparable en l'état vu sa longueur).
  const strongSegments = segments.filter(looksLikePlaceName);
  return [...new Set([...strongSegments, rawName])];
}

// Noms de VILLE candidats pour un libellé de destination éditoriale.
//
// Les destinations statiques (src/data/<pays>.js) portent des libellés pensés
// pour la lecture, pas pour un géocodeur : « Hiroshima et Miyajima », « Lyon et
// gastronomie », « Kyoto & Nara ». Géocodés tels quels avec `type=city`, ils ne
// résolvent rien — et tout ce qui a besoin d'un centre-ville échoue en
// silence (constaté le 2026-07-30 : la recherche d'un restaurant à ajouter ne
// renvoyait aucun résultat sur ces destinations).
//
// D'où une LISTE ordonnée de candidats, à essayer dans l'ordre jusqu'au premier
// qui résout :
//   1. le libellé complet — il reste le plus précis, et beaucoup de libellés
//      composés désignent bien une entité géocodable telle quelle ;
//   2. les variantes de libellé habituelles (segment avant/après un tiret,
//      contenu entre parenthèses) ;
//   3. les segments d'une énumération (« et », « and », « y », « und », « e »,
//      « & », « + », « / », « , ») — le premier segment d'abord, qui est la
//      ville principale dans tous les libellés du projet.
//
// Comme pour extractLabelVariants, un segment n'est retenu que s'il commence
// par une majuscule : ça écarte la partie thématique (« gastronomie ») sans
// avoir à lister les thèmes possibles.
//
// Le mot « et » n'est découpé qu'ENTOURÉ D'ESPACES : les traits d'union de
// Saint-Pierre-et-Miquelon ou Bosnie-et-Herzégovine font partie du nom.
const ENUMERATION_SEPARATOR = /\s+(?:et|and|y|und|e|&|\+)\s+|\s*[/|,]\s*/iu;

export function extractCityNameCandidates(rawName) {
  const out = [];
  const push = (s) => {
    const v = (s || '').trim();
    if (v && !out.includes(v)) out.push(v);
  };

  push(rawName);
  // extractLabelVariants place déjà le libellé complet en dernier : on le
  // repasse ici sans conséquence (dédoublonné par push).
  for (const variant of extractLabelVariants(rawName)) push(variant);

  for (const variant of [rawName, ...extractLabelVariants(rawName)]) {
    const parts = variant.split(ENUMERATION_SEPARATOR).map((s) => s.trim()).filter(Boolean);
    if (parts.length < 2) continue;
    for (const part of parts) {
      if (looksLikePlaceName(part)) push(part);
    }
  }

  return out;
}
