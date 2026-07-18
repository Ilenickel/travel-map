-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — France v2 (après seed_trip_templates_helpers.sql
-- et seed_trip_templates_france.sql)
--
-- Deux ajouts par rapport à la v1 :
--   - 12 jours DENSE : Paris (4j) → Lyon (2j) → Marseille (3j, + Cassis)
--     → Nice (3j, + Monaco). "Dense" = plusieurs activités par créneau
--     (2 le matin, 2 l'après-midi, 1 le soir) — plus proche du rythme réel
--     d'un voyage que les itinéraires v1 à 1 activité par créneau. Chaque
--     journée est ordonnée selon le trajet spatial réel entre les lieux
--     (jamais un aller-retour inutile ni un lieu "au milieu" visité en
--     premier ou en dernier).
--   - Strasbourg SEULE (group_id NULL) : template par ville sans voyage
--     complet — la ville n'apparaît que dans la suggestion par ville
--     (handleSuggest ne filtre pas sur group_id), jamais en "voyage
--     entier". Format simple (1 activité par créneau), + excursion Colmar.
--
-- Lyon et Marseille n'ont PAS de template seul : membres du groupe 12j,
-- elles alimentent déjà la suggestion par ville (pas de filtre group_id).
--
-- Relance : les lignes v2 ne sont pas distinguables des v1 en base (mêmes
-- is_editorial + country_code) — pour ré-exécuter, supprimer TOUT
-- l'éditorial France puis rejouer france.sql PUIS france_v2.sql :
--   DELETE FROM trip_templates WHERE is_editorial = true AND country_code = 'FRA';
--   DELETE FROM trip_template_groups WHERE is_editorial = true AND country_code = 'FRA';
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  -- ─── 12 jours dense : Paris → Lyon → Marseille → Nice ────────────
  g := seed_group('FRA', 12);

  -- Paris (4 jours) — une journée = un secteur, parcouru dans un seul sens.
  c := seed_city('FRA', 'Paris', 48.8566, 2.3522, 4, g, 1, 0);
  -- J1 Ouest : Trocadéro → Tour Eiffel → Invalides/Rodin → Orsay (vers l'est
  -- le long de la Seine), croisière au pont de l'Alma entre les deux rives.
  PERFORM seed_day(c, 1, '[
    ["Palais de Chaillot (Trocadéro)", "La plus belle vue frontale sur la tour Eiffel depuis l''esplanade.", "matin", "visit", 48.8629, 2.2871, "Trocadéro, Paris 16e"],
    ["Tour Eiffel", "Montée au monument emblématique, vue sur tout Paris.", "matin", "visit", 48.8584, 2.2945, "Champ de Mars, Paris"],
    ["Musée Rodin et Invalides", "Le Penseur dans son jardin, puis le tombeau de Napoléon.", "apres-midi", "visit", 48.8553, 2.3159, "Paris 7e"],
    ["Musée d''Orsay", "Chefs-d''œuvre impressionnistes dans une ancienne gare.", "apres-midi", "visit", 48.8600, 2.3266, "Paris 7e"],
    ["Croisière sur la Seine", "Monuments illuminés depuis un bateau-mouche.", "soir", "visit", 48.8630, 2.3010, "Pont de l''Alma, Paris"]]'::jsonb);
  -- J2 Centre : Louvre → Palais-Royal (adjacent) → Tuileries/Concorde →
  -- Vendôme → Opéra, une seule remontée vers le nord-ouest.
  PERFORM seed_day(c, 2, '[
    ["Musée du Louvre", "Le plus grand musée du monde, Joconde incluse.", "matin", "visit", 48.8606, 2.3376, "Paris 1er"],
    ["Palais-Royal", "Colonnes de Buren et jardin à arcades, juste derrière le Louvre.", "matin", "visit", 48.8637, 2.3371, "Paris 1er"],
    ["Jardin des Tuileries et place de la Concorde", "Promenade du Louvre à l''Obélisque.", "apres-midi", "nature", 48.8635, 2.3275, "Paris 1er"],
    ["Place Vendôme", "Le carré le plus luxueux de Paris, entre Concorde et Opéra.", "apres-midi", "visit", 48.8674, 2.3294, "Paris 1er"],
    ["Opéra Garnier et grands boulevards", "La façade illuminée de l''Opéra puis les grands boulevards animés (l''intérieur se visite en journée).", "soir", "visit", 48.8720, 2.3316, "Paris 9e"]]'::jsonb);
  -- J3 Rive gauche : île de la Cité → Panthéon → Luxembourg →
  -- Saint-Germain, descente puis remontée douce vers le nord-ouest.
  PERFORM seed_day(c, 3, '[
    ["Sainte-Chapelle et Conciergerie", "La nef aux mille vitraux et la prison de Marie-Antoinette.", "matin", "visit", 48.8554, 2.3450, "Paris 1er"],
    ["Cathédrale Notre-Dame et île de la Cité", "Cœur historique de Paris, parvis et point zéro.", "matin", "visit", 48.8530, 2.3499, "Île de la Cité, Paris"],
    ["Quartier latin et Panthéon", "Sorbonne, rue Mouffetard, grands hommes.", "apres-midi", "visit", 48.8462, 2.3464, "Paris 5e"],
    ["Jardin du Luxembourg", "Bassin, chaises vertes et palais du Sénat.", "apres-midi", "nature", 48.8462, 2.3372, "Paris 6e"],
    ["Saint-Germain-des-Prés", "Cafés littéraires et galeries de la rive gauche.", "soir", "food", 48.8539, 2.3338, "Paris 6e"]]'::jsonb);
  -- J4 Marais puis Montmartre : Pompidou → place des Vosges (est), puis
  -- métro vers la butte — Sacré-Cœur avant Pigalle (Pigalle est en
  -- contrebas, on finit en descendant).
  PERFORM seed_day(c, 4, '[
    ["Centre Pompidou", "Art moderne et vue depuis les escalators.", "matin", "visit", 48.8607, 2.3522, "Paris 4e"],
    ["Le Marais et place des Vosges", "Hôtels particuliers, boutiques et la plus ancienne place de Paris.", "matin", "shopping", 48.8570, 2.3626, "Paris 4e"],
    ["Montmartre et Sacré-Cœur", "Butte des artistes, place du Tertre, panorama.", "apres-midi", "visit", 48.8867, 2.3431, "Paris 18e"],
    ["Musée de Montmartre et vignes", "Le dernier vignoble de Paris derrière la butte.", "apres-midi", "visit", 48.8875, 2.3406, "Paris 18e"],
    ["Pigalle et Moulin Rouge", "Cabarets et néons du Paris nocturne, en contrebas de la butte.", "soir", "night", 48.8841, 2.3324, "Paris 18e"]]'::jsonb);

  -- Lyon (2 jours)
  c := seed_city('FRA', 'Lyon', 45.7640, 4.8357, 2, g, 2, 4);
  -- J1 : descente Fourvière → Vieux Lyon, puis traversée de la Saône vers
  -- la Presqu''île — un seul sens ouest → est, jamais de remontée.
  PERFORM seed_day(c, 1, '[
    ["Basilique Notre-Dame de Fourvière", "Panorama sur toute la ville depuis la colline qui prie.", "matin", "visit", 45.7623, 4.8222, "Fourvière, Lyon 5e"],
    ["Théâtres gallo-romains", "Deux théâtres antiques à flanc de colline, juste sous la basilique.", "matin", "visit", 45.7595, 4.8199, "Fourvière, Lyon 5e"],
    ["Vieux Lyon et traboules", "Ruelles Renaissance et passages secrets des canuts.", "apres-midi", "visit", 45.7622, 4.8270, "Vieux Lyon, Lyon 5e"],
    ["Cathédrale Saint-Jean", "Primatiale gothique et son horloge astronomique.", "apres-midi", "visit", 45.7605, 4.8274, "Vieux Lyon, Lyon 5e"],
    ["Place Bellecour et bouchon lyonnais", "Traversée de la Saône vers la Presqu''île, quenelles et tablier de sapeur.", "soir", "food", 45.7578, 4.8320, "Presqu''île, Lyon 2e"]]'::jsonb);
  -- J2 : Halles (est) → parc de la Tête d''Or (nord) → Croix-Rousse
  -- (ouest) → redescente sur les Terreaux — une boucle sans retour arrière.
  PERFORM seed_day(c, 2, '[
    ["Halles de Lyon Paul Bocuse", "Le temple de la gastronomie lyonnaise, dégustations au comptoir.", "matin", "food", 45.7630, 4.8570, "Part-Dieu, Lyon 3e"],
    ["Parc de la Tête d''Or", "Grand lac, roseraie et zoo gratuit au nord de la ville.", "matin", "nature", 45.7772, 4.8558, "Lyon 6e"],
    ["Croix-Rousse et mur des Canuts", "La colline qui travaille et sa fresque murale géante.", "apres-midi", "visit", 45.7786, 4.8280, "Croix-Rousse, Lyon 4e"],
    ["Fresque des Lyonnais", "Trompe-l''œil célèbre en redescendant le long de la Saône.", "apres-midi", "visit", 45.7691, 4.8290, "Quai Saint-Vincent, Lyon 1er"],
    ["Place des Terreaux et Hôtel de Ville", "Fontaine Bartholdi illuminée et rues piétonnes animées.", "soir", "visit", 45.7674, 4.8345, "Lyon 1er"]]'::jsonb);

  -- Marseille (3 jours : 2 propres + 1 excursion Cassis en jour 2)
  c := seed_city('FRA', 'Marseille', 43.2965, 5.3698, 3, g, 3, 6);
  -- J1 : boucle Vieux-Port → Panier (juste au nord) → Major → MuCEM (pointe
  -- ouest) → retour dîner au port — le Panier AVANT la Major/MuCEM pour ne
  -- pas le traverser deux fois.
  PERFORM seed_day(c, 1, '[
    ["Vieux-Port et ombrière", "Marché aux poissons du matin sous le miroir géant de Norman Foster.", "matin", "visit", 43.2951, 5.3740, "Vieux-Port, Marseille"],
    ["Quartier du Panier", "Ruelles colorées et street-art du plus vieux quartier de France.", "matin", "visit", 43.2988, 5.3690, "Le Panier, Marseille"],
    ["Cathédrale de la Major", "Cathédrale rayée néo-byzantine face à la mer.", "apres-midi", "visit", 43.2996, 5.3646, "La Joliette, Marseille"],
    ["MuCEM et fort Saint-Jean", "Musée des civilisations relié au fort par une passerelle au-dessus de la mer.", "apres-midi", "visit", 43.2967, 5.3607, "Marseille"],
    ["Dîner bouillabaisse au Vieux-Port", "La spécialité marseillaise face aux mâts du port.", "soir", "food", 43.2946, 5.3752, "Vieux-Port, Marseille"]]'::jsonb);
  -- Excursion Cassis (jour 2 du séjour) — la ville mère ne déclare pas de
  -- day_index 2 (même mécanisme que Nara/Kyoto au Japon).
  e := seed_daytrip('FRA', 'Cassis', 43.2140, 5.5381, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Calanques d''En-Vau et Port-Pin", "Excursion en bateau ou randonnée dans les criques turquoise.", "matin", "nature", 43.2033, 5.5010, "Parc national des Calanques"],
    ["Port de Cassis", "Façades pastel, glaciers et terrasses autour des pointus.", "apres-midi", "visit", 43.2141, 5.5390, "Cassis"],
    ["Route des Crêtes", "Falaises de Soubeyranes au soleil couchant, plus hautes falaises maritimes de France.", "soir", "nature", 43.2000, 5.5680, "Entre Cassis et La Ciotat"]]'::jsonb);
  -- J3 : Notre-Dame de la Garde (colline) → descente vers la mer par le
  -- vallon des Auffes → corniche vers le sud, puis remontée en centre-ville
  -- pour la soirée au cours Julien.
  PERFORM seed_day(c, 3, '[
    ["Notre-Dame de la Garde", "La Bonne Mère veille sur la ville, panorama à 360°.", "matin", "visit", 43.2841, 5.3712, "Marseille 6e"],
    ["Vallon des Auffes", "Minuscule port de pêche niché sous la corniche.", "apres-midi", "visit", 43.2803, 5.3495, "Endoume, Marseille"],
    ["Corniche Kennedy et plages du Prado", "Front de mer face aux îles du Frioul.", "apres-midi", "beach", 43.2610, 5.3700, "Marseille 8e"],
    ["Cours Julien", "Street-art, terrasses et scène locale pour la dernière soirée.", "soir", "night", 43.2934, 5.3830, "Marseille 6e"]]'::jsonb);

  -- Nice (3 jours : 2 propres + 1 excursion Monaco en jour 2)
  c := seed_city('FRA', 'Nice', 43.7102, 7.2620, 3, g, 4, 9);
  -- J1 : Vieux Nice → colline du Château (juste au-dessus) → port Lympia
  -- (derrière la colline) → promenade des Anglais au couchant.
  PERFORM seed_day(c, 1, '[
    ["Vieux Nice et cours Saleya", "Marché aux fleurs, ruelles colorées et socca.", "matin", "visit", 43.6961, 7.2756, "Vieux Nice"],
    ["Colline du Château", "Cascade et panorama sur la Baie des Anges, au-dessus du vieux Nice.", "matin", "nature", 43.6949, 7.2799, "Nice"],
    ["Port Lympia", "Façades ocre et pointus derrière la colline du Château.", "apres-midi", "visit", 43.6997, 7.2857, "Nice"],
    ["Place Masséna et coulée verte", "Cœur de la ville entre arcades rouges et miroir d''eau.", "apres-midi", "visit", 43.6975, 7.2700, "Nice"],
    ["Promenade des Anglais au couchant", "Front de mer mythique, chaises bleues face à la baie.", "soir", "visit", 43.6950, 7.2652, "Nice"]]'::jsonb);
  -- Excursion Monaco (jour 2 du séjour).
  e := seed_daytrip('FRA', 'Monaco', 43.7384, 7.4246, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Rocher et palais princier", "Relève de la garde et vieille ville de Monaco-Ville.", "matin", "visit", 43.7314, 7.4206, "Monaco"],
    ["Musée océanographique", "Aquariums historiques accrochés à la falaise, sur le même Rocher.", "apres-midi", "visit", 43.7307, 7.4256, "Monaco"],
    ["Jardin japonais et Larvotto", "Pause zen en redescendant vers Monte-Carlo par le front de mer.", "apres-midi", "nature", 43.7440, 7.4300, "Monaco"],
    ["Place du Casino de Monte-Carlo", "Casino, jardins et défilé de bolides illuminés.", "soir", "night", 43.7392, 7.4283, "Monaco"]]'::jsonb);
  -- J3 : Cimiez au nord de la ville, puis Èze à l''est, retour en soirée —
  -- Èze en dernier pour ne pas faire l''aller-retour deux fois.
  PERFORM seed_day(c, 3, '[
    ["Musée Matisse et arènes de Cimiez", "Villa génoise dans une oliveraie sur les hauteurs de Nice.", "matin", "visit", 43.7196, 7.2760, "Cimiez, Nice"],
    ["Monastère de Cimiez", "Jardin suspendu et vue sur la ville, à deux pas du musée.", "matin", "nature", 43.7213, 7.2793, "Cimiez, Nice"],
    ["Èze village", "Village médiéval perché et jardin exotique au-dessus de la mer.", "apres-midi", "visit", 43.7275, 7.3617, "Èze"],
    ["Dîner dans le Vieux Nice", "Dernière soirée niçoise, pissaladière et vin de Bellet.", "soir", "food", 43.6965, 7.2745, "Vieux Nice"]]'::jsonb);

  -- ─── Strasbourg seule (2 jours, + excursion Colmar) ──────────────
  -- group_id NULL : proposée uniquement dans la suggestion par ville.
  c := seed_city('FRA', 'Strasbourg', 48.5734, 7.7521, 2, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Cathédrale Notre-Dame de Strasbourg", "Flèche de grès rose et horloge astronomique.", "matin", "visit", 48.5818, 7.7509, "Strasbourg"],
    ["Petite France", "Maisons à colombages et canaux des anciens tanneurs.", "apres-midi", "visit", 48.5793, 7.7409, "Strasbourg"],
    ["Winstub du centre", "Choucroute et vins d''Alsace dans une taverne traditionnelle.", "soir", "food", 48.5810, 7.7460, "Strasbourg"]]'::jsonb);
  e := seed_daytrip('FRA', 'Colmar', 48.0794, 7.3585, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Petite Venise de Colmar", "Excursion à Colmar : canaux fleuris et maisons à pans de bois.", "matin", "visit", 48.0763, 7.3585, "Colmar"],
    ["Musée Unterlinden", "Le retable d''Issenheim dans un ancien couvent.", "apres-midi", "visit", 48.0790, 7.3553, "Colmar"],
    ["Vieille ville de Colmar", "Ruelles illuminées et dîner alsacien avant le retour.", "soir", "food", 48.0778, 7.3557, "Colmar"]]'::jsonb);
END $$;

-- ════════════════════════════════════════════════════════════════
-- Variante DENSE des voyages courts populaires : 5 jours Paris seul
-- (+ Versailles). Coexiste avec le 5j v1 "chill" — deux rythmes proposés.
-- Mêmes journées denses que le groupe 12j ci-dessus (duplication assumée,
-- comme le seed Japon v1 : chaque groupe a besoin de ses propres lignes,
-- la dédup par contenu de handleSuggest n'en garde qu'une par ville).
-- ════════════════════════════════════════════════════════════════
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('FRA', 5);
  c := seed_city('FRA', 'Paris', 48.8566, 2.3522, 5, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Palais de Chaillot (Trocadéro)", "La plus belle vue frontale sur la tour Eiffel depuis l''esplanade.", "matin", "visit", 48.8629, 2.2871, "Trocadéro, Paris 16e"],
    ["Tour Eiffel", "Montée au monument emblématique, vue sur tout Paris.", "matin", "visit", 48.8584, 2.2945, "Champ de Mars, Paris"],
    ["Musée Rodin et Invalides", "Le Penseur dans son jardin, puis le tombeau de Napoléon.", "apres-midi", "visit", 48.8553, 2.3159, "Paris 7e"],
    ["Musée d''Orsay", "Chefs-d''œuvre impressionnistes dans une ancienne gare.", "apres-midi", "visit", 48.8600, 2.3266, "Paris 7e"],
    ["Croisière sur la Seine", "Monuments illuminés depuis un bateau-mouche.", "soir", "visit", 48.8630, 2.3010, "Pont de l''Alma, Paris"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée du Louvre", "Le plus grand musée du monde, Joconde incluse.", "matin", "visit", 48.8606, 2.3376, "Paris 1er"],
    ["Palais-Royal", "Colonnes de Buren et jardin à arcades, juste derrière le Louvre.", "matin", "visit", 48.8637, 2.3371, "Paris 1er"],
    ["Jardin des Tuileries et place de la Concorde", "Promenade du Louvre à l''Obélisque.", "apres-midi", "nature", 48.8635, 2.3275, "Paris 1er"],
    ["Place Vendôme", "Le carré le plus luxueux de Paris, entre Concorde et Opéra.", "apres-midi", "visit", 48.8674, 2.3294, "Paris 1er"],
    ["Opéra Garnier et grands boulevards", "La façade illuminée de l''Opéra puis les grands boulevards animés (l''intérieur se visite en journée).", "soir", "visit", 48.8720, 2.3316, "Paris 9e"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Sainte-Chapelle et Conciergerie", "La nef aux mille vitraux et la prison de Marie-Antoinette.", "matin", "visit", 48.8554, 2.3450, "Paris 1er"],
    ["Cathédrale Notre-Dame et île de la Cité", "Cœur historique de Paris, parvis et point zéro.", "matin", "visit", 48.8530, 2.3499, "Île de la Cité, Paris"],
    ["Quartier latin et Panthéon", "Sorbonne, rue Mouffetard, grands hommes.", "apres-midi", "visit", 48.8462, 2.3464, "Paris 5e"],
    ["Jardin du Luxembourg", "Bassin, chaises vertes et palais du Sénat.", "apres-midi", "nature", 48.8462, 2.3372, "Paris 6e"],
    ["Saint-Germain-des-Prés", "Cafés littéraires et galeries de la rive gauche.", "soir", "food", 48.8539, 2.3338, "Paris 6e"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Centre Pompidou", "Art moderne et vue depuis les escalators.", "matin", "visit", 48.8607, 2.3522, "Paris 4e"],
    ["Le Marais et place des Vosges", "Hôtels particuliers, boutiques et la plus ancienne place de Paris.", "matin", "shopping", 48.8570, 2.3626, "Paris 4e"],
    ["Montmartre et Sacré-Cœur", "Butte des artistes, place du Tertre, panorama.", "apres-midi", "visit", 48.8867, 2.3431, "Paris 18e"],
    ["Musée de Montmartre et vignes", "Le dernier vignoble de Paris derrière la butte.", "apres-midi", "visit", 48.8875, 2.3406, "Paris 18e"],
    ["Pigalle et Moulin Rouge", "Cabarets et néons du Paris nocturne, en contrebas de la butte.", "soir", "night", 48.8841, 2.3324, "Paris 18e"]]'::jsonb);
  -- Excursion Versailles (jour 5) : château → jardins → Trianon, du
  -- bâtiment principal vers le fond du domaine, sans revenir sur ses pas.
  e := seed_daytrip('FRA', 'Versailles', 48.8049, 2.1204, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Château de Versailles", "Galerie des Glaces et grands appartements royaux.", "matin", "visit", 48.8049, 2.1204, "Versailles"],
    ["Jardins de Versailles", "Bosquets, bassins et grandes eaux de Le Nôtre.", "apres-midi", "nature", 48.8026, 2.1130, "Versailles"],
    ["Domaine de Trianon", "Grand et Petit Trianon, hameau de la Reine, au fond du parc.", "apres-midi", "visit", 48.8151, 2.1093, "Versailles"],
    ["Retour et dîner à Paris", "Dernière soirée dans un bistrot parisien.", "soir", "food", 48.8530, 2.3499, "Paris"]]'::jsonb);
END $$;
