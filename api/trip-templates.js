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

// Fenêtre "Voir plus" sur une liste déjà triée : pure et exportée
// séparément (pas de Supabase, pas d'I/O) pour être testable directement,
// sans avoir à simuler toute la chaîne de requêtes de handleSuggestTrip.
// `rankedAll` doit déjà être trié dans l'ordre final voulu — cette fonction
// ne fait QUE découper la fenêtre, jamais retrier.
export function paginateRanked(rankedAll, offset, limit) {
  const safeOffset = Math.max(0, offset || 0);
  const page = rankedAll.slice(safeOffset, safeOffset + limit);
  const hasMore = rankedAll.length > safeOffset + limit;
  return { page, hasMore };
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
      .select('name, description, visit_date, visit_time, category, place_lat, place_lng, place_address, position, duration_minutes')
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

    // Jours relatifs : day_index reflète l'écart calendaire réel depuis le
    // premier jour (pas un simple rang compact) — sinon une journée entière
    // passée sur une excursion (aucune activité datée sur CETTE ville ce
    // jour-là, voir shareCity(isDaytrip) plus bas) disparaîtrait du calendrier
    // du modèle. Le day_offset de l'excursion (ligne ~190) est lui calculé
    // sur le vrai calendrier : sans ce même repère ici, l'import replace les
    // jours de la ville de base en comblant le trou, et l'excursion atterrit
    // sur une date déjà prise par le jour suivant (tous les jours suivants
    // décalent d'un jour).
    const dated = activities.filter((a) => a.visit_date);
    if (!dated.length) { skippedCities.push({ cityName: city.name, reason: 'no_dated_activities' }); return null; }
    const sortedDates = [...new Set(dated.map((a) => a.visit_date))].sort();
    const firstDate = sortedDates[0];
    const lastDate = sortedDates[sortedDates.length - 1];
    const totalDays = daysBetween(firstDate, lastDate) + 1;
    const dayIndexByDate = Object.fromEntries(sortedDates.map((d) => [d, daysBetween(firstDate, d) + 1]));

    // Upsert sur (source_trip_id, country_code, city_name) — voir
    // supabase/planning_modele_v3.sql : un re-partage doit mettre à jour le
    // même modèle, jamais en créer un doublon. uses_count n'est volontairement
    // pas réinitialisé : un re-partage reflète un contenu mis à jour, pas une
    // nouvelle popularité.
    //
    // criteria : recopiés depuis trips.share_criteria à CHAQUE (re-)partage
    // (planning_modele_v8.sql) — un modèle reste une copie figée, modifier les
    // critères du voyage se propage par le re-partage automatique.
    const { data: template, error: templateError } = await admin
      .from('trip_templates')
      .upsert({
        source_trip_id: tripId,
        created_by: user.id,
        country_code: destination.country_code,
        city_name: city.name,
        city_lat: coords.lat,
        city_lng: coords.lng,
        nb_days: totalDays,
        is_public: true,
        criteria: trip.share_criteria || [],
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
          // Durée d'une activité étirée sur plusieurs créneaux/jours (poignée
          // de resize, voir DayView.jsx) : sans elle, le modèle perdait
          // l'étirement et la ré-affichait comme une activité ponctuelle
          // normale dans la suggestion et l'import.
          duration_minutes: a.duration_minutes,
        })),
    }));
    const { error: contentError } = await admin.rpc('replace_template_content', { p_template_id: template.id, p_days: days });
    if (contentError) { console.error('[trip-templates:share] replace_template_content:', contentError); return null; }

    sharedCities.push({ cityName: city.name, templateId: template.id, nbDays: totalDays });
    return { templateId: template.id, firstDate, lastDate };
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

  // ─── Groupes de modèles (voyage entier par pays, planning_modele_v8) ───
  // Les modèles-villes d'une même destination sont liés dans un groupe qui
  // représente le voyage complet dans ce pays : durée totale, ordre des
  // villes et décalage de chacune par rapport au 1er jour — calculés depuis
  // les VRAIES dates des activités (mêmes firstDate/lastDate que ci-dessus),
  // jamais depuis planned_days (qui peut ne plus correspondre au calendrier).
  const sharedCountryCodes = [];
  await Promise.all((destinations || []).map(async (destination) => {
    const destShared = (baseCities || [])
      .filter((c) => c.destination_id === destination.id && cityShareInfo[c.id])
      .map((c) => cityShareInfo[c.id])
      .sort((a, b) => a.firstDate.localeCompare(b.firstDate));
    if (!destShared.length) return;
    sharedCountryCodes.push(destination.country_code);

    const groupStart = destShared[0].firstDate;
    const groupEnd = destShared.reduce((max, s) => (s.lastDate > max ? s.lastDate : max), destShared[0].lastDate);

    const { data: group, error: groupError } = await admin
      .from('trip_template_groups')
      .upsert({
        source_trip_id: tripId,
        created_by: user.id,
        country_code: destination.country_code,
        total_days: daysBetween(groupStart, groupEnd) + 1,
        criteria: trip.share_criteria || [],
        is_public: true,
      }, { onConflict: 'source_trip_id,country_code', ignoreDuplicates: false })
      .select('id')
      .single();
    if (groupError) { console.error('[trip-templates:share] upsert group:', groupError); return; }

    await Promise.all(destShared.map((s, i) =>
      admin.from('trip_templates').update({
        group_id: group.id,
        group_position: i,
        group_day_offset: daysBetween(groupStart, s.firstDate),
      }).eq('id', s.templateId)
    ));

    // Détache les modèles qui appartenaient au groupe mais ne sont plus
    // partagés (ville supprimée ou devenue inéligible depuis) : les laisser
    // rattachés ferait réapparaître une ville fantôme dans la suggestion de
    // voyage entier. Ils restent proposés individuellement (suggestion par
    // ville), le groupe ne les possède pas.
    const memberIds = destShared.map((s) => s.templateId);
    const { error: detachError } = await admin
      .from('trip_templates')
      .update({ group_id: null, group_position: null, group_day_offset: null })
      .eq('group_id', group.id)
      .not('id', 'in', `(${memberIds.join(',')})`);
    if (detachError) console.error('[trip-templates:share] detach templates:', detachError);
  }));

  // Groupes devenus vides : plus aucune ville partageable dans ce pays pour
  // ce voyage (ex. toutes retirées) — le groupe ne représente plus rien.
  const { data: staleGroups } = await admin
    .from('trip_template_groups')
    .select('id, country_code')
    .eq('source_trip_id', tripId);
  const staleIds = (staleGroups || []).filter((g) => !sharedCountryCodes.includes(g.country_code)).map((g) => g.id);
  if (staleIds.length) {
    const { error: staleError } = await admin.from('trip_template_groups').delete().in('id', staleIds);
    if (staleError) console.error('[trip-templates:share] delete stale groups:', staleError);
  }

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
        .select('id, template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position, duration_minutes')
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

// Nombre de critères demandés (filtres "avec enfants", "en couple"…)
// satisfaits par un modèle/groupe. criteria = NULL (partagé avant la v8,
// jamais renseigné) compte 0 — comme un tableau vide, le tri le rétrograde
// mais ne l'exclut jamais.
function criteriaMatchCount(templateCriteria, wanted) {
  if (!wanted?.length || !templateCriteria?.length) return 0;
  return wanted.filter((k) => templateCriteria.includes(k)).length;
}

async function handleSuggest(admin, body, res) {
  const { countryCode, cityName, countryAlpha2, plannedDays, criteria: wantedCriteria } = body;
  if (!countryCode || !cityName || !plannedDays) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  // Pagination "Charger plus de suggestions" (client, voir
  // TripPlanSuggestionsButton) — même raisonnement que suggest-trip.
  const offset = Math.max(0, parseInt(body.offset, 10) || 0);

  const coords = await resolveCityCoordinates(admin, { countryCode, cityName, countryAlpha2 });
  if (!coords) return res.status(200).json({ ok: true, templates: [], hasMore: false });

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
    .select('id, city_name, city_lat, city_lng, nb_days, uses_count, likes_count, criteria, is_editorial')
    .eq('country_code', countryCode)
    .eq('is_public', true)
    .gte('nb_days', plannedDays - 1)
    .lte('nb_days', plannedDays + 1)
    .is('parent_template_id', null);

  const nearbyAll = (candidates || [])
    .filter((t) => distanceKm(coords.lat, coords.lng, t.city_lat, t.city_lng) <= SAME_CITY_RADIUS_KM)
    // Critères demandés satisfaits d'abord (les non-correspondants sont
    // rétrogradés, jamais exclus), puis correspondance exacte du nombre de
    // jours, puis popularité. Le tri par critères se fait ICI, avant la
    // pagination : un modèle "avec enfants" classé 6e par popularité doit
    // pouvoir remonter dans la première page quand ce filtre est actif.
    .sort((a, b) =>
      criteriaMatchCount(b.criteria, wantedCriteria) - criteriaMatchCount(a.criteria, wantedCriteria)
      || Math.abs(a.nb_days - plannedDays) - Math.abs(b.nb_days - plannedDays)
      || b.uses_count - a.uses_count);
  const { page: nearby, hasMore } = paginateRanked(nearbyAll, offset, MAX_SUGGEST_RESULTS);

  if (!nearby.length) return res.status(200).json({ ok: true, templates: [], hasMore: false });

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
    criteria: t.criteria,
    isEditorial: t.is_editorial,
    days: daysByTemplate[t.id] || [],
    daytrips: childrenByParent[t.id] || [],
  }));

  return res.status(200).json({ ok: true, templates, hasMore });
}

// ════════════════════════════════════════════════════════════════
// action: 'suggest-trip' — suggestions de voyage ENTIER dans un pays
// ════════════════════════════════════════════════════════════════
// Propose des groupes de modèles (trip_template_groups, voir
// planning_modele_v8.sql) : le voyage complet d'un autre utilisateur dans ce
// pays, villes ordonnées avec leurs décalages de jours. `nbDaysFlex` autorise
// ±1 jour sur la durée totale. `mustCityNames` ("je sais que je veux aller à
// Rome et Venise") fait remonter EN PRIORITÉ les voyages contenant le PLUS de
// ces villes — les autres restent proposés derrière, avec un indicateur
// côté client listant lesquelles ont effectivement matché.
async function handleSuggestTrip(admin, body, res) {
  const { countryCode, countryAlpha2, nbDays, nbDaysFlex, mustCityNames, criteria: wantedCriteria } = body;
  if (!countryCode || !nbDays) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  const wantedCities = [...new Set((mustCityNames || []).filter(Boolean))];
  // Pagination "Voir plus" (client) : le classement (critères > durée >
  // popularité) reste identique à chaque appel, seule la fenêtre affichée
  // avance — jamais une limite dure qui cacherait un voyage pertinent classé
  // 6e ou plus loin.
  const offset = Math.max(0, parseInt(body.offset, 10) || 0);

  const flex = nbDaysFlex ? 1 : 0;
  const { data: groups } = await admin
    .from('trip_template_groups')
    .select('id, total_days, uses_count, criteria, is_editorial')
    .eq('country_code', countryCode)
    .eq('is_public', true)
    .gte('total_days', nbDays - flex)
    .lte('total_days', nbDays + flex);

  if (!groups?.length) return res.status(200).json({ ok: true, groups: [], hasMore: false, mustCitiesResolved: [] });

  const { data: members } = await admin
    .from('trip_templates')
    .select('id, group_id, city_name, city_lat, city_lng, nb_days, group_position, group_day_offset')
    .in('group_id', groups.map((g) => g.id))
    .eq('is_public', true)
    .is('parent_template_id', null)
    .order('group_position', { ascending: true });

  const membersByGroup = {};
  for (const m of members || []) (membersByGroup[m.group_id] ||= []).push(m);

  // Villes imposées : matching par coordonnées (comme la suggestion par
  // ville), jamais par comparaison de noms — "Pékin" et "Beijing" doivent
  // matcher. Chaque nom est résolu indépendamment ; ceux qu'on n'a pas su
  // géocoder sont renvoyés au client (mustCitiesResolved) pour qu'il
  // l'explique, plutôt qu'un silencieux "aucun voyage ne contient X".
  const mustCityCoords = await Promise.all(
    wantedCities.map(async (name) => ({
      name,
      coords: await resolveCityCoordinates(admin, { countryCode, cityName: name, countryAlpha2 }),
    }))
  );
  const resolvedMustCities = mustCityCoords.filter((c) => c.coords);

  // Villes imposées effectivement présentes dans CE groupe — sert à la fois
  // au tri (le groupe avec le plus de villes en commun remonte en premier,
  // même raisonnement qu'avec une seule ville) et à l'affichage (badge
  // listant lesquelles matchent réellement, pas juste un booléen).
  const matchedMustCitiesFor = (groupId) => resolvedMustCities
    .filter((c) => (membersByGroup[groupId] || []).some(
      (m) => distanceKm(c.coords.lat, c.coords.lng, m.city_lat, m.city_lng) <= SAME_CITY_RADIUS_KM
    ))
    .map((c) => c.name);

  const rankedAll = groups
    // Un groupe dont tous les membres ont été détachés entre-temps n'a plus
    // rien à importer : on ne le propose pas.
    .filter((g) => (membersByGroup[g.id] || []).length > 0)
    .map((g) => ({ ...g, matchedMustCities: matchedMustCitiesFor(g.id) }))
    .sort((a, b) =>
      b.matchedMustCities.length - a.matchedMustCities.length
      || criteriaMatchCount(b.criteria, wantedCriteria) - criteriaMatchCount(a.criteria, wantedCriteria)
      || Math.abs(a.total_days - nbDays) - Math.abs(b.total_days - nbDays)
      || b.uses_count - a.uses_count);
  const { page: ranked, hasMore } = paginateRanked(rankedAll, offset, MAX_SUGGEST_RESULTS);

  // Aperçu complet : jours/activités de chaque ville membre + excursions
  // rattachées, comme la suggestion par ville.
  const memberIds = ranked.flatMap((g) => (membersByGroup[g.id] || []).map((m) => m.id));
  const daysByTemplate = await fetchDaysByTemplate(admin, memberIds);

  const { data: childTemplates } = memberIds.length
    ? await admin
        .from('trip_templates')
        .select('id, city_name, nb_days, day_offset, parent_template_id')
        .eq('is_public', true)
        .in('parent_template_id', memberIds)
    : { data: [] };
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

  const payload = ranked.map((g) => ({
    id: g.id,
    totalDays: g.total_days,
    usesCount: g.uses_count,
    criteria: g.criteria,
    isEditorial: g.is_editorial,
    matchedMustCities: g.matchedMustCities,
    cities: (membersByGroup[g.id] || []).map((m) => ({
      templateId: m.id,
      cityName: m.city_name,
      nbDays: m.nb_days,
      dayOffset: m.group_day_offset,
      days: daysByTemplate[m.id] || [],
      daytrips: childrenByParent[m.id] || [],
    })),
  }));

  return res.status(200).json({
    ok: true,
    groups: payload,
    hasMore,
    mustCitiesResolved: mustCityCoords.map((c) => ({ name: c.name, resolved: !!c.coords })),
  });
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
        .select('template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position, duration_minutes')
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
      // Étirement sur plusieurs créneaux/jours (voir DayView.jsx) : restauré
      // seulement si l'activité a une vraie date, comme pour visit_time —
      // une activité "non planifiée" n'a pas de créneau de départ à étirer.
      duration_minutes: visitDate ? a.duration_minutes : null,
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

// Excursions rattachées à un modèle : chacune devient une nouvelle
// ville-excursion attachée à la ville importée. Elle ne reçoit PAS de
// planned_days/start_date propres (ces champs n'existent plus dans l'UI des
// excursions) : les y écrire créerait une valeur figée que rien ne peut plus
// corriger si l'utilisateur déplace ensuite les activités. Partagé entre
// l'import par ville et l'import de voyage entier. Renvoie les ids des
// modèles-excursions importés (pour l'incrément de uses_count).
async function importDaytripChildren(admin, { tripId, destinationId, parentCityId, templateId, parentStartDate }) {
  const { data: children } = await admin
    .from('trip_templates')
    .select('id, city_name, day_offset')
    .eq('parent_template_id', templateId);

  const { count: existingDaytrips } = await admin
    .from('trip_cities')
    .select('id', { count: 'exact', head: true })
    .eq('parent_city_id', parentCityId);
  const startPosition = existingDaytrips || 0;

  const results = await Promise.all((children || []).map(async (child, i) => {
    // day_offset ne doit jamais reculer avant le début de la ville importée.
    const clampedOffset = child.day_offset != null ? Math.max(0, child.day_offset) : null;
    const childStartDate = parentStartDate && clampedOffset != null ? addDays(parentStartDate, clampedOffset) : null;
    const { data: daytripCity, error: daytripError } = await admin
      .from('trip_cities')
      .insert({
        trip_id: tripId,
        destination_id: destinationId,
        name: child.city_name,
        position: startPosition + i,
        parent_city_id: parentCityId,
        is_daytrip: true,
      })
      .select('id')
      .single();
    if (daytripError) { console.error('[trip-templates:import] insert daytrip city:', daytripError); return null; }

    const childActivities = await fetchTemplateDaysAndActivities(admin, child.id);
    await importActivitiesInto(admin, { tripId, cityId: daytripCity.id, activities: childActivities, startDate: childStartDate });
    return child.id;
  }));
  return results.filter(Boolean);
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

  const importedChildIds = await importDaytripChildren(admin, {
    tripId,
    destinationId: city.destination_id,
    parentCityId: cityId,
    templateId,
    parentStartDate: city.start_date,
  });

  const importedTemplateIds = [templateId, ...importedChildIds];
  await admin.rpc('increment_template_uses_many', { template_ids: importedTemplateIds });

  return res.status(200).json({
    ok: true,
    importedCount,
    importedDaytripsCount: importedChildIds.length,
    unplanned: !city.start_date,
  });
}

// ════════════════════════════════════════════════════════════════
// action: 'import-trip' — import d'un voyage entier (groupe de modèles)
// ════════════════════════════════════════════════════════════════
// Crée dans la destination une ville par modèle membre du groupe (dans
// l'ordre du voyage source, APRÈS les villes existantes — l'import ne
// supprime jamais rien, contrairement à l'import par ville qui remplace le
// contenu d'UNE ville après confirmation), avec planned_days et, si le
// voyage a une date de départ, une start_date calée dessus + le décalage de
// la ville dans le voyage source. Sans dates, tout arrive "non planifié".
async function handleImportTrip(admin, user, body, res) {
  const { tripId, destinationId, groupId } = body;
  if (!tripId || !destinationId || !groupId) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const trip = await verifyTripAccess(admin, tripId, user.id);
  if (!trip) return res.status(404).json({ ok: false, reason: 'Voyage introuvable.' });

  const { data: destination } = await admin
    .from('trip_destinations')
    .select('id, country_code')
    .eq('id', destinationId)
    .eq('trip_id', tripId)
    .maybeSingle();
  if (!destination) return res.status(404).json({ ok: false, reason: 'Destination introuvable.' });

  // Le groupe doit appartenir au MÊME pays que la destination visée : rien
  // dans l'UI ne permet normalement de faire diverger les deux (suggest-trip
  // ne renvoie que des groupes de dest.country_code), mais cette vérification
  // reste nécessaire côté serveur — sans elle, une requête forgée avec un
  // groupId d'un autre pays importerait ses villes dans la mauvaise
  // destination du voyage (ex. des villes chinoises dans une destination
  // "Japon"), sans qu'aucune erreur ne le signale.
  const { data: group } = await admin
    .from('trip_template_groups')
    .select('id, country_code, is_public')
    .eq('id', groupId)
    .maybeSingle();
  if (!group || !group.is_public || group.country_code !== destination.country_code) {
    return res.status(404).json({ ok: false, reason: 'Modèle introuvable.' });
  }

  const { data: members } = await admin
    .from('trip_templates')
    .select('id, city_name, nb_days, group_day_offset')
    .eq('group_id', groupId)
    .is('parent_template_id', null)
    .order('group_position', { ascending: true });
  if (!members?.length) return res.status(404).json({ ok: false, reason: 'Modèle introuvable.' });

  // Point d'ancrage des dates importées : le lendemain de la dernière journée
  // déjà planifiée dans TOUT le voyage (toutes destinations confondues), pas
  // trip.start_date — sinon un import dans une 2e destination (ou dans une
  // destination qui a déjà des villes datées) retombait systématiquement au
  // jour 1 du voyage et chevauchait silencieusement ce qui existait déjà
  // (aucune vérification de collision nulle part ailleurs dans cette
  // fonction). Repli sur trip.start_date seulement si rien n'est encore daté.
  const { data: datedCities } = await admin
    .from('trip_cities')
    .select('start_date, planned_days')
    .eq('trip_id', tripId)
    .not('start_date', 'is', null)
    .not('planned_days', 'is', null);
  const latestEndDate = (datedCities || []).reduce((max, c) => {
    const end = addDays(c.start_date, c.planned_days - 1);
    return !max || end > max ? end : max;
  }, null);
  const importAnchorDate = latestEndDate ? addDays(latestEndDate, 1) : trip.start_date;

  const { count: existingCities } = await admin
    .from('trip_cities')
    .select('id', { count: 'exact', head: true })
    .eq('destination_id', destinationId)
    .is('parent_city_id', null);
  const startPosition = existingCities || 0;

  // Villes créées séquentiellement (pas en Promise.all) : leurs positions
  // s'enchaînent et l'ordre d'insertion doit rester celui du voyage source.
  let importedActivitiesCount = 0;
  const importedTemplateIds = [];
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const offset = member.group_day_offset != null ? Math.max(0, member.group_day_offset) : null;
    const startDate = importAnchorDate && offset != null ? addDays(importAnchorDate, offset) : null;

    const { data: city, error: cityError } = await admin
      .from('trip_cities')
      .insert({
        trip_id: tripId,
        destination_id: destinationId,
        name: member.city_name,
        position: startPosition + i,
        planned_days: member.nb_days,
        start_date: startDate,
      })
      .select('id')
      .single();
    if (cityError) { console.error('[trip-templates:import-trip] insert city:', cityError); continue; }

    const activities = await fetchTemplateDaysAndActivities(admin, member.id);
    importedActivitiesCount += await importActivitiesInto(admin, { tripId, cityId: city.id, activities, startDate });

    const childIds = await importDaytripChildren(admin, {
      tripId,
      destinationId,
      parentCityId: city.id,
      templateId: member.id,
      parentStartDate: startDate,
    });
    importedTemplateIds.push(member.id, ...childIds);
  }

  if (importedTemplateIds.length) {
    await admin.rpc('increment_template_uses_many', { template_ids: importedTemplateIds });
    await admin.rpc('increment_template_group_uses', { group_id: groupId });
  }

  return res.status(200).json({
    ok: true,
    importedCitiesCount: members.length,
    importedCount: importedActivitiesCount,
    unplanned: !importAnchorDate,
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
  if (action === 'suggest-trip') return handleSuggestTrip(admin, body, res);
  if (action === 'import') return handleImport(admin, user, body, res);
  if (action === 'import-trip') return handleImportTrip(admin, user, body, res);
  return res.status(400).json({ ok: false, reason: 'Action invalide.' });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
