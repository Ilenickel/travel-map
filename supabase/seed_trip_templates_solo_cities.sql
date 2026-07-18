-- ════════════════════════════════════════════════════════════════
-- Templates ville-seule — toutes destinations (après seed_trip_templates_helpers.sql)
--
-- Grandes villes absentes du catalogue qui ne s'insèrent pas naturellement
-- dans un circuit éditorial existant : chaque template a group_id NULL et
-- n'apparaît donc QUE dans la suggestion par ville (handleSuggest ne filtre
-- pas sur group_id), jamais en "voyage entier". Format simple : 1 activité
-- par créneau. Les villes-seules des pays du lot dense (Strasbourg, Bilbao,
-- Malaga, Turin, Sapporo, La Nouvelle-Orléans, Honolulu) sont dans les
-- fichiers *_v2.sql de leur pays.
--
-- Relance : pas de clé naturelle — supprimer les lignes éditoriales SANS
-- groupe des pays concernés avant de rejouer, ex. pour l'Allemagne :
--   DELETE FROM trip_templates WHERE is_editorial = true
--     AND country_code = 'DEU' AND group_id IS NULL AND parent_template_id IS NULL;
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE c UUID;
BEGIN
  -- ─── Allemagne : Hambourg (2j), Francfort (1j) ───────────────────
  c := seed_city('DEU', 'Hambourg', 53.5511, 9.9937, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Speicherstadt et Miniatur Wunderland", "Entrepôts de brique sur les canaux et le plus grand réseau miniature du monde.", "matin", "visit", 53.5433, 9.9880, "HafenCity, Hambourg"],
    ["Elbphilharmonie", "La vague de verre sur le port, plaza panoramique gratuite.", "apres-midi", "visit", 53.5413, 9.9841, "HafenCity, Hambourg"],
    ["Landungsbrücken au couchant", "Les pontons du port et les grues illuminées.", "soir", "visit", 53.5459, 9.9670, "St. Pauli, Hambourg"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Lac Alster", "Tour du lac intérieur, voiliers et villas.", "matin", "nature", 53.5580, 10.0000, "Hambourg"],
    ["Église Saint-Michel", "Le clocher baroque emblème de la ville.", "apres-midi", "visit", 53.5483, 9.9787, "Neustadt, Hambourg"],
    ["Reeperbahn et Schanze", "La nuit hambourgeoise, des Beatles aux bars alternatifs.", "soir", "night", 53.5497, 9.9630, "St. Pauli, Hambourg"]]'::jsonb);

  c := seed_city('DEU', 'Francfort', 50.1109, 8.6821, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Römerberg", "La place aux maisons à colombages reconstruites.", "matin", "visit", 50.1106, 8.6820, "Altstadt, Francfort"],
    ["Main Tower", "La skyline de Mainhattan depuis la seule tour ouverte au public.", "apres-midi", "visit", 50.1123, 8.6720, "Francfort"],
    ["Cidre à Sachsenhausen", "Apfelwein dans les tavernes de la rive gauche.", "soir", "food", 50.1030, 8.6850, "Sachsenhausen, Francfort"]]'::jsonb);

  -- ─── Portugal : Funchal (2j), Coimbra (1j) ───────────────────────
  c := seed_city('PRT', 'Funchal', 32.6669, -16.9241, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Téléphérique et jardin tropical de Monte", "Montée au-dessus de la baie, orchidées et azulejos.", "matin", "nature", 32.6760, -16.9010, "Monte, Funchal"],
    ["Descente en luge en osier", "Les carreiros freinent avec leurs bottes, tradition unique.", "apres-midi", "visit", 32.6740, -16.9040, "Monte, Funchal"],
    ["Vieille ville et rue Santa Maria", "Portes peintes et poisson-sabre au dîner.", "soir", "food", 32.6480, -16.9030, "Funchal"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Levada dans la forêt de lauriers", "Randonnée le long des canaux d''irrigation, Unesco.", "matin", "nature", 32.7300, -16.9800, "Madère"],
    ["Marché des Lavradores", "Fruits exotiques et fleurs de l''île.", "apres-midi", "food", 32.6490, -16.9060, "Funchal"],
    ["Dégustation de vin de Madère", "Verticale dans une cave centenaire.", "soir", "food", 32.6470, -16.9090, "Funchal"]]'::jsonb);

  c := seed_city('PRT', 'Coimbra', 40.2033, -8.4103, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Université de Coimbra", "La bibliothèque Joanina dorée, plus vieille université du pays.", "matin", "visit", 40.2076, -8.4256, "Coimbra"],
    ["Vieille cathédrale et ruelles", "La Sé Velha romane et la descente vers le Mondego.", "apres-midi", "visit", 40.2087, -8.4270, "Coimbra"],
    ["Fado de Coimbra", "Le fado des étudiants, chanté en cape noire.", "soir", "night", 40.2100, -8.4290, "Coimbra"]]'::jsonb);

  -- ─── Pays-Bas : Utrecht (1j) ─────────────────────────────────────
  c := seed_city('NLD', 'Utrecht', 52.0907, 5.1214, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Tour Dom", "Le plus haut clocher des Pays-Bas, 465 marches.", "matin", "visit", 52.0907, 5.1214, "Utrecht"],
    ["Canaux à quais bas", "Les wharfs médiévaux uniques, cafés au niveau de l''eau.", "apres-midi", "visit", 52.0900, 5.1220, "Oudegracht, Utrecht"],
    ["Dîner sur l''Oudegracht", "Terrasse dans les anciennes caves à quai.", "soir", "food", 52.0890, 5.1210, "Utrecht"]]'::jsonb);

  -- ─── Suisse : Berne (1j), Zermatt (2j) ───────────────────────────
  c := seed_city('CHE', 'Berne', 46.9480, 7.4474, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville et Zytglogge", "Arcades médiévales et horloge astronomique, Unesco.", "matin", "visit", 46.9480, 7.4474, "Berne"],
    ["Fosse aux ours et Rosengarten", "Les ours emblèmes puis la roseraie panoramique.", "apres-midi", "nature", 46.9480, 7.4590, "Berne"],
    ["Terrasse du Palais fédéral", "L''Aar turquoise et les Alpes au fond.", "soir", "visit", 46.9465, 7.4440, "Berne"]]'::jsonb);

  c := seed_city('CHE', 'Zermatt', 46.0207, 7.7491, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Gornergrat en train à crémaillère", "Face au Cervin et à 29 sommets de plus de 4 000 m.", "matin", "nature", 46.0203, 7.7834, "Zermatt"],
    ["Randonnée du lac Riffelsee", "Le Cervin reflété dans le lac, descente à pied.", "apres-midi", "nature", 46.0170, 7.7620, "Zermatt"],
    ["Village de Zermatt", "Chalets brûlés par le soleil et fondue, sans voitures.", "soir", "food", 46.0207, 7.7491, "Zermatt"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Matterhorn Glacier Paradise", "La plus haute station de téléphérique d''Europe, 3 883 m.", "matin", "nature", 45.9380, 7.7320, "Zermatt"],
    ["Palais des glaces", "Sculptures dans le glacier, 15 m sous la surface.", "apres-midi", "visit", 45.9390, 7.7310, "Zermatt"],
    ["Coucher de soleil sur le Cervin", "La pyramide rougeoyante depuis le pont Kirchbrücke.", "soir", "nature", 46.0190, 7.7480, "Zermatt"]]'::jsonb);

  -- ─── Autriche : Hallstatt (1j), Graz (1j) ────────────────────────
  c := seed_city('AUT', 'Hallstatt', 47.5622, 13.6493, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Village de Hallstatt", "Maisons pastel entre lac et falaise, la carte postale absolue.", "matin", "visit", 47.5622, 13.6493, "Hallstatt"],
    ["Mine de sel et passerelle Skywalk", "La plus vieille mine de sel du monde et sa vue plongeante.", "apres-midi", "visit", 47.5620, 13.6420, "Hallstatt"],
    ["Rive du lac au couchant", "Cygnes et reflets des montagnes.", "soir", "nature", 47.5615, 13.6480, "Hallstatt"]]'::jsonb);

  c := seed_city('AUT', 'Graz', 47.0707, 15.4395, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Schlossberg et tour de l''Horloge", "Montée sur la colline fortifiée, toits rouges aux pieds.", "matin", "visit", 47.0760, 15.4370, "Graz"],
    ["Kunsthaus et île sur la Mur", "Le blob bleu et l''île-passerelle futuriste.", "apres-midi", "visit", 47.0710, 15.4340, "Graz"],
    ["Vieille ville et heuriger", "Cours Renaissance et vin de Styrie.", "soir", "food", 47.0710, 15.4400, "Graz"]]'::jsonb);

  -- ─── Tchéquie : Český Krumlov (1j), Brno (1j) ────────────────────
  c := seed_city('CZE', 'Český Krumlov', 48.8127, 14.3175, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Château de Český Krumlov", "La tour peinte au-dessus des méandres de la Vltava.", "matin", "visit", 48.8127, 14.3150, "Český Krumlov"],
    ["Vieille ville", "Ruelles gothiques et baroques dans la boucle de la rivière, Unesco.", "apres-midi", "visit", 48.8109, 14.3155, "Český Krumlov"],
    ["Taverne médiévale", "Bière tchèque et gibier à la broche aux chandelles.", "soir", "food", 48.8110, 14.3160, "Český Krumlov"]]'::jsonb);

  c := seed_city('CZE', 'Brno', 49.1951, 16.6068, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Forteresse du Špilberk", "La citadelle-prison des Habsbourg au-dessus de la ville.", "matin", "visit", 49.1946, 16.5997, "Brno"],
    ["Villa Tugendhat", "Le chef-d''œuvre fonctionnaliste de Mies van der Rohe (réserver).", "apres-midi", "visit", 49.2071, 16.6160, "Brno"],
    ["Bars de la vieille ville", "La scène étudiante la plus dense du pays.", "soir", "night", 49.1930, 16.6080, "Brno"]]'::jsonb);

  -- ─── Pologne : Gdańsk (2j), Wrocław (1j) ─────────────────────────
  c := seed_city('POL', 'Gdańsk', 54.3520, 18.6466, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Voie royale et Długi Targ", "Façades hanséatiques et fontaine de Neptune.", "matin", "visit", 54.3489, 18.6531, "Gdańsk"],
    ["Grue médiévale et bords de la Motława", "Le port hanséatique et ses quais reconstruits.", "apres-midi", "visit", 54.3505, 18.6580, "Gdańsk"],
    ["Rue Mariacka", "Ambre et perrons gothiques à la nuit tombée.", "soir", "visit", 54.3495, 18.6540, "Gdańsk"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Centre européen de Solidarité", "Les chantiers navals où Solidarność fit tomber un mur.", "matin", "visit", 54.3610, 18.6490, "Gdańsk"],
    ["Basilique Sainte-Marie", "La plus grande église de brique du monde, montée à la tour.", "apres-midi", "visit", 54.3500, 18.6530, "Gdańsk"],
    ["Sopot et son môle", "La station balnéaire voisine, le plus long ponton de bois d''Europe.", "soir", "visit", 54.4460, 18.5730, "Sopot"]]'::jsonb);

  c := seed_city('POL', 'Wrocław', 51.1079, 17.0385, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Rynek et hôtel de ville gothique", "L''une des plus belles places d''Europe centrale, chasse aux nains.", "matin", "visit", 51.1100, 17.0320, "Wrocław"],
    ["Île de la Cathédrale", "Ostrów Tumski et ses réverbères allumés à la main.", "apres-midi", "visit", 51.1140, 17.0460, "Wrocław"],
    ["Bords de l''Oder au couchant", "Ponts et flèches reflétés dans le fleuve.", "soir", "nature", 51.1120, 17.0400, "Wrocław"]]'::jsonb);

  -- ─── Irlande : Cork (2j) ─────────────────────────────────────────
  c := seed_city('IRL', 'Cork', 51.8985, -8.4756, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["English Market", "Le marché couvert victorien, fromages et poissons fumés.", "matin", "food", 51.8975, -8.4740, "Cork"],
    ["Cathédrale Saint-Finbarr et Shandon", "Flèches néogothiques puis carillon à sonner soi-même.", "apres-midi", "visit", 51.8945, -8.4800, "Cork"],
    ["Pubs de Cork", "Stout locale (Murphy''s) et musique live.", "soir", "night", 51.8980, -8.4750, "Cork"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Château de Blarney", "Embrasser la pierre de l''éloquence, tête en bas.", "matin", "visit", 51.9290, -8.5709, "Blarney, Cork"],
    ["Kinsale", "Le port aux façades multicolores, capitale gourmande.", "apres-midi", "visit", 51.7060, -8.5220, "Kinsale, Cork"],
    ["Dîner de poisson à Kinsale", "Fish and chips gastronomique avant le retour.", "soir", "food", 51.7070, -8.5230, "Kinsale, Cork"]]'::jsonb);

  -- ─── Croatie : Zadar (1j), Rovinj (1j) ───────────────────────────
  c := seed_city('HRV', 'Zadar', 44.1194, 15.2314, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville et église Saint-Donat", "La rotonde préromane sur le forum romain.", "matin", "visit", 44.1156, 15.2244, "Zadar"],
    ["Orgue marin", "Les marches qui jouent avec les vagues.", "apres-midi", "visit", 44.1178, 15.2185, "Zadar"],
    ["Salut au Soleil au couchant", "Le disque solaire s''illumine — le plus beau coucher du monde selon Hitchcock.", "soir", "visit", 44.1180, 15.2180, "Zadar"]]'::jsonb);

  c := seed_city('HRV', 'Rovinj', 45.0812, 13.6387, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville de Rovinj", "Ruelles vénitiennes serrées sur la presqu''île.", "matin", "visit", 45.0812, 13.6387, "Rovinj"],
    ["Église Sainte-Euphémie", "Montée au campanile, l''Adriatique à 360°.", "apres-midi", "visit", 45.0817, 13.6360, "Rovinj"],
    ["Dîner de fruits de mer sur le port", "Truffes d''Istrie et poissons de l''Adriatique.", "soir", "food", 45.0800, 13.6390, "Rovinj"]]'::jsonb);

  -- ─── Grèce : Thessalonique (2j), La Canée (2j), Rhodes (2j) ──────
  c := seed_city('GRC', 'Thessalonique', 40.6401, 22.9444, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Tour Blanche", "L''emblème de la ville sur le front de mer.", "matin", "visit", 40.6264, 22.9483, "Thessalonique"],
    ["Rotonde et arc de Galère", "Les monuments romains du centre.", "apres-midi", "visit", 40.6330, 22.9530, "Thessalonique"],
    ["Ladadika", "Tavernes et rebetiko dans l''ancien quartier des huiles.", "soir", "food", 40.6350, 22.9380, "Thessalonique"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Ano Poli", "La ville haute ottomane et ses remparts byzantins.", "matin", "visit", 40.6440, 22.9490, "Thessalonique"],
    ["Marché Modiano et Kapani", "Olives, feta et poissons dans les halles centenaires.", "apres-midi", "food", 40.6360, 22.9410, "Thessalonique"],
    ["Front de mer au couchant", "Les parapluies de Zongolopoulos face à l''Olympe.", "soir", "visit", 40.6230, 22.9520, "Thessalonique"]]'::jsonb);

  c := seed_city('GRC', 'La Canée', 35.5138, 24.0180, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Port vénitien", "Le phare égyptien et les façades pastel de la baie.", "matin", "visit", 35.5180, 24.0180, "La Canée"],
    ["Vieille ville et quartier turc", "Ruelles de Topanas et marché couvert.", "apres-midi", "visit", 35.5150, 24.0170, "La Canée"],
    ["Taverne sur le port", "Poulpe grillé et raki au coucher du soleil.", "soir", "food", 35.5175, 24.0190, "La Canée"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Plage d''Elafonissi", "Le sable rose et la lagune turquoise au bout de la Crète.", "matin", "beach", 35.2710, 23.5400, "Elafonissi, Crète"],
    ["Baignade et farniente", "Eaux peu profondes de la réserve naturelle.", "apres-midi", "beach", 35.2715, 23.5410, "Elafonissi, Crète"],
    ["Retour et dîner crétois", "Dakos et agneau au four à La Canée.", "soir", "food", 35.5160, 24.0180, "La Canée"]]'::jsonb);

  c := seed_city('GRC', 'Rhodes', 36.4341, 28.2176, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Palais des Grands Maîtres", "La forteresse des Hospitaliers dans la ville médiévale Unesco.", "matin", "visit", 36.4460, 28.2240, "Rhodes"],
    ["Rue des Chevaliers et remparts", "La voie médiévale la mieux conservée d''Europe.", "apres-midi", "visit", 36.4450, 28.2270, "Rhodes"],
    ["Mandraki au couchant", "Les moulins et les cerfs de bronze de l''ancien Colosse.", "soir", "visit", 36.4500, 28.2270, "Rhodes"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Acropole de Lindos", "Le temple d''Athéna au-dessus de la baie Saint-Paul.", "matin", "visit", 36.0910, 28.0880, "Lindos, Rhodes"],
    ["Village de Lindos et baie", "Maisons blanches de capitaines et baignade.", "apres-midi", "beach", 36.0920, 28.0850, "Lindos, Rhodes"],
    ["Dîner dans la vieille ville de Rhodes", "Mezze sous les bougainvilliers.", "soir", "food", 36.4440, 28.2250, "Rhodes"]]'::jsonb);

  -- ─── Maroc : Essaouira (2j), Agadir (2j) ─────────────────────────
  c := seed_city('MAR', 'Essaouira', 31.5085, -9.7595, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Médina et remparts de la Skala", "Canons face à l''Atlantique et ruelles bleues et blanches, Unesco.", "matin", "visit", 31.5130, -9.7700, "Essaouira"],
    ["Port de pêche", "Barques bleues, mouettes et chantier naval traditionnel.", "apres-midi", "visit", 31.5060, -9.7720, "Essaouira"],
    ["Sardines grillées sur le port", "Le poisson du jour face aux îles Purpuraires.", "soir", "food", 31.5070, -9.7710, "Essaouira"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Plage d''Essaouira", "Kitesurf et dromadaires sur la grande baie ventée.", "matin", "beach", 31.5000, -9.7620, "Essaouira"],
    ["Souks et ateliers de thuya", "Marqueterie locale et galeries d''art.", "apres-midi", "shopping", 31.5120, -9.7690, "Essaouira"],
    ["Coucher de soleil sur les remparts", "L''Atlantique en feu depuis la Skala.", "soir", "nature", 31.5130, -9.7705, "Essaouira"]]'::jsonb);

  c := seed_city('MAR', 'Agadir', 30.4278, -9.5981, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Plage et promenade d''Agadir", "10 km de sable et 300 jours de soleil.", "matin", "beach", 30.4150, -9.6030, "Agadir"],
    ["Kasbah d''Agadir Oufella", "Les ruines au sommet, baie entière aux pieds.", "apres-midi", "visit", 30.4310, -9.6320, "Agadir"],
    ["Marina et front de mer", "Dîner de poisson au bord des yachts.", "soir", "food", 30.4220, -9.6130, "Agadir"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Vallée du Paradis", "Piscines naturelles dans les gorges de l''Atlas, à 1 h.", "matin", "nature", 30.5850, -9.5000, "Aourir, Agadir"],
    ["Souk El Had", "Le grand marché aux mille arcades, argan et épices.", "apres-midi", "shopping", 30.4180, -9.5830, "Agadir"],
    ["Thé au coucher du soleil", "Menthe et cornes de gazelle face à l''océan.", "soir", "food", 30.4160, -9.6040, "Agadir"]]'::jsonb);

  -- ─── Égypte : Alexandrie (2j), Hurghada (3j) ─────────────────────
  c := seed_city('EGY', 'Alexandrie', 31.2001, 29.9187, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Bibliotheca Alexandrina", "L''héritière de la bibliothèque antique, disque incliné vers la mer.", "matin", "visit", 31.2089, 29.9092, "Alexandrie"],
    ["Citadelle de Qaitbay", "Le fort mamelouk sur les fondations du Phare.", "apres-midi", "visit", 31.2140, 29.8850, "Alexandrie"],
    ["Corniche et poisson grillé", "Le front de mer au couchant.", "soir", "food", 31.2080, 29.9000, "Alexandrie"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Catacombes de Kom el-Shoqafa", "La nécropole gréco-égyptienne à trois niveaux.", "matin", "visit", 31.1790, 29.8920, "Alexandrie"],
    ["Colonne de Pompée et Sérapéum", "Les vestiges du temple de Sérapis.", "apres-midi", "visit", 31.1820, 29.8960, "Alexandrie"],
    ["Cafés historiques du centre", "Ahwa et pâtisseries dans l''Alexandrie cosmopolite.", "soir", "food", 31.1990, 29.9050, "Alexandrie"]]'::jsonb);

  c := seed_city('EGY', 'Hurghada', 27.2579, 33.8116, 3, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Plongée ou snorkeling en mer Rouge", "Coraux et poissons-clowns des récifs de Giftun.", "matin", "nature", 27.2000, 33.9500, "Hurghada"],
    ["Île de Giftun", "Sable blanc et lagon translucide.", "apres-midi", "beach", 27.1900, 33.9400, "Hurghada"],
    ["Marina d''Hurghada", "Dîner au bord des yachts.", "soir", "food", 27.2280, 33.8440, "Hurghada"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Safari dans le désert oriental", "Quad et village bédouin dans les montagnes rouges.", "matin", "nature", 27.1000, 33.6000, "Hurghada"],
    ["Thé chez les Bédouins", "Pain cuit sous la cendre et dromadaires.", "apres-midi", "food", 27.1010, 33.6010, "Hurghada"],
    ["Ciel étoilé du désert", "Coucher de soleil et étoiles avant le retour.", "soir", "nature", 27.1020, 33.6020, "Hurghada"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Journée bateau et dauphins", "Sortie snorkeling à la rencontre des dauphins.", "matin", "nature", 27.1500, 33.9000, "Hurghada"],
    ["Farniente à bord", "Déjeuner grillé sur le pont entre deux baignades.", "apres-midi", "beach", 27.1510, 33.9010, "Hurghada"],
    ["Vieille ville d''El Dahar", "Souk et mosquée pour la dernière soirée.", "soir", "shopping", 27.2570, 33.8120, "Hurghada"]]'::jsonb);

  -- ─── Émirats : Abu Dhabi (2j) ────────────────────────────────────
  c := seed_city('ARE', 'Abu Dhabi', 24.4539, 54.3773, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Mosquée Cheikh Zayed", "82 coupoles de marbre blanc et le plus grand tapis du monde.", "matin", "visit", 24.4128, 54.4750, "Abu Dhabi"],
    ["Louvre Abu Dhabi", "La pluie de lumière sous le dôme de Jean Nouvel.", "apres-midi", "visit", 24.5330, 54.3980, "Saadiyat, Abu Dhabi"],
    ["Corniche au couchant", "8 km de front de mer face à la skyline.", "soir", "visit", 24.4700, 54.3400, "Abu Dhabi"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Ferrari World ou plage de Saadiyat", "Montagnes russes les plus rapides du monde, ou sable blanc.", "matin", "visit", 24.4830, 54.6070, "Yas Island, Abu Dhabi"],
    ["Qasr Al Watan", "Le palais présidentiel ouvert au public.", "apres-midi", "visit", 24.4620, 54.3060, "Abu Dhabi"],
    ["Dîner sur la marina de Yas", "Circuits F1 illuminés et rooftops.", "soir", "food", 24.4670, 54.6030, "Yas Island, Abu Dhabi"]]'::jsonb);

  -- ─── Inde : Mumbai (2j), Kochi (2j) ──────────────────────────────
  c := seed_city('IND', 'Mumbai', 19.0760, 72.8777, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Gateway of India", "L''arche face à la mer d''Oman, symbole de la ville.", "matin", "visit", 18.9220, 72.8347, "Colaba, Mumbai"],
    ["Gare Chhatrapati Shivaji et Fort", "La gare néogothique Unesco et le quartier victorien.", "apres-midi", "visit", 18.9398, 72.8355, "Fort, Mumbai"],
    ["Marine Drive au couchant", "Le collier de la Reine s''illumine sur la baie.", "soir", "visit", 18.9430, 72.8230, "Mumbai"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Grottes d''Elephanta", "Shiva trimurti sculpté dans l''île, ferry depuis le Gateway.", "matin", "visit", 18.9633, 72.9315, "Elephanta, Mumbai"],
    ["Dhobi Ghat et marché de Crawford", "La laverie géante à ciel ouvert puis les halles.", "apres-midi", "visit", 18.9530, 72.8330, "Mumbai"],
    ["Street food à Juhu Beach", "Pav bhaji et bhel puri sur la plage.", "soir", "food", 19.0970, 72.8260, "Juhu, Mumbai"]]'::jsonb);

  c := seed_city('IND', 'Kochi', 9.9312, 76.2673, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Carrelets chinois de Fort Kochi", "Les filets de pêche géants au lever du jour.", "matin", "visit", 9.9660, 76.2420, "Fort Kochi"],
    ["Mattancherry et ville juive", "Palais hollandais, synagogue Paradesi et entrepôts d''épices.", "apres-midi", "visit", 9.9570, 76.2590, "Mattancherry, Kochi"],
    ["Kathakali", "Maquillage et danse-théâtre du Kerala.", "soir", "night", 9.9650, 76.2430, "Fort Kochi"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Backwaters en houseboat", "Cocotiers et rizières le long des canaux d''Alleppey.", "matin", "nature", 9.4980, 76.3390, "Alleppey, Kerala"],
    ["Déjeuner keralais à bord", "Thali sur feuille de bananier au fil de l''eau.", "apres-midi", "food", 9.4990, 76.3400, "Alleppey, Kerala"],
    ["Retour et dîner à Fort Kochi", "Poisson à la moilee pour finir.", "soir", "food", 9.9655, 76.2425, "Fort Kochi"]]'::jsonb);

  -- ─── Corée du Sud : Jeju (3j), Gyeongju (2j) ─────────────────────
  c := seed_city('KOR', 'Jeju', 33.4996, 126.5312, 3, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Pic Seongsan Ilchulbong", "Le cratère du lever du soleil, Unesco.", "matin", "nature", 33.4580, 126.9425, "Seongsan, Jeju"],
    ["Plongeuses haenyeo", "Les femmes de la mer remontent ormeaux et oursins.", "apres-midi", "visit", 33.4560, 126.9400, "Seongsan, Jeju"],
    ["Fruits de mer à Seongsan", "Le butin des haenyeo au dîner.", "soir", "food", 33.4570, 126.9380, "Seongsan, Jeju"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Ascension du Hallasan", "Le volcan au centre de l''île, plus haut sommet de Corée.", "matin", "nature", 33.3617, 126.5292, "Hallasan, Jeju"],
    ["Tube de lave de Manjanggul", "Un kilomètre sous terre dans le tunnel de lave.", "apres-midi", "nature", 33.5280, 126.7710, "Jeju"],
    ["Marché nocturne de Dongmun", "Poulpe grillé et hallabong au marché de Jeju-ville.", "soir", "food", 33.5120, 126.5270, "Jeju"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Chutes de Cheonjiyeon", "La cascade de l''étang du ciel, côte sud.", "matin", "nature", 33.2470, 126.5540, "Seogwipo, Jeju"],
    ["Côte de Jusangjeolli", "Orgues basaltiques battues par les vagues.", "apres-midi", "nature", 33.2380, 126.4250, "Seogwipo, Jeju"],
    ["Coucher de soleil sur la plage de Hyeopjae", "Sable blanc face à l''île Biyangdo.", "soir", "beach", 33.3940, 126.2400, "Hallim, Jeju"]]'::jsonb);

  c := seed_city('KOR', 'Gyeongju', 35.8562, 129.2247, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Tumuli de Daereungwon", "Les collines-tombeaux des rois de Silla en pleine ville.", "matin", "visit", 35.8380, 129.2110, "Gyeongju"],
    ["Observatoire Cheomseongdae et Wolji", "La plus vieille tour astronomique d''Asie puis l''étang royal.", "apres-midi", "visit", 35.8347, 129.2190, "Gyeongju"],
    ["Étang Wolji illuminé", "Les pavillons reflétés, l''image de Gyeongju.", "soir", "visit", 35.8340, 129.2260, "Gyeongju"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Temple Bulguksa", "Le chef-d''œuvre du bouddhisme Silla, Unesco.", "matin", "visit", 35.7900, 129.3320, "Gyeongju"],
    ["Grotte de Seokguram", "Le Bouddha de granit face à la mer de l''Est, au-dessus du temple.", "apres-midi", "visit", 35.7950, 129.3490, "Gyeongju"],
    ["Village hanok de Gyochon", "Maisons traditionnelles et cuisine de Silla.", "soir", "food", 35.8290, 129.2130, "Gyeongju"]]'::jsonb);

  -- ─── Vietnam : Hué (2j), Da Nang (2j), Sapa (2j) ─────────────────
  c := seed_city('VNM', 'Hué', 16.4637, 107.5909, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Cité impériale de Hué", "La Cité pourpre interdite des Nguyễn, Unesco.", "matin", "visit", 16.4700, 107.5790, "Hué"],
    ["Pagode de la Dame céleste", "La tour octogonale au bord de la rivière des Parfums.", "apres-midi", "visit", 16.4530, 107.5450, "Hué"],
    ["Croisière au couchant sur la rivière des Parfums", "Sampan et chants de Hué.", "soir", "visit", 16.4650, 107.5850, "Hué"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Tombeau de Tu Duc", "Le mausolée-jardin du poète empereur.", "matin", "visit", 16.4360, 107.5560, "Hué"],
    ["Tombeau de Khai Dinh", "Mosaïques de verre et béton flamboyant à flanc de colline.", "apres-midi", "visit", 16.4200, 107.5900, "Hué"],
    ["Bun bo Hué au marché Dong Ba", "La soupe emblématique dans son berceau.", "soir", "food", 16.4700, 107.5870, "Hué"]]'::jsonb);

  c := seed_city('VNM', 'Da Nang', 16.0544, 108.2022, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Montagnes de Marbre", "Grottes-sanctuaires et pagodes dans les pitons calcaires.", "matin", "visit", 16.0040, 108.2630, "Da Nang"],
    ["Plage de My Khe", "Le sable blanc des GIs devenu spot de surf.", "apres-midi", "beach", 16.0550, 108.2470, "Da Nang"],
    ["Pont du Dragon", "Le dragon crache du feu le week-end à 21 h.", "soir", "visit", 16.0610, 108.2270, "Da Nang"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Col des Nuages (Hai Van)", "La route panoramique entre mer et jungle.", "matin", "nature", 16.2000, 108.1300, "Da Nang"],
    ["Péninsule de Son Tra", "La Dame Bouddha géante et les singes doucs.", "apres-midi", "nature", 16.1000, 108.2780, "Da Nang"],
    ["Fruits de mer sur la plage", "Langoustes et coquillages grillés les pieds dans le sable.", "soir", "food", 16.0600, 108.2460, "Da Nang"]]'::jsonb);

  c := seed_city('VNM', 'Sapa', 22.3364, 103.8438, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Rizières en terrasses de Muong Hoa", "Randonnée dans la vallée sculptée par les Hmong.", "matin", "nature", 22.3100, 103.8700, "Sapa"],
    ["Villages de Lao Chai et Ta Van", "Rencontre avec les minorités Hmong et Giay.", "apres-midi", "visit", 22.3000, 103.8800, "Sapa"],
    ["Marché de Sapa", "Brocarts et barbecue de montagne le soir.", "soir", "food", 22.3360, 103.8440, "Sapa"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Fansipan en téléphérique", "Le toit de l''Indochine à 3 143 m.", "matin", "nature", 22.3030, 103.7750, "Sapa"],
    ["Cascade d''Amour et col de Tram Ton", "La chute de 30 m sur la route du col.", "apres-midi", "nature", 22.3600, 103.7750, "Sapa"],
    ["Soirée au coin du feu", "Thé des montagnes et vin de maïs.", "soir", "food", 22.3365, 103.8430, "Sapa"]]'::jsonb);

  -- ─── Malaisie : Malacca (1j), Kota Kinabalu (2j) ─────────────────
  c := seed_city('MYS', 'Malacca', 2.1896, 102.2501, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Place hollandaise et Stadthuys", "Les façades rouge brique de la colonie hollandaise.", "matin", "visit", 2.1940, 102.2490, "Malacca"],
    ["Jonker Street et temples", "Antiquaires, temple Cheng Hoon Teng et mosquée Kampung Kling.", "apres-midi", "visit", 2.1960, 102.2460, "Malacca"],
    ["Night market de Jonker Walk", "Satay celup et durian le week-end.", "soir", "food", 2.1955, 102.2465, "Malacca"]]'::jsonb);

  c := seed_city('MYS', 'Kota Kinabalu', 5.9804, 116.0735, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Îles du parc Tunku Abdul Rahman", "Snorkeling à Sapi ou Manukan, à 20 minutes de bateau.", "matin", "nature", 5.9700, 116.0100, "Kota Kinabalu"],
    ["Plage et coraux", "Farniente et poissons-perroquets.", "apres-midi", "beach", 5.9720, 116.0080, "Kota Kinabalu"],
    ["Marché de nuit du front de mer", "Poissons grillés au coucher de soleil le plus célèbre de Bornéo.", "soir", "food", 5.9880, 116.0720, "Kota Kinabalu"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Parc du mont Kinabalu", "Sentiers botaniques au pied du géant de 4 095 m.", "matin", "nature", 6.0090, 116.5420, "Kundasang, Sabah"],
    ["Sources chaudes de Poring", "Bains sulfureux et passerelle dans la canopée.", "apres-midi", "nature", 6.0450, 116.7000, "Ranau, Sabah"],
    ["Retour et dîner de fruits de mer", "Crabe au piment sur le port.", "soir", "food", 5.9820, 116.0740, "Kota Kinabalu"]]'::jsonb);

  -- ─── Indonésie : Jakarta (1j), Labuan Bajo (2j), Gili Trawangan (2j) ──
  c := seed_city('IDN', 'Jakarta', -6.2088, 106.8456, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Kota Tua", "La vieille Batavia hollandaise et le musée Fatahillah.", "matin", "visit", -6.1350, 106.8130, "Jakarta"],
    ["Monas et mosquée Istiqlal", "La flamme dorée de l''indépendance et la plus grande mosquée d''Asie du Sud-Est.", "apres-midi", "visit", -6.1754, 106.8272, "Jakarta"],
    ["Street food à Glodok", "Le Chinatown de Jakarta, nouilles et satay.", "soir", "food", -6.1450, 106.8130, "Jakarta"]]'::jsonb);

  c := seed_city('IDN', 'Labuan Bajo', -8.4964, 119.8877, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Dragons de Komodo à Rinca", "Les varans géants dans le parc national, Unesco.", "matin", "nature", -8.6530, 119.7160, "Parc national de Komodo"],
    ["Plage rose (Pink Beach)", "Le sable corail entre deux plongées.", "apres-midi", "beach", -8.6280, 119.6710, "Parc national de Komodo"],
    ["Coucher de soleil sur le port", "Les îles en silhouette depuis une paillote.", "soir", "food", -8.4960, 119.8790, "Labuan Bajo"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Point de vue de Padar", "La crête aux trois baies, l''image de l''Indonésie.", "matin", "nature", -8.6580, 119.5750, "Padar, Komodo"],
    ["Snorkeling avec les raies manta", "Manta Point et jardins de corail.", "apres-midi", "nature", -8.6350, 119.6200, "Parc national de Komodo"],
    ["Fruits de mer au night market", "Poisson grillé au retour de mer.", "soir", "food", -8.4970, 119.8780, "Labuan Bajo"]]'::jsonb);

  c := seed_city('IDN', 'Gili Trawangan', -8.3510, 116.0390, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Snorkeling avec les tortues", "Tortues vertes à quelques mètres du bord.", "matin", "nature", -8.3480, 116.0400, "Gili Trawangan"],
    ["Tour de l''île à vélo", "Aucune voiture : vélo et charrettes à cheval seulement.", "apres-midi", "nature", -8.3510, 116.0390, "Gili Trawangan"],
    ["Coucher de soleil aux balançoires", "Les swings dans l''eau face au mont Agung de Bali.", "soir", "nature", -8.3530, 116.0330, "Gili Trawangan"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Plongée aux Gilis", "Requins pointe blanche et jardins de corail.", "matin", "nature", -8.3500, 116.0420, "Gili Trawangan"],
    ["Farniente côté est", "Transats et eau turquoise.", "apres-midi", "beach", -8.3490, 116.0450, "Gili Trawangan"],
    ["Night market de Gili T", "Barbecue de poisson sur la place centrale.", "soir", "food", -8.3505, 116.0430, "Gili Trawangan"]]'::jsonb);

  -- ─── Canada : Victoria (2j), Halifax (2j) ────────────────────────
  c := seed_city('CAN', 'Victoria', 48.4284, -123.3656, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Inner Harbour et Parlement", "Le port victorien et le Fairmont Empress.", "matin", "visit", 48.4220, -123.3700, "Victoria"],
    ["Royal BC Museum", "Premières Nations et histoire naturelle de la côte Ouest.", "apres-midi", "visit", 48.4197, -123.3670, "Victoria"],
    ["Fisherman''s Wharf", "Maisons flottantes colorées et fish and chips.", "soir", "food", 48.4220, -123.3830, "Victoria"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Butchart Gardens", "L''ancienne carrière devenue jardin somptueux.", "matin", "nature", 48.5636, -123.4700, "Brentwood Bay, Victoria"],
    ["Observation des baleines", "Orques résidentes du détroit de Juan de Fuca.", "apres-midi", "nature", 48.4200, -123.3900, "Victoria"],
    ["Thé à l''anglaise ou pub du port", "La plus britannique des villes canadiennes.", "soir", "food", 48.4250, -123.3680, "Victoria"]]'::jsonb);

  c := seed_city('CAN', 'Halifax', 44.6488, -63.5752, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Citadelle d''Halifax", "Le fort en étoile et le coup de canon de midi.", "matin", "visit", 44.6475, -63.5804, "Halifax"],
    ["Waterfront et musée maritime", "Le plus long front de mer piéton du monde, mémoire du Titanic.", "apres-midi", "visit", 44.6480, -63.5690, "Halifax"],
    ["Homard sur le port", "Lobster roll et bière des Maritimes.", "soir", "food", 44.6470, -63.5700, "Halifax"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Peggy''s Cove", "Le phare le plus photographié du Canada sur ses rochers de granit.", "matin", "nature", 44.4920, -63.9150, "Peggy''s Cove, Nouvelle-Écosse"],
    ["Lunenburg", "Le port Unesco aux façades rouges des grands bancs.", "apres-midi", "visit", 44.3770, -64.3180, "Lunenburg, Nouvelle-Écosse"],
    ["Retour et soirée sur Argyle Street", "Pubs et musique celtique.", "soir", "night", 44.6480, -63.5750, "Halifax"]]'::jsonb);
END $$;
