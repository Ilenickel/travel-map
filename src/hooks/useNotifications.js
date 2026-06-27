import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';

export function useNotifications(userId) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const deletedIds = useRef(new Set());

  const fetch = useCallback(async () => {
    if (!userId) { setNotifications([]); setLoading(false); return; }
    const { data } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(50);
    // Filtrer les IDs supprimés localement (en cas de DELETE RLS non encore appliqué)
    setNotifications((data || []).filter((n) => !deletedIds.current.has(n.id)));
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    fetch();
    if (!userId) return;

    const channel = supabase
      .channel(`notifs-${userId}`)
      .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'notifications',
        filter: `user_id=eq.${userId}`,
      }, () => fetch())
      .subscribe();

    // Fallback polling toutes les 20s si Realtime non activé sur la table
    const poll = setInterval(fetch, 20000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(poll);
    };
  }, [userId, fetch]);

  const markRead = useCallback(async (id) => {
    await supabase.from('notifications').update({ read: true }).eq('id', id);
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  }, []);

  const markAllRead = useCallback(async () => {
    if (!userId) return;
    await supabase.from('notifications').update({ read: true }).eq('user_id', userId).eq('read', false);
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, [userId]);

  const deleteOne = useCallback(async (id) => {
    deletedIds.current.add(id);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    await supabase.from('notifications').delete().eq('id', id);
  }, []);

  const deleteAll = useCallback(async () => {
    if (!userId) return;
    setNotifications((prev) => { prev.forEach((n) => deletedIds.current.add(n.id)); return []; });
    await supabase.from('notifications').delete().eq('user_id', userId);
  }, [userId]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return { notifications, loading, unreadCount, markRead, markAllRead, deleteOne, deleteAll };
}
