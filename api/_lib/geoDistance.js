// Distance à vol d'oiseau, version serveur.
//
// Duplique volontairement `haversineKm` de src/lib/planningUtils.js : ce
// fichier-là importe les données pays, i18n et le contexte devise, tout un
// arbre côté navigateur qu'une fonction serverless ne peut pas charger (imports
// sans extension non résolus par le loader ESM strict de Node — même raison qui
// oblige déjà le matching des destinations statiques à rester côté client, voir
// le commentaire de `namesMatch`). Une formule géométrique de six lignes,
// figée depuis toujours, est le bon endroit où accepter cette duplication.
export function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
