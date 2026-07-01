-- ════════════════════════════════════════════════════════════════
-- Tables de planification de voyage — Triply
-- À exécuter dans l'éditeur SQL de Supabase
-- ════════════════════════════════════════════════════════════════

-- ─── 1. Voyages ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS trips (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title           TEXT NOT NULL DEFAULT 'Mon voyage',
  start_date      DATE,
  end_date        DATE,
  planning_mode   TEXT NOT NULL DEFAULT 'city' CHECK (planning_mode IN ('city', 'day')),
  notes           TEXT,
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

-- ─── 2. Destinations (pays) dans un voyage ────────────────────────
CREATE TABLE IF NOT EXISTS trip_destinations (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id       UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
  country_code  TEXT NOT NULL,
  country_name  TEXT NOT NULL,
  position      INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ─── 3. Villes dans une destination ──────────────────────────────
CREATE TABLE IF NOT EXISTS trip_cities (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id         UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
  destination_id  UUID REFERENCES trip_destinations(id) ON DELETE CASCADE NOT NULL,
  name            TEXT NOT NULL,
  position        INTEGER NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- ─── 4. Activités/lieux dans une ville ───────────────────────────
CREATE TABLE IF NOT EXISTS trip_activities (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id       UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
  city_id       UUID REFERENCES trip_cities(id) ON DELETE CASCADE NOT NULL,
  name          TEXT NOT NULL,
  description   TEXT,
  visit_date    DATE,
  visit_time    TIME,
  category      TEXT NOT NULL DEFAULT 'other',
  position      INTEGER NOT NULL DEFAULT 0,
  place_lat     DOUBLE PRECISION,
  place_lng     DOUBLE PRECISION,
  place_address TEXT,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ─── Row Level Security ───────────────────────────────────────────
ALTER TABLE trips             ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_cities       ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_activities   ENABLE ROW LEVEL SECURITY;

-- trips : propriétaire uniquement
CREATE POLICY "trips_own" ON trips
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- trip_destinations : via ownership du trip parent
CREATE POLICY "trip_destinations_own" ON trip_destinations
  FOR ALL
  USING (
    EXISTS (SELECT 1 FROM trips WHERE trips.id = trip_destinations.trip_id AND trips.user_id = auth.uid())
  )
  WITH CHECK (
    EXISTS (SELECT 1 FROM trips WHERE trips.id = trip_destinations.trip_id AND trips.user_id = auth.uid())
  );

-- trip_cities : via ownership du trip parent
CREATE POLICY "trip_cities_own" ON trip_cities
  FOR ALL
  USING (
    EXISTS (SELECT 1 FROM trips WHERE trips.id = trip_cities.trip_id AND trips.user_id = auth.uid())
  )
  WITH CHECK (
    EXISTS (SELECT 1 FROM trips WHERE trips.id = trip_cities.trip_id AND trips.user_id = auth.uid())
  );

-- trip_activities : via ownership du trip parent
CREATE POLICY "trip_activities_own" ON trip_activities
  FOR ALL
  USING (
    EXISTS (SELECT 1 FROM trips WHERE trips.id = trip_activities.trip_id AND trips.user_id = auth.uid())
  )
  WITH CHECK (
    EXISTS (SELECT 1 FROM trips WHERE trips.id = trip_activities.trip_id AND trips.user_id = auth.uid())
  );

-- ─── Trigger updated_at automatique ──────────────────────────────
CREATE OR REPLACE FUNCTION update_trips_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trips_set_updated_at ON trips;
CREATE TRIGGER trips_set_updated_at
  BEFORE UPDATE ON trips
  FOR EACH ROW
  EXECUTE FUNCTION update_trips_updated_at();

-- ─── Migration (si tables déjà créées sans les nouvelles colonnes) ─
ALTER TABLE trips ADD COLUMN IF NOT EXISTS notes TEXT;
ALTER TABLE trip_activities ADD COLUMN IF NOT EXISTS visit_time TIME;
ALTER TABLE trip_activities ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'other';

-- ─── Index de performance ─────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_trips_user_id        ON trips(user_id);
CREATE INDEX IF NOT EXISTS idx_trip_dest_trip_id    ON trip_destinations(trip_id);
CREATE INDEX IF NOT EXISTS idx_trip_cities_trip_id  ON trip_cities(trip_id);
CREATE INDEX IF NOT EXISTS idx_trip_cities_dest_id  ON trip_cities(destination_id);
CREATE INDEX IF NOT EXISTS idx_trip_act_trip_id     ON trip_activities(trip_id);
CREATE INDEX IF NOT EXISTS idx_trip_act_city_id     ON trip_activities(city_id);
