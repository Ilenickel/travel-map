-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Turquie (après seed_trip_templates_helpers.sql)
--   - 5 jours  : Istanbul
--   - 10 jours : Istanbul → Cappadoce (Göreme) → Izmir (+ Éphèse, + Pamukkale)
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'TUR';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'TUR';
-- ════════════════════════════════════════════════════════════════

-- p_days = 4, 5 ou 6 (variante enrichie : + excursion îles des Princes).
CREATE OR REPLACE FUNCTION seed_tr_istanbul(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('TUR', 'Istanbul', 41.0082, 28.9784, p_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Sainte-Sophie", "Basilique, mosquée, chef-d''œuvre byzantin.", "matin", "visit", 41.0086, 28.9802, "Istanbul"],
    ["Mosquée bleue et Hippodrome", "Six minarets et obélisques antiques.", "apres-midi", "visit", 41.0054, 28.9768, "Istanbul"],
    ["Sultanahmet au crépuscule", "Terrasses face aux coupoles illuminées.", "soir", "food", 41.0058, 28.9784, "Istanbul"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Palais de Topkapi", "Harem, trésor et cours des sultans ottomans.", "matin", "visit", 41.0115, 28.9834, "Istanbul"],
    ["Citerne basilique", "Forêt de colonnes sous la ville, têtes de Méduse.", "apres-midi", "visit", 41.0084, 28.9779, "Istanbul"],
    ["Grand bazar", "4 000 boutiques sous les voûtes peintes.", "soir", "shopping", 41.0106, 28.9681, "Istanbul"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Croisière sur le Bosphore", "Entre deux continents, palais et forteresses.", "matin", "visit", 41.0212, 28.9744, "Istanbul"],
    ["Palais de Dolmabahçe", "Le Versailles ottoman au bord de l''eau.", "apres-midi", "visit", 41.0392, 29.0004, "Istanbul"],
    ["Ortaköy", "Mosquée au pied du pont, kumpir et vue.", "soir", "food", 41.0472, 29.0270, "Istanbul"]]'::jsonb);
  PERFORM seed_day(v, 4, '[
    ["Mosquée de Soliman", "Chef-d''œuvre de Sinan dominant la Corne d''Or.", "matin", "visit", 41.0165, 28.9640, "Istanbul"],
    ["Bazar égyptien et pont de Galata", "Épices et pêcheurs sur le pont.", "apres-midi", "shopping", 41.0166, 28.9709, "Istanbul"],
    ["Tour de Galata et Istiklal", "Panorama puis artère animée de Beyoğlu.", "soir", "night", 41.0256, 28.9744, "Istanbul"]]'::jsonb);
  IF p_days >= 5 THEN
    PERFORM seed_day(v, 5, '[
      ["Kadıköy (rive asiatique)", "Ferry vers l''Asie, marché et street art de Moda.", "matin", "food", 40.9906, 29.0250, "Istanbul"],
      ["Üsküdar et tour de Léandre", "Rivage asiatique face à la vieille ville.", "apres-midi", "visit", 41.0226, 29.0078, "Istanbul"],
      ["Balat et Fener", "Maisons colorées et cafés du vieil Istanbul grec.", "soir", "visit", 41.0292, 28.9490, "Istanbul"]]'::jsonb);
  END IF;
  IF p_days >= 6 THEN
    e := seed_daytrip('TUR', 'Büyükada', 40.8590, 29.1187, v, 5);
    PERFORM seed_day(e, 1, '[
      ["Ferry vers les îles des Princes", "Traversée de la mer de Marmara vers Büyükada.", "matin", "visit", 40.8590, 29.1187, "Büyükada"],
      ["Tour de l''île à vélo", "Demeures ottomanes en bois, aucune voiture.", "apres-midi", "nature", 40.8560, 29.1150, "Büyükada"],
      ["Poisson au port et retour au couchant", "Marmara dorée depuis le ferry.", "soir", "food", 40.8600, 29.1210, "Büyükada"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 5 jours : Istanbul ────────────────────────────────────────
  g := seed_group('TUR', 5);
  PERFORM seed_tr_istanbul(g, 1, 0, 5);

  -- ─── 6 jours : Istanbul enrichi (+ îles des Princes) ───────────
  g := seed_group('TUR', 6);
  PERFORM seed_tr_istanbul(g, 1, 0, 6);

  -- ─── 10 jours : Istanbul → Cappadoce → côte égéenne ────────────
  g := seed_group('TUR', 10);
  PERFORM seed_tr_istanbul(g, 1, 0, 4);
  c := seed_city('TUR', 'Göreme', 38.6431, 34.8289, 3, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Vol en montgolfière", "Lever de soleil au-dessus des cheminées de fées.", "matin", "nature", 38.6431, 34.8289, "Göreme"],
    ["Musée en plein air de Göreme", "Églises rupestres aux fresques byzantines.", "apres-midi", "visit", 38.6420, 34.8460, "Göreme"],
    ["Coucher de soleil à Sunset Point", "La vallée rougeoyante depuis les crêtes.", "soir", "nature", 38.6440, 34.8330, "Göreme"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Vallée d''Ihlara", "Canyon verdoyant et églises troglodytes.", "matin", "nature", 38.2540, 34.3090, "Ihlara"],
    ["Ville souterraine de Derinkuyu", "Huit niveaux creusés sous terre.", "apres-midi", "visit", 38.3735, 34.7345, "Derinkuyu"],
    ["Dîner cave et danse des derviches", "Soirée traditionnelle troglodyte.", "soir", "night", 38.6430, 34.8280, "Göreme"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Vallée de Pasabag", "Cheminées de fées à triple tête.", "matin", "nature", 38.6660, 34.8570, "Pasabag"],
    ["Citadelle d''Uçhisar", "Piton criblé de galeries, panorama total.", "apres-midi", "visit", 38.6300, 34.8050, "Uçhisar"],
    ["Poterie à Avanos", "Ateliers au bord du Kızılırmak.", "soir", "shopping", 38.7150, 34.8460, "Avanos"]]'::jsonb);
  c := seed_city('TUR', 'Izmir', 38.4237, 27.1428, 3, g, 3, 7);
  e := seed_daytrip('TUR', 'Éphèse', 37.9411, 27.3419, c, 0);
  PERFORM seed_day(e, 1, '[
    ["Bibliothèque de Celsus", "Façade emblématique de la cité antique.", "matin", "visit", 37.9394, 27.3408, "Éphèse"],
    ["Grand théâtre et rue de Marbre", "25 000 places face à l''ancienne mer.", "apres-midi", "visit", 37.9410, 27.3430, "Éphèse"],
    ["Selçuk et basilique Saint-Jean", "Tombeau de l''apôtre au-dessus de la plaine.", "soir", "visit", 37.9510, 27.3680, "Selçuk"]]'::jsonb);
  e := seed_daytrip('TUR', 'Pamukkale', 37.9203, 29.1206, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Vasques de travertin", "Cascades pétrifiées d''un blanc éclatant.", "matin", "nature", 37.9203, 29.1206, "Pamukkale"],
    ["Hiérapolis", "Nécropole et théâtre antique au-dessus des vasques.", "apres-midi", "visit", 37.9260, 29.1260, "Pamukkale"],
    ["Piscine antique de Cléopâtre", "Baignade parmi les colonnes immergées.", "soir", "visit", 37.9240, 29.1230, "Pamukkale"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Place Konak et tour de l''Horloge", "Symbole d''Izmir face à la mer Égée.", "matin", "visit", 38.4189, 27.1287, "Izmir"],
    ["Agora antique et bazar de Kemeraltı", "Ruines romaines et souk labyrinthique.", "apres-midi", "shopping", 38.4180, 27.1380, "Izmir"],
    ["Kordon au couchant", "Front de mer, meze et raki avant le départ.", "soir", "food", 38.4330, 27.1420, "Izmir"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_tr_istanbul(UUID, INT, INT, INT);
