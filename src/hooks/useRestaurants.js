import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { callModeration } from '../lib/moderation';
import i18n from '../i18n';

// Chargement des restaurants d'une destination ou d'une ville de planification.
//
// Les restaurants vivent dans les MÊMES tables que les lieux à ne pas manquer
// (`destination_places` / `static_destination_places`, colonne `category` —
// voir supabase/restaurants_v1.sql). Ce hook ne fait donc que filtrer sur cette
// colonne et remonter les attributs propres aux restaurants.
//
// Un restaurant se juge sur ses AVIS NOTÉS, pas sur des pouces en l'air : le
// système de vote up/down des lieux à ne pas manquer n'est volontairement pas
// repris ici. Deux mécanismes de jugement côte à côte sur la même carte
// (étoiles + votes) n'apportaient rien et encombraient l'affichage.
//
// Deux modes, parce que les deux écrans n'identifient pas la destination de la
// même façon :
//   - 'destination' (fiche pays) : on connaît la destination exacte, lecture
//     directe en base — accessible aux visiteurs non connectés.
//   - 'city' (planification) : on ne connaît qu'un nom de ville, la
//     correspondance ville ↔ destination est faite côté serveur par
//     api/get-place-suggestions.js (déjà en place pour les lieux de visite).

const RESTAURANT_FIELDS =
  'id, name, name_latin, image_url, user_id, created_at, ' +
  'source, cuisine_tags, budget_level, address, lat, lng, rating_avg, rating_count';

// Ordre d'affichage : le mieux noté d'abord, puis le plus récent. Les
// recommandations de l'équipe ne sont PAS remontées d'office en tête — elles
// portent déjà un badge, les hisser artificiellement rendrait les contributions
// des membres invisibles.
function compareRestaurants(a, b) {
  const ratingA = a.ratingCount > 0 ? a.ratingAvg : -1;
  const ratingB = b.ratingCount > 0 ? b.ratingAvg : -1;
  if (ratingA !== ratingB) return ratingB - ratingA;
  if (a.ratingCount !== b.ratingCount) return b.ratingCount - a.ratingCount;
  return String(b.createdAt ?? '').localeCompare(String(a.createdAt ?? ''));
}

// Uniformise les deux sources (lecture directe et réponse API) sur la même
// forme, pour que RestaurantExplorer n'ait pas à connaître son mode.
function normalize(row, type) {
  return {
    id: row.id,
    type,
    name: row.name,
    nameLatin: row.name_latin ?? row.nameLatin ?? null,
    source: row.source || 'community',
    // Dédoublonné : un seed éditorial mal saisi produirait sinon deux pastilles
    // identiques, donc deux enfants React avec la même clé.
    cuisineTags: [...new Set(row.cuisine_tags ?? row.cuisineTags ?? [])],
    budgetLevel: row.budget_level ?? row.budgetLevel ?? null,
    address: row.address ?? null,
    lat: row.lat ?? null,
    lng: row.lng ?? null,
    imageUrl: row.image_url ?? row.imageUrl ?? null,
    userId: row.user_id ?? row.userId ?? null,
    ratingAvg: row.rating_avg != null ? Number(row.rating_avg) : (row.ratingAvg ?? null),
    ratingCount: row.rating_count ?? row.ratingCount ?? 0,
    createdAt: row.created_at ?? null,
  };
}

export default function useRestaurants(options) {
  const {
    mode,
    // mode 'destination'
    destType, destinationId, countryCode, staticDestId,
    // mode 'city'
    cityName, staticDestIds,
  } = options;

  const [restaurants, setRestaurants] = useState(null); // null = pas encore chargé
  const [loading, setLoading] = useState(false);
  // Numéro du chargement en cours. Sans lui, changer rapidement de destination
  // (ou de ville) laissait la réponse LA PLUS LENTE écraser la plus récente :
  // on affichait alors les restaurants de la destination précédente.
  const requestIdRef = useRef(0);

  // Sérialisé : `staticDestIds` est un tableau recréé à chaque rendu par
  // l'appelant, le passer tel quel en dépendance relancerait le chargement en
  // boucle.
  const staticDestIdsKey = (staticDestIds || []).join(',');

  const load = useCallback(async () => {
    const requestId = ++requestIdRef.current;
    setLoading(true);
    let rows = [];

    if (mode === 'destination') {
      const isCommunity = destType === 'community';
      const query = isCommunity
        ? supabase.from('destination_places').select(RESTAURANT_FIELDS).eq('destination_id', destinationId)
        : supabase.from('static_destination_places').select(RESTAURANT_FIELDS)
            .eq('country_code', countryCode).eq('static_dest_id', String(staticDestId));
      const { data } = await query.eq('category', 'restaurant');
      rows = (data || []).map((r) => normalize(r, isCommunity ? 'community' : 'static'));
    } else {
      const result = await callModeration('get-place-suggestions', {
        cityName,
        countryCode,
        staticDestIds: staticDestIds || [],
        targetLanguage: i18n.language,
        category: 'restaurant',
      });
      const list = result.ok ? (result.places || []) : [];
      rows = list.map((p) => normalize(p, p.type));
    }

    // Réponse périmée (une demande plus récente est partie entre-temps, ou le
    // composant a été démonté) : on n'écrit rien.
    if (requestId !== requestIdRef.current) return;
    setRestaurants(rows.sort(compareRestaurants));
    setLoading(false);
  }, [mode, destType, destinationId, countryCode, staticDestId, cityName, staticDestIdsKey]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    load();
    // Démontage ou changement de cible : on invalide la requête en vol.
    return () => { requestIdRef.current++; };
  }, [load]);

  return { restaurants, loading, reload: load, setRestaurants };
}
