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
    .select('id, destination_id, start_date, planned_days')
    .eq('id', cityId)
    .eq('trip_id', tripId)
    .maybeSingle();
  if (!city) return res.status(404).json({ ok: false, reason: 'Ville introuvable.' });

  const { data: template } = await admin.from('trip_templates').select('id, nb_days').eq('id', templateId).maybeSingle();
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

  // Ville sans nombre de jours renseigné (l'utilisateur regarde les
  // suggestions AVANT de décider combien de temps rester) : la durée du
  // planning importé devient sa durée — c'est précisément la décision qu'il
  // vient de prendre en choisissant ce planning. Jamais écrasé s'il avait
  // déjà renseigné une durée lui-même.
  if (city.planned_days == null && template.nb_days) {
    const { error: daysError } = await admin
      .from('trip_cities')
      .update({ planned_days: template.nb_days })
      .eq('id', cityId);
    if (daysError) console.error('[trip-templates:import] set planned_days:', daysError);
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

// Comparaison de noms de ville insensible à la casse et aux accents (mêmes
// limites que les autres comparaisons de noms de l'app, ex. namesMatch côté
// client dans planningUtils.js) — deux orthographes réellement différentes
// d'une même ville (ex. "Pékin" vs "Beijing") ne matchent PAS ici : seule une
// différence de casse/accentuation est tolérée, contrairement au matching par
// coordonnées utilisé ailleurs dans ce fichier (resolveCityCoordinates).
function normalizeCityName(name) {
  return (name || '').normalize('NFD').replace(/\p{Mn}/gu, '').trim().toLowerCase();
}

// ════════════════════════════════════════════════════════════════
// action: 'import-trip' — import d'un voyage entier (groupe de modèles)
// ════════════════════════════════════════════════════════════════
// Pour chaque modèle membre du groupe : si sa ville correspond GÉOGRAPHIQUEMENT
// à une ville de base déjà présente dans la destination visée (coordonnées
// proches, voir resolveCityCoordinates — reconnaît "Pékin"/"Beijing" comme la
// même ville même si les noms diffèrent totalement), REMPLACE le contenu de
// cette ville existante (mêmes helpers que l'import par ville, handleImport
// ci-dessus : suppression des activités + excursions existantes puis réimport
// dans le MÊME cityId) ; sinon, crée une nouvelle ville `trip_cities` (dans
// l'ordre du voyage source, après les villes existantes), avec planned_days
// et, si le voyage a une date de départ, une start_date calée dessus + le
// décalage de la ville dans le voyage source. Sans dates, tout arrive "non
// planifié". Repli sur normalizeCityName (texte) si le géocodage échoue pour
// une ville (clé API absente, ville introuvable) — jamais de blocage total.
async function handleImportTrip(admin, user, body, res) {
  const { tripId, destinationId, groupId, countryAlpha2 } = body;
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
    .select('id, city_name, city_lat, city_lng, nb_days, group_day_offset')
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

  // Même protection anti-chevauchement pour le flux SANS dates : un 2e import
  // "en attente" (pending_day_offset) doit continuer APRÈS le premier, pas
  // repartir du jour 1 — sinon, au moment de l'ancrage différé, les deux
  // voyages importés se superposeraient silencieusement sur les mêmes dates
  // (exactement le chevauchement que latestEndDate ci-dessus évite pour le
  // flux daté).
  let pendingBaseOffset = 0;
  if (!importAnchorDate) {
    const { data: pendingCities } = await admin
      .from('trip_cities')
      .select('pending_day_offset, planned_days')
      .eq('trip_id', tripId)
      .is('parent_city_id', null)
      .not('pending_day_offset', 'is', null);
    pendingBaseOffset = (pendingCities || []).reduce(
      (max, c) => Math.max(max, c.pending_day_offset + (c.planned_days || 1)), 0
    );
  }

  const { count: existingCities } = await admin
    .from('trip_cities')
    .select('id', { count: 'exact', head: true })
    .eq('destination_id', destinationId)
    .is('parent_city_id', null);
  const startPosition = existingCities || 0;

  // Villes de base déjà présentes dans cette destination : un membre du
  // groupe importé dont la ville correspond REMPLACE son contenu plutôt que
  // de créer un doublon. Matching PRINCIPAL par coordonnées (reconnaît
  // "Pékin"/"Beijing" comme la même ville) — trip_cities n'a pas de lat/lng
  // stockées, on géocode donc chaque ville existante une fois ici (mis en
  // cache ensuite, table city_geocache). Repli sur normalizeCityName (texte,
  // accents/casse seulement) si le géocodage échoue pour cette ville
  // existante OU pour le membre importé (clé API absente, ville introuvable) —
  // jamais de blocage total du fait d'un géocodage indisponible.
  const { data: existingBaseCities } = await admin
    .from('trip_cities')
    .select('id, name, start_date, planned_days')
    .eq('destination_id', destinationId)
    .is('parent_city_id', null);
  const existingCityByName = {};
  const existingCityWithCoords = [];
  for (const c of existingBaseCities || []) {
    existingCityByName[normalizeCityName(c.name)] = c;
    const coords = await resolveCityCoordinates(admin, { countryCode: destination.country_code, cityName: c.name, countryAlpha2 });
    if (coords) existingCityWithCoords.push({ ...c, coords });
  }

  const findExistingCityFor = async (member) => {
    if (member.city_lat != null && member.city_lng != null && existingCityWithCoords.length) {
      const match = existingCityWithCoords.find(
        (c) => distanceKm(member.city_lat, member.city_lng, c.coords.lat, c.coords.lng) <= SAME_CITY_RADIUS_KM
      );
      if (match) return match;
    }
    return existingCityByName[normalizeCityName(member.city_name)] || null;
  };

  // Villes créées/remplacées séquentiellement (pas en Promise.all) : leurs
  // positions s'enchaînent (pour les créations) et l'ordre d'insertion doit
  // rester celui du voyage source.
  let importedActivitiesCount = 0;
  const importedTemplateIds = [];
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const offset = member.group_day_offset != null ? Math.max(0, member.group_day_offset) : null;
    const existingCity = await findExistingCityFor(member);

    let cityId;
    let startDate;

    if (existingCity) {
      // Remplacement : même logique que l'import par ville (handleImport
      // ci-dessus) — supprime les activités existantes de la ville (+ leurs
      // pièces jointes Storage) puis réimporte dans le MÊME cityId, sans créer
      // de nouvelle ligne trip_cities. L'ancre de dates reste celle DÉJÀ
      // choisie pour cette ville (sa propre start_date), pas celle du voyage
      // source importé — cohérent avec le reste de son calendrier existant.
      cityId = existingCity.id;
      startDate = existingCity.start_date;

      const { data: oldActivities } = await admin.from('trip_activities').select('id').eq('city_id', cityId);
      await cleanupActivityAttachments(admin, (oldActivities || []).map((a) => a.id));
      const { error: deleteActError } = await admin.from('trip_activities').delete().eq('city_id', cityId);
      if (deleteActError) console.error('[trip-templates:import-trip] delete existing activities:', deleteActError);

      // Anciennes excursions rattachées à la ville remplacée : supprimées
      // avant réimport — importDaytripChildren recrée les excursions du
      // nouveau planning, sans nettoyage préalable elles s'ajouteraient en
      // doublon à celles laissées par l'ancien contenu.
      const { data: oldDaytrips } = await admin.from('trip_cities').select('id').eq('parent_city_id', cityId);
      if (oldDaytrips?.length) {
        const oldDaytripIds = oldDaytrips.map((d) => d.id);
        const { data: oldDaytripActivities } = await admin.from('trip_activities').select('id').in('city_id', oldDaytripIds);
        await cleanupActivityAttachments(admin, (oldDaytripActivities || []).map((a) => a.id));
        const { error: deleteDaytripActError } = await admin.from('trip_activities').delete().in('city_id', oldDaytripIds);
        if (deleteDaytripActError) console.error('[trip-templates:import-trip] delete old daytrip activities:', deleteDaytripActError);
        const { error: deleteDaytripError } = await admin.from('trip_cities').delete().in('id', oldDaytripIds);
        if (deleteDaytripError) console.error('[trip-templates:import-trip] delete old daytrips:', deleteDaytripError);
      }

      // Même règle que handleImport : la durée du planning importé ne devient
      // la durée de la ville que si elle n'en avait pas déjà une — jamais
      // écrasée si l'utilisateur l'avait renseignée lui-même.
      if (existingCity.planned_days == null && member.nb_days) {
        const { error: daysError } = await admin.from('trip_cities').update({ planned_days: member.nb_days }).eq('id', cityId);
        if (daysError) console.error('[trip-templates:import-trip] set planned_days:', daysError);
      }
    } else {
      startDate = importAnchorDate && offset != null ? addDays(importAnchorDate, offset) : null;
      const { data: city, error: cityError } = await admin
        .from('trip_cities')
        .insert({
          trip_id: tripId,
          destination_id: destinationId,
          name: member.city_name,
          position: startPosition + i,
          planned_days: member.nb_days,
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
      cityId = city.id;
    }

    const activities = await fetchTemplateDaysAndActivities(admin, member.id);
    importedActivitiesCount += await importActivitiesInto(admin, { tripId, cityId, activities, startDate });

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
  if (action === 'list-cities') return handleListCities(admin, body, res);
  if (action === 'import') return handleImport(admin, user, body, res);
  if (action === 'import-trip') return handleImportTrip(admin, user, body, res);
  return res.status(400).json({ ok: false, reason: 'Action invalide.' });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
