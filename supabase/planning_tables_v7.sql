-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v7.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Checklist / avancement : une activité peut être cochée comme "faite"
-- pendant le voyage. Purement informatif, ne change rien à la planification
-- (date/heure/durée) — même logique additive que transport_mode/duration_minutes
-- en v6.

ALTER TABLE trip_activities ADD COLUMN IF NOT EXISTS is_done BOOLEAN NOT NULL DEFAULT false;
