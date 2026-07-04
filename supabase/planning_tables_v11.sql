-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v11.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Fix : le bandeau "X vous invite au voyage « ... »" affiché sur l'écran de
-- planification (PendingInvitations, via useInvitations.js) affichait le nom
-- générique "Voyage" au lieu du vrai titre.
--
-- Cause : useInvitations.js embed `trips(id, title, ...)` depuis
-- trip_invitations. Les policies RLS existantes sur `trips` (trips_own +
-- trips_member_read, planning_tables_v2_fix.sql) n'autorisent la lecture
-- qu'au propriétaire ou à un membre déjà accepté — un invité dont
-- l'invitation est encore "pending" n'est NI l'un NI l'autre. PostgREST omet
-- alors silencieusement la relation embarquée (elle revient à NULL, pas une
-- erreur), d'où le repli sur le libellé générique côté client.
--
-- La notification de la cloche (NotificationPanel), elle, affiche le bon nom
-- car elle lit `metadata->>trip_title`, un texte figé au moment de l'envoi de
-- l'invitation (capturé par l'organisateur, qui a lui accès au voyage) — pas
-- une jointure live soumise à la RLS de `trips`.
--
-- Fix : une policy SELECT supplémentaire sur `trips`, strictement limitée à un
-- voyage pour lequel l'utilisateur a une invitation PENDING qui lui est
-- personnellement adressée — pas d'accès élargi à d'autres voyages, et
-- l'accès disparaît de lui-même dès que l'invitation change de statut
-- (acceptée/refusée/annulée).

DROP POLICY IF EXISTS "trips_pending_invitee_read" ON trips;
CREATE POLICY "trips_pending_invitee_read" ON trips
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM trip_invitations
      WHERE trip_invitations.trip_id = trips.id
        AND trip_invitations.invitee_id = auth.uid()
        AND trip_invitations.status = 'pending'
    )
  );
