import { useState, useEffect } from "react";

// Module-level cache: persists across panel opens
const globalCache = {};

async function batchFetch(slugs) {
  const toFetch = slugs.filter((s) => s && !(s in globalCache));
  if (!toFetch.length) return;

  const articleSlugs = [];
  const fileSlugs = [];

  for (const slug of toFetch) {
    if (slug.startsWith("File:")) {
      fileSlugs.push(slug);
    } else {
      articleSlugs.push(slug);
    }
  }

  //
  // ARTICLES WIKIPEDIA
  //
  if (articleSlugs.length) {
    const chunks = [];

    for (let i = 0; i < articleSlugs.length; i += 50) {
      chunks.push(articleSlugs.slice(i, i + 50));
    }

    await Promise.all(
      chunks.map(async (chunk) => {
        const titles = chunk.join("|");

        const url =
          `https://en.wikipedia.org/w/api.php?action=query` +
          `&titles=${encodeURIComponent(titles)}` +
          `&prop=pageimages&pithumbsize=800` +
          `&format=json&origin=*`;

        const data = await fetch(url).then((r) => r.json());

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
            const src = page.thumbnail?.source ?? null;

            if (!src) {
              console.warn(
                `[Wikipedia] no thumbnail for slug: "${slug}" (article: "${page.title}")`
              );
            }

            globalCache[slug] = src;
          }
        }

        for (const slug of chunk) {
          if (!(slug in globalCache)) {
            console.warn(
              `[Wikipedia] article not found for slug: "${slug}"`
            );
            globalCache[slug] = null;
          }
        }
      })
    );
  }

  //
  // FICHIERS COMMONS (File:...)
  //
  if (fileSlugs.length) {
    const chunks = [];

    for (let i = 0; i < fileSlugs.length; i += 50) {
      chunks.push(fileSlugs.slice(i, i + 50));
    }

    await Promise.all(
      chunks.map(async (chunk) => {
        const titles = chunk.join("|");

        const url =
          `https://commons.wikimedia.org/w/api.php?action=query` +
          `&titles=${encodeURIComponent(titles)}` +
          `&prop=imageinfo&iiprop=url` +
          `&format=json&origin=*`;

        const data = await fetch(url).then((r) => r.json());

        console.log("WIKI FILE URL =", url);
console.log("WIKI FILE RESPONSE =", data);

        const pages = data?.query?.pages ?? {};

        const norm = {};

for (const n of data?.query?.normalized ?? []) {
  norm[n.to] = n.from;
}

for (const page of Object.values(pages)) {
  const originalTitle = norm[page.title] ?? page.title;

  const src = page.imageinfo?.[0]?.url ?? null;

  if (!src) {
    console.warn(
      `[Wikipedia] no image found for file "${originalTitle}"`
    );
  }

  globalCache[originalTitle] = src;
}

        for (const slug of chunk) {
          if (!(slug in globalCache)) {
            console.warn(
              `[Wikipedia] file not found: "${slug}"`
            );
            globalCache[slug] = null;
          }
        }
      })
    );
  }
}

export function useWikipediaImages(slugs) {
  const [images, setImages] = useState(() => {
    const init = {};

    for (const s of slugs) {
      if (s && s in globalCache) {
        init[s] = globalCache[s];
      }
    }

    return init;
  });

  useEffect(() => {
    if (!slugs.length) return;

    batchFetch(slugs).then(() => {
      const result = {};

      for (const s of slugs) {
        if (s) {
          result[s] = globalCache[s] ?? null;
        }
      }

      setImages(result);
    });
  }, [slugs.join(",")]); // eslint-disable-line

  return images;
}