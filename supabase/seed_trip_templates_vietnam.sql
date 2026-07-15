-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Vietnam (après seed_trip_templates_helpers.sql)
--   - 10 jours : Hanoï → baie d'Halong → Hoi An (+ My Son) → Ho Chi Minh-Ville (+ Cu Chi)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'VNM';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'VNM';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('VNM', 10);
  c := seed_city('VNM', 'Hanoï', 21.0285, 105.8542, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Vieux quartier des 36 rues", "Chaque rue son métier, depuis mille ans.", "matin", "visit", 21.0340, 105.8500, "Hanoï"],
    ["Lac Hoan Kiem et temple Ngoc Son", "Le pont rouge vers l''îlot du temple.", "apres-midi", "visit", 21.0288, 105.8525, "Hanoï"],
    ["Bia hoi et street food", "Bière fraîche sur les mini-tabourets.", "soir", "food", 21.0350, 105.8520, "Hanoï"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Mausolée de Hô Chi Minh", "Place Ba Dinh et relève de la garde.", "matin", "visit", 21.0367, 105.8342, "Hanoï"],
    ["Temple de la Littérature", "La première université du Vietnam.", "apres-midi", "visit", 21.0293, 105.8354, "Hanoï"],
    ["Marionnettes sur l''eau", "Le théâtre traditionnel du delta.", "soir", "night", 21.0300, 105.8530, "Hanoï"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Train Street", "Le train qui frôle les façades.", "matin", "visit", 21.0250, 105.8410, "Hanoï"],
    ["Marché Dong Xuan", "Le grand marché couvert du vieux quartier.", "apres-midi", "shopping", 21.0380, 105.8490, "Hanoï"],
    ["Cathédrale Saint-Joseph et egg coffee", "Néogothique et café à l''œuf.", "soir", "food", 21.0288, 105.8490, "Hanoï"]]'::jsonb);
  c := seed_city('VNM', 'Baie d''Halong', 20.9101, 107.1839, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Embarquement et navigation", "2 000 pitons karstiques émergent de l''eau émeraude.", "matin", "nature", 20.9101, 107.1839, "Baie d''Halong"],
    ["Grotte de la Surprise (Sung Sot)", "Salles immenses au cœur d''un îlot.", "apres-midi", "nature", 20.8880, 107.0810, "Baie d''Halong"],
    ["Nuit à bord", "Calamars de nuit et pont sous les étoiles.", "soir", "night", 20.9000, 107.1000, "Baie d''Halong"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Kayak entre les karsts", "Lagons et arches au lever du jour.", "matin", "nature", 20.8900, 107.1200, "Baie d''Halong"],
    ["Village flottant", "La vie des pêcheurs entre les pitons.", "apres-midi", "visit", 20.8700, 107.1300, "Baie d''Halong"],
    ["Retour et route vers l''aéroport", "Vol du soir vers le centre du pays.", "soir", "transport", 21.0000, 107.0000, "Halong"]]'::jsonb);
  c := seed_city('VNM', 'Hoi An', 15.8801, 108.3380, 3, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville de Hoi An", "Maisons jaunes, pont japonais et lanternes.", "matin", "visit", 15.8771, 108.3260, "Hoi An"],
    ["Maisons anciennes et musée", "Comptoir marchand des mers du Sud.", "apres-midi", "visit", 15.8770, 108.3280, "Hoi An"],
    ["Lâcher de lanternes sur la rivière", "La Thu Bon constellée de lumières.", "soir", "night", 15.8760, 108.3290, "Hoi An"]]'::jsonb);
  e := seed_daytrip('VNM', 'My Son', 15.7639, 108.1239, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Sanctuaire de My Son", "Les tours cham dans leur cirque de jungle.", "matin", "visit", 15.7639, 108.1239, "My Son"],
    ["Spectacle de danse cham", "Apsaras au pied des temples.", "apres-midi", "visit", 15.7640, 108.1240, "My Son"],
    ["Plage d''An Bang", "Fin d''après-midi les pieds dans le sable.", "soir", "beach", 15.9120, 108.3390, "Hoi An"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Village maraîcher de Tra Que", "Jardins d''herbes aromatiques à vélo.", "matin", "nature", 15.8990, 108.3350, "Hoi An"],
    ["Cours de cuisine vietnamienne", "Cao lau et rouleaux de printemps.", "apres-midi", "food", 15.8800, 108.3300, "Hoi An"],
    ["Tailleurs et lanternes", "Dernière soirée dans la vieille ville.", "soir", "shopping", 15.8770, 108.3270, "Hoi An"]]'::jsonb);
  c := seed_city('VNM', 'Ho Chi Minh-Ville', 10.8231, 106.6297, 2, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Palais de la Réunification", "Le palais figé dans son avril 1975.", "matin", "visit", 10.7772, 106.6958, "Ho Chi Minh-Ville"],
    ["Cathédrale Notre-Dame et poste centrale", "Briques roses et charpente d''Eiffel.", "apres-midi", "visit", 10.7798, 106.6990, "Ho Chi Minh-Ville"],
    ["Marché Ben Thanh et rooftops", "Street food puis skyline depuis un bar en hauteur.", "soir", "food", 10.7725, 106.6980, "Ho Chi Minh-Ville"]]'::jsonb);
  e := seed_daytrip('VNM', 'Cu Chi', 11.0430, 106.4620, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Tunnels de Cu Chi", "250 km de galeries de la guerre du Vietnam.", "matin", "visit", 11.0430, 106.4620, "Cu Chi"],
    ["Démonstrations et pièges", "La vie souterraine des combattants.", "apres-midi", "visit", 11.0440, 106.4630, "Cu Chi"],
    ["Retour et Bui Vien", "Dernière soirée dans la rue animée.", "soir", "night", 10.7670, 106.6930, "Ho Chi Minh-Ville"]]'::jsonb);
END $$;
