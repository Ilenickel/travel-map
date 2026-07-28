// Applique une liste de remplacements manuels de photos de PAYS choisis à la
// main dans scripts/output/country-image-review.html (voir
// build-country-image-review.mjs) : lit un fichier JSON [{country_code,
// new_unsplash_url}], résout chaque lien vers l'ID de photo Unsplash,
// récupère les métadonnées officielles via GET /photos/:id, et met à jour
// (upsert) la ligne correspondante dans country_images.
//
// Usage :
//   node scripts/apply-country-image-overrides.mjs --file=chemin/vers/changes.json
//
// Prérequis : .env avec VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY /
// UNSPLASH_ACCESS_KEY.

import { readFileSync } from 'fs';
import { createClient } from '@supabase/supabase-js';
import { loadEnv } from './_shared-env.mjs';
import { upsertCountryImageCache } from '../api/_lib/countryImages.js';

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
  console.error('✗ Usage : node scripts/apply-country-image-overrides.mjs --file=chemin/vers/changes.json');
  process.exit(1);
}
const FILE_PATH = fileArg.split('=')[1];

// Un ID de photo Unsplash fait toujours 11 caractères ([A-Za-z0-9_-]), placés
// en toute fin d'URL (page "/photos/..." ou lien direct images.unsplash.com).
// Certains IDs contiennent eux-mêmes des tirets (ex: "sNcCQl2a-_Y") — on ne
// peut donc PAS se fier à un split sur le dernier "-", seulement à la
// longueur fixe.
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

async function main() {
  const changes = JSON.parse(readFileSync(FILE_PATH, 'utf8'));
  console.log(`${changes.length} pays à mettre à jour.`);

  let ok = 0, failed = 0;
  for (const change of changes) {
    const id = extractPhotoId(change.new_unsplash_url);
    if (!id) {
      console.error(`✗ ${change.country_code} — impossible d'extraire l'ID de photo depuis : ${change.new_unsplash_url}`);
      failed++;
      continue;
    }
    try {
      const photo = await fetchPhotoById(id);
      const result = {
        image_url: photo.urls.regular,
        thumb_url: photo.urls.small,
        unsplash_id: photo.id,
        author_name: photo.user?.name ?? null,
        author_url: photo.user?.links?.html ?? null,
        likes: photo.likes ?? 0,
      };
      await upsertCountryImageCache(sb, change.country_code, result);
      console.log(`✓ ${change.country_code} — mis à jour (${result.author_name}, ${result.likes} likes, id=${id})`);
      ok++;
    } catch (err) {
      console.error(`✗ ${change.country_code} — ${err.message}`);
      failed++;
    }
    await sleep(300); // marge quota Unsplash (50 req/h en clé démo, largement sous le plafond ici)
  }

  console.log(`\nTerminé : ${ok} mis à jour, ${failed} en erreur.`);
}

main().catch((err) => {
  console.error('✗ Erreur fatale :', err.message);
  process.exitCode = 1;
});
