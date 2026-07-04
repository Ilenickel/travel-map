-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v12.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Fix : récursion infinie RLS sur `trips`
-- ("infinite recursion detected in policy for relation \"trips\"")
--
-- Cause : la policy "trips_pending_invitee_read" (planning_tables_v11.sql)
-- interroge directement trip_invitations depuis une policy définie sur
-- trips :
--   EXISTS (SELECT 1 FROM trip_invitations WHERE trip_invitations.trip_id = trips.id ...)
-- Cette sous-requête n'est PAS protégée par une fonction SECURITY DEFINER,
-- contrairement à toutes les autres conditions inter-tables du projet
-- (is_trip_owner/is_trip_member, déjà introduites dans planning_tables_v2_fix.sql
-- pour ce même type de problème). Résultat : évaluer trips_pending_invitee_read
-- déclenche l'évaluation des policies RLS de trip_invitations
-- ("trip_invitations_view"), qui elles-mêmes rappellent is_trip_owner/
-- is_trip_member — lesquelles interrogent à nouveau trips, ce qui réévalue
-- trips_pending_invitee_read, etc. Boucle.
--
-- Symptôme observé : SELECT, UPDATE et DELETE touchant trips peuvent échouer
-- avec "infinite recursion detected in policy for relation trips" — de façon
-- dépendante du plan d'exécution choisi par Postgres (donc pas forcément
-- systématique ni reproductible à chaque tentative), ce qui explique qu'il
-- puisse ne pas se manifester tout de suite sur certains comptes/requêtes.
--
-- Fix : même remède que la première fois (v2_fix.sql) — passer par une
-- fonction SECURITY DEFINER qui contourne la RLS de trip_invitations en
-- interne, au lieu d'une sous-requête directe dans la policy de trips.

CREATE OR REPLACE FUNCTION has_pending_invitation(_trip_id UUID, _user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql SECURITY DEFINER STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM trip_invitations
    WHERE trip_id = _trip_id AND invitee_id = _user_id AND status = 'pending'
  );
$$;

DROP POLICY IF EXISTS "trips_pending_invitee_read" ON trips;
CREATE POLICY "trips_pending_invitee_read" ON trips
  FOR SELECT USING (has_pending_invitation(id, auth.uid()));
