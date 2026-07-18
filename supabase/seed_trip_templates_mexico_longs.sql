-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Mexique voyages LONGS (après helpers ; fichier
-- AUTONOME : à exécuter une seule fois, ne touche pas aux seeds déjà passés)
--   - 20 jours CHILL (1 activité/créneau) : Mexico (4j, + Teotihuacán) →
--     Oaxaca (3j, + Monte Albán) → [vol] Mérida (4j, + Chichén Itzá,
--     + Uxmal) → Valladolid (1j) → Tulum (3j, + Sian Ka'an) → Bacalar (2j)
--     → Cancún (3j, + Isla Mujeres). Le grand tour centre + Yucatán ;
--     la remontée finale Bacalar → Cancún rejoint l'aéroport international.
--     Journées reprises de mexico.sql v1 (Mexico, Oaxaca, Mérida, Tulum,
--     Cancún) ; Valladolid et Bacalar inédites.
--   - 21 jours DENSE : Mexico (4j, + Teotihuacán) → Guanajuato (2j) →
--     Guadalajara (2j) → Puerto Vallarta (3j) → [vol] Mérida (3j,
--     + Chichén Itzá) → Valladolid (1j) → Tulum (3j) → Cancún (3j,
--     + Isla Mujeres). Colonial + Pacifique puis Yucatán d'ouest en est.
--     Journées reprises de mexico_v2 ; Mérida/Valladolid/Tulum/Cancún
--     denses inédites.
-- Relance : DELETE l'éditorial MEX puis rejouer mexico.sql, mexico_v2.sql ET ce fichier.
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 20 jours CHILL : Mexico → Oaxaca → Yucatán ──────────────────
  g := seed_group('MEX', 20);

  c := seed_city('MEX', 'Mexico', 19.4326, -99.1332, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Zócalo et cathédrale métropolitaine", "La place monumentale du centre historique.", "matin", "visit", 19.4326, -99.1332, "Mexico"],
    ["Templo Mayor", "Vestiges du grand temple aztèque de Tenochtitlán.", "apres-midi", "visit", 19.4348, -99.1316, "Mexico"],
    ["Palacio de Bellas Artes", "Coupole Art nouveau et murales de Rivera.", "soir", "visit", 19.4352, -99.1413, "Mexico"]]'::jsonb);
  e := seed_daytrip('MEX', 'Teotihuacán', 19.6925, -98.8438, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Pyramide du Soleil", "Ascension de la 3e plus grande pyramide du monde.", "matin", "visit", 19.6925, -98.8438, "Teotihuacán"],
    ["Allée des Morts et pyramide de la Lune", "L''axe monumental de la cité des dieux.", "apres-midi", "visit", 19.6993, -98.8440, "Teotihuacán"],
    ["Musée du site et retour", "Fresques et obsidienne avant Mexico.", "soir", "visit", 19.6890, -98.8410, "Teotihuacán"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Musée national d''anthropologie", "La pierre du Soleil et les trésors mayas.", "matin", "visit", 19.4260, -99.1863, "Mexico"],
    ["Château et parc de Chapultepec", "Colline royale au-dessus de la ville.", "apres-midi", "nature", 19.4204, -99.1816, "Mexico"],
    ["Paseo de la Reforma", "L''Ange de l''Indépendance illuminé.", "soir", "visit", 19.4270, -99.1677, "Mexico"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Musée Frida Kahlo (Coyoacán)", "La Casa Azul de l''artiste.", "matin", "visit", 19.3551, -99.1626, "Mexico"],
    ["Centre de Coyoacán", "Placettes coloniales et churros.", "apres-midi", "food", 19.3500, -99.1620, "Mexico"],
    ["Barques de Xochimilco", "Trajineras colorées et mariachis sur les canaux.", "soir", "night", 19.2573, -99.1057, "Mexico"]]'::jsonb);

  c := seed_city('MEX', 'Oaxaca', 17.0732, -96.7266, 3, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Zócalo d''Oaxaca et cathédrale", "Cœur colonial sous les lauriers.", "matin", "visit", 17.0617, -96.7250, "Oaxaca"],
    ["Temple Santo Domingo et musée des Cultures", "Baroque doré et trésor de la tombe 7.", "apres-midi", "visit", 17.0654, -96.7233, "Oaxaca"],
    ["Marché 20 de Noviembre", "Tlayudas, mole et grillades au charbon.", "soir", "food", 17.0598, -96.7262, "Oaxaca"]]'::jsonb);
  e := seed_daytrip('MEX', 'Monte Albán', 17.0435, -96.7679, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Grande place de Monte Albán", "Capitale zapotèque sur sa montagne arasée.", "matin", "visit", 17.0435, -96.7679, "Monte Albán"],
    ["Plateforme sud et Danzantes", "Bas-reliefs énigmatiques et panorama sur les vallées.", "apres-midi", "visit", 17.0430, -96.7690, "Monte Albán"],
    ["Atelier d''alebrijes à Arrazola", "Créatures fantastiques en bois peint.", "soir", "shopping", 17.0180, -96.7930, "San Antonio Arrazola"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Hierve el Agua", "Cascades pétrifiées et bassins face au vide.", "matin", "nature", 16.8659, -96.2760, "Hierve el Agua"],
    ["Arbre du Tule", "Le tronc le plus large du monde.", "apres-midi", "nature", 17.0468, -96.6360, "Santa María del Tule"],
    ["Dégustation de mezcal", "Palenque artisanal avant le vol pour le Yucatán.", "soir", "food", 17.0620, -96.7220, "Oaxaca"]]'::jsonb);

  c := seed_city('MEX', 'Mérida', 20.9674, -89.5926, 4, g, 3, 7);
  PERFORM seed_day(c, 1, '[
    ["Plaza Grande et cathédrale", "La plus vieille cathédrale d''Amérique continentale.", "matin", "visit", 20.9670, -89.6237, "Mérida"],
    ["Paseo de Montejo", "Demeures des barons du sisal.", "apres-midi", "visit", 20.9860, -89.6180, "Mérida"],
    ["Marquesitas et vaquería", "Douceurs et danses yucatèques sur la place.", "soir", "food", 20.9680, -89.6230, "Mérida"]]'::jsonb);
  e := seed_daytrip('MEX', 'Chichén Itzá', 20.6843, -88.5678, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Pyramide de Kukulcán", "El Castillo, merveille du monde maya.", "matin", "visit", 20.6843, -88.5678, "Chichén Itzá"],
    ["Grand jeu de balle et cénote sacré", "Le plus vaste terrain rituel de Méso-Amérique.", "apres-midi", "visit", 20.6850, -88.5690, "Chichén Itzá"],
    ["Cénote Ik Kil", "Baignade dans le puits aux lianes.", "soir", "nature", 20.6630, -88.5450, "Ik Kil"]]'::jsonb);
  e := seed_daytrip('MEX', 'Uxmal', 20.3597, -89.7712, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Pyramide du Devin", "Courbes uniques de la grande pyramide d''Uxmal.", "matin", "visit", 20.3597, -89.7712, "Uxmal"],
    ["Quadrilatère des Nonnes et palais du Gouverneur", "Chefs-d''œuvre du style Puuc.", "apres-midi", "visit", 20.3590, -89.7720, "Uxmal"],
    ["Hacienda de la route Puuc", "Dîner dans une hacienda henequenera.", "soir", "food", 20.4500, -89.7000, "Route Puuc"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Celestún", "Flamants roses de la réserve en bateau.", "matin", "nature", 20.8580, -90.3990, "Celestún"],
    ["Plage de Progreso", "Golfe du Mexique et ceviche.", "apres-midi", "beach", 21.2820, -89.6630, "Progreso"],
    ["Dernière soirée à Mérida", "Santa Lucía et sérénade yucatèque.", "soir", "night", 20.9710, -89.6240, "Mérida"]]'::jsonb);

  -- Valladolid (1 jour, sur la route Mérida → Tulum) — inédit.
  c := seed_city('MEX', 'Valladolid', 20.6896, -88.2011, 1, g, 4, 11);
  PERFORM seed_day(c, 1, '[
    ["Centre de Valladolid et cenote Zací", "Façades pastel et gouffre de baignade en pleine ville.", "matin", "visit", 20.6896, -88.2011, "Valladolid"],
    ["Couvent San Bernardino de Siena", "Le couvent-forteresse de 1560 au bout de la calzada.", "apres-midi", "visit", 20.6850, -88.2070, "Valladolid"],
    ["Calzada de los Frailes au couchant", "La rue la plus photogénique du Yucatán.", "soir", "visit", 20.6870, -88.2050, "Valladolid"]]'::jsonb);

  c := seed_city('MEX', 'Tulum', 20.2114, -87.4654, 3, g, 5, 12);
  PERFORM seed_day(c, 1, '[
    ["Ruines de Tulum", "La cité maya perchée sur sa falaise turquoise.", "matin", "visit", 20.2145, -87.4290, "Tulum"],
    ["Plage de Tulum", "Cocotiers et eau translucide sous les ruines.", "apres-midi", "beach", 20.2080, -87.4320, "Tulum"],
    ["Zone hôtelière bohème", "Dîner les pieds dans le sable.", "soir", "food", 20.1750, -87.4470, "Tulum"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Gran Cenote", "Nage dans un gouffre cristallin aux tortues.", "matin", "nature", 20.2469, -87.4634, "Tulum"],
    ["Cenote Dos Ojos", "Plongée dans deux yeux d''eau reliés sous terre.", "apres-midi", "nature", 20.3240, -87.3900, "Tulum"],
    ["Centre-ville de Tulum", "Tacos et mezcalerias de l''avenue principale.", "soir", "food", 20.2114, -87.4654, "Tulum"]]'::jsonb);
  e := seed_daytrip('MEX', 'Sian Ka''an', 19.9330, -87.6320, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Réserve de biosphère de Sian Ka''an", "Lagunes, mangroves et dauphins.", "matin", "nature", 19.9330, -87.6320, "Sian Ka''an"],
    ["Canaux mayas flottants", "Dérive dans les canaux millénaires.", "apres-midi", "nature", 19.9200, -87.6400, "Sian Ka''an"],
    ["Punta Allen", "Village de pêcheurs au bout de la piste.", "soir", "nature", 19.7920, -87.4750, "Punta Allen"]]'::jsonb);

  -- Bacalar (2 jours) — inédit, la lagune aux sept couleurs au sud.
  c := seed_city('MEX', 'Bacalar', 18.6813, -88.3894, 2, g, 6, 15);
  PERFORM seed_day(c, 1, '[
    ["Lagune aux sept couleurs", "Paddle ou voilier sur les dégradés de bleu.", "matin", "nature", 18.6813, -88.3894, "Bacalar"],
    ["Fort San Felipe", "Le fortin anti-pirates au-dessus de la lagune.", "apres-midi", "visit", 18.6770, -88.3880, "Bacalar"],
    ["Balnéario au couchant", "Hamacs dans l''eau et dernier plongeon du jour.", "soir", "nature", 18.6700, -88.3900, "Bacalar"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Cenote Azul", "Le gouffre de 90 m de profondeur au bord de la lagune.", "matin", "nature", 18.6460, -88.4090, "Bacalar"],
    ["Canal des Pirates", "Bancs de sable blanc et eau à hauteur de genoux.", "apres-midi", "nature", 18.6560, -88.3810, "Bacalar"],
    ["Dîner au bord de la lagune", "Avant la remontée vers Cancún.", "soir", "food", 18.6800, -88.3890, "Bacalar"]]'::jsonb);

  -- Cancún (3 jours) — remontée finale vers l'aéroport international.
  c := seed_city('MEX', 'Cancún', 21.1619, -86.8515, 3, g, 7, 17);
  PERFORM seed_day(c, 1, '[
    ["Playa Delfines", "La plage publique au mirador emblématique.", "matin", "beach", 21.0632, -86.7787, "Cancún"],
    ["Zone hôtelière et lagune Nichupté", "Sable blanc et mangrove.", "apres-midi", "beach", 21.1214, -86.7620, "Cancún"],
    ["Marché 28 et centre-ville", "Souvenirs et tacos al pastor.", "soir", "food", 21.1620, -86.8280, "Cancún"]]'::jsonb);
  e := seed_daytrip('MEX', 'Isla Mujeres', 21.2322, -86.7340, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Ferry et Playa Norte", "L''une des plus belles plages du Mexique.", "matin", "beach", 21.2622, -86.7529, "Isla Mujeres"],
    ["Snorkeling au récif El Farito", "Poissons tropicaux et statue sous-marine.", "apres-midi", "beach", 21.2400, -86.7450, "Isla Mujeres"],
    ["Punta Sur en voiturette", "Falaises et temple d''Ixchel au couchant.", "soir", "nature", 21.2030, -86.7100, "Isla Mujeres"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Ruines d''El Rey", "Site maya au milieu des iguanes.", "matin", "visit", 21.0570, -86.7790, "Cancún"],
    ["Musée maya de Cancún", "Collections du Yucatán préhispanique.", "apres-midi", "visit", 21.0640, -86.7800, "Cancún"],
    ["Coucher de soleil sur la lagune", "Catamaran ou terrasse pour la dernière soirée du voyage.", "soir", "night", 21.1100, -86.7650, "Cancún"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 21 jours DENSE : colonial + Pacifique + Yucatán ─────────────
  g := seed_group('MEX', 21);

  -- Mexico (4 jours : 3 propres + 1 excursion Teotihuacán en jour 3).
  c := seed_city('MEX', 'Mexico', 19.4326, -99.1332, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Zócalo et cathédrale métropolitaine", "La place géante au cœur de l''ancienne Tenochtitlán.", "matin", "visit", 19.4326, -99.1332, "Centro Histórico, Mexico"],
    ["Templo Mayor", "Les ruines du grand temple aztèque, à l''angle du Zócalo.", "matin", "visit", 19.4348, -99.1310, "Centro Histórico, Mexico"],
    ["Palais national et fresques de Diego Rivera", "L''histoire du Mexique peinte sur les murs du pouvoir.", "apres-midi", "visit", 19.4321, -99.1312, "Centro Histórico, Mexico"],
    ["Palais des Beaux-Arts", "Coupole orange Art déco et murales, en descendant l''Alameda.", "apres-midi", "visit", 19.4352, -99.1413, "Centro, Mexico"],
    ["Place Garibaldi", "Mariachis et tequila pour la première soirée.", "soir", "night", 19.4410, -99.1390, "Mexico"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Château de Chapultepec", "Le seul château royal des Amériques, sur sa colline.", "matin", "visit", 19.4204, -99.1819, "Chapultepec, Mexico"],
    ["Musée national d''anthropologie", "Pierre du Soleil et trésors mayas — l''un des plus grands musées du monde.", "apres-midi", "visit", 19.4260, -99.1863, "Chapultepec, Mexico"],
    ["Dîner à Polanco", "La table gastronomique de la capitale, au nord du parc.", "soir", "food", 19.4330, -99.1910, "Polanco, Mexico"]]'::jsonb);
  e := seed_daytrip('MEX', 'Teotihuacán', 19.6925, -98.8438, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Pyramide du Soleil", "La troisième plus grande pyramide du monde, tôt avant la foule.", "matin", "visit", 19.6925, -98.8438, "Teotihuacán"],
    ["Allée des Morts et pyramide de la Lune", "Remontée de l''axe monumental de la cité des dieux.", "apres-midi", "visit", 19.6997, -98.8441, "Teotihuacán"],
    ["Dîner à Roma Norte", "Retour en ville, tacos et mezcal dans le quartier branché.", "soir", "food", 19.4190, -99.1620, "Roma Norte, Mexico"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Musée Frida Kahlo", "La Casa Azul de Coyoacán (réserver).", "matin", "visit", 19.3550, -99.1626, "Coyoacán, Mexico"],
    ["Centre de Coyoacán", "Placettes coloniales, churros et marché artisanal.", "matin", "visit", 19.3500, -99.1620, "Coyoacán, Mexico"],
    ["Trajineras de Xochimilco", "Barques fleuries sur les canaux aztèques, plus au sud.", "apres-midi", "visit", 19.2570, -99.1030, "Xochimilco, Mexico"],
    ["Lucha libre à l''Arena México", "Masques et voltige, l''autre religion nationale.", "soir", "night", 19.4227, -99.1520, "Doctores, Mexico"]]'::jsonb);

  -- Guanajuato (2 jours).
  c := seed_city('MEX', 'Guanajuato', 21.0190, -101.2574, 2, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Monument au Pípila", "Montée en funiculaire, la ville multicolore aux pieds.", "matin", "visit", 21.0163, -101.2544, "Guanajuato"],
    ["Théâtre Juárez et centre", "Façade à colonnes et placettes de la ville minière Unesco.", "apres-midi", "visit", 21.0169, -101.2544, "Guanajuato"],
    ["Callejón del Beso", "La ruelle si étroite que les balcons s''embrassent.", "apres-midi", "visit", 21.0140, -101.2570, "Guanajuato"],
    ["Callejoneada avec les estudiantinas", "Sérénade en déambulant dans les ruelles la nuit.", "soir", "night", 21.0170, -101.2550, "Guanajuato"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée des momies", "La collection la plus étrange du Mexique.", "matin", "visit", 21.0225, -101.2650, "Guanajuato"],
    ["Mine et église de La Valenciana", "La mine d''argent qui finança un empire, retable doré.", "apres-midi", "visit", 21.0330, -101.2570, "La Valenciana, Guanajuato"],
    ["Plaza de la Paz", "Basilique jaune et dernière soirée sous les lauriers.", "soir", "food", 21.0175, -101.2555, "Guanajuato"]]'::jsonb);

  -- Guadalajara (2 jours).
  c := seed_city('MEX', 'Guadalajara', 20.6597, -103.3496, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Cathédrale et centre historique", "Les clochers jaunes emblème de la Perle de l''Occident.", "matin", "visit", 20.6767, -103.3475, "Guadalajara"],
    ["Palais du gouvernement", "Les fresques enflammées d''Orozco autour d''Hidalgo.", "matin", "visit", 20.6760, -103.3460, "Guadalajara"],
    ["Hospicio Cabañas", "L''Homme de feu d''Orozco sous la coupole, classé Unesco.", "apres-midi", "visit", 20.6740, -103.3390, "Guadalajara"],
    ["Marché San Juan de Dios", "Le plus grand marché couvert d''Amérique latine.", "apres-midi", "shopping", 20.6720, -103.3400, "Guadalajara"],
    ["Plaza de los Mariachis", "Birria et trompettes là où le mariachi est né.", "soir", "food", 20.6720, -103.3420, "Guadalajara"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Tlaquepaque", "Village d''artisans absorbé par la ville, galeries et patios.", "matin", "shopping", 20.6410, -103.3110, "Tlaquepaque, Guadalajara"],
    ["Dégustation de tequila", "Le spiritueux national à une heure de ses champs d''agaves bleus.", "apres-midi", "food", 20.6420, -103.3120, "Tlaquepaque, Guadalajara"],
    ["Avenida Chapultepec", "Terrasses et scène locale.", "soir", "night", 20.6710, -103.3690, "Guadalajara"]]'::jsonb);

  -- Puerto Vallarta (3 jours).
  c := seed_city('MEX', 'Puerto Vallarta', 20.6534, -105.2253, 3, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Malecón", "Sculptures face au Pacifique, la promenade emblématique.", "matin", "visit", 20.6100, -105.2340, "Puerto Vallarta"],
    ["Église de Guadalupe", "La couronne emblème de la ville, au-dessus des toits.", "matin", "visit", 20.6080, -105.2320, "Puerto Vallarta"],
    ["Zona Romántica", "Ruelles pavées, galeries et cafés du vieux Vallarta.", "apres-midi", "visit", 20.6020, -105.2360, "Puerto Vallarta"],
    ["Plage de Los Muertos", "Farniente et pier au bout du quartier romantique.", "apres-midi", "beach", 20.5990, -105.2380, "Puerto Vallarta"],
    ["Coucher de soleil sur le Malecón", "Le Pacifique en feu, dîner les pieds dans le sable.", "soir", "food", 20.6090, -105.2350, "Puerto Vallarta"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Îles Marietas", "Excursion en bateau vers la plage cachée et les fous à pieds bleus.", "matin", "nature", 20.6960, -105.5680, "Bahía de Banderas"],
    ["Snorkeling dans la baie", "Coraux et bancs de poissons au retour des îles.", "apres-midi", "nature", 20.6700, -105.4500, "Bahía de Banderas"],
    ["Dîner de fruits de mer au port", "Aguachile et poisson zarandeado.", "soir", "food", 20.6070, -105.2350, "Puerto Vallarta"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Jardin botanique de Vallarta", "Orchidées et forêt sèche dans la Sierra Madre.", "matin", "nature", 20.4670, -105.2900, "Cabo Corrientes"],
    ["Plage de Conchas Chinas", "Criques rocheuses et eau claire en remontant vers la ville.", "apres-midi", "beach", 20.5830, -105.2440, "Puerto Vallarta"],
    ["Dernière soirée Zona Romántica avant le Yucatán", "Mezcalerías et musique live.", "soir", "night", 20.6020, -105.2360, "Puerto Vallarta"]]'::jsonb);

  -- Mérida (3 jours : 2 propres + 1 excursion Chichén Itzá en jour 2) — dense inédit.
  c := seed_city('MEX', 'Mérida', 20.9674, -89.5926, 3, g, 5, 11);
  PERFORM seed_day(c, 1, '[
    ["Plaza Grande et cathédrale", "La plus vieille cathédrale du continent, sur les pierres mayas.", "matin", "visit", 20.9670, -89.6237, "Mérida"],
    ["Casa de Montejo et palais du gouverneur", "Façade plateresque et murales de l''histoire yucatèque.", "matin", "visit", 20.9665, -89.6235, "Mérida"],
    ["Paseo de Montejo", "Les palais des barons du sisal sous les flamboyants.", "apres-midi", "visit", 20.9860, -89.6180, "Mérida"],
    ["Gran Museo del Mundo Maya", "La civilisation maya racontée dans un ceiba de béton.", "apres-midi", "visit", 21.0180, -89.6140, "Mérida"],
    ["Vaquería à Santa Lucía", "Danses yucatèques et marquesitas sous les arcades.", "soir", "night", 20.9710, -89.6240, "Mérida"]]'::jsonb);
  e := seed_daytrip('MEX', 'Chichén Itzá', 20.6843, -88.5678, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Pyramide de Kukulcán", "El Castillo dès l''ouverture, avant les cars.", "matin", "visit", 20.6843, -88.5678, "Chichén Itzá"],
    ["Grand jeu de balle et mur des Crânes", "Le plus vaste terrain rituel de Méso-Amérique.", "matin", "visit", 20.6850, -88.5690, "Chichén Itzá"],
    ["Cénote sacré et groupe des Mille Colonnes", "Le puits aux offrandes et le temple des Guerriers.", "apres-midi", "visit", 20.6870, -88.5670, "Chichén Itzá"],
    ["Baignade au cénote Ik Kil", "Le puits aux lianes pour se remettre de la chaleur.", "apres-midi", "nature", 20.6630, -88.5450, "Ik Kil"],
    ["Retour et dîner à Mérida", "Cochinita pibil dans le centre.", "soir", "food", 20.9680, -89.6230, "Mérida"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Uxmal", "La pyramide du Devin et le quadrilatère des Nonnes, style Puuc pur.", "matin", "visit", 20.3597, -89.7712, "Uxmal"],
    ["Kabah et l''arche Puuc", "Le palais aux 250 masques de Chaac, sur la même route.", "apres-midi", "visit", 20.2480, -89.6510, "Route Puuc"],
    ["Hacienda henequenera", "Dîner dans une plantation de sisal restaurée.", "soir", "food", 20.4500, -89.7000, "Route Puuc"]]'::jsonb);

  -- Valladolid (1 jour, sur la route vers Tulum) — dense inédit.
  c := seed_city('MEX', 'Valladolid', 20.6896, -88.2011, 1, g, 6, 14);
  PERFORM seed_day(c, 1, '[
    ["Ek Balam", "L''acropole aux anges de stuc, encore dans la jungle, au nord.", "matin", "visit", 20.8910, -88.1360, "Ek Balam"],
    ["Cenote X''Canché", "Baignade au pied du site, à vélo dans la forêt.", "matin", "nature", 20.8880, -88.1370, "Ek Balam"],
    ["Centre de Valladolid et cenote Zací", "Façades pastel et gouffre en pleine ville, en redescendant.", "apres-midi", "visit", 20.6896, -88.2011, "Valladolid"],
    ["Couvent San Bernardino et calzada de los Frailes", "Le couvent-forteresse au bout de la plus jolie rue du Yucatán.", "apres-midi", "visit", 20.6850, -88.2070, "Valladolid"],
    ["Soirée sur la place centrale", "Marquesitas et danseurs sous les lampadaires.", "soir", "food", 20.6890, -88.2010, "Valladolid"]]'::jsonb);

  -- Tulum (3 jours) — dense inédit.
  c := seed_city('MEX', 'Tulum', 20.2114, -87.4654, 3, g, 7, 15);
  PERFORM seed_day(c, 1, '[
    ["Ruines de Tulum", "La cité maya sur sa falaise turquoise, dès l''ouverture.", "matin", "visit", 20.2145, -87.4290, "Tulum"],
    ["Playa Paraíso", "Baignade au pied des ruines.", "matin", "beach", 20.2080, -87.4320, "Tulum"],
    ["Gran Cenote", "Nage dans un gouffre cristallin aux tortues.", "apres-midi", "nature", 20.2469, -87.4634, "Tulum"],
    ["Dîner dans la zone hôtelière", "Cuisine bohème les pieds dans le sable.", "soir", "food", 20.1750, -87.4470, "Tulum"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Cobá à vélo", "Pédaler entre les temples sous la canopée.", "matin", "visit", 20.4950, -87.7360, "Cobá"],
    ["Cenote Dos Ojos", "Les deux yeux d''eau reliés sous terre, au retour.", "apres-midi", "nature", 20.3240, -87.3900, "Tulum"],
    ["Beach club au couchant", "Dernier bain de la journée face au récif.", "soir", "night", 20.1900, -87.4400, "Tulum"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Réserve de Sian Ka''an", "Lagunes, mangroves et dérive dans les canaux mayas.", "matin", "nature", 19.9330, -87.6320, "Sian Ka''an"],
    ["Plage sauvage de la réserve", "Sable désert côté biosphère.", "apres-midi", "beach", 19.9500, -87.6200, "Sian Ka''an"],
    ["Centre de Tulum", "Tacos et mezcalerias de l''avenue principale.", "soir", "food", 20.2114, -87.4654, "Tulum"]]'::jsonb);

  -- Cancún (3 jours : 2 propres + 1 excursion Isla Mujeres en jour 2) — final aéroport.
  c := seed_city('MEX', 'Cancún', 21.1619, -86.8515, 3, g, 8, 18);
  PERFORM seed_day(c, 1, '[
    ["Playa Delfines et son mirador", "La grande plage publique et le panneau Cancún.", "matin", "beach", 21.0632, -86.7787, "Cancún"],
    ["Ruines d''El Rey et musée maya", "Site aux iguanes et collections préhispaniques, voisins.", "apres-midi", "visit", 21.0570, -86.7790, "Cancún"],
    ["Lagune Nichupté au couchant", "Catamaran ou terrasse face à la mangrove.", "soir", "night", 21.1100, -86.7650, "Cancún"]]'::jsonb);
  e := seed_daytrip('MEX', 'Isla Mujeres', 21.2322, -86.7340, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Ferry et Playa Norte", "L''une des plus belles plages du Mexique.", "matin", "beach", 21.2622, -86.7529, "Isla Mujeres"],
    ["Snorkeling au récif El Farito", "Poissons tropicaux et statue sous-marine.", "apres-midi", "beach", 21.2400, -86.7450, "Isla Mujeres"],
    ["Tour de l''île en voiturette", "Falaises de Punta Sur et temple d''Ixchel.", "apres-midi", "nature", 21.2030, -86.7100, "Isla Mujeres"],
    ["Coucher de soleil côté ouest", "Le dernier ferry après le soleil couché sur la baie.", "soir", "nature", 21.2500, -86.7530, "Isla Mujeres"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Dernier plongeon dans la mer des Caraïbes", "Matinée libre sur la plage de l''hôtel.", "matin", "beach", 21.1214, -86.7620, "Cancún"],
    ["Marché 28 et souvenirs", "Artisanat et hamacs avant la valise.", "apres-midi", "shopping", 21.1620, -86.8280, "Cancún"],
    ["Dîner d''adieu en bord de lagune", "Dernière soirée du grand tour mexicain.", "soir", "food", 21.1300, -86.7700, "Cancún"]]'::jsonb);
END $$;
