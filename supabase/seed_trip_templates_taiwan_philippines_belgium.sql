-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — TAÏWAN, PHILIPPINES, BELGIQUE
-- (après seed_trip_templates_helpers.sql)
-- TAÏWAN :
--   - 7 jours LÉGER : Taipei (4j, + Jiufen-Shifen) → Sun Moon Lake (1j)
--     → Tainan (1j) → Kaohsiung (1j). Descente de la côte Ouest.
--   - 10 jours DENSE : Taipei (4j, + Jiufen-Shifen) → Hualien (2j, Taroko)
--     → Kaohsiung (2j) → Tainan (1j) → Taichung (1j). Tour de l''île dans
--     le sens horaire, jamais de retour arrière.
-- PHILIPPINES :
--   - 10 jours LÉGER : Manille (2j) → El Nido (3j) → Cebu (2j) → Bohol (3j).
--     Un vol Manille→Palawan, un vol vers Cebu, ferry vers Bohol.
--   - 14 jours DENSE : Manille (2j) → Coron (2j) → El Nido (3j) → Cebu (3j)
--     → Bohol (2j) → Siargao (2j). Coron→El Nido en ferry, le reste en vol.
-- BELGIQUE :
--   - 4 jours LÉGER : Bruxelles (2j) → Bruges (2j).
--   - 6 jours DENSE : Bruxelles (2j) → Anvers (1j) → Gand (1j) → Bruges (2j).
--     Bruxelles puis la Flandre d''est en ouest, tout en train.
-- Villes solo : Boracay (2j, PHL), Liège (1j, BEL).
-- Relance : par pays, DELETE trip_templates puis trip_template_groups
--   WHERE is_editorial = true AND country_code IN ('TWN','PHL','BEL'), rejouer.
-- ════════════════════════════════════════════════════════════════

-- ─── TWN 7 jours LÉGER : Taipei → Sun Moon Lake → Tainan → Kaohsiung ──
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('TWN', 7);

  -- Taipei (4 jours : 3 propres + excursion Shifen-Jiufen en jour 3).
  c := seed_city('TWN', 'Taipei', 25.0330, 121.5654, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Mémorial Chiang Kai-shek", "L''esplanade blanche et bleue et la relève de la garde.", "matin", "visit", 25.0347, 121.5219, "Zhongzheng, Taipei"],
    ["Taipei 101 et Elephant Mountain", "La tour-bambou puis le sentier d''en face pour la voir en entier au couchant.", "apres-midi", "visit", 25.0340, 121.5645, "Xinyi, Taipei"],
    ["Marché de nuit de Raohe", "Bao au poivre sortant du four tandoor, à deux pas de Xinyi.", "soir", "food", 25.0510, 121.5770, "Songshan, Taipei"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée national du Palais", "Le chou de jade et les trésors impériaux emportés de Pékin.", "matin", "visit", 25.1020, 121.5480, "Shilin, Taipei"],
    ["Dadaocheng et rue Dihua", "Herboristeries et maisons de thé de la vieille rue marchande.", "apres-midi", "visit", 25.0570, 121.5100, "Datong, Taipei"],
    ["Ximending", "Le Shibuya de Taipei, néons et snacks de rue.", "soir", "night", 25.0420, 121.5070, "Wanhua, Taipei"]]'::jsonb);
  -- Excursion Shifen et Jiufen (jour 3).
  e := seed_daytrip('TWN', 'Jiufen', 25.1090, 121.8450, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Cascade et lanternes de Shifen", "Le petit Niagara taïwanais puis un vœu lâché en lanterne sur la voie ferrée.", "matin", "nature", 25.0490, 121.7780, "Shifen, Pingxi"],
    ["Vieille rue de Jiufen", "Les ruelles-escaliers de l''ancienne ville aurifère au-dessus de la mer.", "apres-midi", "visit", 25.1090, 121.8450, "Jiufen"],
    ["Maison de thé A-Mei à la lanterne", "Le thé au crépuscule dans le décor qui a inspiré le Voyage de Chihiro.", "soir", "food", 25.1095, 121.8440, "Jiufen"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Sources chaudes de Beitou", "Vallée thermale fumante et bains publics dans la forêt.", "matin", "nature", 25.1370, 121.5060, "Beitou, Taipei"],
    ["Vieille rue de Tamsui", "Le front de fleuve au bout de la ligne rouge, œufs de fer et forts anciens.", "apres-midi", "visit", 25.1680, 121.4400, "Tamsui, Taipei"],
    ["Coucher de soleil au Fisherman''s Wharf", "Le pont des Amoureux sur l''embouchure du Tamsui.", "soir", "nature", 25.1830, 121.4110, "Tamsui, Taipei"]]'::jsonb);

  -- Sun Moon Lake (1 jour).
  c := seed_city('TWN', 'Sun Moon Lake', 23.8570, 120.9160, 1, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Croisière et temple Wenwu", "Le lac sacré des Thao, escales aux temples des deux rives.", "matin", "nature", 23.8690, 120.9280, "Sun Moon Lake, Nantou"],
    ["Téléphérique du lac", "La vue d''ensemble sur les eaux émeraude et les montagnes.", "apres-midi", "nature", 23.8590, 120.9370, "Sun Moon Lake, Nantou"],
    ["Rive d''Ita Thao au couchant", "Snacks aborigènes et dernière lumière sur le lac.", "soir", "food", 23.8530, 120.9350, "Ita Thao, Sun Moon Lake"]]'::jsonb);

  -- Tainan (1 jour).
  c := seed_city('TWN', 'Tainan', 22.9997, 120.2270, 1, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Fort d''Anping", "La première capitale, bastion hollandais de 1624 et maison aux banians.", "matin", "visit", 23.0016, 120.1606, "Anping, Tainan"],
    ["Tour Chihkan et temples", "Le Fort Provintia et le temple de Confucius, cœur historique de l''île.", "apres-midi", "visit", 22.9975, 120.2025, "Tainan"],
    ["Street food de Tainan", "La capitale gourmande : soupe de bœuf, danzai mian et gâteaux à la crevette.", "soir", "food", 22.9930, 120.1990, "Tainan"]]'::jsonb);

  -- Kaohsiung (1 jour).
  c := seed_city('TWN', 'Kaohsiung', 22.6273, 120.3014, 1, g, 4, 6);
  PERFORM seed_day(c, 1, '[
    ["Pagodes du Dragon et du Tigre", "Entrer par la gueule du dragon, sortir par celle du tigre, sur le Lotus Pond.", "matin", "visit", 22.6830, 120.2940, "Zuoying, Kaohsiung"],
    ["Pier-2 Art Center", "Les entrepôts portuaires devenus galeries et sculptures géantes.", "apres-midi", "visit", 22.6200, 120.2810, "Yancheng, Kaohsiung"],
    ["Marché de nuit de Liuhe", "Fruits de mer grillés et lait de papaye pour finir l''île.", "soir", "food", 22.6320, 120.2990, "Kaohsiung"]]'::jsonb);
END $$;

-- ─── TWN 10 jours DENSE : Taipei → Hualien → Kaohsiung → Tainan → Taichung ──
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('TWN', 10);

  -- Taipei (4 jours denses : 3 propres + excursion Shifen-Jiufen en jour 3).
  c := seed_city('TWN', 'Taipei', 25.0330, 121.5654, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Mémorial Chiang Kai-shek", "L''esplanade et la relève de la garde à l''heure pile.", "matin", "visit", 25.0347, 121.5219, "Zhongzheng, Taipei"],
    ["Temple Longshan", "Encens et divinations dans le temple de 1738.", "matin", "visit", 25.0370, 121.4990, "Wanhua, Taipei"],
    ["Taipei 101", "L''observatoire du 89e et l''amortisseur géant doré.", "apres-midi", "visit", 25.0340, 121.5645, "Xinyi, Taipei"],
    ["Elephant Mountain au couchant", "Le sentier d''en face, la tour dans la lumière dorée.", "apres-midi", "nature", 25.0270, 121.5710, "Xinyi, Taipei"],
    ["Marché de nuit de Raohe", "Bao au poivre et rangée unique d''étals fumants.", "soir", "food", 25.0510, 121.5770, "Songshan, Taipei"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée national du Palais", "Les trésors impériaux, dont le chou de jade et la pierre-viande.", "matin", "visit", 25.1020, 121.5480, "Shilin, Taipei"],
    ["Dadaocheng et rue Dihua", "Thés, herboristeries et façades 1920 de la rue marchande.", "apres-midi", "visit", 25.0570, 121.5100, "Datong, Taipei"],
    ["Huashan 1914 Creative Park", "L''ancienne distillerie devenue quartier créatif.", "apres-midi", "visit", 25.0440, 121.5290, "Zhongzheng, Taipei"],
    ["Ximending", "Néons, boutiques et snacks du quartier jeune.", "soir", "night", 25.0420, 121.5070, "Wanhua, Taipei"]]'::jsonb);
  -- Excursion Shifen et Jiufen dense (jour 3).
  e := seed_daytrip('TWN', 'Jiufen', 25.1090, 121.8450, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Cascade de Shifen", "Le petit Niagara taïwanais dans la vallée de Pingxi.", "matin", "nature", 25.0490, 121.7780, "Shifen, Pingxi"],
    ["Lanternes sur la voie ferrée", "Un vœu peint puis lâché entre deux passages du train.", "matin", "visit", 25.0410, 121.7750, "Shifen, Pingxi"],
    ["Vieille rue de Jiufen", "Ruelles-escaliers, taro balls et vues sur la mer de Chine orientale.", "apres-midi", "visit", 25.1090, 121.8450, "Jiufen"],
    ["Maison de thé A-Mei aux lanternes", "Le décor du Voyage de Chihiro à la tombée de la nuit.", "soir", "food", 25.1095, 121.8440, "Jiufen"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Sources chaudes de Beitou", "Le musée des bains 1913 et la vallée thermale fumante.", "matin", "nature", 25.1370, 121.5060, "Beitou, Taipei"],
    ["Vieille rue de Tamsui", "Fort Santo Domingo et œufs de fer au bout de la ligne rouge.", "apres-midi", "visit", 25.1680, 121.4400, "Tamsui, Taipei"],
    ["Fisherman''s Wharf", "Coucher de soleil au pont des Amoureux.", "apres-midi", "nature", 25.1830, 121.4110, "Tamsui, Taipei"],
    ["Marché de nuit de Shilin", "Le plus grand night market de l''île, sur la route du retour.", "soir", "food", 25.0880, 121.5250, "Shilin, Taipei"]]'::jsonb);

  -- Hualien (2 jours) — train express par la côte Est.
  c := seed_city('TWN', 'Hualien', 23.9770, 121.6040, 2, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Sentier Shakadang", "L''eau turquoise entre les parois de marbre des gorges de Taroko.", "matin", "nature", 24.1580, 121.6060, "Taroko, Hualien"],
    ["Tunnel des Neuf Virages", "La galerie taillée au-dessus de la rivière Liwu.", "apres-midi", "nature", 24.1730, 121.5620, "Taroko, Hualien"],
    ["Sanctuaire du Printemps éternel", "Le temple accroché à la falaise au-dessus de la cascade.", "apres-midi", "visit", 24.1590, 121.6350, "Taroko, Hualien"],
    ["Marché de nuit de Dongdamen", "Barbecue aborigène et jeux d''adresse.", "soir", "food", 23.9770, 121.6150, "Hualien"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Falaises de Qingshui", "La route suspendue entre montagne et Pacifique, 1 000 m au-dessus des flots.", "matin", "nature", 24.2180, 121.7050, "Hualien"],
    ["Plage de Qixingtan", "L''arc de galets face aux montagnes qui plongent dans la mer.", "apres-midi", "nature", 24.0290, 121.6230, "Hualien"],
    ["Dumplings et train de nuit vers le sud", "Derniers xiaolongbao avant la traversée vers Kaohsiung.", "soir", "food", 23.9760, 121.6010, "Hualien"]]'::jsonb);

  -- Kaohsiung (2 jours).
  c := seed_city('TWN', 'Kaohsiung', 22.6273, 120.3014, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Pagodes du Dragon et du Tigre", "Le Lotus Pond et ses temples multicolores.", "matin", "visit", 22.6830, 120.2940, "Zuoying, Kaohsiung"],
    ["Fo Guang Shan", "Le grand Bouddha doré et le musée monastique, à 40 minutes de la ville.", "apres-midi", "visit", 22.7570, 120.4440, "Dashu, Kaohsiung"],
    ["Marché de nuit de Ruifeng", "Le préféré des locaux, moins touristique que Liuhe.", "soir", "food", 22.6690, 120.3020, "Zuoying, Kaohsiung"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Île de Cijin en ferry", "Phare, fort et fruits de mer sur la langue de sable du port.", "matin", "nature", 22.6120, 120.2670, "Cijin, Kaohsiung"],
    ["Pier-2 Art Center", "Entrepôts portuaires, galeries et train léger du front de mer.", "apres-midi", "visit", 22.6200, 120.2810, "Yancheng, Kaohsiung"],
    ["Dome of Light", "Le plus grand vitrail du monde dans la station de métro Formosa Boulevard.", "apres-midi", "visit", 22.6310, 120.3020, "Kaohsiung"],
    ["Love River au soir", "Croisière ou promenade sur les rives illuminées.", "soir", "night", 22.6280, 120.2870, "Kaohsiung"]]'::jsonb);

  -- Tainan (1 jour dense).
  c := seed_city('TWN', 'Tainan', 22.9997, 120.2270, 1, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Fort d''Anping et maison aux banians", "Le bastion hollandais et l''entrepôt avalé par les racines.", "matin", "visit", 23.0016, 120.1606, "Anping, Tainan"],
    ["Tour Chihkan", "Le Fort Provintia et ses jardins de stèles.", "apres-midi", "visit", 22.9975, 120.2025, "Tainan"],
    ["Temple de Confucius", "Le premier de l''île, 1665, sous les flamboyants.", "apres-midi", "visit", 22.9900, 120.2040, "Tainan"],
    ["Night market de Tainan", "Soupe de bœuf, danzai mian et gâteaux à la crevette dans la capitale gourmande.", "soir", "food", 22.9930, 120.1990, "Tainan"]]'::jsonb);

  -- Taichung (1 jour dense) — sur la remontée vers Taipei.
  c := seed_city('TWN', 'Taichung', 24.1477, 120.6736, 1, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Rainbow Village", "Le hameau de vétérans sauvé par les fresques du grand-père arc-en-ciel.", "matin", "visit", 24.1340, 120.6100, "Nantun, Taichung"],
    ["Miyahara", "L''ancienne clinique ophtalmique devenue palais du bubble tea et des glaces.", "apres-midi", "food", 24.1380, 120.6840, "Taichung"],
    ["Parc de l''opéra national", "L''architecture en grottes de Toyo Ito.", "apres-midi", "visit", 24.1630, 120.6400, "Xitun, Taichung"],
    ["Marché de nuit de Fengjia", "Le night market géant d''à côté de l''université, inventeur de la moitié des snacks de l''île.", "soir", "food", 24.1790, 120.6460, "Xitun, Taichung"]]'::jsonb);
END $$;

-- ─── PHL 10 jours LÉGER : Manille → El Nido → Cebu → Bohol ────────
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('PHL', 10);

  -- Manille (2 jours).
  c := seed_city('PHL', 'Manille', 14.5995, 120.9842, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Intramuros et Fort Santiago", "La ville fortifiée espagnole et la prison de Rizal, en calèche ou à vélo de bambou.", "matin", "visit", 14.5940, 120.9700, "Intramuros, Manille"],
    ["Église San Agustin", "La plus vieille église en pierre du pays, Unesco, plafonds en trompe-l''œil.", "apres-midi", "visit", 14.5890, 120.9750, "Intramuros, Manille"],
    ["Baywalk au couchant", "Le célèbre coucher de soleil sur la baie de Manille.", "soir", "nature", 14.5710, 120.9790, "Malate, Manille"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée national des Philippines", "Le Spoliarium de Luna et les trésors du galion de Manille.", "matin", "visit", 14.5870, 120.9810, "Ermita, Manille"],
    ["Binondo", "Le plus vieux Chinatown du monde (1594), lumpia et dumplings en food crawl.", "apres-midi", "food", 14.6000, 120.9740, "Binondo, Manille"],
    ["Poblacion", "Rooftops et comptoirs du quartier qui bouge à Makati.", "soir", "night", 14.5650, 121.0290, "Makati, Manille"]]'::jsonb);

  -- El Nido (3 jours).
  c := seed_city('PHL', 'El Nido', 11.1949, 119.3897, 3, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Big Lagoon en kayak", "Les parois karstiques refermées sur l''eau turquoise de Miniloc.", "matin", "nature", 11.1850, 119.3170, "Miniloc, El Nido"],
    ["Secret Lagoon et plage des Sept Commandos", "Le lagon caché derrière une faille et le sable blond des cocotiers.", "apres-midi", "nature", 11.1650, 119.3550, "El Nido"],
    ["Coucher de soleil à Corong Corong", "Les bangkas à l''ancre dans la lumière orange.", "soir", "nature", 11.1720, 119.3820, "Corong Corong, El Nido"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Hidden Beach", "La plage invisible derrière son mur de karst, sur l''île de Matinloc.", "matin", "nature", 11.1240, 119.3060, "Matinloc, El Nido"],
    ["Matinloc Shrine et Helicopter Island", "Le sanctuaire abandonné et le snorkeling au pied de l''île-hélicoptère.", "apres-midi", "nature", 11.1300, 119.3100, "Matinloc, El Nido"],
    ["Las Cabañas", "Balançoires et feux du soir sur la plage des sunsets.", "soir", "nature", 11.1600, 119.3860, "Las Cabañas, El Nido"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Plage de Nacpan", "Les quatre kilomètres de sable doré jumelés à Calitang.", "matin", "nature", 11.3270, 119.4230, "Nacpan, El Nido"],
    ["Village d''El Nido", "Le front de mer sous les falaises, halo-halo et hamacs.", "apres-midi", "visit", 11.1949, 119.3897, "El Nido"],
    ["Bars de plage", "Pieds dans le sable, acoustique et rhum Tanduay.", "soir", "night", 11.1940, 119.3900, "El Nido"]]'::jsonb);

  -- Cebu (2 jours).
  c := seed_city('PHL', 'Cebu', 10.3157, 123.8854, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Basilique du Santo Niño et croix de Magellan", "L''enfant Jésus de 1521 et la croix plantée par Magellan.", "matin", "visit", 10.2940, 123.9020, "Cebu City"],
    ["Fort San Pedro", "Le plus petit et plus vieux fort espagnol du pays, sur le port.", "apres-midi", "visit", 10.2925, 123.9060, "Cebu City"],
    ["Lechon de Cebu", "Le cochon de lait le plus célèbre des Philippines, croustillant sans sauce.", "soir", "food", 10.3100, 123.8910, "Cebu City"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Canyoning aux chutes de Kawasan", "Sauts et toboggans naturels dans l''eau bleu lait jusqu''aux cascades.", "matin", "nature", 9.8100, 123.3720, "Badian, Cebu"],
    ["Sardine run de Moalboal", "Le mur de millions de sardines à quelques mètres du rivage.", "apres-midi", "nature", 9.9400, 123.3660, "Moalboal, Cebu"],
    ["Retour et soirée à Cebu", "Mangue verte et repos après la journée sud.", "soir", "food", 10.3110, 123.8920, "Cebu City"]]'::jsonb);

  -- Bohol (3 jours).
  c := seed_city('PHL', 'Bohol', 9.8499, 124.1435, 3, g, 4, 7);
  PERFORM seed_day(c, 1, '[
    ["Chocolate Hills", "Les 1 268 collines coniques qui brunissent à la saison sèche.", "matin", "nature", 9.8290, 124.1400, "Carmen, Bohol"],
    ["Sanctuaire des tarsiers", "Les plus petits primates du monde, yeux immenses dans la forêt.", "apres-midi", "nature", 9.6850, 123.9500, "Corella, Bohol"],
    ["Croisière-dîner sur la Loboc", "Le fleuve vert jade au son des chorales locales.", "soir", "food", 9.6380, 124.0320, "Loboc, Bohol"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Plage d''Alona", "Le lagon de Panglao, sable blanc et bangkas.", "matin", "nature", 9.5480, 123.7740, "Panglao, Bohol"],
    ["Snorkeling à Balicasag", "Tortues et tombant corallien de l''île sanctuaire.", "apres-midi", "nature", 9.5150, 123.6860, "Balicasag, Bohol"],
    ["Fruits de mer sur la plage", "Poisson grillé au poids, pieds dans le sable.", "soir", "food", 9.5480, 123.7750, "Panglao, Bohol"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Grotte d''Hinagdanan", "Le bassin souterrain percé de puits de lumière.", "matin", "nature", 9.6240, 123.7740, "Dauis, Panglao"],
    ["Dernière baignade à Panglao", "Doloho ou Dumaluan, les plages calmes de l''est.", "apres-midi", "nature", 9.5570, 123.8010, "Panglao, Bohol"],
    ["Coucher de soleil d''adieu", "San Miguel fraîche face au détroit de Cebu.", "soir", "nature", 9.5500, 123.7700, "Panglao, Bohol"]]'::jsonb);
END $$;

-- ─── PHL 14 jours DENSE : Manille → Coron → El Nido → Cebu → Bohol → Siargao ──
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('PHL', 14);

  -- Manille (2 jours denses).
  c := seed_city('PHL', 'Manille', 14.5995, 120.9842, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Intramuros et Fort Santiago", "La ville fortifiée et la cellule de Rizal, à vélo de bambou.", "matin", "visit", 14.5940, 120.9700, "Intramuros, Manille"],
    ["Église San Agustin", "La doyenne de pierre du pays, Unesco.", "matin", "visit", 14.5890, 120.9750, "Intramuros, Manille"],
    ["Musée national des Philippines", "Le Spoliarium et l''or précolonial, à la sortie des remparts.", "apres-midi", "visit", 14.5870, 120.9810, "Ermita, Manille"],
    ["Baywalk et dîner à Malate", "Le coucher de soleil sur la baie puis les grills du bord de mer.", "soir", "food", 14.5710, 120.9790, "Malate, Manille"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Binondo food crawl", "Le plus vieux Chinatown du monde, lumpia, hopia et dumplings.", "matin", "food", 14.6000, 120.9740, "Binondo, Manille"],
    ["Quiapo et son église", "Le Nazaréen noir et le marché aux amulettes.", "matin", "visit", 14.5990, 120.9840, "Quiapo, Manille"],
    ["BGC et ses street arts", "La ville neuve, galeries et murals entre les tours.", "apres-midi", "visit", 14.5510, 121.0500, "Taguig, Manille"],
    ["Poblacion", "Rooftops, speakeasies et comptoirs coréens du quartier chaud de Makati.", "soir", "night", 14.5650, 121.0290, "Makati, Manille"]]'::jsonb);

  -- Coron (2 jours).
  c := seed_city('PHL', 'Coron', 11.9986, 120.2043, 2, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Lac Kayangan", "L''eau la plus claire du pays entre les falaises de Coron Island.", "matin", "nature", 11.9420, 120.2210, "Coron Island, Palawan"],
    ["Twin Lagoon", "Le passage sous la roche entre les deux lagons, eau douce sur eau salée.", "apres-midi", "nature", 11.9530, 120.2280, "Coron Island, Palawan"],
    ["Lac Barracuda", "Le lac aux thermoclines, entre parois noires.", "apres-midi", "nature", 11.9560, 120.2130, "Coron Island, Palawan"],
    ["Coucher de soleil au mont Tapyas", "Les 700 marches au-dessus de la ville et des karsts.", "soir", "nature", 12.0030, 120.2050, "Coron, Palawan"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Épaves japonaises de 1944", "Snorkeling ou plongée sur la flotte coulée de Coron Bay.", "matin", "nature", 11.9700, 120.0400, "Coron Bay, Palawan"],
    ["Île de Malcapuya", "Le banc de sable blanc au large, eau limpide.", "apres-midi", "nature", 11.8560, 120.1200, "Malcapuya, Palawan"],
    ["Marché et grills de Coron", "Poisson au kilo grillé sur le front de mer avant le ferry du matin.", "soir", "food", 11.9990, 120.2040, "Coron, Palawan"]]'::jsonb);

  -- El Nido (3 jours denses).
  c := seed_city('PHL', 'El Nido', 11.1949, 119.3897, 3, g, 3, 4);
  PERFORM seed_day(c, 1, '[
    ["Big Lagoon en kayak", "Les parois karstiques de Miniloc dès le premier bateau.", "matin", "nature", 11.1850, 119.3170, "Miniloc, El Nido"],
    ["Secret Lagoon", "La faille dans la roche qui s''ouvre sur le lagon caché.", "apres-midi", "nature", 11.1650, 119.3550, "El Nido"],
    ["Plage des Sept Commandos", "Volley et jus de coco sur le sable blond.", "apres-midi", "nature", 11.1780, 119.3720, "El Nido"],
    ["Coucher de soleil à Corong Corong", "Les bangkas à l''ancre dans l''or du soir.", "soir", "nature", 11.1720, 119.3820, "Corong Corong, El Nido"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Hidden Beach", "La plage secrète derrière le mur de karst de Matinloc.", "matin", "nature", 11.1240, 119.3060, "Matinloc, El Nido"],
    ["Matinloc Shrine", "Le sanctuaire abandonné et son belvédère.", "apres-midi", "visit", 11.1300, 119.3100, "Matinloc, El Nido"],
    ["Helicopter Island", "Snorkeling sur le tombant de l''île-hélicoptère.", "apres-midi", "nature", 11.1440, 119.3320, "El Nido"],
    ["Balançoires de Las Cabañas", "Le sunset le plus photographié de Palawan.", "soir", "nature", 11.1600, 119.3860, "Las Cabañas, El Nido"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Plage de Nacpan", "Les jumelles de sable doré au nord, baignade et cocotiers.", "matin", "nature", 11.3270, 119.4230, "Nacpan, El Nido"],
    ["Belvédère de Nacpan", "Les deux plages en V vues de la colline.", "apres-midi", "nature", 11.3220, 119.4200, "Nacpan, El Nido"],
    ["Village et front de mer", "Halo-halo sous les falaises du bourg.", "apres-midi", "visit", 11.1949, 119.3897, "El Nido"],
    ["Bars de plage d''El Nido", "Acoustique et rhum avant le vol du matin.", "soir", "night", 11.1940, 119.3900, "El Nido"]]'::jsonb);

  -- Cebu (3 jours denses).
  c := seed_city('PHL', 'Cebu', 10.3157, 123.8854, 3, g, 4, 7);
  PERFORM seed_day(c, 1, '[
    ["Basilique du Santo Niño", "L''enfant Jésus offert en 1521, cœur de la foi philippine.", "matin", "visit", 10.2940, 123.9020, "Cebu City"],
    ["Croix de Magellan et Fort San Pedro", "La croix du navigateur et le fortin espagnol du port.", "matin", "visit", 10.2925, 123.9060, "Cebu City"],
    ["Temple taoïste et Tops Lookout", "Les hauteurs de Beverly Hills et la vue sur le détroit.", "apres-midi", "visit", 10.3560, 123.8790, "Busay, Cebu"],
    ["Lechon de Cebu", "Le cochon de lait croustillant, sans sauce et sans rival.", "soir", "food", 10.3100, 123.8910, "Cebu City"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Canyoning aux chutes de Kawasan", "Trois heures de sauts et toboggans dans l''eau bleu lait.", "matin", "nature", 9.8100, 123.3720, "Badian, Cebu"],
    ["Sardine run de Moalboal", "Des millions de sardines en tornade à quelques brasses du bord.", "apres-midi", "nature", 9.9400, 123.3660, "Moalboal, Cebu"],
    ["Tortues de Panagsama", "Les tortues vertes qui broutent devant la plage.", "apres-midi", "nature", 9.9430, 123.3650, "Moalboal, Cebu"],
    ["Soirée à Moalboal", "Grillades et reggae sur Panagsama Beach.", "soir", "night", 9.9420, 123.3660, "Moalboal, Cebu"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Chutes d''Osmeña Peak vers Kawasan", "Le pic aux collines dentelées du sud de l''île au lever du jour.", "matin", "nature", 9.8290, 123.4410, "Dalaguete, Cebu"],
    ["Retour par la côte est", "Simala et son sanctuaire-château sur la route.", "apres-midi", "visit", 10.0210, 123.4570, "Sibonga, Cebu"],
    ["Marché de Carbon", "Le plus vieux marché de la ville pour les fruits du soir.", "apres-midi", "food", 10.2930, 123.8990, "Cebu City"],
    ["Ferry de nuit ou soirée IT Park", "Food park et bières avant Bohol au matin.", "soir", "night", 10.3300, 123.9060, "Cebu City"]]'::jsonb);

  -- Bohol (2 jours denses).
  c := seed_city('PHL', 'Bohol', 9.8499, 124.1435, 2, g, 5, 10);
  PERFORM seed_day(c, 1, '[
    ["Chocolate Hills", "Les 1 268 cônes du belvédère de Carmen.", "matin", "nature", 9.8290, 124.1400, "Carmen, Bohol"],
    ["Sanctuaire des tarsiers", "Les primates miniatures aux yeux immenses.", "apres-midi", "nature", 9.6850, 123.9500, "Corella, Bohol"],
    ["Pont de bambou et rivière Loboc", "La traversée suspendue puis la croisière-dîner en chansons.", "soir", "food", 9.6380, 124.0320, "Loboc, Bohol"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Snorkeling à Balicasag", "Tortues et tombant du sanctuaire marin.", "matin", "nature", 9.5150, 123.6860, "Balicasag, Bohol"],
    ["Banc de sable de Virgin Island", "La langue de sable qui émerge à marée basse.", "matin", "nature", 9.5390, 123.7160, "Panglao, Bohol"],
    ["Plage d''Alona", "Baignade et sieste sur le lagon de Panglao.", "apres-midi", "nature", 9.5480, 123.7740, "Panglao, Bohol"],
    ["Fruits de mer au poids", "Le grill de plage pour la dernière nuit à Panglao.", "soir", "food", 9.5480, 123.7750, "Panglao, Bohol"]]'::jsonb);

  -- Siargao (2 jours).
  c := seed_city('PHL', 'Siargao', 9.8480, 126.0460, 2, g, 6, 12);
  PERFORM seed_day(c, 1, '[
    ["Cloud 9", "La passerelle de bois vers le spot de surf mythique, leçon pour débuter.", "matin", "nature", 9.8110, 126.1650, "General Luna, Siargao"],
    ["Route des palmiers et Maasin River", "La forêt de cocotiers ondulés et la liane sur la rivière.", "apres-midi", "nature", 9.8560, 126.0900, "Siargao"],
    ["Bars de General Luna", "La petite capitale du surf à la nuit tombée.", "soir", "night", 9.8040, 126.1570, "General Luna, Siargao"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Island hopping Naked, Daku et Guyam", "Les trois îlots au large : banc de sable nu, village et bosquet.", "matin", "nature", 9.7660, 126.1580, "Siargao"],
    ["Piscines naturelles de Magpupungko", "Les bassins turquoise dans la roche à marée basse.", "apres-midi", "nature", 9.9600, 126.1590, "Pilar, Siargao"],
    ["Coucher de soleil d''adieu", "Dernier soir des Philippines, pieds dans l''eau.", "soir", "nature", 9.8040, 126.1560, "General Luna, Siargao"]]'::jsonb);
END $$;

-- ─── BEL 4 jours LÉGER : Bruxelles → Bruges ───────────────────────
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('BEL', 4);

  -- Bruxelles (2 jours).
  c := seed_city('BEL', 'Bruxelles', 50.8503, 4.3517, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Grand-Place", "La plus belle place du monde selon Hugo, maisons des corporations dorées.", "matin", "visit", 50.8467, 4.3525, "Bruxelles"],
    ["Manneken-Pis et galeries royales Saint-Hubert", "Le gamin le plus célèbre du pays puis le premier passage couvert d''Europe.", "apres-midi", "visit", 50.8450, 4.3500, "Bruxelles"],
    ["Bières trappistes dans un estaminet", "Gueuze, kriek et trappistes dans un café brun de l''Îlot Sacré.", "soir", "food", 50.8480, 4.3530, "Bruxelles"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Atomium", "La molécule de fer géante de l''Expo 58, sphères et escalators futuristes.", "matin", "visit", 50.8950, 4.3415, "Heysel, Bruxelles"],
    ["Mont des Arts et musée Magritte", "Le jardin sur la ville puis les bombers et pipes du surréaliste.", "apres-midi", "visit", 50.8437, 4.3560, "Bruxelles"],
    ["Sablon et soirée Saint-Géry", "Chocolatiers du Sablon puis bars des halles Saint-Géry.", "soir", "night", 50.8480, 4.3470, "Bruxelles"]]'::jsonb);

  -- Bruges (2 jours).
  c := seed_city('BEL', 'Bruges', 51.2093, 3.2247, 2, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Markt et beffroi", "La grande place aux pignons à redans, 366 marches pour le carillon.", "matin", "visit", 51.2085, 3.2245, "Bruges"],
    ["Canaux en barque", "La Venise du Nord au fil de l''eau, cygnes et ponts de pierre.", "apres-midi", "visit", 51.2060, 3.2270, "Bruges"],
    ["Moules-frites aux chandelles", "Le classique flamand dans une ruelle pavée.", "soir", "food", 51.2080, 3.2260, "Bruges"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Béguinage et lac d''Amour", "Les maisons blanches des béguines et le Minnewater aux cygnes.", "matin", "visit", 51.2010, 3.2230, "Bruges"],
    ["Basilique du Saint-Sang et musée Groeninge", "La relique du Burg puis les primitifs flamands, Van Eyck et Memling.", "apres-midi", "visit", 51.2080, 3.2270, "Bruges"],
    ["Brasserie De Halve Maan", "La visite de la brasserie familiale et sa Brugse Zot à la tireuse.", "soir", "food", 51.2030, 3.2240, "Bruges"]]'::jsonb);
END $$;

-- ─── BEL 6 jours DENSE : Bruxelles → Anvers → Gand → Bruges ───────
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('BEL', 6);

  -- Bruxelles (2 jours denses).
  c := seed_city('BEL', 'Bruxelles', 50.8503, 4.3517, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Grand-Place", "Les maisons des corporations dorées à la première lumière.", "matin", "visit", 50.8467, 4.3525, "Bruxelles"],
    ["Galeries royales Saint-Hubert et Manneken-Pis", "Le passage couvert de 1847 puis le gamin en costume du jour.", "matin", "visit", 50.8450, 4.3500, "Bruxelles"],
    ["Mont des Arts et musée Magritte", "La vue sur la ville basse et les surréalismes.", "apres-midi", "visit", 50.8437, 4.3560, "Bruxelles"],
    ["Sablon", "Chocolatiers et antiquaires autour de Notre-Dame.", "apres-midi", "shopping", 50.8410, 4.3560, "Sablon, Bruxelles"],
    ["Halles Saint-Géry", "Bières spéciales dans le berceau de la ville.", "soir", "night", 50.8480, 4.3470, "Bruxelles"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Atomium et Mini-Europe", "Les neuf sphères de l''Expo 58 et l''Europe en maquette au pied.", "matin", "visit", 50.8950, 4.3415, "Heysel, Bruxelles"],
    ["Parc du Cinquantenaire", "Les arcades triomphales et les musées du parc.", "apres-midi", "visit", 50.8400, 4.3930, "Bruxelles"],
    ["Parcours BD du centre", "Tintin, Lucky Luke et les pignons peints en redescendant.", "apres-midi", "visit", 50.8480, 4.3510, "Bruxelles"],
    ["Frites, boulettes et lambics", "Fritkot assumé puis carte des lambics dans un estaminet.", "soir", "food", 50.8470, 4.3520, "Bruxelles"]]'::jsonb);

  -- Anvers (1 jour).
  c := seed_city('BEL', 'Anvers', 51.2194, 4.4025, 1, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Gare centrale d''Anvers", "La cathédrale ferroviaire de marbre et d''or, plus belle gare du monde.", "matin", "visit", 51.2172, 4.4210, "Anvers"],
    ["Cathédrale Notre-Dame et Grote Markt", "Les Rubens sous la plus haute flèche des Flandres.", "apres-midi", "visit", 51.2200, 4.4010, "Anvers"],
    ["MAS et vieux port", "La tour de grès rouge, vue gratuite du toit sur l''Escaut.", "apres-midi", "visit", 51.2290, 4.4040, "Eilandje, Anvers"],
    ["Het Zuid", "Bières et tables du quartier des galeries.", "soir", "night", 51.2110, 4.3930, "Zuid, Anvers"]]'::jsonb);

  -- Gand (1 jour).
  c := seed_city('BEL', 'Gand', 51.0543, 3.7174, 1, g, 3, 3);
  PERFORM seed_day(c, 1, '[
    ["Château des Comtes", "La forteresse médiévale au milieu de la ville, remparts et douves.", "matin", "visit", 51.0573, 3.7208, "Gand"],
    ["Cathédrale Saint-Bavon et l''Agneau mystique", "Le retable des frères Van Eyck, œuvre la plus volée de l''histoire.", "apres-midi", "visit", 51.0530, 3.7270, "Gand"],
    ["Graslei et Korenlei", "Les deux quais aux façades de guildes sur la Lys.", "apres-midi", "visit", 51.0550, 3.7210, "Gand"],
    ["Soirée sur les quais", "La ville étudiante s''allume, ruelle du graffiti en chemin.", "soir", "night", 51.0545, 3.7215, "Gand"]]'::jsonb);

  -- Bruges (2 jours denses).
  c := seed_city('BEL', 'Bruges', 51.2093, 3.2247, 2, g, 4, 4);
  PERFORM seed_day(c, 1, '[
    ["Markt et montée du beffroi", "366 marches jusqu''au carillon au-dessus des pignons.", "matin", "visit", 51.2085, 3.2245, "Bruges"],
    ["Burg et basilique du Saint-Sang", "La place du pouvoir et la relique rapportée de croisade.", "matin", "visit", 51.2086, 3.2270, "Bruges"],
    ["Canaux en barque", "Le tour d''eau classique, du Rozenhoedkaai aux cygnes.", "apres-midi", "visit", 51.2060, 3.2270, "Bruges"],
    ["Musée Groeninge", "Van Eyck, Memling et les primitifs flamands.", "apres-midi", "visit", 51.2040, 3.2260, "Bruges"],
    ["Moules-frites aux chandelles", "Le classique dans une ruelle pavée.", "soir", "food", 51.2080, 3.2260, "Bruges"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Béguinage et lac d''Amour", "Jonquilles, maisons blanches et Minnewater au calme du matin.", "matin", "visit", 51.2010, 3.2230, "Bruges"],
    ["Hôpital Saint-Jean et châsse de Memling", "Huit siècles de soins et les miniatures du maître.", "apres-midi", "visit", 51.2045, 3.2245, "Bruges"],
    ["Brasserie De Halve Maan", "La visite, le toit panoramique et la Brugse Zot.", "apres-midi", "food", 51.2030, 3.2240, "Bruges"],
    ["Bruges illuminée", "Le tour des canaux à pied à la nuit, le plus beau visage de la ville.", "soir", "night", 51.2070, 3.2260, "Bruges"]]'::jsonb);
END $$;

-- ─── Villes solo : Boracay (2j, PHL), Liège (1j, BEL) ─────────────
DO $$
DECLARE c UUID;
BEGIN
  c := seed_city('PHL', 'Boracay', 11.9674, 121.9248, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["White Beach", "Les quatre kilomètres de sable poudre qui ont fait la réputation de l''île.", "matin", "nature", 11.9620, 121.9250, "White Beach, Boracay"],
    ["Willy''s Rock", "Le rocher volcanique à la vierge, accessible à marée basse.", "apres-midi", "visit", 11.9680, 121.9230, "Station 1, Boracay"],
    ["Voile au couchant en paraw", "Le voilier traditionnel dans le sunset le plus célèbre du pays.", "soir", "nature", 11.9600, 121.9260, "White Beach, Boracay"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Plage de Puka Shell", "Le sable aux coquillages du nord, plus sauvage.", "matin", "nature", 12.0110, 121.9210, "Puka Beach, Boracay"],
    ["Island hopping et snorkeling", "Crystal Cove et les criques de la côte est en bangka.", "apres-midi", "nature", 11.9500, 121.9500, "Boracay"],
    ["Soirée à la Station 2", "D''Mall, grills et feu de jongleurs sur la plage.", "soir", "night", 11.9620, 121.9280, "Station 2, Boracay"]]'::jsonb);

  c := seed_city('BEL', 'Liège', 50.6326, 5.5797, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Montagne de Bueren", "Les 374 marches mythiques et les coteaux de la Citadelle.", "matin", "visit", 50.6470, 5.5810, "Liège"],
    ["Grand Curtius et bords de Meuse", "Armes, verre et art mosan dans le palais rouge du fleuve.", "apres-midi", "visit", 50.6480, 5.5790, "Liège"],
    ["Boulets-frites et pékèt dans le Carré", "La sauce lapin puis le genièvre local dans le quartier qui ne dort pas.", "soir", "food", 50.6410, 5.5700, "Liège"]]'::jsonb);
END $$;
