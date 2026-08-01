// Backfill des geoapify_place_id manquants du seed restaurants.
//
// Utilise EXACTEMENT l'endpoint de api/restaurant-search.js
// (/v1/geocode/autocomplete) : le place_id doit être identique à celui que la
// recherche de contribution renverra, sinon la détection de doublons de
// api/places.js:309 ne reconnaîtra pas la ligne éditoriale.
//
// Différence assumée avec l'app : le cercle de recherche est centré sur les
// coordonnées CONNUES du restaurant (rayon serré) plutôt que sur le centre-ville
// avec 12 km. Le place_id renvoyé est une propriété de l'objet, pas de la
// requête — le résultat est donc le même, mais la correspondance est bien plus
// sûre.
//
// Cache disque : une ligne déjà résolue n'est jamais redemandée.
import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/damie/travel-map/';
const SQL = ROOT + 'supabase/seed_restaurants.sql';
const CACHE = path.join(import.meta.dirname, 'geoapify-cache.json');

const KEY = (fs.readFileSync(ROOT + '.env', 'utf8').match(/^VITE_GEOAPIFY_API_KEY=(.+)$/m) || [])[1]?.trim();
if (!KEY) { console.error('Clé Geoapify introuvable dans .env'); process.exit(1); }

const LIMIT = Number(process.argv[2] || 20);
const RADIUS_M = 400;      // resserré : on connaît déjà la position
const DELAY_MS = 260;      // ~4 req/s, sous la limite du palier gratuit

const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};

// ── Parsing du seed ────────────────────────────────────────────────────────
const lines = fs.readFileSync(SQL, 'utf8').split(/\r?\n/);
const rows = [];
lines.forEach((line, i) => {
  const m = line.match(/^\s*\('([A-Z]{3})', '(\d+)', (.*?)\),?\s*$/);
  if (!m) return;
  if (!/, null\),?\s*$/.test(line)) return;           // a déjà un place_id
  const name = (line.match(/^\s*\('[A-Z]{3}', '\d+', '((?:[^']|'')*)'/) || [])[1];
  const after = line.slice(line.indexOf("array["));
  const latin = (line.match(/^\s*\('[A-Z]{3}', '\d+', '(?:[^']|'')*', (?:null|'((?:[^']|'')*)')/) || [])[1] || null;
  const coords = after.match(/, (-?\d+\.?\d*), (-?\d+\.?\d*), null\),?\s*$/);
  if (!name || !coords) return;
  rows.push({
    line: i + 1,
    name: name.replace(/''/g, "'"),
    latin: latin ? latin.replace(/''/g, "'") : null,
    lat: parseFloat(coords[1]),
    lng: parseFloat(coords[2]),
  });
});

const todo = rows.filter((r) => !(String(r.line) in cache)).slice(0, LIMIT);
console.log(`${rows.length} lignes sans place_id | ${Object.keys(cache).length} en cache | ${todo.length} à interroger`);

// ── Correspondance ─────────────────────────────────────────────────────────
const norm = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af]+/g, '');

// On réutilise isSimilar() de api/_lib/similarity.js : c'est la fonction dont
// l'app se sert elle-même pour juger que deux noms désignent le même
// établissement. Appliquer la même règle ici évite d'écrire un place_id sur une
// ligne que l'app considérerait, elle, comme un autre restaurant.
// Motif du passage au flou : Geoapify orthographie « Ceccioni's » ce que le
// seed nomme « Cecconi's » (12 m d'écart, même établissement) — une simple
// inclusion de chaîne rejetait le cas.
const { isSimilar } = await import(new URL('file:///' + ROOT + 'api/_lib/similarity.js').href);

function nameMatches(candidate, row) {
  if (!candidate) return false;
  const c = norm(candidate);
  for (const want of [row.name, row.latin].filter(Boolean)) {
    // isSimilar() raisonne sur [a-z0-9] : pour le japonais ou le coréen il ne
    // reste rien à comparer, d'où le repli sur la normalisation brute.
    if (isSimilar(candidate, want)) return true;
    const w = norm(want);
    if (w && c && (c === w || c.includes(w) || w.includes(c))) return true;
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

let used = 0, hit = 0, weak = 0, miss = 0;

async function query(text, row) {
  const params = new URLSearchParams({
    text,
    filter: `circle:${row.lng},${row.lat},${RADIUS_M}`,
    bias: `proximity:${row.lng},${row.lat}`,
    limit: '20',
    apiKey: KEY,
  });
  try {
    const res = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?${params}`, {
      signal: AbortSignal.timeout(10000),
    });
    used++;
    if (res.ok) return await res.json();
    console.log(`  HTTP ${res.status} sur ${text}`);
  } catch (e) {
    console.log(`  échec réseau sur ${text} : ${e.message}`);
  }
  return null;
}

// `relaxed` : la requête a été faite avec le nom d'ORIGINAL exact. Quand
// Geoapify le retrouve dans son index mais l'expose sous une translittération
// que rien ne rattache lexicalement à notre graphie (황남빵 → « Hwang nam
// bread »), c'est sa propre correspondance textuelle qui fait foi. On l'accepte
// alors, mais à 80 m au lieu de 350, et la ligne est marquée pour relecture.
function pick(data, row, relaxed) {
  let best = null;
  for (const f of data?.features || []) {
    const p = f.properties || {};
    if (!p.place_id || p.lat == null || p.lon == null) continue;
    if (p.result_type !== 'amenity') continue;
    const cat = typeof p.category === 'string' ? p.category : null;
    if (cat && !cat.startsWith('catering.') && !cat.startsWith('commercial.food_and_drink')) continue;
    const cand = p.name || p.address_line1;
    const d = hav(row.lat, row.lng, p.lat, p.lon);
    const named = nameMatches(cand, row);
    if (!named && !(relaxed && d <= 80)) continue;
    if (d > 350) continue;
    if (!best || d < best.d) {
      best = { d, id: p.place_id, name: cand, addr: p.address_line2 || p.formatted || null, weak: !named };
    }
  }
  return best;
}

for (const row of todo) {
  const latin = row.latin && row.latin !== row.name ? row.latin : null;
  let best = null, usedQuery = null;

  if (latin) {
    usedQuery = latin;
    best = pick(await query(latin, row), row, false);
    if (!best) await sleep(DELAY_MS);
  }
  if (!best) {
    usedQuery = row.name;
    best = pick(await query(row.name, row), row, Boolean(latin) || /[^\P{L}\p{Script=Latin}]/u.test(row.name));
  }

  if (best) {
    cache[row.line] = { id: best.id, name: best.name, addr: best.addr, d: Math.round(best.d), query: usedQuery, weak: best.weak };
    if (best.weak) weak++; else hit++;
    console.log(`  ${best.weak ? 'FLOU' : 'OK  '} L${row.line} ${row.name} -> ${best.name} (${Math.round(best.d)} m)`);
  } else {
    cache[row.line] = null;
    miss++;
    console.log(`  RIEN L${row.line} ${row.name}`);
  }
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));
  await sleep(DELAY_MS);
}

console.log(`\nRequêtes consommées : ${used} | sûrs : ${hit} | à relire : ${weak} | sans correspondance : ${miss}`);
