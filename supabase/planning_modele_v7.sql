-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v7 (branche planModel)
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v6.sql
--
-- Une activité étirée sur plusieurs créneaux/jours (poignée de resize, voir
-- trip_activities.duration_minutes — supabase/planning_tables_v6.sql)
-- n'était pas du tout reprise dans le planning-modèle : le partage ne
-- copiait que name/description/time_slot/category/position, perdant
-- l'étirement. Elle réapparaissait donc dans la suggestion et l'import comme
-- une activité ponctuelle normale, sans lien avec le fait qu'elle occupe
-- plusieurs créneaux dans le voyage source.
ALTER TABLE trip_template_activities ADD COLUMN IF NOT EXISTS duration_minutes INTEGER;

-- replace_template_content (v6) doit désormais aussi écrire duration_minutes.
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
      (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position, duration_minutes)
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
      (act->>'duration_minutes')::INTEGER
    FROM jsonb_array_elements(day_row->'activities') AS act;
  END LOOP;
END;
$$;
