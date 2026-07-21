// Planning-modèle communautaire : partage, suggestion et import de plannings
// de voyage réutilisables (voir supabase/planning_modele*.sql). Regroupé en
// UN SEUL fichier serverless (au lieu de 3) pour rester sous la limite de 12
// fonctions du plan Hobby de Vercel — dispatché sur `body.action`.
//
// Un modèle par ville de base éligible (celle avec au moins une activité
// DATÉE, voir shareCity) : copie figée et anonymisée, jamais un lien live
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
import { resolveCityImage } from './_lib/cityImages.js';

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

// Durée réellement occupée par un ensemble d'activités d'UNE ville — dérivée
// du contenu, jamais d'un champ "jours prévus" séparé (trip_cities.planned_days
// a été retiré, voir planning_modele_v13.sql) : l'écart calendaire réel entre
// la première et la dernière activité DATÉE (comme pour handleShare, même
// calcul), ou à défaut le plus grand jour relatif parmi les activités encore
// EN ATTENTE (pending_day_index, base 1 — sa valeur EST directement le nombre
// de jours). null si la ville n'a aucune activité (datée ou en attente) :
// aucune durée "précédente" à comparer, donc rien à décaler.
export function contentSpanDays(activities) {
  if (!activities?.length) return null;
  const dates = activities.map((a) => a.visit_date).filter(Boolean);
  if (dates.length) {
    const sorted = [...dates].sort();
    return daysBetween(sorted[0], sorted[sorted.length - 1]) + 1;
  }
  const indices = activities.map((a) => a.pending_day_index).filter((v) => v != null);
  if (indices.length) return Math.max(...indices);
  return null;
}

// Numérotation des jours d'une ville de base pour le partage (handleShare) :
// day_index reflète l'écart calendaire réel depuis le premier jour, MAIS
// seulement pour les jours réellement occupés — par la ville elle-même
// (`ownDates`), OU par une de ses excursions (`excursionDates`, filtrées à
// partir du 1er jour de la ville : une excursion antérieure au séjour est un
// cas limite déjà géré ailleurs via clampedOffset, pas ici). Un jour qui
// n'est occupé par PERSONNE est compacté (sinon il gonflerait artificiellement
// la durée partagée et laisserait un trou dans la suggestion — ex. jours 1,
// 2, 4 remplis, jour 3 totalement vide : la ville s'affichait pourtant
// "4 jours"). Un jour occupé uniquement par une excursion, lui, reste bien
// préservé tel quel : c'est la raison d'être originale de ce calcul
// non-compacté — sans lui, l'import replacerait les jours de la ville en
// comblant le trou, et l'excursion atterrirait sur une date déjà prise par le
// jour suivant. Pure et exportée séparément pour être testable directement.
export function computeCompactDayIndex(ownDates, excursionDates = []) {
  const firstDate = ownDates[0];
  const lastDate = ownDates[ownDates.length - 1];
  const relevantDates = [...new Set([
    ...ownDates,
    ...excursionDates.filter((d) => d >= firstDate),
  ])].sort();
  const compactRank = Object.fromEntries(relevantDates.map((d, i) => [d, i + 1]));
  const totalDays = compactRank[lastDate];
  const dayIndexByDate = Object.fromEntries(ownDates.map((d) => [d, compactRank[d]]));
  return { compactRank, totalDays, dayIndexByDate };
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

  // Toutes les villes de base sont candidates : shareCity (plus bas) exclut
  // déjà celles sans activité (no_activities) ou sans AUCUNE activité datée
  // (no_dated_activities) — plus besoin d'un filtre d'entrée séparé sur un
  // champ "jours prévus" (trip_cities.planned_days, retiré — voir
  // planning_modele_v13.sql) : une ville avec du contenu réellement daté est
  // partageable, point.
  const { data: baseCities } = await admin
    .from('trip_cities')
    .select('id, destination_id, name')
    .eq('trip_id', tripId)
    .is('parent_city_id', null);

  const { data: daytripCities } = await admin
    .from('trip_cities')
    .select('id, destination_id, name, parent_city_id')
    .eq('trip_id', tripId)
    .not('parent_city_id', 'is', null);

  const sharedCities = [];
  const skippedCities = [];

  // Dates occupées par les excursions de chaque ville de base, gatherées AVANT
  // de partager les villes elles-mêmes : nécessaires pour que shareCity (plus
  // bas) sache quels jours "vides" côté ville de base sont en réalité occupés
  // par une excursion (à préserver) et lesquels ne sont occupés par PERSONNE
  // (à compacter) — voir le calcul de day_index ci-dessous.
  const daytripIds = (daytripCities || []).map((d) => d.id);
  const { data: daytripDatedActs } = daytripIds.length
    ? await admin.from('trip_activities').select('city_id, visit_date').in('city_id', daytripIds).not('visit_date', 'is', null)
    : { data: [] };
  const excursionDatesByParentId = {};
  for (const d of daytripCities || []) {
    const dates = (daytripDatedActs || []).filter((a) => a.city_id === d.id).map((a) => a.visit_date);
    if (!dates.length) continue;
    const set = (excursionDatesByParentId[d.parent_city_id] ||= new Set());
    dates.forEach((date) => set.add(date));
  }

  // Partage le contenu d'une ville (base ou excursion) : géocodage, upsert du
  // modèle, remplacement atomique des jours/activités (RPC
  // replace_template_content, voir supabase/planning_modele_v6.sql — évite la
  // condition de course d'un DELETE+INSERT en plusieurs appels séparés).
  //
  // `isDaytrip` : les excursions sont géocodées SANS filtre "type=city" — leur
  // nom est souvent un monument/site (ex. "Grande Muraille"), pas une ville
  // administrative, et le filtre `type=city` de Geoapify échoue silencieusement
  // dessus (voir api/_lib/cityGeocode.js).
  //
  // `excursionDates` (villes de BASE uniquement) : dates occupées par les
  // excursions rattachées, gatherées ci-dessus.
  async function shareCity(city, isDaytrip, excursionDates = []) {
    const destination = destById[city.destination_id];
    if (!destination) { skippedCities.push({ cityName: city.name, reason: 'destination_missing' }); return null; }

    const { data: activities } = await admin
      .from('trip_activities')
      .select('name, description, visit_date, visit_time, category, place_lat, place_lng, place_address, position, duration_minutes, wikipedia')
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

    const dated = activities.filter((a) => a.visit_date);
    if (!dated.length) { skippedCities.push({ cityName: city.name, reason: 'no_dated_activities' }); return null; }
    const ownDates = [...new Set(dated.map((a) => a.visit_date))].sort();
    const firstDate = ownDates[0];
    const lastDate = ownDates[ownDates.length - 1];
    const { compactRank, totalDays, dayIndexByDate } = computeCompactDayIndex(ownDates, excursionDates);

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

    const days = ownDates.map((date) => ({
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
          // Slug Wikipédia/Commons explicite (photo de l'activité dans les
          // suggestions, voir planning_modele_v11.sql) : recopié dans le
          // modèle comme le reste — la vignette du planning partagé doit être
          // aussi fiable que celle du voyage source.
          wikipedia: a.wikipedia,
        })),
    }));
    const { error: contentError } = await admin.rpc('replace_template_content', { p_template_id: template.id, p_days: days });
    if (contentError) { console.error('[trip-templates:share] replace_template_content:', contentError); return null; }

    sharedCities.push({ cityName: city.name, templateId: template.id, nbDays: totalDays });
    return { templateId: template.id, firstDate, lastDate, compactRank };
  }

  const cityShareInfo = {};
  const baseResults = await Promise.all(
    (baseCities || []).map((city) => shareCity(city, false, [...(excursionDatesByParentId[city.id] || [])]))
  );
  (baseCities || []).forEach((city, i) => { if (baseResults[i]) cityShareInfo[city.id] = baseResults[i]; });

  const eligibleDaytrips = (daytripCities || []).filter((d) => cityShareInfo[d.parent_city_id]);
  const daytripResults = await Promise.all(eligibleDaytrips.map((d) => shareCity(d, true)));
  await Promise.all(eligibleDaytrips.map(async (daytrip, i) => {
    const info = daytripResults[i];
    if (!info) return;
    const parentInfo = cityShareInfo[daytrip.parent_city_id];
    // Décalage dans la numérotation COMPACTÉE du parent (voir shareCity).
    // Pas "forcément" une entrée dans compactRank : les dates d'excursion
    // ANTÉRIEURES au 1er jour propre de la ville en sont filtrées
    // (computeCompactDayIndex, `d >= firstDate`) — une excursion qui commence
    // avant le séjour n'y figure donc pas (rank undefined, et undefined - 1
    // donnerait NaN, sérialisé null : l'excursion importée n'aurait alors ni
    // date ni pending_day_offset, ses activités ne s'ancreraient jamais).
    // Repli sur 0 : même résultat final que l'ancien calcul non compacté, qui
    // produisait un décalage négatif ensuite clampé à 0 à l'import
    // (importDaytripChildren, clampedOffset).
    const rank = parentInfo.compactRank[info.firstDate];
    const dayOffset = rank != null ? rank - 1 : 0;
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
  // les VRAIES dates des activités (mêmes firstDate/lastDate que ci-dessus).
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
        .select('id, template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position, duration_minutes, wikipedia')
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
  const { countryCode, cityName, countryAlpha2, plannedDays, nbDaysFlex, criteria: wantedCriteria } = body;
  if (!countryCode || !cityName) {
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
  // Tolérance de ±1 jour sur nb_days (pas d'égalité stricte par défaut) :
  // nb_days est calculé à partir du nombre de jours RÉELLEMENT activités,
  // donc un jour sans activité au milieu du séjour le fait apparaître un jour
  // plus court que la durée déclarée par le voyageur d'origine. Contrôlable
  // par le client (nbDaysFlex, même paramètre que suggest-trip) — traité
  // comme activé par défaut (undefined) pour ne pas changer le comportement
  // des appels déjà en place, désactivable explicitement pour une recherche
  // sur la durée exacte uniquement.
  //
  // plannedDays est FACULTATIF : sans durée renseignée sur la ville, on
  // propose TOUS les plannings de cette ville (toutes durées) — l'utilisateur
  // regarde ce qui existe et décide ensuite combien de jours il y reste,
  // plutôt que d'être obligé de fixer une durée avant même de chercher.
  const flex = nbDaysFlex === false ? 0 : 1;
  let query = admin
    .from('trip_templates')
    .select('id, city_name, city_lat, city_lng, nb_days, uses_count, likes_count, criteria, is_editorial')
    .eq('country_code', countryCode)
    .eq('is_public', true)
    .is('parent_template_id', null);
  if (plannedDays) query = query.gte('nb_days', plannedDays - flex).lte('nb_days', plannedDays + flex);
  const { data: candidates } = await query;

  const nearbyCandidates = (candidates || [])
    .filter((t) => distanceKm(coords.lat, coords.lng, t.city_lat, t.city_lng) <= SAME_CITY_RADIUS_KM);

  if (!nearbyCandidates.length) return res.status(200).json({ ok: true, templates: [], hasMore: false });

  // Déduplication par CONTENU (jours + activités), pas seulement ville+durée :
  // plusieurs lignes trip_templates peuvent légitimement partager EXACTEMENT
  // le même contenu — systématique pour nos itinéraires éditoriaux, qui
  // réutilisent le même bloc "ville" dans plusieurs voyages complets (chaque
  // groupe a besoin de sa propre ligne, group_id étant mono-valué), et ça
  // peut tout autant arriver avec deux vrais voyages partagés indépendamment
  // par des utilisateurs différents pour la même ville. Réduire la durée
  // affichée pour "faire différent" dégraderait le contenu pour de mauvaises
  // raisons ; ne garder qu'UN représentant par contenu identique règle le
  // problème sans toucher à la qualité de l'itinéraire.
  const allDaysByTemplate = await fetchDaysByTemplate(admin, nearbyCandidates.map((t) => t.id));
  const contentSignature = (t) => JSON.stringify(
    (allDaysByTemplate[t.id] || []).map((d) => ({ i: d.dayIndex, a: d.activities.map((act) => act.name) }))
  );

  const rankedAll = nearbyCandidates
    // Critères demandés satisfaits d'abord (les non-correspondants sont
    // rétrogradés, jamais exclus), puis un vrai voyage communautaire AVANT un
    // itinéraire éditorial (is_editorial) — ces derniers n'existent que pour
    // amorcer les suggestions tant qu'il n'y a pas encore assez de voyages
    // réels partagés (voir planning_modele_v9.sql) : ne pas les rétrograder
    // ainsi les ferait remonter devant la communauté dès qu'ils cumulent plus
    // d'imports, alors qu'ils sont justement les seuls disponibles au début et
    // accumulent mécaniquement plus d'uses_count. Puis correspondance exacte
    // du nombre de jours (uniquement si une durée est demandée), puis
    // popularité. Le tri par critères se fait ICI, avant la pagination : un
    // modèle "avec enfants" classé 6e par popularité doit pouvoir remonter
    // dans la première page quand ce filtre est actif.
    .sort((a, b) =>
      criteriaMatchCount(b.criteria, wantedCriteria) - criteriaMatchCount(a.criteria, wantedCriteria)
      || (a.is_editorial === b.is_editorial ? 0 : a.is_editorial ? 1 : -1)
      || (plannedDays ? Math.abs(a.nb_days - plannedDays) - Math.abs(b.nb_days - plannedDays) : 0)
      || b.uses_count - a.uses_count
      // Dernier départage, à égalité stricte sur tout ce qui précède (aucun
      // critère, aucune durée demandée, aucun import) : durée croissante —
      // sans lui, deux modèles jamais importés se retrouvaient dans un ordre
      // arbitraire (celui de la requête SQL), ex. "New York 7 jours" listé
      // après "New York 21 jours" sans raison apparente pour l'utilisateur.
      || a.nb_days - b.nb_days);

  const seenSignatures = new Set();
  const dedupedAll = [];
  for (const t of rankedAll) {
    const sig = contentSignature(t);
    if (seenSignatures.has(sig)) continue;
    seenSignatures.add(sig);
    dedupedAll.push(t);
  }

  const { page: nearby, hasMore } = paginateRanked(dedupedAll, offset, MAX_SUGGEST_RESULTS);

  if (!nearby.length) return res.status(200).json({ ok: true, templates: [], hasMore: false });

  const templateIds = nearby.map((t) => t.id);
  const daysByTemplate = allDaysByTemplate;

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
  // nbDays est FACULTATIF : une recherche sans aucun critère (juste le pays)
  // est valide — elle liste tous les voyages partagés du pays, triés par
  // critères puis popularité, pour se donner une idée avant de fixer une
  // durée (la planification peut se faire dans ce sens-là).
  const { countryCode, countryAlpha2, nbDays, nbDaysFlex, mustCityNames, criteria: wantedCriteria } = body;
  if (!countryCode) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  const wantedCities = [...new Set((mustCityNames || []).filter(Boolean))];
  // Pagination "Voir plus" (client) : le classement (critères > durée >
  // popularité) reste identique à chaque appel, seule la fenêtre affichée
  // avance — jamais une limite dure qui cacherait un voyage pertinent classé
  // 6e ou plus loin.
  const offset = Math.max(0, parseInt(body.offset, 10) || 0);

  // undefined traité comme tolérant (même défaut que handleSuggest ci-dessus) :
  // le client envoie toujours cette valeur explicitement aujourd'hui, mais un
  // futur appelant qui l'omettrait ne doit pas se retrouver avec un
  // comportement inverse selon l'action appelée.
  const flex = nbDaysFlex === false ? 0 : 1;
  let groupsQuery = admin
    .from('trip_template_groups')
    .select('id, total_days, uses_count, criteria, is_editorial')
    .eq('country_code', countryCode)
    .eq('is_public', true);
  if (nbDays) groupsQuery = groupsQuery.gte('total_days', nbDays - flex).lte('total_days', nbDays + flex);
  const { data: groups } = await groupsQuery;

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
    // Même raisonnement que handleSuggest ci-dessus : un groupe éditorial
    // (is_editorial) passe toujours après un vrai voyage communautaire, quel
    // que soit son uses_count.
    .sort((a, b) =>
      b.matchedMustCities.length - a.matchedMustCities.length
      || criteriaMatchCount(b.criteria, wantedCriteria) - criteriaMatchCount(a.criteria, wantedCriteria)
      || (a.is_editorial === b.is_editorial ? 0 : a.is_editorial ? 1 : -1)
      || (nbDays ? Math.abs(a.total_days - nbDays) - Math.abs(b.total_days - nbDays) : 0)
      || b.uses_count - a.uses_count
      // Même dernier départage que handleSuggest ci-dessus : durée totale
      // croissante à égalité stricte sur tout le reste.
      || a.total_days - b.total_days);
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
// action: 'list-cities' — villes ayant au moins un planning partagé pour ce pays
// ════════════════════════════════════════════════════════════════
// Lecture seule sur du contenu public (mêmes filtres que 'suggest' : villes de
// base uniquement, pas les excursions) — sert à afficher dans l'onglet
// "Villes" TOUTES les villes ayant au moins un planning partagé pour ce pays,
// pas seulement celles déjà présentes dans le voyage de l'utilisateur.
//
// Regroupement GÉOGRAPHIQUE, pas par chaîne city_name : deux exonymes d'une
// même ville ("Pékin" / "Beijing") ont des city_lat/city_lng proches même si
// leurs noms bruts diffèrent totalement — les fusionner évite un doublon dans
// la liste. Clustering glouton par rayon (SAME_CITY_RADIUS_KM, même seuil que
// resolveCityCoordinates/handleSuggest ailleurs dans ce fichier) : pas besoin
// d'un vrai k-means pour cet usage. Le nom AFFICHÉ (cityName) est celui du
// template le plus utilisé du cluster ; le nom traduit dans la langue du
// visiteur est résolu côté client via representativeTemplateId (voir
// get-translated-content.js, content_type 'trip_template_city').
async function handleListCities(admin, body, res) {
  const { countryCode, countryAlpha2, destinationId } = body;
  if (!countryCode) return res.status(400).json({ ok: false, reason: 'Requête invalide.' });

  const { data: templates } = await admin
    .from('trip_templates')
    .select('id, city_name, city_lat, city_lng, uses_count')
    .eq('country_code', countryCode)
    .eq('is_public', true)
    .is('parent_template_id', null);

  const clusters = []; // [{ representative, totalUses, templateCount }]
  for (const t of templates || []) {
    // Coordonnées manquantes (géocodage jamais fait/échoué à l'origine du
    // partage) : reste isolé dans son propre cluster plutôt que d'être fusionné
    // au hasard avec un autre — cas de repli, pas le cas nominal.
    const match = t.city_lat != null && t.city_lng != null
      ? clusters.find((c) =>
          c.representative.city_lat != null &&
          distanceKm(t.city_lat, t.city_lng, c.representative.city_lat, c.representative.city_lng) <= SAME_CITY_RADIUS_KM
        )
      : null;
    if (match) {
      match.templateCount += 1;
      match.totalUses += t.uses_count || 0;
      // Le représentant devient le template le plus utilisé du cluster : nom
      // le plus "consensuel" à afficher/traduire pour ce groupe de villes.
      if ((t.uses_count || 0) > (match.representative.uses_count || 0)) match.representative = t;
    } else {
      clusters.push({ representative: t, templateCount: 1, totalUses: t.uses_count || 0 });
    }
  }

  let cities = clusters.map((c) => ({
    cityName: c.representative.city_name,
    representativeTemplateId: c.representative.id,
    templateCount: c.templateCount,
    totalUses: c.totalUses,
    _lat: c.representative.city_lat,
    _lng: c.representative.city_lng,
  }));

  // "Déjà dans votre voyage" : comparaison géographique elle aussi, pas de
  // texte — trip_cities n'a pas de lat/lng stockées, on géocode donc à la
  // volée le nom (tapé par l'utilisateur, potentiellement dans une autre
  // langue que les templates suggérés) via resolveCityCoordinates, mis en
  // cache après le premier appel (table city_geocache).
  if (destinationId) {
    const { data: existingCities } = await admin
      .from('trip_cities')
      .select('id, name')
      .eq('destination_id', destinationId)
      .is('parent_city_id', null);
    if (existingCities?.length) {
      const resolvedExisting = await Promise.all(
        existingCities.map(async (c) => ({
          id: c.id,
          name: c.name,
          coords: await resolveCityCoordinates(admin, { countryCode, cityName: c.name, countryAlpha2 }),
        }))
      );
      cities = cities.map((city) => {
        if (city._lat == null) return city;
        const match = resolvedExisting.find((c) =>
          c.coords && distanceKm(city._lat, city._lng, c.coords.lat, c.coords.lng) <= SAME_CITY_RADIUS_KM
        );
        return match ? { ...city, existingCityId: match.id, existingCityName: match.name } : city;
      });
    }
  }

  cities.sort((a, b) => b.totalUses - a.totalUses);
  // _lat/_lng ne servaient qu'au matching serveur ci-dessus : jamais utiles au
  // client, pas besoin de les faire voyager dans la réponse.
  const citiesForClient = cities.map(({ _lat, _lng, ...rest }) => rest);

  return res.status(200).json({ ok: true, cities: citiesForClient });
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
        .select('template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position, duration_minutes, wikipedia')
        .in('template_day_id', dayIds)
        .order('position', { ascending: true })
    : { data: [] };

  const dayIndexById = Object.fromEntries((days || []).map((d) => [d.id, d.day_index]));
  return (activities || []).map((a) => ({ ...a, dayIndex: dayIndexById[a.template_day_id] }));
}

// Insère les activités d'un modèle dans une ville (existante ou tout juste
// créée pour une excursion). Sans startDate, la structure relative du modèle
// n'est PLUS perdue en "non planifié" : chaque activité garde son jour relatif
// dans pending_day_index (+ son créneau via visit_time et son étirement via
// duration_minutes), et tout sera converti en vraies dates dès que
// l'utilisateur choisira une date de départ — voir les RPC
// anchor_trip_pending_days / anchor_city_pending_days
// (supabase/planning_modele_v10.sql).
async function importActivitiesInto(admin, { tripId, cityId, activities, startDate }) {
  const rows = activities.map((a) => {
    const visitDate = startDate ? addDays(startDate, a.dayIndex - 1) : null;
    return {
      trip_id: tripId,
      city_id: cityId,
      name: a.name,
      description: a.description,
      visit_date: visitDate,
      // visit_time même sans date : un "⏰ HH:MM" sans jour est un état déjà
      // géré par l'UI (voir ActivityItem), et c'est lui qui permet à
      // l'ancrage différé de replacer l'activité dans le bon créneau.
      visit_time: SLOT_TIME[a.time_slot] || null,
      category: a.category || 'other',
      position: a.position,
      place_lat: a.place_lat,
      place_lng: a.place_lng,
      place_address: a.place_address,
      // Étirement sur plusieurs créneaux/jours (voir DayView.jsx) : conservé
      // aussi en attente de dates — il ne s'affiche étiré qu'une fois daté,
      // mais l'ancrage différé doit pouvoir le restaurer.
      duration_minutes: a.duration_minutes,
      // Slug photo explicite (voir planning_modele_v11.sql) : restauré à
      // l'import pour qu'un re-partage de ce voyage le conserve à son tour.
      wikipedia: a.wikipedia,
      pending_day_index: visitDate ? null : a.dayIndex,
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
// start_date propre (ce champ n'existe plus dans l'UI des excursions) : l'y
// écrire créerait une valeur figée que rien ne peut plus corriger si
// l'utilisateur déplace ensuite les activités. Partagé entre l'import par
// ville et l'import de voyage entier. Renvoie les ids des modèles-excursions
// importés (pour l'incrément de uses_count).
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
        // Sans date d'ancrage : le décalage de l'excursion par rapport au
        // jour 1 de sa ville parente est conservé, pour que l'ancrage différé
        // (anchor_city_pending_days) la date correctement plus tard.
        pending_day_offset: childStartDate == null ? clampedOffset : null,
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

// Mémorise des jours comme "ajoutés par un import" (badge de la vue par jour,
// trips.import_added_days, planning_modele_v12.sql). Jamais bloquant : si la
// colonne n'existe pas encore (migration pas jouée), seul le badge est perdu.
async function markImportAddedDays(admin, tripId, addedDays) {
  if (!addedDays.length) return;
  const { data: tripRow, error: readError } = await admin.from('trips').select('import_added_days').eq('id', tripId).maybeSingle();
  if (readError) {
    console.error('[trip-templates] read import_added_days (avez-vous joué planning_modele_v12.sql ?):', readError);
    return;
  }
  const merged = [...new Set([...(tripRow?.import_added_days || []), ...addedDays])].sort();
  const { error } = await admin.from('trips').update({ import_added_days: merged }).eq('id', tripId);
  if (error) console.error('[trip-templates] set import_added_days:', error);
}

// Étend la date de fin du voyage si le contenu importé la déborde (sinon les
// derniers jours importés seraient invisibles : la vue par jour n'affiche que
// les jours entre start_date et end_date, et une activité datée au-delà
// n'apparaît nulle part). Les jours ainsi AJOUTÉS au-delà d'une fin déjà
// choisie sont signalés d'un badge ; une fin simplement déduite (le voyage
// n'en avait pas) n'a rien "d'ajouté" à signaler. Renvoie le nombre de jours
// ajoutés. Relit end_date à chaque appel : elle a pu être décalée entre-temps
// (voir applyReplacedCityDuration).
async function extendTripEndIfNeeded(admin, tripId, candidateEnd) {
  if (!candidateEnd) return 0;
  const { data: tripRow } = await admin.from('trips').select('end_date').eq('id', tripId).maybeSingle();
  if (!tripRow) return 0;
  if (tripRow.end_date && candidateEnd <= tripRow.end_date) return 0;
  const { error } = await admin.from('trips').update({ end_date: candidateEnd }).eq('id', tripId);
  if (error) { console.error('[trip-templates] extend end_date:', error); return 0; }
  if (!tripRow.end_date) return 0;
  const added = [];
  for (let d = addDays(tripRow.end_date, 1); d <= candidateEnd; d = addDays(d, 1)) added.push(d);
  await markImportAddedDays(admin, tripId, added);
  return added.length;
}

// Après remplacement du contenu d'une ville par un planning importé : tout ce
// qui SUIT la ville est décalé de la différence entre l'ancienne et la
// nouvelle durée RÉELLEMENT occupée (`prevDays`/`newDays`, tous deux dérivés
// du contenu — voir contentSpanDays — jamais d'un champ "jours prévus" séparé,
// qui n'existe plus, voir planning_modele_v13.sql), pour que rien ne se
// chevauche ni ne laisse de trou : villes datées (avec leurs activités,
// excursions et hébergements, et la date de fin du voyage) pour un calendrier
// réel, décalages "en attente" (pending_day_offset) pour des imports pas
// encore ancrés. Partagé entre l'import par ville et l'import de voyage
// entier.
export async function applyReplacedCityDuration(admin, { tripId, cityId, prevStartDate, prevPendingOffset, prevDays, newDays }) {
  // Sans ancien contenu connu (ville vide avant cet import), durée
  // inchangée, ou import plus COURT que l'ancien contenu : rien à décaler.
  // Un import plus court libère des jours en fin de ville plutôt que de les
  // supprimer — la personne a peut-être choisi un planning plus court
  // justement pour pouvoir prévoir autre chose sur ce créneau ; les villes
  // suivantes et la fin du voyage ne doivent donc PAS reculer (ce qui
  // avalerait ces jours libérés). Seul un import plus LONG continue de
  // repousser la suite, pour ne rien faire chevaucher.
  if (!newDays || !prevDays || newDays <= prevDays) return;
  const delta = newDays - prevDays;

  if (prevStartDate) {
    const { data: laterCities } = await admin
      .from('trip_cities')
      .select('id, start_date')
      .eq('trip_id', tripId)
      .is('parent_city_id', null)
      .neq('id', cityId)
      .gt('start_date', prevStartDate);
    for (const c of laterCities || []) {
      const { error } = await admin.from('trip_cities').update({ start_date: addDays(c.start_date, delta) }).eq('id', c.id);
      if (error) console.error('[trip-templates:duration] shift city start_date:', error);
    }
    const laterIds = (laterCities || []).map((c) => c.id);
    if (laterIds.length) {
      // Les excursions rattachées aux villes décalées suivent leur parente ;
      // leurs activités (datées) et les hébergements aussi — sinon les dates
      // de la ville et son contenu se désynchroniseraient.
      const { data: children } = await admin.from('trip_cities').select('id').in('parent_city_id', laterIds);
      const shiftedCityIds = [...laterIds, ...(children || []).map((c) => c.id)];
      const { data: acts } = await admin.from('trip_activities').select('id, visit_date').in('city_id', shiftedCityIds).not('visit_date', 'is', null);
      for (const a of acts || []) {
        const { error } = await admin.from('trip_activities').update({ visit_date: addDays(a.visit_date, delta) }).eq('id', a.id);
        if (error) console.error('[trip-templates:duration] shift activity:', error);
      }
      const { data: lodgings } = await admin.from('trip_lodgings').select('id, check_in, check_out').in('city_id', shiftedCityIds);
      for (const l of lodgings || []) {
        if (!l.check_in && !l.check_out) continue;
        const { error } = await admin.from('trip_lodgings').update({
          check_in: l.check_in ? addDays(l.check_in, delta) : null,
          check_out: l.check_out ? addDays(l.check_out, delta) : null,
        }).eq('id', l.id);
        if (error) console.error('[trip-templates:duration] shift lodging:', error);
      }
    }
    // La fin du voyage suit le décalage ; les jours gagnés sont signalés
    // comme ajoutés par l'import (badge de la vue par jour).
    const { data: tripRow } = await admin.from('trips').select('end_date').eq('id', tripId).maybeSingle();
    if (tripRow?.end_date) {
      const newEnd = addDays(tripRow.end_date, delta);
      const { error } = await admin.from('trips').update({ end_date: newEnd }).eq('id', tripId);
      if (error) console.error('[trip-templates:duration] shift end_date:', error);
      else if (delta > 0) {
        const added = [];
        for (let d = addDays(tripRow.end_date, 1); d <= newEnd; d = addDays(d, 1)) added.push(d);
        await markImportAddedDays(admin, tripId, added);
      }
    }
  } else if (prevPendingOffset != null) {
    const { data: laterPending } = await admin
      .from('trip_cities')
      .select('id, pending_day_offset')
      .eq('trip_id', tripId)
      .is('parent_city_id', null)
      .neq('id', cityId)
      .gt('pending_day_offset', prevPendingOffset);
    for (const c of laterPending || []) {
      const { error } = await admin.from('trip_cities').update({ pending_day_offset: c.pending_day_offset + delta }).eq('id', c.id);
      if (error) console.error('[trip-templates:duration] shift pending offset:', error);
    }
  }
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
    .select('id, destination_id, start_date, pending_day_offset')
    .eq('id', cityId)
    .eq('trip_id', tripId)
    .maybeSingle();
  if (!city) return res.status(404).json({ ok: false, reason: 'Ville introuvable.' });

  const { data: template } = await admin.from('trip_templates').select('id, nb_days').eq('id', templateId).maybeSingle();
  if (!template) return res.status(404).json({ ok: false, reason: 'Modèle introuvable.' });

  // visit_date/pending_day_index inclus : servent à mesurer la durée RÉELLE
  // (contentSpanDays) occupée par l'ancien contenu de la ville AVANT de le
  // supprimer — nécessaire à applyReplacedCityDuration plus bas.
  const { data: existingActivities } = await admin.from('trip_activities').select('id, visit_date, pending_day_index').eq('city_id', cityId);
  const prevSpan = contentSpanDays(existingActivities);
  await cleanupActivityAttachments(admin, (existingActivities || []).map((a) => a.id));

  const { error: deleteError } = await admin.from('trip_activities').delete().eq('city_id', cityId);
  if (deleteError) {
    console.error('[trip-templates:import] delete existing:', deleteError);
    return res.status(500).json({ ok: false, reason: "L'import a échoué." });
  }

  // Anciennes excursions rattachées à la ville remplacée : supprimées avant
  // réimport, comme dans l'import de voyage entier (handleImportTrip) —
  // importDaytripChildren recrée celles du nouveau planning, sans nettoyage
  // préalable elles s'ajouteraient en doublon à celles de l'ancien contenu.
  const { data: oldDaytrips } = await admin.from('trip_cities').select('id').eq('parent_city_id', cityId);
  if (oldDaytrips?.length) {
    const oldDaytripIds = oldDaytrips.map((d) => d.id);
    const { data: oldDaytripActivities } = await admin.from('trip_activities').select('id').in('city_id', oldDaytripIds);
    await cleanupActivityAttachments(admin, (oldDaytripActivities || []).map((a) => a.id));
    const { error: deleteDaytripActError } = await admin.from('trip_activities').delete().in('city_id', oldDaytripIds);
    if (deleteDaytripActError) console.error('[trip-templates:import] delete old daytrip activities:', deleteDaytripActError);
    const { error: deleteDaytripError } = await admin.from('trip_cities').delete().in('id', oldDaytripIds);
    if (deleteDaytripError) console.error('[trip-templates:import] delete old daytrips:', deleteDaytripError);
  }

  const activities = await fetchTemplateDaysAndActivities(admin, templateId);
  const importedCount = await importActivitiesInto(admin, { tripId, cityId, activities, startDate: city.start_date });

  // Tout ce qui suit la ville est décalé si sa durée réellement occupée change
  // (ex. planning de Tokyo qui occupait 2 jours remplacé par un de 4 : les
  // villes suivantes reculent de 2 jours) — voir applyReplacedCityDuration.
  // Volontairement AUCUN pending_day_offset posé ici pour une ville sans
  // date : l'ordre d'un panier de villes importées n'est pas forcément
  // l'ordre voulu dans le voyage — c'est l'utilisateur qui place chaque ville
  // en choisissant sa date de début (icône calendrier mise en avant sur la
  // ville tant qu'elle attend sa date, voir CityBlock), et l'ancrage
  // anchor_city_pending_days fait le reste.
  await applyReplacedCityDuration(admin, {
    tripId,
    cityId,
    prevStartDate: city.start_date,
    prevPendingOffset: city.pending_day_offset,
    prevDays: prevSpan,
    newDays: template.nb_days,
  });

  // Ville datée dont le nouveau contenu déborde de la fin du voyage (au-delà
  // du décalage ci-dessus, qui a déjà déplacé la fin d'autant si un espacement
  // existait) : étendre la date de fin, comme pour l'import de voyage complet.
  if (city.start_date && template.nb_days) {
    await extendTripEndIfNeeded(admin, tripId, addDays(city.start_date, template.nb_days - 1));
  }

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
// Remplace ENTIÈREMENT la planification de la destination visée (contrairement
// à l'import ville par ville, handleImport ci-dessus, qui fusionne) : toutes
// les villes de base existantes de cette destination sont supprimées avant
// l'import, puis chaque membre du groupe crée une ville `trip_cities` fraîche
// (dans l'ordre du voyage source), avec, si le voyage a déjà une date de
// départ (ou une autre destination déjà datée), une start_date calée dessus +
// le décalage de la ville dans le voyage source. Sans dates, tout arrive "non
// planifié", en attente que l'utilisateur choisisse une date de départ.
async function handleImportTrip(admin, user, body, res) {
  // cityNameOverrides { [templateId]: nom traduit } : le client y met le nom
  // traduit dans la langue du visiteur (ex. "Beijing"), affiché lors du choix
  // du groupe — sans lui, la ville créée par cet import prendrait le nom brut
  // de l'auteur du planning (member.city_name, souvent en français, "Pékin"),
  // différent de ce que le visiteur vient de voir et choisir. Jamais fait
  // confiance aveuglément : juste une chaîne de repli si absente/vide.
  const { tripId, destinationId, groupId, cityNameOverrides } = body;
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

  // Un import de voyage COMPLET remplace la planification de cette
  // destination plutôt que de la compléter (contrairement à l'import ville
  // par ville, voir handleImport, qui fusionne) — sinon, répéter l'import
  // (ou en tester plusieurs) empilait indéfiniment des villes dans la même
  // destination. Toutes les villes de base de CETTE destination (et leurs
  // excursions/activités/hébergements/pièces jointes) sont donc effacées
  // AVANT l'import ; les autres destinations du voyage ne sont pas touchées.
  // L'utilisateur est averti de cette perte avant de valider, voir
  // fullTripSuggestions.confirmReplaceText côté client.
  const { data: oldBaseCities } = await admin
    .from('trip_cities')
    .select('id')
    .eq('destination_id', destinationId)
    .is('parent_city_id', null);
  const oldBaseCityIds = (oldBaseCities || []).map((c) => c.id);
  if (oldBaseCityIds.length) {
    const { data: oldDaytrips } = await admin.from('trip_cities').select('id').in('parent_city_id', oldBaseCityIds);
    const oldDaytripIds = (oldDaytrips || []).map((d) => d.id);
    const oldCityIds = [...oldBaseCityIds, ...oldDaytripIds];
    const { data: oldActivities } = await admin.from('trip_activities').select('id').in('city_id', oldCityIds);
    await cleanupActivityAttachments(admin, (oldActivities || []).map((a) => a.id));
    const { error: deleteActError } = await admin.from('trip_activities').delete().in('city_id', oldCityIds);
    if (deleteActError) console.error('[trip-templates:import-trip] delete old activities:', deleteActError);
    const { error: deleteLodgingsError } = await admin.from('trip_lodgings').delete().in('city_id', oldCityIds);
    if (deleteLodgingsError) console.error('[trip-templates:import-trip] delete old lodgings:', deleteLodgingsError);
    const { error: deleteCitiesError } = await admin.from('trip_cities').delete().in('id', oldCityIds);
    if (deleteCitiesError) console.error('[trip-templates:import-trip] delete old cities:', deleteCitiesError);
  }

  // Point d'ancrage des dates importées : le lendemain de la dernière journée
  // RÉELLEMENT occupée par une activité datée dans les AUTRES destinations du
  // voyage, pas trip.start_date directement — sinon un import dans une 2e
  // destination (qui a déjà des villes datées ailleurs) chevaucherait
  // silencieusement ce qui existe déjà. Repli sur trip.start_date si rien
  // n'est encore daté ailleurs (cas courant d'un voyage à une seule
  // destination) — c'est alors exactement la date de départ du voyage.
  // La destination visée venant d'être entièrement vidée ci-dessus, aucune
  // exclusion à faire : ses éventuelles anciennes dates ont disparu avec elle.
  const { data: datedActs } = await admin
    .from('trip_activities')
    .select('visit_date')
    .eq('trip_id', tripId)
    .not('visit_date', 'is', null);
  const latestEndDate = (datedActs || [])
    .reduce((max, a) => (!max || a.visit_date > max ? a.visit_date : max), null);
  const importAnchorDate = latestEndDate ? addDays(latestEndDate, 1) : trip.start_date;

  // Même protection anti-chevauchement pour le flux SANS dates : un 2e import
  // "en attente" (pending_day_offset) doit continuer APRÈS le premier, pas
  // repartir du jour 1 — sinon, au moment de l'ancrage différé, les deux
  // voyages importés se superposeraient silencieusement sur les mêmes dates.
  // Chaque ville pending (des AUTRES destinations, celle-ci vient d'être
  // vidée) contribue son décalage + sa PROPRE durée réelle (dérivée de ses
  // activités encore en attente, pending_day_index), jamais moins d'1 jour.
  let pendingBaseOffset = 0;
  if (!importAnchorDate) {
    const { data: pendingCities } = await admin
      .from('trip_cities')
      .select('id, pending_day_offset')
      .eq('trip_id', tripId)
      .is('parent_city_id', null)
      .not('pending_day_offset', 'is', null);
    if (pendingCities?.length) {
      const { data: pendingActs } = await admin
        .from('trip_activities')
        .select('city_id, pending_day_index')
        .in('city_id', pendingCities.map((c) => c.id))
        .not('pending_day_index', 'is', null);
      for (const c of pendingCities) {
        const ownMaxIndex = (pendingActs || [])
          .filter((a) => a.city_id === c.id)
          .reduce((m, a) => Math.max(m, a.pending_day_index), 0);
        pendingBaseOffset = Math.max(pendingBaseOffset, c.pending_day_offset + Math.max(ownMaxIndex, 1));
      }
    }
  }

  // Villes créées séquentiellement (pas en Promise.all) : leurs positions
  // s'enchaînent et l'ordre d'insertion doit rester celui du voyage source.
  let importedActivitiesCount = 0;
  const importedTemplateIds = [];
  // Dernière journée réellement datée par cet import : sert à étendre la date
  // de fin du voyage si le contenu importé déborde (voir après la boucle).
  let maxImportedEnd = null;
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const offset = member.group_day_offset != null ? Math.max(0, member.group_day_offset) : null;
    const startDate = importAnchorDate && offset != null ? addDays(importAnchorDate, offset) : null;

    const { data: city, error: cityError } = await admin
      .from('trip_cities')
      .insert({
        trip_id: tripId,
        destination_id: destinationId,
        name: (cityNameOverrides?.[member.id] || '').trim() || member.city_name,
        position: i,
        start_date: startDate,
        // Voyage sans aucune date : le décalage de la ville par rapport au
        // jour 1 du voyage source est conservé (décalé après les éventuels
        // imports "en attente" précédents, voir pendingBaseOffset) — dès que
        // l'utilisateur choisira sa date de départ, elle deviendra le jour 1
        // et toutes les villes/activités en attente seront datées
        // automatiquement (RPC anchor_trip_pending_days,
        // planning_modele_v10.sql).
        pending_day_offset: startDate == null && offset != null ? pendingBaseOffset + offset : null,
      })
      .select('id')
      .single();
    if (cityError) { console.error('[trip-templates:import-trip] insert city:', cityError); continue; }
    const cityId = city.id;

    const activities = await fetchTemplateDaysAndActivities(admin, member.id);
    importedActivitiesCount += await importActivitiesInto(admin, { tripId, cityId, activities, startDate });

    if (startDate && member.nb_days) {
      const memberEnd = addDays(startDate, member.nb_days - 1);
      if (!maxImportedEnd || memberEnd > maxImportedEnd) maxImportedEnd = memberEnd;
    }

    const childIds = await importDaytripChildren(admin, {
      tripId,
      destinationId,
      parentCityId: cityId,
      templateId: member.id,
      parentStartDate: startDate,
    });
    importedTemplateIds.push(member.id, ...childIds);
  }

  if (importedTemplateIds.length) {
    await admin.rpc('increment_template_uses_many', { template_ids: importedTemplateIds });
    await admin.rpc('increment_template_group_uses', { group_id: groupId });
  }

  // Contenu importé débordant de la date de fin du voyage : avant, ces
  // derniers jours devenaient invisibles (DayView n'affiche que les jours
  // entre start_date et end_date, et les activités datées au-delà ne sont ni
  // affichées ni "non planifiées") — le dernier jour du voyage importé était
  // perdu en silence. La fin est étendue et chaque jour ajouté est signalé
  // d'un badge dans la vue par jour — voir extendTripEndIfNeeded. Le groupe
  // s'ancrant toujours sur le calendrier du voyage lui-même (voir
  // importAnchorDate plus haut), jamais avant, il n'y a plus besoin d'étendre
  // le départ du voyage en sens inverse ici.
  const extendedDays = await extendTripEndIfNeeded(admin, tripId, maxImportedEnd);

  return res.status(200).json({
    ok: true,
    importedCitiesCount: members.length,
    importedCount: importedActivitiesCount,
    unplanned: !importAnchorDate,
    extendedDays,
  });
}

// ════════════════════════════════════════════════════════════════
// action: 'get-city-image' — photo de ville (cache Supabase city_images,
// sinon Unsplash à la volée) : voir api/_lib/cityImages.js pour la logique
// de résolution, partagée avec scripts/fetch-city-images.mjs (import initial
// en masse des villes éditoriales).
//
// Batch (`cities`) plutôt qu'une ville à la fois : les écrans de suggestion
// affichent plusieurs villes d'un coup (voir handleSuggest/handleSuggestTrip/
// handleListCities ci-dessus), un aller-retour unique évite une rafale de
// requêtes HTTP séquentielles côté front. Résolues EN PARALLÈLE (Promise.all)
// pour rester rapide même si plusieurs villes ne sont pas encore en cache et
// déclenchent un appel Unsplash live — une fonction serverless a un temps
// d'exécution limité (10s sur le plan Hobby Vercel), d'où aussi le plafond
// MAX_CITY_IMAGE_BATCH ci-dessous.
//
// Par ville :
//  - `countryName` (nom anglais du pays, ex: "Austria") : FACULTATIF mais
//    fortement recommandé — sans lui la requête Unsplash se limite au nom de
//    ville seul (moins précis, voir cityImages.js). Le front le connaît déjà
//    (COUNTRIES depuis src/data/index.js), pas besoin de le résoudre ici.
//  - `countryAlpha2` (ex: "AT") : facultatif, affine le géocodage utilisé
//    pour le matching cross-langue (voir cityImages.js).
//  - `lat`/`lng` (facultatifs) : coordonnées déjà connues côté appelant. À
//    fournir pour une ville éditoriale si le front les a (trip_templates les
//    connaît) — évite un géocodage et rend le matching cross-langue
//    bulletproof. Sinon la ville est géocodée côté serveur (cache permanent).
//  - `sourceLanguage` : INDICE de langue du `cityName` fourni. 'fr' par
//    défaut — c'est TOUJOURS la bonne valeur pour une ville venant d'une
//    suggestion éditoriale (cityName = trip_templates.city_name, toujours en
//    français, JAMAIS le libellé traduit affiché à l'écran — voir
//    cityNameOverrides.js). Pour une ville tapée à la main par un
//    utilisateur, passer la langue du site (ex: 'es' pour "Sevilla"). Ce
//    n'est qu'un indice, jamais bloquant : la résolution passe d'abord par le
//    géocodeur (nom anglais canonique, indépendant de sourceLanguage — voir
//    resolveEnglishCityNameForQuery dans cityImages.js), sourceLanguage ne
//    sert qu'au repli Google Translate si le géocodeur échoue. La requête
//    Unsplash reste toujours en anglais quoi qu'il arrive, et la cohérence
//    cross-langue est garantie par le matching géographique, pas par cet
//    indice.
const MAX_CITY_IMAGE_BATCH = 8;

async function handleGetCityImage(admin, body, res) {
  const { cities } = body;
  if (!Array.isArray(cities) || !cities.length) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  const batch = cities
    .slice(0, MAX_CITY_IMAGE_BATCH)
    .filter((c) => c?.cityName && c?.countryCode);

  const images = await Promise.all(batch.map(async (c) => ({
    cityName: c.cityName,
    countryCode: c.countryCode,
    image: await resolveCityImage(admin, c.cityName, c.countryCode, {
      countryName: c.countryName || null,
      countryAlpha2: c.countryAlpha2 || null,
      sourceLanguage: c.sourceLanguage || 'fr',
      lat: typeof c.lat === 'number' ? c.lat : null,
      lng: typeof c.lng === 'number' ? c.lng : null,
    }),
  })));

  return res.status(200).json({ ok: true, images });
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
  if (action === 'list-cities') return handleListCities(admin, body, res);
  if (action === 'import') return handleImport(admin, user, body, res);
  if (action === 'import-trip') return handleImportTrip(admin, user, body, res);
  if (action === 'get-city-image') return handleGetCityImage(admin, body, res);
  return res.status(400).json({ ok: false, reason: 'Action invalide.' });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
