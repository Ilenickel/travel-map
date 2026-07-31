// ─── Devise d'affichage ───────────────────────────────────────────
// Tous les montants sont STOCKÉS en euros (devise canonique de la base et des
// données pays) : seule la présentation change selon la devise choisie dans le
// panneau de paramètres.
//
// Taux EUR→USD : rafraîchi au plus une fois par 24h via l'API publique
// Frankfurter (api.frankfurter.dev — données BCE, gratuite, sans clé, CORS
// ouvert donc appelable directement depuis le navigateur ; l'ancien domaine
// api.frankfurter.app ne fait plus qu'une redirection 301, que le navigateur
// bloque faute d'en-tête CORS dessus). DEFAULT_EUR_TO_USD_RATE
// sert de valeur de secours tant qu'aucun taux n'a encore été récupéré (tout
// premier chargement, ou navigateur hors-ligne) et en cas d'échec réseau —
// jamais d'erreur visible pour l'utilisateur, l'affichage retombe simplement
// sur ce taux approximatif.
const DEFAULT_EUR_TO_USD_RATE = 1.08;
const RATE_STORAGE_KEY = 'triply_eur_usd_rate';
const RATE_MAX_AGE_MS = 24 * 60 * 60 * 1000;
const RATE_FETCH_TIMEOUT_MS = 5000;

export const SUPPORTED_CURRENCIES = ['EUR', 'USD'];
export const CURRENCY_STORAGE_KEY = 'triply_currency';
export const CURRENCY_SYMBOLS = { EUR: '€', USD: '$' };

// État module (même pattern que la langue via i18n) : lisible par les
// fonctions utilitaires pures (formatPrice...) sans passer par un hook. La
// réactivité React est assurée par SettingsContext, dont les consommateurs
// re-rendent quand la devise change.
let currentCurrency = readInitialCurrency();
let eurToUsdRate = readCachedRate();

function readInitialCurrency() {
  if (typeof window === 'undefined') return 'EUR';
  const stored = window.localStorage.getItem(CURRENCY_STORAGE_KEY);
  return SUPPORTED_CURRENCIES.includes(stored) ? stored : 'EUR';
}

function readCachedRate() {
  if (typeof window === 'undefined') return DEFAULT_EUR_TO_USD_RATE;
  try {
    const cached = JSON.parse(window.localStorage.getItem(RATE_STORAGE_KEY));
    return typeof cached?.rate === 'number' && cached.rate > 0 ? cached.rate : DEFAULT_EUR_TO_USD_RATE;
  } catch {
    return DEFAULT_EUR_TO_USD_RATE;
  }
}

// Va chercher un taux frais si le cache local a plus de 24h (ou n'existe pas
// encore) — appelé une fois au montage de SettingsProvider. Best-effort pur :
// une erreur réseau/API laisse simplement le taux (caché ou par défaut) tel
// quel, jamais d'exception remontée à l'appelant.
export async function refreshExchangeRate() {
  if (typeof window === 'undefined') return;
  let cachedAt = 0;
  try {
    cachedAt = JSON.parse(window.localStorage.getItem(RATE_STORAGE_KEY))?.fetchedAt ?? 0;
  } catch {
    cachedAt = 0;
  }
  if (Date.now() - cachedAt < RATE_MAX_AGE_MS) return;

  try {
    const res = await fetch('https://api.frankfurter.dev/v1/latest?base=EUR&symbols=USD', {
      signal: AbortSignal.timeout(RATE_FETCH_TIMEOUT_MS),
    });
    if (!res.ok) return;
    const data = await res.json();
    const rate = data?.rates?.USD;
    if (typeof rate !== 'number' || rate <= 0) return;
    eurToUsdRate = rate;
    window.localStorage.setItem(RATE_STORAGE_KEY, JSON.stringify({ rate, fetchedAt: Date.now() }));
  } catch {
    // Réseau indisponible, timeout, API en panne… : on garde le taux actuel.
  }
}

export function getCurrency() {
  return currentCurrency;
}

// Change la devise active + persiste le choix localement. Appelé par
// SettingsContext (qui porte l'état React associé).
export function setCurrency(currency) {
  if (!SUPPORTED_CURRENCIES.includes(currency)) return;
  currentCurrency = currency;
  if (typeof window !== 'undefined') window.localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
}

export function currencySymbol() {
  return CURRENCY_SYMBOLS[currentCurrency];
}

// Montant stocké (EUR) → montant dans la devise d'affichage.
export function convertFromEur(n) {
  return currentCurrency === 'USD' ? n * eurToUsdRate : n;
}

// Montant saisi dans la devise d'affichage → montant à stocker (EUR).
export function convertToEur(n) {
  return currentCurrency === 'USD' ? n / eurToUsdRate : n;
}

// Valeur EUR → valeur pré-remplie dans un champ de saisie (arrondie à 2
// décimales pour rester éditable proprement en USD).
export function eurToInputValue(n) {
  if (n == null || n === '' || isNaN(Number(n))) return n ?? '';
  return currentCurrency === 'USD' ? String(Math.round(Number(n) * eurToUsdRate * 100) / 100) : n;
}

// Valeur saisie (devise d'affichage) → valeur EUR à stocker (2 décimales).
export function inputValueToEur(n) {
  return currentCurrency === 'USD' ? Math.round((n / eurToUsdRate) * 100) / 100 : n;
}

// Chaînes libres des données pays ("50–75 €/j", "1 500 – 2 000 €"...) : en USD,
// convertit chaque nombre au taux fixe, préfixe le tout premier nombre du "$"
// (convention anglo-saxonne : le symbole précède le montant, contrairement à
// l'euro) puis retire le "€" d'origine (et l'espace qui le précédait). Les
// nombres peuvent contenir des espaces (fine ou normale) comme séparateur de
// milliers.
export function localizeAmountString(str) {
  if (!str || currentCurrency === 'EUR') return str;
  if (!str.includes('€')) return str;
  let dollarPlaced = false;
  return str
    // Un nombre = suite de chiffres, séparateurs de milliers (espace simple,
    // insécable ou fine) compris — le motif doit finir par un chiffre pour ne
    // pas avaler l'espace qui précède "–" ou "€".
    .replace(/\d(?:[\d\s]*\d)?/g, (m) => {
      const value = Number(m.replace(/\s/g, ''));
      if (isNaN(value)) return m;
      const converted = Math.round(value * eurToUsdRate).toLocaleString('en-US').replace(/,/g, ' ');
      if (dollarPlaced) return converted;
      dollarPlaced = true;
      return `$${converted}`;
    })
    .replace(/\s*€/g, '');
}
