// Audit complet du seed restaurants : complétude, cohérence, doublons,
// géolocalisation, tags. Purement local, aucun appel réseau.
import fs from 'fs';

const ROOT = 'C:/Users/damie/travel-map/';
const SQL = ROOT + 'supabase/seed_restaurants.sql';
const { PREDEFINED_CUISINE_TAGS } = await import(new URL('file:///' + ROOT + 'src/lib/cuisineTags.js').href);
const PRE = new Set(PREDEFINED_CUISINE_TAGS.map((t) => t.slug));

// Destinations réelles, lues en texte (src/data utilise des imports sans extension).
const DESTS = {};
for (const f of fs.readdirSync(ROOT + 'src/data')) {
  if (!f.endsWith('.js') || f === 'index.js') continue;
  const src = fs.readFileSync(ROOT + 'src/data/' + f, 'utf8');
  const code = (src.match(/^\s*code:\s*"([A-Z]{3})"/m) || [])[1];
  if (!code) continue;
  const body = src.slice(src.indexOf('destinations: ['));
  const re = /^\s{6}id:\s*(\d+),\s*\n\s{6}name:\s*(?:"([^"]*)"|\{\s*fr:\s*"([^"]*)")/gm;
  let m; DESTS[code] = {};
  while ((m = re.exec(body))) DESTS[code][m[1]] = m[2] || m[3];
}

const lines = fs.readFileSync(SQL, 'utf8').split(/\r?\n/);
const rows = [];
lines.forEach((line, i) => {
  if (!/^\s*\('[A-Z]{3}', '\d+',/.test(line)) return;
  const m = line.match(/^\s*\('([A-Z]{3})', '(\d+)', '((?:[^']|'')*)', (null|'(?:[^']|'')*'), array\[([^\]]*)\]::text\[\], (\d+), '((?:[^']|'')*)', (-?\d+\.?\d*), (-?\d+\.?\d*), (null|'[^']*')\),?\s*$/);
  if (!m) { rows.push({ line: i + 1, malformed: true, raw: line.slice(0, 90) }); return; }
  const un = (s) => s.replace(/''/g, "'");
  rows.push({
    line: i + 1,
    cc: m[1], dest: m[2],
    name: un(m[3]),
    latin: m[4] === 'null' ? null : un(m[4].slice(1, -1)),
    tags: (m[5].match(/'[^']*'/g) || []).map((s) => s.slice(1, -1)),
    budget: Number(m[6]),
    address: un(m[7]),
    lat: parseFloat(m[8]), lng: parseFloat(m[9]),
    gid: m[10] === 'null' ? null : m[10].slice(1, -1),
  });
});

const P = [];
const add = (sev, msg) => P.push(`[${sev}] ${msg}`);

// ── A. Forme des lignes ───────────────────────────────────────────────────
for (const r of rows.filter((r) => r.malformed)) add('BLOQUANT', `L${r.line} ligne non conforme : ${r.raw}`);
const ok = rows.filter((r) => !r.malformed);
console.log(`Lignes analysées : ${ok.length} (${rows.length - ok.length} non conformes)`);

// ── B. Complétude ─────────────────────────────────────────────────────────
for (const r of ok) {
  if (!r.name.trim()) add('BLOQUANT', `L${r.line} nom vide`);
  if (!r.tags.length) add('BLOQUANT', `L${r.line} aucun tag : ${r.name}`);
  if (![1, 2, 3].includes(r.budget)) add('BLOQUANT', `L${r.line} gamme invalide (${r.budget}) : ${r.name}`);
  if (!r.address.trim()) add('BLOQUANT', `L${r.line} adresse vide : ${r.name}`);
  if (!Number.isFinite(r.lat) || !Number.isFinite(r.lng)) add('BLOQUANT', `L${r.line} coordonnées absentes : ${r.name}`);
  if (Math.abs(r.lat) > 90 || Math.abs(r.lng) > 180) add('BLOQUANT', `L${r.line} coordonnées hors bornes : ${r.name}`);
  if (r.lat === 0 && r.lng === 0) add('BLOQUANT', `L${r.line} coordonnées nulles : ${r.name}`);
}

// ── C. Destination existante ──────────────────────────────────────────────
for (const r of ok) {
  if (!DESTS[r.cc]) add('BLOQUANT', `L${r.line} pays inconnu ${r.cc}`);
  else if (!DESTS[r.cc][r.dest]) add('BLOQUANT', `L${r.line} destination ${r.cc}/${r.dest} inexistante : ${r.name}`);
}

// ── D. Tags ───────────────────────────────────────────────────────────────
for (const r of ok) {
  for (const t of r.tags) if (!PRE.has(t)) add('BLOQUANT', `L${r.line} tag non prédéfini « ${t} » : ${r.name}`);
  if (new Set(r.tags).size !== r.tags.length) add('MAJEUR', `L${r.line} tag en double : ${r.name}`);
  if (r.tags.length > 8) add('MAJEUR', `L${r.line} plus de 8 tags (plafond api/places.js) : ${r.name}`);
}

// ── E. Graphies du nom ────────────────────────────────────────────────────
const NON_LATIN = /[^\P{L}\p{Script=Latin}]/u;
for (const r of ok) {
  const nameNonLatin = NON_LATIN.test(r.name);
  if (nameNonLatin && !r.latin) add('MAJEUR', `L${r.line} nom non latin sans name_latin : ${r.name}`);
  if (!nameNonLatin && r.latin) add('MINEUR', `L${r.line} name_latin sur un nom déjà latin : ${r.name} / ${r.latin}`);
  if (r.latin && NON_LATIN.test(r.latin)) add('MAJEUR', `L${r.line} name_latin non latin : ${r.latin}`);
}

// ── F. Doublons ───────────────────────────────────────────────────────────
const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9\u3000-\u9fff\uac00-\ud7af]/g, '');
const byName = new Map(), byCoord = new Map(), byGid = new Map();
for (const r of ok) {
  const kn = `${r.cc}|${r.dest}|${norm(r.latin || r.name)}`;
  if (byName.has(kn)) add('BLOQUANT', `L${byName.get(kn)} & L${r.line} même établissement : ${r.name}`);
  else byName.set(kn, r.line);

  const kc = `${r.lat.toFixed(4)},${r.lng.toFixed(4)}`;
  if (byCoord.has(kc)) add('MAJEUR', `L${byCoord.get(kc)} & L${r.line} coordonnées identiques : ${r.name}`);
  else byCoord.set(kc, r.line);

  if (r.gid) {
    if (byGid.has(r.gid)) add('BLOQUANT', `L${byGid.get(r.gid)} & L${r.line} même geoapify_place_id : ${r.name}`);
    else byGid.set(r.gid, r.line);
  }
}

// ── G. Cohérence géographique ─────────────────────────────────────────────
const hav = (a, b, c, d) => {
  const R = 6371, tR = (x) => x * Math.PI / 180;
  const dLat = tR(c - a), dLng = tR(d - b);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(tR(a)) * Math.cos(tR(c)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};
const groups = new Map();
for (const r of ok) {
  const k = `${r.cc}/${r.dest}`;
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push(r);
}
for (const [k, rs] of groups) {
  const lat = rs.map((r) => r.lat).sort((a, b) => a - b)[Math.floor(rs.length / 2)];
  const lng = rs.map((r) => r.lng).sort((a, b) => a - b)[Math.floor(rs.length / 2)];
  for (const r of rs) {
    const d = hav(lat, lng, r.lat, r.lng);
    if (d > 60) add('MAJEUR', `L${r.line} à ${d.toFixed(0)} km du cœur de ${k} : ${r.name}`);
  }
}

// ── H. Adresse : pays cohérent avec le code pays ──────────────────────────
const COUNTRY_WORD = {
  FRA: 'France', ESP: 'Spain', ITA: 'Italy', DEU: 'Germany', GBR: 'United Kingdom', PRT: 'Portugal',
  NLD: 'Netherlands', BEL: 'Belgium', AUT: 'Austria', CHE: 'Switzerland', CZE: 'Czech', POL: 'Poland',
  HRV: 'Croatia', GRC: 'Greece', TUR: 'T', RUS: 'Russia', IRL: 'Ireland', USA: 'United States',
  CAN: 'Canada', MEX: 'Mexico', BRA: 'Brazil', ARG: 'Argentina', JPN: 'Japan', CHN: 'China',
  KOR: 'Korea', TWN: 'Taiwan', THA: 'Thailand', VNM: 'Vietnam', IDN: 'Indonesia', MYS: 'Malaysia',
  SGP: 'Singapore', IND: 'India', ARE: 'Emirates', SAU: 'Saudi', EGY: 'Egypt', MAR: 'Morocco', AUS: 'Australia',
};
for (const r of ok) {
  const w = COUNTRY_WORD[r.cc];
  if (w && !r.address.includes(w)) add('MINEUR', `L${r.line} adresse sans mention du pays (${r.cc}) : ${r.address.slice(0, 60)}`);
}

// ── I. Qualité d'adresse ──────────────────────────────────────────────────
let noNum = 0;
for (const r of ok) if (!/\d/.test(r.address.split(',')[0])) noNum++;

// ── Rapport ───────────────────────────────────────────────────────────────
const bySev = { BLOQUANT: [], MAJEUR: [], MINEUR: [] };
for (const p of P) bySev[p.match(/^\[(\w+)\]/)[1]].push(p);
for (const s of ['BLOQUANT', 'MAJEUR', 'MINEUR']) {
  console.log(`\n===== ${s} : ${bySev[s].length} =====`);
  bySev[s].slice(0, 40).forEach((x) => console.log('  ' + x.replace(/^\[\w+\] /, '')));
  if (bySev[s].length > 40) console.log(`  … et ${bySev[s].length - 40} autres`);
}
console.log(`\nAdresses sans numéro dans le premier segment : ${noNum} / ${ok.length}`);
console.log(`Lignes avec geoapify_place_id : ${ok.filter((r) => r.gid).length} / ${ok.length}`);
