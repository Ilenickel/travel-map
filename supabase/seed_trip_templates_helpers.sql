-- ════════════════════════════════════════════════════════════════
-- Fonctions d'aide pour les seeds d'itinéraires éditoriaux
-- À exécuter UNE FOIS avant tout seed_trip_templates_<pays>.sql
-- (sauf le Japon, écrit avant ces helpers en INSERT bruts).
-- Prérequis : planning_modele_v11.sql (colonne trip_template_activities.wikipedia).
--
-- Les seeds pays deviennent ainsi des appels compacts :
--   g := seed_group('FRA', 10);
--   c := seed_city('FRA','Paris',48.8566,2.3522,4,g,1,0);
--   PERFORM seed_day(c,1,'[["Tour Eiffel","desc","matin","visit",48.8584,2.2945,"Paris"],...]');
--
-- Format d'une activité (tableau JSON) :
--   [nom, description, créneau(matin|apres-midi|soir), catégorie, lat, lng, adresse, wikipedia?]
-- La position dans le tableau donne la colonne `position`.
-- `wikipedia` (8e élément, OPTIONNEL) : slug d'article Wikipédia ou fichier
-- Commons ("File:xxx.jpg") pour la vignette photo des suggestions — sans lui,
-- le client résout la photo par coordonnées + nom (useActivityWikiImages.js),
-- ce qui suffit pour la quasi-totalité des lieux ; ne le renseigner que pour
-- corriger un cas ambigu (voir planning_modele_v11.sql).
-- ════════════════════════════════════════════════════════════════

-- Un groupe éditorial (voyage entier) : criteria NULL = "non renseigné".
CREATE OR REPLACE FUNCTION seed_group(p_country TEXT, p_total_days INT)
RETURNS UUID LANGUAGE sql AS $$
  INSERT INTO trip_template_groups (country_code, total_days, criteria, is_public, is_editorial)
  VALUES (p_country, p_total_days, NULL, true, true)
  RETURNING id;
$$;

-- Une ville membre d'un groupe.
CREATE OR REPLACE FUNCTION seed_city(
  p_country TEXT, p_name TEXT, p_lat DOUBLE PRECISION, p_lng DOUBLE PRECISION,
  p_nb_days INT, p_group UUID, p_position INT, p_day_offset INT
) RETURNS UUID LANGUAGE sql AS $$
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days,
    is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES (p_country, p_name, p_lat, p_lng, p_nb_days, true, true, NULL, p_group, p_position, p_day_offset)
  RETURNING id;
$$;

-- Une excursion rattachée à sa ville mère (parent_template_id + day_offset,
-- même mécanisme que les vrais partages — voir planning_modele_v5.sql).
-- p_day_offset = jours écoulés dans la ville mère avant l'excursion
-- (0 = elle occupe le jour 1 du séjour) ; la ville mère ne doit PAS déclarer
-- de trip_template_days au même index (voir seed Japon, Nara/Kyoto).
CREATE OR REPLACE FUNCTION seed_daytrip(
  p_country TEXT, p_name TEXT, p_lat DOUBLE PRECISION, p_lng DOUBLE PRECISION,
  p_parent UUID, p_day_offset INT, p_nb_days INT DEFAULT 1
) RETURNS UUID LANGUAGE sql AS $$
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days,
    is_public, is_editorial, criteria, parent_template_id, day_offset)
  VALUES (p_country, p_name, p_lat, p_lng, p_nb_days, true, true, NULL, p_parent, p_day_offset)
  RETURNING id;
$$;

-- Un jour + ses activités (voir format en tête de fichier).
CREATE OR REPLACE FUNCTION seed_day(p_template UUID, p_day_index INT, p_acts JSONB)
RETURNS VOID LANGUAGE plpgsql AS $$
DECLARE
  v_day UUID;
  a JSONB;
  i INT := 0;
BEGIN
  INSERT INTO trip_template_days (template_id, day_index)
  VALUES (p_template, p_day_index) RETURNING id INTO v_day;
  FOR a IN SELECT * FROM jsonb_array_elements(p_acts) LOOP
    i := i + 1;
    INSERT INTO trip_template_activities
      (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position, wikipedia)
    VALUES (v_day, a->>0, a->>1, a->>2, COALESCE(a->>3, 'visit'),
            (a->>4)::DOUBLE PRECISION, (a->>5)::DOUBLE PRECISION, a->>6, i, a->>7);
  END LOOP;
END $$;
