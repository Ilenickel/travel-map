-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — USA voyages LONGS (après helpers ; fichier
-- AUTONOME : à exécuter une seule fois, ne touche pas aux seeds déjà passés)
--   - 21 jours DENSE coast-to-coast : Boston (2j) → New York (5j) →
--     Washington (2j) → [vol] → Seattle (2j) → San Francisco (3j) →
--     Los Angeles (3j) → San Diego (2j) → Las Vegas (2j).
--     Variante chargée du 21j chill v1 (NYC→DC→Chicago→Vegas→LA→SF) :
--     côte Est du nord au sud, puis côte Ouest du nord au sud, désert en
--     final — jamais de retour arrière dans une même côte. Journées denses
--     identiques aux circuits Est/Ouest de usa_v2 (duplication assumée,
--     la dédup par contenu de handleSuggest n'affiche qu'une carte par ville).
-- Relance : DELETE l'éditorial USA puis rejouer usa.sql, usa_v2.sql ET ce fichier.
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('USA', 21);

  -- Boston (2 jours).
  c := seed_city('USA', 'Boston', 42.3601, -71.0589, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Boston Common et State House", "Départ du Freedom Trail sous le dôme doré.", "matin", "visit", 42.3550, -71.0656, "Boston"],
    ["Faneuil Hall et Quincy Market", "Le berceau de la révolution et ses halles gourmandes.", "apres-midi", "visit", 42.3600, -71.0545, "Boston"],
    ["North End", "Le quartier italien au bout du sentier, Old North Church.", "apres-midi", "visit", 42.3650, -71.0540, "North End, Boston"],
    ["Dîner de fruits de mer", "Clam chowder et homard dans le North End.", "soir", "food", 42.3640, -71.0550, "North End, Boston"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Université Harvard", "Le Yard, la statue aux trois mensonges et les librairies.", "matin", "visit", 42.3736, -71.1190, "Cambridge, Boston"],
    ["MIT", "Le dôme et les bâtiments de Gehry en redescendant la Charles.", "apres-midi", "visit", 42.3601, -71.0942, "Cambridge, Boston"],
    ["Musée des Beaux-Arts", "L''une des plus riches collections des Amériques.", "apres-midi", "visit", 42.3394, -71.0940, "Fenway, Boston"],
    ["Match ou pub à Fenway", "Le plus vieux stade de baseball du pays.", "soir", "night", 42.3467, -71.0972, "Fenway, Boston"]]'::jsonb);

  -- New York (5 jours).
  c := seed_city('USA', 'New York', 40.7128, -74.0060, 5, g, 2, 2);
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

  -- Washington (2 jours).
  c := seed_city('USA', 'Washington', 38.9072, -77.0369, 2, g, 3, 7);
  PERFORM seed_day(c, 1, '[
    ["Capitole", "Le dôme du Congrès, point de départ du Mall.", "matin", "visit", 38.8899, -77.0091, "Capitol Hill, Washington"],
    ["Musées Smithsonian", "Air and Space ou Histoire naturelle, gratuits, au choix.", "apres-midi", "visit", 38.8882, -77.0199, "National Mall, Washington"],
    ["Washington Monument", "L''obélisque au centre exact de la perspective.", "apres-midi", "visit", 38.8895, -77.0353, "National Mall, Washington"],
    ["Lincoln Memorial illuminé", "Les mémoriaux de nuit, le moment le plus fort du Mall.", "soir", "visit", 38.8893, -77.0502, "National Mall, Washington"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Maison Blanche", "Le 1600 Pennsylvania Avenue depuis Lafayette Square.", "matin", "visit", 38.8977, -77.0365, "Washington"],
    ["Georgetown", "Pavés, maisons fédérales et canal C&O.", "apres-midi", "visit", 38.9096, -77.0654, "Georgetown, Washington"],
    ["Dîner sur le Georgetown Waterfront", "Vol du soir ou du lendemain vers la côte Ouest.", "soir", "food", 38.9010, -77.0630, "Georgetown, Washington"]]'::jsonb);

  -- Seattle (2 jours) — début de la côte Ouest, descente vers le sud.
  c := seed_city('USA', 'Seattle', 47.6062, -122.3321, 2, g, 4, 9);
  PERFORM seed_day(c, 1, '[
    ["Pike Place Market", "Les lanceurs de poissons et le premier Starbucks.", "matin", "food", 47.6097, -122.3422, "Seattle"],
    ["Waterfront et grande roue", "Les quais du Puget Sound en contrebas du marché.", "apres-midi", "visit", 47.6076, -122.3430, "Seattle"],
    ["Pioneer Square", "Le quartier fondateur en brique rouge et ses galeries.", "apres-midi", "visit", 47.6015, -122.3343, "Seattle"],
    ["Dîner de saumon sur les quais", "La cuisine du Pacifique Nord-Ouest.", "soir", "food", 47.6060, -122.3400, "Seattle"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Space Needle", "La soucoupe de 1962, plancher de verre tournant.", "matin", "visit", 47.6205, -122.3493, "Seattle Center, Seattle"],
    ["Chihuly Garden and Glass", "Les sculptures de verre incandescentes, au pied de la Needle.", "matin", "visit", 47.6206, -122.3505, "Seattle Center, Seattle"],
    ["Kerry Park", "LA carte postale : skyline et mont Rainier par temps clair.", "apres-midi", "nature", 47.6295, -122.3599, "Queen Anne, Seattle"],
    ["Capitol Hill", "Cafés, disquaires et bars du quartier le plus vivant.", "soir", "night", 47.6230, -122.3190, "Capitol Hill, Seattle"]]'::jsonb);

  -- San Francisco (3 jours).
  c := seed_city('USA', 'San Francisco', 37.7749, -122.4194, 3, g, 5, 11);
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

  -- Los Angeles (3 jours).
  c := seed_city('USA', 'Los Angeles', 34.0522, -118.2437, 3, g, 6, 14);
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

  -- San Diego (2 jours).
  c := seed_city('USA', 'San Diego', 32.7157, -117.1611, 2, g, 7, 17);
  PERFORM seed_day(c, 1, '[
    ["Balboa Park", "Pavillons hispaniques et jardins du grand parc culturel.", "matin", "nature", 32.7341, -117.1446, "San Diego"],
    ["Zoo de San Diego", "L''un des plus beaux zoos du monde, dans le parc même.", "apres-midi", "visit", 32.7360, -117.1510, "Balboa Park, San Diego"],
    ["Gaslamp Quarter", "Façades victoriennes et rooftops du centre.", "soir", "night", 32.7112, -117.1602, "San Diego"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["USS Midway", "Le porte-avions musée sur l''Embarcadero.", "matin", "visit", 32.7137, -117.1751, "San Diego"],
    ["Coronado et son Hotel Del", "La plage dorée et le palace de bois de 1888, juste en face.", "apres-midi", "beach", 32.6859, -117.1831, "Coronado, San Diego"],
    ["Little Italy", "Piazza et tables italiennes avant la route du désert.", "soir", "food", 32.7230, -117.1690, "San Diego"]]'::jsonb);

  -- Las Vegas (2 jours) — final dans le désert.
  c := seed_city('USA', 'Las Vegas', 36.1699, -115.1398, 2, g, 8, 19);
  PERFORM seed_day(c, 1, '[
    ["Panneau Welcome to Las Vegas", "La photo rituelle à l''entrée sud du Strip.", "matin", "visit", 36.0820, -115.1728, "Las Vegas"],
    ["Conservatoire du Bellagio et Caesars Palace", "Jardins sous verrière et fastes romains en remontant le Strip.", "apres-midi", "visit", 36.1126, -115.1767, "The Strip, Las Vegas"],
    ["Fontaines du Bellagio", "Le ballet d''eau en musique à la nuit tombée.", "soir", "visit", 36.1126, -115.1740, "The Strip, Las Vegas"],
    ["Spectacle du Cirque du Soleil", "O, Kà ou Mystère — l''autre visage de Vegas.", "soir", "night", 36.1030, -115.1720, "The Strip, Las Vegas"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Red Rock Canyon", "Boucle panoramique dans les roches rouges du Mojave.", "matin", "nature", 36.1350, -115.4270, "Red Rock Canyon, Nevada"],
    ["Fremont Street", "Le vieux Vegas sous sa voûte d''écrans.", "apres-midi", "visit", 36.1699, -115.1425, "Downtown, Las Vegas"],
    ["Fremont Street Experience", "Tyrolienne sous les néons pour la dernière nuit du voyage.", "soir", "night", 36.1700, -115.1440, "Downtown, Las Vegas"]]'::jsonb);
END $$;
