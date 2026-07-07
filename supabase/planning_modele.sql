-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire (branche planModel) — Triply
-- À exécuter dans l'éditeur SQL de Supabase
--
-- Permet à un utilisateur de partager un voyage terminé comme "modèle"
-- réutilisable par d'autres (opt-in), et de proposer ces modèles à l'ajout
-- d'une ville pour les utilisateurs qui ne veulent pas planifier eux-mêmes.
--
-- Un modèle est une COPIE FIGÉE et ANONYMISÉE au moment du partage (pas un
-- lien live vers le voyage source) : il survit à la suppression/modification
-- du voyage d'origine, et n'expose jamais de données personnelles (dates
-- réelles, coût, notes, membres) — seuls les jours relatifs et les
-- activités/lieux sont copiés, pas les hébergements (trop personnels).
-- ════════════════════════════════════════════════════════════════

-- ─── 1. Cache de géocodage par ville ──────────────────────────────
-- Réutilisable au-delà du planning-modèle (toute recherche par ville).
-- Une variante orthographique/linguistique donnée d'une ville n'est
-- géocodée qu'une seule fois. city_name est normalisé (minuscule, sans
-- accents) à l'écriture ET à la lecture par le code appelant.
--
-- lat/lng NULL = déjà recherché, non trouvé (évite de refaire une
-- recherche vouée à l'échec à chaque nouvelle tentative).
CREATE TABLE IF NOT EXISTS city_geocache (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country_code  TEXT NOT NULL,
  city_name     TEXT NOT NULL,
  lat           DOUBLE PRECISION,
  lng           DOUBLE PRECISION,
  geocoded_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (country_code, city_name)
);

-- ─── 2. Modèles de voyage partagés ────────────────────────────────
CREATE TABLE IF NOT EXISTS trip_templates (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_trip_id  UUID REFERENCES trips(id) ON DELETE SET NULL,
  created_by      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  country_code    TEXT NOT NULL,
  city_name       TEXT NOT NULL,
  city_lat        DOUBLE PRECISION NOT NULL,
  city_lng        DOUBLE PRECISION NOT NULL,
  nb_days         INTEGER NOT NULL,
  is_public       BOOLEAN NOT NULL DEFAULT false,
  uses_count      INTEGER NOT NULL DEFAULT 0,
  likes_count     INTEGER NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─── 3. Jours d'un modèle ──────────────────────────────────────────
-- day_index est relatif (1, 2, 3...), jamais une date réelle : un modèle
-- doit être réutilisable par n'importe qui, peu importe ses dates de séjour.
CREATE TABLE IF NOT EXISTS trip_template_days (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id   UUID REFERENCES trip_templates(id) ON DELETE CASCADE NOT NULL,
  day_index     INTEGER NOT NULL
);

-- ─── 4. Activités d'un modèle ──────────────────────────────────────
-- Alignées sur trip_activities (lieu/excursion/trajet différenciés par
-- category), mais time_slot remplace visit_date/visit_time : un créneau
-- relatif ('matin'/'apres-midi'/'soir'/'nuit'), pas une heure précise.
CREATE TABLE IF NOT EXISTS trip_template_activities (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_day_id   UUID REFERENCES trip_template_days(id) ON DELETE CASCADE NOT NULL,
  name              TEXT NOT NULL,
  description       TEXT,
  time_slot         TEXT NOT NULL CHECK (time_slot IN ('matin', 'apres-midi', 'soir', 'nuit')),
  category          TEXT NOT NULL DEFAULT 'other',
  place_lat         DOUBLE PRECISION,
  place_lng         DOUBLE PRECISION,
  place_address     TEXT,
  position          INTEGER NOT NULL DEFAULT 0
);

-- ─── Row Level Security ───────────────────────────────────────────
ALTER TABLE city_geocache            ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_templates           ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_template_days       ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_template_activities ENABLE ROW LEVEL SECURITY;

-- city_geocache : pas d'accès direct utilisateur, uniquement via l'API
-- (client admin, comme editorial_place_geocache) — aucune policy = accès
-- refusé par défaut aux clients authentifiés/anon.

-- trip_templates : lecture publique des modèles partagés, écriture par
-- le créateur uniquement.
CREATE POLICY "trip_templates_read_public" ON trip_templates
  FOR SELECT
  USING (is_public = true OR auth.uid() = created_by);

CREATE POLICY "trip_templates_insert_own" ON trip_templates
  FOR INSERT
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "trip_templates_update_own" ON trip_templates
  FOR UPDATE
  USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "trip_templates_delete_own" ON trip_templates
  FOR DELETE
  USING (auth.uid() = created_by);

-- trip_template_days : suit la visibilité du modèle parent
CREATE POLICY "trip_template_days_read" ON trip_template_days
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM trip_templates
      WHERE trip_templates.id = trip_template_days.template_id
        AND (trip_templates.is_public = true OR trip_templates.created_by = auth.uid())
    )
  );

CREATE POLICY "trip_template_days_write_own" ON trip_template_days
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM trip_templates
      WHERE trip_templates.id = trip_template_days.template_id
        AND trip_templates.created_by = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM trip_templates
      WHERE trip_templates.id = trip_template_days.template_id
        AND trip_templates.created_by = auth.uid()
    )
  );

-- trip_template_activities : suit la visibilité du jour/modèle parent
CREATE POLICY "trip_template_activities_read" ON trip_template_activities
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM trip_template_days
      JOIN trip_templates ON trip_templates.id = trip_template_days.template_id
      WHERE trip_template_days.id = trip_template_activities.template_day_id
        AND (trip_templates.is_public = true OR trip_templates.created_by = auth.uid())
    )
  );

CREATE POLICY "trip_template_activities_write_own" ON trip_template_activities
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM trip_template_days
      JOIN trip_templates ON trip_templates.id = trip_template_days.template_id
      WHERE trip_template_days.id = trip_template_activities.template_day_id
        AND trip_templates.created_by = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM trip_template_days
      JOIN trip_templates ON trip_templates.id = trip_template_days.template_id
      WHERE trip_template_days.id = trip_template_activities.template_day_id
        AND trip_templates.created_by = auth.uid()
    )
  );

-- ─── Index de performance ─────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_city_geocache_country_city   ON city_geocache(country_code, city_name);
CREATE INDEX IF NOT EXISTS idx_trip_templates_country_city  ON trip_templates(country_code, is_public);
CREATE INDEX IF NOT EXISTS idx_trip_templates_created_by    ON trip_templates(created_by);
CREATE INDEX IF NOT EXISTS idx_trip_template_days_template   ON trip_template_days(template_id);
CREATE INDEX IF NOT EXISTS idx_trip_template_act_day         ON trip_template_activities(template_day_id);
