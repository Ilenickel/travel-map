-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Grèce v2 (après helpers + seed_trip_templates_greece.sql)
--   - 8 jours DENSE : Athènes (3j) → Mykonos (2j) → Santorin (3j).
--     Le grand classique des Cyclades au rythme chargé (2 activités le
--     matin / 2 l'après-midi / 1 le soir), journées ordonnées selon le
--     trajet réel. Coexiste avec le 10j v1 "chill".
-- Relance : supprimer TOUT l'éditorial GRC puis rejouer greece.sql PUIS greece_v2.sql
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'GRC';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'GRC';
-- (les villes-seules GRC de seed_trip_templates_solo_cities.sql seraient
--  aussi supprimées par ce DELETE — les rejouer ensuite.)
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('GRC', 8);

  -- Athènes (3 jours).
  c := seed_city('GRC', 'Athènes', 37.9838, 23.7275, 3, g, 1, 0);
  -- J1 : Acropole dès l''ouverture → musée (au pied sud) → Plaka (au pied
  -- est) → Monastiraki, tour du rocher sans le remonter deux fois.
  PERFORM seed_day(c, 1, '[
    ["Acropole et Parthénon", "Le rocher sacré dès l''ouverture, avant la chaleur et la foule.", "matin", "visit", 37.9715, 23.7267, "Athènes"],
    ["Musée de l''Acropole", "Les caryatides originales et les frises, au pied sud du rocher.", "matin", "visit", 37.9684, 23.7285, "Makrygianni, Athènes"],
    ["Plaka et Anafiotika", "Ruelles néoclassiques puis maisonnettes cycladiques sous l''Acropole.", "apres-midi", "visit", 37.9720, 23.7290, "Plaka, Athènes"],
    ["Agora antique et temple d''Héphaïstos", "Le forum de la démocratie et le temple le mieux conservé de Grèce.", "apres-midi", "visit", 37.9747, 23.7217, "Athènes"],
    ["Dîner à Monastiraki", "Souvlaki et terrasses avec l''Acropole illuminée en toile de fond.", "soir", "food", 37.9760, 23.7255, "Monastiraki, Athènes"]]'::jsonb);
  -- J2 : Syntagma → jardin national → temple de Zeus (adjacents), soirée à Psiri.
  PERFORM seed_day(c, 2, '[
    ["Relève des evzones à Syntagma", "Les gardes en fustanelle devant le Parlement, à l''heure pile.", "matin", "visit", 37.9755, 23.7348, "Syntagma, Athènes"],
    ["Jardin national et Zappéion", "L''ombre des palmiers en plein centre.", "matin", "nature", 37.9726, 23.7374, "Athènes"],
    ["Temple de Zeus olympien et porte d''Hadrien", "Les colonnes géantes au bout du jardin.", "apres-midi", "visit", 37.9693, 23.7331, "Athènes"],
    ["Stade panathénaïque", "Le stade de marbre des premiers Jeux modernes, tout proche.", "apres-midi", "visit", 37.9683, 23.7410, "Athènes"],
    ["Tavernes de Psiri", "Rebetiko live et mezze dans le quartier qui veille tard.", "soir", "night", 37.9780, 23.7230, "Psiri, Athènes"]]'::jsonb);
  -- J3 : musée national au nord le matin, Lycabette au couchant.
  PERFORM seed_day(c, 3, '[
    ["Musée national archéologique", "Le masque d''Agamemnon et les bronzes des mers grecques.", "matin", "visit", 37.9890, 23.7328, "Exarchia, Athènes"],
    ["Kolonaki", "Boutiques et cafés chic au pied de la colline.", "apres-midi", "shopping", 37.9770, 23.7440, "Kolonaki, Athènes"],
    ["Mont Lycabette", "Funiculaire ou sentier : tout Athènes jusqu''à la mer.", "apres-midi", "nature", 37.9819, 23.7440, "Athènes"],
    ["Dîner en rooftop face à l''Acropole", "Dernière soirée athénienne dorée.", "soir", "food", 37.9760, 23.7290, "Athènes"]]'::jsonb);

  -- Mykonos (2 jours).
  c := seed_city('GRC', 'Mykonos', 37.4467, 25.3289, 2, g, 2, 3);
  -- J1 : Chora — tout se touche dans un mouchoir de poche.
  PERFORM seed_day(c, 1, '[
    ["Ruelles de Chora", "Labyrinthe blanc et bougainvilliers, conçu pour perdre les pirates.", "matin", "visit", 37.4467, 25.3255, "Chora, Mykonos"],
    ["Église Paraportiani", "Cinq chapelles fondues en une, l''église la plus photographiée de Grèce.", "matin", "visit", 37.4479, 25.3238, "Chora, Mykonos"],
    ["Moulins de Kato Mili", "Les cinq moulins face à la mer, emblème de l''île.", "apres-midi", "visit", 37.4448, 25.3255, "Chora, Mykonos"],
    ["Petite Venise", "Les balcons suspendus au-dessus des vagues.", "apres-midi", "visit", 37.4460, 25.3245, "Chora, Mykonos"],
    ["Cocktail au couchant à la Petite Venise", "Le soleil qui tombe dans la mer Égée.", "soir", "night", 37.4458, 25.3243, "Chora, Mykonos"]]'::jsonb);
  -- J2 : Délos le matin (bateau), plage l''après-midi, Chora le soir.
  PERFORM seed_day(c, 2, '[
    ["Île sacrée de Délos", "La terrasse des Lions et le sanctuaire d''Apollon, à 30 min de bateau.", "matin", "visit", 37.4030, 25.2710, "Délos"],
    ["Plage de Psarou ou d''Ornos", "Sable fin et eaux calmes de la côte sud.", "apres-midi", "beach", 37.4230, 25.3210, "Ornos, Mykonos"],
    ["Nuit mykonienne", "Bars et clubs de Chora jusqu''au bout de la nuit.", "soir", "night", 37.4465, 25.3260, "Chora, Mykonos"]]'::jsonb);

  -- Santorin (3 jours).
  c := seed_city('GRC', 'Santorin', 36.3932, 25.4615, 3, g, 3, 5);
  -- J1 : Fira puis marche de caldeira vers le nord (Firostefani, Imerovigli).
  PERFORM seed_day(c, 1, '[
    ["Fira et la caldeira", "Le balcon blanc au-dessus du volcan englouti.", "matin", "visit", 36.4166, 25.4324, "Fira, Santorin"],
    ["Marche Fira → Firostefani → Imerovigli", "Le sentier de crête le plus spectaculaire des Cyclades.", "apres-midi", "nature", 36.4270, 25.4230, "Imerovigli, Santorin"],
    ["Rocher de Skaros", "L''ancien fort vénitien avancé sur la caldeira.", "apres-midi", "visit", 36.4290, 25.4190, "Imerovigli, Santorin"],
    ["Dîner face à la caldeira à Fira", "Fava et vin d''assyrtiko au-dessus du vide.", "soir", "food", 36.4160, 25.4320, "Fira, Santorin"]]'::jsonb);
  -- J2 : le sud — Akrotiri, plage Rouge (adjacente), remontée par Perissa.
  PERFORM seed_day(c, 2, '[
    ["Site d''Akrotiri", "La Pompéi égéenne, ville minoenne figée sous les cendres.", "matin", "visit", 36.3517, 25.4034, "Akrotiri, Santorin"],
    ["Plage Rouge", "Falaises de lave rouge plongeant dans l''eau, juste à côté.", "apres-midi", "beach", 36.3480, 25.3945, "Akrotiri, Santorin"],
    ["Plage noire de Perissa", "Sable volcanique sous le rocher de Mesa Vouno.", "apres-midi", "beach", 36.3560, 25.4750, "Perissa, Santorin"],
    ["Taverne les pieds dans le sable", "Poisson grillé sur la côte sud.", "soir", "food", 36.3565, 25.4740, "Perissa, Santorin"]]'::jsonb);
  -- J3 : Oia — village, descente à Ammoudi, remontée pour LE coucher de soleil.
  PERFORM seed_day(c, 3, '[
    ["Village d''Oia", "Dômes bleus et maisons troglodytes du village carte postale.", "matin", "visit", 36.4614, 25.3760, "Oia, Santorin"],
    ["Baie d''Ammoudi", "Descente des 300 marches, baignade et poulpes séchant au soleil.", "apres-midi", "beach", 36.4620, 25.3690, "Ammoudi, Santorin"],
    ["Coucher de soleil d''Oia", "Le plus célèbre du monde, applaudi chaque soir.", "soir", "nature", 36.4610, 25.3750, "Oia, Santorin"]]'::jsonb);
END $$;
