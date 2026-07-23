// Résolution des photos de PAYS (une par pays) : cache Supabase (table
// country_images) + appel Unsplash à la volée si absent. Sert d'illustration
// de fond aux cartes de voyage de l'écran de planification (une carte par
// voyage, image = pays de la 1ère destination).
//
// Volontairement bien plus simple que cityImages.js : un nom de pays n'a pas
// besoin de géocodage ni de matching cross-langue (pas d'exonymes ambigus à
// l'échelle d'un pays comme il y en a pour les villes) — on part directement
// du nom ANGLAIS du pays (COUNTRIES[code].name.en, connu côté appelant) et on
// réutilise l'appel Unsplash bas niveau + la sélection de photo partagés avec
// cityImages.js pour ne pas dupliquer cette logique.
//
// Un SEUL endroit décide "comment on choisit la photo d'un pays" : cette
// résolution est partagée entre l'action serveur 'get-country-image'
// (api/trip-templates.js, à la demande) et scripts/fetch-country-images.mjs
// (import initial en masse des 185 pays) — comme le couple équivalent côté
// villes.
//
// Schéma country_images (voir supabase/country_images_table.sql) : une ligne
// par pays (country_code unique). La PRÉSENCE d'une ligne = pays déjà résolu,
// jamais re-recherché (même politique que city_images) ; image_url NULL sur
// cette ligne = recherché mais aucune photo exploitable (pas de colonne
// not_found séparée, inutile ici : présence de ligne suffit).
import { unsplashSearch, pickBestFromResults, UnsplashUnavailableError } from './cityImages.js';

// Recherche Unsplash pour un nom de PAYS déjà en anglais, en cascade de
// paliers de plus en plus larges — même esprit que searchBestCityPhoto, mais
// adaptée à un pays. Paliers, dans l'ordre :
//   1. "{pays}" — paysage (le nom seul suffit dans l'immense majorité des cas,
//      ex: "Japan"/"Iceland" renvoient d'excellents paysages)
//   2. "{pays} landscape" — paysage (précise l'intention si le nom seul
//      renvoie surtout des drapeaux/cartes)
//   3. "{pays}" — SANS filtre d'orientation (petit pays à faible couverture
//      Unsplash, comme pour les villes : l'orientation landscape peut vider un
//      corpus déjà minuscule)
// N'essaie un palier suivant QUE si le précédent a 0 résultat exploitable.
// `searchFn` injectable (le script bulk y branche sa gestion de quota/pause) —
// par défaut l'appel direct unsplashSearch (route serveur synchrone).
export async function searchBestCountryPhoto(englishCountryName, searchFn = unsplashSearch) {
  const attempts = [
    { query: englishCountryName },
    { query: `${englishCountryName} landscape` },
    { query: englishCountryName, orientation: null },
  ];

  let lastQueryUsed = englishCountryName;
  for (const attempt of attempts) {
    const data = await searchFn(attempt.query, attempt.orientation !== undefined ? { orientation: attempt.orientation } : undefined);
    lastQueryUsed = attempt.query;
    const best = pickBestFromResults(data);
    if (best) return { notFound: false, queryUsed: attempt.query, ...best };
  }
  return { notFound: true, queryUsed: lastQueryUsed };
}

const COUNTRY_IMAGE_FIELDS = 'country_code, image_url, thumb_url, unsplash_id, author_name, author_url, likes, fetched_at';

export async function getCachedCountryImage(admin, countryCode) {
  const { data, error } = await admin
    .from('country_images')
    .select(COUNTRY_IMAGE_FIELDS)
    .eq('country_code', countryCode)
    .maybeSingle();
  if (error) { console.error('[countryImages] lecture cache:', error.message); return null; }
  return data;
}

export async function upsertCountryImageCache(admin, countryCode, result) {
  const row = {
    country_code: countryCode,
    image_url: result.image_url ?? null,
    thumb_url: result.thumb_url ?? null,
    unsplash_id: result.unsplash_id ?? null,
    author_name: result.author_name ?? null,
    author_url: result.author_url ?? null,
    likes: result.likes ?? null,
    fetched_at: new Date().toISOString(),
  };
  const { error } = await admin.from('country_images').upsert(row, { onConflict: 'country_code' });
  if (error) console.error('[countryImages] upsert cache:', error.message);
}

// Résolution complète pour UN pays :
//   1. Cache (country_images) — présence de ligne = déjà résolu, on la renvoie
//      telle quelle (image_url éventuellement NULL = pas de photo, à l'appelant
//      d'afficher son repli visuel).
//   2. Rien en cache : recherche Unsplash (cascade) + stockage.
//
// Sur erreur Unsplash (réseau, quota) : PAS de mise en cache (transitoire, à
// retenter au prochain appel) — renvoie "pas de photo" pour cet appel-ci.
export async function resolveCountryImage(admin, countryCode, countryName) {
  const cached = await getCachedCountryImage(admin, countryCode);
  if (cached) return { fromCache: true, ...cached, notFound: !cached.image_url };

  if (!countryName) {
    // Sans nom de pays exploitable, aucune requête pertinente possible — on ne
    // met rien en cache (le pays sera retenté si le nom est fourni plus tard).
    return { fromCache: false, country_code: countryCode, notFound: true };
  }

  try {
    const result = await searchBestCountryPhoto(countryName);
    await upsertCountryImageCache(admin, countryCode, result);
    return { fromCache: false, country_code: countryCode, ...result };
  } catch (err) {
    console.error(`[countryImages] résolution "${countryName}" (${countryCode}) :`, err.message);
    return {
      fromCache: false,
      country_code: countryCode,
      notFound: true,
      error: true,
      rateLimited: err instanceof UnsplashUnavailableError && !!err.rateLimited,
    };
  }
}
