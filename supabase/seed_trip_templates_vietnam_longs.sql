-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Vietnam voyages LONGS (après helpers ; fichier
-- AUTONOME : à exécuter une seule fois, ne touche pas aux seeds déjà passés)
-- Descente classique nord → sud, sans retour arrière :
--   - 20 jours CHILL (1 activité/créneau) : Hanoï (3j) → Sapa (2j, train de
--     nuit A/R depuis Hanoï) → Baie d'Halong (2j) → Hué (2j) → Da Nang (2j)
--     → Hoi An (3j, + My Son) → Ho Chi Minh-Ville (3j, + Cu Chi, + delta du
--     Mékong) → Phú Quốc (3j). Hanoï/Halong/Hoi An/HCMV reprennent les
--     journées de vietnam.sql v1, Sapa/Hué/Da Nang celles de
--     solo_cities.sql ; delta du Mékong et Phú Quốc inédits.
--   - 21 jours DENSE : mêmes étapes avec Hanoï (+ Ninh Binh), les journées
--     denses de asie_ameriques_v2, un HCMV dense inédit et Phú Quốc en 4j.
-- Relance : DELETE l'éditorial VNM puis rejouer vietnam.sql, le bloc VNM
-- d'asie_ameriques_v2.sql, le bloc VNM de solo_cities.sql ET ce fichier.
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 20 jours CHILL : le grand nord-sud ──────────────────────────
  g := seed_group('VNM', 20);

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
    ["Cathédrale Saint-Joseph et egg coffee", "Néogothique et café à l''œuf avant le train de nuit.", "soir", "food", 21.0288, 105.8490, "Hanoï"]]'::jsonb);

  c := seed_city('VNM', 'Sapa', 22.3364, 103.8438, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Rizières en terrasses de Muong Hoa", "Randonnée dans la vallée sculptée par les Hmong.", "matin", "nature", 22.3100, 103.8700, "Sapa"],
    ["Villages de Lao Chai et Ta Van", "Rencontre avec les minorités Hmong et Giay.", "apres-midi", "visit", 22.3000, 103.8800, "Sapa"],
    ["Marché de Sapa", "Brocarts et barbecue de montagne le soir.", "soir", "food", 22.3360, 103.8440, "Sapa"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Fansipan en téléphérique", "Le toit de l''Indochine à 3 143 m.", "matin", "nature", 22.3030, 103.7750, "Sapa"],
    ["Cascade d''Amour et col de Tram Ton", "La chute de 30 m sur la route du col.", "apres-midi", "nature", 22.3600, 103.7750, "Sapa"],
    ["Soirée au coin du feu", "Thé des montagnes avant la redescente vers la baie.", "soir", "food", 22.3365, 103.8430, "Sapa"]]'::jsonb);

  c := seed_city('VNM', 'Baie d''Halong', 20.9101, 107.1839, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Embarquement et navigation", "2 000 pitons karstiques émergent de l''eau émeraude.", "matin", "nature", 20.9101, 107.1839, "Baie d''Halong"],
    ["Grotte de la Surprise (Sung Sot)", "Salles immenses au cœur d''un îlot.", "apres-midi", "nature", 20.8880, 107.0810, "Baie d''Halong"],
    ["Nuit à bord", "Calamars de nuit et pont sous les étoiles.", "soir", "night", 20.9000, 107.1000, "Baie d''Halong"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Kayak entre les karsts", "Lagons et arches au lever du jour.", "matin", "nature", 20.8900, 107.1200, "Baie d''Halong"],
    ["Village flottant", "La vie des pêcheurs entre les pitons.", "apres-midi", "visit", 20.8700, 107.1300, "Baie d''Halong"],
    ["Retour et route vers l''aéroport", "Vol du soir vers le centre du pays.", "soir", "transport", 21.0000, 107.0000, "Halong"]]'::jsonb);

  c := seed_city('VNM', 'Hué', 16.4637, 107.5909, 2, g, 4, 7);
  PERFORM seed_day(c, 1, '[
    ["Cité impériale de Hué", "La Cité pourpre interdite des Nguyễn, Unesco.", "matin", "visit", 16.4700, 107.5790, "Hué"],
    ["Pagode de la Dame céleste", "La tour octogonale au bord de la rivière des Parfums.", "apres-midi", "visit", 16.4530, 107.5450, "Hué"],
    ["Croisière au couchant sur la rivière des Parfums", "Sampan et chants de Hué.", "soir", "visit", 16.4650, 107.5850, "Hué"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Tombeau de Tu Duc", "Le mausolée-jardin du poète empereur.", "matin", "visit", 16.4360, 107.5560, "Hué"],
    ["Tombeau de Khai Dinh", "Mosaïques de verre et béton flamboyant à flanc de colline.", "apres-midi", "visit", 16.4200, 107.5900, "Hué"],
    ["Bun bo Hué au marché Dong Ba", "La soupe emblématique dans son berceau.", "soir", "food", 16.4700, 107.5870, "Hué"]]'::jsonb);

  c := seed_city('VNM', 'Da Nang', 16.0544, 108.2022, 2, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Montagnes de Marbre", "Grottes-sanctuaires et pagodes dans les pitons calcaires.", "matin", "visit", 16.0040, 108.2630, "Da Nang"],
    ["Plage de My Khe", "Le sable blanc des GIs devenu spot de surf.", "apres-midi", "beach", 16.0550, 108.2470, "Da Nang"],
    ["Pont du Dragon", "Le dragon crache du feu le week-end à 21 h.", "soir", "visit", 16.0610, 108.2270, "Da Nang"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Col des Nuages (Hai Van)", "La route panoramique entre mer et jungle.", "matin", "nature", 16.2000, 108.1300, "Da Nang"],
    ["Péninsule de Son Tra", "La Dame Bouddha géante et les singes doucs.", "apres-midi", "nature", 16.1000, 108.2780, "Da Nang"],
    ["Fruits de mer sur la plage", "Langoustes et coquillages grillés les pieds dans le sable.", "soir", "food", 16.0600, 108.2460, "Da Nang"]]'::jsonb);

  c := seed_city('VNM', 'Hoi An', 15.8801, 108.3380, 3, g, 6, 11);
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

  -- Ho Chi Minh-Ville (3 jours : 1 propre + Cu Chi + delta du Mékong).
  c := seed_city('VNM', 'Ho Chi Minh-Ville', 10.8231, 106.6297, 3, g, 7, 14);
  PERFORM seed_day(c, 1, '[
    ["Palais de la Réunification", "Le palais figé dans son avril 1975.", "matin", "visit", 10.7772, 106.6958, "Ho Chi Minh-Ville"],
    ["Cathédrale Notre-Dame et poste centrale", "Briques roses et charpente d''Eiffel.", "apres-midi", "visit", 10.7798, 106.6990, "Ho Chi Minh-Ville"],
    ["Marché Ben Thanh et rooftops", "Street food puis skyline depuis un bar en hauteur.", "soir", "food", 10.7725, 106.6980, "Ho Chi Minh-Ville"]]'::jsonb);
  e := seed_daytrip('VNM', 'Cu Chi', 11.0430, 106.4620, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Tunnels de Cu Chi", "250 km de galeries de la guerre du Vietnam.", "matin", "visit", 11.0430, 106.4620, "Cu Chi"],
    ["Démonstrations et pièges", "La vie souterraine des combattants.", "apres-midi", "visit", 11.0440, 106.4630, "Cu Chi"],
    ["Retour et Bui Vien", "Soirée dans la rue animée.", "soir", "night", 10.7670, 106.6930, "Ho Chi Minh-Ville"]]'::jsonb);
  -- Delta du Mékong (jour 3) — inédit.
  e := seed_daytrip('VNM', 'My Tho', 10.3600, 106.3600, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Croisière sur le Mékong", "Le fleuve immense entre les îles de la Licorne et du Dragon.", "matin", "nature", 10.3600, 106.3600, "My Tho"],
    ["Barque dans les arroyos de Ben Tre", "Sous les palmiers d''eau, bonbons à la noix de coco.", "apres-midi", "nature", 10.2410, 106.3760, "Ben Tre"],
    ["Retour et dernière soirée à Saïgon", "Dîner de banh xeo avant l''île.", "soir", "food", 10.7760, 106.7000, "Ho Chi Minh-Ville"]]'::jsonb);

  -- Phú Quốc (3 jours) — inédit, farniente final.
  c := seed_city('VNM', 'Phú Quốc', 10.2899, 103.9840, 3, g, 8, 17);
  PERFORM seed_day(c, 1, '[
    ["Plage de Sao", "Le sable blanc le plus fin de l''île, eau laiteuse.", "matin", "beach", 10.0530, 104.0370, "Phú Quốc"],
    ["Farniente et cocotiers", "Transat et noix de coco à la paille.", "apres-midi", "beach", 10.0540, 104.0360, "Phú Quốc"],
    ["Night market de Duong Dong", "Oursins grillés et glace aux fruits du dragon.", "soir", "food", 10.2170, 103.9590, "Duong Dong, Phú Quốc"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Téléphérique de Hon Thom", "8 km au-dessus de l''archipel An Thoi, record du monde.", "matin", "visit", 10.0230, 104.0090, "An Thoi, Phú Quốc"],
    ["Snorkeling dans l''archipel", "Coraux et poissons-clowns des îlots du sud.", "apres-midi", "nature", 9.9600, 104.0150, "An Thoi, Phú Quốc"],
    ["Coucher de soleil à Sunset Town", "Le pont du Baiser face au soleil couchant.", "soir", "visit", 10.0150, 104.0130, "An Thoi, Phú Quốc"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Ferme de perles et poivrières", "Les deux trésors de l''île, sur la côte ouest.", "matin", "visit", 10.1800, 103.9670, "Phú Quốc"],
    ["Plage de Bai Dai", "Le nord sauvage, dernier bain.", "apres-midi", "beach", 10.3320, 103.8520, "Phú Quốc"],
    ["Crabe au poivre à Ham Ninh", "Le village de pêcheurs sur pilotis pour le dîner d''adieu.", "soir", "food", 10.1810, 104.0500, "Ham Ninh, Phú Quốc"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 21 jours DENSE : mêmes étapes, rythme chargé ────────────────
  g := seed_group('VNM', 21);

  -- Hanoï (3 jours : 2 propres + 1 excursion Ninh Binh en jour 2).
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
    ["Marionnettes sur l''eau", "L''art millénaire du delta avant le train de nuit pour Sapa.", "soir", "night", 21.0300, 105.8530, "Hanoï"]]'::jsonb);

  -- Sapa (2 jours).
  c := seed_city('VNM', 'Sapa', 22.3364, 103.8438, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Rizières en terrasses de Muong Hoa", "Randonnée dans la vallée sculptée par les Hmong.", "matin", "nature", 22.3100, 103.8700, "Sapa"],
    ["Villages de Lao Chai et Ta Van", "Rencontre avec les minorités Hmong et Giay.", "apres-midi", "visit", 22.3000, 103.8800, "Sapa"],
    ["Marché de Sapa", "Brocarts et barbecue de montagne le soir.", "soir", "food", 22.3360, 103.8440, "Sapa"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Fansipan en téléphérique", "Le toit de l''Indochine à 3 143 m.", "matin", "nature", 22.3030, 103.7750, "Sapa"],
    ["Cascade d''Amour et col de Tram Ton", "La chute de 30 m sur la route du col.", "apres-midi", "nature", 22.3600, 103.7750, "Sapa"],
    ["Soirée au coin du feu", "Thé des montagnes et vin de maïs.", "soir", "food", 22.3365, 103.8430, "Sapa"]]'::jsonb);

  -- Baie d'Halong (2 jours).
  c := seed_city('VNM', 'Baie d''Halong', 20.9101, 107.1839, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Embarquement et navigation dans la baie", "2 000 pains de sucre émergeant des eaux d''émeraude.", "matin", "nature", 20.9101, 107.1839, "Baie d''Halong"],
    ["Grotte de Sung Sot", "La grotte des Surprises et ses salles gigantesques.", "apres-midi", "nature", 20.8580, 107.0930, "Baie d''Halong"],
    ["Kayak dans les lagons", "Passages sous la roche vers les cirques cachés.", "apres-midi", "nature", 20.8600, 107.1000, "Baie d''Halong"],
    ["Nuit à bord de la jonque", "Dîner de fruits de mer et pêche au calamar.", "soir", "food", 20.8700, 107.1200, "Baie d''Halong"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Tai-chi au lever du soleil", "Sur le pont supérieur, karsts dans la brume.", "matin", "visit", 20.8700, 107.1200, "Baie d''Halong"],
    ["Île de Titop", "Montée au belvédère et baignade sur la plage.", "matin", "nature", 20.8850, 107.0800, "Baie d''Halong"],
    ["Retour au port et route vers le sud", "Brunch à bord en quittant la baie.", "apres-midi", "food", 20.9100, 107.1800, "Halong"],
    ["Soirée libre en transit", "Vol du soir vers le centre du pays.", "soir", "visit", 20.9500, 107.0800, "Halong"]]'::jsonb);

  -- Hué (2 jours).
  c := seed_city('VNM', 'Hué', 16.4637, 107.5909, 2, g, 4, 7);
  PERFORM seed_day(c, 1, '[
    ["Cité impériale de Hué", "La Cité pourpre interdite des Nguyễn, Unesco.", "matin", "visit", 16.4700, 107.5790, "Hué"],
    ["Pagode de la Dame céleste", "La tour octogonale au bord de la rivière des Parfums.", "apres-midi", "visit", 16.4530, 107.5450, "Hué"],
    ["Croisière au couchant sur la rivière des Parfums", "Sampan et chants de Hué.", "soir", "visit", 16.4650, 107.5850, "Hué"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Tombeau de Tu Duc", "Le mausolée-jardin du poète empereur.", "matin", "visit", 16.4360, 107.5560, "Hué"],
    ["Tombeau de Khai Dinh", "Mosaïques de verre et béton flamboyant à flanc de colline.", "apres-midi", "visit", 16.4200, 107.5900, "Hué"],
    ["Bun bo Hué au marché Dong Ba", "La soupe emblématique dans son berceau.", "soir", "food", 16.4700, 107.5870, "Hué"]]'::jsonb);

  -- Da Nang (2 jours) — la route du col des Nuages descend de Hué.
  c := seed_city('VNM', 'Da Nang', 16.0544, 108.2022, 2, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Col des Nuages (Hai Van)", "La route panoramique entre mer et jungle, en arrivant de Hué.", "matin", "nature", 16.2000, 108.1300, "Da Nang"],
    ["Péninsule de Son Tra", "La Dame Bouddha géante et les singes doucs.", "apres-midi", "nature", 16.1000, 108.2780, "Da Nang"],
    ["Pont du Dragon", "Le dragon crache du feu le week-end à 21 h.", "soir", "visit", 16.0610, 108.2270, "Da Nang"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Montagnes de Marbre", "Grottes-sanctuaires et pagodes dans les pitons calcaires.", "matin", "visit", 16.0040, 108.2630, "Da Nang"],
    ["Plage de My Khe", "Le sable blanc des GIs devenu spot de surf.", "apres-midi", "beach", 16.0550, 108.2470, "Da Nang"],
    ["Fruits de mer sur la plage", "Langoustes et coquillages grillés les pieds dans le sable.", "soir", "food", 16.0600, 108.2460, "Da Nang"]]'::jsonb);

  -- Hoi An (3 jours).
  c := seed_city('VNM', 'Hoi An', 15.8801, 108.3380, 3, g, 6, 11);
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
    ["Dernière soirée aux lanternes", "La vieille ville illuminée avant le vol pour Saïgon.", "soir", "visit", 15.8770, 108.3280, "Hoi An"]]'::jsonb);

  -- Ho Chi Minh-Ville (3 jours : 1 propre dense + Cu Chi + delta) — dense inédit.
  c := seed_city('VNM', 'Ho Chi Minh-Ville', 10.8231, 106.6297, 3, g, 7, 14);
  -- J1 : tout le district 1 se fait à pied — palais → cathédrale/poste
  -- (adjacentes) → musée → Ben Thanh, rooftop pour finir.
  PERFORM seed_day(c, 1, '[
    ["Palais de la Réunification", "Le palais figé dans son avril 1975, tanks dans le jardin.", "matin", "visit", 10.7772, 106.6958, "District 1, Ho Chi Minh-Ville"],
    ["Cathédrale Notre-Dame et poste centrale", "Briques roses et charpente d''Eiffel, l''une en face de l''autre.", "matin", "visit", 10.7798, 106.6990, "District 1, Ho Chi Minh-Ville"],
    ["Musée des vestiges de la guerre", "Le conflit vu du Vietnam, éprouvant et nécessaire.", "apres-midi", "visit", 10.7794, 106.6926, "District 3, Ho Chi Minh-Ville"],
    ["Marché Ben Thanh", "L''emblème de Saïgon, du café glacé aux ao dai.", "apres-midi", "shopping", 10.7725, 106.6980, "District 1, Ho Chi Minh-Ville"],
    ["Rooftop et rue Bui Vien", "La skyline depuis un bar en hauteur puis la rue qui ne dort pas.", "soir", "night", 10.7670, 106.6930, "District 1, Ho Chi Minh-Ville"]]'::jsonb);
  e := seed_daytrip('VNM', 'Cu Chi', 11.0430, 106.4620, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Tunnels de Cu Chi", "250 km de galeries de la guerre, ramper dans un tronçon élargi.", "matin", "visit", 11.0430, 106.4620, "Cu Chi"],
    ["Démonstrations et pièges", "La vie souterraine des combattants.", "matin", "visit", 11.0440, 106.4630, "Cu Chi"],
    ["Cholon : pagode Thien Hau et marché Binh Tay", "Le Chinatown de Saïgon au retour.", "apres-midi", "visit", 10.7530, 106.6620, "District 5, Ho Chi Minh-Ville"],
    ["AO Show à l''Opéra", "Bambou et acrobaties dans l''Opéra colonial.", "soir", "night", 10.7770, 106.7030, "District 1, Ho Chi Minh-Ville"]]'::jsonb);
  e := seed_daytrip('VNM', 'My Tho', 10.3600, 106.3600, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Croisière sur le Mékong", "Le fleuve immense entre les îles de la Licorne et du Dragon.", "matin", "nature", 10.3600, 106.3600, "My Tho"],
    ["Barque dans les arroyos de Ben Tre", "Sous les palmiers d''eau, ruches et bonbons coco.", "apres-midi", "nature", 10.2410, 106.3760, "Ben Tre"],
    ["Vergers et musique don ca tai tu", "Fruits du delta en écoutant les chanteurs du Sud.", "apres-midi", "food", 10.3500, 106.3700, "My Tho"],
    ["Retour et dîner de banh xeo", "Crêpes croustillantes avant l''île.", "soir", "food", 10.7760, 106.7000, "Ho Chi Minh-Ville"]]'::jsonb);

  -- Phú Quốc (4 jours) — final farniente, rythme volontairement plus doux.
  c := seed_city('VNM', 'Phú Quốc', 10.2899, 103.9840, 4, g, 8, 17);
  PERFORM seed_day(c, 1, '[
    ["Plage de Sao", "Le sable blanc le plus fin de l''île, eau laiteuse.", "matin", "beach", 10.0530, 104.0370, "Phú Quốc"],
    ["Village de pêcheurs de Ham Ninh", "Pilotis et étals de crabes, sur la même côte est.", "apres-midi", "visit", 10.1810, 104.0500, "Ham Ninh, Phú Quốc"],
    ["Night market de Duong Dong", "Oursins grillés et glace aux fruits du dragon.", "soir", "food", 10.2170, 103.9590, "Duong Dong, Phú Quốc"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Téléphérique de Hon Thom", "8 km au-dessus de l''archipel An Thoi, record du monde.", "matin", "visit", 10.0230, 104.0090, "An Thoi, Phú Quốc"],
    ["Snorkeling dans l''archipel", "Coraux et poissons-clowns des îlots du sud.", "apres-midi", "nature", 9.9600, 104.0150, "An Thoi, Phú Quốc"],
    ["Coucher de soleil à Sunset Town", "Le pont du Baiser face au soleil couchant.", "soir", "visit", 10.0150, 104.0130, "An Thoi, Phú Quốc"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Ferme de perles et poivrières", "Les deux trésors de l''île, sur la côte ouest.", "matin", "visit", 10.1800, 103.9670, "Phú Quốc"],
    ["Plage de Bai Dai et cap Ganh Dau", "Le nord sauvage, le Cambodge à l''horizon.", "apres-midi", "beach", 10.3320, 103.8520, "Phú Quốc"],
    ["Dîner de fruits de mer à Ganh Dau", "Paillote au bout de l''île.", "soir", "food", 10.3620, 103.8410, "Ganh Dau, Phú Quốc"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Parc national de Phú Quốc", "Sentier dans la forêt primaire du nord-est.", "matin", "nature", 10.3230, 103.9880, "Phú Quốc"],
    ["Dernier bain à Long Beach", "La grande plage de la côte ouest.", "apres-midi", "beach", 10.1800, 103.9640, "Phú Quốc"],
    ["Coucher de soleil d''adieu", "Le dernier soir du grand voyage, face au golfe de Thaïlande.", "soir", "nature", 10.1850, 103.9630, "Long Beach, Phú Quốc"]]'::jsonb);
END $$;
