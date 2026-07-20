-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — AUSTRALIE (après seed_trip_templates_helpers.sql)
--   - 14 jours LÉGER (1 activité par créneau) : Sydney (4j, + Blue Mountains)
--     → Cairns (3j) → Uluru (2j) → Melbourne (5j, + Great Ocean Road).
--     Logique : côte Est → tropiques → centre rouge → Sud, un vol par étape,
--     jamais de retour arrière.
--   - 10 jours DENSE côte Est : Sydney (4j, + Blue Mountains) → Brisbane (2j)
--     → Cairns (4j, Grande Barrière + Kuranda + Daintree). Du sud au nord
--     le long de la même côte.
--   - Villes solo : Perth (2j), Adélaïde (1j) — group_id NULL, visibles
--     uniquement en suggestion par ville.
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'AUS';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'AUS';
--           puis rejouer ce fichier.
-- ════════════════════════════════════════════════════════════════

-- ─── 14 jours LÉGER : Sydney → Cairns → Uluru → Melbourne ─────────
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('AUS', 14);

  -- Sydney (4 jours : 3 propres + excursion Blue Mountains en jour 3).
  c := seed_city('AUS', 'Sydney', -33.8688, 151.2093, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Opéra de Sydney", "Les voiles blanches de Bennelong Point, visite ou simple tour extérieur.", "matin", "visit", -33.8568, 151.2153, "Circular Quay, Sydney"],
    ["Jardin botanique royal et Mrs Macquarie''s Chair", "La baie vue depuis les pelouses, opéra et pont dans le même cadre.", "apres-midi", "nature", -33.8642, 151.2166, "Sydney"],
    ["Dîner à Circular Quay", "Fruits de mer face aux ferries illuminés.", "soir", "food", -33.8610, 151.2110, "Circular Quay, Sydney"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["The Rocks et Harbour Bridge", "Le plus vieux quartier du pays sous l''arche d''acier.", "matin", "visit", -33.8523, 151.2108, "The Rocks, Sydney"],
    ["Ferry vers Manly", "La plus belle traversée de la baie, plage et promenade côtière.", "apres-midi", "nature", -33.7970, 151.2880, "Manly, Sydney"],
    ["Darling Harbour", "Le port de plaisance et ses restaurants au bord de l''eau.", "soir", "food", -33.8748, 151.2010, "Darling Harbour, Sydney"]]'::jsonb);
  -- Excursion Blue Mountains (jour 3).
  e := seed_daytrip('AUS', 'Blue Mountains', -33.7320, 150.3120, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Echo Point et les Three Sisters", "Les trois pitons de grès au-dessus de la vallée bleutée d''eucalyptus.", "matin", "nature", -33.7320, 150.3120, "Katoomba, Blue Mountains"],
    ["Scenic World", "Le funiculaire le plus pentu du monde et la passerelle dans la forêt.", "apres-midi", "nature", -33.7270, 150.2990, "Katoomba, Blue Mountains"],
    ["Retour et dîner à Sydney", "Soirée tranquille après la montagne.", "soir", "food", -33.8700, 151.2070, "Sydney"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Plage de Bondi", "La plage mythique du surf australien.", "matin", "nature", -33.8908, 151.2743, "Bondi, Sydney"],
    ["Balade côtière Bondi–Coogee", "Falaises, criques et piscines d''eau de mer sur 6 km.", "apres-midi", "nature", -33.9200, 151.2570, "Sydney"],
    ["Opera Bar au couchant", "Un verre sous les voiles, le pont qui s''illumine.", "soir", "night", -33.8580, 151.2140, "Circular Quay, Sydney"]]'::jsonb);

  -- Cairns (3 jours).
  c := seed_city('AUS', 'Cairns', -16.9186, 145.7781, 3, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Esplanade et lagon de Cairns", "La piscine publique face à la mer de Corail.", "matin", "nature", -16.9186, 145.7781, "Cairns"],
    ["Jardin botanique de Cairns", "Fougères géantes et orchidées tropicales.", "apres-midi", "nature", -16.9020, 145.7460, "Edge Hill, Cairns"],
    ["Marché de nuit", "Brochettes de crocodile et souvenirs sous les ventilateurs.", "soir", "food", -16.9210, 145.7760, "Cairns"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Grande Barrière de corail", "Bateau matinal vers le récif extérieur, le plus grand organisme vivant du monde.", "matin", "nature", -16.7500, 146.0000, "Grande Barrière, Cairns"],
    ["Snorkeling sur le récif", "Poissons-clowns, tortues et jardins de corail.", "apres-midi", "nature", -16.7400, 146.0100, "Grande Barrière, Cairns"],
    ["Dîner sur la marina", "Poisson grillé au retour du large.", "soir", "food", -16.9220, 145.7800, "Marina, Cairns"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Gorge de Mossman", "Baignade dans la rivière au cœur de la plus vieille forêt du monde.", "matin", "nature", -16.4710, 145.3660, "Daintree, Queensland"],
    ["Cape Tribulation", "Là où la forêt tropicale rencontre le récif, plages désertes.", "apres-midi", "nature", -16.0830, 145.4640, "Daintree, Queensland"],
    ["Retour et soirée à Cairns", "Dernière soirée tropicale sur l''Esplanade.", "soir", "food", -16.9190, 145.7780, "Cairns"]]'::jsonb);

  -- Uluru (2 jours).
  c := seed_city('AUS', 'Uluru', -25.3444, 131.0369, 2, g, 3, 7);
  PERFORM seed_day(c, 1, '[
    ["Tour de la base d''Uluru", "10 km au pied du monolithe sacré, points d''eau et peintures rupestres.", "matin", "nature", -25.3444, 131.0369, "Uluru-Kata Tjuta"],
    ["Centre culturel anangu", "L''histoire du peuple propriétaire du rocher, le Tjukurpa.", "apres-midi", "visit", -25.3450, 131.0320, "Uluru-Kata Tjuta"],
    ["Coucher de soleil sur Uluru", "Le rocher qui vire du rouge au pourpre depuis l''aire d''observation.", "soir", "nature", -25.3400, 131.0200, "Uluru-Kata Tjuta"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Lever de soleil à Kata Tjuta", "Les 36 dômes rouges embrasés à l''aube.", "matin", "nature", -25.3000, 130.7350, "Uluru-Kata Tjuta"],
    ["Vallée des Vents", "La marche entre les parois des Olgas.", "apres-midi", "nature", -25.3030, 130.7540, "Kata Tjuta"],
    ["Ciel étoilé du désert", "La Voie lactée comme nulle part ailleurs, dîner sous les étoiles.", "soir", "nature", -25.2400, 130.9890, "Yulara"]]'::jsonb);

  -- Melbourne (5 jours : 4 propres + excursion Great Ocean Road en jour 3).
  c := seed_city('AUS', 'Melbourne', -37.8136, 144.9631, 5, g, 4, 9);
  PERFORM seed_day(c, 1, '[
    ["Federation Square et les laneways", "Le cœur de la ville et ses ruelles cachées, cafés et arcades.", "matin", "visit", -37.8180, 144.9691, "Melbourne"],
    ["Hosier Lane", "Le street art qui change chaque semaine.", "apres-midi", "visit", -37.8166, 144.9690, "Melbourne"],
    ["Rooftop bars du CBD", "La skyline depuis les toits, institution locale.", "soir", "night", -37.8140, 144.9650, "Melbourne"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Queen Victoria Market", "La grande halle de 1878, fromages et beignets chauds.", "matin", "food", -37.8076, 144.9568, "Melbourne"],
    ["Jardins botaniques royaux", "38 hectares au bord de la Yarra, l''un des plus beaux jardins du monde.", "apres-midi", "nature", -37.8304, 144.9796, "South Yarra, Melbourne"],
    ["St Kilda et les petits pingouins", "Les manchots pygmées de la jetée à la nuit tombée.", "soir", "nature", -37.8679, 144.9740, "St Kilda, Melbourne"]]'::jsonb);
  -- Excursion Great Ocean Road (jour 3).
  e := seed_daytrip('AUS', 'Great Ocean Road', -38.6620, 143.1050, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Memorial Arch et Bells Beach", "L''entrée de la route mythique et la plage des surfeurs.", "matin", "nature", -38.3680, 144.2810, "Torquay, Victoria"],
    ["Les Douze Apôtres", "Les aiguilles de calcaire dressées dans l''océan Austral.", "apres-midi", "nature", -38.6620, 143.1050, "Port Campbell, Victoria"],
    ["Loch Ard Gorge au couchant", "La gorge du naufrage, dernière lumière sur les falaises.", "soir", "nature", -38.6560, 143.0710, "Port Campbell, Victoria"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["National Gallery of Victoria", "Le plus vieux et plus visité des musées d''art du pays.", "matin", "visit", -37.8226, 144.9689, "Southbank, Melbourne"],
    ["Fitzroy et Brunswick Street", "Friperies, galeries et cafés du quartier bohème.", "apres-midi", "shopping", -37.7986, 144.9784, "Fitzroy, Melbourne"],
    ["Dîner à Chinatown", "Dumplings dans le plus vieux Chinatown de l''hémisphère Sud.", "soir", "food", -37.8110, 144.9660, "Melbourne"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Cabines de Brighton Beach", "Les 82 cabines victoriennes multicolores face à la baie.", "matin", "visit", -37.9180, 144.9866, "Brighton, Melbourne"],
    ["Southbank et Melbourne Skydeck", "La promenade de la Yarra et la vue du 88e étage.", "apres-midi", "visit", -37.8213, 144.9645, "Southbank, Melbourne"],
    ["Dernier verre sur la Yarra", "Les quais illuminés pour finir le voyage.", "soir", "night", -37.8200, 144.9600, "Southbank, Melbourne"]]'::jsonb);
END $$;

-- ─── 10 jours DENSE côte Est : Sydney → Brisbane → Cairns ─────────
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('AUS', 10);

  -- Sydney (4 jours : 3 propres + excursion Blue Mountains en jour 3).
  c := seed_city('AUS', 'Sydney', -33.8688, 151.2093, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["The Rocks", "Ruelles pavées et marchés du premier quartier colonial.", "matin", "visit", -33.8593, 151.2089, "The Rocks, Sydney"],
    ["Pylône du Harbour Bridge", "200 marches dans le pilier sud-est, la baie à 87 m, juste à côté.", "matin", "visit", -33.8523, 151.2108, "Sydney"],
    ["Opéra de Sydney", "Visite guidée sous les voiles, salles et coulisses, en longeant la baie vers l''est.", "apres-midi", "visit", -33.8568, 151.2153, "Circular Quay, Sydney"],
    ["Jardin botanique royal", "Les pelouses et Mrs Macquarie''s Chair, juste après l''opéra.", "apres-midi", "nature", -33.8642, 151.2166, "Sydney"],
    ["Dîner à Circular Quay", "Fruits de mer face aux ferries et à l''opéra illuminé.", "soir", "food", -33.8610, 151.2110, "Circular Quay, Sydney"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Ferry vers Manly", "La traversée de la baie au soleil du matin.", "matin", "nature", -33.7970, 151.2880, "Manly, Sydney"],
    ["North Head", "Le promontoire face au large, retour en ferry.", "matin", "nature", -33.8210, 151.2940, "Manly, Sydney"],
    ["Barangaroo et Wynyard", "La promenade neuve du port jusqu''au cœur du CBD.", "apres-midi", "visit", -33.8620, 151.2010, "Barangaroo, Sydney"],
    ["Darling Harbour", "Aquarium, musée maritime ou simple flânerie sur les quais.", "apres-midi", "visit", -33.8748, 151.2010, "Darling Harbour, Sydney"],
    ["Soirée à Darling Harbour", "Restaurants et feux d''artifice du samedi sur l''eau.", "soir", "night", -33.8740, 151.2000, "Darling Harbour, Sydney"]]'::jsonb);
  -- Excursion Blue Mountains dense (jour 3).
  e := seed_daytrip('AUS', 'Blue Mountains', -33.7320, 150.3120, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Echo Point et les Three Sisters", "Les trois pitons de grès dès l''ouverture, avant les cars.", "matin", "nature", -33.7320, 150.3120, "Katoomba, Blue Mountains"],
    ["Scenic World", "Funiculaire le plus pentu du monde, téléphérique et passerelle en forêt.", "matin", "nature", -33.7270, 150.2990, "Katoomba, Blue Mountains"],
    ["Village de Leura", "Salons de thé et boutiques 1900, sur la route vers l''est.", "apres-midi", "visit", -33.7150, 150.3310, "Leura, Blue Mountains"],
    ["Wentworth Falls", "La cascade en escalier au-dessus de la vallée Jamison, plus à l''est.", "apres-midi", "nature", -33.7270, 150.3730, "Wentworth Falls, Blue Mountains"],
    ["Retour et dîner à Sydney", "Soirée tranquille après la montagne.", "soir", "food", -33.8700, 151.2070, "Sydney"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Plage de Bondi", "Baignade ou leçon de surf sur la plage mythique.", "matin", "nature", -33.8908, 151.2743, "Bondi, Sydney"],
    ["Balade côtière Bondi–Coogee", "Falaises, piscines d''eau de mer et criques sur 6 km.", "apres-midi", "nature", -33.9200, 151.2570, "Sydney"],
    ["Paddington et Oxford Street", "Maisons victoriennes à dentelle de fer et boutiques de créateurs.", "apres-midi", "shopping", -33.8850, 151.2260, "Paddington, Sydney"],
    ["Dîner à Surry Hills", "Le quartier des meilleures tables de la ville.", "soir", "food", -33.8860, 151.2110, "Surry Hills, Sydney"]]'::jsonb);

  -- Brisbane (2 jours).
  c := seed_city('AUS', 'Brisbane', -27.4698, 153.0251, 2, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["South Bank et Streets Beach", "La plage artificielle et les jardins face à la skyline.", "matin", "nature", -27.4750, 153.0230, "South Bank, Brisbane"],
    ["City Hall et le CBD", "L''hôtel de ville et sa tour-horloge, quartier piéton de Queen Street.", "apres-midi", "visit", -27.4690, 153.0235, "Brisbane"],
    ["CityCat sur la Brisbane River", "Le ferry rapide qui serpente entre les ponts.", "apres-midi", "visit", -27.4720, 153.0180, "Brisbane"],
    ["Dîner sur Eagle Street Pier", "Tables au bord du fleuve, Story Bridge illuminé.", "soir", "food", -27.4670, 153.0300, "Brisbane"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Lone Pine Koala Sanctuary", "Le plus vieux sanctuaire de koalas du monde, kangourous en liberté.", "matin", "nature", -27.5330, 152.9680, "Fig Tree Pocket, Brisbane"],
    ["Belvédère du mont Coot-tha", "Toute la ville jusqu''à la baie de Moreton.", "apres-midi", "nature", -27.4770, 152.9540, "Mount Coot-tha, Brisbane"],
    ["Jardins botaniques du mont Coot-tha", "Dôme tropical et jardin japonais au pied du belvédère.", "apres-midi", "nature", -27.4750, 152.9760, "Toowong, Brisbane"],
    ["Fortitude Valley", "Bars et salles de concert du quartier nocturne.", "soir", "night", -27.4570, 153.0340, "Fortitude Valley, Brisbane"]]'::jsonb);

  -- Cairns (4 jours).
  c := seed_city('AUS', 'Cairns', -16.9186, 145.7781, 4, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Rusty''s Market", "Fruits tropicaux et café du plateau, le marché du week-end.", "matin", "food", -16.9230, 145.7740, "Cairns"],
    ["Esplanade et lagon de Cairns", "Baignade dans la piscine publique face à la mer de Corail.", "matin", "nature", -16.9186, 145.7781, "Cairns"],
    ["Jardin botanique de Cairns", "Fougères géantes et sentier de la forêt tropicale.", "apres-midi", "nature", -16.9020, 145.7460, "Edge Hill, Cairns"],
    ["Marché de nuit", "Brochettes de crocodile et étals sous les ventilateurs.", "soir", "food", -16.9210, 145.7760, "Cairns"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Récif extérieur de la Grande Barrière", "Bateau matinal vers les meilleurs sites du récif.", "matin", "nature", -16.7500, 146.0000, "Grande Barrière, Cairns"],
    ["Plongée ou snorkeling", "Tortues, poissons-clowns et jardins de corail.", "apres-midi", "nature", -16.7400, 146.0100, "Grande Barrière, Cairns"],
    ["Michaelmas Cay", "L''îlot de sable blanc aux mille oiseaux marins.", "apres-midi", "nature", -16.6060, 145.9790, "Grande Barrière, Cairns"],
    ["Dîner sur la marina", "Poisson grillé au retour du large.", "soir", "food", -16.9220, 145.7800, "Marina, Cairns"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Kuranda Scenic Railway", "Le train de 1891 qui grimpe dans la forêt, cascades et tunnels.", "matin", "visit", -16.8190, 145.6380, "Kuranda, Queensland"],
    ["Village et marchés de Kuranda", "Artisanat aborigène dans le village de la forêt.", "apres-midi", "shopping", -16.8190, 145.6380, "Kuranda, Queensland"],
    ["Skyrail au-dessus de la canopée", "La redescente en téléphérique au ras des arbres.", "apres-midi", "nature", -16.8710, 145.6900, "Smithfield, Cairns"],
    ["Barbecue sur l''Esplanade", "La soirée australienne classique face à la mer.", "soir", "food", -16.9190, 145.7780, "Cairns"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Gorge de Mossman", "Baignade dans la rivière au cœur de la forêt de Daintree.", "matin", "nature", -16.4710, 145.3660, "Daintree, Queensland"],
    ["Croisière aux crocodiles sur la Daintree", "Les estuariens tapis dans la mangrove.", "apres-midi", "nature", -16.2500, 145.4110, "Daintree, Queensland"],
    ["Cape Tribulation", "Là où la plus vieille forêt du monde touche le récif.", "apres-midi", "nature", -16.0830, 145.4640, "Daintree, Queensland"],
    ["Dernière soirée à Cairns", "Dîner d''adieu sur le front de mer.", "soir", "food", -16.9190, 145.7780, "Cairns"]]'::jsonb);
END $$;

-- ─── 21 jours DENSE grand tour : Perth → Uluru → Melbourne → Sydney →
--     Brisbane → Cairns (ouest → centre rouge → sud → côte Est du sud
--     au nord, jamais de retour arrière) ─────────────────────────────
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('AUS', 21);

  -- Perth (3 jours : 2 propres + excursion Rottnest Island en jour 3).
  c := seed_city('AUS', 'Perth', -31.9505, 115.8605, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Kings Park", "L''un des plus grands parcs urbains du monde, ville et Swan River en contrebas.", "matin", "nature", -31.9590, 115.8330, "Perth"],
    ["Elizabeth Quay et le CBD", "Les quais neufs et les arcades de la ville la plus isolée du monde.", "apres-midi", "visit", -31.9560, 115.8570, "Perth"],
    ["Northbridge", "Bars, néons et petites salles du quartier nocturne.", "soir", "night", -31.9470, 115.8560, "Northbridge, Perth"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Fremantle", "Marchés victoriens et ancienne prison Unesco du port historique.", "matin", "visit", -32.0560, 115.7470, "Fremantle, Perth"],
    ["Plage de Cottesloe", "Sable blanc et pins de Norfolk entre Perth et Fremantle.", "apres-midi", "nature", -31.9950, 115.7510, "Cottesloe, Perth"],
    ["Coucher de soleil sur l''océan Indien", "L''un des rares endroits d''Australie où le soleil plonge dans la mer.", "soir", "nature", -31.9940, 115.7500, "Cottesloe, Perth"]]'::jsonb);
  -- Excursion Rottnest Island (jour 3).
  e := seed_daytrip('AUS', 'Rottnest Island', -32.0064, 115.5133, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Ferry vers Rottnest Island", "20 km au large, l''île sans voiture réputée pour ses quokkas souriants.", "matin", "nature", -32.0064, 115.5133, "Rottnest Island"],
    ["Vélo autour de l''île et quokka selfie", "Les seuls habitants à quatre pattes croisés sur le sentier.", "matin", "nature", -32.0000, 115.5200, "Rottnest Island"],
    ["Baignade au Basin", "La crique turquoise protégée par un récif, la plus photogénique de l''île.", "apres-midi", "nature", -32.0080, 115.5040, "Rottnest Island"],
    ["Retour et dîner à Fremantle", "Poisson frais sur le port au retour du ferry.", "soir", "food", -32.0560, 115.7470, "Fremantle, Perth"]]'::jsonb);

  -- Uluru (2 jours, reuse de l''itinéraire léger).
  c := seed_city('AUS', 'Uluru', -25.3444, 131.0369, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Tour de la base d''Uluru", "10 km au pied du monolithe sacré, points d''eau et peintures rupestres.", "matin", "nature", -25.3444, 131.0369, "Uluru-Kata Tjuta"],
    ["Centre culturel anangu", "L''histoire du peuple propriétaire du rocher, le Tjukurpa.", "apres-midi", "visit", -25.3450, 131.0320, "Uluru-Kata Tjuta"],
    ["Coucher de soleil sur Uluru", "Le rocher qui vire du rouge au pourpre depuis l''aire d''observation.", "soir", "nature", -25.3400, 131.0200, "Uluru-Kata Tjuta"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Lever de soleil à Kata Tjuta", "Les 36 dômes rouges embrasés à l''aube.", "matin", "nature", -25.3000, 130.7350, "Uluru-Kata Tjuta"],
    ["Vallée des Vents", "La marche entre les parois des Olgas.", "apres-midi", "nature", -25.3030, 130.7540, "Kata Tjuta"],
    ["Ciel étoilé du désert", "La Voie lactée comme nulle part ailleurs, dîner sous les étoiles.", "soir", "nature", -25.2400, 130.9890, "Yulara"]]'::jsonb);

  -- Melbourne (5 jours, reuse de l''itinéraire léger 14j).
  c := seed_city('AUS', 'Melbourne', -37.8136, 144.9631, 5, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Federation Square et les laneways", "Le cœur de la ville et ses ruelles cachées, cafés et arcades.", "matin", "visit", -37.8180, 144.9691, "Melbourne"],
    ["Hosier Lane", "Le street art qui change chaque semaine.", "apres-midi", "visit", -37.8166, 144.9690, "Melbourne"],
    ["Rooftop bars du CBD", "La skyline depuis les toits, institution locale.", "soir", "night", -37.8140, 144.9650, "Melbourne"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Queen Victoria Market", "La grande halle de 1878, fromages et beignets chauds.", "matin", "food", -37.8076, 144.9568, "Melbourne"],
    ["Jardins botaniques royaux", "38 hectares au bord de la Yarra, l''un des plus beaux jardins du monde.", "apres-midi", "nature", -37.8304, 144.9796, "South Yarra, Melbourne"],
    ["St Kilda et les petits pingouins", "Les manchots pygmées de la jetée à la nuit tombée.", "soir", "nature", -37.8679, 144.9740, "St Kilda, Melbourne"]]'::jsonb);
  e := seed_daytrip('AUS', 'Great Ocean Road', -38.6620, 143.1050, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Memorial Arch et Bells Beach", "L''entrée de la route mythique et la plage des surfeurs.", "matin", "nature", -38.3680, 144.2810, "Torquay, Victoria"],
    ["Les Douze Apôtres", "Les aiguilles de calcaire dressées dans l''océan Austral.", "apres-midi", "nature", -38.6620, 143.1050, "Port Campbell, Victoria"],
    ["Loch Ard Gorge au couchant", "La gorge du naufrage, dernière lumière sur les falaises.", "soir", "nature", -38.6560, 143.0710, "Port Campbell, Victoria"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["National Gallery of Victoria", "Le plus vieux et plus visité des musées d''art du pays.", "matin", "visit", -37.8226, 144.9689, "Southbank, Melbourne"],
    ["Fitzroy et Brunswick Street", "Friperies, galeries et cafés du quartier bohème.", "apres-midi", "shopping", -37.7986, 144.9784, "Fitzroy, Melbourne"],
    ["Dîner à Chinatown", "Dumplings dans le plus vieux Chinatown de l''hémisphère Sud.", "soir", "food", -37.8110, 144.9660, "Melbourne"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Cabines de Brighton Beach", "Les 82 cabines victoriennes multicolores face à la baie.", "matin", "visit", -37.9180, 144.9866, "Brighton, Melbourne"],
    ["Southbank et Melbourne Skydeck", "La promenade de la Yarra et la vue du 88e étage.", "apres-midi", "visit", -37.8213, 144.9645, "Southbank, Melbourne"],
    ["Dernier verre sur la Yarra", "Les quais illuminés avant de reprendre la route vers Sydney.", "soir", "night", -37.8200, 144.9600, "Southbank, Melbourne"]]'::jsonb);

  -- Sydney (4 jours, reuse de l''itinéraire dense 10j).
  c := seed_city('AUS', 'Sydney', -33.8688, 151.2093, 4, g, 4, 10);
  PERFORM seed_day(c, 1, '[
    ["The Rocks", "Ruelles pavées et marchés du premier quartier colonial.", "matin", "visit", -33.8593, 151.2089, "The Rocks, Sydney"],
    ["Pylône du Harbour Bridge", "200 marches dans le pilier sud-est, la baie à 87 m, juste à côté.", "matin", "visit", -33.8523, 151.2108, "Sydney"],
    ["Opéra de Sydney", "Visite guidée sous les voiles, salles et coulisses, en longeant la baie vers l''est.", "apres-midi", "visit", -33.8568, 151.2153, "Circular Quay, Sydney"],
    ["Jardin botanique royal", "Les pelouses et Mrs Macquarie''s Chair, juste après l''opéra.", "apres-midi", "nature", -33.8642, 151.2166, "Sydney"],
    ["Dîner à Circular Quay", "Fruits de mer face aux ferries et à l''opéra illuminé.", "soir", "food", -33.8610, 151.2110, "Circular Quay, Sydney"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Ferry vers Manly", "La traversée de la baie au soleil du matin.", "matin", "nature", -33.7970, 151.2880, "Manly, Sydney"],
    ["North Head", "Le promontoire face au large, retour en ferry.", "matin", "nature", -33.8210, 151.2940, "Manly, Sydney"],
    ["Barangaroo et Wynyard", "La promenade neuve du port jusqu''au cœur du CBD.", "apres-midi", "visit", -33.8620, 151.2010, "Barangaroo, Sydney"],
    ["Darling Harbour", "Aquarium, musée maritime ou simple flânerie sur les quais.", "apres-midi", "visit", -33.8748, 151.2010, "Darling Harbour, Sydney"],
    ["Soirée à Darling Harbour", "Restaurants et feux d''artifice du samedi sur l''eau.", "soir", "night", -33.8740, 151.2000, "Darling Harbour, Sydney"]]'::jsonb);
  e := seed_daytrip('AUS', 'Blue Mountains', -33.7320, 150.3120, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Echo Point et les Three Sisters", "Les trois pitons de grès dès l''ouverture, avant les cars.", "matin", "nature", -33.7320, 150.3120, "Katoomba, Blue Mountains"],
    ["Scenic World", "Funiculaire le plus pentu du monde, téléphérique et passerelle en forêt.", "matin", "nature", -33.7270, 150.2990, "Katoomba, Blue Mountains"],
    ["Village de Leura", "Salons de thé et boutiques 1900, sur la route vers l''est.", "apres-midi", "visit", -33.7150, 150.3310, "Leura, Blue Mountains"],
    ["Wentworth Falls", "La cascade en escalier au-dessus de la vallée Jamison, plus à l''est.", "apres-midi", "nature", -33.7270, 150.3730, "Wentworth Falls, Blue Mountains"],
    ["Retour et dîner à Sydney", "Soirée tranquille après la montagne.", "soir", "food", -33.8700, 151.2070, "Sydney"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Plage de Bondi", "Baignade ou leçon de surf sur la plage mythique.", "matin", "nature", -33.8908, 151.2743, "Bondi, Sydney"],
    ["Balade côtière Bondi–Coogee", "Falaises, piscines d''eau de mer et criques sur 6 km.", "apres-midi", "nature", -33.9200, 151.2570, "Sydney"],
    ["Paddington et Oxford Street", "Maisons victoriennes à dentelle de fer et boutiques de créateurs.", "apres-midi", "shopping", -33.8850, 151.2260, "Paddington, Sydney"],
    ["Dîner à Surry Hills", "Le quartier des meilleures tables de la ville.", "soir", "food", -33.8860, 151.2110, "Surry Hills, Sydney"]]'::jsonb);

  -- Brisbane (2 jours, reuse de l''itinéraire dense 10j).
  c := seed_city('AUS', 'Brisbane', -27.4698, 153.0251, 2, g, 5, 14);
  PERFORM seed_day(c, 1, '[
    ["South Bank et Streets Beach", "La plage artificielle et les jardins face à la skyline.", "matin", "nature", -27.4750, 153.0230, "South Bank, Brisbane"],
    ["City Hall et le CBD", "L''hôtel de ville et sa tour-horloge, quartier piéton de Queen Street.", "apres-midi", "visit", -27.4690, 153.0235, "Brisbane"],
    ["CityCat sur la Brisbane River", "Le ferry rapide qui serpente entre les ponts.", "apres-midi", "visit", -27.4720, 153.0180, "Brisbane"],
    ["Dîner sur Eagle Street Pier", "Tables au bord du fleuve, Story Bridge illuminé.", "soir", "food", -27.4670, 153.0300, "Brisbane"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Lone Pine Koala Sanctuary", "Le plus vieux sanctuaire de koalas du monde, kangourous en liberté.", "matin", "nature", -27.5330, 152.9680, "Fig Tree Pocket, Brisbane"],
    ["Belvédère du mont Coot-tha", "Toute la ville jusqu''à la baie de Moreton.", "apres-midi", "nature", -27.4770, 152.9540, "Mount Coot-tha, Brisbane"],
    ["Jardins botaniques du mont Coot-tha", "Dôme tropical et jardin japonais au pied du belvédère.", "apres-midi", "nature", -27.4750, 152.9760, "Toowong, Brisbane"],
    ["Fortitude Valley", "Bars et salles de concert du quartier nocturne.", "soir", "night", -27.4570, 153.0340, "Fortitude Valley, Brisbane"]]'::jsonb);

  -- Cairns (5 jours : reuse des 4 jours denses + une journée Undara).
  c := seed_city('AUS', 'Cairns', -16.9186, 145.7781, 5, g, 6, 16);
  PERFORM seed_day(c, 1, '[
    ["Rusty''s Market", "Fruits tropicaux et café du plateau, le marché du week-end.", "matin", "food", -16.9230, 145.7740, "Cairns"],
    ["Esplanade et lagon de Cairns", "Baignade dans la piscine publique face à la mer de Corail.", "matin", "nature", -16.9186, 145.7781, "Cairns"],
    ["Jardin botanique de Cairns", "Fougères géantes et sentier de la forêt tropicale.", "apres-midi", "nature", -16.9020, 145.7460, "Edge Hill, Cairns"],
    ["Marché de nuit", "Brochettes de crocodile et étals sous les ventilateurs.", "soir", "food", -16.9210, 145.7760, "Cairns"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Récif extérieur de la Grande Barrière", "Bateau matinal vers les meilleurs sites du récif.", "matin", "nature", -16.7500, 146.0000, "Grande Barrière, Cairns"],
    ["Plongée ou snorkeling", "Tortues, poissons-clowns et jardins de corail.", "apres-midi", "nature", -16.7400, 146.0100, "Grande Barrière, Cairns"],
    ["Michaelmas Cay", "L''îlot de sable blanc aux mille oiseaux marins.", "apres-midi", "nature", -16.6060, 145.9790, "Grande Barrière, Cairns"],
    ["Dîner sur la marina", "Poisson grillé au retour du large.", "soir", "food", -16.9220, 145.7800, "Marina, Cairns"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Kuranda Scenic Railway", "Le train de 1891 qui grimpe dans la forêt, cascades et tunnels.", "matin", "visit", -16.8190, 145.6380, "Kuranda, Queensland"],
    ["Village et marchés de Kuranda", "Artisanat aborigène dans le village de la forêt.", "apres-midi", "shopping", -16.8190, 145.6380, "Kuranda, Queensland"],
    ["Skyrail au-dessus de la canopée", "La redescente en téléphérique au ras des arbres.", "apres-midi", "nature", -16.8710, 145.6900, "Smithfield, Cairns"],
    ["Barbecue sur l''Esplanade", "La soirée australienne classique face à la mer.", "soir", "food", -16.9190, 145.7780, "Cairns"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Gorge de Mossman", "Baignade dans la rivière au cœur de la forêt de Daintree.", "matin", "nature", -16.4710, 145.3660, "Daintree, Queensland"],
    ["Croisière aux crocodiles sur la Daintree", "Les estuariens tapis dans la mangrove.", "apres-midi", "nature", -16.2500, 145.4110, "Daintree, Queensland"],
    ["Cape Tribulation", "Là où la plus vieille forêt du monde touche le récif.", "apres-midi", "nature", -16.0830, 145.4640, "Daintree, Queensland"],
    ["Retour et soirée à Cairns", "Dîner de retour sur le front de mer.", "soir", "food", -16.9190, 145.7780, "Cairns"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Tortues de mer d''Upolu Cay", "Dernière sortie en mer, snorkeling tranquille loin des groupes.", "matin", "nature", -16.7280, 145.9500, "Grande Barrière, Cairns"],
    ["Détente sur l''Esplanade", "La lagune publique pour finir le voyage en douceur.", "apres-midi", "nature", -16.9186, 145.7781, "Cairns"],
    ["Dernier dîner tropical", "Poisson du jour sur le front de mer pour clore les 21 jours.", "soir", "food", -16.9210, 145.7770, "Cairns"]]'::jsonb);
END $$;

-- ─── Villes solo : Perth (2j), Adélaïde (1j) ──────────────────────
DO $$
DECLARE c UUID;
BEGIN
  c := seed_city('AUS', 'Perth', -31.9505, 115.8605, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Kings Park", "L''un des plus grands parcs urbains du monde, ville et Swan River en contrebas.", "matin", "nature", -31.9590, 115.8330, "Perth"],
    ["Elizabeth Quay et le CBD", "Les quais neufs et les arcades de la ville la plus isolée du monde.", "apres-midi", "visit", -31.9560, 115.8570, "Perth"],
    ["Northbridge", "Bars, néons et petites salles du quartier nocturne.", "soir", "night", -31.9470, 115.8560, "Northbridge, Perth"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Fremantle", "Marchés victoriens et ancienne prison Unesco du port historique.", "matin", "visit", -32.0560, 115.7470, "Fremantle, Perth"],
    ["Plage de Cottesloe", "Sable blanc et pins de Norfolk entre Perth et Fremantle.", "apres-midi", "nature", -31.9950, 115.7510, "Cottesloe, Perth"],
    ["Coucher de soleil sur l''océan Indien", "L''un des rares endroits d''Australie où le soleil plonge dans la mer.", "soir", "nature", -31.9940, 115.7500, "Cottesloe, Perth"]]'::jsonb);

  c := seed_city('AUS', 'Adélaïde', -34.9285, 138.6007, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Adelaide Central Market", "La plus grande halle couverte de l''hémisphère Sud, multiculturelle et gourmande.", "matin", "food", -34.9298, 138.5970, "Adélaïde"],
    ["North Terrace", "Galerie d''art, musée et jardin botanique sur le boulevard culturel.", "apres-midi", "visit", -34.9210, 138.6060, "Adélaïde"],
    ["Tram vers Glenelg", "Le tramway historique jusqu''à la jetée et au coucher de soleil sur la plage.", "soir", "nature", -34.9800, 138.5120, "Glenelg, Adélaïde"]]'::jsonb);
END $$;
