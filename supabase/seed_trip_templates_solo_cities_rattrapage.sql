-- ════════════════════════════════════════════════════════════════
-- RATTRAPAGE — villes-seules DEU / HRV / IDN supprimées par les DELETE
-- de relance de ces 3 pays (corrections v2 du 2026-07-16), jamais
-- rejouées depuis. Extrait exact de seed_trip_templates_solo_cities.sql
-- (lignes 21-37 pour l'Allemagne, 133-144 pour la Croatie, 328-353 pour
-- l'Indonésie) — à exécuter une seule fois, après avoir vérifié que ces
-- villes n'existent plus en base pour ces 3 pays (sinon doublons) :
--   SELECT country_code, city_name FROM trip_templates
--     WHERE is_editorial = true AND group_id IS NULL AND parent_template_id IS NULL
--     AND country_code IN ('DEU','HRV','IDN');
-- Prérequis : seed_trip_templates_helpers.sql déjà en place.
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE c UUID;
BEGIN
  -- ─── Allemagne : Hambourg (2j), Francfort (1j) ───────────────────
  c := seed_city('DEU', 'Hambourg', 53.5511, 9.9937, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Speicherstadt et Miniatur Wunderland", "Entrepôts de brique sur les canaux et le plus grand réseau miniature du monde.", "matin", "visit", 53.5433, 9.9880, "HafenCity, Hambourg"],
    ["Elbphilharmonie", "La vague de verre sur le port, plaza panoramique gratuite.", "apres-midi", "visit", 53.5413, 9.9841, "HafenCity, Hambourg"],
    ["Landungsbrücken au couchant", "Les pontons du port et les grues illuminées.", "soir", "visit", 53.5459, 9.9670, "St. Pauli, Hambourg"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Lac Alster", "Tour du lac intérieur, voiliers et villas.", "matin", "nature", 53.5580, 10.0000, "Hambourg"],
    ["Église Saint-Michel", "Le clocher baroque emblème de la ville.", "apres-midi", "visit", 53.5483, 9.9787, "Neustadt, Hambourg"],
    ["Reeperbahn et Schanze", "La nuit hambourgeoise, des Beatles aux bars alternatifs.", "soir", "night", 53.5497, 9.9630, "St. Pauli, Hambourg"]]'::jsonb);

  c := seed_city('DEU', 'Francfort', 50.1109, 8.6821, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Römerberg", "La place aux maisons à colombages reconstruites.", "matin", "visit", 50.1106, 8.6820, "Altstadt, Francfort"],
    ["Main Tower", "La skyline de Mainhattan depuis la seule tour ouverte au public.", "apres-midi", "visit", 50.1123, 8.6720, "Francfort"],
    ["Cidre à Sachsenhausen", "Apfelwein dans les tavernes de la rive gauche.", "soir", "food", 50.1030, 8.6850, "Sachsenhausen, Francfort"]]'::jsonb);

  -- ─── Croatie : Zadar (1j), Rovinj (1j) ───────────────────────────
  c := seed_city('HRV', 'Zadar', 44.1194, 15.2314, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville et église Saint-Donat", "La rotonde préromane sur le forum romain.", "matin", "visit", 44.1156, 15.2244, "Zadar"],
    ["Orgue marin", "Les marches qui jouent avec les vagues.", "apres-midi", "visit", 44.1178, 15.2185, "Zadar"],
    ["Salut au Soleil au couchant", "Le disque solaire s''illumine — le plus beau coucher du monde selon Hitchcock.", "soir", "visit", 44.1180, 15.2180, "Zadar"]]'::jsonb);

  c := seed_city('HRV', 'Rovinj', 45.0812, 13.6387, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville de Rovinj", "Ruelles vénitiennes serrées sur la presqu''île.", "matin", "visit", 45.0812, 13.6387, "Rovinj"],
    ["Église Sainte-Euphémie", "Montée au campanile, l''Adriatique à 360°.", "apres-midi", "visit", 45.0817, 13.6360, "Rovinj"],
    ["Dîner de fruits de mer sur le port", "Truffes d''Istrie et poissons de l''Adriatique.", "soir", "food", 45.0800, 13.6390, "Rovinj"]]'::jsonb);

  -- ─── Indonésie : Jakarta (1j), Labuan Bajo (2j), Gili Trawangan (2j) ──
  c := seed_city('IDN', 'Jakarta', -6.2088, 106.8456, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Kota Tua", "La vieille Batavia hollandaise et le musée Fatahillah.", "matin", "visit", -6.1350, 106.8130, "Jakarta"],
    ["Monas et mosquée Istiqlal", "La flamme dorée de l''indépendance et la plus grande mosquée d''Asie du Sud-Est.", "apres-midi", "visit", -6.1754, 106.8272, "Jakarta"],
    ["Street food à Glodok", "Le Chinatown de Jakarta, nouilles et satay.", "soir", "food", -6.1450, 106.8130, "Jakarta"]]'::jsonb);

  c := seed_city('IDN', 'Labuan Bajo', -8.4964, 119.8877, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Dragons de Komodo à Rinca", "Les varans géants dans le parc national, Unesco.", "matin", "nature", -8.6530, 119.7160, "Parc national de Komodo"],
    ["Plage rose (Pink Beach)", "Le sable corail entre deux plongées.", "apres-midi", "beach", -8.6280, 119.6710, "Parc national de Komodo"],
    ["Coucher de soleil sur le port", "Les îles en silhouette depuis une paillote.", "soir", "food", -8.4960, 119.8790, "Labuan Bajo"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Point de vue de Padar", "La crête aux trois baies, l''image de l''Indonésie.", "matin", "nature", -8.6580, 119.5750, "Padar, Komodo"],
    ["Snorkeling avec les raies manta", "Manta Point et jardins de corail.", "apres-midi", "nature", -8.6350, 119.6200, "Parc national de Komodo"],
    ["Fruits de mer au night market", "Poisson grillé au retour de mer.", "soir", "food", -8.4970, 119.8780, "Labuan Bajo"]]'::jsonb);

  c := seed_city('IDN', 'Gili Trawangan', -8.3510, 116.0390, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Snorkeling avec les tortues", "Tortues vertes à quelques mètres du bord.", "matin", "nature", -8.3480, 116.0400, "Gili Trawangan"],
    ["Tour de l''île à vélo", "Aucune voiture : vélo et charrettes à cheval seulement.", "apres-midi", "nature", -8.3510, 116.0390, "Gili Trawangan"],
    ["Coucher de soleil aux balançoires", "Les swings dans l''eau face au mont Agung de Bali.", "soir", "nature", -8.3530, 116.0330, "Gili Trawangan"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Plongée aux Gilis", "Requins pointe blanche et jardins de corail.", "matin", "nature", -8.3500, 116.0420, "Gili Trawangan"],
    ["Farniente côté est", "Transats et eau turquoise.", "apres-midi", "beach", -8.3490, 116.0450, "Gili Trawangan"],
    ["Night market de Gili T", "Barbecue de poisson sur la place centrale.", "soir", "food", -8.3505, 116.0430, "Gili Trawangan"]]'::jsonb);
END $$;
