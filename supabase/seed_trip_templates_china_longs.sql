-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Chine voyages LONGS (après helpers ; fichier
-- AUTONOME : à exécuter une seule fois, ne touche pas aux seeds déjà passés)
--   - 21 jours DENSE : Pékin (5j, + Grande Muraille) → Xi'an (2j) →
--     Chengdu (2j) → Guilin (3j) → Suzhou (1j) → Shanghai (3j) →
--     Hangzhou (2j) → Hong Kong (3j). Variante chargée du 18j chill v1.
--     Trajet nord → centre → sud-ouest, puis vol vers le delta du Yangzi
--     (Suzhou → Shanghai → Hangzhou suit la ligne de train, Shanghai est
--     ENTRE les deux), vol final vers Hong Kong (aéroport international).
--     Journées reprises des circuits denses de china_v2, sauf le jour 5
--     de Pékin (798/parc olympique/Nanluoguxiang), inédit.
-- Relance : DELETE l'éditorial CHN puis rejouer china.sql, china_v2.sql ET ce fichier.
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('CHN', 21);

  -- Pékin (5 jours : 4 propres + 1 excursion Grande Muraille en jour 3).
  c := seed_city('CHN', 'Pékin', 39.9042, 116.4074, 5, g, 1, 0);
  -- J1 axe impérial SUD → NORD : Tian''anmen → Cité interdite traversée
  -- vers le nord → Jingshan (face à la sortie nord) → Beihai à l''ouest.
  PERFORM seed_day(c, 1, '[
    ["Place Tian''anmen", "La plus grande place du monde, porte sud de l''axe impérial.", "matin", "visit", 39.9055, 116.3976, "Dongcheng, Pékin"],
    ["Cité interdite", "999 salles traversées du sud au nord, sortie porte du Génie militaire.", "matin", "visit", 39.9163, 116.3972, "Dongcheng, Pékin"],
    ["Parc Jingshan", "La colline de charbon face à la sortie nord : toute la Cité aux pieds.", "apres-midi", "nature", 39.9280, 116.3960, "Dongcheng, Pékin"],
    ["Parc Beihai", "Le lac impérial et son dagoba blanc, juste à l''ouest.", "apres-midi", "nature", 39.9250, 116.3830, "Xicheng, Pékin"],
    ["Rue Wangfujing", "Snacks et grands magasins pour la première soirée.", "soir", "food", 39.9150, 116.4110, "Dongcheng, Pékin"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Temple du Ciel", "La rotonde aux tuiles bleues où l''empereur priait pour les moissons.", "matin", "visit", 39.8822, 116.4066, "Dongcheng, Pékin"],
    ["Hutongs de Shichahai en cyclo-pousse", "Les ruelles grises du vieux Pékin autour des lacs.", "apres-midi", "visit", 39.9400, 116.3830, "Xicheng, Pékin"],
    ["Tour du Tambour et tour de la Cloche", "Les gardiennes du temps de la vieille ville.", "apres-midi", "visit", 39.9400, 116.3900, "Dongcheng, Pékin"],
    ["Lac Houhai", "Bars et lanternes au bord de l''eau.", "soir", "night", 39.9410, 116.3840, "Xicheng, Pékin"]]'::jsonb);
  e := seed_daytrip('CHN', 'Mutianyu', 40.4319, 116.5704, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Grande Muraille de Mutianyu", "Montée en téléphérique, crénaux et tours de guet sur les crêtes.", "matin", "visit", 40.4319, 116.5704, "Huairou, Pékin"],
    ["Marche de tour en tour", "Le tronçon restauré le plus photogénique, moins couru que Badaling.", "apres-midi", "nature", 40.4330, 116.5650, "Mutianyu"],
    ["Canard laqué de retour à Pékin", "Le dîner emblématique découpé en salle.", "soir", "food", 39.9110, 116.4110, "Pékin"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Palais d''Été", "Le lac Kunming, la galerie peinte et le bateau de marbre.", "matin", "visit", 39.9990, 116.2755, "Haidian, Pékin"],
    ["Temple des Lamas (Yonghe)", "Le Bouddha de 18 m taillé dans un seul santal.", "apres-midi", "visit", 39.9470, 116.4170, "Dongcheng, Pékin"],
    ["Temple de Confucius", "Stèles et cyprès millénaires, dans la même rue.", "apres-midi", "visit", 39.9480, 116.4130, "Dongcheng, Pékin"],
    ["Spectacle d''acrobates", "Voltige et contorsions, tradition pékinoise.", "soir", "night", 39.9000, 116.4200, "Pékin"]]'::jsonb);
  -- J5 (inédit) : 798 au nord-est → parc olympique au nord → redescente
  -- sur les hutongs de Nanluoguxiang pour la dernière soirée pékinoise.
  PERFORM seed_day(c, 5, '[
    ["798 Art District", "Les usines Bauhaus devenues galeries d''art contemporain.", "matin", "visit", 39.9840, 116.4950, "Chaoyang, Pékin"],
    ["Parc olympique et Nid d''oiseau", "Le stade de 2008 et le Cube d''eau.", "apres-midi", "visit", 39.9910, 116.3970, "Chaoyang, Pékin"],
    ["Nanluoguxiang", "Le hutong le plus animé, snacks et échoppes.", "apres-midi", "food", 39.9370, 116.4030, "Dongcheng, Pékin"],
    ["Dîner de jiaozi dans les hutongs", "Raviolis vapeur avant le train pour Xi''an.", "soir", "food", 39.9360, 116.4040, "Dongcheng, Pékin"]]'::jsonb);

  -- Xi'an (2 jours).
  c := seed_city('CHN', 'Xi''an', 34.3416, 108.9398, 2, g, 2, 5);
  PERFORM seed_day(c, 1, '[
    ["Armée de terre cuite", "8 000 soldats d''argile gardant le premier empereur.", "matin", "visit", 34.3841, 109.2785, "Lintong, Xi''an"],
    ["Remparts de Xi''an à vélo", "14 km de murailles Ming complètes, tour à vélo.", "apres-midi", "visit", 34.2658, 108.9440, "Xi''an"],
    ["Quartier musulman", "Brochettes d''agneau et roujiamo dans les ruelles Hui.", "soir", "food", 34.2630, 108.9380, "Xi''an"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Grande pagode de l''Oie sauvage", "La pagode Tang des sutras rapportés d''Inde.", "matin", "visit", 34.2180, 108.9640, "Yanta, Xi''an"],
    ["Musée d''histoire du Shaanxi", "Bronzes et Tang tricolores, 3 000 ans de Chine.", "apres-midi", "visit", 34.2220, 108.9530, "Xi''an"],
    ["Fontaines musicales et tour de la Cloche illuminée", "Le grand spectacle d''eau au pied de la pagode.", "soir", "visit", 34.2200, 108.9640, "Xi''an"]]'::jsonb);

  -- Chengdu (2 jours).
  c := seed_city('CHN', 'Chengdu', 30.5728, 104.0668, 2, g, 3, 7);
  PERFORM seed_day(c, 1, '[
    ["Base des pandas géants", "Les pandas au petit-déjeuner de bambou, dès l''ouverture.", "matin", "nature", 30.7330, 104.1440, "Chenghua, Chengdu"],
    ["Monastère Wenshu", "Le grand temple chan et sa maison de thé.", "apres-midi", "visit", 30.6740, 104.0720, "Chengdu"],
    ["Maison de thé du parc du Peuple", "Thé au jasmin, nettoyeurs d''oreilles et mahjong.", "apres-midi", "food", 30.6620, 104.0610, "Chengdu"],
    ["Opéra du Sichuan", "Le bianlian : les masques qui changent en un souffle.", "soir", "night", 30.6650, 104.0550, "Chengdu"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Temple Wuhou", "Le mémorial des héros des Trois Royaumes.", "matin", "visit", 30.6420, 104.0440, "Wuhou, Chengdu"],
    ["Ruelle Jinli", "Lanternes, snacks et artisanat, adjacente au temple.", "apres-midi", "food", 30.6425, 104.0450, "Chengdu"],
    ["Hotpot sichuanais", "Le chaudron rouge au poivre qui engourdit, rite de passage.", "soir", "food", 30.6600, 104.0650, "Chengdu"]]'::jsonb);

  -- Guilin (3 jours).
  c := seed_city('CHN', 'Guilin', 25.2342, 110.1799, 3, g, 4, 9);
  PERFORM seed_day(c, 1, '[
    ["Colline en trompe d''Éléphant", "Le rocher qui boit dans la rivière Li, symbole de Guilin.", "matin", "nature", 25.2700, 110.2950, "Guilin"],
    ["Grotte de la Flûte de roseau", "Concrétions illuminées dans le palais souterrain.", "apres-midi", "nature", 25.3050, 110.2680, "Guilin"],
    ["Lacs Shan et Rong", "Promenade des deux lacs au centre-ville.", "apres-midi", "nature", 25.2760, 110.2900, "Guilin"],
    ["Pagodes du Soleil et de la Lune illuminées", "Or et argent reflétés dans le lac Shan.", "soir", "visit", 25.2740, 110.2920, "Guilin"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Croisière sur la rivière Li", "Quatre heures entre les pains de sucre jusqu''à Yangshuo.", "matin", "nature", 25.0000, 110.4000, "Rivière Li"],
    ["Rue Ouest de Yangshuo", "Vélos, cafés et karsts au bout de la croisière.", "apres-midi", "visit", 24.7780, 110.4970, "Yangshuo"],
    ["Impression Liu Sanjie", "600 figurants sur la rivière, mise en scène de Zhang Yimou.", "soir", "night", 24.7790, 110.5000, "Yangshuo"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Rizières en terrasses de Longji", "L''échine du Dragon sculptée depuis 700 ans.", "matin", "nature", 25.7550, 110.0170, "Longsheng"],
    ["Villages Zhuang et Yao", "Maisons de bois et cheveux longs des femmes Yao.", "apres-midi", "visit", 25.7500, 110.0200, "Longsheng"],
    ["Retour et dernière soirée à Guilin", "Nouilles de riz de Guilin, la spécialité.", "soir", "food", 25.2780, 110.2900, "Guilin"]]'::jsonb);

  -- Suzhou (1 jour) — vol vers le delta du Yangzi.
  c := seed_city('CHN', 'Suzhou', 31.2989, 120.5853, 1, g, 5, 12);
  PERFORM seed_day(c, 1, '[
    ["Jardin de l''Humble Administrateur", "Le plus grand jardin classique de Chine, pavillons et lotus.", "matin", "nature", 31.3230, 120.6290, "Suzhou"],
    ["Musée de Suzhou", "Le testament architectural de I. M. Pei, adjacent au jardin.", "matin", "visit", 31.3220, 120.6270, "Suzhou"],
    ["Rue Pingjiang", "Canal, maisons blanches et ponts de pierre de la vieille ville.", "apres-midi", "visit", 31.3180, 120.6330, "Suzhou"],
    ["Colline du Tigre", "La pagode penchée de Suzhou sur son tumulus légendaire.", "apres-midi", "visit", 31.3290, 120.5760, "Suzhou"],
    ["Rue Shantang illuminée", "Lanternes rouges sur l''eau, la Venise de l''Est by night.", "soir", "visit", 31.3130, 120.6010, "Suzhou"]]'::jsonb);

  -- Shanghai (3 jours) — ENTRE Suzhou et Hangzhou sur la ligne de train.
  c := seed_city('CHN', 'Shanghai', 31.2304, 121.4737, 3, g, 6, 13);
  PERFORM seed_day(c, 1, '[
    ["Jardin Yu et bazar", "Rocailles Ming et maison de thé au cœur de la vieille ville.", "matin", "nature", 31.2270, 121.4920, "Huangpu, Shanghai"],
    ["Musée de Shanghai", "Bronzes et céramiques sur la place du Peuple.", "apres-midi", "visit", 31.2280, 121.4750, "People''s Square, Shanghai"],
    ["Rue de Nankin", "L''artère commerçante mythique jusqu''au fleuve.", "apres-midi", "shopping", 31.2350, 121.4800, "Huangpu, Shanghai"],
    ["Le Bund illuminé", "Les façades 1920 face aux tours de Pudong.", "soir", "visit", 31.2400, 121.4900, "Le Bund, Shanghai"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Shanghai Tower", "632 m, l''ascenseur le plus rapide du monde.", "matin", "visit", 31.2336, 121.5055, "Lujiazui, Shanghai"],
    ["Tianzifang", "Lilongs d''artistes de la concession française.", "apres-midi", "shopping", 31.2100, 121.4660, "Concession française, Shanghai"],
    ["Avenue Wukang et platanes", "Villas 1930 sous les feuillages, le Shanghai élégant.", "apres-midi", "visit", 31.2050, 121.4370, "Concession française, Shanghai"],
    ["Xintiandi", "Shikumen restaurés, terrasses et vie nocturne.", "soir", "night", 31.2190, 121.4760, "Xintiandi, Shanghai"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Zhujiajiao", "Ponts en dos d''âne et canaux de la ville d''eau, à 1 h du centre.", "matin", "visit", 31.1110, 121.0530, "Qingpu, Shanghai"],
    ["M50 Art District", "Les entrepôts d''art contemporain au bord du Suzhou Creek.", "apres-midi", "visit", 31.2500, 121.4470, "Putuo, Shanghai"],
    ["Acrobates de Shanghai", "Le spectacle de voltige légendaire.", "soir", "night", 31.2280, 121.4590, "Shanghai"]]'::jsonb);

  -- Hangzhou (2 jours).
  c := seed_city('CHN', 'Hangzhou', 30.2741, 120.1551, 2, g, 7, 16);
  PERFORM seed_day(c, 1, '[
    ["Croisière sur le lac de l''Ouest", "Îles et digues du paysage classé le plus célèbre de Chine.", "matin", "nature", 30.2500, 120.1450, "Xihu, Hangzhou"],
    ["Pagode Leifeng", "La légende du Serpent blanc au-dessus de la rive sud.", "apres-midi", "visit", 30.2320, 120.1490, "Xihu, Hangzhou"],
    ["Temple Jingci", "La cloche du soir de Nanping, en face de la pagode.", "apres-midi", "visit", 30.2310, 120.1520, "Xihu, Hangzhou"],
    ["Impression West Lake", "Le spectacle nocturne joué SUR l''eau du lac.", "soir", "night", 30.2530, 120.1400, "Xihu, Hangzhou"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Temple Lingyin et Feilai Feng", "Bouddhas rupestres et l''un des plus grands temples chan.", "matin", "visit", 30.2410, 120.0990, "Hangzhou"],
    ["Village de thé de Longjing", "Les terrasses du thé vert le plus réputé de Chine, dégustation.", "apres-midi", "nature", 30.2200, 120.1160, "Longjing, Hangzhou"],
    ["Rue Hefang", "Échoppes traditionnelles avant le vol vers Hong Kong.", "soir", "shopping", 30.2400, 120.1650, "Hangzhou"]]'::jsonb);

  -- Hong Kong (3 jours) — final, aéroport international.
  c := seed_city('CHN', 'Hong Kong', 22.3193, 114.1694, 3, g, 8, 18);
  PERFORM seed_day(c, 1, '[
    ["Victoria Peak en Peak Tram", "La skyline la plus célèbre d''Asie depuis le sommet.", "matin", "visit", 22.2710, 114.1500, "The Peak, Hong Kong"],
    ["Escalators de Mid-Levels et temple Man Mo", "Descente dans Central, encens en spirale.", "apres-midi", "visit", 22.2830, 114.1550, "Central, Hong Kong"],
    ["Star Ferry vers Kowloon", "La traversée mythique du port Victoria au couchant.", "apres-midi", "visit", 22.2870, 114.1610, "Central, Hong Kong"],
    ["Symphony of Lights à Tsim Sha Tsui", "La baie illuminée depuis l''Avenue of Stars.", "soir", "visit", 22.2940, 114.1690, "Tsim Sha Tsui, Hong Kong"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Big Buddha de Lantau", "Téléphérique Ngong Ping 360 et Bouddha de bronze géant.", "matin", "visit", 22.2540, 113.9050, "Lantau, Hong Kong"],
    ["Village de pêcheurs de Tai O", "Maisons sur pilotis et dauphins roses, au bout de l''île.", "apres-midi", "visit", 22.2560, 113.8620, "Lantau, Hong Kong"],
    ["Temple Street Night Market", "Diseuses de bonne aventure et fruits de mer de rue.", "soir", "food", 22.3050, 114.1700, "Jordan, Hong Kong"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Marchés de Mong Kok", "Marché aux poissons rouges, aux fleurs et aux oiseaux.", "matin", "shopping", 22.3190, 114.1700, "Mong Kok, Hong Kong"],
    ["Temple Wong Tai Sin", "Bâtons de divination dans le temple le plus fréquenté.", "apres-midi", "visit", 22.3420, 114.1930, "Wong Tai Sin, Hong Kong"],
    ["Jardin Nan Lian et nonnerie Chi Lin", "Architecture Tang sans un seul clou, tout à côté.", "apres-midi", "nature", 22.3400, 114.2040, "Diamond Hill, Hong Kong"],
    ["Lan Kwai Fong", "Dernière soirée du voyage dans les rues en pente de Central.", "soir", "night", 22.2810, 114.1550, "Central, Hong Kong"]]'::jsonb);
END $$;
