import { useCallback, useEffect, useState } from 'react';
import { callModeration } from '../lib/moderation';
import { travelRouteKey } from '../lib/planningUtils';

// Temps de MARCHE réels entre deux points, via l'API de routage
// (api/geocode-place.js, action 'route'), en remplacement de la distance à vol
// d'oiseau — tant que la marche reste une option crédible.
//
// ── Règle d'affichage, et pourquoi elle est aussi la règle d'appel ──
// Sous 45 min : on affiche le temps de marche. Au-delà : on revient à la
// distance à vol d'oiseau, et on ne dit RIEN du mode motorisé. Ce silence est
// délibéré — entre deux lieux éloignés, la personne prendra la voiture ici, le
// métro à Kyoto, un taxi ailleurs, et rien dans les données ne permet de le
// deviner. Afficher « 24 min en voiture » en plein Kyoto donnait un conseil que
// personne ne suivrait (voir l'en-tête de api/_lib/routing.js pour la mesure de
// couverture qui a mené là).
export const WALK_MAX_S = 45 * 60;

// Corollaire décisif pour la facture : au-delà de ce seuil à vol d'oiseau, la
// marche dépasse forcément WALK_MAX_S — donc on n'appelle même pas.
//
// Ce n'est pas une estimation mais une borne. Mesures réelles du 2026-08-01 sur
// 8 villes : Geoapify marche entre 60 et 69 m/min ; 45 min au rythme le plus
// rapide = 3096 m de CHEMIN. Or un chemin réel est toujours ≥ la distance à vol
// d'oiseau (inégalité triangulaire). Passé 3,2 km à vol d'oiseau, aucun
// itinéraire piéton ne peut donc tenir sous 45 min.
//
// DOIT rester ≤ MAX_WALK_HAVERSINE_KM de api/_lib/routing.js, qui refait le
// même filtre côté serveur.
export const MAX_WALK_HAVERSINE_KM = 3.2;

// Cache mémoire partagé par TOUTES les vues (vue par jour, mode Jour J,
// impression) et conservé le temps de la session : passer d'un jour à l'autre
// et revenir ne redéclenche aucun appel. Doublé côté serveur par un cache en
// base partagé entre utilisateurs (supabase/travel_routes_cache.sql) — celui-ci
// n'évite que les allers-retours réseau, celui-là évite la dépense.
//
// Valeur `null` = le serveur a répondu, mais sans résultat exploitable pour
// cette paire (aucun chemin piéton, quota du jour épuisé, marche trop longue).
// On la mémorise pour ne pas relancer indéfiniment un appel perdu d'avance.
// Une panne réseau, elle, ne pose JAMAIS de `null` : la clé reste inconnue et
// sera redemandée dès la prochaine modification du planning (voir fetchPairs).
const routeCache = new Map();

// Clés dont la demande est PARTIE mais pas encore revenue. Sans elles, deux
// demandeurs simultanés paient deux fois le même itinéraire : les connecteurs
// de la planification et la liste de restaurants sont montés en même temps dans
// une ville sur ordinateur, et un second glisser-déposer relance l'effet
// pendant que le premier appel est encore en vol. Le cache ne les protège pas,
// puisqu'il n'est rempli qu'à la RÉPONSE.
const inFlight = new Set();

// Rendus à réveiller quand des itinéraires arrivent. Nécessaire dès lors qu'on
// déduplique : un hook qui s'abstient parce qu'un autre a déjà lancé la demande
// doit tout de même se réafficher quand la réponse arrive, sinon il resterait
// sur la distance à vol d'oiseau jusqu'au prochain rendu fortuit.
const listeners = new Set();
function notifyAll() {
  for (const fn of listeners) fn();
}

const DEBOUNCE_MS = 400;

// DOIT rester ≤ MAX_PAIRS_PER_REQUEST de api/_lib/routing.js : au-delà, le
// serveur tronque silencieusement le lot et les paires écartées seraient
// enregistrées ici comme « sans résultat », donc jamais redemandées. Deux
// situations dépassent couramment ce seuil : un voyage de plusieurs semaines
// (tous les jours sont rendus d'un coup) et la liste de restaurants dépliée par
// « voir plus ».
const PAIRS_PER_REQUEST = 24;

function coordsOf(act) {
  if (act?.place_lat == null || act?.place_lng == null) return null;
  return { lat: act.place_lat, lng: act.place_lng };
}

// Segments routables : deux extrémités géocodées, et une distance à vol
// d'oiseau sous laquelle la marche peut encore tenir en 45 min. Les autres —
// dont les changements de ville (`far`, > 50 km, qui gardent leur message
// « prévoir un transport ») — ne coûtent aucun appel.
function routableEntries(segments) {
  const out = [];
  for (const [id, seg] of Object.entries(segments || {})) {
    if (!seg?.est || seg.est.far) continue;
    if (seg.est.distanceKm > MAX_WALK_HAVERSINE_KM) continue;
    const from = coordsOf(seg.from);
    const to = coordsOf(seg.to);
    if (!from || !to) continue;
    out.push({ id, fromLat: from.lat, fromLng: from.lng, toLat: to.lat, toLng: to.lng });
  }
  return out;
}

function keyFor(entry, mode) {
  return travelRouteKey(entry.fromLat, entry.fromLng, entry.toLat, entry.toLng, mode);
}

function pairFor(entry, mode) {
  return { fromLat: entry.fromLat, fromLng: entry.fromLng, toLat: entry.toLat, toLng: entry.toLng, mode };
}

// L'affichage est rafraîchi après CHAQUE lot, pas à la fin de tous : un voyage
// de trois semaines affiche tous ses jours d'un coup, soit une centaine de
// segments et plusieurs requêtes enchaînées. Sans ce rafraîchissement
// intermédiaire, l'écran restait figé sur la distance à vol d'oiseau pendant
// toute la série, puis basculait d'un bloc — alors que les premiers jours,
// ceux qu'on regarde en premier, étaient prêts depuis longtemps.
//
// `shouldContinue()` à false interrompt la série : le demandeur a été démonté
// ou ses segments ont changé, poursuivre paierait des itinéraires que plus
// personne n'affiche.
async function fetchPairs(pairs, shouldContinue) {
  for (let i = 0; i < pairs.length; i += PAIRS_PER_REQUEST) {
    const chunk = pairs.slice(i, i + PAIRS_PER_REQUEST);
    const keys = chunk.map((p) => travelRouteKey(p.fromLat, p.fromLng, p.toLat, p.toLng, p.mode));
    keys.forEach((k) => inFlight.add(k));

    let answered = false;
    try {
      const res = await callModeration('geocode-place', { action: 'route', pairs: chunk });
      answered = !!res?.ok && Array.isArray(res.routes);
      for (const r of (answered ? res.routes : [])) {
        routeCache.set(r.key, r.status === 'ok' ? r : null);
      }
      // Le serveur écarte silencieusement ce qu'il ne traite pas (paire trop
      // lointaine, budget épuisé, doublon, manque de temps). Sans cette passe,
      // ces clés resteraient « inconnues » et seraient redemandées à chaque
      // rendu.
      //
      // Uniquement s'il a RÉPONDU : sur une coupure réseau ou une session
      // expirée, `callModeration` renvoie un échec sans avoir rien traité.
      // Marquer ces clés « sans résultat » condamnerait l'utilisateur à la
      // distance à vol d'oiseau jusqu'au rechargement de la page, alors qu'un
      // simple retour du réseau suffit à les obtenir. Elles restent donc
      // inconnues, et seront retentées à la prochaine modification du planning.
      if (answered) {
        keys.forEach((k) => { if (!routeCache.has(k)) routeCache.set(k, null); });
      }
    } finally {
      // `finally` : sur exception, laisser les clés marquées en vol les rendrait
      // indemandables jusqu'au rechargement de la page. Vidé AVANT le
      // rafraîchissement ci-dessous, pour que les vues lisent un état « plus
      // aucun appel en cours » et cessent d'afficher l'atténuation d'attente.
      keys.forEach((k) => inFlight.delete(k));
    }

    notifyAll();
    // Serveur muet : les lots suivants subiraient le même sort. On s'arrête
    // plutôt que d'enchaîner quatre requêtes vouées à l'échec sur un voyage de
    // trois semaines consulté hors ligne.
    if (!answered) return;
    if (shouldContinue && shouldContinue() === false) return;
  }
}

// Clés encore inconnues ET pas déjà demandées par quelqu'un d'autre.
function missesAmong(entries) {
  return entries.filter((e) => {
    const k = keyFor(e, 'walk');
    return !routeCache.has(k) && !inFlight.has(k);
  });
}

// Abonne le composant aux arrivées d'itinéraires, d'où qu'elles viennent :
// c'est ce qui permet à un hook de s'abstenir de demander une clé déjà en vol
// ailleurs sans rester bloqué sur la distance à vol d'oiseau une fois la
// réponse revenue.
function useRerenderOnRoutes() {
  const [, force] = useState(0);
  const rerender = useCallback(() => force((n) => n + 1), []);
  useEffect(() => {
    listeners.add(rerender);
    return () => { listeners.delete(rerender); };
  }, [rerender]);
  return rerender;
}

/**
 * @param segments map { [idActivitéArrivée]: segment } issue de buildTravelSegments
 * @returns map { [idActivitéArrivée]: { walk, loading } }
 *   walk : { distanceM, durationS } quand la marche tient sous 45 min, sinon
 *          `null` — l'appelant affiche alors la distance à vol d'oiseau. Les
 *          segments trop longs pour être marchés n'apparaissent pas du tout
 *          dans la map (ils ne sont jamais routés).
 *   loading : un appel est en cours pour ce segment (la vue continue d'afficher
 *          la distance à vol d'oiseau pendant ce temps).
 */
export function useTravelRoutes(segments) {
  const entries = routableEntries(segments);
  // Signature textuelle plutôt que l'objet lui-même en dépendance d'effet :
  // `segments` est reconstruit à chaque rendu par la vue (buildTravelSegments
  // est appelé dans le corps du composant), son identité change donc en
  // permanence et relancerait l'effet en boucle.
  const signature = entries.map((e) => `${e.id}@${keyFor(e, 'walk')}`).join('|');

  useRerenderOnRoutes();

  useEffect(() => {
    if (!signature) return undefined;
    let cancelled = false;

    // Anti-rafale : `buildTravelSegments` se recalcule à chaque déplacement
    // d'activité, changement d'heure ou de lieu. Sans ce délai, un simple
    // glisser-déposer déclencherait une salve d'appels payants pour des
    // itinéraires immédiatement périmés par le mouvement suivant.
    const timer = setTimeout(async () => {
      const misses = missesAmong(routableEntries(segments));
      if (!misses.length) return;
      try {
        await fetchPairs(misses.map((e) => pairFor(e, 'walk')), () => !cancelled);
      } catch { /* repli vol d'oiseau */ }
    }, DEBOUNCE_MS);

    return () => { cancelled = true; clearTimeout(timer); };
    // `segments` volontairement hors dépendances : seule sa signature compte
    // (voir ci-dessus), et l'effet relit la version fraîche au déclenchement.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  const out = {};
  for (const e of entries) {
    out[e.id] = readRoute(e);
  }
  return out;
}

/**
 * Temps de MARCHE seuls, pour des paires de points quelconques — utilisé par la
 * liste de restaurants (« à 8 min à pied de X »).
 *
 * L'appelant est responsable de ne fournir que des paires sous
 * MAX_WALK_HAVERSINE_KM : au-delà, le serveur les écarte de toute façon.
 *
 * @param entries [{ id, fromLat, fromLng, toLat, toLng }]
 * @returns map { [id]: { distanceM, durationS } | null } — `null` aussi quand
 *          la marche dépasse 45 min, l'appelant affiche alors la distance.
 */
export function useWalkRoutes(entries) {
  const list = Array.isArray(entries) ? entries : [];
  const signature = list.map((e) => `${e.id}@${keyFor(e, 'walk')}`).join('|');
  useRerenderOnRoutes();

  useEffect(() => {
    if (!signature) return undefined;
    let cancelled = false;
    const timer = setTimeout(async () => {
      const misses = missesAmong(list);
      if (!misses.length) return;
      try {
        await fetchPairs(misses.map((e) => pairFor(e, 'walk')), () => !cancelled);
      } catch { /* repli distance */ }
    }, DEBOUNCE_MS);
    return () => { cancelled = true; clearTimeout(timer); };
    // Même raisonnement que useTravelRoutes : seule la signature compte, la
    // liste elle-même est reconstruite à chaque rendu par l'appelant.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  const out = {};
  for (const e of list) {
    const walk = routeCache.get(keyFor(e, 'walk'));
    // Même règle des 45 min que le connecteur de planification : au-delà, on
    // n'affiche pas « 1 h 12 à pied de Senso-ji », on revient à la distance.
    out[e.id] = (walk && walk.durationS <= WALK_MAX_S) ? walk : null;
  }
  return out;
}

// Lecture pure du cache mémoire pour un segment, sans déclencher le moindre
// appel. Utilisée par le hook ci-dessus et par la vue impression, qui est
// synchrone : elle affiche les temps déjà chargés par les vues consultées avant
// l'impression, et la distance à vol d'oiseau pour les autres — plutôt que de
// lancer une rafale d'appels au moment précis où l'utilisateur veut imprimer.
export function peekTravelRoute(segment) {
  const [entry] = routableEntries({ x: segment });
  if (!entry) return { walk: null, loading: false };
  return readRoute(entry);
}

function readRoute(entry) {
  const key = keyFor(entry, 'walk');
  const walk = routeCache.get(key);
  // `loading` = un appel est RÉELLEMENT en cours pour cette paire, et non pas
  // « clé encore inconnue ». La nuance compte hors ligne : après un appel
  // échoué, la clé reste inconnue (pour pouvoir être retentée) mais plus rien
  // n'est en cours — le connecteur doit alors afficher la distance normalement,
  // et non rester atténué indéfiniment comme s'il attendait une réponse.
  if (walk === undefined) return { walk: null, loading: inFlight.has(key) };
  // Marche au-delà de 45 min : traitée exactement comme une absence de
  // résultat, l'affichage revient à la distance à vol d'oiseau. Le seuil est
  // appliqué ICI et non au moment de l'appel, parce qu'on ne connaît la durée
  // qu'après coup — le pré-filtre géométrique (MAX_WALK_HAVERSINE_KM) écarte en
  // amont les cas où l'on sait déjà que ce sera trop long.
  if (!walk || walk.durationS > WALK_MAX_S) return { walk: null, loading: false };
  return { walk, loading: false };
}
