export const SWEDEN = {
  code: "SWE",
  numericId: 752,
  name: { fr: "Suède", en: "Sweden" },
  emoji: "🇸🇪",
  capital: { fr: "Stockholm", en: "Stockholm" },
  language: { fr: "Suédois", en: "Swedish" },
  currency: { fr: "Couronne suédoise (SEK)", en: "Swedish krona (SEK)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 100, budgetMid: 180,
    tripMin: 1500, tripMid: 3500,
  },
  description: {
    fr: "La Suède offre une nature sauvage immense : l'archipel de Stockholm (30 000 îles), la Laponie suédoise avec ses aurores boréales et ses rennes, les forêts de pins infinies, et les lacs de l'intérieur. Stockholm est l'une des capitales les plus belles d'Europe — construite sur 14 îles. Le pays de l'IKEA, d'ABBA, du design et du fika (pause café rituelle).",
    en: "Sweden offers immense wild nature: the Stockholm archipelago (30,000 islands), Swedish Lapland with its northern lights and reindeer, endless pine forests, and inland lakes. Stockholm is one of the most beautiful capitals in Europe — built across 14 islands. The land of IKEA, ABBA, design and fika (the ritual coffee break).",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Été scandinave", en: "Scandinavian summer" },
      color: "#22c55e",
      description: {
        fr: "Soleil quasi permanent à Stockholm (17–21°C), archipel animé, randonnées en Laponie. Soleil de minuit au-dessus du cercle polaire. Meilleure saison.",
        en: "Near-constant daylight in Stockholm (17–21°C), lively archipelago, hiking in Lapland. Midnight sun above the Arctic Circle. The best season.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Hiver arctique", en: "Arctic winter" },
      color: "#3b82f6",
      description: {
        fr: "Aurores boréales en Laponie (Abisko, meilleur site d'Europe), traîneaux à chiens, ski, hôtel de glace de Jukkasjärvi. -20°C en Laponie, -5°C à Stockholm.",
        en: "Northern lights in Lapland (Abisko, the best spot in Europe), dog sledding, skiing, the Jukkasjärvi ice hotel. -20°C in Lapland, -5°C in Stockholm.",
      },
      icon: "🌌",
    },
  ],

  weatherCities: [
    {
      id: "stockholm",
      name: "Stockholm",
      region: { fr: "Suède centrale (archipel baltique)", en: "Central Sweden (Baltic archipelago)" },
      data: [
        { month: "Jan", temp: -2, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -2, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  2, rain: 35,  icon: "⛅" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 35,  icon: "☀️" },
        { month: "Jun", temp: 17, rain: 45,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 55,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  4, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  1, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "abisko",
      name: "Abisko (Laponie)",
      region: { fr: "Laponia — cercle polaire (68°N)", en: "Laponia — Arctic Circle (68°N)" },
      data: [
        { month: "Jan", temp: -14, rain: 30, icon: "❄️" },
        { month: "Fév", temp: -13, rain: 25, icon: "❄️" },
        { month: "Mar", temp:  -8, rain: 25, icon: "❄️" },
        { month: "Avr", temp:  -2, rain: 25, icon: "❄️" },
        { month: "Mai", temp:   5, rain: 30, icon: "⛅" },
        { month: "Jun", temp:  12, rain: 40, icon: "⛅" },
        { month: "Jul", temp:  14, rain: 50, icon: "⛅" },
        { month: "Aoû", temp:  12, rain: 55, icon: "⛅" },
        { month: "Sep", temp:   6, rain: 45, icon: "⛅" },
        { month: "Oct", temp:   0, rain: 45, icon: "⛅" },
        { month: "Nov", temp:  -6, rain: 35, icon: "❄️" },
        { month: "Déc", temp: -11, rain: 30, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Stockholm — Capitale sur l'eau", en: "Stockholm — Capital on the water" },
      region: { fr: "Suède centrale", en: "Central Sweden" },
      description: {
        fr: "Stockholm s'étend sur 14 îles entre le lac Mälaren et la mer Baltique : Gamla Stan (vieille ville médiévale du XIIIe siècle), le musée Vasa (navire de guerre de 1628 intact), le musée Skansen (premier musée en plein air du monde), et les quartiers branchés de Södermalm et Östermalm. Une capitale qui conjugue histoire, design et nature à portée de ferry.",
        en: "Stockholm spans 14 islands between Lake Mälaren and the Baltic Sea: Gamla Stan (13th-century medieval old town), the Vasa Museum (an intact 1628 warship), the Skansen Museum (the world's first open-air museum), and the trendy districts of Södermalm and Östermalm. A capital combining history, design and nature just a ferry ride away.",
      },
      wikipedia: "Stockholm",
      tags: ["Ville", "Musées", "Architecture", "Îles", "Gastronomie"],
      mustSee: [
        { name: { fr: "Musée Vasa — navire de guerre du XVIIe siècle intact", en: "Vasa Museum — an intact 17th-century warship" }, wikipedia: "Vasa_(ship)" },
        { name: { fr: "Gamla Stan — vieille ville médiévale et Palais Royal", en: "Gamla Stan — medieval old town and Royal Palace" }, wikipedia: "File:Västerlånggatan,_Gamla_stan,_Stockholm.jpg" },
        { name: { fr: "Archipel de Stockholm en ferry (30 000 îles)", en: "Stockholm archipelago by ferry (30,000 islands)" }, wikipedia: "File:SS Stockholm August 2015 01.jpg" },
        { name: { fr: "ABBA The Museum — exposition interactive sur ABBA", en: "ABBA The Museum — interactive exhibition on ABBA" }, wikipedia: "File:ABBA- The Museum-4.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Laponie suédoise — Aurores et rennes", en: "Swedish Lapland — Northern lights and reindeer" },
      region: { fr: "Norrbotten (cercle polaire)", en: "Norrbotten (Arctic Circle)" },
      description: {
        fr: "La Laponie suédoise abrite le parc national de Laponia (UNESCO), les éleveurs de rennes Sami, et Abisko — réputé avoir le ciel le plus clair d'Europe pour les aurores boréales. L'Ice Hotel de Jukkasjärvi est un hôtel entièrement reconstruit en glace chaque année depuis 1990. La randonnée de la Kungsleden (500km) est le trek le plus emblématique de Scandinavie.",
        en: "Swedish Lapland is home to Laponia National Park (UNESCO), Sami reindeer herders, and Abisko — reputed to have the clearest skies in Europe for northern lights. The Jukkasjärvi Ice Hotel is entirely rebuilt from ice every year since 1990. The Kungsleden trail (500km) is Scandinavia's most iconic trek.",
      },
      wikipedia: "File:Oratunturi_central_summit_from_the_west_in_midnight,_Sodankylä,_Lapland,_Finland,_2019_June.jpg",
      tags: ["Aurores", "Rennes", "Sami", "Arctique", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Ice Hotel Jukkasjärvi — chambre sculptée dans la glace", en: "Jukkasjärvi Ice Hotel — a room carved from ice" }, wikipedia: "File:Icehotel-se-01.JPG" },
        { name: { fr: "Aurores boréales depuis la Aurora Sky Station d'Abisko", en: "Northern lights from Abisko's Aurora Sky Station" }, wikipedia: "File:Aurora in Abisko near Torneträsk.jpg" },
        { name: { fr: "Traîneau à chiens en Laponie (excursion 2–3h)", en: "Dog sledding in Lapland (2–3h excursion)" }, wikipedia: "File:Reindeers_at_Lake_Torneträsk,_Abisko_area,_Swedish_Lapland.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Gotland — Île médiévale de la Baltique", en: "Gotland — Medieval island of the Baltic" },
      region: { fr: "Mer Baltique", en: "Baltic Sea" },
      description: {
        fr: "Gotland est la plus grande île de la Baltique : Visby, sa capitale médiévale (UNESCO), est entourée de remparts du XIIIe siècle intacts. Les champs de fleurs sauvages, les raukar (piliers calcaires sur les plages), les ruines d'églises romanes et le festival médiéval annuel d'août font de Gotland une destination unique en Europe.",
        en: "Gotland is the largest island in the Baltic: Visby, its medieval capital (UNESCO), is surrounded by intact 13th-century ramparts. Wildflower fields, raukar (limestone pillars on the beaches), Romanesque church ruins and the annual medieval festival in August make Gotland a unique destination in Europe.",
      },
      wikipedia: "File:Helgumannen (2) hq.JPG",
      tags: ["Médiéval", "UNESCO", "Île", "Remparts"],
      mustSee: [
        { name: { fr: "Visby — ville médiévale fortifiée UNESCO (XIIIe s.)", en: "Visby — UNESCO-listed fortified medieval town (13th century)" }, wikipedia: "File:Visby domkyrka July 2019 07.jpg" },
        { name: { fr: "Raukar de Fårö — sculptures naturelles calcaires sur la plage", en: "Fårö raukar — natural limestone sculptures on the beach" }, wikipedia: "File:Gotland Fårö-Raukar Gamlehamn.jpg" },
        { name: { fr: "Festival médiéval de Visby (août)", en: "Visby Medieval Week (August)" }, wikipedia: "File:Jousting during the Medieval Week in Visby in 2009.jpg" },
        { name: { fr: "Ruines des 94 églises médiévales de Gotland", en: "Ruins of Gotland's 94 medieval churches" }, wikipedia: "File:Visby_panorama_från_klinten.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Côte ouest — Göteborg et Bohuslän", en: "West Coast — Gothenburg and Bohuslän" },
      region: { fr: "Västra Götaland", en: "Västra Götaland" },
      description: {
        fr: "Göteborg est la deuxième ville de Suède, réputée pour ses fruits de mer (les meilleures langoustes et crevettes de Scandinavie), ses canaux néerlandais, et Liseberg (l'un des parcs d'attractions les plus appréciés d'Europe). La côte de Bohuslän au nord : villages de pêcheurs sur des rochers granitiques polis par la mer, gravures rupestres de Tanum (UNESCO).",
        en: "Gothenburg is Sweden's second city, known for its seafood (the best langoustines and shrimp in Scandinavia), its Dutch-style canals, and Liseberg (one of the most beloved amusement parks in Europe). The Bohuslän coast to the north: fishing villages on sea-polished granite rocks, and the Tanum rock carvings (UNESCO).",
      },
      wikipedia: "Gothenburg",
      tags: ["Fruits de mer", "Côte", "UNESCO", "Design"],
      mustSee: [
        { name: { fr: "Marché de Feskekorka — fruits de mer frais de Bohuslän", en: "Feskekôrka market — fresh Bohuslän seafood" }, wikipedia: "File:00 3022 Göteborg - Markthallen.jpg" },
        { name: { fr: "Gravures rupestres de Tanum — art de l'Âge du Bronze (UNESCO)", en: "Tanum rock carvings — Bronze Age art (UNESCO)" }, wikipedia: "Rock_Carvings_in_Tanum" },
        { name: { fr: "Archipel de Bohuslän — kayak entre les îlots granitiques", en: "Bohuslän archipelago — kayaking among the granite islets" }, wikipedia: "File:Bohuslän 2017.jpg" },
        { name: { fr: "Universeum — grand aquarium de Scandinavie", en: "Universeum — Scandinavia's great aquarium" }, wikipedia: "Universeum" },
      ],
    },
    {
      id: 5,
      name: "Åre & Sälen",
      region: { fr: "Jämtland / Dalarna", en: "Jämtland / Dalarna" },
      description: {
        fr: "Åre est la plus grande station de ski de Scandinavie, prisée pour ses pistes alpines et son ambiance animée. Plus au sud, Sälen réunit quatre domaines parfaits pour les familles. Forêts, lacs gelés et parcs nationaux complètent ce terrain de jeu nordique en hiver comme en été.",
        en: "Åre is Scandinavia's largest ski resort, prized for its alpine slopes and lively atmosphere. Further south, Sälen brings together four resorts perfect for families. Forests, frozen lakes and national parks round out this Nordic playground in both winter and summer.",
      },
      wikipedia: "Åre",
      tags: ["Ski", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Åre — plus grande station scandinave", en: "Åre — Scandinavia's largest resort" }, wikipedia: "Åre" },
        { name: { fr: "Sälen — 4 domaines réunis", en: "Sälen — 4 combined resorts" }, wikipedia: "Sälen" },
        { name: { fr: "Parc national de Fulufjället", en: "Fulufjället National Park" }, wikipedia: "File:Fulufjällets nationalpark, July 2022 30.jpg" },
        { name: { fr: "Östersund & musée Jamtli", en: "Östersund & Jamtli Museum" }, wikipedia: "Östersund" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Suède est chère mais moins que la Norvège. Le franc-suédois fort rend tout plus onéreux pour les visiteurs, mais le supermarché reste accessible. Les transports sont excellents et relativement abordables. L'hébergement est le poste le plus lourd.",
      en: "Sweden is expensive but less so than Norway. Everything is pricier for visitors, but supermarkets remain affordable. Transport is excellent and relatively cheap. Accommodation is the biggest expense.",
    },
    currency: "SEK",
    exchangeRate: "1€ ≈ 11 SEK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "STF Hostel (auberge officielle suédoise)", en: "STF Hostel (official Swedish hostel)" }, price: "30–60 €", detail: { fr: "Dortoir ou chambre double, bon rapport qualité/prix", en: "Dorm or double room, good value" } },
          { label: { fr: "Hôtel 3★ Stockholm ou Göteborg", en: "3★ hotel in Stockholm or Gothenburg" }, price: "120–200 €", detail: { fr: "Confort standard en ville", en: "Standard city comfort" } },
          { label: { fr: "Ice Hotel Jukkasjärvi (chambre de glace)", en: "Jukkasjärvi Ice Hotel (ice room)" }, price: "350–600 €", detail: { fr: "Expérience unique de janvier à avril", en: "A unique experience January to April" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Lunch suédois (dagens rätt — plat du jour + café)", en: "Swedish lunch (dagens rätt — dish of the day + coffee)" }, price: "12–18 €", detail: { fr: "Formule déjeuner partout en Suède", en: "A lunch deal found everywhere in Sweden" } },
          { label: { fr: "Fika (café + kanelbulle) dans un café", en: "Fika (coffee + kanelbulle) at a café" }, price: "5–8 €", detail: { fr: "Rituel social suédois incontournable", en: "An essential Swedish social ritual" } },
          { label: { fr: "Supermarché ICA ou Coop — courses pour la journée", en: "ICA or Coop supermarket — a day's groceries" }, price: "15–25 €", detail: { fr: "Qualité excellente", en: "Excellent quality" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Train SJ Stockholm–Göteborg (3h)", en: "SJ train Stockholm–Gothenburg (3h)" }, price: "20–60 €", detail: { fr: "Réservation à l'avance conseillée", en: "Advance booking recommended" } },
          { label: { fr: "SL (métro + bus Stockholm, ticket 24h)", en: "SL (Stockholm metro + bus, 24h ticket)" }, price: "14–16 €", detail: { fr: "Réseau très efficace", en: "Very efficient network" } },
          { label: { fr: "Ferry Stockholm–Gotland (6h)", en: "Ferry Stockholm–Gotland (6h)" }, price: "25–60 €", detail: { fr: "Destination + vélo possible", en: "Destination + bike option" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Musée Vasa (Stockholm)", en: "Vasa Museum (Stockholm)" }, price: "19 €", detail: { fr: "Incontournable, inclus dans Stockholm Pass", en: "A must-see, included in the Stockholm Pass" } },
          { label: { fr: "Excursion aurores boréales (Abisko, minibus, 4h)", en: "Northern lights excursion (Abisko, minibus, 4h)" }, price: "60–100 €", detail: { fr: "Déc–mars, selon météo", en: "Dec–Mar, weather dependent" } },
          { label: { fr: "Kayak archipel de Stockholm (demi-journée)", en: "Kayaking in the Stockholm archipelago (half-day)" }, price: "50–80 €", detail: { fr: "Location ou guidé", en: "Rental or guided" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "100–160 €/j", desc: { fr: "Auberge + supermarché + transports publics", en: "Hostel + supermarket + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "180–300 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Stockholm (3j) → Gotland (2j) → Göteborg et Bohuslän (2j) → Laponie Abisko (3j)",
        en: "Stockholm (3d) → Gotland (2d) → Gothenburg and Bohuslän (2d) → Lapland Abisko (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Stockholm (SAS, Norwegian, EasyJet)", en: "Return flight Paris–Stockholm (SAS, Norwegian, EasyJet)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "400–700 €" },
            { label: { fr: "Transports intérieurs (train, ferry)", en: "Domestic transport (train, ferry)" }, amount: "300–500 €" },
            { label: { fr: "Nourriture (supermarché + dagens rätt)", en: "Food (supermarket + dagens rätt)" }, amount: "350–500 €" },
            { label: { fr: "Activités & musées", en: "Activities & museums" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 6 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Stockholm", en: "Return flight Paris–Stockholm" }, amount: "150–400 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Transports + vol intérieur Laponie", en: "Transport + domestic flight to Lapland" }, amount: "500–900 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "600–900 €" },
            { label: { fr: "Aurores, kayak, musées, Ice Hotel", en: "Northern lights, kayaking, museums, Ice Hotel" }, amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2–2h30 (SAS, Norwegian, Air France direct CDG–Stockholm Arlanda). Aussi Ryanair via Skavsta/Västerås.", en: "~2–2h30 (SAS, Norwegian, direct Air France CDG–Stockholm Arlanda). Also Ryanair via Skavsta/Västerås." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Couronne suédoise (SEK). Carte bancaire acceptée partout — les Suédois utilisent quasi-exclusivement Swish (appli). Espèces rares.", en: "Swedish krona (SEK). Cards accepted everywhere — Swedes almost exclusively use Swish (an app). Cash is rare." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Suédois. Anglais parlé quasi-universellement — niveau excellent dans tout le pays.", en: "Swedish. English spoken almost universally — excellent level throughout the country." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution particulière. Carte européenne d'assurance maladie (CEAM) valide. Pharmacies omniprésentes (Apoteket).", en: "No particular precautions needed. European Health Insurance Card (EHIC) valid. Pharmacies (Apoteket) are everywhere." } },
    { icon: "🌞", label: { fr: "Soleil de minuit", en: "Midnight sun" }, value: { fr: "Soleil de minuit en Laponie de mai à juillet. Nuit polaire de décembre à janvier. Mélatonine conseillée pour réguler le sommeil en été.", en: "Midnight sun in Lapland from May to July. Polar night from December to January. Melatonin recommended to regulate sleep in summer." } },
    { icon: "🏕️", label: { fr: "Droit de passage", en: "Right to roam" }, value: { fr: "L'Allemansrätten (droit de tous) permet de randonner et camper librement sur toutes les terres privées ou publiques en Suède. Règle fondamentale.", en: "The Allemansrätten (everyman's right) allows free hiking and camping on all private or public land in Sweden. A fundamental rule." } },
  ],
};
