// Insère un bloc de lignes générées dans la liste VALUES du seed, juste avant
// sa parenthèse fermante, en gérant la virgule de la ligne précédente.
//   node insert.mjs lignes.sql "commentaire" ["commentaire 2" ...]
import fs from 'fs';

const P = 'C:/Users/damie/travel-map/supabase/seed_restaurants.sql';
const block = fs.readFileSync(process.argv[2], 'utf8')
  .split(/\r?\n/)
  .filter((l) => l.trim())
  .map((l) => l.replace(/,\s*$/, ''));           // virgules recalculées ici
const comments = process.argv.slice(3).map((c) => '    -- ' + c);

const lines = fs.readFileSync(P, 'utf8').split(/\r?\n/);
const close = lines.findIndex((l) => l.trim() === ')');
if (close < 0) throw new Error('parenthèse fermante du VALUES introuvable');

lines[close - 1] = lines[close - 1].replace(/\)\s*$/, '),');
const body = block.map((l, i) => (i === block.length - 1 ? l : l + ','));
lines.splice(close, 0, ...comments, ...body);

fs.writeFileSync(P, lines.join('\n'));
console.log(`${block.length} lignes insérées`);
