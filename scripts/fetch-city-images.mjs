// Import initial du cache city_images pour toutes les villes des suggestions
// éditoriales (trip_templates.is_editorial = true), via l'API Unsplash.
//
// Réutilise api/_lib/cityImages.js (résolution du nom de requête + appel
// Unsplash bas niveau + sélection de la meilleure photo) — EXACTEMENT la
// même logique que la route serveur 'get-city-image' (api/trip-templates.js),
// appelée en direct par l'app pour les villes ajoutées par les utilisateurs.
// Un seul endroit décide "comment on choisit une photo" : les deux chemins
// ne peuvent pas diverger. Ce script n'ajoute que ce qui lui est propre :
// la boucle sur toutes les villes + le respect du quota horaire gratuit.
//
// Respecte la limite gratuite Unsplash (50 requêtes/heure) : traite jusqu'à
// 50 requêtes puis attend 61 minutes avant de reprendre, jusqu'à épuisement
// de la file. Écrit en base après CHAQUE ville (pas en fin de script) donc
// une interruption (Ctrl+C, coupure réseau, crash) ne perd aucune progression
// — relancer le script reprend uniquement les villes absentes du cache.
//
// Usage :
//   node scripts/fetch-city-images.mjs --dry-run       liste les villes à traiter, 0 requête envoyée
//   node scripts/fetch-city-images.mjs --limit=5        traite seulement 5 villes (test)
//   node scripts/fetch-city-images.mjs                  run complet (à lancer le soir, tourne plusieurs heures)
//
// Prérequis : supabase/city_images_table.sql + city_images_geo.sql exécutés
// en base, et UNSPLASH_ACCESS_KEY présent dans .env.
//
// Dédup géographique (2026-07-21) : trip_templates connaît déjà les
// coordonnées de chaque ville éditoriale (city_lat/city_lng) — avant de
// lancer une recherche Unsplash pour une ville, on vérifie qu'aucune ligne
// de cache proche n'existe déjà (créée entre-temps par un utilisateur ayant
// tapé cette même ville dans une autre langue, ex: "Sevilla" pour "Séville")
// — sinon on ferait une recherche Unsplash en double pour la même ville
// réelle, potentiellement avec une photo différente. Aucun appel Geoapify
// nécessaire ici : les coordonnées éditoriales sont déjà connues.

import { readdirSync, readFileSync, appendFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { createClient } from '@supabase/supabase-js';
import { loadEnv, ROOT, __dirname } from './_shared-env.mjs';
import {
  resolveEnglishCityNameForQuery,
  searchBestCityPhoto,
  unsplashSearch,
  UnsplashUnavailableError,
} from '../api/_lib/cityImages.js';
import { distanceKm, SAME_CITY_RADIUS_KM } from '../api/_lib/cityGeocode.js';

const env = loadEnv();
const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !env.UNSPLASH_ACCESS_KEY) {
  console.error('✗ Variables manquantes dans .env : VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY / UNSPLASH_ACCESS_KEY');
  process.exit(1);
}
// loadEnv() a déjà copié .env dans process.env (voir _shared-env.mjs) — c'est
// ce que lisent api/_lib/cityImages.js et api/_lib/translation.js, écrits
// pour tourner en route serveur (où process.env est déjà peuplé nativement).

const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });

const DRY_RUN = process.argv.includes('--dry-run');
const LIMIT = (() => {
  const arg = process.argv.find((a) => a.startsWith('--limit='));
  return arg ? parseInt(arg.split('=')[1], 10) : null;
})();

const RATE_LIMIT_PER_HOUR = 50;
const COOLDOWN_MS = 61 * 60 * 1000; // 61 min : marge de sécurité au-delà de l'heure Unsplash
const PRIORITY_COUNTRY = 'CHN'; // traité en premier (images de test pour la refonte planif)

// ── Logging (console + fichier, pour relecture le lendemain matin) ───────

const LOG_PATH = join(__dirname, 'fetch-city-images.log');
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try { appendFileSync(LOG_PATH, line + '\n'); } catch { /* non bloquant */ }
}

// ── Statut (fichier JSON relu par scripts/city-images-status.mjs) ────────
// Réécrit à chaque étape clé pour pouvoir vérifier à tout moment, sans lire
// tout le log : où ça en est, si c'est en pause (et jusqu'à quand), si ça a
// planté (updatedAt qui ne bouge plus alors que l'état dit "running").

const STATUS_PATH = join(__dirname, 'fetch-city-images.status.json');
let statusState = {
  pid: process.pid,
  startedAt: new Date().toISOString(),
  state: 'starting',
  totalQueue: 0,
  done: 0,
  found: 0,
  notFound: 0,
  errors: 0,
  currentCity: null,
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

// ── Résolution nom de pays (code alpha-3 → nom anglais), depuis les
// fichiers src/data/*.js — source de vérité déjà utilisée par l'app, évitée
// en import direct car ces fichiers utilisent des imports sans extension
// (résolus par Vite) que Node ne sait pas charger tel quel. ────────────────

// Emoji drapeau -> code alpha-2 : chaque indicateur régional Unicode encode
// une lettre (même algorithme que _byAlpha2 dans src/data/index.js).
function alpha2FromEmoji(emoji) {
  if (!emoji) return null;
  const chars = [...emoji];
  if (chars.length < 2) return null;
  return chars.slice(0, 2).map((c) => String.fromCharCode(c.codePointAt(0) - 0x1f1e6 + 65)).join('');
}

function buildCountryNameMap() {
  const map = {};
  const dataDir = join(ROOT, 'src', 'data');
  for (const file of readdirSync(dataDir)) {
    if (!file.endsWith('.js') || file === 'index.js') continue;
    const src = readFileSync(join(dataDir, file), 'utf8');
    const codeMatch = src.match(/code:\s*["']([A-Z]{3})["']/);
    const nameMatch = src.match(/name:\s*\{\s*fr:\s*"([^"]*)",\s*en:\s*"([^"]*)"/);
    const emojiMatch = src.match(/emoji:\s*["']([^"']*)["']/);
    if (codeMatch && nameMatch) {
      map[codeMatch[1]] = { fr: nameMatch[1], en: nameMatch[2], alpha2: alpha2FromEmoji(emojiMatch?.[1]) };
    }
  }
  return map;
}

const COUNTRY_NAMES = buildCountryNameMap();

function countryAlpha2For(code) {
  return COUNTRY_NAMES[code]?.alpha2 || null;
}

function countryNameFor(code) {
  const c = COUNTRY_NAMES[code];
  if (!c) {
    log(`⚠️  Code pays inconnu : "${code}" — requête envoyée sans nom de pays.`);
    return null;
  }
  return c.en || c.fr || null;
}

// ── Villes à traiter ───────────────────────────────────────────────────

async function fetchAllRows(table, select, filterFn) {
  let all = [];
  let from = 0;
  const page = 1000;
  while (true) {
    let query = sb.from(table).select(select).range(from, from + page - 1);
    if (filterFn) query = filterFn(query);
    const { data, error } = await query;
    if (error) throw new Error(`Lecture ${table} : ${error.message}`);
    all = all.concat(data);
    if (data.length < page) break;
    from += page;
  }
  return all;
}

async function fetchEditorialCities() {
  const rows = await fetchAllRows('trip_templates', 'city_name, country_code, city_lat, city_lng', (q) => q.eq('is_editorial', true));
  const seen = new Map();
  for (const row of rows) {
    if (!row.city_name || !row.country_code) continue;
    const key = `${row.city_name.trim().toLowerCase()}|${row.country_code}`;
    if (!seen.has(key)) {
      seen.set(key, {
        city_name: row.city_name.trim(),
        country_code: row.country_code,
        // Coordonnées déjà connues (trip_templates) — pas besoin de
        // regéocoder via Geoapify pour le matching cross-langue.
        lat: row.city_lat ?? null,
        lng: row.city_lng ?? null,
      });
    }
  }
  return [...seen.values()];
}

async function fetchExistingCacheKeys() {
  const rows = await fetchAllRows('city_images', 'city_name_key, country_code');
  return new Set(rows.map((r) => `${r.city_name_key}|${r.country_code}`));
}

// Toutes les lignes déjà géocodées, groupées par pays — chargées UNE FOIS
// (pas un aller-retour DB par ville) pour la dédup géographique ci-dessous.
// Si city_images_geo.sql n'a pas encore été exécuté (colonnes lat/lng
// absentes), l'erreur est avalée : la dédup géo est simplement désactivée
// pour ce run (repli sur la dédup par nom exact déjà en place), rien ne
// bloque.
async function fetchExistingCacheByCountry() {
  const { data, error } = await sb.from('city_images').select('country_code, lat, lng').not('lat', 'is', null);
  if (error) {
    log(`⚠️  Dédup géographique indisponible (${error.message}) — avez-vous exécuté supabase/city_images_geo.sql ?`);
    return new Map();
  }
  const byCountry = new Map();
  for (const row of data || []) {
    if (!byCountry.has(row.country_code)) byCountry.set(row.country_code, []);
    byCountry.get(row.country_code).push(row);
  }
  return byCountry;
}

// Vrai si une photo existe déjà pour une ville à moins de SAME_CITY_RADIUS_KM
// — calcul 100% local (aucune requête DB), à partir du index déjà chargé.
function hasNearbyCachedImage(byCountry, countryCode, lat, lng) {
  if (lat == null || lng == null) return false;
  const rows = byCountry.get(countryCode);
  if (!rows) return false;
  return rows.some((r) => distanceKm(lat, lng, r.lat, r.lng) <= SAME_CITY_RADIUS_KM);
}

// ── Appel Unsplash avec gestion de quota (bulk uniquement) ───────────────
// api/_lib/cityImages.js fournit l'appel bas niveau (unsplashSearch) et toute
// la logique de résolution/cascade (resolveEnglishCityNameForQuery,
// searchBestCityPhoto) — ce qui suit est SPÉCIFIQUE au run en masse :
// compteur de requêtes/heure + pause de 61 min, injecté dans searchBestCityPhoto
// via `searchFn` (voir pickBestPhoto plus bas). Une route serveur synchrone
// (get-city-image) ne peut pas se permettre une telle pause.

let requestsThisWindow = 0;

async function waitForRateLimit() {
  if (requestsThisWindow >= RATE_LIMIT_PER_HOUR) {
    await pauseForQuota(`Quota horaire local atteint (${RATE_LIMIT_PER_HOUR} requêtes)`);
  }
}

// Enrobe unsplashSearch (partagé) d'un retry-avec-pause sur rate-limit, et
// d'un retry simple sur erreur réseau — le module partagé se contente de
// lever une erreur typée, à charge de l'appelant de décider quoi en faire.
// `opts` (ex: { orientation: null }) transmis tel quel — voir la cascade de
// paliers dans searchBestCityPhoto (api/_lib/cityImages.js).
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
      // Erreur réseau/HTTP non liée au quota : une tentative de plus après
      // une courte pause, avant d'abandonner (remonte à l'appelant, qui
      // laissera la ville non mise en cache pour un prochain lancement).
      log(`⚠️  Erreur Unsplash sur "${query}" (${err.message}) — nouvelle tentative dans 30s...`);
      await sleep(30_000);
      return unsplashSearchWithQuotaManagement(query, opts);
    }
    throw err;
  }
}

// Résolution du nom + recherche : appelle EXACTEMENT les mêmes fonctions
// partagées que la route serveur 'get-city-image' (résolution Geoapify +
// garde-fou anti-mauvaise-traduction, puis cascade de paliers de recherche
// Unsplash — voir api/_lib/cityImages.js) pour que le bulk et le live ne
// puissent jamais diverger. La seule différence : la recherche passe par
// unsplashSearchWithQuotaManagement (pause horaire), pas l'appel direct.
async function pickBestPhoto(cityName, countryCode, countryName, countryAlpha2) {
  // sourceLanguage 'fr' : les villes éditoriales (trip_templates.city_name)
  // sont toujours stockées en français, quelle que soit la langue du site.
  const en = await resolveEnglishCityNameForQuery(sb, cityName, countryCode, countryAlpha2, 'fr');
  return searchBestCityPhoto(en.name, countryName, en.region, unsplashSearchWithQuotaManagement);
}

async function upsertResult(city, result) {
  const row = {
    city_name: city.city_name,
    country_code: city.country_code,
    query_used: result.queryUsed,
    not_found: !!result.notFound,
    image_url: result.image_url ?? null,
    thumb_url: result.thumb_url ?? null,
    unsplash_id: result.unsplash_id ?? null,
    author_name: result.author_name ?? null,
    author_url: result.author_url ?? null,
    likes: result.likes ?? null,
    fallback_tier: result.fallbackTier ?? null,
    // Coordonnées déjà connues (trip_templates) : permettent le matching
    // cross-langue (findNearbyCachedImage) pour les prochaines recherches,
    // côté script comme côté route serveur.
    lat: city.lat ?? null,
    lng: city.lng ?? null,
    fetched_at: new Date().toISOString(),
  };
  const { error } = await sb.from('city_images').upsert(row, { onConflict: 'city_name_key,country_code' });
  if (error) throw new Error(`Upsert city_images (${city.city_name}, ${city.country_code}) : ${error.message}`);
}

// ── Boucle principale ──────────────────────────────────────────────────

async function main() {
  log('=== Démarrage import photos villes (Unsplash → city_images) ===');

  const [cities, existingKeys, existingByCountry] = await Promise.all([
    fetchEditorialCities(),
    fetchExistingCacheKeys(),
    fetchExistingCacheByCountry(),
  ]);
  let queue = cities.filter((c) => !existingKeys.has(`${c.city_name.trim().toLowerCase()}|${c.country_code}`));

  log(`Villes éditoriales distinctes : ${cities.length}`);
  log(`Déjà en cache (nom exact)     : ${cities.length - queue.length}`);

  // Dédup géographique (calcul local, 0 requête DB supplémentaire — voir
  // fetchExistingCacheByCountry) : une ville pas encore vue sous CE nom exact
  // peut déjà avoir une photo en cache sous un autre nom (créée entre-temps
  // par un utilisateur ayant tapé cette même ville dans une autre langue,
  // ex: "Sevilla" pour "Séville") — sans ce check on relancerait une
  // recherche Unsplash en double pour la même ville réelle.
  const beforeGeoDedup = queue.length;
  queue = queue.filter((c) => !hasNearbyCachedImage(existingByCountry, c.country_code, c.lat, c.lng));
  const geoSkipped = beforeGeoDedup - queue.length;
  if (geoSkipped > 0) log(`Déjà en cache (proximité géo)  : ${geoSkipped}`);
  log(`Restant à traiter             : ${queue.length}`);

  // Chine en priorité (utilisée comme images de test dans la refonte de la
  // planif) : traitée en premier dans la file, le reste garde son ordre.
  queue.sort((a, b) => (a.country_code === PRIORITY_COUNTRY) === (b.country_code === PRIORITY_COUNTRY) ? 0 : a.country_code === PRIORITY_COUNTRY ? -1 : 1);
  const priorityCount = queue.filter((c) => c.country_code === PRIORITY_COUNTRY).length;
  if (priorityCount > 0) log(`Priorité : ${priorityCount} ville(s) "${PRIORITY_COUNTRY}" traitée(s) en premier.`);

  if (LIMIT) {
    queue = queue.slice(0, LIMIT);
    log(`--limit=${LIMIT} appliqué → ${queue.length} ville(s) retenue(s) pour ce run.`);
  }

  if (DRY_RUN) {
    queue.forEach((c, i) => console.log(`${i + 1}. ${c.city_name} (${c.country_code})`));
    log(`[dry-run] ${queue.length} ville(s) seraient traitées — aucune requête envoyée.`);
    return;
  }

  if (queue.length === 0) {
    log('Rien à faire, toutes les villes sont déjà en cache.');
    writeStatus({ state: 'done', totalQueue: 0 });
    return;
  }

  const estimatedHours = Math.ceil(queue.length / RATE_LIMIT_PER_HOUR);
  log(`Estimation : ~${estimatedHours}h (peut varier selon les villes nécessitant une requête de repli).`);

  let done = 0, found = 0, notFound = 0, errors = 0;
  writeStatus({ state: 'running', totalQueue: queue.length, done, found, notFound, errors, currentCity: null });

  for (const city of queue) {
    writeStatus({ currentCity: `${city.city_name} (${city.country_code})` });
    try {
      const result = await pickBestPhoto(city.city_name, city.country_code, countryNameFor(city.country_code), countryAlpha2For(city.country_code));
      await upsertResult(city, result);
      done++;
      if (result.notFound) {
        notFound++;
        log(`○ ${city.city_name} (${city.country_code}) — aucune photo trouvée [requête: "${result.queryUsed}"]`);
      } else {
        found++;
        log(`✓ ${city.city_name} (${city.country_code}) — ${result.likes} likes [requête: "${result.queryUsed}"]`);
      }
    } catch (err) {
      errors++;
      // Volontairement PAS d'upsert ici : la ville reste absente du cache et
      // sera retentée automatiquement au prochain lancement du script.
      log(`✗ ${city.city_name} (${city.country_code}) — ERREUR : ${err.message} (sera retentée au prochain lancement)`);
    }

    writeStatus({ done, found, notFound, errors });

    if (done % 25 === 0) {
      log(`--- Progression : ${done}/${queue.length} (trouvées: ${found}, sans résultat: ${notFound}, erreurs: ${errors}) ---`);
    }
  }

  log(`=== Terminé === Traitées: ${done}/${queue.length} | Trouvées: ${found} | Sans résultat: ${notFound} | Erreurs: ${errors}`);
  if (errors > 0) {
    log(`${errors} ville(s) en erreur non mise(s) en cache — relancer le script les retraitera automatiquement.`);
  }
  writeStatus({ state: 'done', currentCity: null });
}

// Filets de sécurité : ne jamais laisser une erreur imprévue tuer le process
// en pleine nuit sans log exploitable.
process.on('unhandledRejection', (err) => {
  log(`✗ Rejet de promesse non géré (le script continue) : ${err?.message || err}`);
});
process.on('uncaughtException', (err) => {
  log(`✗ Exception non gérée (le script continue) : ${err?.message || err}`);
});
process.on('SIGINT', () => {
  log('■ Interrompu (Ctrl+C) — progression sauvegardée, relancer le script reprendra où il s\'est arrêté.');
  writeStatus({ state: 'interrupted' });
  // process.exit() forcé (pas seulement exitCode) : SANS ça, un Ctrl+C pendant
  // la pause de 61 min (pauseForQuota) ne tue PAS réellement le process — le
  // setTimeout de la pause reste actif dans la boucle d'évènements, qui ne se
  // vide donc jamais toute seule. Le script continue de tourner en arrière-
  // plan (zombie) avec le code chargé au démarrage, invisible dans le
  // terminal, et un relancement ultérieur tourne alors EN PARALLÈLE du zombie
  // — double consommation du quota Unsplash réel, constaté le 2026-07-23.
  process.exit(0);
});

// process.exitCode plutôt que process.exit() : un exit forcé juste après un
// appel réseau Supabase provoque une assertion libuv sur Windows (process
// tué avant la fermeture propre des sockets/handles internes — inoffensif
// pour les données déjà écrites, mais bruite les logs avec une fausse
// apparence de plantage). exitCode laisse Node sortir naturellement une fois
// la boucle d'évènements vidée, sans rien forcer.
main()
  .then(() => { process.exitCode = 0; })
  .catch((err) => {
    log(`✗ Erreur fatale : ${err.message}`);
    writeStatus({ state: 'crashed', error: err.message });
    process.exitCode = 1;
  });
