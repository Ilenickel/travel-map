// Traduction en lot du contenu communautaire affiché (destinations, lieux,
// avis) via le cache serveur (api/get-translated-content.js). Route publique,
// pas de jeton de session nécessaire (contenu déjà public).
export async function fetchTranslatedFields(items, targetLanguage) {
  if (!items.length) return {};
  try {
    const res = await fetch('/api/get-translated-content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, targetLanguage }),
    });
    if (!res.ok) return {};
    const data = await res.json();
    return data.ok ? data.translations : {};
  } catch {
    return {};
  }
}

export function translationKey(contentType, contentId, field) {
  return `${contentType}:${contentId}:${field}`;
}
