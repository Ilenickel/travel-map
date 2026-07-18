-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Japon v2 (après helpers + seed_trip_templates_japan.sql)
--   - 14 jours DENSE : Tokyo (5j, + excursion Kamakura) → Kyoto (4j, + Nara)
--     → Osaka (2j) → Hiroshima (3j, + Miyajima). Mêmes étapes que le 14j v1
--     mais avec plusieurs activités par créneau et des journées recomposées
--     selon le trajet réel dans chaque ville.
--   - Sapporo seule (2j) : group_id NULL, format simple — Hokkaidō est trop
--     excentrée pour s'insérer dans un circuit Honshū cohérent.
-- Relance : supprimer TOUT l'éditorial JPN puis rejouer japan.sql PUIS japan_v2.sql
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'JPN';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'JPN';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('JPN', 14);

  -- Tokyo (5 jours : 4 propres + 1 excursion Kamakura en jour 5).
  c := seed_city('JPN', 'Tokyo', 35.6762, 139.6503, 5, g, 1, 0);
  -- J1 est : Asakusa → Skytree (juste de l''autre côté de la rivière) →
  -- Ueno → Ameyoko (adjacent au sud) → Akihabara, descente continue.
  PERFORM seed_day(c, 1, '[
    ["Temple Sensō-ji et Nakamise-dōri", "Le plus vieux temple de Tokyo et sa rue d''échoppes.", "matin", "visit", 35.7148, 139.7967, "Asakusa, Tokyo"],
    ["Tokyo Skytree", "634 m au-dessus de la ville, de l''autre côté de la Sumida.", "matin", "visit", 35.7101, 139.8107, "Sumida, Tokyo"],
    ["Parc d''Ueno et musée national", "Trésors nationaux et cerisiers du grand parc.", "apres-midi", "visit", 35.7188, 139.7766, "Ueno, Tokyo"],
    ["Marché d''Ameyoko", "L''ancien marché noir devenu rue gourmande, sous la voie ferrée.", "apres-midi", "food", 35.7106, 139.7743, "Ueno, Tokyo"],
    ["Akihabara", "Néons, mangas et bornes d''arcade jusqu''au bout de la nuit.", "soir", "shopping", 35.6984, 139.7731, "Akihabara, Tokyo"]]'::jsonb);
  -- J2 ouest : Meiji-jingū → Harajuku (à la sortie du parc) → Shibuya au
  -- sud, montée au Shibuya Sky à la nuit tombée.
  PERFORM seed_day(c, 2, '[
    ["Sanctuaire Meiji-jingū", "Torii géants et forêt sacrée en pleine ville.", "matin", "visit", 35.6764, 139.6993, "Yoyogi, Tokyo"],
    ["Harajuku et Takeshita-dōri", "Crêpes, mode kawaii et boutiques colorées à la sortie du parc.", "apres-midi", "shopping", 35.6702, 139.7027, "Harajuku, Tokyo"],
    ["Carrefour de Shibuya et Hachikō", "Le passage piéton le plus fréquenté du monde.", "apres-midi", "visit", 35.6595, 139.7005, "Shibuya, Tokyo"],
    ["Shibuya Sky et izakaya", "Le crossing vu du ciel puis brochettes dans une ruelle.", "soir", "night", 35.6580, 139.7020, "Shibuya, Tokyo"]]'::jsonb);
  -- J3 baie : Tsukiji → Hamarikyu (au bout du marché) → Ginza en remontant,
  -- tour de Tokyo illuminée à l''ouest le soir.
  PERFORM seed_day(c, 3, '[
    ["Marché extérieur de Tsukiji", "Sushis au comptoir et couteaux de chef au petit matin.", "matin", "food", 35.6654, 139.7707, "Tsukiji, Tokyo"],
    ["Jardin Hamarikyu", "Maison de thé sur l''étang d''eau de mer, au bout du marché.", "matin", "nature", 35.6597, 139.7633, "Hamarikyu, Tokyo"],
    ["Ginza", "Grands magasins et galeries du quartier le plus chic.", "apres-midi", "shopping", 35.6717, 139.7650, "Ginza, Tokyo"],
    ["Tour de Tokyo", "La silhouette rouge et blanche illuminée.", "soir", "visit", 35.6586, 139.7454, "Minato, Tokyo"]]'::jsonb);
  -- J4 : teamLab et Odaiba dans la baie, retour à Shinjuku le soir.
  PERFORM seed_day(c, 4, '[
    ["teamLab Planets", "L''art numérique immersif, pieds nus dans l''eau (réserver).", "matin", "visit", 35.6493, 139.7898, "Toyosu, Tokyo"],
    ["Odaiba et Gundam géant", "L''île futuriste, vue sur le Rainbow Bridge.", "apres-midi", "visit", 35.6270, 139.7768, "Odaiba, Tokyo"],
    ["Omoide Yokochō", "Gargotes à yakitori dans les ruelles rétro de Shinjuku.", "soir", "food", 35.6938, 139.6997, "Shinjuku, Tokyo"],
    ["Golden Gai", "Deux cents micro-bars dans six ruelles.", "soir", "night", 35.6940, 139.7045, "Shinjuku, Tokyo"]]'::jsonb);
  -- Excursion Kamakura (jour 5) : Grand Bouddha → Hase-dera (côte ouest,
  -- adjacents) → Hachimangū au centre, couchant à Enoshima au retour.
  e := seed_daytrip('JPN', 'Kamakura', 35.3192, 139.5467, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Grand Bouddha de Kamakura", "Le Bouddha de bronze en plein air du Kōtoku-in.", "matin", "visit", 35.3167, 139.5357, "Kamakura"],
    ["Temple Hase-dera", "Jardins en terrasses et vue sur la baie, à cinq minutes.", "matin", "visit", 35.3125, 139.5330, "Kamakura"],
    ["Tsurugaoka Hachimangū et Komachi-dōri", "Le grand sanctuaire des shoguns et sa rue gourmande.", "apres-midi", "visit", 35.3260, 139.5560, "Kamakura"],
    ["Île d''Enoshima au couchant", "Le mont Fuji en silhouette derrière la mer, par temps clair.", "soir", "nature", 35.2990, 139.4800, "Enoshima"]]'::jsonb);

  -- Kyoto (4 jours : 3 propres + 1 excursion Nara en jour 3).
  c := seed_city('JPN', 'Kyoto', 35.0116, 135.7681, 4, g, 2, 5);
  -- J1 sud-est : Fushimi Inari → Tōfuku-ji → Kiyomizu-dera, remontée
  -- continue vers le nord, soirée à Gion au bout du chemin.
  PERFORM seed_day(c, 1, '[
    ["Fushimi Inari-taisha", "Les milliers de torii vermillon, tôt avant la foule.", "matin", "visit", 34.9671, 135.7727, "Fushimi, Kyoto"],
    ["Temple Tōfuku-ji", "Jardins zen et ponts sur la vallée d''érables, sur la remontée.", "matin", "visit", 34.9773, 135.7739, "Higashiyama, Kyoto"],
    ["Kiyomizu-dera et Sannenzaka", "La terrasse sur pilotis puis les escaliers pavés de boutiques.", "apres-midi", "visit", 34.9949, 135.7850, "Higashiyama, Kyoto"],
    ["Sanctuaire Yasaka", "Les lanternes allumées à l''entrée de Gion.", "apres-midi", "visit", 35.0037, 135.7787, "Gion, Kyoto"],
    ["Gion et Pontochō", "Maisons de thé, geishas pressées et dîner au bord de la Kamo.", "soir", "food", 35.0037, 135.7752, "Gion, Kyoto"]]'::jsonb);
  -- J2 ouest : Arashiyama (bambous + Tenryū-ji adjacents) → Kinkaku-ji en
  -- revenant vers la ville, dîner au centre.
  PERFORM seed_day(c, 2, '[
    ["Bambouseraie d''Arashiyama", "Le sentier dans les bambous géants, à l''aube.", "matin", "nature", 35.0170, 135.6717, "Arashiyama, Kyoto"],
    ["Temple Tenryū-ji et pont Togetsukyō", "Le jardin Unesco et la rivière Katsura, juste à côté.", "matin", "visit", 35.0158, 135.6742, "Arashiyama, Kyoto"],
    ["Pavillon d''or (Kinkaku-ji)", "Le temple doré sur son étang, sur la route du retour.", "apres-midi", "visit", 35.0394, 135.7292, "Kita-ku, Kyoto"],
    ["Jardin zen du Ryōan-ji", "Les quinze pierres du plus célèbre jardin sec, voisin.", "apres-midi", "visit", 35.0345, 135.7183, "Ukyo-ku, Kyoto"],
    ["Dîner à Kawaramachi", "Izakayas et ruelles du centre-ville.", "soir", "food", 35.0080, 135.7680, "Nakagyo-ku, Kyoto"]]'::jsonb);
  -- Excursion Nara (jour 3) : daims → Tōdai-ji → Kasuga (progression dans
  -- le parc), Naramachi sur le chemin du retour vers la gare.
  e := seed_daytrip('JPN', 'Nara', 34.6851, 135.8430, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Parc aux daims de Nara", "Des centaines de daims en liberté qui saluent pour un biscuit.", "matin", "nature", 34.6851, 135.8430, "Nara"],
    ["Tōdai-ji", "Le Bouddha géant de bronze dans son immense hall de bois.", "matin", "visit", 34.6889, 135.8398, "Nara"],
    ["Sanctuaire Kasuga-taisha", "Les allées de lanternes de pierre sous les cèdres, au fond du parc.", "apres-midi", "visit", 34.6814, 135.8483, "Nara"],
    ["Quartier de Naramachi", "Machiya préservées et boutiques de mochi sur le retour.", "apres-midi", "visit", 34.6790, 135.8290, "Nara"],
    ["Retour et soirée libre à Kyoto", "Gion by night ou onsen urbain.", "soir", "visit", 35.0040, 135.7750, "Kyoto"]]'::jsonb);
  -- J4 centre-nord puis est : Nijō → palais impérial → Ginkaku-ji et chemin
  -- de la philosophie, descente sur Higashiyama illuminé.
  PERFORM seed_day(c, 4, '[
    ["Château Nijō", "Planchers rossignol et appartements des shoguns.", "matin", "visit", 35.0142, 135.7481, "Nakagyo-ku, Kyoto"],
    ["Parc du palais impérial", "Les allées de graviers de l''ancienne cour.", "matin", "nature", 35.0254, 135.7622, "Kamigyo-ku, Kyoto"],
    ["Pavillon d''argent (Ginkaku-ji)", "Sobriété wabi-sabi et jardin de sable.", "apres-midi", "visit", 35.0270, 135.7982, "Sakyo-ku, Kyoto"],
    ["Chemin de la philosophie", "Le canal bordé de cerisiers, en descendant vers le sud.", "apres-midi", "nature", 35.0200, 135.7940, "Sakyo-ku, Kyoto"],
    ["Higashiyama illuminé", "Dernière soirée dans les ruelles aux lanternes.", "soir", "visit", 35.0000, 135.7810, "Higashiyama, Kyoto"]]'::jsonb);

  -- Osaka (2 jours).
  c := seed_city('JPN', 'Osaka', 34.6937, 135.5023, 2, g, 3, 9);
  -- J1 : château (nord) → Kuromon (déjeuner au marché avant la fermeture
  -- des étals) → Shinsekai (sud) → remontée sur Dōtonbori pour la soirée.
  PERFORM seed_day(c, 1, '[
    ["Château d''Osaka", "Le donjon doré au-dessus des douves et du parc.", "matin", "visit", 34.6873, 135.5259, "Chuo-ku, Osaka"],
    ["Marché de Kuromon", "La cuisine d''Osaka : thon, oursins et wagyu grillé minute — avant la fermeture des étals en fin d''après-midi.", "apres-midi", "food", 34.6656, 135.5064, "Chuo-ku, Osaka"],
    ["Shinsekai et tour Tsūtenkaku", "Le quartier rétro aux enseignes géantes et ses kushikatsu.", "apres-midi", "visit", 34.6524, 135.5063, "Shinsekai, Osaka"],
    ["Dōtonbori", "Le canal aux néons, Glico Man et takoyaki.", "soir", "night", 34.6687, 135.5013, "Dotonbori, Osaka"]]'::jsonb);
  -- J2 baie puis nord : aquarium → grande roue (adjacente) → Umeda.
  PERFORM seed_day(c, 2, '[
    ["Aquarium Kaiyukan", "Le requin-baleine dans l''un des plus grands bassins du monde.", "matin", "visit", 34.6547, 135.4290, "Minato-ku, Osaka"],
    ["Grande roue de Tempozan", "La baie d''Osaka vue d''en haut, juste à côté.", "apres-midi", "visit", 34.6565, 135.4300, "Minato-ku, Osaka"],
    ["Umeda Sky Building", "L''observatoire circulaire à ciel ouvert au couchant.", "apres-midi", "visit", 34.7054, 135.4900, "Umeda, Osaka"],
    ["Izakayas de Kita", "Dernière soirée sous les lanternes d''Umeda.", "soir", "food", 34.7020, 135.4980, "Umeda, Osaka"]]'::jsonb);

  -- Hiroshima (3 jours : 2 propres + 1 excursion Miyajima en jour 2).
  c := seed_city('JPN', 'Hiroshima', 34.3853, 132.4553, 3, g, 4, 11);
  -- J1 : mémorial (parc + musée adjacents) → château et Shukkei-en au
  -- nord-est → Okonomi-mura au centre le soir.
  PERFORM seed_day(c, 1, '[
    ["Dôme de Genbaku et parc du Mémorial", "Le témoin du 6 août 1945, classé Unesco.", "matin", "visit", 34.3955, 132.4536, "Naka-ku, Hiroshima"],
    ["Musée du Mémorial de la Paix", "Le récit nécessaire, dans le parc.", "matin", "visit", 34.3916, 132.4523, "Naka-ku, Hiroshima"],
    ["Château de Hiroshima", "Le château de la carpe reconstruit dans ses douves.", "apres-midi", "visit", 34.4027, 132.4594, "Naka-ku, Hiroshima"],
    ["Jardin Shukkei-en", "Paysages miniatures au bord de la rivière, tout proche.", "apres-midi", "nature", 34.3993, 132.4645, "Naka-ku, Hiroshima"],
    ["Okonomi-mura", "Trois étages d''okonomiyaki à la mode d''Hiroshima.", "soir", "food", 34.3936, 132.4595, "Naka-ku, Hiroshima"]]'::jsonb);
  -- Excursion Miyajima (jour 2) : torii → mont Misen → Omotesandō au retour.
  e := seed_daytrip('JPN', 'Miyajima', 34.2960, 132.3197, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Sanctuaire Itsukushima", "Le torii flottant à marée haute, dès le premier ferry.", "matin", "visit", 34.2960, 132.3197, "Miyajima"],
    ["Mont Misen", "Téléphérique puis sentier au sommet, la mer Intérieure à 360°.", "apres-midi", "nature", 34.2751, 132.3168, "Miyajima"],
    ["Rue Omotesandō", "Huîtres grillées et momiji manju en redescendant vers le ferry.", "apres-midi", "food", 34.2967, 132.3208, "Miyajima"],
    ["Torii illuminé", "Le sanctuaire à la nuit tombée avant le retour.", "soir", "visit", 34.2958, 132.3195, "Miyajima"]]'::jsonb);
  -- J3 : Mitaki-dera dans la forêt au nord-ouest, shopping et soirée au centre.
  PERFORM seed_day(c, 3, '[
    ["Mitaki-dera", "Trois cascades et pagode vermillon dans la forêt.", "matin", "visit", 34.4260, 132.4380, "Nishi-ku, Hiroshima"],
    ["Hondori et centre-ville", "L''artère couverte commerçante.", "apres-midi", "shopping", 34.3930, 132.4570, "Naka-ku, Hiroshima"],
    ["Quartier de Nagarekawa", "Bars et izakayas pour la dernière soirée du voyage.", "soir", "night", 34.3919, 132.4626, "Naka-ku, Hiroshima"]]'::jsonb);

  -- ─── Sapporo seule (2 jours) ─────────────────────────────────────
  c := seed_city('JPN', 'Sapporo', 43.0618, 141.3545, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Parc Odori et tour de la télévision", "L''esplanade centrale, théâtre du festival de la neige.", "matin", "visit", 43.0610, 141.3560, "Sapporo"],
    ["Tour de l''Horloge et ancien siège du gouvernement", "Les bâtiments pionniers de brique rouge de Hokkaidō.", "apres-midi", "visit", 43.0640, 141.3540, "Sapporo"],
    ["Ramen Yokocho à Susukino", "La ruelle des ramen au miso, spécialité locale.", "soir", "food", 43.0550, 141.3530, "Susukino, Sapporo"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Marché aux poissons de Nijō", "Crabes géants et donburi d''oursins au petit-déjeuner.", "matin", "food", 43.0570, 141.3610, "Sapporo"],
    ["Musée de la bière Sapporo", "La plus ancienne brasserie du Japon, dégustation incluse.", "apres-midi", "visit", 43.0710, 141.3690, "Higashi-ku, Sapporo"],
    ["Mont Moiwa en téléphérique", "L''une des trois plus belles vues nocturnes du Japon.", "soir", "nature", 43.0230, 141.3200, "Sapporo"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du voyage court populaire : 7 jours Tokyo → Kyoto.
-- Coexiste avec le 7j v1 "chill" — deux rythmes proposés. Mêmes journées
-- denses que le groupe 14j (sans les excursions Kamakura/Nara, pas le
-- temps sur 7 jours) ; le jour 4 de Kyoto du 14j devient ici son jour 3.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('JPN', 7);
  c := seed_city('JPN', 'Tokyo', 35.6762, 139.6503, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Temple Sensō-ji et Nakamise-dōri", "Le plus vieux temple de Tokyo et sa rue d''échoppes.", "matin", "visit", 35.7148, 139.7967, "Asakusa, Tokyo"],
    ["Tokyo Skytree", "634 m au-dessus de la ville, de l''autre côté de la Sumida.", "matin", "visit", 35.7101, 139.8107, "Sumida, Tokyo"],
    ["Parc d''Ueno et musée national", "Trésors nationaux et cerisiers du grand parc.", "apres-midi", "visit", 35.7188, 139.7766, "Ueno, Tokyo"],
    ["Marché d''Ameyoko", "L''ancien marché noir devenu rue gourmande, sous la voie ferrée.", "apres-midi", "food", 35.7106, 139.7743, "Ueno, Tokyo"],
    ["Akihabara", "Néons, mangas et bornes d''arcade jusqu''au bout de la nuit.", "soir", "shopping", 35.6984, 139.7731, "Akihabara, Tokyo"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Sanctuaire Meiji-jingū", "Torii géants et forêt sacrée en pleine ville.", "matin", "visit", 35.6764, 139.6993, "Yoyogi, Tokyo"],
    ["Harajuku et Takeshita-dōri", "Crêpes, mode kawaii et boutiques colorées à la sortie du parc.", "apres-midi", "shopping", 35.6702, 139.7027, "Harajuku, Tokyo"],
    ["Carrefour de Shibuya et Hachikō", "Le passage piéton le plus fréquenté du monde.", "apres-midi", "visit", 35.6595, 139.7005, "Shibuya, Tokyo"],
    ["Shibuya Sky et izakaya", "Le crossing vu du ciel puis brochettes dans une ruelle.", "soir", "night", 35.6580, 139.7020, "Shibuya, Tokyo"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Marché extérieur de Tsukiji", "Sushis au comptoir et couteaux de chef au petit matin.", "matin", "food", 35.6654, 139.7707, "Tsukiji, Tokyo"],
    ["Jardin Hamarikyu", "Maison de thé sur l''étang d''eau de mer, au bout du marché.", "matin", "nature", 35.6597, 139.7633, "Hamarikyu, Tokyo"],
    ["Ginza", "Grands magasins et galeries du quartier le plus chic.", "apres-midi", "shopping", 35.6717, 139.7650, "Ginza, Tokyo"],
    ["Tour de Tokyo", "La silhouette rouge et blanche illuminée.", "soir", "visit", 35.6586, 139.7454, "Minato, Tokyo"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["teamLab Planets", "L''art numérique immersif, pieds nus dans l''eau (réserver).", "matin", "visit", 35.6493, 139.7898, "Toyosu, Tokyo"],
    ["Odaiba et Gundam géant", "L''île futuriste, vue sur le Rainbow Bridge.", "apres-midi", "visit", 35.6270, 139.7768, "Odaiba, Tokyo"],
    ["Omoide Yokochō", "Gargotes à yakitori dans les ruelles rétro de Shinjuku.", "soir", "food", 35.6938, 139.6997, "Shinjuku, Tokyo"],
    ["Golden Gai", "Deux cents micro-bars dans six ruelles.", "soir", "night", 35.6940, 139.7045, "Shinjuku, Tokyo"]]'::jsonb);

  c := seed_city('JPN', 'Kyoto', 35.0116, 135.7681, 3, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Fushimi Inari-taisha", "Les milliers de torii vermillon, tôt avant la foule.", "matin", "visit", 34.9671, 135.7727, "Fushimi, Kyoto"],
    ["Temple Tōfuku-ji", "Jardins zen et ponts sur la vallée d''érables, sur la remontée.", "matin", "visit", 34.9773, 135.7739, "Higashiyama, Kyoto"],
    ["Kiyomizu-dera et Sannenzaka", "La terrasse sur pilotis puis les escaliers pavés de boutiques.", "apres-midi", "visit", 34.9949, 135.7850, "Higashiyama, Kyoto"],
    ["Sanctuaire Yasaka", "Les lanternes allumées à l''entrée de Gion.", "apres-midi", "visit", 35.0037, 135.7787, "Gion, Kyoto"],
    ["Gion et Pontochō", "Maisons de thé, geishas pressées et dîner au bord de la Kamo.", "soir", "food", 35.0037, 135.7752, "Gion, Kyoto"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Bambouseraie d''Arashiyama", "Le sentier dans les bambous géants, à l''aube.", "matin", "nature", 35.0170, 135.6717, "Arashiyama, Kyoto"],
    ["Temple Tenryū-ji et pont Togetsukyō", "Le jardin Unesco et la rivière Katsura, juste à côté.", "matin", "visit", 35.0158, 135.6742, "Arashiyama, Kyoto"],
    ["Pavillon d''or (Kinkaku-ji)", "Le temple doré sur son étang, sur la route du retour.", "apres-midi", "visit", 35.0394, 135.7292, "Kita-ku, Kyoto"],
    ["Jardin zen du Ryōan-ji", "Les quinze pierres du plus célèbre jardin sec, voisin.", "apres-midi", "visit", 35.0345, 135.7183, "Ukyo-ku, Kyoto"],
    ["Dîner à Kawaramachi", "Izakayas et ruelles du centre-ville.", "soir", "food", 35.0080, 135.7680, "Nakagyo-ku, Kyoto"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Château Nijō", "Planchers rossignol et appartements des shoguns.", "matin", "visit", 35.0142, 135.7481, "Nakagyo-ku, Kyoto"],
    ["Parc du palais impérial", "Les allées de graviers de l''ancienne cour.", "matin", "nature", 35.0254, 135.7622, "Kamigyo-ku, Kyoto"],
    ["Pavillon d''argent (Ginkaku-ji)", "Sobriété wabi-sabi et jardin de sable.", "apres-midi", "visit", 35.0270, 135.7982, "Sakyo-ku, Kyoto"],
    ["Chemin de la philosophie", "Le canal bordé de cerisiers, en descendant vers le sud.", "apres-midi", "nature", 35.0200, 135.7940, "Sakyo-ku, Kyoto"],
    ["Higashiyama illuminé", "Dernière soirée dans les ruelles aux lanternes.", "soir", "visit", 35.0000, 135.7810, "Higashiyama, Kyoto"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du grand classique : 10 jours Tokyo → Kyoto (+ Nara)
-- → Osaka. Mêmes journées denses que le groupe 14j (sans Kamakura ni
-- Hiroshima — le trio de base, au rythme chargé).
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('JPN', 10);

  c := seed_city('JPN', 'Tokyo', 35.6762, 139.6503, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Temple Sensō-ji et Nakamise-dōri", "Le plus vieux temple de Tokyo et sa rue d''échoppes.", "matin", "visit", 35.7148, 139.7967, "Asakusa, Tokyo"],
    ["Tokyo Skytree", "634 m au-dessus de la ville, de l''autre côté de la Sumida.", "matin", "visit", 35.7101, 139.8107, "Sumida, Tokyo"],
    ["Parc d''Ueno et musée national", "Trésors nationaux et cerisiers du grand parc.", "apres-midi", "visit", 35.7188, 139.7766, "Ueno, Tokyo"],
    ["Marché d''Ameyoko", "L''ancien marché noir devenu rue gourmande, sous la voie ferrée.", "apres-midi", "food", 35.7106, 139.7743, "Ueno, Tokyo"],
    ["Akihabara", "Néons, mangas et bornes d''arcade jusqu''au bout de la nuit.", "soir", "shopping", 35.6984, 139.7731, "Akihabara, Tokyo"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Sanctuaire Meiji-jingū", "Torii géants et forêt sacrée en pleine ville.", "matin", "visit", 35.6764, 139.6993, "Yoyogi, Tokyo"],
    ["Harajuku et Takeshita-dōri", "Crêpes, mode kawaii et boutiques colorées à la sortie du parc.", "apres-midi", "shopping", 35.6702, 139.7027, "Harajuku, Tokyo"],
    ["Carrefour de Shibuya et Hachikō", "Le passage piéton le plus fréquenté du monde.", "apres-midi", "visit", 35.6595, 139.7005, "Shibuya, Tokyo"],
    ["Shibuya Sky et izakaya", "Le crossing vu du ciel puis brochettes dans une ruelle.", "soir", "night", 35.6580, 139.7020, "Shibuya, Tokyo"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Marché extérieur de Tsukiji", "Sushis au comptoir et couteaux de chef au petit matin.", "matin", "food", 35.6654, 139.7707, "Tsukiji, Tokyo"],
    ["Jardin Hamarikyu", "Maison de thé sur l''étang d''eau de mer, au bout du marché.", "matin", "nature", 35.6597, 139.7633, "Hamarikyu, Tokyo"],
    ["Ginza", "Grands magasins et galeries du quartier le plus chic.", "apres-midi", "shopping", 35.6717, 139.7650, "Ginza, Tokyo"],
    ["Tour de Tokyo", "La silhouette rouge et blanche illuminée.", "soir", "visit", 35.6586, 139.7454, "Minato, Tokyo"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["teamLab Planets", "L''art numérique immersif, pieds nus dans l''eau (réserver).", "matin", "visit", 35.6493, 139.7898, "Toyosu, Tokyo"],
    ["Odaiba et Gundam géant", "L''île futuriste, vue sur le Rainbow Bridge.", "apres-midi", "visit", 35.6270, 139.7768, "Odaiba, Tokyo"],
    ["Omoide Yokochō", "Gargotes à yakitori dans les ruelles rétro de Shinjuku.", "soir", "food", 35.6938, 139.6997, "Shinjuku, Tokyo"],
    ["Golden Gai", "Deux cents micro-bars dans six ruelles.", "soir", "night", 35.6940, 139.7045, "Shinjuku, Tokyo"]]'::jsonb);

  -- Kyoto (4 jours : 3 propres + 1 excursion Nara en jour 3).
  c := seed_city('JPN', 'Kyoto', 35.0116, 135.7681, 4, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Fushimi Inari-taisha", "Les milliers de torii vermillon, tôt avant la foule.", "matin", "visit", 34.9671, 135.7727, "Fushimi, Kyoto"],
    ["Temple Tōfuku-ji", "Jardins zen et ponts sur la vallée d''érables, sur la remontée.", "matin", "visit", 34.9773, 135.7739, "Higashiyama, Kyoto"],
    ["Kiyomizu-dera et Sannenzaka", "La terrasse sur pilotis puis les escaliers pavés de boutiques.", "apres-midi", "visit", 34.9949, 135.7850, "Higashiyama, Kyoto"],
    ["Sanctuaire Yasaka", "Les lanternes allumées à l''entrée de Gion.", "apres-midi", "visit", 35.0037, 135.7787, "Gion, Kyoto"],
    ["Gion et Pontochō", "Maisons de thé, geishas pressées et dîner au bord de la Kamo.", "soir", "food", 35.0037, 135.7752, "Gion, Kyoto"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Bambouseraie d''Arashiyama", "Le sentier dans les bambous géants, à l''aube.", "matin", "nature", 35.0170, 135.6717, "Arashiyama, Kyoto"],
    ["Temple Tenryū-ji et pont Togetsukyō", "Le jardin Unesco et la rivière Katsura, juste à côté.", "matin", "visit", 35.0158, 135.6742, "Arashiyama, Kyoto"],
    ["Pavillon d''or (Kinkaku-ji)", "Le temple doré sur son étang, sur la route du retour.", "apres-midi", "visit", 35.0394, 135.7292, "Kita-ku, Kyoto"],
    ["Jardin zen du Ryōan-ji", "Les quinze pierres du plus célèbre jardin sec, voisin.", "apres-midi", "visit", 35.0345, 135.7183, "Ukyo-ku, Kyoto"],
    ["Dîner à Kawaramachi", "Izakayas et ruelles du centre-ville.", "soir", "food", 35.0080, 135.7680, "Nakagyo-ku, Kyoto"]]'::jsonb);
  e := seed_daytrip('JPN', 'Nara', 34.6851, 135.8430, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Parc aux daims de Nara", "Des centaines de daims en liberté qui saluent pour un biscuit.", "matin", "nature", 34.6851, 135.8430, "Nara"],
    ["Tōdai-ji", "Le Bouddha géant de bronze dans son immense hall de bois.", "matin", "visit", 34.6889, 135.8398, "Nara"],
    ["Sanctuaire Kasuga-taisha", "Les allées de lanternes de pierre sous les cèdres, au fond du parc.", "apres-midi", "visit", 34.6814, 135.8483, "Nara"],
    ["Quartier de Naramachi", "Machiya préservées et boutiques de mochi sur le retour.", "apres-midi", "visit", 34.6790, 135.8290, "Nara"],
    ["Retour et soirée libre à Kyoto", "Gion by night ou onsen urbain.", "soir", "visit", 35.0040, 135.7750, "Kyoto"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Château Nijō", "Planchers rossignol et appartements des shoguns.", "matin", "visit", 35.0142, 135.7481, "Nakagyo-ku, Kyoto"],
    ["Parc du palais impérial", "Les allées de graviers de l''ancienne cour.", "matin", "nature", 35.0254, 135.7622, "Kamigyo-ku, Kyoto"],
    ["Pavillon d''argent (Ginkaku-ji)", "Sobriété wabi-sabi et jardin de sable.", "apres-midi", "visit", 35.0270, 135.7982, "Sakyo-ku, Kyoto"],
    ["Chemin de la philosophie", "Le canal bordé de cerisiers, en descendant vers le sud.", "apres-midi", "nature", 35.0200, 135.7940, "Sakyo-ku, Kyoto"],
    ["Higashiyama illuminé", "Dernière soirée kyotoïte dans les ruelles aux lanternes.", "soir", "visit", 35.0000, 135.7810, "Higashiyama, Kyoto"]]'::jsonb);

  -- Osaka (2 jours).
  c := seed_city('JPN', 'Osaka', 34.6937, 135.5023, 2, g, 3, 8);
  PERFORM seed_day(c, 1, '[
    ["Château d''Osaka", "Le donjon doré au-dessus des douves et du parc.", "matin", "visit", 34.6873, 135.5259, "Chuo-ku, Osaka"],
    ["Marché de Kuromon", "La cuisine d''Osaka : thon, oursins et wagyu grillé minute — avant la fermeture des étals en fin d''après-midi.", "apres-midi", "food", 34.6656, 135.5064, "Chuo-ku, Osaka"],
    ["Shinsekai et tour Tsūtenkaku", "Le quartier rétro aux enseignes géantes et ses kushikatsu.", "apres-midi", "visit", 34.6524, 135.5063, "Shinsekai, Osaka"],
    ["Dōtonbori", "Le canal aux néons, Glico Man et takoyaki.", "soir", "night", 34.6687, 135.5013, "Dotonbori, Osaka"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Aquarium Kaiyukan", "Le requin-baleine dans l''un des plus grands bassins du monde.", "matin", "visit", 34.6547, 135.4290, "Minato-ku, Osaka"],
    ["Grande roue de Tempozan", "La baie d''Osaka vue d''en haut, juste à côté.", "apres-midi", "visit", 34.6565, 135.4300, "Minato-ku, Osaka"],
    ["Umeda Sky Building", "L''observatoire circulaire à ciel ouvert au couchant.", "apres-midi", "visit", 34.7054, 135.4900, "Umeda, Osaka"],
    ["Izakayas de Kita", "Dernière soirée sous les lanternes d''Umeda.", "soir", "food", 34.7020, 135.4980, "Umeda, Osaka"]]'::jsonb);
END $$;
