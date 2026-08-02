import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';

// Lieux à ne pas manquer ajoutés par un utilisateur (onglet « Mes ajouts » du
// profil, sous-onglet « Lieux »). PAS les restaurants : demande explicite du
// 2026-08-02, seuls les lieux `category = 'place'` sont concernés ici.
//
// Partagé entre ProfilePanel (profil perso) et PublicProfileModal (profil
// public) : les deux affichaient déjà la même logique dupliquée pour les
// destinations, on n'en crée pas une troisième copie pour les lieux.
//
// Deux tables (comme le reste du système « Lieux », voir
// supabase/restaurants_v1.sql) :
//   - destination_places       : lieux sous une destination communautaire.
//     Le pays n'est PAS sur la ligne (contrairement aux restaurants, dont la
//     fiche l'utilise pour la cohérence géographique) : il faut remonter à la
//     destination parente (user_destinations.country_code).
//   - static_destination_places : lieux sous une destination éditoriale,
//     porte directement `country_code`.
//
// Pas d'embed PostgREST (`user_destinations!inner(...)`) pour la résolution
// du pays : le nom de la relation entre les deux tables n'est défini dans
// aucun fichier SQL du dépôt (tables créées directement dans le tableau de
// bord Supabase), donc pas vérifiable ici sans risquer une erreur
// d'ambiguïté à l'exécution. Deux requêtes séparées, jointes en mémoire,
// évitent complètement le problème.
export default function useUserPlaces(userId) {
  const [placeGroupCounts, setPlaceGroupCounts] = useState({});
  const [placesLoading, setPlacesLoading] = useState(false);
  const [expandedPlaceGroups, setExpandedPlaceGroups] = useState(new Set());
  const [loadedPlaceGroups, setLoadedPlaceGroups] = useState({});
  const [loadingPlaceGroups, setLoadingPlaceGroups] = useState(new Set());

  const loadPlaceCounts = useCallback(async () => {
    if (!userId) return;
    setPlacesLoading(true);
    const [{ data: communityRows }, { data: staticRows }] = await Promise.all([
      supabase.from('destination_places').select('id, destination_id').eq('user_id', userId).eq('category', 'place'),
      supabase.from('static_destination_places').select('id, country_code').eq('user_id', userId).eq('category', 'place'),
    ]);

    const destIds = [...new Set((communityRows || []).map((r) => r.destination_id).filter(Boolean))];
    let countryByDest = {};
    if (destIds.length) {
      const { data: dests } = await supabase.from('user_destinations').select('id, country_code').in('id', destIds);
      (dests || []).forEach((d) => { countryByDest[d.id] = d.country_code; });
    }

    const counts = {};
    (communityRows || []).forEach((r) => {
      const cc = countryByDest[r.destination_id];
      // Destination parente introuvable (déjà supprimée) : les lieux d'une
      // destination sont eux-mêmes supprimés en cascade explicite au moment
      // du retrait (voir api/delete-destination.js), ce cas ne devrait donc
      // pas se produire — on l'ignore silencieusement plutôt que d'afficher
      // un compteur qui ne mène nulle part.
      if (!cc) return;
      counts[cc] = (counts[cc] || 0) + 1;
    });
    (staticRows || []).forEach((r) => {
      counts[r.country_code] = (counts[r.country_code] || 0) + 1;
    });

    setPlaceGroupCounts(counts);
    setPlacesLoading(false);
  }, [userId]);

  const resetPlaces = useCallback(() => {
    setPlaceGroupCounts({});
    setExpandedPlaceGroups(new Set());
    setLoadedPlaceGroups({});
    setLoadingPlaceGroups(new Set());
  }, []);

  // Contenu d'un groupe pays, chargé à la demande (accordéon) — même paresse
  // que le groupe « destinations » déjà en place.
  const togglePlaceGroup = useCallback(async (countryCode) => {
    if (expandedPlaceGroups.has(countryCode)) {
      setExpandedPlaceGroups((prev) => { const s = new Set(prev); s.delete(countryCode); return s; });
      return;
    }
    setExpandedPlaceGroups((prev) => new Set([...prev, countryCode]));
    if (loadedPlaceGroups[countryCode] !== undefined) return;
    setLoadingPlaceGroups((prev) => new Set([...prev, countryCode]));

    const { data: staticRows } = await supabase.from('static_destination_places')
      .select('id, name, name_latin, image_url, created_at, static_dest_id')
      .eq('user_id', userId).eq('category', 'place').eq('country_code', countryCode)
      .order('created_at', { ascending: false });

    // Lieux communautaires : il faut d'abord retrouver, PARMI les destinations
    // de ce pays, celles qui appartiennent à l'utilisateur — la table
    // destination_places ne porte pas country_code.
    const { data: userCommunityRows } = await supabase.from('destination_places')
      .select('id, name, name_latin, image_url, created_at, destination_id')
      .eq('user_id', userId).eq('category', 'place')
      .order('created_at', { ascending: false });
    const candidateDestIds = [...new Set((userCommunityRows || []).map((r) => r.destination_id).filter(Boolean))];
    let destInfo = {};
    if (candidateDestIds.length) {
      const { data: dests } = await supabase.from('user_destinations')
        .select('id, name, country_code').in('id', candidateDestIds).eq('country_code', countryCode);
      (dests || []).forEach((d) => { destInfo[d.id] = d; });
    }
    const communityRows = (userCommunityRows || [])
      .filter((r) => destInfo[r.destination_id])
      .map((r) => ({ ...r, placeType: 'community', destName: destInfo[r.destination_id].name, commDestId: r.destination_id }));

    const staticGroup = (staticRows || []).map((r) => ({ ...r, placeType: 'static', destId: r.static_dest_id }));

    const merged = [...communityRows, ...staticGroup].sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));

    setLoadedPlaceGroups((prev) => ({ ...prev, [countryCode]: merged }));
    setLoadingPlaceGroups((prev) => { const s = new Set(prev); s.delete(countryCode); return s; });
  }, [userId, expandedPlaceGroups, loadedPlaceGroups]);

  return {
    placeGroupCounts, placesLoading, loadPlaceCounts, resetPlaces,
    expandedPlaceGroups, loadedPlaceGroups, loadingPlaceGroups, togglePlaceGroup,
  };
}

// Sous-regroupement PAR DESTINATION à l'intérieur d'un groupe pays (ex: sous
// « États-Unis », un lieu de New York et un lieu de Chicago n'ont rien à voir
// l'un avec l'autre) — demandé le 2026-08-02 après un premier essai en liste
// plate qui ne montrait la destination que comme sous-texte du lieu, trop
// discret pour s'y repérer une fois plusieurs destinations mélangées.
//
// `resolveDestName` est fourni par l'appelant (ProfilePanel/PublicProfileModal)
// plutôt que résolu ici : un lieu communautaire porte déjà son nom de
// destination (voir togglePlaceGroup ci-dessus), un lieu éditorial doit être
// recherché dans COUNTRIES avec la langue active — deux dépendances (i18n,
// COUNTRIES) que ce hook n'a pas besoin de porter pour le reste de son usage.
export function groupPlacesByDestination(places, resolveDestName) {
  const map = new Map();
  for (const place of places) {
    const key = place.placeType === 'community' ? `c:${place.commDestId}` : `s:${place.destId}`;
    if (!map.has(key)) map.set(key, { key, name: resolveDestName(place), items: [] });
    map.get(key).items.push(place);
  }
  // La destination la plus fournie en premier — même logique de tri que les
  // groupes pays eux-mêmes (Object.entries(...).sort((a,b) => b[1]-a[1])).
  return [...map.values()].sort((a, b) => b.items.length - a.items.length || String(a.name).localeCompare(String(b.name)));
}
