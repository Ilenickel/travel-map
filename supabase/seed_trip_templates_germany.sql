-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Allemagne (après seed_trip_templates_helpers.sql)
--   - 5 jours  : Berlin (+ excursion Potsdam)
--   - 10 jours : Berlin → Dresde → Munich (+ Neuschwanstein) → vallée du Rhin → Cologne
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'DEU';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'DEU';
-- ════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION seed_de_berlin(p_group UUID, p_pos INT, p_offset INT, p_five BOOLEAN)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('DEU', 'Berlin', 52.5200, 13.4050, CASE WHEN p_five THEN 5 ELSE 4 END, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Porte de Brandebourg", "Le symbole de la réunification.", "matin", "visit", 52.5163, 13.3777, "Berlin"],
    ["Reichstag et sa coupole", "Coupole de verre au-dessus du Parlement.", "apres-midi", "visit", 52.5186, 13.3762, "Berlin"],
    ["Potsdamer Platz", "La place ressuscitée du Berlin moderne.", "soir", "visit", 52.5096, 13.3760, "Berlin"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["East Side Gallery", "1,3 km de mur peint par des artistes du monde entier.", "matin", "visit", 52.5050, 13.4397, "Berlin"],
    ["Checkpoint Charlie et musée du Mur", "Le poste-frontière de la guerre froide.", "apres-midi", "visit", 52.5075, 13.3903, "Berlin"],
    ["Kreuzberg", "Currywurst, street art et bars alternatifs.", "soir", "night", 52.4990, 13.4030, "Berlin"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Île aux Musées", "Pergamon, Neues Museum et le buste de Néfertiti.", "matin", "visit", 52.5169, 13.4010, "Berlin"],
    ["Cathédrale de Berlin et Alexanderplatz", "Coupole puis tour de télévision.", "apres-midi", "visit", 52.5192, 13.4010, "Berlin"],
    ["Hackescher Markt", "Cours intérieures et cafés de Mitte.", "soir", "food", 52.5225, 13.4022, "Berlin"]]'::jsonb);
  PERFORM seed_day(v, 4, '[
    ["Château de Charlottenbourg", "Résidence baroque des Hohenzollern.", "matin", "visit", 52.5208, 13.2957, "Berlin"],
    ["Kurfürstendamm et église du Souvenir", "Clocher en ruine, mémorial de la guerre.", "apres-midi", "shopping", 52.5047, 13.3350, "Berlin"],
    ["Prenzlauer Berg", "Kastanienallee et brasseries de quartier.", "soir", "food", 52.5390, 13.4240, "Berlin"]]'::jsonb);
  IF p_five THEN
    e := seed_daytrip('DEU', 'Potsdam', 52.3906, 13.0645, v, 4);
    PERFORM seed_day(e, 1, '[
      ["Nouveau Palais et parc", "Fastes de Frédéric le Grand.", "matin", "nature", 52.4010, 13.0160, "Potsdam"],
      ["Château de Sanssouci", "Le petit Versailles prussien et ses vignes en terrasses.", "apres-midi", "visit", 52.4042, 13.0385, "Potsdam"],
      ["Quartier hollandais", "Briques rouges et cafés avant le retour.", "soir", "food", 52.4020, 13.0590, "Potsdam"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 5 jours : Berlin + Potsdam ────────────────────────────────
  g := seed_group('DEU', 5);
  PERFORM seed_de_berlin(g, 1, 0, true);

  -- ─── 10 jours : Berlin → Dresde → Munich → Rhin → Cologne ──────
  g := seed_group('DEU', 10);
  PERFORM seed_de_berlin(g, 1, 0, false);
  c := seed_city('DEU', 'Dresde', 51.0504, 13.7373, 1, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Frauenkirche", "L''église reconstruite pierre par pierre après 1945.", "matin", "visit", 51.0519, 13.7417, "Dresde"],
    ["Zwinger", "Palais baroque et galerie des Maîtres anciens.", "apres-midi", "visit", 51.0530, 13.7337, "Dresde"],
    ["Terrasse de Brühl", "Le balcon de l''Europe au bord de l''Elbe.", "soir", "visit", 51.0533, 13.7404, "Dresde"]]'::jsonb);
  c := seed_city('DEU', 'Munich', 48.1351, 11.5820, 3, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Marienplatz et carillon", "Le Glockenspiel du nouvel hôtel de ville.", "matin", "visit", 48.1374, 11.5755, "Munich"],
    ["Frauenkirche et Viktualienmarkt", "Tours à bulbes puis marché gourmand.", "apres-midi", "food", 48.1351, 11.5762, "Munich"],
    ["Hofbräuhaus", "La brasserie la plus célèbre du monde.", "soir", "food", 48.1376, 11.5798, "Munich"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Résidence de Munich", "Palais des Wittelsbach et Trésor.", "matin", "visit", 48.1417, 11.5790, "Munich"],
    ["Jardin anglais", "Surfeurs de l''Eisbach et tour chinoise.", "apres-midi", "nature", 48.1642, 11.6056, "Munich"],
    ["Quartier de Schwabing", "Bohème munichoise et bières en terrasse.", "soir", "night", 48.1590, 11.5860, "Munich"]]'::jsonb);
  e := seed_daytrip('DEU', 'Neuschwanstein', 47.5576, 10.7498, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Château de Neuschwanstein", "Le château de conte de fées de Louis II.", "matin", "visit", 47.5576, 10.7498, "Schwangau"],
    ["Pont de Marie (Marienbrücke)", "La vue iconique sur le château et les gorges.", "apres-midi", "nature", 47.5580, 10.7530, "Schwangau"],
    ["Château de Hohenschwangau et lac Alpsee", "Résidence d''enfance du roi au bord du lac.", "soir", "visit", 47.5556, 10.7367, "Schwangau"]]'::jsonb);
  c := seed_city('DEU', 'Rüdesheim', 49.9789, 7.9224, 1, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Croisière sur le Rhin romantique", "Châteaux perchés et rocher de la Lorelei.", "matin", "nature", 50.1390, 7.7290, "Sankt Goarshausen"],
    ["Bacharach", "Village à colombages au bord du fleuve.", "apres-midi", "visit", 50.0590, 7.7690, "Bacharach"],
    ["Drosselgasse", "Ruelle des tavernes à vin de Rüdesheim.", "soir", "food", 49.9780, 7.9220, "Rüdesheim"]]'::jsonb);
  c := seed_city('DEU', 'Cologne', 50.9375, 6.9603, 1, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Cathédrale de Cologne", "Flèches gothiques classées à l''Unesco.", "matin", "visit", 50.9413, 6.9583, "Cologne"],
    ["Vieille ville et pont Hohenzollern", "Cadenas d''amour au-dessus du Rhin.", "apres-midi", "visit", 50.9410, 6.9650, "Cologne"],
    ["Brasserie à Kölsch", "La bière locale servie sans fin, avant le départ.", "soir", "food", 50.9380, 6.9600, "Cologne"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_de_berlin(UUID, INT, INT, BOOLEAN);
