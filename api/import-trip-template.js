// Importe un modèle de planning (planning-modèle communautaire, branche
// planModel) dans une ville d'un voyage : remplace intégralement les
// activités existantes de la ville par celles du modèle (la confirmation en
// cas de contenu déjà présent est gérée côté client, avant l'appel).
//
// Les jours relatifs (day_index) du modèle sont convertis en vraies dates
// via trip_cities.start_date (si renseignée) : jour 1 = start_date, jour 2 =
// start_date + 1, etc. Sans start_date, les activités importées sont
// laissées "non planifiées" (visit_date null) — l'utilisateur les distribue
// alors lui-même sur son calendrier.
//
// Les excursions à la journée rattachées au modèle (parent_template_id, voir
// supabase/planning_modele_v5.sql) sont importées avec lui : chacune devient
// une nouvelle ville-excursion (trip_cities.is_daytrip) rattachée à la ville
// importée, positionnée day_offset jours après son début. Elle ne reçoit PAS
// de planned_days/start_date propres (ces champs n'existent plus dans l'UI
// des excursions, voir CityBlock.jsx/DaytripCard.jsx) : les y écrire créerait
// une valeur figée que rien ne peut plus corriger si l'utilisateur déplace
// ensuite les activités de l'excursion sur d'autres jours.
import { getAdminClient, verifyUser, verifyTripAccess } from './_lib/supabaseAdmin.js';

const BUCKET = 'trip-attachments';

// Heure représentative par créneau, pour que l'activité se place dans le bon
// créneau visuel du calendrier (voir DayView.jsx). Seulement 3 créneaux —
// alignés sur les 3 créneaux réels du calendrier (DayView.jsx SLOTS), pas 4 :
// un créneau "nuit" séparé ferait atterrir visuellement l'activité ailleurs
// que ce que montrait l'aperçu de suggestion.
const SLOT_TIME = { matin: '09:00', 'apres-midi': '14:00', soir: '19:00' };

function addDays(dateStr, n) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

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
  if (error) { console.error('[import-trip-template] read attachments:', error); return; }
  if (!data?.length) return;
  const { error: rmErr } = await admin.storage.from(BUCKET).remove(data.map((r) => r.file_path));
  if (rmErr) console.error('[import-trip-template] remove attachments:', rmErr);
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
  const { authToken, tripId, cityId, templateId } = body;

  if (!tripId || !cityId || !templateId) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) {
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  // Accepte le propriétaire OU un membre invité (trip_members) — voir
  // api/share-trip-templates.js pour le même correctif côté partage.
  const trip = await verifyTripAccess(admin, tripId, user.id);
  if (!trip) {
    return res.status(404).json({ ok: false, reason: 'Voyage introuvable.' });
  }

  const { data: city } = await admin
    .from('trip_cities')
    .select('id, destination_id, start_date')
    .eq('id', cityId)
    .eq('trip_id', tripId)
    .maybeSingle();
  if (!city) {
    return res.status(404).json({ ok: false, reason: 'Ville introuvable.' });
  }

  const { data: template } = await admin.from('trip_templates').select('id').eq('id', templateId).maybeSingle();
  if (!template) {
    return res.status(404).json({ ok: false, reason: 'Modèle introuvable.' });
  }

  const { data: existingActivities } = await admin.from('trip_activities').select('id').eq('city_id', cityId);
  await cleanupActivityAttachments(admin, (existingActivities || []).map((a) => a.id));

  const { error: deleteError } = await admin.from('trip_activities').delete().eq('city_id', cityId);
  if (deleteError) {
    console.error('[import-trip-template] delete existing:', deleteError);
    return res.status(500).json({ ok: false, reason: "L'import a échoué." });
  }

  const activities = await fetchTemplateDaysAndActivities(admin, templateId);
  const importedCount = await importActivitiesInto(admin, { tripId, cityId, activities, startDate: city.start_date });

  // Excursions rattachées à ce modèle (voir planning_modele_v5.sql) : chacune
  // devient une nouvelle ville-excursion attachée à la ville importée.
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
    // day_offset ne doit jamais reculer avant le début de la ville importée
    // (une excursion planifiée avant la première activité de sa ville de
    // base, côté voyage source, donnerait sinon une date antérieure au
    // début du séjour importé — itinéraire inversé).
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
    if (daytripError) { console.error('[import-trip-template] insert daytrip city:', daytripError); return null; }

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

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
