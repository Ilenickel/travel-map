// Génère les lignes SQL du seed depuis une liste de candidats.
//
// Pour chaque candidat : une requête Geoapify (même endpoint que
// api/restaurant-search.js) qui fournit d'un coup le place_id, les coordonnées
// et l'adresse. La ligne n'est émise que si un établissement de restauration
// correspond au nom demandé — sinon le candidat est signalé et ignoré, jamais
// inventé.
//
//   node emit.mjs candidats.json >> lignes.sql
//
// Format d'un candidat :
//   { cc, dest, q, name?, latin?, tags: [], budget: 1|2|3, lat, lng }
//   `q`     : texte cherché chez Geoapify
//   `name`  : nom à écrire (défaut : celui renvoyé par Geoapify)
//   `latin` : forme latine si le nom d'origine n'est pas en alphabet latin
import fs from 'fs';

const ROOT = 'C:/Users/damie/travel-map/';
const KEY = (fs.readFileSync(ROOT + '.env', 'utf8').match(/^VITE_GEOAPIFY_API_KEY=(.+)$/m) || [])[1].trim();
const { normalizeName, levenshtein } = await import(new URL('file:///' + ROOT + 'api/_lib/similarity.js').href);

const cands = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const sq = (s) => s.replace(/'/g, "''");

const out = [];
const misses = [];
// isSimilar() ne compare que [a-z0-9] : pour le japonais, le chinois ou le
// coréen il ne reste rien, et tout candidat serait rejeté. D'où ce repli sur une
// comparaison brute normalisée.
const rawNorm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, '');
// ATTENTION : ne pas utiliser isSimilar() ici. Elle est écrite pour DÉTECTER
// des doublons — elle privilégie le rappel et signale au moindre doute. Ici on
// ATTRIBUE une identité (un place_id) : c'est la précision qui compte.
// Ses deux règles trop larges, constatées le 2026-07-31 :
//   - seuil de Levenshtein à 0,75 : « Barba » (Dubrovnik) apparié à « Barka »,
//     deux restaurants distincts ;
//   - inclusion de chaîne : « Bon Bon » (2 étoiles) apparié à « BON ».
// D'où ce critère resserré, et l'affichage systématique du nom retenu.
const matches = (cand, q) => {
  const a = rawNorm(cand), b = rawNorm(q);
  if (!a || !b) return false;
  if (a === b) return true;
  // Inclusion acceptée seulement si le plus court couvre l'essentiel du plus
  // long : « Ristorante La Caravella » / « La Caravella » oui, « BON » non.
  const short = a.length < b.length ? a : b, long = a.length < b.length ? b : a;
  if (long.includes(short) && short.length / long.length >= 0.6) return true;
  const na = normalizeName(String(cand || '')), nb = normalizeName(q);
  if (!na || !nb) return false;
  const max = Math.max(na.length, nb.length);
  return max > 0 && 1 - levenshtein(na, nb) / max >= 0.88;
};
// Un même établissement peut répondre à deux requêtes voisines (« Jay Fai » et
// « Raan Jay Fai ») : on ne l'émet qu'une fois.
const seen = new Set();

for (const c of cands) {
  const params = new URLSearchParams({
    text: c.q,
    filter: `circle:${c.lng},${c.lat},20000`,
    bias: `proximity:${c.lng},${c.lat}`,
    limit: '10',
    apiKey: KEY,
  });
  let data = null;
  try {
    const res = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?${params}`, { signal: AbortSignal.timeout(10000) });
    if (res.ok) data = await res.json();
  } catch { /* traité comme absence */ }

  let best = null;
  for (const f of data?.features || []) {
    const p = f.properties || {};
    if (!p.place_id || p.lat == null || p.lon == null) continue;
    if (p.result_type !== 'amenity') continue;
    const cat = typeof p.category === 'string' ? p.category : null;
    if (cat && !cat.startsWith('catering.') && !cat.startsWith('commercial.food')) continue;
    const cand = p.name || p.address_line1;
    if (!matches(cand, c.q)) continue;
    best = { id: p.place_id, name: cand, lat: p.lat, lng: p.lon, addr: p.address_line2 || p.formatted || null };
    break;
  }

  if (!best) { misses.push(`${c.cc}/${c.dest} ${c.q}`); await sleep(260); continue; }
  if (seen.has(best.id)) { await sleep(260); continue; }
  seen.add(best.id);

  const name = c.name || best.name;
  const latin = c.latin ? `'${sq(c.latin)}'` : 'null';
  const tags = c.tags.map((t) => `'${t}'`).join(', ');
  if (rawNorm(name) !== rawNorm(c.q)) console.error(`  nom retenu ≠ requête : "${c.q}" -> "${best.name}"`);
  out.push(`    ('${c.cc}', '${c.dest}', '${sq(name)}', ${latin}, array[${tags}]::text[], ${c.budget}, '${sq(best.addr || '')}', ${best.lat}, ${best.lng}, '${best.id}'),`);
  await sleep(260);
}

console.log(out.join('\n'));
if (misses.length) console.error('\nSANS CORRESPONDANCE (non émis) :\n  ' + misses.join('\n  '));
