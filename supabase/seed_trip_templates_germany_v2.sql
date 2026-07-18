-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Allemagne v2 (après helpers + seed_trip_templates_germany.sql)
--   - 7 jours DENSE : Berlin (4j) → Munich (3j, + excursion Neuschwanstein).
--     Plusieurs activités par créneau, journées ordonnées selon le trajet réel.
-- Relance : supprimer TOUT l'éditorial DEU puis rejouer germany.sql PUIS germany_v2.sql
-- (les villes-seules DEU de solo_cities.sql seraient aussi supprimées — les rejouer après).
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('DEU', 7);

  -- Berlin (4 jours).
  c := seed_city('DEU', 'Berlin', 52.5200, 13.4050, 4, g, 1, 0);
  -- J1 Mitte d''ouest en est : Brandebourg → Reichstag (adjacent) →
  -- mémorial → Unter den Linden jusqu''à l''île aux Musées.
  PERFORM seed_day(c, 1, '[
    ["Porte de Brandebourg", "Le symbole de la ville réunifiée.", "matin", "visit", 52.5163, 13.3777, "Mitte, Berlin"],
    ["Coupole du Reichstag", "Le dôme de verre au-dessus du Parlement (réserver), juste à côté.", "matin", "visit", 52.5186, 13.3762, "Mitte, Berlin"],
    ["Mémorial de l''Holocauste", "Le champ de stèles de Peter Eisenman.", "apres-midi", "visit", 52.5139, 13.3789, "Mitte, Berlin"],
    ["Unter den Linden et Gendarmenmarkt", "L''avenue royale jusqu''à la plus belle place de Berlin.", "apres-midi", "visit", 52.5138, 13.3927, "Mitte, Berlin"],
    ["Dîner à Hackescher Markt", "Cours intérieures et terrasses de Mitte.", "soir", "food", 52.5225, 13.4020, "Mitte, Berlin"]]'::jsonb);
  -- J2 : île aux Musées → Alexanderplatz (vers l''est), soirée à Prenzlauer Berg.
  PERFORM seed_day(c, 2, '[
    ["Neues Museum et île aux Musées", "Le buste de Néfertiti sur l''île Unesco (le Pergame est fermé pour rénovation).", "matin", "visit", 52.5200, 13.3978, "Mitte, Berlin"],
    ["Cathédrale de Berlin", "La coupole verte et sa vue sur l''île, adjacente.", "matin", "visit", 52.5190, 13.4010, "Mitte, Berlin"],
    ["Alexanderplatz et tour de la télévision", "Berlin-Est à 368 m d''altitude.", "apres-midi", "visit", 52.5219, 13.4132, "Mitte, Berlin"],
    ["Prenzlauer Berg", "Kastanienallee, cafés et façades restaurées.", "apres-midi", "visit", 52.5390, 13.4240, "Prenzlauer Berg, Berlin"],
    ["Biergarten Prater", "Le plus vieux biergarten de Berlin.", "soir", "food", 52.5400, 13.4100, "Prenzlauer Berg, Berlin"]]'::jsonb);
  -- J3 Berlin du Mur : East Side Gallery → Kreuzberg → Checkpoint Charlie.
  PERFORM seed_day(c, 3, '[
    ["East Side Gallery", "1,3 km de Mur peint le long de la Spree.", "matin", "visit", 52.5050, 13.4394, "Friedrichshain, Berlin"],
    ["Kreuzberg et Landwehrkanal", "Street-art, marchés turcs et bords de canal.", "apres-midi", "visit", 52.4990, 13.4030, "Kreuzberg, Berlin"],
    ["Checkpoint Charlie et Topographie de la Terreur", "Le poste-frontière et l''exposition sur le régime nazi.", "apres-midi", "visit", 52.5076, 13.3904, "Kreuzberg, Berlin"],
    ["Bars de Kreuzberg", "La nuit berlinoise, de l''Oranienstraße aux clubs.", "soir", "night", 52.5000, 13.4180, "Kreuzberg, Berlin"]]'::jsonb);
  -- J4 ouest : Charlottenburg → Ku''damm → Tiergarten, Potsdamer Platz le soir.
  PERFORM seed_day(c, 4, '[
    ["Château de Charlottenburg", "Le palais baroque des Hohenzollern et son parc.", "matin", "visit", 52.5208, 13.2957, "Charlottenburg, Berlin"],
    ["Ku''damm et église du Souvenir", "L''avenue de Berlin-Ouest et le clocher en ruine conservé.", "apres-midi", "shopping", 52.5040, 13.3280, "Charlottenburg, Berlin"],
    ["Tiergarten et colonne de la Victoire", "Le grand parc et la Siegessäule dorée.", "apres-midi", "nature", 52.5145, 13.3501, "Tiergarten, Berlin"],
    ["Potsdamer Platz", "Le Sony Center illuminé pour la dernière soirée.", "soir", "visit", 52.5096, 13.3760, "Mitte, Berlin"]]'::jsonb);

  -- Munich (3 jours : 2 propres + 1 excursion Neuschwanstein en jour 2).
  c := seed_city('DEU', 'Munich', 48.1351, 11.5820, 3, g, 2, 4);
  -- J1 centre : Marienplatz → Viktualienmarkt (adjacent) → Résidence →
  -- jardin anglais au nord, Hofbräuhaus le soir.
  PERFORM seed_day(c, 1, '[
    ["Marienplatz et Glockenspiel", "Le carillon de l''hôtel de ville à 11 h pile.", "matin", "visit", 48.1374, 11.5755, "Munich"],
    ["Viktualienmarkt", "Le marché gourmand bavarois, bretzels et weisswurst.", "matin", "food", 48.1352, 11.5763, "Munich"],
    ["Résidence de Munich", "Le palais des Wittelsbach et son Antiquarium.", "apres-midi", "visit", 48.1417, 11.5786, "Munich"],
    ["Jardin anglais et surfeurs de l''Eisbach", "La vague urbaine et le plus grand parc de la ville.", "apres-midi", "nature", 48.1435, 11.5876, "Munich"],
    ["Hofbräuhaus", "Chopes d''un litre et fanfare dans la brasserie de 1589.", "soir", "food", 48.1376, 11.5799, "Munich"]]'::jsonb);
  -- Excursion Neuschwanstein (jour 2).
  e := seed_daytrip('DEU', 'Neuschwanstein', 47.5576, 10.7498, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Château de Neuschwanstein", "Le château de conte de Louis II, modèle de Disney.", "matin", "visit", 47.5576, 10.7498, "Schwangau, Bavière"],
    ["Pont Marienbrücke", "LA vue sur le château au-dessus de la gorge.", "apres-midi", "visit", 47.5560, 10.7510, "Schwangau, Bavière"],
    ["Hohenschwangau et lac Alpsee", "Le château jaune de l''enfance de Louis II et son lac alpin.", "apres-midi", "visit", 47.5557, 10.7365, "Schwangau, Bavière"],
    ["Retour et soirée à Munich", "Dîner bavarois dans l''Altstadt.", "soir", "food", 48.1370, 11.5750, "Munich"]]'::jsonb);
  -- J3 : Nymphenburg à l''ouest, BMW et parc olympique au nord.
  PERFORM seed_day(c, 3, '[
    ["Château de Nymphenburg", "La résidence d''été et son canal, galerie des Beautés.", "matin", "visit", 48.1583, 11.5033, "Munich"],
    ["BMW Welt et musée", "Le double cône futuriste de la marque bavaroise.", "apres-midi", "visit", 48.1770, 11.5560, "Munich"],
    ["Parc olympique", "La tente de verre de 1972 et la colline panoramique, juste à côté.", "apres-midi", "nature", 48.1755, 11.5518, "Munich"],
    ["Biergarten au bord de l''Isar", "Dernière soirée sous les marronniers.", "soir", "food", 48.1300, 11.5900, "Munich"]]'::jsonb);
END $$;
