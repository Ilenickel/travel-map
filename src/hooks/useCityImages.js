import { useState, useEffect } from 'react';
import { callModeration } from '../lib/moderation';

// Résout la photo représentative d'une VILLE (pas d'une activité — voir
// useActivityPhoto pour ça) pour les écrans de suggestions de voyage, via
// l'action serveur `get-city-image` de api/trip-templates.js (cache Supabase
// + résolution Unsplash à la demande). Voir docs/city-images-integration.md
// pour le contrat complet.
//
// Règles clés du contrat (à ne pas casser) :
//   - Envoyer TOUJOURS le nom SOURCE brut de la ville (celui stocké/tapé,
//     jamais le libellé traduit affiché à l'écran) — c'est ce nom qui indexe
//     le cache. L'appelant passe donc `cityName` brut, pas un `t(...)`.
//   - Fournir lat/lng quand ils sont connus (suggestions éditoriales) pour
//     éviter un géocodage serveur ; les omettre sinon (le backend géocode).
//   - Au plus 8 villes par appel (MAX_CITY_IMAGE_BATCH côté serveur) → on
//     découpe en lots de 8.
//   - Aucune photo de repli : `notFound`/erreur ⇒ pas de photo (l'appelant
//     affiche un habillage neutre, jamais une image générique).

const MAX_BATCH = 8;

// clé -> { imageUrl, thumbUrl } | null (résolu sans photo exploitable).
// Cache module : une ville déjà résolue (par n'importe quel écran de la
// session) s'affiche instantanément sans nouvel aller-retour.
const imageCache = {};

function keyFor(countryCode, cityName) {
  return `${countryCode || ''}|${(cityName || '').trim().toLowerCase()}`;
}

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

// `cities` : [{ cityName (brut/source), lat?, lng? }] — seulement les villes
// réellement affichées, comme les hooks de photos d'activités (pas 5 pages de
// résultats jamais consultées).
// `context` : { countryCode, countryName (anglais), countryAlpha2, sourceLanguage }.
export function useCityImages(cities, context) {
  const { countryCode, countryName, countryAlpha2, sourceLanguage } = context || {};

  const [resolved, setResolved] = useState({});

  const keys = (cities || []).filter((c) => c?.cityName).map((c) => keyFor(countryCode, c.cityName));
  const keysSignature = keys.join(',');

  useEffect(() => {
    if (!cities || !cities.length) return;
    let cancelled = false;

    // Dédoublonnage + séparation cache-hit / à résoudre. Fait à CHAQUE
    // passage ici (pas seulement au tout premier montage) : `cities` vaut
    // souvent [] au tout premier rendu (ex. CitiesTab/FullTripTab, dont la
    // liste vient d'un fetch async côté parent — citiesList/groups —
    // encore `null` à ce moment), puis se remplit un instant après. Sans
    // cette resynchronisation à chaque changement de `cities`, une ville
    // déjà résolue par un AUTRE écran (ou un montage précédent de CE hook)
    // n'apparaissait jamais ici : les clés déjà en `imageCache` étaient
    // exclues du fetch (normal) MAIS aussi de toute mise à jour de l'état
    // local `resolved`, qui restait vide pour elles — symptôme exact
    // observé : photos disparues après un aller-retour entre onglets, ou
    // jamais affichées dans un onglet alors que l'autre les avait déjà.
    const pending = [];
    const seen = new Set();
    const alreadyCached = {};
    for (const c of cities) {
      if (!c?.cityName) continue;
      const k = keyFor(countryCode, c.cityName);
      if (seen.has(k)) continue;
      seen.add(k);
      if (k in imageCache) alreadyCached[k] = imageCache[k];
      else pending.push({ key: k, city: c });
    }
    if (Object.keys(alreadyCached).length) {
      setResolved((prev) => {
        let changed = false;
        const next = { ...prev };
        for (const k in alreadyCached) {
          if (next[k] !== alreadyCached[k]) { next[k] = alreadyCached[k]; changed = true; }
        }
        return changed ? next : prev;
      });
    }

    (async () => {
      if (!pending.length) return;

      // Lots envoyés EN PARALLÈLE (pas l'un après l'autre) : avec un pays qui
      // a plus de 8 villes (ex. la Chine), un for-await séquentiel imposait
      // autant d'allers-retours réseau successifs avant que la dernière carte
      // affiche sa photo — perçu comme "les images mettent du temps à
      // charger". Le serveur résout déjà chaque lot en parallèle en interne
      // (Promise.all, voir handleGetCityImage), rien n'empêche d'envoyer tous
      // les lots en même temps.
      await Promise.all(chunkArray(pending, MAX_BATCH).map(async (batch) => {
        const result = await callModeration('trip-templates', {
          action: 'get-city-image',
          cities: batch.map(({ city }) => ({
            cityName: city.cityName,
            countryCode,
            countryName: countryName || null,
            countryAlpha2: countryAlpha2 || null,
            sourceLanguage: sourceLanguage || 'fr',
            // lat/lng seulement s'ils sont réellement connus (suggestions
            // éditoriales) — sinon le backend géocode lui-même.
            ...(typeof city.lat === 'number' ? { lat: city.lat } : {}),
            ...(typeof city.lng === 'number' ? { lng: city.lng } : {}),
          })),
        });
        if (cancelled) return;

        const byName = {};
        if (result?.ok) {
          for (const entry of result.images || []) {
            byName[keyFor(entry.countryCode, entry.cityName)] = entry.image;
          }
        }
        // Résolution LOCALE à ce montage (jamais écrite dans le cache module
        // partagé) pour les cas transitoires — voir docs/city-images-
        // integration.md §2 "Erreur transitoire" : rien n'a été mis en cache
        // CÔTÉ SERVEUR non plus dans ce cas (quota Unsplash atteint, timeout…),
        // un appel ultérieur retentera. Sans cette distinction, un premier
        // chargement raté (ex. plusieurs cartes en même temps qui épuisent le
        // quota) écrivait `null` en dur dans `imageCache` : revenir sur cet
        // onglet plus tard réutilisait ce faux "pas de photo" pour toujours,
        // au lieu de retenter — exactement le symptôme "pire en changeant
        // d'onglet et en revenant".
        // `!result?.ok` (requête ENTIÈRE en échec — session expirée, réseau
        // coupé, 500 serveur, voir callModeration) traité comme transitoire
        // pour TOUTES les villes du lot, pas seulement l'erreur PAR IMAGE
        // (`img.error`) : trouvé en TNR le 2026-07-23 — un `result.ok===false`
        // laissait `byName` vide, donc `img` toujours `undefined` pour chaque
        // ville, qui retombait dans la branche "écrire en cache" avec la même
        // conséquence que le bug déjà corrigé (juste déclenché autrement).
        const requestFailed = !result?.ok;
        const localOnly = {};
        for (const { key, city } of batch) {
          const img = byName[key] || byName[keyFor(countryCode, city.cityName)];
          const usable = img && !img.notFound && !img.error && img.image_url;
          const resolvedImage = usable ? { imageUrl: img.image_url, thumbUrl: img.thumb_url || img.image_url } : null;
          if (requestFailed || img?.error) localOnly[key] = resolvedImage;
          else imageCache[key] = resolvedImage;
        }

        setResolved((prev) => {
          const next = { ...prev };
          for (const { key } of batch) next[key] = key in localOnly ? localOnly[key] : imageCache[key];
          return next;
        });
      }));
    })();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keysSignature, countryCode]);

  // Chargement tant qu'une ville affichée n'a pas fini sa résolution (clé
  // absente de `resolved` — les résolutions "sans photo" y entrent comme null).
  const loading = keys.some((k) => !(k in resolved));

  // -> { imageUrl, thumbUrl } si une photo exploitable existe, null sinon.
  const getCityImage = (cityName) => resolved[keyFor(countryCode, cityName)] || null;

  return { getCityImage, loading };
}
