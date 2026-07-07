-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v2 (branche planModel)
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele.sql
--
-- Ajoute les colonnes nécessaires au flux utilisateur :
-- - trip_cities.planned_days : nombre de jours prévus dans la ville,
--   optionnel et modifiable à tout moment. Sans lui, aucune suggestion de
--   planning n'est proposée (côté ville) et aucun modèle ne peut être
--   généré à partir de cette ville (côté partage). Pour une excursion
--   (is_daytrip = true), le front-end pré-remplit 1 par défaut à l'ajout,
--   modifiable ensuite comme les autres villes.
-- - trip_cities.start_date : date réelle de début du séjour dans cette
--   ville, optionnelle. Sert à la fois à afficher la ville correspondant à
--   chaque jour du calendrier (avec planned_days) et à convertir les jours
--   relatifs d'un modèle importé en vraies visit_date sur trip_activities.
--   Sans elle, l'import d'un modèle place les activités en "non planifiées".
-- - trips.share_prompt_answered : mémorise que l'utilisateur a déjà répondu
--   (oui ou non) à la popup de fin de voyage proposant le partage, pour ne
--   plus la réafficher ensuite.
-- ════════════════════════════════════════════════════════════════

ALTER TABLE trip_cities ADD COLUMN IF NOT EXISTS planned_days INTEGER;
ALTER TABLE trip_cities ADD COLUMN IF NOT EXISTS start_date DATE;
ALTER TABLE trips ADD COLUMN IF NOT EXISTS share_prompt_answered BOOLEAN NOT NULL DEFAULT false;

-- Incrément atomique de uses_count (évite une lecture-puis-écriture non
-- atomique côté API, sujette à une race condition si deux imports du même
-- modèle arrivent en même temps).
CREATE OR REPLACE FUNCTION increment_template_uses(template_id UUID)
RETURNS VOID LANGUAGE sql AS $$
  UPDATE trip_templates SET uses_count = uses_count + 1 WHERE id = template_id;
$$;
