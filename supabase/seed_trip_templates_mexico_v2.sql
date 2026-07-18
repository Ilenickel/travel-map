-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Mexique v2 (après helpers + seed_trip_templates_mexico.sql)
--   - 11 jours DENSE : Mexico (4j, + excursion Teotihuacán) → Guanajuato (2j)
--     → Guadalajara (2j) → Puerto Vallarta (3j). Progression centre → nord
--     → ouest → côte Pacifique, sans retour arrière. Couvre 3 villes
--     absentes du catalogue : Guanajuato, Guadalajara, Puerto Vallarta.
-- Relance : supprimer TOUT l'éditorial MEX puis rejouer mexico.sql PUIS mexico_v2.sql
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'MEX';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'MEX';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('MEX', 11);

  -- Mexico (4 jours : 3 propres + 1 excursion Teotihuacán en jour 3).
  c := seed_city('MEX', 'Mexico', 19.4326, -99.1332, 4, g, 1, 0);
  -- J1 centre historique : tout autour du Zócalo, Garibaldi le soir (juste au nord).
  PERFORM seed_day(c, 1, '[
    ["Zócalo et cathédrale métropolitaine", "La place géante au cœur de l''ancienne Tenochtitlán.", "matin", "visit", 19.4326, -99.1332, "Centro Histórico, Mexico"],
    ["Templo Mayor", "Les ruines du grand temple aztèque, à l''angle du Zócalo.", "matin", "visit", 19.4348, -99.1310, "Centro Histórico, Mexico"],
    ["Palais national et fresques de Diego Rivera", "L''histoire du Mexique peinte sur les murs du pouvoir.", "apres-midi", "visit", 19.4321, -99.1312, "Centro Histórico, Mexico"],
    ["Palais des Beaux-Arts", "Coupole orange Art déco et murales, en descendant l''Alameda.", "apres-midi", "visit", 19.4352, -99.1413, "Centro, Mexico"],
    ["Place Garibaldi", "Mariachis et tequila pour la première soirée.", "soir", "night", 19.4410, -99.1390, "Mexico"]]'::jsonb);
  -- J2 Chapultepec : château → anthropologie (dans le même parc), Polanco au nord.
  PERFORM seed_day(c, 2, '[
    ["Château de Chapultepec", "Le seul château royal des Amériques, sur sa colline.", "matin", "visit", 19.4204, -99.1819, "Chapultepec, Mexico"],
    ["Musée national d''anthropologie", "Pierre du Soleil et trésors mayas — l''un des plus grands musées du monde.", "apres-midi", "visit", 19.4260, -99.1863, "Chapultepec, Mexico"],
    ["Dîner à Polanco", "La table gastronomique de la capitale, au nord du parc.", "soir", "food", 19.4330, -99.1910, "Polanco, Mexico"]]'::jsonb);
  -- Excursion Teotihuacán (jour 3 — pas de day_index 3 chez la ville mère).
  e := seed_daytrip('MEX', 'Teotihuacán', 19.6925, -98.8438, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Pyramide du Soleil", "La troisième plus grande pyramide du monde, tôt avant la foule.", "matin", "visit", 19.6925, -98.8438, "Teotihuacán"],
    ["Allée des Morts et pyramide de la Lune", "Remontée de l''axe monumental de la cité des dieux.", "apres-midi", "visit", 19.6997, -98.8441, "Teotihuacán"],
    ["Dîner à Roma Norte", "Retour en ville, tacos et mezcal dans le quartier branché.", "soir", "food", 19.4190, -99.1620, "Roma Norte, Mexico"]]'::jsonb);
  -- J4 sud : Coyoacán → Xochimilco (encore plus au sud), lucha libre le soir.
  PERFORM seed_day(c, 4, '[
    ["Musée Frida Kahlo", "La Casa Azul de Coyoacán (réserver).", "matin", "visit", 19.3550, -99.1626, "Coyoacán, Mexico"],
    ["Centre de Coyoacán", "Placettes coloniales, churros et marché artisanal.", "matin", "visit", 19.3500, -99.1620, "Coyoacán, Mexico"],
    ["Trajineras de Xochimilco", "Barques fleuries sur les canaux aztèques, plus au sud.", "apres-midi", "visit", 19.2570, -99.1030, "Xochimilco, Mexico"],
    ["Lucha libre à l''Arena México", "Masques et voltige, l''autre religion nationale.", "soir", "night", 19.4227, -99.1520, "Doctores, Mexico"]]'::jsonb);

  -- Guanajuato (2 jours) — nouvelle ville du catalogue.
  c := seed_city('MEX', 'Guanajuato', 21.0190, -101.2574, 2, g, 2, 4);
  -- J1 : funiculaire et vue (haut) → théâtre et ruelles (bas), callejoneada le soir.
  PERFORM seed_day(c, 1, '[
    ["Monument au Pípila", "Montée en funiculaire, la ville multicolore aux pieds.", "matin", "visit", 21.0163, -101.2544, "Guanajuato"],
    ["Théâtre Juárez et centre", "Façade à colonnes et placettes de la ville minière Unesco.", "apres-midi", "visit", 21.0169, -101.2544, "Guanajuato"],
    ["Callejón del Beso", "La ruelle si étroite que les balcons s''embrassent.", "apres-midi", "visit", 21.0140, -101.2570, "Guanajuato"],
    ["Callejoneada avec les estudiantinas", "Sérénade en déambulant dans les ruelles la nuit.", "soir", "night", 21.0170, -101.2550, "Guanajuato"]]'::jsonb);
  -- J2 : momies (ouest) → mine La Valenciana (nord), soirée place de la Paz.
  PERFORM seed_day(c, 2, '[
    ["Musée des momies", "La collection la plus étrange du Mexique.", "matin", "visit", 21.0225, -101.2650, "Guanajuato"],
    ["Mine et église de La Valenciana", "La mine d''argent qui finança un empire, retable doré.", "apres-midi", "visit", 21.0330, -101.2570, "La Valenciana, Guanajuato"],
    ["Plaza de la Paz", "Basilique jaune et dernière soirée sous les lauriers.", "soir", "food", 21.0175, -101.2555, "Guanajuato"]]'::jsonb);

  -- Guadalajara (2 jours) — nouvelle ville du catalogue.
  c := seed_city('MEX', 'Guadalajara', 20.6597, -103.3496, 2, g, 3, 6);
  -- J1 centre : cathédrale → Hospicio Cabañas (est), mariachis le soir.
  PERFORM seed_day(c, 1, '[
    ["Cathédrale et centre historique", "Les clochers jaunes emblème de la Perle de l''Occident.", "matin", "visit", 20.6767, -103.3475, "Guadalajara"],
    ["Palais du gouvernement", "Les fresques enflammées d''Orozco autour d''Hidalgo.", "matin", "visit", 20.6760, -103.3460, "Guadalajara"],
    ["Hospicio Cabañas", "L''Homme de feu d''Orozco sous la coupole, classé Unesco.", "apres-midi", "visit", 20.6740, -103.3390, "Guadalajara"],
    ["Marché San Juan de Dios", "Le plus grand marché couvert d''Amérique latine.", "apres-midi", "shopping", 20.6720, -103.3400, "Guadalajara"],
    ["Plaza de los Mariachis", "Birria et trompettes là où le mariachi est né.", "soir", "food", 20.6720, -103.3420, "Guadalajara"]]'::jsonb);
  -- J2 : Tlaquepaque au sud-est, tequila en dégustation, dîner sur l''Avenida Chapultepec.
  PERFORM seed_day(c, 2, '[
    ["Tlaquepaque", "Village d''artisans absorbé par la ville, galeries et patios.", "matin", "shopping", 20.6410, -103.3110, "Tlaquepaque, Guadalajara"],
    ["Dégustation de tequila", "Le spiritueux national à une heure de ses champs d''agaves bleus.", "apres-midi", "food", 20.6420, -103.3120, "Tlaquepaque, Guadalajara"],
    ["Avenida Chapultepec", "Terrasses et scène locale pour la dernière soirée.", "soir", "night", 20.6710, -103.3690, "Guadalajara"]]'::jsonb);

  -- Puerto Vallarta (3 jours) — nouvelle ville du catalogue.
  c := seed_city('MEX', 'Puerto Vallarta', 20.6534, -105.2253, 3, g, 4, 8);
  -- J1 : Malecón → église → Zona Romántica → plage Los Muertos, du nord au sud.
  PERFORM seed_day(c, 1, '[
    ["Malecón", "Sculptures face au Pacifique, la promenade emblématique.", "matin", "visit", 20.6100, -105.2340, "Puerto Vallarta"],
    ["Église de Guadalupe", "La couronne emblème de la ville, au-dessus des toits.", "matin", "visit", 20.6080, -105.2320, "Puerto Vallarta"],
    ["Zona Romántica", "Ruelles pavées, galeries et cafés du vieux Vallarta.", "apres-midi", "visit", 20.6020, -105.2360, "Puerto Vallarta"],
    ["Plage de Los Muertos", "Farniente et pier au bout du quartier romantique.", "apres-midi", "beach", 20.5990, -105.2380, "Puerto Vallarta"],
    ["Coucher de soleil sur le Malecón", "Le Pacifique en feu, dîner les pieds dans le sable.", "soir", "food", 20.6090, -105.2350, "Puerto Vallarta"]]'::jsonb);
  -- J2 : bateau aux îles Marietas (large), retour en soirée.
  PERFORM seed_day(c, 2, '[
    ["Îles Marietas", "Excursion en bateau vers la plage cachée et les fous à pieds bleus.", "matin", "nature", 20.6960, -105.5680, "Bahía de Banderas"],
    ["Snorkeling dans la baie", "Coraux et bancs de poissons au retour des îles.", "apres-midi", "nature", 20.6700, -105.4500, "Bahía de Banderas"],
    ["Dîner de fruits de mer au port", "Aguachile et poisson zarandeado.", "soir", "food", 20.6070, -105.2350, "Puerto Vallarta"]]'::jsonb);
  -- J3 : jardin botanique au sud, plage en remontant, dernière soirée.
  PERFORM seed_day(c, 3, '[
    ["Jardin botanique de Vallarta", "Orchidées et forêt sèche dans la Sierra Madre.", "matin", "nature", 20.4670, -105.2900, "Cabo Corrientes"],
    ["Plage de Conchas Chinas", "Criques rocheuses et eau claire en remontant vers la ville.", "apres-midi", "beach", 20.5830, -105.2440, "Puerto Vallarta"],
    ["Dernière soirée Zona Romántica", "Mezcalerías et musique live.", "soir", "night", 20.6020, -105.2360, "Puerto Vallarta"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE du city-trip populaire : 4 jours Mexico seule
-- (+ Teotihuacán). Coexiste avec les versions v1 "chill". Mêmes journées
-- denses que le groupe 11j ci-dessus.
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('MEX', 4);
  c := seed_city('MEX', 'Mexico', 19.4326, -99.1332, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Zócalo et cathédrale métropolitaine", "La place géante au cœur de l''ancienne Tenochtitlán.", "matin", "visit", 19.4326, -99.1332, "Centro Histórico, Mexico"],
    ["Templo Mayor", "Les ruines du grand temple aztèque, à l''angle du Zócalo.", "matin", "visit", 19.4348, -99.1310, "Centro Histórico, Mexico"],
    ["Palais national et fresques de Diego Rivera", "L''histoire du Mexique peinte sur les murs du pouvoir.", "apres-midi", "visit", 19.4321, -99.1312, "Centro Histórico, Mexico"],
    ["Palais des Beaux-Arts", "Coupole orange Art déco et murales, en descendant l''Alameda.", "apres-midi", "visit", 19.4352, -99.1413, "Centro, Mexico"],
    ["Place Garibaldi", "Mariachis et tequila pour la première soirée.", "soir", "night", 19.4410, -99.1390, "Mexico"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Château de Chapultepec", "Le seul château royal des Amériques, sur sa colline.", "matin", "visit", 19.4204, -99.1819, "Chapultepec, Mexico"],
    ["Musée national d''anthropologie", "Pierre du Soleil et trésors mayas — l''un des plus grands musées du monde.", "apres-midi", "visit", 19.4260, -99.1863, "Chapultepec, Mexico"],
    ["Dîner à Polanco", "La table gastronomique de la capitale, au nord du parc.", "soir", "food", 19.4330, -99.1910, "Polanco, Mexico"]]'::jsonb);
  e := seed_daytrip('MEX', 'Teotihuacán', 19.6925, -98.8438, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Pyramide du Soleil", "La troisième plus grande pyramide du monde, tôt avant la foule.", "matin", "visit", 19.6925, -98.8438, "Teotihuacán"],
    ["Allée des Morts et pyramide de la Lune", "Remontée de l''axe monumental de la cité des dieux.", "apres-midi", "visit", 19.6997, -98.8441, "Teotihuacán"],
    ["Dîner à Roma Norte", "Retour en ville, tacos et mezcal dans le quartier branché.", "soir", "food", 19.4190, -99.1620, "Roma Norte, Mexico"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Musée Frida Kahlo", "La Casa Azul de Coyoacán (réserver).", "matin", "visit", 19.3550, -99.1626, "Coyoacán, Mexico"],
    ["Centre de Coyoacán", "Placettes coloniales, churros et marché artisanal.", "matin", "visit", 19.3500, -99.1620, "Coyoacán, Mexico"],
    ["Trajineras de Xochimilco", "Barques fleuries sur les canaux aztèques, plus au sud.", "apres-midi", "visit", 19.2570, -99.1030, "Xochimilco, Mexico"],
    ["Lucha libre à l''Arena México", "Masques et voltige, l''autre religion nationale.", "soir", "night", 19.4227, -99.1520, "Doctores, Mexico"]]'::jsonb);
END $$;
