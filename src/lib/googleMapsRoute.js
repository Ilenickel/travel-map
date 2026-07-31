// Construction d'un itinéraire Google Maps à partir des étapes d'une journée.
//
// Format officiel « Google Maps URLs » (action `dir`) :
//   https://www.google.com/maps/dir/?api=1&origin=…&destination=…&waypoints=A|B|C
//
// LIMITE, documentée par Google et vérifiée le 2026-07-29 : 9 étapes
// intermédiaires au maximum — donc 11 lieux avec l'origine et la destination.
// Ce plafond est celui de Google Maps lui-même, pas du format d'URL : allonger
// l'adresse ne sert à rien, Maps la tronque. Il n'existe par ailleurs AUCUNE
// URL permettant d'afficher plusieurs repères indépendants sans itinéraire ;
// seul My Maps le fait, et uniquement par import manuel de fichier.
//
// Nuance importante : les 9 étapes valent sur ordinateur ET dans l'application
// mobile. Un navigateur mobile SANS l'application n'en accepte que 3 — cas
// minoritaire, qu'on ne peut pas détecter depuis la page, et pour lequel Maps
// tronquera de lui-même.

const MAX_WAYPOINTS = 9;
/** Origine + étapes intermédiaires + destination. */
export const MAX_STOPS = MAX_WAYPOINTS + 2;

const BASE = 'https://www.google.com/maps/dir/?api=1';

function coordParam(stop) {
  return `${stop.lat},${stop.lng}`;
}

/**
 * Prépare l'import d'une journée dans Google Maps.
 *
 * @param {Array<{id: string, name: string, lat: number|null, lng: number|null}>} stops
 *        Étapes DANS L'ORDRE de la journée.
 * @returns {{
 *   url: string|null,          URL à ouvrir (null si rien d'exploitable)
 *   included: Array,           étapes réellement transmises à Maps
 *   missing: Array,            étapes écartées faute de coordonnées
 *   cutAfter: string|null,     nom de la dernière étape retenue si troncature
 *   excludedCount: number,     nombre d'étapes perdues par la troncature
 * }}
 */
export function buildDayRoute(stops) {
  const ordered = Array.isArray(stops) ? stops : [];
  const geolocated = ordered.filter((s) => Number.isFinite(s?.lat) && Number.isFinite(s?.lng));
  const missing = ordered.filter((s) => !Number.isFinite(s?.lat) || !Number.isFinite(s?.lng));

  if (!geolocated.length) {
    return { url: null, included: [], missing, cutAfter: null, excludedCount: 0 };
  }

  const included = geolocated.slice(0, MAX_STOPS);
  const excludedCount = geolocated.length - included.length;
  const cutAfter = excludedCount > 0 ? included[included.length - 1].name : null;

  // Un seul lieu géolocalisé : pas d'itinéraire possible (Maps exige au moins
  // un départ et une arrivée). On ouvre alors une simple recherche, qui pose un
  // repère — c'est exactement ce que fait le bouton d'une fiche restaurant.
  if (included.length === 1) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordParam(included[0]))}`;
    return { url, included, missing, cutAfter, excludedCount };
  }

  const origin = included[0];
  const destination = included[included.length - 1];
  const waypoints = included.slice(1, -1);

  const params = new URLSearchParams({
    origin: coordParam(origin),
    destination: coordParam(destination),
  });
  // Le séparateur des étapes est la barre verticale, que Google attend encodée
  // (%7C). `URLSearchParams` s'en charge, d'où l'assemblage via `params`.
  if (waypoints.length) params.set('waypoints', waypoints.map(coordParam).join('|'));

  return { url: `${BASE}&${params}`, included, missing, cutAfter, excludedCount };
}
