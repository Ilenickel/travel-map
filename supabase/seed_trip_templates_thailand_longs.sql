-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — Thaïlande voyages LONGS (après helpers ; fichier
-- AUTONOME : à exécuter une seule fois, ne touche pas aux seeds déjà passés)
--   - 20 jours DENSE : Bangkok (4j, + Ayutthaya) → Sukhothai (1j) →
--     Chiang Mai (3j) → Chiang Rai (1j) → [vol] Koh Samui (5j) →
--     Krabi (3j) → Phuket (3j). Variante chargée du 14j chill v1 :
--     remontée continue vers le nord (Sukhothai est SUR la route
--     Bangkok → Chiang Mai, Chiang Rai plus au nord), puis vol vers le
--     golfe et descente de la côte Andaman (Krabi → Phuket, aéroport
--     international). Bangkok/Chiang Mai/Samui/Phuket reprennent les
--     journées denses de thailand_v2 ; Sukhothai, Chiang Rai et Krabi
--     sont en contenu dense propre.
-- Relance : DELETE l'éditorial THA puis rejouer thailand.sql, thailand_v2.sql ET ce fichier.
-- ════════════════════════════════════════════════════════════════

DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('THA', 20);

  -- Bangkok (4 jours : 3 propres + 1 excursion Ayutthaya en jour 3).
  c := seed_city('THA', 'Bangkok', 13.7563, 100.5018, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Grand Palais et Wat Phra Kaew", "Le Bouddha d''émeraude dans la résidence royale scintillante.", "matin", "visit", 13.7500, 100.4913, "Rattanakosin, Bangkok"],
    ["Wat Pho", "Le Bouddha couché de 46 mètres, juste au sud du palais.", "apres-midi", "visit", 13.7465, 100.4933, "Rattanakosin, Bangkok"],
    ["Wat Arun", "Le temple de l''Aube, traversée du fleuve en ferry.", "apres-midi", "visit", 13.7437, 100.4889, "Thonburi, Bangkok"],
    ["Dîner rooftop au bord du Chao Phraya", "Les temples illuminés depuis un toit-terrasse.", "soir", "food", 13.7440, 100.4900, "Bangkok"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Maison de Jim Thompson", "Teck et soieries du plus mystérieux des Américains de Bangkok.", "matin", "visit", 13.7492, 100.5283, "Pathum Wan, Bangkok"],
    ["Siam et MBK", "Les malls géants et la culture pop thaïe.", "apres-midi", "shopping", 13.7466, 100.5347, "Siam, Bangkok"],
    ["Parc Lumpini", "Varans et tai-chi, le poumon vert du centre.", "apres-midi", "nature", 13.7300, 100.5410, "Bangkok"],
    ["Street food à Yaowarat", "Chinatown en ébullition, la meilleure cuisine de rue du monde.", "soir", "food", 13.7398, 100.5090, "Chinatown, Bangkok"]]'::jsonb);
  e := seed_daytrip('THA', 'Ayutthaya', 14.3532, 100.5689, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Wat Mahathat", "La tête de Bouddha enlacée par les racines du banian.", "matin", "visit", 14.3570, 100.5680, "Ayutthaya"],
    ["Wat Phra Si Sanphet", "Les trois chedis alignés de l''ancien palais royal, à l''ouest.", "apres-midi", "visit", 14.3560, 100.5580, "Ayutthaya"],
    ["Wat Chaiwatthanaram", "Le petit Angkor au bord de la rivière, encore plus à l''ouest.", "apres-midi", "visit", 14.3430, 100.5420, "Ayutthaya"],
    ["Retour et dîner au bord du fleuve", "Dernier regard sur les ruines illuminées avant Bangkok.", "soir", "food", 14.3540, 100.5660, "Ayutthaya"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Marché flottant de Damnoen Saduak", "Barques de fruits et soupes sur les klongs, partir tôt.", "matin", "visit", 13.5199, 99.9590, "Ratchaburi"],
    ["Marché ferroviaire de Maeklong", "Les étals qui se replient au passage du train, sur la même route.", "matin", "visit", 13.4067, 99.9986, "Samut Songkhram"],
    ["Massage thaï traditionnel", "Deux heures de remise en état au retour en ville.", "apres-midi", "visit", 13.7440, 100.4940, "Bangkok"],
    ["Asiatique The Riverfront", "Grande roue et night market au bord du fleuve.", "soir", "shopping", 13.7046, 100.5024, "Bang Kho Laem, Bangkok"]]'::jsonb);

  -- Sukhothai (1 jour) — sur la route du nord, contenu dense propre.
  -- Le parc historique se visite d''est en ouest : Wat Mahathat au centre,
  -- Wat Si Sawai au sud tout proche, puis Wat Si Chum à l''angle nord-ouest.
  c := seed_city('THA', 'Sukhothai', 17.0078, 99.8237, 1, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Parc historique à vélo et Wat Mahathat", "La première capitale du Siam, lotus et bouddhas au lever.", "matin", "visit", 17.0170, 99.7040, "Vieux Sukhothai"],
    ["Wat Si Sawai", "Les trois prang khmers dans l''enceinte, tout proches.", "matin", "visit", 17.0150, 99.7020, "Vieux Sukhothai"],
    ["Wat Si Chum", "Le Bouddha géant qui regarde par la fente de son mandapa.", "apres-midi", "visit", 17.0250, 99.6930, "Vieux Sukhothai"],
    ["Wat Sa Si sur son étang", "Le chedi en cloche posé sur l''eau.", "apres-midi", "visit", 17.0190, 99.7010, "Vieux Sukhothai"],
    ["Parc illuminé et marché du soir", "Les ruines éclairées puis nouilles sukhothai au marché.", "soir", "food", 17.0180, 99.7060, "Vieux Sukhothai"]]'::jsonb);

  -- Chiang Mai (3 jours).
  c := seed_city('THA', 'Chiang Mai', 18.7883, 98.9853, 3, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Wat Phra That Doi Suthep", "L''escalier aux nagas et le chedi doré au-dessus de la ville.", "matin", "visit", 18.8048, 98.9217, "Doi Suthep, Chiang Mai"],
    ["Wat Phra Singh", "Le temple du Bouddha-Lion, joyau de la vieille ville.", "apres-midi", "visit", 18.7885, 98.9817, "Vieille ville, Chiang Mai"],
    ["Wat Chedi Luang", "Le grand chedi écroulé qui abrita le Bouddha d''émeraude.", "apres-midi", "visit", 18.7869, 98.9866, "Vieille ville, Chiang Mai"],
    ["Night Bazaar", "Artisanat des tribus et khao soi au marché de nuit.", "soir", "shopping", 18.7880, 99.0000, "Chang Klan, Chiang Mai"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Sanctuaire d''éléphants éthique", "Nourrir et observer les pachydermes sauvés, sans montée sur le dos.", "matin", "nature", 19.1000, 98.8560, "Mae Taeng, Chiang Mai"],
    ["Bain de boue avec les éléphants", "Le rituel préféré du troupeau, dans la rivière.", "apres-midi", "nature", 19.1010, 98.8570, "Mae Taeng, Chiang Mai"],
    ["Dîner khantoke", "Plats du Lanna assis sur les nattes, danses traditionnelles.", "soir", "food", 18.7900, 98.9900, "Chiang Mai"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Cours de cuisine thaïe", "Du marché au wok : curry, pad thaï et sticky rice mangue.", "matin", "food", 18.7890, 98.9860, "Chiang Mai"],
    ["Wat Umong", "Le monastère aux tunnels dans la forêt, au pied de la montagne.", "apres-midi", "visit", 18.7710, 98.9520, "Suthep, Chiang Mai"],
    ["Quartier de Nimman", "Cafés de spécialité et galeries, le Chiang Mai créatif.", "apres-midi", "visit", 18.8000, 98.9670, "Nimmanhaemin, Chiang Mai"],
    ["Rooftop à Nimman", "Cocktail face au Doi Suthep illuminé.", "soir", "night", 18.8000, 98.9660, "Nimmanhaemin, Chiang Mai"]]'::jsonb);

  -- Chiang Rai (1 jour) — contenu dense propre. Le temple blanc est au SUD
  -- de la ville, le bleu en ville, la Maison noire au NORD : une seule
  -- remontée sud → nord, soirée au centre.
  c := seed_city('THA', 'Chiang Rai', 19.9105, 99.8406, 1, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Wat Rong Khun, le temple blanc", "Le temple-miroir fantasmagorique de Chalermchai, au sud.", "matin", "visit", 19.8240, 99.7630, "Chiang Rai"],
    ["Wat Rong Suea Ten, le temple bleu", "Bleu électrique et Bouddha blanc, en remontant vers la ville.", "apres-midi", "visit", 19.9270, 99.8440, "Chiang Rai"],
    ["Baan Dam, la Maison noire", "L''antithèse du temple blanc : teck sombre et cornes, au nord.", "apres-midi", "visit", 19.9930, 99.8570, "Chiang Rai"],
    ["Tour de l''Horloge dorée et night bazaar", "Le son et lumière de 20 h puis brochettes au marché.", "soir", "night", 19.9070, 99.8300, "Chiang Rai"]]'::jsonb);

  -- Koh Samui (5 jours) — vol vers le golfe.
  c := seed_city('THA', 'Koh Samui', 9.5120, 100.0136, 5, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Plage de Chaweng", "La grande plage de sable blanc, première baignade.", "matin", "beach", 9.5350, 100.0620, "Chaweng, Koh Samui"],
    ["Farniente et cocotiers", "Transat, noix de coco fraîche et mer turquoise.", "apres-midi", "beach", 9.5360, 100.0625, "Chaweng, Koh Samui"],
    ["Fisherman''s Village de Bophut", "Vieilles maisons chinoises, boutiques et dîner les pieds dans l''eau.", "soir", "food", 9.5570, 100.0530, "Bophut, Koh Samui"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Big Buddha (Wat Phra Yai)", "Le Bouddha doré de 12 mètres sur son îlot.", "matin", "visit", 9.5670, 100.0580, "Bang Rak, Koh Samui"],
    ["Wat Plai Laem", "La déesse aux dix-huit bras sur le lac, tout proche.", "matin", "visit", 9.5730, 100.0700, "Plai Laem, Koh Samui"],
    ["Plage de Choeng Mon", "Baie calme et familiale en redescendant la pointe.", "apres-midi", "beach", 9.5620, 100.0800, "Choeng Mon, Koh Samui"],
    ["Soirée à Chaweng", "Bars de plage et jongleurs de feu.", "soir", "night", 9.5330, 100.0630, "Chaweng, Koh Samui"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Parc national marin d''Ang Thong", "42 îles karstiques, kayak entre les pains de sucre.", "matin", "nature", 9.6330, 99.6890, "Mu Ko Ang Thong"],
    ["Lagon d''émeraude de Koh Mae Ko", "Montée au point de vue sur le lac marin intérieur.", "apres-midi", "nature", 9.6410, 99.6740, "Mu Ko Ang Thong"],
    ["Retour et dîner à Bophut", "Poisson grillé après la journée en mer.", "soir", "food", 9.5570, 100.0540, "Bophut, Koh Samui"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Cascade de Na Muang", "Baignade au pied de la chute pourpre, dans la jungle.", "matin", "nature", 9.4820, 99.9930, "Na Muang, Koh Samui"],
    ["Hin Ta et Hin Yai", "Les rochers Grand-père et Grand-mère, curiosité locale.", "apres-midi", "nature", 9.4640, 100.0430, "Lamai, Koh Samui"],
    ["Plage de Lamai", "La deuxième plage de l''île, plus décontractée.", "apres-midi", "beach", 9.4670, 100.0500, "Lamai, Koh Samui"],
    ["Dîner à Lamai", "Marché de nuit et massage de plage.", "soir", "food", 9.4680, 100.0490, "Lamai, Koh Samui"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Spa et massage", "Matinée bien-être avant la traversée.", "matin", "visit", 9.5350, 100.0600, "Chaweng, Koh Samui"],
    ["Silver Beach", "Petite crique entre Chaweng et Lamai, eau cristalline.", "apres-midi", "beach", 9.4880, 100.0550, "Crystal Bay, Koh Samui"],
    ["Coucher de soleil sur la côte ouest", "Le golfe de Thaïlande de carte postale à Nathon avant l''Andaman.", "soir", "nature", 9.4530, 99.9620, "Nathon, Koh Samui"]]'::jsonb);

  -- Krabi (3 jours) — contenu dense propre, côte Andaman.
  -- J1 : Railay n''est accessible qu''en bateau depuis Ao Nang — la presqu''île
  -- se fait d''une traite (plage, grotte et point de vue se touchent).
  c := seed_city('THA', 'Krabi', 8.0863, 98.9063, 3, g, 6, 14);
  PERFORM seed_day(c, 1, '[
    ["Railay Beach en long-tail", "La presqu''île aux falaises accessible uniquement par la mer.", "matin", "beach", 8.0110, 98.8370, "Railay, Krabi"],
    ["Grotte de la Princesse (Phra Nang)", "La plage-sanctuaire sous la falaise, au bout de Railay.", "apres-midi", "beach", 8.0060, 98.8420, "Railay, Krabi"],
    ["Point de vue du lagon de Railay", "Grimpette dans la glaise pour le panorama sur les deux baies.", "apres-midi", "nature", 8.0090, 98.8400, "Railay, Krabi"],
    ["Coucher de soleil à Ao Nang", "Dîner de poisson face aux îlots.", "soir", "food", 8.0320, 98.8220, "Ao Nang, Krabi"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Excursion des 4 îles", "Koh Poda, Koh Gai et le banc de sable de Tup en long-tail.", "matin", "nature", 7.9600, 98.8100, "Ao Nang, Krabi"],
    ["Snorkeling à Koh Poda", "Poissons-perroquets sous les falaises karstiques.", "apres-midi", "nature", 7.9560, 98.8130, "Koh Poda, Krabi"],
    ["Night market de Krabi Town", "Brochettes, roti et musique live au bord de la rivière.", "soir", "food", 8.0620, 98.9160, "Krabi Town"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Temple de la Grotte du Tigre", "1 237 marches vers le Bouddha au sommet, vue à 360°.", "matin", "visit", 8.1240, 98.9240, "Krabi"],
    ["Emerald Pool et sources chaudes", "Bassins turquoise et cascades tièdes dans la jungle.", "apres-midi", "nature", 7.9270, 99.2680, "Khlong Thom, Krabi"],
    ["Dernière soirée à Ao Nang", "Massage de plage et fruits de mer.", "soir", "food", 8.0320, 98.8230, "Ao Nang, Krabi"]]'::jsonb);

  -- Phuket (3 jours) — final, aéroport international.
  c := seed_city('THA', 'Phuket', 7.8804, 98.3923, 3, g, 7, 17);
  PERFORM seed_day(c, 1, '[
    ["Vieille ville de Phuket Town", "Maisons sino-portugaises pastel et cafés de Thalang Road.", "matin", "visit", 7.8850, 98.3880, "Phuket Town"],
    ["Wat Chalong", "Le grand temple de l''île, chedi aux reliques.", "apres-midi", "visit", 7.8460, 98.3380, "Chalong, Phuket"],
    ["Big Buddha", "Le Bouddha de marbre blanc de 45 m, panorama sur les deux côtes.", "apres-midi", "visit", 7.8280, 98.3120, "Karon, Phuket"],
    ["Fruits de mer à Rawai", "Le marché aux poissons grillés du bout de l''île.", "soir", "food", 7.7780, 98.3280, "Rawai, Phuket"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Baie de Phang Nga et île de James Bond", "Pitons karstiques dressés sur la mer d''Andaman.", "matin", "nature", 8.2750, 98.5010, "Baie de Phang Nga"],
    ["Kayak dans les grottes marines", "Lagons cachés accessibles sous la roche à marée basse.", "apres-midi", "nature", 8.2500, 98.4800, "Baie de Phang Nga"],
    ["Soirée à Patong", "Bangla Road et ses néons, l''envers festif de l''île.", "soir", "night", 7.8960, 98.2960, "Patong, Phuket"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Plage de Kata", "Baignade et surf doux sur la plus jolie plage de la côte ouest.", "matin", "beach", 7.8200, 98.2980, "Kata, Phuket"],
    ["Point de vue de Karon", "Les trois baies alignées, la carte postale de Phuket.", "apres-midi", "nature", 7.8090, 98.3050, "Karon, Phuket"],
    ["Plage de Nai Harn", "Le lagon préféré des locaux, en continuant vers le sud.", "apres-midi", "beach", 7.7770, 98.3060, "Nai Harn, Phuket"],
    ["Coucher de soleil au cap Promthep", "Le point le plus au sud de l''île, dernier soir du voyage.", "soir", "nature", 7.7590, 98.3050, "Promthep, Phuket"]]'::jsonb);
END $$;
