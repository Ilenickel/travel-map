import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';

export function useAdminAlerts(isAdmin) {
  const [alerts, setAlerts] = useState([]);

  const fetchAlerts = useCallback(async () => {
    if (!isAdmin) { setAlerts([]); return; }
    const { data } = await supabase
      .from('reports')
      .select('*')
      .order('created_at', { ascending: false });
    // Déduplique par contenu : l'admin voit 1 alerte par contenu (la plus récente).
    // Chaque reporter conserve sa propre ligne en DB pour que son bouton reste "Signalé".
    const seen = new Set();
    const deduped = (data || []).filter((a) => {
      const key = `${a.content_type}:${a.content_id}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    setAlerts(deduped);
  }, [isAdmin]);

  useEffect(() => {
    fetchAlerts();
    if (!isAdmin) return;

    // Polling toutes les 20s (identique aux notifs — garantit la fraîcheur même si Realtime RLS bloque)
    const interval = setInterval(fetchAlerts, 20000);

    // Realtime (nécessite ALTER PUBLICATION supabase_realtime ADD TABLE reports dans Supabase SQL editor)
    const channel = supabase
      .channel('admin-reports-rt')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'reports' }, fetchAlerts)
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'reports' }, fetchAlerts)
      .subscribe();

    return () => {
      clearInterval(interval);
      supabase.removeChannel(channel);
    };
  }, [isAdmin, fetchAlerts]);

  return { alerts, refresh: fetchAlerts };
}
