// Vérification croisée, indépendante de Google Translate : pour chacune des
// 325 villes, interroge Wikipédia (liens interlangues FR -> EN, maintenus par
// la communauté, pas une traduction automatique) et compare au nom anglais
// que le script d'import s'apprête réellement à utiliser (override manuel ou
// traduction Google). Toute divergence est listée pour revue manuelle —
// objectif : ne PAS se fier uniquement à la relecture visuelle du rapport
// précédent (insuffisant pour garantir l'exactitude sur 325 entrées).
//
// Usage : node scripts/verify-city-name-translations.mjs
// Écrit scripts/verify-city-name-translations-report.txt

import { writeFileSync, existsSync, readFileSync as readFileSyncRaw } from 'fs';
import { join } from 'path';
import { createClient } from '@supabase/supabase-js';
import { loadEnv, ROOT } from './_shared-env.mjs';
import { getTranslatedField } from '../api/_lib/translation.js';
import { cityNameQueryOverride } from '../api/_lib/cityNameOverrides.js';

// Cache incrémental (résultats déjà obtenus) : Wikipédia applique un
// rate-limit IP strict (429 + Retry-After) qui a coupé le premier run —
// ce cache évite de reperdre la progression si ça arrive encore.
const CACHE_PATH = join(ROOT, 'scripts', 'verify-city-name-translations-cache.json');
function loadCache() {
  if (!existsSync(CACHE_PATH)) return {};
  try { return JSON.parse(readFileSyncRaw(CACHE_PATH, 'utf8')); } catch { return {}; }
}
function saveCache(cache) {
  try { writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2)); } catch { /* non bloquant */ }
}

const env = loadEnv();
const sb = createClient(env.VITE_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const UA = 'travel-map-city-image-import/1.0 (script de vérification interne)';

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function fetchEditorialCities() {
  let all = [];
  let from = 0;
  const page = 1000;
  while (true) {
    const { data, error } = await sb
      .from('trip_templates')
      .select('city_name, country_code')
      .eq('is_editorial', true)
      .range(from, from + page - 1);
    if (error) throw new Error(`Lecture trip_templates : ${error.message}`);
    all = all.concat(data);
    if (data.length < page) break;
    from += page;
  }
  const seen = new Map();
  for (const row of all) {
    if (!row.city_name || !row.country_code) continue;
    const key = `${row.city_name.trim().toLowerCase()}|${row.country_code}`;
    if (!seen.has(key)) seen.set(key, { city_name: row.city_name.trim(), country_code: row.country_code });
  }
  return [...seen.values()].sort((a, b) => a.city_name.localeCompare(b.city_name, 'fr'));
}

function fixCase(translated, original) {
  if (!translated) return translated;
  if (/^[a-z]/.test(translated) && /^[A-ZÀ-Ý]/.test(original)) {
    return translated[0].toUpperCase() + translated.slice(1);
  }
  return translated;
}

// Reproduit EXACTEMENT la résolution du nom utilisée par fetch-city-images.mjs
// (override en premier, sinon Google Translate), pour vérifier le nom qui
// sera réellement envoyé à Unsplash.
async function resolveQueryName(cityName, countryCode) {
  const override = cityNameQueryOverride(cityName, countryCode);
  if (override) return { name: override, via: 'override' };
  try {
    const translated = await getTranslatedField({
      admin: sb,
      contentType: 'city_image_query',
      contentId: `${countryCode}:${cityName.trim().toLowerCase()}`,
      field: 'city_name',
      sourceText: cityName,
      sourceLanguage: 'fr',
      targetLanguage: 'en',
    });
    return { name: fixCase(translated, cityName) || cityName, via: 'google_translate' };
  } catch (err) {
    return { name: cityName, via: 'fallback_error', error: err.message };
  }
}

async function wikipediaApi(lang, params, attempt = 1) {
  const url = `https://${lang}.wikipedia.org/w/api.php?${new URLSearchParams({ format: 'json', ...params })}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (res.status === 429 || res.status === 503) {
    if (attempt > 5) throw new Error(`Wikipedia ${lang} HTTP ${res.status} (abandon après ${attempt} tentatives)`);
    const retryAfterHeader = Number(res.headers.get('retry-after'));
    const waitMs = Number.isFinite(retryAfterHeader) && retryAfterHeader > 0 ? retryAfterHeader * 1000 : attempt * 3000;
    console.log(`  ⏳ Wikipedia ${res.status}, pause ${(waitMs / 1000).toFixed(0)}s (tentative ${attempt}/5)...`);
    await sleep(waitMs);
    return wikipediaApi(lang, params, attempt + 1);
  }
  if (!res.ok) throw new Error(`Wikipedia ${lang} HTTP ${res.status}`);
  return res.json();
}

// Cherche le titre de la page Wikipédia FR pour une ville, puis son
// équivalent EN via les liens interlangues natifs de Wikipédia (pas une
// traduction automatique — un mapping communautaire entre les deux articles).
async function lookupWikipediaEnglishTitle(cityName, countryName) {
  // 1. Tentative directe (titre exact, avec redirection suivie).
  let data = await wikipediaApi('fr', {
    action: 'query',
    titles: cityName,
    redirects: '1',
    prop: 'langlinks',
    lllang: 'en',
  });
  let page = Object.values(data.query.pages)[0];

  if (page.missing !== undefined || !page.langlinks) {
    // 2. Repli : recherche plein texte (avec indice pays pour désambiguïser).
    const searchQuery = countryName ? `${cityName} ${countryName}` : cityName;
    const searchData = await wikipediaApi('fr', {
      action: 'query',
      list: 'search',
      srsearch: searchQuery,
      srlimit: '1',
    });
    const hit = searchData.query?.search?.[0];
    if (!hit) return { found: false };

    data = await wikipediaApi('fr', {
      action: 'query',
      titles: hit.title,
      redirects: '1',
      prop: 'langlinks',
      lllang: 'en',
    });
    page = Object.values(data.query.pages)[0];
  }

  if (page.missing !== undefined) return { found: false };
  if (!page.langlinks || page.langlinks.length === 0) return { found: true, frTitle: page.title, enTitle: null };
  return { found: true, frTitle: page.title, enTitle: page.langlinks[0]['*'] };
}

// Compare de façon tolérante : ignore la casse, les suffixes de
// désambiguïsation Wikipédia ("(Espagne)", "(city)"...) et les variantes
// d'articles ("The Hague" vs "Hague").
function namesRoughlyMatch(a, b) {
  const norm = (s) => s
    .toLowerCase()
    .replace(/\s*\([^)]*\)\s*$/, '')
    .replace(/^the\s+/, '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // diacritiques
    .trim();
  const na = norm(a);
  const nb = norm(b);
  return na === nb || na.includes(nb) || nb.includes(na);
}

async function main() {
  const cities = await fetchEditorialCities();
  const cache = loadCache();
  const cachedCount = Object.keys(cache).length;
  console.log(`Vérification croisée Wikipédia pour ${cities.length} villes (${cachedCount} déjà en cache local)...\n`);

  const matches = [];
  const mismatches = [];
  const noWikipediaData = [];
  const errors = [];

  let i = 0;
  for (const city of cities) {
    i++;
    const cacheKey = `${city.country_code}:${city.city_name.trim().toLowerCase()}`;

    if (cache[cacheKey]) {
      const c = cache[cacheKey];
      if (c.kind === 'match') matches.push({ ...city, resolvedName: c.resolvedName, wikiEnTitle: c.wikiEnTitle });
      else if (c.kind === 'mismatch') mismatches.push({ ...city, resolvedName: c.resolvedName, wikiEnTitle: c.wikiEnTitle, via: c.via });
      else if (c.kind === 'noData') noWikipediaData.push({ ...city, resolvedName: c.resolvedName, reason: c.reason });
      continue; // erreurs volontairement PAS mises en cache : retentées à chaque run
    }

    try {
      const resolved = await resolveQueryName(city.city_name, city.country_code);
      const wiki = await lookupWikipediaEnglishTitle(city.city_name, null);

      if (!wiki.found) {
        const entry = { ...city, resolvedName: resolved.name, reason: 'page FR introuvable' };
        noWikipediaData.push(entry);
        cache[cacheKey] = { kind: 'noData', resolvedName: resolved.name, reason: entry.reason };
      } else if (!wiki.enTitle) {
        const entry = { ...city, resolvedName: resolved.name, reason: 'pas de lien interlangue EN' };
        noWikipediaData.push(entry);
        cache[cacheKey] = { kind: 'noData', resolvedName: resolved.name, reason: entry.reason };
      } else if (namesRoughlyMatch(resolved.name, wiki.enTitle)) {
        matches.push({ ...city, resolvedName: resolved.name, wikiEnTitle: wiki.enTitle });
        cache[cacheKey] = { kind: 'match', resolvedName: resolved.name, wikiEnTitle: wiki.enTitle };
      } else {
        mismatches.push({ ...city, resolvedName: resolved.name, wikiEnTitle: wiki.enTitle, via: resolved.via });
        cache[cacheKey] = { kind: 'mismatch', resolvedName: resolved.name, wikiEnTitle: wiki.enTitle, via: resolved.via };
      }
      saveCache(cache);
    } catch (err) {
      errors.push({ ...city, error: err.message });
    }

    if (i % 10 === 0) console.log(`... ${i}/${cities.length} (cache: ${Object.keys(cache).length})`);
    await sleep(2000); // politesse envers l'API Wikipédia — 429 rencontré même à 600ms, 2s pour repartir propre
  }

  const lines = [];
  lines.push(`=== Vérification croisée Wikipédia (FR -> EN), ${cities.length} villes ===\n`);
  lines.push(`Concordantes (nom confirmé par Wikipédia) : ${matches.length}`);
  lines.push(`⚠️  DIVERGENTES (à vérifier manuellement)   : ${mismatches.length}`);
  lines.push(`Pas de donnée Wikipédia exploitable        : ${noWikipediaData.length}`);
  lines.push(`Erreurs réseau/API                         : ${errors.length}\n`);

  if (mismatches.length) {
    lines.push('--- ⚠️  DIVERGENCES (nom utilisé pour la requête ≠ titre Wikipédia EN) ---');
    mismatches.forEach((r) =>
      lines.push(`${r.city_name} (${r.country_code}) : requête prévue = "${r.resolvedName}" (${r.via}) | Wikipédia EN = "${r.wikiEnTitle}"`)
    );
    lines.push('');
  }

  if (noWikipediaData.length) {
    lines.push('--- Pas de donnée Wikipédia (pas forcément un problème — lieux peu notables ou noms composés) ---');
    noWikipediaData.forEach((r) => lines.push(`${r.city_name} (${r.country_code}) : requête prévue = "${r.resolvedName}" [${r.reason}]`));
    lines.push('');
  }

  if (errors.length) {
    lines.push('--- Erreurs ---');
    errors.forEach((r) => lines.push(`${r.city_name} (${r.country_code}) : ${r.error}`));
    lines.push('');
  }

  lines.push('--- Concordantes (échantillon, 30 premières) ---');
  matches.slice(0, 30).forEach((r) => lines.push(`${r.city_name} (${r.country_code}) -> "${r.resolvedName}" ✓ (Wikipédia: "${r.wikiEnTitle}")`));

  const report = lines.join('\n');
  console.log('\n' + report.split('\n').slice(0, 20).join('\n'));
  const reportPath = join(ROOT, 'scripts', 'verify-city-name-translations-report.txt');
  writeFileSync(reportPath, report, 'utf8');
  console.log(`\nRapport complet écrit dans ${reportPath}`);
}

main().catch((err) => {
  console.error('✗ Erreur fatale :', err.message);
  process.exit(1);
});
