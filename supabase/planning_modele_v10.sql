-- ════════════════════════════════════════════════════════════════
-- Planning-modèle communautaire — v10
-- À exécuter dans l'éditeur SQL de Supabase, après planning_modele_v9.sql
--
-- IMPORT SANS DATES : un voyage/planning importé alors que rien n'est encore
-- daté (ni le voyage, ni la ville) ne doit plus perdre sa structure relative
-- (jour 1, jour 2…) en arrivant tout en "non planifié". La structure est
-- conservée dans deux colonnes "en attente" :
--
--   trip_cities.pending_day_offset  : décalage (en jours, base 0) de la ville
--     par rapport au jour 1 de son ANCRE — le début du voyage pour une ville
--     de base importée via un voyage entier, le début de la ville PARENTE
--     pour une excursion.
--   trip_activities.pending_day_index : jour (base 1) de l'activité au sein
--     de SA ville.
--
-- Dès que l'utilisateur choisit ensuite une date de départ (du voyage, ou de
-- la ville pour un import par ville), les RPC ci-dessous convertissent tout
-- en vraies dates : la date choisie devient le jour 1, puis les colonnes
-- pending sont vidées (ancrage en une fois — un changement de date ULTÉRIEUR
-- ne re-décale rien, comme pour n'importe quel voyage déjà daté).
--
-- SECURITY INVOKER (défaut) : appelées depuis le client, les mises à jour
-- passent par les policies RLS existantes de trip_cities/trip_activities —
-- seuls le propriétaire et les membres du voyage peuvent ancrer.
-- ════════════════════════════════════════════════════════════════

ALTER TABLE trip_cities     ADD COLUMN IF NOT EXISTS pending_day_offset INTEGER;
ALTER TABLE trip_activities ADD COLUMN IF NOT EXISTS pending_day_index  INTEGER;

-- ─── Ancrage d'UNE ville (et de ses excursions rattachées) ────────
-- p_start_date devient le jour 1 de la ville : ses activités en attente
-- reçoivent leur vraie date, puis les excursions rattachées (pending_day_offset
-- relatif au jour 1 de cette ville) reçoivent les leurs.
CREATE OR REPLACE FUNCTION anchor_city_pending_days(p_city_id UUID, p_start_date DATE)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  -- Activités de la ville elle-même
  UPDATE trip_activities
  SET visit_date = p_start_date + (pending_day_index - 1),
      pending_day_index = NULL
  WHERE city_id = p_city_id AND pending_day_index IS NOT NULL;

  -- Activités des excursions rattachées, décalées du pending_day_offset de
  -- l'excursion (relatif au jour 1 de la ville parente)
  UPDATE trip_activities a
  SET visit_date = p_start_date + c.pending_day_offset + (a.pending_day_index - 1),
      pending_day_index = NULL
  FROM trip_cities c
  WHERE a.city_id = c.id
    AND c.parent_city_id = p_city_id
    AND c.pending_day_offset IS NOT NULL
    AND a.pending_day_index IS NOT NULL;

  UPDATE trip_cities
  SET pending_day_offset = NULL
  WHERE parent_city_id = p_city_id AND pending_day_offset IS NOT NULL;

  UPDATE trip_cities
  SET pending_day_offset = NULL
  WHERE id = p_city_id AND pending_day_offset IS NOT NULL;
END;
$$;

-- ─── Ancrage de TOUT le voyage ────────────────────────────────────
-- p_start_date devient le jour 1 du voyage : chaque ville de base en attente
-- reçoit sa start_date (= départ + son décalage), puis est ancrée comme
-- ci-dessus. Les villes sans pending_day_offset (ajoutées à la main, ou déjà
-- datées) ne sont jamais touchées.
CREATE OR REPLACE FUNCTION anchor_trip_pending_days(p_trip_id UUID, p_start_date DATE)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
  v_city RECORD;
BEGIN
  FOR v_city IN
    SELECT id, pending_day_offset
    FROM trip_cities
    WHERE trip_id = p_trip_id
      AND parent_city_id IS NULL
      AND pending_day_offset IS NOT NULL
  LOOP
    UPDATE trip_cities
    SET start_date = p_start_date + v_city.pending_day_offset
    WHERE id = v_city.id;
    PERFORM anchor_city_pending_days(v_city.id, p_start_date + v_city.pending_day_offset);
  END LOOP;
END;
$$;
