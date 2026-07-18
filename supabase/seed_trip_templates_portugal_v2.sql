-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Portugal v2 (après helpers + seed_trip_templates_portugal.sql)
--   - 7 jours DENSE : Lisbonne (4j, + excursion Sintra) → Porto (3j).
--     Le grand classique portugais au rythme chargé (2 activités le matin
--     / 2 l'après-midi / 1 le soir), journées ordonnées selon le trajet
--     réel. Coexiste avec les versions v1 "chill".
-- Relance : supprimer TOUT l'éditorial PRT puis rejouer portugal.sql PUIS portugal_v2.sql
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'PRT';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'PRT';
-- (les villes-seules PRT de seed_trip_templates_solo_cities.sql seraient
--  aussi supprimées par ce DELETE — les rejouer ensuite.)
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('PRT', 7);

  -- Lisbonne (4 jours : 3 propres + 1 excursion Sintra en jour 4).
  c := seed_city('PRT', 'Lisbonne', 38.7223, -9.1393, 4, g, 1, 0);
  -- J1 Belém d''ouest en est : tour → monument des Découvertes → Jerónimos
  -- et pastéis, LX Factory sur la route du retour.
  PERFORM seed_day(c, 1, '[
    ["Tour de Belém", "La sentinelle manuéline sur le Tage, départ des caravelles.", "matin", "visit", 38.6916, -9.2160, "Belém, Lisbonne"],
    ["Monument des Découvertes", "La proue de pierre des navigateurs, en remontant le fleuve.", "matin", "visit", 38.6936, -9.2057, "Belém, Lisbonne"],
    ["Monastère des Hiéronymites", "Le cloître manuélin Unesco, en face du monument.", "apres-midi", "visit", 38.6979, -9.2068, "Belém, Lisbonne"],
    ["Pastéis de Belém", "La recette secrète depuis 1837, encore tièdes.", "apres-midi", "food", 38.6975, -9.2030, "Belém, Lisbonne"],
    ["LX Factory", "Friche créative sous le pont du 25-Avril, sur la route du retour.", "soir", "night", 38.7030, -9.1780, "Alcântara, Lisbonne"]]'::jsonb);
  -- J2 Alfama : château (haut) → miradouro → cathédrale (bas), fado le soir
  -- — une descente continue de la colline.
  PERFORM seed_day(c, 2, '[
    ["Château São Jorge", "Remparts maures et paons, toute Lisbonne aux pieds.", "matin", "visit", 38.7139, -9.1335, "Alfama, Lisbonne"],
    ["Miradouro das Portas do Sol", "Le balcon sur les toits de l''Alfama, en descendant du château.", "matin", "visit", 38.7118, -9.1305, "Alfama, Lisbonne"],
    ["Ruelles de l''Alfama et cathédrale Sé", "Linge aux fenêtres et azulejos jusqu''à la cathédrale romane.", "apres-midi", "visit", 38.7098, -9.1367, "Alfama, Lisbonne"],
    ["Tram 28", "Le tramway jaune brinquebalant à travers les quartiers historiques.", "apres-midi", "visit", 38.7100, -9.1350, "Lisbonne"],
    ["Fado dans l''Alfama", "La saudade chantée dans une taverne aux chandelles.", "soir", "night", 38.7110, -9.1300, "Alfama, Lisbonne"]]'::jsonb);
  -- J3 Baixa → Chiado → Bairro Alto : remontée continue de la place du
  -- Commerce vers les hauteurs, soirée sur place.
  PERFORM seed_day(c, 3, '[
    ["Praça do Comércio", "La place royale ouverte sur le Tage, arc de la rua Augusta.", "matin", "visit", 38.7077, -9.1366, "Baixa, Lisbonne"],
    ["Ascenseur de Santa Justa", "L''élévateur néogothique entre Baixa et Chiado.", "matin", "visit", 38.7124, -9.1391, "Baixa, Lisbonne"],
    ["Chiado et couvent do Carmo", "Librairies centenaires et la nef à ciel ouvert du séisme de 1755.", "apres-midi", "visit", 38.7110, -9.1440, "Chiado, Lisbonne"],
    ["Miradouro de São Pedro de Alcântara", "Le jardin suspendu face au château, en haut de l''élévateur da Glória.", "apres-midi", "nature", 38.7151, -9.1441, "Bairro Alto, Lisbonne"],
    ["Bars du Bairro Alto", "Ginjinha et ruelles en fête jusqu''à tard.", "soir", "night", 38.7130, -9.1450, "Bairro Alto, Lisbonne"]]'::jsonb);
  -- Excursion Sintra (jour 4) : Pena en premier (le plus haut et le plus
  -- couru), Regaleira en redescendant, Cabo da Roca au couchant.
  e := seed_daytrip('PRT', 'Sintra', 38.7970, -9.3900, c, 3);
  PERFORM seed_day(e, 1, '[
    ["Palais da Pena", "Le château romantique multicolore dans la brume, dès l''ouverture.", "matin", "visit", 38.7876, -9.3904, "Sintra"],
    ["Quinta da Regaleira", "Le puits initiatique et les jardins ésotériques, en redescendant.", "apres-midi", "visit", 38.7963, -9.3960, "Sintra"],
    ["Centre de Sintra et travesseiros", "Le palais national aux deux cheminées et les feuilletés chauds.", "apres-midi", "food", 38.7977, -9.3900, "Sintra"],
    ["Cabo da Roca au couchant", "Le point le plus occidental d''Europe, falaises dans l''Atlantique.", "soir", "nature", 38.7803, -9.4989, "Cabo da Roca"]]'::jsonb);

  -- Porto (3 jours).
  c := seed_city('PRT', 'Porto', 41.1579, -8.6291, 3, g, 2, 4);
  -- J1 : Ribeira → traversée du pont vers les caves de Gaia (rive d''en
  -- face), retour dîner côté Ribeira.
  PERFORM seed_day(c, 1, '[
    ["Ribeira", "Façades colorées et linge au vent sur les quais du Douro, Unesco.", "matin", "visit", 41.1408, -8.6110, "Ribeira, Porto"],
    ["Pont Dom Luís I", "La traversée du tablier supérieur, le Douro 60 m plus bas.", "matin", "visit", 41.1400, -8.6090, "Porto"],
    ["Caves de porto à Vila Nova de Gaia", "Dégustation dans les chais centenaires de la rive gauche.", "apres-midi", "food", 41.1330, -8.6120, "Vila Nova de Gaia, Porto"],
    ["Téléphérique de Gaia et quais", "Les toits des chais et les rabelos chargés de tonneaux.", "apres-midi", "visit", 41.1340, -8.6100, "Vila Nova de Gaia, Porto"],
    ["Francesinha sur la Ribeira", "Le sandwich-monument arrosé de sauce à la bière.", "soir", "food", 41.1410, -8.6120, "Ribeira, Porto"]]'::jsonb);
  -- J2 le centre : Clérigos/Lello (adjacents) → São Bento → Sé (en
  -- descendant vers le fleuve), soirée rue des galeries.
  PERFORM seed_day(c, 2, '[
    ["Tour des Clérigos", "225 marches pour le panorama sur les toits orange.", "matin", "visit", 41.1457, -8.6140, "Porto"],
    ["Librairie Lello", "L''escalier rouge le plus célèbre du monde, juste à côté.", "matin", "visit", 41.1467, -8.6148, "Porto"],
    ["Gare de São Bento", "20 000 azulejos racontant l''histoire du Portugal dans le hall.", "apres-midi", "visit", 41.1456, -8.6106, "Porto"],
    ["Cathédrale Sé et Barredo", "La forteresse romane puis les ruelles qui dégringolent vers le Douro.", "apres-midi", "visit", 41.1429, -8.6111, "Porto"],
    ["Rua das Galerias de Paris", "La rue des bars, le Porto qui sort.", "soir", "night", 41.1470, -8.6150, "Porto"]]'::jsonb);
  -- J3 : tram jusqu''à Foz (océan), Serralves en remontant, couchant depuis Gaia.
  PERFORM seed_day(c, 3, '[
    ["Tram 1 jusqu''à Foz do Douro", "Le tramway historique qui longe le fleuve jusqu''à l''océan.", "matin", "visit", 41.1520, -8.6770, "Foz do Douro, Porto"],
    ["Pergola et front de mer de Foz", "Promenade Atlantique et phare de Felgueiras.", "matin", "nature", 41.1540, -8.6820, "Foz do Douro, Porto"],
    ["Fondation Serralves", "Art contemporain, villa Art déco et grand parc.", "apres-midi", "visit", 41.1596, -8.6600, "Porto"],
    ["Jardim do Morro au couchant", "Tout Porto doré de l''autre côté du pont, dernier soir.", "soir", "nature", 41.1338, -8.6090, "Vila Nova de Gaia, Porto"]]'::jsonb);
END $$;
