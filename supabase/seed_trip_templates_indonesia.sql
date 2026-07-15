-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Indonésie (après seed_trip_templates_helpers.sql)
--   - 8 jours : Yogyakarta (Borobudur/Prambanan) → Ubud → sud de Bali
-- Relance : DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'IDN';
--           DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'IDN';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('IDN', 8);
  c := seed_city('IDN', 'Yogyakarta', -7.7956, 110.3695, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Borobudur au lever du soleil", "Le plus grand temple bouddhiste du monde dans la brume.", "matin", "visit", -7.6079, 110.2038, "Borobudur"],
    ["Stupas et bas-reliefs", "2 672 panneaux sculptés vers l''éveil.", "apres-midi", "visit", -7.6080, 110.2040, "Borobudur"],
    ["Prambanan au couchant", "Les flèches hindoues embrasées.", "soir", "visit", -7.7520, 110.4915, "Prambanan"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Kraton de Yogyakarta", "Le palais vivant du sultan.", "matin", "visit", -7.8054, 110.3642, "Yogyakarta"],
    ["Taman Sari", "Le château d''eau des bains royaux.", "apres-midi", "visit", -7.8100, 110.3594, "Yogyakarta"],
    ["Rue Malioboro", "Batik, gudeg et becaks du soir.", "soir", "shopping", -7.7930, 110.3660, "Yogyakarta"]]'::jsonb);
  c := seed_city('IDN', 'Ubud', -8.5069, 115.2625, 3, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Forêt des singes", "Sanctuaire des macaques sous les banians.", "matin", "nature", -8.5185, 115.2588, "Ubud"],
    ["Palais d''Ubud et marché d''art", "Danses légong et artisanat balinais.", "apres-midi", "visit", -8.5065, 115.2624, "Ubud"],
    ["Dîner face aux rizières", "Cuisine balinaise au bord des terrasses.", "soir", "food", -8.5000, 115.2600, "Ubud"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Rizières de Tegalalang", "Terrasses émeraude et balançoires au-dessus du vide.", "matin", "nature", -8.4312, 115.2777, "Tegalalang"],
    ["Temple Tirta Empul", "Bains de purification aux sources sacrées.", "apres-midi", "visit", -8.4155, 115.3153, "Tampaksiring"],
    ["Massage balinais", "Spa traditionnel au retour.", "soir", "visit", -8.5070, 115.2620, "Ubud"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Trek du mont Batur au lever du soleil", "Volcan actif au-dessus de la mer de nuages.", "matin", "nature", -8.2420, 115.3750, "Kintamani"],
    ["Sources chaudes du lac Batur", "Bassins fumants face au volcan.", "apres-midi", "nature", -8.2550, 115.4030, "Kintamani"],
    ["Repos et cafés d''Ubud", "Warungs et galeries en fin de journée.", "soir", "food", -8.5070, 115.2630, "Ubud"]]'::jsonb);
  c := seed_city('IDN', 'Seminyak', -8.6910, 115.1668, 3, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Temple de Tanah Lot", "Le temple sur son rocher marin.", "matin", "visit", -8.6212, 115.0868, "Tanah Lot"],
    ["Canggu", "Plages de surf et cafés bohèmes.", "apres-midi", "beach", -8.6478, 115.1385, "Canggu"],
    ["Coucher de soleil à Tanah Lot", "Silhouette du temple dans les vagues.", "soir", "nature", -8.6210, 115.0870, "Tanah Lot"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Plages du Bukit", "Padang Padang et Bingin, criques de surf.", "matin", "beach", -8.8110, 115.1030, "Uluwatu"],
    ["Temple d''Uluwatu", "Falaises de 70 m au-dessus de l''océan.", "apres-midi", "visit", -8.8291, 115.0849, "Uluwatu"],
    ["Danse kecak au couchant", "Le chœur de feu face à l''océan.", "soir", "night", -8.8290, 115.0850, "Uluwatu"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Plage de Seminyak", "Matinée transats et vagues.", "matin", "beach", -8.6910, 115.1580, "Seminyak"],
    ["Boutiques et spas de Seminyak", "Dernier après-midi de détente.", "apres-midi", "shopping", -8.6900, 115.1650, "Seminyak"],
    ["Fruits de mer à Jimbaran", "Poisson grillé les pieds dans le sable.", "soir", "food", -8.7900, 115.1610, "Jimbaran"]]'::jsonb);
END $$;
