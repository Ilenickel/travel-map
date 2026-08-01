// Passe 2 du backfill : les lignes que la recherche par nom n'a pas trouvées.
//
// Retournement de la méthode : au lieu de demander « où est ce nom ? », on
// demande « quels établissements de restauration se trouvent à cet endroit ? »
// puis on compare les noms nous-mêmes. On utilise donc /v2/places avec un
// filtre `circle` + `categories`, JAMAIS son paramètre `name` — c'est ce
// dernier que api/restaurant-search.js documente comme non fiable sur plusieurs
// mots, pas l'endpoint lui-même.
//
// Intérêt : capture les établissements que Geoapify indexe sous une graphie
// sans rapport lexical avec la nôtre (translittérations, noms locaux), et ceux
// dont l'index textuel ne retourne rien.
import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/damie/travel-map/';
const CACHE = path.join(import.meta.dirname, 'geoapify-cache.json');
const KEY = (fs.readFileSync(ROOT + '.env', 'utf8').match(/^VITE_GEOAPIFY_API_KEY=(.+)$/m) || [])[1]?.trim();
const { isSimilar } = await import(new URL('file:///' + ROOT + 'api/_lib/similarity.js').href);

const SQL = ROOT + 'supabase/seed_restaurants.sql';
const LIMIT = Number(process.argv[2] || 100);
const RADIUS_M = Number(process.argv[3] || 170);
const DELAY_MS = 260;

const cache = JSON.parse(fs.readFileSync(CACHE, 'utf8'));

const lines = fs.readFileSync(SQL, 'utf8').split(/\r?\n/);
const rows = [];
lines.forEach((line, i) => {
  if (!/^\s*\('[A-Z]{3}', '\d+',/.test(line) || !/, null\),?\s*$/.test(line)) return;
  const name = (line.match(/^\s*\('[A-Z]{3}', '\d+', '((?:[^']|'')*)'/) || [])[1];
  const latin = (line.match(/^\s*\('[A-Z]{3}', '\d+', '(?:[^']|'')*', (?:null|'((?:[^']|'')*)')/) || [])[1] || null;
  const coords = line.match(/, (-?\d+\.?\d*), (-?\d+\.?\d*), null\),?\s*$/);
  if (!name || !coords) return;
  rows.push({ line: i + 1, name: name.replace(/''/g, "'"), latin: latin ? latin.replace(/''/g, "'") : null, lat: +coords[1], lng: +coords[2] });
});

const todo = rows.filter((r) => cache[String(r.line)] === null).slice(0, LIMIT);
console.log(`${todo.length} lignes sans correspondance à retenter`);

const norm = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '');
function nameMatches(candRaw, row) {
  // La Places API renvoie parfois un `name` non textuel : isSimilar() attend
  // deux chaînes, sans quoi il casse sur .toLowerCase().
  const cand = typeof candRaw === 'string' ? candRaw : (candRaw == null ? '' : String(candRaw));
  if (!cand) return false;
  for (const want of [row.name, row.latin].filter((v) => typeof v === 'string' && v)) {
    if (isSimilar(cand, want)) return true;
    const c = norm(cand), w = norm(want);
    if (c && w && (c === w || c.includes(w) || w.includes(c))) return true;
  }
  return false;
}
const hav = (a, b, c, d) => {
  const R = 6371000, toR = (x) => x * Math.PI / 180;
  const dLat = toR(c - a), dLng = toR(d - b);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a)) * Math.cos(toR(c)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let used = 0, hit = 0, miss = 0;
for (const row of todo) {
  const params = new URLSearchParams({
    categories: 'catering,commercial.food_and_drink',
    filter: `circle:${row.lng},${row.lat},${RADIUS_M}`,
    bias: `proximity:${row.lng},${row.lat}`,
    limit: '50',
    apiKey: KEY,
  });
  let data = null;
  try {
    const res = await fetch(`https://api.geoapify.com/v2/places?${params}`, { signal: AbortSignal.timeout(12000) });
    used++;
    if (res.ok) data = await res.json();
    else console.log(`  HTTP ${res.status} L${row.line}`);
  } catch (e) {
    console.log(`  réseau L${row.line} : ${e.message}`);
  }

  let best = null;
  for (const f of data?.features || []) {
    const p = f.properties || {};
    if (!p.place_id) continue;
    const lat = p.lat, lon = p.lon;
    if (lat == null || lon == null) continue;
    if (!nameMatches(p.name || p.address_line1, row)) continue;
    const d = hav(row.lat, row.lng, lat, lon);
    if (!best || d < best.d) best = { d, id: p.place_id, name: p.name || p.address_line1, addr: p.address_line2 || p.formatted || null };
  }

  if (best) {
    cache[row.line] = { id: best.id, name: best.name, addr: best.addr, d: Math.round(best.d), query: 'places/circle', weak: false };
    hit++;
    console.log(`  OK   L${row.line} ${row.name} -> ${best.name} (${Math.round(best.d)} m)`);
  } else {
    miss++;
  }
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));
  await sleep(DELAY_MS);
}
console.log(`\nRequêtes : ${used} | nouveaux trouvés : ${hit} | toujours rien : ${miss}`);
