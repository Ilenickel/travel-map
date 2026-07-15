-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Mexique (après seed_trip_templates_helpers.sql)
--   - 7 jours  : Mexico (+ Teotihuacán) → Oaxaca (+ Monte Albán)
--   - 10 jours : Yucatán — Cancún (+ Isla Mujeres) → Tulum (+ Sian Ka'an) → Mérida (+ Chichén Itzá, + Uxmal)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'MEX';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'MEX';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 7 jours : Mexico → Oaxaca ─────────────────────────────────
  g := seed_group('MEX', 7);
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
    ["Dégustation de mezcal", "Palenque artisanal avant le départ.", "soir", "food", 17.0620, -96.7220, "Oaxaca"]]'::jsonb);

  -- ─── 10 jours : Yucatán ────────────────────────────────────────
  g := seed_group('MEX', 10);
  c := seed_city('MEX', 'Cancún', 21.1619, -86.8515, 3, g, 1, 0);
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
    ["Coucher de soleil sur la lagune", "Catamaran ou terrasse face à la baie.", "soir", "night", 21.1100, -86.7650, "Cancún"]]'::jsonb);
  c := seed_city('MEX', 'Tulum', 20.2114, -87.4654, 3, g, 2, 3);
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
  c := seed_city('MEX', 'Mérida', 20.9674, -89.5926, 4, g, 3, 6);
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
END $$;


-- ════════════════════════════════════════════════════════════════
-- Variante enrichie : Mexico 5 jours (+ Guadalupe/Soumaya/lucha libre)
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('MEX', 5);
  c := seed_city('MEX', 'Mexico', 19.4326, -99.1332, 5, g, 1, 0);
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
  PERFORM seed_day(c, 5, '[
    ["Basilique Notre-Dame-de-Guadalupe", "Le sanctuaire le plus visité des Amériques.", "matin", "visit", 19.4846, -99.1177, "Mexico"],
    ["Musée Soumaya et Polanco", "La façade argentée aux 16 000 hexagones puis le quartier chic.", "apres-midi", "visit", 19.4406, -99.2046, "Mexico"],
    ["Lucha libre à l''Arena México", "Masques et voltige, l''institution du soir mexicaine.", "soir", "night", 19.4227, -99.1518, "Mexico"]]'::jsonb);
END $$;
