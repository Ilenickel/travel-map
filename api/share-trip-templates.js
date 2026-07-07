// Partage un voyage comme "modèles" de planning réutilisables par d'autres
// utilisateurs (planning-modèle communautaire, branche planModel). Un
// modèle par ville de base éligible (celle avec planned_days renseigné et au
// moins une activité) : copie figée et anonymisée, jamais un lien live vers
// le voyage source — dates réelles, coût, notes, membres et hébergements ne
// sont jamais copiés, seuls les jours relatifs (day_index) et les
// activités/lieux le sont (voir supabase/planning_modele.sql).
//
// Les excursions à la journée (is_daytrip, parent_city_id) rattachées à une
// ville de base partagée sont incluses automatiquement — sans que
// l'utilisateur ait à leur renseigner un nombre de jours ou une date de
// début : le décalage (parent_template_id + day_offset, voir
// supabase/planning_modele_v5.sql) est calculé directement à partir des
// VRAIES dates où l'excursion a été planifiée, jamais à partir d'une
// métadonnée séparée qui pourrait ne plus correspondre à ce que l'utilisateur
// a réellement glissé sur son calendrier.
import { getAdminClient, verifyUser, verifyTripAccess } from './_lib/supabaseAdmin.js';
import { resolveCityCoordinates } from './_lib/cityGeocode.js';

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

function daysBetween(a, b) {
  return Math.round((new Date(`${b}T00:00:00Z`) - new Date(`${a}T00:00:00Z`)) / 86400000);
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
  // destinationAlpha2 : { [destinationId]: 'jp' } — calculé côté client depuis
  // l'emoji drapeau (countryAlpha2FromEmoji, voir planningUtils.js), car le
  // country_code stocké en base est un slug interne ("japan"), pas un code
  // ISO alpha-2 — même distinction que api/geocode-place.js.
  const { authToken, tripId, destinationAlpha2 = {} } = body;

  if (!tripId) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const user = await verifyUser(admin, authToken);
  if (!user) {
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  // Accepte le propriétaire OU un membre invité (trip_members) : un voyage à
  // plusieurs donne aux membres un accès en écriture complet (RLS), le
  // partage doit être possible pour n'importe lequel d'entre eux, pas
  // seulement le propriétaire.
  const trip = await verifyTripAccess(admin, tripId, user.id);
  if (!trip) {
    return res.status(404).json({ ok: false, reason: 'Voyage introuvable.' });
  }

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
  // Retourne templateId + la date réelle de la première activité (utile pour
  // calculer le day_offset d'une excursion rattachée, ajouté après coup).
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
    // l'ordre, les activités sans visit_date (non planifiées) sont ignorées
    // — un modèle doit avoir une structure jour par jour cohérente.
    const dated = activities.filter((a) => a.visit_date);
    if (!dated.length) { skippedCities.push({ cityName: city.name, reason: 'no_dated_activities' }); return null; }
    const sortedDates = [...new Set(dated.map((a) => a.visit_date))].sort();
    const dayIndexByDate = Object.fromEntries(sortedDates.map((d, i) => [d, i + 1]));

    // Upsert sur (source_trip_id, country_code, city_name) — voir
    // supabase/planning_modele_v3.sql : un voyage à plusieurs (trip_members)
    // où deux personnes partagent (bouton manuel, ou partage automatique)
    // doit mettre à jour le même modèle, jamais en créer un doublon.
    // uses_count n'est volontairement pas réinitialisé ici : un re-partage
    // reflète un contenu mis à jour, pas une nouvelle popularité.
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
    if (templateError) { console.error('[share-trip-templates] upsert template:', templateError); return null; }

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
    if (contentError) { console.error('[share-trip-templates] replace_template_content:', contentError); return null; }

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
    if (linkError) console.error('[share-trip-templates] link daytrip to parent:', linkError);
  }));

  // Ne marque PAS trips.share_prompt_answered ici : ce champ signale que
  // l'utilisateur a explicitement répondu à la popup de fin de voyage (voir
  // useEndTripSharePrompt.js), pas qu'un partage (manuel ou automatique) a eu
  // lieu — sinon un partage silencieux (auto_share_template) supprimerait la
  // popup pour tous les autres membres d'un voyage à plusieurs, qui n'ont
  // jamais répondu eux-mêmes.

  return res.status(200).json({ ok: true, sharedCities, skippedCities });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
