-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v5 (branche planModel)
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v4.sql
--
-- Jusqu'ici, une excursion à la journée (trip_cities.is_daytrip = true,
-- rattachée via parent_city_id) était partagée comme un modèle totalement
-- indépendant de sa ville de base : en important le modèle de la ville
-- (ex. "Beijing"), l'excursion associée (ex. "Grande Muraille") n'était
-- jamais reprise — alors qu'elle fait partie intégrante du planning.
--
-- - parent_template_id : relie le modèle d'une excursion au modèle de sa
--   ville de base, quand celle-ci est partagée dans le même passage (sinon
--   l'excursion est ignorée silencieusement — voir api/share-trip-templates.js).
-- - day_offset : sur combien de jours après le début du séjour dans la
--   ville de base l'excursion a démarré (ex. 2 = "jour 3 du séjour").
--   Calculé à partir des VRAIES dates où les activités ont été planifiées
--   (première date d'activité de l'excursion moins première date d'activité
--   de la ville de base), jamais à partir d'un champ start_date séparé sur
--   l'excursion elle-même : ce champ n'existe plus côté excursion (retiré de
--   l'UI) — sa valeur pouvait diverger de l'endroit où l'utilisateur avait
--   réellement glissé les activités, causant un décalage erroné à l'import.
-- ════════════════════════════════════════════════════════════════

ALTER TABLE trip_templates ADD COLUMN IF NOT EXISTS parent_template_id UUID REFERENCES trip_templates(id) ON DELETE SET NULL;
ALTER TABLE trip_templates ADD COLUMN IF NOT EXISTS day_offset INTEGER;

CREATE INDEX IF NOT EXISTS idx_trip_templates_parent ON trip_templates(parent_template_id);
