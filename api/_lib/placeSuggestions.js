// Matching "ville de planification" ↔ "destination communautaire" pour la
// suggestion de lieux après ajout d'une ville. Les destinations communautaires
// sont rattachées à un pays, jamais à une ville de voyage précise (voir plan) :
// on retrouve la/les destinations correspondantes par similarité de nom, dans
// le même pays uniquement.
//
// Le matching des destinations STATIQUES (définies dans src/data/<pays>.js,
// ~186 fichiers) est fait côté client (voir PlaceSuggestionsButton.jsx) et
// transmis ici sous forme d'ids déjà résolus : importer src/data depuis une
// fonction serverless échoue (imports sans extension, non résolus par le
// loader ESM strict de Node, contrairement au bundler Vite utilisé côté client).

function normalize(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD').replace(/\p{Mn}/gu, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function namesMatch(a, b) {
  const na = normalize(a);
  const nb = normalize(b);
  if (!na || !nb) return false;
  return na === nb || na.includes(nb) || nb.includes(na);
}

/**
 * @param {Object} admin - client Supabase service_role
 * @param {string} cityName
 * @param {string} countryCode
 * @returns {Promise<string[]>} ids des destinations communautaires correspondantes
 */
export async function findMatchingCommunityDestinations(admin, cityName, countryCode) {
  const { data: communityDests } = await admin
    .from('user_destinations')
    .select('id, name')
    .eq('country_code', countryCode);
  return (communityDests || []).filter((d) => namesMatch(d.name, cityName)).map((d) => d.id);
}
