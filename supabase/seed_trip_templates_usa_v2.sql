-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — USA v2 (après helpers + seed_trip_templates_usa.sql)
-- Deux circuits DENSES (le pays est trop vaste pour un seul) :
--   - 10 jours côte Est : Boston (2j) → New York (5j) → Philadelphie (1j)
--     → Washington (2j). Descente nord → sud le long de l'Amtrak.
--   - 12 jours côte Ouest : Seattle (2j) → San Francisco (3j) → Los Angeles (3j)
--     → San Diego (2j) → Las Vegas (2j). Descente de la côte puis désert.
-- Couvre 4 villes absentes du catalogue : Philadelphie, Seattle, San Diego
-- (+ Boston/NY/Washington/SF/LA/Vegas en version dense).
--   - La Nouvelle-Orléans seule (3j) et Honolulu seule (3j) : group_id NULL,
--     format simple — trop isolées pour un circuit routier cohérent.
-- Relance : supprimer TOUT l'éditorial USA puis rejouer usa.sql PUIS usa_v2.sql
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'USA';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'USA';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── 10 jours côte Est : Boston → New York → Philadelphie → Washington ──
  g := seed_group('USA', 10);

  -- Boston (2 jours).
  c := seed_city('USA', 'Boston', 42.3601, -71.0589, 2, g, 1, 0);
  -- J1 Freedom Trail : du Common (départ officiel) vers le nord jusqu''au
  -- North End — le tracé réel du sentier, dîner au bout.
  PERFORM seed_day(c, 1, '[
    ["Boston Common et State House", "Départ du Freedom Trail sous le dôme doré.", "matin", "visit", 42.3550, -71.0656, "Boston"],
    ["Faneuil Hall et Quincy Market", "Le berceau de la révolution et ses halles gourmandes.", "apres-midi", "visit", 42.3600, -71.0545, "Boston"],
    ["North End", "Le quartier italien au bout du sentier, Old North Church.", "apres-midi", "visit", 42.3650, -71.0540, "North End, Boston"],
    ["Dîner de fruits de mer", "Clam chowder et homard dans le North End.", "soir", "food", 42.3640, -71.0550, "North End, Boston"]]'::jsonb);
  -- J2 Cambridge puis retour : Harvard → MIT (en descendant la Charles) →
  -- Fenway côté Boston le soir.
  PERFORM seed_day(c, 2, '[
    ["Université Harvard", "Le Yard, la statue aux trois mensonges et les librairies.", "matin", "visit", 42.3736, -71.1190, "Cambridge, Boston"],
    ["MIT", "Le dôme et les bâtiments de Gehry en redescendant la Charles.", "apres-midi", "visit", 42.3601, -71.0942, "Cambridge, Boston"],
    ["Musée des Beaux-Arts", "L''une des plus riches collections des Amériques.", "apres-midi", "visit", 42.3394, -71.0940, "Fenway, Boston"],
    ["Match ou pub à Fenway", "Le plus vieux stade de baseball du pays.", "soir", "night", 42.3467, -71.0972, "Fenway, Boston"]]'::jsonb);

  -- New York (5 jours).
  c := seed_city('USA', 'New York', 40.7128, -74.0060, 5, g, 2, 2);
  -- J1 Downtown : statue de la Liberté (ferry tôt) → Wall Street → 9/11
  -- Memorial → pont de Brooklyn à pied vers Dumbo au couchant.
  PERFORM seed_day(c, 1, '[
    ["Statue de la Liberté et Ellis Island", "Ferry matinal vers les symboles de l''Amérique.", "matin", "visit", 40.6892, -74.0445, "Liberty Island, New York"],
    ["Wall Street et le taureau", "Le cœur de la finance mondiale, Stock Exchange.", "apres-midi", "visit", 40.7074, -74.0113, "Financial District, New York"],
    ["Mémorial du 11-Septembre", "Les deux bassins dans l''empreinte des tours.", "apres-midi", "visit", 40.7115, -74.0134, "World Trade Center, New York"],
    ["Pont de Brooklyn à pied et Dumbo", "La traversée au couchant, Manhattan dans le dos.", "soir", "visit", 40.7061, -73.9969, "Brooklyn, New York"]]'::jsonb);
  -- J2 Midtown : Empire State → Bryant Park/NYPL → Grand Central (tout
  -- s''enchaîne vers le nord-est), Times Square le soir.
  PERFORM seed_day(c, 2, '[
    ["Empire State Building", "Le sommet Art déco mythique, tôt pour éviter la file.", "matin", "visit", 40.7484, -73.9857, "Midtown, New York"],
    ["New York Public Library et Bryant Park", "Les lions de marbre et la pelouse des Midtowners.", "apres-midi", "visit", 40.7536, -73.9832, "Midtown, New York"],
    ["Grand Central Terminal", "Le plafond aux constellations du plus beau hall du monde.", "apres-midi", "visit", 40.7527, -73.9772, "Midtown, New York"],
    ["Times Square", "Le carrefour du monde en pleine surchauffe lumineuse.", "soir", "visit", 40.7580, -73.9855, "Midtown, New York"]]'::jsonb);
  -- J3 : Central Park → Met (sur le parc), Broadway le soir.
  PERFORM seed_day(c, 3, '[
    ["Central Park", "Bethesda, Bow Bridge et Strawberry Fields à pied ou à vélo.", "matin", "nature", 40.7690, -73.9740, "Central Park, New York"],
    ["Metropolitan Museum of Art", "Le temple d''Égypte et 5 000 ans d''art, sur la 5e Avenue.", "apres-midi", "visit", 40.7794, -73.9632, "Upper East Side, New York"],
    ["Comédie musicale à Broadway", "Le grand spectacle new-yorkais.", "soir", "night", 40.7590, -73.9845, "Theater District, New York"]]'::jsonb);
  -- J4 : High Line (nord) → Chelsea Market (à mi-parcours) → Village →
  -- SoHo, descente continue de Manhattan ouest.
  PERFORM seed_day(c, 4, '[
    ["High Line", "L''ancienne voie ferrée suspendue plantée, du nord au sud.", "matin", "nature", 40.7480, -74.0048, "Chelsea, New York"],
    ["Chelsea Market", "Les halles gourmandes sous la High Line.", "matin", "food", 40.7424, -74.0060, "Chelsea, New York"],
    ["Greenwich Village et Washington Square", "L''arche, les brownstones et les joueurs d''échecs.", "apres-midi", "visit", 40.7308, -73.9973, "Greenwich Village, New York"],
    ["SoHo et Little Italy", "Façades en fonte, boutiques et dîner italien.", "soir", "food", 40.7233, -73.9980, "SoHo, New York"]]'::jsonb);
  -- J5 : Williamsburg le matin, 5e Avenue/MoMA l''après-midi, Top of the Rock au couchant.
  PERFORM seed_day(c, 5, '[
    ["Williamsburg", "Friperies, cafés et vue sur la skyline depuis le front de l''East River.", "matin", "visit", 40.7140, -73.9610, "Brooklyn, New York"],
    ["MoMA", "Van Gogh, Warhol et la Nuit étoilée.", "apres-midi", "visit", 40.7614, -73.9776, "Midtown, New York"],
    ["5e Avenue et Rockefeller Center", "Vitrines mythiques et patinoire.", "apres-midi", "shopping", 40.7587, -73.9787, "Midtown, New York"],
    ["Top of the Rock au couchant", "L''Empire State en face, Central Park dans le dos.", "soir", "visit", 40.7590, -73.9790, "Midtown, New York"]]'::jsonb);

  -- Philadelphie (1 jour) — nouvelle ville, sur la route de Washington.
  c := seed_city('USA', 'Philadelphie', 39.9526, -75.1652, 1, g, 3, 7);
  PERFORM seed_day(c, 1, '[
    ["Independence Hall et Liberty Bell", "La salle de la Déclaration de 1776 et la cloche fêlée.", "matin", "visit", 39.9489, -75.1500, "Old City, Philadelphie"],
    ["Reading Terminal Market", "Le marché couvert historique, sandwich au cheesesteak.", "apres-midi", "food", 39.9533, -75.1591, "Philadelphie"],
    ["Marches du Rocky au Museum of Art", "La montée mythique et la statue, au bout de la Parkway.", "apres-midi", "visit", 39.9656, -75.1810, "Philadelphie"],
    ["South Street", "Murals et bars pour la soirée.", "soir", "night", 39.9410, -75.1500, "Philadelphie"]]'::jsonb);

  -- Washington (2 jours).
  c := seed_city('USA', 'Washington', 38.9072, -77.0369, 2, g, 4, 8);
  -- J1 le Mall d''est en ouest : Capitole → musées → obélisque → Lincoln
  -- illuminé — une seule ligne droite de 4 km.
  PERFORM seed_day(c, 1, '[
    ["Capitole", "Le dôme du Congrès, point de départ du Mall.", "matin", "visit", 38.8899, -77.0091, "Capitol Hill, Washington"],
    ["Musées Smithsonian", "Air and Space ou Histoire naturelle, gratuits, au choix.", "apres-midi", "visit", 38.8882, -77.0199, "National Mall, Washington"],
    ["Washington Monument", "L''obélisque au centre exact de la perspective.", "apres-midi", "visit", 38.8895, -77.0353, "National Mall, Washington"],
    ["Lincoln Memorial illuminé", "Les mémoriaux de nuit, le moment le plus fort du Mall.", "soir", "visit", 38.8893, -77.0502, "National Mall, Washington"]]'::jsonb);
  -- J2 : Maison Blanche puis Georgetown à l''ouest.
  PERFORM seed_day(c, 2, '[
    ["Maison Blanche", "Le 1600 Pennsylvania Avenue depuis Lafayette Square.", "matin", "visit", 38.8977, -77.0365, "Washington"],
    ["Georgetown", "Pavés, maisons fédérales et canal C&O.", "apres-midi", "visit", 38.9096, -77.0654, "Georgetown, Washington"],
    ["Dîner sur le Georgetown Waterfront", "Dernière soirée au bord du Potomac.", "soir", "food", 38.9010, -77.0630, "Georgetown, Washington"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── 12 jours côte Ouest : Seattle → San Francisco → Los Angeles →
  --     San Diego → Las Vegas ───────────────────────────────────────
  g := seed_group('USA', 12);

  -- Seattle (2 jours) — nouvelle ville du catalogue.
  c := seed_city('USA', 'Seattle', 47.6062, -122.3321, 2, g, 1, 0);
  -- J1 front de mer : Pike Place → waterfront (en contrebas) → Pioneer
  -- Square au sud, dîner sur les quais.
  PERFORM seed_day(c, 1, '[
    ["Pike Place Market", "Les lanceurs de poissons et le premier Starbucks.", "matin", "food", 47.6097, -122.3422, "Seattle"],
    ["Waterfront et grande roue", "Les quais du Puget Sound en contrebas du marché.", "apres-midi", "visit", 47.6076, -122.3430, "Seattle"],
    ["Pioneer Square", "Le quartier fondateur en brique rouge et ses galeries.", "apres-midi", "visit", 47.6015, -122.3343, "Seattle"],
    ["Dîner de saumon sur les quais", "La cuisine du Pacifique Nord-Ouest.", "soir", "food", 47.6060, -122.3400, "Seattle"]]'::jsonb);
  -- J2 Seattle Center : Space Needle → Chihuly (au pied) → Kerry Park au
  -- nord pour LA vue, soirée à Capitol Hill.
  PERFORM seed_day(c, 2, '[
    ["Space Needle", "La soucoupe de 1962, plancher de verre tournant.", "matin", "visit", 47.6205, -122.3493, "Seattle Center, Seattle"],
    ["Chihuly Garden and Glass", "Les sculptures de verre incandescentes, au pied de la Needle.", "matin", "visit", 47.6206, -122.3505, "Seattle Center, Seattle"],
    ["Kerry Park", "LA carte postale : skyline et mont Rainier par temps clair.", "apres-midi", "nature", 47.6295, -122.3599, "Queen Anne, Seattle"],
    ["Capitol Hill", "Cafés, disquaires et bars du quartier le plus vivant.", "soir", "night", 47.6230, -122.3190, "Capitol Hill, Seattle"]]'::jsonb);

  -- San Francisco (3 jours).
  c := seed_city('USA', 'San Francisco', 37.7749, -122.4194, 3, g, 2, 2);
  -- J1 : Golden Gate → Palace of Fine Arts → Fisherman''s Wharf, la côte
  -- nord d''ouest en est.
  PERFORM seed_day(c, 1, '[
    ["Golden Gate Bridge", "La traversée à pied ou à vélo du pont rouge dans la brume.", "matin", "visit", 37.8199, -122.4783, "San Francisco"],
    ["Palace of Fine Arts", "La rotonde romantique de l''Exposition de 1915.", "apres-midi", "visit", 37.8029, -122.4484, "Marina, San Francisco"],
    ["Fisherman''s Wharf et Pier 39", "Les otaries vautrées et le crabe de Dungeness.", "apres-midi", "visit", 37.8080, -122.4177, "San Francisco"],
    ["Dîner de crabe sur le Wharf", "Clam chowder dans son pain au levain.", "soir", "food", 37.8080, -122.4160, "Fisherman''s Wharf, San Francisco"]]'::jsonb);
  -- J2 : Alcatraz (ferry du Pier 33) → Lombard Street → cable car vers
  -- Union Square, Chinatown le soir — descente continue vers le centre.
  PERFORM seed_day(c, 2, '[
    ["Alcatraz", "Le Rocher et ses cellules, audio-guide des anciens détenus (réserver).", "matin", "visit", 37.8267, -122.4230, "Baie de San Francisco"],
    ["Lombard Street", "La rue la plus sinueuse du monde, en descendant de Russian Hill.", "apres-midi", "visit", 37.8021, -122.4187, "Russian Hill, San Francisco"],
    ["Cable car et Union Square", "Le tramway à câble accroché aux pentes.", "apres-midi", "visit", 37.7880, -122.4075, "San Francisco"],
    ["Chinatown", "Le plus vieux quartier chinois d''Amérique, dîner aux lanternes.", "soir", "food", 37.7941, -122.4078, "Chinatown, San Francisco"]]'::jsonb);
  -- J3 : Golden Gate Park → Haight-Ashbury (adjacent) → Painted Ladies →
  -- Mission, traversée ouest → est.
  PERFORM seed_day(c, 3, '[
    ["Golden Gate Park", "Jardin japonais et bisons dans le grand parc océanique.", "matin", "nature", 37.7694, -122.4862, "San Francisco"],
    ["Haight-Ashbury", "Le carrefour hippie et ses friperies psychédéliques, à l''entrée du parc.", "apres-midi", "shopping", 37.7692, -122.4481, "San Francisco"],
    ["Painted Ladies d''Alamo Square", "Les sept sœurs victoriennes devant la skyline.", "apres-midi", "visit", 37.7763, -122.4330, "Alamo Square, San Francisco"],
    ["Mission District", "Murals de la Mission et meilleurs burritos de la ville.", "soir", "food", 37.7599, -122.4148, "Mission, San Francisco"]]'::jsonb);

  -- Los Angeles (3 jours).
  c := seed_city('USA', 'Los Angeles', 34.0522, -118.2437, 3, g, 3, 5);
  -- J1 Hollywood : Walk of Fame → Griffith (au-dessus), vue nocturne.
  PERFORM seed_day(c, 1, '[
    ["Hollywood Boulevard et Walk of Fame", "Étoiles, TCL Chinese Theatre et empreintes des stars.", "matin", "visit", 34.1016, -118.3269, "Hollywood, Los Angeles"],
    ["Observatoire Griffith", "Le Hollywood Sign et la ville entière depuis la colline.", "apres-midi", "visit", 34.1184, -118.3004, "Griffith Park, Los Angeles"],
    ["Los Angeles by night depuis Griffith", "Le tapis de lumières au crépuscule.", "soir", "nature", 34.1184, -118.3004, "Griffith Park, Los Angeles"]]'::jsonb);
  -- J2 côte : Getty (sur la route) → Santa Monica → Venice, du nord au sud.
  PERFORM seed_day(c, 2, '[
    ["Getty Center", "Van Gogh et jardins suspendus au-dessus de la ville, gratuit.", "matin", "visit", 34.0780, -118.4741, "Brentwood, Los Angeles"],
    ["Santa Monica Pier", "La grande roue au bout de la Route 66.", "apres-midi", "beach", 34.0100, -118.4960, "Santa Monica, Los Angeles"],
    ["Venice Beach", "Skateurs, bodybuilders et canaux en descendant la plage.", "apres-midi", "beach", 33.9850, -118.4695, "Venice, Los Angeles"],
    ["Coucher de soleil à Venice", "Le Pacifique en feu depuis le boardwalk.", "soir", "nature", 33.9850, -118.4720, "Venice, Los Angeles"]]'::jsonb);
  -- J3 : studios le matin, Downtown l''après-midi.
  PERFORM seed_day(c, 3, '[
    ["Studios Universal ou Warner", "Les coulisses d''Hollywood, décors et attractions.", "matin", "visit", 34.1381, -118.3534, "Universal City, Los Angeles"],
    ["Grand Central Market", "Les halles gourmandes de Downtown.", "apres-midi", "food", 34.0508, -118.2489, "Downtown, Los Angeles"],
    ["Walt Disney Concert Hall et The Broad", "L''acier de Gehry et le musée d''art contemporain voisin.", "apres-midi", "visit", 34.0553, -118.2498, "Downtown, Los Angeles"],
    ["Rooftop de Downtown", "La skyline depuis un toit-terrasse.", "soir", "night", 34.0480, -118.2500, "Downtown, Los Angeles"]]'::jsonb);

  -- San Diego (2 jours) — nouvelle ville du catalogue.
  c := seed_city('USA', 'San Diego', 32.7157, -117.1611, 2, g, 4, 8);
  -- J1 : Balboa Park et zoo (dans le parc), Gaslamp le soir.
  PERFORM seed_day(c, 1, '[
    ["Balboa Park", "Pavillons hispaniques et jardins du grand parc culturel.", "matin", "nature", 32.7341, -117.1446, "San Diego"],
    ["Zoo de San Diego", "L''un des plus beaux zoos du monde, dans le parc même.", "apres-midi", "visit", 32.7360, -117.1510, "Balboa Park, San Diego"],
    ["Gaslamp Quarter", "Façades victoriennes et rooftops du centre.", "soir", "night", 32.7112, -117.1602, "San Diego"]]'::jsonb);
  -- J2 : USS Midway sur le port → Coronado en face (pont ou ferry), Little Italy le soir.
  PERFORM seed_day(c, 2, '[
    ["USS Midway", "Le porte-avions musée sur l''Embarcadero.", "matin", "visit", 32.7137, -117.1751, "San Diego"],
    ["Coronado et son Hotel Del", "La plage dorée et le palace de bois de 1888, juste en face.", "apres-midi", "beach", 32.6859, -117.1831, "Coronado, San Diego"],
    ["Little Italy", "Piazza et tables italiennes pour la dernière soirée.", "soir", "food", 32.7230, -117.1690, "San Diego"]]'::jsonb);

  -- Las Vegas (2 jours).
  c := seed_city('USA', 'Las Vegas', 36.1699, -115.1398, 2, g, 5, 10);
  -- J1 le Strip du sud au nord : panneau Welcome → Bellagio/Caesars →
  -- fontaines et spectacle le soir.
  PERFORM seed_day(c, 1, '[
    ["Panneau Welcome to Las Vegas", "La photo rituelle à l''entrée sud du Strip.", "matin", "visit", 36.0820, -115.1728, "Las Vegas"],
    ["Conservatoire du Bellagio et Caesars Palace", "Jardins sous verrière et fastes romains en remontant le Strip.", "apres-midi", "visit", 36.1126, -115.1767, "The Strip, Las Vegas"],
    ["Fontaines du Bellagio", "Le ballet d''eau en musique à la nuit tombée.", "soir", "visit", 36.1126, -115.1740, "The Strip, Las Vegas"],
    ["Spectacle du Cirque du Soleil", "O, Kà ou Mystère — l''autre visage de Vegas.", "soir", "night", 36.1030, -115.1720, "The Strip, Las Vegas"]]'::jsonb);
  -- J2 : Red Rock Canyon à l''ouest le matin, Downtown/Fremont le soir.
  PERFORM seed_day(c, 2, '[
    ["Red Rock Canyon", "Boucle panoramique dans les roches rouges du Mojave.", "matin", "nature", 36.1350, -115.4270, "Red Rock Canyon, Nevada"],
    ["Fremont Street", "Le vieux Vegas sous sa voûte d''écrans.", "apres-midi", "visit", 36.1699, -115.1425, "Downtown, Las Vegas"],
    ["Fremont Street Experience", "Tyrolienne sous les néons et casinos historiques.", "soir", "night", 36.1700, -115.1440, "Downtown, Las Vegas"]]'::jsonb);
END $$;

DO $$
DECLARE c UUID;
BEGIN
  -- ─── La Nouvelle-Orléans seule (3 jours) ─────────────────────────
  c := seed_city('USA', 'La Nouvelle-Orléans', 29.9511, -90.0715, 3, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Jackson Square et cathédrale Saint-Louis", "Le cœur du French Quarter, artistes et voyantes.", "matin", "visit", 29.9575, -90.0632, "French Quarter, La Nouvelle-Orléans"],
    ["Beignets du Café du Monde", "Les beignets au sucre glace, institution depuis 1862.", "apres-midi", "food", 29.9574, -90.0618, "French Quarter, La Nouvelle-Orléans"],
    ["Jazz sur Frenchmen Street", "Les vrais clubs des locaux, loin de Bourbon Street.", "soir", "night", 29.9640, -90.0577, "Marigny, La Nouvelle-Orléans"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Tramway St. Charles et Garden District", "Le plus vieux tramway du monde sous les chênes.", "matin", "visit", 29.9280, -90.0840, "Garden District, La Nouvelle-Orléans"],
    ["Cimetière Lafayette", "Les tombes hors-sol emblématiques de la ville.", "apres-midi", "visit", 29.9290, -90.0850, "Garden District, La Nouvelle-Orléans"],
    ["Bourbon Street", "Balcons de fer forgé et fanfares, une fois quand même.", "soir", "night", 29.9590, -90.0650, "French Quarter, La Nouvelle-Orléans"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Excursion dans le bayou", "Alligators et cyprès chauves en airboat.", "matin", "nature", 29.7900, -90.1200, "Jean Lafitte, Louisiane"],
    ["National WWII Museum", "L''un des meilleurs musées des États-Unis.", "apres-midi", "visit", 29.9430, -90.0700, "Warehouse District, La Nouvelle-Orléans"],
    ["Dîner créole", "Gumbo, jambalaya et po''boy pour finir.", "soir", "food", 29.9560, -90.0650, "French Quarter, La Nouvelle-Orléans"]]'::jsonb);

  -- ─── Honolulu seule (3 jours) ────────────────────────────────────
  c := seed_city('USA', 'Honolulu', 21.3069, -157.8583, 3, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Diamond Head", "Ascension du cratère au lever du jour, Waikiki aux pieds.", "matin", "nature", 21.2620, -157.8060, "Honolulu"],
    ["Plage de Waikiki", "Surf débutant et farniente sur la plage mythique.", "apres-midi", "beach", 21.2760, -157.8270, "Waikiki, Honolulu"],
    ["Luau et coucher de soleil", "Danses polynésiennes et cochon kalua face au Pacifique.", "soir", "food", 21.2750, -157.8250, "Waikiki, Honolulu"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Pearl Harbor", "Le mémorial de l''USS Arizona, réserver tôt.", "matin", "visit", 21.3650, -157.9500, "Pearl Harbor, Honolulu"],
    ["Palais Iolani et Downtown", "Le seul palais royal des États-Unis.", "apres-midi", "visit", 21.3060, -157.8590, "Downtown, Honolulu"],
    ["Chinatown d''Honolulu", "Bars et galeries du quartier historique.", "soir", "night", 21.3120, -157.8620, "Chinatown, Honolulu"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Baie d''Hanauma", "Snorkeling dans le cratère marin aux cent poissons.", "matin", "nature", 21.2690, -157.6938, "Hanauma Bay, Honolulu"],
    ["Plage de Lanikai", "Sable poudreux et îlots Mokulua, côté au vent.", "apres-midi", "beach", 21.3930, -157.7140, "Kailua, Honolulu"],
    ["Dernière soirée à Waikiki", "Mai tai au bord de l''eau, feux du vendredi.", "soir", "night", 21.2760, -157.8280, "Waikiki, Honolulu"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du city-trip populaire : 5 jours New York seule.
-- Coexiste avec les versions v1 "chill". Mêmes journées denses que le
-- circuit côte Est ci-dessus.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('USA', 5);
  c := seed_city('USA', 'New York', 40.7128, -74.0060, 5, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Statue de la Liberté et Ellis Island", "Ferry matinal vers les symboles de l''Amérique.", "matin", "visit", 40.6892, -74.0445, "Liberty Island, New York"],
    ["Wall Street et le taureau", "Le cœur de la finance mondiale, Stock Exchange.", "apres-midi", "visit", 40.7074, -74.0113, "Financial District, New York"],
    ["Mémorial du 11-Septembre", "Les deux bassins dans l''empreinte des tours.", "apres-midi", "visit", 40.7115, -74.0134, "World Trade Center, New York"],
    ["Pont de Brooklyn à pied et Dumbo", "La traversée au couchant, Manhattan dans le dos.", "soir", "visit", 40.7061, -73.9969, "Brooklyn, New York"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Empire State Building", "Le sommet Art déco mythique, tôt pour éviter la file.", "matin", "visit", 40.7484, -73.9857, "Midtown, New York"],
    ["New York Public Library et Bryant Park", "Les lions de marbre et la pelouse des Midtowners.", "apres-midi", "visit", 40.7536, -73.9832, "Midtown, New York"],
    ["Grand Central Terminal", "Le plafond aux constellations du plus beau hall du monde.", "apres-midi", "visit", 40.7527, -73.9772, "Midtown, New York"],
    ["Times Square", "Le carrefour du monde en pleine surchauffe lumineuse.", "soir", "visit", 40.7580, -73.9855, "Midtown, New York"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Central Park", "Bethesda, Bow Bridge et Strawberry Fields à pied ou à vélo.", "matin", "nature", 40.7690, -73.9740, "Central Park, New York"],
    ["Metropolitan Museum of Art", "Le temple d''Égypte et 5 000 ans d''art, sur la 5e Avenue.", "apres-midi", "visit", 40.7794, -73.9632, "Upper East Side, New York"],
    ["Comédie musicale à Broadway", "Le grand spectacle new-yorkais.", "soir", "night", 40.7590, -73.9845, "Theater District, New York"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["High Line", "L''ancienne voie ferrée suspendue plantée, du nord au sud.", "matin", "nature", 40.7480, -74.0048, "Chelsea, New York"],
    ["Chelsea Market", "Les halles gourmandes sous la High Line.", "matin", "food", 40.7424, -74.0060, "Chelsea, New York"],
    ["Greenwich Village et Washington Square", "L''arche, les brownstones et les joueurs d''échecs.", "apres-midi", "visit", 40.7308, -73.9973, "Greenwich Village, New York"],
    ["SoHo et Little Italy", "Façades en fonte, boutiques et dîner italien.", "soir", "food", 40.7233, -73.9980, "SoHo, New York"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Williamsburg", "Friperies, cafés et vue sur la skyline depuis le front de l''East River.", "matin", "visit", 40.7140, -73.9610, "Brooklyn, New York"],
    ["MoMA", "Van Gogh, Warhol et la Nuit étoilée.", "apres-midi", "visit", 40.7614, -73.9776, "Midtown, New York"],
    ["5e Avenue et Rockefeller Center", "Vitrines mythiques et patinoire.", "apres-midi", "shopping", 40.7587, -73.9787, "Midtown, New York"],
    ["Top of the Rock au couchant", "L''Empire State en face, Central Park dans le dos.", "soir", "visit", 40.7590, -73.9790, "Midtown, New York"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du grand classique : 8 jours San Francisco →
-- Los Angeles → Las Vegas (la boucle californienne courte : côte du nord
-- au sud puis remontée vers le désert). Mêmes journées denses que le
-- circuit côte Ouest ci-dessus.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('USA', 8);

  c := seed_city('USA', 'San Francisco', 37.7749, -122.4194, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Golden Gate Bridge", "La traversée à pied ou à vélo du pont rouge dans la brume.", "matin", "visit", 37.8199, -122.4783, "San Francisco"],
    ["Palace of Fine Arts", "La rotonde romantique de l''Exposition de 1915.", "apres-midi", "visit", 37.8029, -122.4484, "Marina, San Francisco"],
    ["Fisherman''s Wharf et Pier 39", "Les otaries vautrées et le crabe de Dungeness.", "apres-midi", "visit", 37.8080, -122.4177, "San Francisco"],
    ["Dîner de crabe sur le Wharf", "Clam chowder dans son pain au levain.", "soir", "food", 37.8080, -122.4160, "Fisherman''s Wharf, San Francisco"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Alcatraz", "Le Rocher et ses cellules, audio-guide des anciens détenus (réserver).", "matin", "visit", 37.8267, -122.4230, "Baie de San Francisco"],
    ["Lombard Street", "La rue la plus sinueuse du monde, en descendant de Russian Hill.", "apres-midi", "visit", 37.8021, -122.4187, "Russian Hill, San Francisco"],
    ["Cable car et Union Square", "Le tramway à câble accroché aux pentes.", "apres-midi", "visit", 37.7880, -122.4075, "San Francisco"],
    ["Chinatown", "Le plus vieux quartier chinois d''Amérique, dîner aux lanternes.", "soir", "food", 37.7941, -122.4078, "Chinatown, San Francisco"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Golden Gate Park", "Jardin japonais et bisons dans le grand parc océanique.", "matin", "nature", 37.7694, -122.4862, "San Francisco"],
    ["Haight-Ashbury", "Le carrefour hippie et ses friperies psychédéliques, à l''entrée du parc.", "apres-midi", "shopping", 37.7692, -122.4481, "San Francisco"],
    ["Painted Ladies d''Alamo Square", "Les sept sœurs victoriennes devant la skyline.", "apres-midi", "visit", 37.7763, -122.4330, "Alamo Square, San Francisco"],
    ["Mission District", "Murals de la Mission et meilleurs burritos de la ville.", "soir", "food", 37.7599, -122.4148, "Mission, San Francisco"]]'::jsonb);

  c := seed_city('USA', 'Los Angeles', 34.0522, -118.2437, 3, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Hollywood Boulevard et Walk of Fame", "Étoiles, TCL Chinese Theatre et empreintes des stars.", "matin", "visit", 34.1016, -118.3269, "Hollywood, Los Angeles"],
    ["Observatoire Griffith", "Le Hollywood Sign et la ville entière depuis la colline.", "apres-midi", "visit", 34.1184, -118.3004, "Griffith Park, Los Angeles"],
    ["Los Angeles by night depuis Griffith", "Le tapis de lumières au crépuscule.", "soir", "nature", 34.1184, -118.3004, "Griffith Park, Los Angeles"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Getty Center", "Van Gogh et jardins suspendus au-dessus de la ville, gratuit.", "matin", "visit", 34.0780, -118.4741, "Brentwood, Los Angeles"],
    ["Santa Monica Pier", "La grande roue au bout de la Route 66.", "apres-midi", "beach", 34.0100, -118.4960, "Santa Monica, Los Angeles"],
    ["Venice Beach", "Skateurs, bodybuilders et canaux en descendant la plage.", "apres-midi", "beach", 33.9850, -118.4695, "Venice, Los Angeles"],
    ["Coucher de soleil à Venice", "Le Pacifique en feu depuis le boardwalk.", "soir", "nature", 33.9850, -118.4720, "Venice, Los Angeles"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Studios Universal ou Warner", "Les coulisses d''Hollywood, décors et attractions.", "matin", "visit", 34.1381, -118.3534, "Universal City, Los Angeles"],
    ["Grand Central Market", "Les halles gourmandes de Downtown.", "apres-midi", "food", 34.0508, -118.2489, "Downtown, Los Angeles"],
    ["Walt Disney Concert Hall et The Broad", "L''acier de Gehry et le musée d''art contemporain voisin.", "apres-midi", "visit", 34.0553, -118.2498, "Downtown, Los Angeles"],
    ["Rooftop de Downtown", "La skyline depuis un toit-terrasse.", "soir", "night", 34.0480, -118.2500, "Downtown, Los Angeles"]]'::jsonb);

  c := seed_city('USA', 'Las Vegas', 36.1699, -115.1398, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Panneau Welcome to Las Vegas", "La photo rituelle à l''entrée sud du Strip.", "matin", "visit", 36.0820, -115.1728, "Las Vegas"],
    ["Conservatoire du Bellagio et Caesars Palace", "Jardins sous verrière et fastes romains en remontant le Strip.", "apres-midi", "visit", 36.1126, -115.1767, "The Strip, Las Vegas"],
    ["Fontaines du Bellagio", "Le ballet d''eau en musique à la nuit tombée.", "soir", "visit", 36.1126, -115.1740, "The Strip, Las Vegas"],
    ["Spectacle du Cirque du Soleil", "O, Kà ou Mystère — l''autre visage de Vegas.", "soir", "night", 36.1030, -115.1720, "The Strip, Las Vegas"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Red Rock Canyon", "Boucle panoramique dans les roches rouges du Mojave.", "matin", "nature", 36.1350, -115.4270, "Red Rock Canyon, Nevada"],
    ["Fremont Street", "Le vieux Vegas sous sa voûte d''écrans.", "apres-midi", "visit", 36.1699, -115.1425, "Downtown, Las Vegas"],
    ["Fremont Street Experience", "Tyrolienne sous les néons et casinos historiques.", "soir", "night", 36.1700, -115.1440, "Downtown, Las Vegas"]]'::jsonb);
END $$;
