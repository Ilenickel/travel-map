-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Égypte (après seed_trip_templates_helpers.sql)
--   - 8 jours : Le Caire (+ Gizeh/Saqqarah) → Louxor → croisière Nil (Edfou/Kom Ombo) → Assouan
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'EGY';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'EGY';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('EGY', 8);
  c := seed_city('EGY', 'Le Caire', 30.0444, 31.2357, 3, g, 1, 0);
  e := seed_daytrip('EGY', 'Gizeh', 29.9773, 31.1325, c, 0);
  PERFORM seed_day(e, 1, '[
    ["Pyramides de Gizeh", "Khéops, Khéphren et Mykérinos face au désert.", "matin", "visit", 29.9792, 31.1342, "Gizeh"],
    ["Sphinx et temple de la vallée", "Le gardien millénaire du plateau.", "apres-midi", "visit", 29.9753, 31.1376, "Gizeh"],
    ["Saqqarah", "La pyramide à degrés de Djéser, la première de toutes.", "soir", "visit", 29.8713, 31.2165, "Saqqarah"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée égyptien", "Le trésor de Toutânkhamon.", "matin", "visit", 30.0478, 31.2336, "Le Caire"],
    ["Citadelle de Saladin", "Mosquée d''albâtre de Mohamed-Ali au-dessus de la ville.", "apres-midi", "visit", 30.0287, 31.2599, "Le Caire"],
    ["Khan el-Khalili", "Le grand souk du Caire fatimide.", "soir", "shopping", 30.0477, 31.2622, "Le Caire"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Le Caire copte", "Église suspendue et synagogue Ben Ezra.", "matin", "visit", 30.0059, 31.2302, "Le Caire"],
    ["Rue Al-Muizz", "L''artère médiévale aux cent monuments.", "apres-midi", "visit", 30.0500, 31.2610, "Le Caire"],
    ["Felouque sur le Nil au Caire", "Le fleuve au couchant avant le vol vers Louxor.", "soir", "visit", 30.0410, 31.2240, "Le Caire"]]'::jsonb);
  c := seed_city('EGY', 'Louxor', 25.6872, 32.6396, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Temple de Karnak", "La plus grande salle hypostyle du monde.", "matin", "visit", 25.7188, 32.6573, "Louxor"],
    ["Musée de Louxor", "Chefs-d''œuvre du Nouvel Empire.", "apres-midi", "visit", 25.7030, 32.6390, "Louxor"],
    ["Temple de Louxor illuminé", "L''allée des sphinx à la nuit tombée.", "soir", "visit", 25.6995, 32.6390, "Louxor"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Vallée des Rois", "Tombeaux peints des pharaons, dont Toutânkhamon.", "matin", "visit", 25.7402, 32.6014, "Louxor"],
    ["Temple d''Hatchepsout", "Terrasses monumentales de Deir el-Bahari.", "apres-midi", "visit", 25.7380, 32.6065, "Louxor"],
    ["Colosses de Memnon et embarquement", "Les géants de pierre puis le bateau de croisière.", "soir", "visit", 25.7205, 32.6105, "Louxor"]]'::jsonb);
  c := seed_city('EGY', 'Edfou', 24.9780, 32.8730, 2, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Navigation sur le Nil", "Rives de palmiers et villages depuis le pont.", "matin", "nature", 25.3000, 32.5500, "Nil"],
    ["Temple d''Horus à Edfou", "Le temple le mieux conservé d''Égypte.", "apres-midi", "visit", 24.9781, 32.8733, "Edfou"],
    ["Soirée à bord", "Coucher de soleil sur le fleuve.", "soir", "night", 24.9700, 32.8800, "Nil"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Temple double de Kom Ombo", "Sobek le crocodile et Horus, à parts égales.", "matin", "visit", 24.4520, 32.9283, "Kom Ombo"],
    ["Musée des crocodiles", "Momies de crocodiles sacrés.", "apres-midi", "visit", 24.4515, 32.9290, "Kom Ombo"],
    ["Arrivée à Assouan", "Passage de l''écluse et nuit à quai.", "soir", "night", 24.0889, 32.8998, "Assouan"]]'::jsonb);
  c := seed_city('EGY', 'Assouan', 24.0889, 32.8998, 1, g, 4, 7);
  PERFORM seed_day(c, 1, '[
    ["Haut barrage et obélisque inachevé", "Le lac Nasser et le granit des pharaons.", "matin", "visit", 23.9707, 32.8770, "Assouan"],
    ["Temple de Philae", "Le sanctuaire d''Isis sauvé des eaux sur son île.", "apres-midi", "visit", 24.0125, 32.8847, "Assouan"],
    ["Felouque autour de l''île Éléphantine", "Voile au couchant entre les rochers noirs.", "soir", "nature", 24.0860, 32.8880, "Assouan"]]'::jsonb);
END $$;
