// Affiche l'état actuel du run fetch-city-images.mjs, sans avoir à lire tout
// le log. À lancer à tout moment (même pendant que l'autre script tourne).
//
// Usage : node scripts/city-images-status.mjs

import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATUS_PATH = join(__dirname, 'fetch-city-images.status.json');

function isPidAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

if (!existsSync(STATUS_PATH)) {
  console.log('Aucun run trouvé (le script n\'a jamais été lancé, ou fetch-city-images.status.json a été supprimé).');
  process.exit(0);
}

const status = JSON.parse(readFileSync(STATUS_PATH, 'utf8'));
const now = Date.now();
const updatedAgoMs = now - new Date(status.updatedAt).getTime();
const updatedAgoMin = (updatedAgoMs / 60000).toFixed(1);
const alive = isPidAlive(status.pid);

console.log(`=== Statut import photos villes ===`);
console.log(`État              : ${status.state}`);
console.log(`Process (pid ${status.pid}) : ${alive ? 'actif' : 'introuvable (probablement arrêté)'}`);
console.log(`Dernière mise à jour : il y a ${updatedAgoMin} min`);

if (status.totalQueue > 0) {
  const pct = ((status.done / status.totalQueue) * 100).toFixed(1);
  console.log(`Progression       : ${status.done}/${status.totalQueue} (${pct}%)`);
  console.log(`  trouvées        : ${status.found}`);
  console.log(`  sans résultat   : ${status.notFound}`);
  console.log(`  erreurs         : ${status.errors}`);
}

if (status.currentCity) console.log(`Ville en cours    : ${status.currentCity}`);

if (status.state === 'paused' && status.pausedUntil) {
  const remainingMin = ((new Date(status.pausedUntil).getTime() - now) / 60000).toFixed(1);
  console.log(`En pause (quota horaire) jusqu'à ${status.pausedUntil} (${remainingMin} min restantes)`);
}

if (status.state === 'crashed') {
  console.log(`\n✗ CRASH signalé : ${status.error || '(pas de détail)'}`);
  console.log('Relancer "node scripts/fetch-city-images.mjs" reprendra où ça s\'est arrêté.');
}

// Détection d'un plantage silencieux : état "running" mais pas de mise à
// jour depuis longtemps (une ville prend normalement <1s, hors pause qui
// bascule l'état sur "paused" explicitement) — signe d'un process mort sans
// avoir pu écrire l'erreur, ou d'un blocage réseau.
if (status.state === 'running' && updatedAgoMs > 5 * 60 * 1000) {
  console.log(`\n⚠️  État "running" mais aucune mise à jour depuis ${updatedAgoMin} min — probablement planté ou bloqué.`);
  if (!alive) console.log('   Le process n\'existe plus : relancer le script en toute sécurité (reprend automatiquement).');
}

if (status.state === 'done') {
  console.log('\n✓ Run terminé.');
}
