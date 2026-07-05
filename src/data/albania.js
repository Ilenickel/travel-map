export const ALBANIA = {
  code: "ALB",
  numericId: 8,
  name: { fr: "Albanie", en: "Albania" },
  emoji: "🇦🇱",
  capital: { fr: "Tirana", en: "Tirana" },
  language: { fr: "Albanais", en: "Albanian" },
  currency: { fr: "Lek albanais (ALL)", en: "Albanian Lek (ALL)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 600, tripMid: 1200,
  },
  description: {
    fr: "L'Albanie est la dernière frontière balkanique : une côte adriatique et ionique encore préservée (la Riviera albanaise avec ses eaux turquoise), Berat et Gjirokastër (deux villes ottomanes UNESCO), le lac d'Ohrid partagé avec la Macédoine du Nord, les montagnes maudites (Alpes albanaises) au nord — un pays qui sort d'un isolement de 50 ans et offre une authenticité rare.",
    en: "Albania is the Balkans' last frontier: a still-unspoiled Adriatic and Ionian coastline (the Albanian Riviera with its turquoise waters), Berat and Gjirokastër (two UNESCO Ottoman towns), Lake Ohrid shared with North Macedonia, and the Accursed Mountains (Albanian Alps) in the north — a country emerging from 50 years of isolation that offers rare authenticity.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Été adriatique et ionique", en: "Adriatic and Ionian summer" },
      color: "#22c55e",
      description: {
        fr: "Côte idéale (24–30°C, eau chaude, plages peu fréquentées). Juillet-août chaud mais la Riviera reste moins bondée que la Croatie. Juin et septembre parfaits.",
        en: "Ideal for the coast (24–30°C, warm water, uncrowded beaches). July-August is hot but the Riviera stays less crowded than Croatia. June and September are perfect.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avril – Mai", en: "April – May" },
      label: { fr: "Printemps montagne", en: "Mountain spring" },
      color: "#f59e0b",
      description: {
        fr: "Les Alpes albanaises (Valbonë, Theth) sont magnifiques au printemps. Idéal pour la randonnée et la visite des villes UNESCO de Berat et Gjirokastër.",
        en: "The Albanian Alps (Valbonë, Theth) are magnificent in spring. Ideal for hiking and visiting the UNESCO towns of Berat and Gjirokastër.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "tirana",
      name: "Tirana",
      region: { fr: "Plaine centrale (capitale)", en: "Central plain (capital)" },
      data: [
        { month: "Jan", temp:  7, rain: 130, icon: "🌧️" },
        { month: "Fév", temp:  8, rain: 120, icon: "⛅" },
        { month: "Mar", temp: 11, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 14, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 70,  icon: "⛅" },
        { month: "Jun", temp: 23, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 20,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 55,  icon: "☀️" },
        { month: "Oct", temp: 17, rain: 95,  icon: "⛅" },
        { month: "Nov", temp: 12, rain: 140, icon: "⛅" },
        { month: "Déc", temp:  8, rain: 155, icon: "🌧️" },
      ],
    },
    {
      id: "saranda",
      name: "Sarandë",
      region: { fr: "Riviera ionique (sud)", en: "Ionian Riviera (south)" },
      data: [
        { month: "Jan", temp:  9, rain: 160, icon: "🌧️" },
        { month: "Fév", temp: 10, rain: 130, icon: "⛅" },
        { month: "Mar", temp: 12, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 16, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 21, rain: 40,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 8,   icon: "⛅" },
        { month: "Sep", temp: 24, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 14, rain: 150, icon: "⛅" },
        { month: "Déc", temp: 10, rain: 185, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Berat — Ville des mille fenêtres (UNESCO)", en: "Berat — City of a Thousand Windows (UNESCO)" },
      region: { fr: "Centre", en: "Centre" },
      description: {
        fr: "Berat (UNESCO) est l'une des mieux préservées des villes ottomanes des Balkans : ses maisons blanches aux centaines de fenêtres identiques s'étagent sur la colline sous la citadelle médiévale du XIIIe siècle. Le quartier de Mangalem (côté musulman) et Gorica (côté chrétien) se font face de part et d'autre de la rivière Osum. Un musée vivant de l'architecture ottomane.",
        en: "Berat (UNESCO) is one of the best-preserved Ottoman towns in the Balkans: its white houses with hundreds of identical windows climb the hillside beneath the 13th-century medieval citadel. The Mangalem quarter (Muslim side) and Gorica (Christian side) face each other across the Osum River. A living museum of Ottoman architecture.",
      },
      wikipedia: "Berat",
      tags: ["UNESCO", "Ottoman", "Citadelle", "Fenêtres", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Citadelle de Berat (Kalaja) — habitée depuis le IVe s. av. J.-C.", en: "Berat Citadel (Kalaja) — inhabited since the 4th century BC" }, wikipedia: "Berat_Castle" },
        { name: { fr: "Quartier de Mangalem — maisons ottomanes aux cents fenêtres", en: "Mangalem quarter — Ottoman houses with hundreds of windows" }, wikipedia: "Berat" },
        { name: { fr: "Musée des icônes d'Onufri — peintre albanais du XVIe siècle", en: "Onufri Icon Museum — 16th-century Albanian painter" }, wikipedia: "Onufri" },
        { name: { fr: "Vue sur la rivière Osum depuis le pont de Gorica", en: "View of the Osum River from the Gorica bridge" }, wikipedia: "Berat" },
      ],
    },
    {
      id: 2,
      name: { fr: "Gjirokastër — Cité de pierre (UNESCO)", en: "Gjirokastër — City of Stone (UNESCO)" },
      region: { fr: "Sud", en: "South" },
      description: {
        fr: "Gjirokastër (UNESCO) est une ville de pierre du XVIIe siècle dans la vallée de Drinos : ses maisons-tours aux toits de pierre grise (ardoise locale) et sa citadelle ottomane sont uniques dans les Balkans. Ville natale d'Enver Hoxha (dictateur communiste) et d'Ismail Kadaré (romancier albanais de réputation mondiale). La prison communiste dans la citadelle est un témoignage historique fort.",
        en: "Gjirokastër (UNESCO) is a 17th-century stone town in the Drino Valley: its tower houses with grey stone roofs (local slate) and its Ottoman citadel are unique in the Balkans. Birthplace of Enver Hoxha (communist dictator) and Ismail Kadaré (world-renowned Albanian novelist). The communist prison inside the citadel is a powerful historical testimony.",
      },
      wikipedia: "Gjirokastër",
      tags: ["UNESCO", "Pierre", "Ottoman", "Citadelle"],
      mustSee: [
        { name: { fr: "Citadelle de Gjirokastër — avion américain F-86 capturé en 1957", en: "Gjirokastër Citadel — American F-86 aircraft captured in 1957" }, wikipedia: "File:Gjirokastër Castle (by Pudelek) 3.jpg" },
        { name: { fr: "Maison-musée d'Ismail Kadaré — romancier albanais", en: "Ismail Kadaré House-Museum — Albanian novelist" }, wikipedia: "File:Gjirokastër, Albania November 2022 - Winding lane.jpg" },
        { name: { fr: "Village de Labovë e Kryqit — monastère du Xe siècle dans les montagnes", en: "Labovë e Kryqit village — 10th-century monastery in the mountains" }, wikipedia: "File:Gjirokastër, Albania November 2022 - View.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Riviera albanaise — Côte ionique", en: "Albanian Riviera — Ionian Coast" },
      region: { fr: "Sud (côte)", en: "South (coast)" },
      description: {
        fr: "La Riviera albanaise (de Vlorë à Sarandë) est la côte méditerranéenne la moins connue d'Europe : eaux ioniques turquoise, falaises calcaires, plages de galets et de sable, villages de pêcheurs accrochés à la falaise (Dhermi, Himara, Lukova). La route panoramique de la Riviera (SH8) est l'une des plus belles d'Europe et reste peu fréquentée.",
        en: "The Albanian Riviera (from Vlorë to Sarandë) is Europe's least-known Mediterranean coastline: turquoise Ionian waters, limestone cliffs, pebble and sand beaches, fishing villages clinging to the cliffside (Dhermi, Himara, Lukova). The scenic Riviera road (SH8) is one of the most beautiful in Europe and remains uncrowded.",
      },
      wikipedia: "File:Bunec beach Albanian Riviera.jpg",
      tags: ["Côte", "Turquoise", "Panorama", "Villages", "Plage", "Nature"],
      mustSee: [
        { name: { fr: "Plage de Ksamil — 4 îlots dans l'eau turquoise face à Corfou", en: "Ksamil Beach — 4 islets in turquoise water facing Corfu" }, wikipedia: "File:Bunec beach Albanian Riviera.jpg" },
        { name: { fr: "Route panoramique SH8 Vlorë–Sarandë — vue sur les îles grecques", en: "SH8 scenic road Vlorë–Sarandë — views of the Greek islands" }, wikipedia: "File:Road construction at Albanian Riviera.jpg" },
        { name: { fr: "Dhermi — village suspendu au-dessus de la mer ionique", en: "Dhermi — village perched above the Ionian Sea" }, wikipedia: "File:Dhermi village.jpg" },
        { name: { fr: "Ruines de Butrint (UNESCO) — cité antique grecque et romaine dans une lagune", en: "Ruins of Butrint (UNESCO) — ancient Greek and Roman city in a lagoon" }, wikipedia: "Butrint" },
      ],
    },
    {
      id: 4,
      name: { fr: "Alpes albanaises — Valbonë et Theth", en: "Albanian Alps — Valbonë and Theth" },
      region: { fr: "Nord", en: "North" },
      description: {
        fr: "Les Alpes albanaises (aussi appelées 'Montagnes Maudites') au nord de l'Albanie sont l'une des zones les plus sauvages des Balkans : le parc national de Valbonë avec ses pics de 2 700m, la vallée de Theth (village isolé avec sa tour de guet du Bektachisme), et le trek Valbonë-Theth (6h) sont parmi les plus beaux de la région.",
        en: "The Albanian Alps (also called the 'Accursed Mountains') in northern Albania are one of the wildest areas in the Balkans: Valbonë National Park with its 2,700m peaks, the Theth valley (an isolated village with its Bektashi watchtower), and the Valbonë-Theth trek (6h) are among the most beautiful in the region.",
      },
      wikipedia: "File:Albanian Alps from Air.jpg",
      tags: ["Randonnée", "Alpes", "Nature", "Isolé", "Ski"],
      mustSee: [
        { name: { fr: "Trek Valbonë–Theth (6h) — passage montagneux à 1 800m", en: "Valbonë–Theth trek (6h) — mountain pass at 1,800m" }, wikipedia: "File:Albanian Alps from Air.jpg" },
        { name: { fr: "Cascade de Theth (Grunas) — 30m dans la forêt de pins", en: "Theth Waterfall (Grunas) — 30m in a pine forest" }, wikipedia: "File:2024-10-14 Theth National Park 18.jpg" },
        { name: { fr: "Kulla (tour de guet) de Theth — architecture du Kanun albanais", en: "Kulla (watchtower) of Theth — architecture of the Albanian Kanun" }, wikipedia: "File:Kisha e Thethit - 2018 (8).jpg" },
        { name: { fr: "Lac de Koman — traversée en ferry dans un paysage de fjord", en: "Lake Koman — ferry crossing through a fjord-like landscape" }, wikipedia: "File:Ferry Berisha on Lake Komani, September 2022 05.jpg" },
      ],
    },
    {
      id: 5,
      name: "Tirana",
      region: { fr: "Centre de l'Albanie", en: "Central Albania" },
      description: {
        fr: "Capitale colorée et en pleine effervescence, Tirana surprend par ses façades multicolores et son énergie jeune. Entre vestiges communistes reconvertis en musées, château ottoman et marchés animés, la ville raconte l'histoire mouvementée de l'Albanie. Cafés branchés et gastronomie locale rythment ses journées.",
        en: "A colourful, bustling capital, Tirana surprises visitors with its multicoloured facades and youthful energy. Between communist relics turned into museums, an Ottoman castle and lively markets, the city tells Albania's turbulent history. Trendy cafés and local cuisine set the pace of its days.",
      },
      wikipedia: "Tirana",
      tags: ["Ville", "Architecture", "Gastronomie", "Culture"],
      mustSee: [
        { name: { fr: "Place Skanderbeg", en: "Skanderbeg Square" }, wikipedia: "Skanderbeg_Square" },
        { name: { fr: "Bunk'Art — musée dans un bunker", en: "Bunk'Art — museum in a bunker" }, wikipedia: "File:Bunk'Art 1 Entrance.jpg" },
        { name: { fr: "Château de Tirana", en: "Tirana Castle" }, wikipedia: "File:Kalaja e Tiranës.jpg" },
        { name: { fr: "Bloc (Le Bloc) — architecture communiste", en: "Blloku (The Block) — communist architecture" }, wikipedia: "File:Former_Enver_Hoxha_House.jpg" },
        { name: { fr: "Marché de Pazari i Ri", en: "Pazari i Ri Market" }, wikipedia: "File:New Bazaar (Pazari i Ri), Tirana, Albania.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Albanie est l'un des pays les moins chers des Balkans : les prix restent très bas malgré une hausse du tourisme depuis 2018. La côte est plus chère en juillet-août. Tirana et les villes UNESCO sont très abordables toute l'année.",
      en: "Albania is one of the cheapest countries in the Balkans: prices remain very low despite a rise in tourism since 2018. The coast is more expensive in July-August. Tirana and the UNESCO towns are very affordable year-round.",
    },
    currency: "ALL",
    exchangeRate: "1€ ≈ 105 ALL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse familiale (Berat, Gjirokastër)", en: "Family guesthouse (Berat, Gjirokastër)" }, price: "20–40 €", detail: { fr: "Petits-déjeuners albanais inclus souvent", en: "Albanian breakfast often included" } },
          { label: { fr: "Hôtel 3★ Tirana centre", en: "3★ hotel, central Tirana" }, price: "45–80 €", detail: { fr: "Bon confort, proche des Blok", en: "Good comfort, near Blloku" } },
          { label: { fr: "Bungalow / villa côtière (Ksamil)", en: "Bungalow / coastal villa (Ksamil)" }, price: "50–100 €", detail: { fr: "Vue mer, réserver à l'avance en juillet-août", en: "Sea view, book ahead in July-August" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Byrek (feuillleté à la viande ou épinards)", en: "Byrek (meat or spinach pastry)" }, price: "1–3 €", detail: { fr: "Petit-déjeuner albanais universel", en: "Universal Albanian breakfast" } },
          { label: { fr: "Tavë kosi (agneau au yaourt) dans une taverne locale", en: "Tavë kosi (lamb in yoghurt) at a local tavern" }, price: "6–12 €", detail: { fr: "Plat national albanais", en: "Albania's national dish" } },
          { label: { fr: "Poisson grillé sur la côte ionique", en: "Grilled fish on the Ionian coast" }, price: "10–20 €", detail: { fr: "Pêche du jour, très frais", en: "Catch of the day, very fresh" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Furgon (minibus) Tirana–Berat (2h30)", en: "Furgon (minibus) Tirana–Berat (2h30)" }, price: "3–5 €", detail: { fr: "Transport local essentiel", en: "Essential local transport" } },
          { label: { fr: "Bus Tirana–Sarandë (4h30)", en: "Bus Tirana–Sarandë (4h30)" }, price: "8–15 €", detail: { fr: "Compagnies privées, départ fréquent", en: "Private companies, frequent departures" } },
          { label: { fr: "Ferry Sarandë–Corfou (Grèce, 30 min)", en: "Ferry Sarandë–Corfu (Greece, 30 min)" }, price: "20–35 €", detail: { fr: "Liaison quotidienne", en: "Daily crossing" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée citadelle de Berat ou Gjirokastër", en: "Entry to Berat or Gjirokastër citadel" }, price: "2–5 €", detail: { fr: "Très peu cher", en: "Very cheap" } },
          { label: { fr: "Ruines de Butrint (UNESCO)", en: "Ruins of Butrint (UNESCO)" }, price: "10 €", detail: { fr: "Site antique exceptionnel près de Sarandë", en: "Exceptional ancient site near Sarandë" } },
          { label: { fr: "Guide trek Valbonë–Theth (journée)", en: "Valbonë–Theth trek guide (full day)" }, price: "20–40 €", detail: { fr: "Transport en ferry Koman inclus souvent", en: "Koman ferry transport often included" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Guesthouse + byrek + furgon", en: "Guesthouse + byrek + furgon" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "60–110 €/j", desc: { fr: "Hôtel 3★ + taverne + voiture", en: "3★ hotel + tavern + car" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Tirana (2j) → Berat (2j) → Gjirokastër (2j) → Riviera + Ksamil (3j) → Alpes / Theth (1j)", en: "Tirana (2d) → Berat (2d) → Gjirokastër (2d) → Riviera + Ksamil (3d) → Alps / Theth (1d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "600 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tirana (Wizz Air, Air Albania)", en: "Return flight Paris–Tirana (Wizz Air, Air Albania)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–350 €" },
            { label: { fr: "Transports (furgons + bus)", en: "Transport (furgons + buses)" }, amount: "80–130 €" },
            { label: { fr: "Nourriture + cafés + bière locale", en: "Food + coffee + local beer" }, amount: "180–300 €" },
            { label: { fr: "Activités + Butrint + guider", en: "Activities + Butrint + guide" }, amount: "80–160 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 200 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tirana", en: "Return flight Paris–Tirana" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)" }, amount: "450–800 €" },
            { label: { fr: "Voiture de location (10 jours)", en: "Rental car (10 days)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "300–550 €" },
            { label: { fr: "Activités, trek, côte", en: "Activities, trekking, coast" }, amount: "150–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h30 (Wizz Air direct Beauvais/CDG–Tirana, Air Albania). Liaisons régulières.", en: "~2h30 (Wizz Air direct Beauvais/CDG–Tirana, Air Albania). Regular flights." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité acceptés. Pas dans l'UE (candidat).", en: "No visa required for French citizens (90 days). Passport or ID card accepted. Not in the EU (candidate country)." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Lek albanais (ALL). Euros acceptés dans les hôtels et sur la côte. Espèces indispensables dans les villages et furgons.", en: "Albanian Lek (ALL). Euros accepted in hotels and along the coast. Cash essential in villages and furgons." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Albanais (langue unique — ni slave ni romane). Anglais parlé par les jeunes à Tirana et sur la côte. Italien très compris (forte influence TV italienne).", en: "Albanian (a unique language — neither Slavic nor Romance). English spoken by younger people in Tirana and on the coast. Italian widely understood (strong influence of Italian TV)." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Pas de précautions particulières. Eau du robinet à éviter dans les zones rurales. Assurance voyage recommandée.", en: "No special precautions needed. Avoid tap water in rural areas. Travel insurance recommended." } },
    { icon: "🚗", label: { fr: "Routes", en: "Roads" }, value: { fr: "Les routes de montagne (Alpes albanaises) sont parfois en mauvais état. Un 4x4 est recommandé pour Valbonë et Theth. Les furgons locaux connaissent tous les chemins.", en: "Mountain roads (Albanian Alps) can be in poor condition. A 4x4 is recommended for Valbonë and Theth. Local furgons know every route." } },
    { icon: "🏖️", label: { fr: "Riviera", en: "Riviera" }, value: { fr: "La Riviera albanaise est encore préservée des grandes foules, contrairement à la Croatie voisine. Juillet-août plus fréquenté — préférer juin ou septembre.", en: "The Albanian Riviera is still spared the big crowds, unlike neighbouring Croatia. July-August is busier — June or September is preferable." } },
  ],
};
