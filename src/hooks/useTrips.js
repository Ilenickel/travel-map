import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { cleanupAttachmentsStorage } from '../lib/attachments';
import { addDaysToDateStr } from '../lib/planningUtils';

export function useTrips(userId) {
  const { t } = useTranslation();
  const [trips, setTrips] = useState([]);
  // Agrégats par voyage pour les cartes de l'écran d'accueil (comptage léger,
  // pas le contenu complet chargé par loadTripData) : { [tripId]: { cities,
  // activities, done, countries: [{ code, name }] } }. Résolu en 3 requêtes
  // groupées (.in sur tous les tripIds) plutôt qu'un chargement complet par
  // voyage — l'accueil peut afficher beaucoup de voyages, on ne veut ni leurs
  // activités détaillées ni un aller-retour par carte.
  const [tripStats, setTripStats] = useState({});
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(false);
  // Annulation (Ctrl+Z) — un seul niveau, comme avant, mais généralisé à 3 types
  // d'entités au lieu de la seule activité : { cities, activities, lodgings }
  // (tableaux, vides sauf ceux concernés). Les lignes capturées gardent leur `id`
  // d'origine pour que la ré-insertion restaure exactement la même ligne (et pas
  // une copie avec un nouvel id, qui casserait toute référence externe déjà
  // affichée ailleurs le temps du rendu suivant).
  const [lastDeletedItem, setLastDeletedItem] = useState(null);

  const currentTripRef = useRef(null);
  // Compteur incrémenté de façon synchrone (pas via un state) : deux Ctrl+C très
  // rapprochés peuvent tous les deux lire le même instantané de tripData avant
  // qu'aucun des deux n'ait eu le temps de se refléter — sans ce compteur, les
  // deux copies obtiendraient exactement la même position.
  const duplicateOffsetRef = useRef(0);

  // ─── Load trips list (own + shared) ───
  const loadTrips = useCallback(async () => {
    if (!userId) return;
    const [{ data: ownTrips }, { data: memberEntries }] = await Promise.all([
      supabase.from('trips').select('*').eq('user_id', userId).order('updated_at', { ascending: false }),
      supabase.from('trip_members').select('trip_id, trips(*)').eq('user_id', userId),
    ]);
    const sharedTrips = (memberEntries || []).map(m => m.trips).filter(Boolean);
    const all = [...(ownTrips || []), ...sharedTrips]
      .filter((t, i, arr) => arr.findIndex(x => x.id === t.id) === i)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    setTrips(all);
    loadTripStats(all.map(t => t.id));
  }, [userId]);

  // Agrégats des cartes d'accueil (voir tripStats plus haut). Villes de BASE
  // uniquement (parent_city_id null — les excursions ne comptent pas comme des
  // étapes), activités hors transport (cohérent avec le compteur de l'en-tête),
  // et pays ordonnés par position (le 1er sert d'image de fond à la carte).
  // `cityNames` : noms ordonnés par position, pour l'affichage "Beijing,
  // Chengdu, Shanghai…" des cartes (voir HomeTripCard) — la troncature visuelle
  // (ellipsis CSS) se charge de gérer le cas "beaucoup de villes" sans qu'on
  // ait à limiter le nombre ici.
  const loadTripStats = useCallback(async (tripIds) => {
    if (!tripIds || !tripIds.length) { setTripStats({}); return; }
    const [{ data: cities }, { data: acts }, { data: dests }] = await Promise.all([
      supabase.from('trip_cities').select('trip_id, parent_city_id, name, position').in('trip_id', tripIds),
      supabase.from('trip_activities').select('trip_id, category, is_done').in('trip_id', tripIds),
      supabase.from('trip_destinations').select('trip_id, country_code, country_name, position').in('trip_id', tripIds),
    ]);
    const stats = {};
    const ensure = (id) => (stats[id] ||= { cities: 0, cityNames: [], activities: 0, done: 0, countries: [] });
    const citiesByTrip = {};
    for (const c of cities || []) {
      if (c.parent_city_id) continue;
      ensure(c.trip_id).cities++;
      (citiesByTrip[c.trip_id] ||= []).push(c);
    }
    for (const id in citiesByTrip) {
      stats[id].cityNames = citiesByTrip[id].sort((a, b) => a.position - b.position).map((c) => c.name);
    }
    for (const a of acts || []) {
      if (a.category === 'transport') continue;
      const s = ensure(a.trip_id);
      s.activities++;
      if (a.is_done) s.done++;
    }
    const destsByTrip = {};
    for (const d of dests || []) (destsByTrip[d.trip_id] ||= []).push(d);
    for (const id in destsByTrip) {
      ensure(id).countries = destsByTrip[id]
        .sort((a, b) => a.position - b.position)
        .map(d => ({ code: d.country_code, name: d.country_name }));
    }
    setTripStats(stats);
  }, []);

  useEffect(() => {
    if (!userId) {
      setTrips([]);
      setTripStats({});
      setTripData(null);
      setSelectedTripId(null);
      return;
    }
    loadTrips();
  }, [userId, loadTrips]);

  // ─── Load selected trip data ───
  const loadTripData = useCallback(async (tripId) => {
    currentTripRef.current = tripId;
    setLoading(true);
    const [
      { data: trip },
      { data: destinations },
      { data: cities },
      { data: activities },
      { data: groups },
      { data: lodgings, error: lodgingsError },
    ] = await Promise.all([
      supabase.from('trips').select('*').eq('id', tripId).single(),
      supabase.from('trip_destinations').select('*').eq('trip_id', tripId).order('position'),
      supabase.from('trip_cities').select('*').eq('trip_id', tripId).order('position'),
      supabase.from('trip_activities').select('*').eq('trip_id', tripId).order('position'),
      supabase.from('trip_groups').select('*').eq('trip_id', tripId).order('position'),
      supabase.from('trip_lodgings').select('*').eq('trip_id', tripId).order('position'),
    ]);
    if (currentTripRef.current !== tripId) return;
    if (lodgingsError) console.error('load trip_lodgings failed (avez-vous joué supabase/planning_tables_v8.sql ?):', lodgingsError);
    setTripData({
      trip: trip || null,
      destinations: destinations || [],
      cities: cities || [],
      activities: activities || [],
      groups: groups || [],
      lodgings: lodgings || [],
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    // Un Ctrl+Z en attente d'un autre voyage n'a plus de sens ici (et restaurerait
    // silencieusement une activité dans le mauvais voyage affiché à l'écran) — avant
    // le "return" ci-dessous aussi (voyage fermé sans qu'un autre soit rouvert),
    // pour ne jamais dépendre du fait que l'éditeur soit démonté entre-temps.
    setLastDeletedItem(null);
    if (!selectedTripId) { setTripData(null); return; }
    loadTripData(selectedTripId);
  }, [selectedTripId, loadTripData]);

  // ─── Touch updated_at ───
  const touchTrip = useCallback(async (tripId) => {
    const ts = new Date().toISOString();
    setTrips(prev => prev.map(t => t.id === tripId ? { ...t, updated_at: ts } : t));
  }, []);

  // Étend trips.end_date si l'ancrage différé d'un planning importé (voir
  // anchor_city_pending_days/anchor_trip_pending_days ci-dessous) déborde de
  // la fin actuelle — sinon les derniers jours importés se retrouveraient
  // datés HORS du calendrier affiché (DayView ne montre que les jours entre
  // start_date/end_date, et une activité datée en dehors n'apparaît ni là ni
  // dans les "non planifiées" : elle disparaît en silence). Symétrique de
  // extendTripEndIfNeeded côté serveur (api/trip-templates.js), pour le même
  // problème déclenché ici par un ancrage plutôt que par un import direct.
  // `currentEndDate` : fin du voyage AVANT cet ancrage — si elle n'existait
  // pas encore, la nouvelle fin est simplement déduite (rien "d'ajouté" à
  // signaler) ; si elle existait déjà, les jours gagnés au-delà sont marqués
  // (trips.import_added_days, planning_modele_v12.sql) pour le badge de
  // DayView.
  const extendTripEndForAnchor = useCallback(async (tripId, currentEndDate, candidateEnd) => {
    if (!candidateEnd || (currentEndDate && candidateEnd <= currentEndDate)) return;
    const { error } = await supabase.from('trips').update({ end_date: candidateEnd }).eq('id', tripId);
    if (error) { console.error('[useTrips] extend end_date (ancrage):', error); return; }
    setTrips(prev => prev.map(t => t.id === tripId ? { ...t, end_date: candidateEnd } : t));
    if (!currentEndDate) return;
    const addedDays = [];
    for (let d = addDaysToDateStr(currentEndDate, 1); d <= candidateEnd; d = addDaysToDateStr(d, 1)) addedDays.push(d);
    const { data: tripRow, error: readError } = await supabase.from('trips').select('import_added_days').eq('id', tripId).maybeSingle();
    if (readError) {
      // Colonne absente (planning_modele_v12.sql pas encore joué) : la fin a
      // déjà été étendue ci-dessus, seul le badge est perdu — jamais bloquant.
      console.error('[useTrips] read import_added_days (avez-vous joué planning_modele_v12.sql ?):', readError);
      return;
    }
    const merged = [...new Set([...(tripRow?.import_added_days || []), ...addedDays])].sort();
    const { error: markError } = await supabase.from('trips').update({ import_added_days: merged }).eq('id', tripId);
    if (markError) console.error('[useTrips] set import_added_days (ancrage):', markError);
  }, []);

  // Étend l'ENVELOPPE de dates du voyage (start_date ET end_date) pour
  // couvrir le contenu d'une ville qu'on vient d'ancrer individuellement
  // (voir updateCity) — dans les DEUX sens : recule le départ si cette ville
  // commence plus tôt que tout ce qui était déjà daté, avance la fin si elle
  // va plus loin. Jamais l'inverse (l'enveloppe existante ne rétrécit
  // jamais). Contrairement à l'ancrage d'un voyage ENTIER (updateTrip,
  // anchor_trip_pending_days), où la date choisie par l'utilisateur EST par
  // définition le jour 1 fixe de tout ce qui s'ancre en même temps, ici
  // chaque ville est ancrée indépendamment, l'une après l'autre : rien ne
  // garantit que la première ville datée soit la plus précoce du voyage — une
  // ville datée ENSUITE peut très bien commencer avant. Le chevauchement
  // avec du contenu déjà présent sur ces mêmes jours est normal, pas empêché
  // : chaque ville garde ses propres activités, elles cohabitent simplement
  // sur le calendrier.
  const extendTripEnvelopeForAnchor = useCallback(async (tripId, currentStart, currentEnd, candidateStart, candidateEnd) => {
    if (!tripId) return;
    const hadAnyDate = !!(currentStart || currentEnd);
    const newStart = (!currentStart || candidateStart < currentStart) ? candidateStart : currentStart;
    const newEnd = (!currentEnd || candidateEnd > currentEnd) ? candidateEnd : currentEnd;
    if (newStart === currentStart && newEnd === currentEnd) return;

    const { error } = await supabase.from('trips').update({ start_date: newStart, end_date: newEnd }).eq('id', tripId);
    if (error) { console.error('[useTrips] extend trip envelope (ancrage):', error); return; }
    setTrips(prev => prev.map(t => t.id === tripId ? { ...t, start_date: newStart, end_date: newEnd } : t));

    // Voyage qui n'avait ENCORE aucune date du tout : l'enveloppe est
    // simplement déduite de ce premier contenu ancré, rien "d'ajouté" à
    // signaler par-dessus une enveloppe qui n'existait pas.
    if (!hadAnyDate) return;

    const addedDays = [];
    if (currentStart && newStart < currentStart) {
      for (let d = newStart; d < currentStart; d = addDaysToDateStr(d, 1)) addedDays.push(d);
    }
    if (currentEnd && newEnd > currentEnd) {
      for (let d = addDaysToDateStr(currentEnd, 1); d <= newEnd; d = addDaysToDateStr(d, 1)) addedDays.push(d);
    }
    if (!addedDays.length) return;
    const { data: tripRow, error: readError } = await supabase.from('trips').select('import_added_days').eq('id', tripId).maybeSingle();
    if (readError) {
      console.error('[useTrips] read import_added_days (avez-vous joué planning_modele_v12.sql ?):', readError);
      return;
    }
    const merged = [...new Set([...(tripRow?.import_added_days || []), ...addedDays])].sort();
    const { error: markError } = await supabase.from('trips').update({ import_added_days: merged }).eq('id', tripId);
    if (markError) console.error('[useTrips] set import_added_days (ancrage enveloppe):', markError);
  }, []);

  // ─── Trips CRUD ───

  const createTrip = useCallback(async () => {
    const { data, error } = await supabase.from('trips').insert({
      user_id: userId, title: t('trips.untitledDefault'), planning_mode: 'city',
    }).select().single();
    if (error || !data) return null;
    setTrips(prev => [data, ...prev]);
    setSelectedTripId(data.id);
    return data;
  }, [userId]);

  const updateTrip = useCallback(async (tripId, updates) => {
    const { error } = await supabase.from('trips').update(updates).eq('id', tripId);
    if (error) return;
    const ts = new Date().toISOString();
    setTrips(prev => prev.map(t => t.id === tripId ? { ...t, ...updates, updated_at: ts } : t));
    setTripData(prev => prev ? { ...prev, trip: { ...prev.trip, ...updates, updated_at: ts } } : prev);

    // Ancrage différé d'un import sans dates (voir planning_modele_v10.sql) :
    // si le voyage contient des villes importées "en attente de dates"
    // (pending_day_offset) et que l'utilisateur vient de choisir sa date de
    // départ, cette date devient le jour 1 — toutes les villes/activités en
    // attente reçoivent leurs vraies dates, en une fois (un changement de
    // date ULTÉRIEUR ne re-décale rien, comme pour un voyage déjà daté).
    if (updates.start_date && tripData?.trip?.id === tripId
      && tripData.cities.some(c => !c.parent_city_id && c.pending_day_offset != null)) {
      // Décalage réel maximal (base 0) atteint par l'ancrage de TOUT le
      // voyage — dérivé des VRAIES activités en attente (pending_day_index)
      // de chaque ville de base et de ses excursions rattachées : sans ça, la
      // fin du voyage pourrait être sous-estimée et faire sortir les derniers
      // jours importés du calendrier (datés, mais hors de la plage affichée
      // par DayView — ni visibles, ni "non planifiés").
      let maxOffset = 0;
      for (const c of tripData.cities) {
        if (c.parent_city_id || c.pending_day_offset == null) continue;
        const ownMaxIndex = tripData.activities
          .filter(a => a.city_id === c.id && a.pending_day_index != null)
          .reduce((m, a) => Math.max(m, a.pending_day_index), 0);
        if (ownMaxIndex > 0) maxOffset = Math.max(maxOffset, c.pending_day_offset + ownMaxIndex - 1);
        for (const child of tripData.cities) {
          if (child.parent_city_id !== c.id || child.pending_day_offset == null) continue;
          const childMaxIndex = tripData.activities
            .filter(a => a.city_id === child.id && a.pending_day_index != null)
            .reduce((m, a) => Math.max(m, a.pending_day_index), 0);
          if (childMaxIndex > 0) {
            maxOffset = Math.max(maxOffset, c.pending_day_offset + child.pending_day_offset + childMaxIndex - 1);
          }
        }
      }
      const candidateEnd = addDaysToDateStr(updates.start_date, maxOffset);

      const { error: anchorError } = await supabase.rpc('anchor_trip_pending_days', {
        p_trip_id: tripId, p_start_date: updates.start_date,
      });
      if (anchorError) { console.error('anchor_trip_pending_days failed:', anchorError); return; }

      // Date de fin déjà fournie explicitement dans CETTE même mise à jour
      // (ex. saisie manuelle départ+retour en une fois) : on la respecte,
      // jamais d'extension automatique par-dessus un choix explicite.
      if (updates.end_date === undefined) {
        await extendTripEndForAnchor(tripId, tripData.trip.end_date, candidateEnd);
      }
      await loadTripData(tripId);
    }
  }, [tripData, loadTripData, extendTripEndForAnchor]);

  const deleteTrip = useCallback(async (tripId) => {
    // Nettoyage Storage AVANT la suppression SQL : depuis planning_tables_v13.sql,
    // plus aucun trigger ne peut le faire à notre place (voir cleanupAttachmentsStorage).
    await cleanupAttachmentsStorage({ tripId });
    // Le RLS ne laisse le propriétaire supprimer sa ligne trips (les membres invités
    // n'ont qu'un accès UPDATE) : si la requête ne supprime rien (ex : appelée par
    // erreur sur un voyage partagé), on ne doit surtout pas le faire disparaître de
    // l'écran localement, sinon il semble supprimé alors qu'il existe toujours en base.
    const { data, error } = await supabase.from('trips').delete().eq('id', tripId).select('id');
    if (error || !data?.length) return;
    setTrips(prev => prev.filter(t => t.id !== tripId));
    setSelectedTripId(prev => {
      if (prev === tripId) { setTripData(null); return null; }
      return prev;
    });
  }, []);

  // Un membre (non organisateur) quitte un voyage partagé : il perd l'accès, le
  // voyage disparaît de sa liste/menu, et il ne peut plus l'ouvrir ni le modifier.
  const leaveTrip = useCallback(async (tripId) => {
    if (!userId) return;
    await supabase.from('trip_members').delete().eq('trip_id', tripId).eq('user_id', userId);
    setTrips(prev => prev.filter(t => t.id !== tripId));
    setSelectedTripId(prev => {
      if (prev === tripId) { setTripData(null); return null; }
      return prev;
    });
  }, [userId]);

  const duplicateTrip = useCallback(async (tripId) => {
    const source = trips.find(t => t.id === tripId);
    if (!source) return null;
    const { data: newTrip, error } = await supabase.from('trips').insert({
      user_id: userId, title: t('trips.copySuffix', { title: source.title }),
      planning_mode: source.planning_mode, start_date: source.start_date,
      end_date: source.end_date, notes: source.notes,
    }).select().single();
    if (error || !newTrip) return null;

    let srcData = tripData?.trip?.id === tripId ? tripData : null;
    if (!srcData) {
      const [{ data: dests }, { data: ctns }, { data: acts }, { data: grps }, { data: ldgs }] = await Promise.all([
        supabase.from('trip_destinations').select('*').eq('trip_id', tripId).order('position'),
        supabase.from('trip_cities').select('*').eq('trip_id', tripId).order('position'),
        supabase.from('trip_activities').select('*').eq('trip_id', tripId).order('position'),
        supabase.from('trip_groups').select('*').eq('trip_id', tripId).order('position'),
        supabase.from('trip_lodgings').select('*').eq('trip_id', tripId).order('position'),
      ]);
      srcData = { destinations: dests || [], cities: ctns || [], activities: acts || [], groups: grps || [], lodgings: ldgs || [] };
    }

    const destMap = {};
    for (const d of srcData.destinations) {
      const { data: nd } = await supabase.from('trip_destinations').insert({
        trip_id: newTrip.id, country_code: d.country_code, country_name: d.country_name, position: d.position,
      }).select().single();
      if (nd) destMap[d.id] = nd.id;
    }
    const cityMap = {};
    // Villes de base d'abord (pour pouvoir remapper parent_city_id des excursions ensuite)
    const baseCities = srcData.cities.filter(c => !c.parent_city_id);
    const daytripCities = srcData.cities.filter(c => c.parent_city_id);
    for (const c of baseCities) {
      const newDestId = destMap[c.destination_id];
      if (!newDestId) continue;
      const { data: nc } = await supabase.from('trip_cities').insert({
        trip_id: newTrip.id, destination_id: newDestId, name: c.name, position: c.position,
      }).select().single();
      if (nc) cityMap[c.id] = nc.id;
    }
    for (const c of daytripCities) {
      const newDestId = destMap[c.destination_id];
      const newParentId = cityMap[c.parent_city_id];
      if (!newDestId || !newParentId) continue;
      const { data: nc } = await supabase.from('trip_cities').insert({
        trip_id: newTrip.id, destination_id: newDestId, name: c.name, position: c.position,
        parent_city_id: newParentId, is_daytrip: true,
      }).select().single();
      if (nc) cityMap[c.id] = nc.id;
    }
    const groupMap = {};
    for (const g of srcData.groups) {
      const { data: ng } = await supabase.from('trip_groups').insert({
        trip_id: newTrip.id, name: g.name, color: g.color, position: g.position,
      }).select().single();
      if (ng) groupMap[g.id] = ng.id;
    }
    // Ni .select() ni vérification d'erreur avant : un insert qui échoue (colonne
    // manquante faute d'avoir joué la dernière migration, contrainte violée...)
    // passait inaperçu — la copie du voyage semblait réussie (pays/villes créés)
    // mais se retrouvait avec des activités ou hébergements manquants en silence.
    let failedActivities = 0;
    for (const a of srcData.activities) {
      const newCityId = cityMap[a.city_id];
      if (!newCityId) continue;
      const { error: actErr } = await supabase.from('trip_activities').insert({
        trip_id: newTrip.id, city_id: newCityId, name: a.name, description: a.description,
        visit_date: a.visit_date, visit_time: a.visit_time, category: a.category,
        transport_mode: a.transport_mode, duration_minutes: a.duration_minutes,
        cost: a.cost, position: a.position, place_lat: a.place_lat, place_lng: a.place_lng,
        place_address: a.place_address, group_id: a.group_id ? (groupMap[a.group_id] || null) : null,
        // is_done volontairement absent : une copie de voyage repart avec une
        // checklist vierge, pas avec les coches du voyage d'origine.
      });
      if (actErr) { failedActivities++; console.error(`duplicateTrip: copie de l'activité "${a.name}" échouée:`, actErr); }
    }
    let failedLodgings = 0;
    for (const l of (srcData.lodgings || [])) {
      const newCityId = cityMap[l.city_id];
      if (!newCityId) continue;
      const { error: ldgErr } = await supabase.from('trip_lodgings').insert({
        trip_id: newTrip.id, city_id: newCityId, name: l.name, address: l.address,
        place_lat: l.place_lat, place_lng: l.place_lng,
        check_in: l.check_in, check_out: l.check_out,
        price: l.price, booking_url: l.booking_url, notes: l.notes, position: l.position,
      });
      if (ldgErr) { failedLodgings++; console.error(`duplicateTrip: copie de l'hébergement "${l.name}" échouée:`, ldgErr); }
    }
    if (failedActivities || failedLodgings) {
      const parts = [];
      if (failedActivities) parts.push(t('trips.duplicateFailedActivities', { count: failedActivities }));
      if (failedLodgings) parts.push(t('trips.duplicateFailedLodgings', { count: failedLodgings }));
      // "il manque" (impersonnel) plutôt qu'un verbe accordé sur le nombre d'échecs :
      // évite tout problème d'accord singulier/pluriel selon qu'il manque 1 ou
      // plusieurs éléments, sans avoir à gérer le genre (activité/hébergement).
      alert(t('trips.duplicatePartialWarning', { parts: parts.join(t('trips.duplicatePartsSeparator')) }));
    }
    setTrips(prev => [newTrip, ...prev]);
    setSelectedTripId(newTrip.id);
    return newTrip;
  }, [userId, trips, tripData]);

  // ─── Destinations CRUD ───

  const addDestination = useCallback(async (tripId, countryCode, countryName) => {
    const position = tripData?.destinations?.length ?? 0;
    const { data, error } = await supabase.from('trip_destinations').insert({
      trip_id: tripId, country_code: countryCode, country_name: countryName, position,
    }).select().single();
    if (error || !data) return null;
    setTripData(prev => prev ? { ...prev, destinations: [...prev.destinations, data] } : prev);
    await touchTrip(tripId);
    return data;
  }, [tripData, touchTrip]);

  const removeDestination = useCallback(async (destId) => {
    const cityIds = (tripData?.cities ?? []).filter(c => c.destination_id === destId).map(c => c.id);
    // Nettoyage Storage AVANT la suppression SQL (voir deleteTrip pour le pourquoi).
    await cleanupAttachmentsStorage({
      activityIds: (tripData?.activities ?? []).filter(a => cityIds.includes(a.city_id)).map(a => a.id),
      lodgingIds: (tripData?.lodgings ?? []).filter(l => cityIds.includes(l.city_id)).map(l => l.id),
    });
    await supabase.from('trip_destinations').delete().eq('id', destId);
    setTripData(prev => prev ? {
      ...prev,
      destinations: prev.destinations.filter(d => d.id !== destId),
      cities: prev.cities.filter(c => c.destination_id !== destId),
      activities: prev.activities.filter(a => !cityIds.includes(a.city_id)),
      lodgings: (prev.lodgings || []).filter(l => !cityIds.includes(l.city_id)),
    } : prev);
    // Un Ctrl+Z en attente pour un lieu (ou une ville) de ce pays échouerait
    // silencieusement (la ville/le pays référencé n'existe plus, la ré-insertion
    // violerait la clé étrangère) : autant vider l'annulation proprement plutôt
    // que de laisser une tentative vouée à l'échec.
    setLastDeletedItem(prev => {
      if (!prev) return prev;
      const stale = prev.cities.some(c => c.destination_id === destId)
        || prev.activities.some(a => cityIds.includes(a.city_id))
        || prev.lodgings.some(l => cityIds.includes(l.city_id));
      return stale ? null : prev;
    });
  }, [tripData]);

  // ─── Cities CRUD ───

  const addCity = useCallback(async (tripId, destinationId, cityName) => {
    const position = (tripData?.cities ?? []).filter(c => c.destination_id === destinationId).length;
    const { data, error } = await supabase.from('trip_cities').insert({
      trip_id: tripId, destination_id: destinationId, name: cityName, position,
    }).select().single();
    if (error || !data) { if (error) console.error('addCity failed:', error); return null; }
    setTripData(prev => prev ? { ...prev, cities: [...prev.cities, data] } : prev);
    await touchTrip(tripId);
    return data;
  }, [tripData, touchTrip]);

  // Excursion à la journée : rattachée à une ville de base (parent_city_id), sans quitter celle-ci
  const addDaytrip = useCallback(async (tripId, destinationId, parentCityId, cityName) => {
    const position = (tripData?.cities ?? []).filter(c => c.parent_city_id === parentCityId).length;
    const { data, error } = await supabase.from('trip_cities').insert({
      trip_id: tripId, destination_id: destinationId, name: cityName, position,
      parent_city_id: parentCityId, is_daytrip: true,
    }).select().single();
    if (error || !data) { if (error) console.error('addDaytrip failed:', error); return null; }
    setTripData(prev => prev ? { ...prev, cities: [...prev.cities, data] } : prev);
    await touchTrip(tripId);
    return data;
  }, [tripData, touchTrip]);

  const updateCity = useCallback(async (cityId, updates) => {
    await supabase.from('trip_cities').update(updates).eq('id', cityId);
    setTripData(prev => prev ? { ...prev, cities: prev.cities.map(c => c.id === cityId ? { ...c, ...updates } : c) } : prev);

    // Ancrage différé d'un planning importé sans dates dans CETTE ville (voir
    // planning_modele_v10.sql) : l'utilisateur donne une date de début à une
    // ville dont les activités importées attendent leurs dates
    // (pending_day_index) — la date choisie devient le jour 1 de la ville,
    // ses activités et ses excursions rattachées sont datées en une fois.
    const hasPending = updates.start_date && tripData && (
      tripData.activities.some(a => a.city_id === cityId && a.pending_day_index != null)
      || tripData.cities.some(c => c.parent_city_id === cityId && c.pending_day_offset != null)
    );
    if (hasPending) {
      // Le décalage réel maximal se calcule sur les VRAIES activités en
      // attente (pending_day_index) — il n'y a plus de champ "jours prévus"
      // séparé pouvant se désynchroniser du contenu réellement importé (voir
      // citiesForDay dans DayView.jsx, qui dérive maintenant tout des
      // activités datées).
      const ownMaxIndex = tripData.activities
        .filter(a => a.city_id === cityId && a.pending_day_index != null)
        .reduce((m, a) => Math.max(m, a.pending_day_index), 0);
      let maxOffset = ownMaxIndex > 0 ? ownMaxIndex - 1 : 0;
      for (const c of tripData.cities) {
        if (c.parent_city_id !== cityId || c.pending_day_offset == null) continue;
        const childMaxIndex = tripData.activities
          .filter(a => a.city_id === c.id && a.pending_day_index != null)
          .reduce((m, a) => Math.max(m, a.pending_day_index), 0);
        if (childMaxIndex > 0) maxOffset = Math.max(maxOffset, c.pending_day_offset + childMaxIndex - 1);
      }
      const candidateEnd = addDaysToDateStr(updates.start_date, maxOffset);

      const { error: anchorError } = await supabase.rpc('anchor_city_pending_days', {
        p_city_id: cityId, p_start_date: updates.start_date,
      });
      if (anchorError) { console.error('anchor_city_pending_days failed:', anchorError); return; }

      // L'enveloppe de dates du voyage (start_date/end_date) s'adapte dans
      // les DEUX sens à cette ville qu'on vient d'ancrer — pas seulement la
      // toute première ville datée : si le voyage avait déjà des dates (via
      // une autre ville ancrée avant) et que celle-ci commence PLUS TÔT, le
      // départ du voyage recule pour l'inclure ; si elle va PLUS LOIN, la fin
      // avance — voir extendTripEnvelopeForAnchor. Le chevauchement avec le
      // contenu déjà présent sur ces mêmes jours est normal (chaque ville
      // garde ses propres activités, elles cohabitent simplement).
      await extendTripEnvelopeForAnchor(
        tripData.trip?.id, tripData.trip?.start_date || null, tripData.trip?.end_date || null,
        updates.start_date, candidateEnd
      );
      if (tripData.trip?.id) await loadTripData(tripData.trip.id);
    }
  }, [tripData, loadTripData, extendTripEnvelopeForAnchor]);

  const removeCity = useCallback(async (cityId) => {
    // Les excursions (daytrips) rattachées à cette ville cascadent aussi en base
    // (parent_city_id ... ON DELETE CASCADE) : leurs activités/hébergements doivent
    // être nettoyés du Storage ici aussi, avant la suppression SQL. On capture tout
    // le sous-arbre (ville + excursions + leurs activités/hébergements) AVANT la
    // suppression pour permettre un Ctrl+Z qui restaure l'ensemble d'un coup.
    const baseCity = (tripData?.cities ?? []).find(c => c.id === cityId) || null;
    const childCities = (tripData?.cities ?? []).filter(c => c.parent_city_id === cityId);
    const allCityIds = [cityId, ...childCities.map(c => c.id)];
    const capturedActivities = (tripData?.activities ?? []).filter(a => allCityIds.includes(a.city_id));
    const capturedLodgings = (tripData?.lodgings ?? []).filter(l => allCityIds.includes(l.city_id));
    await cleanupAttachmentsStorage({
      activityIds: capturedActivities.map(a => a.id),
      lodgingIds: capturedLodgings.map(l => l.id),
    });
    // Comme deleteTrip : si la ligne ne matche aucune règle RLS (ex. appelée par
    // erreur sur un voyage partagé sans les droits), .delete() réussit sans
    // erreur mais n'affecte aucune ligne — sans cette vérification, la ville
    // disparaîtrait de l'écran (et un Ctrl+Z serait proposé) alors qu'elle existe
    // toujours en base, prête à réapparaître au prochain rechargement.
    const { data: deletedCityRows, error: cityDelErr } = await supabase.from('trip_cities').delete().eq('id', cityId).select('id');
    if (cityDelErr || !deletedCityRows?.length) { console.error('removeCity failed (aucune ligne supprimée ?):', cityDelErr); return; }
    setTripData(prev => {
      if (!prev) return prev;
      // La suppression cascade en base (parent_city_id ... ON DELETE CASCADE) sur les
      // excursions rattachées ; on répercute donc la même cascade en local, sinon les
      // excursions et leurs activités (potentiellement planifiées dans le calendrier)
      // resteraient affichées comme des orphelins jusqu'au rechargement.
      const childCityIds = prev.cities.filter(c => c.parent_city_id === cityId).map(c => c.id);
      const removedCityIds = new Set([cityId, ...childCityIds]);
      return {
        ...prev,
        cities: prev.cities.filter(c => !removedCityIds.has(c.id)),
        activities: prev.activities.filter(a => !removedCityIds.has(a.city_id)),
        lodgings: (prev.lodgings || []).filter(l => !removedCityIds.has(l.city_id)),
      };
    });
    // Une ville supprimée par erreur reste rare mais très coûteuse (elle peut
    // emporter des dizaines de lieux planifiés) : elle mérite le même filet de
    // sécurité que la suppression d'un seul lieu.
    if (baseCity) {
      setLastDeletedItem({
        cities: [baseCity, ...childCities],
        activities: capturedActivities,
        lodgings: capturedLodgings,
      });
    }
  }, [tripData]);

  const reorderCities = useCallback(async (destinationId, newOrder) => {
    setTripData(prev => {
      if (!prev) return prev;
      // On ne réordonne que les villes de BASE de cette destination. Il faut donc
      // préserver : les villes des autres destinations ET les excursions (daytrips)
      // rattachées à cette destination — sinon elles disparaîtraient de l'état local.
      const others = prev.cities.filter(c => c.destination_id !== destinationId || c.parent_city_id);
      const reordered = newOrder.map((id, idx) => ({ ...prev.cities.find(c => c.id === id), position: idx }));
      return { ...prev, cities: [...others, ...reordered] };
    });
    await Promise.all(newOrder.map((id, idx) => supabase.from('trip_cities').update({ position: idx }).eq('id', id)));
  }, []);

  // ─── Activities CRUD ───

  const addActivity = useCallback(async (tripId, cityId, name, details = {}) => {
    const position = (tripData?.activities ?? []).filter(a => a.city_id === cityId).length;
    const { data, error } = await supabase.from('trip_activities').insert({
      trip_id: tripId, city_id: cityId, name, position, ...details,
    }).select().single();
    if (error || !data) return null;
    setTripData(prev => prev ? { ...prev, activities: [...prev.activities, data] } : prev);
    return data;
  }, [tripData]);

  const updateActivity = useCallback(async (actId, updates) => {
    // Dater manuellement une activité importée "en attente de dates"
    // (pending_day_index, voir planning_modele_v10.sql) la sort de l'attente :
    // sans ça, l'ancrage différé déclenché plus tard par le choix d'une date
    // de départ écraserait la date que l'utilisateur vient de poser à la
    // main. On ne le fait QUE si une vraie date est posée (updates.visit_date
    // non null) — le formulaire d'activité (ActivityItem) envoie TOUJOURS
    // `visit_date` dans ses updates, y compris `null` quand l'activité reste
    // non planifiée (ex. cocher "toute la journée" sans avoir touché la
    // date) : vider pending_day_index dans ce cas-là ferait perdre
    // l'activité de tout ancrage futur — elle ne recevrait alors plus jamais
    // de date, ni maintenant ni lors d'un ancrage différé ultérieur.
    if (updates.visit_date != null && !('pending_day_index' in updates)) {
      updates = { ...updates, pending_day_index: null };
    }
    // Si l'écriture échoue (connexion perdue en plein voyage, RLS, etc.), on
    // n'applique pas le changement localement : sans ce garde-fou, l'écran
    // affichait un changement (ex. case cochée) jamais réellement enregistré
    // en base, qui redisparaissait silencieusement au prochain chargement.
    const { error } = await supabase.from('trip_activities').update(updates).eq('id', actId);
    if (error) {
      // Colonne cost absente = migration pas jouée : sans cet indice, l'échec
      // silencieux de TOUT l'enregistrement (nom, date…) serait incompréhensible.
      const hint = 'cost' in updates && /cost/.test(error.message || '')
        ? ' (avez-vous joué supabase/planning_tables_v10.sql ?)' : '';
      console.error(`updateActivity failed${hint}:`, error);
      return;
    }
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => a.id === actId ? { ...a, ...updates } : a),
    } : prev);
  }, []);

  const removeActivity = useCallback(async (actId) => {
    // On garde une copie de la ligne juste avant de la supprimer, pour permettre
    // un Ctrl+Z (undoLastDelete) juste après — les suppressions (lieu, hébergement,
    // ville, sélection multiple) sont les seules vraiment destructrices/irréversibles
    // à l'oeil nu (une simple erreur de glisser-déposer se corrige en un geste).
    const orig = tripData?.activities?.find(a => a.id === actId) || null;
    // Nettoyage Storage AVANT la suppression SQL (voir deleteTrip pour le pourquoi).
    await cleanupAttachmentsStorage({ activityIds: [actId] });
    // .select('id') pour vérifier que la ligne a vraiment été supprimée (voir
    // deleteTrip) : sans ça, un lieu bloqué par RLS semblait supprimé à l'écran
    // (et un Ctrl+Z se proposait de le "restaurer") alors qu'il existait toujours
    // en base — l'undo échouait alors silencieusement (clé déjà existante) et
    // rien ne revenait jamais, même si le lieu réapparaissait après rechargement.
    const { data, error } = await supabase.from('trip_activities').delete().eq('id', actId).select('id');
    if (error || !data?.length) { console.error('removeActivity failed (aucune ligne supprimée ?):', error); return; }
    setTripData(prev => prev ? { ...prev, activities: prev.activities.filter(a => a.id !== actId) } : prev);
    if (orig) setLastDeletedItem({ cities: [], activities: [orig], lodgings: [] });
  }, [tripData]);

  // Suppression groupée (sélection multiple) — même filet de sécurité que
  // removeActivity, mais capture toutes les lignes concernées d'un coup pour
  // qu'un seul Ctrl+Z restaure toute la sélection, pas juste la dernière.
  const removeActivities = useCallback(async (ids) => {
    if (!ids?.length) return;
    const origs = (tripData?.activities ?? []).filter(a => ids.includes(a.id));
    if (!origs.length) return;
    await cleanupAttachmentsStorage({ activityIds: ids });
    // .select('id') pour ne retirer de l'écran (et ne proposer en Ctrl+Z) QUE ce
    // qui a vraiment été supprimé en base (voir deleteTrip/removeActivity) — une
    // suppression groupée bloquée en partie par RLS ne doit ni faire disparaître
    // les lignes non supprimées, ni fausser l'undo sur celles qui l'ont été.
    const { data, error } = await supabase.from('trip_activities').delete().in('id', ids).select('id');
    if (error) { console.error('removeActivities failed:', error); return; }
    const deletedIds = new Set((data || []).map(r => r.id));
    if (!deletedIds.size) { console.error('removeActivities: aucune ligne supprimée (droits insuffisants ?)'); return; }
    setTripData(prev => prev ? { ...prev, activities: prev.activities.filter(a => !deletedIds.has(a.id)) } : prev);
    setLastDeletedItem({ cities: [], activities: origs.filter(a => deletedIds.has(a.id)), lodgings: [] });
  }, [tripData]);

  // Annulation générique (Ctrl+Z) — restaure la dernière suppression, quel que
  // soit son type (lieu, sélection de lieux, hébergement, ou ville entière avec
  // ses excursions/lieux/hébergements). Les villes sont réinsérées en 2 temps
  // (ville de base, puis excursions) : `parent_city_id` doit pouvoir résoudre
  // vers une ville déjà présente en base, un insert groupé ne garantit pas que
  // les lignes soient traitées dans l'ordre où on les donne.
  const undoLastDelete = useCallback(async () => {
    if (!lastDeletedItem) return;
    // `const`, jamais réassignées : un setTripData(prev => ...) planifié ici ne
    // s'exécute pas forcément avant la ligne suivante (React 18 rejoue même la
    // fonction de mise à jour en double en dev, pour vérifier sa pureté) — si ces
    // variables étaient réassignées à [] juste après avoir été passées à
    // setTripData (comme dans une version précédente de cette fonction), la
    // fermeture pouvait retomber sur un tableau déjà vidé et ne rien restaurer
    // du tout, silencieusement. En ne les mutant jamais, chaque relecture de la
    // fermeture retombe forcément sur la même valeur correcte.
    const { cities = [], activities = [], lodgings = [] } = lastDeletedItem;

    // Chaque groupe (villes, puis activités, puis hébergements) est restauré et
    // reflété en local dès qu'il réussit, avant de passer au suivant — si une
    // étape plus loin échoue (réseau perdu en plein Ctrl+Z, par ex.), on ne
    // garde dans lastDeletedItem QUE ce qui reste réellement à restaurer : sans
    // ça, réessayer réinsérerait une ligne déjà restaurée (clé déjà existante).
    if (cities.length) {
      const [baseCity, ...childCities] = cities;
      const { error: baseErr } = await supabase.from('trip_cities').insert(baseCity);
      if (baseErr) { console.error('undoLastDelete (ville) failed:', baseErr); return; }
      if (childCities.length) {
        const { error: childErr } = await supabase.from('trip_cities').insert(childCities);
        if (childErr) {
          console.error('undoLastDelete (excursions) failed:', childErr);
          setTripData(prev => prev ? { ...prev, cities: [...prev.cities, baseCity] } : prev);
          // La ville de base est restaurée ; ses excursions restent perdues plutôt
          // que de risquer un doublon en réessayant plus tard.
          setLastDeletedItem({ cities: [], activities, lodgings });
          return;
        }
      }
      setTripData(prev => prev ? { ...prev, cities: [...prev.cities, ...cities] } : prev);
    }

    if (activities.length) {
      const { error } = await supabase.from('trip_activities').insert(activities);
      if (error) {
        console.error('undoLastDelete (activités) failed:', error);
        setLastDeletedItem({ cities: [], activities, lodgings });
        return;
      }
      setTripData(prev => prev ? { ...prev, activities: [...prev.activities, ...activities] } : prev);
    }

    if (lodgings.length) {
      const { error } = await supabase.from('trip_lodgings').insert(lodgings);
      if (error) {
        console.error('undoLastDelete (hébergements) failed:', error);
        setLastDeletedItem({ cities: [], activities: [], lodgings });
        return;
      }
      setTripData(prev => prev ? { ...prev, lodgings: [...(prev.lodgings || []), ...lodgings] } : prev);
    }

    setLastDeletedItem(null);
  }, [lastDeletedItem]);

  // Duplique une activité (lieu ou trajet) à l'identique, ajoutée à la fin de la
  // liste de sa ville — utile pour une activité que l'on veut faire deux fois
  // pendant le voyage (ex : le même restaurant à deux dates différentes).
  const duplicateActivity = useCallback(async (actId) => {
    const orig = tripData?.activities?.find(a => a.id === actId);
    if (!orig) return null;
    const { id, created_at, ...rest } = orig;
    const cityActs = (tripData?.activities ?? []).filter(a => a.city_id === orig.city_id);
    const maxPosition = cityActs.length ? Math.max(...cityActs.map(a => a.position)) : -1;
    duplicateOffsetRef.current += 1;
    const position = maxPosition + duplicateOffsetRef.current;
    // Une copie repart toujours non cochée : dupliquer un lieu déjà fait sert
    // justement à le refaire (ex : même resto à une autre date) — le marquer
    // fait d'office masquerait par erreur cette nouvelle occurrence de la checklist.
    const { data, error } = await supabase.from('trip_activities').insert({ ...rest, position, is_done: false }).select().single();
    if (error || !data) { console.error('duplicateActivity failed:', error); return null; }
    setTripData(prev => prev ? { ...prev, activities: [...prev.activities, data] } : prev);
    return data;
  }, [tripData]);

  const reorderActivities = useCallback(async (cityId, newOrder) => {
    setTripData(prev => {
      if (!prev) return prev;
      // On exclut seulement les activités concernées par ce réordonnancement (pas
      // toute la ville) : newOrder peut être un sous-ensemble (ex. juste les trajets
      // d'une ville, séparés des lieux) — filtrer par city_id ferait disparaître les
      // activités de l'autre sous-ensemble de l'état local, alors qu'elles n'ont pas
      // bougé.
      const others = prev.activities.filter(a => !newOrder.includes(a.id));
      const reordered = newOrder.map((id, idx) => ({ ...prev.activities.find(a => a.id === id), position: idx }));
      return { ...prev, activities: [...others, ...reordered] };
    });
    await Promise.all(newOrder.map((id, idx) => supabase.from('trip_activities').update({ position: idx }).eq('id', id)));
  }, []);

  // ─── Groups CRUD ───

  const addGroup = useCallback(async (tripId, name, color = '#6366f1', opts = {}) => {
    const position = tripData?.groups?.length ?? 0;
    const { data, error } = await supabase.from('trip_groups').insert({
      trip_id: tripId, name, color, position, is_auto: !!opts.isAuto,
    }).select().single();
    if (error || !data) {
      if (error) console.error('addGroup failed (avez-vous joué supabase/planning_tables_v2.sql et v4.sql ?):', error);
      return null;
    }
    setTripData(prev => prev ? { ...prev, groups: [...(prev.groups || []), data] } : prev);
    return data;
  }, [tripData]);

  // Supprime tous les groupes marqués "auto" (avant une nouvelle détection de zones)
  const clearAutoGroups = useCallback(async (tripId) => {
    const autoGroupIds = (tripData?.groups || []).filter(g => g.is_auto).map(g => g.id);
    if (!autoGroupIds.length) return;
    const { error } = await supabase.from('trip_groups').delete().in('id', autoGroupIds);
    if (error) { console.error('clearAutoGroups failed:', error); return; }
    setTripData(prev => prev ? {
      ...prev,
      groups: (prev.groups || []).filter(g => !g.is_auto),
      activities: prev.activities.map(a => autoGroupIds.includes(a.group_id) ? { ...a, group_id: null } : a),
    } : prev);
    // Même filet de sécurité que removeCity/removeDestination : un Ctrl+Z pour un
    // lieu qui appartenait à l'une de ces zones échouerait silencieusement (clé
    // étrangère group_id pointant vers un groupe qui n'existe plus).
    setLastDeletedItem(prev => (prev && prev.activities.some(a => autoGroupIds.includes(a.group_id))) ? null : prev);
  }, [tripData]);

  const updateGroup = useCallback(async (groupId, updates) => {
    const { error } = await supabase.from('trip_groups').update(updates).eq('id', groupId);
    if (error) { console.error('updateGroup failed:', error); return; }
    setTripData(prev => prev ? {
      ...prev, groups: (prev.groups || []).map(g => g.id === groupId ? { ...g, ...updates } : g),
    } : prev);
  }, []);

  const removeGroup = useCallback(async (groupId) => {
    const { error } = await supabase.from('trip_groups').delete().eq('id', groupId);
    if (error) { console.error('removeGroup failed:', error); return; }
    setTripData(prev => prev ? {
      ...prev,
      groups: (prev.groups || []).filter(g => g.id !== groupId),
      activities: prev.activities.map(a => a.group_id === groupId ? { ...a, group_id: null } : a),
    } : prev);
    setLastDeletedItem(prev => (prev && prev.activities.some(a => a.group_id === groupId)) ? null : prev);
  }, []);

  const assignActivityToGroup = useCallback(async (actId, groupId) => {
    const val = groupId || null;
    const { error } = await supabase.from('trip_activities').update({ group_id: val }).eq('id', actId);
    if (error) { console.error('assignActivityToGroup failed:', error); return; }
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => a.id === actId ? { ...a, group_id: val } : a),
    } : prev);
  }, []);

  // Assignation groupée (sélection multiple) — même requête que assignGroupToDay/
  // assignCityToDay, juste paramétrée par une liste d'ids choisie à la main plutôt
  // que par "tout un groupe" ou "toute une ville".
  const assignActivitiesToGroup = useCallback(async (ids, groupId) => {
    if (!ids?.length) return;
    const val = groupId || null;
    const { error } = await supabase.from('trip_activities').update({ group_id: val }).in('id', ids);
    if (error) { console.error('assignActivitiesToGroup failed:', error); return; }
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => ids.includes(a.id) ? { ...a, group_id: val } : a),
    } : prev);
  }, []);

  const assignActivitiesToDay = useCallback(async (ids, date, time = null) => {
    if (!ids?.length) return;
    const { error } = await supabase.from('trip_activities').update({ visit_date: date, visit_time: time, pending_day_index: null }).in('id', ids);
    if (error) { console.error('assignActivitiesToDay failed:', error); return; }
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => ids.includes(a.id) ? { ...a, visit_date: date, visit_time: time, pending_day_index: null } : a),
    } : prev);
  }, []);

  const assignGroupToDay = useCallback(async (groupId, date, time = null) => {
    const groupActs = (tripData?.activities || []).filter(a => a.group_id === groupId);
    if (!groupActs.length) return;
    const ids = groupActs.map(a => a.id);
    await supabase.from('trip_activities').update({ visit_date: date, visit_time: time, pending_day_index: null }).in('id', ids);
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => ids.includes(a.id) ? { ...a, visit_date: date, visit_time: time, pending_day_index: null } : a),
    } : prev);
  }, [tripData]);

  // ─── Lodgings CRUD (hébergements par ville) ───

  const addLodging = useCallback(async (tripId, cityId, fields) => {
    const position = (tripData?.lodgings ?? []).filter(l => l.city_id === cityId).length;
    const { data, error } = await supabase.from('trip_lodgings').insert({
      trip_id: tripId, city_id: cityId, position, ...fields,
    }).select().single();
    if (error || !data) {
      if (error) console.error('addLodging failed (avez-vous joué supabase/planning_tables_v8.sql ?):', error);
      return null;
    }
    setTripData(prev => prev ? { ...prev, lodgings: [...(prev.lodgings || []), data] } : prev);
    return data;
  }, [tripData]);

  const updateLodging = useCallback(async (lodgingId, updates) => {
    const { error } = await supabase.from('trip_lodgings').update(updates).eq('id', lodgingId);
    if (error) { console.error('updateLodging failed:', error); return; }
    setTripData(prev => prev ? {
      ...prev, lodgings: (prev.lodgings || []).map(l => l.id === lodgingId ? { ...l, ...updates } : l),
    } : prev);
  }, []);

  const removeLodging = useCallback(async (lodgingId) => {
    // Même filet de sécurité que removeActivity : une copie avant suppression
    // permet un Ctrl+Z (undoLastDelete) juste après.
    const orig = tripData?.lodgings?.find(l => l.id === lodgingId) || null;
    // Nettoyage Storage AVANT la suppression SQL (voir deleteTrip pour le pourquoi).
    await cleanupAttachmentsStorage({ lodgingIds: [lodgingId] });
    // .select('id') pour vérifier que la ligne a vraiment été supprimée (voir
    // deleteTrip/removeActivity).
    const { data, error } = await supabase.from('trip_lodgings').delete().eq('id', lodgingId).select('id');
    if (error || !data?.length) { console.error('removeLodging failed (aucune ligne supprimée ?):', error); return; }
    setTripData(prev => prev ? {
      ...prev, lodgings: (prev.lodgings || []).filter(l => l.id !== lodgingId),
    } : prev);
    if (orig) setLastDeletedItem({ cities: [], activities: [], lodgings: [orig] });
  }, [tripData]);

  // Planifie toutes les activités d'une ville (ou excursion) sur un jour donné
  const assignCityToDay = useCallback(async (cityId, date, time = null) => {
    const cityActs = (tripData?.activities || []).filter(a => a.city_id === cityId);
    if (!cityActs.length) return;
    const ids = cityActs.map(a => a.id);
    await supabase.from('trip_activities').update({ visit_date: date, visit_time: time, pending_day_index: null }).in('id', ids);
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => ids.includes(a.id) ? { ...a, visit_date: date, visit_time: time, pending_day_index: null } : a),
    } : prev);
  }, [tripData]);

  return {
    trips, tripStats, reloadTrips: loadTrips, loading, selectedTripId, setSelectedTripId, tripData, loadTripData,
    createTrip, updateTrip, deleteTrip, leaveTrip, duplicateTrip,
    addDestination, removeDestination,
    addCity, addDaytrip, updateCity, removeCity, reorderCities,
    addActivity, updateActivity, removeActivity, removeActivities, reorderActivities,
    duplicateActivity, undoLastDelete, canUndo: !!lastDeletedItem,
    addGroup, clearAutoGroups, updateGroup, removeGroup, assignActivityToGroup, assignActivitiesToGroup, assignGroupToDay, assignCityToDay, assignActivitiesToDay,
    addLodging, updateLodging, removeLodging,
  };
}
