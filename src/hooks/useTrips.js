import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';

export function useTrips(userId) {
  const [trips, setTrips] = useState([]);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentTripRef = useRef(null);

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
    ] = await Promise.all([
      supabase.from('trips').select('*').eq('id', tripId).single(),
      supabase.from('trip_destinations').select('*').eq('trip_id', tripId).order('position'),
      supabase.from('trip_cities').select('*').eq('trip_id', tripId).order('position'),
      supabase.from('trip_activities').select('*').eq('trip_id', tripId).order('position'),
      supabase.from('trip_groups').select('*').eq('trip_id', tripId).order('position'),
    ]);
    if (currentTripRef.current !== tripId) return;
    setTripData({
      trip: trip || null,
      destinations: destinations || [],
      cities: cities || [],
      activities: activities || [],
      groups: groups || [],
    });
    setLoading(false);
  }, []);

  useEffect(() => {
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
      user_id: userId, title: 'Nouveau voyage', planning_mode: 'city',
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
      user_id: userId, title: `${source.title} (copie)`,
      planning_mode: source.planning_mode, start_date: source.start_date,
      end_date: source.end_date, notes: source.notes,
    }).select().single();
    if (error || !newTrip) return null;

    let srcData = tripData?.trip?.id === tripId ? tripData : null;
    if (!srcData) {
      const [{ data: dests }, { data: ctns }, { data: acts }, { data: grps }] = await Promise.all([
        supabase.from('trip_destinations').select('*').eq('trip_id', tripId).order('position'),
        supabase.from('trip_cities').select('*').eq('trip_id', tripId).order('position'),
        supabase.from('trip_activities').select('*').eq('trip_id', tripId).order('position'),
        supabase.from('trip_groups').select('*').eq('trip_id', tripId).order('position'),
      ]);
      srcData = { destinations: dests || [], cities: ctns || [], activities: acts || [], groups: grps || [] };
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
    for (const a of srcData.activities) {
      const newCityId = cityMap[a.city_id];
      if (!newCityId) continue;
      await supabase.from('trip_activities').insert({
        trip_id: newTrip.id, city_id: newCityId, name: a.name, description: a.description,
        visit_date: a.visit_date, visit_time: a.visit_time, category: a.category,
        position: a.position, place_lat: a.place_lat, place_lng: a.place_lng,
        place_address: a.place_address, group_id: a.group_id ? (groupMap[a.group_id] || null) : null,
      });
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
    await supabase.from('trip_destinations').delete().eq('id', destId);
    setTripData(prev => prev ? {
      ...prev,
      destinations: prev.destinations.filter(d => d.id !== destId),
      cities: prev.cities.filter(c => c.destination_id !== destId),
      activities: prev.activities.filter(a => !cityIds.includes(a.city_id)),
    } : prev);
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
    await supabase.from('trip_cities').delete().eq('id', cityId);
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
      };
    });
  }, []);

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
    await supabase.from('trip_activities').update(updates).eq('id', actId);
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => a.id === actId ? { ...a, ...updates } : a),
    } : prev);
  }, []);

  const removeActivity = useCallback(async (actId) => {
    await supabase.from('trip_activities').delete().eq('id', actId);
    setTripData(prev => prev ? { ...prev, activities: prev.activities.filter(a => a.id !== actId) } : prev);
  }, []);

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
  }, []);

  const assignActivityToGroup = useCallback(async (actId, groupId) => {
    const val = groupId || null;
    await supabase.from('trip_activities').update({ group_id: val }).eq('id', actId);
    setTripData(prev => prev ? {
      ...prev, activities: prev.activities.map(a => a.id === actId ? { ...a, group_id: val } : a),
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
    trips, loading, selectedTripId, setSelectedTripId, tripData,
    createTrip, updateTrip, deleteTrip, leaveTrip, duplicateTrip,
    addDestination, removeDestination,
    addCity, addDaytrip, updateCity, removeCity, reorderCities,
    addActivity, updateActivity, removeActivity, reorderActivities,
    addGroup, clearAutoGroups, updateGroup, removeGroup, assignActivityToGroup, assignGroupToDay, assignCityToDay,
  };
}
