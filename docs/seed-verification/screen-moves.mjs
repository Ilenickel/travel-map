// Détecteur de déménagements.
//
// La campagne sur le haut de gamme a montré que le défaut le plus fréquent
// n'est pas la fermeture mais le DÉMÉNAGEMENT : 5 cas contre 3 fermetures.
// Un restaurant qui déménage reste « ouvert » — invisible à la question posée —
// tout en plaçant un point faux sur la carte.
//
// Principe : on redemande à Geoapify « où est ce nom, autour de cette ville ? »
// et on compare le meilleur résultat homonyme à nos coordonnées stockées. Un
// écart important signale soit un déménagement, soit un mauvais appariement
// d'origine. Le résultat n'est PAS appliqué automatiquement : il produit une
// liste de candidats à vérifier sur le web.
//
// Différence avec verify-ids.mjs : celui-ci interroge par place_id, donc suit
// l'ANCIEN objet quand il en existe deux (cas Pujol). Ici on part du nom, ce
// qui fait remonter le nouveau.
import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/damie/travel-map/';
const SQL = ROOT + 'supabase/seed_restaurants.sql';
const CACHE = path.join(import.meta.dirname, 'moves-cache.json');
const KEY = (fs.readFileSync(ROOT + '.env', 'utf8').match(/^VITE_GEOAPIFY_API_KEY=(.+)$/m) || [])[1].trim();
const { normalizeName, levenshtein } = await import(new URL('file:///' + ROOT + 'api/_lib/similarity.js').href);

const LIMIT = Number(process.argv[2] || 100);
const TIERS = (process.argv[3] || '1,2').split(',');
const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};

const rows = [];
fs.readFileSync(SQL, 'utf8').split(/\r?\n/).forEach((line, i) => {
  const m = line.match(/^\s*\('([A-Z]{3})', '(\d+)', '((?:[^']|'')*)', (null|'(?:[^']|'')*'), array\[[^\]]*\]::text\[\], (\d), '(?:[^']|'')*', (-?\d+\.?\d*), (-?\d+\.?\d*), (null|'[^']*')\),?\s*$/);
  if (!m || !TIERS.includes(m[5])) return;
  rows.push({
    line: i + 1, cc: m[1], dest: m[2],
    name: m[3].replace(/''/g, "'"),
    latin: m[4] === 'null' ? null : m[4].slice(1, -1).replace(/''/g, "'"),
    lat: parseFloat(m[6]), lng: parseFloat(m[7]),
  });
});

const todo = rows.filter((r) => !(String(r.line) in cache)).slice(0, LIMIT);
console.log(`${rows.length} lignes en gamme ${TIERS.join('/')} | ${Object.keys(cache).length} déjà passées | ${todo.length} à screener`);

const rawNorm = (s) => String(s || '').toLowerCase().replace(/[\p{P}\p{S}\p{Z}]/gu, '');
const same = (a, b) => {
  const x = rawNorm(a), y = rawNorm(b);
  if (!x || !y) return false;
  if (x === y) return true;
  const short = x.length < y.length ? x : y, long = x.length < y.length ? y : x;
  if (long.includes(short) && short.length / long.length >= 0.7) return true;
  const na = normalizeName(String(a)), nb = normalizeName(String(b));
  if (!na || !nb) return false;
  return 1 - levenshtein(na, nb) / Math.max(na.length, nb.length) >= 0.85;
};
const hav = (a, b, c, d) => {
  const R = 6371000, tR = (x) => x * Math.PI / 180;
  const dLat = tR(c - a), dLng = tR(d - b);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(tR(a)) * Math.cos(tR(c)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let n = 0;
for (const r of todo) {
  const text = r.latin || r.name;
  const params = new URLSearchParams({
    text, filter: `circle:${r.lng},${r.lat},15000`,
    bias: `proximity:${r.lng},${r.lat}`, limit: '20', apiKey: KEY,
  });
  let data = null;
  try {
    const res = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?${params}`, { signal: AbortSignal.timeout(10000) });
    if (res.ok) data = await res.json();
  } catch { /* absence traitée plus bas */ }

  const hits = [];
  for (const f of data?.features || []) {
    const p = f.properties || {};
    if (p.result_type !== 'amenity' || p.lat == null) continue;
    const cat = typeof p.category === 'string' ? p.category : null;
    if (cat && !cat.startsWith('catering.') && !cat.startsWith('commercial.food')) continue;
    const cand = p.name || p.address_line1;
    if (!same(cand, text) && !same(cand, r.name)) continue;
    hits.push({ name: cand, d: Math.round(hav(r.lat, r.lng, p.lat, p.lon)), lat: p.lat, lng: p.lon, addr: p.address_line2 || null });
  }
  hits.sort((a, b) => a.d - b.d);

  cache[r.line] = hits.length
    ? { ok: hits[0].d <= 300, nearest: hits[0], count: hits.length, name: r.name, cc: r.cc, dest: r.dest }
    : { ok: null, name: r.name, cc: r.cc, dest: r.dest };   // absent de l'index

  n++;
  if (n % 25 === 0) { fs.writeFileSync(CACHE, JSON.stringify(cache)); console.log(`  ${n}/${todo.length}`); }
  await sleep(230);
}
fs.writeFileSync(CACHE, JSON.stringify(cache));

const all = Object.values(cache);
const moved = Object.entries(cache).filter(([, v]) => v.ok === false);
console.log(`\nPassées : ${all.length} | cohérentes : ${all.filter((v) => v.ok === true).length} | absentes de l'index : ${all.filter((v) => v.ok === null).length}`);
console.log(`\nÉCART > 300 m — à vérifier (${moved.length}) :`);
for (const [line, v] of moved.slice(0, 50)) {
  console.log(`  L${line} ${v.cc}/${v.dest} « ${v.name} » -> homonyme à ${v.nearest.d} m : ${v.nearest.name} | ${v.nearest.addr || ''}`);
}
