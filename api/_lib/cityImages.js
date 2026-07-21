// Logique centrale de résolution des photos de ville : cache Supabase
// (table city_images) + appel Unsplash à la volée si absent, avec repli sur
// une requête neutre (voir décisions du 2026-07-20/21). Partagée entre :
//  - l'action serveur 'get-city-image' (api/trip-templates.js), appelée
//    quand un visiteur consulte une ville pas encore en cache (suggestion
//    éditoriale OU ville ajoutée à la main par un utilisateur) ;
//  - scripts/fetch-city-images.mjs, l'import initial en masse des villes
//    éditoriales.
// Un SEUL endroit qui décide comment on choisit une photo garantit que les
// deux chemins produisent EXACTEMENT le même résultat pour une même ville.
//
// ─── Matching CROSS-LANGUE par coordonnées (2026-07-21) ───────────────────
// Le cache n'est PLUS indexé uniquement par nom : un utilisateur qui tape
// "Sevilla" (site en espagnol) et la suggestion éditoriale "Séville" (source
// française) sont la MÊME ville réelle mais des chaînes totalement
// différentes — les indexer par nom créerait 2 lignes de cache (donc 2
// recherches Unsplash, potentiellement 2 photos différentes pour la même
// ville). Comme pour city_geocache/handleListCities (api/trip-templates.js,
// même problème avec "Pékin"/"Beijing"), le matching se fait par PROXIMITÉ
// GÉOGRAPHIQUE (distanceKm/SAME_CITY_RADIUS_KM) : deux noms différents pour
// le même lieu géocodent vers des coordonnées proches. Le nom reste un repli
// (utile si le géocodage échoue, ou pour les lignes historiques).
//
// ─── Toujours une requête Unsplash en ANGLAIS (2026-07-21) ────────────────
// Testé le 2026-07-20 : l'écart de résultats est énorme en faveur de
// l'anglais (ex: "Vienna" = 1948 résultats vs "Vienne" = 11). La langue
// SOURCE du nom fourni est donc paramétrable (sourceLanguage — 'fr' pour les
// suggestions éditoriales, la langue du site pour une ville tapée par un
// utilisateur), mais la cible de traduction reste TOUJOURS 'en'.
import { getTranslatedField } from './translation.js';
import { cityNameQueryOverride } from './cityNameOverrides.js';
import { resolveCityCoordinates, geocodeCityWithEnglishName, distanceKm, SAME_CITY_RADIUS_KM } from './cityGeocode.js';

const UNSPLASH_SEARCH_URL = 'https://api.unsplash.com/search/photos';

export class UnsplashUnavailableError extends Error {
  constructor(message, { rateLimited = false } = {}) {
    super(message);
    this.name = 'UnsplashUnavailableError';
    this.rateLimited = rateLimited;
  }
}

function unsplashKey() {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) throw new UnsplashUnavailableError('Clé Unsplash absente côté serveur (UNSPLASH_ACCESS_KEY)');
  return key;
}

// Google Translate renvoie parfois la première lettre en minuscule sur les
// noms propres passés tels quels (ex: "New York" -> "new York") —
// cosmétique mais corrigé pour ne pas stocker/envoyer une casse fautive.
function fixCase(translated, original) {
  if (!translated) return translated;
  if (/^[a-z]/.test(translated) && /^[A-ZÀ-Ý]/.test(original)) {
    return translated[0].toUpperCase() + translated.slice(1);
  }
  return translated;
}

// Résout le nom anglais pour la requête Unsplash via GOOGLE TRANSLATE — repli
// utilisé uniquement quand le géocodeur ne renvoie pas de nom (voir
// resolveEnglishCityNameForQuery). Reste la voie PRINCIPALE du script bulk
// (scripts/fetch-city-images.mjs), dont les 325 noms éditoriaux ont été
// validés (croisement Wikipédia). Ordre :
//  1. Correction manuelle connue (cityNameOverrides.js) — homographes que
//     Google traduit à tort (Grenade→l'arme, Cassis→le fruit, etc.).
//  2. Sinon traduction -> 'en', mise en cache (translations).
//
// `sourceLanguage` = langue supposée du nom (indice pour Google). On NE force
// PAS l'auto-détection : testé le 2026-07-21, Google auto-détecte à tort
// "Sevilla" comme de l'anglais (→ "Sevilla" inchangé) alors qu'avec source
// 'es' explicite il donne bien "Seville". Pour un site déjà en anglais, le
// nom fourni est presque toujours déjà anglais — on le garde tel quel
// (Google court-circuiterait de toute façon source==cible) ; le cas rare
// "nom local sur site EN" (ex: 'Sevilla') est rattrapé EN AMONT par le nom
// canonique du géocodeur, ce repli n'a donc pas à le gérer.
//
// sourceLanguage EST inclus dans la clé de cache (contentId) : sans lui, un
// premier appel dans une langue source poserait un résultat resservi à tort
// pour la même chaîne dans une autre langue source (empoisonnement — une même
// chaîne peut se traduire différemment selon la langue supposée).
export async function resolveQueryCityName(admin, cityName, countryCode, sourceLanguage = 'fr') {
  const override = cityNameQueryOverride(cityName, countryCode);
  if (override) return override;
  if (sourceLanguage === 'en') return cityName; // déjà la langue cible

  try {
    const translated = await getTranslatedField({
      admin,
      contentType: 'city_image_query',
      contentId: `${countryCode}:${sourceLanguage}:${cityName.trim().toLowerCase()}`,
      field: 'city_name',
      sourceText: cityName,
      sourceLanguage,
      targetLanguage: 'en',
    });
    return fixCase(translated, cityName) || cityName;
  } catch (err) {
    console.error(`[cityImages] traduction indisponible pour "${cityName}" :`, err.message);
    return cityName;
  }
}

// Nom anglais à envoyer à Unsplash pour une ville PAS encore en cache —
// TOUJOURS en anglais, quelle que soit la langue du site (Unsplash indexe
// très majoritairement en anglais, écart de résultats énorme sur les
// exonymes, vérifié le 2026-07-20). Ordre :
//  1. Correction manuelle connue (cityNameOverrides.js) — filet de sécurité
//     prioritaire, même si le géocodeur gère déjà la plupart des cas.
//  2. Nom anglais canonique du GÉOCODEUR (Geoapify lang=en) — source
//     autoritaire, gère tous les exonymes/homographes et toutes les langues
//     d'entrée nativement (Sevilla/Séville→Seville, Grenade→Granada...).
//  3. Repli Google Translate (resolveQueryCityName) si le géocodeur ne
//     renvoie rien pour le nom brut (nom qui n'est pas une ville reconnue
//     telle quelle, ou Geoapify indisponible) — RE-VÉRIFIÉ à l'étape 4.
//  4. Garde-fou : le résultat de Google (étape 3) est lui-même re-géocodé.
//     S'il ne correspond PAS à une vraie ville avec confiance, c'est le
//     signe d'une traduction foireuse (Google a traduit un mot du dictionnaire
//     plutôt qu'un nom propre — le cas "Cassis"→"Blackcurrant" qui nous a
//     alertés le 2026-07-20) : on ignore alors la traduction et on repart
//     du nom d'origine tel quel, plutôt que de faire confiance à un résultat
//     non vérifiable. Ce filet couvre aussi les villes JAMAIS auditées
//     (au-delà des 325 éditoriales + 11 corrections manuelles connues) —
//     cityNameOverrides.js reste l'échappatoire pour patcher un nouveau cas
//     découvert plus tard, mais ce garde-fou évite qu'un cas non découvert
//     parte silencieusement en production.
// Renvoie { name, region } — `region` (état/province, capturé sans coût
// supplémentaire dans le même appel géocodeur) sert de palier d'élargissement
// à searchBestCityPhoto si la ville elle-même n'a aucune photo exploitable.
// null si le nom n'a jamais pu être confirmé par un géocodage (override ou
// repli texte pur, sans coordonnées associées).
export async function resolveEnglishCityNameForQuery(admin, cityName, countryCode, countryAlpha2, sourceLanguage = 'fr') {
  const override = cityNameQueryOverride(cityName, countryCode);
  if (override) return { name: override, region: null };

  const geo = await geocodeCityWithEnglishName(cityName, countryAlpha2);
  if (geo?.englishName) return { name: geo.englishName, region: geo.region };

  const translated = await resolveQueryCityName(admin, cityName, countryCode, sourceLanguage);
  if (translated.trim().toLowerCase() === cityName.trim().toLowerCase()) return { name: translated, region: null }; // rien traduit, rien à vérifier

  const verify = await geocodeCityWithEnglishName(translated, countryAlpha2);
  if (verify?.englishName) return { name: verify.englishName, region: verify.region }; // confirmé par le géocodeur, encore mieux : nom canonique

  console.error(`[cityImages] traduction "${cityName}" -> "${translated}" non confirmée par le géocodeur (probable erreur de traduction) — repli sur le nom d'origine.`);
  return { name: cityName, region: null };
}

// Appel Unsplash bas niveau, exporté pour être réutilisé tel quel par
// scripts/fetch-city-images.mjs (qui l'enrobe de sa propre gestion de
// quota/pause horaire — inadaptée ici, une route serveur ne peut pas se
// permettre d'attendre 61 minutes en plein milieu d'une requête HTTP).
// Timeout court (8s) : appelé depuis une fonction serverless Vercel, une
// requête qui traîne ne doit jamais faire dépasser la limite d'exécution de
// la fonction (10s sur le plan Hobby) — mieux vaut échouer proprement que de
// faire planter toute la réponse.
export async function unsplashSearch(query, { timeoutMs = 8000, orientation = 'landscape' } = {}) {
  const key = unsplashKey();
  const params = { query, per_page: '30' };
  if (orientation) params.orientation = orientation;
  const url = `${UNSPLASH_SEARCH_URL}?${new URLSearchParams(params)}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  let res;
  try {
    res = await fetch(url, { headers: { Authorization: `Client-ID ${key}` }, signal: controller.signal });
  } catch (err) {
    throw new UnsplashUnavailableError(`Réseau Unsplash : ${err.message}`);
  } finally {
    clearTimeout(timeout);
  }

  if (res.status === 429 || res.status === 403) {
    const body = await res.json().catch(() => ({}));
    const isRateLimit = res.status === 429 || (Array.isArray(body?.errors) && body.errors.some((e) => /rate limit/i.test(e)));
    throw new UnsplashUnavailableError('Unsplash indisponible (quota atteint)', { rateLimited: isRateLimit });
  }
  if (!res.ok) throw new UnsplashUnavailableError(`Unsplash HTTP ${res.status}`);
  return res.json();
}

// Légendes (alt_description/description, générées par Unsplash en anglais)
// signalant un sujet hors-propos pour illustrer une VILLE — testé sur les 4
// premiers échecs constatés en prod (2026-07-22) : Cu Chi (intérieur de bus,
// "seats"/"bus"), Büyükada (bouquet, "flowers"), Wieliczka (cadenas,
// "lock"/"door"), Kunming (lotus, "flower"/"plant") — les 4 sont des gros
// plans d'objets/sujets génériques, PAS des photos de lieu (bâtiment, rue,
// paysage, monument). Une photo dont la légende ne contient QUE ce type de
// mot est écartée, même si elle est la plus likée du lot — voir
// pickBestFromResults ci-dessous.
const IRRELEVANT_SUBJECT_KEYWORDS = [
  'flower', 'flowers', 'plant', 'leaf', 'leaves', 'petal',
  'door', 'lock', 'padlock', 'key', 'window sill',
  'bus', 'seat', 'seats', 'interior', 'indoor', 'room',
  'person', 'people', 'portrait', 'close-up', 'closeup', 'macro',
  'food', 'dish', 'meal', 'plate', 'cup', 'coffee', 'drink', 'fruit', 'vegetable',
  'animal', 'dog', 'cat', 'bird', 'insect', 'bee', 'butterfly',
  'text', 'sign', 'menu', 'book', 'paper',
];
const IRRELEVANT_SUBJECT_REGEX = new RegExp(`\\b(${IRRELEVANT_SUBJECT_KEYWORDS.join('|')})\\b`, 'i');

// Vrai si la légende Unsplash (alt_description/description) évoque un sujet
// générique hors-lieu plutôt qu'un lieu à photographier. Absence totale de
// légende (arrive parfois) = on ne rejette PAS, faute de signal (mieux vaut
// laisser passer que rejeter à tort sans preuve).
function looksIrrelevant(photo) {
  const caption = `${photo.alt_description || ''} ${photo.description || ''}`.trim();
  if (!caption) return false;
  return IRRELEVANT_SUBJECT_REGEX.test(caption);
}

// Sélectionne la photo la plus likée d'une réponse Unsplash PARMI celles dont
// la légende n'évoque pas un sujet générique hors-lieu (voir looksIrrelevant)
// — pas juste "la plus likée" tout court : un gros plan de fleurs peut être
// plus liké qu'une vraie photo de ville sans être pertinent pour autant.
// null si aucun résultat exploitable (déclenche le palier suivant de la
// cascade — voir searchBestCityPhoto). Exporté pour être réutilisé tel quel
// par scripts/fetch-city-images.mjs.
export function pickBestFromResults(data) {
  if (!data?.results?.length) return null;
  const sorted = [...data.results].sort((a, b) => b.likes - a.likes);
  const best = sorted.find((p) => !looksIrrelevant(p)) || null;
  if (!best) return null;
  return {
    image_url: best.urls.regular,
    thumb_url: best.urls.small,
    unsplash_id: best.id,
    author_name: best.user?.name ?? null,
    author_url: best.user?.links?.html ?? null,
    likes: best.likes ?? 0,
  };
}

// Recherche Unsplash pour un nom de ville DÉJÀ résolu en anglais, en cascade
// de paliers de plus en plus larges — testé le 2026-07-22 : le filtre
// `orientation=landscape` (utile pour la cohérence visuelle des cartes) fait
// tomber à 0 des requêtes qui ont pourtant 1-2 résultats sans lui (cas réel :
// "Cu Chi, Vietnam" — corpus Unsplash déjà minuscule pour une petite ville,
// le filtre d'orientation le vide entièrement). Paliers, dans l'ordre :
//   1. "{ville}, {pays}" — paysage (qualité/pertinence maximales)
//   2. "{ville}" seule — paysage
//   3. "{ville}, {pays}" — SANS filtre d'orientation
//   4. "{ville}" seule — sans filtre d'orientation
//   5. "{région}, {pays}" — paysage (élargissement géographique, seulement si
//      `regionName` fourni — ex: état/province du géocodeur) : moins
//      spécifique mais TOUJOURS mieux qu'aucune image pour l'utilisateur.
//   6. "{pays}" seule — paysage (dernier recours avant d'abandonner)
// Version "single-shot" (pas de gestion de quota/pause) pour la route
// serveur — voir scripts/fetch-city-images.mjs pour l'équivalent bulk avec
// pause horaire (même cascade, injectée via `searchFn`).
//
// N'essaie un palier suivant QUE si le précédent a 0 résultat exploitable :
// dans l'immense majorité des cas (324/325 lors du run initial), le palier 1
// suffit — cette cascade ne coûte des requêtes supplémentaires que pour les
// rares villes à faible couverture Unsplash, jamais pour les autres.
export async function searchBestCityPhoto(englishCityName, countryName, regionName = null, searchFn = unsplashSearch) {
  const attempts = [
    countryName && { query: `${englishCityName}, ${countryName}` },
    { query: englishCityName },
    countryName && { query: `${englishCityName}, ${countryName}`, orientation: null },
    { query: englishCityName, orientation: null },
    regionName && countryName && { query: `${regionName}, ${countryName}`, broadened: true },
    countryName && { query: countryName, broadened: true },
  ].filter(Boolean);

  let lastQueryUsed = englishCityName;
  for (let i = 0; i < attempts.length; i++) {
    const attempt = attempts[i];
    const data = await searchFn(attempt.query, attempt.orientation !== undefined ? { orientation: attempt.orientation } : undefined);
    lastQueryUsed = attempt.query;
    const best = pickBestFromResults(data);
    // fallbackTier : palier ayant fourni le résultat retenu (1-indexé) — pas
    // utilisé pour la logique elle-même, seulement persisté en base pour
    // repérer facilement les correspondances les moins fiables (palier 3+)
    // sans avoir à ré-auditer 325+ photos à l'œil à chaque fois.
    if (best) return { notFound: false, queryUsed: attempt.query, broadened: !!attempt.broadened, fallbackTier: i + 1, ...best };
  }

  return { notFound: true, queryUsed: lastQueryUsed, fallbackTier: null };
}

// ── Cache : lookup géographique d'abord, repli par nom exact ────────────

const IMAGE_FIELDS = 'city_name, country_code, image_url, thumb_url, unsplash_id, author_name, author_url, likes, not_found, lat, lng, fetched_at';

// Cherche une ligne de cache existante à moins de SAME_CITY_RADIUS_KM des
// coordonnées données, dans le même pays. La table est petite (une ligne par
// ville réelle par pays, jamais des milliers) : calcul de distance en JS sur
// les lignes déjà géocodées de ce pays, même approche que handleListCities
// (api/trip-templates.js) — pas besoin de PostGIS pour ce volume.
export async function findNearbyCachedImage(admin, countryCode, lat, lng) {
  if (lat == null || lng == null) return null;
  const { data, error } = await admin
    .from('city_images')
    .select(IMAGE_FIELDS)
    .eq('country_code', countryCode)
    .not('lat', 'is', null);
  if (error) { console.error('[cityImages] lecture cache géo:', error.message); return null; }

  let closest = null;
  let closestDist = Infinity;
  for (const row of data || []) {
    const d = distanceKm(lat, lng, row.lat, row.lng);
    if (d <= SAME_CITY_RADIUS_KM && d < closestDist) { closest = row; closestDist = d; }
  }
  return closest;
}

// Repli quand le géocodage échoue (ou pour les lignes historiques sans
// lat/lng) : cache par nom exact, clé = (city_name_key généré, country_code).
export async function getCachedCityImageByName(admin, cityName, countryCode) {
  const { data, error } = await admin
    .from('city_images')
    .select(IMAGE_FIELDS)
    .eq('city_name_key', cityName.trim().toLowerCase())
    .eq('country_code', countryCode)
    .maybeSingle();
  if (error) { console.error('[cityImages] lecture cache nom:', error.message); return null; }
  return data;
}

export async function upsertCityImageCache(admin, cityName, countryCode, result, coords) {
  const row = {
    city_name: cityName,
    country_code: countryCode,
    query_used: result.queryUsed,
    not_found: !!result.notFound,
    image_url: result.image_url ?? null,
    thumb_url: result.thumb_url ?? null,
    unsplash_id: result.unsplash_id ?? null,
    author_name: result.author_name ?? null,
    author_url: result.author_url ?? null,
    likes: result.likes ?? null,
    fallback_tier: result.fallbackTier ?? null,
    lat: coords?.lat ?? null,
    lng: coords?.lng ?? null,
    fetched_at: new Date().toISOString(),
  };
  const { error } = await admin.from('city_images').upsert(row, { onConflict: 'city_name_key,country_code' });
  if (error) console.error('[cityImages] upsert cache:', error.message);
}

// Résolution complète pour UNE ville. Ordre pensé pour garantir "la même
// photo pour tout le monde, sans requête superflue" :
//
//   1. Cache par NOM EXACT (indexé, aucun géocodage) — couvre tout le
//      contenu éditorial déjà en cache, que le front renvoie toujours sous
//      son nom source français ("Pékin") : chemin le plus rapide, le plus
//      fréquent.
//   2. Coordonnées : fournies par l'appelant si connues (`lat`/`lng` —
//      éditorial, évite un géocodage), sinon géocodage (cache permanent
//      city_geocache, voir cityGeocode.js).
//   3. Cache par PROXIMITÉ géographique — rattrape les exonymes cross-langue
//      ("Pekín" tapé par un visiteur ES retrouve la photo de "Pékin", car
//      mêmes coordonnées) SANS nouvelle requête Unsplash.
//   4. Rien en cache : recherche Unsplash (toujours en anglais) + stockage
//      avec les coordonnées (pour que les prochaines variantes linguistiques
//      matchent par proximité).
//
// Une seule ligne de cache par ville réelle : l'étape 3 s'exécutant AVANT
// tout appel Unsplash, deux noms différents du même lieu ne créent jamais
// deux lignes (donc jamais deux photos différentes).
//
// Params : `countryName` (nom anglais du pays, ex: "Austria") FACULTATIF
// mais fortement recommandé pour la qualité de la requête ; `countryAlpha2`
// (ex: "AT") facultatif, affine le géocodage ; `lat`/`lng` facultatifs
// (coordonnées déjà connues côté appelant → évite le géocodage) ;
// `sourceLanguage` indice de langue du nom fourni (voir resolveQueryCityName —
// jamais bloquant, la cible Unsplash reste toujours l'anglais).
//
// Sur erreur Unsplash (réseau, quota) : PAS de mise en cache (transitoire,
// à retenter au prochain appel) — renvoie juste "pas de photo" pour cet
// appel-ci, à l'appelant d'afficher son repli visuel.
export async function resolveCityImage(admin, cityName, countryCode, { countryName, countryAlpha2, sourceLanguage = 'fr', lat = null, lng = null } = {}) {
  // 1. Nom exact d'abord (rapide, sans géocodage ni traduction) : couvre tout
  //    le contenu éditorial déjà en cache, renvoyé par le front sous son nom
  //    source français.
  const cachedByName = await getCachedCityImageByName(admin, cityName, countryCode);
  if (cachedByName) return { fromCache: true, ...cachedByName };

  // 2. Coordonnées, résolues paresseusement. `english` (nom + région) n'est
  //    calculé que si nécessaire (voir plus bas) pour ne pas payer un appel
  //    géocodeur quand le nom brut se géocode déjà.
  let english = null;
  const ensureEnglish = async () => {
    if (english == null) english = await resolveEnglishCityNameForQuery(admin, cityName, countryCode, countryAlpha2, sourceLanguage);
    return english;
  };

  let coords = lat != null && lng != null ? { lat, lng } : null;
  if (!coords) coords = await resolveCityCoordinates(admin, { countryCode, cityName, countryAlpha2 });
  // Nom en script que le géocodeur ne résout pas (ex: "北京") : on géocode
  // alors le nom ANGLAIS ("Beijing"), qui, lui, se géocode de façon fiable —
  // indispensable pour que le matching cross-langue fonctionne aussi pour les
  // futures langues non-latines, pas seulement fr/en/es.
  if (!coords) {
    const en = await ensureEnglish();
    if (en.name && en.name.trim().toLowerCase() !== cityName.trim().toLowerCase()) {
      coords = await resolveCityCoordinates(admin, { countryCode, cityName: en.name, countryAlpha2 });
    }
  }

  // 3. Proximité géographique (dédup cross-langue) — AVANT tout appel Unsplash.
  if (coords) {
    const nearby = await findNearbyCachedImage(admin, countryCode, coords.lat, coords.lng);
    if (nearby) return { fromCache: true, ...nearby };
  }

  // 4. Aucun cache : Unsplash (toujours en anglais, cascade de paliers si la
  //    ville seule n'a aucun résultat exploitable — voir searchBestCityPhoto)
  //    + stockage avec coords.
  try {
    const en = await ensureEnglish();
    const result = await searchBestCityPhoto(en.name, countryName || null, en.region);
    await upsertCityImageCache(admin, cityName, countryCode, result, coords);
    return { fromCache: false, city_name: cityName, country_code: countryCode, ...result };
  } catch (err) {
    console.error(`[cityImages] résolution "${cityName}" (${countryCode}) :`, err.message);
    return {
      fromCache: false,
      city_name: cityName,
      country_code: countryCode,
      notFound: true,
      error: true,
      rateLimited: !!err.rateLimited,
    };
  }
}
