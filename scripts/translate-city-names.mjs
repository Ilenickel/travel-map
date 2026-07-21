// Traduit (et affiche pour audit) les 325 noms de ville éditoriaux FR → EN,
// AVANT le run Unsplash — pour vérifier concrètement que chaque nom est bien
// résolu en anglais (ex: Pékin → Beijing) plutôt que de simplement l'affirmer.
// Réutilise getTranslatedField (même cache `translations` que le vrai script
// d'import), donc ce passage pré-chauffe aussi ce cache : le run Unsplash de
// cette nuit n'aura plus besoin d'appeler Google Translate pour ces villes.
//
// Usage : node scripts/translate-city-names.mjs
// Écrit un rapport lisible dans scripts/translate-city-names-report.txt

import { writeFileSync } from 'fs';
import { join } from 'path';
import { createClient } from '@supabase/supabase-js';
import { loadEnv, ROOT } from './_shared-env.mjs';
import { getTranslatedField, TranslationUnavailableError } from '../api/_lib/translation.js';
import { cityNameQueryOverride } from '../api/_lib/cityNameOverrides.js';

const env = loadEnv();
const sb = createClient(env.VITE_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

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

async function main() {
  const cities = await fetchEditorialCities();
  console.log(`Traduction de ${cities.length} noms de ville distincts (FR → EN)...\n`);

  const results = [];
  let errors = 0;

  for (const city of cities) {
    const override = cityNameQueryOverride(city.city_name, city.country_code);
    if (override) {
      results.push({ ...city, translated: override, changed: override !== city.city_name, error: null, overridden: true });
      continue;
    }
    try {
      const raw = await getTranslatedField({
        admin: sb,
        contentType: 'city_image_query',
        contentId: `${city.country_code}:${city.city_name.trim().toLowerCase()}`,
        field: 'city_name',
        sourceText: city.city_name,
        sourceLanguage: 'fr',
        targetLanguage: 'en',
      });
      const translated = fixCase(raw, city.city_name);
      results.push({ ...city, translated, changed: translated !== city.city_name, error: null });
    } catch (err) {
      errors++;
      const msg = err instanceof TranslationUnavailableError ? err.message : (err.message || String(err));
      results.push({ ...city, translated: null, changed: false, error: msg });
    }
  }

  const changed = results.filter((r) => r.changed);
  const unchanged = results.filter((r) => !r.changed && !r.error);
  const failed = results.filter((r) => r.error);

  const lines = [];
  lines.push(`=== Traduction FR → EN des ${cities.length} villes éditoriales ===\n`);
  lines.push(`Traduites (changées)      : ${changed.length}`);
  lines.push(`Déjà identiques FR = EN   : ${unchanged.length}`);
  lines.push(`Échecs de traduction      : ${failed.length}\n`);

  lines.push('--- Traductions effectives (FR -> EN) ---');
  changed.forEach((r) => lines.push(`${r.city_name} (${r.country_code}) -> ${r.translated}${r.overridden ? '  [correction manuelle]' : ''}`));

  lines.push('\n--- Inchangées (déjà identiques en anglais, ou nom propre non traduisible) ---');
  unchanged.forEach((r) => lines.push(`${r.city_name} (${r.country_code})`));

  if (failed.length) {
    lines.push('\n--- ÉCHECS (à vérifier avant le run) ---');
    failed.forEach((r) => lines.push(`${r.city_name} (${r.country_code}) : ${r.error}`));
  }

  const report = lines.join('\n');
  console.log(report);
  const reportPath = join(ROOT, 'scripts', 'translate-city-names-report.txt');
  writeFileSync(reportPath, report, 'utf8');
  console.log(`\nRapport écrit dans ${reportPath}`);

  if (errors > 0) {
    console.log(`\n⚠️  ${errors} échec(s) — le script d'import repliera automatiquement sur le nom français pour ces villes.`);
  }
}

main().catch((err) => {
  console.error('✗ Erreur fatale :', err.message);
  process.exit(1);
});
