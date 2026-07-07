// Planning-modèle communautaire : partage, suggestion et import de plannings
// de voyage réutilisables (voir supabase/planning_modele*.sql). Regroupé en
// UN SEUL fichier serverless (au lieu de 3) pour rester sous la limite de 12
// fonctions du plan Hobby de Vercel — dispatché sur `body.action`.
//
// Un modèle par ville de base éligible (celle avec planned_days renseigné et
// au moins une activité) : copie figée et anonymisée, jamais un lien live
// vers le voyage source — dates réelles, coût, notes, membres et
// hébergements ne sont jamais copiés, seuls les jours relatifs (day_index)
// et les activités/lieux le sont.
//
// Les excursions à la journée (is_daytrip, parent_city_id) rattachées à une
// ville de base partagée sont incluses automatiquement — sans que
// l'utilisateur ait à leur renseigner un nombre de jours ou une date de
// début : le décalage (parent_template_id + day_offset) est calculé
// directement à partir des VRAIES dates où l'excursion a été planifiée,
// jamais à partir d'une métadonnée séparée qui pourrait ne plus correspondre
// à ce que l'utilisateur a réellement glissé sur son calendrier.
import { getAdminClient, verifyUser, verifyTripAccess } from './_lib/supabaseAdmin.js';
import { resolveCityCoordinates, distanceKm, SAME_CITY_RADIUS_KM } from './_lib/cityGeocode.js';

const BUCKET = 'trip-attachments';
const MAX_SUGGEST_RESULTS = 5;

// Découpe une heure "HH:MM:SS"/"HH:MM" en créneau relatif de la journée. Ne
// produit que 3 créneaux (matin/apres-midi/soir), pas 4 : le vrai calendrier
// (DayView.jsx SLOTS) n'a lui-même que 3 créneaux (0-12/12-18/18-24) — un
// 4e créneau "nuit" dans l'aperçu du modèle ferait visuellement mentir la
// popup de suggestion par rapport à où l'activité atterrit une fois importée.
function timeSlotFor(visitTime) {
  if (!visitTime) return 'matin';
  const hour = parseInt(visitTime.slice(0, 2), 10);
  if (hour < 12) return 'matin';
  if (hour < 18) return 'apres-midi';
  return 'soir';
}

// Heure représentative par créneau, pour que l'activité se place dans le bon
// créneau visuel du calendrier à l'import (même 3 créneaux que ci-dessus).
const SLOT_TIME = { matin: '09:00', 'apres-midi': '14:00', soir: '19:00' };

function daysBetween(a, b) {
  return Math.round((new Date(`${b}T00:00:00Z`) - new Date(`${a}T00:00:00Z`)) / 86400000);
}

function addDays(dateStr, n) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

// ════════════════════════════════════════════════════════════════
// action: 'share'
// ════════════════════════════════════════════════════════════════
async function handleShare(admin, user, body, res) {
  // destinationAlpha2 : { [destinationId]: 'jp' } — calculé côté client depuis
  // l'emoji drapeau (countryAlpha2FromEmoji, voir planningUtils.js), car le
  // country_code stocké en base est un slug interne ("japan"), pas un code
  // ISO alpha-2 — même distinction que api/geocode-place.js.
  const { tripId, destinationAlpha2 = {} } = body;
  if (!tripId) return res.status(400).json({ ok: false, reason: 'Requête invalide.' });

  // Accepte le propriétaire OU un membre invité (trip_members) : un voyage à
  // plusieurs donne aux membres un accès en écriture complet (RLS), le
  // partage doit être possible pour n'importe lequel d'entre eux.
  const trip = await verifyTripAccess(admin, tripId, user.id);
  if (!trip) return res.status(404).json({ ok: false, reason: 'Voyage introuvable.' });

  const { data: destinations } = await admin
    .from('trip_destinations')
    .select('id, country_code, country_name')
    .eq('trip_id', tripId);
  const destById = Object.fromEntries((destinations || []).map((d) => [d.id, d]));

  const { data: baseCities } = await admin
    .from('trip_cities')
    .select('id, destination_id, name, planned_days')
    .eq('trip_id', tripId)
    .is('parent_city_id', null)
    .not('planned_days', 'is', null);

  const { data: daytripCities } = await admin
    .from('trip_cities')
    .select('id, destination_id, name, parent_city_id')
    .eq('trip_id', tripId)
    .not('parent_city_id', 'is', null);

  const sharedCities = [];
  const skippedCities = [];

  // Partage le contenu d'une ville (base ou excursion) : géocodage, upsert du
  // modèle, remplacement atomique des jours/activités (RPC
  // replace_template_content, voir supabase/planning_modele_v6.sql — évite la
  // condition de course d'un DELETE+INSERT en plusieurs appels séparés).
  //
  // `isDaytrip` : les excursions sont géocodées SANS filtre "type=city" — leur
  // nom est souvent un monument/site (ex. "Grande Muraille"), pas une ville
  // administrative, et le filtre `type=city` de Geoapify échoue silencieusement
  // dessus (voir api/_lib/cityGeocode.js).
  async function shareCity(city, isDaytrip) {
    const destination = destById[city.destination_id];
    if (!destination) { skippedCities.push({ cityName: city.name, reason: 'destination_missing' }); return null; }

    const { data: activities } = await admin
      .from('trip_activities')
      .select('name, description, visit_date, visit_time, category, place_lat, place_lng, place_address, position')
      .eq('city_id', city.id)
      .order('position', { ascending: true });

    if (!activities || !activities.length) { skippedCities.push({ cityName: city.name, reason: 'no_activities' }); return null; }

    const coords = await resolveCityCoordinates(admin, {
      countryCode: destination.country_code,
      cityName: city.name,
      countryAlpha2: destinationAlpha2[city.destination_id] || null,
      restrictToCity: !isDaytrip,
    });
    if (!coords) { skippedCities.push({ cityName: city.name, reason: 'not_geocoded' }); return null; }

    // Jours relatifs : les dates réelles (visit_date) triées définissent
    // l'ordre, les activités sans visit_date (non planifiées) sont ignorées.
    const dated = activities.filter((a) => a.visit_date);
    if (!dated.length) { skippedCities.push({ cityName: city.name, reason: 'no_dated_activities' }); return null; }
    const sortedDates = [...new Set(dated.map((a) => a.visit_date))].sort();
    const dayIndexByDate = Object.fromEntries(sortedDates.map((d, i) => [d, i + 1]));

    // Upsert sur (source_trip_id, country_code, city_name) — voir
    // supabase/planning_modele_v3.sql : un re-partage doit mettre à jour le
    // même modèle, jamais en créer un doublon. uses_count n'est volontairement
    // pas réinitialisé : un re-partage reflète un contenu mis à jour, pas une
    // nouvelle popularité.
    const { data: template, error: templateError } = await admin
      .from('trip_templates')
      .upsert({
        source_trip_id: tripId,
        created_by: user.id,
        country_code: destination.country_code,
        city_name: city.name,
        city_lat: coords.lat,
        city_lng: coords.lng,
        nb_days: sortedDates.length,
        is_public: true,
      }, { onConflict: 'source_trip_id,country_code,city_name', ignoreDuplicates: false })
      .select('id')
      .single();
    if (templateError) { console.error('[trip-templates:share] upsert template:', templateError); return null; }

    const days = sortedDates.map((date) => ({
      day_index: dayIndexByDate[date],
      activities: dated
        .filter((a) => a.visit_date === date)
        .map((a) => ({
          name: a.name,
          description: a.description,
          time_slot: timeSlotFor(a.visit_time),
          category: a.category || 'other',
          place_lat: a.place_lat,
          place_lng: a.place_lng,
          place_address: a.place_address,
          position: a.position,
        })),
    }));
    const { error: contentError } = await admin.rpc('replace_template_content', { p_template_id: template.id, p_days: days });
    if (contentError) { console.error('[trip-templates:share] replace_template_content:', contentError); return null; }

    sharedCities.push({ cityName: city.name, templateId: template.id, nbDays: sortedDates.length });
    return { templateId: template.id, firstDate: sortedDates[0] };
  }

  const cityShareInfo = {};
  const baseResults = await Promise.all((baseCities || []).map((city) => shareCity(city, false)));
  (baseCities || []).forEach((city, i) => { if (baseResults[i]) cityShareInfo[city.id] = baseResults[i]; });

  const eligibleDaytrips = (daytripCities || []).filter((d) => cityShareInfo[d.parent_city_id]);
  const daytripResults = await Promise.all(eligibleDaytrips.map((d) => shareCity(d, true)));
  await Promise.all(eligibleDaytrips.map(async (daytrip, i) => {
    const info = daytripResults[i];
    if (!info) return;
    const parentInfo = cityShareInfo[daytrip.parent_city_id];
    const dayOffset = daysBetween(parentInfo.firstDate, info.firstDate);
    const { error: linkError } = await admin
      .from('trip_templates')
      .update({ parent_template_id: parentInfo.templateId, day_offset: dayOffset })
      .eq('id', info.templateId);
    if (linkError) console.error('[trip-templates:share] link daytrip to parent:', linkError);
  }));

  // Ne marque PAS trips.share_prompt_answered ici : ce champ signale que
  // l'utilisateur a explicitement répondu à la popup de fin de voyage (voir
  // useEndTripSharePrompt.js), pas qu'un partage (manuel ou automatique) a eu
  // lieu — sinon un partage silencieux (auto_share_template) supprimerait la
  // popup pour tous les autres membres d'un voyage à plusieurs.

  return res.status(200).json({ ok: true, sharedCities, skippedCities });
}

// ════════════════════════════════════════════════════════════════
// action: 'suggest'
// ════════════════════════════════════════════════════════════════

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

async function handleSuggest(admin, body, res) {
  const { countryCode, cityName, countryAlpha2, plannedDays } = body;
  if (!countryCode || !cityName || !plannedDays) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const coords = await resolveCityCoordinates(admin, { countryCode, cityName, countryAlpha2 });
  if (!coords) return res.status(200).json({ ok: true, templates: [] });

  // parent_template_id IS NULL : seules les villes de base sont proposées en
  // suggestion principale — une excursion ne se recherche pas pour
  // elle-même, elle est reprise avec sa ville de base (voir plus bas).
  //
  // Tolérance de ±1 jour sur nb_days (pas d'égalité stricte) : nb_days est
  // calculé à partir du nombre de jours RÉELLEMENT activités, donc un jour
  // sans activité au milieu du séjour le fait apparaître un jour plus court
  // que la durée déclarée par le voyageur d'origine.
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
    .slice(0, MAX_SUGGEST_RESULTS);

  if (!nearby.length) return res.status(200).json({ ok: true, templates: [] });

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

// ════════════════════════════════════════════════════════════════
// action: 'import'
// ════════════════════════════════════════════════════════════════

async function fetchTemplateDaysAndActivities(admin, templateId) {
  const { data: days } = await admin
    .from('trip_template_days')
    .select('id, day_index')
    .eq('template_id', templateId)
    .order('day_index', { ascending: true });

  const dayIds = (days || []).map((d) => d.id);
  const { data: activities } = dayIds.length
    ? await admin
        .from('trip_template_activities')
        .select('template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position')
        .in('template_day_id', dayIds)
        .order('position', { ascending: true })
    : { data: [] };

  const dayIndexById = Object.fromEntries((days || []).map((d) => [d.id, d.day_index]));
  return (activities || []).map((a) => ({ ...a, dayIndex: dayIndexById[a.template_day_id] }));
}

// Insère les activités d'un modèle dans une ville (existante ou tout juste
// créée pour une excursion) — startDate peut être null (activités laissées
// "non planifiées").
async function importActivitiesInto(admin, { tripId, cityId, activities, startDate }) {
  const rows = activities.map((a) => {
    const visitDate = startDate ? addDays(startDate, a.dayIndex - 1) : null;
    return {
      trip_id: tripId,
      city_id: cityId,
      name: a.name,
      description: a.description,
      visit_date: visitDate,
      visit_time: visitDate ? SLOT_TIME[a.time_slot] || null : null,
      category: a.category || 'other',
      position: a.position,
      place_lat: a.place_lat,
      place_lng: a.place_lng,
      place_address: a.place_address,
    };
  });
  if (rows.length) await admin.from('trip_activities').insert(rows);
  return rows.length;
}

// Nettoie les fichiers Storage des activités qu'on s'apprête à supprimer,
// AVANT la suppression SQL — depuis planning_tables_v13.sql, Storage bloque
// tout DELETE direct sur storage.objects, donc c'est le seul moment où les
// chemins de fichiers (trip_attachments.file_path) sont encore accessibles
// avant que la suppression des activités ne les fasse disparaître en
// cascade. Version admin (service role) de src/lib/attachments.js
// cleanupAttachmentsStorage, utilisable depuis une fonction serveur.
async function cleanupActivityAttachments(admin, activityIds) {
  if (!activityIds.length) return;
  const { data, error } = await admin.from('trip_attachments').select('file_path').in('activity_id', activityIds);
  if (error) { console.error('[trip-templates:import] read attachments:', error); return; }
  if (!data?.length) return;
  const { error: rmErr } = await admin.storage.from(BUCKET).remove(data.map((r) => r.file_path));
  if (rmErr) console.error('[trip-templates:import] remove attachments:', rmErr);
}

async function handleImport(admin, user, body, res) {
  const { tripId, cityId, templateId } = body;
  if (!tripId || !cityId || !templateId) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  // Accepte le propriétaire OU un membre invité (trip_members).
  const trip = await verifyTripAccess(admin, tripId, user.id);
  if (!trip) return res.status(404).json({ ok: false, reason: 'Voyage introuvable.' });

  const { data: city } = await admin
    .from('trip_cities')
    .select('id, destination_id, start_date')
    .eq('id', cityId)
    .eq('trip_id', tripId)
    .maybeSingle();
  if (!city) return res.status(404).json({ ok: false, reason: 'Ville introuvable.' });

  const { data: template } = await admin.from('trip_templates').select('id').eq('id', templateId).maybeSingle();
  if (!template) return res.status(404).json({ ok: false, reason: 'Modèle introuvable.' });

  const { data: existingActivities } = await admin.from('trip_activities').select('id').eq('city_id', cityId);
  await cleanupActivityAttachments(admin, (existingActivities || []).map((a) => a.id));

  const { error: deleteError } = await admin.from('trip_activities').delete().eq('city_id', cityId);
  if (deleteError) {
    console.error('[trip-templates:import] delete existing:', deleteError);
    return res.status(500).json({ ok: false, reason: "L'import a échoué." });
  }

  const activities = await fetchTemplateDaysAndActivities(admin, templateId);
  const importedCount = await importActivitiesInto(admin, { tripId, cityId, activities, startDate: city.start_date });

  // Excursions rattachées à ce modèle : chacune devient une nouvelle
  // ville-excursion attachée à la ville importée. Elle ne reçoit PAS de
  // planned_days/start_date propres (ces champs n'existent plus dans l'UI
  // des excursions) : les y écrire créerait une valeur figée que rien ne peut
  // plus corriger si l'utilisateur déplace ensuite les activités.
  const { data: children } = await admin
    .from('trip_templates')
    .select('id, city_name, day_offset')
    .eq('parent_template_id', templateId);

  const { count: existingDaytrips } = await admin
    .from('trip_cities')
    .select('id', { count: 'exact', head: true })
    .eq('parent_city_id', cityId);
  const startPosition = existingDaytrips || 0;

  const daytripResults = await Promise.all((children || []).map(async (child, i) => {
    // day_offset ne doit jamais reculer avant le début de la ville importée.
    const clampedOffset = child.day_offset != null ? Math.max(0, child.day_offset) : null;
    const childStartDate = city.start_date && clampedOffset != null ? addDays(city.start_date, clampedOffset) : null;
    const { data: daytripCity, error: daytripError } = await admin
      .from('trip_cities')
      .insert({
        trip_id: tripId,
        destination_id: city.destination_id,
        name: child.city_name,
        position: startPosition + i,
        parent_city_id: cityId,
        is_daytrip: true,
      })
      .select('id')
      .single();
    if (daytripError) { console.error('[trip-templates:import] insert daytrip city:', daytripError); return null; }

    const childActivities = await fetchTemplateDaysAndActivities(admin, child.id);
    await importActivitiesInto(admin, { tripId, cityId: daytripCity.id, activities: childActivities, startDate: childStartDate });
    return child.id;
  }));

  const importedTemplateIds = [templateId, ...daytripResults.filter(Boolean)];
  await admin.rpc('increment_template_uses_many', { template_ids: importedTemplateIds });

  return res.status(200).json({
    ok: true,
    importedCount,
    importedDaytripsCount: daytripResults.filter(Boolean).length,
    unplanned: !city.start_date,
  });
}

// ════════════════════════════════════════════════════════════════
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
  const { action, authToken } = body;

  // 'suggest' est en lecture seule sur du contenu public, pas besoin
  // d'identité pour filtrer un accès — mais on exige quand même une session
  // valide, comme le reste de l'app, pour limiter l'usage aux utilisateurs
  // connectés.
  const user = await verifyUser(admin, authToken);
  if (!user) {
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  if (action === 'share') return handleShare(admin, user, body, res);
  if (action === 'suggest') return handleSuggest(admin, body, res);
  if (action === 'import') return handleImport(admin, user, body, res);
  return res.status(400).json({ ok: false, reason: 'Action invalide.' });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
