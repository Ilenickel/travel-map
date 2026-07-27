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
