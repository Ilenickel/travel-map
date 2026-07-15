-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Canada (après seed_trip_templates_helpers.sql)
--   - 8 jours  : Est — Toronto (+ Niagara) → Ottawa → Montréal → Québec (+ Montmorency)
--   - 12 jours : Ouest — Vancouver (+ Whistler) → Kamloops → Jasper → Lake Louise → Banff
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'CAN';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'CAN';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 8 jours : Est ─────────────────────────────────────────────
  g := seed_group('CAN', 8);
  c := seed_city('CAN', 'Toronto', 43.6532, -79.3832, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["CN Tower", "Plancher de verre à 342 m au-dessus de la ville.", "matin", "visit", 43.6426, -79.3871, "Toronto"],
    ["Aquarium Ripley et front de lac", "Tunnel aux requins puis Harbourfront.", "apres-midi", "visit", 43.6424, -79.3860, "Toronto"],
    ["Distillery District", "Briques victoriennes, galeries et brasseries.", "soir", "food", 43.6503, -79.3596, "Toronto"]]'::jsonb);
  e := seed_daytrip('CAN', 'Niagara Falls', 43.0896, -79.0849, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Chutes du Niagara", "Le fer à cheval depuis la promenade.", "matin", "nature", 43.0799, -79.0747, "Niagara Falls"],
    ["Croisière au pied des chutes", "Poncho rouge sous les embruns.", "apres-midi", "nature", 43.0890, -79.0730, "Niagara Falls"],
    ["Niagara-on-the-Lake", "Village victorien et vignobles de glace.", "soir", "food", 43.2550, -79.0710, "Niagara-on-the-Lake"]]'::jsonb);
  c := seed_city('CAN', 'Ottawa', 45.4215, -75.6972, 1, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Colline du Parlement", "Le siège néogothique du gouvernement fédéral.", "matin", "visit", 45.4236, -75.7009, "Ottawa"],
    ["Canal Rideau", "Patrimoine mondial au fil de l''eau.", "apres-midi", "nature", 45.4210, -75.6930, "Ottawa"],
    ["Marché By", "Queues de castor et bières locales.", "soir", "food", 45.4270, -75.6920, "Ottawa"]]'::jsonb);
  c := seed_city('CAN', 'Montréal', 45.5017, -73.5673, 3, g, 3, 3);
  PERFORM seed_day(c, 1, '[
    ["Basilique Notre-Dame", "Voûte bleue étoilée du Vieux-Montréal.", "matin", "visit", 45.5046, -73.5566, "Montréal"],
    ["Vieux-Port", "Quais, grande roue et rue Saint-Paul.", "apres-midi", "visit", 45.5080, -73.5540, "Montréal"],
    ["Quartier des spectacles", "Festivals et illuminations.", "soir", "night", 45.5080, -73.5680, "Montréal"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Mont Royal", "Belvédère Kondiaronk sur le centre-ville.", "matin", "nature", 45.5048, -73.5878, "Montréal"],
    ["Plateau-Mont-Royal", "Escaliers extérieurs et murales.", "apres-midi", "visit", 45.5220, -73.5820, "Montréal"],
    ["Mile End", "Bagels de Saint-Viateur contre Fairmount.", "soir", "food", 45.5230, -73.6050, "Montréal"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Stade olympique et Biodôme", "Tour penchée et écosystèmes des Amériques.", "matin", "visit", 45.5579, -73.5515, "Montréal"],
    ["Marché Jean-Talon", "Le grand marché de la Petite Italie.", "apres-midi", "food", 45.5364, -73.6146, "Montréal"],
    ["Poutine et micro-brasseries", "Soirée québécoise classique.", "soir", "food", 45.5150, -73.5700, "Montréal"]]'::jsonb);
  c := seed_city('CAN', 'Québec', 46.8139, -71.2080, 2, g, 4, 6);
  PERFORM seed_day(c, 1, '[
    ["Château Frontenac et terrasse Dufferin", "L''hôtel le plus photographié du monde.", "matin", "visit", 46.8118, -71.2049, "Québec"],
    ["Petit-Champlain et place Royale", "Berceau de l''Amérique française.", "apres-midi", "visit", 46.8115, -71.2030, "Québec"],
    ["Remparts et rue Saint-Jean", "La seule ville fortifiée d''Amérique du Nord.", "soir", "food", 46.8130, -71.2100, "Québec"]]'::jsonb);
  e := seed_daytrip('CAN', 'Chute Montmorency', 46.8906, -71.1475, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Chute Montmorency", "83 m, plus haute que le Niagara.", "matin", "nature", 46.8906, -71.1475, "Québec"],
    ["Île d''Orléans", "Vergers, cidreries et villages anciens.", "apres-midi", "food", 46.9330, -70.9860, "Île d''Orléans"],
    ["Dernière soirée dans le Vieux-Québec", "Table québécoise avant le départ.", "soir", "food", 46.8120, -71.2050, "Québec"]]'::jsonb);

  -- ─── 12 jours : Ouest ──────────────────────────────────────────
  g := seed_group('CAN', 12);
  c := seed_city('CAN', 'Vancouver', 49.2827, -123.1207, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Stanley Park et seawall", "Totems et boucle côtière mythique.", "matin", "nature", 49.3017, -123.1417, "Vancouver"],
    ["Canada Place et Gastown", "Voiles blanches puis horloge à vapeur.", "apres-midi", "visit", 49.2854, -123.1115, "Vancouver"],
    ["Granville Island", "Marché public et brasseries sur l''eau.", "soir", "food", 49.2712, -123.1340, "Vancouver"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Pont suspendu de Capilano", "Passerelles dans la canopée de la forêt pluviale.", "matin", "nature", 49.3429, -123.1149, "North Vancouver"],
    ["Grouse Mountain", "Téléphérique et grizzlys au sommet.", "apres-midi", "nature", 49.3800, -123.0810, "North Vancouver"],
    ["English Bay", "Coucher de soleil sur la plage urbaine.", "soir", "beach", 49.2860, -123.1440, "Vancouver"]]'::jsonb);
  e := seed_daytrip('CAN', 'Whistler', 50.1163, -122.9574, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Sea-to-Sky Highway", "Route côtière spectaculaire et chutes Shannon.", "matin", "nature", 49.6700, -123.1550, "Squamish"],
    ["Village de Whistler", "Station olympique au pied des pistes.", "apres-midi", "visit", 50.1163, -122.9574, "Whistler"],
    ["Télécabine Peak 2 Peak", "Record du monde entre deux sommets.", "soir", "nature", 50.0590, -122.9480, "Whistler"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Kitsilano", "Plage et cafés du quartier bohème.", "matin", "beach", 49.2730, -123.1540, "Vancouver"],
    ["Musée d''anthropologie (MOA)", "Grands mâts et art des Premières Nations.", "apres-midi", "visit", 49.2699, -123.2588, "Vancouver"],
    ["Chinatown et dîner asiatique", "L''un des plus grands Chinatowns d''Amérique.", "soir", "food", 49.2800, -123.1000, "Vancouver"]]'::jsonb);
  c := seed_city('CAN', 'Kamloops', 50.6745, -120.3273, 1, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Canyon du Fraser", "Route des chercheurs d''or, porte Hell''s Gate.", "matin", "nature", 49.7830, -121.4450, "Hope"],
    ["Vallée de la Thompson", "Paysages semi-arides et ranchs.", "apres-midi", "nature", 50.6745, -120.3273, "Kamloops"],
    ["Étape à Kamloops", "Nuit d''étape du road trip vers Jasper.", "soir", "food", 50.6740, -120.3270, "Kamloops"]]'::jsonb);
  c := seed_city('CAN', 'Jasper', 52.8734, -118.0806, 3, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Lac Maligne et Spirit Island", "Croisière vers l''île la plus photographiée des Rocheuses.", "matin", "nature", 52.7280, -117.6420, "Jasper"],
    ["Canyon Maligne", "Gorges et passerelles vertigineuses.", "apres-midi", "nature", 52.9230, -118.0000, "Jasper"],
    ["Observation de la faune", "Wapitis et ours noirs au crépuscule.", "soir", "nature", 52.8730, -118.0810, "Jasper"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Téléphérique des Whistlers", "Panorama alpin à 2 277 m.", "matin", "nature", 52.8480, -118.1160, "Jasper"],
    ["Chutes Athabasca", "Puissance brute dans la roche.", "apres-midi", "nature", 52.6640, -117.8880, "Jasper"],
    ["Lac Pyramid", "Reflets du mont Pyramid au couchant.", "soir", "nature", 52.9190, -118.0950, "Jasper"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Promenade des Glaciers", "L''Icefields Parkway, plus belle route du monde.", "matin", "nature", 52.2200, -117.2240, "Icefields Parkway"],
    ["Glacier Athabasca", "Marche sur le champ de glace Columbia.", "apres-midi", "nature", 52.1850, -117.2560, "Columbia Icefield"],
    ["Lac Peyto", "Le lac loup bleu turquoise.", "soir", "nature", 51.7180, -116.5310, "Banff National Park"]]'::jsonb);
  c := seed_city('CAN', 'Lake Louise', 51.4254, -116.1773, 1, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Lac Louise", "Canoë sur l''eau émeraude face au glacier Victoria.", "matin", "nature", 51.4167, -116.2170, "Lake Louise"],
    ["Sentier du lac Agnes", "Thé au chalet perché après la montée.", "apres-midi", "nature", 51.4130, -116.2440, "Lake Louise"],
    ["Lac Moraine", "La vallée des Dix Pics au soleil rasant.", "soir", "nature", 51.3217, -116.1860, "Lake Louise"]]'::jsonb);
  c := seed_city('CAN', 'Banff', 51.1784, -115.5708, 3, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Avenue de Banff", "Village de montagne sous le mont Cascade.", "matin", "visit", 51.1784, -115.5708, "Banff"],
    ["Téléphérique du mont Sulphur", "Crête panoramique sur toute la vallée.", "apres-midi", "nature", 51.1490, -115.5730, "Banff"],
    ["Sources chaudes Banff Upper", "Bain à 40° face aux sommets enneigés.", "soir", "nature", 51.1500, -115.5620, "Banff"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Lac Minnewanka", "Croisière sur le plus grand lac du parc.", "matin", "nature", 51.2540, -115.5040, "Banff"],
    ["Canyon Johnston", "Passerelles jusqu''aux chutes gelées ou vives.", "apres-midi", "nature", 51.2450, -115.8390, "Banff"],
    ["Vermilion Lakes", "Le mont Rundle en miroir au couchant.", "soir", "nature", 51.1790, -115.6070, "Banff"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Lac Two Jack au lever du jour", "Brumes matinales sur l''eau.", "matin", "nature", 51.2320, -115.5010, "Banff"],
    ["Route vers Calgary", "Sortie des Rocheuses par la Transcanadienne.", "apres-midi", "transport", 51.0447, -114.0719, "Calgary"],
    ["Calgary Tower", "Dernière vue sur les Rocheuses avant le vol.", "soir", "visit", 51.0442, -114.0631, "Calgary"]]'::jsonb);
END $$;
