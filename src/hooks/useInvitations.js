import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

export function useInvitations(userId) {
  const [pending, setPending] = useState([]);

  const load = useCallback(async () => {
    if (!userId) return;
    const { data } = await supabase
      .from('trip_invitations')
      .select('*, trips(id, title, start_date, end_date), inviter:inviter_id(id, display_name, avatar_url)')
      .eq('invitee_id', userId)
      .eq('status', 'pending')
      .order('created_at', { ascending: false });
    setPending(data || []);
  }, [userId]);

  useEffect(() => {
    if (userId) load();
    else setPending([]);
  }, [userId, load]);

  // Supprime la notification "trip_invitation" associée (visible dans la cloche de
  // notifications) une fois l'invitation traitée par ce bandeau, sinon elle reste
  // affichée avec des boutons Accepter/Refuser qui ne fonctionnent plus.
  const cleanupNotification = async (invitationId) => {
    await supabase.from('notifications').delete()
      .eq('type', 'trip_invitation')
      .eq('metadata->>invitation_id', invitationId);
  };

  const accept = useCallback(async (invitationId) => {
    const { error } = await supabase.rpc('accept_trip_invitation', { invitation_id: invitationId });
    if (!error) {
      setPending(prev => prev.filter(i => i.id !== invitationId));
      await cleanupNotification(invitationId);
    }
    return !error;
  }, []);

  const decline = useCallback(async (invitationId) => {
    const { error } = await supabase.rpc('decline_trip_invitation', { invitation_id: invitationId });
    if (!error) {
      setPending(prev => prev.filter(i => i.id !== invitationId));
      await cleanupNotification(invitationId);
    }
    return !error;
  }, []);

  return { pending, load, accept, decline };
}
