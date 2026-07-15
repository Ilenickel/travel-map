-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Inde (après seed_trip_templates_helpers.sql)
--   - 8 jours  : Triangle d'or — Delhi → Agra → Jaipur
--   - 14 jours : + Jodhpur → Udaipur → Varanasi
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'IND';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'IND';
-- ════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION seed_in_delhi(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('IND', 'Delhi', 28.6139, 77.2090, 3, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Fort rouge", "La citadelle moghole de Shah Jahan.", "matin", "visit", 28.6562, 77.2410, "Delhi"],
    ["Jama Masjid", "La plus grande mosquée d''Inde.", "apres-midi", "visit", 28.6507, 77.2334, "Delhi"],
    ["Chandni Chowk en rickshaw", "Le bazar labyrinthique du vieux Delhi.", "soir", "food", 28.6560, 77.2300, "Delhi"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Tombe de Humayun", "L''ancêtre moghol du Taj Mahal.", "matin", "visit", 28.5933, 77.2507, "Delhi"],
    ["Qutb Minar", "Le minaret de 73 m du sultanat de Delhi.", "apres-midi", "visit", 28.5245, 77.1855, "Delhi"],
    ["Porte de l''Inde et Rajpath", "L''arc mémorial illuminé.", "soir", "visit", 28.6129, 77.2295, "Delhi"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Temple du Lotus", "Le sanctuaire bahá''í en forme de fleur.", "matin", "visit", 28.5535, 77.2588, "Delhi"],
    ["Gurudwara Bangla Sahib", "Le grand temple sikh et son bassin sacré.", "apres-midi", "visit", 28.6262, 77.2090, "Delhi"],
    ["Connaught Place", "L''esplanade coloniale des cafés et boutiques.", "soir", "shopping", 28.6315, 77.2167, "Delhi"]]'::jsonb);
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_in_agra(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('IND', 'Agra', 27.1767, 78.0081, 2, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Taj Mahal au lever du soleil", "Le mausolée de marbre blanc dans la brume rose.", "matin", "visit", 27.1751, 78.0421, "Agra"],
    ["Fort d''Agra", "La forteresse de grès rouge des Moghols.", "apres-midi", "visit", 27.1795, 78.0211, "Agra"],
    ["Mehtab Bagh", "Le Taj au couchant depuis l''autre rive de la Yamuna.", "soir", "nature", 27.1799, 78.0421, "Agra"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Tombe d''Itimad-ud-Daulah", "Le Baby Taj aux marqueteries délicates.", "matin", "visit", 27.1930, 78.0310, "Agra"],
    ["Fatehpur Sikri", "La capitale fantôme d''Akbar, en route vers Jaipur.", "apres-midi", "visit", 27.0945, 77.6679, "Fatehpur Sikri"],
    ["Route vers Jaipur", "Arrivée dans la ville rose.", "soir", "transport", 26.9124, 75.7873, "Jaipur"]]'::jsonb);
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_in_jaipur(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('IND', 'Jaipur', 26.9124, 75.7873, 3, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Fort d''Amber", "Palais-forteresse aux salles de miroirs.", "matin", "visit", 26.9855, 75.8513, "Amber"],
    ["Jal Mahal", "Le palais posé sur les eaux du lac Man Sagar.", "apres-midi", "visit", 26.9535, 75.8461, "Jaipur"],
    ["Bazars de la vieille ville", "Bracelets, turbans et pierres de Johari Bazar.", "soir", "shopping", 26.9190, 75.8250, "Jaipur"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Palais des Vents (Hawa Mahal)", "La façade aux 953 fenêtres.", "matin", "visit", 26.9239, 75.8267, "Jaipur"],
    ["City Palace", "Résidence du maharaja et cours peintes.", "apres-midi", "visit", 26.9258, 75.8237, "Jaipur"],
    ["Jantar Mantar", "L''observatoire astronomique géant du XVIIIe.", "soir", "visit", 26.9247, 75.8246, "Jaipur"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Temple des singes (Galtaji)", "Bassins sacrés dans la gorge aux macaques.", "matin", "visit", 26.9030, 75.8650, "Jaipur"],
    ["Albert Hall Museum", "Le musée indo-sarrasin de la ville rose.", "apres-midi", "visit", 26.9117, 75.8195, "Jaipur"],
    ["Nahargarh Fort au couchant", "Jaipur embrasée depuis les remparts.", "soir", "nature", 26.9373, 75.8155, "Jaipur"]]'::jsonb);
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID;
BEGIN
  -- ─── 8 jours : Triangle d'or ───────────────────────────────────
  g := seed_group('IND', 8);
  PERFORM seed_in_delhi(g, 1, 0);
  PERFORM seed_in_agra(g, 2, 3);
  PERFORM seed_in_jaipur(g, 3, 5);

  -- ─── 14 jours : + Rajasthan + Varanasi ─────────────────────────
  g := seed_group('IND', 14);
  PERFORM seed_in_delhi(g, 1, 0);
  PERFORM seed_in_agra(g, 2, 3);
  PERFORM seed_in_jaipur(g, 3, 5);
  c := seed_city('IND', 'Jodhpur', 26.2389, 73.0243, 2, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Fort de Mehrangarh", "Citadelle vertigineuse au-dessus de la ville bleue.", "matin", "visit", 26.2979, 73.0184, "Jodhpur"],
    ["Jaswant Thada", "Le cénotaphe de marbre blanc.", "apres-midi", "visit", 26.2996, 73.0243, "Jodhpur"],
    ["Vieille ville bleue", "Ruelles indigo sous le fort illuminé.", "soir", "visit", 26.2950, 73.0200, "Jodhpur"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Marché de la tour de l''Horloge", "Épices et étoffes de Sardar Market.", "matin", "shopping", 26.2937, 73.0248, "Jodhpur"],
    ["Temples jaïns de Ranakpur", "1 444 colonnes de marbre, toutes différentes, en route.", "apres-midi", "visit", 25.1160, 73.4720, "Ranakpur"],
    ["Arrivée à Udaipur", "La Venise de l''Orient au crépuscule.", "soir", "transport", 24.5854, 73.7125, "Udaipur"]]'::jsonb);
  c := seed_city('IND', 'Udaipur', 24.5854, 73.7125, 2, g, 5, 10);
  PERFORM seed_day(c, 1, '[
    ["City Palace d''Udaipur", "Le plus grand palais du Rajasthan sur le lac Pichola.", "matin", "visit", 24.5764, 73.6835, "Udaipur"],
    ["Bateau sur le lac Pichola", "Jag Mandir et palais du lac depuis l''eau.", "apres-midi", "nature", 24.5720, 73.6790, "Udaipur"],
    ["Temple Jagdish et ghats", "Soirée d''aarti au bord du lac.", "soir", "visit", 24.5796, 73.6835, "Udaipur"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Saheliyon-ki-Bari", "Le jardin des demoiselles d''honneur.", "matin", "nature", 24.6036, 73.6870, "Udaipur"],
    ["Vieille ville et miniatures", "Ateliers de peinture traditionnelle.", "apres-midi", "shopping", 24.5790, 73.6850, "Udaipur"],
    ["Monsoon Palace au couchant", "Le palais de la mousson au-dessus des collines.", "soir", "nature", 24.5946, 73.6413, "Udaipur"]]'::jsonb);
  c := seed_city('IND', 'Varanasi', 25.3176, 82.9739, 2, g, 6, 12);
  PERFORM seed_day(c, 1, '[
    ["Barque sur le Gange au lever du jour", "Les ghats s''éveillent dans la lumière dorée.", "matin", "visit", 25.3109, 83.0107, "Varanasi"],
    ["Vieille ville et temple d''or", "Ruelles vers Kashi Vishwanath.", "apres-midi", "visit", 25.3109, 83.0104, "Varanasi"],
    ["Cérémonie Ganga Aarti", "Feux et mantras au ghat Dashashwamedh.", "soir", "visit", 25.3060, 83.0100, "Varanasi"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Sarnath", "Le parc aux Gazelles du premier sermon de Bouddha.", "matin", "visit", 25.3811, 83.0220, "Sarnath"],
    ["Ghats du sud à pied", "Assi Ghat et la vie au bord du fleuve.", "apres-midi", "visit", 25.2880, 83.0060, "Varanasi"],
    ["Lassi et soie de Bénarès", "Dernières saveurs avant le départ.", "soir", "food", 25.3100, 83.0090, "Varanasi"]]'::jsonb);
END $$;

DROP FUNCTION IF EXISTS seed_in_delhi(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_in_agra(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_in_jaipur(UUID, INT, INT);
