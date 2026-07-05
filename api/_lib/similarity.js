// Similarité lexicale de noms (miroir de la logique client dans DestinationForm.jsx).
// Extrait de api/moderate-destination.js pour être réutilisé aussi par
// api/_lib/placeDuplicates.js (détection de doublons de lieux).
export function normalizeName(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/\p{Mn}/gu, '')
    .replace(/\b(le|la|les|l|de|du|des|un|une|the|a|an)\b\s*/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = i;
    for (let j = 1; j <= b.length; j++) {
      const next = a[i - 1] === b[j - 1] ? row[j - 1] : 1 + Math.min(prev, row[j], row[j - 1]);
      row[j - 1] = prev;
      prev = next;
    }
    row[b.length] = prev;
  }
  return row[b.length];
}

export function isSimilar(a, b) {
  const na = normalizeName(a);
  const nb = normalizeName(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;
  const maxLen = Math.max(na.length, nb.length);
  return maxLen > 0 && (1 - levenshtein(na, nb) / maxLen) >= 0.75;
}
