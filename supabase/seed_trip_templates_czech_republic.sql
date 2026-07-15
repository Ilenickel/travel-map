-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — République tchèque (après seed_trip_templates_helpers.sql)
--   - 4 jours : Prague (+ excursion Kutná Hora)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'CZE';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'CZE';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('CZE', 4);
  c := seed_city('CZE', 'Prague', 50.0755, 14.4378, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Place de la Vieille-Ville", "Horloge astronomique et église de Týn.", "matin", "visit", 50.0870, 14.4208, "Prague"],
    ["Josefov", "Synagogues et vieux cimetière juif.", "apres-midi", "visit", 50.0900, 14.4180, "Prague"],
    ["Pont Charles à la nuit tombée", "Statues baroques et château illuminé.", "soir", "visit", 50.0865, 14.4114, "Prague"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Château de Prague", "Cathédrale Saint-Guy et ruelle d''Or.", "matin", "visit", 50.0911, 14.4016, "Prague"],
    ["Malá Strana", "Église Saint-Nicolas et jardins baroques.", "apres-midi", "visit", 50.0880, 14.4040, "Prague"],
    ["Île de Kampa et mur Lennon", "Le Petit Venise de Prague.", "soir", "visit", 50.0840, 14.4080, "Prague"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Colline de Petřín", "Funiculaire et petite tour Eiffel.", "matin", "nature", 50.0834, 14.3950, "Prague"],
    ["Place Venceslas et maison dansante", "La Nouvelle Ville et Fred & Ginger.", "apres-midi", "visit", 50.0755, 14.4141, "Prague"],
    ["Brasserie U Fleků", "Bière brune brassée depuis 1499.", "soir", "food", 50.0778, 14.4183, "Prague"]]'::jsonb);
  e := seed_daytrip('CZE', 'Kutná Hora', 49.9484, 15.2681, c, 3);
  PERFORM seed_day(e, 1, '[
    ["Ossuaire de Sedlec", "La chapelle décorée de 40 000 ossements.", "matin", "visit", 49.9617, 15.2884, "Kutná Hora"],
    ["Cathédrale Sainte-Barbe", "Le joyau gothique des mineurs d''argent.", "apres-midi", "visit", 49.9446, 15.2632, "Kutná Hora"],
    ["Vyšehrad au retour", "Coucher de soleil sur la Vltava depuis la forteresse.", "soir", "nature", 50.0645, 14.4180, "Prague"]]'::jsonb);
END $$;
