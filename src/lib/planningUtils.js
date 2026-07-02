import { COUNTRIES } from '../data/index';

// ─── Country list (sorted, fr) ────────────────────────────────────
export const ALL_COUNTRIES = Object.entries(COUNTRIES)
  .map(([code, c]) => ({ code, name: c.name, emoji: c.emoji || '🌍' }))
  .sort((a, b) => a.name.localeCompare(b.name, 'fr'));

// ─── Activity categories ──────────────────────────────────────────
export const ACTIVITY_CATEGORIES = {
  visit:     { label: 'Visite',       icon: '🏛️', color: '#6366f1' },
  food:      { label: 'Restauration', icon: '🍽️', color: '#f59e0b' },
  hotel:     { label: 'Hébergement',  icon: '🏨', color: '#10b981' },
  transport: { label: 'Transport',    icon: '✈️', color: '#3b82f6' },
  nature:    { label: 'Nature',       icon: '🌿', color: '#22c55e' },
  beach:     { label: 'Plage',        icon: '🏖️', color: '#06b6d4' },
  shopping:  { label: 'Shopping',     icon: '🛍️', color: '#ec4899' },
  night:     { label: 'Soirée',       icon: '🌙', color: '#8b5cf6' },
  other:     { label: 'Autre',        icon: '📍', color: '#64748b' },
};

// ─── Modes de transport (trajets) ─────────────────────────────────
export const TRANSPORT_MODES = {
  voiture: { label: 'Voiture', icon: '🚗' },
  train:   { label: 'Train',   icon: '🚆' },
  avion:   { label: 'Avion',   icon: '✈️' },
  metro:   { label: 'Métro',   icon: '🚇' },
  bus:     { label: 'Bus',     icon: '🚌' },
  bateau:  { label: 'Bateau',  icon: '⛴️' },
  velo:    { label: 'Vélo',    icon: '🚲' },
  marche:  { label: 'Marche',  icon: '🚶' },
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
export function formatDate(d) {
  if (!d) return '';
  return new Date(d + 'T12:00:00').toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

export function formatDateShort(d) {
  if (!d) return '';
  return new Date(d + 'T12:00:00').toLocaleDateString('fr-FR', {
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
  return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
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

// ─── String helpers ───────────────────────────────────────────────
export function normalizeStr(s) {
  return s.normalize('NFD').replace(/\p{Mn}/gu, '').toLowerCase();
}

// ─── API calls ────────────────────────────────────────────────────

const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

// Langues supportées par Geoapify pour lesquelles OSM a une bonne couverture
// de traductions. On suit la langue du navigateur du visiteur (et non une
// langue fixe), avec repli sur l'anglais qui a la meilleure couverture
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
const GEO_LANG = detectGeoLang();

export async function fetchPlaceSuggestions(query, cityHint) {
  if (query.length < 2) return [];
  const q = cityHint ? `${query} ${cityHint}` : query;
  try {
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(q)}&lang=${GEO_LANG}&limit=8&apiKey=${GEOAPIFY_API_KEY}`;
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
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&lang=${GEO_LANG}&type=city&limit=12&apiKey=${GEOAPIFY_API_KEY}`;
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
    lines.push(`📅 ${formatDate(trip.start_date)} → ${formatDate(trip.end_date)} (${dur} jour${dur > 1 ? 's' : ''})`);
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
