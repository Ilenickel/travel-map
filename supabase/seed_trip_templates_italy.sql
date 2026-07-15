-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Italie (après seed_trip_templates_helpers.sql)
--   - 5 jours  : Rome
--   - 10 jours : Rome → Florence (+ Pise) → Venise
--   - 14 jours : Rome → Naples (+ Pompéi) → Florence (+ Pise) → Venise → Sicile (+ Agrigente)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'ITA';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'ITA';
-- ════════════════════════════════════════════════════════════════

-- p_days = 4, 5 ou 7 (variante enrichie : + Caracalla/Via Appia/Testaccio
-- + excursion Tivoli au jour 7).
CREATE OR REPLACE FUNCTION seed_it_rome(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('ITA', 'Rome', 41.9028, 12.4964, p_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Colisée", "L''amphithéâtre des gladiateurs, symbole de Rome.", "matin", "visit", 41.8902, 12.4922, "Rome"],
    ["Forum romain et mont Palatin", "Le cœur politique de la Rome antique.", "apres-midi", "visit", 41.8925, 12.4853, "Rome"],
    ["Trastevere", "Trattorias et ruelles pavées de la rive droite.", "soir", "food", 41.8867, 12.4692, "Rome"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Musées du Vatican et chapelle Sixtine", "Le plafond de Michel-Ange.", "matin", "visit", 41.9065, 12.4536, "Vatican"],
    ["Basilique Saint-Pierre", "Coupole de Michel-Ange et Pietà.", "apres-midi", "visit", 41.9022, 12.4539, "Vatican"],
    ["Château Saint-Ange", "Mausolée d''Hadrien au bord du Tibre.", "soir", "visit", 41.9031, 12.4663, "Rome"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Panthéon", "Coupole antique à l''oculus ouvert sur le ciel.", "matin", "visit", 41.8986, 12.4769, "Rome"],
    ["Piazza Navona", "Fontaine des Quatre-Fleuves du Bernin.", "apres-midi", "visit", 41.8992, 12.4731, "Rome"],
    ["Fontaine de Trevi", "La pièce dans la fontaine, de nuit.", "soir", "visit", 41.9009, 12.4833, "Rome"]]'::jsonb);
  PERFORM seed_day(v, 4, '[
    ["Galerie Borghèse", "Bernin et Caravage dans une villa-jardin.", "matin", "visit", 41.9142, 12.4922, "Rome"],
    ["Piazza di Spagna", "Escalier de la Trinité-des-Monts.", "apres-midi", "visit", 41.9060, 12.4823, "Rome"],
    ["Campo de'' Fiori", "Marché le jour, apéritif le soir.", "soir", "food", 41.8956, 12.4722, "Rome"]]'::jsonb);
  IF p_days >= 5 THEN
    PERFORM seed_day(v, 5, '[
      ["Basilique Sainte-Marie-Majeure", "Mosaïques paléochrétiennes majeures.", "matin", "visit", 41.8976, 12.4986, "Rome"],
      ["Quartier Monti", "Vintage et ateliers au pied du Colisée.", "apres-midi", "shopping", 41.8945, 12.4900, "Rome"],
      ["Piazza del Popolo et Pincio", "Coucher de soleil sur les toits de Rome.", "soir", "nature", 41.9106, 12.4763, "Rome"]]'::jsonb);
  END IF;
  IF p_days >= 7 THEN
    PERFORM seed_day(v, 6, '[
      ["Via Appia antique et catacombes", "La reine des voies romaines et ses galeries souterraines.", "matin", "visit", 41.8558, 12.5150, "Rome"],
      ["Thermes de Caracalla", "Les bains monumentaux de la Rome impériale.", "apres-midi", "visit", 41.8790, 12.4925, "Rome"],
      ["Testaccio", "Le quartier de la vraie cuisine romaine.", "soir", "food", 41.8760, 12.4750, "Rome"]]'::jsonb);
    e := seed_daytrip('ITA', 'Tivoli', 41.9633, 12.7958, v, 6);
    PERFORM seed_day(e, 1, '[
      ["Villa d''Este", "Le jardin aux cent fontaines de la Renaissance.", "matin", "visit", 41.9633, 12.7958, "Tivoli"],
      ["Villa Adriana", "La cité-palais de l''empereur Hadrien.", "apres-midi", "visit", 41.9440, 12.7740, "Tivoli"],
      ["Retour et apéritif à Monti", "Dernière soirée romaine.", "soir", "food", 41.8945, 12.4900, "Rome"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

-- Florence : p_days = 3 (2 jours propres + excursion Pise) ou 2 (1 + Pise).
CREATE OR REPLACE FUNCTION seed_it_florence(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('ITA', 'Florence', 43.7696, 11.2558, p_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Duomo et coupole de Brunelleschi", "Montée dans la coupole de Santa Maria del Fiore.", "matin", "visit", 43.7731, 11.2560, "Florence"],
    ["Galerie des Offices", "Botticelli, Léonard et la Renaissance.", "apres-midi", "visit", 43.7678, 11.2553, "Florence"],
    ["Ponte Vecchio", "Le pont aux orfèvres au couchant.", "soir", "visit", 43.7680, 11.2531, "Florence"]]'::jsonb);
  IF p_days = 3 THEN
    PERFORM seed_day(v, 2, '[
      ["Galerie de l''Académie", "Le David de Michel-Ange.", "matin", "visit", 43.7767, 11.2588, "Florence"],
      ["Piazza della Signoria et Palazzo Vecchio", "Musée à ciel ouvert du pouvoir florentin.", "apres-midi", "visit", 43.7696, 11.2558, "Florence"],
      ["Piazzale Michelangelo", "Le panorama classique sur Florence.", "soir", "nature", 43.7629, 11.2650, "Florence"]]'::jsonb);
  END IF;
  e := seed_daytrip('ITA', 'Pise', 43.7228, 10.4017, v, p_days - 1);
  PERFORM seed_day(e, 1, '[
    ["Tour de Pise", "Montée dans le campanile penché.", "matin", "visit", 43.7230, 10.3966, "Pise"],
    ["Campo dei Miracoli", "Duomo, baptistère et Camposanto.", "apres-midi", "visit", 43.7235, 10.3954, "Pise"],
    ["Borgo Stretto et lungarni", "Arcades et quais de l''Arno avant le retour.", "soir", "food", 43.7167, 10.4030, "Pise"]]'::jsonb);
  RETURN v;
END $$;

-- Venise : p_days = 3 ou 2.
CREATE OR REPLACE FUNCTION seed_it_venice(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('ITA', 'Venise', 45.4408, 12.3155, p_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Place et basilique Saint-Marc", "Mosaïques d''or et campanile.", "matin", "visit", 45.4345, 12.3396, "Venise"],
    ["Palais des Doges", "Salles d''apparat et pont des Soupirs.", "apres-midi", "visit", 45.4337, 12.3401, "Venise"],
    ["Gondole au crépuscule", "Petits canaux loin de la foule.", "soir", "visit", 45.4340, 12.3380, "Venise"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Murano et Burano", "Souffleurs de verre et maisons multicolores.", "matin", "visit", 45.4853, 12.4167, "Venise"],
    ["Pont du Rialto et marché", "Poissons et primeurs au bord du Grand Canal.", "apres-midi", "food", 45.4380, 12.3358, "Venise"],
    ["Bacari de Cannaregio", "Cicchetti et spritz sur les fondamenta.", "soir", "food", 45.4450, 12.3320, "Venise"]]'::jsonb);
  IF p_days = 3 THEN
    PERFORM seed_day(v, 3, '[
      ["Gallerie dell''Accademia", "Peinture vénitienne de Bellini à Véronèse.", "matin", "visit", 45.4313, 12.3283, "Venise"],
      ["Dorsoduro et pointe de la Douane", "Salute et collection Peggy Guggenheim.", "apres-midi", "visit", 45.4306, 12.3364, "Venise"],
      ["Coucher de soleil aux Zattere", "Dernier spritz face à la Giudecca.", "soir", "food", 45.4290, 12.3270, "Venise"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 5 jours : Rome ────────────────────────────────────────────
  g := seed_group('ITA', 5);
  PERFORM seed_it_rome(g, 1, 0, 5);

  -- ─── 7 jours : Rome enrichi (Caracalla/Via Appia + excursion Tivoli) ──
  g := seed_group('ITA', 7);
  PERFORM seed_it_rome(g, 1, 0, 7);

  -- ─── 10 jours : Rome → Florence → Venise ───────────────────────
  g := seed_group('ITA', 10);
  PERFORM seed_it_rome(g, 1, 0, 4);
  PERFORM seed_it_florence(g, 2, 4, 3);
  PERFORM seed_it_venice(g, 3, 7, 3);

  -- ─── 14 jours : + Naples/Amalfi + Sicile ───────────────────────
  g := seed_group('ITA', 14);
  PERFORM seed_it_rome(g, 1, 0, 4);
  c := seed_city('ITA', 'Naples', 40.8518, 14.2681, 3, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Spaccanapoli", "La rue qui fend le centre historique en deux.", "matin", "visit", 40.8480, 14.2551, "Naples"],
    ["Chapelle Sansevero et Naples souterraine", "Christ voilé et galeries gréco-romaines.", "apres-midi", "visit", 40.8492, 14.2549, "Naples"],
    ["Pizza napolitaine", "La vraie margherita dans son berceau.", "soir", "food", 40.8510, 14.2630, "Naples"]]'::jsonb);
  e := seed_daytrip('ITA', 'Pompéi', 40.7462, 14.4989, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Site archéologique de Pompéi", "La ville figée par le Vésuve en 79.", "matin", "visit", 40.7462, 14.4989, "Pompéi"],
    ["Villa des Mystères et forum", "Fresques et rues antiques.", "apres-midi", "visit", 40.7510, 14.4780, "Pompéi"],
    ["Herculanum", "Cité romaine mieux conservée encore, en fin de journée.", "soir", "visit", 40.8060, 14.3480, "Ercolano"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Positano", "Village vertical en cascade sur la mer.", "matin", "visit", 40.6281, 14.4850, "Positano"],
    ["Amalfi et sa cathédrale", "Duomo à l''escalier monumental.", "apres-midi", "visit", 40.6340, 14.6027, "Amalfi"],
    ["Route de la côte amalfitaine", "Corniche spectaculaire au couchant.", "soir", "nature", 40.6410, 14.5760, "Côte amalfitaine"]]'::jsonb);
  PERFORM seed_it_florence(g, 3, 7, 2);
  PERFORM seed_it_venice(g, 4, 9, 2);
  c := seed_city('ITA', 'Palerme', 38.1157, 13.3615, 3, g, 5, 11);
  PERFORM seed_day(c, 1, '[
    ["Cathédrale de Palerme et palais des Normands", "Chapelle Palatine aux mosaïques d''or.", "matin", "visit", 38.1114, 13.3524, "Palerme"],
    ["Marché de Ballarò", "Street food sicilienne, arancini et panelle.", "apres-midi", "food", 38.1110, 13.3620, "Palerme"],
    ["Quattro Canti et teatro Massimo", "Baroque sicilien au crépuscule.", "soir", "visit", 38.1157, 13.3613, "Palerme"]]'::jsonb);
  e := seed_daytrip('ITA', 'Agrigente', 37.3111, 13.5766, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Vallée des Temples", "Temples grecs parmi les mieux conservés au monde.", "matin", "visit", 37.2906, 13.5858, "Agrigente"],
    ["Temple de la Concorde", "Le mieux préservé de la vallée.", "apres-midi", "visit", 37.2897, 13.5920, "Agrigente"],
    ["Scala dei Turchi", "Falaise de marne blanche au couchant.", "soir", "beach", 37.2891, 13.4708, "Realmonte"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Taormine", "Corso Umberto et vues sur l''Etna.", "matin", "visit", 37.8516, 15.2853, "Taormine"],
    ["Théâtre antique de Taormine", "Scène grecque face à la mer et au volcan.", "apres-midi", "visit", 37.8523, 15.2922, "Taormine"],
    ["Isola Bella", "Crique et îlot avant le départ.", "soir", "beach", 37.8470, 15.3000, "Taormine"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_it_rome(UUID, INT, INT, INT);
DROP FUNCTION IF EXISTS seed_it_florence(UUID, INT, INT, INT);
DROP FUNCTION IF EXISTS seed_it_venice(UUID, INT, INT, INT);
