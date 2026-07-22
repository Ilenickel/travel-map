import { weatherRating } from "./weather";

// ─── Weather ──────────────────────────────────────────────────────────────────

function countryWeatherScore(countryData, monthIndex) {
  const scores = countryData.weatherCities.map(({ data }) => {
    const m = data[monthIndex];
    return m ? weatherRating(m.temp, m.rain) : "bad";
  });
  const good = scores.filter((s) => s === "good").length;
  const bad  = scores.filter((s) => s === "bad").length;
  if (good >= scores.length / 2) return "good";
  if (bad  >  scores.length / 2) return "bad";
  return "ok";
}

function weatherRank(score) {
  return score === "good" ? 3 : score === "ok" ? 2 : 0;
  // Note: weather "bad" → rank 0 (dimmed). There is no "tight/red" for weather.
}

// ─── Budget ───────────────────────────────────────────────────────────────────

/**
 * Budget journalier (€/jour) — bas de la fourchette confort moyen, sans vol.
 *
 * 4-level budget score :
 *   3  good   ≥ budgetMid          → vert  (confort moyen accessible)
 *   2  ok     ≥ budgetMid × 0.75  → orange (un peu serré mais faisable en confort)
 *   1  tight  ≥ budgetMid × 0.55  → rouge  (très serré, confort minimal)
 *   0  bad    < budgetMid × 0.55  → grisé  (hors budget)
 */
function budgetRank(countryData, dailyBudget) {
  const { budgetMid } = countryData.filter ?? {};
  if (!budgetMid) return 2; // pas de données → neutre
  if (dailyBudget >= budgetMid)              return 3;
  if (dailyBudget >= budgetMid * 0.75)       return 2;
  if (dailyBudget >= budgetMid * 0.55)       return 1;
  return 0;
}

// ─── Color map ────────────────────────────────────────────────────────────────

const RANK_COLOR = {
  3: "#22c55e", // vert
  2: "#f59e0b", // orange
  1: "#ef4444", // rouge
  0: null,      // grisé / inaccessible
};

// ─── Tags ─────────────────────────────────────────────────────────────────────

/**
 * Tag UI value → clé du champ `criteria` (0-3) défini sur chaque pays dans
 * src/data/{pays}.js. "UNESCO" et "Histoire" partagent la même colonne
 * source ("UNESCO/Histoire") et pointent donc vers la même clé.
 */
const TAG_TO_CRITERION = {
  UNESCO: "unesco",
  Histoire: "unesco",
  Nature: "nature",
  Randonnée: "randonnee",
  Plage: "plage",
  Gastronomie: "gastronomie",
  Architecture: "architecture",
  Désert: "desert",
  Safari: "safari",
  Ski: "ski",
  Ville: "ville",
};

/**
 * Rang d'un pays pour les tags sélectionnés, sur l'échelle 0-3 partagée avec
 * le budget (3=vert référence mondiale, 2=orange reconnu secondaire,
 * 1=rouge présent mais pas un moteur de voyage, 0=grisé quasi absent).
 * Avec plusieurs tags sélectionnés, on garde le minimum : un pays doit être
 * au moins aussi bon que ce rang sur CHAQUE critère choisi.
 */
function tagRank(countryData, selectedTags) {
  if (!selectedTags.length) return 3;
  const ranks = selectedTags.map((tag) => {
    const key = TAG_TO_CRITERION[tag];
    if (countryData.criteria && key && countryData.criteria[key] !== undefined) {
      return countryData.criteria[key];
    }
    // Filet de sécurité si un pays n'a pas (encore) de champ `criteria`.
    const allTags = (countryData.destinations ?? []).flatMap((d) => d.tags ?? []);
    return allTags.includes(tag) ? 3 : 0;
  });
  return Math.min(...ranks);
}

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * Returns null when no filter is active (no highlights).
 * Returns { [alpha3]: color | null } — null means dimmed on the map.
 */
export function computeHighlights(countries, { tripBudget, month, tags = [] }) {
  if (tripBudget === null && month === null && tags.length === 0) return null;

  const result = {};
  for (const [code, data] of Object.entries(countries)) {
    const ranks = [];
    if (month      !== null) ranks.push(weatherRank(countryWeatherScore(data, month)));
    if (tripBudget !== null) ranks.push(budgetRank(data, tripBudget));
    if (tags.length > 0)     ranks.push(tagRank(data, tags));

    const minRank = Math.min(...ranks);
    result[code] = RANK_COLOR[minRank];
  }
  return result;
}
