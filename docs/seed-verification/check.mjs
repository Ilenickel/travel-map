import fs from 'fs';
import { pathToFileURL } from 'url';

const ROOT = 'C:/Users/damie/travel-map/';
// src/data/*.js utilise des imports sans extension (résolus par Vite) : on les
// lit en texte plutôt que de les importer.
const COUNTRIES = {};
for (const f of fs.readdirSync(ROOT + 'src/data')) {
  if (!f.endsWith('.js') || f === 'index.js') continue;
  const src = fs.readFileSync(ROOT + 'src/data/' + f, 'utf8');
  const code = (src.match(/^\s*code:\s*"([A-Z]{3})"/m) || [])[1];
  if (!code) continue;
  const destStart = src.indexOf('destinations: [');
  const body = destStart >= 0 ? src.slice(destStart) : '';
  const dests = [];
  const re = /^\s{6}id:\s*(\d+),\s*\n\s{6}name:\s*(?:"([^"]*)"|\{\s*fr:\s*"([^"]*)")/gm;
  let m;
  while ((m = re.exec(body))) dests.push({ id: Number(m[1]), name: m[2] || m[3] });
  COUNTRIES[code] = { code, file: f, destinations: dests };
}
const { PREDEFINED_CUISINE_TAGS } = await import(pathToFileURL(ROOT + 'src/lib/cuisineTags.js').href);
const PRE = new Set(PREDEFINED_CUISINE_TAGS.map(t => t.slug));

const sql = fs.readFileSync(ROOT + 'supabase/seed_restaurants.sql', 'utf8');
const lines = sql.split(/\r?\n/);

const rows = [];
lines.forEach((line, i) => {
  const m = line.match(/^\s*\('([A-Z]{3})',\s*'(\d+)',\s*(.*?)\),?\s*$/);
  if (!m) return;
  const [, cc, dest, rest] = m;
  const parts = [];
  let cur = '', depth = 0, inStr = false;
  for (let k = 0; k < rest.length; k++) {
    const ch = rest[k];
    if (inStr) {
      if (ch === "'" && rest[k+1] === "'") { cur += "''"; k++; continue; }
      if (ch === "'") { inStr = false; cur += ch; continue; }
      cur += ch; continue;
    }
    if (ch === "'") { inStr = true; cur += ch; continue; }
    if (ch === '[') depth++;
    if (ch === ']') depth--;
    if (ch === ',' && depth === 0) { parts.push(cur.trim()); cur = ''; continue; }
    cur += ch;
  }
  parts.push(cur.trim());
  const unq = s => (s === 'null' || s === undefined) ? null : s.replace(/^'/, '').replace(/'$/, '').replace(/''/g, "'");
  const [name, nameLatin, tagsRaw, budget, address, lat, lng, gid] = parts;
  const tags = ((tagsRaw || '').match(/'[^']*'/g) || []).map(s => s.slice(1, -1));
  rows.push({
    line: i + 1, cc, dest, name: unq(name), nameLatin: unq(nameLatin), tags,
    budget: Number(budget), address: unq(address),
    lat: parseFloat(lat), lng: parseFloat(lng), gid: gid === 'null' ? null : gid,
    nParts: parts.length,
  });
});

console.log('ROWS', rows.length);
const bad = rows.filter(r => r.nParts !== 8);
if (bad.length) console.log('PARSE SUSPECT:', bad.map(r => r.line + ':' + r.nParts).join(', '));

const byCode = {};
for (const c of Object.values(COUNTRIES)) byCode[c.code] = c;

const problems = [];
for (const r of rows) {
  const c = byCode[r.cc];
  if (!c) { problems.push(`L${r.line} pays inconnu ${r.cc}`); continue; }
  const d = (c.destinations || []).find(x => String(x.id) === r.dest);
  if (!d) problems.push(`L${r.line} ${r.cc} dest ${r.dest} inexistante (${r.name})`);
  r.destName = d ? (typeof d.name === 'string' ? d.name : d.name.fr) : '??';
}

const unknown = new Map();
for (const r of rows) for (const t of r.tags) if (!PRE.has(t)) unknown.set(t, (unknown.get(t) || 0) + 1);
console.log('\n--- TAGS INCONNUS ---');
console.log([...unknown.entries()].map(([t, n]) => `${t} x${n}`).join(', ') || 'aucun');

for (const r of rows) {
  if (![1,2,3].includes(r.budget)) problems.push(`L${r.line} budget invalide ${r.budget}`);
  if (!r.tags.length) problems.push(`L${r.line} aucun tag : ${r.name}`);
  if (!Number.isFinite(r.lat) || !Number.isFinite(r.lng)) problems.push(`L${r.line} coords invalides : ${r.name}`);
}

const seen = new Map();
for (const r of rows) {
  const key = `${r.cc}|${r.dest}|${(r.nameLatin || r.name).toLowerCase().trim()}`;
  if (seen.has(key)) problems.push(`DOUBLON NOM L${seen.get(key)} & L${r.line} : ${r.cc}/${r.dest} ${r.name}`);
  else seen.set(key, r.line);
}
const seenC = new Map();
for (const r of rows) {
  const key = `${r.lat.toFixed(4)},${r.lng.toFixed(4)}`;
  if (seenC.has(key)) problems.push(`MEMES COORDS L${seenC.get(key)} & L${r.line} : ${r.name}`);
  else seenC.set(key, r.line);
}

console.log('\n--- PROBLEMES ---');
console.log(problems.join('\n') || 'aucun');

const groups = new Map();
for (const r of rows) {
  const k = `${r.cc}/${r.dest} ${r.destName}`;
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push(r);
}
console.log('\n--- REPARTITION PAR DESTINATION ---');
for (const [k, rs] of [...groups.entries()].sort((a,b) => a[0].localeCompare(b[0]))) {
  const b = [1,2,3].map(n => rs.filter(r => r.budget === n).length);
  const flag = (b.some(x => x === 0) ? '  <-- gamme manquante' : '') + (rs.length < 4 ? ' [peu]' : '');
  console.log(`${k.padEnd(36)} n=${String(rs.length).padStart(2)}  E:${b[0]} EE:${b[1]} EEE:${b[2]}${flag}`);
}
console.log('\nDESTINATIONS:', groups.size, 'PAYS:', new Set(rows.map(r=>r.cc)).size);

// dispersion géographique par destination (barycentre + max distance)
console.log('\n--- DISPERSION (km, distance max au barycentre) ---');
const hav = (a, b) => {
  const R = 6371, toR = d => d * Math.PI / 180;
  const dLat = toR(b.lat - a.lat), dLng = toR(b.lng - a.lng);
  const x = Math.sin(dLat/2)**2 + Math.cos(toR(a.lat))*Math.cos(toR(b.lat))*Math.sin(dLng/2)**2;
  return 2 * R * Math.asin(Math.sqrt(x));
};
for (const [k, rs] of [...groups.entries()].sort((a,b) => a[0].localeCompare(b[0]))) {
  const c = { lat: rs.reduce((s,r)=>s+r.lat,0)/rs.length, lng: rs.reduce((s,r)=>s+r.lng,0)/rs.length };
  const far = rs.map(r => ({ r, d: hav(c, r) })).sort((a,b)=>b.d-a.d)[0];
  if (far.d > 12) console.log(`${k.padEnd(36)} max ${far.d.toFixed(0)} km : ${far.r.name} (L${far.r.line})`);
}
