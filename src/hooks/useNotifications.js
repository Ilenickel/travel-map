import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';

export function useNotifications(userId) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const deletedIds = useRef(new Set());

  const fetchNotifs = useCallback(async () => {
    if (!userId) { setNotifications([]); setLoading(false); return; }
    const { data } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(50);
    setNotifications((data || []).filter((n) => !deletedIds.current.has(n.id)));
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    fetchNotifs();
    if (!userId) return;

    const channel = supabase
      .channel(`notifs-${userId}`)
      .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'notifications',
        filter: `user_id=eq.${userId}`,
      }, () => fetchNotifs())
      .on('postgres_changes', {
        event: 'UPDATE', schema: 'public', table: 'notifications',
        filter: `user_id=eq.${userId}`,
      }, () => fetchNotifs())
      .on('postgres_changes', {
        event: 'DELETE', schema: 'public', table: 'notifications',
        filter: `user_id=eq.${userId}`,
      }, () => fetchNotifs())
      .subscribe();

    const poll = setInterval(fetchNotifs, 20000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(poll);
    };
  }, [userId, fetchNotifs]);

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

  // Suppression sélective (utilisée quand seule une partie des notifications doit
  // vraiment disparaître de la base, ex : "Tout supprimer" qui épargne les invitations
  // de voyage en attente).
  const deleteMany = useCallback(async (ids) => {
    if (!ids.length) return;
    ids.forEach((id) => deletedIds.current.add(id));
    setNotifications((prev) => prev.filter((n) => !ids.includes(n.id)));
    await supabase.from('notifications').delete().in('id', ids);
  }, []);

  // Retrait purement visuel, sans toucher à la base ni la blacklister : la notification
  // reste en attente en base et réapparaîtra au prochain sondage/realtime (utilisé pour
  // les invitations de voyage, qui ne doivent disparaître pour de bon qu'après un vrai
  // Accepter/Refuser explicite).
  const hideOne = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return { notifications, loading, unreadCount, markRead, markAllRead, deleteOne, deleteAll, deleteMany, hideOne };
}
