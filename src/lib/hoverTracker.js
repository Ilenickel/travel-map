// Suivi léger (hors React state, pas de re-render) du lieu/trajet actuellement
// survolé par la souris, pour le raccourci Ctrl+C "dupliquer" de TripEditor.
// Un seul éditeur de voyage actif à la fois dans l'app, donc une variable de
// module suffit — pas besoin d'un contexte React ni de faire remonter cet état
// à travers toute la hiérarchie des panneaux (villes, excursions, calendrier…).
let hoveredActivityId = null;

export function setHoveredActivity(id) {
  hoveredActivityId = id;
}

export function clearHoveredActivity(id) {
  if (hoveredActivityId === id) hoveredActivityId = null;
}

export function getHoveredActivity() {
  return hoveredActivityId;
}
