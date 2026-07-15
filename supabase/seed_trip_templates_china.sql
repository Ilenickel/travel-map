-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Chine (après seed_trip_templates_helpers.sql)
--   - 5 jours  : Pékin (+ excursion Grande Muraille)
--   - 7 jours  : Pékin → Shanghai
--   - 10 jours : Pékin → Xi'an → Shanghai (+ Suzhou)
--   - 14 jours : Sud & paysages — Shanghai (+ Hangzhou) → Guilin → Yunnan → Hong Kong
--   - 18 jours : Grand tour — Pékin → Xi'an → Chengdu (+ Leshan) → Guilin → Shanghai → Hong Kong
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'CHN';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'CHN';
-- ════════════════════════════════════════════════════════════════

-- Pékin : 3 jours propres + excursion Grande Muraille au jour 2 ;
-- p_five ajoute un 5e jour propre (version mono-ville).
CREATE OR REPLACE FUNCTION seed_cn_beijing(p_group UUID, p_pos INT, p_offset INT, p_five BOOLEAN)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('CHN', 'Pékin', 39.9042, 116.4074, CASE WHEN p_five THEN 5 ELSE 4 END, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Place Tian''anmen", "La plus grande place du monde.", "matin", "visit", 39.9055, 116.3976, "Pékin"],
    ["Cité interdite", "Palais impérial aux 9 999 pièces.", "apres-midi", "visit", 39.9163, 116.3972, "Pékin"],
    ["Parc Jingshan", "La Cité interdite vue d''en haut au couchant.", "soir", "nature", 39.9250, 116.3960, "Pékin"]]'::jsonb);
  e := seed_daytrip('CHN', 'Grande Muraille', 40.4319, 116.5704, v, 1);
  PERFORM seed_day(e, 1, '[
    ["Grande Muraille de Mutianyu", "Section restaurée et boisée, montée en télécabine.", "matin", "visit", 40.4319, 116.5704, "Mutianyu"],
    ["Marche sur les remparts", "Tours de guet et panoramas à perte de vue.", "apres-midi", "nature", 40.4330, 116.5650, "Mutianyu"],
    ["Descente en luge et retour", "Toboggan le long de la muraille puis route vers Pékin.", "soir", "visit", 40.4310, 116.5680, "Mutianyu"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Marché de la soie", "Négociation dans le temple de la contrefaçon chic.", "matin", "shopping", 39.9078, 116.4522, "Pékin"],
    ["Temple du Ciel", "Rotonde aux tuiles bleues des empereurs.", "apres-midi", "visit", 39.8822, 116.4066, "Pékin"],
    ["Canard laqué à Qianmen", "Le plat pékinois par excellence.", "soir", "food", 39.8994, 116.3977, "Pékin"]]'::jsonb);
  PERFORM seed_day(v, 4, '[
    ["Palais d''été", "Lac Kunming et longue galerie peinte.", "matin", "visit", 39.9999, 116.2755, "Pékin"],
    ["Temple des Lamas", "Bouddha de 18 m taillé dans un seul santal.", "apres-midi", "visit", 39.9477, 116.4177, "Pékin"],
    ["Hutongs de Nanluoguxiang", "Ruelles traditionnelles et vie de quartier.", "soir", "food", 39.9370, 116.4033, "Pékin"]]'::jsonb);
  IF p_five THEN
    PERFORM seed_day(v, 5, '[
      ["Musée national de Chine", "5 000 ans de civilisation chinoise.", "matin", "visit", 39.9047, 116.4015, "Pékin"],
      ["Parc Beihai", "Lac impérial et dagoba blanc.", "apres-midi", "nature", 39.9254, 116.3830, "Pékin"],
      ["Lacs de Houhai", "Bars au bord de l''eau et vieux Pékin.", "soir", "night", 39.9400, 116.3830, "Pékin"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_cn_xian(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('CHN', 'Xi''an', 34.3416, 108.9398, 2, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Armée de terre cuite", "Des milliers de soldats enterrés du premier empereur.", "matin", "visit", 34.3841, 109.2785, "Xi''an"],
    ["Fosse 2 et musée du site", "Archers, chars et officiers en détail.", "apres-midi", "visit", 34.3846, 109.2780, "Xi''an"],
    ["Tour de la Cloche illuminée", "Cœur de la ville ancienne by night.", "soir", "visit", 34.2610, 108.9423, "Xi''an"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Grande pagode de l''oie sauvage", "Pagode Tang aux sutras rapportés d''Inde.", "matin", "visit", 34.2186, 108.9640, "Xi''an"],
    ["Remparts de Xi''an à vélo", "14 km de muraille Ming à parcourir en selle.", "apres-midi", "visit", 34.2662, 108.9430, "Xi''an"],
    ["Quartier musulman", "Brochettes, roujiamo et marché nocturne.", "soir", "food", 34.2632, 108.9380, "Xi''an"]]'::jsonb);
  RETURN v;
END $$;

-- Shanghai : jours 1-2 propres + excursion (Suzhou ou Hangzhou) au jour 3 ;
-- p_four ajoute un 4e jour propre.
CREATE OR REPLACE FUNCTION seed_cn_shanghai(p_group UUID, p_pos INT, p_offset INT, p_four BOOLEAN, p_exc TEXT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('CHN', 'Shanghai', 31.2304, 121.4737, CASE WHEN p_four THEN 4 ELSE 3 END, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Jardin Yu", "Jardin classique de la vieille ville, calme le matin.", "matin", "visit", 31.2272, 121.4921, "Shanghai"],
    ["Temple du Bouddha de jade et vieille ville", "Bouddhas de jade blanc puis ruelles anciennes.", "apres-midi", "visit", 31.2441, 121.4436, "Shanghai"],
    ["Le Bund et rue de Nankin illuminés", "La skyline de Pudong embrasée — LE grand spectacle nocturne de Shanghai.", "soir", "visit", 31.2400, 121.4900, "Shanghai"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Musée de Shanghai", "Bronzes, jades et calligraphies.", "matin", "visit", 31.2287, 121.4700, "Shanghai"],
    ["French Concession et Tianzifang", "Platanes, lilongs et ateliers d''artistes.", "apres-midi", "visit", 31.2103, 121.4655, "Shanghai"],
    ["Bazar du jardin Yu illuminé", "Pavillons aux lanternes dorées la nuit — à faire impérativement après la tombée du jour.", "soir", "food", 31.2270, 121.4920, "Shanghai"]]'::jsonb);
  IF p_exc = 'suzhou' THEN
    e := seed_daytrip('CHN', 'Suzhou', 31.2989, 120.5853, v, 2);
    PERFORM seed_day(e, 1, '[
      ["Jardin de l''Humble Administrateur", "Le plus célèbre jardin classique de Chine.", "matin", "nature", 31.3239, 120.6291, "Suzhou"],
      ["Colline du Tigre et canaux", "Pagode penchée et barques sur les canaux.", "apres-midi", "visit", 31.3290, 120.5766, "Suzhou"],
      ["Rue Pingjiang", "Ruelle au fil de l''eau, maisons blanches à toits noirs.", "soir", "food", 31.3200, 120.6350, "Suzhou"]]'::jsonb);
  ELSE
    e := seed_daytrip('CHN', 'Hangzhou', 30.2741, 120.1551, v, 2);
    PERFORM seed_day(e, 1, '[
      ["Lac de l''Ouest", "Croisière sur le lac classé à l''Unesco.", "matin", "nature", 30.2489, 120.1445, "Hangzhou"],
      ["Pagode Leifeng et temple Lingyin", "Bouddhas rupestres et légendes du lac.", "apres-midi", "visit", 30.2314, 120.1489, "Hangzhou"],
      ["Plantations de thé Longjing", "Dégustation du thé vert le plus réputé de Chine.", "soir", "food", 30.2210, 120.1160, "Hangzhou"]]'::jsonb);
  END IF;
  IF p_four THEN
    PERFORM seed_day(v, 4, '[
      ["Tour Shanghai (Pudong)", "Vue du 2e plus haut gratte-ciel du monde.", "matin", "visit", 31.2336, 121.5055, "Shanghai"],
      ["Xintiandi", "Shikumen restaurés, boutiques et terrasses.", "apres-midi", "shopping", 31.2205, 121.4766, "Shanghai"],
      ["Croisière sur le Huangpu", "Les deux rives illuminées depuis le fleuve.", "soir", "visit", 31.2380, 121.4920, "Shanghai"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_cn_guilin(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('CHN', 'Guilin', 25.2342, 110.1799, 3, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Colline en trompe d''éléphant", "Le symbole de Guilin au bord de la rivière Li.", "matin", "nature", 25.2695, 110.2926, "Guilin"],
    ["Grotte de la flûte de roseau", "Concrétions illuminées spectaculaires.", "apres-midi", "nature", 25.3006, 110.2665, "Guilin"],
    ["Deux fleuves et quatre lacs", "Pagodes jumelles illuminées, croisière urbaine.", "soir", "visit", 25.2740, 110.2900, "Guilin"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Croisière sur la rivière Li", "Pains de sucre karstiques entre Guilin et Yangshuo.", "matin", "nature", 25.0500, 110.4300, "Rivière Li"],
    ["Paysage du billet de 20 yuans", "Le panorama le plus célèbre de Chine.", "apres-midi", "nature", 24.7780, 110.4970, "Xingping"],
    ["Rue de l''Ouest à Yangshuo", "Ruelle animée au pied des pics.", "soir", "food", 24.7758, 110.4933, "Yangshuo"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Campagne de Yangshuo à vélo", "Rizières et villages entre les karsts.", "matin", "nature", 24.7700, 110.4800, "Yangshuo"],
    ["Colline de la Lune", "Arche naturelle et vue sur la vallée.", "apres-midi", "nature", 24.7186, 110.4830, "Yangshuo"],
    ["Spectacle Impression Liu Sanjie", "Show nocturne sur la rivière mis en scène par Zhang Yimou.", "soir", "night", 24.7770, 110.5000, "Yangshuo"]]'::jsonb);
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_cn_hongkong(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('CHN', 'Hong Kong', 22.3193, 114.1694, 3, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Star Ferry et Tsim Sha Tsui", "Traversée mythique vers Kowloon.", "matin", "visit", 22.2938, 114.1685, "Hong Kong"],
    ["Central et SoHo", "Escalators géants et ruelles en pente.", "apres-midi", "visit", 22.2820, 114.1520, "Hong Kong"],
    ["Victoria Peak de nuit", "Tram centenaire vers la baie illuminée — la vue est à couper le souffle après la tombée du jour.", "soir", "visit", 22.2759, 114.1455, "Hong Kong"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Temple Wong Tai Sin", "Temple taoïste aux diseurs de bonne aventure.", "matin", "visit", 22.3421, 114.1933, "Hong Kong"],
    ["Mong Kok", "Marchés aux poissons rouges, sneakers et dim sum.", "apres-midi", "shopping", 22.3193, 114.1694, "Hong Kong"],
    ["Marché de nuit de Temple Street", "Étals, karaoké de rue et fruits de mer.", "soir", "food", 22.3049, 114.1700, "Hong Kong"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Grand Bouddha de Lantau", "Télécabine Ngong Ping 360 vers le Bouddha géant.", "matin", "visit", 22.2540, 113.9050, "Lantau"],
    ["Monastère Po Lin et village de Tai O", "Repas végétarien et maisons sur pilotis.", "apres-midi", "visit", 22.2556, 113.9020, "Lantau"],
    ["Symphony of Lights", "La skyline en son et lumière depuis la promenade de Tsim Sha Tsui, dernière soirée.", "soir", "night", 22.2934, 114.1710, "Hong Kong"]]'::jsonb);
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── 5 jours : Pékin ───────────────────────────────────────────
  g := seed_group('CHN', 5);
  PERFORM seed_cn_beijing(g, 1, 0, true);

  -- ─── 7 jours : Pékin → Shanghai ────────────────────────────────
  g := seed_group('CHN', 7);
  PERFORM seed_cn_beijing(g, 1, 0, false);
  PERFORM seed_cn_shanghai(g, 2, 4, false, 'suzhou');

  -- ─── 10 jours : Pékin → Xi'an → Shanghai ───────────────────────
  g := seed_group('CHN', 10);
  PERFORM seed_cn_beijing(g, 1, 0, false);
  PERFORM seed_cn_xian(g, 2, 4);
  PERFORM seed_cn_shanghai(g, 3, 6, true, 'suzhou');

  -- ─── 14 jours : Sud & paysages ─────────────────────────────────
  g := seed_group('CHN', 14);
  PERFORM seed_cn_shanghai(g, 1, 0, false, 'hangzhou');
  PERFORM seed_cn_guilin(g, 2, 3);
  c := seed_city('CHN', 'Kunming', 25.0389, 102.7183, 1, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Forêt de pierre", "Labyrinthe de pitons karstiques classé à l''Unesco.", "matin", "nature", 24.8143, 103.3200, "Shilin"],
    ["Lac Dianchi et temple Yuantong", "Le lac des mouettes et un temple millénaire.", "apres-midi", "visit", 25.0510, 102.7050, "Kunming"],
    ["Vieux quartiers de Kunming", "Marché aux fleurs et aux oiseaux.", "soir", "food", 25.0430, 102.7060, "Kunming"]]'::jsonb);
  c := seed_city('CHN', 'Dali', 25.6065, 100.2676, 2, g, 4, 7);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville de Dali", "Portes fortifiées et maisons bai.", "matin", "visit", 25.6930, 100.1620, "Dali"],
    ["Trois pagodes du temple Chongsheng", "Trio de pagodes millénaires face aux monts Cangshan.", "apres-midi", "visit", 25.7060, 100.1450, "Dali"],
    ["Porte sud illuminée", "Ruelles animées de la vieille ville.", "soir", "night", 25.6890, 100.1630, "Dali"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Lac Erhai à vélo", "Villages de pêcheurs et rives paisibles.", "matin", "nature", 25.7900, 100.1880, "Dali"],
    ["Village de Xizhou", "Architecture bai et galettes locales.", "apres-midi", "visit", 25.8390, 100.1400, "Xizhou"],
    ["Coucher de soleil sur le lac", "Depuis les pontons de la rive ouest.", "soir", "nature", 25.7700, 100.1900, "Dali"]]'::jsonb);
  c := seed_city('CHN', 'Lijiang', 26.8721, 100.2299, 2, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville de Lijiang", "Canaux, ponts et toits naxi classés à l''Unesco.", "matin", "visit", 26.8768, 100.2334, "Lijiang"],
    ["Parc de l''étang du Dragon noir", "La montagne enneigée reflétée dans l''étang.", "apres-midi", "nature", 26.8880, 100.2330, "Lijiang"],
    ["Place Sifang", "Danses naxi et lanternes le soir.", "soir", "night", 26.8760, 100.2330, "Lijiang"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Montagne enneigée du Dragon de jade", "Téléphérique à 4 506 m face aux glaciers.", "matin", "nature", 27.1010, 100.1660, "Lijiang"],
    ["Vallée de la Lune bleue", "Lacs turquoise en terrasses.", "apres-midi", "nature", 27.0700, 100.2100, "Lijiang"],
    ["Impression Lijiang", "Spectacle en plein air à 3 100 m d''altitude.", "soir", "night", 27.0900, 100.1800, "Lijiang"]]'::jsonb);
  PERFORM seed_cn_hongkong(g, 6, 11);

  -- ─── 18 jours : Grand tour ─────────────────────────────────────
  g := seed_group('CHN', 18);
  PERFORM seed_cn_beijing(g, 1, 0, false);
  PERFORM seed_cn_xian(g, 2, 4);
  c := seed_city('CHN', 'Chengdu', 30.5728, 104.0668, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Base des pandas géants", "Nurserie et bambouseraies des pandas.", "matin", "nature", 30.7340, 104.1470, "Chengdu"],
    ["Ruelle large et ruelle étroite", "Kuanzhai Xiangzi, maisons de thé et opéra du Sichuan.", "apres-midi", "visit", 30.6690, 104.0550, "Chengdu"],
    ["Fondue du Sichuan", "Hotpot au poivre qui engourdit les lèvres.", "soir", "food", 30.6600, 104.0800, "Chengdu"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Grand Bouddha de Leshan", "71 m taillés dans la falaise au confluent des fleuves.", "matin", "visit", 29.5446, 103.7731, "Leshan"],
    ["Descente en bateau devant le Bouddha", "La statue entière depuis la rivière.", "apres-midi", "visit", 29.5500, 103.7770, "Leshan"],
    ["Quartier Jinli", "Lampions rouges et snacks du Sichuan.", "soir", "food", 30.6420, 104.0480, "Chengdu"]]'::jsonb);
  PERFORM seed_cn_guilin(g, 4, 8);
  PERFORM seed_cn_shanghai(g, 5, 11, true, 'suzhou');
  PERFORM seed_cn_hongkong(g, 6, 15);
END $$;

DROP FUNCTION IF EXISTS seed_cn_beijing(UUID, INT, INT, BOOLEAN);
DROP FUNCTION IF EXISTS seed_cn_xian(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_cn_shanghai(UUID, INT, INT, BOOLEAN, TEXT);
DROP FUNCTION IF EXISTS seed_cn_guilin(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_cn_hongkong(UUID, INT, INT);
