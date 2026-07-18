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

// Traduit le nom d'une ville suggérée (planning-modèle communautaire, voir
// TripSuggestionsModal) — même principe que useActivityNameTranslations
// ci-dessus, appliqué au nom de ville plutôt qu'au nom d'activité : un
// visiteur en anglais doit voir "Beijing" là où l'auteur du modèle a tapé
// "Pékin", jamais le nom brut tel quel. `cities` attend `{ id, name }` où
// `id` est le representativeTemplateId renvoyé par l'action 'list-cities'
// (api/trip-templates.js) — jamais l'id d'une ville du voyage de
// l'utilisateur, qui n'est pas du contenu communautaire à traduire.
export function useCityNameTranslations(cities, language) {
  const [map, setMap] = useState({});

  useEffect(() => {
    if (language === 'fr' || !cities.length) return;
    const pending = cities.filter((c) => map[c.id]?.lang !== language);
    if (!pending.length) return;
    let cancelled = false;
    (async () => {
      const items = pending.map((c) => ({ contentType: 'trip_template_city', contentId: c.id, field: 'name' }));
      const result = await fetchTranslatedFields(items, language);
      if (cancelled) return;
      setMap((prev) => {
        const next = { ...prev };
        for (const c of pending) {
          next[c.id] = { lang: language, text: result[translationKey('trip_template_city', c.id, 'name')] ?? c.name };
        }
        return next;
      });
    })();
    return () => { cancelled = true; };
  }, [cities, language]); // eslint-disable-line react-hooks/exhaustive-deps

  return (city) => (language === 'fr' ? city.name : (map[city.id]?.lang === language ? map[city.id].text : city.name));
}
