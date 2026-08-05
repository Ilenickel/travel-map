// Traduction du NOM d'un lieu communautaire (destination_places /
// static_destination_places) via Wikipédia/Wikidata plutôt que Google
// Translate — voir api/get-translated-content.js, resolveTranslator.
//
// Pourquoi : un nom de lieu est un nom propre (ex. "High Line", "Ground
// Zero" à New York), pas du texte descriptif. Google Translate le traduisait
// littéralement ("Ligne haute", "Point zéro") dès que la page était
// consultée en français — faux, ce ne sont pas les vrais noms. Désactiver
// toute traduction réglait ce cas mais en créait un autre : un lieu saisi
// en japonais par son auteur reste alors affiché en japonais pour tout le
// monde, y compris un visiteur qui ne lit pas cette langue.
//
// Un nom propre n'a de "traduction" que si Wikipédia lui-même en a une :
// certains lieux ont un titre différent selon la langue (ex. "Tour Eiffel"
// / "Eiffel Tower"), d'autres restent identiques partout ("High Line",
// "Ground Zero" ont le même titre sur en.wikipedia.org et fr.wikipedia.org).
// La seule source fiable pour distinguer les deux cas est donc Wikipédia/
// Wikidata lui-même — jamais une traduction mot à mot d'un texte qui n'en a
// pas besoin.
//
// Méthode (jamais de machine translation en repli) :
// 1. Cherche `name` sur quelques wikis CANDIDATS TIERS (anglais/français/
//    espagnol, qui couvrent la quasi-totalité des lieux touristiques déjà
//    documentés) — JAMAIS la langue cible en premier : un nom peut exister
//    par pure coïncidence sur le wiki de la langue cible sans aucun rapport
//    avec le vrai lieu (ex. "Grenade", tapé pour la ville espagnole Granada,
//    est aussi un mot anglais réel — celui de l'arme). Voir le detail dans
//    translatePlaceNameViaWikipedia ci-dessous.
// 2. Une fois la page source trouvée sur un wiki tiers, résout son entité
//    Wikidata (QID) — c'est CE lien interlangue, jamais un texte accepté tel
//    quel, qui garantit qu'il s'agit bien du même lieu.
// 3. Lit le TITRE DE L'ARTICLE correspondant dans la langue cible (sitelink
//    Wikidata = la même page Wikipédia, jamais une traduction générée) — à
//    défaut, le libellé Wikidata dans cette langue s'il existe.
// 4. Si rien de tout cela n'aboutit, essaie en tout dernier recours un match
//    direct sur le wiki de la langue cible elle-même (sans vérification
//    Wikidata possible, risque résiduel assumé — mieux que rien).
// 5. Si rien n'aboutit du tout, renvoie null : l'appelant doit alors
//    conserver le nom d'origine plutôt que d'inventer une traduction.
//
// Fait exprès sans authentification ni clé d'API : ce sont des endpoints
// publics en lecture seule de la Wikimedia Foundation (mediawiki + wikidata
// action API), au même titre que ceux déjà utilisés par WikiImage/
// useWikipediaImages côté client. `USER_AGENT` ci-dessous reste néanmoins
// nécessaire : la politique d'accès de Wikimedia (meta.wikimedia.org/wiki/
// User-Agent_policy) limite/bloque les requêtes automatisées dépourvues d'un
// User-Agent identifiable, quelle que soit la légitimité de l'usage.

const FETCH_TIMEOUT_MS = 5000;
const CANDIDATE_LANGS_BASE = ['en', 'fr', 'es'];
// Budget de temps GLOBAL pour une traduction (tous candidats confondus) :
// chaque candidat fait jusqu'à 3 appels séquentiels (recherche + pageprops +
// wikidata), chacun pouvant retenter une fois à 5s de timeout (voir
// fetchJsonWithRetry) — sans garde-fou, un cas défavorable (Wikimedia lent
// ou instable) pourrait cumuler jusqu'à ~10 allers-retours séquentiels × 2
// tentatives × 5s = 100s pour UN SEUL lieu, ce qui dépasserait largement la
// limite d'exécution d'une fonction serverless Vercel (10s sur le plan
// Hobby) et ferait échouer TOUTE la requête de traduction en lot (les autres
// items du même appel, eux, indépendants et déjà résolus, seraient perdus
// avec elle) — signalé en TNR le 2026-07-24. Passé ce budget, on abandonne
// proprement (retour null, comme "rien trouvé") plutôt que de laisser courir
// la recherche indéfiniment.
const OVERALL_BUDGET_MS = 7000;
// Requis par la politique d'accès de Wikimedia (voir commentaire d'en-tête) :
// une requête automatisée sans User-Agent identifiable/contact est davantage
// exposée aux limitations de trafic, ce qui ferait échouer la recherche pour
// une raison purement technique — un échec alors indiscernable d'un "vraiment
// aucun résultat" (voir fetchJsonWithRetry, qui n'aide qu'aux hoquets ponctuels,
// pas à un blocage systématique).
const USER_AGENT = 'tripolar/1.0 (https://tripolar.vercel.app/)';

function normalize(s) {
  return (s || '').normalize('NFD').replace(/\p{Mn}/gu, '').toLowerCase().replace(/\s+/g, ' ').trim();
}

// Comparaison tolérante (égalité ou sous-chaîne) — un nom saisi peut être
// plus court ou plus long que le titre canonique de la page trouvée (ex.
// "Grand Central" pour "Grand Central Terminal"). Pas de tolérance
// Levenshtein : au-delà de la sous-chaîne, le risque de faux positif entre
// deux lieux réels différents dépasse le bénéfice.
function looksLikeMatch(name, title) {
  const a = normalize(name);
  const b = normalize(title);
  if (!a || !b) return false;
  return a === b || a.includes(b) || b.includes(a);
}

async function fetchJson(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Deux tentatives avant d'abandonner : un échec ponctuel (429 "trop de
// requêtes", timeout réseau, hoquet DNS...) ne doit pas être confondu avec
// "vraiment aucun résultat" — la moindre différence a un impact définitif
// puisque le résultat (trouvé ou non) est mis en cache PERMANENT côté
// appelant (getTranslatedPlaceName) : un `null` par malchance sur cet appel
// figerait à tort "ce lieu n'a pas de traduction" pour toujours, jamais
// réinterrogé ensuite pour ce lieu/cette langue. Court délai (300ms) entre
// les deux tentatives : suffisant pour laisser passer un pic de charge
// ponctuel côté Wikimedia, sans ralentir sensiblement le cas normal (1
// seule tentative nécessaire l'immense majorité du temps).
async function fetchJsonWithRetry(url) {
  const first = await fetchJson(url);
  if (first !== null) return first;
  await sleep(300);
  return fetchJson(url);
}


// Cherche `name` sur <lang>.wikipedia.org, renvoie le titre exact de la
// page trouvée si elle correspond raisonnablement au nom cherché, sinon
// null (rien trouvé, ou trouvé mais trop différent pour être fiable).
async function searchWikipedia(name, lang) {
  const url = `https://${lang}.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(name)}&limit=1&namespace=0&format=json`;
  const data = await fetchJsonWithRetry(url);
  const title = data?.[1]?.[0];
  if (!title || !looksLikeMatch(name, title)) return null;
  return title;
}

// QID Wikidata de la page `title` sur <lang>.wikipedia.org, ou null si la
// page n'est reliée à aucune entité Wikidata (rare, mais possible pour des
// pages très récentes ou très locales).
async function wikidataIdForPage(title, lang) {
  const url = `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageprops&ppprop=wikibase_item&format=json`;
  const data = await fetchJsonWithRetry(url);
  const pages = data?.query?.pages;
  if (!pages) return null;
  const page = Object.values(pages)[0];
  return page?.pageprops?.wikibase_item || null;
}

// Titre de l'article Wikipédia (sitelink = LA MÊME page) dans `targetLang`
// pour l'entité `qid` ; à défaut, son libellé Wikidata dans cette langue.
async function wikidataNameInLanguage(qid, targetLang) {
  const url = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${qid}&props=sitelinks%7Clabels&sitefilter=${targetLang}wiki&languages=${targetLang}&format=json`;
  const data = await fetchJsonWithRetry(url);
  const entity = data?.entities?.[qid];
  if (!entity) return null;
  const sitelinkTitle = entity.sitelinks?.[`${targetLang}wiki`]?.title;
  if (sitelinkTitle) return sitelinkTitle;
  const label = entity.labels?.[targetLang]?.value;
  return label || null;
}

/**
 * Renvoie le nom du lieu `name` dans la langue `targetLang` selon Wikipédia/
 * Wikidata, ou `null` si aucune correspondance fiable n'a été trouvée —
 * l'appelant doit alors conserver `name` tel quel plutôt que d'afficher une
 * traduction approximative.
 */
export async function translatePlaceNameViaWikipedia(name, targetLang) {
  if (!name || !name.trim()) return null;

  const deadline = Date.now() + OVERALL_BUDGET_MS;

  // La langue CIBLE est essayée EN DERNIER, jamais en premier : un nom peut
  // exister par pure coïncidence sur le wiki de la langue cible sans aucun
  // rapport avec le vrai lieu cherché (ex. "Grenade" tapé en français pour
  // la ville espagnole Granada — en anglais, "Grenade" est aussi un mot bien
  // réel, celui de l'arme). Chercher la langue cible en premier et accepter
  // tel quel un titre trouvé là-bas (comme un premier essai le faisait)
  // aurait renvoyé "Grenade" au lieu de "Granada" en anglais : un match
  // trouvé sur une langue tierce (français, espagnol...) est TOUJOURS
  // vérifié via son entité Wikidata (le lien interlangue est la seule
  // garantie qu'il s'agit bien du même lieu), jamais accepté tel quel. La
  // langue cible n'est tentée en dernier recours, SANS vérification
  // possible (rien à quoi la relier), que si aucune autre langue n'a permis
  // de retrouver le lieu — mieux que rien, mais seulement en dernier ressort.
  const crossLangCandidates = CANDIDATE_LANGS_BASE.filter((l) => l !== targetLang);

  for (const lang of crossLangCandidates) {
    if (Date.now() >= deadline) return null;
    const title = await searchWikipedia(name, lang);
    if (!title) continue;
    if (Date.now() >= deadline) return null;
    const qid = await wikidataIdForPage(title, lang);
    if (!qid) continue;
    if (Date.now() >= deadline) return null;
    const translated = await wikidataNameInLanguage(qid, targetLang);
    if (translated) return translated;
  }

  // Dernier recours : rien trouvé via une langue tierce vérifiable — on
  // accepte un match direct sur le wiki de la langue cible elle-même, en
  // gardant le risque résiduel décrit plus haut (mieux qu'aucune traduction
  // du tout pour un lieu absent des wikis en/fr/es).
  if (Date.now() >= deadline) return null;
  const directTitle = await searchWikipedia(name, targetLang);
  if (directTitle) return directTitle;

  return null;
}
