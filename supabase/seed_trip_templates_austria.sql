-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Autriche (après seed_trip_templates_helpers.sql)
--   - 4 jours : Vienne
--   - 8 jours : Vienne → Salzbourg (+ Hallstatt) → Innsbruck
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'AUT';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'AUT';
-- ════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION seed_at_vienna(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('AUT', 'Vienne', 48.2082, 16.3738, 4, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Palais de Schönbrunn", "Résidence d''été des Habsbourg et sa gloriette.", "matin", "visit", 48.1845, 16.3122, "Vienne"],
    ["Cathédrale Saint-Étienne et Graben", "Toit vernissé et artère élégante.", "apres-midi", "visit", 48.2085, 16.3731, "Vienne"],
    ["Café Sacher", "La Sachertorte dans son berceau.", "soir", "food", 48.2038, 16.3697, "Vienne"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Palais de la Hofburg", "Appartements impériaux et musée Sissi.", "matin", "visit", 48.2065, 16.3654, "Vienne"],
    ["Musée d''histoire de l''art", "Bruegel et le cabinet des merveilles.", "apres-midi", "visit", 48.2038, 16.3617, "Vienne"],
    ["Opéra d''État de Vienne", "Spectacle ou visite du temple lyrique.", "soir", "night", 48.2029, 16.3690, "Vienne"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Palais du Belvédère", "Le Baiser de Klimt dans le palais du prince Eugène.", "matin", "visit", 48.1915, 16.3808, "Vienne"],
    ["Naschmarkt", "Le grand marché gourmand de Vienne.", "apres-midi", "food", 48.1985, 16.3634, "Vienne"],
    ["Quartier des Musées", "MuseumsQuartier et cours animées.", "soir", "night", 48.2030, 16.3590, "Vienne"]]'::jsonb);
  PERFORM seed_day(v, 4, '[
    ["Grande roue du Prater", "La roue de 1897 au-dessus du parc.", "matin", "visit", 48.2167, 16.3958, "Vienne"],
    ["Hundertwasserhaus", "L''immeuble ondulant et végétal.", "apres-midi", "visit", 48.2074, 16.3942, "Vienne"],
    ["Heuriger de Grinzing", "Vin nouveau dans les tavernes des vignes.", "soir", "food", 48.2620, 16.3450, "Vienne"]]'::jsonb);
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 4 jours : Vienne ──────────────────────────────────────────
  g := seed_group('AUT', 4);
  PERFORM seed_at_vienna(g, 1, 0);

  -- ─── 8 jours : Vienne → Salzbourg → Innsbruck ──────────────────
  g := seed_group('AUT', 8);
  PERFORM seed_at_vienna(g, 1, 0);
  c := seed_city('AUT', 'Salzbourg', 47.8095, 13.0550, 2, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Getreidegasse et maison de Mozart", "Enseignes en fer forgé et maison natale du génie.", "matin", "visit", 47.8000, 13.0430, "Salzbourg"],
    ["Forteresse de Hohensalzburg", "Funiculaire vers la plus grande forteresse d''Europe centrale.", "apres-midi", "visit", 47.7945, 13.0470, "Salzbourg"],
    ["Vieille ville au bord de la Salzach", "Cathédrale baroque et cafés historiques.", "soir", "food", 47.7990, 13.0450, "Salzbourg"]]'::jsonb);
  e := seed_daytrip('AUT', 'Hallstatt', 47.5622, 13.6493, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Village de Hallstatt", "Maisons de bois entre lac et falaise.", "matin", "visit", 47.5622, 13.6493, "Hallstatt"],
    ["Mine de sel et Skywalk", "La plus vieille mine de sel du monde et sa passerelle.", "apres-midi", "visit", 47.5630, 13.6420, "Hallstatt"],
    ["Rives du lac au couchant", "Le point de vue carte postale du village.", "soir", "nature", 47.5610, 13.6480, "Hallstatt"]]'::jsonb);
  c := seed_city('AUT', 'Innsbruck', 47.2692, 11.4041, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Nordkette", "Funiculaire de Zaha Hadid puis téléphérique à 2 300 m.", "matin", "nature", 47.3120, 11.3800, "Innsbruck"],
    ["Petit Toit d''or", "L''emblème gothique de la vieille ville.", "apres-midi", "visit", 47.2687, 11.3936, "Innsbruck"],
    ["Maria-Theresien-Strasse", "Façades baroques face aux montagnes.", "soir", "food", 47.2650, 11.3930, "Innsbruck"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Tremplin de Bergisel", "L''architecture olympique au-dessus de la ville.", "matin", "visit", 47.2470, 11.3990, "Innsbruck"],
    ["Palais impérial d''Innsbruck", "La Hofburg tyrolienne de Marie-Thérèse.", "apres-midi", "visit", 47.2696, 11.3948, "Innsbruck"],
    ["Dernière soirée tyrolienne", "Auberge traditionnelle avant le départ.", "soir", "food", 47.2680, 11.3930, "Innsbruck"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_at_vienna(UUID, INT, INT);
