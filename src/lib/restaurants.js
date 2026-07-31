// Constantes et formatages partagés par les composants restaurants
// (RestaurantExplorer, RestaurantDetail, AddRestaurantForm). Extraits ici pour
// éviter un import circulaire entre l'explorateur et sa fiche de détail.

/** Symbole affiché pour un `budget_level` de 1 à 3 (index 0 inutilisé). */
export const BUDGET_SYMBOL = ['', '€', '€€', '€€€'];

// Langues du site dont les lecteurs lisent l'alphabet latin. Le jour où le
// japonais est ajouté, il suffit de NE PAS l'inscrire ici pour que les
// restaurants japonais s'affichent aussitôt sous leur nom d'origine — sans
// migration ni retraitement des données, puisque les deux graphies sont
// stockées côte à côte (voir supabase/restaurants_v1.sql).
const LATIN_SCRIPT_LANGUAGES = new Set(['fr', 'en', 'es', 'de', 'it', 'pt', 'nl']);

/**
 * Choisit laquelle des deux graphies d'un restaurant afficher en premier.
 *
 * La base conserve toujours le nom d'origine (`name`, « 挽肉と米 ») et, quand
 * il n'est pas en alphabet latin, sa forme latine (`nameLatin`,
 * « Hikiniku to come »). La décision est prise ICI, à l'affichage, et jamais à
 * la contribution : elle dépend de qui regarde.
 *
 * - Lecteur d'une langue à alphabet latin : forme latine en tête, nom d'origine
 *   en second (c'est celui de la devanture, utile sur place).
 * - Lecteur d'une langue à autre écriture : nom d'origine en tête.
 * - Restaurant sans forme latine (cas de tous les restaurants français,
 *   espagnols…) : le nom d'origine, et rien d'autre.
 *
 * @returns {{ primary: string, secondary: string|null }}
 */
export function restaurantNames(restaurant, language) {
  const name = restaurant?.name ?? '';
  const latin = restaurant?.nameLatin ?? null;
  if (!latin) return { primary: name, secondary: null };

  const base = String(language || 'fr').split('-')[0].toLowerCase();
  return LATIN_SCRIPT_LANGUAGES.has(base)
    ? { primary: latin, secondary: name }
    : { primary: name, secondary: latin };
}

/**
 * Distance à vol d'oiseau formatée pour l'affichage.
 * Volontairement en distance et jamais en durée : aucun temps de trajet n'est
 * calculé pour la liste (ce serait un appel de routage par restaurant), afficher
 * « 6 min » serait donc une invention.
 */
export function formatDistance(km) {
  if (km == null) return null;
  if (km < 1) return `${Math.round(km * 100) * 10} m`;
  return `${km.toFixed(1).replace('.', ',')} km`;
}
