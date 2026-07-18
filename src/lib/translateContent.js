import { useState, useEffect } from 'react';

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

// Traduit le nom des activités d'un planning-modèle (voyages suggérés, voir
// TripSuggestionsModal) — tout le contenu de ces
// modèles est saisi en français par son auteur (voyage réel ou itinéraire
// éditorial), jamais traduit avant ce hook. Retourne une fonction de lookup
// plutôt que la map brute : le composant appelant n'a pas à gérer le cas
// "pas encore traduit" (repli sur le texte source le temps de la requête).
export function useActivityNameTranslations(activities, language) {
  const [map, setMap] = useState({});

  useEffect(() => {
    // Le contenu source est en français : rien à traduire dans cette langue,
    // et un appel serait un aller-retour réseau pur gaspillage (le serveur le
    // mettrait quand même en cache, voir getTranslatedField).
    if (language === 'fr' || !activities.length) return;
    const pending = activities.filter((a) => map[a.id]?.lang !== language);
    if (!pending.length) return;
    let cancelled = false;
    (async () => {
      const items = pending.map((a) => ({ contentType: 'trip_template_activity', contentId: a.id, field: 'name' }));
      const result = await fetchTranslatedFields(items, language);
      if (cancelled) return;
      setMap((prev) => {
        const next = { ...prev };
        for (const a of pending) {
          next[a.id] = { lang: language, text: result[translationKey('trip_template_activity', a.id, 'name')] ?? a.name };
        }
        return next;
      });
    })();
    return () => { cancelled = true; };
  }, [activities, language]); // eslint-disable-line react-hooks/exhaustive-deps

  return (activity) => (language === 'fr' ? activity.name : (map[activity.id]?.lang === language ? map[activity.id].text : activity.name));
}
