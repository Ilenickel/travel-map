// Outil de revue manuelle (PAS branché en prod) : génère une page HTML
// autonome listant toutes les photos de pays déjà en cache (table
// country_images), avec pour chacune une checkbox "changer la photo" et,
// si cochée, un champ pour coller un lien Unsplash de remplacement.
//
// La page ne peut rien écrire en base elle-même (fichier statique, pas de
// backend) : un bouton "Copier le JSON" copie dans le presse-papiers la
// liste des pays cochés + lien saisi, à recoller dans la conversation pour
// que les mises à jour soient traitées (recherche des infos Unsplash
// correspondantes + upsert dans country_images).
//
// Usage :
//   node scripts/build-country-image-review.mjs
//   node scripts/build-country-image-review.mjs --out=chemin/vers/page.html
//
// Prérequis : .env avec VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY.

import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { createClient } from '@supabase/supabase-js';
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
const OUT_PATH = args.out ? args.out : `${ROOT}/scripts/output/country-image-review.html`;

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Même approche que fetch-country-images.mjs : lire src/data/*.js par
// parsing texte (imports sans extension incompatibles avec Node hors Vite).
function buildCountryList() {
  const list = [];
  const dataDir = join(ROOT, 'src', 'data');
  for (const file of readdirSync(dataDir)) {
    if (!file.endsWith('.js') || file === 'index.js') continue;
    const src = readFileSync(join(dataDir, file), 'utf8');
    const codeMatch = src.match(/code:\s*["']([A-Z]{3})["']/);
    const nameMatch = src.match(/name:\s*\{\s*fr:\s*"([^"]*)",\s*en:\s*"([^"]*)"/);
    if (codeMatch && nameMatch) {
      list.push({ country_code: codeMatch[1], name_fr: nameMatch[1], name_en: nameMatch[2] });
    }
  }
  return list;
}

async function fetchAllCountryImages() {
  let all = [];
  let from = 0;
  const page = 1000;
  while (true) {
    const { data, error } = await sb
      .from('country_images')
      .select('country_code, image_url, thumb_url, author_name, likes')
      .range(from, from + page - 1);
    if (error) throw new Error(error.message);
    all = all.concat(data);
    if (data.length < page) break;
    from += page;
  }
  return new Map(all.map((r) => [r.country_code, r]));
}

async function main() {
  const [countries, imagesByCode] = await Promise.all([
    Promise.resolve(buildCountryList()),
    fetchAllCountryImages(),
  ]);

  countries.sort((a, b) => a.name_fr.localeCompare(b.name_fr, 'fr'));

  console.log(`${countries.length} pays connus, ${imagesByCode.size} avec une entrée en cache.`);

  const cards = countries.map((c) => {
    const img = imagesByCode.get(c.country_code);
    const hasImage = img && img.thumb_url;
    const thumb = hasImage
      ? `<img src="${esc(img.thumb_url)}" alt="" loading="lazy" />`
      : `<div class="noimg">${img ? 'aucune photo trouvée' : 'pas encore en cache'}</div>`;
    const meta = img
      ? `${img.author_name ? esc(img.author_name) : '—'}${img.likes != null ? ` · ${img.likes} likes` : ''}`
      : '—';
    const id = c.country_code;
    return `
  <article class="card" data-code="${esc(id)}" data-name="${esc(c.name_fr)}">
    <div class="thumb">${thumb}</div>
    <h3>${esc(c.name_fr)} <span class="cc">${esc(c.country_code)}</span></h3>
    <p class="meta">${meta}</p>
    <label class="chk">
      <input type="checkbox" class="toggle" data-code="${esc(id)}" />
      Changer la photo
    </label>
    <div class="urlbox" hidden>
      <input type="url" class="urlinput" placeholder="Lien Unsplash (page photo ou URL image)" data-code="${esc(id)}" />
    </div>
  </article>`;
  }).join('\n');

  const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<title>Revue des photos de pays</title>
<style>
:root {
  --paper: #f6f3ee; --ink: #2b2620; --ink-soft: #6b6255; --line: #ddd6ca;
  --card: #ffffff; --accent: #2b6f76; --accent-soft: #e4eeee;
}
@media (prefers-color-scheme: dark) {
  :root { --paper: #1b1815; --ink: #ece6db; --ink-soft: #a89e8e; --line: #3a352c; --card: #242019; --accent: #5fb0b8; --accent-soft: #203334; }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--paper); color: var(--ink); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
header { position: sticky; top: 0; z-index: 5; padding: 1rem 1.25rem; background: var(--paper); border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
header h1 { margin: 0 0 0.2rem; font-size: 1.05rem; }
header p { margin: 0; font-size: 0.78rem; color: var(--ink-soft); }
#copyBtn { background: var(--accent); color: #fff; border: none; border-radius: 8px; padding: 0.6rem 1rem; font-size: 0.85rem; cursor: pointer; }
#copyBtn:hover { opacity: 0.9; }
#resetBtn.ghost { background: transparent; color: var(--ink-soft); border: 1px solid var(--line); border-radius: 8px; padding: 0.6rem 0.9rem; font-size: 0.8rem; cursor: pointer; margin-left: 0.5rem; }
#resetBtn.ghost:hover { color: var(--ink); border-color: var(--ink-soft); }
#copyStatus { font-size: 0.78rem; color: var(--accent); margin-left: 0.6rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 1rem; padding: 1.25rem; max-width: 1600px; margin: 0 auto; }
.card { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 0.7rem; display: flex; flex-direction: column; }
.card.marked { outline: 2px solid var(--accent); background: var(--accent-soft); }
.thumb { aspect-ratio: 4/3; border-radius: 6px; overflow: hidden; background: var(--line); margin-bottom: 0.5rem; }
.thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.noimg { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--ink-soft); text-align: center; padding: 0.4rem; }
.card h3 { margin: 0 0 0.2rem; font-size: 0.88rem; }
.card h3 .cc { font-family: ui-monospace, monospace; font-size: 0.65rem; color: var(--ink-soft); font-weight: 400; }
.meta { margin: 0 0 0.5rem; font-size: 0.68rem; color: var(--ink-soft); }
.chk { font-size: 0.78rem; display: flex; align-items: center; gap: 0.4rem; cursor: pointer; }
.urlbox { margin-top: 0.5rem; }
.urlinput { width: 100%; font-size: 0.78rem; padding: 0.4rem 0.5rem; border-radius: 6px; border: 1px solid var(--line); background: var(--paper); color: var(--ink); }
footer { padding: 1.5rem; text-align: center; font-size: 0.75rem; color: var(--ink-soft); }
</style>
</head>
<body>
<header>
  <div>
    <h1>Revue des photos de pays — ${countries.length} pays</h1>
    <p>Générée par scripts/build-country-image-review.mjs le ${new Date().toISOString().slice(0, 10)}. Cochez "Changer la photo" et collez un lien Unsplash, puis copiez le JSON et recollez-le dans la conversation.</p>
  </div>
  <div>
    <button id="copyBtn">Copier le JSON des changements</button>
    <button id="resetBtn" class="ghost">Réinitialiser la sauvegarde</button>
    <span id="copyStatus"></span>
  </div>
</header>
<div class="grid">
${cards}
</div>
<footer>La sélection (cases cochées + liens saisis) est sauvegardée automatiquement dans ce navigateur (localStorage) — vous pouvez fermer l'onglet et reprendre plus tard. Rien n'est envoyé nulle part automatiquement.</footer>
<script>
// Sauvegarde locale (localStorage) — voir build-city-image-review.mjs pour
// l'explication complète, même mécanisme ici.
const STORAGE_KEY = 'triply-country-image-review-v1';

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* quota plein ou navigateur privé : tant pis, pas bloquant */ }
}
function cardKey(card) { return card.dataset.code; }

let state = loadState();
let restoredCount = 0;
document.querySelectorAll('.card').forEach((card) => {
  const saved = state[cardKey(card)];
  if (!saved) return;
  const cb = card.querySelector('.toggle');
  const box = card.querySelector('.urlbox');
  const input = card.querySelector('.urlinput');
  cb.checked = !!saved.checked;
  input.value = saved.url || '';
  box.hidden = !cb.checked;
  card.classList.toggle('marked', cb.checked);
  if (saved.checked) restoredCount++;
});
if (restoredCount > 0) {
  document.getElementById('copyStatus').textContent = restoredCount + ' pays restaurés depuis votre dernière session sur ce navigateur.';
}

function persistCard(card) {
  const cb = card.querySelector('.toggle');
  const input = card.querySelector('.urlinput');
  const key = cardKey(card);
  if (cb.checked) {
    state[key] = { checked: true, url: input.value };
  } else {
    delete state[key];
  }
  saveState(state);
}

document.querySelectorAll('.toggle').forEach((cb) => {
  cb.addEventListener('change', () => {
    const card = cb.closest('.card');
    const box = card.querySelector('.urlbox');
    box.hidden = !cb.checked;
    card.classList.toggle('marked', cb.checked);
    if (!cb.checked) card.querySelector('.urlinput').value = '';
    persistCard(card);
  });
});
document.querySelectorAll('.urlinput').forEach((input) => {
  input.addEventListener('input', () => persistCard(input.closest('.card')));
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (!confirm('Effacer toute la sélection sauvegardée dans ce navigateur pour cette page ?')) return;
  state = {};
  saveState(state);
  document.querySelectorAll('.card').forEach((card) => {
    const cb = card.querySelector('.toggle');
    cb.checked = false;
    card.querySelector('.urlbox').hidden = true;
    card.querySelector('.urlinput').value = '';
    card.classList.remove('marked');
  });
  document.getElementById('copyStatus').textContent = 'Sauvegarde locale effacée.';
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const changes = [];
  document.querySelectorAll('.toggle:checked').forEach((cb) => {
    const code = cb.dataset.code;
    const card = cb.closest('.card');
    const url = card.querySelector('.urlinput').value.trim();
    changes.push({ country_code: code, name_fr: card.dataset.name, new_unsplash_url: url });
  });
  const json = JSON.stringify(changes, null, 2);
  navigator.clipboard.writeText(json).then(() => {
    document.getElementById('copyStatus').textContent = changes.length + ' pays copiés dans le presse-papiers.';
  }).catch(() => {
    document.getElementById('copyStatus').textContent = 'Échec de la copie — voir la console.';
    console.log(json);
  });
});
</script>
</body>
</html>`;

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, html);
  console.log(`\nOK — page écrite dans ${OUT_PATH}, ouvrez-la directement dans un navigateur.`);
}

main()
  .then(() => { process.exitCode = 0; })
  .catch((err) => {
    console.error('✗ Erreur fatale :', err.message);
    process.exitCode = 1;
  });
