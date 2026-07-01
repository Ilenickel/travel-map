-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v5.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Annulation d'invitation par l'organisateur : doit aussi supprimer
-- la notification reçue par l'invité. Or l'organisateur ne peut pas
-- supprimer une notification dont il n'est pas le destinataire (RLS
-- sur notifications restreinte à user_id = auth.uid()). On passe donc
-- par une fonction SECURITY DEFINER, comme accept/decline.

CREATE OR REPLACE FUNCTION cancel_trip_invitation(invitation_id UUID)
RETURNS VOID
LANGUAGE plpgsql SECURITY DEFINER
AS $$
DECLARE
  inv RECORD;
BEGIN
  SELECT * INTO inv
  FROM trip_invitations
  WHERE id = invitation_id AND status = 'pending';
  IF NOT FOUND THEN RETURN; END IF;

  -- Seul l'organisateur du voyage (ou l'auteur de l'invitation) peut annuler
  IF NOT (
    inv.inviter_id = auth.uid()
    OR EXISTS (SELECT 1 FROM trips WHERE id = inv.trip_id AND user_id = auth.uid())
  ) THEN
    RAISE EXCEPTION 'Action non autorisée';
  END IF;

  UPDATE trip_invitations SET status = 'cancelled', updated_at = now()
  WHERE id = invitation_id;

  -- Supprime la notification reçue par l'invité (bypass RLS grâce au SECURITY DEFINER)
  DELETE FROM notifications
  WHERE type = 'trip_invitation'
    AND metadata->>'invitation_id' = invitation_id::text;
END;
$$;
