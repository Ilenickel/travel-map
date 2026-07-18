-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux v2 — Corée du Sud, Vietnam, Malaisie,
-- Singapour, Indonésie, Canada
-- (après helpers + les seed_trip_templates_<pays>.sql respectifs)
-- Un groupe DENSE par pays, variante chargée du classique v1 :
--   - KOR 6 jours : Séoul (4j, + excursion DMZ) → Busan (2j)
--   - VNM 8 jours : Hanoï (3j, + Ninh Binh) → Baie d'Halong (2j) → Hoi An (3j)
--   - MYS 5 jours : Kuala Lumpur (3j, + Malacca) → George Town (2j)
--   - SGP 4 jours : Singapour
--   - IDN 7 jours : Ubud (4j, + Nusa Penida) → Seminyak (3j)
--   - CAN 7 jours : Toronto (3j, + Niagara) → Montréal (2j) → Québec (2j)
-- Relance : par pays, supprimer tout l'éditorial du pays puis rejouer
-- v1 PUIS ce fichier (et la partie du pays dans solo_cities.sql le cas échéant).
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── KOR : 6 jours Séoul (+ DMZ) → Busan ─────────────────────────
  g := seed_group('KOR', 6);

  c := seed_city('KOR', 'Séoul', 37.5665, 126.9780, 4, g, 1, 0);
  -- J1 palais : Gyeongbokgung → Bukchon → Insadong (adjacents en descendant).
  PERFORM seed_day(c, 1, '[
    ["Palais Gyeongbokgung", "La relève de la garde royale en costume, hanbok loué en option.", "matin", "visit", 37.5796, 126.9770, "Jongno, Séoul"],
    ["Village hanok de Bukchon", "Toits de tuiles et venelles entre les deux palais.", "apres-midi", "visit", 37.5826, 126.9830, "Bukchon, Séoul"],
    ["Insadong", "Thé, calligraphie et artisanat dans la rue des antiquaires.", "apres-midi", "shopping", 37.5740, 126.9850, "Insadong, Séoul"],
    ["Marché de Gwangjang", "Bindaetteok et bibimbap au coude à coude.", "soir", "food", 37.5700, 126.9990, "Jongno, Séoul"]]'::jsonb);
  -- J2 : Namsan → Myeongdong (au pied), Hongdae le soir.
  PERFORM seed_day(c, 2, '[
    ["N Seoul Tower et mont Namsan", "Téléphérique et cadenas au-dessus de la mégapole.", "matin", "visit", 37.5512, 126.9882, "Namsan, Séoul"],
    ["Myeongdong", "K-beauty et street food au pied de la montagne.", "apres-midi", "shopping", 37.5637, 126.9838, "Myeongdong, Séoul"],
    ["Hongdae", "Busking, arcades et la nuit étudiante.", "soir", "night", 37.5563, 126.9220, "Hongdae, Séoul"]]'::jsonb);
  -- Excursion DMZ (jour 3).
  e := seed_daytrip('KOR', 'DMZ', 37.9430, 126.6800, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Zone démilitarisée et 3e tunnel", "La frontière la plus fermée du monde, en tour encadré.", "matin", "visit", 37.9430, 126.6800, "Paju, DMZ"],
    ["Observatoire Dora et gare de Dorasan", "La Corée du Nord aux jumelles et la gare qui attend.", "apres-midi", "visit", 37.9160, 126.6780, "Paju, DMZ"],
    ["Retour et soirée à Itaewon", "Dîner international dans le quartier cosmopolite.", "soir", "food", 37.5345, 126.9945, "Itaewon, Séoul"]]'::jsonb);
  -- J4 : Changdeokgung → Cheonggyecheon → DDP, Gangnam le soir.
  PERFORM seed_day(c, 4, '[
    ["Palais Changdeokgung et jardin secret", "Le plus beau des cinq palais, Unesco (visite guidée du jardin).", "matin", "visit", 37.5794, 126.9910, "Jongno, Séoul"],
    ["Ruisseau Cheonggyecheon", "La rivière rendue à la ville, promenade en contrebas.", "apres-midi", "nature", 37.5690, 126.9880, "Séoul"],
    ["Dongdaemun Design Plaza", "Le vaisseau de Zaha Hadid et ses marchés nocturnes.", "apres-midi", "visit", 37.5665, 127.0092, "Dongdaemun, Séoul"],
    ["Gangnam", "Néons, K-pop et barbecue coréen au sud du fleuve.", "soir", "night", 37.4979, 127.0276, "Gangnam, Séoul"]]'::jsonb);

  c := seed_city('KOR', 'Busan', 35.1796, 129.0756, 2, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Village culturel de Gamcheon", "Le Machu Picchu coréen aux maisons pastel.", "matin", "visit", 35.0975, 129.0106, "Saha, Busan"],
    ["Marché aux poissons de Jagalchi", "Le plus grand de Corée, dégustation à l''étage.", "apres-midi", "food", 35.0966, 129.0306, "Nampo, Busan"],
    ["BIFF Square et Gukje Market", "Le marché du festival du film et ses hotteok.", "apres-midi", "shopping", 35.0985, 129.0280, "Nampo, Busan"],
    ["Pont Gwangan illuminé", "Fruits de mer face au pont suspendu depuis Gwangalli.", "soir", "food", 35.1530, 129.1180, "Gwangalli, Busan"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Temple Haedong Yonggungsa", "Le temple posé sur les rochers face à la mer.", "matin", "visit", 35.1884, 129.2233, "Gijang, Busan"],
    ["Plage de Haeundae", "La plage la plus célèbre de Corée, en redescendant la côte.", "apres-midi", "beach", 35.1587, 129.1600, "Haeundae, Busan"],
    ["Marché de nuit de Haeundae", "Dernière soirée entre grillades et soju.", "soir", "food", 35.1600, 129.1610, "Haeundae, Busan"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── VNM : 8 jours Hanoï (+ Ninh Binh) → Halong → Hoi An ─────────
  g := seed_group('VNM', 8);

  c := seed_city('VNM', 'Hanoï', 21.0285, 105.8542, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Mausolée de Hô Chi Minh", "Le père de la nation et la pagode au pilier unique.", "matin", "visit", 21.0367, 105.8345, "Ba Dinh, Hanoï"],
    ["Temple de la Littérature", "La première université du Vietnam, stèles des docteurs.", "matin", "visit", 21.0293, 105.8354, "Hanoï"],
    ["Lac Hoan Kiem et temple Ngoc Son", "La tortue légendaire et le pont rouge The Huc.", "apres-midi", "visit", 21.0287, 105.8524, "Hanoï"],
    ["Vieux quartier des 36 corporations", "Chaque rue son métier, ballet de scooters.", "apres-midi", "visit", 21.0340, 105.8520, "Hanoï"],
    ["Bia hoi et bun cha", "Bière pression à 25 centimes sur un tabouret de plastique.", "soir", "food", 21.0345, 105.8510, "Vieux quartier, Hanoï"]]'::jsonb);
  e := seed_daytrip('VNM', 'Ninh Binh', 20.2140, 105.9450, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Barque à Tam Coc ou Trang An", "La baie d''Halong terrestre entre rizières et karsts.", "matin", "nature", 20.2140, 105.9450, "Ninh Binh"],
    ["Point de vue de Mua Cave", "500 marches, le dragon de pierre au-dessus des méandres.", "apres-midi", "nature", 20.2280, 105.9370, "Ninh Binh"],
    ["Retour et soirée à Hanoï", "Café à l''œuf au bord du lac.", "soir", "food", 21.0290, 105.8520, "Hanoï"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Musée d''ethnographie", "Les 54 ethnies du Vietnam, maisons reconstituées.", "matin", "visit", 21.0405, 105.7990, "Cau Giay, Hanoï"],
    ["Pagode Tran Quoc et lac de l''Ouest", "La plus vieille pagode de Hanoï sur son îlot.", "apres-midi", "visit", 21.0480, 105.8365, "Tay Ho, Hanoï"],
    ["Train Street", "Le train qui frôle les façades (aux horaires de passage).", "apres-midi", "visit", 21.0250, 105.8410, "Hanoï"],
    ["Marionnettes sur l''eau", "L''art millénaire du delta au théâtre Thang Long.", "soir", "night", 21.0300, 105.8530, "Hanoï"]]'::jsonb);

  c := seed_city('VNM', 'Baie d''Halong', 20.9101, 107.1839, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Embarquement et navigation dans la baie", "2 000 pains de sucre émergeant des eaux d''émeraude.", "matin", "nature", 20.9101, 107.1839, "Baie d''Halong"],
    ["Grotte de Sung Sot", "La grotte des Surprises et ses salles gigantesques.", "apres-midi", "nature", 20.8580, 107.0930, "Baie d''Halong"],
    ["Kayak dans les lagons", "Passages sous la roche vers les cirques cachés.", "apres-midi", "nature", 20.8600, 107.1000, "Baie d''Halong"],
    ["Nuit à bord de la jonque", "Dîner de fruits de mer et pêche au calamar.", "soir", "food", 20.8700, 107.1200, "Baie d''Halong"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Tai-chi au lever du soleil", "Sur le pont supérieur, karsts dans la brume.", "matin", "visit", 20.8700, 107.1200, "Baie d''Halong"],
    ["Île de Titop", "Montée au belvédère et baignade sur la plage.", "matin", "nature", 20.8850, 107.0800, "Baie d''Halong"],
    ["Retour au port et route vers le sud", "Brunch à bord en quittant la baie.", "apres-midi", "food", 20.9100, 107.1800, "Halong"],
    ["Soirée libre en transit", "Vol ou train de nuit vers le centre du pays.", "soir", "visit", 20.9500, 107.0800, "Halong"]]'::jsonb);

  c := seed_city('VNM', 'Hoi An', 15.8801, 108.3380, 3, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville et pont japonais", "Façades ocre et lanternes de l''ancien port, Unesco.", "matin", "visit", 15.8772, 108.3262, "Hoi An"],
    ["Maisons anciennes et musée", "Tan Ky et les demeures des marchands chinois.", "matin", "visit", 15.8770, 108.3280, "Hoi An"],
    ["Tailleur sur mesure", "La spécialité de la ville : costume ou robe en 24 h.", "apres-midi", "shopping", 15.8790, 108.3300, "Hoi An"],
    ["Rivière Thu Bon aux lampions", "Lâcher de lanternes en barque à la nuit tombée.", "soir", "visit", 15.8760, 108.3290, "Hoi An"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Sanctuaire de My Son", "Les tours cham dans leur cirque de jungle, tôt le matin.", "matin", "visit", 15.7639, 108.1250, "My Son"],
    ["Plage d''An Bang", "Transats et cocotiers au retour.", "apres-midi", "beach", 15.9130, 108.3400, "Hoi An"],
    ["Cao lau et bière locale", "La soupe emblématique introuvable ailleurs.", "soir", "food", 15.8780, 108.3290, "Hoi An"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Cours de cuisine et marché", "Du panier du marché aux nems croustillants.", "matin", "food", 15.8790, 108.3320, "Hoi An"],
    ["Village maraîcher de Tra Que", "À vélo entre les rangs d''herbes aromatiques.", "apres-midi", "nature", 15.8940, 108.3290, "Hoi An"],
    ["Dernière soirée aux lanternes", "La vieille ville illuminée une dernière fois.", "soir", "visit", 15.8770, 108.3280, "Hoi An"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── MYS : 5 jours Kuala Lumpur (+ Malacca) → George Town ────────
  g := seed_group('MYS', 5);

  c := seed_city('MYS', 'Kuala Lumpur', 3.1390, 101.6869, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Tours Petronas", "Le pont suspendu entre les jumelles de 452 m.", "matin", "visit", 3.1579, 101.7116, "KLCC, Kuala Lumpur"],
    ["Grottes de Batu", "272 marches arc-en-ciel vers le sanctuaire hindou.", "apres-midi", "visit", 3.2379, 101.6840, "Gombak, Kuala Lumpur"],
    ["Jalan Alor", "La rue de la street food, satay et durian pour les braves.", "soir", "food", 3.1450, 101.7100, "Bukit Bintang, Kuala Lumpur"]]'::jsonb);
  e := seed_daytrip('MYS', 'Malacca', 2.1896, 102.2501, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Place hollandaise et Stadthuys", "Les façades rouge brique de la colonie hollandaise.", "matin", "visit", 2.1940, 102.2490, "Malacca"],
    ["Jonker Street", "Antiquaires, temples et mosquée dans la rue chinoise, Unesco.", "apres-midi", "visit", 2.1960, 102.2460, "Malacca"],
    ["Retour et rooftop à KL", "La skyline illuminée depuis un bar en hauteur.", "soir", "night", 3.1480, 101.7080, "Kuala Lumpur"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Merdeka Square et mosquée Jamek", "La place de l''indépendance au confluent des rivières.", "matin", "visit", 3.1478, 101.6935, "Kuala Lumpur"],
    ["Chinatown et marché de Petaling", "Temple Sri Mahamariamman et contrefaçons joyeuses.", "apres-midi", "shopping", 3.1440, 101.6980, "Kuala Lumpur"],
    ["Temple Thean Hou", "Les lanternes rouges du grand temple chinois sur sa colline.", "apres-midi", "visit", 3.1210, 101.6870, "Kuala Lumpur"],
    ["KL Tower ou Heli Lounge", "Coucher de soleil à 360° sur la capitale.", "soir", "night", 3.1528, 101.7038, "Kuala Lumpur"]]'::jsonb);

  c := seed_city('MYS', 'George Town', 5.4141, 100.3288, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Street-art de George Town", "Les fresques d''Ernest Zacharevic dans les ruelles, Unesco.", "matin", "visit", 5.4145, 100.3380, "George Town, Penang"],
    ["Maison Cheong Fatt Tze", "La Blue Mansion du mandarin millionnaire.", "apres-midi", "visit", 5.4200, 100.3350, "George Town, Penang"],
    ["Jetées des clans", "Les villages chinois sur pilotis au-dessus de l''eau.", "apres-midi", "visit", 5.4130, 100.3430, "George Town, Penang"],
    ["Hawkers de Gurney Drive", "Char kway teow et laksa : la capitale culinaire de Malaisie.", "soir", "food", 5.4380, 100.3100, "Penang"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Temple Kek Lok Si", "Le plus grand temple bouddhiste de Malaisie, pagode aux 10 000 bouddhas.", "matin", "visit", 5.3990, 100.2730, "Air Itam, Penang"],
    ["Penang Hill en funiculaire", "L''île entière depuis la colline, dans la fraîcheur.", "apres-midi", "nature", 5.4230, 100.2680, "Penang"],
    ["Little India", "Sarees, encens et banana leaf rice pour finir.", "soir", "food", 5.4180, 100.3400, "George Town, Penang"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── SGP : 4 jours Singapour dense ───────────────────────────────
  g := seed_group('SGP', 4);
  c := seed_city('SGP', 'Singapour', 1.3521, 103.8198, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Merlion et Marina Bay", "Le lion-poisson face aux trois tours du Sands.", "matin", "visit", 1.2868, 103.8545, "Marina Bay, Singapour"],
    ["Gardens by the Bay", "Cloud Forest et Flower Dome, les serres du futur.", "apres-midi", "nature", 1.2816, 103.8636, "Singapour"],
    ["OCBC Skyway", "La passerelle entre les Supertrees.", "apres-midi", "visit", 1.2820, 103.8640, "Gardens by the Bay, Singapour"],
    ["Garden Rhapsody et skyline", "Les arbres lumineux puis la baie illuminée.", "soir", "visit", 1.2820, 103.8630, "Singapour"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Chinatown et temple de la Relique de la Dent", "Le stupa d''or au cœur des shophouses.", "matin", "visit", 1.2815, 103.8443, "Chinatown, Singapour"],
    ["Little India", "Temples tamouls et guirlandes de jasmin.", "apres-midi", "visit", 1.3066, 103.8518, "Little India, Singapour"],
    ["Kampong Glam et mosquée du Sultan", "Le dôme doré et Haji Lane la créative.", "apres-midi", "visit", 1.3024, 103.8590, "Kampong Glam, Singapour"],
    ["Hawker centre de Lau Pa Sat", "Satay street sous la halle victorienne.", "soir", "food", 1.2807, 103.8505, "Singapour"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Téléphérique vers Sentosa", "L''île des loisirs par les airs.", "matin", "visit", 1.2494, 103.8303, "Sentosa, Singapour"],
    ["Plage de Siloso ou SEA Aquarium", "Farniente ou le grand aquarium, au choix.", "apres-midi", "beach", 1.2540, 103.8110, "Sentosa, Singapour"],
    ["Wings of Time", "Le spectacle son et lumière sur l''eau.", "soir", "night", 1.2510, 103.8170, "Sentosa, Singapour"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Jardin botanique et orchidées", "Le premier site Unesco de la cité-État.", "matin", "nature", 1.3138, 103.8159, "Singapour"],
    ["Orchard Road", "Le kilomètre le plus commerçant d''Asie.", "apres-midi", "shopping", 1.3048, 103.8318, "Orchard, Singapour"],
    ["Clarke Quay et Singapore Sling", "Un dernier verre au bord de la rivière — ou au Raffles.", "soir", "night", 1.2906, 103.8465, "Clarke Quay, Singapour"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── IDN : 7 jours Ubud (+ Nusa Penida) → Seminyak ───────────────
  g := seed_group('IDN', 7);

  c := seed_city('IDN', 'Ubud', -8.5069, 115.2625, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Forêt des singes", "Temples moussus et macaques chapardeurs.", "matin", "nature", -8.5194, 115.2587, "Ubud"],
    ["Palais royal et marché d''Ubud", "Le cœur culturel de Bali, sarongs et paniers.", "apres-midi", "visit", -8.5069, 115.2625, "Ubud"],
    ["Rue des artistes de Penestanan", "Ateliers et galeries dans les ruelles.", "apres-midi", "visit", -8.5060, 115.2520, "Ubud"],
    ["Danse legong au palais", "Les danseuses aux doigts d''or à la nuit tombée.", "soir", "night", -8.5065, 115.2625, "Ubud"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Rizières de Tegalalang", "Les terrasses émeraude au lever du jour, avant les foules.", "matin", "nature", -8.4312, 115.2777, "Tegalalang, Bali"],
    ["Temple de Tirta Empul", "Le bain de purification aux sources sacrées.", "apres-midi", "visit", -8.4155, 115.3151, "Tampaksiring, Bali"],
    ["Plantation de café", "Luwak et cacao sur la route du retour.", "apres-midi", "food", -8.4400, 115.2900, "Bali"],
    ["Bebek betutu", "Le canard fumé balinais dans les rizières.", "soir", "food", -8.5100, 115.2650, "Ubud"]]'::jsonb);
  e := seed_daytrip('IDN', 'Nusa Penida', -8.7278, 115.5444, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Kelingking Beach", "La falaise T-Rex au-dessus du sable secret, départ en speedboat.", "matin", "nature", -8.7500, 115.4720, "Nusa Penida"],
    ["Angel''s Billabong et Broken Beach", "La piscine naturelle et l''arche effondrée.", "apres-midi", "nature", -8.7280, 115.4460, "Nusa Penida"],
    ["Retour et dîner tranquille à Ubud", "Warung en terrasse après la traversée.", "soir", "food", -8.5080, 115.2630, "Ubud"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Campuhan Ridge Walk", "La crête d''alang-alang au frais du matin.", "matin", "nature", -8.5030, 115.2560, "Ubud"],
    ["Yoga ou spa balinais", "Massage aux huiles dans un pavillon sur la rivière.", "apres-midi", "visit", -8.5090, 115.2600, "Ubud"],
    ["Marché nocturne de Gianyar", "Babi guling et satays entre locaux.", "soir", "food", -8.5390, 115.3260, "Gianyar, Bali"]]'::jsonb);

  c := seed_city('IDN', 'Seminyak', -8.6910, 115.1668, 3, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Plage de Seminyak", "Première session surf ou farniente.", "matin", "beach", -8.6910, 115.1590, "Seminyak, Bali"],
    ["Boutiques et cafés de Seminyak", "Le Bali design entre deux baignades.", "apres-midi", "shopping", -8.6890, 115.1660, "Seminyak, Bali"],
    ["Coucher de soleil à Petitenget", "Bean bags et cocktails les pieds dans le sable.", "soir", "night", -8.6830, 115.1550, "Seminyak, Bali"]]'::jsonb);
  -- J2 : remontée de la côte vers le nord — Canggu puis Tanah Lot, où l''on
  -- reste pour LE coucher de soleil sur le temple (son moment iconique).
  PERFORM seed_day(c, 2, '[
    ["Canggu", "Rizières, surf et cafés bohèmes en remontant la côte.", "matin", "visit", -8.6478, 115.1385, "Canggu, Bali"],
    ["Temple de Tanah Lot", "Le temple sur son rocher marin, à explorer à marée basse.", "apres-midi", "visit", -8.6212, 115.0868, "Tabanan, Bali"],
    ["Coucher de soleil à Tanah Lot", "Le rocher en silhouette dans l''océan embrasé, avant le retour.", "soir", "nature", -8.6215, 115.0870, "Tabanan, Bali"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Plage de Padang Padang", "La crique de sable blond entre les rochers du Bukit.", "matin", "beach", -8.8106, 115.1030, "Uluwatu, Bali"],
    ["Temple d''Uluwatu", "Le sanctuaire au bord de la falaise de 70 m.", "apres-midi", "visit", -8.8291, 115.0849, "Uluwatu, Bali"],
    ["Danse kecak au coucher du soleil", "Le chœur de feu face à l''océan, sur place.", "soir", "night", -8.8290, 115.0850, "Uluwatu, Bali"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── CAN : 7 jours Toronto (+ Niagara) → Montréal → Québec ───────
  g := seed_group('CAN', 7);

  c := seed_city('CAN', 'Toronto', 43.6532, -79.3832, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["CN Tower", "Plancher de verre à 342 m et EdgeWalk pour les téméraires.", "matin", "visit", 43.6426, -79.3871, "Toronto"],
    ["Marché St. Lawrence", "Peameal bacon sandwich dans la halle de 1803.", "apres-midi", "food", 43.6487, -79.3716, "Toronto"],
    ["Distillery District", "Briques victoriennes, galeries et cafés piétons.", "apres-midi", "visit", 43.6503, -79.3596, "Toronto"],
    ["Dîner dans le Distillery", "Dernier verre sous les guirlandes.", "soir", "food", 43.6500, -79.3590, "Toronto"]]'::jsonb);
  e := seed_daytrip('CAN', 'Chutes du Niagara', 43.0896, -79.0849, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Chutes du Niagara", "Le fer à cheval depuis la promenade, arcs-en-ciel garantis.", "matin", "nature", 43.0896, -79.0849, "Niagara Falls"],
    ["Croisière au pied des chutes", "Poncho rouge et embruns dans le chaudron.", "apres-midi", "nature", 43.0890, -79.0770, "Niagara Falls"],
    ["Niagara-on-the-Lake", "Le village victorien et ses vignobles de vin de glace.", "apres-midi", "visit", 43.2550, -79.0710, "Ontario"],
    ["Retour et soirée à Toronto", "La skyline depuis les quais.", "soir", "visit", 43.6400, -79.3800, "Toronto"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Îles de Toronto", "Ferry et la plus belle vue sur la skyline.", "matin", "nature", 43.6205, -79.3790, "Toronto Islands"],
    ["Kensington Market", "Friperies, graffitis et cuisines du monde.", "apres-midi", "visit", 43.6547, -79.4005, "Toronto"],
    ["Musée royal de l''Ontario ou AGO", "Dinosaures ou Groupe des Sept, au choix.", "apres-midi", "visit", 43.6677, -79.3948, "Toronto"],
    ["Quartier des spectacles", "Match des Raptors ou comédie musicale.", "soir", "night", 43.6465, -79.3870, "Toronto"]]'::jsonb);

  c := seed_city('CAN', 'Montréal', 45.5017, -73.5673, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Basilique Notre-Dame", "La voûte bleue étoilée du Vieux-Montréal.", "matin", "visit", 45.5046, -73.5566, "Vieux-Montréal"],
    ["Vieux-Port et rue Saint-Paul", "Pavés, galeries et grande roue au bord du fleuve.", "apres-midi", "visit", 45.5080, -73.5540, "Vieux-Montréal"],
    ["Plateau Mont-Royal", "Escaliers en colimaçon et murales du quartier emblématique.", "apres-midi", "visit", 45.5200, -73.5800, "Le Plateau, Montréal"],
    ["Poutine et boulevard Saint-Laurent", "La Main et ses institutions, de Schwartz''s aux bars.", "soir", "food", 45.5160, -73.5770, "Montréal"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Mont Royal et belvédère Kondiaronk", "La montagne de la ville, vue sur le centre.", "matin", "nature", 45.5088, -73.5878, "Montréal"],
    ["Marché Jean-Talon", "Le grand marché de la Petite Italie, sirop et fromages.", "apres-midi", "food", 45.5364, -73.6157, "Petite Italie, Montréal"],
    ["Quartier des spectacles", "Festivals ou dernière soirée sur Sainte-Catherine.", "soir", "night", 45.5080, -73.5680, "Montréal"]]'::jsonb);

  c := seed_city('CAN', 'Québec', 46.8139, -71.2080, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Château Frontenac et terrasse Dufferin", "L''hôtel le plus photographié du monde au-dessus du fleuve.", "matin", "visit", 46.8119, -71.2050, "Vieux-Québec"],
    ["Petit-Champlain et place Royale", "Les ruelles du berceau de l''Amérique française.", "apres-midi", "visit", 46.8110, -71.2030, "Vieux-Québec"],
    ["Remparts et plaines d''Abraham", "La seule ville fortifiée au nord du Mexique.", "apres-midi", "visit", 46.8080, -71.2130, "Québec"],
    ["Dîner dans le Vieux-Québec", "Tourtière et cidre de glace aux chandelles.", "soir", "food", 46.8130, -71.2070, "Vieux-Québec"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Chutes Montmorency", "83 m — plus hautes que Niagara — en téléphérique ou passerelle.", "matin", "nature", 46.8908, -71.1470, "Québec"],
    ["Île d''Orléans", "Vergers, vignobles et érablières à 15 minutes.", "apres-midi", "nature", 46.9160, -71.0140, "Québec"],
    ["Remparts illuminés", "Dernière promenade dans la vieille ville la nuit.", "soir", "visit", 46.8125, -71.2060, "Vieux-Québec"]]'::jsonb);
END $$;
