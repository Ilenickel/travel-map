-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Turquie v2 (après helpers + seed_trip_templates_turkey.sql)
--   - 10 jours DENSE : Istanbul (4j) → Pamukkale (1j) → Antalya (3j)
--     → Göreme (2j). Progression ouest → sud → est cohérente (vol ou bus
--     de nuit entre les étapes, comme les circuits réels). Couvre 2 villes
--     absentes du catalogue : Pamukkale et Antalya.
-- Relance : supprimer TOUT l'éditorial TUR puis rejouer turkey.sql PUIS turkey_v2.sql
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'TUR';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'TUR';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('TUR', 10);

  -- Istanbul (4 jours) — un secteur par jour.
  c := seed_city('TUR', 'Istanbul', 41.0082, 28.9784, 4, g, 1, 0);
  -- J1 Sultanahmet : tout se touche — Sainte-Sophie → Mosquée bleue →
  -- Citerne → Topkapi, boucle de 500 m de rayon.
  PERFORM seed_day(c, 1, '[
    ["Sainte-Sophie", "Basilique, mosquée, musée : quinze siècles sous la coupole.", "matin", "visit", 41.0086, 28.9802, "Sultanahmet, Istanbul"],
    ["Mosquée bleue", "Les six minarets et les faïences d''Iznik, juste en face.", "matin", "visit", 41.0054, 28.9768, "Sultanahmet, Istanbul"],
    ["Citerne basilique", "La forêt de colonnes engloutie et ses Méduses.", "apres-midi", "visit", 41.0084, 28.9779, "Sultanahmet, Istanbul"],
    ["Palais de Topkapi", "Harem, trésor et pavillons des sultans sur la pointe du Sérail.", "apres-midi", "visit", 41.0115, 28.9834, "Sultanahmet, Istanbul"],
    ["Dîner en terrasse à Sultanahmet", "Mezze face aux coupoles illuminées.", "soir", "food", 41.0070, 28.9780, "Sultanahmet, Istanbul"]]'::jsonb);
  -- J2 bazars : Grand Bazar → Soliman (nord) → bazar égyptien → pont de
  -- Galata, descente continue vers la Corne d''Or.
  PERFORM seed_day(c, 2, '[
    ["Grand Bazar", "4 000 boutiques sous les voûtes, l''art du marchandage.", "matin", "shopping", 41.0106, 28.9681, "Beyazıt, Istanbul"],
    ["Mosquée de Soliman le Magnifique", "Le chef-d''œuvre de Sinan dominant la Corne d''Or.", "apres-midi", "visit", 41.0165, 28.9640, "Süleymaniye, Istanbul"],
    ["Bazar égyptien", "Épices, loukoums et thés en descendant vers l''eau.", "apres-midi", "food", 41.0166, 28.9709, "Eminönü, Istanbul"],
    ["Pont de Galata au couchant", "Pêcheurs à la ligne et sandwich au maquereau.", "soir", "food", 41.0201, 28.9744, "Eminönü, Istanbul"]]'::jsonb);
  -- J3 rive européenne moderne : tour de Galata → Istiklal → Dolmabahçe →
  -- Ortaköy, remontée continue du Bosphore vers le nord-est.
  PERFORM seed_day(c, 3, '[
    ["Tour de Galata", "Panorama à 360° sur la Corne d''Or et le Bosphore.", "matin", "visit", 41.0256, 28.9744, "Galata, Istanbul"],
    ["Avenue Istiklal", "Le tram rouge, les passages et les librairies de Beyoğlu.", "apres-midi", "shopping", 41.0330, 28.9770, "Beyoğlu, Istanbul"],
    ["Palais de Dolmabahçe", "Le Versailles ottoman au bord de l''eau.", "apres-midi", "visit", 41.0392, 29.0004, "Beşiktaş, Istanbul"],
    ["Ortaköy", "La petite mosquée sous le pont du Bosphore, kumpir et lumières.", "soir", "food", 41.0472, 29.0270, "Ortaköy, Istanbul"]]'::jsonb);
  -- J4 Bosphore et rive asiatique : croisière le matin, Kadıköy l''après-midi.
  PERFORM seed_day(c, 4, '[
    ["Croisière sur le Bosphore", "Palais, yalıs et forteresses entre deux continents.", "matin", "visit", 41.0176, 28.9709, "Eminönü, Istanbul"],
    ["Kadıköy et son marché", "La rive asiatique gourmande, poissonniers et meyhanes.", "apres-midi", "food", 40.9906, 29.0250, "Kadıköy, Istanbul"],
    ["Moda en bord de mer", "Promenade et thé face aux îles des Princes.", "apres-midi", "nature", 40.9800, 29.0250, "Moda, Istanbul"],
    ["Meyhane à Kadıköy", "Rakı et mezze pour la dernière soirée stambouliote.", "soir", "food", 40.9900, 29.0290, "Kadıköy, Istanbul"]]'::jsonb);

  -- Pamukkale (1 jour) — nouvelle ville du catalogue.
  c := seed_city('TUR', 'Pamukkale', 37.9203, 29.1206, 1, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Travertins de Pamukkale", "Pieds nus dans les vasques blanches du château de coton.", "matin", "nature", 37.9203, 29.1206, "Pamukkale"],
    ["Hiérapolis", "Nécropole et théâtre romains au sommet des travertins.", "apres-midi", "visit", 37.9260, 29.1256, "Pamukkale"],
    ["Piscine antique de Cléopâtre", "Nager parmi les colonnes effondrées.", "apres-midi", "visit", 37.9240, 29.1240, "Pamukkale"],
    ["Coucher de soleil sur les vasques", "Le blanc qui vire au rose, dernier regard.", "soir", "nature", 37.9210, 29.1190, "Pamukkale"]]'::jsonb);

  -- Antalya (3 jours) — nouvelle ville du catalogue.
  c := seed_city('TUR', 'Antalya', 36.8969, 30.7133, 3, g, 3, 5);
  -- J1 vieille ville : porte d''Hadrien → Kaleiçi → marina, tout se touche.
  PERFORM seed_day(c, 1, '[
    ["Porte d''Hadrien", "L''arc de triomphe romain, entrée du vieux quartier.", "matin", "visit", 36.8855, 30.7075, "Antalya"],
    ["Kaleiçi", "Ruelles ottomanes, minaret cannelé et maisons à encorbellement.", "matin", "visit", 36.8841, 30.7056, "Kaleiçi, Antalya"],
    ["Vieille marina", "Le port antique au pied des remparts.", "apres-midi", "visit", 36.8850, 30.7030, "Antalya"],
    ["Musée d''Antalya", "Sarcophages et dieux de Pergé, l''un des grands musées de Turquie.", "apres-midi", "visit", 36.8853, 30.6803, "Antalya"],
    ["Dîner sur les falaises", "Poisson grillé au-dessus de la Méditerranée.", "soir", "food", 36.8840, 30.7050, "Antalya"]]'::jsonb);
  -- J2 : chutes et plage à l''est de la ville, soirée à Kaleiçi.
  PERFORM seed_day(c, 2, '[
    ["Chutes de Düden", "La cascade qui se jette directement dans la mer.", "matin", "nature", 36.8530, 30.7830, "Lara, Antalya"],
    ["Plage de Lara", "Sable doré et eau turquoise, farniente.", "apres-midi", "beach", 36.8560, 30.8020, "Lara, Antalya"],
    ["Bars de Kaleiçi", "Cours ottomanes transformées en terrasses.", "soir", "night", 36.8845, 30.7060, "Kaleiçi, Antalya"]]'::jsonb);
  -- J3 sites antiques à l''est : Pergé puis Aspendos (plus loin sur la même route).
  PERFORM seed_day(c, 3, '[
    ["Pergé", "Stade et colonnades d''une des grandes cités pamphyliennes.", "matin", "visit", 36.9610, 30.8540, "Aksu, Antalya"],
    ["Théâtre d''Aspendos", "Le théâtre romain le mieux conservé du monde, 15 000 places.", "apres-midi", "visit", 36.9389, 31.1722, "Serik, Antalya"],
    ["Retour et dernière soirée au port", "Coucher de soleil sur les monts Bey.", "soir", "food", 36.8850, 30.7035, "Antalya"]]'::jsonb);

  -- Göreme / Cappadoce (2 jours).
  c := seed_city('TUR', 'Göreme', 38.6431, 34.8289, 2, g, 4, 8);
  -- J1 : montgolfière à l''aube, musée en plein air (est), Uçhisar (ouest) au couchant.
  PERFORM seed_day(c, 1, '[
    ["Vol en montgolfière au lever du soleil", "Des centaines de ballons au-dessus des cheminées de fées.", "matin", "visit", 38.6431, 34.8289, "Göreme"],
    ["Musée en plein air de Göreme", "Églises rupestres byzantines aux fresques intactes.", "matin", "visit", 38.6420, 34.8450, "Göreme"],
    ["Vallée de l''Amour et vallée Blanche", "Randonnée entre les formations les plus surréalistes.", "apres-midi", "nature", 38.6560, 34.8180, "Göreme"],
    ["Château d''Uçhisar", "Le piton criblé de grottes, plus haut point de la région.", "apres-midi", "visit", 38.6300, 34.8050, "Uçhisar"],
    ["Sunset Point de Göreme", "Le canyon rougeoyant au couchant.", "soir", "nature", 38.6400, 34.8330, "Göreme"]]'::jsonb);
  -- J2 : ville souterraine au sud, vallées rouges au retour, dîner troglodyte.
  PERFORM seed_day(c, 2, '[
    ["Ville souterraine de Derinkuyu", "Huit niveaux creusés jusqu''à 85 m sous terre.", "matin", "visit", 38.3735, 34.7345, "Derinkuyu"],
    ["Vallée Rouge et vallée Rose", "Randonnée dans les canyons ocre au retour vers Göreme.", "apres-midi", "nature", 38.6600, 34.8600, "Cappadoce"],
    ["Poterie d''Avanos", "Les ateliers au bord du Kızılırmak, tour de potier.", "apres-midi", "visit", 38.7150, 34.8470, "Avanos"],
    ["Dîner dans un restaurant troglodyte", "Testi kebab cuit dans sa jarre scellée.", "soir", "food", 38.6425, 34.8300, "Göreme"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du city-trip populaire : 4 jours Istanbul seule.
-- Coexiste avec les versions v1 "chill". Mêmes journées denses que le
-- groupe 10j ci-dessus.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('TUR', 4);
  c := seed_city('TUR', 'Istanbul', 41.0082, 28.9784, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Sainte-Sophie", "Basilique, mosquée, musée : quinze siècles sous la coupole.", "matin", "visit", 41.0086, 28.9802, "Sultanahmet, Istanbul"],
    ["Mosquée bleue", "Les six minarets et les faïences d''Iznik, juste en face.", "matin", "visit", 41.0054, 28.9768, "Sultanahmet, Istanbul"],
    ["Citerne basilique", "La forêt de colonnes engloutie et ses Méduses.", "apres-midi", "visit", 41.0084, 28.9779, "Sultanahmet, Istanbul"],
    ["Palais de Topkapi", "Harem, trésor et pavillons des sultans sur la pointe du Sérail.", "apres-midi", "visit", 41.0115, 28.9834, "Sultanahmet, Istanbul"],
    ["Dîner en terrasse à Sultanahmet", "Mezze face aux coupoles illuminées.", "soir", "food", 41.0070, 28.9780, "Sultanahmet, Istanbul"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Grand Bazar", "4 000 boutiques sous les voûtes, l''art du marchandage.", "matin", "shopping", 41.0106, 28.9681, "Beyazıt, Istanbul"],
    ["Mosquée de Soliman le Magnifique", "Le chef-d''œuvre de Sinan dominant la Corne d''Or.", "apres-midi", "visit", 41.0165, 28.9640, "Süleymaniye, Istanbul"],
    ["Bazar égyptien", "Épices, loukoums et thés en descendant vers l''eau.", "apres-midi", "food", 41.0166, 28.9709, "Eminönü, Istanbul"],
    ["Pont de Galata au couchant", "Pêcheurs à la ligne et sandwich au maquereau.", "soir", "food", 41.0201, 28.9744, "Eminönü, Istanbul"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Tour de Galata", "Panorama à 360° sur la Corne d''Or et le Bosphore.", "matin", "visit", 41.0256, 28.9744, "Galata, Istanbul"],
    ["Avenue Istiklal", "Le tram rouge, les passages et les librairies de Beyoğlu.", "apres-midi", "shopping", 41.0330, 28.9770, "Beyoğlu, Istanbul"],
    ["Palais de Dolmabahçe", "Le Versailles ottoman au bord de l''eau.", "apres-midi", "visit", 41.0392, 29.0004, "Beşiktaş, Istanbul"],
    ["Ortaköy", "La petite mosquée sous le pont du Bosphore, kumpir et lumières.", "soir", "food", 41.0472, 29.0270, "Ortaköy, Istanbul"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Croisière sur le Bosphore", "Palais, yalıs et forteresses entre deux continents.", "matin", "visit", 41.0176, 28.9709, "Eminönü, Istanbul"],
    ["Kadıköy et son marché", "La rive asiatique gourmande, poissonniers et meyhanes.", "apres-midi", "food", 40.9906, 29.0250, "Kadıköy, Istanbul"],
    ["Moda en bord de mer", "Promenade et thé face aux îles des Princes.", "apres-midi", "nature", 40.9800, 29.0250, "Moda, Istanbul"],
    ["Meyhane à Kadıköy", "Rakı et mezze pour la dernière soirée stambouliote.", "soir", "food", 40.9900, 29.0290, "Kadıköy, Istanbul"]]'::jsonb);
END $$;
