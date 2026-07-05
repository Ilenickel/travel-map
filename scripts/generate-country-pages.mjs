/**
 * Script de post-build : génère dist/pays/[slug]/index.html pour chaque pays.
 * Chaque page contient les metas SEO spécifiques + contenu riche indexable par Google,
 * puis boot le même bundle React que la page principale.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const PAYS_DIR = path.join(DIST, "pays");
const BASE_URL = "https://travel-map-blush.vercel.app";

// ─── Données pays (importées depuis les fichiers source) ──────────────────────
// On lit les fichiers source directement car on est en post-build Node.js
const SRC_DATA = path.join(ROOT, "src", "data");

function readCountry(file) {
  try {
    const content = fs.readFileSync(path.join(SRC_DATA, file), "utf-8");
    // Champ top-level uniquement (name/capital en tête de fichier), en tolérant
    // le format simple `name: "..."` ou bilingue `name: { fr: "...", en: "..." }`.
    const nameMatch = content.match(/^\s*name\s*:\s*(?:\{[^}]*?fr\s*:\s*["'`]([^"'`]+)["'`]|["'`]([^"'`]+)["'`])/m);
    const descMatch = content.match(/^\s*description\s*:\s*(?:\{\s*fr\s*:\s*["'`\n\s]+([\s\S]+?)["'`],\s*\n|["'`\n\s]+([\s\S]+?)["'`],?\s*\n)/m);
    const capitalMatch = content.match(/^\s*capital\s*:\s*(?:\{[^}]*?fr\s*:\s*["'`]([^"'`]+)["'`]|["'`]([^"'`]+)["'`])/m);
    const emojiMatch = content.match(/emoji\s*:\s*["'`]([^"'`]+)["'`]/);
    const codeMatch = content.match(/code\s*:\s*["'`]([^"'`]+)["'`]/);
    const tagsMatch = content.match(/tags\s*:\s*\[([^\]]+)\]/s);
    const tags = tagsMatch
      ? tagsMatch[1].match(/["'`]([^"'`]+)["'`]/g)?.map(t => t.replace(/["'`]/g, "")) ?? []
      : [];
    return {
      code: codeMatch?.[1] ?? null,
      name: (nameMatch?.[1] ?? nameMatch?.[2]) ?? null,
      description: (descMatch?.[1] ?? descMatch?.[2])?.replace(/\s+/g, " ").trim() ?? null,
      capital: (capitalMatch?.[1] ?? capitalMatch?.[2]) ?? null,
      emoji: emojiMatch?.[1] ?? null,
      tags,
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
  return `Partir ${p} ${name} — météo, quand partir, que faire | Travel Map`;
}

/** Génère une description SEO */
function seoDescription(name, capital, description) {
  const p = prep(name);
  const base = `Tout savoir pour partir ${p} ${name}`;
  const cap = capital ? ` (capitale : ${capital})` : "";
  const desc = description ? ` — ${description.slice(0, 100)}...` : "";
  return `${base}${cap}${desc} Météo, budget, meilleures périodes et destinations sur Travel Map.`;
}

/** Génère le bloc sr-only SEO riche pour un pays */
function seoContent(name, capital, description, tags) {
  const p = prep(name);
  const tagStr = tags.length > 0 ? ` Idéal pour : ${tags.join(", ")}.` : "";
  return `
    <div class="sr-only">
      <h1>Partir ${p} ${name} — tout ce qu'il faut savoir</h1>
      <h2>Quand partir ${p} ${name} ?</h2>
      <p>Découvrez la meilleure période pour voyager ${p} ${name}. Travel Map vous indique les saisons idéales, la météo mensuelle et les périodes à éviter pour votre voyage ${p} ${name}.</p>
      <h2>Météo ${p} ${name}</h2>
      <p>Consultez la météo en temps réel ${p} ${name}${capital ? ` et à ${capital}` : ""}. Températures, précipitations et conditions climatiques pour planifier votre voyage au meilleur moment.</p>
      <h2>Que faire ${p} ${name} ?</h2>
      <p>${description ?? `Partez à la découverte ${p} ${name} et explorez ses sites incontournables, sa culture, sa gastronomie et ses paysages uniques.`}${tagStr}</p>
      <h2>Budget voyage ${p} ${name}</h2>
      <p>Combien coûte un voyage ${p} ${name} ? Travel Map vous donne une estimation du budget selon la durée de votre séjour : hébergement, transport, nourriture et activités.</p>
      <h2>Conseils pratiques pour voyager ${p} ${name}</h2>
      <p>Visa, langue, monnaie, sécurité, vaccins recommandés : retrouvez toutes les infos pratiques pour préparer votre voyage ${p} ${name} en toute sérénité.</p>
    </div>`;
}

/** Génère le JSON-LD spécifique au pays */
function jsonLd(name, capital, description, slug) {
  const p = prep(name);
  const url = `${BASE_URL}/pays/${slug}`;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": name,
    "url": url,
    "description": description ?? `Destination de voyage : ${name}.`,
    "touristType": ["Culturel", "Aventure", "Plage", "Nature"],
    "geo": capital ? { "@type": "GeoCoordinates", "name": capital } : undefined,
    "isAccessibleForFree": true,
    "potentialAction": {
      "@type": "ExploreAction",
      "name": `Explorer ${name} sur Travel Map`,
      "target": url,
    },
  });
}

// ─── Génération ───────────────────────────────────────────────────────────────

function generate() {
  const baseHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

  if (!fs.existsSync(PAYS_DIR)) fs.mkdirSync(PAYS_DIR, { recursive: true });

  let generated = 0;
  let skipped = 0;

  for (const [code, file] of Object.entries(CODE_TO_FILE)) {
    const country = readCountry(file);
    if (!country || !country.name) { skipped++; continue; }

    const slug = toSlug(country.name);
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
    const seoBlock = seoContent(country.name, country.capital, country.description, country.tags);
    html = html.replace(
      "<!-- Titres et contenu indexés par Google, invisibles pour l'utilisateur -->",
      `<!-- SEO : ${country.name} -->`
    );
    // Remplacer le placeholder + le bloc sr-only générique par le contenu spécifique au pays
    html = html.replace(
      /<!-- COUNTRY_SEO_PLACEHOLDER -->\s*<div class="sr-only">[\s\S]*?<\/div>/,
      `<!-- SEO : ${country.name} -->\n    ${seoBlock}`
    );
    // Injecter __INITIAL_COUNTRY__ avant le script principal
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <script>window.__INITIAL_COUNTRY__="${code}";</script>`
    );

    fs.writeFileSync(path.join(dir, "index.html"), html, "utf-8");
    generated++;
  }

  console.log(`✅ ${generated} pages pays générées dans dist/pays/`);
  if (skipped > 0) console.log(`⚠️  ${skipped} pays ignorés (données manquantes)`);
}

generate();
