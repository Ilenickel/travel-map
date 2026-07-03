import { ACTIVITY_CATEGORIES, TRANSPORT_MODES } from './planningUtils';

// ─── Export iCal (.ics) ────────────────────────────────────────────
// Un seul événement par activité *planifiée* (visit_date renseignée) : les
// lieux encore dans "Non planifiées" n'ont pas de date et n'ont donc pas de
// sens dans un agenda. Heures en UTC (suffixe Z), converties depuis l'heure
// locale du navigateur au moment de l'export : un DTSTART "flottant" (sans
// TZID ni Z) est rejeté par l'import en masse de Google Agenda pour une
// partie des événements ("tous les évènements ne sont pas ajoutés"), alors
// qu'un horaire UTC explicite est accepté sans ambiguïté par tous les agendas.
const DEFAULT_EVENT_MINUTES = 60;

function pad(n) { return String(n).padStart(2, '0'); }

function icsDateStamp(d) {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}

// "2026-07-03" -> "20260703"
function icsDate(dateStr) {
  return dateStr.replaceAll('-', '');
}

// "2026-07-03" + "14:00" (+durée en minutes) -> "20260703T120000Z" (UTC)
function icsDateTime(dateStr, timeStr, addMinutes = 0) {
  const [h, m] = timeStr.slice(0, 5).split(':').map(Number);
  const dt = new Date(dateStr + 'T00:00:00'); // construit en heure locale du navigateur
  dt.setHours(h, m + addMinutes, 0, 0);
  return `${dt.getUTCFullYear()}${pad(dt.getUTCMonth() + 1)}${pad(dt.getUTCDate())}T${pad(dt.getUTCHours())}${pad(dt.getUTCMinutes())}${pad(dt.getUTCSeconds())}Z`;
}

// +1 jour calendaire pour la borne de fin (exclusive) d'un événement "jour entier"
function icsNextDate(dateStr) {
  const dt = new Date(dateStr + 'T00:00:00');
  dt.setDate(dt.getDate() + 1);
  return `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}`;
}

// RFC 5545 §3.3.11 : échapper \ ; , et les retours à la ligne
function icsEscape(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

// RFC 5545 §3.1 : replier les lignes de plus de 75 octets avec CRLF + espace.
// Découpage par unité UTF-16 (approximation raisonnable, les lecteurs de calendrier
// sont tolérants sur le décompte exact) — mais jamais au milieu d'une paire de
// substituts, sous peine de couper un emoji en deux et de le corrompre (U+FFFD).
function foldIcsLine(line) {
  if (line.length <= 74) return line;
  const chunks = [];
  let i = 0;
  while (i < line.length) {
    let end = Math.min(i + (i === 0 ? 74 : 73), line.length);
    const code = line.charCodeAt(end - 1);
    if (code >= 0xd800 && code <= 0xdbff) end -= 1; // substitut haut : reculer d'un cran
    chunks.push((i === 0 ? '' : ' ') + line.slice(i, end));
    i = end;
  }
  return chunks.join('\r\n');
}

function buildEvent(act, cityName) {
  const cat = ACTIVITY_CATEGORIES[act.category] || ACTIVITY_CATEGORIES.other;
  const isTransport = act.category === 'transport';
  const icon = isTransport ? (TRANSPORT_MODES[act.transport_mode]?.icon || cat.icon) : cat.icon;

  const lines = ['BEGIN:VEVENT', `UID:${act.id}@triply-planning`, `DTSTAMP:${icsDateStamp(new Date())}`];

  if (act.visit_time) {
    const durationMin = act.duration_minutes || DEFAULT_EVENT_MINUTES;
    lines.push(`DTSTART:${icsDateTime(act.visit_date, act.visit_time)}`);
    lines.push(`DTEND:${icsDateTime(act.visit_date, act.visit_time, durationMin)}`);
  } else {
    lines.push(`DTSTART;VALUE=DATE:${icsDate(act.visit_date)}`);
    lines.push(`DTEND;VALUE=DATE:${icsNextDate(act.visit_date)}`);
  }

  lines.push(`SUMMARY:${icsEscape(`${icon} ${act.name}`)}`);
  if (cityName) lines.push(`LOCATION:${icsEscape(cityName)}`);
  if (act.description?.trim()) lines.push(`DESCRIPTION:${icsEscape(act.description.trim())}`);
  lines.push('END:VEVENT');
  return lines;
}

// Séjour à l'hôtel : un seul événement "jour entier" couvrant tout le séjour
// (l'agenda affiche alors un bandeau continu du check-in au check-out), plutôt
// qu'un événement par nuit qui noierait le calendrier.
function buildLodgingEvent(l, cityName) {
  const lines = ['BEGIN:VEVENT', `UID:${l.id}@triply-planning`, `DTSTAMP:${icsDateStamp(new Date())}`];
  lines.push(`DTSTART;VALUE=DATE:${icsDate(l.check_in)}`);
  // DTEND "jour entier" est exclusif : +1 jour pour que le bandeau couvre
  // aussi le jour du check-out (matinée de départ comprise).
  lines.push(`DTEND;VALUE=DATE:${icsNextDate(l.check_out)}`);
  lines.push(`SUMMARY:${icsEscape(`🏨 ${l.name}`)}`);
  const location = l.address || cityName;
  if (location) lines.push(`LOCATION:${icsEscape(location)}`);
  const descParts = [];
  if (l.notes?.trim()) descParts.push(l.notes.trim());
  if (l.booking_url) descParts.push(`Réservation : ${l.booking_url}`);
  if (descParts.length) lines.push(`DESCRIPTION:${icsEscape(descParts.join('\n'))}`);
  lines.push('END:VEVENT');
  return lines;
}

export function buildTripIcs({ trip, cities, activities, lodgings }) {
  // Un agenda sert à préparer ce qu'il reste à faire : une activité déjà cochée
  // "faite" n'a plus sa place dans l'export, plutôt que d'y réapparaître comme
  // une tâche encore à faire.
  const planned = activities.filter(a => a.visit_date && !a.is_done);
  // Un hébergement sans ses deux dates ne peut pas devenir un événement daté
  const datedLodgings = (lodgings || []).filter(l => l.check_in && l.check_out);
  const cityById = {};
  cities.forEach(c => { cityById[c.id] = c; });

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Triply//Planification de voyage//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${icsEscape(trip?.title || 'Mon voyage')}`,
  ];

  for (const act of planned) {
    lines.push(...buildEvent(act, cityById[act.city_id]?.name));
  }
  for (const l of datedLodgings) {
    lines.push(...buildLodgingEvent(l, cityById[l.city_id]?.name));
  }
  lines.push('END:VCALENDAR');

  return lines.map(foldIcsLine).join('\r\n') + '\r\n';
}

function sanitizeFilename(name) {
  return (name || 'voyage').trim().replace(/[\\/:*?"<>|]+/g, '-').slice(0, 80);
}

export function downloadTripIcs({ trip, cities, activities, lodgings }) {
  const ics = buildTripIcs({ trip, cities, activities, lodgings });
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${sanitizeFilename(trip?.title)}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
