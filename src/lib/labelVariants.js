// Un libellé éditorial (mustSee, écrit en dur dans src/data/<pays>.js) est
// parfois composé pour la lecture humaine ("Pudong — Shanghai Tower", "Old
// town (Yu Garden)") plutôt qu'un nom exact ou géocodable tel quel. Extrait
// des variantes candidates (libellé complet, segment après un tiret, contenu
// entre parenthèses) pour donner plusieurs chances à une comparaison de nom
// (géocodage, détection de doublon) de reconnaître le lieu réel désigné.
export function extractLabelVariants(rawName) {
  const candidates = [rawName];
  const dashParts = rawName.split(/[—–-]/).map((s) => s.trim()).filter(Boolean);
  if (dashParts.length > 1) candidates.push(dashParts[dashParts.length - 1]);
  const parenMatch = rawName.match(/\(([^)]+)\)/);
  if (parenMatch) candidates.push(parenMatch[1].trim());
  return candidates;
}
