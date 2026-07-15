-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — États-Unis (après seed_trip_templates_helpers.sql)
--   - 5 jours  : New York
--   - 7 jours  : Floride — Miami (+ Everglades) → Key West → Orlando
--   - 10 jours : Côte Est — New York → Washington → Boston
--   - 10 jours : Côte Ouest — Los Angeles → Las Vegas (+ Grand Canyon) → San Francisco
--   - 14 jours : Ouest + parcs — LA → Vegas → Grand Canyon → Zion/Bryce → Death Valley → Yosemite → SF
--   - 21 jours : Coast-to-coast — NYC → DC → Chicago → Vegas → LA → SF
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'USA';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'USA';
-- ════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION seed_us_nyc(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('USA', 'New York', 40.7128, -74.0060, 5, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Grand Central Terminal et Bryant Park", "Hall mythique puis bibliothèque publique de New York.", "matin", "visit", 40.7527, -73.9772, "New York"],
    ["Rockefeller Center (Top of the Rock)", "Vue sur Central Park et l''Empire State au couchant.", "apres-midi", "visit", 40.7587, -73.9787, "New York"],
    ["Times Square et Broadway", "Les écrans géants de nuit puis comédie musicale — Times Square ne se visite vraiment qu''illuminé.", "soir", "night", 40.7580, -73.9855, "New York"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Statue de la Liberté et Ellis Island", "Ferry vers les symboles de l''Amérique.", "matin", "visit", 40.6892, -74.0445, "New York"],
    ["Wall Street et Financial District", "Bourse, taureau de bronze et Trinity Church.", "apres-midi", "visit", 40.7069, -74.0113, "New York"],
    ["Brooklyn Bridge", "Traversée à pied au coucher du soleil, vue sur Manhattan.", "soir", "visit", 40.7061, -73.9969, "New York"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Central Park", "Poumon vert de Manhattan, Bethesda Fountain.", "matin", "nature", 40.7829, -73.9654, "New York"],
    ["Metropolitan Museum of Art", "L''un des plus grands musées du monde.", "apres-midi", "visit", 40.7794, -73.9632, "New York"],
    ["5e Avenue", "Vitrines mythiques de Saint-Patrick à la Trump Tower.", "soir", "shopping", 40.7744, -73.9656, "New York"]]'::jsonb);
  PERFORM seed_day(v, 4, '[
    ["Empire State Building", "Observatoire emblématique au 86e étage.", "matin", "visit", 40.7484, -73.9857, "New York"],
    ["High Line", "Promenade plantée sur une ancienne voie ferrée aérienne.", "apres-midi", "nature", 40.7480, -74.0048, "New York"],
    ["Chelsea Market", "Halle gourmande dans une ancienne biscuiterie.", "soir", "food", 40.7424, -74.0060, "New York"]]'::jsonb);
  PERFORM seed_day(v, 5, '[
    ["Mémorial du 11-Septembre", "Bassins et musée sur le site des tours jumelles.", "matin", "visit", 40.7115, -74.0134, "New York"],
    ["SoHo", "Façades en fonte, galeries et boutiques.", "apres-midi", "shopping", 40.7233, -74.0030, "New York"],
    ["Greenwich Village", "Washington Square et clubs de jazz.", "soir", "night", 40.7336, -74.0027, "New York"]]'::jsonb);
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_us_dc(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('USA', 'Washington', 38.9072, -77.0369, 2, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Capitole des États-Unis", "Siège du Congrès et sa coupole emblématique.", "matin", "visit", 38.8899, -77.0091, "Washington DC"],
    ["National Mall", "Esplanade des monuments, obélisque du Washington Monument.", "apres-midi", "visit", 38.8895, -77.0230, "Washington DC"],
    ["Lincoln Memorial", "Statue de Lincoln face au Reflecting Pool au couchant.", "soir", "visit", 38.8893, -77.0502, "Washington DC"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Musée national de l''air et de l''espace", "Modules Apollo et avions historiques du Smithsonian.", "matin", "visit", 38.8882, -77.0199, "Washington DC"],
    ["Maison-Blanche", "La résidence présidentielle depuis Lafayette Square.", "apres-midi", "visit", 38.8977, -77.0365, "Washington DC"],
    ["Georgetown", "Quartier historique pavé au bord du Potomac.", "soir", "food", 38.9096, -77.0654, "Washington DC"]]'::jsonb);
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_us_la(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('USA', 'Los Angeles', 34.0522, -118.2437, 3, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Hollywood Boulevard", "Walk of Fame et Chinese Theatre.", "matin", "visit", 34.1016, -118.3402, "Los Angeles"],
    ["Griffith Observatory", "Vue sur le panneau Hollywood et la ville.", "apres-midi", "visit", 34.1184, -118.3004, "Los Angeles"],
    ["Sunset Strip", "Clubs et néons de West Hollywood.", "soir", "night", 34.0900, -118.3850, "West Hollywood"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Jetée de Santa Monica", "Grande roue au-dessus du Pacifique.", "matin", "beach", 34.0100, -118.4960, "Santa Monica"],
    ["Venice Beach", "Skate parc, muscle beach et canaux.", "apres-midi", "beach", 33.9850, -118.4695, "Venice"],
    ["Coucher de soleil sur l''océan", "Fin de journée sur la plage de Venice.", "soir", "beach", 33.9820, -118.4720, "Venice"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Getty Center", "Collections et jardins suspendus au-dessus de LA.", "matin", "visit", 34.0780, -118.4741, "Los Angeles"],
    ["Beverly Hills et Rodeo Drive", "Villas de stars et boutiques de luxe.", "apres-midi", "shopping", 34.0696, -118.4004, "Beverly Hills"],
    ["Downtown LA", "Grand Central Market et Walt Disney Concert Hall.", "soir", "food", 34.0505, -118.2489, "Los Angeles"]]'::jsonb);
  RETURN v;
END $$;

-- Las Vegas : p_mode = 'gc' (2j, excursion Grand Canyon), 'vof' (2j, jour 2
-- Hoover/Valley of Fire), 'both' (3j, les deux).
CREATE OR REPLACE FUNCTION seed_us_vegas(p_group UUID, p_pos INT, p_offset INT, p_mode TEXT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID; v_days INT;
BEGIN
  v_days := CASE WHEN p_mode = 'both' THEN 3 ELSE 2 END;
  v := seed_city('USA', 'Las Vegas', 36.1699, -115.1398, v_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Casinos-mondes du Strip", "Venetian, Caesars et Bellagio Conservatory à l''intérieur, à l''abri du soleil.", "matin", "visit", 36.1212, -115.1697, "Las Vegas"],
    ["High Roller", "La grande roue géante du LINQ.", "apres-midi", "visit", 36.1176, -115.1687, "Las Vegas"],
    ["Fontaines du Bellagio et Fremont Street", "Ballet aquatique puis voûte d''écrans LED — le Strip ne prend vie qu''une fois la nuit tombée.", "soir", "night", 36.1126, -115.1767, "Las Vegas"]]'::jsonb);
  IF p_mode IN ('gc', 'both') THEN
    e := seed_daytrip('USA', 'Grand Canyon', 36.0544, -112.1401, v, 1);
    PERFORM seed_day(e, 1, '[
      ["Grand Canyon (rive ouest)", "Passerelle de verre du Skywalk au-dessus du vide.", "matin", "nature", 36.0121, -113.8107, "Grand Canyon West"],
      ["Points de vue d''Eagle Point", "Immensité du canyon creusé par le Colorado.", "apres-midi", "nature", 36.0106, -113.8134, "Grand Canyon West"],
      ["Retour par le désert de Mojave", "Route panoramique au soleil couchant.", "soir", "nature", 35.9728, -114.7377, "Nevada"]]'::jsonb);
  END IF;
  IF p_mode IN ('vof', 'both') THEN
    PERFORM seed_day(v, CASE WHEN p_mode = 'both' THEN 3 ELSE 2 END, '[
      ["Barrage Hoover", "Ouvrage colossal sur le Colorado, frontière Nevada-Arizona.", "matin", "visit", 36.0161, -114.7377, "Boulder City"],
      ["Valley of Fire", "Roches rouge feu et pétroglyphes millénaires.", "apres-midi", "nature", 36.4426, -114.5306, "Overton"],
      ["Spectacle sur le Strip", "Show du Cirque du Soleil ou revue emblématique.", "soir", "night", 36.1147, -115.1728, "Las Vegas"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

-- San Francisco : p_days = 2 (condensé), 5 (standard + excursion Sausalito)
-- ou 6 (version longue du coast-to-coast).
CREATE OR REPLACE FUNCTION seed_us_sf(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('USA', 'San Francisco', 37.7749, -122.4194, p_days, p_group, p_pos, p_offset);
  IF p_days = 2 THEN
    PERFORM seed_day(v, 1, '[
      ["Golden Gate Bridge", "Traversée du pont suspendu le plus célèbre du monde.", "matin", "visit", 37.8199, -122.4783, "San Francisco"],
      ["Alcatraz", "Ferry vers la prison mythique de la baie.", "apres-midi", "visit", 37.8270, -122.4230, "San Francisco"],
      ["Fisherman''s Wharf", "Otaries du Pier 39 et clam chowder.", "soir", "food", 37.8080, -122.4177, "San Francisco"]]'::jsonb);
    PERFORM seed_day(v, 2, '[
      ["Cable car et Lombard Street", "Tramway historique et rue la plus sinueuse du monde.", "matin", "visit", 37.8021, -122.4187, "San Francisco"],
      ["Chinatown", "Le plus ancien quartier chinois d''Amérique du Nord.", "apres-midi", "visit", 37.7941, -122.4078, "San Francisco"],
      ["Union Square", "Cœur commerçant, dernière soirée.", "soir", "shopping", 37.7880, -122.4074, "San Francisco"]]'::jsonb);
    RETURN v;
  END IF;
  PERFORM seed_day(v, 1, '[
    ["Golden Gate Bridge", "Traversée du pont suspendu le plus célèbre du monde.", "matin", "visit", 37.8199, -122.4783, "San Francisco"],
    ["Presidio et Palace of Fine Arts", "Parc au pied du pont et rotonde romantique.", "apres-midi", "nature", 37.8029, -122.4484, "San Francisco"],
    ["Baker Beach", "Le pont au couchant depuis la plage.", "soir", "beach", 37.7936, -122.4833, "San Francisco"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Alcatraz", "Ferry et audioguide dans la prison mythique.", "matin", "visit", 37.8270, -122.4230, "San Francisco"],
    ["Fisherman''s Wharf et Pier 39", "Otaries, crabes et boutiques du port.", "apres-midi", "food", 37.8087, -122.4098, "San Francisco"],
    ["Ghirardelli Square", "Chocolat historique face à la baie.", "soir", "food", 37.8059, -122.4230, "San Francisco"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Cable car et Lombard Street", "Tramway à traction et virages fleuris.", "matin", "visit", 37.8021, -122.4187, "San Francisco"],
    ["Chinatown", "Dragon Gate, temples et dim sum.", "apres-midi", "visit", 37.7941, -122.4078, "San Francisco"],
    ["Union Square", "Grands magasins et théâtres.", "soir", "shopping", 37.7880, -122.4074, "San Francisco"]]'::jsonb);
  PERFORM seed_day(v, 4, '[
    ["Mission District", "Murales de Clarion Alley et burritos.", "matin", "visit", 37.7599, -122.4148, "San Francisco"],
    ["Castro", "Quartier arc-en-ciel historique.", "apres-midi", "visit", 37.7609, -122.4350, "San Francisco"],
    ["Twin Peaks", "Panorama à 360° sur la ville au couchant.", "soir", "nature", 37.7544, -122.4477, "San Francisco"]]'::jsonb);
  e := seed_daytrip('USA', 'Sausalito', 37.8591, -122.4853, v, 4);
  PERFORM seed_day(e, 1, '[
    ["Ferry vers Sausalito", "Traversée de la baie, vue arrière sur la skyline.", "matin", "visit", 37.8591, -122.4853, "Sausalito"],
    ["Front de mer de Sausalito", "Village méditerranéen et maisons flottantes.", "apres-midi", "visit", 37.8570, -122.4780, "Sausalito"],
    ["Muir Woods", "Séquoias géants dans la brume côtière.", "soir", "nature", 37.8912, -122.5719, "Mill Valley"]]'::jsonb);
  IF p_days = 6 THEN
    PERFORM seed_day(v, 6, '[
      ["Golden Gate Park", "Jardin japonais et Academy of Sciences.", "matin", "nature", 37.7694, -122.4862, "San Francisco"],
      ["Haight-Ashbury", "Berceau du mouvement hippie, friperies.", "apres-midi", "shopping", 37.7692, -122.4481, "San Francisco"],
      ["Ferry Building", "Halle gourmande sur l''Embarcadero, dernière soirée.", "soir", "food", 37.7955, -122.3937, "San Francisco"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 5 jours : New York ────────────────────────────────────────
  g := seed_group('USA', 5);
  PERFORM seed_us_nyc(g, 1, 0);

  -- ─── 7 jours : Floride ─────────────────────────────────────────
  g := seed_group('USA', 7);
  c := seed_city('USA', 'Miami', 25.7617, -80.1918, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["South Beach et Ocean Drive", "Plage mythique et façades Art déco.", "matin", "beach", 25.7826, -80.1310, "Miami Beach"],
    ["Lincoln Road", "Promenade commerçante à ciel ouvert.", "apres-midi", "shopping", 25.7904, -80.1373, "Miami Beach"],
    ["Ocean Drive by night", "Néons pastel et rooftops.", "soir", "night", 25.7796, -80.1300, "Miami Beach"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Wynwood Walls", "Musée de street art à ciel ouvert.", "matin", "visit", 25.8010, -80.1994, "Miami"],
    ["Bayside Marketplace", "Marina et vue sur la skyline.", "apres-midi", "visit", 25.7784, -80.1867, "Miami"],
    ["Little Havana", "Calle Ocho, dominos et cafecito cubain.", "soir", "food", 25.7654, -80.2196, "Miami"]]'::jsonb);
  e := seed_daytrip('USA', 'Everglades', 25.2866, -80.8987, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Hydroglisseur dans les Everglades", "Marais de sawgrass à toute vitesse.", "matin", "nature", 25.7617, -80.7333, "Everglades"],
    ["Alligators et faune sauvage", "Sentier Anhinga et observation des alligators.", "apres-midi", "nature", 25.3833, -80.6089, "Everglades National Park"],
    ["Retour par Homestead", "Fruits tropicaux et route des Keys en vue.", "soir", "food", 25.4687, -80.4776, "Homestead"]]'::jsonb);
  c := seed_city('USA', 'Key West', 24.5551, -81.7800, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Route des Keys (Seven Mile Bridge)", "Pont interminable entre ciel et mer turquoise.", "matin", "visit", 24.6905, -81.1544, "Marathon"],
    ["Duval Street", "Artère animée de la ville la plus au sud des USA.", "apres-midi", "visit", 24.5560, -81.8010, "Key West"],
    ["Mallory Square", "Célébration quotidienne du coucher de soleil.", "soir", "visit", 24.5601, -81.8073, "Key West"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Maison d''Ernest Hemingway", "Demeure de l''écrivain et ses chats à six doigts.", "matin", "visit", 24.5513, -81.8004, "Key West"],
    ["Southernmost Point", "La bouée mythique à 90 miles de Cuba.", "apres-midi", "visit", 24.5465, -81.7975, "Key West"],
    ["Snorkeling au récif", "Barrière de corail des Keys en fin de journée.", "soir", "beach", 24.5400, -81.8100, "Key West"]]'::jsonb);
  c := seed_city('USA', 'Orlando', 28.5384, -81.3789, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Magic Kingdom", "Le parc Disney originel et son château.", "matin", "visit", 28.4177, -81.5812, "Orlando"],
    ["Magic Kingdom (suite)", "Attractions phares de l''après-midi.", "apres-midi", "visit", 28.4177, -81.5812, "Orlando"],
    ["Feu d''artifice du château", "Spectacle nocturne de clôture.", "soir", "night", 28.4177, -81.5812, "Orlando"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Universal Studios", "Wizarding World of Harry Potter.", "matin", "visit", 28.4743, -81.4678, "Orlando"],
    ["Islands of Adventure", "Montagnes russes et super-héros.", "apres-midi", "visit", 28.4711, -81.4713, "Orlando"],
    ["CityWalk", "Dîner et ambiance avant le départ.", "soir", "food", 28.4735, -81.4645, "Orlando"]]'::jsonb);

  -- ─── 10 jours : Côte Est ───────────────────────────────────────
  g := seed_group('USA', 10);
  PERFORM seed_us_nyc(g, 1, 0);
  PERFORM seed_us_dc(g, 2, 5);
  c := seed_city('USA', 'Boston', 42.3601, -71.0589, 3, g, 3, 7);
  PERFORM seed_day(c, 1, '[
    ["Freedom Trail", "4 km de ligne rouge à travers l''histoire américaine.", "matin", "visit", 42.3554, -71.0640, "Boston"],
    ["Quincy Market et Faneuil Hall", "Halles historiques et lobster rolls.", "apres-midi", "food", 42.3600, -71.0545, "Boston"],
    ["Beacon Hill", "Ruelles pavées aux lanternes à gaz.", "soir", "visit", 42.3588, -71.0707, "Boston"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Université Harvard", "Cour historique et statue de John Harvard.", "matin", "visit", 42.3770, -71.1167, "Cambridge"],
    ["MIT", "Campus futuriste au bord de la Charles River.", "apres-midi", "visit", 42.3601, -71.0942, "Cambridge"],
    ["Charles River Esplanade", "Voiliers et skyline au couchant.", "soir", "nature", 42.3560, -71.0800, "Boston"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["North End", "Petite Italie de Boston, cannoli de Mike''s Pastry.", "matin", "food", 42.3647, -71.0542, "Boston"],
    ["Port de Boston et Tea Party Museum", "Reconstitution de la révolte du thé.", "apres-midi", "visit", 42.3522, -71.0513, "Boston"],
    ["Fenway Park", "Stade mythique des Red Sox (match ou visite).", "soir", "night", 42.3467, -71.0972, "Boston"]]'::jsonb);

  -- ─── 10 jours : Côte Ouest ─────────────────────────────────────
  g := seed_group('USA', 10);
  PERFORM seed_us_la(g, 1, 0);
  PERFORM seed_us_vegas(g, 2, 3, 'gc');
  PERFORM seed_us_sf(g, 3, 5, 5);

  -- ─── 14 jours : Ouest + grands parcs ───────────────────────────
  g := seed_group('USA', 14);
  PERFORM seed_us_la(g, 1, 0);
  PERFORM seed_us_vegas(g, 2, 3, 'vof');
  c := seed_city('USA', 'Grand Canyon Village', 36.0544, -112.1401, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Mather Point", "Premier face-à-face avec l''immensité du canyon.", "matin", "nature", 36.0616, -112.1078, "Grand Canyon Village"],
    ["Bright Angel Trail", "Descente partielle dans le canyon.", "apres-midi", "nature", 36.0572, -112.1435, "Grand Canyon Village"],
    ["Desert View Watchtower", "Coucher de soleil sur le Colorado.", "soir", "nature", 36.0440, -111.8261, "Grand Canyon"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Antelope Canyon", "Canyon en fente aux courbes de grès sculptées.", "matin", "nature", 36.8619, -111.3743, "Page"],
    ["Horseshoe Bend", "Méandre parfait du Colorado vu d''en haut.", "apres-midi", "nature", 36.8791, -111.5104, "Page"],
    ["Lac Powell", "Baignade ou croisière au couchant.", "soir", "nature", 36.9147, -111.4558, "Page"]]'::jsonb);
  c := seed_city('USA', 'Springdale', 37.1889, -112.9989, 2, g, 4, 7);
  PERFORM seed_day(c, 1, '[
    ["Bryce Canyon (amphithéâtre)", "Forêt de hoodoos orangés vue d''en haut.", "matin", "nature", 37.6283, -112.1677, "Bryce Canyon"],
    ["Navajo Loop et Queen''s Garden", "Descente au cœur des cheminées de fées.", "apres-midi", "nature", 37.6229, -112.1626, "Bryce Canyon"],
    ["Route panoramique vers Zion", "Tunnel du mont Carmel et damiers de grès.", "soir", "nature", 37.2133, -112.9403, "Zion National Park"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Riverside Walk (Zion)", "Sentier au fond du canyon le long de la Virgin River.", "matin", "nature", 37.2851, -112.9477, "Zion National Park"],
    ["Canyon Overlook Trail", "Vue plongeante sur la vallée de Zion.", "apres-midi", "nature", 37.2135, -112.9564, "Zion National Park"],
    ["Springdale", "Village porte du parc, dîner face aux falaises.", "soir", "food", 37.1889, -112.9989, "Springdale"]]'::jsonb);
  c := seed_city('USA', 'Death Valley', 36.5323, -116.9325, 1, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Zabriskie Point", "Badlands dorées au lever du jour.", "matin", "nature", 36.4200, -116.8119, "Death Valley"],
    ["Badwater Basin", "Point le plus bas d''Amérique du Nord, -86 m.", "apres-midi", "nature", 36.2299, -116.7677, "Death Valley"],
    ["Mesquite Flat Sand Dunes", "Dunes au soleil couchant.", "soir", "nature", 36.6069, -117.1157, "Death Valley"]]'::jsonb);
  c := seed_city('USA', 'Yosemite Valley', 37.7456, -119.5936, 2, g, 6, 10);
  PERFORM seed_day(c, 1, '[
    ["Tunnel View", "La vallée entière d''un seul regard.", "matin", "nature", 37.7156, -119.6773, "Yosemite"],
    ["El Capitan et Yosemite Falls", "Paroi mythique et plus haute cascade du parc.", "apres-midi", "nature", 37.7340, -119.6378, "Yosemite"],
    ["Prairies de la vallée", "Cerfs au crépuscule sous le Half Dome.", "soir", "nature", 37.7456, -119.5936, "Yosemite"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Glacier Point", "Vue plongeante sur le Half Dome.", "matin", "nature", 37.7281, -119.5733, "Yosemite"],
    ["Mariposa Grove", "Séquoias géants millénaires.", "apres-midi", "nature", 37.5029, -119.6099, "Yosemite"],
    ["Route vers San Francisco", "Traversée de la vallée centrale.", "soir", "transport", 37.6390, -120.9970, "Californie"]]'::jsonb);
  PERFORM seed_us_sf(g, 7, 12, 2);

  -- ─── 21 jours : Coast-to-coast ─────────────────────────────────
  g := seed_group('USA', 21);
  PERFORM seed_us_nyc(g, 1, 0);
  PERFORM seed_us_dc(g, 2, 5);
  c := seed_city('USA', 'Chicago', 41.8781, -87.6298, 2, g, 3, 7);
  PERFORM seed_day(c, 1, '[
    ["Millennium Park et le Bean", "Cloud Gate, la sculpture-miroir emblématique.", "matin", "visit", 41.8827, -87.6233, "Chicago"],
    ["Art Institute of Chicago", "L''un des plus riches musées d''Amérique.", "apres-midi", "visit", 41.8796, -87.6237, "Chicago"],
    ["Chicago Riverwalk", "Balade entre les gratte-ciel au fil de la rivière.", "soir", "visit", 41.8879, -87.6270, "Chicago"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Willis Tower (Skydeck)", "Balcon de verre au 103e étage.", "matin", "visit", 41.8789, -87.6359, "Chicago"],
    ["Navy Pier", "Grande roue sur le lac Michigan.", "apres-midi", "visit", 41.8917, -87.6086, "Chicago"],
    ["Magnificent Mile et deep dish", "Michigan Avenue et pizza épaisse de Chicago.", "soir", "food", 41.8949, -87.6244, "Chicago"]]'::jsonb);
  PERFORM seed_us_vegas(g, 4, 9, 'both');
  PERFORM seed_us_la(g, 5, 12);
  PERFORM seed_us_sf(g, 6, 15, 6);
END $$;

DROP FUNCTION IF EXISTS seed_us_nyc(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_us_dc(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_us_la(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_us_vegas(UUID, INT, INT, TEXT);
DROP FUNCTION IF EXISTS seed_us_sf(UUID, INT, INT, INT);


-- ════════════════════════════════════════════════════════════════
-- Variante enrichie : New York 7 jours (+ MoMA, Harlem, Brooklyn)
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('USA', 7);
  c := seed_city('USA', 'New York', 40.7128, -74.0060, 7, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Grand Central Terminal et Bryant Park", "Hall mythique puis bibliothèque publique de New York.", "matin", "visit", 40.7527, -73.9772, "New York"],
    ["Rockefeller Center (Top of the Rock)", "Vue sur Central Park et l''Empire State au couchant.", "apres-midi", "visit", 40.7587, -73.9787, "New York"],
    ["Times Square et Broadway", "Les écrans géants de nuit puis comédie musicale.", "soir", "night", 40.7580, -73.9855, "New York"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Statue de la Liberté et Ellis Island", "Ferry vers les symboles de l''Amérique.", "matin", "visit", 40.6892, -74.0445, "New York"],
    ["Wall Street et Financial District", "Bourse, taureau de bronze et Trinity Church.", "apres-midi", "visit", 40.7069, -74.0113, "New York"],
    ["Brooklyn Bridge", "Traversée à pied au coucher du soleil, vue sur Manhattan.", "soir", "visit", 40.7061, -73.9969, "New York"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Central Park", "Poumon vert de Manhattan, Bethesda Fountain.", "matin", "nature", 40.7829, -73.9654, "New York"],
    ["Metropolitan Museum of Art", "L''un des plus grands musées du monde.", "apres-midi", "visit", 40.7794, -73.9632, "New York"],
    ["5e Avenue", "Vitrines mythiques de Saint-Patrick à la Trump Tower.", "soir", "shopping", 40.7744, -73.9656, "New York"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Empire State Building", "Observatoire emblématique au 86e étage.", "matin", "visit", 40.7484, -73.9857, "New York"],
    ["High Line", "Promenade plantée sur une ancienne voie ferrée aérienne.", "apres-midi", "nature", 40.7480, -74.0048, "New York"],
    ["Chelsea Market", "Halle gourmande dans une ancienne biscuiterie.", "soir", "food", 40.7424, -74.0060, "New York"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Mémorial du 11-Septembre", "Bassins et musée sur le site des tours jumelles.", "matin", "visit", 40.7115, -74.0134, "New York"],
    ["SoHo", "Façades en fonte, galeries et boutiques.", "apres-midi", "shopping", 40.7233, -74.0030, "New York"],
    ["Greenwich Village", "Washington Square et clubs de jazz.", "soir", "night", 40.7336, -74.0027, "New York"]]'::jsonb);
  PERFORM seed_day(c, 6, '[
    ["MoMA", "Van Gogh, Warhol et l''art moderne au sommet.", "matin", "visit", 40.7614, -73.9776, "New York"],
    ["Cathédrale Saint-Jean et Columbia", "Upper West Side et campus mythique.", "apres-midi", "visit", 40.8039, -73.9619, "New York"],
    ["Jazz à Harlem", "Soirée à l''Apollo Theater ou dans un club historique.", "soir", "night", 40.8100, -73.9500, "New York"]]'::jsonb);
  PERFORM seed_day(c, 7, '[
    ["Williamsburg (Brooklyn)", "Friperies, cafés et vue sur Manhattan.", "matin", "visit", 40.7081, -73.9571, "Brooklyn"],
    ["DUMBO", "Le pont de Manhattan encadré par les briques rouges.", "apres-midi", "visit", 40.7033, -73.9881, "Brooklyn"],
    ["Rooftop de Manhattan", "Dernier verre face à la skyline illuminée.", "soir", "night", 40.7500, -73.9860, "New York"]]'::jsonb);
END $$;
