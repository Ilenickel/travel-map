-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux v2 — Pologne, Hongrie, Irlande, Croatie
-- (après helpers + les seed_trip_templates_<pays>.sql respectifs)
-- Un groupe DENSE par pays, variante chargée du classique v1 :
--   - POL 5 jours : Varsovie (2j) → Cracovie (3j, + excursion Auschwitz)
--   - HUN 4 jours : Budapest
--   - IRL 6 jours : Dublin (2j) → Galway (2j, + falaises de Moher) → Killarney (2j)
--   - HRV 7 jours : Dubrovnik (3j) → Split (2j) → Plitvice (1j) → Zagreb (1j)
-- Relance : par pays, supprimer tout l'éditorial du pays puis rejouer
-- v1 PUIS ce fichier (et la partie du pays dans solo_cities.sql le cas échéant).
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── POL : 5 jours Varsovie → Cracovie (+ Auschwitz) ─────────────
  g := seed_group('POL', 5);

  c := seed_city('POL', 'Varsovie', 52.2297, 21.0122, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville et place du Château", "Le centre historique entièrement reconstruit, Unesco.", "matin", "visit", 52.2477, 21.0137, "Varsovie"],
    ["Barbacane et voie Royale", "Remparts rouges puis descente vers Nowy Świat.", "matin", "visit", 52.2500, 21.0100, "Varsovie"],
    ["Musée de l''Insurrection de Varsovie", "1944, l''âme de la ville racontée.", "apres-midi", "visit", 52.2325, 20.9810, "Wola, Varsovie"],
    ["Pierogi dans la vieille ville", "La table polonaise sous les voûtes.", "soir", "food", 52.2490, 21.0120, "Varsovie"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée POLIN", "Mille ans d''histoire des Juifs de Pologne.", "matin", "visit", 52.2495, 20.9930, "Muranów, Varsovie"],
    ["Palais de la Culture et de la Science", "La tour stalinienne et sa terrasse panoramique.", "apres-midi", "visit", 52.2318, 21.0060, "Varsovie"],
    ["Parc Łazienki", "Le palais sur l''eau et les paons, Chopin en statue.", "apres-midi", "nature", 52.2151, 21.0355, "Varsovie"],
    ["Nowy Świat", "Bars et néons de l''artère qui ne dort pas.", "soir", "night", 52.2320, 21.0190, "Varsovie"]]'::jsonb);

  -- Cracovie (3 jours : 2 propres + 1 excursion Auschwitz en jour 2).
  c := seed_city('POL', 'Cracovie', 50.0647, 19.9450, 3, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Rynek et halle aux draps", "La plus grande place médiévale d''Europe.", "matin", "visit", 50.0617, 19.9373, "Cracovie"],
    ["Basilique Sainte-Marie", "Le retable de Wit Stwosz et le hejnał sonné à la trompette.", "matin", "visit", 50.0616, 19.9394, "Cracovie"],
    ["Château du Wawel", "La colline royale, cathédrale des couronnements et dragon.", "apres-midi", "visit", 50.0540, 19.9354, "Cracovie"],
    ["Rue Kanonicza", "La plus belle rue de la ville, en redescendant du Wawel.", "apres-midi", "visit", 50.0570, 19.9370, "Cracovie"],
    ["Caves du Rynek", "Bars voûtés sous la grande place.", "soir", "night", 50.0620, 19.9380, "Cracovie"]]'::jsonb);
  -- Excursion Auschwitz-Birkenau (jour 2) — journée de mémoire, sobre.
  e := seed_daytrip('POL', 'Oświęcim', 50.0343, 19.1779, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Mémorial d''Auschwitz I", "La visite guidée du camp, indispensable et bouleversante.", "matin", "visit", 50.0275, 19.2020, "Oświęcim"],
    ["Birkenau (Auschwitz II)", "La rampe, les baraquements et le mémorial international.", "apres-midi", "visit", 50.0343, 19.1779, "Oświęcim"],
    ["Retour et soirée calme à Kazimierz", "Dîner paisible dans le quartier juif de Cracovie.", "soir", "food", 50.0489, 19.9445, "Kazimierz, Cracovie"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Kazimierz", "Synagogues, cours et cafés du quartier juif.", "matin", "visit", 50.0489, 19.9445, "Kazimierz, Cracovie"],
    ["Usine de Schindler", "L''occupation de Cracovie dans l''usine du film, de l''autre côté de la Vistule.", "apres-midi", "visit", 50.0475, 19.9615, "Podgórze, Cracovie"],
    ["Zapiekanka au plac Nowy", "La street food locale puis les bars de Kazimierz.", "soir", "food", 50.0500, 19.9450, "Kazimierz, Cracovie"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── HUN : 4 jours Budapest dense ────────────────────────────────
  g := seed_group('HUN', 4);
  c := seed_city('HUN', 'Budapest', 47.4979, 19.0402, 4, g, 1, 0);
  -- J1 Buda : château → bastion des Pêcheurs (adjacents), dîner vue Danube.
  PERFORM seed_day(c, 1, '[
    ["Château de Buda", "Funiculaire puis palais et galerie nationale.", "matin", "visit", 47.4960, 19.0399, "Buda, Budapest"],
    ["Bastion des Pêcheurs et église Matthias", "Les tourelles blanches face au Parlement.", "apres-midi", "visit", 47.5022, 19.0344, "Buda, Budapest"],
    ["Ruelles du quartier du château", "Maisons baroques et cours médiévales.", "apres-midi", "visit", 47.5000, 19.0330, "Buda, Budapest"],
    ["Dîner avec vue sur le Danube", "Le Parlement illuminé depuis la rive de Buda.", "soir", "food", 47.5000, 19.0400, "Buda, Budapest"]]'::jsonb);
  -- J2 Pest : Parlement → basilique → Andrássy → héros, bains le soir.
  PERFORM seed_day(c, 2, '[
    ["Parlement hongrois", "Le géant néogothique au bord du fleuve (réserver).", "matin", "visit", 47.5076, 19.0458, "Pest, Budapest"],
    ["Chaussures au bord du Danube", "Le mémorial le plus poignant de la ville, sur le quai.", "matin", "visit", 47.5040, 19.0450, "Pest, Budapest"],
    ["Basilique Saint-Étienne", "La coupole panoramique et la Sainte Dextre.", "apres-midi", "visit", 47.5008, 19.0540, "Pest, Budapest"],
    ["Avenue Andrássy et place des Héros", "Les Champs-Élysées magyars jusqu''aux sept chefs.", "apres-midi", "visit", 47.5145, 19.0777, "Pest, Budapest"],
    ["Bains Széchenyi en nocturne", "Bassins fumants sous les étoiles, au bout de l''avenue.", "soir", "visit", 47.5186, 19.0810, "Budapest"]]'::jsonb);
  -- J3 : synagogue → marché central → Váci, ruin bars le soir.
  PERFORM seed_day(c, 3, '[
    ["Grande synagogue de la rue Dohány", "La plus grande d''Europe et son arbre de vie.", "matin", "visit", 47.4960, 19.0605, "Pest, Budapest"],
    ["Marché central", "Paprika, saucisses et lángos sous la halle 1897.", "apres-midi", "food", 47.4870, 19.0590, "Pest, Budapest"],
    ["Rue Váci et bords du Danube", "L''artère piétonne jusqu''au pont Elisabeth.", "apres-midi", "shopping", 47.4900, 19.0520, "Pest, Budapest"],
    ["Szimpla Kert et ruin bars", "Les bars en ruine du quartier juif, uniques au monde.", "soir", "night", 47.4970, 19.0630, "Pest, Budapest"]]'::jsonb);
  -- J4 : Gellért → citadelle (au-dessus), île Marguerite, croisière le soir.
  PERFORM seed_day(c, 4, '[
    ["Bains Gellért", "L''Art nouveau dans la vapeur, mosaïques et bassins.", "matin", "visit", 47.4837, 19.0520, "Buda, Budapest"],
    ["Mont Gellért et citadelle", "Montée à la statue de la Liberté, panorama total.", "apres-midi", "nature", 47.4870, 19.0430, "Buda, Budapest"],
    ["Île Marguerite", "Le jardin flottant du Danube, fontaine musicale.", "apres-midi", "nature", 47.5270, 19.0450, "Budapest"],
    ["Croisière nocturne sur le Danube", "Parlement, ponts et château illuminés depuis l''eau.", "soir", "visit", 47.4980, 19.0480, "Budapest"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── IRL : 6 jours Dublin → Galway (+ Moher) → Killarney ─────────
  g := seed_group('IRL', 6);

  c := seed_city('IRL', 'Dublin', 53.3498, -6.2603, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Trinity College et Book of Kells", "La Long Room et l''évangéliaire enluminé.", "matin", "visit", 53.3438, -6.2546, "Dublin"],
    ["Château de Dublin et Christ Church", "Le pouvoir anglo-normand et la crypte médiévale.", "apres-midi", "visit", 53.3429, -6.2674, "Dublin"],
    ["Grafton Street et St Stephen''s Green", "Buskers et square géorgien.", "apres-midi", "shopping", 53.3410, -6.2600, "Dublin"],
    ["Temple Bar", "Pintes et fiddle dans le quartier des pubs.", "soir", "night", 53.3454, -6.2646, "Dublin"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Guinness Storehouse", "Sept étages de stout et pinte au Gravity Bar.", "matin", "visit", 53.3419, -6.2867, "Dublin"],
    ["Kilmainham Gaol", "La prison des insurgés de 1916, plus à l''ouest.", "apres-midi", "visit", 53.3419, -6.3097, "Dublin"],
    ["Phoenix Park", "Daims en liberté dans le plus grand parc urbain d''Europe.", "apres-midi", "nature", 53.3559, -6.3298, "Dublin"],
    ["Musique live dans un pub", "Session traditionnelle pour finir.", "soir", "night", 53.3450, -6.2640, "Dublin"]]'::jsonb);

  -- Galway (2 jours : 1 propre + 1 excursion falaises de Moher en jour 2).
  c := seed_city('IRL', 'Galway', 53.2707, -9.0568, 2, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Quartier latin et arche espagnole", "Ruelles colorées et vestiges des remparts.", "matin", "visit", 53.2707, -9.0568, "Galway"],
    ["Promenade de Salthill", "Le front de mer de la baie de Galway, embruns garantis.", "apres-midi", "nature", 53.2610, -9.0800, "Salthill, Galway"],
    ["Pubs de Quay Street", "Huîtres, stout et sessions trad.", "soir", "night", 53.2710, -9.0540, "Galway"]]'::jsonb);
  e := seed_daytrip('IRL', 'Falaises de Moher', 52.9715, -9.4309, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Falaises de Moher", "214 m au-dessus de l''Atlantique, la tour O''Brien au sommet.", "matin", "nature", 52.9715, -9.4309, "Clare"],
    ["Le Burren", "Le plateau calcaire lunaire et le dolmen de Poulnabrone.", "apres-midi", "nature", 53.0480, -9.1400, "Clare"],
    ["Doolin", "Le village de la musique irlandaise avant le retour.", "soir", "night", 53.0140, -9.3780, "Doolin, Clare"]]'::jsonb);

  -- Killarney (2 jours).
  c := seed_city('IRL', 'Killarney', 52.0599, -9.5044, 2, g, 3, 4);
  PERFORM seed_day(c, 1, '[
    ["Muckross House et jardins", "Le manoir victorien au bord du lac.", "matin", "visit", 52.0190, -9.4950, "Killarney"],
    ["Cascade de Torc", "La chute dans la forêt moussue, sentier facile.", "apres-midi", "nature", 52.0060, -9.5070, "Killarney"],
    ["Ross Castle", "La tour du XVe sur le Lough Leane, en calèche traditionnelle.", "apres-midi", "visit", 52.0410, -9.5310, "Killarney"],
    ["Pub à Killarney", "Irish stew et musique au coin du feu.", "soir", "food", 52.0590, -9.5050, "Killarney"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Ring of Kerry", "La boucle côtière mythique, criques et villages.", "matin", "nature", 51.9450, -10.2300, "Kerry"],
    ["Ladies View et Moll''s Gap", "Les panoramas préférés des dames de la reine Victoria.", "apres-midi", "nature", 51.9720, -9.5860, "Kerry"],
    ["Dîner de retour à Killarney", "Dernière soirée irlandaise.", "soir", "food", 52.0595, -9.5040, "Killarney"]]'::jsonb);
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── HRV : 7 jours Dubrovnik → Split → Plitvice → Zagreb (sud → nord) ──
  g := seed_group('HRV', 7);

  c := seed_city('HRV', 'Dubrovnik', 42.6507, 18.0944, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Remparts de Dubrovnik", "2 km de murailles au-dessus des toits orange, dès l''ouverture.", "matin", "visit", 42.6410, 18.1080, "Dubrovnik"],
    ["Stradun et palais du Recteur", "L''artère de marbre poli et le pouvoir de Raguse.", "apres-midi", "visit", 42.6403, 18.1096, "Dubrovnik"],
    ["Forteresse Lovrijenac", "Le Gibraltar de Dubrovnik, vue sur la vieille ville.", "apres-midi", "visit", 42.6410, 18.1050, "Dubrovnik"],
    ["Dîner au vieux port", "Poisson grillé entre les deux jetées.", "soir", "food", 42.6410, 18.1110, "Dubrovnik"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Téléphérique du mont Srđ", "Toute la côte et les îles Élaphites d''en haut.", "matin", "nature", 42.6450, 18.1110, "Dubrovnik"],
    ["Île de Lokrum", "Jardin botanique, paons et criques à 15 min de bateau.", "apres-midi", "nature", 42.6260, 18.1190, "Dubrovnik"],
    ["Buža bar", "Un verre accroché à la falaise, face au couchant.", "soir", "night", 42.6395, 18.1090, "Dubrovnik"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Kayak autour des remparts", "La vieille ville vue de la mer, grotte de Betina.", "matin", "nature", 42.6400, 18.1040, "Dubrovnik"],
    ["Plage de Banje", "Baignade face aux murailles.", "apres-midi", "beach", 42.6400, 18.1150, "Dubrovnik"],
    ["Dernière soirée sur le Stradun", "Glaces et lumières de Raguse.", "soir", "visit", 42.6408, 18.1090, "Dubrovnik"]]'::jsonb);

  c := seed_city('HRV', 'Split', 43.5081, 16.4402, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Palais de Dioclétien", "La vieille ville EST le palais : péristyle et caves romaines.", "matin", "visit", 43.5081, 16.4402, "Split"],
    ["Cathédrale Saint-Domnius", "Le mausolée de l''empereur devenu clocher à gravir.", "matin", "visit", 43.5085, 16.4400, "Split"],
    ["Riva et colline de Marjan", "La promenade puis le belvédère au-dessus de la baie.", "apres-midi", "nature", 43.5100, 16.4260, "Split"],
    ["Dîner dans le quartier de Varoš", "Konoba de poissons dans les ruelles.", "soir", "food", 43.5080, 16.4340, "Split"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Marché aux poissons et Pjaca", "Le Split du matin, entre étals et cafés.", "matin", "food", 43.5085, 16.4380, "Split"],
    ["Galerie Meštrović", "Le Rodin croate dans sa villa face à la mer.", "apres-midi", "visit", 43.5030, 16.4140, "Split"],
    ["Plage de Bačvice", "Picigin dans l''eau à hauteur de genoux, sport local.", "apres-midi", "beach", 43.5030, 16.4480, "Split"],
    ["Riva au couchant", "Dernier verre face au port.", "soir", "night", 43.5080, 16.4400, "Split"]]'::jsonb);

  c := seed_city('HRV', 'Plitvice', 44.8654, 15.5820, 1, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Lacs supérieurs de Plitvice", "Cascades en escalier dans la forêt, Unesco.", "matin", "nature", 44.8800, 15.6210, "Plitvice"],
    ["Lacs inférieurs et grande cascade", "Passerelles au ras de l''eau turquoise jusqu''au Veliki Slap.", "apres-midi", "nature", 44.9040, 15.6110, "Plitvice"],
    ["Route vers Zagreb", "Dîner d''agneau à la peka en chemin.", "soir", "food", 44.9500, 15.6500, "Plitvice"]]'::jsonb);

  c := seed_city('HRV', 'Zagreb', 45.8150, 15.9819, 1, g, 4, 6);
  PERFORM seed_day(c, 1, '[
    ["Marché Dolac et cathédrale", "Les parasols rouges au pied des flèches — le marché ferme en début d''après-midi.", "matin", "food", 45.8144, 15.9770, "Zagreb"],
    ["Ville haute et église Saint-Marc", "Funiculaire puis le toit aux armoiries en tuiles vernissées.", "apres-midi", "visit", 45.8167, 15.9730, "Gornji Grad, Zagreb"],
    ["Musée des Cœurs brisés", "Le musée le plus singulier d''Europe, dans la même ville haute.", "apres-midi", "visit", 45.8155, 15.9735, "Zagreb"],
    ["Rue Tkalčićeva", "Terrasses en enfilade pour la dernière soirée croate.", "soir", "night", 45.8160, 15.9760, "Zagreb"]]'::jsonb);
END $$;
