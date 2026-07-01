-- ═══════════════════════════════════════════════════════════════
-- planning_tables_v4.sql — ADDITIONS seulement
-- ═══════════════════════════════════════════════════════════════
-- Marque les groupes créés par "Détecter zones auto" pour pouvoir
-- les remplacer (plutôt que les dupliquer) à chaque nouvelle détection.

ALTER TABLE trip_groups ADD COLUMN IF NOT EXISTS is_auto BOOLEAN NOT NULL DEFAULT false;
