// Dictionnaire des tags "canoniques" (utilisés par le filtre de recherche et le
// formulaire d'ajout de destination) vers leur clé i18n (search.tags.<key>).
// Les tags hors de ce dictionnaire (vocabulaire libre des fiches pays) restent
// affichés tels quels, en français.
export const CANONICAL_TAG_KEYS = {
  UNESCO: "unesco",
  Histoire: "history",
  Nature: "nature",
  Randonnée: "hiking",
  Plage: "beach",
  Gastronomie: "food",
  Architecture: "architecture",
  Désert: "desert",
  Safari: "safari",
  Ski: "ski",
  Ville: "city",
  Culture: "culture",
  Shopping: "shopping",
  Art: "art",
  Montagne: "mountain",
  Temples: "temples",
  Tradition: "tradition",
  Modernité: "modernity",
  Aventure: "adventure",
  Détente: "relaxation",
  Spiritualité: "spirituality",
  Musées: "museums",
  Famille: "family",
  Luxe: "luxury",
  Ruines: "ruins",
  Nightlife: "nightlife",
  Panorama: "panorama",
  Rural: "rural",
};

export const CANONICAL_TAGS = Object.keys(CANONICAL_TAG_KEYS);

// t = fonction i18next (namespace "app"). Retourne le tag traduit s'il fait partie
// du vocabulaire canonique, sinon le renvoie inchangé (vocabulaire libre non traduit).
export function translateTag(tag, t) {
  const key = CANONICAL_TAG_KEYS[tag];
  return key ? t(`search.tags.${key}`) : tag;
}
