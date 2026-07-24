// Import initial du cache country_images pour TOUS les pays connus de l'app
// (src/data/*.js), via l'API Unsplash. Alimente le fond des cartes de voyage
// de l'écran d'accueil de la planification (une image par pays).
//
// Réutilise api/_lib/countryImages.js (searchBestCountryPhoto + upsert) —
// EXACTEMENT la même logique que la route serveur 'get-country-image'
// (api/trip-templates.js), appelée en direct par l'app pour un pays pas encore
// en cache. Un seul endroit décide "comment on choisit la photo d'un pays" :
// les deux chemins ne peuvent pas diverger. Ce script n'ajoute que ce qui lui
// est propre : la boucle sur tous les pays + le respect du quota horaire.
//
// Respecte la limite gratuite Unsplash (50 requêtes/heure) : traite jusqu'à 50
// requêtes puis attend 61 minutes avant de reprendre. ~185 pays ⇒ ~4h. Écrit
// en base après CHAQUE pays (pas en fin de script) : une interruption (Ctrl+C,
// coupure réseau, crash) ne perd aucune progression — relancer le script
// reprend uniquement les pays absents du cache.
//
// Usage :
//   node scripts/fetch-country-images.mjs --dry-run     liste les pays à traiter, 0 requête
//   node scripts/fetch-country-images.mjs --limit=5      traite seulement 5 pays (test)
//   node scripts/fetch-country-images.mjs                run complet (tourne plusieurs heures)
//
// Prérequis : supabase/country_images_table.sql exécuté en base, et
// UNSPLASH_ACCESS_KEY présent dans .env.

import { readdirSync, readFileSync, appendFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { createClient } from '@supabase/supabase-js';
import { loadEnv, ROOT, __dirname } from './_shared-env.mjs';
import {
  searchBestCountryPhoto,
  upsertCountryImageCache,
} from '../api/_lib/countryImages.js';
import { unsplashSearch, UnsplashUnavailableError } from '../api/_lib/cityImages.js';

const env = loadEnv();
const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !env.UNSPLASH_ACCESS_KEY) {
  console.error('✗ Variables manquantes dans .env : VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY / UNSPLASH_ACCESS_KEY');
  process.exit(1);
}

const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });

const DRY_RUN = process.argv.includes('--dry-run');
const LIMIT = (() => {
  const arg = process.argv.find((a) => a.startsWith('--limit='));
  return arg ? parseInt(arg.split('=')[1], 10) : null;
})();

const RATE_LIMIT_PER_HOUR = 50;
const COOLDOWN_MS = 61 * 60 * 1000; // 61 min : marge au-delà de l'heure Unsplash
const PRIORITY_COUNTRY = 'CHN'; // traité en premier (images de test pour la refonte planif)

// ── Logging (console + fichier) ──────────────────────────────────────────

const LOG_PATH = join(__dirname, 'fetch-country-images.log');
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try { appendFileSync(LOG_PATH, line + '\n'); } catch { /* non bloquant */ }
}

// ── Statut (fichier JSON) ────────────────────────────────────────────────

const STATUS_PATH = join(__dirname, 'fetch-country-images.status.json');
let statusState = {
  pid: process.pid,
  startedAt: new Date().toISOString(),
  state: 'starting',
  totalQueue: 0,
  done: 0,
  found: 0,
  notFound: 0,
  errors: 0,
  currentCountry: null,
  pausedUntil: null,
  updatedAt: new Date().toISOString(),
};
function writeStatus(patch) {
  statusState = { ...statusState, ...patch, updatedAt: new Date().toISOString() };
  try { writeFileSync(STATUS_PATH, JSON.stringify(statusState, null, 2)); } catch { /* non bloquant */ }
}

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

async function pauseForQuota(reason) {
  log(`⏸ ${reason} — pause de 61 minutes...`);
  writeStatus({ state: 'paused', pausedUntil: new Date(Date.now() + COOLDOWN_MS).toISOString() });
  await sleep(COOLDOWN_MS);
  requestsThisWindow = 0;
  writeStatus({ state: 'running', pausedUntil: null });
  log('▶ Reprise après pause.');
}

// ── Liste des pays (code alpha-3 → nom anglais), depuis src/data/*.js —
// même source de vérité que l'app (COUNTRIES), lue par parsing texte car ces
// fichiers utilisent des imports sans extension que Node ne charge pas tel
// quel (voir fetch-city-images.mjs, même approche). ──────────────────────

function buildCountryList() {
  const list = [];
  const dataDir = join(ROOT, 'src', 'data');
  for (const file of readdirSync(dataDir)) {
    if (!file.endsWith('.js') || file === 'index.js') continue;
    const src = readFileSync(join(dataDir, file), 'utf8');
    const codeMatch = src.match(/code:\s*["']([A-Z]{3})["']/);
    const nameMatch = src.match(/name:\s*\{\s*fr:\s*"([^"]*)",\s*en:\s*"([^"]*)"/);
    if (codeMatch && nameMatch) {
      list.push({ country_code: codeMatch[1], name_en: nameMatch[2], name_fr: nameMatch[1] });
    }
  }
  return list;
}

async function fetchExistingCacheCodes() {
  let all = [];
  let from = 0;
  const page = 1000;
  while (true) {
    const { data, error } = await sb.from('country_images').select('country_code').range(from, from + page - 1);
    if (error) throw new Error(`Lecture country_images : ${error.message}`);
    all = all.concat(data);
    if (data.length < page) break;
    from += page;
  }
  return new Set(all.map((r) => r.country_code));
}

// ── Appel Unsplash avec gestion de quota (bulk uniquement) ───────────────

let requestsThisWindow = 0;

async function waitForRateLimit() {
  if (requestsThisWindow >= RATE_LIMIT_PER_HOUR) {
    await pauseForQuota(`Quota horaire local atteint (${RATE_LIMIT_PER_HOUR} requêtes)`);
  }
}

async function unsplashSearchWithQuotaManagement(query, opts) {
  await waitForRateLimit();
  try {
    const data = await unsplashSearch(query, opts);
    requestsThisWindow++;
    return data;
  } catch (err) {
    if (err instanceof UnsplashUnavailableError) {
      requestsThisWindow++;
      if (err.rateLimited) {
        await pauseForQuota('Rate limit signalé par Unsplash malgré la marge de sécurité');
        return unsplashSearchWithQuotaManagement(query, opts);
      }
      log(`⚠️  Erreur Unsplash sur "${query}" (${err.message}) — nouvelle tentative dans 30s...`);
      await sleep(30_000);
      return unsplashSearchWithQuotaManagement(query, opts);
    }
    throw err;
  }
}

// ── Boucle principale ────────────────────────────────────────────────────

async function main() {
  log('=== Démarrage import photos pays (Unsplash → country_images) ===');

  const [countries, existingCodes] = await Promise.all([
    buildCountryList(),
    fetchExistingCacheCodes(),
  ]);
  let queue = countries.filter((c) => !existingCodes.has(c.country_code));

  log(`Pays connus       : ${countries.length}`);
  log(`Déjà en cache     : ${countries.length - queue.length}`);
  log(`Restant à traiter : ${queue.length}`);

  // Chine en priorité (images de test de la refonte planif), le reste garde
  // son ordre.
  queue.sort((a, b) => (a.country_code === PRIORITY_COUNTRY) === (b.country_code === PRIORITY_COUNTRY) ? 0 : a.country_code === PRIORITY_COUNTRY ? -1 : 1);

  if (LIMIT) {
    queue = queue.slice(0, LIMIT);
    log(`--limit=${LIMIT} appliqué → ${queue.length} pays retenu(s) pour ce run.`);
  }

  if (DRY_RUN) {
    queue.forEach((c, i) => console.log(`${i + 1}. ${c.name_en} (${c.country_code})`));
    log(`[dry-run] ${queue.length} pays seraient traités — aucune requête envoyée.`);
    return;
  }

  if (queue.length === 0) {
    log('Rien à faire, tous les pays sont déjà en cache.');
    writeStatus({ state: 'done', totalQueue: 0 });
    return;
  }

  const estimatedHours = Math.ceil(queue.length / RATE_LIMIT_PER_HOUR);
  log(`Estimation : ~${estimatedHours}h (peut varier selon les pays nécessitant une requête de repli).`);

  let done = 0, found = 0, notFound = 0, errors = 0;
  writeStatus({ state: 'running', totalQueue: queue.length, done, found, notFound, errors, currentCountry: null });

  for (const country of queue) {
    writeStatus({ currentCountry: `${country.name_en} (${country.country_code})` });
    try {
      const result = await searchBestCountryPhoto(country.name_en, unsplashSearchWithQuotaManagement);
      await upsertCountryImageCache(sb, country.country_code, result);
      done++;
      if (result.notFound) {
        notFound++;
        log(`○ ${country.name_en} (${country.country_code}) — aucune photo trouvée [requête: "${result.queryUsed}"]`);
      } else {
        found++;
        log(`✓ ${country.name_en} (${country.country_code}) — ${result.likes} likes [requête: "${result.queryUsed}"]`);
      }
    } catch (err) {
      errors++;
      // Volontairement PAS d'upsert : le pays reste absent du cache et sera
      // retenté automatiquement au prochain lancement du script.
      log(`✗ ${country.name_en} (${country.country_code}) — ERREUR : ${err.message} (sera retenté au prochain lancement)`);
    }

    writeStatus({ done, found, notFound, errors });

    if (done % 25 === 0) {
      log(`--- Progression : ${done}/${queue.length} (trouvées: ${found}, sans résultat: ${notFound}, erreurs: ${errors}) ---`);
    }
  }

  log(`=== Terminé === Traités: ${done}/${queue.length} | Trouvées: ${found} | Sans résultat: ${notFound} | Erreurs: ${errors}`);
  if (errors > 0) {
    log(`${errors} pays en erreur non mis en cache — relancer le script les retraitera automatiquement.`);
  }
  writeStatus({ state: 'done', currentCountry: null });
}

process.on('unhandledRejection', (err) => {
  log(`✗ Rejet de promesse non géré (le script continue) : ${err?.message || err}`);
});
process.on('uncaughtException', (err) => {
  log(`✗ Exception non gérée (le script continue) : ${err?.message || err}`);
});
process.on('SIGINT', () => {
  log('■ Interrompu (Ctrl+C) — progression sauvegardée, relancer le script reprendra où il s\'est arrêté.');
  writeStatus({ state: 'interrupted' });
  process.exitCode = 0;
});

main()
  .then(() => { process.exitCode = 0; })
  .catch((err) => {
    log(`✗ Erreur fatale : ${err.message}`);
    writeStatus({ state: 'crashed', error: err.message });
    process.exitCode = 1;
  });
