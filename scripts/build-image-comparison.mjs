// Outil de test (PAS branché en prod) : génère une page HTML autonome
// comparant, côte à côte, la photo Unsplash déjà en cache et l'image d'en-tête
// Wikipedia pour un échantillon de villes de city_images — sert à juger à
// l'œil si Wikipedia serait une meilleure source que Unsplash avant de
// décider une éventuelle refonte (voir docs/city-images-integration.md,
// section 8).
//
// Usage :
//   node scripts/build-image-comparison.mjs --limit=50 --order=asc
//   node scripts/build-image-comparison.mjs --limit=25 --order=desc --out=scripts/output/comparaison.html
//
// --order=desc (défaut) : les villes avec le PLUS de likes Unsplash (grandes
//   villes, corpus riche) — échantillon utilisé le 2026-07-22.
// --order=asc  : les villes avec le MOINS de likes Unsplash (petites villes,
//   corpus pauvre) — le cas qui inquiète le plus pour la suite (utilisateurs
//   ajoutant des villes peu connues).
// --limit=N (défaut 25) : nombre de villes.
// --out=chemin (défaut scripts/output/image-comparison.html) : la page
//   générée est 100% autonome (images encodées en base64) — l'ouvrir
//   directement dans un navigateur, aucun serveur ni publication requis.
//
// Prérequis : .env avec VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY (comme
// les autres scripts de ce dossier). Aucune clé Wikipedia nécessaire (API
// publique), mais un User-Agent descriptif est envoyé (exigé par Wikimedia)
// et les appels sont volontairement séquentiels avec pause — Wikimedia
// renvoie 429 rapidement si on télécharge en parallèle ou trop vite (vécu le
// 2026-07-22, cf. commentaires dans le code ci-dessous).

import { createClient } from '@supabase/supabase-js';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { loadEnv, ROOT } from './_shared-env.mjs';

const env = loadEnv();
const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('✗ Variables manquantes dans .env : VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}
const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);
const LIMIT = parseInt(args.limit ?? '25', 10);
const ORDER_ASC = (args.order ?? 'desc') === 'asc';
const OUT_PATH = args.out ? args.out : `${ROOT}/scripts/output/image-comparison.html`;

const UA = 'travel-map-image-eval/1.0 (comparatif Unsplash/Wikipedia, usage ponctuel, voir docs/city-images-integration.md)';
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function englishNameFromQuery(queryUsed) {
  // query_used est construit "{nom anglais}, {pays}" ou "{nom anglais}" seul
  // (voir searchBestCityPhoto, api/_lib/cityImages.js) — on ne garde que la
  // partie ville.
  return (queryUsed || '').split(',')[0].trim();
}

async function fetchWikipediaLead(title) {
  const searchRes = await fetch(
    `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(title)}&limit=1&namespace=0&format=json`,
    { headers: { 'User-Agent': UA } }
  );
  const searchText = await searchRes.text();
  let searchData;
  try { searchData = JSON.parse(searchText); } catch { return { found: false, reason: 'opensearch: réponse non-JSON (probable rate limit)' }; }
  const resolvedTitle = searchData?.[1]?.[0];
  if (!resolvedTitle) return { found: false, reason: 'aucun article trouvé' };

  await sleep(1200);
  const summaryRes = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(resolvedTitle)}`,
    { headers: { 'User-Agent': UA } }
  );
  if (!summaryRes.ok) return { found: false, reason: `HTTP ${summaryRes.status}` };
  const summaryText = await summaryRes.text();
  let summary;
  try { summary = JSON.parse(summaryText); } catch { return { found: false, reason: 'summary: réponse non-JSON (probable rate limit)' }; }

  // Volontairement thumbnail.source (léger) et PAS originalimage.source :
  // télécharger les originaux pleine résolution en série a déclenché un 429
  // Wikimedia le 2026-07-22 sur un échantillon de 25 villes.
  const imgUrl = summary.thumbnail?.source || null;
  if (!imgUrl) return { found: false, reason: 'page sans image' };
  // Drapeau/blason/carte = quasi toujours une source SVG (même si l'URL de
  // la vignette se termine en .png, le chemin contient ".svg").
  const isSvgSource = /\.svg/i.test(imgUrl);
  return { found: true, resolvedTitle, imgUrl, isSvgSource, description: summary.description || null };
}

async function toDataUri(url, referer) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA, ...(referer ? { Referer: referer } : {}) } });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const ct = res.headers.get('content-type') || 'image/jpeg';
    return `data:${ct};base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

function shrinkUnsplash(url, w) {
  return url.replace(/([?&])w=\d+/, `$1w=${w}`);
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function main() {
  const { data: rows, error } = await sb
    .from('city_images')
    .select('city_name, country_code, likes, thumb_url, query_used, not_found')
    .eq('not_found', false)
    .order('likes', { ascending: ORDER_ASC })
    .limit(LIMIT);
  if (error) throw new Error(error.message);

  console.log(`${rows.length} villes sélectionnées (tri ${ORDER_ASC ? 'croissant' : 'décroissant'} par likes Unsplash).`);

  const results = [];
  for (const r of rows) {
    const enName = englishNameFromQuery(r.query_used);
    console.log('—', r.city_name, `(${r.country_code})`, '->', enName);

    const unsplashUri = await toDataUri(shrinkUnsplash(r.thumb_url, 320));
    const wiki = await fetchWikipediaLead(enName);
    let wikiUri = null;
    if (wiki.found) {
      await sleep(1200);
      wikiUri = await toDataUri(wiki.imgUrl, 'https://en.wikipedia.org/');
    }
    results.push({ ...r, enName, wiki, unsplashUri, wikiUri });
    await sleep(600);
  }

  const cards = results.map((r) => {
    const unsplashImg = r.unsplashUri ? `<img src="${r.unsplashUri}" alt="" loading="lazy" />` : `<div class="noimg">indisponible</div>`;
    const wikiImg = r.wikiUri
      ? `<img src="${r.wikiUri}" alt="" loading="lazy" />`
      : `<div class="noimg">${r.wiki.found ? (r.wiki.isSvgSource ? 'écarté (SVG)' : 'échec téléchargement') : 'aucune page'}</div>`;
    return `
  <article class="pair">
    <h3>${esc(r.city_name)} <span class="cc">${esc(r.country_code)}</span></h3>
    <div class="cols">
      <div class="col">
        <div class="thumb">${unsplashImg}</div>
        <p class="src">Unsplash · ${r.likes ?? '—'} likes</p>
      </div>
      <div class="col">
        <div class="thumb">${wikiImg}</div>
        <p class="src">Wikipedia${r.wiki.description ? ' · ' + esc(r.wiki.description) : ''}</p>
      </div>
    </div>
  </article>`;
  }).join('\n');

  const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<title>Comparatif Unsplash / Wikipedia</title>
<style>
:root {
  --paper: #f6f3ee; --ink: #2b2620; --ink-soft: #6b6255; --line: #ddd6ca;
  --card: #ffffff; --accent-a: #2b6f76; --accent-b: #b5732b;
}
@media (prefers-color-scheme: dark) {
  :root { --paper: #1b1815; --ink: #ece6db; --ink-soft: #a89e8e; --line: #3a352c; --card: #242019; --accent-a: #5fb0b8; --accent-b: #d9924a; }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--paper); color: var(--ink); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
header { position: sticky; top: 0; z-index: 5; padding: 1rem 1.25rem; background: var(--paper); border-bottom: 1px solid var(--line); }
header h1 { margin: 0 0 0.2rem; font-size: 1.05rem; }
header p { margin: 0; font-size: 0.78rem; color: var(--ink-soft); }
.legend { display: flex; gap: 1.2rem; margin-top: 0.5rem; font-size: 0.75rem; }
.legend span { display: inline-flex; align-items: center; gap: 0.35rem; }
.legend i { width: 10px; height: 10px; border-radius: 3px; display: inline-block; }
.legend .a i { background: var(--accent-a); }
.legend .b i { background: var(--accent-b); }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; padding: 1.25rem; max-width: 1500px; margin: 0 auto; }
.pair { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 0.75rem; }
.pair h3 { margin: 0 0 0.5rem; font-size: 0.92rem; }
.pair h3 .cc { font-family: ui-monospace, monospace; font-size: 0.7rem; color: var(--ink-soft); font-weight: 400; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
.thumb { aspect-ratio: 4/3; border-radius: 6px; overflow: hidden; background: var(--line); }
.thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.noimg { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 0.68rem; color: var(--ink-soft); text-align: center; padding: 0.4rem; }
.src { margin: 0.3rem 0 0; font-size: 0.68rem; color: var(--ink-soft); text-align: center; }
.col:first-child .src { color: var(--accent-a); }
.col:last-child .src { color: var(--accent-b); }
</style>
</head>
<body>
<header>
  <h1>Comparatif Unsplash / Wikipedia — ${rows.length} villes (tri ${ORDER_ASC ? 'croissant' : 'décroissant'} par likes)</h1>
  <p>Généré par scripts/build-image-comparison.mjs le ${new Date().toISOString().slice(0, 10)}.</p>
  <div class="legend"><span class="a"><i></i>Unsplash (déjà en cache)</span><span class="b"><i></i>Wikipedia (image d'en-tête)</span></div>
</header>
<div class="grid">
${cards}
</div>
</body>
</html>`;

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, html);
  console.log(`\nOK — page écrite dans ${OUT_PATH} (${(html.length / 1024 / 1024).toFixed(1)} Mo), ouvrez-la directement dans un navigateur.`);
}

main()
  .then(() => { process.exitCode = 0; })
  .catch((err) => {
    console.error('✗ Erreur fatale :', err.message);
    process.exitCode = 1;
  });
