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
