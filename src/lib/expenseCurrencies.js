// ─── Devises de saisie d'une dépense ────────────────────────────────
// À ne pas confondre avec SUPPORTED_CURRENCIES (currency.js) qui, elle, ne
// concerne QUE la devise d'AFFICHAGE de tout le site (EUR/USD). Ici on parle
// de la devise dans laquelle une dépense a été RÉELLEMENT payée sur place
// (5 000 ¥ au Japon) : elle est convertie en euros à l'enregistrement, au
// taux journalier (voir exchangeRates.js), puis affichée dans la devise
// d'affichage comme le reste des montants.
//
// La liste est un sous-ensemble STRICT des devises renvoyées par
// open.er-api.com (la même source que les taux journaliers) : on ne propose
// jamais une devise dont on ne saurait pas calculer le taux. Sont écartés :
//  - les codes non-ISO adossés 1:1 à une autre monnaie (FOK, GGP, IMP, JEP,
//    KID, TVD) et les unités de compte (CLF, XDR) — jamais imprimés sur un
//    ticket de caisse ;
//  - le yuan offshore CNH, doublon de CNY pour un voyageur ;
//  - les devises remplacées : HRK (euro depuis 2023), SLL (redénominée SLE),
//    ANG (remplacée par XCG en 2025), ZWL (remplacée par ZWG en 2024).
export const EXPENSE_CURRENCY_CODES = [
  'AED', 'AFN', 'ALL', 'AMD', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN',
  'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL',
  'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY',
  'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP',
  'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD',
  'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HTG', 'HUF', 'IDR', 'ILS', 'INR',
  'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF',
  'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD',
  'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR',
  'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD',
  'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON',
  'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP',
  'SLE', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB', 'TJS', 'TMT',
  'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU',
  'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XCG', 'XOF', 'XPF',
  'YER', 'ZAR', 'ZMW', 'ZWG',
];

const CODE_SET = new Set(EXPENSE_CURRENCY_CODES);

export function isKnownCurrency(code) {
  return typeof code === 'string' && CODE_SET.has(code.toUpperCase());
}

// Locale Intl pour les libellés de devises — même map que planningUtils.js /
// exchangeRates.js (dupliquée volontairement, cf. leur propre commentaire),
// à tenir synchronisée si une langue est ajoutée à SUPPORTED_LANGUAGES.
const INTL_LOCALE = { fr: 'fr-FR', en: 'en-GB', es: 'es-ES', de: 'de-DE' };

// Un DisplayNames par langue, construit une seule fois : instancier
// Intl.DisplayNames est coûteux et on l'appelle pour ~160 devises à chaque
// frappe dans le champ de recherche.
const nameFormatters = {};
function nameFormatter(lang) {
  const locale = INTL_LOCALE[lang] || 'fr-FR';
  if (!nameFormatters[locale]) {
    try {
      nameFormatters[locale] = new Intl.DisplayNames([locale], { type: 'currency' });
    } catch {
      nameFormatters[locale] = null; // navigateur trop ancien : on n'affichera que le code
    }
  }
  return nameFormatters[locale];
}

// "JPY" → "yen japonais" (fr) / "Japanese Yen" (en). Repli sur le code
// lui-même si la devise est inconnue du navigateur : jamais de ligne vide
// dans la liste.
export function currencyName(code, lang) {
  try {
    return nameFormatter(lang)?.of(code) || code;
  } catch {
    return code;
  }
}

// "JPY" → "¥". narrowSymbol donne "¥" plutôt que "JP¥" pour les devises qui
// partagent un symbole (¥, $, £…) : dans le formulaire le code est déjà
// affiché à côté, pas besoin du préfixe désambiguïsant.
const symbolCache = {};
export function currencySymbolOf(code) {
  if (symbolCache[code] !== undefined) return symbolCache[code];
  let symbol = code;
  try {
    const part = new Intl.NumberFormat('en', { style: 'currency', currency: code, currencyDisplay: 'narrowSymbol' })
      .formatToParts(0)
      .find((p) => p.type === 'currency');
    if (part?.value) symbol = part.value;
  } catch {
    // Devise inconnue du navigateur : on garde le code comme "symbole".
  }
  symbolCache[code] = symbol;
  return symbol;
}

/**
 * Formate un montant DANS SA DEVISE D'ORIGINE ("5 000 ¥", "$12.50") — pour
 * rappeler ce qui a été réellement payé sur place sous une dépense convertie.
 * À ne pas confondre avec formatPrice (planningUtils) qui, lui, part d'un
 * montant en euros et l'affiche dans la devise choisie par l'utilisateur.
 * Intl gère le bon nombre de décimales par devise (0 pour le yen, 3 pour le
 * dinar…) — c'est justement ce qu'un arrondi maison à 2 décimales raterait.
 */
export function formatCurrencyAmount(amount, code, lang) {
  const locale = INTL_LOCALE[lang] || 'fr-FR';
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: code, currencyDisplay: 'narrowSymbol' })
      .format(Number(amount));
  } catch {
    return `${Number(amount).toLocaleString(locale)} ${code}`;
  }
}

// Recherche insensible à la casse ET aux accents ("pesos" doit trouver "peso
// mexicain", "yen" doit trouver "yen japonais") : on compare sur une forme
// décomposée sans diacritiques, comme la recherche de villes ailleurs dans
// l'app.
function normalize(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

/**
 * Filtre la liste des devises sur le code ou le nom localisé. Les
 * correspondances de CODE remontent en premier (taper "cad" doit donner le
 * dollar canadien en tête, pas une devise dont le nom contient "cad"), puis
 * les correspondances de début de nom, puis le reste.
 */
export function searchCurrencies(query, lang, codes = EXPENSE_CURRENCY_CODES) {
  const q = normalize(query).trim();
  if (!q) return codes;
  const scored = [];
  codes.forEach((code) => {
    const name = normalize(currencyName(code, lang));
    const lowCode = code.toLowerCase();
    if (lowCode === q) scored.push([0, code]);
    else if (lowCode.startsWith(q)) scored.push([1, code]);
    else if (name.startsWith(q)) scored.push([2, code]);
    else if (name.includes(q)) scored.push([3, code]);
  });
  return scored.sort((a, b) => a[0] - b[0]).map(([, code]) => code);
}
