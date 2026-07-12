// ─── Devise d'affichage ───────────────────────────────────────────
// Tous les montants sont STOCKÉS en euros (devise canonique de la base et des
// données pays) : seule la présentation change selon la devise choisie dans le
// panneau de paramètres. La conversion EUR→USD utilise un taux FIXE (pas d'API
// de taux de change dans le projet) — ordre de grandeur raisonnable, à ajuster
// ici si besoin.
export const EUR_TO_USD_RATE = 1.08;

export const SUPPORTED_CURRENCIES = ['EUR', 'USD'];
export const CURRENCY_STORAGE_KEY = 'triply_currency';
export const CURRENCY_SYMBOLS = { EUR: '€', USD: '$' };

// État module (même pattern que la langue via i18n) : lisible par les
// fonctions utilitaires pures (formatPrice...) sans passer par un hook. La
// réactivité React est assurée par SettingsContext, dont les consommateurs
// re-rendent quand la devise change.
let currentCurrency = readInitialCurrency();

function readInitialCurrency() {
  if (typeof window === 'undefined') return 'EUR';
  const stored = window.localStorage.getItem(CURRENCY_STORAGE_KEY);
  return SUPPORTED_CURRENCIES.includes(stored) ? stored : 'EUR';
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
  return currentCurrency === 'USD' ? n * EUR_TO_USD_RATE : n;
}

// Montant saisi dans la devise d'affichage → montant à stocker (EUR).
export function convertToEur(n) {
  return currentCurrency === 'USD' ? n / EUR_TO_USD_RATE : n;
}

// Valeur EUR → valeur pré-remplie dans un champ de saisie (arrondie à 2
// décimales pour rester éditable proprement en USD).
export function eurToInputValue(n) {
  if (n == null || n === '' || isNaN(Number(n))) return n ?? '';
  return currentCurrency === 'USD' ? String(Math.round(Number(n) * EUR_TO_USD_RATE * 100) / 100) : n;
}

// Valeur saisie (devise d'affichage) → valeur EUR à stocker (2 décimales).
export function inputValueToEur(n) {
  return currentCurrency === 'USD' ? Math.round((n / EUR_TO_USD_RATE) * 100) / 100 : n;
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
      const converted = Math.round(value * EUR_TO_USD_RATE).toLocaleString('en-US').replace(/,/g, ' ');
      if (dollarPlaced) return converted;
      dollarPlaced = true;
      return `$${converted}`;
    })
    .replace(/\s*€/g, '');
}
