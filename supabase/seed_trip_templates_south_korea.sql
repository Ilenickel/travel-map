-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Corée du Sud (après seed_trip_templates_helpers.sql)
--   - 6 jours : Séoul (+ DMZ) → Busan
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'KOR';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'KOR';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('KOR', 6);
  c := seed_city('KOR', 'Séoul', 37.5665, 126.9780, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Palais Gyeongbokgung", "Relève de la garde en costume Joseon.", "matin", "visit", 37.5796, 126.9770, "Séoul"],
    ["Village hanok de Bukchon", "Ruelles de maisons traditionnelles.", "apres-midi", "visit", 37.5826, 126.9850, "Séoul"],
    ["Insadong", "Thé, calligraphie et artisanat.", "soir", "shopping", 37.5740, 126.9850, "Séoul"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Palais Changdeokgung et jardin secret", "Le palais Unesco et son Huwon.", "matin", "visit", 37.5794, 126.9910, "Séoul"],
    ["Myeongdong", "Street food et cosmétiques coréennes.", "apres-midi", "shopping", 37.5637, 126.9838, "Séoul"],
    ["N Seoul Tower", "La ville immense depuis le mont Namsan.", "soir", "visit", 37.5512, 126.9882, "Séoul"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Marché de Gwangjang", "Bindaetteok et kimbap au coude à coude.", "matin", "food", 37.5700, 126.9990, "Séoul"],
    ["Dongdaemun Design Plaza", "La vague d''argent de Zaha Hadid.", "apres-midi", "visit", 37.5665, 127.0092, "Séoul"],
    ["Hongdae", "Buskers, néons et noraebang.", "soir", "night", 37.5560, 126.9220, "Séoul"]]'::jsonb);
  e := seed_daytrip('KOR', 'DMZ', 37.9566, 126.6770, c, 3);
  PERFORM seed_day(e, 1, '[
    ["Zone démilitarisée (DMZ)", "La frontière la plus gardée du monde.", "matin", "visit", 37.9566, 126.6770, "Paju"],
    ["3e tunnel d''infiltration et observatoire Dora", "La Corée du Nord à la jumelle.", "apres-midi", "visit", 37.9160, 126.6900, "Paju"],
    ["Retour et bords du fleuve Han", "Pique-nique coréen au parc Yeouido.", "soir", "nature", 37.5280, 126.9340, "Séoul"]]'::jsonb);
  c := seed_city('KOR', 'Busan', 35.1796, 129.0756, 2, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Village culturel de Gamcheon", "Le Machu Picchu coloré de Busan.", "matin", "visit", 35.0975, 129.0106, "Busan"],
    ["Marché aux poissons de Jagalchi", "Le plus grand marché de la mer de Corée.", "apres-midi", "food", 35.0966, 129.0306, "Busan"],
    ["Plage de Haeundae", "Front de mer et gratte-ciel illuminés.", "soir", "beach", 35.1587, 129.1604, "Busan"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Temple Haedong Yonggungsa", "Le temple posé sur les rochers face à la mer.", "matin", "visit", 35.1884, 129.2233, "Busan"],
    ["Plage de Gwangalli", "Le pont Gwangan en toile de fond.", "apres-midi", "beach", 35.1532, 129.1187, "Busan"],
    ["Grillades coréennes", "Samgyeopsal et soju avant le KTX du retour.", "soir", "food", 35.1600, 129.0600, "Busan"]]'::jsonb);
END $$;


-- ════════════════════════════════════════════════════════════════
-- Variante enrichie : Séoul 5 jours (+ Gangnam, Lotte World Tower, Itaewon)
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('KOR', 5);
  c := seed_city('KOR', 'Séoul', 37.5665, 126.9780, 5, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Palais Gyeongbokgung", "Relève de la garde en costume Joseon.", "matin", "visit", 37.5796, 126.9770, "Séoul"],
    ["Village hanok de Bukchon", "Ruelles de maisons traditionnelles.", "apres-midi", "visit", 37.5826, 126.9850, "Séoul"],
    ["Insadong", "Thé, calligraphie et artisanat.", "soir", "shopping", 37.5740, 126.9850, "Séoul"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Palais Changdeokgung et jardin secret", "Le palais Unesco et son Huwon.", "matin", "visit", 37.5794, 126.9910, "Séoul"],
    ["Myeongdong", "Street food et cosmétiques coréennes.", "apres-midi", "shopping", 37.5637, 126.9838, "Séoul"],
    ["N Seoul Tower", "La ville immense depuis le mont Namsan.", "soir", "visit", 37.5512, 126.9882, "Séoul"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Marché de Gwangjang", "Bindaetteok et kimbap au coude à coude.", "matin", "food", 37.5700, 126.9990, "Séoul"],
    ["Dongdaemun Design Plaza", "La vague d''argent de Zaha Hadid.", "apres-midi", "visit", 37.5665, 127.0092, "Séoul"],
    ["Hongdae", "Buskers, néons et noraebang.", "soir", "night", 37.5560, 126.9220, "Séoul"]]'::jsonb);
  e := seed_daytrip('KOR', 'DMZ', 37.9566, 126.6770, c, 3);
  PERFORM seed_day(e, 1, '[
    ["Zone démilitarisée (DMZ)", "La frontière la plus gardée du monde.", "matin", "visit", 37.9566, 126.6770, "Paju"],
    ["3e tunnel d''infiltration et observatoire Dora", "La Corée du Nord à la jumelle.", "apres-midi", "visit", 37.9160, 126.6900, "Paju"],
    ["Retour et bords du fleuve Han", "Pique-nique coréen au parc Yeouido.", "soir", "nature", 37.5280, 126.9340, "Séoul"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Lotte World Tower (Seoul Sky)", "Observatoire au 123e étage, plancher de verre.", "matin", "visit", 37.5126, 127.1025, "Séoul"],
    ["Gangnam et bibliothèque Starfield (COEX)", "Le quartier de la K-pop et sa bibliothèque cathédrale.", "apres-midi", "visit", 37.5100, 127.0590, "Séoul"],
    ["Itaewon", "Quartier cosmopolite, dernière soirée coréenne.", "soir", "night", 37.5345, 126.9946, "Séoul"]]'::jsonb);
END $$;
