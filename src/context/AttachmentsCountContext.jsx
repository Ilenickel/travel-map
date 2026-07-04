import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const AttachmentsCountContext = createContext({ counts: new Map(), refresh: () => {} });

// Charge en une seule requête le nombre de pièces jointes par activité/hébergement
// pour tout le voyage, plutôt qu'une requête par carte (N+1) — permet d'afficher un
// badge 📎 sur chaque lieu/trajet/hébergement sans coût de perf notable.
//
// Pièces jointes personnelles : le badge n'affiche que MES propres fichiers (la RLS
// filtrerait de toute façon sur uploaded_by = auth.uid(), mais on le rend explicite
// ici — pas de compteur "global" qui laisserait deviner que d'autres membres ont
// importé des billets).
export function AttachmentsCountProvider({ tripId, children }) {
  const { user } = useAuth();
  const [counts, setCounts] = useState(new Map());

  const refresh = useCallback(async () => {
    if (!tripId || !user?.id) { setCounts(new Map()); return; }
    const { data, error } = await supabase
      .from('trip_attachments')
      .select('activity_id, lodging_id')
      .eq('trip_id', tripId)
      .eq('uploaded_by', user.id);
    if (error) { console.error('AttachmentsCountProvider load failed:', error); return; }
    const next = new Map();
    for (const row of data || []) {
      const id = row.activity_id || row.lodging_id;
      next.set(id, (next.get(id) || 0) + 1);
    }
    setCounts(next);
  }, [tripId, user?.id]);

  useEffect(() => { refresh(); }, [refresh]);

  return (
    <AttachmentsCountContext.Provider value={{ counts, refresh }}>
      {children}
    </AttachmentsCountContext.Provider>
  );
}

export function useAttachmentsCount(id) {
  const { counts, refresh } = useContext(AttachmentsCountContext);
  return { count: counts.get(id) || 0, refresh };
}
