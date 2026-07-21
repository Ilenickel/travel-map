// Corrections manuelles de traduction FR → EN pour la recherche Unsplash,
// détectées lors de l'audit du 2026-07-20 (voir scripts/translate-city-names.mjs
// et scripts/verify-city-name-translations.mjs) : Google Translate confond
// certains noms de ville avec des mots français courants homographes (ex:
// "Grenade" = la ville espagnole OU l'arme, "Liège" = la ville OU le
// matériau, "Cassis" = la ville OU le fruit).
//
// Appliquées EN PRIORITÉ, avant tout appel à Google Translate, pour ces
// villes précises — le reste du pipeline de traduction n'est pas concerné.
// Source unique, importée à la fois par scripts/fetch-city-images.mjs
// (import initial en masse) et api/_lib/cityImages.js (résolution live pour
// les villes ajoutées par les utilisateurs) : les deux chemins doivent
// produire EXACTEMENT le même nom de requête pour une même ville.
//
// Clé = `${country_code}:${city_name normalisé (trim + minuscules)}`.
export const CITY_NAME_QUERY_OVERRIDES = {
  'FRA:cassis': 'Cassis',           // traduit à tort en "Blackcurrant" (le fruit)
  'BEL:liège': 'Liège',             // traduit à tort en "Cork" (le matériau)
  'PRT:porto': 'Porto',             // traduit à tort en "Port"
  'VNM:my tho': 'My Tho',           // traduit en charabia ("My Though")
  'TWN:hualien': 'Hualien',         // faute de frappe introduite ("Hualian")
  'ESP:grenade': 'Granada',         // non traduit, or homographe dangereux avec l'arme
  'ESP:valence': 'Valencia',        // non traduit (confondu avec le terme de chimie "valence")
  'DEU:dresde': 'Dresden',          // non traduit
  'ESP:saint-sébastien': 'San Sebastian', // traduit littéralement, nom d'usage touristique différent
  'MAR:marrakech': 'Marrakesh',     // orthographe FR conservée à tort, EN = "Marrakesh" (confirmé Wikipédia)
  'EGY:edfou': 'Edfu',              // orthographe FR conservée à tort, EN = "Edfu" (confirmé Wikipédia)
};

export function cityNameQueryOverride(cityName, countryCode) {
  const key = `${countryCode}:${cityName.trim().toLowerCase()}`;
  return CITY_NAME_QUERY_OVERRIDES[key] || null;
}
