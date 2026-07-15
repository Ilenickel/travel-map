-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Irlande (après seed_trip_templates_helpers.sql)
--   - 7 jours : Dublin (+ Howth) → Killarney/Ring of Kerry → Galway (falaises de Moher)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'IRL';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'IRL';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('IRL', 7);
  c := seed_city('IRL', 'Dublin', 53.3498, -6.2603, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Trinity College et Livre de Kells", "La Long Room, plus belle bibliothèque du monde.", "matin", "visit", 53.3438, -6.2546, "Dublin"],
    ["Grafton Street et St Stephen''s Green", "Buskers puis square géorgien.", "apres-midi", "shopping", 53.3413, -6.2600, "Dublin"],
    ["Temple Bar", "Pintes et musique live dans le quartier mythique.", "soir", "night", 53.3454, -6.2646, "Dublin"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Guinness Storehouse", "La pinte parfaite au Gravity Bar panoramique.", "matin", "visit", 53.3419, -6.2867, "Dublin"],
    ["Cathédrale Saint-Patrick", "La grande cathédrale gothique d''Irlande.", "apres-midi", "visit", 53.3395, -6.2714, "Dublin"],
    ["Quartier des docks et pubs à musique", "Session de musique irlandaise traditionnelle.", "soir", "night", 53.3470, -6.2400, "Dublin"]]'::jsonb);
  e := seed_daytrip('IRL', 'Howth', 53.3873, -6.0654, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Falaises de Howth", "Boucle côtière au-dessus de la mer d''Irlande.", "matin", "nature", 53.3750, -6.0530, "Howth"],
    ["Port et phare de Howth", "Phoques et étals de poisson fumé.", "apres-midi", "visit", 53.3930, -6.0680, "Howth"],
    ["Fish and chips au port", "Le classique face aux bateaux.", "soir", "food", 53.3920, -6.0700, "Howth"]]'::jsonb);
  c := seed_city('IRL', 'Killarney', 52.0599, -9.5044, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Cascade de Torc et Ladies View", "Points de vue du parc en calèche ou à vélo.", "matin", "nature", 51.9970, -9.5080, "Killarney"],
    ["Parc national de Killarney", "Muckross House et jardins au bord des lacs.", "apres-midi", "nature", 52.0190, -9.4970, "Killarney"],
    ["Pubs de Killarney", "Ragoût irlandais et fiddle.", "soir", "food", 52.0590, -9.5040, "Killarney"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Ring of Kerry (côte ouest)", "Boucle mythique entre océan et montagnes.", "matin", "nature", 51.8830, -10.3320, "Portmagee"],
    ["Sneem et Kenmare", "Villages colorés du sud de l''anneau.", "apres-midi", "visit", 51.8380, -9.9000, "Sneem"],
    ["Retour par le Gap of Dunloe", "Défilé glaciaire au crépuscule.", "soir", "nature", 52.0060, -9.6350, "Killarney"]]'::jsonb);
  c := seed_city('IRL', 'Galway', 53.2707, -9.0568, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Falaises de Moher", "214 m de falaises au-dessus de l''Atlantique.", "matin", "nature", 52.9719, -9.4265, "Liscannor"],
    ["Le Burren", "Plateau lunaire de calcaire et dolmens.", "apres-midi", "nature", 53.0180, -9.1370, "Burren"],
    ["Arrivée à Galway", "Première pinte sur Quay Street.", "soir", "food", 53.2700, -9.0530, "Galway"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Baie de Galway et Salthill", "Promenade face aux collines du Clare.", "matin", "nature", 53.2600, -9.0800, "Galway"],
    ["Quartier latin de Galway", "Ruelles pavées et arche espagnole.", "apres-midi", "visit", 53.2710, -9.0540, "Galway"],
    ["Dernière session de musique live", "Fiddle et bodhrán avant le départ.", "soir", "night", 53.2720, -9.0550, "Galway"]]'::jsonb);
END $$;
