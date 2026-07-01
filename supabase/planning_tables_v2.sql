-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v2.sql — ADDITIONS seulement (ne PAS rejouer v1)
-- ═══════════════════════════════════════════════════════════════
-- Jouer uniquement ce fichier pour migrer depuis la v1.
-- Si vous avez déjà joué une version antérieure de ce fichier,
-- jouez plutôt supabase/planning_tables_v2_fix.sql à la place.

-- ─── Fonctions SECURITY DEFINER (évitent toute récursion RLS) ──

CREATE OR REPLACE FUNCTION is_trip_owner(_trip_id UUID, _user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql SECURITY DEFINER STABLE
AS $$
  SELECT EXISTS (SELECT 1 FROM trips WHERE id = _trip_id AND user_id = _user_id);
$$;

CREATE OR REPLACE FUNCTION is_trip_member(_trip_id UUID, _user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql SECURITY DEFINER STABLE
AS $$
  SELECT EXISTS (SELECT 1 FROM trip_members WHERE trip_id = _trip_id AND user_id = _user_id);
$$;

-- ─── Membres co-voyageurs ───────────────────────────────────────

CREATE TABLE IF NOT EXISTS trip_members (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id   UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
  user_id   UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role      TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('owner', 'member')),
  joined_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(trip_id, user_id)
);

ALTER TABLE trip_members ENABLE ROW LEVEL SECURITY;

-- NB : is_trip_member() est SECURITY DEFINER donc contourne RLS en interne,
-- ce qui évite la récursion infinie qu'une sous-requête directe sur
-- trip_members provoquerait ici.
CREATE POLICY "trip_members_view" ON trip_members
  FOR SELECT USING (
    user_id = auth.uid()
    OR is_trip_owner(trip_id, auth.uid())
    OR is_trip_member(trip_id, auth.uid())
  );

CREATE POLICY "trip_members_insert_owner" ON trip_members
  FOR INSERT WITH CHECK (is_trip_owner(trip_id, auth.uid()));

CREATE POLICY "trip_members_delete" ON trip_members
  FOR DELETE USING (
    user_id = auth.uid()
    OR is_trip_owner(trip_id, auth.uid())
  );

-- ─── Zones / groupes d'activités ───────────────────────────────

CREATE TABLE IF NOT EXISTS trip_groups (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id    UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
  name       TEXT NOT NULL,
  color      TEXT NOT NULL DEFAULT '#6366f1',
  position   INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE trip_activities ADD COLUMN IF NOT EXISTS group_id UUID REFERENCES trip_groups(id) ON DELETE SET NULL;

ALTER TABLE trip_groups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "trip_groups_own" ON trip_groups
  FOR ALL
  USING (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()));

-- ─── Invitations de voyage ──────────────────────────────────────

CREATE TABLE IF NOT EXISTS trip_invitations (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id        UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
  inviter_id     UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  invitee_email  TEXT NOT NULL,
  invitee_id     UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  status         TEXT NOT NULL DEFAULT 'pending'
                 CHECK (status IN ('pending', 'accepted', 'declined', 'cancelled')),
  created_at     TIMESTAMPTZ DEFAULT now(),
  updated_at     TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE trip_invitations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "trip_invitations_view" ON trip_invitations
  FOR SELECT USING (
    inviter_id = auth.uid()
    OR invitee_id = auth.uid()
    OR is_trip_owner(trip_id, auth.uid())
  );

CREATE POLICY "trip_invitations_insert" ON trip_invitations
  FOR INSERT WITH CHECK (
    inviter_id = auth.uid()
    AND (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()))
  );

CREATE POLICY "trip_invitations_update" ON trip_invitations
  FOR UPDATE USING (
    inviter_id = auth.uid()
    OR invitee_id = auth.uid()
  );

-- ─── Préférence profil ──────────────────────────────────────────

ALTER TABLE profiles ADD COLUMN IF NOT EXISTS allow_trip_invitations BOOLEAN NOT NULL DEFAULT true;

-- ─── Accès membres aux données du voyage ───────────────────────

CREATE POLICY "trips_member_read" ON trips
  FOR SELECT USING (is_trip_member(id, auth.uid()));

CREATE POLICY "trips_member_write" ON trips
  FOR UPDATE USING (is_trip_member(id, auth.uid()));

CREATE POLICY "trip_destinations_member" ON trip_destinations
  FOR ALL USING (is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_member(trip_id, auth.uid()));

CREATE POLICY "trip_cities_member" ON trip_cities
  FOR ALL USING (is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_member(trip_id, auth.uid()));

CREATE POLICY "trip_activities_member" ON trip_activities
  FOR ALL USING (is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_member(trip_id, auth.uid()));

-- ─── Fonctions utilitaires ──────────────────────────────────────

-- Chercher un profil par email (sécurisé, accès auth.users)
CREATE OR REPLACE FUNCTION get_profile_by_email(lookup_email TEXT)
RETURNS TABLE(id UUID, display_name TEXT, avatar_url TEXT, allow_trip_invitations BOOLEAN)
LANGUAGE sql SECURITY DEFINER
AS $$
  SELECT p.id, p.display_name, p.avatar_url, COALESCE(p.allow_trip_invitations, true)
  FROM auth.users u
  INNER JOIN profiles p ON p.id = u.id
  WHERE u.email = lookup_email
  LIMIT 1;
$$;

-- Accepter une invitation (SECURITY DEFINER pour contourner RLS sur INSERT trip_members)
CREATE OR REPLACE FUNCTION accept_trip_invitation(invitation_id UUID)
RETURNS VOID
LANGUAGE plpgsql SECURITY DEFINER
AS $$
DECLARE
  inv RECORD;
BEGIN
  SELECT * INTO inv
  FROM trip_invitations
  WHERE id = invitation_id AND invitee_id = auth.uid() AND status = 'pending';
  IF NOT FOUND THEN RAISE EXCEPTION 'Invitation invalide ou déjà traitée'; END IF;

  INSERT INTO trip_members (trip_id, user_id, role)
  VALUES (inv.trip_id, auth.uid(), 'member')
  ON CONFLICT (trip_id, user_id) DO NOTHING;

  UPDATE trip_invitations SET status = 'accepted', updated_at = now()
  WHERE id = invitation_id;
END;
$$;

-- Décliner une invitation
CREATE OR REPLACE FUNCTION decline_trip_invitation(invitation_id UUID)
RETURNS VOID
LANGUAGE plpgsql SECURITY DEFINER
AS $$
BEGIN
  UPDATE trip_invitations SET status = 'declined', updated_at = now()
  WHERE id = invitation_id AND invitee_id = auth.uid() AND status = 'pending';
END;
$$;
