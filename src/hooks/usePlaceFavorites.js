import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';

// Favoris sur les lieux et restaurants (table `place_favorites`).
//
// Distinct de useFavorites, qui ne gère que des codes pays et sait fonctionner
// hors connexion via localStorage. Ici, un favori n'a de sens que rattaché à un
// compte : il sert à repérer une adresse depuis la fiche pays pour la retrouver
// plus tard au moment de planifier la ville. Sans compte, il n'y a pas de
// « plus tard » — le bouton n'est donc pas proposé aux visiteurs anonymes.
//
// Cache au niveau du module : la liste est consultée par l'explorateur, la
// fiche détail et la planification en même temps. Sans lui, ouvrir une fiche
// depuis la liste relançait la même requête.
let cache = null;
let cachedUserId = null;
let inFlight = null;
const subscribers = new Set();

function notify() {
  subscribers.forEach((fn) => fn(cache ?? new Set()));
}

async function fetchFavorites(userId) {
  const { data, error } = await supabase
    .from('place_favorites')
    .select('place_id, place_type')
    .eq('user_id', userId);
  if (error) {
    console.error('[usePlaceFavorites]', error);
    return new Set();
  }
  return new Set((data || []).map((r) => `${r.place_type}:${r.place_id}`));
}

/** Clé d'un lieu dans l'ensemble des favoris. */
function favoriteKey(placeType, placeId) {
  return `${placeType}:${placeId}`;
}

export default function usePlaceFavorites(userId) {
  const [favorites, setFavorites] = useState(() => (cachedUserId === userId ? cache : null) ?? new Set());
  // Évite qu'un basculement en cours d'envoi ne soit écrasé par une lecture
  // partie avant lui.
  const pendingRef = useRef(new Set());

  useEffect(() => {
    subscribers.add(setFavorites);
    if (!userId) {
      // Déconnexion : le cache d'un autre compte ne doit surtout pas rester.
      cache = null;
      cachedUserId = null;
      setFavorites(new Set());
      return () => { subscribers.delete(setFavorites); };
    }
    if (cachedUserId === userId && cache) {
      setFavorites(cache);
    } else {
      cachedUserId = userId;
      inFlight = fetchFavorites(userId);
      inFlight.then((set) => {
        // Réponse périmée (changement de compte entre-temps) : on l'ignore.
        if (cachedUserId !== userId) return;
        cache = set;
        inFlight = null;
        notify();
      });
    }
    return () => { subscribers.delete(setFavorites); };
  }, [userId]);

  const toggle = useCallback(async (placeType, placeId) => {
    if (!userId) return;
    const key = favoriteKey(placeType, placeId);
    if (pendingRef.current.has(key)) return;
    pendingRef.current.add(key);

    const wasFavorite = (cache ?? new Set()).has(key);
    // Basculement optimiste : un favori doit répondre au doigt, l'écriture ne
    // fait que confirmer.
    const next = new Set(cache ?? []);
    if (wasFavorite) next.delete(key); else next.add(key);
    cache = next;
    notify();

    const query = wasFavorite
      ? supabase.from('place_favorites').delete()
          .eq('user_id', userId).eq('place_id', placeId).eq('place_type', placeType)
      : supabase.from('place_favorites')
          .upsert({ user_id: userId, place_id: placeId, place_type: placeType },
                  { onConflict: 'user_id,place_id,place_type' });

    const { error } = await query;
    pendingRef.current.delete(key);
    if (error) {
      console.error('[usePlaceFavorites] toggle:', error);
      // Retour à l'état réel : laisser l'étoile allumée alors que rien n'a été
      // enregistré ferait croire à un favori qu'on ne retrouverait jamais.
      const reverted = new Set(cache ?? []);
      if (wasFavorite) reverted.add(key); else reverted.delete(key);
      cache = reverted;
      notify();
    }
  }, [userId]);

  return { favorites, toggleFavorite: toggle, isFavorite: (type, id) => favorites.has(favoriteKey(type, id)) };
}
