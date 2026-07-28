// Applique une liste de remplacements manuels de photos de VILLES choisis à
// la main dans scripts/output/city-image-review.html (voir
// build-city-image-review.mjs) — équivalent de
// apply-country-image-overrides.mjs pour la table city_images.
//
// Usage :
//   node scripts/apply-city-image-overrides.mjs --file=chemin/vers/changes.json
//
// Format attendu : [{ city_name, country_code, new_unsplash_url }, ...]
// (city_name = valeur exacte de data-city de la carte, déjà le nom source
// stocké en base — ne pas retaper à la main).
//
// Prérequis : .env avec VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY /
// UNSPLASH_ACCESS_KEY.

import { readFileSync } from 'fs';
import { createClient } from '@supabase/supabase-js';
import { loadEnv } from './_shared-env.mjs';
import { upsertCityImageCache } from '../api/_lib/cityImages.js';

const env = loadEnv();
const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;
const UNSPLASH_ACCESS_KEY = env.UNSPLASH_ACCESS_KEY;
if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !UNSPLASH_ACCESS_KEY) {
  console.error('✗ Variables manquantes dans .env : VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY / UNSPLASH_ACCESS_KEY');
  process.exit(1);
}
const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });

const fileArg = process.argv.find((a) => a.startsWith('--file='));
if (!fileArg) {
  console.error('✗ Usage : node scripts/apply-city-image-overrides.mjs --file=chemin/vers/changes.json');
  process.exit(1);
}
const FILE_PATH = fileArg.split('=')[1];

// Voir apply-country-image-overrides.mjs : un ID de photo Unsplash fait
// toujours 11 caractères ([A-Za-z0-9_-]) en toute fin d'URL — certains IDs
// contiennent eux-mêmes des tirets, donc on prend les 11 derniers caractères
// plutôt que de découper sur le dernier "-".
function extractPhotoId(url) {
  const clean = url.trim().replace(/\/+$/, '').split('?')[0];
  const tail = clean.slice(-11);
  return /^[A-Za-z0-9_-]{11}$/.test(tail) ? tail : null;
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function fetchPhotoById(id) {
  const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
  });
  if (!res.ok) throw new Error(`Unsplash HTTP ${res.status} pour l'ID ${id}`);
  return res.json();
}

// Coordonnées existantes conservées telles quelles (pas de re-géocodage) : on
// remplace juste la photo, pas la localisation déjà validée de la ville.
async function fetchExistingCoords(cityName, countryCode) {
  const { data } = await sb
    .from('city_images')
    .select('lat, lng')
    .eq('city_name_key', cityName.trim().toLowerCase())
    .eq('country_code', countryCode)
    .maybeSingle();
  return data && data.lat != null && data.lng != null ? { lat: data.lat, lng: data.lng } : null;
}

async function main() {
  const changes = JSON.parse(readFileSync(FILE_PATH, 'utf8'));
  console.log(`${changes.length} villes à mettre à jour.`);

  let ok = 0, failed = 0;
  for (const change of changes) {
    const id = extractPhotoId(change.new_unsplash_url);
    if (!id) {
      console.error(`✗ ${change.city_name} (${change.country_code}) — impossible d'extraire l'ID de photo depuis : ${change.new_unsplash_url}`);
      failed++;
      continue;
    }
    try {
      const [photo, coords] = await Promise.all([
        fetchPhotoById(id),
        fetchExistingCoords(change.city_name, change.country_code),
      ]);
      const result = {
        queryUsed: `override manuel (${id})`,
        notFound: false,
        image_url: photo.urls.regular,
        thumb_url: photo.urls.small,
        unsplash_id: photo.id,
        author_name: photo.user?.name ?? null,
        author_url: photo.user?.links?.html ?? null,
        likes: photo.likes ?? 0,
        fallbackTier: null,
      };
      await upsertCityImageCache(sb, change.city_name, change.country_code, result, coords);
      console.log(`✓ ${change.city_name} (${change.country_code}) — mis à jour (${result.author_name}, ${result.likes} likes, id=${id})`);
      ok++;
    } catch (err) {
      console.error(`✗ ${change.city_name} (${change.country_code}) — ${err.message}`);
      failed++;
    }
    await sleep(300);
  }

  console.log(`\nTerminé : ${ok} mis à jour, ${failed} en erreur.`);
}

main().catch((err) => {
  console.error('✗ Erreur fatale :', err.message);
  process.exitCode = 1;
});
