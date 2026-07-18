-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Italie v2 (après helpers + seed_trip_templates_italy.sql)
--   - 12 jours DENSE : Milan (2j) → Venise (2j) → Bologne (1j) → Florence (3j)
--     → Rome (4j). Descente nord → sud sans retour arrière ; plusieurs
--     activités par créneau, journées ordonnées selon le trajet réel.
--   - Turin seule (2j) : group_id NULL, format simple.
-- Relance : supprimer TOUT l'éditorial ITA puis rejouer italy.sql PUIS italy_v2.sql
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'ITA';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'ITA';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── 12 jours dense : Milan → Venise → Bologne → Florence → Rome ──
  g := seed_group('ITA', 12);

  -- Milan (2 jours) — nouvelle ville du catalogue.
  c := seed_city('ITA', 'Milan', 45.4642, 9.1900, 2, g, 1, 0);
  -- J1 : Duomo → Scala → château Sforza (progression nord-ouest), Navigli le soir.
  PERFORM seed_day(c, 1, '[
    ["Duomo de Milan", "Montée aux terrasses de la cathédrale aux 135 flèches.", "matin", "visit", 45.4642, 9.1900, "Milan"],
    ["Galerie Vittorio Emanuele II", "Le salon de Milan sous sa coupole de verre, adjacent au Duomo.", "matin", "shopping", 45.4659, 9.1900, "Milan"],
    ["La Scala", "Théâtre lyrique légendaire et son musée.", "apres-midi", "visit", 45.4674, 9.1895, "Milan"],
    ["Château des Sforza et parc Sempione", "Forteresse des ducs de Milan et sa Pietà de Michel-Ange.", "apres-midi", "visit", 45.4705, 9.1793, "Milan"],
    ["Navigli", "Apéritivo au bord des canaux dessinés par Léonard.", "soir", "night", 45.4520, 9.1750, "Navigli, Milan"]]'::jsonb);
  -- J2 : la Cène (ouest) → Brera (nord-est) → Porta Nuova, un seul sens.
  PERFORM seed_day(c, 2, '[
    ["La Cène de Léonard de Vinci", "Le chef-d''œuvre dans le réfectoire de Santa Maria delle Grazie (réserver).", "matin", "visit", 45.4659, 9.1708, "Milan"],
    ["Quartier de Brera", "Ruelles d''artistes et pinacothèque, le Milan romantique.", "apres-midi", "visit", 45.4720, 9.1878, "Brera, Milan"],
    ["Corso Como et Porta Nuova", "Du vieux Milan aux gratte-ciel du Bosco Verticale.", "apres-midi", "visit", 45.4810, 9.1870, "Milan"],
    ["Aperitivo à Brera", "Spritz et stuzzichini dans le quartier le plus charmant.", "soir", "food", 45.4715, 9.1870, "Brera, Milan"]]'::jsonb);

  -- Venise (2 jours).
  c := seed_city('ITA', 'Venise', 45.4408, 12.3155, 2, g, 2, 2);
  -- J1 : tout autour de la place Saint-Marc, gondole au couchant.
  PERFORM seed_day(c, 1, '[
    ["Basilique Saint-Marc", "Mosaïques d''or byzantines sur la plus belle place du monde.", "matin", "visit", 45.4345, 12.3396, "San Marco, Venise"],
    ["Campanile de Saint-Marc", "Venise vue du ciel depuis le clocher.", "matin", "visit", 45.4340, 12.3390, "San Marco, Venise"],
    ["Palais des Doges", "Salles dorées de la Sérénissime et pont des Soupirs.", "apres-midi", "visit", 45.4337, 12.3403, "San Marco, Venise"],
    ["Gondole sur les petits canaux", "Le classique inévitable, à l''heure dorée.", "soir", "visit", 45.4330, 12.3380, "Venise"]]'::jsonb);
  -- J2 : Rialto → Dorsoduro (Accademia puis Salute vers la pointe), cicchetti à Cannaregio.
  PERFORM seed_day(c, 2, '[
    ["Pont du Rialto et marché", "Poissons et légumes des lagunes sous les arcades, tôt le matin.", "matin", "food", 45.4381, 12.3358, "San Polo, Venise"],
    ["Gallerie dell''Accademia", "Titien, Véronèse et Tintoret sur la rive de Dorsoduro.", "apres-midi", "visit", 45.4313, 12.3283, "Dorsoduro, Venise"],
    ["Santa Maria della Salute", "La basilique blanche à la pointe de la Douane, vue sur San Marco.", "apres-midi", "visit", 45.4308, 12.3348, "Dorsoduro, Venise"],
    ["Bacari de Cannaregio", "Tournée des bars à cicchetti le long des fondamenta.", "soir", "food", 45.4450, 12.3320, "Cannaregio, Venise"]]'::jsonb);

  -- Bologne (1 jour) — nouvelle ville, étape gourmande sur la route de Florence.
  c := seed_city('ITA', 'Bologne', 44.4949, 11.3426, 1, g, 3, 4);
  PERFORM seed_day(c, 1, '[
    ["Piazza Maggiore et fontaine de Neptune", "Le cœur de la Rouge, basilique San Petronio.", "matin", "visit", 44.4938, 11.3426, "Bologne"],
    ["Tours Asinelli et Garisenda", "Montée aux 498 marches de la tour penchée médiévale.", "matin", "visit", 44.4946, 11.3468, "Bologne"],
    ["Quadrilatero", "Le marché historique : mortadelle, parmesan et tortellini.", "apres-midi", "food", 44.4933, 11.3440, "Bologne"],
    ["Archiginnasio et portiques", "L''ancienne université et ses 40 km d''arcades classées.", "apres-midi", "visit", 44.4917, 11.3432, "Bologne"],
    ["Dîner de tagliatelle al ragù", "La vraie bolognaise dans une trattoria du centre.", "soir", "food", 44.4940, 11.3450, "Bologne"]]'::jsonb);

  -- Florence (3 jours).
  c := seed_city('ITA', 'Florence', 43.7696, 11.2558, 3, g, 4, 5);
  -- J1 : Duomo → Signoria → Offices → Ponte Vecchio, descente vers l''Arno.
  PERFORM seed_day(c, 1, '[
    ["Duomo et coupole de Brunelleschi", "Montée dans la double coque de la cathédrale Santa Maria del Fiore.", "matin", "visit", 43.7731, 11.2560, "Florence"],
    ["Piazza della Signoria", "Musée de sculpture à ciel ouvert devant le Palazzo Vecchio.", "matin", "visit", 43.7696, 11.2558, "Florence"],
    ["Galerie des Offices", "Botticelli, Vinci et Michel-Ange — le sommet de la Renaissance.", "apres-midi", "visit", 43.7685, 11.2553, "Florence"],
    ["Ponte Vecchio", "Le pont aux orfèvres, juste derrière les Offices.", "apres-midi", "visit", 43.7679, 11.2531, "Florence"],
    ["Dîner de bistecca alla fiorentina", "La côte de bœuf toscane dans une trattoria.", "soir", "food", 43.7700, 11.2540, "Florence"]]'::jsonb);
  -- J2 : David (nord) → San Lorenzo/marché central → Santa Maria Novella (ouest).
  PERFORM seed_day(c, 2, '[
    ["Galerie de l''Académie", "Le David de Michel-Ange, à voir dès l''ouverture.", "matin", "visit", 43.7767, 11.2589, "Florence"],
    ["Marché central et San Lorenzo", "Halles gourmandes et chapelle des Médicis.", "apres-midi", "food", 43.7757, 11.2536, "Florence"],
    ["Santa Maria Novella", "Façade de marbre vert et blanc et fresques de Ghirlandaio.", "apres-midi", "visit", 43.7746, 11.2494, "Florence"],
    ["Trattoria de l''Oltrarno", "L''autre rive de l''Arno, quartier des artisans.", "soir", "food", 43.7670, 11.2480, "Oltrarno, Florence"]]'::jsonb);
  -- J3 Oltrarno : Pitti → Boboli (adjacent) → Piazzale Michelangelo (est) au couchant.
  PERFORM seed_day(c, 3, '[
    ["Palais Pitti", "La résidence des Médicis, galerie Palatine.", "matin", "visit", 43.7651, 11.2500, "Oltrarno, Florence"],
    ["Jardins de Boboli", "Jardin à l''italienne en terrasses derrière le palais.", "apres-midi", "nature", 43.7623, 11.2480, "Florence"],
    ["Piazzale Michelangelo", "Toute Florence dorée au soleil couchant.", "soir", "nature", 43.7629, 11.2650, "Florence"]]'::jsonb);

  -- Rome (4 jours).
  c := seed_city('ITA', 'Rome', 41.9028, 12.4964, 4, g, 5, 8);
  -- J1 antique : Colisée → Forum → Palatin (le Forum est entre les deux,
  -- on le traverse dans l''ordre), soirée à Monti juste au nord.
  PERFORM seed_day(c, 1, '[
    ["Colisée", "L''amphithéâtre des gladiateurs, arène et souterrains.", "matin", "visit", 41.8902, 12.4922, "Rome"],
    ["Forum romain", "Le cœur politique de l''Empire, traversé du Colisée vers le Capitole.", "apres-midi", "visit", 41.8925, 12.4853, "Rome"],
    ["Mont Palatin", "Les palais impériaux au-dessus du Forum.", "apres-midi", "visit", 41.8892, 12.4875, "Rome"],
    ["Dîner à Monti", "Le quartier bohème au pied du Colisée.", "soir", "food", 41.8955, 12.4915, "Monti, Rome"]]'::jsonb);
  -- J2 Vatican : musées → Saint-Pierre → château Saint-Ange (vers l''est
  -- le long du Tibre), Trastevere en descendant la rive.
  PERFORM seed_day(c, 2, '[
    ["Musées du Vatican et chapelle Sixtine", "Des kilomètres de chefs-d''œuvre jusqu''au plafond de Michel-Ange.", "matin", "visit", 41.9065, 12.4536, "Vatican"],
    ["Basilique Saint-Pierre", "La coupole de Michel-Ange et la Pietà.", "apres-midi", "visit", 41.9022, 12.4539, "Vatican"],
    ["Château Saint-Ange", "Le mausolée d''Hadrien devenu forteresse papale, sur le Tibre.", "apres-midi", "visit", 41.9031, 12.4663, "Rome"],
    ["Trastevere", "Ruelles pavées et trattorias de l''autre côté du fleuve.", "soir", "food", 41.8897, 12.4694, "Trastevere, Rome"]]'::jsonb);
  -- J3 baroque : Navona/Panthéon → Trevi → place d''Espagne (ouest → est),
  -- retour dîner à Campo de'' Fiori près de Navona.
  PERFORM seed_day(c, 3, '[
    ["Piazza Navona", "Les trois fontaines du Bernin sur l''ancien stade de Domitien.", "matin", "visit", 41.8992, 12.4731, "Rome"],
    ["Panthéon", "Le temple antique le mieux conservé au monde et son oculus.", "matin", "visit", 41.8986, 12.4769, "Rome"],
    ["Fontaine de Trevi", "La pièce dans la fontaine, incontournable.", "apres-midi", "visit", 41.9009, 12.4833, "Rome"],
    ["Place d''Espagne", "La scalinata fleurie de la Trinité-des-Monts.", "apres-midi", "visit", 41.9058, 12.4823, "Rome"],
    ["Campo de'' Fiori", "Marché le jour, terrasses le soir.", "soir", "food", 41.8956, 12.4722, "Rome"]]'::jsonb);
  -- J4 : galerie Borghèse puis traversée de la villa vers le Pincio et Popolo.
  PERFORM seed_day(c, 4, '[
    ["Galerie Borghèse", "Le Bernin et le Caravage dans la villa du cardinal (réserver).", "matin", "visit", 41.9142, 12.4922, "Rome"],
    ["Villa Borghese", "Traversée des jardins en direction du Pincio.", "apres-midi", "nature", 41.9120, 12.4850, "Rome"],
    ["Piazza del Popolo et terrasse du Pincio", "La place ovale vue d''en haut.", "apres-midi", "visit", 41.9109, 12.4763, "Rome"],
    ["Dernière soirée via del Corso", "Passeggiata et gelato pour finir.", "soir", "visit", 41.9050, 12.4780, "Rome"]]'::jsonb);

  -- ─── Turin seule (2 jours) ───────────────────────────────────────
  c := seed_city('ITA', 'Turin', 45.0703, 7.6869, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Musée égyptien", "La plus grande collection égyptienne hors du Caire.", "matin", "visit", 45.0684, 7.6845, "Turin"],
    ["Palais royal et piazza Castello", "La résidence des Savoie au cœur de la ville.", "apres-midi", "visit", 45.0703, 7.6869, "Turin"],
    ["Café historique piazza San Carlo", "Bicerin et chocolat dans le salon de Turin.", "soir", "food", 45.0677, 7.6825, "Turin"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Mole Antonelliana", "L''ascenseur panoramique et le musée du Cinéma.", "matin", "visit", 45.0692, 7.6932, "Turin"],
    ["Parc du Valentino", "Promenade au bord du Pô et bourg médiéval.", "apres-midi", "nature", 45.0550, 7.6870, "Turin"],
    ["Aperitivo à San Salvario", "Le quartier animé des soirées turinoises.", "soir", "night", 45.0570, 7.6780, "Turin"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du voyage court populaire : 7 jours Florence → Rome
-- (nord → sud). Coexiste avec les versions v1 "chill". Mêmes journées
-- denses que le groupe 12j ci-dessus.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('ITA', 7);
  c := seed_city('ITA', 'Florence', 43.7696, 11.2558, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Duomo et coupole de Brunelleschi", "Montée dans la double coque de la cathédrale Santa Maria del Fiore.", "matin", "visit", 43.7731, 11.2560, "Florence"],
    ["Piazza della Signoria", "Musée de sculpture à ciel ouvert devant le Palazzo Vecchio.", "matin", "visit", 43.7696, 11.2558, "Florence"],
    ["Galerie des Offices", "Botticelli, Vinci et Michel-Ange — le sommet de la Renaissance.", "apres-midi", "visit", 43.7685, 11.2553, "Florence"],
    ["Ponte Vecchio", "Le pont aux orfèvres, juste derrière les Offices.", "apres-midi", "visit", 43.7679, 11.2531, "Florence"],
    ["Dîner de bistecca alla fiorentina", "La côte de bœuf toscane dans une trattoria.", "soir", "food", 43.7700, 11.2540, "Florence"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Galerie de l''Académie", "Le David de Michel-Ange, à voir dès l''ouverture.", "matin", "visit", 43.7767, 11.2589, "Florence"],
    ["Marché central et San Lorenzo", "Halles gourmandes et chapelle des Médicis.", "apres-midi", "food", 43.7757, 11.2536, "Florence"],
    ["Santa Maria Novella", "Façade de marbre vert et blanc et fresques de Ghirlandaio.", "apres-midi", "visit", 43.7746, 11.2494, "Florence"],
    ["Trattoria de l''Oltrarno", "L''autre rive de l''Arno, quartier des artisans.", "soir", "food", 43.7670, 11.2480, "Oltrarno, Florence"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Palais Pitti", "La résidence des Médicis, galerie Palatine.", "matin", "visit", 43.7651, 11.2500, "Oltrarno, Florence"],
    ["Jardins de Boboli", "Jardin à l''italienne en terrasses derrière le palais.", "apres-midi", "nature", 43.7623, 11.2480, "Florence"],
    ["Piazzale Michelangelo", "Toute Florence dorée au soleil couchant.", "soir", "nature", 43.7629, 11.2650, "Florence"]]'::jsonb);

  c := seed_city('ITA', 'Rome', 41.9028, 12.4964, 4, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Colisée", "L''amphithéâtre des gladiateurs, arène et souterrains.", "matin", "visit", 41.8902, 12.4922, "Rome"],
    ["Forum romain", "Le cœur politique de l''Empire, traversé du Colisée vers le Capitole.", "apres-midi", "visit", 41.8925, 12.4853, "Rome"],
    ["Mont Palatin", "Les palais impériaux au-dessus du Forum.", "apres-midi", "visit", 41.8892, 12.4875, "Rome"],
    ["Dîner à Monti", "Le quartier bohème au pied du Colisée.", "soir", "food", 41.8955, 12.4915, "Monti, Rome"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musées du Vatican et chapelle Sixtine", "Des kilomètres de chefs-d''œuvre jusqu''au plafond de Michel-Ange.", "matin", "visit", 41.9065, 12.4536, "Vatican"],
    ["Basilique Saint-Pierre", "La coupole de Michel-Ange et la Pietà.", "apres-midi", "visit", 41.9022, 12.4539, "Vatican"],
    ["Château Saint-Ange", "Le mausolée d''Hadrien devenu forteresse papale, sur le Tibre.", "apres-midi", "visit", 41.9031, 12.4663, "Rome"],
    ["Trastevere", "Ruelles pavées et trattorias de l''autre côté du fleuve.", "soir", "food", 41.8897, 12.4694, "Trastevere, Rome"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Piazza Navona", "Les trois fontaines du Bernin sur l''ancien stade de Domitien.", "matin", "visit", 41.8992, 12.4731, "Rome"],
    ["Panthéon", "Le temple antique le mieux conservé au monde et son oculus.", "matin", "visit", 41.8986, 12.4769, "Rome"],
    ["Fontaine de Trevi", "La pièce dans la fontaine, incontournable.", "apres-midi", "visit", 41.9009, 12.4833, "Rome"],
    ["Place d''Espagne", "La scalinata fleurie de la Trinité-des-Monts.", "apres-midi", "visit", 41.9058, 12.4823, "Rome"],
    ["Campo de'' Fiori", "Marché le jour, terrasses le soir.", "soir", "food", 41.8956, 12.4722, "Rome"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Galerie Borghèse", "Le Bernin et le Caravage dans la villa du cardinal (réserver).", "matin", "visit", 41.9142, 12.4922, "Rome"],
    ["Villa Borghese", "Traversée des jardins en direction du Pincio.", "apres-midi", "nature", 41.9120, 12.4850, "Rome"],
    ["Piazza del Popolo et terrasse du Pincio", "La place ovale vue d''en haut.", "apres-midi", "visit", 41.9109, 12.4763, "Rome"],
    ["Dernière soirée via del Corso", "Passeggiata et gelato pour finir.", "soir", "visit", 41.9050, 12.4780, "Rome"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du grand classique : 9 jours Venise → Florence → Rome
-- (le triangle d'or italien, nord → sud). Mêmes journées denses que le
-- groupe 12j ci-dessus.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('ITA', 9);

  c := seed_city('ITA', 'Venise', 45.4408, 12.3155, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Basilique Saint-Marc", "Mosaïques d''or byzantines sur la plus belle place du monde.", "matin", "visit", 45.4345, 12.3396, "San Marco, Venise"],
    ["Campanile de Saint-Marc", "Venise vue du ciel depuis le clocher.", "matin", "visit", 45.4340, 12.3390, "San Marco, Venise"],
    ["Palais des Doges", "Salles dorées de la Sérénissime et pont des Soupirs.", "apres-midi", "visit", 45.4337, 12.3403, "San Marco, Venise"],
    ["Gondole sur les petits canaux", "Le classique inévitable, à l''heure dorée.", "soir", "visit", 45.4330, 12.3380, "Venise"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Pont du Rialto et marché", "Poissons et légumes des lagunes sous les arcades, tôt le matin.", "matin", "food", 45.4381, 12.3358, "San Polo, Venise"],
    ["Gallerie dell''Accademia", "Titien, Véronèse et Tintoret sur la rive de Dorsoduro.", "apres-midi", "visit", 45.4313, 12.3283, "Dorsoduro, Venise"],
    ["Santa Maria della Salute", "La basilique blanche à la pointe de la Douane, vue sur San Marco.", "apres-midi", "visit", 45.4308, 12.3348, "Dorsoduro, Venise"],
    ["Bacari de Cannaregio", "Tournée des bars à cicchetti le long des fondamenta.", "soir", "food", 45.4450, 12.3320, "Cannaregio, Venise"]]'::jsonb);

  c := seed_city('ITA', 'Florence', 43.7696, 11.2558, 3, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Duomo et coupole de Brunelleschi", "Montée dans la double coque de la cathédrale Santa Maria del Fiore.", "matin", "visit", 43.7731, 11.2560, "Florence"],
    ["Piazza della Signoria", "Musée de sculpture à ciel ouvert devant le Palazzo Vecchio.", "matin", "visit", 43.7696, 11.2558, "Florence"],
    ["Galerie des Offices", "Botticelli, Vinci et Michel-Ange — le sommet de la Renaissance.", "apres-midi", "visit", 43.7685, 11.2553, "Florence"],
    ["Ponte Vecchio", "Le pont aux orfèvres, juste derrière les Offices.", "apres-midi", "visit", 43.7679, 11.2531, "Florence"],
    ["Dîner de bistecca alla fiorentina", "La côte de bœuf toscane dans une trattoria.", "soir", "food", 43.7700, 11.2540, "Florence"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Galerie de l''Académie", "Le David de Michel-Ange, à voir dès l''ouverture.", "matin", "visit", 43.7767, 11.2589, "Florence"],
    ["Marché central et San Lorenzo", "Halles gourmandes et chapelle des Médicis.", "apres-midi", "food", 43.7757, 11.2536, "Florence"],
    ["Santa Maria Novella", "Façade de marbre vert et blanc et fresques de Ghirlandaio.", "apres-midi", "visit", 43.7746, 11.2494, "Florence"],
    ["Trattoria de l''Oltrarno", "L''autre rive de l''Arno, quartier des artisans.", "soir", "food", 43.7670, 11.2480, "Oltrarno, Florence"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Palais Pitti", "La résidence des Médicis, galerie Palatine.", "matin", "visit", 43.7651, 11.2500, "Oltrarno, Florence"],
    ["Jardins de Boboli", "Jardin à l''italienne en terrasses derrière le palais.", "apres-midi", "nature", 43.7623, 11.2480, "Florence"],
    ["Piazzale Michelangelo", "Toute Florence dorée au soleil couchant.", "soir", "nature", 43.7629, 11.2650, "Florence"]]'::jsonb);

  c := seed_city('ITA', 'Rome', 41.9028, 12.4964, 4, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Colisée", "L''amphithéâtre des gladiateurs, arène et souterrains.", "matin", "visit", 41.8902, 12.4922, "Rome"],
    ["Forum romain", "Le cœur politique de l''Empire, traversé du Colisée vers le Capitole.", "apres-midi", "visit", 41.8925, 12.4853, "Rome"],
    ["Mont Palatin", "Les palais impériaux au-dessus du Forum.", "apres-midi", "visit", 41.8892, 12.4875, "Rome"],
    ["Dîner à Monti", "Le quartier bohème au pied du Colisée.", "soir", "food", 41.8955, 12.4915, "Monti, Rome"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musées du Vatican et chapelle Sixtine", "Des kilomètres de chefs-d''œuvre jusqu''au plafond de Michel-Ange.", "matin", "visit", 41.9065, 12.4536, "Vatican"],
    ["Basilique Saint-Pierre", "La coupole de Michel-Ange et la Pietà.", "apres-midi", "visit", 41.9022, 12.4539, "Vatican"],
    ["Château Saint-Ange", "Le mausolée d''Hadrien devenu forteresse papale, sur le Tibre.", "apres-midi", "visit", 41.9031, 12.4663, "Rome"],
    ["Trastevere", "Ruelles pavées et trattorias de l''autre côté du fleuve.", "soir", "food", 41.8897, 12.4694, "Trastevere, Rome"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Piazza Navona", "Les trois fontaines du Bernin sur l''ancien stade de Domitien.", "matin", "visit", 41.8992, 12.4731, "Rome"],
    ["Panthéon", "Le temple antique le mieux conservé au monde et son oculus.", "matin", "visit", 41.8986, 12.4769, "Rome"],
    ["Fontaine de Trevi", "La pièce dans la fontaine, incontournable.", "apres-midi", "visit", 41.9009, 12.4833, "Rome"],
    ["Place d''Espagne", "La scalinata fleurie de la Trinité-des-Monts.", "apres-midi", "visit", 41.9058, 12.4823, "Rome"],
    ["Campo de'' Fiori", "Marché le jour, terrasses le soir.", "soir", "food", 41.8956, 12.4722, "Rome"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Galerie Borghèse", "Le Bernin et le Caravage dans la villa du cardinal (réserver).", "matin", "visit", 41.9142, 12.4922, "Rome"],
    ["Villa Borghese", "Traversée des jardins en direction du Pincio.", "apres-midi", "nature", 41.9120, 12.4850, "Rome"],
    ["Piazza del Popolo et terrasse du Pincio", "La place ovale vue d''en haut.", "apres-midi", "visit", 41.9109, 12.4763, "Rome"],
    ["Dernière soirée via del Corso", "Passeggiata et gelato pour finir.", "soir", "visit", 41.9050, 12.4780, "Rome"]]'::jsonb);
END $$;
