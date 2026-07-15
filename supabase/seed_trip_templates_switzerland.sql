-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Suisse (après seed_trip_templates_helpers.sql)
--   - 6 jours : Genève (+ Montreux) → Interlaken (+ Jungfraujoch) → Lucerne → Zurich
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'CHE';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'CHE';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('CHE', 6);
  c := seed_city('CHE', 'Genève', 46.2044, 6.1432, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Jet d''eau et rade de Genève", "140 m d''eau au-dessus du Léman.", "matin", "visit", 46.2074, 6.1557, "Genève"],
    ["Vieille ville et cathédrale Saint-Pierre", "Tours panoramiques et Genève de Calvin.", "apres-midi", "visit", 46.2010, 6.1480, "Genève"],
    ["Quais du Léman", "Fondue au bord de l''eau.", "soir", "food", 46.2080, 6.1500, "Genève"]]'::jsonb);
  e := seed_daytrip('CHE', 'Montreux', 46.4312, 6.9107, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Château de Chillon", "Forteresse posée sur les eaux du Léman.", "matin", "visit", 46.4142, 6.9273, "Veytaux"],
    ["Quais fleuris de Montreux", "Statue de Freddie Mercury et riviera lémanique.", "apres-midi", "visit", 46.4310, 6.9110, "Montreux"],
    ["Terrasses de Lavaux", "Vignobles Unesco au-dessus du lac.", "soir", "nature", 46.4920, 6.7440, "Lavaux"]]'::jsonb);
  c := seed_city('CHE', 'Interlaken', 46.6863, 7.8632, 2, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Harder Kulm", "Funiculaire vers la vue sur les deux lacs.", "matin", "nature", 46.6970, 7.8560, "Interlaken"],
    ["Croisière sur le lac de Brienz", "Eaux turquoise entre les parois.", "apres-midi", "nature", 46.7260, 7.9650, "Brienz"],
    ["Höheweg", "L''esplanade face à la Jungfrau.", "soir", "visit", 46.6860, 7.8600, "Interlaken"]]'::jsonb);
  e := seed_daytrip('CHE', 'Jungfraujoch', 46.5474, 7.9857, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Train à crémaillère du Jungfraujoch", "Montée au Top of Europe à 3 454 m.", "matin", "nature", 46.5474, 7.9857, "Jungfraujoch"],
    ["Palais des glaces et plateau", "Glacier d''Aletsch à perte de vue.", "apres-midi", "nature", 46.5470, 7.9850, "Jungfraujoch"],
    ["Lauterbrunnen et ses cascades", "La vallée aux 72 chutes au retour.", "soir", "nature", 46.5936, 7.9081, "Lauterbrunnen"]]'::jsonb);
  c := seed_city('CHE', 'Lucerne', 47.0502, 8.3093, 1, g, 3, 4);
  PERFORM seed_day(c, 1, '[
    ["Pont de la Chapelle", "Le pont de bois fleuri du XIVe siècle.", "matin", "visit", 47.0517, 8.3072, "Lucerne"],
    ["Mont Pilatus", "Bateau puis crémaillère la plus raide du monde.", "apres-midi", "nature", 46.9790, 8.2540, "Pilatus"],
    ["Vieille ville de Lucerne", "Façades peintes et lion mourant.", "soir", "visit", 47.0520, 8.3060, "Lucerne"]]'::jsonb);
  c := seed_city('CHE', 'Zurich', 47.3769, 8.5417, 1, g, 4, 5);
  PERFORM seed_day(c, 1, '[
    ["Bahnhofstrasse et vieille ville", "Du shopping de luxe aux ruelles médiévales.", "matin", "shopping", 47.3720, 8.5390, "Zurich"],
    ["Grossmünster et bords de la Limmat", "Tours jumelles et quais animés.", "apres-midi", "visit", 47.3700, 8.5440, "Zurich"],
    ["Lac de Zurich", "Dernier verre au bord de l''eau avant le départ.", "soir", "food", 47.3660, 8.5410, "Zurich"]]'::jsonb);
END $$;
