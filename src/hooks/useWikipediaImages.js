import { useState, useEffect } from "react";

// Module-level cache: persists across panel opens.
// globalImageCache[slug]  : URL de la miniature, ou null si aucune image.
// globalMetaCache[slug]   : { author, license, licenseUrl } une fois résolu
//   (author/license peuvent individuellement être null si Wikimedia ne les
//   fournit pas — le cas le plus fréquent étant les images du domaine public
//   ancien), ou `undefined` tant que non résolu. Séparé du cache d'URL : une
//   image peut être affichée avant que son attribution ait fini de charger.
const globalImageCache = {};
const globalMetaCache = {};

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

// Le champ "Artist" de l'API renvoie souvent du HTML (lien vers le profil de
// l'auteur, ex. `<a href="//commons.wikimedia.org/wiki/User:Xxx">Jean</a>`) —
// on n'en garde que le texte : la tooltip est un attribut `title` natif du
// navigateur, qui ne rend jamais de HTML de toute façon.
function stripHtml(html) {
  if (!html) return null;
  try {
    const text = new DOMParser().parseFromString(html, "text/html").body.textContent;
    return text?.trim() || null;
  } catch {
    return null;
  }
}

// Construit l'attribution à partir du bloc extmetadata renvoyé par l'API —
// jamais `null` en entrée : une image sans AUCUNE métadonnée (cas réel pour
// certaines images très anciennes du domaine public) donne quand même un
// objet avec author/license à null, pour que l'appelant sache que la
// résolution a eu lieu (à distinguer de "pas encore interrogé"). Conserve
// aussi les champs bruts (licenseCode, usageTerms) utilisés UNIQUEMENT par
// isFreeLicense ci-dessous, jamais exposés tels quels au reste de l'app.
function metaFromExtmetadata(em) {
  const author = stripHtml(em?.Artist?.value) || stripHtml(em?.Credit?.value);
  const license = em?.LicenseShortName?.value || em?.UsageTerms?.value || null;
  const licenseUrl = em?.LicenseUrl?.value || null;
  return {
    author, license, licenseUrl,
    licenseCode: em?.License?.value || null,
    usageTerms: em?.UsageTerms?.value || null,
  };
}

// Détermine si une image est sous licence libre à partir de ses métadonnées
// brutes — utilisé pour ne JAMAIS afficher une image "fair use"/non-libre
// (tolérée sur certains articles Wikipédia mais sans existence légale en
// France/UE, et de toute façon incompatible avec un usage commercial), quelle
// que soit la source (Commons applique déjà une politique "libre uniquement"
// à l'upload, mais le repli sur en.wikipedia.org pour les fichiers absents de
// Commons contourne cette garantie — c'est là que le risque se concentre).
//
// true = libre confirmé, false = non-libre confirmé, null = statut ambigu
// (aucun signal net dans un sens ou l'autre — arrive surtout pour de très
// vieilles œuvres du domaine public dont la fiche Commons est peu renseignée).
function isFreeLicense(rawMeta) {
  const text = [rawMeta?.licenseCode, rawMeta?.license, rawMeta?.usageTerms]
    .filter(Boolean).join(" ").toLowerCase();
  if (!text) return null;
  // "Copyrighted free use" est une licence Commons valide (donc libre) malgré
  // le mot "copyright" — la négation ne cible donc que des formulations sans
  // ambiguïté possible avec une licence libre existante.
  if (/fair.?use|non-?free|all rights reserved|used with permission/.test(text)) return false;
  if (/(cc-?0|cc-?by|creative commons|public.?domain|\bpd\b|pd-|gfdl|gnu free documentation|free art license|\bfal\b|copyrighted free use)/.test(text)) return true;
  return null;
}

// Interroge `endpoint` pour l'extmetadata de titres "File:xxx" donnés (déjà
// préfixés), en gérant la normalisation de titre côté API (espaces/accents) —
// retourne { [titreOriginal]: metaObjOrNull }. `metaObjOrNull` est `null` si
// le fichier est introuvable sur CET endpoint (pas d'erreur) : permet à
// l'appelant de retenter sur un autre wiki (repli Commons → enwiki local pour
// les rares images non-libres hébergées localement, jamais sur Commons).
async function fetchExtmetadata(endpoint, fileTitles) {
  const result = {};
  if (!fileTitles.length) return result;
  await Promise.all(
    chunkArray(fileTitles, 50).map(async (chunk) => {
      const url =
        `${endpoint}?action=query&titles=${encodeURIComponent(chunk.join("|"))}` +
        `&prop=imageinfo&iiprop=extmetadata&format=json&origin=*`;
      let data;
      try {
        data = await fetch(url).then((r) => r.json());
      } catch {
        chunk.forEach((t) => { result[t] = null; });
        return;
      }
      const pages = data?.query?.pages ?? {};
      const norm = {};
      for (const n of data?.query?.normalized ?? []) norm[n.to] = n.from;

      for (const page of Object.values(pages)) {
        const originalTitle = norm[page.title] ?? page.title;
        if (!chunk.includes(originalTitle)) continue;
        const em = page.imageinfo?.[0]?.extmetadata;
        result[originalTitle] = em ? metaFromExtmetadata(em) : null;
      }
      for (const t of chunk) {
        if (!(t in result)) result[t] = null; // page manquante sur cet endpoint
      }
    })
  );
  return result;
}

async function batchFetch(slugs) {
  const toFetch = slugs.filter((s) => s && !(s in globalImageCache));
  if (!toFetch.length) return;

  const articleSlugs = [];
  const fileSlugs = [];

  for (const slug of toFetch) {
    if (slug.startsWith("File:")) fileSlugs.push(slug);
    else articleSlugs.push(slug);
  }

  // fileTitle ("File:xxx.jpg") -> liste des slugs qui doivent recevoir son
  // attribution une fois résolue. Un même fichier peut être réutilisé par
  // plusieurs slugs (rare mais possible), d'où une liste et pas un slug seul.
  const slugsByFileTitle = {};

  //
  // ARTICLES WIKIPEDIA
  //
  if (articleSlugs.length) {
    await Promise.all(
      chunkArray(articleSlugs, 50).map(async (chunk) => {
        const titles = chunk.join("|");

        const url =
          `https://en.wikipedia.org/w/api.php?action=query` +
          `&titles=${encodeURIComponent(titles)}` +
          `&prop=pageimages&pithumbsize=800` +
          `&format=json&origin=*`;

        let data;
        try {
          data = await fetch(url).then((r) => r.json());
        } catch {
          // Cohérent avec fetchExtmetadata ci-dessus : un échec réseau ne doit
          // jamais rejeter le Promise.all englobant (ça bloquait silencieusement
          // tout batchFetch et redéclenchait un re-fetch infini des slugs
          // touchés à chaque render). On les marque résolus à null à la place.
          chunk.forEach((s) => { globalImageCache[s] = null; });
          return;
        }

        const pages = data?.query?.pages ?? {};

        // Canonical title -> original slug
        const norm = {};

        for (const n of data?.query?.normalized ?? []) {
          norm[n.to] = n.from;
        }

        for (const r of data?.query?.redirects ?? []) {
          norm[r.to] = r.from;
        }

        for (const page of Object.values(pages)) {
          const originalTitle = norm[page.title] ?? page.title;

          const slug = chunk.find(
            (s) => s === originalTitle || s === page.title
          );

          if (slug) {
            globalImageCache[slug] = page.thumbnail?.source ?? null;
            // `pageimage` : nom du fichier réel derrière l'image à la une de
            // l'article (ex. "Eiffel_Tower_from_the_Tour_Montparnasse.jpg"),
            // renvoyé par défaut par l'API aux côtés de la miniature — sert à
            // aller chercher l'attribution dans une 2e requête ci-dessous, la
            // même image pouvant être créditée différemment d'un article à
            // l'autre selon la version/le recadrage utilisé.
            if (page.pageimage) {
              const fileTitle = `File:${page.pageimage}`;
              (slugsByFileTitle[fileTitle] ||= []).push(slug);
            } else {
              globalMetaCache[slug] = null;
            }
          }
        }

        for (const slug of chunk) {
          if (!(slug in globalImageCache)) globalImageCache[slug] = null;
        }
      })
    );
  }

  //
  // FICHIERS COMMONS (File:...)
  //
  if (fileSlugs.length) {
    await Promise.all(
      chunkArray(fileSlugs, 50).map(async (chunk) => {
        const titles = chunk.join("|");

        const url =
          `https://commons.wikimedia.org/w/api.php?action=query` +
          `&titles=${encodeURIComponent(titles)}` +
          `&prop=imageinfo&iiprop=url&iiurlwidth=800` +
          `&format=json&origin=*`;

        let data;
        try {
          data = await fetch(url).then((r) => r.json());
        } catch {
          chunk.forEach((s) => { globalImageCache[s] = null; });
          return;
        }

        const pages = data?.query?.pages ?? {};

        const norm = {};

        for (const n of data?.query?.normalized ?? []) {
          norm[n.to] = n.from;
        }

        for (const page of Object.values(pages)) {
          const originalTitle = norm[page.title] ?? page.title;
          const src = page.imageinfo?.[0]?.thumburl ?? page.imageinfo?.[0]?.url ?? null;
          globalImageCache[originalTitle] = src;
          if (src) (slugsByFileTitle[originalTitle] ||= []).push(originalTitle);
          else globalMetaCache[originalTitle] = null;
        }

        for (const slug of chunk) {
          if (!(slug in globalImageCache)) globalImageCache[slug] = null;
        }
      })
    );
  }

  //
  // ATTRIBUTION (extmetadata) — Commons d'abord, repli sur en.wikipedia.org
  // pour les rares fichiers hébergés localement (non trouvés sur Commons),
  // ex. certaines images "fair use" d'articles anglophones.
  //
  const allFileTitles = Object.keys(slugsByFileTitle);
  if (allFileTitles.length) {
    const fromCommons = await fetchExtmetadata("https://commons.wikimedia.org/w/api.php", allFileTitles);
    const missingOnCommons = allFileTitles.filter((t) => fromCommons[t] === null);
    const fromEnwiki = missingOnCommons.length
      ? await fetchExtmetadata("https://en.wikipedia.org/w/api.php", missingOnCommons)
      : {};

    for (const fileTitle of allFileTitles) {
      const onCommons = fromCommons[fileTitle];
      const onEnwiki = fromEnwiki[fileTitle];

      // Statut libre/non-libre : Commons applique déjà une politique "libre
      // uniquement" à l'upload, donc un fichier trouvé là-bas est réputé
      // libre SAUF signal explicite contraire (mal catégorisé, rare). Un
      // fichier absent de Commons et trouvé seulement sur en.wikipedia.org
      // contourne cette garantie — il n'est accepté que si sa propre licence
      // le confirme EXPLICITEMENT comme libre, jamais par défaut. Introuvable
      // sur les deux endpoints (fileTitle disparu entre-temps) : exclu aussi,
      // impossible de vérifier quoi que ce soit.
      let isFree, meta;
      if (onCommons) {
        isFree = isFreeLicense(onCommons) !== false;
        meta = onCommons;
      } else if (onEnwiki) {
        isFree = isFreeLicense(onEnwiki) === true;
        meta = onEnwiki;
      } else {
        isFree = false;
        meta = null;
      }

      for (const slug of slugsByFileTitle[fileTitle]) {
        if (!isFree) {
          // Image non-libre (ou statut invérifiable) : jamais affichée, quel
          // que soit ce que pageimages/imageinfo avait tentativement résolu
          // plus haut — globalImageCache est ré-écrasé ici, AVANT que le hook
          // ne lise le cache pour mettre à jour son état (batchFetch est
          // entièrement awaité avant ça, voir useWikipediaImages ci-dessous) :
          // aucun flash de l'image non-libre ne peut donc se produire.
          globalImageCache[slug] = null;
          globalMetaCache[slug] = null;
        } else {
          globalMetaCache[slug] = {
            author: meta?.author ?? null,
            license: meta?.license ?? null,
            licenseUrl: meta?.licenseUrl ?? null,
          };
        }
      }
    }
  }
}

export function useWikipediaImages(slugs) {
  const [images, setImages] = useState(() => {
    const init = {};
    for (const s of slugs) {
      if (s && s in globalImageCache) init[s] = globalImageCache[s];
    }
    return init;
  });
  const [meta, setMeta] = useState(() => {
    const init = {};
    for (const s of slugs) {
      if (s && s in globalMetaCache) init[s] = globalMetaCache[s];
    }
    return init;
  });

  useEffect(() => {
    if (!slugs.length) return;
    let cancelled = false;

    batchFetch(slugs).then(() => {
      if (cancelled) return;
      const imgResult = {};
      const metaResult = {};

      for (const s of slugs) {
        if (s) {
          imgResult[s] = globalImageCache[s] ?? null;
          if (s in globalMetaCache) metaResult[s] = globalMetaCache[s];
        }
      }

      // Fusion (et non remplacement) : évite qu'une résolution périmée
      // (slugs partiels d'un render précédent) efface des images déjà chargées.
      setImages((prev) => ({ ...prev, ...imgResult }));
      setMeta((prev) => ({ ...prev, ...metaResult }));
    });

    return () => { cancelled = true; };
  }, [slugs.join(",")]); // eslint-disable-line

  return { images, meta };
}
