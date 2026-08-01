// Contrôle de cohérence entre l'adresse écrite sur la ligne et celle de l'objet
// Geoapify auquel son place_id renvoie.
//
// Motif : le backfill appariait par NOM et retenait le premier objet plausible,
// sans vérifier que son adresse correspondait au libellé de la ligne. Pour une
// enseigne à plusieurs succursales, il pouvait donc coller les coordonnées de
// l'une au libellé de l'autre — constaté sur Zaytoon (Dublin), dont l'adresse
// disait Camden Street quand le point désignait Parliament Street.
//
// Purement local : lit le cache du backfill, aucun appel réseau.
import fs from 'fs';
import path from 'path';

const SQL = 'C:/Users/damie/travel-map/supabase/seed_restaurants.sql';
const cache = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, 'geoapify-cache.json'), 'utf8'));
const lines = fs.readFileSync(SQL, 'utf8').split(/\r?\n/);

// Numéro de rue et mots significatifs de la voie, pour comparer « 44 Lower
// Camden St » à « 14/15 Parliament Street » sans se laisser piéger par les
// abréviations ni la casse.
const STOP = new Set(['rue', 'street', 'st', 'calle', 'via', 'strasse', 'straße', 'avenue', 'ave', 'av',
  'boulevard', 'bd', 'blvd', 'road', 'rd', 'lane', 'ln', 'place', 'plaza', 'praca', 'plaça',
  'de', 'del', 'la', 'le', 'les', 'du', 'des', 'da', 'do', 'di', 'el', 'the', 'lower', 'upper',
  'north', 'south', 'east', 'west', 'n', 's', 'e', 'w']);

const words = (s) => String(s || '')
  .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .split(/[^a-z0-9]+/).filter((w) => w && !STOP.has(w) && !/^\d+$/.test(w));

const nums = (s) => (String(s || '').match(/\b\d{1,4}\b/g) || []);

const flags = [];
let checked = 0;

// IMPORTANT : le cache du backfill est indexé par NUMÉRO DE LIGNE, or des
// lignes ont été ajoutées et supprimées depuis — les numéros ont glissé.
// S'y fier produisait des rapprochements absurdes (un restaurant de Hambourg
// comparé à une adresse de Dubaï). On réindexe donc par place_id, seul
// identifiant stable entre le cache et le fichier.
const byGid = new Map();
lines.forEach((row, i) => {
  const m = row.match(/^\s*\('([A-Z]{3})', '(\d+)', '((?:[^']|'')*)'.*?, '((?:[^']|'')*)', -?\d+\.?\d*, -?\d+\.?\d*, '([^']+)'\),?\s*$/);
  if (m) byGid.set(m[5], { line: i + 1, cc: m[1], dest: m[2], name: m[3].replace(/''/g, "'"), addr: m[4].replace(/''/g, "'") });
});

for (const hit of Object.values(cache)) {
  if (!hit || !hit.addr || !hit.id) continue;
  const row = byGid.get(hit.id);
  if (!row) continue;                    // ligne supprimée depuis le backfill
  const seedAddr = row.addr;
  const name = row.name;
  const lineNo = row.line;
  const m = [null, row.cc, row.dest];
  checked++;

  const a = new Set(words(seedAddr)), b = new Set(words(hit.addr));
  const common = [...a].filter((w) => b.has(w));
  // Aucun mot de voie en commun ET aucun numéro en commun : les deux adresses
  // ne décrivent probablement pas le même endroit.
  if (!common.length && a.size && b.size) {
    const na = nums(seedAddr), nb = nums(hit.addr);
    const numCommon = na.some((x) => nb.includes(x));
    flags.push({ line: Number(lineNo), cc: m[1], dest: m[2], name, seedAddr, geoAddr: hit.addr, numCommon, d: hit.d });
  }
}

flags.sort((x, y) => (x.numCommon === y.numCommon ? 0 : x.numCommon ? 1 : -1));
console.log(`Lignes contrôlées : ${checked}`);
console.log(`Divergences d'adresse : ${flags.length}\n`);
for (const f of flags) {
  console.log(`L${f.line} ${f.cc}/${f.dest} « ${f.name} »${f.numCommon ? ' (numéro commun)' : ''}`);
  console.log(`    seed : ${f.seedAddr}`);
  console.log(`    geo  : ${f.geoAddr}   [${f.d} m]`);
}
