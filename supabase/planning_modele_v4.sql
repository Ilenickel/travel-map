-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v4 (branche planModel)
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v3.sql
--
-- Corrige planning_modele_v3.sql : l'index unique était PARTIEL (WHERE
-- source_trip_id IS NOT NULL), mais PostgREST/supabase-js génère un
-- ON CONFLICT (source_trip_id, country_code, city_name) qui ne peut pas
-- cibler un index partiel — Postgres refuse alors l'upsert avec l'erreur
-- 42P10 "there is no unique or exclusion constraint matching the ON
-- CONFLICT specification". Le WHERE n'était de toute façon pas nécessaire :
-- Postgres traite chaque NULL comme distinct des autres dans un index unique
-- ordinaire, donc plusieurs modèles avec source_trip_id NULL (voyage source
-- supprimé) ne se bloquent jamais entre eux même sans clause partielle.
DROP INDEX IF EXISTS trip_templates_source_city_uniq;
CREATE UNIQUE INDEX IF NOT EXISTS trip_templates_source_city_uniq
  ON trip_templates (source_trip_id, country_code, city_name);

-- Partage automatique et continu (remplace le déclenchement manuel unique) :
-- si activé, le voyage se repartage tout seul (mise à jour du même modèle,
-- voir la contrainte ci-dessus) à chaque changement significatif, par
-- n'importe quel membre d'un voyage à plusieurs — voir TripEditor.jsx.
ALTER TABLE trips ADD COLUMN IF NOT EXISTS auto_share_template BOOLEAN NOT NULL DEFAULT false;
