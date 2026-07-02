-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v6.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Trajets (transport) : une activité de catégorie 'transport' peut désormais
-- porter un mode de transport et une durée, purement informatifs (n'occupent
-- pas plusieurs créneaux dans le calendrier — même logique que la case
-- "Toute la journée", pas de vraie plage horaire).

ALTER TABLE trip_activities ADD COLUMN IF NOT EXISTS transport_mode TEXT;
ALTER TABLE trip_activities ADD COLUMN IF NOT EXISTS duration_minutes INTEGER;
