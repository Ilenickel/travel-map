/**
 * Script de post-build : génère dist/pays/[slug]/index.html pour chaque pays.
 * Chaque page contient les metas SEO spécifiques + contenu riche indexable par Google,
 * puis boot le même bundle React que la page principale.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const PAYS_DIR = path.join(DIST, "pays");
const BASE_URL = "https://triply-travel.vercel.app";

// ─── Données pays (importées depuis les fichiers source) ──────────────────────
// On lit les fichiers source directement car on est en post-build Node.js
const SRC_DATA = path.join(ROOT, "src", "data");

function fr(value) {
  return typeof value === "object" && value !== null ? value.fr ?? value.en ?? value.es ?? "" : value ?? "";
}

async function readCountry(file) {
  try {
    const sourcePath = path.join(SRC_DATA, file);
    const module = await import(pathToFileURL(sourcePath).href);
    const raw = Object.values(module).find((value) => value?.code && value?.name);
    if (!raw) return null;
    return {
      raw,
      code: raw.code,
      name: fr(raw.name),
      description: fr(raw.description),
      capital: fr(raw.capital),
      emoji: raw.emoji ?? null,
      tags: raw.tags ?? [],
    };

  } catch {
    return null;
  }
}

// Correspondance code ISO → fichier source
const CODE_TO_FILE = {
  JPN: "japan.js", THA: "thailand.js", KOR: "south_korea.js", CHN: "china.js",
  TUR: "turkey.js", TWN: "taiwan.js", VNM: "vietnam.js", ITA: "italy.js",
  ESP: "spain.js", GRC: "greece.js", MAR: "morocco.js", PRT: "portugal.js",
  MEX: "mexico.js", ISL: "iceland.js", IDN: "indonesia.js", IND: "india.js",
  PER: "peru.js", EGY: "egypt.js", AUS: "australia.js", USA: "usa.js",
  ARG: "argentina.js", BRA: "brazil.js", COL: "colombia.js", CHL: "chile.js",
  BOL: "bolivia.js", ECU: "ecuador.js", URY: "uruguay.js", VEN: "venezuela.js",
  PRY: "paraguay.js", GUY: "guyana.js", SGP: "singapore.js", MYS: "malaysia.js",
  PHL: "philippines.js", KHM: "cambodia.js", LAO: "laos.js", MMR: "myanmar.js",
  LKA: "sri_lanka.js", NPL: "nepal.js", BGD: "bangladesh.js", BRN: "brunei.js",
  TLS: "timor_leste.js", PRK: "north_korea.js", NZL: "new_zealand.js",
  ARE: "uae.js", JOR: "jordan.js", SAU: "saudi_arabia.js", OMN: "oman.js",
  ISR: "israel.js", GEO: "georgia.js", UZB: "uzbekistan.js", AZE: "azerbaijan.js",
  ARM: "armenia.js", IRN: "iran.js", AFG: "afghanistan.js", PAK: "pakistan.js",
  KAZ: "kazakhstan.js", TKM: "turkmenistan.js", TJK: "tajikistan.js", KGZ: "kyrgyzstan.js",
  MNG: "mongolia.js", MDV: "maldives.js", BTN: "bhutan.js", CAN: "canada.js",
  GTM: "guatemala.js", BLZ: "belize.js", HND: "honduras.js", SLV: "el_salvador.js",
  NIC: "nicaragua.js", CRI: "costa_rica.js", PAN: "panama.js", CUB: "cuba.js",
  DOM: "dominican_republic.js", JAM: "jamaica.js", HTI: "haiti.js",
  TTO: "trinidad_tobago.js", SUR: "suriname.js", BHS: "bahamas.js",
  BRB: "barbados.js", GUF: "french_guiana.js", GHA: "ghana.js",
  CIV: "cote_divoire.js", BEN: "benin.js", TGO: "togo.js", GMB: "gambia.js",
  BFA: "burkina_faso.js", MLI: "mali.js", NGA: "nigeria.js", MRT: "mauritania.js",
  GNB: "guinea_bissau.js", GIN: "guinea.js", SLE: "sierra_leone.js",
  LBR: "liberia.js", LBY: "libya.js", DZA: "algeria.js", COD: "drc.js",
  COG: "republic_of_congo.js", CAF: "central_african_republic.js",
  GNQ: "equatorial_guinea.js", BDI: "burundi.js", SSD: "south_sudan.js",
  CMR: "cameroon.js", GAB: "gabon.js", STP: "sao_tome.js", SYC: "seychelles.js",
  REU: "reunion.js", COM: "comoros.js", MYT: "mayotte.js", AGO: "angola.js",
  TCD: "chad.js", SDN: "sudan.js", SOM: "somalia.js", SWZ: "eswatini.js",
  LSO: "lesotho.js", NER: "niger.js", ESH: "western_sahara.js", YEM: "yemen.js",
  IRQ: "iraq.js", SYR: "syria.js", KWT: "kuwait.js", QAT: "qatar.js",
  BHR: "bahrain.js", LBN: "lebanon.js", PSE: "palestine.js",
  ZAF: "south_africa.js", KEN: "kenya.js", TZA: "tanzania.js", TUN: "tunisia.js",
  SEN: "senegal.js", MDG: "madagascar.js", RWA: "rwanda.js", NAM: "namibia.js",
  BWA: "botswana.js", ZWE: "zimbabwe.js", UGA: "uganda.js", MUS: "mauritius.js",
  CPV: "cape_verde.js", ETH: "ethiopia.js", PNG: "papua_new_guinea.js",
  FJI: "fiji.js", VUT: "vanuatu.js", WSM: "samoa.js", MOZ: "mozambique.js",
  MWI: "malawi.js", ZMB: "zambia.js", DJI: "djibouti.js", ERI: "eritrea.js",
  FRA: "france.js", DEU: "germany.js", GBR: "united_kingdom.js",
  AUT: "austria.js", CHE: "switzerland.js", NLD: "netherlands.js",
  BEL: "belgium.js", IRL: "ireland.js", LUX: "luxembourg.js", MLT: "malta.js",
  CYP: "cyprus.js", AND: "andorra.js", LIE: "liechtenstein.js", NOR: "norway.js",
  SWE: "sweden.js", FIN: "finland.js", DNK: "denmark.js", POL: "poland.js",
  CZE: "czech_republic.js", HUN: "hungary.js", ROU: "romania.js",
  BGR: "bulgaria.js", SVK: "slovakia.js", EST: "estonia.js", LVA: "latvia.js",
  LTU: "lithuania.js", UKR: "ukraine.js", MDA: "moldova.js", BLR: "belarus.js",
  XKX: "kosovo.js", RUS: "russia.js", SMR: "san_marino.js", HRV: "croatia.js",
  SVN: "slovenia.js", MNE: "montenegro.js", SRB: "serbia.js", ALB: "albania.js",
  BIH: "bosnia_herzegovina.js", MKD: "north_macedonia.js",
};

// ─── Utilitaires ──────────────────────────────────────────────────────────────

/** Convertit un nom de pays en slug URL */
function toSlug(name) {
  return name
    .normalize("NFD").replace(/\p{Mn}/gu, "")
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[\s\-\/]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Normalise une chaîne pour comparaison insensible aux accents */
function norm(str) {
  return str.normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase();
}

/** Préposition grammaticale correcte en français */
function prep(name) {
  const n = norm(name);

  // Pluriels (aux)
  const plurals = ["etats-unis", "pays-bas", "philippines", "maldives",
    "seychelles", "bahamas", "comores", "iles vierges", "emirats arabes",
    "trinite", "samoa", "fidji", "vanuatu", "kiribati", "tuvalu", "tonga",
    "salomon", "marshall", "antilles", "caicos", "turques-et-caiques"];
  if (plurals.some(p => n.includes(p))) return "aux";

  // Pays commençant par une voyelle (en)
  if (/^[aeiouéèêëàâîïôùûü]/.test(n)) return "en";

  // Pays féminins classiques (en) — terminaison en -e hors exceptions
  const masculine_exceptions = [
    "mexique","mozambique","cambodge","zimbabwe","zimbabwe",
    "belize","suriname","chile","score","panama","cube","chile",
    "kosovo","monténégro",
  ];
  // On considère féminin si le nom normalisé finit par "e" et n'est pas une exception
  if (n.endsWith("e") && !masculine_exceptions.some(e => n === e)) return "en";

  // Explicitement masculins fréquents
  return "au";
}

/** Génère un titre SEO avec la bonne préposition */
function seoTitle(name) {
  const p = prep(name);
  return `Partir ${p} ${name} — météo, quand partir, que faire | Triply`;
}

/** Génère une description SEO, tronquée à 155 caractères (limite d'affichage Google) */
function seoDescription(name, capital, description) {
  const p = prep(name);
  const suffix = " Météo, budget, meilleures périodes et destinations sur Triply.";
  const base = `Tout savoir pour partir ${p} ${name}`;
  const cap = capital ? ` (capitale : ${capital})` : "";
  const head = `${base}${cap}`;
  const maxLength = 155;
  const wrapperLength = " — ".length + "...".length; // caractères ajoutés autour de l'extrait
  const budget = maxLength - head.length - suffix.length - wrapperLength;
  const desc = description && budget > 10 ? ` — ${description.slice(0, budget)}...` : "";
  // Ne jamais retomber sur un .slice() global : il couperait la suite fixe
  // ("... sur Triply.") en plein mot si head+desc+suffix dépassait malgré
  // tout la limite (nom de pays très long, etc.) — on préfère alors garder le
  // suffixe intact et sacrifier l'extrait de description en premier.
  return description && budget <= 10 ? `${head}${suffix}` : `${head}${desc}${suffix}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Contenu de secours qui reflète les données réellement affichées dans la fiche. */
function seoContent(country, relatedCountries) {
  const { raw, name, capital, description, tags } = country;
  const p = prep(name);
  const periods = (raw.bestPeriods ?? []).map((period) =>
    `<li><strong>${escapeHtml(fr(period.months))} — ${escapeHtml(fr(period.label))}</strong> : ${escapeHtml(fr(period.description))}</li>`
  ).join("");
  const weather = (raw.weatherCities ?? []).map((city) => {
    const months = city.data ?? [];
    const averageTemp = months.length ? Math.round(months.reduce((sum, month) => sum + month.temp, 0) / months.length) : null;
    const averageRain = months.length ? Math.round(months.reduce((sum, month) => sum + month.rain, 0) / months.length) : null;
    return `<li><strong>${escapeHtml(city.name)}</strong>${averageTemp !== null ? ` : ${averageTemp} °C en moyenne, ${averageRain} mm de pluie mensuelle en moyenne.` : "."}</li>`;
  }).join("");
  const destinations = (raw.destinations ?? []).map((destination) => {
    const mustSee = (destination.mustSee ?? []).map((place) => escapeHtml(fr(place.name))).filter(Boolean);
    return `<article><h3>${escapeHtml(fr(destination.name))}</h3><p>${escapeHtml(fr(destination.description))}</p>${mustSee.length ? `<p><strong>À faire :</strong> ${mustSee.join(", ")}.</p>` : ""}</article>`;
  }).join("");
  const budgets = (raw.costOfLiving?.budgetSummary ?? []).map((budget) =>
    `<li><strong>${escapeHtml(fr(budget.type))}</strong> : ${escapeHtml(budget.daily)} — ${escapeHtml(fr(budget.desc))}</li>`
  ).join("");
  const practicalities = (raw.practicalities ?? []).map((item) =>
    `<li><strong>${escapeHtml(fr(item.label))}</strong> : ${escapeHtml(fr(item.value))}</li>`
  ).join("");
  const comparisons = relatedCountries.map((country) =>
    `<li><a href="/pays/${country.slug}">Voyager ${prep(country.name)} ${escapeHtml(country.name)}</a></li>`
  ).join("");
  const tagStr = tags.length > 0 ? ` Idéal pour : ${tags.map(escapeHtml).join(", ")}.` : "";
  return `
    <div class="sr-only">
      <h1>Partir ${p} ${name} — tout ce qu'il faut savoir</h1>
      <h2>Quand partir ${p} ${name} ?</h2>
      <ul>${periods}</ul>
      <h2>Météo ${p} ${name}</h2>
      <p>Consultez la météo par ville${capital ? `, notamment à ${escapeHtml(capital)}` : ""}.</p><ul>${weather}</ul>
      <h2>Que faire ${p} ${name} ?</h2>
      <p>${escapeHtml(description ?? `Partez à la découverte ${p} ${name} et explorez ses sites incontournables, sa culture, sa gastronomie et ses paysages uniques.`)}${tagStr}</p>${destinations}
      <h2>Budget voyage ${p} ${name}</h2>
      <p>${escapeHtml(fr(raw.costOfLiving?.intro))}</p><ul>${budgets}</ul>
      <h2>Conseils pratiques pour voyager ${p} ${name}</h2>
      <ul>${practicalities}</ul>
      ${comparisons ? `<h2>Comparer ${escapeHtml(name)} avec d'autres destinations</h2><ul>${comparisons}</ul>` : ""}
    </div>`;
}

/** Génère le JSON-LD spécifique au pays */
function jsonLd(name, capital, description, slug) {
  const url = `${BASE_URL}/pays/${slug}`;
  const destination = {
    "@type": "TouristDestination",
    "name": name,
    "url": url,
    "description": description ?? `Destination de voyage : ${name}.`,
    "touristType": ["Culturel", "Aventure", "Plage", "Nature"],
    ...(capital ? { "containsPlace": { "@type": "City", "name": capital } } : {}),
    "isAccessibleForFree": true,
    "potentialAction": {
      "@type": "ExploreAction",
      "name": `Explorer ${name} sur Triply`,
      "target": url,
    },
  };

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      destination,
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Triply", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": name, "item": url },
        ],
      },
    ],
  });
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function writeSitemap(entries) {
  const urls = [
    { loc: `${BASE_URL}/`, changefreq: "weekly", priority: "1.0" },
    ...entries,
  ];
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(({ loc, lastmod, changefreq, priority }) => [
      "  <url>",
      `    <loc>${escapeXml(loc)}</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].filter(Boolean).join("\n")),
    "</urlset>",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml, "utf-8");
}

function writePlanningPage(baseHtml) {
  const pageUrl = `${BASE_URL}/planifier`;
  const title = "Planifier un voyage gratuitement | Triply";
  const description = "Créez votre itinéraire de voyage, ajoutez vos pays, villes et activités, puis organisez votre séjour jour par jour avec Triply.";
  const fallback = `
    <main>
      <h1>Planifier un voyage simplement</h1>
      <p>Triply permet de préparer un itinéraire personnalisé : choisissez vos pays, ajoutez vos villes et activités, puis organisez chaque journée de votre séjour.</p>
      <h2>Préparez votre itinéraire en trois étapes</h2>
      <ol>
        <li>Ajoutez les pays et les villes que vous souhaitez visiter.</li>
        <li>Centralisez les activités, hébergements et déplacements.</li>
        <li>Répartissez-les dans votre planning jour par jour et partagez votre voyage si vous le souhaitez.</li>
      </ol>
      <p><a href="/">Explorer les destinations et leurs informations météo</a></p>
    </main>`;
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "url": pageUrl,
    "description": description,
    "isPartOf": { "@type": "WebSite", "name": "Triply", "url": BASE_URL },
  });
  const html = baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${description}"/>`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${pageUrl}"/>`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}"/>`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}"/>`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${pageUrl}"/>`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}"/>`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}"/>`)
    .replace(/<meta name="twitter:url"[^>]*>/, `<meta name="twitter:url" content="${pageUrl}"/>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript>${fallback}</noscript>`)
    .replace('</head>', `    <script type="application/ld+json">${schema}</script>\n  </head>`);
  const dir = path.join(DIST, "planifier");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf-8");
  return { loc: pageUrl, changefreq: "monthly", priority: "0.7" };
}

// ─── Génération ───────────────────────────────────────────────────────────────

function relatedCountries(country, countries) {
  const criteria = country.raw.criteria ?? {};
  return countries
    .filter((candidate) => candidate.country.code !== country.code)
    .map((candidate) => ({
      ...candidate.country,
      score: Object.keys(criteria).reduce(
        (sum, key) => sum + Math.min(criteria[key] ?? 0, candidate.country.raw.criteria?.[key] ?? 0), 0
      ),
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "fr"))
    .slice(0, 4);
}

async function generate() {
  const baseHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

  if (!fs.existsSync(PAYS_DIR)) fs.mkdirSync(PAYS_DIR, { recursive: true });

  let generated = 0;
  let skipped = 0;
  const sitemapEntries = [];
  const countries = [];

  for (const [code, file] of Object.entries(CODE_TO_FILE)) {
    const country = await readCountry(file);
    if (!country || !country.name) { skipped++; continue; }
    country.slug = toSlug(country.name);
    countries.push({ code, file, country });
  }

  for (const { code, file, country } of countries) {
    const slug = country.slug;
    const dir = path.join(PAYS_DIR, slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const title = seoTitle(country.name);
    const descMeta = seoDescription(country.name, country.capital, country.description);
    const ldJson = jsonLd(country.name, country.capital, country.description, slug);
    const pageUrl = `${BASE_URL}/pays/${slug}`;

    // Injecter dans le HTML de base (remplace les balises existantes)
    let html = baseHtml
      // Title
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      // Meta description
      .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${descMeta.replace(/"/g, "&quot;")}"/>`)
      // Canonical
      .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${pageUrl}"/>`)
      // OG title
      .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}"/>`)
      // OG description
      .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${descMeta.replace(/"/g, "&quot;")}"/>`)
      // OG url
      .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${pageUrl}"/>`)
      // Twitter title
      .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}"/>`)
      // Twitter description
      .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${descMeta.replace(/"/g, "&quot;")}"/>`)
      // Twitter url
      .replace(/<meta name="twitter:url"[^>]*>/, `<meta name="twitter:url" content="${pageUrl}"/>`);

    // Remplacer le JSON-LD WebApplication par TouristDestination + garder les autres schemas
    html = html.replace(
      /<script type="application\/ld\+json">\s*\{\s*"@context"[\s\S]*?"@type"\s*:\s*"WebApplication"[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n    ${ldJson}\n    </script>`
    );

    // Injecter le window.__INITIAL_COUNTRY__ et le contenu SEO avant </body>
    const seoBlock = seoContent(country, relatedCountries(country, countries));
    const noScriptBlock = seoBlock
      .replace('<div class="sr-only">', '<main>')
      .replace('</div>', '</main>');
    html = html.replace(
      "<!-- Titres et contenu indexés par Google, invisibles pour l'utilisateur -->",
      `<!-- SEO : ${country.name} -->`
    );
    // Remplacer le placeholder + le bloc sr-only générique par le contenu spécifique au pays
    html = html.replace(
      /<!-- COUNTRY_SEO_PLACEHOLDER -->\s*<div class="sr-only">[\s\S]*?<\/div>/,
      `<!-- SEO : ${country.name} -->\n    ${seoBlock}`
    );
    // La version sans JavaScript expose les mêmes informations utiles que la
    // fiche interactive : elle reste donc accessible aux visiteurs et aux
    // robots qui ne rendent pas l'application.
    html = html.replace(
      /<noscript>[\s\S]*?<\/noscript>/,
      `<noscript>${noScriptBlock}</noscript>`
    );
    // Injecter __INITIAL_COUNTRY__ avant le script principal
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <script>window.__INITIAL_COUNTRY__="${code}";</script>`
    );

    fs.writeFileSync(path.join(dir, "index.html"), html, "utf-8");
    sitemapEntries.push({
      loc: pageUrl,
      lastmod: fs.statSync(path.join(SRC_DATA, file)).mtime.toISOString().slice(0, 10),
      changefreq: "monthly",
      priority: "0.8",
    });
    generated++;
  }

  sitemapEntries.push(writePlanningPage(baseHtml));
  writeSitemap(sitemapEntries);

  console.log(`✅ ${generated} pages pays générées dans dist/pays/`);
  if (skipped > 0) console.log(`⚠️  ${skipped} pays ignorés (données manquantes)`);
}

generate().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
