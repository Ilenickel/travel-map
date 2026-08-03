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

// Une étape telle qu'envoyée à Google Maps.
//
// Le NOM plutôt que les coordonnées, parce que l'application Google Maps iOS
// n'affiche aucun libellé pour des coordonnées brutes (« Repère placé », autant
// de fois qu'il y a d'étapes) là où l'application Android les géocode en sens
// inverse. Aucune URL Google ne transmet à la fois un libellé et une position
// exacte sans `place_id` (API payante) ; le format historique `Nom@lat,lng` a
// été essayé et l'iOS ne le parse pas du tout (2026-08-03).
//
// La ville et le pays SONT indispensables : le nom seul part se faire géocoder
// à l'échelle du monde et le repère atterrit sur le premier homonyme venu
// (constaté). Ils ancrent la recherche sans le moindre appel réseau — ces deux
// champs sont déjà en base (trip_cities.name, trip_destinations.country_name).
//
// Repli sur les coordonnées dans DEUX cas, où elles restent exactes partout
// (c'est le comportement d'origine, seul le libellé manque sur iOS) :
//   - étape sans nom, évidemment ;
//   - étape sans AUCUN ancrage géographique (ni ville, ni pays). Ce second cas
//     est le garde-fou essentiel : un nom seul lâché dans Google Maps est
//     géocodé à l'échelle du monde et le repère atterrit sur le premier
//     homonyme venu — « Panthéon » sans « Rome » donne celui de Paris. Mieux
//     vaut un repère anonyme au bon endroit qu'un repère nommé dans le mauvais
//     pays. Se produit sur des données incomplètes (ville détachée de sa
//     destination), pas dans le cas courant où les deux champs sont remplis.
function coordParam(stop) {
  if (!stop.name || (!stop.city && !stop.country)) return `${stop.lat},${stop.lng}`;
  return [stop.name, stop.city, stop.country].filter(Boolean).join(', ');
}

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

/**
 * Prépare l'import d'une journée dans Google Maps.
 *
 * @param {Array<{id: string, name: string, city: string|null, country: string|null,
 *                lat: number|null, lng: number|null}>} stops
 *        Étapes DANS L'ORDRE de la journée. `city`/`country` ancrent le nom
 *        géographiquement (voir coordParam) ; sans eux le nom seul serait
 *        géocodé à l'échelle du monde.
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

// Sur iOS Safari, ouvrir un lien universel Google Maps via `window.open`
// (nouvel onglet) laisse un onglet vierge derrière soi : iOS bascule vers
// l'app Maps AVANT que l'onglet fraîchement créé n'ait eu le temps de
// charger quoi que ce soit, et on retombe dessus (page blanche, barre de
// recherche vide) en revenant sur Safari. Naviguer dans l'onglet courant
// évite ce problème — l'app y reste affichée telle quelle, l'interception
// se faisant avant tout rendu. Android et ordinateur n'ont pas ce souci
// (pas de bascule d'app), on y garde donc l'ouverture en nouvel onglet.
export function openMapsUrl(url) {
  if (isIOS()) window.location.href = url;
  else window.open(url, '_blank', 'noopener,noreferrer');
}
