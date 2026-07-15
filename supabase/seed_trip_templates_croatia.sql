-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Croatie (après seed_trip_templates_helpers.sql)
--   - 7 jours  : Dubrovnik (+ Lokrum) → Split (+ Trogir) → Hvar
--   - 10 jours : + Plitvice + Zagreb
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'HRV';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'HRV';
-- ════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION seed_hr_dubrovnik(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('HRV', 'Dubrovnik', 42.6507, 18.0944, 3, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Stradun et vieille ville", "L''artère de marbre de la perle de l''Adriatique.", "matin", "visit", 42.6414, 18.1077, "Dubrovnik"],
    ["Tour des remparts", "2 km de murailles au-dessus des toits orange.", "apres-midi", "visit", 42.6410, 18.1060, "Dubrovnik"],
    ["Buža Bar", "Verre au coucher du soleil, accroché à la falaise.", "soir", "night", 42.6395, 18.1090, "Dubrovnik"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Téléphérique du mont Srđ", "La vieille ville et les îles vues d''en haut.", "matin", "nature", 42.6470, 18.1110, "Dubrovnik"],
    ["Fort Lovrijenac", "La forteresse de Game of Thrones.", "apres-midi", "visit", 42.6410, 18.1030, "Dubrovnik"],
    ["Kayak au pied des remparts", "Tour des murailles côté mer au couchant.", "soir", "beach", 42.6400, 18.1040, "Dubrovnik"]]'::jsonb);
  e := seed_daytrip('HRV', 'Lokrum', 42.6280, 18.1190, v, 2);
  PERFORM seed_day(e, 1, '[
    ["Île de Lokrum", "Jardin botanique, paons et monastère.", "matin", "nature", 42.6280, 18.1190, "Lokrum"],
    ["Mer Morte de Lokrum", "Baignade dans le lagon salé.", "apres-midi", "beach", 42.6270, 18.1200, "Lokrum"],
    ["Retour et vieux port", "Dîner de poisson au vieux port.", "soir", "food", 42.6410, 18.1110, "Dubrovnik"]]'::jsonb);
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_hr_split(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('HRV', 'Split', 43.5081, 16.4402, 2, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Palais de Dioclétien", "La vieille ville lovée dans le palais romain.", "matin", "visit", 43.5085, 16.4402, "Split"],
    ["Cathédrale Saint-Domnius", "Campanile au-dessus du mausolée impérial.", "apres-midi", "visit", 43.5083, 16.4405, "Split"],
    ["Riva", "La promenade de front de mer aux palmiers.", "soir", "food", 43.5070, 16.4390, "Split"]]'::jsonb);
  e := seed_daytrip('HRV', 'Trogir', 43.5165, 16.2514, v, 1);
  PERFORM seed_day(e, 1, '[
    ["Vieille ville de Trogir", "Îlot médiéval classé à l''Unesco.", "matin", "visit", 43.5165, 16.2514, "Trogir"],
    ["Cathédrale Saint-Laurent", "Portail roman de maître Radovan.", "apres-midi", "visit", 43.5170, 16.2510, "Trogir"],
    ["Plage de Bačvice", "Baignade et picigin au retour à Split.", "soir", "beach", 43.5030, 16.4480, "Split"]]'::jsonb);
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_hr_hvar(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('HRV', 'Hvar', 43.1729, 16.4411, 2, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Ville de Hvar et forteresse espagnole", "Montée au fort au-dessus du port.", "matin", "visit", 43.1740, 16.4400, "Hvar"],
    ["Îles Pakleni en bateau-taxi", "Criques translucides face à la ville.", "apres-midi", "beach", 43.1620, 16.3950, "Pakleni"],
    ["Place Saint-Étienne", "Cocktails sur la plus grande place de Dalmatie.", "soir", "night", 43.1725, 16.4420, "Hvar"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Stari Grad", "L''une des plus vieilles villes d''Europe et sa plaine Unesco.", "matin", "visit", 43.1840, 16.5960, "Stari Grad"],
    ["Champs de lavande et villages", "Route panoramique de l''intérieur de l''île.", "apres-midi", "nature", 43.1600, 16.5500, "Hvar"],
    ["Dernier coucher de soleil sur le port", "Avant le ferry du retour.", "soir", "food", 43.1730, 16.4410, "Hvar"]]'::jsonb);
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── 7 jours : Dubrovnik → Split → Hvar ────────────────────────
  g := seed_group('HRV', 7);
  PERFORM seed_hr_dubrovnik(g, 1, 0);
  PERFORM seed_hr_split(g, 2, 3);
  PERFORM seed_hr_hvar(g, 3, 5);

  -- ─── 10 jours : + Plitvice + Zagreb ────────────────────────────
  g := seed_group('HRV', 10);
  PERFORM seed_hr_dubrovnik(g, 1, 0);
  PERFORM seed_hr_split(g, 2, 3);
  PERFORM seed_hr_hvar(g, 3, 5);
  c := seed_city('HRV', 'Plitvice', 44.8654, 15.5820, 1, g, 4, 7);
  PERFORM seed_day(c, 1, '[
    ["Lacs supérieurs de Plitvice", "Cascades en escalier dans la forêt.", "matin", "nature", 44.8800, 15.6210, "Plitvice"],
    ["Lacs inférieurs et grande cascade", "Passerelles au ras de l''eau turquoise.", "apres-midi", "nature", 44.9010, 15.6110, "Plitvice"],
    ["Route vers Zagreb", "Traversée de la Lika au crépuscule.", "soir", "transport", 45.2000, 15.8000, "Croatie"]]'::jsonb);
  c := seed_city('HRV', 'Zagreb', 45.8150, 15.9819, 2, g, 5, 8);
  PERFORM seed_day(c, 1, '[
    ["Ville haute et église Saint-Marc", "Le toit aux armoiries en tuiles vernissées.", "matin", "visit", 45.8167, 15.9737, "Zagreb"],
    ["Marché Dolac et cathédrale", "Les parasols rouges du ventre de Zagreb.", "apres-midi", "food", 45.8144, 15.9770, "Zagreb"],
    ["Rue Tkalčićeva", "L''artère des cafés et des terrasses.", "soir", "night", 45.8160, 15.9750, "Zagreb"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée des Cœurs brisés", "Le musée le plus singulier d''Europe.", "matin", "visit", 45.8151, 15.9733, "Zagreb"],
    ["Parc Maksimir", "Le grand parc à l''anglaise de la ville.", "apres-midi", "nature", 45.8230, 16.0180, "Zagreb"],
    ["Dernière soirée sur Ban Jelačić", "La place centrale avant le départ.", "soir", "food", 45.8130, 15.9770, "Zagreb"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_hr_dubrovnik(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_hr_split(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_hr_hvar(UUID, INT, INT);
