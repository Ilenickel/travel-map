// ─── Taux de change par pays (onglet Pratique) ──────────────────────
// Le champ `costOfLiving.exchangeRate` de chaque pays (src/data/<pays>.js)
// est un texte éditorial figé (ex. "1€ ≈ 145 KES") qui devient faux avec le
// temps. On le remplace à l'affichage par un calcul dynamique à partir de
// `costOfLiving.currency` (code ISO, ex. "KES", parfois entouré de texte —
// voir extractCurrencyCode) — le texte éditorial reste le repli si le calcul
// échoue (devise inconnue de l'API, réseau indisponible).
//
// Source : open.er-api.com (exchangerate-api.com, gratuite, sans clé, mise à
// jour quotidienne, ~160 devises — contrairement à Frankfurter/BCE qui ne
// couvre qu'une trentaine de grandes devises, insuffisant pour KES/XOF/etc.)
const RATES_STORAGE_KEY = 'triply_country_rates';
const RATES_MAX_AGE_MS = 24 * 60 * 60 * 1000;
const RATES_FETCH_TIMEOUT_MS = 6000;

// Locale Intl pour le séparateur de milliers — même map que planningUtils.js /
// SearchBar.jsx (dupliquée volontairement, cf. leur propre commentaire), à
// tenir synchronisée si une langue est ajoutée à SUPPORTED_LANGUAGES.
const INTL_LOCALE = { fr: 'fr-FR', en: 'en-GB', es: 'es-ES', de: 'de-DE' };

let rates = readCachedRates();
let inFlight = null;

function readCachedRates() {
  if (typeof window === 'undefined') return null;
  try {
    const cached = JSON.parse(window.localStorage.getItem(RATES_STORAGE_KEY));
    return cached?.rates && typeof cached.rates === 'object' ? cached : null;
  } catch {
    return null;
  }
}

// Va chercher les taux si le cache local a plus de 24h (ou n'existe pas
// encore) — best-effort pur, jamais d'exception : un échec laisse `rates`
// tel quel (éventuellement `null`, auquel cas l'appelant retombe sur le texte
// éditorial). Un seul appel réseau couvre toutes les devises (l'API renvoie
// tous les taux depuis EUR en une réponse), jamais un appel par pays.
export async function refreshCountryRates() {
  if (typeof window === 'undefined') return;
  if (rates && Date.now() - rates.fetchedAt < RATES_MAX_AGE_MS) return;
  if (inFlight) return inFlight;

  inFlight = (async () => {
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/EUR', {
        signal: AbortSignal.timeout(RATES_FETCH_TIMEOUT_MS),
      });
      if (!res.ok) return;
      const data = await res.json();
      if (data?.result !== 'success' || !data.rates) return;
      rates = { rates: data.rates, fetchedAt: Date.now() };
      window.localStorage.setItem(RATES_STORAGE_KEY, JSON.stringify(rates));
    } catch {
      // Réseau indisponible, timeout, API en panne… : on garde le cache existant.
    } finally {
      inFlight = null;
    }
  })();
  return inFlight;
}

// Le champ `currency` des données pays n'est pas toujours un code ISO pur
// (ex. "JPY (¥)", "Boliviano (BOB)", "EUR / USD" pour une devise secondaire
// tolérée) — on extrait le premier code à 3 lettres majuscules trouvé, qui
// correspond dans tous les cas réels du projet à la devise principale citée
// en premier (vérifié sur les 136 formats distincts présents dans les
// données au moment de l'écriture).
function extractCurrencyCode(currencyField) {
  if (typeof currencyField !== 'string') return null;
  return currencyField.match(/\b[A-Z]{3}\b/)?.[0] ?? null;
}

// Formate "1 € ≈ {rate} {code}" avec un nombre de décimales adapté à l'ordre
// de grandeur (ex. "1 € ≈ 1,08 USD" mais "1 € ≈ 4 300 COP", pas
// "1 € ≈ 4300.472819 COP") — même logique d'arrondi "lisible" que le reste
// du site (voir localizeAmountString dans currency.js).
function formatRate(rate, lang) {
  const locale = INTL_LOCALE[lang] || 'fr-FR';
  if (rate >= 100) return Math.round(rate).toLocaleString(locale);
  return rate.toLocaleString(locale, { minimumFractionDigits: rate >= 10 ? 1 : 2, maximumFractionDigits: rate >= 10 ? 1 : 2 });
}

/**
 * Calcule "1 € ≈ {rate} {code}" à partir du champ `currency` d'un pays, ou
 * `null` si la devise est inconnue de l'API ou si aucun taux n'est encore
 * disponible (premier chargement avant résolution du fetch, ou échec réseau)
 * — l'appelant doit alors afficher `costOfLiving.exchangeRate` (texte
 * éditorial) à la place.
 */
export function getLiveExchangeRateText(currencyField, lang) {
  const code = extractCurrencyCode(currencyField);
  if (!code || !rates?.rates) return null;
  const rate = rates.rates[code];
  if (typeof rate !== 'number' || rate <= 0) return null;
  if (code === 'EUR') return '1 € = 1 €';
  return `1 € ≈ ${formatRate(rate, lang)} ${code}`;
}
