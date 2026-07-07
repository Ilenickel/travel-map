import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { cleanupAttachmentsStorage } from '../lib/attachments';

export function useTrips(userId) {
  const { t } = useTranslation();
  const [trips, setTrips] = useState([]);
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
  }, [userId]);

  useEffect(() => {
    if (!userId) {
      setTrips([]);
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
  }, []);

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
  }, []);

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
    const { error } = await supabase.from('trip_activities').update({ visit_date: date, visit_time: time }).in('id', ids);
    if (error) { console.error('assignActivitiesToDay failed:', error); return; }
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => ids.includes(a.id) ? { ...a, visit_date: date, visit_time: time } : a),
    } : prev);
  }, []);

  const assignGroupToDay = useCallback(async (groupId, date, time = null) => {
    const groupActs = (tripData?.activities || []).filter(a => a.group_id === groupId);
    if (!groupActs.length) return;
    const ids = groupActs.map(a => a.id);
    await supabase.from('trip_activities').update({ visit_date: date, visit_time: time }).in('id', ids);
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => ids.includes(a.id) ? { ...a, visit_date: date, visit_time: time } : a),
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
    await supabase.from('trip_activities').update({ visit_date: date, visit_time: time }).in('id', ids);
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => ids.includes(a.id) ? { ...a, visit_date: date, visit_time: time } : a),
    } : prev);
  }, [tripData]);

  return {
    trips, loading, selectedTripId, setSelectedTripId, tripData, loadTripData,
    createTrip, updateTrip, deleteTrip, leaveTrip, duplicateTrip,
    addDestination, removeDestination,
    addCity, addDaytrip, updateCity, removeCity, reorderCities,
    addActivity, updateActivity, removeActivity, removeActivities, reorderActivities,
    duplicateActivity, undoLastDelete, canUndo: !!lastDeletedItem,
    addGroup, clearAutoGroups, updateGroup, removeGroup, assignActivityToGroup, assignActivitiesToGroup, assignGroupToDay, assignCityToDay, assignActivitiesToDay,
    addLodging, updateLodging, removeLodging,
  };
}
