import { useState, useEffect } from 'react';
import { useWikipediaImages } from './useWikipediaImages';
import { normalizeName, tokensOf, matchScore } from '../lib/placeNameMatch';

// Résout une photo Wikipédia/Commons pour les ACTIVITÉS d'un planning suggéré
// (TripPlanSuggestionsButton / TripFullSuggestions) — "Kinkaku-ji" ne dit rien
// à quelqu'un qui ne connaît pas le Japon, une vignette si.
//
// Ordre de résolution, par activité :
//   1. Slug explicite (activity.wikipedia, colonne posée par
//      planning_modele_v11.sql) : passé tel quel à useWikipediaImages — aucun
//      appel de recherche, aucune ambiguïté possible.
//   2. Coordonnées connues (place_lat/place_lng — cas de TOUS les itinéraires
//      éditoriaux et des lieux géocodés Geoapify) : geosearch Wikipédia autour
//      du point, PUIS similarité de nom pour choisir le bon article — jamais
//      "le plus proche" seul : l'article le plus proche de la Tour Eiffel est
//      "Esplanade des Ouvriers-de-la-Tour-Eiffel" (constaté sur l'API réelle).
//   3. Sans coordonnées (activité saisie à la main, non géocodée) : recherche
//      plein texte par nom, acceptée UNIQUEMENT si le titre trouvé correspond
//      vraiment au nom — "le petit resto près de l'hôtel" ne doit jamais
//      recevoir la photo d'autre chose ; pas de photo est le bon résultat.
//
// L'article retenu est converti en fichier Commons ("File:xxx", via
// prop=pageimages du wiki où il a été trouvé) et confié à useWikipediaImages,
// qui garde la responsabilité EXCLUSIVE du filtrage de licence (jamais de
// fair use) et de l'attribution — ce hook ne télécharge jamais d'image
// lui-même.
//
// Wikis interrogés dans l'ordre : langue de l'UI, puis anglais, puis français
// (langue d'origine du contenu éditorial) — le nom stocké peut être dans
// n'importe laquelle de ces langues, la similarité de nom tranche.

const resolutionCache = {}; // clé -> "File:xxx" | slug article | null (résolu sans résultat)

// normalizeName/tokensOf/matchScore : voir src/lib/placeNameMatch.js — score
// de correspondance nom d'activité ↔ titre candidat, dans [0, 1].
// Un SCORE (et pas un booléen pris sur le premier candidat) : le geosearch
// renvoie les articles par DISTANCE, et l'article le plus proche n'est pas le
// bon — "Esplanade des Ouvriers-de-la-Tour-Eiffel" arrive avant "Tour Eiffel"
// et contient son nom (constaté sur l'API réelle) ; seul un classement où
// l'égalité exacte (1.0) bat l'inclusion/le recouvrement partiel choisit le
// bon article.

// `requireSpecific` (recherche texte, sans garde-fou géographique) : un titre
// à un seul token significatif n'est accepté que sur une égalité parfaite —
// sans ça, "Mon hôtel" matchait l'article générique "Hôtel" (score gonflé par
// l'inclusion) et affichait la photo d'un hôtel quelconque.
function bestMatchingTitle(titles, name, minScore, requireSpecific) {
  let best = null;
  let bestScore = 0;
  for (const title of titles) {
    const score = matchScore(name, title);
    if (requireSpecific && score < 1 && tokensOf(title).length < 2) continue;
    if (score > bestScore) { best = title; bestScore = score; }
  }
  return bestScore >= minScore ? best : null;
}

// Sous-domaine wiki sûr à partir de la langue i18n ("fr", "en-US", …) — tout
// ce qui ne ressemble pas à un code langue retombe sur l'anglais plutôt que
// de fabriquer une URL invalide.
function wikiLangOf(lang) {
  const base = (lang || '').toLowerCase().split('-')[0];
  return /^[a-z]{2,3}$/.test(base) ? base : 'en';
}

async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Candidats d'articles sur UN wiki, selon le mode : 'geo' (articles
// géolocalisés autour du point) ou 'text' (recherche plein texte par nom).
async function candidateTitles(wiki, mode, name, lat, lng) {
  if (mode === 'geo') {
    const data = await fetchJson(
      `https://${wiki}.wikipedia.org/w/api.php?action=query&list=geosearch` +
      `&gscoord=${encodeURIComponent(`${lat}|${lng}`)}&gsradius=500&gslimit=10&format=json&origin=*`
    );
    return (data?.query?.geosearch || []).map((g) => g.title);
  }
  const data = await fetchJson(
    `https://${wiki}.wikipedia.org/w/api.php?action=query&list=search` +
    `&srsearch=${encodeURIComponent(name)}&srlimit=5&srnamespace=0&format=json&origin=*`
  );
  return (data?.query?.search || []).map((s) => s.title);
}

// L'image "à la une" (pageimage) d'un article n'est pas toujours une photo
// du lieu : c'est souvent un logo/blason/drapeau institutionnel (ex. le
// wordmark du Centre Pompidou plutôt qu'une photo du bâtiment) — quasi
// toujours en SVG (les photos ne le sont jamais) ou nommé explicitement
// comme tel. Rejetée ici plutôt que filtrée par useWikipediaImages : ce
// dernier ne voit que le nom de fichier final, sans savoir s'il a été choisi
// par correspondance géo/nom ou explicitement écarté pour ce motif.
const NON_PHOTO_FILENAME_RE = /\.svg$|logo|wordmark|seal_of|coat_of_arms|blason|armoiries|flag_of|drapeau_de/i;

// Nom du fichier "image à la une" (pageimage) d'un article sur ce wiki —
// c'est lui (préfixé "File:") qui sera résolu/vérifié via Commons par
// useWikipediaImages. null si l'article n'a pas d'image (ou seulement un
// logo/blason non représentatif, voir NON_PHOTO_FILENAME_RE).
async function pageImageFile(wiki, title) {
  const data = await fetchJson(
    `https://${wiki}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}` +
    `&prop=pageimages&piprop=name&format=json&origin=*`
  );
  const pages = data?.query?.pages || {};
  for (const page of Object.values(pages)) {
    if (page.pageimage && !NON_PHOTO_FILENAME_RE.test(page.pageimage)) return `File:${page.pageimage}`;
  }
  return null;
}

async function resolveActivity(activity, uiLang) {
  const wikis = [...new Set([wikiLangOf(uiLang), 'en', 'fr'])];
  const hasCoords = activity.place_lat != null && activity.place_lng != null;
  // Le geosearch d'abord quand on a des coordonnées (garde-fou géographique
  // fort), puis repli en recherche texte : certains lieux réels ne sont pas
  // géolocalisés là où l'activité les place (ex. "Grande Muraille de Chine" —
  // l'article n'est pas ancré à Badaling, constaté sur l'API réelle).
  const modes = hasCoords ? ['geo', 'text'] : ['text'];
  for (const mode of modes) {
    // La recherche plein texte n'a AUCUN garde-fou géographique : seuil plus
    // exigeant (et titres génériques exclus, voir bestMatchingTitle) pour
    // qu'un "petit resto de ramen" saisi à la main ne récupère pas la photo
    // de l'article "Ramen" — pas de photo est alors le bon résultat.
    const minScore = mode === 'geo' ? 0.5 : 0.75;
    for (const wiki of wikis) {
      const titles = await candidateTitles(wiki, mode, activity.name, activity.place_lat, activity.place_lng);
      const matched = bestMatchingTitle(titles, activity.name, minScore, mode === 'text');
      if (!matched) continue;
      const file = await pageImageFile(wiki, matched);
      // Article trouvé mais sans image : on tente le wiki suivant (le même
      // lieu peut y avoir un article illustré), plutôt que d'abandonner.
      if (file) return file;
    }
  }
  return null;
}

function keyFor(activity, uiLang) {
  if (activity.wikipedia) return `slug:${activity.wikipedia}`;
  return `search:${uiLang}:${normalizeName(activity.name)}:${activity.place_lat ?? ''}:${activity.place_lng ?? ''}`;
}

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

// `activities` : uniquement celles réellement affichées (template déplié /
// carte courante du carrousel), même retenue que useActivityNameTranslations —
// pas les 5 pages de résultats jamais consultées.
export function useActivityWikiImages(activities, uiLang) {
  // clé -> slug résolu ("File:xxx" / slug article) ou null. Initialisé depuis
  // le cache module pour un rendu immédiat sans re-résolution.
  const [resolved, setResolved] = useState(() => {
    const init = {};
    for (const a of activities) {
      const k = keyFor(a, uiLang);
      if (k in resolutionCache) init[k] = resolutionCache[k];
    }
    return init;
  });

  const keys = activities.filter((a) => a?.name).map((a) => keyFor(a, uiLang));
  const keysSignature = keys.join(',');

  useEffect(() => {
    if (!activities.length) return;
    let cancelled = false;

    (async () => {
      const pending = [];
      const seen = new Set();
      for (const a of activities) {
        if (!a?.name) continue;
        const k = keyFor(a, uiLang);
        if (k in resolutionCache || seen.has(k)) continue;
        seen.add(k);
        pending.push({ key: k, activity: a });
      }

      // Slug explicite : aucune recherche à faire, le slug EST la résolution.
      for (const { key, activity } of pending.filter((p) => p.activity.wikipedia)) {
        resolutionCache[key] = activity.wikipedia;
      }

      // Les autres : recherche par lots limités (au plus 6 activités en
      // parallèle) pour ne pas rafaler l'API Wikipédia sur un grand template.
      const toSearch = pending.filter((p) => !p.activity.wikipedia);
      for (const batch of chunkArray(toSearch, 6)) {
        if (cancelled) return;
        await Promise.all(batch.map(async ({ key, activity }) => {
          resolutionCache[key] = await resolveActivity(activity, uiLang);
        }));
      }

      if (cancelled) return;
      setResolved((prev) => {
        const next = { ...prev };
        for (const k of keys) {
          if (k in resolutionCache) next[k] = resolutionCache[k];
        }
        return next;
      });
    })();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keysSignature, uiLang]);

  const slugs = [...new Set(Object.values(resolved).filter(Boolean))];
  const { images, meta } = useWikipediaImages(slugs);

  // Chargement en cours tant qu'une activité affichée n'a pas fini son
  // parcours : résolution du slug (clé absente de `resolved` — y compris les
  // résolutions "sans résultat", qui y entrent comme null) PUIS téléchargement
  // de la miniature (slug absent de `images` — un slug sans image libre y
  // entre comme null). Purement dérivé, aucun état supplémentaire : sert au
  // message "photos en cours de chargement" des modales de suggestions, sans
  // lequel on croit qu'il n'y a pas de photos du tout.
  const loading = keys.some((k) => !(k in resolved))
    || slugs.some((s) => !(s in images));

  // -> { src, meta } si une photo (libre) est résolue, null sinon — l'appelant
  // n'affiche alors simplement pas de vignette, jamais de cadre vide.
  const getActivityImage = (activity) => {
    const slug = resolved[keyFor(activity, uiLang)];
    if (!slug) return null;
    const src = images[slug];
    if (!src) return null;
    return { src, meta: meta[slug] };
  };

  return { getActivityImage, loading };
}
