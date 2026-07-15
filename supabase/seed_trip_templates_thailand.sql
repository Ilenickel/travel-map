-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Thaïlande (après seed_trip_templates_helpers.sql)
--   - 10 jours : Bangkok (+ marchés flottants) → Chiang Mai → Phuket (+ Phang Nga, + Phi Phi)
--   - 14 jours : + Ayutthaya + Chiang Rai + Krabi
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'THA';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'THA';
-- ════════════════════════════════════════════════════════════════

-- Bangkok : 2 jours propres + excursion marchés flottants au jour 3.
CREATE OR REPLACE FUNCTION seed_th_bangkok(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('THA', 'Bangkok', 13.7563, 100.5018, 3, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Grand Palais et Wat Phra Kaeo", "Palais royal et Bouddha d''émeraude.", "matin", "visit", 13.7500, 100.4913, "Bangkok"],
    ["Wat Pho", "Le Bouddha couché de 46 mètres.", "apres-midi", "visit", 13.7465, 100.4930, "Bangkok"],
    ["Wat Arun illuminé", "Le temple de l''Aube depuis l''autre rive.", "soir", "visit", 13.7437, 100.4889, "Bangkok"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Croisière sur les klongs", "Canaux de Thonburi en pirogue à longue queue.", "matin", "visit", 13.7400, 100.4800, "Bangkok"],
    ["Jim Thompson House et MBK", "Maison de teck puis centre commercial géant.", "apres-midi", "shopping", 13.7492, 100.5283, "Bangkok"],
    ["Chinatown (Yaowarat)", "La meilleure street food de la ville.", "soir", "food", 13.7398, 100.5100, "Bangkok"]]'::jsonb);
  e := seed_daytrip('THA', 'Damnoen Saduak', 13.5205, 99.9598, v, 2);
  PERFORM seed_day(e, 1, '[
    ["Marché flottant de Damnoen Saduak", "Barques de fruits et soupes sur les canaux.", "matin", "food", 13.5205, 99.9598, "Damnoen Saduak"],
    ["Marché ferroviaire de Maeklong", "Les étals repliés au passage du train.", "apres-midi", "visit", 13.4067, 99.9997, "Maeklong"],
    ["Retour et rooftop de Bangkok", "Skybar au-dessus du Chao Phraya.", "soir", "night", 13.7210, 100.5140, "Bangkok"]]'::jsonb);
  RETURN v;
END $$;

CREATE OR REPLACE FUNCTION seed_th_chiangmai(p_group UUID, p_pos INT, p_offset INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID;
BEGIN
  v := seed_city('THA', 'Chiang Mai', 18.7883, 98.9853, 3, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Wat Chedi Luang", "Grand chedi en brique au cœur de la vieille ville.", "matin", "visit", 18.7870, 98.9867, "Chiang Mai"],
    ["Wat Phra Singh", "Le temple du Bouddha-lion, style lanna.", "apres-midi", "visit", 18.7885, 98.9817, "Chiang Mai"],
    ["Marché de nuit (Night Bazaar)", "Artisanat et khao soi.", "soir", "shopping", 18.7870, 99.0000, "Chiang Mai"]]'::jsonb);
  PERFORM seed_day(v, 2, '[
    ["Sanctuaire d''éléphants éthique", "Nourrir et baigner les éléphants sauvés.", "matin", "nature", 18.9000, 98.8600, "Mae Taeng"],
    ["Cours de cuisine thaïe", "Curry et pad thaï du marché à l''assiette.", "apres-midi", "food", 18.7900, 98.9850, "Chiang Mai"],
    ["Marché du dimanche (Walking Street)", "Rue piétonne des artisans lanna.", "soir", "shopping", 18.7880, 98.9890, "Chiang Mai"]]'::jsonb);
  PERFORM seed_day(v, 3, '[
    ["Doi Suthep", "Temple doré sur la montagne, escalier aux nagas.", "matin", "visit", 18.8048, 98.9216, "Chiang Mai"],
    ["Village de Bo Sang", "Ombrelles en papier peintes à la main.", "apres-midi", "shopping", 18.7620, 99.0770, "Bo Sang"],
    ["Berges de la Ping", "Dîner au bord de la rivière.", "soir", "food", 18.7880, 99.0010, "Chiang Mai"]]'::jsonb);
  RETURN v;
END $$;

-- Phuket : jours propres 1 et 4 (si 4 jours), excursions Phang Nga et Phi Phi.
CREATE OR REPLACE FUNCTION seed_th_phuket(p_group UUID, p_pos INT, p_offset INT, p_days INT)
RETURNS UUID LANGUAGE plpgsql AS $$
DECLARE v UUID; e UUID;
BEGIN
  v := seed_city('THA', 'Phuket', 7.8804, 98.3923, p_days, p_group, p_pos, p_offset);
  PERFORM seed_day(v, 1, '[
    ["Vieille ville de Phuket", "Maisons sino-portugaises pastel de Thalang Road.", "matin", "visit", 7.8850, 98.3880, "Phuket"],
    ["Grand Bouddha de Phuket", "45 m de marbre blanc au sommet de l''île.", "apres-midi", "visit", 7.8280, 98.3130, "Phuket"],
    ["Plage de Kata au couchant", "Sable doré et fruits de mer.", "soir", "beach", 7.8200, 98.2980, "Phuket"]]'::jsonb);
  e := seed_daytrip('THA', 'Baie de Phang Nga', 8.2745, 98.5012, v, 1);
  PERFORM seed_day(e, 1, '[
    ["Île de James Bond (Ko Tapu)", "Le piton karstique du film mythique.", "matin", "nature", 8.2745, 98.5012, "Phang Nga"],
    ["Kayak dans les hongs", "Lagons secrets accessibles sous les falaises.", "apres-midi", "nature", 8.2500, 98.4900, "Phang Nga"],
    ["Village flottant de Ko Panyi", "Village musulman sur pilotis.", "soir", "food", 8.3330, 98.5060, "Ko Panyi"]]'::jsonb);
  e := seed_daytrip('THA', 'Ko Phi Phi', 7.7407, 98.7784, v, 2);
  PERFORM seed_day(e, 1, '[
    ["Maya Bay", "La baie de La Plage entre ses falaises.", "matin", "beach", 7.6787, 98.7654, "Ko Phi Phi"],
    ["Snorkeling à Pileh Lagoon", "Lagon émeraude et poissons multicolores.", "apres-midi", "beach", 7.6830, 98.7720, "Ko Phi Phi"],
    ["Ton Sai et retour", "Le village entre les deux baies.", "soir", "food", 7.7407, 98.7784, "Ko Phi Phi"]]'::jsonb);
  IF p_days >= 4 THEN
    PERFORM seed_day(v, 4, '[
      ["Plage de Freedom Beach", "Crique préservée accessible en longtail.", "matin", "beach", 7.8760, 98.2760, "Phuket"],
      ["Promthep Cape", "Le cap du grand coucher de soleil.", "apres-midi", "nature", 7.7590, 98.3050, "Phuket"],
      ["Marché du week-end de Naka", "Dernière soirée de street food.", "soir", "food", 7.8800, 98.3660, "Phuket"]]'::jsonb);
  END IF;
  RETURN v;
END $$;

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 10 jours : Bangkok → Chiang Mai → Phuket ──────────────────
  g := seed_group('THA', 10);
  PERFORM seed_th_bangkok(g, 1, 0);
  PERFORM seed_th_chiangmai(g, 2, 3);
  PERFORM seed_th_phuket(g, 3, 6, 4);

  -- ─── 14 jours : + Ayutthaya + Chiang Rai + Krabi ───────────────
  g := seed_group('THA', 14);
  PERFORM seed_th_bangkok(g, 1, 0);
  c := seed_city('THA', 'Ayutthaya', 14.3532, 100.5689, 1, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Wat Mahathat", "La tête de Bouddha enlacée par les racines.", "matin", "visit", 14.3570, 100.5677, "Ayutthaya"],
    ["Wat Phra Si Sanphet", "Trois chedis royaux de l''ancienne capitale.", "apres-midi", "visit", 14.3559, 100.5586, "Ayutthaya"],
    ["Wat Chaiwatthanaram au couchant", "Le temple khmer au bord de la rivière.", "soir", "visit", 14.3430, 100.5420, "Ayutthaya"]]'::jsonb);
  PERFORM seed_th_chiangmai(g, 3, 4);
  c := seed_city('THA', 'Chiang Rai', 19.9105, 99.8406, 1, g, 4, 7);
  PERFORM seed_day(c, 1, '[
    ["Temple blanc (Wat Rong Khun)", "Le temple-miroir fantasmagorique.", "matin", "visit", 19.8243, 99.7631, "Chiang Rai"],
    ["Maison noire (Baan Dam)", "L''anti-temple de l''artiste Thawan Duchanee.", "apres-midi", "visit", 19.9930, 99.8650, "Chiang Rai"],
    ["Triangle d''or", "Confluent du Mékong entre trois pays.", "soir", "visit", 20.3520, 100.0820, "Sop Ruak"]]'::jsonb);
  c := seed_city('THA', 'Krabi', 8.0863, 98.9063, 3, g, 5, 8);
  PERFORM seed_day(c, 1, '[
    ["Railay Beach", "Falaises karstiques accessibles seulement en bateau.", "matin", "beach", 8.0113, 98.8372, "Railay"],
    ["Grotte de la Princesse (Phra Nang)", "Plage sacrée sous la falaise.", "apres-midi", "beach", 8.0060, 98.8390, "Railay"],
    ["Ao Nang", "Front de mer et poissons grillés.", "soir", "food", 8.0320, 98.8220, "Ao Nang"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Excursion des 4 îles en longtail", "Ko Poda, Chicken Island et le banc de sable.", "matin", "beach", 7.9640, 98.8100, "Ko Poda"],
    ["Snorkeling à Ko Kai", "Récifs au pied de l''île-poulet.", "apres-midi", "beach", 7.9530, 98.8020, "Ko Kai"],
    ["Retour et marché de nuit de Krabi", "Brochettes et jus de fruits frais.", "soir", "food", 8.0620, 98.9170, "Krabi"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Tiger Cave Temple", "1 237 marches vers le Bouddha panoramique.", "matin", "visit", 8.1250, 98.9240, "Krabi"],
    ["Sources chaudes et Emerald Pool", "Cascades tièdes et bassin émeraude.", "apres-midi", "nature", 7.9210, 99.2600, "Khlong Thom"],
    ["Dernière soirée à Ao Nang", "Coucher de soleil sur les îles.", "soir", "night", 8.0320, 98.8220, "Ao Nang"]]'::jsonb);
  PERFORM seed_th_phuket(g, 6, 11, 3);
END $$;

DROP FUNCTION IF EXISTS seed_th_bangkok(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_th_chiangmai(UUID, INT, INT);
DROP FUNCTION IF EXISTS seed_th_phuket(UUID, INT, INT, INT);


-- ════════════════════════════════════════════════════════════════
-- Variante enrichie : Bangkok 5 jours (mono-ville, + Chatuchak/Wat Saket/Lumpini)
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('THA', 5);
  c := seed_city('THA', 'Bangkok', 13.7563, 100.5018, 5, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Grand Palais et Wat Phra Kaeo", "Palais royal et Bouddha d''émeraude.", "matin", "visit", 13.7500, 100.4913, "Bangkok"],
    ["Wat Pho", "Le Bouddha couché de 46 mètres.", "apres-midi", "visit", 13.7465, 100.4930, "Bangkok"],
    ["Wat Arun illuminé", "Le temple de l''Aube depuis l''autre rive.", "soir", "visit", 13.7437, 100.4889, "Bangkok"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Croisière sur les klongs", "Canaux de Thonburi en pirogue à longue queue.", "matin", "visit", 13.7400, 100.4800, "Bangkok"],
    ["Jim Thompson House et MBK", "Maison de teck puis centre commercial géant.", "apres-midi", "shopping", 13.7492, 100.5283, "Bangkok"],
    ["Chinatown (Yaowarat)", "La meilleure street food de la ville, de nuit.", "soir", "food", 13.7398, 100.5100, "Bangkok"]]'::jsonb);
  e := seed_daytrip('THA', 'Damnoen Saduak', 13.5205, 99.9598, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Marché flottant de Damnoen Saduak", "Barques de fruits et soupes sur les canaux.", "matin", "food", 13.5205, 99.9598, "Damnoen Saduak"],
    ["Marché ferroviaire de Maeklong", "Les étals repliés au passage du train.", "apres-midi", "visit", 13.4067, 99.9997, "Maeklong"],
    ["Retour et rooftop de Bangkok", "Skybar au-dessus du Chao Phraya.", "soir", "night", 13.7210, 100.5140, "Bangkok"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Marché de Chatuchak", "15 000 stands, le plus grand marché du week-end au monde.", "matin", "shopping", 13.7999, 100.5502, "Bangkok"],
    ["Wat Saket (mont d''Or)", "Panorama à 360° depuis le chedi doré.", "apres-midi", "visit", 13.7539, 100.5065, "Bangkok"],
    ["Icon Siam et rives du Chao Phraya", "Le mall spectaculaire et son marché flottant intérieur.", "soir", "visit", 13.7263, 100.5100, "Bangkok"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Parc Lumpini", "Varans et tai-chi au cœur de la ville.", "matin", "nature", 13.7314, 100.5414, "Bangkok"],
    ["Wat Benchamabophit et musée national", "Le temple de marbre puis les trésors siamois.", "apres-midi", "visit", 13.7666, 100.5140, "Bangkok"],
    ["Khao San Road", "L''artère mythique des voyageurs, dernière soirée.", "soir", "night", 13.7590, 100.4970, "Bangkok"]]'::jsonb);
END $$;
