-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v6 (branche planModel)
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v5.sql
--
-- Corrige une condition de course lors du (re-)partage : l'ancienne
-- séquence (DELETE trip_template_days puis 2 INSERT séparés, depuis l'API)
-- n'était pas atomique — deux partages concurrents du même modèle (deux
-- membres, ou deux onglets) pouvaient interlacer leurs opérations et
-- produire des jours en double, ou laisser une fenêtre où un troisième
-- utilisateur voit un modèle temporairement vide (voir api/share-trip-templates.js).
--
-- replace_template_content fait tout en une seule transaction (implicite à
-- l'appel de fonction) : verrouille la ligne du modèle (FOR UPDATE, sérialise
-- les appels concurrents sur le MÊME modèle), supprime les anciens jours
-- (cascade sur les activités), réinsère les nouveaux jours et activités à
-- partir d'un unique paramètre JSON.
--
-- p_days : [{ "day_index": 1, "activities": [{ "name": "...", "description": null,
--   "time_slot": "matin", "category": "visit", "place_lat": null, "place_lng": null,
--   "place_address": null, "position": 0 }, ...] }, ...]
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
      (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position)
    SELECT
      new_day_id,
      act->>'name',
      act->>'description',
      act->>'time_slot',
      COALESCE(act->>'category', 'other'),
      (act->>'place_lat')::DOUBLE PRECISION,
      (act->>'place_lng')::DOUBLE PRECISION,
      act->>'place_address',
      COALESCE((act->>'position')::INTEGER, 0)
    FROM jsonb_array_elements(day_row->'activities') AS act;
  END LOOP;
END;
$$;

-- Incrément atomique groupé de uses_count (un modèle principal + ses
-- excursions rattachées à chaque import) — évite N appels RPC séparés.
CREATE OR REPLACE FUNCTION increment_template_uses_many(template_ids UUID[])
RETURNS VOID LANGUAGE sql AS $$
  UPDATE trip_templates SET uses_count = uses_count + 1 WHERE id = ANY(template_ids);
$$;
