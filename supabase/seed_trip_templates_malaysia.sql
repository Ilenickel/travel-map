-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Malaisie (après seed_trip_templates_helpers.sql)
--   - 7 jours : Kuala Lumpur (+ grottes de Batu) → Penang → Langkawi
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'MYS';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'MYS';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('MYS', 7);
  c := seed_city('MYS', 'Kuala Lumpur', 3.1390, 101.6869, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Tours Petronas", "Passerelle et observatoire des tours jumelles.", "matin", "visit", 3.1579, 101.7116, "Kuala Lumpur"],
    ["Parc KLCC et aquarium", "Jardins au pied des tours.", "apres-midi", "nature", 3.1550, 101.7130, "Kuala Lumpur"],
    ["Bukit Bintang", "Le quartier des malls et du street food de Jalan Alor.", "soir", "food", 3.1466, 101.7110, "Kuala Lumpur"]]'::jsonb);
  e := seed_daytrip('MYS', 'Grottes de Batu', 3.2379, 101.6841, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Escalier arc-en-ciel et statue de Murugan", "272 marches sous la statue dorée géante.", "matin", "visit", 3.2379, 101.6841, "Batu Caves"],
    ["Grotte-cathédrale", "Temples hindous sous la voûte calcaire.", "apres-midi", "visit", 3.2380, 101.6840, "Batu Caves"],
    ["Place Merdeka et retour", "Bâtiment Sultan Abdul Samad illuminé.", "soir", "visit", 3.1478, 101.6935, "Kuala Lumpur"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Tour KL (Menara)", "Vue à 360° sur la skyline depuis la canopée.", "matin", "visit", 3.1528, 101.7038, "Kuala Lumpur"],
    ["Jardins botaniques Perdana", "Parc aux oiseaux et orchidées.", "apres-midi", "nature", 3.1420, 101.6840, "Kuala Lumpur"],
    ["Petaling Street (Chinatown)", "Marché de nuit et hokkien mee.", "soir", "food", 3.1440, 101.6970, "Kuala Lumpur"]]'::jsonb);
  c := seed_city('MYS', 'George Town', 5.4141, 100.3288, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville de George Town", "Street art et shophouses classées à l''Unesco.", "matin", "visit", 5.4170, 100.3390, "George Town"],
    ["Clan jetties et Khoo Kongsi", "Maisons sur pilotis et temple de clan somptueux.", "apres-midi", "visit", 5.4130, 100.3400, "George Town"],
    ["Hawkers de Chulia Street", "Char kway teow et laksa de Penang.", "soir", "food", 5.4180, 100.3360, "George Town"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Temple Kek Lok Si", "La plus grande pagode de Malaisie.", "matin", "visit", 5.3990, 100.2730, "Air Itam"],
    ["Penang Hill", "Funiculaire vers la fraîcheur et la vue.", "apres-midi", "nature", 5.4250, 100.2680, "Penang Hill"],
    ["Gurney Drive", "Front de mer et hawker center mythique.", "soir", "food", 5.4370, 100.3090, "George Town"]]'::jsonb);
  c := seed_city('MYS', 'Langkawi', 6.3500, 99.8000, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Téléphérique et Sky Bridge", "Pont suspendu au-dessus de la jungle du Machinchang.", "matin", "nature", 6.3860, 99.6660, "Langkawi"],
    ["Plage de Pantai Cenang", "La grande plage animée de l''île.", "apres-midi", "beach", 6.2930, 99.7280, "Langkawi"],
    ["Coucher de soleil sur la mer d''Andaman", "Cocktail les pieds dans le sable.", "soir", "beach", 6.2920, 99.7270, "Langkawi"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Mangrove de Kilim", "Aigles, grottes et forêts flottantes en bateau.", "matin", "nature", 6.4090, 99.8520, "Langkawi"],
    ["Cascade des Sept Puits", "Bassins naturels étagés dans la jungle.", "apres-midi", "nature", 6.3820, 99.6740, "Langkawi"],
    ["Marché de nuit de Kuah", "Dernière soirée de spécialités malaises.", "soir", "food", 6.3260, 99.8430, "Kuah"]]'::jsonb);
END $$;
