import i18n from '../i18n';

// Intl.DateTimeFormat connaît déjà les abréviations de mois par langue — inutile
// de les traduire à la main (et de les dupliquer dans plusieurs fichiers).
const cache = {};

function monthsForLang(lang) {
  if (!cache[lang]) {
    const fmt = new Intl.DateTimeFormat(lang, { month: 'short' });
    cache[lang] = Array.from({ length: 12 }, (_, i) => fmt.format(new Date(2000, i, 1)));
  }
  return cache[lang];
}

// Liste des 12 abréviations dans la langue active, dans l'ordre Jan..Déc.
export function monthAbbrevList() {
  return monthsForLang(i18n.language);
}

export function monthAbbrev(index) {
  return monthsForLang(i18n.language)[index];
}
