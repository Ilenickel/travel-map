import { useState, useEffect } from 'react';
import { callModeration } from '../lib/moderation';
import { haversineKm, matchingStaticDestinations } from '../lib/planningUtils';
import { tokensOf, matchScore } from '../lib/placeNameMatch';

// Repli "photo communautaire" pour les activités des suggestions de voyage
// (voir TripSuggestionsModal) — avant de chercher sur
// Wikipédia (useActivityWikiImages), on regarde si un lieu "à ne pas
// manquer" déjà ajouté par un membre de la communauté pour la même ville
// correspond : sa photo est en général plus fidèle/qualitative qu'un article
// encyclopédique générique (repéré empiriquement : certaines photos
// Wikipédia de lieux new-yorkais pourtant très fréquentés sont mauvaises).
//
// Toujours interrogé en français (indépendant de la langue d'affichage) :
// les noms d'activités de ces modèles sont TOUJOURS saisis en français (voir
// translateContent.js) ; comparer un nom français à un nom de lieu déjà
// traduit dans une autre langue ferait échouer le matching par tokens pour
// tout utilisateur non francophone. Seule la photo (imageUrl) est utilisée,
// jamais le nom traduit du lieu communautaire.
//
// Lieux "communautaires" au sens large : rattachés à une destination créée
// par un utilisateur (destination_places) OU à une destination prédéfinie du
// pays (static_destination_places, voir src/data/<pays>.js) — les deux sont
// uploadés par des utilisateurs et traités à l'identique ici, seule la
// destination parente diffère. Les IDs de destinations statiques correspondant
// à la ville sont calculés CÔTÉ CLIENT (matchingStaticDestinations), comme
// le fait déjà PlaceSuggestionsButton, et transmis au serveur : sans eux,
// get-place-suggestions ne renvoie QUE les destination_places communautaires
// pures, jamais les lieux ajoutés sous une ville déjà connue de l'app.
//
// Deux niveaux de correspondance, du plus sûr au moins sûr :
//   1. Géographique : l'activité ET le lieu ont des coordonnées (un lieu
//      n'est géocodé QUE quand quelqu'un l'a ajouté à sa propre
//      planification, voir api/geocode-place.js — pas systématique). Le
//      rayon accepté dépend de la confiance du nom : à noms QUASI IDENTIQUES
//      (score 1), jusqu'à 3 km — un grand site (palais, parc) peut avoir un
//      point géocodé et une coordonnée éditoriale distants de plus d'1 km
//      sans être un lieu différent (constaté sur le Palais d'été/Pékin,
//      1,4 km d'écart pour le même lieu) ; sinon (nom seulement proche,
//      score ≥ 0.5), 150 m seulement — la proximité doit alors compenser
//      l'incertitude du nom, pas l'inverse.
//   2. Texte strict (si l'un des deux n'a pas de coordonnées) : égalité de
//      nom quasi exacte (score 1) ET au moins 2 mots significatifs — un nom
//      à un seul mot générique ("Vieille ville", "Marché", "Plage") ne
//      matche jamais sans coordonnées, sans quoi deux lieux différents mais
//      nommés pareil dans la même ville se voleraient leur photo.
const MAX_MATCH_DISTANCE_EXACT_KM = 3;
const MAX_MATCH_DISTANCE_KM = 0.15;
const MIN_GEO_SCORE = 0.5;

const placesCache = {}; // `${countryCode}:${cityName}` -> Promise<places[]>
const resolvedCache = {}; // clé activité -> imageUrl | null

// PAS de _cityName dans la clé : ce champ n'existe que sur les copies
// construites par collectGroupActivities/collectTemplateActivities (utilisées
// pour peupler le cache et savoir quelles villes interroger) — au moment du
// RENDU (DayTimelineBlock), c'est l'activité D'ORIGINE, sans _cityName, qui
// est passée à getActivityImage. Une clé qui en dépendait ne matchait donc
// jamais au lookup, même quand la résolution avait réussi (bug constaté :
// la photo communautaire n'apparaissait jamais, silencieusement remplacée
// par le repli Wikipédia — dont la clé ne dépend pas de _cityName, d'où le
// fait qu'elle continuait, elle, à fonctionner).
function keyFor(activity) {
  return `${activity.name}::${activity.place_lat ?? ''}::${activity.place_lng ?? ''}`;
}

function fetchPlacesFor(cityName, countryCode) {
  const cacheKey = `${countryCode}:${cityName}`;
  if (!(cacheKey in placesCache)) {
    const staticDestIds = matchingStaticDestinations(cityName, countryCode).map((d) => String(d.id));
    placesCache[cacheKey] = callModeration('get-place-suggestions', {
      cityName, countryCode, staticDestIds, targetLanguage: 'fr',
    }).then((result) => (result.ok ? (result.places || []).filter((p) => p.imageUrl) : []));
  }
  return placesCache[cacheKey];
}

function bestMatch(activity, places) {
  const hasCoords = activity.place_lat != null && activity.place_lng != null;
  let best = null;
  let bestScore = -1;
  let bestIsGeo = false;
  for (const p of places) {
    const placeHasCoords = p.lat != null && p.lng != null;
    if (hasCoords && placeHasCoords) {
      const score = matchScore(activity.name, p.name);
      // Même garde qu'en mode texte : un nom à un seul mot générique
      // ("Café", "Restaurant") n'est accepté que sur une égalité quasi
      // parfaite, même à proximité immédiate — sans ça, un lieu tapé
      // vaguement volerait la photo d'une activité voisine plus précise.
      if (tokensOf(p.name).length < 2 && score < 1) continue;
      if (score < MIN_GEO_SCORE) continue;
      const maxDistance = score === 1 ? MAX_MATCH_DISTANCE_EXACT_KM : MAX_MATCH_DISTANCE_KM;
      if (haversineKm(activity.place_lat, activity.place_lng, p.lat, p.lng) > maxDistance) continue;
      if (!bestIsGeo || score > bestScore) { best = p; bestScore = score; bestIsGeo = true; }
    } else if (!bestIsGeo) {
      if (tokensOf(p.name).length < 2) continue;
      if (matchScore(activity.name, p.name) !== 1) continue;
      if (bestScore < 1) { best = p; bestScore = 1; }
    }
  }
  return best;
}

// `activities` : uniquement celles réellement affichées, chacune porteuse
// d'un champ `_cityName` (ville d'appartenance de l'activité — nécessaire
// pour les voyages multi-villes, voir TripSuggestionsModal.jsx
// collectGroupActivities) en plus des champs habituels (name, place_lat,
// place_lng).
export function useActivityCommunityImages(activities, countryCode) {
  const [resolved, setResolved] = useState(() => {
    const init = {};
    for (const a of activities) {
      const k = keyFor(a);
      if (k in resolvedCache) init[k] = resolvedCache[k];
    }
    return init;
  });

  const keys = activities.filter((a) => a?.name).map((a) => keyFor(a));
  const keysSignature = keys.join(',');

  useEffect(() => {
    if (!activities.length || !countryCode) return;
    let cancelled = false;

    (async () => {
      const cityNames = [...new Set(activities.map((a) => a._cityName).filter(Boolean))];
      const placesByCity = {};
      await Promise.all(cityNames.map(async (city) => {
        placesByCity[city] = await fetchPlacesFor(city, countryCode);
      }));
      if (cancelled) return;

      for (const a of activities) {
        if (!a?.name) continue;
        const k = keyFor(a);
        if (k in resolvedCache) continue;
        const match = bestMatch(a, placesByCity[a._cityName] || []);
        resolvedCache[k] = match ? match.imageUrl : null;
      }

      if (cancelled) return;
      setResolved((prev) => {
        const next = { ...prev };
        for (const k of keys) if (k in resolvedCache) next[k] = resolvedCache[k];
        return next;
      });
    })();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keysSignature, countryCode]);

  const getCommunityImage = (activity) => resolved[keyFor(activity)] || null;

  // Tant qu'une activité affichée n'a pas de résolution en cache (y compris
  // "sans résultat", entrée comme null), la recherche est en cours — sans ce
  // signal, useActivityPhoto pourrait déjà afficher une photo Wikipédia puis
  // la remplacer silencieusement par la photo communautaire une fois celle-ci
  // résolue (l'appel réseau vers get-place-suggestions prend plus ou moins
  // longtemps que la résolution Wikipédia selon les cas).
  const loading = countryCode ? keys.some((k) => !(k in resolved)) : false;

  return { getCommunityImage, loading };
}
