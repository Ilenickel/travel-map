// Résout et met en cache les coordonnées d'une ville via Geoapify, pour le
// matching cross-langue des modèles de planning (planning-modèle) : deux
// exonymes d'une même ville ("Pékin" / "Beijing") géocodent vers des
// coordonnées proches, ce qui permet de les considérer comme identiques sans
// dépendre d'une traduction ou d'un référentiel de villes normalisé.
//
// Cache permanent dans city_geocache, clé = (country_code, normalizeName(city_name))
// (voir api/_lib/similarity.js) : une ville n'est géocodée qu'une seule fois
// par variante orthographique/linguistique rencontrée, jamais deux.
import { normalizeName } from './similarity.js';

const GEOAPIFY_API_KEY = process.env.VITE_GEOAPIFY_API_KEY;
const EARTH_RADIUS_KM = 6371;

// `restrictToCity` : le paramètre `type=city` de Geoapify échoue souvent
// silencieusement sur un nom de monument/site (ex. "Grande Muraille",
// "Château de X") — le nom typique d'une excursion à la journée, qui n'est
// pas une ville administrative. Les excursions sont donc géocodées sans ce
// filtre (recherche libre, comme pour un lieu individuel dans
// api/geocode-place.js), les vraies villes le gardent (désambiguïse les noms
// de ville ambigus qui correspondent aussi à un lieu non-ville).
async function geocodeCityViaGeoapify(cityName, countryAlpha2, restrictToCity) {
  if (!GEOAPIFY_API_KEY) return null;
  try {
    const filterParam = countryAlpha2 ? `&filter=countrycode:${encodeURIComponent(countryAlpha2)}` : '';
    const typeParam = restrictToCity ? '&type=city' : '';
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(cityName)}${typeParam}&limit=1${filterParam}&apiKey=${GEOAPIFY_API_KEY}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return null;
    const data = await res.json();
    const p = data.features?.[0]?.properties;
    if (!p) return null;
    return { lat: p.lat, lng: p.lon };
  } catch {
    return null;
  }
}

// Géocode une ville en demandant le résultat EN ANGLAIS (lang=en) : renvoie
// à la fois les coordonnées ET le nom anglais canonique (properties.city).
// Bien plus fiable que Google Translate pour convertir un exonyme en son nom
// anglais — une autorité géographique résout le lieu puis renvoie son nom
// anglais officiel, quelle que soit la langue d'entrée : "Sevilla"/"Séville"
// -> "Seville", "Pékin"/"Pekín" -> "Beijing", "Grenade" -> "Granada", et
// garde correctement "Cassis"/"Liège" que Google traduisait à tort en mots
// communs. Sert à construire la requête Unsplash (toujours en anglais) d'une
// ville pas encore en cache — voir api/_lib/cityImages.js.
//
// Non mis en cache ici : appelé seulement sur une ville RÉELLEMENT nouvelle
// (ni en cache par nom, ni par proximité), cas rare. Les coordonnées pour le
// matching cross-langue restent, elles, mises en cache via
// resolveCityCoordinates ci-dessous.
export async function geocodeCityWithEnglishName(cityName, countryAlpha2) {
  if (!GEOAPIFY_API_KEY) return null;
  try {
    // Endpoint /search (pas /autocomplete) : on passe un nom de ville COMPLET,
    // pas un préfixe en cours de frappe — /search est fait pour ça et classe
    // ses résultats de façon plus stable (autocomplete pouvait renvoyer par
    // intermittence une entité voisine dont le nom anglais différait).
    const filterParam = countryAlpha2 ? `&filter=countrycode:${encodeURIComponent(countryAlpha2)}` : '';
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(cityName)}&type=city&limit=1&lang=en${filterParam}&apiKey=${GEOAPIFY_API_KEY}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return null;
    const data = await res.json();
    const p = data.features?.[0]?.properties;
    if (!p || p.lat == null || p.lon == null) return null;
    // On ne retient le nom que si Geoapify a identifié une VILLE avec
    // confiance (rank.confidence_city_level) : `result_type` s'est révélé
    // trompeur (une vraie ville — Foix, Cassis, Liège — ressort parfois avec
    // result_type "postcode" alors que confidence_city_level=1 la confirme
    // bien comme ville, testé le 2026-07-21) — s'y fier aurait rejeté ces
    // matches valides et poussé inutilement vers le repli Google Translate,
    // le chemin le plus fragile.
    const englishName = p.rank?.confidence_city_level === 1 ? (p.city || p.name || null) : null;
    // Région (état/province) : capturée dans le MÊME appel (aucun coût
    // supplémentaire), utilisée en dernier recours pour élargir la requête
    // Unsplash si la ville elle-même n'a aucune photo exploitable — voir
    // searchBestCityPhoto (api/_lib/cityImages.js).
    const region = p.state || p.county || null;
    return { lat: p.lat, lng: p.lon, englishName, region };
  } catch {
    return null;
  }
}

/**
 * Résout les coordonnées d'une ville (ou d'une excursion si
 * `restrictToCity: false`), via le cache d'abord.
 * @returns {Promise<{lat: number, lng: number} | null>} null si introuvable (mis en cache aussi).
 */
export async function resolveCityCoordinates(admin, { countryCode, cityName, countryAlpha2, restrictToCity = true }) {
  // Les deux modes ont des critères différents et peuvent donner des
  // résultats différents pour le même nom : clé de cache distincte, sinon un
  // échec en mode "ville" pourrait être servi à tort à une excursion
  // recherchée sans restriction (ou l'inverse).
  const cacheKey = `${normalizeName(cityName)}${restrictToCity ? '' : '::landmark'}`;
  const { data: cached } = await admin
    .from('city_geocache')
    .select('lat, lng')
    .eq('country_code', countryCode)
    .eq('city_name', cacheKey)
    .maybeSingle();
  if (cached) {
    return cached.lat != null ? { lat: cached.lat, lng: cached.lng } : null;
  }

  const found = await geocodeCityViaGeoapify(cityName, countryAlpha2, restrictToCity);

  await admin.from('city_geocache').upsert(
    {
      country_code: countryCode,
      city_name: cacheKey,
      lat: found?.lat ?? null,
      lng: found?.lng ?? null,
      geocoded_at: new Date().toISOString(),
    },
    { onConflict: 'country_code,city_name' }
  );

  return found;
}

/** Distance en km entre deux points (formule haversine). */
export function distanceKm(lat1, lng1, lat2, lng2) {
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Deux villes sont considérées comme identiques en-dessous de ce rayon (km). */
export const SAME_CITY_RADIUS_KM = 15;
