-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — France (après seed_trip_templates_helpers.sql)
--   - 5 jours  : Paris (+ excursion Versailles)
--   - 7 jours  : Paris enrichi (Rodin/Opéra, Père-Lachaise/Catacombes/Pigalle)
--   - 10 jours : Paris → Loire (Tours) → Provence (Avignon + Aix + Arles)
--   - 15 jours : Paris → Loire → Bordeaux (+ St-Émilion) → Provence → Nice (+ Monaco, Saint-Paul-de-Vence)
--   - 14 jours : Sud-Ouest — Paris → Bordeaux → Biarritz (+ St-Jean-de-Luz) → Toulouse → Carcassonne → Montpellier (+ Sète)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'FRA';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'FRA';
-- ════════════════════════════════════════════════════════════════

-- Bloc Paris réutilisé par les itinéraires, avec un VRAI nombre de jours
-- différent selon le rôle de Paris dans le voyage — pas un contenu
-- redistribué sous un autre ordre. Paris est la porte d'entrée de tous les
-- itinéraires France mais n'y occupe pas la même place : voyage centré sur
-- la capitale (10j classique) vs. simple point de départ d'un grand tour ou
-- d'un voyage régional (14j, 12j Sud-Ouest), qui consacrent délibérément
-- moins de temps à Paris pour privilégier le reste du pays.
--   p_days=2 : Eiffel/Orsay + Louvre/Montmartre, SANS Versailles (départ
--              rapide vers le Sud-Ouest, pas le temps pour une excursion).
--   p_days=3 : les 2 mêmes jours + excursion Versailles.
--   p_days=4 : + un 3e jour propre (Notre-Dame/Quartier latin/St-Germain)
--              avant Versailles — la version la plus complète.
--   p_days=5 : + Centre Pompidou/Marais/Champs-Élysées.
--   p_days=7 : + Sainte-Chapelle/Rodin/Opéra puis Père-Lachaise/Catacombes/Pigalle.
CREATE OR REPLACE FUNCTION seed_fr_paris(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v_city UUID; v_exc UUID;
BEGIN
  v_city := seed_city('FRA', 'Paris', 48.8566, 2.3522, p_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v_city, 1, '[
    ["Tour Eiffel", "Montée au monument emblématique, vue sur tout Paris.", "matin", "visit", 48.8584, 2.2945, "Champ de Mars, Paris"],
    ["Musée d''Orsay", "Chefs-d''œuvre impressionnistes dans une ancienne gare.", "apres-midi", "visit", 48.8600, 2.3266, "Paris 7e"],
    ["Croisière sur la Seine", "Monuments illuminés depuis un bateau-mouche.", "soir", "visit", 48.8608, 2.2977, "Port de la Bourdonnais, Paris"]]'::jsonb);
  PERFORM seed_day(v_city, 2, '[
    ["Musée du Louvre", "Le plus grand musée du monde, Joconde incluse.", "matin", "visit", 48.8606, 2.3376, "Paris 1er"],
    ["Jardin des Tuileries et place Vendôme", "Promenade du Louvre à la Concorde.", "apres-midi", "nature", 48.8635, 2.3275, "Paris 1er"],
    ["Montmartre et Sacré-Cœur", "Butte des artistes, place du Tertre, panorama.", "soir", "visit", 48.8867, 2.3431, "Paris 18e"]]'::jsonb);
  IF p_days >= 3 THEN
    v_exc := seed_daytrip('FRA', 'Versailles', 48.8049, 2.1204, v_city, 2);
    PERFORM seed_day(v_exc, 1, '[
      ["Château de Versailles", "Galerie des Glaces et grands appartements royaux.", "matin", "visit", 48.8049, 2.1204, "Versailles"],
      ["Jardins de Versailles", "Bosquets, bassins et grandes perspectives de Le Nôtre.", "apres-midi", "nature", 48.8026, 2.1130, "Versailles"],
      ["Domaine de Trianon", "Grand et Petit Trianon, hameau de la Reine.", "soir", "visit", 48.8151, 2.1093, "Versailles"]]'::jsonb);
  END IF;
  IF p_days >= 4 THEN
    PERFORM seed_day(v_city, 4, '[
      ["Cathédrale Notre-Dame et île de la Cité", "Cœur historique de Paris, Sainte-Chapelle voisine.", "matin", "visit", 48.8530, 2.3499, "Île de la Cité, Paris"],
      ["Quartier latin et Panthéon", "Sorbonne, rue Mouffetard, grands hommes.", "apres-midi", "visit", 48.8462, 2.3464, "Paris 5e"],
      ["Saint-Germain-des-Prés", "Cafés littéraires et galeries de la rive gauche.", "soir", "food", 48.8539, 2.3338, "Paris 6e"]]'::jsonb);
  END IF;
  IF p_days >= 5 THEN
    PERFORM seed_day(v_city, 5, '[
      ["Centre Pompidou", "Art moderne et vue depuis les escalators.", "matin", "visit", 48.8607, 2.3522, "Paris 4e"],
      ["Le Marais", "Place des Vosges, hôtels particuliers, boutiques.", "apres-midi", "shopping", 48.8570, 2.3626, "Paris 4e"],
      ["Champs-Élysées et Arc de Triomphe", "La plus belle avenue jusqu''au toit de l''Arc, illuminée.", "soir", "visit", 48.8738, 2.2950, "Paris 8e"]]'::jsonb);
  END IF;
  IF p_days >= 7 THEN
    PERFORM seed_day(v_city, 6, '[
      ["Sainte-Chapelle et Conciergerie", "La nef aux mille vitraux et la prison de Marie-Antoinette.", "matin", "visit", 48.8554, 2.3450, "Paris 1er"],
      ["Musée Rodin et Invalides", "Le Penseur dans son jardin, puis le tombeau de Napoléon.", "apres-midi", "visit", 48.8553, 2.3159, "Paris 7e"],
      ["Opéra Garnier et grands boulevards", "Le grand escalier puis les passages couverts.", "soir", "visit", 48.8720, 2.3316, "Paris 9e"]]'::jsonb);
    PERFORM seed_day(v_city, 7, '[
      ["Cimetière du Père-Lachaise", "Sur les tombes de Chopin, Wilde et Morrison.", "matin", "visit", 48.8614, 2.3933, "Paris 20e"],
      ["Catacombes de Paris", "L''ossuaire souterrain de six millions de Parisiens.", "apres-midi", "visit", 48.8339, 2.3324, "Paris 14e"],
      ["Pigalle et Moulin Rouge", "Cabarets et néons du Paris nocturne.", "soir", "night", 48.8841, 2.3324, "Paris 18e"]]'::jsonb);
  END IF;
  RETURN v_city;
END $$;

-- Bloc Bordeaux (2 jours dont excursion Saint-Émilion) : itinéraires 14j et 12j.
CREATE OR REPLACE FUNCTION seed_fr_bordeaux(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v_city UUID; v_exc UUID;
BEGIN
  v_city := seed_city('FRA', 'Bordeaux', 44.8378, -0.5792, 2, p_group, p_pos, p_offset);
  PERFORM seed_day(v_city, 1, '[
    ["Place de la Bourse et miroir d''eau", "Façade XVIIIe reflétée dans le plus grand miroir d''eau du monde.", "matin", "visit", 44.8412, -0.5704, "Bordeaux"],
    ["Cité du Vin", "Musée immersif du vin, dégustation panoramique au belvédère.", "apres-midi", "visit", 44.8627, -0.5504, "Bordeaux"],
    ["Quartier Saint-Pierre et rue Sainte-Catherine", "Ruelles animées et plus longue rue commerçante d''Europe.", "soir", "food", 44.8393, -0.5717, "Bordeaux"]]'::jsonb);
  v_exc := seed_daytrip('FRA', 'Saint-Émilion', 44.8934, -0.1552, v_city, 1);
  PERFORM seed_day(v_exc, 1, '[
    ["Village médiéval de Saint-Émilion", "Cité viticole classée à l''Unesco, ruelles pavées.", "matin", "visit", 44.8934, -0.1552, "Saint-Émilion"],
    ["Église monolithe et visite de vignoble", "Église creusée dans la roche puis chai d''un grand cru.", "apres-midi", "visit", 44.8929, -0.1558, "Saint-Émilion"],
    ["Dégustation au château", "Verticale de millésimes face aux vignes au couchant.", "soir", "food", 44.8900, -0.1600, "Saint-Émilion"]]'::jsonb);
  RETURN v_city;
END $$;

-- Bloc Loire (Tours, 2 jours) : itinéraires 10j et 14j.
CREATE OR REPLACE FUNCTION seed_fr_loire(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v_city UUID;
BEGIN
  v_city := seed_city('FRA', 'Tours', 47.3941, 0.6848, 2, p_group, p_pos, p_offset);
  PERFORM seed_day(v_city, 1, '[
    ["Château de Chambord", "Le plus vaste château de la Loire, escalier à double révolution.", "matin", "visit", 47.6161, 1.5170, "Chambord"],
    ["Château de Chenonceau", "Le château des Dames enjambant le Cher.", "apres-midi", "visit", 47.3249, 1.0706, "Chenonceaux"],
    ["Amboise", "Château royal et Clos Lucé, dernière demeure de Léonard de Vinci.", "soir", "visit", 47.4136, 0.9860, "Amboise"]]'::jsonb);
  PERFORM seed_day(v_city, 2, '[
    ["Château de Villandry", "Jardins Renaissance en terrasses, potager décoratif.", "matin", "nature", 47.3400, 0.5140, "Villandry"],
    ["Château d''Azay-le-Rideau", "Joyau Renaissance posé sur l''Indre.", "apres-midi", "visit", 47.2593, 0.4657, "Azay-le-Rideau"],
    ["Vieux Tours", "Place Plumereau et maisons à colombages.", "soir", "food", 47.3936, 0.6829, "Tours"]]'::jsonb);
  RETURN v_city;
END $$;

-- Bloc Provence (Avignon, 3 ou 4 jours dont excursions Aix et Arles).
CREATE OR REPLACE FUNCTION seed_fr_provence(p_group UUID, p_pos INT, p_offset INT, p_four BOOLEAN)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v_city UUID; v_exc UUID; v_aix_offset INT; v_arles_offset INT;
BEGIN
  v_city := seed_city('FRA', 'Avignon', 43.9493, 4.8055, CASE WHEN p_four THEN 4 ELSE 3 END, p_group, p_pos, p_offset);
  PERFORM seed_day(v_city, 1, '[
    ["Palais des Papes", "Le plus grand palais gothique du monde.", "matin", "visit", 43.9509, 4.8075, "Avignon"],
    ["Pont Saint-Bénézet", "Le célèbre pont d''Avignon sur le Rhône.", "apres-midi", "visit", 43.9539, 4.8047, "Avignon"],
    ["Place de l''Horloge et remparts", "Cœur animé de la cité des Papes.", "soir", "food", 43.9496, 4.8060, "Avignon"]]'::jsonb);
  IF p_four THEN
    PERFORM seed_day(v_city, 2, '[
      ["Pont du Gard", "Aqueduc romain à trois étages classé à l''Unesco.", "matin", "visit", 43.9475, 4.5350, "Vers-Pont-du-Gard"],
      ["Les Baux-de-Provence", "Village perché et Carrières de Lumières.", "apres-midi", "visit", 43.7447, 4.7954, "Les Baux-de-Provence"],
      ["Gordes", "Village emblématique du Luberon à flanc de falaise.", "soir", "visit", 43.9115, 5.2003, "Gordes"]]'::jsonb);
    v_aix_offset := 2; v_arles_offset := 3;
  ELSE
    v_aix_offset := 1; v_arles_offset := 2;
  END IF;
  v_exc := seed_daytrip('FRA', 'Aix-en-Provence', 43.5297, 5.4474, v_city, v_aix_offset);
  PERFORM seed_day(v_exc, 1, '[
    ["Cours Mirabeau", "Avenue plantée de platanes, fontaines et cafés.", "matin", "visit", 43.5263, 5.4497, "Aix-en-Provence"],
    ["Vieil Aix et cathédrale Saint-Sauveur", "Ruelles anciennes et cloître roman.", "apres-midi", "visit", 43.5320, 5.4477, "Aix-en-Provence"],
    ["Place des Cardeurs", "Terrasses provençales au soleil couchant.", "soir", "food", 43.5290, 5.4460, "Aix-en-Provence"]]'::jsonb);
  v_exc := seed_daytrip('FRA', 'Arles', 43.6766, 4.6278, v_city, v_arles_offset);
  PERFORM seed_day(v_exc, 1, '[
    ["Arènes d''Arles", "Amphithéâtre romain toujours en activité.", "matin", "visit", 43.6777, 4.6310, "Arles"],
    ["Camargue", "Étangs, chevaux blancs et flamants roses.", "apres-midi", "nature", 43.5292, 4.4287, "Saintes-Maries-de-la-Mer"],
    ["Place du Forum", "Café Van Gogh et soirée arlésienne.", "soir", "food", 43.6778, 4.6277, "Arles"]]'::jsonb);
  RETURN v_city;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 5 jours : Paris ───────────────────────────────────────────
  g := seed_group('FRA', 5);
  PERFORM seed_fr_paris(g, 1, 0, 5);

  -- ─── 7 jours : Paris enrichi (Rodin/Opéra, Père-Lachaise/Catacombes) ──
  g := seed_group('FRA', 7);
  PERFORM seed_fr_paris(g, 1, 0, 7);

  -- ─── 10 jours : Paris → Loire → Provence ───────────────────────
  g := seed_group('FRA', 10);
  PERFORM seed_fr_paris(g, 1, 0, 4);
  PERFORM seed_fr_loire(g, 2, 4);
  PERFORM seed_fr_provence(g, 3, 6, true);

  -- ─── 15 jours : Paris → Loire → Bordeaux → Provence → Nice ─────
  -- Paris garde ses 4 jours complets partout (aucune raison de rogner un
  -- vrai contenu pour éviter des doublons — voir handleSuggest côté API,
  -- qui déduplique désormais par contenu réel, pas par durée arbitraire).
  g := seed_group('FRA', 15);
  PERFORM seed_fr_paris(g, 1, 0, 4);
  PERFORM seed_fr_loire(g, 2, 4);
  PERFORM seed_fr_bordeaux(g, 3, 6);
  PERFORM seed_fr_provence(g, 4, 8, false);
  c := seed_city('FRA', 'Nice', 43.7102, 7.2620, 4, g, 5, 11);
  PERFORM seed_day(c, 1, '[
    ["Vieux Nice", "Cours Saleya, ruelles colorées et socca.", "matin", "visit", 43.6961, 7.2756, "Nice"],
    ["Promenade des Anglais", "Front de mer mythique de la Baie des Anges.", "apres-midi", "visit", 43.6950, 7.2652, "Nice"],
    ["Colline du Château", "Panorama sur la baie et le port au couchant.", "soir", "nature", 43.6949, 7.2799, "Nice"]]'::jsonb);
  e := seed_daytrip('FRA', 'Monaco', 43.7384, 7.4246, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Rocher et palais princier", "Relève de la garde et vieille ville de Monaco-Ville.", "matin", "visit", 43.7314, 7.4206, "Monaco"],
    ["Musée océanographique", "Aquariums historiques face à la Méditerranée.", "apres-midi", "visit", 43.7307, 7.4256, "Monaco"],
    ["Monte-Carlo et casino", "Place du Casino et jardins illuminés.", "soir", "night", 43.7392, 7.4283, "Monaco"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Èze village", "Village médiéval perché et jardin exotique.", "matin", "visit", 43.7275, 7.3617, "Èze"],
    ["Vieil Antibes", "Remparts, marché provençal et musée Picasso.", "apres-midi", "visit", 43.5808, 7.1251, "Antibes"],
    ["Cannes et la Croisette", "Palais des Festivals et front de mer.", "soir", "visit", 43.5513, 7.0174, "Cannes"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Saint-Paul-de-Vence", "Village d''artistes perché, galeries et remparts.", "matin", "visit", 43.6960, 7.1220, "Saint-Paul-de-Vence"],
    ["Fondation Maeght", "L''une des plus grandes collections d''art moderne privées d''Europe.", "apres-midi", "visit", 43.7010, 7.1160, "Saint-Paul-de-Vence"],
    ["Cagnes-sur-Mer", "Château-musée Renoir et vieille ville, dernière soirée.", "soir", "food", 43.6650, 7.1490, "Cagnes-sur-Mer"]]'::jsonb);

  -- ─── 14 jours : Sud-Ouest ──────────────────────────────────────
  g := seed_group('FRA', 14);
  PERFORM seed_fr_paris(g, 1, 0, 4);
  PERFORM seed_fr_bordeaux(g, 2, 4);
  c := seed_city('FRA', 'Biarritz', 43.4832, -1.5586, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Grande Plage et Rocher de la Vierge", "Front de mer impérial et passerelle Eiffel.", "matin", "beach", 43.4844, -1.5590, "Biarritz"],
    ["Phare de Biarritz", "Vue sur la côte basque depuis la pointe Saint-Martin.", "apres-midi", "visit", 43.4961, -1.5539, "Biarritz"],
    ["Port des Pêcheurs", "Cabanes de pêcheurs et tapas basques.", "soir", "food", 43.4837, -1.5643, "Biarritz"]]'::jsonb);
  e := seed_daytrip('FRA', 'Saint-Jean-de-Luz', 43.3887, -1.6631, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Baie de Saint-Jean-de-Luz", "Plage abritée et digues de la baie basque.", "matin", "beach", 43.3903, -1.6636, "Saint-Jean-de-Luz"],
    ["Maison Louis XIV et rue Gambetta", "Ville du mariage royal, boutiques de linge basque.", "apres-midi", "visit", 43.3873, -1.6620, "Saint-Jean-de-Luz"],
    ["Port et quartier de Ciboure", "Front de port au couchant, gâteaux basques.", "soir", "food", 43.3855, -1.6656, "Ciboure"]]'::jsonb);
  c := seed_city('FRA', 'Toulouse', 43.6047, 1.4442, 3, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Place du Capitole", "Cœur de la Ville rose et sa mairie monumentale.", "matin", "visit", 43.6045, 1.4440, "Toulouse"],
    ["Basilique Saint-Sernin", "Plus grande église romane d''Europe, étape de Compostelle.", "apres-midi", "visit", 43.6083, 1.4419, "Toulouse"],
    ["Bords de Garonne", "Place Saint-Pierre et quais au soleil couchant.", "soir", "food", 43.6031, 1.4390, "Toulouse"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Cité de l''espace", "Parc dédié à l''aventure spatiale, fusée Ariane 5.", "matin", "visit", 43.5861, 1.4904, "Toulouse"],
    ["Couvent des Jacobins", "Palmier gothique et reliques de saint Thomas d''Aquin.", "apres-midi", "visit", 43.6021, 1.4404, "Toulouse"],
    ["Quartier des Carmes", "Ruelles gourmandes du vieux Toulouse.", "soir", "food", 43.5987, 1.4457, "Toulouse"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Musée des Augustins", "Sculptures romanes et gothiques dans un ancien couvent.", "matin", "visit", 43.6001, 1.4453, "Toulouse"],
    ["Prairie des Filtres", "Grande pelouse au bord de la Garonne, vue sur les Ponts-Jumeaux.", "apres-midi", "nature", 43.5967, 1.4370, "Toulouse"],
    ["Marché Victor-Hugo", "Halle gourmande, dernière soirée toulousaine.", "soir", "food", 43.6070, 1.4460, "Toulouse"]]'::jsonb);
  c := seed_city('FRA', 'Carcassonne', 43.2130, 2.3491, 1, g, 5, 11);
  PERFORM seed_day(c, 1, '[
    ["Cité médiévale de Carcassonne", "Double enceinte fortifiée classée à l''Unesco.", "matin", "visit", 43.2065, 2.3644, "Carcassonne"],
    ["Château comtal et basilique Saint-Nazaire", "Remparts intérieurs et vitraux gothiques.", "apres-midi", "visit", 43.2060, 2.3630, "Carcassonne"],
    ["Bastide Saint-Louis", "Ville basse, place Carnot et cassoulet.", "soir", "food", 43.2119, 2.3500, "Carcassonne"]]'::jsonb);
  c := seed_city('FRA', 'Montpellier', 43.6108, 3.8767, 2, g, 6, 12);
  PERFORM seed_day(c, 1, '[
    ["Place de la Comédie et Écusson", "Cœur piéton et ruelles médiévales.", "matin", "visit", 43.6089, 3.8797, "Montpellier"],
    ["Promenade du Peyrou et cathédrale Saint-Pierre", "Arc de triomphe, aqueduc et vue sur la mer.", "apres-midi", "visit", 43.6114, 3.8703, "Montpellier"],
    ["Plage de Palavas-les-Flots", "Coucher de soleil les pieds dans la Méditerranée.", "soir", "beach", 43.5280, 3.9295, "Palavas-les-Flots"]]'::jsonb);
  e := seed_daytrip('FRA', 'Sète', 43.4047, 3.6971, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Canaux de Sète", "La Venise du Languedoc et ses pointus colorés.", "matin", "visit", 43.4047, 3.6971, "Sète"],
    ["Mont Saint-Clair", "Panorama sur l''étang de Thau et la Méditerranée.", "apres-midi", "nature", 43.3980, 3.6950, "Sète"],
    ["Tielles et retour à Montpellier", "Spécialité sétoise, dernière soirée du voyage.", "soir", "food", 43.6090, 3.8790, "Montpellier"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_fr_paris(UUID, INT, INT, INT);
DROP FUNCTION IF EXISTS seed_fr_bordeaux(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_fr_loire(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_fr_provence(UUID, INT, INT, BOOLEAN);
