-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Grèce (après seed_trip_templates_helpers.sql)
--   - 4 jours  : Athènes (+ excursion cap Sounion)
--   - 10 jours : Athènes → Mykonos (+ Délos) → Santorin
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'GRC';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'GRC';
-- ════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION seed_gr_athens(p_group UUID, p_pos INT, p_offset INT, p_four BOOLEAN)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('GRC', 'Athènes', 37.9838, 23.7275, CASE WHEN p_four THEN 4 ELSE 3 END, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Acropole et Parthénon", "Le rocher sacré de l''Antiquité.", "matin", "visit", 37.9715, 23.7267, "Athènes"],
    ["Musée de l''Acropole", "Caryatides et frises sous verre.", "apres-midi", "visit", 37.9684, 23.7285, "Athènes"],
    ["Plaka", "Tavernes au pied de l''Acropole illuminée.", "soir", "food", 37.9725, 23.7300, "Athènes"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Agora antique", "Temple d''Héphaïstos et stoa d''Attale.", "matin", "visit", 37.9747, 23.7220, "Athènes"],
    ["Monastiraki", "Marché aux puces et petites églises byzantines.", "apres-midi", "shopping", 37.9760, 23.7255, "Athènes"],
    ["Psiri", "Mezze et rébétiko dans le quartier des artisans.", "soir", "food", 37.9780, 23.7230, "Athènes"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Musée national archéologique", "Masque d''Agamemnon et bronzes majeurs.", "matin", "visit", 37.9890, 23.7327, "Athènes"],
    ["Colline du Lycabette", "Funiculaire vers le meilleur panorama d''Athènes.", "apres-midi", "nature", 37.9820, 23.7440, "Athènes"],
    ["Kolonaki", "Quartier chic, bars et terrasses.", "soir", "night", 37.9780, 23.7440, "Athènes"]]'::jsonb);
  IF p_four THEN
    e := seed_daytrip('GRC', 'Cap Sounion', 37.6513, 24.0247, v, 3);
    PERFORM seed_day(e, 1, '[
      ["Temple de Poséidon", "Colonnes dressées au-dessus de la mer Égée.", "matin", "visit", 37.6513, 24.0247, "Sounion"],
      ["Riviera athénienne", "Plages et criques de la côte Apollon.", "apres-midi", "beach", 37.8110, 23.7810, "Vouliagmeni"],
      ["Le Pirée", "Dîner de poisson sur le port de Mikrolimano.", "soir", "food", 37.9380, 23.6510, "Le Pirée"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 4 jours : Athènes + Sounion ───────────────────────────────
  g := seed_group('GRC', 4);
  PERFORM seed_gr_athens(g, 1, 0, true);

  -- ─── 10 jours : Athènes → Mykonos → Santorin ───────────────────
  g := seed_group('GRC', 10);
  PERFORM seed_gr_athens(g, 1, 0, false);
  c := seed_city('GRC', 'Mykonos', 37.4467, 25.3289, 3, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Chora et la Petite Venise", "Maisons blanches les pieds dans l''eau.", "matin", "visit", 37.4467, 25.3253, "Mykonos"],
    ["Moulins de Kato Mili", "Les moulins emblématiques face à la mer.", "apres-midi", "visit", 37.4447, 25.3247, "Mykonos"],
    ["Coucher de soleil à la Petite Venise", "Cocktails au ras des vagues.", "soir", "night", 37.4470, 25.3250, "Mykonos"]]'::jsonb);
  e := seed_daytrip('GRC', 'Délos', 37.3930, 25.2710, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Site sacré de Délos", "L''île natale d''Apollon, tout entière archéologique.", "matin", "visit", 37.3930, 25.2710, "Délos"],
    ["Terrasse des Lions", "Les lions de marbre gardiens du sanctuaire.", "apres-midi", "visit", 37.3940, 25.2680, "Délos"],
    ["Retour et plage de Platis Gialos", "Baignade dorée en fin de journée.", "soir", "beach", 37.4160, 25.3310, "Mykonos"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Ano Mera et monastère de la Panagia", "Le village de l''intérieur.", "matin", "visit", 37.4460, 25.3990, "Mykonos"],
    ["Plage d''Elia", "La grande plage de sable du sud.", "apres-midi", "beach", 37.4240, 25.3860, "Mykonos"],
    ["Dernière soirée à Chora", "Ruelles blanches et bougainvilliers.", "soir", "food", 37.4460, 25.3280, "Mykonos"]]'::jsonb);
  c := seed_city('GRC', 'Santorin', 36.3932, 25.4615, 4, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Fira", "Capitale accrochée au bord de la caldeira.", "matin", "visit", 36.4166, 25.4326, "Santorin"],
    ["Sentier Fira-Imerovigli", "Marche en balcon au-dessus du volcan.", "apres-midi", "nature", 36.4330, 25.4230, "Santorin"],
    ["Dîner face à la caldeira", "Tomatokeftedes et assyrtiko au couchant.", "soir", "food", 36.4200, 25.4300, "Santorin"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Oia", "Le village aux coupoles bleues.", "matin", "visit", 36.4618, 25.3753, "Santorin"],
    ["Baie d''Ammoudi", "Escaliers vers le petit port et poulpes grillés.", "apres-midi", "food", 36.4610, 25.3690, "Santorin"],
    ["Coucher de soleil d''Oia", "Le plus célèbre des Cyclades.", "soir", "visit", 36.4620, 25.3720, "Santorin"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Site d''Akrotiri", "La Pompéi minoenne sous les cendres.", "matin", "visit", 36.3517, 25.4034, "Santorin"],
    ["Plage rouge", "Falaises écarlates et eau profonde.", "apres-midi", "beach", 36.3480, 25.3940, "Santorin"],
    ["Perissa", "Plage de sable noir au pied du Mesa Vouno.", "soir", "beach", 36.3560, 25.4740, "Santorin"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Croisière dans la caldeira", "Volcan de Nea Kameni et sources chaudes.", "matin", "nature", 36.4040, 25.3960, "Santorin"],
    ["Dégustation chez Santo Wines", "Vins volcaniques en terrasse panoramique.", "apres-midi", "food", 36.3860, 25.4440, "Santorin"],
    ["Pyrgos", "Village perché authentique, dernière soirée.", "soir", "visit", 36.3830, 25.4480, "Santorin"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_gr_athens(UUID, INT, INT, BOOLEAN);
