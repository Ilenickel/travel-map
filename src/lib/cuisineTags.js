// Types de cuisine, sous forme de tags.
//
// Remplace l'ancien champ texte libre : lui ne permettait ni de filtrer la
// liste (« je ne veux voir que les sushis ») ni de regrouper deux façons
// d'écrire la même chose (« Sushi », « sushis », « japonais - sushi »).
//
// Deux origines cohabitent :
//   - les tags PRÉDÉFINIS ci-dessous, traduits dans les quatre langues du site
//     (clés `cuisineTags.*` du namespace `app`) ;
//   - les tags COMMUNAUTAIRES, créés par un membre quand aucun prédéfini ne
//     convient (table `place_cuisine_tags`), affichés tels qu'ils ont été
//     saisis puisqu'aucune traduction n'est possible.
// Dans les deux cas, c'est le `slug` qui est stocké sur le restaurant.

// Regroupés par famille : la liste est longue, l'utilisateur doit pouvoir s'y
// repérer sans lire les 50 entrées. `group` sert d'intertitre dans le
// sélecteur.
export const PREDEFINED_CUISINE_TAGS = [
  // ── Types d'établissement ──
  { slug: 'fast-food', group: 'type' },
  { slug: 'pizzeria', group: 'type' },
  { slug: 'burger', group: 'type' },
  { slug: 'kebab', group: 'type' },
  { slug: 'sushi', group: 'type' },
  { slug: 'grill', group: 'type' },
  { slug: 'salad', group: 'type' },
  { slug: 'sandwich', group: 'type' },
  { slug: 'bakery', group: 'type' },
  { slug: 'pastry', group: 'type' },
  { slug: 'creperie', group: 'type' },
  { slug: 'ice-cream', group: 'type' },
  { slug: 'coffee', group: 'type' },
  { slug: 'brunch', group: 'type' },
  { slug: 'buffet', group: 'type' },
  { slug: 'street-food', group: 'type' },
  { slug: 'seafood', group: 'type' },
  { slug: 'noodles', group: 'type' },
  { slug: 'bbq', group: 'type' },
  { slug: 'tapas', group: 'type' },
  { slug: 'gastronomic', group: 'type' },

  // ── Régimes ──
  { slug: 'vegetarian', group: 'diet' },
  { slug: 'vegan', group: 'diet' },
  { slug: 'gluten-free', group: 'diet' },
  { slug: 'halal', group: 'diet' },
  { slug: 'kosher', group: 'diet' },

  // ── Cuisines du monde ──
  { slug: 'french', group: 'world' },
  { slug: 'italian', group: 'world' },
  { slug: 'spanish', group: 'world' },
  { slug: 'portuguese', group: 'world' },
  { slug: 'greek', group: 'world' },
  { slug: 'german', group: 'world' },
  { slug: 'british', group: 'world' },
  { slug: 'american', group: 'world' },
  { slug: 'mexican', group: 'world' },
  { slug: 'brazilian', group: 'world' },
  { slug: 'peruvian', group: 'world' },
  { slug: 'argentinian', group: 'world' },
  { slug: 'japanese', group: 'world' },
  { slug: 'chinese', group: 'world' },
  { slug: 'korean', group: 'world' },
  { slug: 'thai', group: 'world' },
  { slug: 'vietnamese', group: 'world' },
  { slug: 'indian', group: 'world' },
  { slug: 'indonesian', group: 'world' },
  { slug: 'malaysian', group: 'world' },
  { slug: 'filipino', group: 'world' },
  { slug: 'turkish', group: 'world' },
  { slug: 'lebanese', group: 'world' },
  { slug: 'moroccan', group: 'world' },
  { slug: 'ethiopian', group: 'world' },
  { slug: 'senegalese', group: 'world' },
  { slug: 'russian', group: 'world' },
  { slug: 'polish', group: 'world' },
];

const PREDEFINED_SLUGS = new Set(PREDEFINED_CUISINE_TAGS.map((tg) => tg.slug));

export const CUISINE_TAG_GROUPS = ['type', 'diet', 'world'];

/** Un slug fait-il partie des tags écrits en dur (donc traduits) ? */
export function isPredefinedTag(slug) {
  return PREDEFINED_SLUGS.has(slug);
}

/**
 * Normalise un libellé saisi en identifiant stable : minuscules, accents
 * retirés, espaces en tirets. « Cuisine Créole ! » → « cuisine-creole ».
 * Sans ça, « Créole » et « creole » créeraient deux tags distincts pour la
 * même chose.
 * Même fonction côté serveur (api/places.js) : toute modification doit être
 * reportée là-bas, sous peine de créer des doublons.
 */
export function slugifyTag(label) {
  return String(label || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
}

/**
 * Libellé affichable d'un tag.
 * @param {string} slug
 * @param {Function} t traduction du namespace `app`
 * @param {Object} communityLabels { slug: label } des tags communautaires
 */
export function cuisineTagLabel(slug, t, communityLabels = {}) {
  if (isPredefinedTag(slug)) return t(`cuisineTags.${slug}`);
  // Repli sur le slug lisible si le tag communautaire n'a pas (encore) été
  // chargé : mieux vaut « cuisine-creole » qu'un blanc.
  return communityLabels[slug] || slug.replaceAll('-', ' ');
}

/**
 * Recherche insensible à la casse et aux accents : taper « pi » doit remonter
 * « pizzeria », et « creole » doit trouver « Créole ».
 */
export function tagMatchesQuery(label, query) {
  if (!query) return true;
  const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  return norm(label).includes(norm(query));
}
