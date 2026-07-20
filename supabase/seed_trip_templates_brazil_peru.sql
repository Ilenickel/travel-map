-- ════════════════════════════════════════════════════════════════
-- Itinéraires éditoriaux — BRÉSIL et PÉROU (après seed_trip_templates_helpers.sql)
-- BRÉSIL :
--   - 10 jours LÉGER : Rio (4j) → Paraty (2j) → São Paulo (2j) → Iguaçu (2j).
--     Descente de la côte vers le sud puis vol pour les chutes, sans retour.
--   - 14 jours DENSE : Rio (4j) → São Paulo (2j) → Iguaçu (2j) → Salvador (3j)
--     → Manaus (3j). Sud-Est → Sud → Nordeste → Amazonie, un vol par étape.
-- PÉROU :
--   - 10 jours LÉGER : Lima (3j) → Arequipa (2j) → Cusco (5j, Vallée sacrée
--     + Machu Picchu + Maras-Moray en excursions).
--   - 14 jours DENSE : Lima (2j) → Paracas (1j) → Huacachina (1j) →
--     Arequipa (3j, + canyon de Colca) → Puno (2j) → Cusco (5j).
--     La boucle sud classique, en altitude progressive (bon pour le soroche).
-- Villes solo : Brasília (1j).
-- Relance : par pays, DELETE trip_templates puis trip_template_groups
--   WHERE is_editorial = true AND country_code IN ('BRA','PER'), rejouer.
-- ════════════════════════════════════════════════════════════════

-- ─── BRA 10 jours LÉGER : Rio → Paraty → São Paulo → Iguaçu ───────
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('BRA', 10);

  -- Rio de Janeiro (4 jours).
  c := seed_city('BRA', 'Rio de Janeiro', -22.9068, -43.1729, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Christ Rédempteur au Corcovado", "Le train à crémaillère dans la forêt de Tijuca jusqu''à la statue, tôt pour la lumière.", "matin", "visit", -22.9519, -43.2105, "Corcovado, Rio de Janeiro"],
    ["Lagoa Rodrigo de Freitas", "Le tour du lagon à vélo, le Corcovado dans le rétroviseur.", "apres-midi", "nature", -22.9711, -43.2247, "Lagoa, Rio de Janeiro"],
    ["Dîner à Ipanema", "Première caïpirinha dans le quartier de la bossa nova.", "soir", "food", -22.9840, -43.1980, "Ipanema, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Pain de Sucre en téléphérique", "Deux bondinhos jusqu''au sommet, toute la baie de Guanabara.", "matin", "nature", -22.9486, -43.1566, "Urca, Rio de Janeiro"],
    ["Plage de Copacabana", "Les 4 km de la plage la plus célèbre du monde, eau de coco à la main.", "apres-midi", "nature", -22.9711, -43.1822, "Copacabana, Rio de Janeiro"],
    ["Churrascaria", "Le rodízio de viandes à volonté, institution carioca.", "soir", "food", -22.9750, -43.1900, "Copacabana, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Escalier Selarón et Lapa", "Les 215 marches de mosaïque du Chilien Selarón.", "matin", "visit", -22.9128, -43.1790, "Lapa, Rio de Janeiro"],
    ["Musée du Lendemain et Boulevard Olímpico", "L''aile blanche de Calatrava et les fresques géantes du port.", "apres-midi", "visit", -22.8944, -43.1820, "Centro, Rio de Janeiro"],
    ["Samba à Lapa", "Sous les arches de l''aqueduc, les salles de samba jusqu''au matin.", "soir", "night", -22.9130, -43.1800, "Lapa, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Morro Dois Irmãos", "La randonnée courte au-dessus de la favela Vidigal, plus belle vue de Rio.", "matin", "nature", -22.9930, -43.2270, "Vidigal, Rio de Janeiro"],
    ["Plage d''Ipanema", "Baignade au poste 9, le rendez-vous des cariocas.", "apres-midi", "nature", -22.9880, -43.1930, "Ipanema, Rio de Janeiro"],
    ["Coucher de soleil à l''Arpoador", "Le rocher entre Ipanema et Copacabana, applaudi chaque soir.", "soir", "nature", -22.9890, -43.1880, "Arpoador, Rio de Janeiro"]]'::jsonb);

  -- Paraty (2 jours).
  c := seed_city('BRA', 'Paraty', -23.2178, -44.7131, 2, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Centre colonial de Paraty", "Ruelles pavées irrégulières et maisons blanches aux portes colorées, Unesco.", "matin", "visit", -23.2178, -44.7131, "Paraty"],
    ["Goélette dans la baie", "Îles et plages accessibles seulement par la mer, arrêts baignade.", "apres-midi", "nature", -23.2200, -44.7100, "Baie de Paraty"],
    ["Cachaça et ruelles le soir", "Dégustation des alambics locaux puis dîner aux chandelles.", "soir", "food", -23.2180, -44.7140, "Paraty"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Plage de Trindade", "Le village de pêcheurs et ses plages sauvages au sud de Paraty.", "matin", "nature", -23.3410, -44.7280, "Trindade, Paraty"],
    ["Piscine naturelle du Caixa d''Aço", "Le lagon émeraude entre les rochers, au bout du sentier.", "apres-midi", "nature", -23.3500, -44.7180, "Trindade, Paraty"],
    ["Retour à Paraty", "Poisson du jour sur le port historique.", "soir", "food", -23.2190, -44.7120, "Paraty"]]'::jsonb);

  -- São Paulo (2 jours).
  c := seed_city('BRA', 'São Paulo', -23.5505, -46.6333, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Avenue Paulista et MASP", "L''artère mythique et le musée d''art suspendu sur ses piliers rouges.", "matin", "visit", -23.5614, -46.6559, "Paulista, São Paulo"],
    ["Parc Ibirapuera", "Le Central Park pauliste, pavillons de Niemeyer entre les lacs.", "apres-midi", "nature", -23.5874, -46.6576, "Ibirapuera, São Paulo"],
    ["Vila Madalena", "Bars, terrasses et street art du Beco do Batman à la nuit.", "soir", "night", -23.5560, -46.6900, "Vila Madalena, São Paulo"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Cathédrale da Sé et Pátio do Colégio", "Le point zéro de la ville et sa fondation jésuite de 1554.", "matin", "visit", -23.5507, -46.6334, "Centro, São Paulo"],
    ["Marché municipal", "Vitraux, fruits exotiques et l''énorme sandwich à la mortadelle.", "apres-midi", "food", -23.5416, -46.6294, "Centro, São Paulo"],
    ["Dîner à Pinheiros", "L''une des grandes tables de la capitale gastronomique d''Amérique du Sud.", "soir", "food", -23.5640, -46.6820, "Pinheiros, São Paulo"]]'::jsonb);

  -- Foz do Iguaçu (2 jours).
  c := seed_city('BRA', 'Foz do Iguaçu', -25.5478, -54.5882, 2, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Chutes côté brésilien", "La vue panoramique sur les 275 cascades et la passerelle sous les embruns.", "matin", "nature", -25.6953, -54.4367, "Parc national de l''Iguaçu"],
    ["Parc des Oiseaux", "Toucans et aras en volières immersives, à l''entrée du parc.", "apres-midi", "nature", -25.6130, -54.4820, "Foz do Iguaçu"],
    ["Dîner à Foz", "Churrasco à la frontière des trois pays.", "soir", "food", -25.5480, -54.5880, "Foz do Iguaçu"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Garganta del Diablo côté argentin", "Le train du parc puis la passerelle au-dessus du gouffre qui gronde.", "matin", "nature", -25.6912, -54.4426, "Parc national Iguazú, Argentine"],
    ["Circuits inférieur et supérieur", "Les passerelles au pied et au sommet des cascades.", "apres-midi", "nature", -25.6800, -54.4450, "Parc national Iguazú, Argentine"],
    ["Marco das Três Fronteiras", "Le confluent Brésil-Argentine-Paraguay au coucher du soleil.", "soir", "visit", -25.5900, -54.5940, "Foz do Iguaçu"]]'::jsonb);
END $$;

-- ─── BRA 14 jours DENSE : Rio → São Paulo → Iguaçu → Salvador → Manaus ──
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('BRA', 14);

  -- Rio de Janeiro (4 jours denses).
  c := seed_city('BRA', 'Rio de Janeiro', -22.9068, -43.1729, 4, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Christ Rédempteur au Corcovado", "Premier train à crémaillère, la statue avant la foule.", "matin", "visit", -22.9519, -43.2105, "Corcovado, Rio de Janeiro"],
    ["Santa Teresa", "Le quartier bohème sur la colline, ateliers et vieux tram jaune.", "apres-midi", "visit", -22.9210, -43.1870, "Santa Teresa, Rio de Janeiro"],
    ["Escalier Selarón", "La descente par les 215 marches de mosaïque vers Lapa.", "apres-midi", "visit", -22.9128, -43.1790, "Lapa, Rio de Janeiro"],
    ["Nuit à Lapa", "Samba sous les arches de l''aqueduc.", "soir", "night", -22.9130, -43.1800, "Lapa, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Pain de Sucre en téléphérique", "Les deux bondinhos dès l''ouverture, la baie encore calme.", "matin", "nature", -22.9486, -43.1566, "Urca, Rio de Janeiro"],
    ["Sentier Claudio Coutinho et Praia Vermelha", "Le sentier plat au pied du morro, ouistitis dans les arbres.", "matin", "nature", -22.9550, -43.1650, "Urca, Rio de Janeiro"],
    ["Plage de Copacabana", "Baignade et footvolley sur les 4 km mythiques.", "apres-midi", "nature", -22.9711, -43.1822, "Copacabana, Rio de Janeiro"],
    ["Fort de Copacabana", "Le fort de 1914 au bout de la plage, café Colombo face aux vagues.", "apres-midi", "visit", -22.9860, -43.1870, "Copacabana, Rio de Janeiro"],
    ["Churrascaria", "Rodízio de viandes à volonté.", "soir", "food", -22.9750, -43.1900, "Copacabana, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Théâtre municipal et Cinelândia", "L''opéra Belle Époque et la place des manifestations.", "matin", "visit", -22.9100, -43.1760, "Centro, Rio de Janeiro"],
    ["Confeitaria Colombo", "Miroirs et pâtisseries dans le salon de thé de 1894.", "matin", "food", -22.9050, -43.1770, "Centro, Rio de Janeiro"],
    ["Musée du Lendemain et Boulevard Olímpico", "Calatrava et les fresques monumentales de Kobra sur le port.", "apres-midi", "visit", -22.8944, -43.1820, "Centro, Rio de Janeiro"],
    ["Roda de samba à Pedra do Sal", "La samba de rue née ici, sur les pavés du petit Afrique.", "soir", "night", -22.8970, -43.1850, "Saúde, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Randonnée de Pedra Bonita", "45 minutes de montée, les deltaplanes s''élancent à côté.", "matin", "nature", -22.9850, -43.2790, "São Conrado, Rio de Janeiro"],
    ["Plage d''Ipanema", "Poste 9, coco gelada et défilé permanent.", "apres-midi", "nature", -22.9880, -43.1930, "Ipanema, Rio de Janeiro"],
    ["Coucher de soleil à l''Arpoador", "Le rocher applaudi chaque soir entre les deux plages.", "apres-midi", "nature", -22.9890, -43.1880, "Arpoador, Rio de Janeiro"],
    ["Bars d''Ipanema", "Garota de Ipanema et bossa nova pour la dernière nuit carioca.", "soir", "night", -22.9840, -43.2000, "Ipanema, Rio de Janeiro"]]'::jsonb);

  -- São Paulo (2 jours denses).
  c := seed_city('BRA', 'São Paulo', -23.5505, -46.6333, 2, g, 2, 4);
  PERFORM seed_day(c, 1, '[
    ["Avenue Paulista et MASP", "Le musée suspendu et son trottoir d''artistes le dimanche.", "matin", "visit", -23.5614, -46.6559, "Paulista, São Paulo"],
    ["Parc Ibirapuera", "Pavillons de Niemeyer, musée afro-brésilien et lacs.", "apres-midi", "nature", -23.5874, -46.6576, "Ibirapuera, São Paulo"],
    ["Beco do Batman", "La ruelle-galerie du street art pauliste.", "apres-midi", "visit", -23.5560, -46.6890, "Vila Madalena, São Paulo"],
    ["Bars de Vila Madalena", "Terrasses et botecos jusqu''au bout de la nuit.", "soir", "night", -23.5560, -46.6900, "Vila Madalena, São Paulo"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Cathédrale da Sé et Pátio do Colégio", "Le point zéro et la fondation jésuite de la mégapole.", "matin", "visit", -23.5507, -46.6334, "Centro, São Paulo"],
    ["Marché municipal", "Le sandwich à la mortadelle sous les vitraux de 1933.", "matin", "food", -23.5416, -46.6294, "Centro, São Paulo"],
    ["Pinacothèque de São Paulo", "Le plus vieux musée d''art de la ville dans sa halle de brique.", "apres-midi", "visit", -23.5340, -46.6330, "Luz, São Paulo"],
    ["Terrasse du Farol Santander", "La skyline infinie du 26e étage de la banque 1947.", "apres-midi", "visit", -23.5450, -46.6340, "Centro, São Paulo"],
    ["Baixo Augusta", "La rue qui ne dort jamais, bars et comptoirs.", "soir", "night", -23.5540, -46.6520, "Consolação, São Paulo"]]'::jsonb);

  -- Foz do Iguaçu (2 jours denses).
  c := seed_city('BRA', 'Foz do Iguaçu', -25.5478, -54.5882, 2, g, 3, 6);
  PERFORM seed_day(c, 1, '[
    ["Chutes côté brésilien", "Le panorama d''ensemble sur les 275 cascades.", "matin", "nature", -25.6953, -54.4367, "Parc national de l''Iguaçu"],
    ["Passerelle de la Garganta", "Sous les embruns, au plus près du mur d''eau.", "matin", "nature", -25.6890, -54.4420, "Parc national de l''Iguaçu"],
    ["Parc des Oiseaux", "Toucans, aras et harpies en volières immersives.", "apres-midi", "nature", -25.6130, -54.4820, "Foz do Iguaçu"],
    ["Marco das Três Fronteiras", "Le confluent des trois pays au coucher du soleil, spectacle folklorique.", "soir", "visit", -25.5900, -54.5940, "Foz do Iguaçu"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Garganta del Diablo côté argentin", "Le train écologique puis le gouffre qui avale le fleuve.", "matin", "nature", -25.6912, -54.4426, "Parc national Iguazú, Argentine"],
    ["Circuit supérieur", "Au sommet des cascades, les arcs-en-ciel sous les pieds.", "apres-midi", "nature", -25.6790, -54.4440, "Parc national Iguazú, Argentine"],
    ["Circuit inférieur", "Au pied des chutes, coatis sur les passerelles.", "apres-midi", "nature", -25.6820, -54.4460, "Parc national Iguazú, Argentine"],
    ["Dîner churrasco à Foz", "Dernière soirée à la frontière avant le Nordeste.", "soir", "food", -25.5480, -54.5880, "Foz do Iguaçu"]]'::jsonb);

  -- Salvador (3 jours).
  c := seed_city('BRA', 'Salvador', -12.9714, -38.5014, 3, g, 4, 8);
  PERFORM seed_day(c, 1, '[
    ["Pelourinho", "Les façades pastel et pavés du centre colonial, Unesco.", "matin", "visit", -12.9720, -38.5090, "Pelourinho, Salvador"],
    ["Église São Francisco", "La nef entièrement dorée à la feuille, sommet du baroque brésilien.", "matin", "visit", -12.9730, -38.5080, "Pelourinho, Salvador"],
    ["Elevador Lacerda et Mercado Modelo", "L''ascenseur Art déco entre ville haute et ville basse.", "apres-midi", "visit", -12.9740, -38.5130, "Comércio, Salvador"],
    ["Capoeira et tambours au Pelourinho", "Rodas de rue et répétitions d''Olodum à la nuit tombée.", "soir", "night", -12.9720, -38.5090, "Pelourinho, Salvador"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Phare de Barra", "Le fort blanc et son musée nautique à l''entrée de la baie.", "matin", "visit", -13.0100, -38.5320, "Barra, Salvador"],
    ["Plage de Porto da Barra", "La petite plage urbaine la plus aimée des Soteropolitains.", "apres-midi", "nature", -13.0030, -38.5330, "Barra, Salvador"],
    ["Acarajé chez une baiana", "Le beignet de haricots frit au dendê, sur la place de Rio Vermelho.", "soir", "food", -13.0130, -38.4910, "Rio Vermelho, Salvador"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Église du Bonfim", "Les rubans colorés noués aux grilles du sanctuaire le plus vénéré de Bahia.", "matin", "visit", -12.9250, -38.5080, "Bonfim, Salvador"],
    ["Ribeira", "Glaces centenaires et front de mer paisible de la presqu''île.", "apres-midi", "food", -12.9210, -38.5010, "Ribeira, Salvador"],
    ["Solar do Unhão et MAM", "Le moulin colonial devenu musée d''art moderne, jazz au couchant sur la baie.", "soir", "visit", -12.9770, -38.5170, "Comércio, Salvador"]]'::jsonb);

  -- Manaus (3 jours).
  c := seed_city('BRA', 'Manaus', -3.1190, -60.0217, 3, g, 5, 11);
  PERFORM seed_day(c, 1, '[
    ["Théâtre Amazonas", "L''opéra de 1896 bâti par les barons du caoutchouc, coupole aux couleurs du drapeau.", "matin", "visit", -3.1300, -60.0230, "Centro, Manaus"],
    ["Marché Adolpho Lisboa", "Poissons-monstres du fleuve et fruits inconnus sous la halle Eiffel.", "apres-midi", "food", -3.1410, -60.0210, "Centro, Manaus"],
    ["Port et coucher de soleil sur le rio Negro", "Les bateaux-bus du fleuve dans la lumière orange.", "soir", "nature", -3.1400, -60.0250, "Manaus"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Rencontre des eaux", "Le rio Negro noir et le Solimões café coulent côte à côte sans se mélanger.", "matin", "nature", -3.1360, -59.9040, "Manaus"],
    ["Dauphins roses du rio Negro", "Les botos qui frôlent les pontons des communautés.", "apres-midi", "nature", -3.0500, -60.1800, "Rio Negro, Manaus"],
    ["Communauté ribeirinha", "Manioc, farine et vie du fleuve chez les riverains.", "apres-midi", "visit", -3.0600, -60.2000, "Rio Negro, Manaus"],
    ["Soirée à Manaus", "Tacacá et jus d''açaí sur la place du théâtre.", "soir", "food", -3.1300, -60.0230, "Centro, Manaus"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Canoë dans les igapós", "La forêt inondée en silence, singes hurleurs et paresseux.", "matin", "nature", -3.0800, -60.3000, "Rio Negro, Manaus"],
    ["Pêche aux piranhas", "La tradition du fleuve, canne de bambou et viande au bout du fil.", "apres-midi", "nature", -3.0900, -60.2800, "Rio Negro, Manaus"],
    ["Dernier coucher de soleil amazonien", "Le ciel en feu sur l''eau noire pour clore le voyage.", "soir", "nature", -3.1000, -60.2500, "Rio Negro, Manaus"]]'::jsonb);
END $$;

-- ─── BRA 21 jours DENSE grand tour + faune : Rio → São Paulo →
--     Pantanal → Iguaçu → Salvador → Manaus (Sud-Est → détour faune
--     à l''ouest → Sud → Nordeste → Amazonie) ─────────────────────────
DO $$
DECLARE g UUID; c UUID;
BEGIN
  g := seed_group('BRA', 21);

  -- Rio de Janeiro (5 jours : les 4 jours denses + une journée Niterói).
  c := seed_city('BRA', 'Rio de Janeiro', -22.9068, -43.1729, 5, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Christ Rédempteur au Corcovado", "Premier train à crémaillère, la statue avant la foule.", "matin", "visit", -22.9519, -43.2105, "Corcovado, Rio de Janeiro"],
    ["Santa Teresa", "Le quartier bohème sur la colline, ateliers et vieux tram jaune.", "apres-midi", "visit", -22.9210, -43.1870, "Santa Teresa, Rio de Janeiro"],
    ["Escalier Selarón", "La descente par les 215 marches de mosaïque vers Lapa.", "apres-midi", "visit", -22.9128, -43.1790, "Lapa, Rio de Janeiro"],
    ["Nuit à Lapa", "Samba sous les arches de l''aqueduc.", "soir", "night", -22.9130, -43.1800, "Lapa, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Pain de Sucre en téléphérique", "Les deux bondinhos dès l''ouverture, la baie encore calme.", "matin", "nature", -22.9486, -43.1566, "Urca, Rio de Janeiro"],
    ["Sentier Claudio Coutinho et Praia Vermelha", "Le sentier plat au pied du morro, ouistitis dans les arbres.", "matin", "nature", -22.9550, -43.1650, "Urca, Rio de Janeiro"],
    ["Plage de Copacabana", "Baignade et footvolley sur les 4 km mythiques.", "apres-midi", "nature", -22.9711, -43.1822, "Copacabana, Rio de Janeiro"],
    ["Fort de Copacabana", "Le fort de 1914 au bout de la plage, café Colombo face aux vagues.", "apres-midi", "visit", -22.9860, -43.1870, "Copacabana, Rio de Janeiro"],
    ["Churrascaria", "Rodízio de viandes à volonté.", "soir", "food", -22.9750, -43.1900, "Copacabana, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Théâtre municipal et Cinelândia", "L''opéra Belle Époque et la place des manifestations.", "matin", "visit", -22.9100, -43.1760, "Centro, Rio de Janeiro"],
    ["Confeitaria Colombo", "Miroirs et pâtisseries dans le salon de thé de 1894.", "matin", "food", -22.9050, -43.1770, "Centro, Rio de Janeiro"],
    ["Musée du Lendemain et Boulevard Olímpico", "Calatrava et les fresques monumentales de Kobra sur le port.", "apres-midi", "visit", -22.8944, -43.1820, "Centro, Rio de Janeiro"],
    ["Roda de samba à Pedra do Sal", "La samba de rue née ici, sur les pavés du petit Afrique.", "soir", "night", -22.8970, -43.1850, "Saúde, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Randonnée de Pedra Bonita", "45 minutes de montée, les deltaplanes s''élancent à côté.", "matin", "nature", -22.9850, -43.2790, "São Conrado, Rio de Janeiro"],
    ["Plage d''Ipanema", "Poste 9, coco gelada et défilé permanent.", "apres-midi", "nature", -22.9880, -43.1930, "Ipanema, Rio de Janeiro"],
    ["Coucher de soleil à l''Arpoador", "Le rocher applaudi chaque soir entre les deux plages.", "apres-midi", "nature", -22.9890, -43.1880, "Arpoador, Rio de Janeiro"],
    ["Bars d''Ipanema", "Garota de Ipanema et bossa nova.", "soir", "night", -22.9840, -43.2000, "Ipanema, Rio de Janeiro"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Ferry vers Niterói", "La traversée de la baie de Guanabara, Rio qui s''éloigne à la poupe.", "matin", "visit", -22.8960, -43.1050, "Niterói"],
    ["MAC de Niterói", "La soucoupe blanche d''Oscar Niemeyer suspendue au-dessus de la baie.", "matin", "visit", -22.9040, -43.1140, "Niterói"],
    ["Plage d''Icaraí", "La vue retour sur le Pain de Sucre depuis l''autre rive.", "apres-midi", "nature", -22.9080, -43.1050, "Niterói"],
    ["Dernière soirée carioca", "Retour à Ipanema pour la dernière caïpirinha avant l''ouest sauvage.", "soir", "food", -22.9840, -43.1980, "Ipanema, Rio de Janeiro"]]'::jsonb);

  -- São Paulo (2 jours, reuse dense).
  c := seed_city('BRA', 'São Paulo', -23.5505, -46.6333, 2, g, 2, 5);
  PERFORM seed_day(c, 1, '[
    ["Avenue Paulista et MASP", "Le musée suspendu et son trottoir d''artistes le dimanche.", "matin", "visit", -23.5614, -46.6559, "Paulista, São Paulo"],
    ["Parc Ibirapuera", "Pavillons de Niemeyer, musée afro-brésilien et lacs.", "apres-midi", "nature", -23.5874, -46.6576, "Ibirapuera, São Paulo"],
    ["Beco do Batman", "La ruelle-galerie du street art pauliste.", "apres-midi", "visit", -23.5560, -46.6890, "Vila Madalena, São Paulo"],
    ["Bars de Vila Madalena", "Terrasses et botecos jusqu''au bout de la nuit.", "soir", "night", -23.5560, -46.6900, "Vila Madalena, São Paulo"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Cathédrale da Sé et Pátio do Colégio", "Le point zéro et la fondation jésuite de la mégapole.", "matin", "visit", -23.5507, -46.6334, "Centro, São Paulo"],
    ["Marché municipal", "Le sandwich à la mortadelle sous les vitraux de 1933.", "matin", "food", -23.5416, -46.6294, "Centro, São Paulo"],
    ["Pinacothèque de São Paulo", "Le plus vieux musée d''art de la ville dans sa halle de brique.", "apres-midi", "visit", -23.5340, -46.6330, "Luz, São Paulo"],
    ["Terrasse du Farol Santander", "La skyline infinie du 26e étage de la banque 1947.", "apres-midi", "visit", -23.5450, -46.6340, "Centro, São Paulo"],
    ["Baixo Augusta", "La rue qui ne dort jamais, bars et comptoirs.", "soir", "night", -23.5540, -46.6520, "Consolação, São Paulo"]]'::jsonb);

  -- Pantanal (5 jours, faune sauvage à ciel ouvert).
  c := seed_city('BRA', 'Pantanal', -17.3500, -56.9500, 5, g, 3, 7);
  PERFORM seed_day(c, 1, '[
    ["Route de la Transpantaneira", "122 ponts de bois au-dessus des marais, caïmans et jabirus dès le premier kilomètre.", "matin", "nature", -16.5000, -56.7000, "Transpantaneira, Pantanal"],
    ["Installation au lodge", "Fazenda traditionnelle en pleine zone humide, capivaras autour des bungalows.", "apres-midi", "nature", -16.4000, -56.6000, "Pantanal Nord"],
    ["Safari nocturne", "Yeux rouges des caïmans et fourmiliers géants sous le projecteur.", "soir", "nature", -16.4000, -56.6000, "Pantanal Nord"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Safari en 4x4 à l''aube", "Fourmiliers, tamanduás et la plus forte densité d''oiseaux d''eau du monde.", "matin", "nature", -16.4200, -56.6200, "Pantanal Nord"],
    ["Balade à cheval dans les marais", "Les chevaux pantaneiros, seuls capables de patauger dans la boue.", "apres-midi", "nature", -16.4100, -56.6100, "Pantanal Nord"],
    ["Coucher de soleil sur les zones humides", "Le ciel qui s''embrase au-dessus des marécages infinis.", "soir", "nature", -16.4000, -56.6000, "Pantanal Nord"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Descente en bateau vers le rio Cuiabá", "Loutres géantes et martins-pêcheurs le long des berges.", "matin", "nature", -16.9500, -56.6500, "Porto Jofre, Pantanal"],
    ["Safari aux jaguars", "La plus forte concentration de jaguars sauvages au monde, sur les plages du fleuve.", "apres-midi", "nature", -17.0000, -56.6000, "Porto Jofre, Pantanal"],
    ["Dîner au bord du fleuve", "Repas pantaneiro sous les étoiles, loin de toute lumière.", "soir", "food", -16.9500, -56.6500, "Porto Jofre, Pantanal"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Deuxième safari aux jaguars", "Nouvelle sortie en bateau, les grands félins actifs au petit matin.", "matin", "nature", -17.0000, -56.6000, "Porto Jofre, Pantanal"],
    ["Pêche aux piranhas", "La tradition locale, canne de bambou sur une lagune calme.", "apres-midi", "nature", -16.9000, -56.6800, "Pantanal Sud"],
    ["Aras hyacinthes au couchant", "Les plus grands perroquets du monde regagnant leur perchoir.", "soir", "nature", -16.8800, -56.7000, "Pantanal Sud"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Dernier safari matinal", "Tapirs et cerfs des marais avant le retour vers la route.", "matin", "nature", -16.5000, -56.6500, "Pantanal Nord"],
    ["Remontée de la Transpantaneira", "Derniers caïmans et jabirus sur le chemin du retour.", "apres-midi", "nature", -16.5000, -56.7000, "Transpantaneira, Pantanal"],
    ["Route vers Campo Grande", "Départ en fin de journée vers l''aéroport pour Foz do Iguaçu.", "soir", "visit", -16.5000, -56.7500, "Pantanal"]]'::jsonb);

  -- Foz do Iguaçu (2 jours, reuse dense).
  c := seed_city('BRA', 'Foz do Iguaçu', -25.5478, -54.5882, 2, g, 4, 12);
  PERFORM seed_day(c, 1, '[
    ["Chutes côté brésilien", "Le panorama d''ensemble sur les 275 cascades.", "matin", "nature", -25.6953, -54.4367, "Parc national de l''Iguaçu"],
    ["Passerelle de la Garganta", "Sous les embruns, au plus près du mur d''eau.", "matin", "nature", -25.6890, -54.4420, "Parc national de l''Iguaçu"],
    ["Parc des Oiseaux", "Toucans, aras et harpies en volières immersives.", "apres-midi", "nature", -25.6130, -54.4820, "Foz do Iguaçu"],
    ["Marco das Três Fronteiras", "Le confluent des trois pays au coucher du soleil, spectacle folklorique.", "soir", "visit", -25.5900, -54.5940, "Foz do Iguaçu"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Garganta del Diablo côté argentin", "Le train écologique puis le gouffre qui avale le fleuve.", "matin", "nature", -25.6912, -54.4426, "Parc national Iguazú, Argentine"],
    ["Circuit supérieur", "Au sommet des cascades, les arcs-en-ciel sous les pieds.", "apres-midi", "nature", -25.6790, -54.4440, "Parc national Iguazú, Argentine"],
    ["Circuit inférieur", "Au pied des chutes, coatis sur les passerelles.", "apres-midi", "nature", -25.6820, -54.4460, "Parc national Iguazú, Argentine"],
    ["Dîner churrasco à Foz", "Dernière soirée à la frontière avant le Nordeste.", "soir", "food", -25.5480, -54.5880, "Foz do Iguaçu"]]'::jsonb);

  -- Salvador (3 jours, reuse dense).
  c := seed_city('BRA', 'Salvador', -12.9714, -38.5014, 3, g, 5, 14);
  PERFORM seed_day(c, 1, '[
    ["Pelourinho", "Les façades pastel et pavés du centre colonial, Unesco.", "matin", "visit", -12.9720, -38.5090, "Pelourinho, Salvador"],
    ["Église São Francisco", "La nef entièrement dorée à la feuille, sommet du baroque brésilien.", "matin", "visit", -12.9730, -38.5080, "Pelourinho, Salvador"],
    ["Elevador Lacerda et Mercado Modelo", "L''ascenseur Art déco entre ville haute et ville basse.", "apres-midi", "visit", -12.9740, -38.5130, "Comércio, Salvador"],
    ["Capoeira et tambours au Pelourinho", "Rodas de rue et répétitions d''Olodum à la nuit tombée.", "soir", "night", -12.9720, -38.5090, "Pelourinho, Salvador"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Phare de Barra", "Le fort blanc et son musée nautique à l''entrée de la baie.", "matin", "visit", -13.0100, -38.5320, "Barra, Salvador"],
    ["Plage de Porto da Barra", "La petite plage urbaine la plus aimée des Soteropolitains.", "apres-midi", "nature", -13.0030, -38.5330, "Barra, Salvador"],
    ["Acarajé chez une baiana", "Le beignet de haricots frit au dendê, sur la place de Rio Vermelho.", "soir", "food", -13.0130, -38.4910, "Rio Vermelho, Salvador"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Église du Bonfim", "Les rubans colorés noués aux grilles du sanctuaire le plus vénéré de Bahia.", "matin", "visit", -12.9250, -38.5080, "Bonfim, Salvador"],
    ["Ribeira", "Glaces centenaires et front de mer paisible de la presqu''île.", "apres-midi", "food", -12.9210, -38.5010, "Ribeira, Salvador"],
    ["Solar do Unhão et MAM", "Le moulin colonial devenu musée d''art moderne, jazz au couchant sur la baie.", "soir", "visit", -12.9770, -38.5170, "Comércio, Salvador"]]'::jsonb);

  -- Manaus (4 jours : les 3 jours denses + l''archipel d''Anavilhanas).
  c := seed_city('BRA', 'Manaus', -3.1190, -60.0217, 4, g, 6, 17);
  PERFORM seed_day(c, 1, '[
    ["Théâtre Amazonas", "L''opéra de 1896 bâti par les barons du caoutchouc, coupole aux couleurs du drapeau.", "matin", "visit", -3.1300, -60.0230, "Centro, Manaus"],
    ["Marché Adolpho Lisboa", "Poissons-monstres du fleuve et fruits inconnus sous la halle Eiffel.", "apres-midi", "food", -3.1410, -60.0210, "Centro, Manaus"],
    ["Port et coucher de soleil sur le rio Negro", "Les bateaux-bus du fleuve dans la lumière orange.", "soir", "nature", -3.1400, -60.0250, "Manaus"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Rencontre des eaux", "Le rio Negro noir et le Solimões café coulent côte à côte sans se mélanger.", "matin", "nature", -3.1360, -59.9040, "Manaus"],
    ["Dauphins roses du rio Negro", "Les botos qui frôlent les pontons des communautés.", "apres-midi", "nature", -3.0500, -60.1800, "Rio Negro, Manaus"],
    ["Communauté ribeirinha", "Manioc, farine et vie du fleuve chez les riverains.", "apres-midi", "visit", -3.0600, -60.2000, "Rio Negro, Manaus"],
    ["Soirée à Manaus", "Tacacá et jus d''açaí sur la place du théâtre.", "soir", "food", -3.1300, -60.0230, "Centro, Manaus"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Archipel d''Anavilhanas en bateau", "Le deuxième plus grand archipel fluvial du monde, une forêt de canaux noirs.", "matin", "nature", -2.8500, -60.9000, "Anavilhanas, Rio Negro"],
    ["Snorkeling en eau noire", "Bain dans le rio Negro couleur thé, sans piranhas dangereux à cette saison.", "apres-midi", "nature", -2.8500, -60.9000, "Anavilhanas, Rio Negro"],
    ["Retour à Manaus", "Dernière navigation sur le fleuve au coucher du soleil.", "soir", "nature", -3.1300, -60.0230, "Manaus"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Canoë dans les igapós", "La forêt inondée en silence, singes hurleurs et paresseux.", "matin", "nature", -3.0800, -60.3000, "Rio Negro, Manaus"],
    ["Pêche aux piranhas", "La tradition du fleuve, canne de bambou et viande au bout du fil.", "apres-midi", "nature", -3.0900, -60.2800, "Rio Negro, Manaus"],
    ["Dernier coucher de soleil amazonien", "Le ciel en feu sur l''eau noire pour clore les 21 jours.", "soir", "nature", -3.1000, -60.2500, "Rio Negro, Manaus"]]'::jsonb);
END $$;

-- ─── PER 10 jours LÉGER : Lima → Arequipa → Cusco ─────────────────
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('PER', 10);

  -- Lima (3 jours).
  c := seed_city('PER', 'Lima', -12.0464, -77.0428, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Plaza de Armas et cathédrale", "Le centre colonial fondé par Pizarro, balcons de bois sculpté.", "matin", "visit", -12.0464, -77.0300, "Centro, Lima"],
    ["Couvent San Francisco et catacombes", "La bibliothèque ancienne et les ossuaires sous l''église.", "apres-midi", "visit", -12.0450, -77.0270, "Centro, Lima"],
    ["Circuit magique des eaux", "Les fontaines illuminées du parc de la Réserve.", "soir", "visit", -12.0710, -77.0330, "Lima"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Malecón de Miraflores", "La falaise verte au-dessus du Pacifique, parapentes et parc de l''Amour.", "matin", "nature", -12.1280, -77.0300, "Miraflores, Lima"],
    ["Huaca Pucllana", "La pyramide d''adobe préinca au milieu des immeubles.", "apres-midi", "visit", -12.1110, -77.0330, "Miraflores, Lima"],
    ["Barranco et le pont des Soupirs", "Le quartier bohème, murs peints et bars à pisco.", "soir", "night", -12.1490, -77.0220, "Barranco, Lima"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Musée Larco", "Or, céramiques mochica et bougainvilliers dans la maison coloniale.", "matin", "visit", -12.0720, -77.0710, "Pueblo Libre, Lima"],
    ["Ceviche dans une cevichería", "Le plat national à l''heure juste : le déjeuner.", "apres-midi", "food", -12.1200, -77.0290, "Miraflores, Lima"],
    ["Pisco sour à Barranco", "Le cocktail national dans le quartier des artistes.", "soir", "food", -12.1480, -77.0210, "Barranco, Lima"]]'::jsonb);

  -- Arequipa (2 jours).
  c := seed_city('PER', 'Arequipa', -16.4090, -71.5375, 2, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Plaza de Armas d''Arequipa", "La place en pierre volcanique blanche, le Misti en toile de fond.", "matin", "visit", -16.3989, -71.5370, "Arequipa"],
    ["Monastère Santa Catalina", "Une ville dans la ville, ruelles ocre et bleues du couvent de 1579.", "apres-midi", "visit", -16.3960, -71.5370, "Arequipa"],
    ["Rocoto relleno en picantería", "Le piment farci et le chupe de camarones, cuisine arequipeña.", "soir", "food", -16.4000, -71.5360, "Arequipa"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée Santuarios Andinos", "Juanita, la momie inca des glaces de l''Ampato.", "matin", "visit", -16.3990, -71.5380, "Arequipa"],
    ["Mirador de Yanahuara", "Les arches blanches face aux trois volcans.", "apres-midi", "visit", -16.3960, -71.5440, "Yanahuara, Arequipa"],
    ["Coucher de soleil sur le Misti", "Terrasse avec vue sur le cône parfait.", "soir", "nature", -16.4000, -71.5350, "Arequipa"]]'::jsonb);

  -- Cusco (5 jours : 2 propres + Vallée sacrée, Machu Picchu et Maras-Moray en excursions).
  c := seed_city('PER', 'Cusco', -13.5320, -71.9675, 5, g, 3, 5);
  PERFORM seed_day(c, 1, '[
    ["Plaza de Armas et cathédrale de Cusco", "Le nombril du monde inca sous les arcades coloniales — journée douce pour l''altitude.", "matin", "visit", -13.5167, -71.9788, "Cusco"],
    ["Qorikancha", "Le temple du Soleil aux murs d''or, socle du couvent Santo Domingo.", "apres-midi", "visit", -13.5200, -71.9750, "Cusco"],
    ["San Blas", "Le quartier des artisans en pente, mate de coca au balcon.", "soir", "visit", -13.5140, -71.9760, "San Blas, Cusco"]]'::jsonb);
  -- Excursion Vallée sacrée (jour 2).
  e := seed_daytrip('PER', 'Vallée sacrée', -13.3200, -72.0900, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Pisac", "Les terrasses en amphithéâtre et le marché andin au fond de la vallée.", "matin", "visit", -13.4090, -71.8470, "Pisac, Vallée sacrée"],
    ["Ollantaytambo", "La forteresse-escalier et le village inca encore habité.", "apres-midi", "visit", -13.2580, -72.2630, "Ollantaytambo, Vallée sacrée"],
    ["Retour à Cusco", "Dîner de quinoa et truite après la vallée.", "soir", "food", -13.5170, -71.9780, "Cusco"]]'::jsonb);
  -- Excursion Machu Picchu (jour 3).
  e := seed_daytrip('PER', 'Machu Picchu', -13.1631, -72.5450, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Citadelle du Machu Picchu", "Le train à l''aube puis la cité perdue dans la brume qui se lève.", "matin", "visit", -13.1631, -72.5450, "Machu Picchu"],
    ["Porte du Soleil", "La montée à l''Inti Punku, l''arrivée des pèlerins du chemin inca.", "apres-midi", "nature", -13.1720, -72.5330, "Machu Picchu"],
    ["Train de retour par Aguas Calientes", "La vallée de l''Urubamba défilant à la vitre.", "soir", "visit", -13.1550, -72.5250, "Aguas Calientes"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Sacsayhuamán", "Les blocs cyclopéens de la forteresse au-dessus de la ville.", "matin", "visit", -13.5100, -71.9820, "Cusco"],
    ["Marché San Pedro", "Jus de fruits, fromages d''altitude et étals de laine.", "apres-midi", "food", -13.5210, -71.9830, "Cusco"],
    ["Soirée andine", "Musique et danses folkloriques autour d''un cuy ou d''un lomo saltado.", "soir", "night", -13.5170, -71.9780, "Cusco"]]'::jsonb);
  -- Excursion Maras et Moray (jour 5).
  e := seed_daytrip('PER', 'Maras et Moray', -13.3290, -72.1960, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Terrasses de Moray", "Les cercles concentriques, laboratoire agricole des Incas.", "matin", "visit", -13.3290, -72.1960, "Moray, Vallée sacrée"],
    ["Salines de Maras", "Les 3 000 bassins de sel blanc accrochés à la montagne.", "apres-midi", "visit", -13.3010, -72.1560, "Maras, Vallée sacrée"],
    ["Dernière soirée à Cusco", "Pisco d''adieu sur la Plaza de Armas.", "soir", "food", -13.5167, -71.9788, "Cusco"]]'::jsonb);
END $$;

-- ─── PER 14 jours DENSE : Lima → Paracas → Huacachina → Arequipa → Puno → Cusco ──
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('PER', 14);

  -- Lima (2 jours denses).
  c := seed_city('PER', 'Lima', -12.0464, -77.0428, 2, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Plaza de Armas et cathédrale", "Palais, balcons sculptés et relève de la garde.", "matin", "visit", -12.0464, -77.0300, "Centro, Lima"],
    ["Couvent San Francisco et catacombes", "Bibliothèque ancienne et ossuaires en rosace.", "matin", "visit", -12.0450, -77.0270, "Centro, Lima"],
    ["Casa Aliaga et rues coloniales", "La plus vieille demeure familiale des Amériques.", "apres-midi", "visit", -12.0440, -77.0310, "Centro, Lima"],
    ["Circuit magique des eaux", "Treize fontaines illuminées et jets synchronisés.", "soir", "visit", -12.0710, -77.0330, "Lima"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée Larco", "La plus belle collection précolombienne du pays, réserves ouvertes.", "matin", "visit", -12.0720, -77.0710, "Pueblo Libre, Lima"],
    ["Ceviche à Miraflores", "Le déjeuner sacré des Liméniens, leche de tigre en shot.", "apres-midi", "food", -12.1200, -77.0290, "Miraflores, Lima"],
    ["Malecón et Huaca Pucllana", "La falaise du Pacifique puis la pyramide d''adobe entre les tours.", "apres-midi", "visit", -12.1110, -77.0330, "Miraflores, Lima"],
    ["Nuit à Barranco", "Pont des Soupirs, murs peints et bars à pisco.", "soir", "night", -12.1490, -77.0220, "Barranco, Lima"]]'::jsonb);

  -- Paracas (1 jour).
  c := seed_city('PER', 'Paracas', -13.8400, -76.2500, 1, g, 2, 2);
  PERFORM seed_day(c, 1, '[
    ["Îles Ballestas", "Otaries, manchots de Humboldt et le Candélabre gravé dans la dune.", "matin", "nature", -13.7390, -76.4000, "Paracas"],
    ["Réserve nationale de Paracas", "Le désert rouge qui tombe dans l''océan, plage de la Mina.", "apres-midi", "nature", -13.8650, -76.3060, "Paracas"],
    ["Coucher de soleil sur le Pacifique", "Fruits de mer face aux barques du port.", "soir", "food", -13.8360, -76.2510, "El Chaco, Paracas"]]'::jsonb);

  -- Huacachina (1 jour).
  c := seed_city('PER', 'Huacachina', -14.0875, -75.7633, 1, g, 3, 3);
  PERFORM seed_day(c, 1, '[
    ["Survol des lignes de Nazca", "Le Cessna depuis l''aérodrome d''Ica ou de Pisco, colibri et singe vus du ciel.", "matin", "visit", -14.8390, -74.9260, "Nazca"],
    ["Buggy et sandboard dans les dunes", "Montagnes russes de sable autour de l''oasis.", "apres-midi", "nature", -14.0900, -75.7700, "Huacachina"],
    ["Oasis au couchant", "La lagune et ses palmiers cernés de dunes orange.", "soir", "nature", -14.0875, -75.7633, "Huacachina"]]'::jsonb);

  -- Arequipa (3 jours : 2 propres + excursion Colca en jour 2).
  c := seed_city('PER', 'Arequipa', -16.4090, -71.5375, 3, g, 4, 4);
  PERFORM seed_day(c, 1, '[
    ["Plaza de Armas et cathédrale", "La place de sillar blanc sous les volcans.", "matin", "visit", -16.3989, -71.5370, "Arequipa"],
    ["Église de la Compañía", "La façade churrigueresque la plus ouvragée du Pérou.", "matin", "visit", -16.3990, -71.5360, "Arequipa"],
    ["Monastère Santa Catalina", "La cité-couvent aux ruelles ocre et bleues.", "apres-midi", "visit", -16.3960, -71.5370, "Arequipa"],
    ["Picantería arequipeña", "Rocoto relleno et chupe de camarones.", "soir", "food", -16.4000, -71.5360, "Arequipa"]]'::jsonb);
  -- Excursion canyon de Colca (jour 2, départ avant l''aube).
  e := seed_daytrip('PER', 'Canyon de Colca', -15.6090, -71.9030, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Croix du Condor", "Les condors qui prennent les thermiques au-dessus du canyon, deux fois plus profond que le Grand Canyon.", "matin", "nature", -15.6090, -71.9030, "Canyon de Colca"],
    ["Villages de Yanque et Maca", "Églises baroques et terrasses préincas de la vallée.", "apres-midi", "visit", -15.6480, -71.6650, "Vallée de Colca"],
    ["Thermes de Chivay et retour", "Bain chaud d''altitude avant la route du retour.", "soir", "nature", -15.6380, -71.6010, "Chivay, Colca"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Musée Santuarios Andinos", "Juanita, la momie des glaces de l''Ampato.", "matin", "visit", -16.3990, -71.5380, "Arequipa"],
    ["Mundo Alpaca", "Alpagas, vigognes et tissage vivant en plein centre.", "apres-midi", "visit", -16.3940, -71.5360, "Arequipa"],
    ["Mirador de Yanahuara", "Les arches blanches face au Misti.", "apres-midi", "visit", -16.3960, -71.5440, "Yanahuara, Arequipa"],
    ["Dernière soirée blanche", "Terrasse au couchant sur les volcans.", "soir", "food", -16.4000, -71.5350, "Arequipa"]]'::jsonb);

  -- Puno (2 jours).
  c := seed_city('PER', 'Puno', -15.8402, -70.0219, 2, g, 5, 7);
  PERFORM seed_day(c, 1, '[
    ["Îles flottantes des Uros", "Les îles de totora tressée à la sortie du port, 3 800 m d''altitude.", "matin", "visit", -15.8200, -69.9700, "Lac Titicaca, Puno"],
    ["Île de Taquile", "Terrasses, tricoteurs et déjeuner de truite face au lac immense.", "apres-midi", "visit", -15.7770, -69.6880, "Lac Titicaca, Puno"],
    ["Soirée à Puno", "Quinoa chaud et musique altiplánica pour la nuit la plus haute du voyage.", "soir", "food", -15.8400, -70.0280, "Puno"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Chullpas de Sillustani", "Les tours funéraires préincas sur la lagune d''Umayo.", "matin", "visit", -15.7190, -70.1590, "Sillustani, Puno"],
    ["Mirador du Condor", "L''escalier au-dessus des toits, tout le Titicaca en contrebas.", "apres-midi", "nature", -15.8450, -70.0320, "Puno"],
    ["Marché et rue Lima", "L''artère piétonne pour les derniers lainages.", "soir", "shopping", -15.8390, -70.0270, "Puno"]]'::jsonb);

  -- Cusco (5 jours : 2 propres + Vallée sacrée, Machu Picchu et Vinicunca en excursions).
  c := seed_city('PER', 'Cusco', -13.5320, -71.9675, 5, g, 6, 9);
  PERFORM seed_day(c, 1, '[
    ["Plaza de Armas et cathédrale", "Le cœur de l''empire sous les arcades, déjà acclimaté par Puno.", "matin", "visit", -13.5167, -71.9788, "Cusco"],
    ["Qorikancha", "Le temple du Soleil sous le couvent Santo Domingo.", "apres-midi", "visit", -13.5200, -71.9750, "Cusco"],
    ["Pierre aux douze angles", "La ruelle Hatun Rumiyoc et ses murs incas parfaits.", "apres-midi", "visit", -13.5160, -71.9760, "Cusco"],
    ["San Blas le soir", "Le quartier des artisans, pisco au balcon.", "soir", "night", -13.5140, -71.9760, "San Blas, Cusco"]]'::jsonb);
  -- Excursion Vallée sacrée dense (jour 2).
  e := seed_daytrip('PER', 'Vallée sacrée', -13.3200, -72.0900, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Pisac", "Les terrasses en amphithéâtre et le marché andin, sur la route est de la vallée.", "matin", "visit", -13.4090, -71.8470, "Pisac, Vallée sacrée"],
    ["Déjeuner à Urubamba", "Buffet andin au fond de la vallée, plus à l''ouest.", "apres-midi", "food", -13.3050, -72.1160, "Urubamba, Vallée sacrée"],
    ["Ollantaytambo", "La forteresse-escalier, dernier bastion contre les conquistadors, à l''extrémité ouest.", "apres-midi", "visit", -13.2580, -72.2630, "Ollantaytambo, Vallée sacrée"],
    ["Chinchero", "Tissage démonstratif et église coloniale, sur la route de retour vers Cusco.", "apres-midi", "visit", -13.3930, -72.0480, "Chinchero, Vallée sacrée"],
    ["Retour à Cusco", "Soupe de quinoa après la vallée.", "soir", "food", -13.5170, -71.9780, "Cusco"]]'::jsonb);
  -- Excursion Machu Picchu (jour 3).
  e := seed_daytrip('PER', 'Machu Picchu', -13.1631, -72.5450, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Citadelle du Machu Picchu", "Visite guidée de la cité perdue au lever de brume.", "matin", "visit", -13.1631, -72.5450, "Machu Picchu"],
    ["Montée du Huayna Picchu", "Le pain de sucre au-dessus de la citadelle, escaliers vertigineux (réserver).", "apres-midi", "nature", -13.1570, -72.5460, "Machu Picchu"],
    ["Aguas Calientes et train de retour", "Bière artisanale au pied de la montagne puis l''Urubamba à la vitre.", "soir", "visit", -13.1550, -72.5250, "Aguas Calientes"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Sacsayhuamán", "Les blocs de cent tonnes emboîtés au millimètre.", "matin", "visit", -13.5100, -71.9820, "Cusco"],
    ["Q''enqo et Puka Pukara", "Autel taillé dans le roc et fortin rouge sur la route des hauteurs.", "matin", "visit", -13.5050, -71.9720, "Cusco"],
    ["Marché San Pedro", "Jus, fromages et étals de laine sous la halle.", "apres-midi", "food", -13.5210, -71.9830, "Cusco"],
    ["Musée d''art précolombien", "Les chefs-d''œuvre choisis dans la maison coloniale de la place Nazarenas.", "apres-midi", "visit", -13.5150, -71.9770, "Cusco"],
    ["Soirée folklorique", "Danses et orchestre andin avec le dîner.", "soir", "night", -13.5170, -71.9780, "Cusco"]]'::jsonb);
  -- Excursion montagne arc-en-ciel (jour 5, départ avant l''aube).
  e := seed_daytrip('PER', 'Vinicunca', -13.8700, -71.3030, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Montagne arc-en-ciel", "La montée à 5 036 m vers les strates minérales colorées.", "matin", "nature", -13.8700, -71.3030, "Vinicunca, Cusco"],
    ["Vallée rouge", "Le détour écarlate à côté du sentier principal, sans la foule.", "apres-midi", "nature", -13.8780, -71.3100, "Vinicunca, Cusco"],
    ["Retour et dernière nuit à Cusco", "Massage des jambes et pisco d''adieu.", "soir", "food", -13.5167, -71.9788, "Cusco"]]'::jsonb);
END $$;

-- ─── PER 21 jours DENSE grand tour Sud + Amazonie : Lima → Paracas →
--     Huacachina/Ica → Arequipa → Puno → Cusco → Puerto Maldonado ──────
DO $$
DECLARE g UUID; c UUID; e UUID;
BEGIN
  g := seed_group('PER', 21);

  -- Lima (3 jours, reuse léger + dense).
  c := seed_city('PER', 'Lima', -12.0464, -77.0428, 3, g, 1, 0);
  PERFORM seed_day(c, 1, '[
    ["Plaza de Armas et cathédrale", "Palais, balcons sculptés et relève de la garde.", "matin", "visit", -12.0464, -77.0300, "Centro, Lima"],
    ["Couvent San Francisco et catacombes", "Bibliothèque ancienne et ossuaires en rosace.", "matin", "visit", -12.0450, -77.0270, "Centro, Lima"],
    ["Casa Aliaga et rues coloniales", "La plus vieille demeure familiale des Amériques.", "apres-midi", "visit", -12.0440, -77.0310, "Centro, Lima"],
    ["Circuit magique des eaux", "Treize fontaines illuminées et jets synchronisés.", "soir", "visit", -12.0710, -77.0330, "Lima"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Musée Larco", "La plus belle collection précolombienne du pays, réserves ouvertes.", "matin", "visit", -12.0720, -77.0710, "Pueblo Libre, Lima"],
    ["Ceviche à Miraflores", "Le déjeuner sacré des Liméniens, leche de tigre en shot.", "apres-midi", "food", -12.1200, -77.0290, "Miraflores, Lima"],
    ["Malecón et Huaca Pucllana", "La falaise du Pacifique puis la pyramide d''adobe entre les tours.", "apres-midi", "visit", -12.1110, -77.0330, "Miraflores, Lima"],
    ["Nuit à Barranco", "Pont des Soupirs, murs peints et bars à pisco.", "soir", "night", -12.1490, -77.0220, "Barranco, Lima"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Parc de l''Amour et Malecón sud", "La côte de Miraflores encore une fois, version matinale et calme.", "matin", "nature", -12.1300, -77.0280, "Miraflores, Lima"],
    ["Marché de Surquillo", "Fruits andins et amazoniens jamais vus ailleurs, avant de filer vers le sud.", "apres-midi", "food", -12.1150, -77.0140, "Surquillo, Lima"],
    ["Départ vers Paracas", "Route côtière du Pacifique en fin de journée.", "soir", "visit", -12.0464, -77.0428, "Lima"]]'::jsonb);

  -- Paracas (1 jour, reuse).
  c := seed_city('PER', 'Paracas', -13.8400, -76.2500, 1, g, 2, 3);
  PERFORM seed_day(c, 1, '[
    ["Îles Ballestas", "Otaries, manchots de Humboldt et le Candélabre gravé dans la dune.", "matin", "nature", -13.7390, -76.4000, "Paracas"],
    ["Réserve nationale de Paracas", "Le désert rouge qui tombe dans l''océan, plage de la Mina.", "apres-midi", "nature", -13.8650, -76.3060, "Paracas"],
    ["Coucher de soleil sur le Pacifique", "Fruits de mer face aux barques du port.", "soir", "food", -13.8360, -76.2510, "El Chaco, Paracas"]]'::jsonb);

  -- Huacachina et Ica (2 jours : dunes/Nazca + bodegas de pisco).
  c := seed_city('PER', 'Huacachina', -14.0875, -75.7633, 2, g, 3, 4);
  PERFORM seed_day(c, 1, '[
    ["Survol des lignes de Nazca", "Le Cessna depuis l''aérodrome d''Ica ou de Pisco, colibri et singe vus du ciel.", "matin", "visit", -14.8390, -74.9260, "Nazca"],
    ["Buggy et sandboard dans les dunes", "Montagnes russes de sable autour de l''oasis.", "apres-midi", "nature", -14.0900, -75.7700, "Huacachina"],
    ["Oasis au couchant", "La lagune et ses palmiers cernés de dunes orange.", "soir", "nature", -14.0875, -75.7633, "Huacachina"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Bodega Tacama", "La plus vieille cave d''Amérique du Sud, vignes plantées par les conquistadors.", "matin", "visit", -14.0180, -75.6870, "Ica"],
    ["Dégustation de pisco et vin de Ica", "Acholado, quebranta et vins de dessert dans les chais coloniaux.", "apres-midi", "food", -14.0200, -75.6900, "Ica"],
    ["Retour à l''oasis", "Dernière soirée au bord de la lagune avant la route du sud.", "soir", "nature", -14.0875, -75.7633, "Huacachina"]]'::jsonb);

  -- Arequipa (3 jours : 2 propres + excursion Colca).
  c := seed_city('PER', 'Arequipa', -16.4090, -71.5375, 3, g, 4, 6);
  PERFORM seed_day(c, 1, '[
    ["Plaza de Armas et cathédrale", "La place de sillar blanc sous les volcans.", "matin", "visit", -16.3989, -71.5370, "Arequipa"],
    ["Église de la Compañía", "La façade churrigueresque la plus ouvragée du Pérou.", "matin", "visit", -16.3990, -71.5360, "Arequipa"],
    ["Monastère Santa Catalina", "La cité-couvent aux ruelles ocre et bleues.", "apres-midi", "visit", -16.3960, -71.5370, "Arequipa"],
    ["Picantería arequipeña", "Rocoto relleno et chupe de camarones.", "soir", "food", -16.4000, -71.5360, "Arequipa"]]'::jsonb);
  e := seed_daytrip('PER', 'Canyon de Colca', -15.6090, -71.9030, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Croix du Condor", "Les condors qui prennent les thermiques au-dessus du canyon, deux fois plus profond que le Grand Canyon.", "matin", "nature", -15.6090, -71.9030, "Canyon de Colca"],
    ["Villages de Yanque et Maca", "Églises baroques et terrasses préincas de la vallée.", "apres-midi", "visit", -15.6480, -71.6650, "Vallée de Colca"],
    ["Thermes de Chivay et retour", "Bain chaud d''altitude avant la route du retour.", "soir", "nature", -15.6380, -71.6010, "Chivay, Colca"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Musée Santuarios Andinos", "Juanita, la momie des glaces de l''Ampato.", "matin", "visit", -16.3990, -71.5380, "Arequipa"],
    ["Mundo Alpaca", "Alpagas, vigognes et tissage vivant en plein centre.", "apres-midi", "visit", -16.3940, -71.5360, "Arequipa"],
    ["Mirador de Yanahuara", "Les arches blanches face au Misti.", "apres-midi", "visit", -16.3960, -71.5440, "Yanahuara, Arequipa"],
    ["Dernière soirée blanche", "Terrasse au couchant sur les volcans.", "soir", "food", -16.4000, -71.5350, "Arequipa"]]'::jsonb);

  -- Puno (2 jours, reuse).
  c := seed_city('PER', 'Puno', -15.8402, -70.0219, 2, g, 5, 9);
  PERFORM seed_day(c, 1, '[
    ["Îles flottantes des Uros", "Les îles de totora tressée à la sortie du port, 3 800 m d''altitude.", "matin", "visit", -15.8200, -69.9700, "Lac Titicaca, Puno"],
    ["Île de Taquile", "Terrasses, tricoteurs et déjeuner de truite face au lac immense.", "apres-midi", "visit", -15.7770, -69.6880, "Lac Titicaca, Puno"],
    ["Soirée à Puno", "Quinoa chaud et musique altiplánica pour la nuit la plus haute du voyage.", "soir", "food", -15.8400, -70.0280, "Puno"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Chullpas de Sillustani", "Les tours funéraires préincas sur la lagune d''Umayo.", "matin", "visit", -15.7190, -70.1590, "Sillustani, Puno"],
    ["Mirador du Condor", "L''escalier au-dessus des toits, tout le Titicaca en contrebas.", "apres-midi", "nature", -15.8450, -70.0320, "Puno"],
    ["Marché et rue Lima", "L''artère piétonne pour les derniers lainages.", "soir", "shopping", -15.8390, -70.0270, "Puno"]]'::jsonb);

  -- Cusco (5 jours, reuse dense avec Vallée sacrée, Machu Picchu, Vinicunca).
  c := seed_city('PER', 'Cusco', -13.5320, -71.9675, 5, g, 6, 11);
  PERFORM seed_day(c, 1, '[
    ["Plaza de Armas et cathédrale", "Le cœur de l''empire sous les arcades, déjà acclimaté par Puno.", "matin", "visit", -13.5167, -71.9788, "Cusco"],
    ["Qorikancha", "Le temple du Soleil sous le couvent Santo Domingo.", "apres-midi", "visit", -13.5200, -71.9750, "Cusco"],
    ["Pierre aux douze angles", "La ruelle Hatun Rumiyoc et ses murs incas parfaits.", "apres-midi", "visit", -13.5160, -71.9760, "Cusco"],
    ["San Blas le soir", "Le quartier des artisans, pisco au balcon.", "soir", "night", -13.5140, -71.9760, "San Blas, Cusco"]]'::jsonb);
  e := seed_daytrip('PER', 'Vallée sacrée', -13.3200, -72.0900, c, 1);
  PERFORM seed_day(e, 1, '[
    ["Pisac", "Les terrasses en amphithéâtre et le marché andin, sur la route est de la vallée.", "matin", "visit", -13.4090, -71.8470, "Pisac, Vallée sacrée"],
    ["Déjeuner à Urubamba", "Buffet andin au fond de la vallée, plus à l''ouest.", "apres-midi", "food", -13.3050, -72.1160, "Urubamba, Vallée sacrée"],
    ["Ollantaytambo", "La forteresse-escalier, dernier bastion contre les conquistadors, à l''extrémité ouest.", "apres-midi", "visit", -13.2580, -72.2630, "Ollantaytambo, Vallée sacrée"],
    ["Chinchero", "Tissage démonstratif et église coloniale, sur la route de retour vers Cusco.", "apres-midi", "visit", -13.3930, -72.0480, "Chinchero, Vallée sacrée"],
    ["Retour à Cusco", "Soupe de quinoa après la vallée.", "soir", "food", -13.5170, -71.9780, "Cusco"]]'::jsonb);
  e := seed_daytrip('PER', 'Machu Picchu', -13.1631, -72.5450, c, 2);
  PERFORM seed_day(e, 1, '[
    ["Citadelle du Machu Picchu", "Visite guidée de la cité perdue au lever de brume.", "matin", "visit", -13.1631, -72.5450, "Machu Picchu"],
    ["Montée du Huayna Picchu", "Le pain de sucre au-dessus de la citadelle, escaliers vertigineux (réserver).", "apres-midi", "nature", -13.1570, -72.5460, "Machu Picchu"],
    ["Aguas Calientes et train de retour", "Bière artisanale au pied de la montagne puis l''Urubamba à la vitre.", "soir", "visit", -13.1550, -72.5250, "Aguas Calientes"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Sacsayhuamán", "Les blocs de cent tonnes emboîtés au millimètre.", "matin", "visit", -13.5100, -71.9820, "Cusco"],
    ["Q''enqo et Puka Pukara", "Autel taillé dans le roc et fortin rouge sur la route des hauteurs.", "matin", "visit", -13.5050, -71.9720, "Cusco"],
    ["Marché San Pedro", "Jus, fromages et étals de laine sous la halle.", "apres-midi", "food", -13.5210, -71.9830, "Cusco"],
    ["Musée d''art précolombien", "Les chefs-d''œuvre choisis dans la maison coloniale de la place Nazarenas.", "apres-midi", "visit", -13.5150, -71.9770, "Cusco"],
    ["Soirée folklorique", "Danses et orchestre andin avec le dîner.", "soir", "night", -13.5170, -71.9780, "Cusco"]]'::jsonb);
  e := seed_daytrip('PER', 'Vinicunca', -13.8700, -71.3030, c, 4);
  PERFORM seed_day(e, 1, '[
    ["Montagne arc-en-ciel", "La montée à 5 036 m vers les strates minérales colorées.", "matin", "nature", -13.8700, -71.3030, "Vinicunca, Cusco"],
    ["Vallée rouge", "Le détour écarlate à côté du sentier principal, sans la foule.", "apres-midi", "nature", -13.8780, -71.3100, "Vinicunca, Cusco"],
    ["Vol vers Puerto Maldonado", "Descente de 3 400 m à 250 m d''altitude en 30 minutes, des Andes à l''Amazonie.", "soir", "visit", -13.5167, -71.9788, "Cusco"]]'::jsonb);

  -- Puerto Maldonado (5 jours, lodge en pleine Amazonie).
  c := seed_city('PER', 'Puerto Maldonado', -12.5933, -69.1891, 5, g, 7, 16);
  PERFORM seed_day(c, 1, '[
    ["Descente en bateau sur le Madre de Dios", "Le fleuve amazonien jusqu''au lodge, caïmans sur les berges au passage.", "matin", "nature", -12.6500, -69.3000, "Rio Madre de Dios"],
    ["Installation au lodge et tour du sentier", "Fourmis coupeuses de feuilles et arbres géants de la forêt primaire.", "apres-midi", "nature", -12.7800, -69.2800, "Réserve de Tambopata"],
    ["Marche nocturne", "Tarentules, grenouilles et yeux rouges des caïmans à la lampe frontale.", "soir", "nature", -12.7800, -69.2800, "Réserve de Tambopata"]]'::jsonb);
  PERFORM seed_day(c, 2, '[
    ["Lac Sandoval en pirogue", "45 minutes de marche puis la pirogue silencieuse sur le lac aux loutres géantes.", "matin", "nature", -12.6700, -69.1400, "Lac Sandoval, Tambopata"],
    ["Loutres géantes et caïmans noirs", "La famille de loutres du lac, espèce en danger, observée à distance.", "apres-midi", "nature", -12.6700, -69.1400, "Lac Sandoval, Tambopata"],
    ["Retour au lodge et dîner", "Poisson du fleuve grillé sous les moustiquaires.", "soir", "food", -12.7800, -69.2800, "Réserve de Tambopata"]]'::jsonb);
  PERFORM seed_day(c, 3, '[
    ["Tour de canopée", "45 mètres au-dessus de la forêt, pont suspendu entre les cimes.", "matin", "nature", -12.8300, -69.2960, "Réserve de Tambopata"],
    ["Sentier ethnobotanique", "Plantes médicinales et savoirs traditionnels avec un guide local.", "apres-midi", "nature", -12.7900, -69.2750, "Réserve de Tambopata"],
    ["Pêche aux piranhas", "Canne de bambou sur une lagune calme avant le coucher du soleil.", "soir", "nature", -12.7700, -69.2600, "Réserve de Tambopata"]]'::jsonb);
  PERFORM seed_day(c, 4, '[
    ["Colpa de perroquets et aras", "Aube au mirador face à la paroi d''argile où se rassemblent des centaines d''aras.", "matin", "nature", -12.8500, -69.2900, "Colpa Colorado, Tambopata"],
    ["Sieste et lecture au lodge", "Le rythme lent de la forêt, hamac face au fleuve.", "apres-midi", "nature", -12.7800, -69.2800, "Réserve de Tambopata"],
    ["Observation des caïmans à la lampe", "Derniers yeux rouges sur le fleuve avant le retour à la ville.", "soir", "nature", -12.7800, -69.2800, "Réserve de Tambopata"]]'::jsonb);
  PERFORM seed_day(c, 5, '[
    ["Dernière balade matinale en forêt", "Chants d''oiseaux et singes hurleurs, ultime immersion.", "matin", "nature", -12.7800, -69.2800, "Réserve de Tambopata"],
    ["Remontée en bateau vers Puerto Maldonado", "Le fleuve dans l''autre sens, retour vers la civilisation.", "apres-midi", "nature", -12.6500, -69.3000, "Rio Madre de Dios"],
    ["Dernier dîner amazonien", "Juane et fruits de la jungle avant le vol du lendemain.", "soir", "food", -12.5933, -69.1891, "Puerto Maldonado"]]'::jsonb);
END $$;

-- ─── Ville solo : Brasília (1j) ───────────────────────────────────
DO $$
DECLARE c UUID;
BEGIN
  c := seed_city('BRA', 'Brasília', -15.8267, -47.9218, 1, NULL, NULL, NULL);
  PERFORM seed_day(c, 1, '[
    ["Esplanade des ministères et cathédrale", "L''axe monumental de Niemeyer et la couronne de béton aux vitraux bleus.", "matin", "visit", -15.7980, -47.8750, "Brasília"],
    ["Congrès national et place des Trois Pouvoirs", "Les coupoles jumelles, cœur du Brésil politique.", "apres-midi", "visit", -15.7997, -47.8645, "Brasília"],
    ["Coucher de soleil au pont JK", "Les trois arches sur le lac Paranoá dans la lumière du cerrado.", "soir", "nature", -15.8230, -47.8330, "Brasília"]]'::jsonb);
END $$;
