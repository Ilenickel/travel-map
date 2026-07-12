import { COUNTRIES } from '../data/index';
import i18n from '../i18n';
import { localizeField } from './localizeCountry';
import { getCurrency, convertFromEur } from './currency';

// ─── Country list (triée, langue courante) ────────────────────────
// Fonction (pas une constante figée) car le nom du pays est bilingue depuis
// l'i18n des données pays : doit être recalculé quand la langue change.
export function getAllCountries(lang) {
  return Object.entries(COUNTRIES)
    .map(([code, c]) => ({ code, name: localizeField(c.name, lang), emoji: c.emoji || '🌍' }))
    .sort((a, b) => a.name.localeCompare(b.name, lang));
}

// ─── Activity categories ──────────────────────────────────────────
// `label` est un getter (relu à chaque accès) plutôt qu'une valeur figée : il
// doit toujours refléter la langue active, sans que les ~6 fichiers qui font
// `ACTIVITY_CATEGORIES[cat].label` aient à changer leur façon de le lire.
function activityCategory(key, icon, color) {
  return { icon, color, get label() { return i18n.t(`activityCategories.${key}`, { ns: 'planning' }); } };
}
export const ACTIVITY_CATEGORIES = {
  visit:     activityCategory('visit', '🏛️', '#6366f1'),
  food:      activityCategory('food', '🍽️', '#f59e0b'),
  hotel:     activityCategory('hotel', '🏨', '#10b981'),
  transport: activityCategory('transport', '✈️', '#3b82f6'),
  nature:    activityCategory('nature', '🌿', '#22c55e'),
  beach:     activityCategory('beach', '🏖️', '#06b6d4'),
  shopping:  activityCategory('shopping', '🛍️', '#ec4899'),
  night:     activityCategory('night', '🌙', '#8b5cf6'),
  other:     activityCategory('other', '📍', '#64748b'),
};

// ─── Modes de transport (trajets) ─────────────────────────────────
function transportMode(key, icon) {
  return { icon, get label() { return i18n.t(`transportModes.${key}`, { ns: 'planning' }); } };
}
export const TRANSPORT_MODES = {
  voiture: transportMode('voiture', '🚗'),
  train:   transportMode('train', '🚆'),
  avion:   transportMode('avion', '✈️'),
  metro:   transportMode('metro', '🚇'),
  bus:     transportMode('bus', '🚌'),
  bateau:  transportMode('bateau', '⛴️'),
  velo:    transportMode('velo', '🚲'),
  marche:  transportMode('marche', '🚶'),
};

// ─── Critères de voyage (planning-modèle communautaire) ───────────
// Liste FERMÉE de clés stockées telles quelles en base (trips.share_criteria,
// trip_templates.criteria, trip_template_groups.criteria — voir
// supabase/planning_modele_v8.sql), libellés via i18n comme les catégories
// ci-dessus. Servent à la fois de widgets à cocher au moment d'activer le
// partage d'un voyage, et de filtres au-dessus des suggestions.
function tripCriterion(key, icon) {
  return { icon, get label() { return i18n.t(`tripCriteria.${key}`, { ns: 'planning' }); } };
}
export const TRIP_CRITERIA = {
  with_kids:  tripCriterion('with_kids', '👶'),
  couple:     tripCriterion('couple', '💑'),
  friends:    tripCriterion('friends', '🎉'),
  solo:       tripCriterion('solo', '🎒'),
  low_budget: tripCriterion('low_budget', '💸'),
  nature:     tripCriterion('nature', '🌿'),
  city:       tripCriterion('city', '🏙️'),
};

export function formatDuration(minutes) {
  if (!minutes) return '';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m} min`;
  if (!m) return `${h}h`;
  return `${h}h${String(m).padStart(2, '0')}`;
}

// ─── Date helpers ─────────────────────────────────────────────────
// Locale Intl dérivée de la langue active (fr/en) plutôt qu'en dur : c'est ce
// qui fait suivre à formatDate/formatDateShort/formatDayLabel le widget de
// langue de la topbar planif.
const INTL_LOCALE = { fr: 'fr-FR', en: 'en-GB' };
function currentLocale() { return INTL_LOCALE[i18n.language] || 'fr-FR'; }

export function formatDate(d) {
  if (!d) return '';
  return new Date(d + 'T12:00:00').toLocaleDateString(currentLocale(), {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

export function formatDateShort(d) {
  if (!d) return '';
  return new Date(d + 'T12:00:00').toLocaleDateString(currentLocale(), {
    weekday: 'short', day: 'numeric', month: 'short',
  });
}

// Postgres renvoie les colonnes TIME avec les secondes ("14:00:00") ;
// on n'affiche jamais que HH:MM à l'utilisateur.
export function formatTimeShort(t) {
  if (!t) return '';
  return t.slice(0, 5);
}

export function formatDayLabel(d) {
  if (!d) return '';
  const date = new Date(d + 'T12:00:00');
  return date.toLocaleDateString(currentLocale(), { weekday: 'long', day: 'numeric', month: 'long' });
}

export function getDaysBetween(startDate, endDate) {
  if (!startDate || !endDate) return [];
  const days = [];
  const start = new Date(startDate + 'T12:00:00');
  const end = new Date(endDate + 'T12:00:00');
  if (end < start) return [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

export function tripDurationDays(startDate, endDate) {
  if (!startDate || !endDate) return null;
  const start = new Date(startDate + 'T12:00:00');
  const end = new Date(endDate + 'T12:00:00');
  const diff = Math.round((end - start) / (1000 * 60 * 60 * 24)) + 1;
  return diff > 0 ? diff : null;
}

// ─── Mode Jour J (partagé entre la vue à l'écran et l'impression) ────────────

// Date locale (pas UTC) : un `new Date().toISOString()` déciderait du jour selon
// le fuseau UTC, ce qui peut être "hier" ou "demain" par rapport à l'heure locale
// de l'utilisateur en soirée/petit matin — les dates de voyage (visit_date) sont
// elles-mêmes de simples chaînes locales "YYYY-MM-DD", donc la comparaison doit
// utiliser la même convention.
export function todayLocalStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function timeToMinutes(t) {
  if (!t) return null;
  const [h, m] = t.slice(0, 5).split(':').map(Number);
  return h * 60 + m;
}

// Tri canonique des activités d'une journée : par heure, puis par `position`
// pour départager les égalités (fréquent : plusieurs activités déposées dans
// le même créneau restent toutes calées sur l'heure par défaut du créneau tant
// que l'utilisateur n'a pas personnalisé chacune — ce tri permet alors de les
// réordonner entre elles). Comparaison via timeToMinutes (jamais une
// comparaison de chaînes brutes) : Postgres renvoie les colonnes TIME avec les
// secondes ("14:00:00") pour une activité déjà rechargée depuis la base, alors
// qu'une activité qui vient d'être déposée dans un créneau reçoit localement
// "14:00" (sans secondes) tant qu'aucun rechargement n'est passé par là — deux
// heures identiques à l'affichage pouvaient ainsi comparer comme différentes
// en tant que chaînes, empêchant à tort le repli sur `position`.
//
// Partagée par DayView (écran + drag&drop), TripDayModeView (mode Jour J) et
// TripPrintView (impression, complet + Jour J) : la même fonction PARTOUT est
// ce qui garantit que l'ordre affiché, l'ordre utilisé pour calculer les
// distances entre activités consécutives (buildTravelSegments) et l'ordre
// imprimé ne divergent jamais entre eux.
export function sortActivitiesByTimeThenPosition(acts) {
  return [...acts].sort((a, b) => {
    const ta = timeToMinutes(a.visit_time);
    const tb = timeToMinutes(b.visit_time);
    if (ta != null && tb != null) return ta !== tb ? ta - tb : a.position - b.position;
    if (ta != null) return -1;
    if (tb != null) return 1;
    return a.position - b.position;
  });
}

// "2026-07-03" + n jours -> "2026-07-04", calculé en local (pas via
// toISOString, qui repasse par UTC et rend le mauvais jour pour les fuseaux
// au-delà de UTC+12 — même précaution que todayLocalStr ci-dessus).
export function addDaysToDateStr(dateStr, n) {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + n);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Où en est le voyage par rapport à aujourd'hui — messages d'état partagés entre
// le mode Jour J à l'écran et sa version imprimée, pour ne jamais afficher une
// réponse différente ("pas commencé" à l'écran, silence à l'impression) selon
// l'endroit d'où on regarde.
export function getDayModeStatus(trip, today = todayLocalStr()) {
  const hasDates = !!(trip?.start_date && trip?.end_date);
  // Rien n'empêche (en tout cas pour d'anciennes données, le champ de saisie
  // l'empêche désormais) un départ après le retour : sans ce garde-fou, une
  // plage inversée ferait passer "pas commencé" ET "déjà terminé" à vrai en
  // même temps pour un même "aujourd'hui".
  const datesInverted = hasDates && trip.start_date > trip.end_date;
  const inRange = hasDates && !datesInverted && today >= trip.start_date && today <= trip.end_date;
  const beforeTrip = hasDates && !datesInverted && today < trip.start_date;
  const afterTrip = hasDates && !datesInverted && today > trip.end_date;
  return { hasDates, datesInverted, inRange, beforeTrip, afterTrip };
}

// Activité commencée un jour précédent (pas forcément la veille : une activité
// de plusieurs jours reste "reportée" tant que sa durée continue de couvrir
// aujourd'hui) mais étirée (duration_minutes) jusqu'à aujourd'hui — ex : un
// trajet de nuit posé hier 22h avec une durée de 10h. Sans ce repêchage, elle
// disparaîtrait du mode Jour J le jour même où elle se termine, alors que
// c'est justement le jour où l'utilisateur la vit encore. Renvoie daysBetween
// avec chaque activité (et pas seulement un booléen) pour permettre d'afficher
// "depuis hier"/"avant-hier"/une date précise selon le nombre réel de jours,
// plutôt qu'un texte "depuis hier" qui serait faux au-delà d'un jour.
export function getCarriedOverActivities(activities, today) {
  const result = [];
  for (const a of activities) {
    if (!a.visit_date || !a.visit_time || !a.duration_minutes || a.visit_date >= today) continue;
    const daysBetween = Math.round((new Date(`${today}T00:00:00`) - new Date(`${a.visit_date}T00:00:00`)) / 86400000);
    if (daysBetween <= 0) continue;
    const endMinutesFromStartDay = timeToMinutes(a.visit_time) + a.duration_minutes;
    if (endMinutesFromStartDay > daysBetween * 1440) result.push({ act: a, daysBetween });
  }
  return result;
}

// Libellé "depuis quand" d'une activité reportée — évite un "Depuis hier"
// trompeur pour une activité commencée il y a 2 jours ou plus.
export function formatCarriedOverLabel(daysBetween, visitDate) {
  if (daysBetween === 1) return i18n.t('carriedOver.yesterday', { ns: 'planning' });
  if (daysBetween === 2) return i18n.t('carriedOver.dayBeforeYesterday', { ns: 'planning' });
  return i18n.t('carriedOver.sinceDate', { ns: 'planning', date: formatDate(visitDate) });
}

// ─── Hébergements ─────────────────────────────────────────────────

// Nombre de nuits d'un séjour (check-out exclusif : arrivée le 12, départ le 15
// = 3 nuits). Renvoie null si les dates manquent ou sont incohérentes.
export function lodgingNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return null;
  const n = Math.round((new Date(checkOut + 'T12:00:00') - new Date(checkIn + 'T12:00:00')) / 86400000);
  return n > 0 ? n : null;
}

// Hébergements où l'on dort LA NUIT du jour donné : check_in <= day < check_out
// (la nuit du check-out, on n'y dort plus). Plusieurs résultats possibles si
// des séjours se chevauchent (ex : deux hôtels réservés par des co-voyageurs
// différents) — on les affiche tous plutôt que d'en cacher un arbitrairement.
export function lodgingsForNight(lodgings, day) {
  return (lodgings || []).filter(l =>
    l.check_in && l.check_out && day >= l.check_in && day < l.check_out
  );
}

// Prix affiché "1 234,50 €" (ou "$1,234.50" en anglais) — le montant reçu est
// TOUJOURS en euros (devise canonique de stockage, voir src/lib/currency.js) :
// il est converti au taux fixe puis formaté dans la devise d'affichage choisie
// dans les paramètres. La locale d'affichage suit la langue active. Les
// composants appelants s'abonnent à useSettings() pour re-rendre au changement
// de devise.
export function formatPrice(n) {
  if (n == null || n === '' || isNaN(Number(n))) return '';
  return new Intl.NumberFormat(currentLocale(), { style: 'currency', currency: getCurrency() }).format(convertFromEur(Number(n)));
}

// Somme des coûts d'une liste (activités via `cost`, hébergements via `price`).
// Renvoie null — et non 0 — quand AUCUN élément n'a de coût renseigné : les
// totaux (jour, ville, voyage, impression) ne s'affichent que si l'utilisateur
// a commencé à saisir des prix, un "0 €" permanent sur chaque en-tête ne serait
// que du bruit. Un total de 0 € reste en revanche affiché s'il vient de coûts
// réellement saisis à 0 (activités gratuites notées volontairement).
export function sumCosts(items, key = 'cost') {
  let total = null;
  for (const it of items || []) {
    const raw = it?.[key];
    if (raw == null || raw === '' || isNaN(Number(raw))) continue;
    total = (total ?? 0) + Number(raw);
  }
  return total;
}

// ─── Distance estimée entre lieux consécutifs ────────────────────
// Distance à vol d'oiseau (haversine, réutilisée du k-means ci-dessous) — et
// RIEN de plus : on a renoncé à en déduire un temps de trajet. Convertir une
// distance en minutes suppose de deviner un mode de transport (marche, bus,
// tram...) et une vitesse moyenne, deux choses qu'aucune formule ne peut savoir
// à la place de l'utilisateur. Pire, le géocodage réduit un lieu à un seul
// point : pour un grand site (un palais, une place, un parc), la distance
// mesurée entre "points" dépend de l'entrée que le géocodeur a choisie et peut
// n'avoir aucun rapport avec la marche réelle (murs d'enceinte, contrôles de
// sécurité, sens de circulation). Une distance à vol d'oiseau reste un fait
// géométrique vérifiable ; un temps de trajet ne l'aurait été pour l'essentiel
// que par hasard.
const FAR_KM = 50; // au-delà, on suggère de prévoir un vrai trajet (train, avion…)

// null si l'un des deux lieux n'a pas de coordonnées (comportement dégradé :
// rien n'est affiché) ou s'ils sont quasi confondus. Sinon
// { far: bool, distanceKm }.
export function estimateTravel(actA, actB) {
  // `== null` et non un test falsy : 0 est une coordonnée valide (équateur,
  // méridien de Greenwich) — un test falsy ferait silencieusement disparaître
  // le trajet pour un lieu géocodé exactement à 0.
  if (actA?.place_lat == null || actA?.place_lng == null || actB?.place_lat == null || actB?.place_lng == null) return null;
  const distanceKm = haversineKm(actA.place_lat, actA.place_lng, actB.place_lat, actB.place_lng);
  if (distanceKm < 0.08) return null; // même lieu (à ~80 m près) : rien à afficher
  return { far: distanceKm > FAR_KM, distanceKm };
}

// Distance affichée : "650 m", "3,4 km" ("3.4 km" en anglais), "370 km".
export function formatTravelDistance(km) {
  if (km < 1) return `${Math.max(50, Math.round((km * 1000) / 50) * 50)} m`;
  if (km < 10) {
    const decimal = new Intl.NumberFormat(currentLocale(), { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(km);
    return `${decimal} km`;
  }
  return `${Math.round(km)} km`;
}

// Segments de trajet entre activités horodatées consécutives d'une même journée
// (déjà triées par visit_time). Renvoie une map { [idActivitéArrivée]: segment }
// pour que chaque vue affiche le connecteur juste au-dessus de l'activité
// d'arrivée. Partagé entre la vue par jour et le mode Jour J — jamais dupliqué.
// Pas d'alerte de conflit d'horaire ici : l'estimation (à vol d'oiseau + vitesse
// conventionnelle) n'est pas fiable au point de pouvoir reprocher à l'utilisateur
// un planning "trop juste" — beaucoup ne renseignent d'ailleurs qu'un créneau
// large (après-midi) sans heure précise, pour qui la notion même de "temps
// disponible entre deux activités" n'a pas de sens.
export function buildTravelSegments(sortedTimedActs) {
  const segments = {};
  for (let i = 1; i < sortedTimedActs.length; i++) {
    const from = sortedTimedActs[i - 1];
    const to = sortedTimedActs[i];
    // Les coordonnées d'un trajet (catégorie transport) désignent son point de
    // DÉPART : après lui, l'utilisateur est ailleurs — estimer la distance
    // depuis ces coordonnées serait faux, on ne relie donc jamais DEPUIS un
    // trajet (vers un trajet reste valable : c'est le chemin jusqu'à la gare).
    if (from.category === 'transport') continue;
    const est = estimateTravel(from, to);
    if (!est) continue;
    segments[to.id] = { from, est };
  }
  return segments;
}

// ─── String helpers ───────────────────────────────────────────────
export function normalizeStr(s) {
  return s.normalize('NFD').replace(/\p{Mn}/gu, '').toLowerCase();
}

// ─── API calls ────────────────────────────────────────────────────

const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

// Langues supportées par Geoapify pour lesquelles OSM a une bonne couverture
// de traductions, avec repli sur l'anglais qui a la meilleure couverture
// mondiale de traductions de noms de lieux sur OSM.
const SUPPORTED_GEO_LANGS = ['en', 'fr', 'de', 'es', 'it', 'pt', 'nl', 'ru', 'zh', 'ja', 'ko'];
function detectGeoLang() {
  if (typeof navigator === 'undefined') return 'en';
  const codes = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const code of codes) {
    const short = (code || '').slice(0, 2).toLowerCase();
    if (SUPPORTED_GEO_LANGS.includes(short)) return short;
  }
  return 'en';
}
// Recalculée à chaque appel (pas une const figée au chargement du module) :
// doit suivre la langue choisie via le widget de la topbar planif, pas
// seulement la langue du navigateur au premier chargement.
function currentGeoLang() {
  return SUPPORTED_GEO_LANGS.includes(i18n.language) ? i18n.language : detectGeoLang();
}

// Dérive le code pays alpha-2 (attendu par le paramètre `filter=countrycode:`
// de Geoapify) depuis l'emoji drapeau d'un pays (paire d'indicateurs
// régionaux Unicode) — même technique que le lookup alpha-2 dans
// src/data/index.js et ProfilePanel.jsx.
export function countryAlpha2FromEmoji(emoji) {
  const chars = [...(emoji || '')];
  if (chars.length < 2) return null;
  return chars.slice(0, 2).map((c) => String.fromCharCode(c.codePointAt(0) - 0x1F1E6 + 65)).join('').toLowerCase();
}

// `countryAlpha2` restreint la recherche à un pays (paramètre `filter` de
// Geoapify) : sans ça, un nom de lieu ambigu (ex. "The Bund", qui existe aussi
// comme toponyme aux États-Unis) peut renvoyer un résultat dans le mauvais
// pays, silencieusement accepté si son nom correspond au texte recherché.
export async function fetchPlaceSuggestions(query, cityHint, countryAlpha2) {
  if (query.length < 2) return [];
  const q = cityHint ? `${query} ${cityHint}` : query;
  try {
    const filterParam = countryAlpha2 ? `&filter=countrycode:${countryAlpha2}` : '';
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(q)}&lang=${currentGeoLang()}&limit=8${filterParam}&apiKey=${GEOAPIFY_API_KEY}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.features || []).slice(0, 8).map(f => {
      const p = f.properties;
      const name = p.name || p.address_line1 || p.formatted.split(',')[0];
      const city = p.city || p.town || p.village || p.suburb || '';
      const country = p.country || '';
      return {
        name,
        subtitle: [city, country].filter(Boolean).join(', '),
        lat: p.lat,
        lng: p.lon,
        address: p.formatted,
      };
    });
  } catch {
    return [];
  }
}

export async function fetchCitySuggestions(query) {
  if (query.length < 2) return [];
  try {
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&lang=${currentGeoLang()}&type=city&limit=12&apiKey=${GEOAPIFY_API_KEY}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.features || [])
      .map(f => {
        const p = f.properties;
        // address_line1 est le nom précis du lieu trouvé par Geoapify (ex : "Gubeikou").
        // city/town/village ne sont que le conteneur administratif parent (ex : "Miyun
        // District") — les utiliser en priorité afficherait la mauvaise localité.
        const name = p.name || p.address_line1 || p.city || p.town || p.village || p.formatted?.split(',')[0];
        return name ? { name, country: p.country || '' } : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

// ─── Clustering géographique (k-means) ───────────────────────────
function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function kMeansActivities(points, k) {
  if (!points.length) return [];
  k = Math.min(k, points.length);

  // Initialisation par "farthest-point sampling" : le 1er centre est le 1er point,
  // chaque centre suivant est le point le plus éloigné de tous les centres déjà choisis.
  // Évite qu'une initialisation malchanceuse (points de départ proches) fasse
  // converger vers un cluster vide.
  const chosen = [points[0]];
  while (chosen.length < k) {
    let best = null, bestDist = -1;
    for (const p of points) {
      const minDistToChosen = Math.min(...chosen.map(c => haversineKm(p.lat, p.lng, c.lat, c.lng)));
      if (minDistToChosen > bestDist) { bestDist = minDistToChosen; best = p; }
    }
    chosen.push(best);
  }
  let centroids = chosen.map(p => ({ lat: p.lat, lng: p.lng }));

  for (let iter = 0; iter < 40; iter++) {
    let assignments = points.map(p => {
      let minD = Infinity, minIdx = 0;
      centroids.forEach((c, i) => { const d = haversineKm(p.lat, p.lng, c.lat, c.lng); if (d < minD) { minD = d; minIdx = i; } });
      return minIdx;
    });

    // Répare les clusters vides : vole le point le plus éloigné du plus gros cluster
    for (let ci = 0; ci < k; ci++) {
      if (assignments.some(a => a === ci)) continue;
      const counts = Array.from({ length: k }, (_, i) => assignments.filter(a => a === i).length);
      const donorCluster = counts.indexOf(Math.max(...counts));
      let farIdx = -1, farDist = -1;
      points.forEach((p, pi) => {
        if (assignments[pi] !== donorCluster) return;
        const d = haversineKm(p.lat, p.lng, centroids[donorCluster].lat, centroids[donorCluster].lng);
        if (d > farDist) { farDist = d; farIdx = pi; }
      });
      if (farIdx >= 0) assignments[farIdx] = ci;
    }

    const newC = Array.from({ length: k }, (_, ci) => {
      const pts = points.filter((_, pi) => assignments[pi] === ci);
      if (!pts.length) return centroids[ci];
      return { lat: pts.reduce((s, p) => s + p.lat, 0) / pts.length, lng: pts.reduce((s, p) => s + p.lng, 0) / pts.length };
    });
    const moved = newC.some((c, i) => Math.abs(c.lat - centroids[i].lat) > 0.0001 || Math.abs(c.lng - centroids[i].lng) > 0.0001);
    centroids = newC;
    if (!moved) break;
  }
  return points.map(p => {
    let minD = Infinity, minIdx = 0;
    centroids.forEach((c, i) => { const d = haversineKm(p.lat, p.lng, c.lat, c.lng); if (d < minD) { minD = d; minIdx = i; } });
    return { ...p, cluster: minIdx };
  });
}

// ─── Export trip as plain text ────────────────────────────────────
export function exportTripAsText({ trip, destinations, cities, activities }) {
  const lines = [];
  lines.push(`✈️ ${trip.title}`);
  const dur = tripDurationDays(trip.start_date, trip.end_date);
  if (dur) {
    const durationLabel = i18n.t('export.durationDays', { ns: 'planning', count: dur });
    lines.push(`📅 ${formatDate(trip.start_date)} → ${formatDate(trip.end_date)} (${durationLabel})`);
  } else if (trip.start_date || trip.end_date) {
    lines.push(`📅 ${formatDate(trip.start_date) || '?'} → ${formatDate(trip.end_date) || '?'}`);
  }
  if (trip.notes?.trim()) {
    lines.push('');
    lines.push(`📝 ${trip.notes.trim()}`);
  }
  lines.push('');

  const sortedDests = [...destinations].sort((a, b) => a.position - b.position);
  for (const dest of sortedDests) {
    lines.push(`═══ ${dest.country_name} ═══`);
    const destCities = cities
      .filter(c => c.destination_id === dest.id)
      .sort((a, b) => a.position - b.position);
    for (const city of destCities) {
      lines.push(`  🏙 ${city.name}`);
      const cityActivities = activities
        .filter(a => a.city_id === city.id)
        .sort((a, b) => {
          if (a.visit_time && b.visit_time) return a.visit_time.localeCompare(b.visit_time);
          return a.position - b.position;
        });
      for (const act of cityActivities) {
        const cat = ACTIVITY_CATEGORIES[act.category]?.icon || '📍';
        const time = act.visit_time ? ` [${act.visit_time}]` : '';
        const date = act.visit_date ? ` (${formatDateShort(act.visit_date)})` : '';
        lines.push(`    ${cat} ${act.name}${time}${date}`);
        if (act.description) lines.push(`       ↳ ${act.description}`);
      }
    }
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}
