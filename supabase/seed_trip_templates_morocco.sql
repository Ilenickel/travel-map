-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Maroc (après seed_trip_templates_helpers.sql)
--   - 8 jours : Classique — Marrakech → désert (Ouarzazate/Merzouga) → Fès
--   - 5 jours : Nord — Casablanca → Rabat → Chefchaouen → Tanger
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'MAR';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'MAR';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── 8 jours : Marrakech → désert → Fès ────────────────────────
  g := seed_group('MAR', 8);
  c := seed_city('MAR', 'Marrakech', 31.6295, -7.9811, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Mosquée Koutoubia et ses jardins", "Le minaret emblème de la ville rouge.", "matin", "visit", 31.6242, -7.9938, "Marrakech"],
    ["Souks de la médina", "Dédale des artisans, du cuivre aux babouches.", "apres-midi", "shopping", 31.6290, -7.9880, "Marrakech"],
    ["Place Jemaa el-Fna la nuit", "Charmeurs de serpents, conteurs et étals fumants — la place ne s''anime vraiment qu''à la nuit tombée.", "soir", "food", 31.6258, -7.9891, "Marrakech"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Palais de la Bahia", "Cours en zellige et plafonds peints.", "matin", "visit", 31.6218, -7.9824, "Marrakech"],
    ["Tombeaux saadiens et palais El Badi", "Nécropole royale et ruines grandioses.", "apres-midi", "visit", 31.6176, -7.9887, "Marrakech"],
    ["Dîner sur une terrasse de la médina", "Tajine face aux minarets illuminés.", "soir", "food", 31.6260, -7.9890, "Marrakech"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Jardin de la Ménara", "Bassin et pavillon face à l''Atlas.", "matin", "nature", 31.6130, -8.0220, "Marrakech"],
    ["Jardin Majorelle", "Le bleu Majorelle et le musée Yves Saint Laurent.", "apres-midi", "nature", 31.6417, -8.0035, "Marrakech"],
    ["Quartier des tanneurs", "Cuirs et pigments au nord de la médina.", "soir", "visit", 31.6350, -7.9790, "Marrakech"]]'::jsonb);
  c := seed_city('MAR', 'Ouarzazate', 30.9189, -6.8934, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Col du Tizi n''Tichka", "Traversée du Haut Atlas à 2 260 m.", "matin", "nature", 31.2920, -7.3810, "Haut Atlas"],
    ["Ksar d''Aït-ben-Haddou", "La casbah de terre des mille tournages, classée Unesco.", "apres-midi", "visit", 31.0470, -7.1318, "Aït-ben-Haddou"],
    ["Kasbah de Taourirt", "Le vieux palais du Glaoui à Ouarzazate.", "soir", "visit", 30.9180, -6.8930, "Ouarzazate"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Gorges du Todra", "Falaises de 300 m au-dessus de l''oued.", "matin", "nature", 31.5895, -5.5920, "Tinghir"],
    ["Route des mille kasbahs", "Palmeraies et villages fortifiés de la vallée.", "apres-midi", "nature", 31.3700, -6.0100, "Vallée du Dadès"],
    ["Nuit en route vers les dunes", "Étape aux portes du désert.", "soir", "transport", 31.2800, -4.9800, "Erfoud"]]'::jsonb);
  c := seed_city('MAR', 'Merzouga', 31.0994, -4.0110, 1, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Dunes de l''Erg Chebbi", "Mer de sable orange haute de 150 m.", "matin", "nature", 31.1500, -3.9800, "Merzouga"],
    ["Méharée au coucher du soleil", "À dos de dromadaire vers le bivouac.", "apres-midi", "nature", 31.1200, -3.9900, "Merzouga"],
    ["Nuit au bivouac berbère", "Tambours et ciel étoilé du Sahara.", "soir", "night", 31.1100, -3.9700, "Merzouga"]]'::jsonb);
  c := seed_city('MAR', 'Fès', 34.0181, -5.0078, 2, g, 4, 6);
  PERFORM seed_day(c, 1, '[
    ["Route Merzouga-Fès par Midelt", "Vallée du Ziz, palmeraies et cèdres de l''Atlas.", "matin", "transport", 32.6800, -4.7400, "Midelt"],
    ["Arrivée à Fès et porte Bab Boujloud", "La porte bleue de la médina.", "apres-midi", "visit", 34.0620, -4.9830, "Fès"],
    ["Dîner dans un riad", "Pastilla et cuisine fassie.", "soir", "food", 34.0630, -4.9780, "Fès"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Médina de Fès el-Bali", "La plus grande zone piétonne du monde, classée Unesco.", "matin", "visit", 34.0650, -4.9730, "Fès"],
    ["Tanneries Chouara et médersa Bou Inania", "Cuves de teinture et chef-d''œuvre mérinide.", "apres-midi", "visit", 34.0666, -4.9700, "Fès"],
    ["Borj Nord", "Panorama sur la médina au couchant, avant le départ.", "soir", "nature", 34.0700, -4.9850, "Fès"]]'::jsonb);

  -- ─── 5 jours : Nord ────────────────────────────────────────────
  g := seed_group('MAR', 5);
  c := seed_city('MAR', 'Casablanca', 33.5731, -7.5898, 1, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Quartier Habous", "La médina nouvelle aux arcades élégantes.", "matin", "visit", 33.5790, -7.6110, "Casablanca"],
    ["Mosquée Hassan-II", "Minaret de 210 m posé sur l''océan.", "apres-midi", "visit", 33.6083, -7.6325, "Casablanca"],
    ["Corniche d''Aïn Diab", "Front de mer et cafés face à l''Atlantique.", "soir", "food", 33.5940, -7.6690, "Casablanca"]]'::jsonb);
  c := seed_city('MAR', 'Rabat', 34.0209, -6.8416, 1, g, 2, 1);
  PERFORM seed_day(c, 1, '[
    ["Tour Hassan et mausolée Mohammed-V", "Minaret inachevé et marbres royaux.", "matin", "visit", 34.0242, -6.8225, "Rabat"],
    ["Kasbah des Oudayas", "Ruelles bleues et blanches au-dessus du Bouregreg.", "apres-midi", "visit", 34.0310, -6.8360, "Rabat"],
    ["Médina de Rabat", "Souk tranquille et thé à la menthe.", "soir", "food", 34.0250, -6.8360, "Rabat"]]'::jsonb);
  c := seed_city('MAR', 'Chefchaouen', 35.1688, -5.2636, 2, g, 3, 2);
  PERFORM seed_day(c, 1, '[
    ["Médina bleue", "Toutes les nuances de bleu dans les ruelles.", "matin", "visit", 35.1714, -5.2697, "Chefchaouen"],
    ["Place Outa el-Hammam et kasbah", "Cœur de la ville sous les minarets.", "apres-midi", "visit", 35.1690, -5.2630, "Chefchaouen"],
    ["Mosquée espagnole", "La ville bleue embrasée au couchant.", "soir", "nature", 35.1660, -5.2560, "Chefchaouen"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Cascades d''Akchour", "Randonnée vers le pont de Dieu.", "matin", "nature", 35.2410, -5.1810, "Akchour"],
    ["Ras el-Ma", "La source au pied de la médina.", "apres-midi", "nature", 35.1720, -5.2590, "Chefchaouen"],
    ["Dernière soirée dans la médina", "Tissages et cuisine rifaine.", "soir", "food", 35.1690, -5.2640, "Chefchaouen"]]'::jsonb);
  c := seed_city('MAR', 'Tanger', 35.7595, -5.8340, 1, g, 4, 4);
  PERFORM seed_day(c, 1, '[
    ["Grottes d''Hercule et cap Spartel", "Là où l''Atlantique rencontre la Méditerranée.", "matin", "nature", 35.7920, -5.9380, "Tanger"],
    ["Kasbah de Tanger", "Palais du sultan et vue sur le détroit.", "apres-midi", "visit", 35.7890, -5.8130, "Tanger"],
    ["Café Hafa", "Thé à la menthe face à l''Espagne, avant le départ.", "soir", "food", 35.7880, -5.8180, "Tanger"]]'::jsonb);
END $$;
