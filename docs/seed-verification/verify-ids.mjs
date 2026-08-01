// Vérifie que chaque geoapify_place_id du seed désigne bien l'établissement
// écrit sur la ligne, au bon endroit.
//
// C'est le contrôle qui lie les trois informations entre elles :
//   - l'identifiant existe toujours chez Geoapify (donc la recherche de
//     contribution le retrouvera, et le dédoublonnage fonctionnera) ;
//   - le nom qu'il renvoie correspond à celui du seed ;
//   - ses coordonnées correspondent à celles stockées, donc le point affiché
//     sur la carte est bien celui de ce restaurant.
//
// Cache disque : une ligne déjà vérifiée n'est jamais redemandée.
import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/damie/travel-map/';
const SQL = ROOT + 'supabase/seed_restaurants.sql';
const CACHE = path.join(import.meta.dirname, 'verify-cache.json');
const KEY = (fs.readFileSync(ROOT + '.env', 'utf8').match(/^VITE_GEOAPIFY_API_KEY=(.+)$/m) || [])[1].trim();

const LIMIT = Number(process.argv[2] || 200);
const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};

const rows = [];
fs.readFileSync(SQL, 'utf8').split(/\r?\n/).forEach((line, i) => {
  const m = line.match(/^\s*\('([A-Z]{3})', '(\d+)', '((?:[^']|'')*)', (null|'(?:[^']|'')*'), array\[[^\]]*\]::text\[\], \d+, '(?:[^']|'')*', (-?\d+\.?\d*), (-?\d+\.?\d*), '([^']+)'\),?\s*$/);
  if (!m) return;
  rows.push({
    line: i + 1, cc: m[1], dest: m[2],
    name: m[3].replace(/''/g, "'"),
    latin: m[4] === 'null' ? null : m[4].slice(1, -1).replace(/''/g, "'"),
    lat: parseFloat(m[5]), lng: parseFloat(m[6]), gid: m[7],
  });
});

const todo = rows.filter((r) => !(String(r.line) in cache)).slice(0, LIMIT);
console.log(`${rows.length} lignes avec identifiant | ${Object.keys(cache).length} déjà vérifiées | ${todo.length} à contrôler`);

const norm = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9\u3000-\u9fff\uac00-\ud7af]/g, '');
const hav = (a, b, c, d) => {
  const R = 6371000, tR = (x) => x * Math.PI / 180;
  const dLat = tR(c - a), dLng = tR(d - b);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(tR(a)) * Math.cos(tR(c)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let done = 0;
for (const r of todo) {
  let p = null, status = 0;
  try {
    const res = await fetch(`https://api.geoapify.com/v2/place-details?id=${encodeURIComponent(r.gid)}&apiKey=${KEY}`, { signal: AbortSignal.timeout(12000) });
    status = res.status;
    if (res.ok) p = ((await res.json()).features || [])[0]?.properties || null;
  } catch { /* consigné comme échec */ }

  if (!p) {
    cache[r.line] = { ok: false, reason: status === 200 ? 'aucun résultat' : `HTTP ${status}` };
  } else {
    const a = norm(p.name), b = norm(r.latin || r.name), c = norm(r.name);
    const nameOk = Boolean(a && (a === b || a === c || a.includes(b) || b.includes(a) || a.includes(c) || c.includes(a)));
    const dist = Math.round(hav(r.lat, r.lng, p.lat, p.lon));
    const cats = Array.isArray(p.categories) ? p.categories : [];
    cache[r.line] = {
      ok: nameOk && dist <= 120,
      geoName: p.name || null, dist, nameOk,
      food: cats.some((x) => String(x).startsWith('catering') || String(x).startsWith('commercial.food')),
      seedName: r.latin || r.name,
    };
  }
  done++;
  if (done % 25 === 0) { fs.writeFileSync(CACHE, JSON.stringify(cache)); console.log(`  ${done}/${todo.length}`); }
  await sleep(230);
}
fs.writeFileSync(CACHE, JSON.stringify(cache));

const all = Object.entries(cache);
const bad = all.filter(([, v]) => !v.ok);
console.log(`\nVérifiées : ${all.length} | conformes : ${all.length - bad.length} | à examiner : ${bad.length}`);
for (const [line, v] of bad.slice(0, 60)) {
  console.log(`  L${line} ${v.reason || `« ${v.seedName} » -> « ${v.geoName} » à ${v.dist} m${v.nameOk ? '' : ' [nom différent]'}`}`);
}
if (bad.length > 60) console.log(`  … et ${bad.length - 60} autres`);
const notFood = all.filter(([, v]) => v.ok && v.food === false);
if (notFood.length) console.log(`\nIdentifiants valides mais catégorie non alimentaire : ${notFood.length}`);
