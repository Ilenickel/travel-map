// Ponctuel (2026-07-22) — corrige les entrées de city_images créées avec une
// requête Unsplash dans la mauvaise langue (français au lieu d'anglais),
// causées par un bug de geocodeCityWithEnglishName qui avalait silencieusement
// les erreurs Geoapify transitoires (rafale de requêtes sans throttle — voir
// api/_lib/cityGeocode.js) : la vérification de traduction échouait à tort et
// repliait sur le nom d'origine.
//
// Ne relance PAS toute la recherche d'images : recalcule seulement le nom
// anglais attendu (avec le correctif + retry) pour chaque ville déjà en
// cache, et SUPPRIME les lignes où la requête utilisée ne correspond pas —
// scripts/fetch-city-images.mjs ne retraite que les villes absentes du
// cache, donc relancer ce script après suppression suffit à corriger
// uniquement les villes concernées.
//
// Usage :
//   node scripts/purge-mislanguage-city-images.mjs             dry-run (liste sans supprimer)
//   node scripts/purge-mislanguage-city-images.mjs --apply      supprime réellement les lignes suspectes

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { createClient } from '@supabase/supabase-js';
import { loadEnv, ROOT } from './_shared-env.mjs';
import { resolveEnglishCityNameForQuery } from '../api/_lib/cityImages.js';

const env = loadEnv();
const sb = createClient(env.VITE_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });

const APPLY = process.argv.includes('--apply');

function alpha2FromEmoji(emoji) {
  if (!emoji) return null;
  const chars = [...emoji];
  if (chars.length < 2) return null;
  return chars.slice(0, 2).map((c) => String.fromCharCode(c.codePointAt(0) - 0x1f1e6 + 65)).join('');
}

function buildCountryAlpha2Map() {
  const map = {};
  const dataDir = join(ROOT, 'src', 'data');
  for (const file of readdirSync(dataDir)) {
    if (!file.endsWith('.js') || file === 'index.js') continue;
    const src = readFileSync(join(dataDir, file), 'utf8');
    const codeMatch = src.match(/code:\s*["']([A-Z]{3})["']/);
    const emojiMatch = src.match(/emoji:\s*["']([^"']*)["']/);
    if (codeMatch) map[codeMatch[1]] = alpha2FromEmoji(emojiMatch?.[1]);
  }
  return map;
}

const COUNTRY_ALPHA2 = buildCountryAlpha2Map();

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

async function fetchAllRows() {
  let all = [];
  let from = 0;
  const page = 1000;
  while (true) {
    const { data, error } = await sb
      .from('city_images')
      .select('city_name, country_code, query_used')
      .range(from, from + page - 1);
    if (error) throw new Error(`Lecture city_images : ${error.message}`);
    all = all.concat(data);
    if (data.length < page) break;
    from += page;
  }
  return all;
}

async function main() {
  const rows = await fetchAllRows();
  console.log(`${rows.length} ville(s) en cache — recalcul du nom anglais attendu...`);

  const suspects = [];
  let checked = 0;

  for (const row of rows) {
    checked++;
    if (!row.query_used) continue;
    const usedCityPart = row.query_used.split(',')[0].trim().toLowerCase();

    const alpha2 = COUNTRY_ALPHA2[row.country_code] || null;
    const resolved = await resolveEnglishCityNameForQuery(sb, row.city_name, row.country_code, alpha2, 'fr');
    const expected = (resolved?.name || row.city_name).trim().toLowerCase();

    if (usedCityPart !== expected) {
      suspects.push({ city_name: row.city_name, country_code: row.country_code, query_used: row.query_used, expected: resolved?.name });
    }

    if (checked % 50 === 0) console.log(`... ${checked}/${rows.length}`);

    // Throttle : sans pause, ce script recrée exactement la rafale de
    // requêtes Geoapify qui causait le bug d'origine (voir cityGeocode.js) —
    // un échec transitoire pendant CE recalcul ferait retomber `expected` sur
    // le nom français d'origine, masquant à tort une ligne réellement fautive
    // (faux négatif, constaté le 2026-07-22 sur Berne/Bologne).
    await sleep(300);
  }

  console.log(`\n${suspects.length} entrée(s) suspecte(s) (requête dans la mauvaise langue) :`);
  suspects.forEach((s) => console.log(`  - ${s.city_name} (${s.country_code}) : requête="${s.query_used}" — attendu="${s.expected}"`));

  if (!APPLY) {
    console.log(`\n[dry-run] Aucune suppression effectuée. Relancer avec --apply pour supprimer ces ${suspects.length} ligne(s).`);
    return;
  }

  for (const s of suspects) {
    const { error } = await sb.from('city_images').delete().eq('city_name', s.city_name).eq('country_code', s.country_code);
    if (error) console.error(`✗ Suppression échouée pour ${s.city_name} (${s.country_code}) : ${error.message}`);
    else console.log(`✓ Supprimé : ${s.city_name} (${s.country_code})`);
  }
  console.log(`\n${suspects.length} ligne(s) supprimée(s). Relancez node scripts/fetch-city-images.mjs pour les recréer avec le nom correct.`);
}

main().catch((err) => {
  console.error('✗ Erreur fatale :', err.message);
  process.exitCode = 1;
});
