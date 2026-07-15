-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Pays-Bas (après seed_trip_templates_helpers.sql)
--   - 4 jours : Amsterdam
--   - 7 jours : Amsterdam (+ Zaanse Schans/Volendam) → La Haye/Delft → Rotterdam
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'NLD';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'NLD';
-- ════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION seed_nl_amsterdam(p_group UUID, p_pos INT, p_offset INT, p_five BOOLEAN)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('NLD', 'Amsterdam', 52.3676, 4.9041, CASE WHEN p_five THEN 5 ELSE 4 END, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Rijksmuseum", "Rembrandt et Vermeer, la Ronde de nuit.", "matin", "visit", 52.3600, 4.8852, "Amsterdam"],
    ["Musée Van Gogh", "La plus grande collection du peintre au monde.", "apres-midi", "visit", 52.3584, 4.8811, "Amsterdam"],
    ["Leidseplein", "Terrasses et théâtres du soir.", "soir", "night", 52.3641, 4.8829, "Amsterdam"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Maison d''Anne Frank", "L''Annexe secrète sur le Prinsengracht.", "matin", "visit", 52.3752, 4.8840, "Amsterdam"],
    ["Jordaan et les 9 Straatjes", "Canaux, boutiques et cafés bruns.", "apres-midi", "shopping", 52.3740, 4.8830, "Amsterdam"],
    ["Croisière sur les canaux", "Les pignons illuminés depuis l''eau.", "soir", "visit", 52.3730, 4.8900, "Amsterdam"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Bloemenmarkt", "Le marché aux fleurs flottant.", "matin", "shopping", 52.3665, 4.8912, "Amsterdam"],
    ["Begijnhof et place du Dam", "Cour secrète puis palais royal.", "apres-midi", "visit", 52.3730, 4.8926, "Amsterdam"],
    ["De Wallen", "Le vieux cœur médiéval by night.", "soir", "night", 52.3740, 4.8980, "Amsterdam"]]'::jsonb);
  PERFORM seed_day(v, 4, '[
    ["De Pijp et marché Albert Cuyp", "Quartier vivant et stroopwafels.", "matin", "food", 52.3560, 4.8920, "Amsterdam"],
    ["Musée maritime ou Heineken Experience", "Histoire navale ou brasserie interactive.", "apres-midi", "visit", 52.3714, 4.9146, "Amsterdam"],
    ["NDSM en ferry", "Friche créative sur la rive nord de l''IJ.", "soir", "visit", 52.4010, 4.8940, "Amsterdam"]]'::jsonb);
  IF p_five THEN
    e := seed_daytrip('NLD', 'Zaanse Schans', 52.4746, 4.8163, v, 4);
    PERFORM seed_day(e, 1, '[
      ["Moulins de Zaanse Schans", "Moulins à vent en activité au bord de la Zaan.", "matin", "visit", 52.4746, 4.8163, "Zaandam"],
      ["Volendam", "Port de pêche traditionnel et harengs.", "apres-midi", "food", 52.4950, 5.0710, "Volendam"],
      ["Marken", "Île-village aux maisons de bois vertes.", "soir", "visit", 52.4580, 5.1030, "Marken"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── 4 jours : Amsterdam ───────────────────────────────────────
  g := seed_group('NLD', 4);
  PERFORM seed_nl_amsterdam(g, 1, 0, false);

  -- ─── 7 jours : Amsterdam → La Haye/Delft → Rotterdam ───────────
  g := seed_group('NLD', 7);
  PERFORM seed_nl_amsterdam(g, 1, 0, true);
  c := seed_city('NLD', 'La Haye', 52.0705, 4.3007, 1, g, 2, 5);
  PERFORM seed_day(c, 1, '[
    ["Mauritshuis", "La Jeune Fille à la perle de Vermeer.", "matin", "visit", 52.0805, 4.3144, "La Haye"],
    ["Binnenhof", "Le plus vieux parlement en activité au monde.", "apres-midi", "visit", 52.0797, 4.3130, "La Haye"],
    ["Delft", "Vieille ville de Vermeer et faïence bleue.", "soir", "visit", 52.0116, 4.3571, "Delft"]]'::jsonb);
  c := seed_city('NLD', 'Rotterdam', 51.9244, 4.4777, 1, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Maisons cubiques", "L''icône de l''architecture expérimentale.", "matin", "visit", 51.9200, 4.4900, "Rotterdam"],
    ["Markthal", "La halle-tunnel aux fresques géantes.", "apres-midi", "food", 51.9200, 4.4870, "Rotterdam"],
    ["Euromast", "Le port d''Europe vu de 185 m, avant le départ.", "soir", "visit", 51.9054, 4.4666, "Rotterdam"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_nl_amsterdam(UUID, INT, INT, BOOLEAN);
