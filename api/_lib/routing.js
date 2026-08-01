// Temps de MARCHE réels (Geoapify Routing API) entre deux points, avec cache
// partagé en base — voir supabase/travel_routes_cache.sql.
//
// Appelé exclusivement via api/geocode-place.js (action 'route') : le plan
// Vercel Hobby plafonne à 12 fonctions serverless, toutes déjà prises — ce
// module ne peut donc pas être sa propre route, il se greffe sur l'endpoint géo
// existant (même domaine, même clé Geoapify), comme api/places.js regroupe déjà
// add/delete/vote.
//
// ── Pourquoi la marche, et RIEN d'autre ─────────────────────────
// Une première version demandait aussi le transport en commun, avec repli sur
// la voiture là où il n'était pas couvert. Deux appels réels du 2026-08-01 ont
// tranché : Geoapify n'a AUCUNE donnée de transport pour le Japon (Kyoto comme
// Tokyo, y compris de gare à gare), et Rome n'est que partiellement couvert.
// Le repli affichait donc « 24 min en voiture » en plein Kyoto — un conseil que
// personne ne suivra, là où le voyageur prendra le métro ou le JR.
//
// Or, entre deux lieux éloignés, on ne peut PAS deviner ce que la personne
// prendra : voiture ici, métro là, taxi ailleurs. Plutôt que de trancher à sa
// place et de se tromper, on ne dit plus rien de motorisé : au-delà de 45 min
// de marche, l'interface revient à la distance à vol d'oiseau, un fait
// géométrique que personne ne peut contester.
import { haversineKm } from './geoDistance.js';

const GEOAPIFY_API_KEY = process.env.VITE_GEOAPIFY_API_KEY;

// Un seul mode. Élargir cette liste demande aussi d'élargir la contrainte
// `check` de la colonne `mode` (supabase/travel_routes_cache.sql).
export const REQUESTABLE_MODES = ['walk'];

// Garde-fou serveur, doublant le filtre client (MAX_WALK_HAVERSINE_KM dans
// src/hooks/useTravelRoutes.js) : au-delà, la marche dépasse forcément les
// 45 minutes affichables, l'appel serait donc payé pour rien.
//
// Le seuil n'est pas arbitraire, il est démontré. Mesures réelles du
// 2026-08-01 sur 8 villes : Geoapify marche entre 60 et 69 m/min. Au rythme le
// plus rapide, 45 min = 3096 m de CHEMIN. Et un chemin réel est toujours ≥ la
// distance à vol d'oiseau (inégalité triangulaire, aucune hypothèse). Donc
// au-delà de 3,2 km à vol d'oiseau, la marche dépasse 45 min à coup sûr — sans
// le moindre appel. C'est cette borne géométrique, et non une estimation de
// vitesse, qui rend l'économie sûre.
const MAX_WALK_HAVERSINE_KM = 3.2;

// Un itinéraire piéton réussi ne périme jamais (un trottoir ne bouge pas). Seuls
// les refus motivés portent une expiration, le temps qu'un chemin manquant
// apparaisse dans OSM.
const ROUTE_TTL_MONTHS = 6;

// Plafond par requête. Le client découpe au-delà (PAIRS_PER_REQUEST dans
// src/hooks/useTravelRoutes.js, qui doit rester ≤ celui-ci).
const MAX_PAIRS_PER_REQUEST = 24;
// Appels réseau simultanés. Geoapify tolère bien mieux 6 requêtes en parallèle
// répétées qu'une rafale complète, qui déclenche des 429.
const CONCURRENCY = 6;

// ── Budget de temps, dicté par Vercel ──
// Une fonction Vercel Hobby est TUÉE à 10 s (aucun `maxDuration` n'est
// configuré dans vercel.json). Un plafond par appel ne suffit pas à s'en
// protéger : 24 paires à 6 en parallèle font 4 vagues, donc 4 × le délai
// d'attente. À 5 s par appel, un incident Geoapify menait à 20 s et la
// fonction mourait sans jamais renvoyer NI écrire quoi que ce soit.
//
// D'où deux bornes complémentaires :
//   • par appel : 3 s. Mesuré le 2026-08-01 sur 10 trajets courts (les seuls
//     que ce module calcule désormais) : médiane 344 ms, maximum 797 ms.
//     Trois secondes laissent donc près de 4× la marge du pire cas observé.
//   • globale : on n'ENGAGE plus de nouvel appel après 5 s. Pire cas absolu =
//     un appel lancé à 4,99 s qui expire à 7,99 s, plus la lecture et
//     l'écriture du cache — on reste sous les 10 s quoi qu'il arrive.
// Les paires non traitées faute de temps ne sont simplement pas renvoyées :
// l'interface affiche la distance à vol d'oiseau et réessaiera plus tard.
const ROUTE_TIMEOUT_MS = 3000;
const GLOBAL_DEADLINE_MS = 5000;

// ─── Budget par utilisateur ──────────────────────────────────────
// Seuls les itinéraires NON mis en cache coûtent un crédit : c'est donc eux
// qu'on compte, pas les requêtes. 300 par tranche de 10 minutes laisse très
// largement passer un usage normal (une journée de planning en consomme une
// dizaine, la première consultation d'une ville entière quelques dizaines)
// tout en bornant ce qu'un script peut brûler.
//
// Compteur en mémoire du processus : il se remet à zéro à chaque démarrage à
// froid et n'est pas partagé entre instances Vercel. C'est un garde-fou, pas
// une comptabilité — le pare-feu réel reste le cache partagé, qui fait qu'un
// même trajet n'est jamais payé deux fois quel que soit l'appelant.
const USER_BUDGET = 300;
const USER_BUDGET_WINDOW_MS = 10 * 60 * 1000;
const userBudgets = new Map();

function takeBudget(userId, wanted) {
  if (!userId) return 0;
  const now = Date.now();
  let entry = userBudgets.get(userId);
  if (!entry || entry.resetAt <= now) {
    entry = { used: 0, resetAt: now + USER_BUDGET_WINDOW_MS };
    userBudgets.set(userId, entry);
  }
  // Purge opportuniste : sans elle, la Map grossirait indéfiniment sur une
  // instance longtemps chaude.
  if (userBudgets.size > 500) {
    for (const [k, v] of userBudgets) if (v.resetAt <= now) userBudgets.delete(k);
  }
  const granted = Math.max(0, Math.min(wanted, USER_BUDGET - entry.used));
  entry.used += granted;
  return granted;
}

// ─── Clé de cache ────────────────────────────────────────────────
// DOIT rester identique à `travelRouteKey` de src/lib/planningUtils.js : les
// deux côtés fabriquent l'identifiant du même trajet, et la moindre différence
// (nombre de décimales, séparateur) créerait deux lignes pour un seul itinéraire
// — donc un cache qui ne se remplit jamais. Même contrainte que `slugifyTag`,
// dupliqué entre api/places.js et src/lib/cuisineTags.js.
//
// Arrondi à 4 décimales (~11 m) : deux personnes qui ajoutent le même lieu
// peuvent obtenir des coordonnées distantes de quelques mètres selon la requête
// de géocodage, sans que ce soit un trajet différent.
export function travelRouteKey(fromLat, fromLng, toLat, toLng, mode) {
  const r = (n) => Number(n).toFixed(4);
  return `${r(fromLat)},${r(fromLng)}>${r(toLat)},${r(toLng)}|${mode}`;
}

// Seul un itinéraire piéton RÉUSSI est permanent. Tout le reste (transport,
// voiture, et les refus motivés) porte l'expiration à 6 mois : les réseaux de
// transport évoluent, et une zone aujourd'hui sans arrêt desservi peut en avoir
// un demain.
//
// Les pannes passagères, elles, ne sont jamais écrites en cache (voir
// callGeoapify et routeOne) : c'est ce qui permet de mémoriser longuement les
// refus motivés sans risquer de figer pour six mois le résultat d'une coupure
// réseau de dix minutes.
function expiryFor(mode, status) {
  if (mode === 'walk' && status === 'ok') return null;
  const d = new Date();
  d.setMonth(d.getMonth() + ROUTE_TTL_MONTHS);
  return d.toISOString();
}

// ─── Appel Geoapify ──────────────────────────────────────────────
// Un appel = un mode = un crédit. L'API n'accepte pas plusieurs modes par
// requête, ce qui rendait le couple marche + transport deux fois plus cher —
// une des raisons d'avoir renoncé au transport (voir l'en-tête du fichier).
//
// Appels parallèles plutôt que l'API Batch de Geoapify : celle-ci répond en 202
// avec un identifiant à interroger ensuite en boucle dès que le lot n'est pas
// instantané, ce qui tient mal dans une fonction serverless à durée bornée. La
// facturation est de toute façon identique (par itinéraire, pas par requête
// HTTP) : le batch n'aurait fait gagner que des allers-retours réseau.
// Renvoie :
//   { ok: true, distanceM, durationS }
//   { ok: false, deterministic: true }  → refus MOTIVÉ : la requête était bien
//       formée, Geoapify a répondu qu'il n'y avait pas d'itinéraire (« no path
//       could be found »). Rejouer la même requête demain donnera le même
//       refus : on le mémorise 6 mois.
//   { ok: false, deterministic: false } → panne PASSAGÈRE (réseau, délai
//       dépassé, 5xx, quota 429). On n'écrit RIEN en cache : le trajet sera
//       retenté à la prochaine session plutôt que gelé par notre incident.
//
// Subtilité indispensable : sur un refus d'itinéraire, Geoapify répond
// **HTTP 200** avec un corps `{"statusCode":400,"error":...,"message":...}`.
// Se fier au seul code HTTP ferait passer ce refus pour un succès vide, et
// inversement un vrai 400 (paramètre invalide) n'a rien de passager. La
// distinction se joue donc sur le CORPS, pas sur le statut ; seuls les 5xx et
// le 429 sont traités comme des pannes sans même lire la réponse.
async function callGeoapify(pair, mode) {
  const waypoints = `${pair.fromLat},${pair.fromLng}|${pair.toLat},${pair.toLng}`;
  const url = `https://api.geoapify.com/v1/routing?waypoints=${encodeURIComponent(waypoints)}&mode=${encodeURIComponent(mode)}&units=metric&apiKey=${GEOAPIFY_API_KEY}`;

  let res;
  try {
    res = await fetch(url, { signal: AbortSignal.timeout(ROUTE_TIMEOUT_MS) });
  } catch {
    return { ok: false, deterministic: false }; // réseau coupé ou délai dépassé
  }
  if (res.status >= 500 || res.status === 429) return { ok: false, deterministic: false };

  let data;
  try { data = await res.json(); } catch { return { ok: false, deterministic: false }; }

  const props = data?.features?.[0]?.properties;
  // `distance`/`time` peuvent valoir 0 sur deux points confondus : tester
  // l'existence, pas la véracité — un test falsy transformerait un itinéraire
  // nul valide en échec.
  if (props?.distance != null && props?.time != null) {
    return { ok: true, distanceM: Math.round(props.distance), durationS: Math.round(props.time) };
  }
  return { ok: false, deterministic: true };
}

// Calcule un itinéraire piéton et renvoie la ligne de cache à écrire (aucune,
// s'il s'agit d'une panne passagère).
async function routeOne(pair) {
  const result = await callGeoapify(pair, 'walk');

  if (result.ok) {
    const values = { distanceM: result.distanceM, durationS: result.durationS };
    const row = { ...pair, mode: 'walk', ...values, status: 'ok' };
    return { rows: [row], answer: { mode: 'walk', ...values, status: 'ok' } };
  }

  // Panne passagère : AUCUNE écriture en cache, et aucune réponse. L'affichage
  // retombe sur la distance à vol d'oiseau et le trajet sera retenté à la
  // prochaine session — plutôt que de graver notre propre incident dans un
  // cache partagé par tous les utilisateurs pendant six mois.
  if (!result.deterministic) return { rows: [], answer: null };

  // Refus motivé : pas de chemin piéton connu (île, zone sans voirie
  // cartographiée). Mémorisé pour ne pas le recalculer à chaque affichage.
  const row = { ...pair, mode: 'walk', distanceM: null, durationS: null, status: 'not_found' };
  return { rows: [row], answer: { mode: 'walk', distanceM: null, durationS: null, status: 'not_found' } };
}

// Ligne prête pour l'upsert. Les champs sont recopiés un à un, jamais étalés
// depuis l'objet de travail : celui-ci porte aussi `key`, `staleRow` et
// `driveRow`, qui n'ont rien à faire en base.
function cacheRow(r) {
  return {
    route_key: travelRouteKey(r.fromLat, r.fromLng, r.toLat, r.toLng, r.mode),
    from_lat: r.fromLat, from_lng: r.fromLng, to_lat: r.toLat, to_lng: r.toLng,
    mode: r.mode,
    distance_m: r.distanceM ?? null,
    duration_s: r.durationS ?? null,
    status: r.status,
    computed_at: new Date().toISOString(),
    expires_at: expiryFor(r.mode, r.status),
  };
}

// `deadline` (horodatage) : aucun nouvel appel n'est ENGAGÉ après cet instant.
// Les éléments non traités gardent la valeur `undefined` dans le résultat, que
// l'appelant distingue d'un `null` (échec) — voir getRoutes.
async function runWithConcurrency(items, limit, worker, deadline) {
  const out = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      if (Date.now() >= deadline) return;
      const i = cursor++;
      try { out[i] = await worker(items[i]); } catch { out[i] = null; }
    }
  });
  await Promise.all(runners);
  return out;
}

// ─── Point d'entrée ──────────────────────────────────────────────
/**
 * @param admin client Supabase service_role
 * @param pairs [{ fromLat, fromLng, toLat, toLng, mode }] — mode dans REQUESTABLE_MODES
 * @returns [{ key, mode, distanceM, durationS, status }]
 *
 * Ne lève JAMAIS sur une panne Geoapify ou un quota épuisé : renvoie ce qu'on a
 * (cache périmé compris). L'interface retombe alors sur la distance à vol
 * d'oiseau, qui reste affichable sans le moindre appel réseau.
 */
export async function getRoutes(admin, pairs, userId = null) {
  if (!GEOAPIFY_API_KEY || !Array.isArray(pairs) || !pairs.length) return [];
  // Compté depuis l'entrée de la fonction, lecture du cache incluse : c'est
  // bien le temps total de la requête HTTP que Vercel plafonne, pas celui des
  // seuls appels sortants.
  const deadline = Date.now() + GLOBAL_DEADLINE_MS;

  // Normalisation + rejet des paires inexploitables. `== null` et non un test
  // falsy : 0 est une coordonnée valide (équateur, méridien de Greenwich).
  const normalized = [];
  const seen = new Set();
  for (const p of pairs.slice(0, MAX_PAIRS_PER_REQUEST)) {
    const fromLat = Number(p?.fromLat); const fromLng = Number(p?.fromLng);
    const toLat = Number(p?.toLat); const toLng = Number(p?.toLng);
    const mode = String(p?.mode || '');
    if (![fromLat, fromLng, toLat, toLng].every(Number.isFinite)) continue;
    if (!REQUESTABLE_MODES.includes(mode)) continue;
    if (haversineKm(fromLat, fromLng, toLat, toLng) > MAX_WALK_HAVERSINE_KM) continue;
    const key = travelRouteKey(fromLat, fromLng, toLat, toLng, mode);
    if (seen.has(key)) continue; // le client peut envoyer deux fois le même segment (deux vues ouvertes)
    seen.add(key);
    normalized.push({ key, fromLat, fromLng, toLat, toLng, mode });
  }
  if (!normalized.length) return [];

  // ── Lecture du cache : un seul SELECT pour tout le lot.
  let cached = [];
  try {
    const { data } = await admin
      .from('travel_routes')
      .select('route_key, mode, distance_m, duration_s, status, expires_at')
      .in('route_key', normalized.map((n) => n.key));
    cached = data || [];
  } catch {
    cached = [];
  }
  const byKey = new Map(cached.map((r) => [r.route_key, r]));

  const isFresh = (row) => row && (row.expires_at == null || new Date(row.expires_at) > new Date());

  const results = [];
  const toFetch = [];

  for (const n of normalized) {
    const row = byKey.get(n.key);
    if (isFresh(row)) {
      results.push({
        key: n.key,
        mode: n.mode,
        distanceM: row.status === 'ok' ? row.distance_m : null,
        durationS: row.status === 'ok' ? row.duration_s : null,
        status: row.status,
      });
      continue;
    }
    // Absent, ou refus motivé de plus de 6 mois : à recalculer.
    toFetch.push({ ...n, staleRow: row || null });
  }

  // Budget consommé APRÈS la lecture du cache : une consultation entièrement
  // servie par le cache ne coûte rien et ne doit donc rien décompter.
  const allowed = takeBudget(userId, toFetch.length);
  const refused = toFetch.slice(allowed);
  toFetch.length = allowed;
  // Au-delà du budget, on sert la ligne périmée si on en a une, sinon on ne
  // renvoie rien pour ce segment : l'interface affiche alors la distance à vol
  // d'oiseau, dégradation acceptable et invisible dans un usage normal.
  for (const n of refused) {
    if (n.staleRow?.status === 'ok') {
      results.push({ key: n.key, mode: n.mode, distanceM: n.staleRow.distance_m, durationS: n.staleRow.duration_s, status: 'ok', stale: true });
    }
  }

  if (toFetch.length) {
    const fetched = await runWithConcurrency(toFetch, CONCURRENCY, routeOne, deadline);
    const rowsToUpsert = [];

    fetched.forEach((res, i) => {
      const n = toFetch[i];
      // `undefined` = jamais engagé, faute de temps (voir GLOBAL_DEADLINE_MS).
      // Rien à écrire en cache. Le client retiendra « pas de résultat » pour
      // cette paire jusqu'à la fin de sa session (voir fetchPairs) et affichera
      // la distance à vol d'oiseau : c'est volontaire, cela évite de rappeler en
      // boucle un serveur déjà en peine. Cas de toute façon théorique — les
      // trajets courts répondent en ~350 ms, la limite est un filet, pas un
      // régime de croisière.
      if (res === undefined) {
        if (n.staleRow?.status === 'ok') {
          results.push({ key: n.key, mode: n.mode, distanceM: n.staleRow.distance_m, durationS: n.staleRow.duration_s, status: 'ok', stale: true });
        }
        return;
      }
      // `res.answer` absent = panne passagère (ou exception inattendue). Si on
      // avait une ligne périmée, on continue de la servir : un temps de marche
      // même ancien vaut mieux qu'un connecteur muet.
      if (!res || !res.answer) {
        if (n.staleRow?.status === 'ok') {
          results.push({ key: n.key, mode: n.mode, distanceM: n.staleRow.distance_m, durationS: n.staleRow.duration_s, status: 'ok', stale: true });
        }
        if (res) for (const r of res.rows) rowsToUpsert.push(cacheRow(r));
        return;
      }
      results.push({ key: n.key, ...res.answer });
      for (const r of res.rows) rowsToUpsert.push(cacheRow(r));
    });

    if (rowsToUpsert.length) {
      // Cache non écrit : le résultat reste correct pour CET appel, il sera
      // simplement recalculé (et repayé) au suivant. Jamais bloquant — mais
      // toujours signalé : c'est ainsi que se manifeste une table absente
      // (supabase/travel_routes_cache.sql pas encore passé), qui ferait payer
      // chaque affichage sans que rien ne casse visiblement.
      try {
        const { error } = await admin.from('travel_routes').upsert(rowsToUpsert, { onConflict: 'route_key' });
        // supabase-js ne lève pas : sans cette lecture explicite de `error`,
        // l'échec passerait totalement inaperçu.
        if (error) console.error('[routing] upsert:', error.message || error);
      } catch (e) {
        console.error('[routing] upsert:', e);
      }
    }
  }

  return results;
}
