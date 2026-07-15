-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Espagne (après seed_trip_templates_helpers.sql)
--   - 5 jours  : Barcelone
--   - 5 jours  : Madrid (+ excursion Tolède)
--   - 12 jours : Madrid → Séville (+ Cordoue) → Grenade → Barcelone
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'ESP';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'ESP';
-- ════════════════════════════════════════════════════════════════

-- Bloc Barcelone : p_days = 3 (fin du 12 jours), 5 (mono-ville) ou 6
-- (variante enrichie : + excursion Montserrat et fontaine magique de nuit).
CREATE OR REPLACE FUNCTION seed_es_barcelona(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v_city UUID; v_exc UUID;
BEGIN
  v_city := seed_city('ESP', 'Barcelone', 41.3874, 2.1686, p_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v_city, 1, '[
    ["Parc Güell", "Mosaïques et salamandre de Gaudí sur les hauteurs.", "matin", "nature", 41.4145, 2.1527, "Barcelone"],
    ["Sagrada Família", "Basilique inachevée de Gaudí, chef-d''œuvre absolu.", "apres-midi", "visit", 41.4036, 2.1744, "Barcelone"],
    ["Barrio Gótico", "Ruelles médiévales et cathédrale de Barcelone.", "soir", "visit", 41.3833, 2.1760, "Barcelone"]]'::jsonb);
  PERFORM seed_day(v_city, 2, '[
    ["La Rambla et marché de la Boqueria", "Artère mythique et halles gourmandes.", "matin", "food", 41.3818, 2.1719, "Barcelone"],
    ["Casa Batlló", "Façade ondulante de Gaudí sur le Passeig de Gràcia.", "apres-midi", "visit", 41.3917, 2.1650, "Barcelone"],
    ["Barceloneta", "Plage urbaine et tapas de bord de mer.", "soir", "beach", 41.3785, 2.1925, "Barcelone"]]'::jsonb);
  PERFORM seed_day(v_city, 3, '[
    ["Casa Milà (La Pedrera)", "Toit-terrasse aux cheminées-guerriers de Gaudí.", "matin", "visit", 41.3954, 2.1620, "Barcelone"],
    ["Musée Picasso et El Born", "Jeunesse de Picasso et quartier branché.", "apres-midi", "visit", 41.3852, 2.1809, "Barcelone"],
    ["Port Vell", "Marina et front de mer au couchant.", "soir", "visit", 41.3755, 2.1783, "Barcelone"]]'::jsonb);
  IF p_days >= 5 THEN
    PERFORM seed_day(v_city, 4, '[
      ["Château de Montjuïc", "Forteresse et téléphérique au-dessus du port.", "matin", "visit", 41.3641, 2.1657, "Barcelone"],
      ["Fondation Joan Miró", "Œuvres majeures du maître catalan.", "apres-midi", "visit", 41.3686, 2.1600, "Barcelone"],
      ["Poble Sec", "Rue Blai et ses pintxos.", "soir", "food", 41.3736, 2.1636, "Barcelone"]]'::jsonb);
    PERFORM seed_day(v_city, 5, '[
      ["Palais de la musique catalane", "Salle moderniste classée à l''Unesco.", "matin", "visit", 41.3876, 2.1753, "Barcelone"],
      ["Passeig de Gràcia", "Shopping entre les façades modernistes.", "apres-midi", "shopping", 41.3926, 2.1648, "Barcelone"],
      ["Bunkers del Carmel", "Le plus beau panorama sur la ville au couchant.", "soir", "nature", 41.4194, 2.1614, "Barcelone"]]'::jsonb);
  END IF;
  IF p_days >= 6 THEN
    v_exc := seed_daytrip('ESP', 'Montserrat', 41.5930, 1.8376, v_city, 5);
    PERFORM seed_day(v_exc, 1, '[
      ["Monastère de Montserrat", "La Vierge noire dans la montagne dentelée.", "matin", "visit", 41.5930, 1.8376, "Montserrat"],
      ["Sentiers et funiculaire de Sant Joan", "Panoramas sur les aiguilles de Montserrat.", "apres-midi", "nature", 41.6010, 1.8320, "Montserrat"],
      ["Fontaine magique de Montjuïc", "Retour pour le spectacle d''eau et de lumière nocturne.", "soir", "night", 41.3712, 2.1516, "Barcelone"]]'::jsonb);
  END IF;
  RETURN v_city;
END $$;

-- Bloc Madrid : p_days = 4 (début du 12 jours), 5 (mono + Tolède) ou 6
-- (variante enrichie : + excursion Ségovie).
CREATE OR REPLACE FUNCTION seed_es_madrid(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v_city UUID; v_exc UUID;
BEGIN
  v_city := seed_city('ESP', 'Madrid', 40.4168, -3.7038, p_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v_city, 1, '[
    ["Musée du Prado", "Velázquez, Goya et les maîtres espagnols.", "matin", "visit", 40.4138, -3.6921, "Madrid"],
    ["Parc du Retiro", "Palais de Cristal et barques sur l''étang.", "apres-midi", "nature", 40.4153, -3.6844, "Madrid"],
    ["Puerta del Sol", "Kilomètre zéro et cœur battant de Madrid.", "soir", "visit", 40.4169, -3.7035, "Madrid"]]'::jsonb);
  PERFORM seed_day(v_city, 2, '[
    ["Palais royal", "2 800 pièces et relève de la garde.", "matin", "visit", 40.4179, -3.7143, "Madrid"],
    ["Plaza Mayor", "Place majeure sous les arcades.", "apres-midi", "visit", 40.4155, -3.7074, "Madrid"],
    ["Marché de San Miguel", "Tapas gastronomiques sous une halle de fer.", "soir", "food", 40.4154, -3.7089, "Madrid"]]'::jsonb);
  PERFORM seed_day(v_city, 3, '[
    ["Musée Reina Sofía", "Guernica de Picasso et art contemporain.", "matin", "visit", 40.4080, -3.6946, "Madrid"],
    ["Gran Vía", "Le Broadway madrilène et ses coupoles.", "apres-midi", "shopping", 40.4203, -3.7058, "Madrid"],
    ["Malasaña", "Quartier alternatif de la Movida.", "soir", "night", 40.4258, -3.7043, "Madrid"]]'::jsonb);
  PERFORM seed_day(v_city, 4, '[
    ["Temple de Debod", "Temple égyptien authentique face au couchant.", "matin", "visit", 40.4240, -3.7177, "Madrid"],
    ["Téléphérique de la Casa de Campo", "Survol du plus grand parc de Madrid.", "apres-midi", "nature", 40.4192, -3.7245, "Madrid"],
    ["La Latina", "La tournée des bars à tapas de la Cava Baja.", "soir", "food", 40.4109, -3.7086, "Madrid"]]'::jsonb);
  IF p_days >= 5 THEN
    v_exc := seed_daytrip('ESP', 'Tolède', 39.8628, -4.0273, v_city, 4);
    PERFORM seed_day(v_exc, 1, '[
      ["Cathédrale de Tolède", "Primatiale gothique aux trésors du Greco.", "matin", "visit", 39.8570, -4.0239, "Tolède"],
      ["Alcázar et vieille ville", "Forteresse dominant le Tage, trois cultures mêlées.", "apres-midi", "visit", 39.8581, -4.0210, "Tolède"],
      ["Mirador del Valle", "Panorama sur Tolède illuminée.", "soir", "nature", 39.8515, -4.0180, "Tolède"]]'::jsonb);
  END IF;
  IF p_days >= 6 THEN
    v_exc := seed_daytrip('ESP', 'Ségovie', 40.9429, -4.1088, v_city, 5);
    PERFORM seed_day(v_exc, 1, '[
      ["Aqueduc de Ségovie", "167 arches romaines sans un gramme de mortier.", "matin", "visit", 40.9481, -4.1184, "Ségovie"],
      ["Alcázar de Ségovie", "Le château qui inspira celui de Disney.", "apres-midi", "visit", 40.9525, -4.1310, "Ségovie"],
      ["Cochinillo et retour", "Le cochon de lait rôti, spécialité locale, avant Madrid.", "soir", "food", 40.9490, -4.1230, "Ségovie"]]'::jsonb);
  END IF;
  RETURN v_city;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 5 jours : Barcelone ───────────────────────────────────────
  g := seed_group('ESP', 5);
  PERFORM seed_es_barcelona(g, 1, 0, 5);

  -- ─── 5 jours : Madrid + Tolède ─────────────────────────────────
  g := seed_group('ESP', 5);
  PERFORM seed_es_madrid(g, 1, 0, 5);

  -- ─── 6 jours : Barcelone enrichi (+ Montserrat, fontaine magique) ──
  g := seed_group('ESP', 6);
  PERFORM seed_es_barcelona(g, 1, 0, 6);

  -- ─── 6 jours : Madrid enrichi (+ Tolède + Ségovie) ─────────────
  g := seed_group('ESP', 6);
  PERFORM seed_es_madrid(g, 1, 0, 6);

  -- ─── 12 jours : Madrid → Séville → Grenade → Barcelone ─────────
  g := seed_group('ESP', 12);
  PERFORM seed_es_madrid(g, 1, 0, 4);
  c := seed_city('ESP', 'Séville', 37.3891, -5.9845, 3, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Cathédrale de Séville et Giralda", "La plus grande cathédrale gothique et son minaret-clocher.", "matin", "visit", 37.3861, -5.9926, "Séville"],
    ["Real Alcázar", "Palais mudéjar et jardins des rois d''Espagne.", "apres-midi", "visit", 37.3831, -5.9902, "Séville"],
    ["Quartier de Triana", "Rive gauche du Guadalquivir, flamenco et céramique.", "soir", "night", 37.3826, -6.0026, "Séville"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Plaza de España", "Hémicycle monumental et bancs d''azulejos des provinces.", "matin", "visit", 37.3772, -5.9869, "Séville"],
    ["Quartier de Santa Cruz", "Ancien quartier juif aux placettes fleuries.", "apres-midi", "visit", 37.3849, -5.9890, "Séville"],
    ["Setas de Sevilla", "Passerelle en bois panoramique au couchant.", "soir", "visit", 37.3931, -5.9919, "Séville"]]'::jsonb);
  e := seed_daytrip('ESP', 'Cordoue', 37.8882, -4.7794, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Mosquée-cathédrale de Cordoue", "Forêt d''arcades bicolores unique au monde.", "matin", "visit", 37.8789, -4.7794, "Cordoue"],
    ["Juderia et pont romain", "Ruelles blanches et traversée du Guadalquivir.", "apres-midi", "visit", 37.8768, -4.7784, "Cordoue"],
    ["Patios cordouans", "Cours fleuries et taverne andalouse.", "soir", "food", 37.8790, -4.7830, "Cordoue"]]'::jsonb);
  c := seed_city('ESP', 'Grenade', 37.1773, -3.5986, 2, g, 3, 7);
  PERFORM seed_day(c, 1, '[
    ["Alhambra", "Palais nasrides, joyau de l''art hispano-mauresque.", "matin", "visit", 37.1761, -3.5881, "Grenade"],
    ["Generalife", "Jardins et jeux d''eau des sultans.", "apres-midi", "nature", 37.1774, -3.5843, "Grenade"],
    ["Tapas dans le centre", "À Grenade, chaque verre vient avec sa tapa offerte.", "soir", "food", 37.1750, -3.5990, "Grenade"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Albaicín", "Quartier mauresque en escaliers, carmenes et placettes.", "matin", "visit", 37.1809, -3.5927, "Grenade"],
    ["Cathédrale et chapelle royale", "Tombeaux des Rois catholiques.", "apres-midi", "visit", 37.1763, -3.5995, "Grenade"],
    ["Mirador de San Nicolás", "L''Alhambra embrasée face à la Sierra Nevada.", "soir", "nature", 37.1811, -3.5927, "Grenade"]]'::jsonb);
  PERFORM seed_es_barcelona(g, 4, 9, 3);
END $$;

DROP FUNCTION IF EXISTS seed_es_barcelona(UUID, INT, INT, INT);
DROP FUNCTION IF EXISTS seed_es_madrid(UUID, INT, INT, INT);
