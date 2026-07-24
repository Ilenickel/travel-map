import { useState, useEffect } from 'react';
import { callModeration } from '../lib/moderation';

// Résout la photo représentative d'un PAYS (pas d'une ville — voir
// useCityImages pour ça) pour les cartes de voyage de l'écran d'accueil de la
// planification, via l'action serveur `get-country-image` de
// api/trip-templates.js (cache Supabase country_images + résolution Unsplash à
// la demande). Même contrat que useCityImages, en plus simple : un pays est
// indexé par son seul code alpha-3, sans géocodage ni matching cross-langue.
//
// Règles clés :
//   - Envoyer le nom ANGLAIS du pays (COUNTRIES[code].name.en) : c'est lui qui
//     sert de requête Unsplash quand le pays n'est pas encore en cache.
//   - Aucune photo de repli générique : `notFound`/erreur ⇒ pas de photo
//     (l'appelant affiche un habillage neutre — dégradé coloré du voyage).

const MAX_BATCH = 12;

// code pays -> { imageUrl, thumbUrl } | null (résolu sans photo exploitable).
// Cache module partagé : un pays déjà résolu (par n'importe quelle carte de la
// session) s'affiche instantanément sans nouvel aller-retour.
const imageCache = {};

// `countries` : [{ countryCode, countryName? (anglais) }] — seulement les pays
// réellement affichés à l'écran.
export function useCountryImages(countries) {
  const [resolved, setResolved] = useState({});

  const codes = (countries || []).filter((c) => c?.countryCode).map((c) => c.countryCode);
  const codesSignature = [...new Set(codes)].sort().join(',');

  useEffect(() => {
    if (!countries || !countries.length) return;
    let cancelled = false;

    // Dédoublonnage + séparation cache-hit / à résoudre, refait à chaque
    // passage (même raison que useCityImages : la liste peut arriver vide au
    // premier rendu puis se remplir, et un pays déjà résolu par une autre
    // carte doit se refléter ici sans nouveau fetch).
    const pending = [];
    const seen = new Set();
    const alreadyCached = {};
    for (const c of countries) {
      if (!c?.countryCode) continue;
      const k = c.countryCode;
      if (seen.has(k)) continue;
      seen.add(k);
      if (k in imageCache) alreadyCached[k] = imageCache[k];
      else pending.push(c);
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
      const chunks = [];
      for (let i = 0; i < pending.length; i += MAX_BATCH) chunks.push(pending.slice(i, i + MAX_BATCH));

      await Promise.all(chunks.map(async (batch) => {
        const result = await callModeration('trip-templates', {
          action: 'get-country-image',
          countries: batch.map((c) => ({
            countryCode: c.countryCode,
            countryName: c.countryName || null,
          })),
        });
        if (cancelled) return;

        const byCode = {};
        if (result?.ok) {
          for (const entry of result.images || []) byCode[entry.countryCode] = entry.image;
        }
        // Erreur transitoire (requête entière en échec, ou erreur par image) :
        // résolution LOCALE à ce montage, jamais écrite dans le cache module —
        // même précaution que useCityImages pour ne pas figer un faux "pas de
        // photo" (quota Unsplash momentané) réutilisé pour toujours.
        const requestFailed = !result?.ok;
        const localOnly = {};
        for (const c of batch) {
          const img = byCode[c.countryCode];
          const usable = img && !img.notFound && !img.error && img.image_url;
          const resolvedImage = usable ? { imageUrl: img.image_url, thumbUrl: img.thumb_url || img.image_url } : null;
          if (requestFailed || img?.error) localOnly[c.countryCode] = resolvedImage;
          else imageCache[c.countryCode] = resolvedImage;
        }

        setResolved((prev) => {
          const next = { ...prev };
          for (const c of batch) next[c.countryCode] = c.countryCode in localOnly ? localOnly[c.countryCode] : imageCache[c.countryCode];
          return next;
        });
      }));
    })();

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codesSignature]);

  // -> { imageUrl, thumbUrl } si une photo exploitable existe, null sinon.
  const getCountryImage = (countryCode) => resolved[countryCode] || null;

  return { getCountryImage };
}
