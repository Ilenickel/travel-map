-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v8.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Hébergements par ville : entité distincte des activités (un hôtel n'est pas
-- un "lieu à visiter" : il a des dates d'arrivée/départ, un prix pour tout le
-- séjour, un lien de réservation). Affiché en bandeau "Nuit à ..." dans la vue
-- par jour, sur la carte avec un marqueur dédié, et dans les exports PDF/iCal.

CREATE TABLE IF NOT EXISTS trip_lodgings (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id       UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
  city_id       UUID REFERENCES trip_cities(id) ON DELETE CASCADE NOT NULL,
  name          TEXT NOT NULL,
  address       TEXT,
  place_lat     DOUBLE PRECISION,
  place_lng     DOUBLE PRECISION,
  check_in      DATE,
  check_out     DATE,
  price         NUMERIC(10,2),
  booking_url   TEXT,
  notes         TEXT,
  position      INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now(),
  -- Un départ avant l'arrivée n'a aucun sens ; l'UI l'empêche aussi, mais la
  -- contrainte protège des écritures directes (API, bug futur).
  CONSTRAINT lodging_dates_coherent CHECK (
    check_in IS NULL OR check_out IS NULL OR check_out >= check_in
  )
);

ALTER TABLE trip_lodgings ENABLE ROW LEVEL SECURITY;

-- Mêmes règles d'accès que trip_activities : le propriétaire du voyage et les
-- membres invités (trip_members) ont tous les droits. is_trip_owner/is_trip_member
-- sont les fonctions SECURITY DEFINER créées en v2.
CREATE POLICY "trip_lodgings_own" ON trip_lodgings
  FOR ALL
  USING (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()))
  WITH CHECK (is_trip_owner(trip_id, auth.uid()) OR is_trip_member(trip_id, auth.uid()));
