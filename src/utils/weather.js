/**
 * Rates the weather for tourism based on temperature and monthly rainfall.
 *
 * Calibrated to match editorial ratings from travel sources (e.g. partir.com).
 *
 * Temperature zones:
 *   < 8°C         → bad  (freezing / very cold)
 *   8–11°C        → ok   (cold shoulder season)
 *   12–15°C       → ok   (cool, not warm enough for "ideal")
 *   16–26°C       → ideal range — rating driven by rain
 *   27–31°C       → ok if dry (< 100 mm), bad if humid (≥ 100 mm)
 *                   (chaleur + humidité = inconfortable : Japon été, Chine été…)
 *   ≥ 32°C        → bad  (extreme heat)
 *
 * Rain thresholds (ideal zone 16–26°C):
 *   < 200 mm      → good
 *   200–349 mm    → ok
 *   ≥ 350 mm      → bad
 */
export function weatherRating(temp, rain) {
  if (temp >= 32) return "bad";
  if (temp < 8)   return "bad";
  if (temp < 12)  return "ok";
  if (temp < 16)  return "ok";
  if (temp >= 27) return rain < 100 ? "ok" : "bad";
  // Ideal range 16–26°C
  if (rain < 200) return "good";
  if (rain < 350) return "ok";
  return "bad";
}
