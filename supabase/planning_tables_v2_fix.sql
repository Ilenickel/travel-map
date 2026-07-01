-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v2_fix.sql — à jouer APRÈS planning_tables_v2.sql
-- Corrige : récursion infinie RLS sur trip_members (erreurs 500)
--           + échec d'embed PostgREST sur trip_invitations (erreur 400)
-- ═══════════════════════════════════════════════════════════════

-- ─── Fonction SECURITY DEFINER : contourne RLS pour éviter la récursion ──

CREATE OR REPLACE FUNCTION is_trip_member(_trip_id UUID, _user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql SECURITY DEFINER STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM trip_members WHERE trip_id = _trip_id AND user_id = _user_id
  );
$$;

CREATE OR REPLACE FUNCTION is_trip_owner(_trip_id UUID, _user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql SECURITY DEFINER STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM trips WHERE id = _trip_id AND user_id = _user_id
  );
$$;

-- ─── Recréation des policies sans self-référence directe ───────

DROP POLICY IF EXISTS "trip_members_view" ON trip_members;
CREATE POLICY "trip_members_view" ON trip_members
  FOR SELECT USING (
    user_id = auth.uid()
    OR is_trip_owner(trip_id, auth.uid())
    OR is_trip_member(trip_id, auth.uid())
  );

DROP POLICY IF EXISTS "trip_members_insert_owner" ON trip_members;
CREATE POLICY "trip_members_insert_owner" ON trip_members
  FOR INSERT WITH CHECK (is_trip_owner(trip_id, auth.uid()));

DROP POLICY IF EXISTS "trip_members_delete" ON trip_members;
CREATE POLICY "trip_members_delete" ON trip_members
  FOR DELETE USING (
    user_id = auth.uid()
    OR is_trip_owner(trip_id, auth.uid())
  );

DROP POLICY IF EXISTS "trip_groups_own" ON trip_groups;
CREATE POLICY "trip_groups_own" ON trip_groups
  FOR ALL
  USING (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()));

DROP POLICY IF EXISTS "trip_invitations_insert" ON trip_invitations;
CREATE POLICY "trip_invitations_insert" ON trip_invitations
  FOR INSERT WITH CHECK (
    inviter_id = auth.uid()
    AND (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()))
  );

DROP POLICY IF EXISTS "trips_member_read" ON trips;
CREATE POLICY "trips_member_read" ON trips
  FOR SELECT USING (is_trip_member(id, auth.uid()));

DROP POLICY IF EXISTS "trips_member_write" ON trips;
CREATE POLICY "trips_member_write" ON trips
  FOR UPDATE USING (is_trip_member(id, auth.uid()));

DROP POLICY IF EXISTS "trip_destinations_member" ON trip_destinations;
CREATE POLICY "trip_destinations_member" ON trip_destinations
  FOR ALL USING (is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_member(trip_id, auth.uid()));

DROP POLICY IF EXISTS "trip_cities_member" ON trip_cities;
CREATE POLICY "trip_cities_member" ON trip_cities
  FOR ALL USING (is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_member(trip_id, auth.uid()));

DROP POLICY IF EXISTS "trip_activities_member" ON trip_activities;
CREATE POLICY "trip_activities_member" ON trip_activities
  FOR ALL USING (is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_member(trip_id, auth.uid()));

-- ─── Fix embed PostgREST : inviter_id doit pointer vers profiles ──
-- (permet à `inviter:inviter_id(id, display_name, avatar_url)` de fonctionner)

ALTER TABLE trip_invitations DROP CONSTRAINT IF EXISTS trip_invitations_inviter_id_fkey;
ALTER TABLE trip_invitations
  ADD CONSTRAINT trip_invitations_inviter_id_fkey
  FOREIGN KEY (inviter_id) REFERENCES profiles(id) ON DELETE CASCADE;
