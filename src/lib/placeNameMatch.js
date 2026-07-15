// Comparaison floue "nom d'activité ↔ nom de lieu candidat", partagée entre
// la résolution photo Wikipédia (useActivityWikiImages) et la résolution
// photo communautaire (useActivityCommunityImages) — même besoin dans les
// deux cas : décider si deux libellés désignent le même lieu physique.

const STOPWORDS = new Set(['the', 'les', 'des', 'and', 'del', 'las', 'los', 'der', 'die', 'das', 'van', 'von']);

export function normalizeName(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

export function tokensOf(s) {
  return normalizeName(s)
    .split(' ')
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w));
}

// Score de correspondance nom d'activité ↔ titre candidat, dans [0, 1] — voir
// useActivityWikiImages.js pour le détail du raisonnement (égalité exacte
// prioritaire, puis coefficient de Dice sur les tokens, bonus d'inclusion).
export function matchScore(activityName, title) {
  const na = normalizeName(activityName);
  const nt = normalizeName(title);
  if (!na || !nt) return 0;
  const ta = tokensOf(activityName);
  const tt = tokensOf(title);
  if (na === nt || (ta.length && ta.join(' ') === tt.join(' '))) return 1;
  const common = ta.filter((w) => tt.includes(w)).length;
  const dice = ta.length + tt.length ? (2 * common) / (ta.length + tt.length) : 0;
  const included = na.includes(nt) || nt.includes(na);
  return Math.min(0.95, Math.max(dice + (na.includes(nt) ? 0.15 : 0), included ? 0.6 : 0));
}
