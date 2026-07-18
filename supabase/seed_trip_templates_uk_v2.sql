-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Royaume-Uni v2 (après helpers + seed_trip_templates_uk.sql)
--   - 10 jours DENSE : Londres (5j, + excursion Oxford) → Manchester (2j)
--     → Édimbourg (3j, + excursion Glasgow — 50 min de train). Remontée
--     sud → nord sans retour arrière. Couvre 3 villes absentes du
--     catalogue : Oxford, Manchester, Glasgow.
-- Relance : supprimer TOUT l'éditorial GBR puis rejouer uk.sql PUIS uk_v2.sql
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'GBR';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'GBR';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('GBR', 10);

  -- Londres (5 jours : 4 propres + 1 excursion Oxford en jour 5).
  c := seed_city('GBR', 'Londres', 51.5074, -0.1278, 5, g, 1, 0);
  -- J1 Westminster puis rive sud : traversée de la Tamise et remontée du
  -- South Bank vers l''est jusqu''à Borough Market.
  PERFORM seed_day(c, 1, '[
    ["Abbaye de Westminster et Big Ben", "Le panthéon des rois d''Angleterre et l''horloge la plus célèbre du monde.", "matin", "visit", 51.4994, -0.1273, "Westminster, Londres"],
    ["London Eye", "La grande roue face au Parlement, de l''autre côté du pont.", "matin", "visit", 51.5033, -0.1196, "South Bank, Londres"],
    ["South Bank jusqu''à la Tate Modern", "Promenade le long de la Tamise, bouquinistes et street-art.", "apres-midi", "visit", 51.5076, -0.0994, "South Bank, Londres"],
    ["Shakespeare''s Globe", "Le théâtre élisabéthain reconstruit, voisin de la Tate.", "apres-midi", "visit", 51.5081, -0.0972, "Bankside, Londres"],
    ["Dîner autour de Borough Market", "Les étals ferment à 17 h mais pubs et restaurants des arches prennent le relais.", "soir", "food", 51.5055, -0.0910, "Southwark, Londres"]]'::jsonb);
  -- J2 la City vers l''est : St Paul → Tour de Londres → Tower Bridge,
  -- soirée à Shoreditch juste au nord.
  PERFORM seed_day(c, 2, '[
    ["Cathédrale Saint-Paul", "La coupole de Wren et sa galerie des Murmures.", "matin", "visit", 51.5138, -0.0984, "City, Londres"],
    ["Tour de Londres", "Joyaux de la Couronne, corbeaux et Beefeaters.", "apres-midi", "visit", 51.5081, -0.0759, "City, Londres"],
    ["Tower Bridge", "Passerelles de verre au-dessus de la Tamise, adjacent à la Tour.", "apres-midi", "visit", 51.5055, -0.0754, "Londres"],
    ["Shoreditch et Brick Lane", "Street-art, curry houses et bars de l''East End.", "soir", "night", 51.5245, -0.0786, "Shoreditch, Londres"]]'::jsonb);
  -- J3 Bloomsbury → Covent Garden → Trafalgar → Soho, descente puis ouest.
  PERFORM seed_day(c, 3, '[
    ["British Museum", "Pierre de Rosette et frises du Parthénon, entrée gratuite.", "matin", "visit", 51.5194, -0.1270, "Bloomsbury, Londres"],
    ["Covent Garden", "Halles animées, artistes de rue et boutiques.", "apres-midi", "shopping", 51.5117, -0.1240, "Covent Garden, Londres"],
    ["National Gallery et Trafalgar Square", "Turner, Van Gogh et les lions de Nelson.", "apres-midi", "visit", 51.5089, -0.1283, "Westminster, Londres"],
    ["Comédie musicale dans le West End", "Un show à Soho ou sur Shaftesbury Avenue.", "soir", "night", 51.5136, -0.1365, "Soho, Londres"]]'::jsonb);
  -- J4 royal et musées : Buckingham → Hyde Park → South Kensington →
  -- Notting Hill, progression continue vers l''ouest.
  PERFORM seed_day(c, 4, '[
    ["Relève de la garde à Buckingham", "Le cérémonial devant le palais (vérifier les jours).", "matin", "visit", 51.5014, -0.1419, "Westminster, Londres"],
    ["Hyde Park et Kensington Gardens", "Serpentine, mémorial Diana et écureuils.", "apres-midi", "nature", 51.5073, -0.1657, "Hyde Park, Londres"],
    ["Natural History Museum", "Squelettes de dinosaures dans la cathédrale de la nature.", "apres-midi", "visit", 51.4967, -0.1764, "South Kensington, Londres"],
    ["Pubs de Notting Hill", "Façades pastel et pinte dans un pub victorien.", "soir", "food", 51.5090, -0.1960, "Notting Hill, Londres"]]'::jsonb);
  -- Excursion Oxford (jour 5 — 1 h de train, pas de day_index 5 chez la ville mère).
  e := seed_daytrip('GBR', 'Oxford', 51.7520, -1.2577, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Christ Church College", "Le collège de Lewis Carroll et du réfectoire d''Harry Potter.", "matin", "visit", 51.7502, -1.2560, "Oxford"],
    ["Bodleian Library et Radcliffe Camera", "La rotonde emblématique de la plus vieille université anglophone.", "apres-midi", "visit", 51.7534, -1.2540, "Oxford"],
    ["Covered Market et punting", "Marché couvert historique puis barque sur la Cherwell.", "apres-midi", "visit", 51.7527, -1.2570, "Oxford"],
    ["Pub The Eagle and Child", "La table de Tolkien et C.S. Lewis avant le retour.", "soir", "food", 51.7570, -1.2603, "Oxford"]]'::jsonb);

  -- Manchester (2 jours) — nouvelle ville du catalogue.
  c := seed_city('GBR', 'Manchester', 53.4808, -2.2426, 2, g, 2, 5);
  -- J1 : Old Trafford le matin, retour au centre l''après-midi.
  PERFORM seed_day(c, 1, '[
    ["Old Trafford", "Le théâtre des rêves, stade et musée de Manchester United.", "matin", "visit", 53.4631, -2.2913, "Trafford, Manchester"],
    ["John Rylands Library", "Bibliothèque néogothique spectaculaire sur Deansgate.", "apres-midi", "visit", 53.4800, -2.2489, "Manchester"],
    ["Cathédrale et Medieval Quarter", "Le noyau ancien de la ville industrielle.", "apres-midi", "visit", 53.4852, -2.2444, "Manchester"],
    ["Northern Quarter", "Bars indés, vinyles et murs peints — le soir mancunien.", "soir", "night", 53.4840, -2.2360, "Northern Quarter, Manchester"]]'::jsonb);
  -- J2 Castlefield : musée des Sciences → canaux adjacents, concert le soir.
  PERFORM seed_day(c, 2, '[
    ["Science and Industry Museum", "Berceau de la révolution industrielle et de la première gare.", "matin", "visit", 53.4770, -2.2540, "Castlefield, Manchester"],
    ["Canaux de Castlefield", "Écluses, péniches et viaducs victoriens.", "apres-midi", "visit", 53.4750, -2.2530, "Castlefield, Manchester"],
    ["Chinatown et Gay Village", "Arche chinoise puis Canal Street animée.", "soir", "night", 53.4770, -2.2400, "Manchester"]]'::jsonb);

  -- Édimbourg (3 jours : 2 propres + 1 excursion Glasgow en jour 2).
  c := seed_city('GBR', 'Édimbourg', 55.9533, -3.1883, 3, g, 3, 7);
  -- J1 : descente du Royal Mile, du château (haut) à Holyrood (bas),
  -- remontée le soir vers le Grassmarket au pied du château.
  PERFORM seed_day(c, 1, '[
    ["Château d''Édimbourg", "Les joyaux d''Écosse et le canon d''une heure, en haut du Mile.", "matin", "visit", 55.9486, -3.1999, "Édimbourg"],
    ["Royal Mile et cathédrale St Giles", "Descente de l''artère historique, closes et cornemuses.", "apres-midi", "visit", 55.9495, -3.1910, "Old Town, Édimbourg"],
    ["Palais de Holyrood", "La résidence écossaise du souverain, en bas du Mile.", "apres-midi", "visit", 55.9527, -3.1720, "Édimbourg"],
    ["Pubs du Grassmarket", "Whisky et folk sous les façades du vieux marché.", "soir", "food", 55.9473, -3.1955, "Old Town, Édimbourg"]]'::jsonb);
  -- Excursion Glasgow (jour 2 — pas de day_index 2 chez la ville mère).
  e := seed_daytrip('GBR', 'Glasgow', 55.8642, -4.2518, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Kelvingrove Art Gallery", "Dalí et armures sous les orgues du West End.", "matin", "visit", 55.8685, -4.2906, "Glasgow"],
    ["Cathédrale et nécropole", "Gothique médiéval et colline aux monuments victoriens.", "apres-midi", "visit", 55.8630, -4.2340, "Glasgow"],
    ["George Square et Merchant City", "Le centre monumental de la ville.", "apres-midi", "visit", 55.8612, -4.2500, "Glasgow"],
    ["Concert dans un pub de Glasgow", "La capitale britannique de la musique live avant le retour.", "soir", "night", 55.8600, -4.2570, "Glasgow"]]'::jsonb);
  -- J3 : Arthur''s Seat au lever, puis New Town et Dean Village à l''ouest.
  PERFORM seed_day(c, 3, '[
    ["Arthur''s Seat", "Ascension du volcan endormi, toute la ville aux pieds.", "matin", "nature", 55.9441, -3.1618, "Holyrood Park, Édimbourg"],
    ["Calton Hill", "Monuments néoclassiques et le plus beau point de vue urbain.", "apres-midi", "nature", 55.9552, -3.1827, "Édimbourg"],
    ["Dean Village", "Hameau de conte au bord de la Water of Leith.", "apres-midi", "visit", 55.9520, -3.2190, "Édimbourg"],
    ["Dîner et whisky bar dans New Town", "Dernière soirée géorgienne.", "soir", "food", 55.9533, -3.1970, "New Town, Édimbourg"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du city-trip populaire : 5 jours Londres seule
-- (+ Oxford). Coexiste avec les versions v1 "chill". Mêmes journées
-- denses que le groupe 10j ci-dessus.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('GBR', 5);
  c := seed_city('GBR', 'Londres', 51.5074, -0.1278, 5, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Abbaye de Westminster et Big Ben", "Le panthéon des rois d''Angleterre et l''horloge la plus célèbre du monde.", "matin", "visit", 51.4994, -0.1273, "Westminster, Londres"],
    ["London Eye", "La grande roue face au Parlement, de l''autre côté du pont.", "matin", "visit", 51.5033, -0.1196, "South Bank, Londres"],
    ["South Bank jusqu''à la Tate Modern", "Promenade le long de la Tamise, bouquinistes et street-art.", "apres-midi", "visit", 51.5076, -0.0994, "South Bank, Londres"],
    ["Shakespeare''s Globe", "Le théâtre élisabéthain reconstruit, voisin de la Tate.", "apres-midi", "visit", 51.5081, -0.0972, "Bankside, Londres"],
    ["Dîner autour de Borough Market", "Les étals ferment à 17 h mais pubs et restaurants des arches prennent le relais.", "soir", "food", 51.5055, -0.0910, "Southwark, Londres"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Cathédrale Saint-Paul", "La coupole de Wren et sa galerie des Murmures.", "matin", "visit", 51.5138, -0.0984, "City, Londres"],
    ["Tour de Londres", "Joyaux de la Couronne, corbeaux et Beefeaters.", "apres-midi", "visit", 51.5081, -0.0759, "City, Londres"],
    ["Tower Bridge", "Passerelles de verre au-dessus de la Tamise, adjacent à la Tour.", "apres-midi", "visit", 51.5055, -0.0754, "Londres"],
    ["Shoreditch et Brick Lane", "Street-art, curry houses et bars de l''East End.", "soir", "night", 51.5245, -0.0786, "Shoreditch, Londres"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["British Museum", "Pierre de Rosette et frises du Parthénon, entrée gratuite.", "matin", "visit", 51.5194, -0.1270, "Bloomsbury, Londres"],
    ["Covent Garden", "Halles animées, artistes de rue et boutiques.", "apres-midi", "shopping", 51.5117, -0.1240, "Covent Garden, Londres"],
    ["National Gallery et Trafalgar Square", "Turner, Van Gogh et les lions de Nelson.", "apres-midi", "visit", 51.5089, -0.1283, "Westminster, Londres"],
    ["Comédie musicale dans le West End", "Un show à Soho ou sur Shaftesbury Avenue.", "soir", "night", 51.5136, -0.1365, "Soho, Londres"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Relève de la garde à Buckingham", "Le cérémonial devant le palais (vérifier les jours).", "matin", "visit", 51.5014, -0.1419, "Westminster, Londres"],
    ["Hyde Park et Kensington Gardens", "Serpentine, mémorial Diana et écureuils.", "apres-midi", "nature", 51.5073, -0.1657, "Hyde Park, Londres"],
    ["Natural History Museum", "Squelettes de dinosaures dans la cathédrale de la nature.", "apres-midi", "visit", 51.4967, -0.1764, "South Kensington, Londres"],
    ["Pubs de Notting Hill", "Façades pastel et pinte dans un pub victorien.", "soir", "food", 51.5090, -0.1960, "Notting Hill, Londres"]]'::jsonb);
  e := seed_daytrip('GBR', 'Oxford', 51.7520, -1.2577, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Christ Church College", "Le collège de Lewis Carroll et du réfectoire d''Harry Potter.", "matin", "visit", 51.7502, -1.2560, "Oxford"],
    ["Bodleian Library et Radcliffe Camera", "La rotonde emblématique de la plus vieille université anglophone.", "apres-midi", "visit", 51.7534, -1.2540, "Oxford"],
    ["Covered Market et punting", "Marché couvert historique puis barque sur la Cherwell.", "apres-midi", "visit", 51.7527, -1.2570, "Oxford"],
    ["Pub The Eagle and Child", "La table de Tolkien et C.S. Lewis avant le retour.", "soir", "food", 51.7570, -1.2603, "Oxford"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du grand classique : 8 jours Londres (+ Oxford)
-- → Édimbourg (+ Glasgow). Mêmes journées denses que le groupe 10j,
-- sans l'étape Manchester.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('GBR', 8);

  c := seed_city('GBR', 'Londres', 51.5074, -0.1278, 5, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Abbaye de Westminster et Big Ben", "Le panthéon des rois d''Angleterre et l''horloge la plus célèbre du monde.", "matin", "visit", 51.4994, -0.1273, "Westminster, Londres"],
    ["London Eye", "La grande roue face au Parlement, de l''autre côté du pont.", "matin", "visit", 51.5033, -0.1196, "South Bank, Londres"],
    ["South Bank jusqu''à la Tate Modern", "Promenade le long de la Tamise, bouquinistes et street-art.", "apres-midi", "visit", 51.5076, -0.0994, "South Bank, Londres"],
    ["Shakespeare''s Globe", "Le théâtre élisabéthain reconstruit, voisin de la Tate.", "apres-midi", "visit", 51.5081, -0.0972, "Bankside, Londres"],
    ["Dîner autour de Borough Market", "Les étals ferment à 17 h mais pubs et restaurants des arches prennent le relais.", "soir", "food", 51.5055, -0.0910, "Southwark, Londres"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Cathédrale Saint-Paul", "La coupole de Wren et sa galerie des Murmures.", "matin", "visit", 51.5138, -0.0984, "City, Londres"],
    ["Tour de Londres", "Joyaux de la Couronne, corbeaux et Beefeaters.", "apres-midi", "visit", 51.5081, -0.0759, "City, Londres"],
    ["Tower Bridge", "Passerelles de verre au-dessus de la Tamise, adjacent à la Tour.", "apres-midi", "visit", 51.5055, -0.0754, "Londres"],
    ["Shoreditch et Brick Lane", "Street-art, curry houses et bars de l''East End.", "soir", "night", 51.5245, -0.0786, "Shoreditch, Londres"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["British Museum", "Pierre de Rosette et frises du Parthénon, entrée gratuite.", "matin", "visit", 51.5194, -0.1270, "Bloomsbury, Londres"],
    ["Covent Garden", "Halles animées, artistes de rue et boutiques.", "apres-midi", "shopping", 51.5117, -0.1240, "Covent Garden, Londres"],
    ["National Gallery et Trafalgar Square", "Turner, Van Gogh et les lions de Nelson.", "apres-midi", "visit", 51.5089, -0.1283, "Westminster, Londres"],
    ["Comédie musicale dans le West End", "Un show à Soho ou sur Shaftesbury Avenue.", "soir", "night", 51.5136, -0.1365, "Soho, Londres"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Relève de la garde à Buckingham", "Le cérémonial devant le palais (vérifier les jours).", "matin", "visit", 51.5014, -0.1419, "Westminster, Londres"],
    ["Hyde Park et Kensington Gardens", "Serpentine, mémorial Diana et écureuils.", "apres-midi", "nature", 51.5073, -0.1657, "Hyde Park, Londres"],
    ["Natural History Museum", "Squelettes de dinosaures dans la cathédrale de la nature.", "apres-midi", "visit", 51.4967, -0.1764, "South Kensington, Londres"],
    ["Pubs de Notting Hill", "Façades pastel et pinte dans un pub victorien.", "soir", "food", 51.5090, -0.1960, "Notting Hill, Londres"]]'::jsonb);
  e := seed_daytrip('GBR', 'Oxford', 51.7520, -1.2577, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Christ Church College", "Le collège de Lewis Carroll et du réfectoire d''Harry Potter.", "matin", "visit", 51.7502, -1.2560, "Oxford"],
    ["Bodleian Library et Radcliffe Camera", "La rotonde emblématique de la plus vieille université anglophone.", "apres-midi", "visit", 51.7534, -1.2540, "Oxford"],
    ["Covered Market et punting", "Marché couvert historique puis barque sur la Cherwell.", "apres-midi", "visit", 51.7527, -1.2570, "Oxford"],
    ["Pub The Eagle and Child", "La table de Tolkien et C.S. Lewis avant le retour.", "soir", "food", 51.7570, -1.2603, "Oxford"]]'::jsonb);

  c := seed_city('GBR', 'Édimbourg', 55.9533, -3.1883, 3, g, 2, 5);
  PERFORM seed_day(c, 1, '[
    ["Château d''Édimbourg", "Les joyaux d''Écosse et le canon d''une heure, en haut du Mile.", "matin", "visit", 55.9486, -3.1999, "Édimbourg"],
    ["Royal Mile et cathédrale St Giles", "Descente de l''artère historique, closes et cornemuses.", "apres-midi", "visit", 55.9495, -3.1910, "Old Town, Édimbourg"],
    ["Palais de Holyrood", "La résidence écossaise du souverain, en bas du Mile.", "apres-midi", "visit", 55.9527, -3.1720, "Édimbourg"],
    ["Pubs du Grassmarket", "Whisky et folk sous les façades du vieux marché.", "soir", "food", 55.9473, -3.1955, "Old Town, Édimbourg"]]'::jsonb);
  e := seed_daytrip('GBR', 'Glasgow', 55.8642, -4.2518, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Kelvingrove Art Gallery", "Dalí et armures sous les orgues du West End.", "matin", "visit", 55.8685, -4.2906, "Glasgow"],
    ["Cathédrale et nécropole", "Gothique médiéval et colline aux monuments victoriens.", "apres-midi", "visit", 55.8630, -4.2340, "Glasgow"],
    ["George Square et Merchant City", "Le centre monumental de la ville.", "apres-midi", "visit", 55.8612, -4.2500, "Glasgow"],
    ["Concert dans un pub de Glasgow", "La capitale britannique de la musique live avant le retour.", "soir", "night", 55.8600, -4.2570, "Glasgow"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Arthur''s Seat", "Ascension du volcan endormi, toute la ville aux pieds.", "matin", "nature", 55.9441, -3.1618, "Holyrood Park, Édimbourg"],
    ["Calton Hill", "Monuments néoclassiques et le plus beau point de vue urbain.", "apres-midi", "nature", 55.9552, -3.1827, "Édimbourg"],
    ["Dean Village", "Hameau de conte au bord de la Water of Leith.", "apres-midi", "visit", 55.9520, -3.2190, "Édimbourg"],
    ["Dîner et whisky bar dans New Town", "Dernière soirée géorgienne.", "soir", "food", 55.9533, -3.1970, "New Town, Édimbourg"]]'::jsonb);
END $$;
