import i18n from '../i18n';

// Intl.RelativeTimeFormat traduit déjà nativement la formule ("il y a 2 heures"
// vs "2 hours ago") selon la locale — il suffit de lui passer la langue active
// au lieu d'une locale figée, aucune clé de traduction n'est nécessaire ici.
export function relativeTime(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  const rtf = new Intl.RelativeTimeFormat(i18n.language, { numeric: 'auto' });
  if (diff < 60) return rtf.format(-Math.floor(diff), 'second');
  if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
  if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
  if (diff < 2592000) return rtf.format(-Math.floor(diff / 86400), 'day');
  if (diff < 31536000) return rtf.format(-Math.floor(diff / 2592000), 'month');
  return rtf.format(-Math.floor(diff / 31536000), 'year');
}
