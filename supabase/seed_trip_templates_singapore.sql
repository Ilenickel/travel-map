-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Singapour (après seed_trip_templates_helpers.sql)
--   - 4 jours : Singapour (mono-ville)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'SGP';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'SGP';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('SGP', 4);
  c := seed_city('SGP', 'Singapour', 1.3521, 103.8198, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Marina Bay Sands (SkyPark)", "La piscine à débordement la plus célèbre du monde.", "matin", "visit", 1.2834, 103.8607, "Singapour"],
    ["Gardens by the Bay", "Serres Cloud Forest et Flower Dome.", "apres-midi", "nature", 1.2816, 103.8636, "Singapour"],
    ["Spectacle des Supertrees", "Garden Rhapsody, son et lumière gratuit.", "soir", "night", 1.2820, 103.8640, "Singapour"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Chinatown et temple de la Relique de la Dent", "Or, encens et dim sum.", "matin", "visit", 1.2815, 103.8443, "Singapour"],
    ["Little India", "Temple Sri Veeramakaliamman et épices.", "apres-midi", "visit", 1.3066, 103.8518, "Singapour"],
    ["Clarke Quay", "Dîner au bord de la Singapore River.", "soir", "night", 1.2906, 103.8465, "Singapour"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Île de Sentosa", "Plages, SEA Aquarium et téléphérique.", "matin", "beach", 1.2494, 103.8303, "Sentosa"],
    ["Universal Studios Singapore", "Attractions au cœur de Resorts World.", "apres-midi", "visit", 1.2540, 103.8238, "Sentosa"],
    ["Satay de Lau Pa Sat", "Brochettes grillées dans la halle victorienne.", "soir", "food", 1.2806, 103.8505, "Singapour"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Jardin botanique", "Le jardin des orchidées classé à l''Unesco.", "matin", "nature", 1.3138, 103.8159, "Singapour"],
    ["Orchard Road", "Le paradis climatisé du shopping.", "apres-midi", "shopping", 1.3048, 103.8318, "Singapour"],
    ["Kampong Glam", "Mosquée du Sultan et Haji Lane, dernière soirée.", "soir", "food", 1.3025, 103.8590, "Singapour"]]'::jsonb);
END $$;
