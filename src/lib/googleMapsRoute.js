// Construction d'un itinéraire Google Maps à partir des étapes d'une journée.
//
// FORMAT UTILISÉ : l'ancienne API d'URL (`maps?saddr=…&daddr=…+to:…`), et non
// le format moderne `?api=1`. Raison, établie le 2026-08-03 après plusieurs
// allers-retours sur un vrai iPhone :
//
//   - En `?api=1`, une étape est SOIT des coordonnées (position exacte, mais
//     Google Maps iOS ne les nomme pas et affiche « Repère placé » — l'appli
//     Android, elle, les géocode en sens inverse et affiche un nom, d'où
//     l'asymétrie signalée), SOIT du texte (nommé, mais géocodé : le repère
//     partait sur le premier lieu du même nom n'importe où dans le monde).
//     Aucun moyen d'avoir les deux sans `place_id` Google, qu'on n'a pas.
//   - L'ancienne API accepte `Libellé@lat,lng` : les COORDONNÉES commandent la
//     position, le libellé ne sert qu'à nommer le point sur place. C'est
//     exactement ce qu'il faut. (Une tentative de `nom@lat,lng` a échoué le
//     2026-08-02 avec « lien incompatible » : elle avait été faite dans le
//     format `?api=1`, où cette syntaxe n'existe pas — mauvaise famille d'URL,
//     pas mauvaise idée.)
//
// Nuance vérifiée : si le libellé ne désigne aucun établissement précis (un
// nom de quartier, ex. « Akihabara »), Maps nomme le POI le plus proche des
// coordonnées — le libellé peut donc être inattendu, mais la POSITION reste
// juste. C'est le compromis accepté ; les activités de l'appli portent des
// noms de lieux précis, cas où la résolution est correcte.
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

const BASE = 'https://maps.google.com/maps';

// Une étape au format ancien : `Libellé@lat,lng`, ou les coordonnées seules
// faute de nom. Le libellé est encodé (un « & » dans un nom — « Musées du
// Vatican & Chapelle Sixtine » — couperait sinon la chaîne de requête), mais
// PAS le « @ » ni la virgule des coordonnées, que Google attend littéraux.
function stopParam(stop) {
  const coords = `${stop.lat},${stop.lng}`;
  return stop.name ? `${encodeURIComponent(stop.name)}@${coords}` : coords;
}

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

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
  // repère — nommé lui aussi grâce à `q=Libellé@lat,lng`.
  if (included.length === 1) {
    return { url: `${BASE}?q=${stopParam(included[0])}`, included, missing, cutAfter, excludedCount };
  }

  // `saddr` = point de départ ; `daddr` = toutes les étapes suivantes DANS
  // L'ORDRE, chaînées par le séparateur littéral `+to:` (c'est la syntaxe de
  // l'ancienne API — d'où l'assemblage à la main plutôt qu'un URLSearchParams,
  // qui encoderait « + », « @ » et « : » et casserait le format).
  const [origin, ...rest] = included;
  const url = `${BASE}?saddr=${stopParam(origin)}&daddr=${rest.map(stopParam).join('+to:')}`;

  return { url, included, missing, cutAfter, excludedCount };
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
