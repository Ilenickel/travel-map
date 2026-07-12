-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v8
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v7.sql
--
-- Deux nouveautés :
--
-- 1. CRITÈRES DE VOYAGE : à l'activation du partage, l'utilisateur peut
--    cocher des critères qui identifient son voyage (avec enfants, en
--    couple, entre amis…). Stockés sur le voyage (trips.share_criteria,
--    modifiables ensuite depuis l'en-tête de l'éditeur) et recopiés au
--    (re-)partage sur les modèles — un modèle reste une copie figée. Les
--    modèles partagés AVANT cette version gardent criteria = NULL
--    ("non renseigné"), distinct d'un tableau vide (critères demandés,
--    aucun coché).
--
-- 2. GROUPES DE MODÈLES (suggestions de voyage ENTIER) : le partage lie
--    désormais les modèles-villes d'une même destination dans un groupe
--    (trip_template_groups) qui représente le voyage complet dans ce pays :
--    durée totale, ordre des villes (group_position) et décalage de chaque
--    ville par rapport au 1er jour (group_day_offset), calculés depuis les
--    VRAIES dates des activités du voyage source — même philosophie que le
--    rattachement des excursions (parent_template_id + day_offset, v4).
--    Sert au nouveau mode "Suggestions de voyages" à l'échelle du pays.
-- ════════════════════════════════════════════════════════════════

-- ─── 1. Critères de voyage ────────────────────────────────────────
ALTER TABLE trips ADD COLUMN IF NOT EXISTS share_criteria TEXT[];
ALTER TABLE trip_templates ADD COLUMN IF NOT EXISTS criteria TEXT[];

-- ─── 2. Groupes de modèles (voyage entier par pays) ──────────────
CREATE TABLE IF NOT EXISTS trip_template_groups (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_trip_id  UUID REFERENCES trips(id) ON DELETE SET NULL,
  created_by      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  country_code    TEXT NOT NULL,
  -- Durée totale du voyage dans ce pays : du 1er jour d'activité de la
  -- première ville au dernier jour d'activité de la dernière (jours creux
  -- entre villes inclus — c'est bien la durée réelle du séjour sur place).
  total_days      INTEGER NOT NULL,
  criteria        TEXT[],
  is_public       BOOLEAN NOT NULL DEFAULT true,
  uses_count      INTEGER NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- Un seul groupe par (voyage source, pays) : un re-partage met à jour le
  -- même groupe, jamais un doublon — même logique que l'unicité
  -- (source_trip_id, country_code, city_name) des modèles-villes (v3).
  UNIQUE (source_trip_id, country_code)
);

-- Rattachement des modèles-villes à leur groupe. ON DELETE SET NULL : la
-- suppression d'un groupe ne doit jamais emporter les modèles-villes, qui
-- restent proposés individuellement (suggestion par ville).
ALTER TABLE trip_templates ADD COLUMN IF NOT EXISTS group_id UUID REFERENCES trip_template_groups(id) ON DELETE SET NULL;
ALTER TABLE trip_templates ADD COLUMN IF NOT EXISTS group_position INTEGER;
ALTER TABLE trip_templates ADD COLUMN IF NOT EXISTS group_day_offset INTEGER;

ALTER TABLE trip_template_groups ENABLE ROW LEVEL SECURITY;

-- Lecture publique des groupes partagés, écriture par le créateur — même
-- modèle que trip_templates (les écritures passent en pratique par l'API
-- avec la clé service_role, qui contourne RLS).
CREATE POLICY "trip_template_groups_read_public" ON trip_template_groups
  FOR SELECT
  USING (is_public = true OR auth.uid() = created_by);

CREATE POLICY "trip_template_groups_insert_own" ON trip_template_groups
  FOR INSERT
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "trip_template_groups_update_own" ON trip_template_groups
  FOR UPDATE
  USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "trip_template_groups_delete_own" ON trip_template_groups
  FOR DELETE
  USING (auth.uid() = created_by);

-- Incrément atomique du compteur d'imports d'un groupe (même raison d'être
-- que increment_template_uses, v2 : éviter une lecture-puis-écriture non
-- atomique côté API).
CREATE OR REPLACE FUNCTION increment_template_group_uses(group_id UUID)
RETURNS VOID LANGUAGE sql AS $$
  UPDATE trip_template_groups SET uses_count = uses_count + 1 WHERE id = group_id;
$$;

-- ─── Index de performance ─────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_trip_template_groups_country ON trip_template_groups(country_code, is_public);
CREATE INDEX IF NOT EXISTS idx_trip_templates_group         ON trip_templates(group_id);
