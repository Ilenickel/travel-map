-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Portugal (après seed_trip_templates_helpers.sql)
--   - 4 jours : Lisbonne (+ excursion Sintra)
--   - 8 jours : Lisbonne → Porto → Algarve (Lagos)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'PRT';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'PRT';
-- ════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION seed_pt_lisbon(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('PRT', 'Lisbonne', 38.7223, -9.1393, 4, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Château São Jorge et Alfama", "Remparts maures au-dessus des toits.", "matin", "visit", 38.7139, -9.1335, "Lisbonne"],
    ["Cathédrale Sé et miradouros", "Portas do Sol et Santa Luzia, balcons sur le Tage.", "apres-midi", "visit", 38.7098, -9.1326, "Lisbonne"],
    ["Fado à Alfama", "Le chant de l''âme portugaise dans une taverne.", "soir", "night", 38.7120, -9.1300, "Lisbonne"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Monastère des Hiéronymites", "Chef-d''œuvre manuélin de Belém.", "matin", "visit", 38.6979, -9.2068, "Lisbonne"],
    ["Tour de Belém et monument des Découvertes", "Sentinelles du Tage des grands navigateurs.", "apres-midi", "visit", 38.6916, -9.2160, "Lisbonne"],
    ["Pastéis de Belém puis LX Factory", "La tarte originelle et la friche créative.", "soir", "food", 38.7034, -9.2039, "Lisbonne"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Tram 28 et Chiado", "Le tramway jaune à travers les quartiers historiques.", "matin", "visit", 38.7107, -9.1421, "Lisbonne"],
    ["Praça do Comércio et Baixa", "Place royale sur le Tage, elevador de Santa Justa.", "apres-midi", "visit", 38.7075, -9.1364, "Lisbonne"],
    ["Bairro Alto", "Bars et petisco dans les ruelles hautes.", "soir", "night", 38.7130, -9.1440, "Lisbonne"]]'::jsonb);
  e := seed_daytrip('PRT', 'Sintra', 38.7979, -9.3903, v, 3);
  PERFORM seed_day(e, 1, '[
    ["Palais de Pena", "Le palais romantique multicolore dans la brume.", "matin", "visit", 38.7876, -9.3906, "Sintra"],
    ["Quinta da Regaleira", "Puits initiatique et jardins ésotériques.", "apres-midi", "visit", 38.7963, -9.3960, "Sintra"],
    ["Cabo da Roca", "Le point le plus occidental d''Europe au couchant.", "soir", "nature", 38.7804, -9.4989, "Cabo da Roca"]]'::jsonb);
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── 4 jours : Lisbonne + Sintra ───────────────────────────────
  g := seed_group('PRT', 4);
  PERFORM seed_pt_lisbon(g, 1, 0);

  -- ─── 8 jours : Lisbonne → Porto → Algarve ──────────────────────
  g := seed_group('PRT', 8);
  PERFORM seed_pt_lisbon(g, 1, 0);
  c := seed_city('PRT', 'Porto', 41.1579, -8.6291, 2, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Ribeira", "Façades colorées au bord du Douro, classées Unesco.", "matin", "visit", 41.1407, -8.6110, "Porto"],
    ["Librairie Lello et gare São Bento", "Escalier mythique et 20 000 azulejos.", "apres-midi", "visit", 41.1469, -8.6148, "Porto"],
    ["Pont Dom-Luís au couchant", "Traversée du tablier supérieur face à la ville.", "soir", "visit", 41.1400, -8.6094, "Porto"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Caves de Vila Nova de Gaia", "Dégustation de porto dans les chais centenaires.", "matin", "food", 41.1339, -8.6119, "Vila Nova de Gaia"],
    ["Tour des Clercs", "Le campanile emblématique de Porto.", "apres-midi", "visit", 41.1457, -8.6141, "Porto"],
    ["Croisière des six ponts", "Le Douro au fil de l''eau en rabelo.", "soir", "visit", 41.1400, -8.6120, "Porto"]]'::jsonb);
  c := seed_city('PRT', 'Lagos', 37.1028, -8.6742, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Ponta da Piedade", "Grottes et arches dorées en bateau.", "matin", "nature", 37.0800, -8.6690, "Lagos"],
    ["Praia Dona Ana", "La plage aux falaises ocre emblématique.", "apres-midi", "beach", 37.0910, -8.6710, "Lagos"],
    ["Vieille ville de Lagos", "Remparts, place et cataplana.", "soir", "food", 37.1020, -8.6740, "Lagos"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Grotte de Benagil en kayak", "La coupole marine la plus célèbre d''Algarve.", "matin", "nature", 37.0870, -8.4260, "Benagil"],
    ["Praia da Marinha", "L''une des plus belles plages d''Europe.", "apres-midi", "beach", 37.0900, -8.4130, "Lagoa"],
    ["Portimão", "Sardines grillées sur le port avant le départ.", "soir", "food", 37.1380, -8.5380, "Portimão"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_pt_lisbon(UUID, INT, INT);
