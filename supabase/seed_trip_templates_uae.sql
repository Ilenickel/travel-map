-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Émirats arabes unis (après seed_trip_templates_helpers.sql)
--   - 5 jours : Dubaï (+ excursion Abu Dhabi)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'ARE';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'ARE';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('ARE', 5);
  c := seed_city('ARE', 'Dubaï', 25.2048, 55.2708, 5, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Burj Khalifa", "Observatoire de la plus haute tour du monde.", "matin", "visit", 25.1972, 55.2744, "Dubaï"],
    ["Dubai Mall et aquarium", "Le plus grand centre commercial du monde.", "apres-midi", "shopping", 25.1985, 55.2796, "Dubaï"],
    ["Fontaines de Dubaï", "Ballet d''eau au pied de la tour illuminée.", "soir", "night", 25.1950, 55.2755, "Dubaï"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Quartier historique Al Fahidi", "Tours à vent et ruelles du vieux Dubaï.", "matin", "visit", 25.2637, 55.2972, "Dubaï"],
    ["Traversée de la crique en abra", "Le bac en bois pour un dirham.", "apres-midi", "visit", 25.2670, 55.2960, "Dubaï"],
    ["Souks de l''or et des épices", "Vitrines dorées et sacs de safran.", "soir", "shopping", 25.2690, 55.2970, "Dubaï"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["The View at The Palm", "L''île-palmier vue d''en haut.", "matin", "visit", 25.1124, 55.1390, "Dubaï"],
    ["Marina de Dubaï", "Gratte-ciel autour du port de plaisance.", "apres-midi", "visit", 25.0800, 55.1400, "Dubaï"],
    ["The Walk à JBR", "Plage, street food et transats du soir.", "soir", "beach", 25.0780, 55.1330, "Dubaï"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Safari dans le désert", "Dunes en 4x4 et sandboard.", "matin", "nature", 24.8500, 55.4000, "Désert de Dubaï"],
    ["Camp bédouin", "Chameaux, henné et fauconnerie.", "apres-midi", "visit", 24.8400, 55.4100, "Désert de Dubaï"],
    ["Dîner sous les étoiles", "Barbecue et danse au campement.", "soir", "food", 24.8400, 55.4100, "Désert de Dubaï"]]'::jsonb);
  e := seed_daytrip('ARE', 'Abu Dhabi', 24.4539, 54.3773, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Mosquée Cheikh Zayed", "Marbre blanc, or et le plus grand tapis du monde.", "matin", "visit", 24.4128, 54.4750, "Abu Dhabi"],
    ["Louvre Abu Dhabi", "La pluie de lumière sous le dôme de Nouvel.", "apres-midi", "visit", 24.5333, 54.3984, "Abu Dhabi"],
    ["Corniche d''Abu Dhabi", "Front de mer au couchant avant le retour.", "soir", "visit", 24.4700, 54.3400, "Abu Dhabi"]]'::jsonb);
END $$;
