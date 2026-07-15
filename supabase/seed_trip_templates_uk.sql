-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Royaume-Uni (après seed_trip_templates_helpers.sql)
--   - 4 jours  : Londres
--   - 10 jours : Londres → Cardiff → Liverpool → Édimbourg (+ Highlands) → York
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'GBR';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'GBR';
-- ════════════════════════════════════════════════════════════════

-- p_days = 4 ou 6 (variante enrichie : + St Paul/Tate/Sky Garden + Kensington/Greenwich).
CREATE OR REPLACE FUNCTION seed_gb_london(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('GBR', 'Londres', 51.5074, -0.1278, p_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Big Ben et Westminster", "Parlement et abbaye du couronnement.", "matin", "visit", 51.5007, -0.1246, "Londres"],
    ["London Eye et Southbank", "Grande roue et promenade sur la Tamise.", "apres-midi", "visit", 51.5033, -0.1195, "Londres"],
    ["Piccadilly Circus et Soho", "Néons, théâtres et pubs.", "soir", "night", 51.5100, -0.1340, "Londres"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Tour de Londres", "Joyaux de la Couronne et corbeaux royaux.", "matin", "visit", 51.5081, -0.0759, "Londres"],
    ["Tower Bridge et Borough Market", "Pont emblématique puis halles gourmandes.", "apres-midi", "food", 51.5055, -0.0754, "Londres"],
    ["The Shard", "Panorama du plus haut gratte-ciel d''Europe occidentale.", "soir", "visit", 51.5045, -0.0865, "Londres"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["British Museum", "Pierre de Rosette et frises du Parthénon.", "matin", "visit", 51.5194, -0.1270, "Londres"],
    ["Covent Garden et Trafalgar Square", "Artistes de rue puis National Gallery.", "apres-midi", "visit", 51.5117, -0.1240, "Londres"],
    ["Comédie musicale dans le West End", "L''institution londonienne du soir.", "soir", "night", 51.5115, -0.1280, "Londres"]]'::jsonb);
  PERFORM seed_day(v, 4, '[
    ["Buckingham Palace", "Relève de la garde royale.", "matin", "visit", 51.5014, -0.1419, "Londres"],
    ["Hyde Park et Notting Hill", "Serpentine puis façades pastel de Portobello.", "apres-midi", "nature", 51.5127, -0.2059, "Londres"],
    ["Camden Town", "Marchés alternatifs au bord du canal.", "soir", "shopping", 51.5416, -0.1460, "Londres"]]'::jsonb);
  IF p_days >= 6 THEN
    PERFORM seed_day(v, 5, '[
      ["Cathédrale Saint-Paul", "La coupole de Wren et sa galerie des murmures.", "matin", "visit", 51.5138, -0.0984, "Londres"],
      ["Tate Modern et Millennium Bridge", "Art contemporain dans la centrale électrique, traversée de la Tamise.", "apres-midi", "visit", 51.5076, -0.0994, "Londres"],
      ["Sky Garden", "Jardin panoramique gratuit au 35e étage, la City illuminée.", "soir", "visit", 51.5112, -0.0836, "Londres"]]'::jsonb);
    PERFORM seed_day(v, 6, '[
      ["Natural History Museum et V&A", "Squelettes de dinosaures puis arts décoratifs à Kensington.", "matin", "visit", 51.4967, -0.1764, "Londres"],
      ["Greenwich", "Cutty Sark, observatoire royal et méridien zéro.", "apres-midi", "visit", 51.4826, -0.0077, "Londres"],
      ["Pub historique au bord de la Tamise", "Dernière pinte face au fleuve.", "soir", "food", 51.5080, -0.0740, "Londres"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 4 jours : Londres ─────────────────────────────────────────
  g := seed_group('GBR', 4);
  PERFORM seed_gb_london(g, 1, 0, 4);

  -- ─── 6 jours : Londres enrichi (St Paul/Tate/Sky Garden, Kensington/Greenwich) ──
  g := seed_group('GBR', 6);
  PERFORM seed_gb_london(g, 1, 0, 6);

  -- ─── 10 jours : Angleterre + Pays de Galles + Écosse ───────────
  g := seed_group('GBR', 10);
  PERFORM seed_gb_london(g, 1, 0, 4);
  c := seed_city('GBR', 'Cardiff', 51.4816, -3.1791, 1, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Château de Cardiff", "Forteresse normande au cœur de la capitale galloise.", "matin", "visit", 51.4822, -3.1810, "Cardiff"],
    ["Baie de Cardiff", "Wales Millennium Centre et front de mer réaménagé.", "apres-midi", "visit", 51.4645, -3.1630, "Cardiff"],
    ["Arcades victoriennes", "Cafés et disquaires des galeries couvertes.", "soir", "food", 51.4810, -3.1790, "Cardiff"]]'::jsonb);
  c := seed_city('GBR', 'Liverpool', 53.4084, -2.9916, 1, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Albert Dock", "Docks classés et musées au bord de la Mersey.", "matin", "visit", 53.4009, -2.9935, "Liverpool"],
    ["The Beatles Story", "Le musée de la légende locale.", "apres-midi", "visit", 53.3998, -2.9930, "Liverpool"],
    ["Cavern Club", "Concert là où tout a commencé.", "soir", "night", 53.4062, -2.9871, "Liverpool"]]'::jsonb);
  c := seed_city('GBR', 'Édimbourg', 55.9533, -3.1883, 3, g, 4, 6);
  PERFORM seed_day(c, 1, '[
    ["Château d''Édimbourg", "Forteresse sur son rocher volcanique.", "matin", "visit", 55.9486, -3.1999, "Édimbourg"],
    ["Royal Mile", "Descente du château à Holyrood, closes et cathédrale St Giles.", "apres-midi", "visit", 55.9500, -3.1900, "Édimbourg"],
    ["Grassmarket", "Pubs historiques sous le château.", "soir", "food", 55.9470, -3.1960, "Édimbourg"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Arthur''s Seat", "Ascension du volcan endormi au-dessus de la ville.", "matin", "nature", 55.9441, -3.1618, "Édimbourg"],
    ["Calton Hill", "Monuments néo-grecs et panorama classique.", "apres-midi", "nature", 55.9553, -3.1833, "Édimbourg"],
    ["Dégustation de whisky", "Initiation au single malt sur le Royal Mile.", "soir", "food", 55.9495, -3.1950, "Édimbourg"]]'::jsonb);
  e := seed_daytrip('GBR', 'Loch Ness', 57.3229, -4.4244, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Glencoe", "La vallée la plus spectaculaire des Highlands.", "matin", "nature", 56.6829, -5.1053, "Glencoe"],
    ["Loch Ness et château d''Urquhart", "Croisière sur le loch du monstre.", "apres-midi", "nature", 57.3229, -4.4419, "Drumnadrochit"],
    ["Retour par les Cairngorms", "Landes et lochs au crépuscule.", "soir", "nature", 57.0800, -3.6700, "Cairngorms"]]'::jsonb);
  c := seed_city('GBR', 'York', 53.9600, -1.0873, 1, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Cathédrale d''York (Minster)", "La plus grande cathédrale gothique d''Europe du Nord.", "matin", "visit", 53.9623, -1.0819, "York"],
    ["Les Shambles", "Ruelle médiévale aux maisons penchées.", "apres-midi", "visit", 53.9591, -1.0802, "York"],
    ["Tour des remparts", "Boucle sur la muraille avant le retour à Londres.", "soir", "visit", 53.9580, -1.0870, "York"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_gb_london(UUID, INT, INT, INT);
