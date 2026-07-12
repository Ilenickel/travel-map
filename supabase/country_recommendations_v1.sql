-- ════════════════════════════════════════════════════════════════
-- Recommandations de voyages entre pays — v1
-- À exécuter dans l'éditeur SQL de Supabase
--
-- "Si vous avez aimé tel pays, vous aimerez aussi tel pays" : une
-- recommandation est DIRECTIONNELLE (source = le pays aimé, target = le pays
-- recommandé) et porte une description libre expliquant la ressemblance.
-- Affichée dans le nouvel onglet "Recommandations" de la fiche pays, dans
-- les deux sens (le pays ouvert peut être source ou target).
--
-- Accès entièrement via RLS côté client (pas d'endpoint serverless : la
-- limite de 12 fonctions du plan Vercel Hobby est déjà atteinte) — même
-- modèle que user_destinations : lecture publique, écriture par l'auteur.
-- ════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS country_recommendations (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id              UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  source_country_code  TEXT NOT NULL,
  target_country_code  TEXT NOT NULL,
  description          TEXT NOT NULL,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- Un utilisateur ne recommande une même paire (dans un même sens) qu'une
  -- fois : re-soumettre la même paire met à jour sa description (upsert côté
  -- client) au lieu de créer un doublon.
  UNIQUE (user_id, source_country_code, target_country_code),
  -- Un pays ne peut pas se recommander lui-même.
  CHECK (source_country_code <> target_country_code),
  -- Garde-fou taille : le formulaire limite déjà à 600 caractères côté client.
  CHECK (char_length(description) <= 1000)
);

ALTER TABLE country_recommendations ENABLE ROW LEVEL SECURITY;

-- Lecture publique (contenu communautaire, comme user_destinations).
CREATE POLICY "country_recommendations_read_all" ON country_recommendations
  FOR SELECT
  USING (true);

CREATE POLICY "country_recommendations_insert_own" ON country_recommendations
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "country_recommendations_update_own" ON country_recommendations
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "country_recommendations_delete_own" ON country_recommendations
  FOR DELETE
  USING (auth.uid() = user_id);

-- L'onglet requête les deux sens (source OU target = pays ouvert).
CREATE INDEX IF NOT EXISTS idx_country_reco_source ON country_recommendations(source_country_code);
CREATE INDEX IF NOT EXISTS idx_country_reco_target ON country_recommendations(target_country_code);
CREATE INDEX IF NOT EXISTS idx_country_reco_user   ON country_recommendations(user_id);
