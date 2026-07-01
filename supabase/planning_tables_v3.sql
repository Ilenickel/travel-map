-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v3.sql — ADDITIONS seulement (ne PAS rejouer v1/v2)
-- ═══════════════════════════════════════════════════════════════
-- Excursions à la journée (day trips) : une ville "enfant" rattachée
-- à une ville de base, sans être une étape à part entière du voyage.

ALTER TABLE trip_cities ADD COLUMN IF NOT EXISTS parent_city_id UUID REFERENCES trip_cities(id) ON DELETE CASCADE;
ALTER TABLE trip_cities ADD COLUMN IF NOT EXISTS is_daytrip BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_trip_cities_parent ON trip_cities(parent_city_id);
