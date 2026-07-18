-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Espagne v2 (après helpers + seed_trip_templates_spain.sql)
--   - 13 jours DENSE : Barcelone (4j) → Valence (2j) → Madrid (4j, + Tolède)
--     → Séville (3j). Plusieurs activités par créneau (2 matin / 2 après-midi
--     / 1 soir), journées ordonnées selon le trajet spatial réel.
--   - Bilbao seule (2j, + excursion Saint-Sébastien) et Malaga seule (2j) :
--     group_id NULL, format simple — suggestion par ville uniquement.
-- Relance : supprimer TOUT l'éditorial ESP puis rejouer spain.sql PUIS spain_v2.sql
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'ESP';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'ESP';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 13 jours dense : Barcelone → Valence → Madrid → Séville ─────
  g := seed_group('ESP', 13);

  -- Barcelone (4 jours) — un secteur par jour.
  c := seed_city('ESP', 'Barcelone', 41.3874, 2.1686, 4, g, 1, 0);
  -- J1 vieille ville : Rambla → quartier gothique → Born → mer (est).
  PERFORM seed_day(c, 1, '[
    ["La Rambla et marché de la Boqueria", "L''avenue mythique et ses étals de jambon et de fruits.", "matin", "food", 41.3818, 2.1719, "Ciutat Vella, Barcelone"],
    ["Cathédrale et quartier gothique", "Ruelles médiévales autour de la cathédrale Sainte-Croix.", "matin", "visit", 41.3839, 2.1762, "Barri Gòtic, Barcelone"],
    ["Palau de la Música Catalana", "Chef-d''œuvre moderniste aux vitraux exubérants.", "apres-midi", "visit", 41.3875, 2.1753, "Sant Pere, Barcelone"],
    ["El Born et musée Picasso", "Quartier bohème et jeunesse barcelonaise du peintre.", "apres-midi", "visit", 41.3852, 2.1813, "El Born, Barcelone"],
    ["Barceloneta en bord de mer", "Tapas et paella face à la Méditerranée.", "soir", "food", 41.3809, 2.1896, "Barceloneta, Barcelone"]]'::jsonb);
  -- J2 Gaudí : Sagrada → Sant Pau (700 m au nord) → Park Güell (ouest),
  -- redescente sur le Passeig de Gràcia illuminé.
  PERFORM seed_day(c, 2, '[
    ["Sagrada Família", "La basilique inachevée de Gaudí, forêt de colonnes et vitraux.", "matin", "visit", 41.4036, 2.1744, "Eixample, Barcelone"],
    ["Hôpital Sant Pau", "Cité moderniste classée à l''Unesco, à 10 minutes à pied.", "matin", "visit", 41.4118, 2.1742, "El Guinardó, Barcelone"],
    ["Park Güell", "Mosaïques, salamandre et vue sur toute la ville.", "apres-midi", "nature", 41.4145, 2.1527, "Gràcia, Barcelone"],
    ["Casa Batlló et La Pedrera", "Les deux façades les plus folles de Gaudí sur le Passeig de Gràcia.", "soir", "visit", 41.3917, 2.1650, "Eixample, Barcelone"]]'::jsonb);
  -- J3 Montjuïc : du château (sommet) à la fontaine magique (pied), descente continue.
  PERFORM seed_day(c, 3, '[
    ["Téléphérique et château de Montjuïc", "Montée au-dessus du port, forteresse et panorama.", "matin", "visit", 41.3641, 2.1657, "Montjuïc, Barcelone"],
    ["Fondation Joan Miró", "La plus grande collection du maître catalan, à flanc de colline.", "apres-midi", "visit", 41.3685, 2.1600, "Montjuïc, Barcelone"],
    ["Poble Espanyol", "Village-musée recréant l''architecture des régions d''Espagne.", "apres-midi", "visit", 41.3689, 2.1481, "Montjuïc, Barcelone"],
    ["Fontaine magique de Montjuïc", "Jeux d''eau et de lumière en musique au pied de la colline.", "soir", "visit", 41.3712, 2.1517, "Montjuïc, Barcelone"]]'::jsonb);
  -- J4 hauteurs et Raval : Camp Nou → Tibidabo, soirée dans le Raval.
  PERFORM seed_day(c, 4, '[
    ["Camp Nou et musée du Barça", "Le stade légendaire et sa salle des trophées.", "matin", "visit", 41.3809, 2.1228, "Les Corts, Barcelone"],
    ["Tibidabo", "Parc d''attractions centenaire et basilique au sommet de la ville.", "apres-midi", "visit", 41.4225, 2.1187, "Tibidabo, Barcelone"],
    ["Bunkers del Carmel", "Le plus beau coucher de soleil sur Barcelone.", "soir", "nature", 41.4194, 2.1615, "El Carmel, Barcelone"]]'::jsonb);

  -- Valence (2 jours) — nouvelle ville du catalogue.
  c := seed_city('ESP', 'Valence', 39.4699, -0.3763, 2, g, 2, 4);
  -- J1 : remontée du jardin du Turia, de la Cité des Arts (sud) à la vieille ville (nord).
  PERFORM seed_day(c, 1, '[
    ["Cité des Arts et des Sciences", "Architecture futuriste de Calatrava et océanographique géant.", "matin", "visit", 39.4548, -0.3505, "Valence"],
    ["Jardin du Turia", "Ancien lit du fleuve devenu un parc de 9 km, remontée à vélo.", "apres-midi", "nature", 39.4620, -0.3600, "Valence"],
    ["Lonja de la Seda", "Bourse de la soie gothique classée à l''Unesco.", "apres-midi", "visit", 39.4744, -0.3785, "Ciutat Vella, Valence"],
    ["Barrio del Carmen", "Ruelles médiévales, street-art et tapas.", "soir", "food", 39.4780, -0.3790, "El Carmen, Valence"]]'::jsonb);
  -- J2 : centre le matin, plage l''après-midi, Ruzafa le soir.
  PERFORM seed_day(c, 2, '[
    ["Cathédrale et Miguelete", "Le Saint Calice et la vue depuis le clocher.", "matin", "visit", 39.4756, -0.3754, "Valence"],
    ["Marché central", "L''un des plus grands marchés couverts d''Europe, sous les coupoles.", "matin", "food", 39.4737, -0.3790, "Valence"],
    ["Plage de la Malvarrosa", "Grande plage urbaine bordée de restaurants.", "apres-midi", "beach", 39.4810, -0.3250, "Valence"],
    ["Paella au bord de mer", "La vraie paella valencienne là où elle est née.", "apres-midi", "food", 39.4770, -0.3300, "La Malvarrosa, Valence"],
    ["Quartier de Ruzafa", "Le quartier le plus animé de la nuit valencienne.", "soir", "night", 39.4623, -0.3740, "Ruzafa, Valence"]]'::jsonb);

  -- Madrid (4 jours : 3 propres + 1 excursion Tolède en jour 3).
  c := seed_city('ESP', 'Madrid', 40.4168, -3.7038, 4, g, 3, 6);
  -- J1 Madrid des Habsbourg : palais (ouest) → Plaza Mayor → Sol (est),
  -- dîner au marché San Miguel adjacent à la Plaza Mayor.
  PERFORM seed_day(c, 1, '[
    ["Palais royal", "La plus grande résidence royale d''Europe occidentale.", "matin", "visit", 40.4179, -3.7143, "Madrid"],
    ["Cathédrale de l''Almudena", "La cathédrale de Madrid, face au palais.", "matin", "visit", 40.4156, -3.7145, "Madrid"],
    ["Plaza Mayor", "La grande place à arcades du Madrid des Autrichiens.", "apres-midi", "visit", 40.4155, -3.7074, "Madrid"],
    ["Puerta del Sol", "Le kilomètre zéro de l''Espagne et l''ours au madroño.", "apres-midi", "visit", 40.4169, -3.7035, "Madrid"],
    ["Marché San Miguel", "Tapas gastronomiques sous la verrière 1900.", "soir", "food", 40.4153, -3.7089, "Madrid"]]'::jsonb);
  -- J2 Paseo del Arte : Prado → Retiro (adjacent à l''est) → Reina Sofía
  -- (en redescendant le paseo), soirée dans le quartier des Lettres entre les deux.
  PERFORM seed_day(c, 2, '[
    ["Musée du Prado", "Velázquez, Goya et Le Greco dans l''un des plus grands musées du monde.", "matin", "visit", 40.4138, -3.6921, "Madrid"],
    ["Parc du Retiro", "Palais de Cristal et barques sur le grand bassin.", "apres-midi", "nature", 40.4153, -3.6845, "Madrid"],
    ["Musée Reina Sofía", "Guernica de Picasso et l''art moderne espagnol.", "apres-midi", "visit", 40.4080, -3.6946, "Madrid"],
    ["Quartier des Lettres", "Sur les pas de Cervantès, tavernes centenaires.", "soir", "food", 40.4146, -3.6980, "Huertas, Madrid"]]'::jsonb);
  -- Excursion Tolède (jour 3 du séjour — pas de day_index 3 chez la ville mère).
  e := seed_daytrip('ESP', 'Tolède', 39.8628, -4.0273, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Cathédrale de Tolède", "Chef-d''œuvre gothique de la ville aux trois cultures.", "matin", "visit", 39.8570, -4.0236, "Tolède"],
    ["Alcázar de Tolède", "Forteresse dominant le Tage et musée de l''Armée.", "apres-midi", "visit", 39.8581, -4.0206, "Tolède"],
    ["Synagogue Santa María la Blanca", "Arcs en fer à cheval du XIIe siècle, unique au monde.", "apres-midi", "visit", 39.8565, -4.0290, "Tolède"],
    ["Mirador del Valle", "La vue carte postale sur Tolède au soleil couchant.", "soir", "nature", 39.8500, -4.0170, "Tolède"]]'::jsonb);
  -- J4 : temple de Debod (ouest) → Gran Vía → Malasaña/Chueca, tapas à La Latina.
  PERFORM seed_day(c, 4, '[
    ["Temple de Debod", "Vrai temple égyptien offert à l''Espagne, dans un parc.", "matin", "visit", 40.4240, -3.7178, "Madrid"],
    ["Gran Vía", "Le Broadway madrilène, théâtres et façades 1900.", "apres-midi", "shopping", 40.4203, -3.7058, "Madrid"],
    ["Malasaña et Chueca", "Quartiers de la movida, friperies et cafés.", "apres-midi", "visit", 40.4230, -3.7010, "Madrid"],
    ["Tapas à La Latina", "La rue Cava Baja et ses tavernes, l''âme de la soirée madrilène.", "soir", "food", 40.4116, -3.7093, "La Latina, Madrid"]]'::jsonb);

  -- Séville (3 jours).
  c := seed_city('ESP', 'Séville', 37.3891, -5.9845, 3, g, 4, 10);
  -- J1 : le cœur monumental, tout se touche autour de la cathédrale.
  PERFORM seed_day(c, 1, '[
    ["Cathédrale et Giralda", "La plus grande cathédrale gothique du monde et son minaret-clocher.", "matin", "visit", 37.3861, -5.9926, "Séville"],
    ["Real Alcázar", "Palais mudéjar et jardins des rois d''Espagne, voisin de la cathédrale.", "apres-midi", "visit", 37.3831, -5.9902, "Séville"],
    ["Archives des Indes", "La mémoire de l''Amérique espagnole, entre les deux monuments.", "apres-midi", "visit", 37.3852, -5.9920, "Séville"],
    ["Barrio Santa Cruz", "L''ancien quartier juif, patios fleuris et tapas.", "soir", "food", 37.3849, -5.9880, "Séville"]]'::jsonb);
  -- J2 : place d''Espagne (sud) → remontée du Guadalquivir → Triana (rive ouest).
  PERFORM seed_day(c, 2, '[
    ["Place d''Espagne", "L''hémicycle monumental et ses bancs de céramique.", "matin", "visit", 37.3772, -5.9869, "Séville"],
    ["Parc de María Luisa", "Jardins ombragés autour de la place, fontaines et paons.", "matin", "nature", 37.3760, -5.9890, "Séville"],
    ["Torre del Oro et bords du Guadalquivir", "La tour dorée des galions, promenade le long du fleuve.", "apres-midi", "visit", 37.3822, -5.9963, "Séville"],
    ["Triana", "Le quartier des céramistes et du flamenco, de l''autre côté du pont.", "apres-midi", "visit", 37.3826, -6.0033, "Triana, Séville"],
    ["Spectacle de flamenco à Triana", "Le duende dans son berceau.", "soir", "night", 37.3840, -6.0020, "Triana, Séville"]]'::jsonb);
  -- J3 : nord du centre, du Metropol à l''Alameda.
  PERFORM seed_day(c, 3, '[
    ["Metropol Parasol", "Les champignons de bois géants et leur passerelle panoramique.", "matin", "visit", 37.3931, -5.9919, "Séville"],
    ["Casa de Pilatos", "Palais andalou mêlant mudéjar et Renaissance.", "apres-midi", "visit", 37.3900, -5.9873, "Séville"],
    ["Alameda de Hércules", "La grande place arborée des soirées sévillanes.", "soir", "food", 37.3990, -5.9900, "Séville"]]'::jsonb);

  -- ─── Bilbao seule (2 jours, + excursion Saint-Sébastien) ─────────
  c := seed_city('ESP', 'Bilbao', 43.2630, -2.9350, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Musée Guggenheim", "Titane ondulant de Gehry, Puppy et araignée géante.", "matin", "visit", 43.2687, -2.9340, "Bilbao"],
    ["Casco Viejo et ses sept rues", "Vieille ville, cathédrale de Santiago et bars à pintxos.", "apres-midi", "visit", 43.2590, -2.9236, "Bilbao"],
    ["Pintxos sur la Plaza Nueva", "La tournée des comptoirs basques sous les arcades.", "soir", "food", 43.2596, -2.9234, "Bilbao"]]'::jsonb);
  e := seed_daytrip('ESP', 'Saint-Sébastien', 43.3183, -1.9812, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Plage de la Concha", "L''une des plus belles baies urbaines d''Europe.", "matin", "beach", 43.3170, -1.9860, "Saint-Sébastien"],
    ["Mont Urgull et vieille ville", "Montée au château puis ruelles de la Parte Vieja.", "apres-midi", "visit", 43.3240, -1.9850, "Saint-Sébastien"],
    ["Pintxos dans la Parte Vieja", "La capitale mondiale du pintxo, bar après bar.", "soir", "food", 43.3230, -1.9840, "Saint-Sébastien"]]'::jsonb);

  -- ─── Malaga seule (2 jours) ──────────────────────────────────────
  c := seed_city('ESP', 'Malaga', 36.7213, -4.4214, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Alcazaba et théâtre romain", "Forteresse maure au-dessus des gradins antiques.", "matin", "visit", 36.7213, -4.4159, "Malaga"],
    ["Château de Gibralfaro", "Montée aux remparts, panorama sur le port et les arènes.", "apres-midi", "visit", 36.7236, -4.4106, "Malaga"],
    ["Espetos sur la plage de la Malagueta", "Sardines grillées à la broche face à la mer.", "soir", "food", 36.7190, -4.4090, "Malaga"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée Picasso", "L''enfant du pays dans le palais de Buenavista.", "matin", "visit", 36.7218, -4.4183, "Malaga"],
    ["Centre historique et rue Larios", "La grande artère élégante et le marché d''Atarazanas.", "apres-midi", "shopping", 36.7194, -4.4213, "Malaga"],
    ["Muelle Uno au couchant", "Le port réaménagé, promenade et terrasses.", "soir", "visit", 36.7170, -4.4140, "Malaga"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variantes DENSES des city-trips populaires : 4 jours Barcelone seule et
-- 4 jours Madrid seule (+ Tolède). Coexistent avec les versions v1 "chill".
-- Mêmes journées denses que le groupe 13j ci-dessus.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 4 jours dense : Barcelone seule ─────────────────────────────
  g := seed_group('ESP', 4);
  c := seed_city('ESP', 'Barcelone', 41.3874, 2.1686, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["La Rambla et marché de la Boqueria", "L''avenue mythique et ses étals de jambon et de fruits.", "matin", "food", 41.3818, 2.1719, "Ciutat Vella, Barcelone"],
    ["Cathédrale et quartier gothique", "Ruelles médiévales autour de la cathédrale Sainte-Croix.", "matin", "visit", 41.3839, 2.1762, "Barri Gòtic, Barcelone"],
    ["Palau de la Música Catalana", "Chef-d''œuvre moderniste aux vitraux exubérants.", "apres-midi", "visit", 41.3875, 2.1753, "Sant Pere, Barcelone"],
    ["El Born et musée Picasso", "Quartier bohème et jeunesse barcelonaise du peintre.", "apres-midi", "visit", 41.3852, 2.1813, "El Born, Barcelone"],
    ["Barceloneta en bord de mer", "Tapas et paella face à la Méditerranée.", "soir", "food", 41.3809, 2.1896, "Barceloneta, Barcelone"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Sagrada Família", "La basilique inachevée de Gaudí, forêt de colonnes et vitraux.", "matin", "visit", 41.4036, 2.1744, "Eixample, Barcelone"],
    ["Hôpital Sant Pau", "Cité moderniste classée à l''Unesco, à 10 minutes à pied.", "matin", "visit", 41.4118, 2.1742, "El Guinardó, Barcelone"],
    ["Park Güell", "Mosaïques, salamandre et vue sur toute la ville.", "apres-midi", "nature", 41.4145, 2.1527, "Gràcia, Barcelone"],
    ["Casa Batlló et La Pedrera", "Les deux façades les plus folles de Gaudí sur le Passeig de Gràcia.", "soir", "visit", 41.3917, 2.1650, "Eixample, Barcelone"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Téléphérique et château de Montjuïc", "Montée au-dessus du port, forteresse et panorama.", "matin", "visit", 41.3641, 2.1657, "Montjuïc, Barcelone"],
    ["Fondation Joan Miró", "La plus grande collection du maître catalan, à flanc de colline.", "apres-midi", "visit", 41.3685, 2.1600, "Montjuïc, Barcelone"],
    ["Poble Espanyol", "Village-musée recréant l''architecture des régions d''Espagne.", "apres-midi", "visit", 41.3689, 2.1481, "Montjuïc, Barcelone"],
    ["Fontaine magique de Montjuïc", "Jeux d''eau et de lumière en musique au pied de la colline.", "soir", "visit", 41.3712, 2.1517, "Montjuïc, Barcelone"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Camp Nou et musée du Barça", "Le stade légendaire et sa salle des trophées.", "matin", "visit", 41.3809, 2.1228, "Les Corts, Barcelone"],
    ["Tibidabo", "Parc d''attractions centenaire et basilique au sommet de la ville.", "apres-midi", "visit", 41.4225, 2.1187, "Tibidabo, Barcelone"],
    ["Bunkers del Carmel", "Le plus beau coucher de soleil sur Barcelone.", "soir", "nature", 41.4194, 2.1615, "El Carmel, Barcelone"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 4 jours dense : Madrid seule (+ Tolède) ─────────────────────
  g := seed_group('ESP', 4);
  c := seed_city('ESP', 'Madrid', 40.4168, -3.7038, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Palais royal", "La plus grande résidence royale d''Europe occidentale.", "matin", "visit", 40.4179, -3.7143, "Madrid"],
    ["Cathédrale de l''Almudena", "La cathédrale de Madrid, face au palais.", "matin", "visit", 40.4156, -3.7145, "Madrid"],
    ["Plaza Mayor", "La grande place à arcades du Madrid des Autrichiens.", "apres-midi", "visit", 40.4155, -3.7074, "Madrid"],
    ["Puerta del Sol", "Le kilomètre zéro de l''Espagne et l''ours au madroño.", "apres-midi", "visit", 40.4169, -3.7035, "Madrid"],
    ["Marché San Miguel", "Tapas gastronomiques sous la verrière 1900.", "soir", "food", 40.4153, -3.7089, "Madrid"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée du Prado", "Velázquez, Goya et Le Greco dans l''un des plus grands musées du monde.", "matin", "visit", 40.4138, -3.6921, "Madrid"],
    ["Parc du Retiro", "Palais de Cristal et barques sur le grand bassin.", "apres-midi", "nature", 40.4153, -3.6845, "Madrid"],
    ["Musée Reina Sofía", "Guernica de Picasso et l''art moderne espagnol.", "apres-midi", "visit", 40.4080, -3.6946, "Madrid"],
    ["Quartier des Lettres", "Sur les pas de Cervantès, tavernes centenaires.", "soir", "food", 40.4146, -3.6980, "Huertas, Madrid"]]'::jsonb);
  e := seed_daytrip('ESP', 'Tolède', 39.8628, -4.0273, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Cathédrale de Tolède", "Chef-d''œuvre gothique de la ville aux trois cultures.", "matin", "visit", 39.8570, -4.0236, "Tolède"],
    ["Alcázar de Tolède", "Forteresse dominant le Tage et musée de l''Armée.", "apres-midi", "visit", 39.8581, -4.0206, "Tolède"],
    ["Synagogue Santa María la Blanca", "Arcs en fer à cheval du XIIe siècle, unique au monde.", "apres-midi", "visit", 39.8565, -4.0290, "Tolède"],
    ["Mirador del Valle", "La vue carte postale sur Tolède au soleil couchant.", "soir", "nature", 39.8500, -4.0170, "Tolède"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Temple de Debod", "Vrai temple égyptien offert à l''Espagne, dans un parc.", "matin", "visit", 40.4240, -3.7178, "Madrid"],
    ["Gran Vía", "Le Broadway madrilène, théâtres et façades 1900.", "apres-midi", "shopping", 40.4203, -3.7058, "Madrid"],
    ["Malasaña et Chueca", "Quartiers de la movida, friperies et cafés.", "apres-midi", "visit", 40.4230, -3.7010, "Madrid"],
    ["Tapas à La Latina", "La rue Cava Baja et ses tavernes, l''âme de la soirée madrilène.", "soir", "food", 40.4116, -3.7093, "La Latina, Madrid"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du grand classique : 8 jours Barcelone → Madrid
-- (+ Tolède). Mêmes journées denses que les groupes ci-dessus.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('ESP', 8);

  c := seed_city('ESP', 'Barcelone', 41.3874, 2.1686, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["La Rambla et marché de la Boqueria", "L''avenue mythique et ses étals de jambon et de fruits.", "matin", "food", 41.3818, 2.1719, "Ciutat Vella, Barcelone"],
    ["Cathédrale et quartier gothique", "Ruelles médiévales autour de la cathédrale Sainte-Croix.", "matin", "visit", 41.3839, 2.1762, "Barri Gòtic, Barcelone"],
    ["Palau de la Música Catalana", "Chef-d''œuvre moderniste aux vitraux exubérants.", "apres-midi", "visit", 41.3875, 2.1753, "Sant Pere, Barcelone"],
    ["El Born et musée Picasso", "Quartier bohème et jeunesse barcelonaise du peintre.", "apres-midi", "visit", 41.3852, 2.1813, "El Born, Barcelone"],
    ["Barceloneta en bord de mer", "Tapas et paella face à la Méditerranée.", "soir", "food", 41.3809, 2.1896, "Barceloneta, Barcelone"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Sagrada Família", "La basilique inachevée de Gaudí, forêt de colonnes et vitraux.", "matin", "visit", 41.4036, 2.1744, "Eixample, Barcelone"],
    ["Hôpital Sant Pau", "Cité moderniste classée à l''Unesco, à 10 minutes à pied.", "matin", "visit", 41.4118, 2.1742, "El Guinardó, Barcelone"],
    ["Park Güell", "Mosaïques, salamandre et vue sur toute la ville.", "apres-midi", "nature", 41.4145, 2.1527, "Gràcia, Barcelone"],
    ["Casa Batlló et La Pedrera", "Les deux façades les plus folles de Gaudí sur le Passeig de Gràcia.", "soir", "visit", 41.3917, 2.1650, "Eixample, Barcelone"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Téléphérique et château de Montjuïc", "Montée au-dessus du port, forteresse et panorama.", "matin", "visit", 41.3641, 2.1657, "Montjuïc, Barcelone"],
    ["Fondation Joan Miró", "La plus grande collection du maître catalan, à flanc de colline.", "apres-midi", "visit", 41.3685, 2.1600, "Montjuïc, Barcelone"],
    ["Poble Espanyol", "Village-musée recréant l''architecture des régions d''Espagne.", "apres-midi", "visit", 41.3689, 2.1481, "Montjuïc, Barcelone"],
    ["Fontaine magique de Montjuïc", "Jeux d''eau et de lumière en musique au pied de la colline.", "soir", "visit", 41.3712, 2.1517, "Montjuïc, Barcelone"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Camp Nou et musée du Barça", "Le stade légendaire et sa salle des trophées.", "matin", "visit", 41.3809, 2.1228, "Les Corts, Barcelone"],
    ["Tibidabo", "Parc d''attractions centenaire et basilique au sommet de la ville.", "apres-midi", "visit", 41.4225, 2.1187, "Tibidabo, Barcelone"],
    ["Bunkers del Carmel", "Le plus beau coucher de soleil sur Barcelone.", "soir", "nature", 41.4194, 2.1615, "El Carmel, Barcelone"]]'::jsonb);

  c := seed_city('ESP', 'Madrid', 40.4168, -3.7038, 4, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Palais royal", "La plus grande résidence royale d''Europe occidentale.", "matin", "visit", 40.4179, -3.7143, "Madrid"],
    ["Cathédrale de l''Almudena", "La cathédrale de Madrid, face au palais.", "matin", "visit", 40.4156, -3.7145, "Madrid"],
    ["Plaza Mayor", "La grande place à arcades du Madrid des Autrichiens.", "apres-midi", "visit", 40.4155, -3.7074, "Madrid"],
    ["Puerta del Sol", "Le kilomètre zéro de l''Espagne et l''ours au madroño.", "apres-midi", "visit", 40.4169, -3.7035, "Madrid"],
    ["Marché San Miguel", "Tapas gastronomiques sous la verrière 1900.", "soir", "food", 40.4153, -3.7089, "Madrid"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée du Prado", "Velázquez, Goya et Le Greco dans l''un des plus grands musées du monde.", "matin", "visit", 40.4138, -3.6921, "Madrid"],
    ["Parc du Retiro", "Palais de Cristal et barques sur le grand bassin.", "apres-midi", "nature", 40.4153, -3.6845, "Madrid"],
    ["Musée Reina Sofía", "Guernica de Picasso et l''art moderne espagnol.", "apres-midi", "visit", 40.4080, -3.6946, "Madrid"],
    ["Quartier des Lettres", "Sur les pas de Cervantès, tavernes centenaires.", "soir", "food", 40.4146, -3.6980, "Huertas, Madrid"]]'::jsonb);
  e := seed_daytrip('ESP', 'Tolède', 39.8628, -4.0273, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Cathédrale de Tolède", "Chef-d''œuvre gothique de la ville aux trois cultures.", "matin", "visit", 39.8570, -4.0236, "Tolède"],
    ["Alcázar de Tolède", "Forteresse dominant le Tage et musée de l''Armée.", "apres-midi", "visit", 39.8581, -4.0206, "Tolède"],
    ["Synagogue Santa María la Blanca", "Arcs en fer à cheval du XIIe siècle, unique au monde.", "apres-midi", "visit", 39.8565, -4.0290, "Tolède"],
    ["Mirador del Valle", "La vue carte postale sur Tolède au soleil couchant.", "soir", "nature", 39.8500, -4.0170, "Tolède"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Temple de Debod", "Vrai temple égyptien offert à l''Espagne, dans un parc.", "matin", "visit", 40.4240, -3.7178, "Madrid"],
    ["Gran Vía", "Le Broadway madrilène, théâtres et façades 1900.", "apres-midi", "shopping", 40.4203, -3.7058, "Madrid"],
    ["Malasaña et Chueca", "Quartiers de la movida, friperies et cafés.", "apres-midi", "visit", 40.4230, -3.7010, "Madrid"],
    ["Tapas à La Latina pour finir", "La rue Cava Baja et ses tavernes, dernière soirée madrilène.", "soir", "food", 40.4116, -3.7093, "La Latina, Madrid"]]'::jsonb);
END $$;
