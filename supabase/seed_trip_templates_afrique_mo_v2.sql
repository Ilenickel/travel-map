-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux v2 — Maroc, Égypte, Émirats, Inde
-- (après helpers + les seed_trip_templates_<pays>.sql respectifs)
-- Un groupe DENSE par pays, variante chargée du classique v1 :
--   - MAR 7 jours : Marrakech (4j, + excursion Essaouira) → Casablanca (1j) → Fès (2j)
--   - EGY 8 jours : Le Caire (3j) → Louxor (3j) → Assouan (2j)
--   - ARE 5 jours : Dubaï (+ excursion Abu Dhabi)
--   - IND 7 jours : triangle d'or Delhi (3j) → Agra (1j) → Jaipur (3j)
-- Relance : par pays, supprimer tout l'éditorial du pays puis rejouer
-- v1 PUIS ce fichier (et la partie du pays dans solo_cities.sql le cas échéant).
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── MAR : 7 jours Marrakech (+ Essaouira) → Casablanca → Fès ────
  g := seed_group('MAR', 7);

  -- Marrakech (4 jours : 3 propres + 1 excursion Essaouira en jour 3).
  c := seed_city('MAR', 'Marrakech', 31.6295, -7.9811, 4, g, 1, 0);
  -- J1 sud de la médina : Koutoubia → Bahia → Badi → tombeaux (voisins),
  -- Jemaa el-Fna à la nuit tombée.
  PERFORM seed_day(c, 1, '[
    ["Koutoubia", "Le minaret phare de la ville, jardins de roses au pied.", "matin", "visit", 31.6236, -7.9938, "Marrakech"],
    ["Palais de la Bahia", "150 pièces de zelliges et cèdre peint.", "matin", "visit", 31.6218, -7.9822, "Marrakech"],
    ["Palais El Badi", "Les cigognes sur les remparts du palais ruiné.", "apres-midi", "visit", 31.6180, -7.9860, "Marrakech"],
    ["Tombeaux saadiens", "Marbre de Carrare et stucs dorés cachés des siècles.", "apres-midi", "visit", 31.6170, -7.9890, "Marrakech"],
    ["Jemaa el-Fna", "Charmeurs, conteurs et fumées de grillades — le grand théâtre du soir.", "soir", "food", 31.6258, -7.9891, "Marrakech"]]'::jsonb);
  -- J2 nord : Majorelle → souks → medersa, dîner en riad.
  PERFORM seed_day(c, 2, '[
    ["Jardin Majorelle et musée YSL", "Le bleu Majorelle sous les bambous (réserver).", "matin", "nature", 31.6417, -8.0035, "Guéliz, Marrakech"],
    ["Souks de la médina", "Tanneurs, dinandiers et teinturiers, l''art de se perdre.", "apres-midi", "shopping", 31.6290, -7.9880, "Médina, Marrakech"],
    ["Medersa Ben Youssef", "La plus belle école coranique du Maghreb, restaurée.", "apres-midi", "visit", 31.6320, -7.9860, "Médina, Marrakech"],
    ["Dîner sur une terrasse de riad", "Tajine et pastilla au-dessus des toits.", "soir", "food", 31.6300, -7.9890, "Médina, Marrakech"]]'::jsonb);
  -- Excursion Essaouira (jour 3).
  e := seed_daytrip('MAR', 'Essaouira', 31.5085, -9.7595, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Remparts de la Skala", "Canons face à l''Atlantique, médina bleue et blanche Unesco.", "matin", "visit", 31.5130, -9.7700, "Essaouira"],
    ["Port de pêche", "Barques bleues et mouettes autour des sardines.", "apres-midi", "visit", 31.5060, -9.7720, "Essaouira"],
    ["Souks et thuya", "Marqueterie et galeries dans la médina.", "apres-midi", "shopping", 31.5120, -9.7690, "Essaouira"],
    ["Retour et soirée à Marrakech", "Thé à la menthe sur Jemaa el-Fna.", "soir", "food", 31.6258, -7.9891, "Marrakech"]]'::jsonb);
  -- J4 : Ménara, hammam, dernière soirée.
  PERFORM seed_day(c, 4, '[
    ["Jardin de la Ménara", "Le bassin et son pavillon face à l''Atlas enneigé.", "matin", "nature", 31.6130, -8.0210, "Marrakech"],
    ["Hammam traditionnel", "Gommage au savon noir et rhassoul, rituel marocain.", "apres-midi", "visit", 31.6290, -7.9900, "Médina, Marrakech"],
    ["Jardin secret de la médina", "L''oasis andalouse cachée entre les souks.", "apres-midi", "nature", 31.6310, -7.9880, "Médina, Marrakech"],
    ["Dîner-spectacle aux abords de la place", "Gnaouas et youyous pour la dernière nuit.", "soir", "night", 31.6250, -7.9890, "Marrakech"]]'::jsonb);

  -- Casablanca (1 jour, étape vers Fès).
  c := seed_city('MAR', 'Casablanca', 33.5731, -7.5898, 1, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Mosquée Hassan II", "Le minaret de 210 m posé sur l''océan, visite intérieure.", "matin", "visit", 33.6083, -7.6325, "Casablanca"],
    ["Quartier des Habous", "La médina Art déco des années 30, pâtisseries Bennis.", "apres-midi", "visit", 33.5810, -7.6110, "Casablanca"],
    ["Corniche d''Aïn Diab", "Coucher de soleil sur l''Atlantique.", "soir", "visit", 33.5940, -7.6690, "Casablanca"]]'::jsonb);

  -- Fès (2 jours).
  c := seed_city('MAR', 'Fès', 34.0181, -5.0078, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Bab Boujloud et Fès el-Bali", "La porte bleue puis la plus grande médina piétonne du monde.", "matin", "visit", 34.0620, -4.9830, "Fès"],
    ["Medersa Bou Inania", "Le chef-d''œuvre mérinide à l''entrée de la médina.", "matin", "visit", 34.0617, -4.9840, "Fès"],
    ["Tanneries Chouara", "Les cuves multicolores depuis les terrasses des maroquiniers.", "apres-midi", "visit", 34.0660, -4.9700, "Fès"],
    ["Place Seffarine", "Les dinandiers au marteau autour du plus vieux son de Fès.", "apres-midi", "visit", 34.0640, -4.9720, "Fès"],
    ["Dîner dans un palais de la médina", "Pastilla au pigeon sous les zelliges.", "soir", "food", 34.0630, -4.9780, "Fès"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Medersa Attarine et Karaouiyine", "Le cœur savant : la plus ancienne université du monde.", "matin", "visit", 34.0645, -4.9730, "Fès"],
    ["Tombeaux mérinides", "La médina entière depuis les hauteurs, au couchant doré.", "apres-midi", "nature", 34.0700, -4.9860, "Fès"],
    ["Fès el-Jdid et mellah", "Le quartier juif et ses balcons de bois.", "apres-midi", "visit", 34.0550, -4.9920, "Fès"],
    ["Thé et pâtisseries pour finir", "Cornes de gazelle sur une terrasse.", "soir", "food", 34.0625, -4.9800, "Fès"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── EGY : 8 jours Le Caire → Louxor → Assouan ───────────────────
  g := seed_group('EGY', 8);

  c := seed_city('EGY', 'Le Caire', 30.0444, 31.2357, 3, g, 1, 0);
  -- J1 : Gizeh puis Saqqarah/Memphis (au sud), son et lumière le soir.
  PERFORM seed_day(c, 1, '[
    ["Pyramides de Gizeh et Sphinx", "Kheops, Khephren, Mykérinos — dès l''ouverture.", "matin", "visit", 29.9792, 31.1342, "Gizeh, Le Caire"],
    ["Pyramide à degrés de Saqqarah", "La première pyramide de l''histoire, au sud du plateau.", "apres-midi", "visit", 29.8710, 31.2160, "Saqqarah"],
    ["Memphis", "Le colosse de Ramsès II couché dans l''ancienne capitale.", "apres-midi", "visit", 29.8440, 31.2500, "Mit Rahina"],
    ["Son et lumière aux pyramides", "Le Sphinx conteur sous les étoiles.", "soir", "night", 29.9770, 31.1360, "Gizeh, Le Caire"]]'::jsonb);
  -- J2 : GEM → citadelle → Khan el-Khalili.
  PERFORM seed_day(c, 2, '[
    ["Grand Musée égyptien (GEM)", "Le trésor de Toutânkhamon au complet, face aux pyramides.", "matin", "visit", 29.9940, 31.1190, "Gizeh, Le Caire"],
    ["Citadelle de Saladin et mosquée Mohamed Ali", "L''albâtre ottoman au-dessus de la ville.", "apres-midi", "visit", 30.0287, 31.2599, "Le Caire"],
    ["Rue Al-Muizz", "Le musée à ciel ouvert du Caire fatimide, en descendant vers le souk.", "apres-midi", "visit", 30.0500, 31.2610, "Le Caire islamique"],
    ["Khan el-Khalili", "Le grand souk et le café Fishawi, ouvert depuis 250 ans.", "soir", "shopping", 30.0477, 31.2622, "Le Caire"]]'::jsonb);
  -- J3 : Caire copte → Ibn Touloun → felouque au couchant.
  PERFORM seed_day(c, 3, '[
    ["Vieux Caire copte", "Église suspendue et synagogue Ben Ezra.", "matin", "visit", 30.0060, 31.2300, "Le Caire copte"],
    ["Mosquée Ibn Touloun", "Le minaret à escalier extérieur, la plus vieille intacte d''Égypte.", "apres-midi", "visit", 30.0290, 31.2500, "Le Caire"],
    ["Parc Al-Azhar", "Les jardins suspendus face à la citadelle.", "apres-midi", "nature", 30.0400, 31.2650, "Le Caire"],
    ["Felouque sur le Nil au couchant", "La voile latine dans le soir cairote.", "soir", "nature", 30.0350, 31.2240, "Le Caire"]]'::jsonb);

  c := seed_city('EGY', 'Louxor', 25.6872, 32.6396, 3, g, 2, 3);
  -- J1 rive est : Karnak → temple de Louxor (reliés par l''allée des sphinx).
  PERFORM seed_day(c, 1, '[
    ["Temple de Karnak", "La forêt de colonnes de la salle hypostyle, dès l''ouverture.", "matin", "visit", 25.7188, 32.6573, "Louxor"],
    ["Allée des sphinx", "Les 2 700 m de sphinx reliant Karnak à Louxor, rouverte en 2021.", "apres-midi", "visit", 25.7100, 32.6480, "Louxor"],
    ["Temple de Louxor", "Ramsès II et la mosquée posée sur le temple.", "apres-midi", "visit", 25.6996, 32.6390, "Louxor"],
    ["Souk de Louxor et temple illuminé", "Épices puis colonnes dorées de nuit.", "soir", "visit", 25.7000, 32.6400, "Louxor"]]'::jsonb);
  -- J2 rive ouest du nord au sud : Rois → Hatchepsout → Memnon.
  PERFORM seed_day(c, 2, '[
    ["Vallée des Rois", "Trois tombeaux au choix, celui de Toutânkhamon en option.", "matin", "visit", 25.7402, 32.6014, "Rive ouest, Louxor"],
    ["Temple d''Hatchepsout", "Les terrasses de la reine-pharaon adossées à la falaise.", "apres-midi", "visit", 25.7380, 32.6065, "Deir el-Bahari, Louxor"],
    ["Colosses de Memnon", "Les deux géants de 18 m gardiens de la plaine.", "apres-midi", "visit", 25.7205, 32.6105, "Rive ouest, Louxor"],
    ["Dîner sur une terrasse face au Nil", "La rive ouest embrasée au couchant.", "soir", "food", 25.6990, 32.6380, "Louxor"]]'::jsonb);
  -- J3 : montgolfière à l''aube, Médinet Habou, felouque le soir.
  PERFORM seed_day(c, 3, '[
    ["Montgolfière au lever du soleil", "La Vallée des Rois et le Nil depuis le ciel.", "matin", "nature", 25.7300, 32.6100, "Rive ouest, Louxor"],
    ["Médinet Habou", "Le temple de Ramsès III aux reliefs colorés, sous-estimé.", "apres-midi", "visit", 25.7190, 32.6010, "Rive ouest, Louxor"],
    ["Musée de Louxor", "Statues du cachette de Karnak, superbement présentées.", "apres-midi", "visit", 25.7040, 32.6400, "Louxor"],
    ["Felouque au fil du Nil", "Dernière soirée à la voile.", "soir", "nature", 25.7000, 32.6380, "Louxor"]]'::jsonb);

  c := seed_city('EGY', 'Assouan', 24.0889, 32.8998, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Temple de Philae", "Le sanctuaire d''Isis sauvé des eaux, en barque.", "matin", "visit", 24.0256, 32.8846, "Assouan"],
    ["Obélisque inachevé", "Le géant de 42 m resté dans sa carrière de granit.", "apres-midi", "visit", 24.0770, 32.8950, "Assouan"],
    ["Haut barrage d''Assouan", "Le lac Nasser à perte de vue.", "apres-midi", "visit", 23.9700, 32.8770, "Assouan"],
    ["Souk d''Assouan", "Épices, karkadé et vannerie nubienne.", "soir", "shopping", 24.0890, 32.8990, "Assouan"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Abou Simbel", "Les colosses de Ramsès II au bord du lac Nasser, départ à l''aube.", "matin", "visit", 22.3372, 31.6258, "Abou Simbel"],
    ["Temple de Néfertari", "Le temple d''Hathor dédié à la grande épouse, à côté.", "matin", "visit", 22.3360, 31.6250, "Abou Simbel"],
    ["Village nubien de Gharb Soheil", "Maisons bleues et thé au bord du Nil, au retour.", "apres-midi", "visit", 24.0560, 32.8710, "Assouan"],
    ["Felouque autour de l''île Éléphantine", "Dernier couchant sur la première cataracte.", "soir", "nature", 24.0860, 32.8880, "Assouan"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── ARE : 5 jours Dubaï dense (+ Abu Dhabi) ─────────────────────
  g := seed_group('ARE', 5);
  c := seed_city('ARE', 'Dubaï', 25.2048, 55.2708, 5, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Burj Khalifa — At the Top", "La plus haute tour du monde, 555 m au 148e étage.", "matin", "visit", 25.1972, 55.2744, "Downtown, Dubaï"],
    ["Dubai Mall et aquarium", "Le plus grand centre commercial du monde, au pied de la tour.", "apres-midi", "shopping", 25.1985, 55.2796, "Downtown, Dubaï"],
    ["Souk Al Bahar", "L''esplanade orientale face au lac du Burj.", "apres-midi", "visit", 25.1950, 55.2760, "Downtown, Dubaï"],
    ["Spectacle des fontaines de Dubaï", "Le ballet d''eau au pied de la tour illuminée.", "soir", "visit", 25.1955, 55.2755, "Downtown, Dubaï"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Quartier historique d''Al Fahidi", "Tours à vent et ruelles de gypse du vieux Dubaï.", "matin", "visit", 25.2637, 55.2972, "Bur Dubai, Dubaï"],
    ["Traversée du Creek en abra", "Le bac en bois à un dirham, immuable.", "matin", "visit", 25.2660, 55.2970, "Dubaï"],
    ["Souks de l''or et des épices", "Vitrines rutilantes et sacs de safran à Deira.", "apres-midi", "shopping", 25.2680, 55.2970, "Deira, Dubaï"],
    ["Dîner-croisière en dhow", "Le Creek illuminé depuis un boutre traditionnel.", "soir", "food", 25.2620, 55.3010, "Dubaï"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Kite Beach", "Baignade face à la voile du Burj Al Arab.", "matin", "beach", 25.1450, 55.1930, "Jumeirah, Dubaï"],
    ["Palm Jumeirah et The View", "La palme artificielle depuis son observatoire.", "apres-midi", "visit", 25.1120, 55.1390, "Palm Jumeirah, Dubaï"],
    ["Dubaï Marina", "Dîner au pied des gratte-ciel, promenade des yachts.", "soir", "food", 25.0770, 55.1330, "Marina, Dubaï"]]'::jsonb);
  e := seed_daytrip('ARE', 'Abu Dhabi', 24.4539, 54.3773, c, 3);
  PERFORM seed_day(e, 1, '[
    ["Mosquée Cheikh Zayed", "82 coupoles de marbre blanc et le plus grand tapis du monde.", "matin", "visit", 24.4128, 54.4750, "Abu Dhabi"],
    ["Louvre Abu Dhabi", "La pluie de lumière sous le dôme de Jean Nouvel.", "apres-midi", "visit", 24.5330, 54.3980, "Saadiyat, Abu Dhabi"],
    ["Qasr Al Watan ou corniche", "Le palais présidentiel ou le front de mer, au choix.", "apres-midi", "visit", 24.4620, 54.3060, "Abu Dhabi"],
    ["Retour et soirée à Dubaï", "Vieille ville illuminée ou rooftop Downtown.", "soir", "night", 25.1980, 55.2750, "Dubaï"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Miracle Garden ou Global Village", "150 millions de fleurs sculptées (selon saison).", "matin", "nature", 25.0610, 55.2440, "Dubaï"],
    ["Safari dans les dunes", "4x4 sur le sable rouge de Lahbab, sandboard.", "apres-midi", "nature", 25.0300, 55.6500, "Désert de Dubaï"],
    ["Camp bédouin sous les étoiles", "BBQ, henné et danse du feu pour la dernière nuit.", "soir", "food", 25.0200, 55.6600, "Désert de Dubaï"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── IND : 7 jours triangle d'or Delhi → Agra → Jaipur ───────────
  g := seed_group('IND', 7);

  c := seed_city('IND', 'Delhi', 28.6139, 77.2090, 3, g, 1, 0);
  -- J1 Old Delhi : Fort rouge → Jama Masjid → Chandni Chowk (adjacents).
  PERFORM seed_day(c, 1, '[
    ["Fort rouge", "Les remparts moghols de grès rouge, Unesco.", "matin", "visit", 28.6562, 77.2410, "Old Delhi"],
    ["Jama Masjid", "La grande mosquée de Shah Jahan, montée au minaret.", "matin", "visit", 28.6507, 77.2334, "Old Delhi"],
    ["Chandni Chowk en rickshaw", "Le bazar tentaculaire, paratha et jalebis.", "apres-midi", "food", 28.6560, 77.2300, "Old Delhi"],
    ["Raj Ghat", "Le mémorial de Gandhi au bord de la Yamuna.", "apres-midi", "visit", 28.6400, 77.2490, "Delhi"],
    ["Dîner mughlai chez Karim''s", "L''institution de 1913 près de la mosquée.", "soir", "food", 28.6497, 77.2340, "Old Delhi"]]'::jsonb);
  -- J2 New Delhi du sud au centre : Qutub → Humayun → India Gate.
  PERFORM seed_day(c, 2, '[
    ["Qutub Minar", "Le minaret de victoire de 73 m et son pilier de fer inoxydable.", "matin", "visit", 28.5245, 77.1855, "Mehrauli, Delhi"],
    ["Tombe de Humayun", "Le prototype moghol du Taj Mahal dans ses jardins.", "apres-midi", "visit", 28.5933, 77.2507, "Nizamuddin, Delhi"],
    ["India Gate et Rajpath", "L''arc des Indes et la perspective impériale.", "apres-midi", "visit", 28.6129, 77.2295, "New Delhi"],
    ["Connaught Place", "Les arcades géorgiennes et les restaurants du centre.", "soir", "food", 28.6315, 77.2167, "New Delhi"]]'::jsonb);
  -- J3 : temple du Lotus → Akshardham, Hauz Khas le soir.
  PERFORM seed_day(c, 3, '[
    ["Temple du Lotus", "Les 27 pétales de marbre du temple bahá''í.", "matin", "visit", 28.5535, 77.2588, "Delhi"],
    ["Temple d''Akshardham", "Le gigantesque temple sculpté au bord de la Yamuna.", "apres-midi", "visit", 28.6127, 77.2773, "Delhi"],
    ["Hauz Khas Village", "Ruines médiévales, galeries et cafés autour du bassin.", "soir", "night", 28.5540, 77.1950, "Delhi"]]'::jsonb);

  -- Agra (1 jour).
  c := seed_city('IND', 'Agra', 27.1767, 78.0081, 1, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Taj Mahal au lever du soleil", "Le marbre rose puis blanc — dès l''ouverture des portes.", "matin", "visit", 27.1751, 78.0421, "Agra"],
    ["Fort d''Agra", "Le palais-prison de Shah Jahan face à son chef-d''œuvre.", "apres-midi", "visit", 27.1795, 78.0211, "Agra"],
    ["Tombe d''Itimad-ud-Daulah", "Le Baby Taj aux marqueteries de pierres dures.", "apres-midi", "visit", 27.1930, 78.0310, "Agra"],
    ["Coucher de soleil à Mehtab Bagh", "Le Taj en miroir depuis l''autre rive de la Yamuna.", "soir", "nature", 27.1800, 78.0420, "Agra"]]'::jsonb);

  -- Jaipur (3 jours).
  c := seed_city('IND', 'Jaipur', 26.9124, 75.7873, 3, g, 3, 4);
  -- J1 : Amber au nord → Jal Mahal (sur la route du retour) → City Palace.
  PERFORM seed_day(c, 1, '[
    ["Fort d''Amber", "Miroirs du Sheesh Mahal et remparts sur les crêtes.", "matin", "visit", 26.9855, 75.8513, "Amber, Jaipur"],
    ["Jal Mahal", "Le palais flottant sur le lac, sur la route du retour.", "apres-midi", "visit", 26.9535, 75.8460, "Jaipur"],
    ["City Palace", "La résidence du maharaja, cours et portes peintes.", "apres-midi", "visit", 26.9258, 75.8237, "Jaipur"],
    ["Bazars de la vieille ville rose", "Bracelets, turbans et lassi épais.", "soir", "shopping", 26.9230, 75.8250, "Jaipur"]]'::jsonb);
  -- J2 : Hawa Mahal → Jantar Mantar (adjacents) → Albert Hall.
  PERFORM seed_day(c, 2, '[
    ["Hawa Mahal", "La façade aux 953 fenêtres, à la lumière du matin.", "matin", "visit", 26.9239, 75.8267, "Jaipur"],
    ["Jantar Mantar", "L''observatoire géant du maharaja astronome, juste à côté.", "matin", "visit", 26.9247, 75.8249, "Jaipur"],
    ["Albert Hall Museum", "Le musée indo-sarrasin entouré de pigeons.", "apres-midi", "visit", 26.9117, 75.8195, "Jaipur"],
    ["Dîner-spectacle à Chokhi Dhani", "Le village rajasthani reconstitué, danses et thali.", "soir", "food", 26.7770, 75.8330, "Jaipur"]]'::jsonb);
  -- J3 : Nahargarh → Galtaji, cinéma Raj Mandir le soir.
  PERFORM seed_day(c, 3, '[
    ["Fort de Nahargarh", "La ville rose entière depuis la muraille des collines.", "matin", "visit", 26.9373, 75.8154, "Jaipur"],
    ["Galtaji, le temple des singes", "Bassins sacrés dans la gorge, macaques en pagaille.", "apres-midi", "visit", 26.9170, 75.8560, "Jaipur"],
    ["Cinéma Raj Mandir", "Un Bollywood dans la salle meringue mythique.", "soir", "night", 26.9150, 75.8080, "Jaipur"]]'::jsonb);
END $$;
