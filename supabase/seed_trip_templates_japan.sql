-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Japon (à exécuter après planning_modele_v9.sql)
--
-- 3 voyages "maison" (is_editorial = true, criteria = NULL, source_trip_id
-- et created_by = NULL) pour amorcer les suggestions de planning avant
-- l'arrivée de voyages réels d'utilisateurs :
--   - 7 jours  : Tokyo → Kyoto
--   - 14 jours : Tokyo → Kyoto (+ Nara) → Osaka → Hiroshima (+ Miyajima)
--   - 20 jours : Tokyo → Kanazawa → Kyoto (+ Nara) → Osaka →
--                Hiroshima (+ Miyajima) → Nagasaki → Fukuoka
--
-- Chaque ville d'un groupe est aussi une ligne trip_templates à part
-- entière : elle alimente donc AUSSI la suggestion par ville (nb_days de
-- cette seule ville), pas seulement le mode "voyage entier" — voir
-- api/trip-templates.js handleSuggest (pas de filtre sur group_id).
--
-- Idempotence : ce script n'est pas ré-exécutable tel quel (pas de clé
-- naturelle sur les groupes éditoriaux, contrairement aux modèles réels
-- indexés par source_trip_id). Si vous le relancez, supprimez d'abord les
-- groupes existants :
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'JPN';
--   (ON DELETE CASCADE nettoie les trip_templates, days et activities liés)
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE
  v_group   UUID;
  v_tokyo   UUID;
  v_kyoto   UUID;
  v_day     UUID;
BEGIN
  -- ─── Groupe 7 jours : Tokyo → Kyoto ──────────────────────────────
  INSERT INTO trip_template_groups (country_code, total_days, criteria, is_public, is_editorial)
  VALUES ('JPN', 7, NULL, true, true) RETURNING id INTO v_group;

  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Tokyo', 35.6762, 139.6503, 4, true, true, NULL, v_group, 1, 0) RETURNING id INTO v_tokyo;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Temple Sensō-ji (Asakusa)', 'Le plus ancien temple bouddhiste de Tokyo, dans le quartier historique d''Asakusa.', 'matin', 'visit', 35.7148, 139.7967, 'Asakusa, Tokyo', 1),
    (v_day, 'Parc d''Ueno et musée national de Tokyo', 'Grand parc verdoyant abritant le principal musée d''art et d''histoire du pays.', 'apres-midi', 'visit', 35.7188, 139.7766, 'Ueno, Tokyo', 2),
    (v_day, 'Akihabara', 'Quartier emblématique de l''électronique, des jeux vidéo et de la culture manga.', 'soir', 'shopping', 35.6984, 139.7731, 'Akihabara, Tokyo', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Sanctuaire Meiji-jingū', 'Sanctuaire shinto niché dans une forêt en plein cœur de Tokyo.', 'matin', 'visit', 35.6764, 139.6993, 'Yoyogi, Tokyo', 1),
    (v_day, 'Harajuku (Takeshita-dōri)', 'Rue piétonne emblématique de la mode alternative et des boutiques colorées.', 'apres-midi', 'shopping', 35.6702, 139.7027, 'Harajuku, Tokyo', 2),
    (v_day, 'Carrefour de Shibuya', 'Le passage piéton le plus fréquenté du monde, entouré de néons géants.', 'soir', 'night', 35.6595, 139.7005, 'Shibuya, Tokyo', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 3) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Marché extérieur de Tsukiji', 'Ruelles animées de restaurants et d''étals de produits de la mer ultra-frais.', 'matin', 'food', 35.6654, 139.7707, 'Tsukiji, Tokyo', 1),
    (v_day, 'Jardin Hamarikyu et Ginza', 'Jardin traditionnel en bord de baie, à deux pas du quartier chic de Ginza.', 'apres-midi', 'nature', 35.6597, 139.7633, 'Hamarikyu, Tokyo', 2),
    (v_day, 'Tour de Tokyo', 'Tour emblématique inspirée de la tour Eiffel, illuminée à la nuit tombée.', 'soir', 'visit', 35.6586, 139.7454, 'Minato, Tokyo', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 4) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Jardin Shinjuku Gyoen', 'Vaste parc mêlant jardins japonais, français et anglais.', 'matin', 'nature', 35.6852, 139.7100, 'Shinjuku, Tokyo', 1),
    (v_day, 'Observatoire du gouvernement métropolitain', 'Vue panoramique gratuite sur Tokyo depuis le 45e étage.', 'apres-midi', 'visit', 35.6896, 139.6917, 'Shinjuku, Tokyo', 2),
    (v_day, 'Omoide Yokochō', 'Ruelle étroite de petites gargotes à yakitori, ambiance rétro Shōwa.', 'soir', 'food', 35.6938, 139.6997, 'Shinjuku, Tokyo', 3);

  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Kyoto', 35.0116, 135.7681, 3, true, true, NULL, v_group, 2, 4) RETURNING id INTO v_kyoto;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Fushimi Inari-taisha', 'Des milliers de torii vermillon serpentant à flanc de colline.', 'matin', 'visit', 34.9671, 135.7727, 'Fushimi, Kyoto', 1),
    (v_day, 'Temple Tōfuku-ji', 'Grand temple zen réputé pour son jardin sec et ses ponts sur la vallée.', 'apres-midi', 'visit', 34.9773, 135.7739, 'Higashiyama, Kyoto', 2),
    (v_day, 'Quartier de Gion', 'Ruelles traditionnelles des geishas, maisons de thé en bois.', 'soir', 'visit', 35.0037, 135.7752, 'Gion, Kyoto', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Bambouseraie d''Arashiyama', 'Sentier serpentant au cœur d''une forêt de bambous géants.', 'matin', 'nature', 35.0170, 135.6717, 'Arashiyama, Kyoto', 1),
    (v_day, 'Temple Tenryū-ji et pont Togetsukyō', 'Temple classé à l''Unesco et son célèbre pont sur la rivière Katsura.', 'apres-midi', 'visit', 35.0158, 135.6742, 'Arashiyama, Kyoto', 2),
    (v_day, 'Pontochō', 'Ruelle pavée le long de la rivière, restaurants traditionnels aux lanternes.', 'soir', 'food', 35.0083, 135.7708, 'Pontocho, Kyoto', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 3) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Pavillon d''or (Kinkaku-ji)', 'Temple recouvert de feuilles d''or se reflétant dans son étang.', 'matin', 'visit', 35.0394, 135.7292, 'Kita-ku, Kyoto', 1),
    (v_day, 'Jardin zen Ryōan-ji et château Nijō', 'Célèbre jardin de pierres, puis château aux planchers rossignol.', 'apres-midi', 'visit', 35.0345, 135.7183, 'Ukyo-ku, Kyoto', 2),
    (v_day, 'Marché de Nishiki', 'Longue galerie couverte surnommée « la cuisine de Kyoto ».', 'soir', 'food', 35.0050, 135.7649, 'Nakagyo-ku, Kyoto', 3);
END $$;


DO $$
DECLARE
  v_group     UUID;
  v_tokyo     UUID;
  v_kyoto     UUID;
  v_nara      UUID;
  v_osaka     UUID;
  v_hiroshima UUID;
  v_miyajima  UUID;
  v_day       UUID;
BEGIN
  -- ─── Groupe 14 jours : Tokyo → Kyoto (+Nara) → Osaka → Hiroshima (+Miyajima) ──
  INSERT INTO trip_template_groups (country_code, total_days, criteria, is_public, is_editorial)
  VALUES ('JPN', 14, NULL, true, true) RETURNING id INTO v_group;

  -- Tokyo (identique au groupe 7 jours)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Tokyo', 35.6762, 139.6503, 4, true, true, NULL, v_group, 1, 0) RETURNING id INTO v_tokyo;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Temple Sensō-ji (Asakusa)', 'Le plus ancien temple bouddhiste de Tokyo, dans le quartier historique d''Asakusa.', 'matin', 'visit', 35.7148, 139.7967, 'Asakusa, Tokyo', 1),
    (v_day, 'Parc d''Ueno et musée national de Tokyo', 'Grand parc verdoyant abritant le principal musée d''art et d''histoire du pays.', 'apres-midi', 'visit', 35.7188, 139.7766, 'Ueno, Tokyo', 2),
    (v_day, 'Akihabara', 'Quartier emblématique de l''électronique, des jeux vidéo et de la culture manga.', 'soir', 'shopping', 35.6984, 139.7731, 'Akihabara, Tokyo', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Sanctuaire Meiji-jingū', 'Sanctuaire shinto niché dans une forêt en plein cœur de Tokyo.', 'matin', 'visit', 35.6764, 139.6993, 'Yoyogi, Tokyo', 1),
    (v_day, 'Harajuku (Takeshita-dōri)', 'Rue piétonne emblématique de la mode alternative et des boutiques colorées.', 'apres-midi', 'shopping', 35.6702, 139.7027, 'Harajuku, Tokyo', 2),
    (v_day, 'Carrefour de Shibuya', 'Le passage piéton le plus fréquenté du monde, entouré de néons géants.', 'soir', 'night', 35.6595, 139.7005, 'Shibuya, Tokyo', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 3) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Marché extérieur de Tsukiji', 'Ruelles animées de restaurants et d''étals de produits de la mer ultra-frais.', 'matin', 'food', 35.6654, 139.7707, 'Tsukiji, Tokyo', 1),
    (v_day, 'Jardin Hamarikyu et Ginza', 'Jardin traditionnel en bord de baie, à deux pas du quartier chic de Ginza.', 'apres-midi', 'nature', 35.6597, 139.7633, 'Hamarikyu, Tokyo', 2),
    (v_day, 'Tour de Tokyo', 'Tour emblématique inspirée de la tour Eiffel, illuminée à la nuit tombée.', 'soir', 'visit', 35.6586, 139.7454, 'Minato, Tokyo', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 4) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Jardin Shinjuku Gyoen', 'Vaste parc mêlant jardins japonais, français et anglais.', 'matin', 'nature', 35.6852, 139.7100, 'Shinjuku, Tokyo', 1),
    (v_day, 'Observatoire du gouvernement métropolitain', 'Vue panoramique gratuite sur Tokyo depuis le 45e étage.', 'apres-midi', 'visit', 35.6896, 139.6917, 'Shinjuku, Tokyo', 2),
    (v_day, 'Omoide Yokochō', 'Ruelle étroite de petites gargotes à yakitori, ambiance rétro Shōwa.', 'soir', 'food', 35.6938, 139.6997, 'Shinjuku, Tokyo', 3);

  -- Kyoto (5 jours au total : 4 jours propres + 1 jour d'excursion à Nara)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Kyoto', 35.0116, 135.7681, 5, true, true, NULL, v_group, 2, 4) RETURNING id INTO v_kyoto;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Fushimi Inari-taisha', 'Des milliers de torii vermillon serpentant à flanc de colline.', 'matin', 'visit', 34.9671, 135.7727, 'Fushimi, Kyoto', 1),
    (v_day, 'Temple Tōfuku-ji', 'Grand temple zen réputé pour son jardin sec et ses ponts sur la vallée.', 'apres-midi', 'visit', 34.9773, 135.7739, 'Higashiyama, Kyoto', 2),
    (v_day, 'Quartier de Gion', 'Ruelles traditionnelles des geishas, maisons de thé en bois.', 'soir', 'visit', 35.0037, 135.7752, 'Gion, Kyoto', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Bambouseraie d''Arashiyama', 'Sentier serpentant au cœur d''une forêt de bambous géants.', 'matin', 'nature', 35.0170, 135.6717, 'Arashiyama, Kyoto', 1),
    (v_day, 'Temple Tenryū-ji et pont Togetsukyō', 'Temple classé à l''Unesco et son célèbre pont sur la rivière Katsura.', 'apres-midi', 'visit', 35.0158, 135.6742, 'Arashiyama, Kyoto', 2),
    (v_day, 'Pontochō', 'Ruelle pavée le long de la rivière, restaurants traditionnels aux lanternes.', 'soir', 'food', 35.0083, 135.7708, 'Pontocho, Kyoto', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 3) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Pavillon d''or (Kinkaku-ji)', 'Temple recouvert de feuilles d''or se reflétant dans son étang.', 'matin', 'visit', 35.0394, 135.7292, 'Kita-ku, Kyoto', 1),
    (v_day, 'Jardin zen Ryōan-ji et château Nijō', 'Célèbre jardin de pierres, puis château aux planchers rossignol.', 'apres-midi', 'visit', 35.0345, 135.7183, 'Ukyo-ku, Kyoto', 2),
    (v_day, 'Marché de Nishiki', 'Longue galerie couverte surnommée « la cuisine de Kyoto ».', 'soir', 'food', 35.0050, 135.7649, 'Nakagyo-ku, Kyoto', 3);

  -- Excursion Nara : modèle à part (parent_template_id) rattaché à Kyoto,
  -- day_offset = 3 → prend le jour 4 du séjour à Kyoto (day_index 4 volontairement
  -- absent des jours PROPRES de Kyoto ci-dessus/ci-dessous, pour ne pas entrer
  -- en collision avec ce jour d'excursion une fois les deux fusionnés à
  -- l'affichage/l'import — voir buildCityTimeline / importDaytripChildren).
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, parent_template_id, day_offset)
  VALUES ('JPN', 'Nara', 34.6851, 135.8430, 1, true, true, NULL, v_kyoto, 3) RETURNING id INTO v_nara;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_nara, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Parc aux daims de Nara', 'Excursion à Nara : centaines de daims en liberté dans le parc.', 'matin', 'nature', 34.6851, 135.8430, 'Nara', 1),
    (v_day, 'Tōdai-ji', 'Immense temple abritant un Bouddha géant en bronze.', 'apres-midi', 'visit', 34.6889, 135.8398, 'Nara', 2),
    (v_day, 'Sanctuaire Kasuga-taisha', 'Sanctuaire shinto aux milliers de lanternes de pierre, sous les cèdres.', 'soir', 'visit', 34.6814, 135.8483, 'Nara', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 5) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Kiyomizu-dera', 'Temple perché offrant une vue spectaculaire sur Kyoto.', 'matin', 'visit', 34.9949, 135.7850, 'Higashiyama, Kyoto', 1),
    (v_day, 'Ruelles Ninenzaka et Sannenzaka', 'Escaliers pavés bordés de boutiques et maisons traditionnelles.', 'apres-midi', 'shopping', 34.9977, 135.7793, 'Higashiyama, Kyoto', 2),
    (v_day, 'Marché de Nishiki', 'Longue galerie couverte surnommée « la cuisine de Kyoto ».', 'soir', 'food', 35.0050, 135.7649, 'Nakagyo-ku, Kyoto', 3);

  -- Osaka (2 jours)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Osaka', 34.6937, 135.5023, 2, true, true, NULL, v_group, 3, 9) RETURNING id INTO v_osaka;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_osaka, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Château d''Osaka', 'Imposant château historique entouré d''un vaste parc.', 'matin', 'visit', 34.6873, 135.5259, 'Chuo-ku, Osaka', 1),
    (v_day, 'Marché de Kuromon', 'Marché couvert dédié à la street food et aux produits frais.', 'apres-midi', 'food', 34.6656, 135.5064, 'Chuo-ku, Osaka', 2),
    (v_day, 'Dōtonbori', 'Canal animé aux enseignes lumineuses géantes, cœur de la vie nocturne.', 'soir', 'night', 34.6687, 135.5013, 'Dotonbori, Osaka', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_osaka, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Aquarium Kaiyukan', 'L''un des plus grands aquariums du monde, requins-baleines inclus.', 'matin', 'visit', 34.6547, 135.4290, 'Minato-ku, Osaka', 1),
    (v_day, 'Shinsekai et tour Tsūtenkaku', 'Quartier rétro-futuriste autour d''une tour emblématique du début du XXe.', 'apres-midi', 'visit', 34.6524, 135.5063, 'Shinsekai, Osaka', 2),
    (v_day, 'Umeda Sky Building', 'Observatoire circulaire à ciel ouvert, vue sur Osaka au coucher du soleil.', 'soir', 'visit', 34.7054, 135.4900, 'Umeda, Osaka', 3);

  -- Hiroshima (3 jours au total : 2 jours propres + 1 jour d'excursion à Miyajima)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Hiroshima', 34.3853, 132.4553, 3, true, true, NULL, v_group, 4, 11) RETURNING id INTO v_hiroshima;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_hiroshima, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Parc du Mémorial de la Paix', 'Parc commémoratif autour du dôme de Genbaku, classé à l''Unesco.', 'matin', 'visit', 34.3955, 132.4536, 'Naka-ku, Hiroshima', 1),
    (v_day, 'Musée du Mémorial de la Paix', 'Musée retraçant les événements du 6 août 1945.', 'apres-midi', 'visit', 34.3916, 132.4523, 'Naka-ku, Hiroshima', 2),
    (v_day, 'Okonomi-mura', 'Immeuble entier dédié à l''okonomiyaki, spécialité locale.', 'soir', 'food', 34.3936, 132.4595, 'Naka-ku, Hiroshima', 3);

  -- Excursion Miyajima : day_offset = 1 → prend le jour 2 du séjour à
  -- Hiroshima (day_index 2 volontairement absent des jours propres
  -- d'Hiroshima, même raisonnement que Nara/Kyoto ci-dessus).
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, parent_template_id, day_offset)
  VALUES ('JPN', 'Miyajima', 34.2960, 132.3197, 1, true, true, NULL, v_hiroshima, 1) RETURNING id INTO v_miyajima;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_miyajima, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Sanctuaire Itsukushima (Miyajima)', 'Excursion à Miyajima : célèbre torii flottant sur la mer intérieure.', 'matin', 'visit', 34.2960, 132.3197, 'Miyajima', 1),
    (v_day, 'Mont Misen', 'Ascension (téléphérique + marche) offrant une vue sur la baie de Hiroshima.', 'apres-midi', 'nature', 34.2751, 132.3168, 'Miyajima', 2),
    (v_day, 'Rue commerçante d''Omotesandō (Miyajima)', 'Rue bordée d''échoppes d''huîtres grillées et de momiji manju.', 'soir', 'food', 34.2967, 132.3208, 'Miyajima', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_hiroshima, 3) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Château de Hiroshima', 'Château reconstruit, dit « château de la carpe », entouré de douves.', 'matin', 'visit', 34.4027, 132.4594, 'Naka-ku, Hiroshima', 1),
    (v_day, 'Jardin Shukkei-en', 'Jardin paysager miniature recréant montagnes et vallées.', 'apres-midi', 'nature', 34.3993, 132.4645, 'Naka-ku, Hiroshima', 2),
    (v_day, 'Quartier de Nagarekawa', 'Quartier animé de restaurants et bars, cœur de la vie nocturne locale.', 'soir', 'night', 34.3919, 132.4626, 'Naka-ku, Hiroshima', 3);
END $$;


DO $$
DECLARE
  v_group     UUID;
  v_tokyo     UUID;
  v_kanazawa  UUID;
  v_kyoto     UUID;
  v_nara      UUID;
  v_osaka     UUID;
  v_hiroshima UUID;
  v_miyajima  UUID;
  v_nagasaki  UUID;
  v_fukuoka   UUID;
  v_day       UUID;
BEGIN
  -- ─── Groupe 20 jours : Tokyo → Kanazawa → Kyoto (+Nara) → Osaka →
  --     Hiroshima (+Miyajima) → Nagasaki → Fukuoka ──────────────────
  INSERT INTO trip_template_groups (country_code, total_days, criteria, is_public, is_editorial)
  VALUES ('JPN', 20, NULL, true, true) RETURNING id INTO v_group;

  -- Tokyo (identique)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Tokyo', 35.6762, 139.6503, 4, true, true, NULL, v_group, 1, 0) RETURNING id INTO v_tokyo;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Temple Sensō-ji (Asakusa)', 'Le plus ancien temple bouddhiste de Tokyo, dans le quartier historique d''Asakusa.', 'matin', 'visit', 35.7148, 139.7967, 'Asakusa, Tokyo', 1),
    (v_day, 'Parc d''Ueno et musée national de Tokyo', 'Grand parc verdoyant abritant le principal musée d''art et d''histoire du pays.', 'apres-midi', 'visit', 35.7188, 139.7766, 'Ueno, Tokyo', 2),
    (v_day, 'Akihabara', 'Quartier emblématique de l''électronique, des jeux vidéo et de la culture manga.', 'soir', 'shopping', 35.6984, 139.7731, 'Akihabara, Tokyo', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Sanctuaire Meiji-jingū', 'Sanctuaire shinto niché dans une forêt en plein cœur de Tokyo.', 'matin', 'visit', 35.6764, 139.6993, 'Yoyogi, Tokyo', 1),
    (v_day, 'Harajuku (Takeshita-dōri)', 'Rue piétonne emblématique de la mode alternative et des boutiques colorées.', 'apres-midi', 'shopping', 35.6702, 139.7027, 'Harajuku, Tokyo', 2),
    (v_day, 'Carrefour de Shibuya', 'Le passage piéton le plus fréquenté du monde, entouré de néons géants.', 'soir', 'night', 35.6595, 139.7005, 'Shibuya, Tokyo', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 3) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Marché extérieur de Tsukiji', 'Ruelles animées de restaurants et d''étals de produits de la mer ultra-frais.', 'matin', 'food', 35.6654, 139.7707, 'Tsukiji, Tokyo', 1),
    (v_day, 'Jardin Hamarikyu et Ginza', 'Jardin traditionnel en bord de baie, à deux pas du quartier chic de Ginza.', 'apres-midi', 'nature', 35.6597, 139.7633, 'Hamarikyu, Tokyo', 2),
    (v_day, 'Tour de Tokyo', 'Tour emblématique inspirée de la tour Eiffel, illuminée à la nuit tombée.', 'soir', 'visit', 35.6586, 139.7454, 'Minato, Tokyo', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_tokyo, 4) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Jardin Shinjuku Gyoen', 'Vaste parc mêlant jardins japonais, français et anglais.', 'matin', 'nature', 35.6852, 139.7100, 'Shinjuku, Tokyo', 1),
    (v_day, 'Observatoire du gouvernement métropolitain', 'Vue panoramique gratuite sur Tokyo depuis le 45e étage.', 'apres-midi', 'visit', 35.6896, 139.6917, 'Shinjuku, Tokyo', 2),
    (v_day, 'Omoide Yokochō', 'Ruelle étroite de petites gargotes à yakitori, ambiance rétro Shōwa.', 'soir', 'food', 35.6938, 139.6997, 'Shinjuku, Tokyo', 3);

  -- Kanazawa (2 jours) — étape logique entre Tokyo et Kyoto via le Shinkansen Hokuriku
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Kanazawa', 36.5946, 136.6256, 2, true, true, NULL, v_group, 2, 4) RETURNING id INTO v_kanazawa;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kanazawa, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Jardin Kenroku-en', 'Considéré comme l''un des trois plus beaux jardins japonais.', 'matin', 'nature', 36.5624, 136.6625, 'Kanazawa', 1),
    (v_day, 'Château de Kanazawa', 'Château aux imposants murs blancs, juste à côté du jardin Kenroku-en.', 'apres-midi', 'visit', 36.5639, 136.6592, 'Kanazawa', 2),
    (v_day, 'Quartier de Higashi Chaya', 'Ruelles de maisons de thé en bois, ambiance d''époque Edo.', 'soir', 'visit', 36.5701, 136.6664, 'Kanazawa', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kanazawa, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Marché Ōmichō', 'Marché couvert réputé pour ses fruits de mer et son crabe.', 'matin', 'food', 36.5675, 136.6547, 'Kanazawa', 1),
    (v_day, 'Musée d''art contemporain du XXIe siècle', 'Musée circulaire à l''architecture ouverte, œuvres immersives.', 'apres-midi', 'visit', 36.5605, 136.6584, 'Kanazawa', 2),
    (v_day, 'Quartier de Nagamachi', 'Ancien quartier des samouraïs, ruelles aux murs d''argile et canaux.', 'soir', 'visit', 36.5615, 136.6489, 'Kanazawa', 3);

  -- Kyoto (5 jours au total : 4 jours propres + 1 jour d'excursion à Nara)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Kyoto', 35.0116, 135.7681, 5, true, true, NULL, v_group, 3, 6) RETURNING id INTO v_kyoto;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Fushimi Inari-taisha', 'Des milliers de torii vermillon serpentant à flanc de colline.', 'matin', 'visit', 34.9671, 135.7727, 'Fushimi, Kyoto', 1),
    (v_day, 'Temple Tōfuku-ji', 'Grand temple zen réputé pour son jardin sec et ses ponts sur la vallée.', 'apres-midi', 'visit', 34.9773, 135.7739, 'Higashiyama, Kyoto', 2),
    (v_day, 'Quartier de Gion', 'Ruelles traditionnelles des geishas, maisons de thé en bois.', 'soir', 'visit', 35.0037, 135.7752, 'Gion, Kyoto', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Bambouseraie d''Arashiyama', 'Sentier serpentant au cœur d''une forêt de bambous géants.', 'matin', 'nature', 35.0170, 135.6717, 'Arashiyama, Kyoto', 1),
    (v_day, 'Temple Tenryū-ji et pont Togetsukyō', 'Temple classé à l''Unesco et son célèbre pont sur la rivière Katsura.', 'apres-midi', 'visit', 35.0158, 135.6742, 'Arashiyama, Kyoto', 2),
    (v_day, 'Pontochō', 'Ruelle pavée le long de la rivière, restaurants traditionnels aux lanternes.', 'soir', 'food', 35.0083, 135.7708, 'Pontocho, Kyoto', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 3) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Pavillon d''or (Kinkaku-ji)', 'Temple recouvert de feuilles d''or se reflétant dans son étang.', 'matin', 'visit', 35.0394, 135.7292, 'Kita-ku, Kyoto', 1),
    (v_day, 'Jardin zen Ryōan-ji et château Nijō', 'Célèbre jardin de pierres, puis château aux planchers rossignol.', 'apres-midi', 'visit', 35.0345, 135.7183, 'Ukyo-ku, Kyoto', 2),
    (v_day, 'Marché de Nishiki', 'Longue galerie couverte surnommée « la cuisine de Kyoto ».', 'soir', 'food', 35.0050, 135.7649, 'Nakagyo-ku, Kyoto', 3);

  -- Excursion Nara (mêmes raisons qu'au groupe 14 jours)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, parent_template_id, day_offset)
  VALUES ('JPN', 'Nara', 34.6851, 135.8430, 1, true, true, NULL, v_kyoto, 3) RETURNING id INTO v_nara;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_nara, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Parc aux daims de Nara', 'Excursion à Nara : centaines de daims en liberté dans le parc.', 'matin', 'nature', 34.6851, 135.8430, 'Nara', 1),
    (v_day, 'Tōdai-ji', 'Immense temple abritant un Bouddha géant en bronze.', 'apres-midi', 'visit', 34.6889, 135.8398, 'Nara', 2),
    (v_day, 'Sanctuaire Kasuga-taisha', 'Sanctuaire shinto aux milliers de lanternes de pierre, sous les cèdres.', 'soir', 'visit', 34.6814, 135.8483, 'Nara', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_kyoto, 5) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Kiyomizu-dera', 'Temple perché offrant une vue spectaculaire sur Kyoto.', 'matin', 'visit', 34.9949, 135.7850, 'Higashiyama, Kyoto', 1),
    (v_day, 'Ruelles Ninenzaka et Sannenzaka', 'Escaliers pavés bordés de boutiques et maisons traditionnelles.', 'apres-midi', 'shopping', 34.9977, 135.7793, 'Higashiyama, Kyoto', 2),
    (v_day, 'Marché de Nishiki', 'Longue galerie couverte surnommée « la cuisine de Kyoto ».', 'soir', 'food', 35.0050, 135.7649, 'Nakagyo-ku, Kyoto', 3);

  -- Osaka (2 jours, identique)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Osaka', 34.6937, 135.5023, 2, true, true, NULL, v_group, 4, 11) RETURNING id INTO v_osaka;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_osaka, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Château d''Osaka', 'Imposant château historique entouré d''un vaste parc.', 'matin', 'visit', 34.6873, 135.5259, 'Chuo-ku, Osaka', 1),
    (v_day, 'Marché de Kuromon', 'Marché couvert dédié à la street food et aux produits frais.', 'apres-midi', 'food', 34.6656, 135.5064, 'Chuo-ku, Osaka', 2),
    (v_day, 'Dōtonbori', 'Canal animé aux enseignes lumineuses géantes, cœur de la vie nocturne.', 'soir', 'night', 34.6687, 135.5013, 'Dotonbori, Osaka', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_osaka, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Aquarium Kaiyukan', 'L''un des plus grands aquariums du monde, requins-baleines inclus.', 'matin', 'visit', 34.6547, 135.4290, 'Minato-ku, Osaka', 1),
    (v_day, 'Shinsekai et tour Tsūtenkaku', 'Quartier rétro-futuriste autour d''une tour emblématique du début du XXe.', 'apres-midi', 'visit', 34.6524, 135.5063, 'Shinsekai, Osaka', 2),
    (v_day, 'Umeda Sky Building', 'Observatoire circulaire à ciel ouvert, vue sur Osaka au coucher du soleil.', 'soir', 'visit', 34.7054, 135.4900, 'Umeda, Osaka', 3);

  -- Hiroshima (3 jours au total : 2 jours propres + 1 jour d'excursion à Miyajima)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Hiroshima', 34.3853, 132.4553, 3, true, true, NULL, v_group, 5, 13) RETURNING id INTO v_hiroshima;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_hiroshima, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Parc du Mémorial de la Paix', 'Parc commémoratif autour du dôme de Genbaku, classé à l''Unesco.', 'matin', 'visit', 34.3955, 132.4536, 'Naka-ku, Hiroshima', 1),
    (v_day, 'Musée du Mémorial de la Paix', 'Musée retraçant les événements du 6 août 1945.', 'apres-midi', 'visit', 34.3916, 132.4523, 'Naka-ku, Hiroshima', 2),
    (v_day, 'Okonomi-mura', 'Immeuble entier dédié à l''okonomiyaki, spécialité locale.', 'soir', 'food', 34.3936, 132.4595, 'Naka-ku, Hiroshima', 3);

  -- Excursion Miyajima (mêmes raisons qu'au groupe 14 jours)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, parent_template_id, day_offset)
  VALUES ('JPN', 'Miyajima', 34.2960, 132.3197, 1, true, true, NULL, v_hiroshima, 1) RETURNING id INTO v_miyajima;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_miyajima, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Sanctuaire Itsukushima (Miyajima)', 'Excursion à Miyajima : célèbre torii flottant sur la mer intérieure.', 'matin', 'visit', 34.2960, 132.3197, 'Miyajima', 1),
    (v_day, 'Mont Misen', 'Ascension (téléphérique + marche) offrant une vue sur la baie de Hiroshima.', 'apres-midi', 'nature', 34.2751, 132.3168, 'Miyajima', 2),
    (v_day, 'Rue commerçante d''Omotesandō (Miyajima)', 'Rue bordée d''échoppes d''huîtres grillées et de momiji manju.', 'soir', 'food', 34.2967, 132.3208, 'Miyajima', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_hiroshima, 3) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Château de Hiroshima', 'Château reconstruit, dit « château de la carpe », entouré de douves.', 'matin', 'visit', 34.4027, 132.4594, 'Naka-ku, Hiroshima', 1),
    (v_day, 'Jardin Shukkei-en', 'Jardin paysager miniature recréant montagnes et vallées.', 'apres-midi', 'nature', 34.3993, 132.4645, 'Naka-ku, Hiroshima', 2),
    (v_day, 'Quartier de Nagarekawa', 'Quartier animé de restaurants et bars, cœur de la vie nocturne locale.', 'soir', 'night', 34.3919, 132.4626, 'Naka-ku, Hiroshima', 3);

  -- Nagasaki (2 jours)
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Nagasaki', 32.7503, 129.8779, 2, true, true, NULL, v_group, 6, 16) RETURNING id INTO v_nagasaki;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_nagasaki, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Parc de la Paix', 'Parc commémoratif dédié aux victimes de la bombe atomique.', 'matin', 'visit', 32.7734, 129.8633, 'Nagasaki', 1),
    (v_day, 'Musée de la bombe atomique', 'Musée retraçant les événements du 9 août 1945.', 'apres-midi', 'visit', 32.7738, 129.8628, 'Nagasaki', 2),
    (v_day, 'Dejima', 'Ancien îlot artificiel, seule fenêtre du Japon sur l''Occident (XVIIe-XIXe).', 'soir', 'visit', 32.7443, 129.8724, 'Nagasaki', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_nagasaki, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Glover Garden', 'Jardin en terrasses avec résidences occidentales du XIXe siècle.', 'matin', 'visit', 32.7339, 129.8663, 'Nagasaki', 1),
    (v_day, 'Chinatown de Nagasaki', 'L''un des plus anciens quartiers chinois du Japon, spécialité champon.', 'apres-midi', 'food', 32.7412, 129.8722, 'Nagasaki', 2),
    (v_day, 'Mont Inasa', 'Vue nocturne classée parmi les plus belles du monde depuis le sommet.', 'soir', 'nature', 32.7492, 129.8556, 'Nagasaki', 3);

  -- Fukuoka (2 jours) — retour vers l'aéroport international
  INSERT INTO trip_templates (country_code, city_name, city_lat, city_lng, nb_days, is_public, is_editorial, criteria, group_id, group_position, group_day_offset)
  VALUES ('JPN', 'Fukuoka', 33.5904, 130.4017, 2, true, true, NULL, v_group, 7, 18) RETURNING id INTO v_fukuoka;

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_fukuoka, 1) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Sanctuaire Dazaifu Tenman-gū', 'Important sanctuaire dédié au dieu des études, allées de pruniers.', 'matin', 'visit', 33.5217, 130.5352, 'Dazaifu, Fukuoka', 1),
    (v_day, 'Ruines du château de Fukuoka', 'Vestiges de château et parc Maizuru, agréable promenade.', 'apres-midi', 'visit', 33.5847, 130.3800, 'Chuo-ku, Fukuoka', 2),
    (v_day, 'Yatai de Nakasu', 'Stands de rue en bord de rivière, spécialité ramen Hakata.', 'soir', 'food', 33.5919, 130.4053, 'Nakasu, Fukuoka', 3);

  INSERT INTO trip_template_days (template_id, day_index) VALUES (v_fukuoka, 2) RETURNING id INTO v_day;
  INSERT INTO trip_template_activities (template_day_id, name, description, time_slot, category, place_lat, place_lng, place_address, position) VALUES
    (v_day, 'Sanctuaire Kushida', 'Plus vieux sanctuaire de Fukuoka, célèbre pour le festival Hakata Gion Yamakasa.', 'matin', 'visit', 33.5928, 130.4116, 'Hakata, Fukuoka', 1),
    (v_day, 'Canal City Hakata', 'Grand complexe commercial traversé par un canal, fontaines animées.', 'apres-midi', 'shopping', 33.5895, 130.4113, 'Hakata, Fukuoka', 2),
    (v_day, 'Tour de Fukuoka', 'Plus haute tour littorale du Japon, vue sur la baie de Hakata.', 'soir', 'visit', 33.5933, 130.3514, 'Momochihama, Fukuoka', 3);
END $$;
