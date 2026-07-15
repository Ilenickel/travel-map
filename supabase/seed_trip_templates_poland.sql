-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Pologne (après seed_trip_templates_helpers.sql)
--   - 6 jours : Varsovie → Cracovie (+ Auschwitz, + Wieliczka)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'POL';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'POL';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('POL', 6);
  c := seed_city('POL', 'Varsovie', 52.2297, 21.0122, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Place du Marché de la vieille ville", "Le cœur reconstruit à l''identique, classé Unesco.", "matin", "visit", 52.2497, 21.0122, "Varsovie"],
    ["Château royal", "Résidence des rois de Pologne.", "apres-midi", "visit", 52.2478, 21.0155, "Varsovie"],
    ["Barbacane et Nowe Miasto", "Remparts et placettes du soir.", "soir", "visit", 52.2510, 21.0100, "Varsovie"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée de l''Insurrection de Varsovie", "1944, l''histoire du soulèvement.", "matin", "visit", 52.2325, 20.9808, "Varsovie"],
    ["Palais de la Culture et de la Science", "Vue à 360° du gratte-ciel stalinien.", "apres-midi", "visit", 52.2319, 21.0067, "Varsovie"],
    ["Nowy Świat", "L''avenue des cafés et des néons.", "soir", "food", 52.2330, 21.0180, "Varsovie"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Parc Łazienki", "Palais sur l''eau et paons en liberté.", "matin", "nature", 52.2152, 21.0355, "Varsovie"],
    ["Concert Chopin ou musée Chopin", "Le compositeur chez lui.", "apres-midi", "visit", 52.2360, 21.0210, "Varsovie"],
    ["Praga", "La rive droite alternative, bars dans les cours.", "soir", "night", 52.2530, 21.0350, "Varsovie"]]'::jsonb);
  c := seed_city('POL', 'Cracovie', 50.0647, 19.9450, 3, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Rynek Główny et halle aux draps", "La plus grande place médiévale d''Europe.", "matin", "visit", 50.0617, 19.9373, "Cracovie"],
    ["Basilique Sainte-Marie", "Retable de Veit Stoss et hejnał du clocher.", "apres-midi", "visit", 50.0616, 19.9394, "Cracovie"],
    ["Château du Wawel", "Colline royale au-dessus de la Vistule.", "soir", "visit", 50.0541, 19.9352, "Cracovie"]]'::jsonb);
  e := seed_daytrip('POL', 'Auschwitz', 50.0344, 19.1784, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Auschwitz I", "Le mémorial et musée du camp principal.", "matin", "visit", 50.0275, 19.2037, "Oświęcim"],
    ["Birkenau (Auschwitz II)", "L''immensité du camp d''extermination.", "apres-midi", "visit", 50.0344, 19.1784, "Oświęcim"],
    ["Retour et recueillement à Kazimierz", "Le quartier juif de Cracovie.", "soir", "visit", 50.0510, 19.9450, "Cracovie"]]'::jsonb);
  e := seed_daytrip('POL', 'Wieliczka', 49.9836, 20.0556, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Mine de sel de Wieliczka", "Descente dans les galeries du XIIIe siècle.", "matin", "visit", 49.9836, 20.0556, "Wieliczka"],
    ["Chapelle Sainte-Kinga", "Cathédrale souterraine taillée dans le sel.", "apres-midi", "visit", 49.9830, 20.0550, "Wieliczka"],
    ["Kazimierz by night", "Zapiekanka et bars du quartier juif.", "soir", "food", 50.0510, 19.9450, "Cracovie"]]'::jsonb);
END $$;
