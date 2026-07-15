-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Hongrie (après seed_trip_templates_helpers.sql)
--   - 4 jours : Budapest
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'HUN';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'HUN';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('HUN', 4);
  c := seed_city('HUN', 'Budapest', 47.4979, 19.0402, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Parlement hongrois", "Le géant néogothique au bord du Danube.", "matin", "visit", 47.5076, 19.0458, "Budapest"],
    ["Basilique Saint-Étienne", "Coupole panoramique et relique du fondateur.", "apres-midi", "visit", 47.5009, 19.0540, "Budapest"],
    ["Croisière sur le Danube", "Parlement et château illuminés depuis le fleuve.", "soir", "visit", 47.4980, 19.0480, "Budapest"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Château de Buda", "Palais royal et galerie nationale hongroise.", "matin", "visit", 47.4962, 19.0399, "Budapest"],
    ["Bastion des Pêcheurs et église Matthias", "Tourelles blanches face au Parlement.", "apres-midi", "visit", 47.5022, 19.0348, "Budapest"],
    ["Ruin bars (Szimpla Kert)", "Bars installés dans des immeubles en ruine.", "soir", "night", 47.4970, 19.0630, "Budapest"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Bains Széchenyi", "Bassins jaunes néo-baroques, échecs dans l''eau.", "matin", "visit", 47.5186, 19.0824, "Budapest"],
    ["Place des Héros et château Vajdahunyad", "Panthéon magyar et château éclectique.", "apres-midi", "visit", 47.5150, 19.0780, "Budapest"],
    ["Avenue Andrássy et Opéra", "Les Champs-Élysées de Budapest.", "soir", "visit", 47.5028, 19.0580, "Budapest"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Grande synagogue", "La plus grande d''Europe, quartier juif.", "matin", "visit", 47.4959, 19.0603, "Budapest"],
    ["Grand marché couvert", "Paprika, langos et broderies sous la halle.", "apres-midi", "food", 47.4870, 19.0587, "Budapest"],
    ["Mont Gellért et citadelle", "Budapest illuminée depuis la colline, bains Rudas.", "soir", "nature", 47.4855, 19.0465, "Budapest"]]'::jsonb);
END $$;
