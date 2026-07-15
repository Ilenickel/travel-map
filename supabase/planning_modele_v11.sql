-- ════════════════════════════════════════════════════════════════
-- Planning-modèle — v11 : photo des activités dans les suggestions
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v10.sql
--
-- Slug Wikipédia/Commons explicite par activité ("Kinkaku-ji", ou
-- "File:xxx.jpg") : quand il est présent, la vignette photo des suggestions
-- (useActivityWikiImages.js) l'utilise directement, sans recherche ni
-- ambiguïté. Quand il est absent, le client retombe sur une résolution
-- best-effort (geosearch par coordonnées puis recherche par nom) — la
-- colonne est donc un OVERRIDE de précision, jamais une obligation.
--
--   - trip_activities.wikipedia : posé à l'ajout d'un lieu conseillé qui en
--     porte déjà un (lieux "à ne pas manquer" éditoriaux/communautaires, voir
--     PlaceSuggestionsButton.jsx) ; recopié dans le modèle au partage et
--     restauré à l'import.
--   - trip_template_activities.wikipedia : copie figée côté modèle, aussi
--     renseignable directement par les seeds éditoriaux (8e élément optionnel
--     du tableau d'activité de seed_day, voir seed_trip_templates_helpers.sql).
ALTER TABLE trip_activities ADD COLUMN IF NOT EXISTS wikipedia TEXT;
ALTER TABLE trip_template_activities ADD COLUMN IF NOT EXISTS wikipedia TEXT;

-- replace_template_content (v7) doit désormais aussi recopier wikipedia.
CREATE OR REPLACE FUNCTION replace_template_content(p_template_id UUID, p_days JSONB)
RETURNS VOID LANGUAGE plpgsql AS $$
DECLARE
  day_row JSONB;
  new_day_id UUID;
BEGIN
  PERFORM 1 FROM trip_templates WHERE id = p_template_id FOR UPDATE;

  DELETE FROM trip_template_days WHERE template_id = p_template_id;

  FOR day_row IN SELECT * FROM jsonb_array_elements(p_days)
  LOOP
    INSERT INTO trip_template_days (template_id, day_index)
    VALUES (p_template_id, (day_row->>'day_index')::INTEGER)
    RETURNING id INTO new_day_id;

    INSERT INTO trip_template_activities
      (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position, duration_minutes, wikipedia)
    SELECT
      new_day_id,
      act->>'name',
      act->>'description',
      act->>'time_slot',
      COALESCE(act->>'category', 'other'),
      (act->>'place_lat')::DOUBLE PRECISION,
      (act->>'place_lng')::DOUBLE PRECISION,
      act->>'place_address',
      COALESCE((act->>'position')::INTEGER, 0),
      (act->>'duration_minutes')::INTEGER,
      act->>'wikipedia'
    FROM jsonb_array_elements(day_row->'activities') AS act;
  END LOOP;
END;
$$;
