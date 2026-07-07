// Suggère jusqu'à 5 modèles de planning (planning-modèle communautaire,
// branche planModel) pour une ville et un nombre de jours donnés, triés par
// popularité (nombre d'imports). Le matching de ville est insensible à la
// langue : on géocode la ville demandée et on compare par proximité de
// coordonnées (voir api/_lib/cityGeocode.js) plutôt que par égalité de texte
// — "Pékin" et "Beijing" pointent vers les mêmes modèles.
//
// Chaque modèle peut inclure des excursions à la journée rattachées
// (parent_template_id, voir supabase/planning_modele_v5.sql) : partagées en
// même temps que leur ville de base, elles sont retournées imbriquées
// (`daytrips`) pour être importées avec elle plutôt que jamais reprises.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { resolveCityCoordinates, distanceKm, SAME_CITY_RADIUS_KM } from './_lib/cityGeocode.js';

const MAX_RESULTS = 5;

// Regroupe les jours + activités d'un ensemble de modèles (utilisé aussi bien
// pour les modèles principaux que pour leurs excursions rattachées).
async function fetchDaysByTemplate(admin, templateIds) {
  if (!templateIds.length) return {};
  const { data: days } = await admin
    .from('trip_template_days')
    .select('id, template_id, day_index')
    .in('template_id', templateIds)
    .order('day_index', { ascending: true });

  const dayIds = (days || []).map((d) => d.id);
  const { data: activities } = dayIds.length
    ? await admin
        .from('trip_template_activities')
        .select('id, template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position')
        .in('template_day_id', dayIds)
        .order('position', { ascending: true })
    : { data: [] };

  const activitiesByDay = {};
  for (const a of activities || []) {
    (activitiesByDay[a.template_day_id] ||= []).push(a);
  }
  const daysByTemplate = {};
  for (const d of days || []) {
    (daysByTemplate[d.template_id] ||= []).push({ dayIndex: d.day_index, activities: activitiesByDay[d.id] || [] });
  }
  return daysByTemplate;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, reason: 'Méthode non autorisée.' });
  }

  let admin;
  try { admin = getAdminClient(); } catch {
    return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const { authToken, countryCode, cityName, countryAlpha2, plannedDays } = body;

  if (!countryCode || !cityName || !plannedDays) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) {
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  const coords = await resolveCityCoordinates(admin, { countryCode, cityName, countryAlpha2 });
  if (!coords) {
    return res.status(200).json({ ok: true, templates: [] });
  }

  // parent_template_id IS NULL : seules les villes de base sont proposées en
  // suggestion principale — une excursion ne se recherche pas pour
  // elle-même, elle est reprise avec sa ville de base (voir plus bas).
  //
  // Tolérance de ±1 jour sur nb_days (pas d'égalité stricte) : nb_days est
  // calculé à partir du nombre de jours RÉELLEMENT activités (voir
  // api/share-trip-templates.js), donc un jour sans activité au milieu du
  // séjour (jour de repos/transport) le fait apparaître un jour plus court
  // que la durée déclarée par le voyageur d'origine — un modèle par ailleurs
  // pertinent pour un utilisateur qui déclare le bon nombre de jours ne doit
  // pas être exclu pour un écart d'un jour.
  const { data: candidates } = await admin
    .from('trip_templates')
    .select('id, city_name, city_lat, city_lng, nb_days, uses_count, likes_count')
    .eq('country_code', countryCode)
    .eq('is_public', true)
    .gte('nb_days', plannedDays - 1)
    .lte('nb_days', plannedDays + 1)
    .is('parent_template_id', null);

  const nearby = (candidates || [])
    .filter((t) => distanceKm(coords.lat, coords.lng, t.city_lat, t.city_lng) <= SAME_CITY_RADIUS_KM)
    // Correspondance exacte du nombre de jours d'abord, puis popularité.
    .sort((a, b) => Math.abs(a.nb_days - plannedDays) - Math.abs(b.nb_days - plannedDays) || b.uses_count - a.uses_count)
    .slice(0, MAX_RESULTS);

  if (!nearby.length) {
    return res.status(200).json({ ok: true, templates: [] });
  }

  const templateIds = nearby.map((t) => t.id);
  const daysByTemplate = await fetchDaysByTemplate(admin, templateIds);

  const { data: childTemplates } = await admin
    .from('trip_templates')
    .select('id, city_name, nb_days, day_offset, parent_template_id')
    .eq('is_public', true)
    .in('parent_template_id', templateIds);

  const childDaysByTemplate = await fetchDaysByTemplate(admin, (childTemplates || []).map((c) => c.id));
  const childrenByParent = {};
  for (const c of childTemplates || []) {
    (childrenByParent[c.parent_template_id] ||= []).push({
      id: c.id,
      cityName: c.city_name,
      nbDays: c.nb_days,
      dayOffset: c.day_offset,
      days: childDaysByTemplate[c.id] || [],
    });
  }

  const templates = nearby.map((t) => ({
    id: t.id,
    cityName: t.city_name,
    nbDays: t.nb_days,
    usesCount: t.uses_count,
    likesCount: t.likes_count,
    days: daysByTemplate[t.id] || [],
    daytrips: childrenByParent[t.id] || [],
  }));

  return res.status(200).json({ ok: true, templates });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
