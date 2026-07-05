export const MONTENEGRO = {
  code: "MNE",
  numericId: 499,
  name: { fr: "Monténégro", en: "Montenegro" },
  emoji: "🇲🇪",
  capital: { fr: "Podgorica", en: "Podgorica" },
  language: { fr: "Monténégrin, Serbe, Albanais", en: "Montenegrin, Serbian, Albanian" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  description: {
    fr: "Le Monténégro est la destination surprenante des Balkans : la baie de Kotor (UNESCO, fjord méditerranéen avec vieille ville médiévale vénitienne), les plages de Budva et Sveti Stefan, le parc national de Durmitor (UNESCO, canyons et lacs glaciaires), et Podgorica — une capitale abordable entre mer et montagne. Petit pays entre Croatie et Albanie, encore préservé des foules.",
    en: "Montenegro is the Balkans' surprising destination: the Bay of Kotor (UNESCO, a Mediterranean fjord with a medieval Venetian old town), the beaches of Budva and Sveti Stefan, Durmitor National Park (UNESCO, canyons and glacial lakes), and Podgorica — an affordable capital between sea and mountains. A small country between Croatia and Albania, still spared from the crowds.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Été adriatique", en: "Adriatic summer" },
      color: "#22c55e",
      description: {
        fr: "Côte ensoleillée (24–28°C), mer chaude (26°C), idéal pour la plage et Kotor. Juillet-août très fréquentés sur la côte. Durmitor accessible tout l'été.",
        en: "Sunny coast (24–28°C), warm sea (26°C), ideal for the beach and Kotor. The coast is very crowded in July–August. Durmitor is accessible all summer.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Ski Durmitor", en: "Durmitor skiing" },
      color: "#3b82f6",
      description: {
        fr: "Ski au Žabljak (station la plus haute des Balkans, 1 456m). Canyon de Tara enneigé. Températures -10°C en montagne, 8°C sur la côte.",
        en: "Skiing at Žabljak (the highest resort in the Balkans, 1,456m). A snow-covered Tara Canyon. Temperatures of -10°C in the mountains, 8°C on the coast.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "kotor",
      name: "Kotor",
      region: { fr: "Baie de Kotor (côte adriatique)", en: "Bay of Kotor (Adriatic coast)" },
      data: [
        { month: "Jan", temp:  7, rain: 190, icon: "🌧️" },
        { month: "Fév", temp:  8, rain: 150, icon: "⛅" },
        { month: "Mar", temp: 11, rain: 120, icon: "⛅" },
        { month: "Avr", temp: 14, rain: 100, icon: "⛅" },
        { month: "Mai", temp: 18, rain: 75,  icon: "⛅" },
        { month: "Jun", temp: 22, rain: 50,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 25,  icon: "☀️" },
        { month: "Sep", temp: 22, rain: 80,  icon: "☀️" },
        { month: "Oct", temp: 17, rain: 130, icon: "⛅" },
        { month: "Nov", temp: 12, rain: 180, icon: "⛅" },
        { month: "Déc", temp:  8, rain: 210, icon: "🌧️" },
      ],
    },
    {
      id: "durmitor",
      name: "Žabljak (Durmitor)",
      region: { fr: "Montagnes du nord (1 456m)", en: "Northern mountains (1,456m)" },
      data: [
        { month: "Jan", temp: -7, rain: 120, icon: "❄️" },
        { month: "Fév", temp: -6, rain: 110, icon: "❄️" },
        { month: "Mar", temp: -1, rain: 110, icon: "❄️" },
        { month: "Avr", temp:  5, rain: 115, icon: "⛅" },
        { month: "Mai", temp: 10, rain: 120, icon: "⛅" },
        { month: "Jun", temp: 14, rain: 120, icon: "⛅" },
        { month: "Jul", temp: 17, rain: 90,  icon: "☀️" },
        { month: "Aoû", temp: 17, rain: 85,  icon: "☀️" },
        { month: "Sep", temp: 12, rain: 110, icon: "⛅" },
        { month: "Oct", temp:  7, rain: 120, icon: "⛅" },
        { month: "Nov", temp:  1, rain: 130, icon: "⛅" },
        { month: "Déc", temp: -5, rain: 130, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Baie de Kotor — Fjord UNESCO", en: "Bay of Kotor — UNESCO Fjord" },
      region: { fr: "Côte adriatique", en: "Adriatic coast" },
      description: {
        fr: "La baie de Kotor (UNESCO) est le seul fjord de la Méditerranée : des parois de 1 800m plongeant dans une eau vert-bleu, avec la vieille ville vénitienne de Kotor (XIIe-XVIe s.) au pied des remparts. La montée aux remparts (1 350 marches) offre un panorama époustouflant. L'île Notre-Dame-des-Rochers (construite à la main par des pêcheurs depuis le XVe s.) est accessible en barque.",
        en: "The Bay of Kotor (UNESCO) is the only fjord in the Mediterranean: 1,800m cliffs plunging into blue-green water, with Kotor's Venetian old town (12th–16th c.) nestled beneath its ramparts. The climb up the ramparts (1,350 steps) offers a breathtaking panorama. Our Lady of the Rocks island (hand-built by fishermen since the 15th c.) is accessible by boat.",
      },
      wikipedia: "Bay_of_Kotor",
      tags: ["Fjord", "UNESCO", "Vénitien", "Remparts", "Ville", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Vieille ville de Kotor et ses remparts vénitiens (UNESCO)", en: "Kotor's old town and its Venetian ramparts (UNESCO)" }, wikipedia: "Kotor" },
        { name: { fr: "Montée aux remparts (1 350 marches) — panorama sur le fjord", en: "Climb up the ramparts (1,350 steps) — panorama over the fjord" }, wikipedia: "File:Castillo_de_San_Juan,_Kotor,_Bahía_de_Kotor,_Montenegro,_2014-04-19,_DD_16.JPG" },
        { name: { fr: "Île Notre-Dame-des-Rochers — église baroque construite à la main", en: "Our Lady of the Rocks island — hand-built baroque church" }, wikipedia: "File:Monasterio_de_San_Jorge,_Perast,_Bahía_de_Kotor,_Montenegro,_2014-04-19,_DD_21.JPG" },
        { name: { fr: "Château de Sveti Ivan (San Giovanni) — vue au coucher du soleil", en: "St John's Fortress (San Giovanni) — sunset view" }, wikipedia: "File:Kotor Bay 5253-5255mod.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Budva et Sveti Stefan — Côte dorée", en: "Budva and Sveti Stefan — Golden Coast" },
      region: { fr: "Riviera monténégrine", en: "Montenegrin Riviera" },
      description: {
        fr: "Budva est la capitale balnéaire du Monténégro : vieille ville vénitienne sur un promontoire rocheux et plages de galets et de sable autour. Sveti Stefan est une ancienne île-village de pêcheurs transformée en hôtel de luxe Aman — sa silhouette sur la mer est l'image la plus emblématique du pays. La plage publique face à l'île est gratuite et magnifique.",
        en: "Budva is Montenegro's beach capital: a Venetian old town on a rocky promontory surrounded by pebble and sand beaches. Sveti Stefan is a former fishing village island turned Aman luxury hotel — its silhouette on the sea is the country's most iconic image. The public beach facing the island is free and stunning.",
      },
      wikipedia: "Budva",
      tags: ["Plage", "Vénitien", "Riviera", "Luxe", "Ville"],
      mustSee: [
        { name: { fr: "Vieille ville de Budva — remparts et ruelles vénitiennes", en: "Budva's old town — Venetian ramparts and alleyways" }, wikipedia: "File:Budva old town 1.jpg" },
        { name: { fr: "Vue sur Sveti Stefan depuis la route (l'image du Monténégro)", en: "View of Sveti Stefan from the road (the image of Montenegro)" }, wikipedia: "Sveti_Stefan" },
        { name: { fr: "Plage Mogren — plage cachée sous les falaises de Budva", en: "Mogren Beach — hidden beach beneath Budva's cliffs" }, wikipedia: "Budva" },
        { name: { fr: "Plage de Jaz — grande plage de festival (EXIT de Budva en août)", en: "Jaz Beach — large festival beach (Budva's EXIT festival in August)" }, wikipedia: "Jaz_Beach" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national du Durmitor — Canyon et lacs", en: "Durmitor National Park — Canyon and lakes" },
      region: { fr: "Montagnes du nord (UNESCO)", en: "Northern mountains (UNESCO)" },
      description: {
        fr: "Le Durmitor (UNESCO) est le parc national le plus sauvage des Balkans occidentaux : le canyon de Tara (1 300m de profondeur — le plus profond d'Europe après le Grand Canyon) avec son rafting de classe mondiale, le lac Noir (Crno Jezero) au pied des sommets de 2 500m, et 18 glaciations ont sculpté 48 lacs de montagne.",
        en: "Durmitor (UNESCO) is the wildest national park in the Western Balkans: the Tara Canyon (1,300m deep — Europe's deepest after the Grand Canyon) with world-class rafting, Black Lake (Crno Jezero) beneath 2,500m peaks, and 18 glaciations that carved out 48 mountain lakes.",
      },
      wikipedia: "Durmitor",
      tags: ["Canyon", "UNESCO", "Rafting", "Lacs", "Randonnée", "Ski", "Nature"],
      mustSee: [
        { name: { fr: "Rafting dans le canyon de Tara (35km, niveau débutant possible)", en: "Rafting in the Tara Canyon (35km, beginner-friendly)" }, wikipedia: "Tara_River_Canyon" },
        { name: { fr: "Canyon de Tara depuis le pont Đurđevića (150m au-dessus)", en: "Tara Canyon from Đurđevića Bridge (150m above)" }, wikipedia: "Đurđevića_Tara_Bridge" },
        { name: { fr: "Lac Noir (Crno Jezero) — randonnée 3h autour du lac", en: "Black Lake (Crno Jezero) — 3h hike around the lake" }, wikipedia: "Durmitor" },
        { name: { fr: "Ski à Žabljak (station la plus haute des Balkans, jan–mars)", en: "Skiing at Žabljak (the highest resort in the Balkans, Jan–Mar)" }, wikipedia: "Žabljak" },
      ],
    },
    {
      id: 4,
      name: { fr: "Ostrog — Monastère miraculeux", en: "Ostrog — Miraculous Monastery" },
      region: { fr: "Montagnes du centre", en: "Central mountains" },
      description: {
        fr: "Le monastère d'Ostrog est incrusté dans une falaise verticale à 900m d'altitude — l'un des lieux de pèlerinage les plus visités des Balkans, toutes religions confondues (chrétiens et musulmans). Fondé au XVIIe siècle par saint Basile d'Ostrog, ses fresques du XVIIe siècle dans la roche calcaire et son atmosphère spirituelle intense en font un lieu unique.",
        en: "Ostrog Monastery is embedded in a vertical cliff at 900m altitude — one of the most visited pilgrimage sites in the Balkans, drawing people of all faiths (Christians and Muslims alike). Founded in the 17th century by Saint Basil of Ostrog, its 17th-century frescoes carved into the limestone rock and its intense spiritual atmosphere make it a unique place.",
      },
      wikipedia: "Ostrog_Monastery",
      tags: ["Monastère", "Falaise", "Pèlerinage", "Spirituel", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Monastère supérieur d'Ostrog — dans la falaise à 900m", en: "Upper Ostrog Monastery — carved into the cliff at 900m" }, wikipedia: "File:Pogled na Ostrog izdaleka 2019.jpg" },
        { name: { fr: "Reliques de Saint Basile — vénérées par toutes religions", en: "Relics of Saint Basil — venerated across all faiths" }, wikipedia: "File:Ostrog Monastery, Montenegro.jpg" },
        { name: { fr: "Vue sur la vallée de la Zeta depuis le monastère", en: "View over the Zeta Valley from the monastery" }, wikipedia: "File:Montenegro - view down from Ostrog monastery.JPG" },
        { name: { fr: "Randonnée à pied depuis le monastère inférieur (45 min)", en: "Hike up from the lower monastery (45 min)" }, wikipedia: "File:Monasterio de Ostrog, Montenegro, 2014-04-14, DD 13.JPG" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Monténégro utilise l'euro sans être dans la zone euro (unilateralement). Les prix sont similaires à la Croatie sur la côte en été, mais l'intérieur (Durmitor) est beaucoup moins cher. La saison touristique est courte — hors juillet-août, les prix baissent de 30–50%.",
      en: "Montenegro uses the euro without being part of the eurozone (unilaterally). Prices are similar to Croatia's on the coast in summer, but the interior (Durmitor) is much cheaper. The tourist season is short — outside July–August, prices drop by 30–50%.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (euro utilisé unilatéralement)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Sobe / pension à Kotor ou Budva (hors saison)", en: "Sobe / guesthouse in Kotor or Budva (off-season)" }, price: "30–60 €", detail: { fr: "Charme local, souvent terrasse", en: "Local charm, often with a terrace" } },
          { label: { fr: "Hôtel 3★ côte monténégrine (haute saison)", en: "3★ hotel on the Montenegrin coast (high season)" }, price: "80–160 €", detail: { fr: "Vue mer, piscine en été", en: "Sea view, pool in summer" } },
          { label: { fr: "Chalet Žabljak (Durmitor)", en: "Chalet in Žabljak (Durmitor)" }, price: "30–60 €", detail: { fr: "Demi-pension disponible, nature sauvage", en: "Half-board available, wild nature" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Ćevapi + kajmak dans un restaurant local", en: "Ćevapi + kajmak at a local restaurant" }, price: "6–12 €", detail: { fr: "Cuisine balkanique typique", en: "Typical Balkan cuisine" } },
          { label: { fr: "Poisson grillé (brancin, lubina) sur la côte", en: "Grilled fish (sea bass) on the coast" }, price: "15–28 €", detail: { fr: "Pêche du matin, très frais", en: "Morning catch, very fresh" } },
          { label: { fr: "Palačinke (crêpes) au dessert", en: "Palačinke (pancakes) for dessert" }, price: "3–5 €", detail: { fr: "Incontournable dans les cafés", en: "A must in the cafés" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus côtier Kotor–Budva (45 min)", en: "Coastal bus Kotor–Budva (45 min)" }, price: "3–5 €", detail: { fr: "Fréquent, route panoramique sur la falaise", en: "Frequent, scenic clifftop road" } },
          { label: { fr: "Location de voiture (Podgorica, journée)", en: "Car rental (Podgorica, per day)" }, price: "30–60 €", detail: { fr: "Indispensable pour le Durmitor", en: "Essential for Durmitor" } },
          { label: { fr: "Ferry Kotor–Lepetane (traversée de la baie, 5 min)", en: "Ferry Kotor–Lepetane (crossing the bay, 5 min)" }, price: "5 €", detail: { fr: "Évite 35km de route", en: "Avoids 35km of driving" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Rafting canyon de Tara (journée, équipement inclus)", en: "Tara Canyon rafting (full day, equipment included)" }, price: "50–90 €", detail: { fr: "Transport + guide + déjeuner", en: "Transport + guide + lunch" } },
          { label: { fr: "Kayak de mer dans la baie de Kotor (demi-journée)", en: "Sea kayaking in the Bay of Kotor (half-day)" }, price: "30–50 €", detail: { fr: "Visite de Perast et Notre-Dame-des-Rochers", en: "Visit to Perast and Our Lady of the Rocks" } },
          { label: { fr: "Forfait ski Žabljak (journée)", en: "Žabljak ski pass (day)" }, price: "25–35 €", detail: { fr: "Petite station, ambiance authentique", en: "Small resort, authentic atmosphere" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Pension + cuisine locale + bus", en: "Guesthouse + local food + bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "85–160 €/j", desc: { fr: "Hôtel 3★ + restaurants + activités", en: "3★ hotel + restaurants + activities" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "Kotor + Baie (3j) → Budva + Sveti Stefan (2j) → Durmitor / Canyon (3j)",
        en: "Kotor + Bay (3d) → Budva + Sveti Stefan (2d) → Durmitor / Canyon (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Podgorica (Ryanair, Montenegro Airlines)", en: "Return flight Paris–Podgorica (Ryanair, Montenegro Airlines)" }, amount: "100–250 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "280–530 €" },
            { label: { fr: "Voiture de location + bus", en: "Car rental + bus" }, amount: "200–350 €" },
            { label: { fr: "Nourriture + vins locaux", en: "Food + local wines" }, amount: "200–350 €" },
            { label: { fr: "Rafting + kayak + activités", en: "Rafting + kayaking + activities" }, amount: "150–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Podgorica", en: "Return flight Paris–Podgorica" }, amount: "150–350 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)" }, amount: "700–1 350 €" },
            { label: { fr: "Voiture de location (8 jours)", en: "Car rental (8 days)" }, amount: "280–450 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–700 €" },
            { label: { fr: "Excursions + rafting + ski", en: "Excursions + rafting + skiing" }, amount: "300–550 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h30 (Ryanair direct vers Podgorica ou Tivat en saison, via Rome ou Ljubljana hors saison).", en: "~2h30 (Ryanair direct to Podgorica or Tivat in season, via Rome or Ljubljana off-season)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa pour les Français (90 jours sans visa). Passeport ou carte d'identité acceptés. Pas encore dans l'UE.", en: "No visa required for French citizens (90 days visa-free). Passport or ID card accepted. Not yet in the EU." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€, utilisé depuis 2002 sans être dans la zone euro). Carte bancaire bien acceptée sur la côte. Espèces indispensables dans l'intérieur.", en: "Euro (€, used since 2002 without being in the eurozone). Bank cards widely accepted on the coast. Cash essential inland." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Monténégrin (très proche du serbe). Anglais parlé sur la côte. Moins courant dans les montagnes.", en: "Montenegrin (very close to Serbian). English spoken on the coast. Less common in the mountains." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution particulière. Pas de CEAM (hors UE) — assurance voyage recommandée.", en: "No special precautions needed. No EHIC (outside the EU) — travel insurance recommended." } },
    { icon: "🚗", label: { fr: "Routes", en: "Roads" }, value: { fr: "Les routes de montagne (Durmitor, Lovćen) sont spectaculaires mais sinueuses. La route Kotor–Lovćen (25 virages en épingle) est à couper le souffle. Préférer une voiture à transmission automatique.", en: "Mountain roads (Durmitor, Lovćen) are spectacular but winding. The Kotor–Lovćen road (25 hairpin turns) is breathtaking. An automatic transmission car is recommended." } },
    { icon: "🏖️", label: { fr: "Fréquentation", en: "Crowds" }, value: { fr: "La côte est saturée en juillet-août (surtout Budva). Venir en juin ou septembre pour moitié moins de monde. Le Durmitor est agréable même au cœur de l'été.", en: "The coast is packed in July–August (especially Budva). Come in June or September for half the crowds. Durmitor is pleasant even at the height of summer." } },
  ],
};
