-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux v2 — Pays-Bas, Suisse, Autriche, Tchéquie
-- (après helpers + les seed_trip_templates_<pays>.sql respectifs)
-- Un groupe DENSE par pays, variante chargée du classique v1 :
--   - NLD 4 jours : Amsterdam (+ excursion Zaanse Schans)
--   - CHE 6 jours : Genève → Interlaken → Lucerne → Zurich
--   - AUT 7 jours : Vienne (4j) → Salzbourg (3j, + excursion Hallstatt)
--   - CZE 4 jours : Prague (+ excursion Český Krumlov)
-- Relance : par pays, supprimer tout l'éditorial du pays puis rejouer
-- v1 PUIS ce fichier (et la partie du pays dans solo_cities.sql le cas échéant).
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── NLD : 4 jours Amsterdam dense (+ Zaanse Schans) ─────────────
  g := seed_group('NLD', 4);
  c := seed_city('NLD', 'Amsterdam', 52.3676, 4.9041, 4, g, 1, 0);
  -- J1 Museumplein : Rijks → Van Gogh (adjacents) → Vondelpark, croisière le soir.
  PERFORM seed_day(c, 1, '[
    ["Rijksmuseum", "Rembrandt et Vermeer, la Ronde de nuit en majesté.", "matin", "visit", 52.3600, 4.8852, "Museumplein, Amsterdam"],
    ["Musée Van Gogh", "La plus grande collection du maître, juste à côté.", "matin", "visit", 52.3584, 4.8811, "Museumplein, Amsterdam"],
    ["Vondelpark", "Le grand parc des Amstellodamois, à vélo ou à pied.", "apres-midi", "nature", 52.3580, 4.8686, "Amsterdam"],
    ["Les 9 Straatjes", "Boutiques indépendantes entre les canaux du Grachtengordel.", "apres-midi", "shopping", 52.3690, 4.8840, "Amsterdam"],
    ["Croisière sur les canaux au crépuscule", "Les ponts illuminés depuis l''eau, Unesco.", "soir", "visit", 52.3730, 4.8920, "Amsterdam"]]'::jsonb);
  -- J2 Jordaan : Anne Frank → Westerkerk (adjacente) → Noordermarkt,
  -- quartier rouge le soir.
  PERFORM seed_day(c, 2, '[
    ["Maison d''Anne Frank", "L''Annexe derrière la bibliothèque pivotante (réserver tôt).", "matin", "visit", 52.3752, 4.8840, "Jordaan, Amsterdam"],
    ["Westerkerk et Jordaan", "Le clocher de Rembrandt puis les ruelles-jardins du quartier.", "matin", "visit", 52.3746, 4.8830, "Jordaan, Amsterdam"],
    ["Noordermarkt et cafés bruns", "Marché fermier et bistrots patinés.", "apres-midi", "food", 52.3790, 4.8860, "Jordaan, Amsterdam"],
    ["Oude Kerk et De Wallen", "La plus vieille église au cœur du quartier rouge.", "soir", "visit", 52.3740, 4.8980, "De Wallen, Amsterdam"]]'::jsonb);
  -- Excursion Zaanse Schans (jour 3).
  e := seed_daytrip('NLD', 'Zaanse Schans', 52.4740, 4.8160, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Moulins de Zaanse Schans", "Les moulins à vent verts en activité au bord de la Zaan.", "matin", "visit", 52.4740, 4.8160, "Zaandam"],
    ["Fromagerie et sabotier", "Gouda au lait cru et fabrication de sabots en direct.", "apres-midi", "food", 52.4735, 4.8155, "Zaanse Schans"],
    ["Retour et soirée à Amsterdam", "Rijsttafel indonésienne, l''autre cuisine nationale.", "soir", "food", 52.3660, 4.8950, "Amsterdam"]]'::jsonb);
  -- J4 : De Pijp → est de la ville, Leidseplein le soir.
  PERFORM seed_day(c, 4, '[
    ["Marché Albert Cuyp", "Le grand marché de rue, stroopwafels tièdes.", "matin", "food", 52.3560, 4.8950, "De Pijp, Amsterdam"],
    ["Musée maritime ou NEMO", "L''âge d''or naval ou le toit-terrasse des sciences.", "apres-midi", "visit", 52.3714, 4.9146, "Amsterdam"],
    ["Bibliothèque OBA", "La vue gratuite sur le port depuis le 7e étage, à côté.", "apres-midi", "visit", 52.3760, 4.9080, "Oosterdok, Amsterdam"],
    ["Leidseplein", "Théâtres, cafés et dernière soirée animée.", "soir", "night", 52.3640, 4.8830, "Amsterdam"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── CHE : 6 jours Genève → Interlaken → Lucerne → Zurich ────────
  -- Journées montagne volontairement moins chargées (trajets et météo).
  g := seed_group('CHE', 6);

  c := seed_city('CHE', 'Genève', 46.2044, 6.1432, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Jet d''eau et rade de Genève", "Les 140 m d''eau face au Mont-Blanc par temps clair.", "matin", "visit", 46.2074, 6.1557, "Genève"],
    ["Vieille ville et cathédrale Saint-Pierre", "Montée à la tour, la Réforme aux pieds.", "apres-midi", "visit", 46.2010, 6.1481, "Genève"],
    ["Bains des Pâquis", "Fondue au bord de l''eau, institution genevoise.", "soir", "food", 46.2110, 6.1530, "Genève"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Palais des Nations", "Le siège européen de l''ONU et l''allée des drapeaux.", "matin", "visit", 46.2266, 6.1407, "Genève"],
    ["Musée de la Croix-Rouge", "L''aventure humanitaire née à Genève, en face.", "matin", "visit", 46.2290, 6.1390, "Genève"],
    ["Carouge", "Le quartier sarde aux airs d''Italie, artisans et terrasses.", "apres-midi", "visit", 46.1840, 6.1390, "Carouge, Genève"],
    ["Quais au couchant", "Dernier tour de rade avant le train.", "soir", "nature", 46.2080, 6.1520, "Genève"]]'::jsonb);

  c := seed_city('CHE', 'Interlaken', 46.6863, 7.8632, 2, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Harder Kulm", "Funiculaire au balcon d''Interlaken, les deux lacs et la Jungfrau.", "matin", "nature", 46.6900, 7.8710, "Interlaken"],
    ["Croisière sur le lac de Thoune", "Châteaux et villages au fil de l''eau turquoise.", "apres-midi", "nature", 46.6840, 7.8500, "Interlaken"],
    ["Höheweg", "La promenade face à la Jungfrau, chocolatiers et horlogers.", "soir", "visit", 46.6860, 7.8600, "Interlaken"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Jungfraujoch, le Toit de l''Europe", "Train à crémaillère jusqu''à 3 454 m, glacier d''Aletsch.", "matin", "nature", 46.5475, 7.9805, "Jungfraujoch"],
    ["Palais des glaces et plateau panoramique", "Tunnels dans le glacier et neige éternelle.", "apres-midi", "visit", 46.5470, 7.9810, "Jungfraujoch"],
    ["Redescente par Grindelwald", "Le village au pied de la face nord de l''Eiger.", "soir", "visit", 46.6244, 8.0414, "Grindelwald"]]'::jsonb);

  c := seed_city('CHE', 'Lucerne', 47.0502, 8.3093, 1, g, 3, 4);
  PERFORM seed_day(c, 1, '[
    ["Pont de la Chapelle", "Le pont de bois fleuri du XIVe siècle et sa tour d''eau.", "matin", "visit", 47.0517, 8.3070, "Lucerne"],
    ["Vieille ville et remparts Musegg", "Façades peintes puis chemin de ronde sur les tours.", "apres-midi", "visit", 47.0530, 8.3040, "Lucerne"],
    ["Monument du Lion", "Le lion mourant taillé dans la falaise.", "apres-midi", "visit", 47.0585, 8.3110, "Lucerne"],
    ["Quais du lac des Quatre-Cantons", "Dîner face aux montagnes qui plongent dans le lac.", "soir", "food", 47.0500, 8.3120, "Lucerne"]]'::jsonb);

  c := seed_city('CHE', 'Zurich', 47.3769, 8.5417, 1, g, 4, 5);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville et Grossmünster", "Les deux tours emblèmes et les vitraux de Chagall au Fraumünster.", "matin", "visit", 47.3700, 8.5440, "Zurich"],
    ["Bahnhofstrasse et lac", "L''avenue du luxe jusqu''aux quais du lac de Zurich.", "apres-midi", "shopping", 47.3720, 8.5390, "Zurich"],
    ["Niederdorf", "Ruelles pavées, fondue et bars pour la dernière soirée.", "soir", "food", 47.3730, 8.5440, "Zurich"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── AUT : 7 jours Vienne → Salzbourg (+ Hallstatt) ──────────────
  g := seed_group('AUT', 7);

  c := seed_city('AUT', 'Vienne', 48.2082, 16.3738, 4, g, 1, 0);
  -- J1 centre impérial : Hofburg → Saint-Étienne → Graben, opéra le soir.
  PERFORM seed_day(c, 1, '[
    ["Hofburg", "Le palais des Habsbourg, appartements de Sissi et trésor impérial.", "matin", "visit", 48.2077, 16.3660, "Vienne"],
    ["École espagnole d''équitation", "Les lipizzans à l''entraînement matinal, dans la Hofburg.", "matin", "visit", 48.2075, 16.3670, "Vienne"],
    ["Cathédrale Saint-Étienne", "Le toit de tuiles vernissées et la tour sud.", "apres-midi", "visit", 48.2085, 16.3731, "Vienne"],
    ["Graben et Kohlmarkt", "Les artères élégantes, Sachertorte chez Demel.", "apres-midi", "food", 48.2090, 16.3700, "Vienne"],
    ["Opéra d''État de Vienne", "Un opéra ou les places debout à quelques euros.", "soir", "night", 48.2029, 16.3691, "Vienne"]]'::jsonb);
  -- J2 : Schönbrunn le matin, Naschmarkt en revenant, Prater le soir.
  PERFORM seed_day(c, 2, '[
    ["Château de Schönbrunn", "Le Versailles viennois, 40 salles d''apparat.", "matin", "visit", 48.1845, 16.3122, "Vienne"],
    ["Gloriette et jardins", "Montée à la colonnade, tout Schönbrunn en perspective.", "matin", "nature", 48.1830, 16.3110, "Vienne"],
    ["Naschmarkt", "Le grand marché viennois, mezze et strudel, sur le retour.", "apres-midi", "food", 48.1988, 16.3630, "Vienne"],
    ["Grande roue du Prater", "La Riesenrad de 1897, Vienne au crépuscule.", "soir", "visit", 48.2167, 16.3958, "Prater, Vienne"]]'::jsonb);
  -- J3 : Belvédère → Hundertwasserhaus → MuseumsQuartier, heuriger le soir.
  PERFORM seed_day(c, 3, '[
    ["Palais du Belvédère", "Le Baiser de Klimt dans le palais du prince Eugène.", "matin", "visit", 48.1916, 16.3810, "Vienne"],
    ["Hundertwasserhaus", "L''immeuble ondulant et végétal de l''anti-architecte.", "apres-midi", "visit", 48.2073, 16.3937, "Vienne"],
    ["MuseumsQuartier", "Schiele au Leopold Museum et cours animées.", "apres-midi", "visit", 48.2030, 16.3590, "Vienne"],
    ["Heuriger à Grinzing", "Vin nouveau et buffet dans les faubourgs viticoles.", "soir", "food", 48.2620, 16.3450, "Grinzing, Vienne"]]'::jsonb);
  -- J4 : Karlskirche → Albertina → café viennois, concert le soir.
  PERFORM seed_day(c, 4, '[
    ["Karlskirche", "La coupole baroque et ses colonnes trajanes.", "matin", "visit", 48.1981, 16.3719, "Vienne"],
    ["Albertina", "Dürer, Monet et Picasso au-dessus de l''opéra.", "apres-midi", "visit", 48.2045, 16.3680, "Vienne"],
    ["Café Central ou Sperl", "Mélange et apfelstrudel dans un salon 1900.", "apres-midi", "food", 48.2100, 16.3655, "Vienne"],
    ["Concert au Musikverein", "La salle dorée du concert du Nouvel An.", "soir", "night", 48.2007, 16.3728, "Vienne"]]'::jsonb);

  -- Salzbourg (3 jours : 2 propres + 1 excursion Hallstatt en jour 2).
  c := seed_city('AUT', 'Salzbourg', 47.8095, 13.0550, 3, g, 2, 4);
  -- J1 : forteresse (haut) → Getreidegasse (bas) → Mirabell (autre rive).
  PERFORM seed_day(c, 1, '[
    ["Forteresse de Hohensalzburg", "Funiculaire vers la plus grande forteresse d''Europe centrale.", "matin", "visit", 47.7947, 13.0470, "Salzbourg"],
    ["Getreidegasse et maison natale de Mozart", "Les enseignes en fer forgé et le n°9 jaune.", "apres-midi", "visit", 47.8000, 13.0430, "Salzbourg"],
    ["Jardins Mirabell", "Les parterres de la Mélodie du bonheur, de l''autre côté de la Salzach.", "apres-midi", "nature", 47.8055, 13.0417, "Salzbourg"],
    ["Augustiner Bräu", "Bière d''abbaye en cruche de grès sous les marronniers.", "soir", "food", 47.8040, 13.0350, "Salzbourg"]]'::jsonb);
  -- Excursion Hallstatt (jour 2).
  e := seed_daytrip('AUT', 'Hallstatt', 47.5622, 13.6493, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Village de Hallstatt", "Maisons pastel entre lac et falaise, la carte postale absolue.", "matin", "visit", 47.5622, 13.6493, "Hallstatt"],
    ["Mine de sel et Skywalk", "La plus vieille mine de sel du monde et sa passerelle.", "apres-midi", "visit", 47.5620, 13.6420, "Hallstatt"],
    ["Rive du lac avant le retour", "Cygnes et reflets des montagnes.", "soir", "nature", 47.5615, 13.6480, "Hallstatt"]]'::jsonb);
  -- J3 : Hellbrunn au sud, cathédrale au retour, concert le soir.
  PERFORM seed_day(c, 3, '[
    ["Château de Hellbrunn", "Les jeux d''eau piégés de l''archevêque farceur.", "matin", "visit", 47.7623, 13.0603, "Salzbourg"],
    ["Cathédrale et place de la Résidence", "Le baroque italien au cœur de la vieille ville, au retour.", "apres-midi", "visit", 47.7975, 13.0470, "Salzbourg"],
    ["Concert Mozart à la forteresse", "Une petite musique de nuit au-dessus des toits.", "soir", "night", 47.7950, 13.0475, "Salzbourg"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── CZE : 4 jours Prague dense (+ Český Krumlov) ────────────────
  g := seed_group('CZE', 4);
  c := seed_city('CZE', 'Prague', 50.0755, 14.4378, 4, g, 1, 0);
  -- J1 : château (haut) → Malá Strana → pont Charles, descente continue.
  PERFORM seed_day(c, 1, '[
    ["Château de Prague et cathédrale Saint-Guy", "Le plus grand château ancien du monde, vitraux de Mucha.", "matin", "visit", 50.0900, 14.4005, "Hradčany, Prague"],
    ["Ruelle d''Or", "Les maisonnettes des alchimistes dans l''enceinte.", "matin", "visit", 50.0920, 14.4040, "Prague"],
    ["Malá Strana et Saint-Nicolas", "Le baroque du Petit Côté en descendant du château.", "apres-midi", "visit", 50.0883, 14.4030, "Malá Strana, Prague"],
    ["Pont Charles", "Les trente statues au-dessus de la Vltava, au bout de la descente.", "apres-midi", "visit", 50.0865, 14.4114, "Prague"],
    ["Dîner à Malá Strana", "Goulasch et bière de saison sous les voûtes.", "soir", "food", 50.0880, 14.4040, "Malá Strana, Prague"]]'::jsonb);
  -- J2 vieille ville : horloge → Týn → Josefov, taverne le soir.
  PERFORM seed_day(c, 2, '[
    ["Place de la Vieille-Ville et horloge astronomique", "Le défilé des apôtres à chaque heure.", "matin", "visit", 50.0870, 14.4208, "Staré Město, Prague"],
    ["Église Notre-Dame du Týn", "Les deux flèches gothiques au-dessus des arcades.", "matin", "visit", 50.0877, 14.4225, "Prague"],
    ["Quartier juif de Josefov", "Synagogues et vieux cimetière aux 12 000 stèles.", "apres-midi", "visit", 50.0900, 14.4180, "Josefov, Prague"],
    ["Rudolfinum et bords de Vltava", "La salle Dvořák et les quais, cygnes face au château.", "apres-midi", "visit", 50.0895, 14.4155, "Prague"],
    ["Taverne U Fleků", "La brasserie de 1499 et sa bière brune maison.", "soir", "food", 50.0780, 14.4180, "Nové Město, Prague"]]'::jsonb);
  -- Excursion Český Krumlov (jour 3).
  e := seed_daytrip('CZE', 'Český Krumlov', 48.8127, 14.3175, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Château de Český Krumlov", "La tour peinte au-dessus des méandres de la Vltava.", "matin", "visit", 48.8127, 14.3150, "Český Krumlov"],
    ["Vieille ville Unesco", "Ruelles gothiques dans la boucle de la rivière.", "apres-midi", "visit", 48.8109, 14.3155, "Český Krumlov"],
    ["Retour et soirée à Prague", "Dernier verre dans un bar de Žižkov.", "soir", "night", 50.0830, 14.4500, "Žižkov, Prague"]]'::jsonb);
  -- J4 : Vyšehrad → maison dansante → place Venceslas.
  PERFORM seed_day(c, 4, '[
    ["Vyšehrad", "La citadelle légendaire et son cimetière des grands Tchèques.", "matin", "visit", 50.0645, 14.4180, "Prague"],
    ["Maison dansante", "Ginger et Fred au bord de la Vltava, en redescendant le fleuve.", "apres-midi", "visit", 50.0755, 14.4141, "Prague"],
    ["Place Venceslas et musée national", "L''avenue des révolutions sous le musée restauré.", "apres-midi", "visit", 50.0800, 14.4280, "Nové Město, Prague"],
    ["Concert de musique classique", "Smetana ou Dvořák dans une église baroque.", "soir", "night", 50.0860, 14.4200, "Prague"]]'::jsonb);
END $$;
