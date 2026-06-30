-- ─────────────────────────────────────────────────────────────────────────────
-- Lieux à ne pas manquer — contributifs
-- À exécuter dans Supabase SQL Editor
-- ─────────────────────────────────────────────────────────────────────────────

-- 1) Ajout colonnes sur destination_places (destinations communautaires)
ALTER TABLE destination_places
  ADD COLUMN IF NOT EXISTS user_id    UUID REFERENCES profiles(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS image_path TEXT,
  ADD COLUMN IF NOT EXISTS upvotes    INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS downvotes  INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT now();

ALTER TABLE destination_places
  DROP COLUMN IF EXISTS score;
ALTER TABLE destination_places
  ADD COLUMN score INT GENERATED ALWAYS AS (upvotes - downvotes) STORED;

-- 2) Lieux pour destinations STATIQUES
CREATE TABLE IF NOT EXISTS static_destination_places (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID REFERENCES profiles(id) ON DELETE SET NULL,
  country_code   TEXT NOT NULL,
  static_dest_id TEXT NOT NULL,
  name           TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  image_url      TEXT NOT NULL,
  image_path     TEXT,
  upvotes        INT NOT NULL DEFAULT 0,
  downvotes      INT NOT NULL DEFAULT 0,
  score          INT GENERATED ALWAYS AS (upvotes - downvotes) STORED,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3) Votes (commun aux deux types de lieux)
CREATE TABLE IF NOT EXISTS place_votes (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  place_id    UUID NOT NULL,
  place_type  TEXT NOT NULL CHECK (place_type IN ('community', 'static')),
  vote_type   TEXT NOT NULL CHECK (vote_type IN ('up', 'down')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT place_votes_unique UNIQUE (user_id, place_id, place_type)
);

-- ─── RLS ──────────────────────────────────────────────────────────────────────

ALTER TABLE static_destination_places ENABLE ROW LEVEL SECURITY;
ALTER TABLE place_votes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "sdp_select_all"  ON static_destination_places FOR SELECT USING (true);
CREATE POLICY "sdp_insert_auth" ON static_destination_places FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "sdp_delete_own"  ON static_destination_places FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "pv_select_all"  ON place_votes FOR SELECT USING (true);
CREATE POLICY "pv_insert_auth" ON place_votes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "pv_delete_own"  ON place_votes FOR DELETE USING (auth.uid() = user_id);
CREATE POLICY "pv_update_own"  ON place_votes FOR UPDATE USING (auth.uid() = user_id);
