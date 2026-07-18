-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Japon voyages LONGS (après helpers ; fichier
-- AUTONOME : à exécuter une seule fois, ne touche pas aux seeds déjà passés)
--   - 20 jours DENSE : Tokyo (5j, + Kamakura) → Kanazawa (2j) → Kyoto (4j,
--     + Nara) → Osaka (2j) → Hiroshima (3j, + Miyajima) → Nagasaki (2j) →
--     Fukuoka (2j). Variante chargée du 20j chill v1 (mêmes étapes) :
--     Tokyo/Kyoto/Osaka/Hiroshima reprennent les journées denses de
--     japan_v2 ; Kanazawa, Nagasaki et Fukuoka sont en contenu dense propre.
--     Le trajet suit le Shinkansen d'est en ouest sans retour arrière
--     (Hokuriku vers Kanazawa, puis Tokaido/Sanyo/Kyushu jusqu'à Fukuoka).
-- Relance : DELETE l'éditorial JPN puis rejouer japan.sql, japan_v2.sql ET ce fichier.
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('JPN', 20);

  -- Tokyo (5 jours : 4 propres + 1 excursion Kamakura en jour 5).
  c := seed_city('JPN', 'Tokyo', 35.6762, 139.6503, 5, g, 1, 0);
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
  e := seed_daytrip('JPN', 'Kamakura', 35.3192, 139.5467, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Grand Bouddha de Kamakura", "Le Bouddha de bronze en plein air du Kōtoku-in.", "matin", "visit", 35.3167, 139.5357, "Kamakura"],
    ["Temple Hase-dera", "Jardins en terrasses et vue sur la baie, à cinq minutes.", "matin", "visit", 35.3125, 139.5330, "Kamakura"],
    ["Tsurugaoka Hachimangū et Komachi-dōri", "Le grand sanctuaire des shoguns et sa rue gourmande.", "apres-midi", "visit", 35.3260, 139.5560, "Kamakura"],
    ["Île d''Enoshima au couchant", "Le mont Fuji en silhouette derrière la mer, par temps clair.", "soir", "nature", 35.2990, 139.4800, "Enoshima"]]'::jsonb);

  -- Kanazawa (2 jours) — contenu dense propre à ce circuit.
  c := seed_city('JPN', 'Kanazawa', 36.5946, 136.6256, 2, g, 2, 5);
  -- J1 : marché Ōmichō le matin (les étals vivent le matin) → château →
  -- Kenroku-en (adjacent au château) → Higashi Chaya le soir, lanternes allumées.
  PERFORM seed_day(c, 1, '[
    ["Marché Ōmichō", "Crabes et oursins de la mer du Japon, donburi au comptoir.", "matin", "food", 36.5675, 136.6547, "Kanazawa"],
    ["Château de Kanazawa", "Les murs blancs immaculés et leurs toits de plomb.", "matin", "visit", 36.5639, 136.6592, "Kanazawa"],
    ["Jardin Kenroku-en", "L''un des trois plus beaux jardins du Japon, porte à porte avec le château.", "apres-midi", "nature", 36.5624, 136.6625, "Kanazawa"],
    ["Musée d''art contemporain du XXIe siècle", "La piscine de Leandro Erlich, au sud du jardin.", "apres-midi", "visit", 36.5605, 136.6584, "Kanazawa"],
    ["Higashi Chaya à la lanterne", "Les maisons de thé illuminées, or et geishas.", "soir", "visit", 36.5701, 136.6664, "Kanazawa"]]'::jsonb);
  -- J2 : quartier des samouraïs à l''ouest, temple ninja au sud, soirée près de la gare.
  PERFORM seed_day(c, 2, '[
    ["Quartier de Nagamachi", "Ruelles des samouraïs, murs d''argile et maison Nomura.", "matin", "visit", 36.5615, 136.6489, "Kanazawa"],
    ["Feuille d''or à Kanazawa", "Atelier de dorure — 99 % de l''or du Japon vient d''ici.", "matin", "shopping", 36.5620, 136.6500, "Kanazawa"],
    ["Myōryū-ji, le temple ninja", "Trappes et escaliers cachés du temple-forteresse (réserver).", "apres-midi", "visit", 36.5560, 136.6480, "Teramachi, Kanazawa"],
    ["Nishi Chaya", "Le petit quartier de thé de l''ouest, plus confidentiel.", "apres-midi", "visit", 36.5560, 136.6420, "Kanazawa"],
    ["Izakaya près de la gare", "Sashimis de la mer du Japon avant le Shinkansen du matin.", "soir", "food", 36.5780, 136.6480, "Kanazawa"]]'::jsonb);

  -- Kyoto (4 jours : 3 propres + 1 excursion Nara en jour 3).
  c := seed_city('JPN', 'Kyoto', 35.0116, 135.7681, 4, g, 3, 7);
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
  c := seed_city('JPN', 'Osaka', 34.6937, 135.5023, 2, g, 4, 11);
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

  -- Hiroshima (3 jours : 2 propres + 1 excursion Miyajima en jour 2).
  c := seed_city('JPN', 'Hiroshima', 34.3853, 132.4553, 3, g, 5, 13);
  PERFORM seed_day(c, 1, '[
    ["Dôme de Genbaku et parc du Mémorial", "Le témoin du 6 août 1945, classé Unesco.", "matin", "visit", 34.3955, 132.4536, "Naka-ku, Hiroshima"],
    ["Musée du Mémorial de la Paix", "Le récit nécessaire, dans le parc.", "matin", "visit", 34.3916, 132.4523, "Naka-ku, Hiroshima"],
    ["Château de Hiroshima", "Le château de la carpe reconstruit dans ses douves.", "apres-midi", "visit", 34.4027, 132.4594, "Naka-ku, Hiroshima"],
    ["Jardin Shukkei-en", "Paysages miniatures au bord de la rivière, tout proche.", "apres-midi", "nature", 34.3993, 132.4645, "Naka-ku, Hiroshima"],
    ["Okonomi-mura", "Trois étages d''okonomiyaki à la mode d''Hiroshima.", "soir", "food", 34.3936, 132.4595, "Naka-ku, Hiroshima"]]'::jsonb);
  e := seed_daytrip('JPN', 'Miyajima', 34.2960, 132.3197, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Sanctuaire Itsukushima", "Le torii flottant à marée haute, dès le premier ferry.", "matin", "visit", 34.2960, 132.3197, "Miyajima"],
    ["Mont Misen", "Téléphérique puis sentier au sommet, la mer Intérieure à 360°.", "apres-midi", "nature", 34.2751, 132.3168, "Miyajima"],
    ["Rue Omotesandō", "Huîtres grillées et momiji manju en redescendant vers le ferry.", "apres-midi", "food", 34.2967, 132.3208, "Miyajima"],
    ["Torii illuminé", "Le sanctuaire à la nuit tombée avant le retour.", "soir", "visit", 34.2958, 132.3195, "Miyajima"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Mitaki-dera", "Trois cascades et pagode vermillon dans la forêt.", "matin", "visit", 34.4260, 132.4380, "Nishi-ku, Hiroshima"],
    ["Hondori et centre-ville", "L''artère couverte commerçante.", "apres-midi", "shopping", 34.3930, 132.4570, "Naka-ku, Hiroshima"],
    ["Quartier de Nagarekawa", "Bars et izakayas avant le Shinkansen vers Kyushu.", "soir", "night", 34.3919, 132.4626, "Naka-ku, Hiroshima"]]'::jsonb);

  -- Nagasaki (2 jours) — contenu dense propre à ce circuit.
  c := seed_city('JPN', 'Nagasaki', 32.7503, 129.8779, 2, g, 6, 16);
  -- J1 : mémorial au nord le matin (parc et musée adjacents), Dejima et
  -- Chinatown au centre, vue nocturne du mont Inasa — classée parmi les
  -- trois plus belles du Japon, uniquement le soir.
  PERFORM seed_day(c, 1, '[
    ["Parc de la Paix", "La statue au bras levé vers le ciel du 9 août 1945.", "matin", "visit", 32.7734, 129.8633, "Nagasaki"],
    ["Musée de la bombe atomique", "Le récit de l''hypocentre, adjacent au parc.", "matin", "visit", 32.7738, 129.8628, "Nagasaki"],
    ["Dejima", "L''îlot-comptoir hollandais, seule fenêtre du Japon fermé.", "apres-midi", "visit", 32.7443, 129.8724, "Nagasaki"],
    ["Chinatown de Nagasaki", "Le plus vieux quartier chinois du Japon, champon fumant.", "apres-midi", "food", 32.7412, 129.8722, "Nagasaki"],
    ["Mont Inasa en téléphérique", "La vue nocturne aux 10 millions de dollars.", "soir", "nature", 32.7492, 129.8556, "Nagasaki"]]'::jsonb);
  -- J2 : colline des étrangers au sud (Glover et Ōura adjacents), pont
  -- Megane en remontant vers le centre, dîner avant Kyushu.
  PERFORM seed_day(c, 2, '[
    ["Glover Garden", "Les villas des marchands occidentaux en terrasses sur la baie.", "matin", "visit", 32.7339, 129.8663, "Nagasaki"],
    ["Cathédrale Ōura", "La plus vieille église du Japon, au pied du jardin.", "matin", "visit", 32.7346, 129.8700, "Nagasaki"],
    ["Pont Megane", "Le pont à lunettes reflété dans la Nakashima.", "apres-midi", "visit", 32.7470, 129.8790, "Nagasaki"],
    ["Temples de Teramachi", "Sōfuku-ji et la rue des temples chinois, tout proches.", "apres-midi", "visit", 32.7430, 129.8830, "Nagasaki"],
    ["Dîner de toruko rice", "La spécialité métisse de Nagasaki avant le train.", "soir", "food", 32.7450, 129.8770, "Nagasaki"]]'::jsonb);

  -- Fukuoka (2 jours) — contenu dense propre, retour vers l'aéroport international.
  c := seed_city('JPN', 'Fukuoka', 33.5904, 130.4017, 2, g, 7, 18);
  -- J1 : Dazaifu au sud-est le matin, retour au centre Hakata, yatai le soir
  -- (les échoppes de rue n''ouvrent qu''à la nuit tombée).
  PERFORM seed_day(c, 1, '[
    ["Sanctuaire Dazaifu Tenman-gū", "Le dieu des études sous les pruniers, à 30 min de train.", "matin", "visit", 33.5217, 130.5352, "Dazaifu, Fukuoka"],
    ["Kyushu National Museum", "Le vaisseau de verre dans la colline, relié au sanctuaire.", "matin", "visit", 33.5170, 130.5390, "Dazaifu, Fukuoka"],
    ["Sanctuaire Kushida et machiya de Hakata", "Le doyen de Fukuoka et ses chars de festival géants.", "apres-midi", "visit", 33.5928, 130.4116, "Hakata, Fukuoka"],
    ["Canal City Hakata", "Le complexe-canyon et ses fontaines animées, à deux pas.", "apres-midi", "shopping", 33.5895, 130.4113, "Hakata, Fukuoka"],
    ["Yatai de Nakasu", "Ramen tonkotsu coude à coude dans les échoppes de rue du soir.", "soir", "food", 33.5919, 130.4053, "Nakasu, Fukuoka"]]'::jsonb);
  -- J2 : parc Ōhori et château à l''ouest du centre, tour de Fukuoka en
  -- bord de mer encore plus à l''ouest — progression continue, couchant sur la baie.
  PERFORM seed_day(c, 2, '[
    ["Parc Ōhori", "Le grand lac de promenade et son jardin japonais.", "matin", "nature", 33.5860, 130.3760, "Chuo-ku, Fukuoka"],
    ["Ruines du château de Fukuoka", "Remparts et cerisiers du parc Maizuru, adjacent.", "matin", "visit", 33.5847, 130.3800, "Chuo-ku, Fukuoka"],
    ["Tour de Fukuoka et plage de Momochi", "La plus haute tour littorale du Japon, face à la baie.", "apres-midi", "visit", 33.5933, 130.3514, "Momochihama, Fukuoka"],
    ["Coucher de soleil sur la baie de Hakata", "Dernier soir du voyage, la mer à l''ouest.", "soir", "nature", 33.5940, 130.3500, "Momochihama, Fukuoka"]]'::jsonb);
END $$;
