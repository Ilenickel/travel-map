export const SOUTH_AFRICA = {
  code: "ZAF",
  numericId: 710,
  name: { fr: "Afrique du Sud", en: "South Africa" },
  emoji: "🇿🇦",
  capital: { fr: "Pretoria", en: "Pretoria" },
  language: { fr: "Afrikaans, Anglais (+ 9 langues)", en: "Afrikaans, English (+ 9 languages)" },
  currency: { fr: "Rand (ZAR)", en: "Rand (ZAR)" },
  timezone: "UTC+2",
  filter: {
    budgetMin: 45, budgetMid: 100,
    tripMin: 2000, tripMid: 4000,
  },
  description: {
    fr: "L'Afrique du Sud est la destination africaine la plus complète : safaris dans le Kruger (Big Five), Cap de Bonne Espérance sauvage, vignobles de Stellenbosch, Garden Route spectaculaire et les plages de la côte du KwaZulu-Natal. Le tout avec une infrastructure touristique parmi les meilleures du continent.",
    en: "South Africa is the most complete African destination: safaris in Kruger (Big Five), the wild Cape of Good Hope, Stellenbosch vineyards, the spectacular Garden Route and the beaches of the KwaZulu-Natal coast. All with some of the best tourism infrastructure on the continent.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Saison sèche & Safari", en: "Dry season & Safari" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour les safaris (végétation rase, animaux visibles autour des points d'eau). Hiver austral doux dans le Kruger (15–25 °C).",
        en: "Best time for safaris (short vegetation, animals visible around waterholes). Mild southern winter in Kruger (15–25 °C).",
      },
      icon: "🦁",
    },
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Été & Cape Town", en: "Summer & Cape Town" },
      color: "#fb923c",
      description: {
        fr: "Cape Town au mieux de sa forme : soleil, mer turquoise, vignobles en fleurs. Plus pluvieux dans le Kruger (herbe haute, difficile pour les safaris).",
        en: "Cape Town at its best: sunshine, turquoise sea, blooming vineyards. Rainier in Kruger (tall grass, harder for safaris).",
      },
      icon: "🌊",
    },
  ],

  weatherCities: [
    {
      id: "cape_town",
      name: "Le Cap",
      region: { fr: "Western Cape", en: "Western Cape" },
      data: [
        { month: "Jan", temp: 26, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Avr", temp: 20, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 17, rain: 70,  icon: "☀️" },
        { month: "Jun", temp: 14, rain: 100, icon: "⛅" },
        { month: "Jul", temp: 13, rain: 100, icon: "⛅" },
        { month: "Aoû", temp: 14, rain: 85,  icon: "⛅" },
        { month: "Sep", temp: 16, rain: 50,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 35,  icon: "☀️" },
        { month: "Nov", temp: 22, rain: 15,  icon: "☀️" },
        { month: "Déc", temp: 24, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "kruger",
      name: "Kruger (Phalaborwa)",
      region: { fr: "Limpopo / Mpumalanga", en: "Limpopo / Mpumalanga" },
      data: [
        { month: "Jan", temp: 27, rain: 105, icon: "🌧️" },
        { month: "Fév", temp: 26, rain: 95,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 80,  icon: "☀️" },
        { month: "Avr", temp: 22, rain: 45,  icon: "☀️" },
        { month: "Mai", temp: 18, rain: 12,  icon: "☀️" },
        { month: "Jun", temp: 15, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 15, rain: 4,   icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Sep", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Nov", temp: 26, rain: 95,  icon: "☀️" },
        { month: "Déc", temp: 26, rain: 120, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Kruger National Park",
      region: { fr: "Limpopo / Mpumalanga", en: "Limpopo / Mpumalanga" },
      description: {
        fr: "L'un des plus grands parcs africains (20 000 km²), où vivent les Big Five en liberté : lion, léopard, éléphant, rhinocéros, buffle. Les safaris en 4x4 guidés ou en autonomie depuis les camps officiels sont une expérience inoubliable.",
        en: "One of the largest parks in Africa (20,000 km²), home to the wild Big Five: lion, leopard, elephant, rhino, buffalo. Guided 4x4 safaris or self-drive from official camps are an unforgettable experience.",
      },
      wikipedia: "Kruger_National_Park",
      tags: ["Safari", "Big Five", "Faune", "Nature", "Histoire"],
      mustSee: [
        { name: { fr: "Lion & Léopard — Big Five", en: "Lion & Leopard — Big Five" }, wikipedia: "File:Big Five Game.jpg" },
        { name: { fr: "Rhinocéros blanc & noir", en: "White & black rhinoceros" }, wikipedia: "White_rhinoceros" },
        { name: { fr: "Camp de Satara — zone aux lions", en: "Satara Camp — lion territory" }, wikipedia: "Kruger_National_Park" },
        { name: { fr: "Blyde River Canyon — panorama", en: "Blyde River Canyon — panorama" }, wikipedia: "Blyde_River_Canyon" },
      ],
    },
    {
      id: 2,
      name: { fr: "Le Cap & Péninsule du Cap", en: "Cape Town & the Cape Peninsula" },
      region: { fr: "Western Cape", en: "Western Cape" },
      description: {
        fr: "Cape Town, régulièrement élue plus belle ville du monde, est dominée par la Table Mountain. La péninsule du Cap offre des plages sauvages, des pingouins africains et le célèbre Cap de Bonne Espérance.",
        en: "Cape Town, regularly voted the most beautiful city in the world, is dominated by Table Mountain. The Cape Peninsula offers wild beaches, African penguins and the famous Cape of Good Hope.",
      },
      wikipedia: "Cape_Town",
      tags: ["Ville", "Plage", "Nature", "Gastronomie", "Histoire"],
      mustSee: [
        { name: { fr: "Table Mountain — téléphérique ou trek", en: "Table Mountain — cable car or hike" }, wikipedia: "Table_Mountain" },
        { name: { fr: "Cap de Bonne Espérance", en: "Cape of Good Hope" }, wikipedia: "Cape_of_Good_Hope" },
        { name: { fr: "Pingouins africains de Boulders Beach", en: "African penguins at Boulders Beach" }, wikipedia: "Boulders_Beach" },
        { name: { fr: "Robben Island — prison de Mandela", en: "Robben Island — Mandela's prison" }, wikipedia: "Robben_Island" },
      ],
    },
    {
      id: 3,
      name: { fr: "Cape Winelands — Stellenbosch & Franschhoek", en: "Cape Winelands — Stellenbosch & Franschhoek" },
      region: { fr: "Western Cape", en: "Western Cape" },
      description: {
        fr: "À 45 km du Cap, les vallées de Stellenbosch et Franschhoek produisent certains des meilleurs vins de l'hémisphère Sud : pinotage, chenin blanc, cab-sauvignon. Villages aux maisons Cap Dutch et restaurants gastronomiques.",
        en: "45 km from Cape Town, the Stellenbosch and Franschhoek valleys produce some of the best wines in the Southern Hemisphere: pinotage, chenin blanc, cabernet sauvignon. Villages with Cape Dutch houses and fine dining restaurants.",
      },
      wikipedia: "Stellenbosch",
      tags: ["Vin", "Gastronomie", "Architecture", "Nature"],
      mustSee: [
        { name: { fr: "Vignobles de Franschhoek", en: "Franschhoek vineyards" }, wikipedia: "Franschhoek" },
        { name: { fr: "Dégustation à Stellenbosch", en: "Wine tasting in Stellenbosch" }, wikipedia: "Stellenbosch" },
        { name: { fr: "Boschendal — pique-nique en vigne", en: "Boschendal — picnic among the vines" }, wikipedia: "Boschendal" },
      ],
    },
    {
      id: 4,
      name: "Garden Route",
      region: { fr: "Western Cape / Eastern Cape", en: "Western Cape / Eastern Cape" },
      description: {
        fr: "La Garden Route est l'une des routes côtières les plus spectaculaires au monde : Knysna Lagoon turquoise, Tsitsikamma avec ses forêts millénaires et ses activités de plein air, et les plages sauvages d'Hermanus (baleines en sept.–nov.).",
        en: "The Garden Route is one of the most spectacular coastal roads in the world: the turquoise Knysna Lagoon, Tsitsikamma with its ancient forests and outdoor activities, and the wild beaches of Hermanus (whales Sep–Nov).",
      },
      wikipedia: "File:Garden_Route,_Eastern_Cape,_South_Africa_(20485656206).jpg",
      tags: ["Route", "Nature", "Plage", "Aventure"],
      mustSee: [
        { name: { fr: "Knysna — lagon & forêts", en: "Knysna — lagoon & forests" }, wikipedia: "Knysna" },
        { name: { fr: "Tsitsikamma — pont de singe & kayak", en: "Tsitsikamma — monkey bridge & kayaking" }, wikipedia: "Tsitsikamma_National_Park" },
        { name: { fr: "Hermanus — observation des baleines", en: "Hermanus — whale watching" }, wikipedia: "Hermanus" },
        { name: { fr: "Oudtshoorn — autruches & cango caves", en: "Oudtshoorn — ostriches & Cango Caves" }, wikipedia: "Oudtshoorn" },
      ],
    },
    {
      id: 5,
      name: "Drakensberg",
      region: { fr: "KwaZulu-Natal", en: "KwaZulu-Natal" },
      description: {
        fr: "Le « Dragon's Mountain » est le massif le plus spectaculaire d'Afrique australe, avec des falaises vertigineuses de 3 000 m, des peintures rupestres des San (Bushmen) et des randonnées exceptionnelles.",
        en: "The 'Dragon's Mountain' is the most spectacular range in southern Africa, with dizzying 3,000m cliffs, San (Bushmen) rock paintings and exceptional hiking.",
      },
      wikipedia: "Drakensberg",
      tags: ["Randonnée", "Nature", "Art rupestre", "UNESCO"],
      mustSee: [
        { name: { fr: "Amphithéâtre — falaise de 5 km", en: "Amphitheatre — 5 km cliff" }, wikipedia: "Amphitheatre_(Drakensberg)" },
        { name: "Cathkin Peak", wikipedia: "Drakensberg" },
        { name: { fr: "Tugela Falls — 2e chute du monde", en: "Tugela Falls — 2nd highest waterfall in the world" }, wikipedia: "Tugela_Falls" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Afrique du Sud offre un excellent rapport qualité-prix, surtout pour les Européens (rand faible). Les lodges de safari haut de gamme restent chers mais abordables vs. autres destinations africaines.",
      en: "South Africa offers excellent value for money, especially for Europeans (weak rand). High-end safari lodges remain pricey but affordable compared to other African destinations.",
    },
    currency: "ZAR",
    exchangeRate: "1€ ≈ 20 ZAR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / B&B", en: "Guesthouse / B&B" }, price: "25–50 €", detail: { fr: "Très bon rapport qualité-prix", en: "Very good value for money" } },
          { label: { fr: "Hôtel 4★ Cape Town", en: "4★ hotel in Cape Town" }, price: "80–150 €", detail: { fr: "Standard ville", en: "City standard" } },
          { label: { fr: "Safari Lodge (Kruger)", en: "Safari lodge (Kruger)" }, price: "200–800 €", detail: { fr: "All-inclusive avec safaris", en: "All-inclusive with safaris" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Braai (BBQ) & bunny chow", en: "Braai (BBQ) & bunny chow" }, price: "4–8 €", detail: { fr: "Plats nationaux délicieux", en: "Delicious national dishes" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant" }, price: "12–25 €", detail: { fr: "Très abordable vs. Europe", en: "Very affordable vs. Europe" } },
          { label: { fr: "Gastronomie Cape Town", en: "Fine dining in Cape Town" }, price: "35–70 €", detail: { fr: "Certains des meilleurs au monde", en: "Some of the best in the world" } },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Location voiture / jour", en: "Car rental / day" }, price: "25–50 €", detail: { fr: "Indispensable (conduite à gauche)", en: "Essential (drives on the left)" } },
          { label: { fr: "Vol intérieur Johannesburg–Le Cap", en: "Domestic flight Johannesburg–Cape Town" }, price: "60–120 €", detail: { fr: "FlySafair, Kulula", en: "FlySafair, Kulula" } },
          { label: { fr: "Uber (ville)", en: "Uber (city)" }, price: "3–8 €", detail: { fr: "Très développé, recommandé", en: "Widely available, recommended" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Safari game drive (matinée)", en: "Safari game drive (morning)" }, price: "40–80 €", detail: { fr: "Dans le Kruger ou privé", en: "In Kruger or a private reserve" } },
          { label: { fr: "Table Mountain (téléphérique)", en: "Table Mountain (cable car)" }, price: "20–28 €", detail: { fr: "Vue à 360°", en: "360° views" } },
          { label: { fr: "Saut à l'élastique Bloukrans (216m)", en: "Bloukrans bungee jump (216m)" }, price: "120–150 €", detail: { fr: "Record du monde", en: "World record" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "45–70 €/j", desc: { fr: "Guesthouses + restaurants locaux + location voiture partagée", en: "Guesthouses + local restaurants + shared car rental" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "100–180 €/j", desc: { fr: "Hôtel 4★ + bons restaurants + safaris", en: "4★ hotel + good restaurants + safaris" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "350 €+/j", desc: { fr: "Safari lodges + gastronomie + expériences exclusives", en: "Safari lodges + fine dining + exclusive experiences" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks" },
      route: {
        fr: "Johannesburg (1j) → Kruger National Park (4j) → Drakensberg (2j) → Le Cap (4j) → Cape Winelands (2j) → Garden Route (1j)",
        en: "Johannesburg (1d) → Kruger National Park (4d) → Drakensberg (2d) → Cape Town (4d) → Cape Winelands (2d) → Garden Route (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg", en: "Return flight Paris–Johannesburg" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "400–700 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "350–500 €" },
            { label: { fr: "Location voiture (14j)", en: "Car rental (14d)" }, amount: "400–600 €" },
            { label: { fr: "Activités & safaris", en: "Activities & safaris" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg", en: "Return flight Paris–Johannesburg" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)" }, amount: "1 200–1 800 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "600–900 €" },
            { label: { fr: "Location voiture + vols intérieurs", en: "Car rental + domestic flights" }, amount: "500–800 €" },
            { label: { fr: "Safaris & activités", en: "Safaris & activities" }, amount: "700–1 100 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "10 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Johannesburg (Business)", en: "Return flight Paris–Johannesburg (Business)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Safari lodges + hôtels design (14 nuits)", en: "Safari lodges + design hotels (14 nights)" }, amount: "3 000–6 000 €" },
            { label: { fr: "Gastronomie & dégustations", en: "Fine dining & tastings" }, amount: "1 000–2 000 €" },
            { label: { fr: "Vols charter + transport privé", en: "Charter flights + private transport" }, amount: "1 000–2 000 €" },
            { label: { fr: "Expériences exclusives", en: "Exclusive experiences" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~11h direct (Air France, Corsair)", en: "~11h direct (Air France, Corsair)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "Visa-free for French citizens (90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Rand (1€ ≈ 20 ZAR) — très favorable", en: "Rand (1€ ≈ 20 ZAR) — very favourable" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais (lingua franca) + 10 langues officielles", en: "English (lingua franca) + 10 official languages" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type M (3 broches) – 230 V (adaptateur universel)", en: "Type M (3-pin) — 230V (universal adapter)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Très bonne couverture, SIM locale ~3€ (Vodacom, MTN)", en: "Very good coverage, local SIM ~3€ (Vodacom, MTN)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Potable dans les villes, eau en bouteille en zone rurale", en: "Drinkable in cities, bottled water in rural areas" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen pour le Kruger (nord) — consulter médecin", en: "Antimalarial for Kruger (north) — consult a doctor" } },
  ],
};
