export const CANADA = {
  code: "CAN",
  numericId: 124,
  name: "Canada",
  emoji: "🇨🇦",
  capital: "Ottawa",
  language: "Anglais, Français",
  currency: "Dollar canadien (CAD)",
  timezone: "UTC−8 (Pac.) à UTC−3,5 (Nfld.)",
  filter: {
    budgetMin: 80, budgetMid: 160,
    tripMin: 2500, tripMid: 5000,
  },
  description:
    "Le Canada, deuxième plus grand pays au monde, offre une nature spectaculaire à chaque province : Rocheuses enneigées d'Alberta, côtes sauvages de Colombie-Britannique, villes cosmopolites de Toronto et Montréal, et la francophonie vivante du Québec. Un pays aux espaces infinis et à l'hospitalité légendaire.",

  bestPeriods: [
    {
      months: "Juin – Août",
      label: "Été canadien",
      color: "#22c55e",
      description:
        "Journées longues et chaudes, festivals en plein air, randonnées dans les parcs nationaux et baignades dans les lacs. Pic touristique mais expérience idéale.",
      icon: "☀️",
    },
    {
      months: "Septembre – Octobre",
      label: "Automne & Feuillages",
      color: "#fb923c",
      description:
        "Les érables du Québec et de l'Ontario explosent en rouge et or. Foules réduites, températures agréables, cidre et pommes en saison.",
      icon: "🍁",
    },
    {
      months: "Décembre – Mars",
      label: "Hiver & Ski",
      color: "#3b82f6",
      description:
        "Whistler (BC), Mont-Tremblant (QC), Lake Louise (AB) — parmi les meilleurs domaines skiables au monde. Carnaval de Québec en février.",
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "vancouver",
      name: "Vancouver",
      region: "Colombie-Britannique",
      data: [
        { month: "Jan", temp: 5,  rain: 168, icon: "❄️" },
        { month: "Fév", temp: 6,  rain: 114, icon: "❄️" },
        { month: "Mar", temp: 8,  rain: 114, icon: "⛅" },
        { month: "Avr", temp: 11, rain: 84,  icon: "⛅" },
        { month: "Mai", temp: 14, rain: 64,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 57,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 35,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 38,  icon: "☀️" },
        { month: "Sep", temp: 17, rain: 63,  icon: "☀️" },
        { month: "Oct", temp: 12, rain: 131, icon: "⛅" },
        { month: "Nov", temp: 7,  rain: 185, icon: "❄️" },
        { month: "Déc", temp: 5,  rain: 196, icon: "❄️" },
      ],
    },
    {
      id: "montreal",
      name: "Montréal",
      region: "Québec",
      data: [
        { month: "Jan", temp: -10, rain: 55, icon: "❄️" },
        { month: "Fév", temp: -9,  rain: 52, icon: "❄️" },
        { month: "Mar", temp: -4,  rain: 66, icon: "❄️" },
        { month: "Avr", temp: 5,   rain: 70, icon: "❄️" },
        { month: "Mai", temp: 12,  rain: 73, icon: "⛅" },
        { month: "Jun", temp: 18,  rain: 86, icon: "☀️" },
        { month: "Jul", temp: 21,  rain: 88, icon: "☀️" },
        { month: "Aoû", temp: 20,  rain: 84, icon: "☀️" },
        { month: "Sep", temp: 15,  rain: 76, icon: "⛅" },
        { month: "Oct", temp: 8,   rain: 73, icon: "⛅" },
        { month: "Nov", temp: 2,   rain: 85, icon: "❄️" },
        { month: "Déc", temp: -7,  rain: 70, icon: "❄️" },
      ],
    },
    {
      id: "banff",
      name: "Banff",
      region: "Alberta",
      data: [
        { month: "Jan", temp: -9,  rain: 30, icon: "❄️" },
        { month: "Fév", temp: -7,  rain: 25, icon: "❄️" },
        { month: "Mar", temp: -3,  rain: 25, icon: "❄️" },
        { month: "Avr", temp: 4,   rain: 35, icon: "❄️" },
        { month: "Mai", temp: 9,   rain: 50, icon: "⛅" },
        { month: "Jun", temp: 13,  rain: 65, icon: "⛅" },
        { month: "Jul", temp: 17,  rain: 55, icon: "☀️" },
        { month: "Aoû", temp: 17,  rain: 50, icon: "☀️" },
        { month: "Sep", temp: 11,  rain: 40, icon: "⛅" },
        { month: "Oct", temp: 4,   rain: 30, icon: "❄️" },
        { month: "Nov", temp: -4,  rain: 30, icon: "❄️" },
        { month: "Déc", temp: -8,  rain: 30, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Vancouver & Colombie-Britannique",
      region: "Colombie-Britannique",
      description:
        "Vancouver est la ville la plus belle du Canada : montagnes enneigées se reflétant dans le Pacifique, Stanley Park immense, Granville Island et une scène asiatique culinaire incomparable. À 2h : Whistler, station de ski de classe mondiale.",
      wikipedia: "Vancouver",
      tags: ["Ville", "Nature", "Ski", "Gastronomie"],
      mustSee: [
        { name: "Stanley Park — forêt en ville", wikipedia: "File:Vancouver (BC, Canada), Stanley Park -- 2022 -- 1949.jpg" },
        { name: "Granville Island — marché couvert", wikipedia: "Granville_Island" },
        { name: "Whistler — ski de classe mondiale", wikipedia: "File:Whistler, British Columbia, Canada (20644665040).jpg" },
        { name: "Capilano — pont de singe suspendu", wikipedia: "File:Capilano Suspension Bridge, Vancouver, Canada (July 2016) 1.jpg" },
      ],
    },
    {
      id: 2,
      name: "Banff & Rocheuses canadiennes",
      region: "Alberta",
      description:
        "Le parc national de Banff est l'un des plus beaux au monde : lacs aux eaux turquoise (Lake Louise, Moraine Lake), glaciers, wapitis et ours bruns dans des paysages de carte postale.",
      wikipedia: "Banff_National_Park",
      tags: ["Nature", "Randonnée", "Ski", "Faune"],
      mustSee: [
        { name: "Lake Louise — lac turquoise", wikipedia: "Lake_Louise,_Alberta" },
        { name: "Lac Moraine — vallée des 10 Sommets", wikipedia: "Moraine_Lake" },
        { name: "Icefields Parkway", wikipedia: "File:Herbert Lake beim Icefields Parkway.jpg" },
        { name: "Glacier Athabasca", wikipedia: "Athabasca_Glacier" },
      ],
    },
    {
      id: 3,
      name: "Québec & Montréal",
      region: "Québec",
      description:
        "La vieille ville de Québec, seule ville fortifiée au nord du Mexique (UNESCO), et Montréal la métropole francophone — deux villes qui conjuguent histoire européenne, gastronomie et art de vivre.",
      wikipedia: "Quebec_City",
      tags: ["Histoire", "UNESCO", "Culture", "Gastronomie", "Ville", "Architecture"],
      mustSee: [
        { name: "Vieux-Québec — remparts (UNESCO)", wikipedia: "Old_Quebec" },
        { name: "Château Frontenac", wikipedia: "File:Château Frontenac after a freezing rain day in Quebec city.jpg" },
        { name: "Montréal — Vieux-Port & Mont-Royal", wikipedia: "Montreal" },
        { name: "Carnaval de Québec (janvier)", wikipedia: "File:Carnaval de Québec - sculptures sur neige - 2006-02.JPG" },
      ],
    },
    {
      id: 4,
      name: "Toronto & Niagara Falls",
      region: "Ontario",
      description:
        "Toronto, ville la plus cosmopolite au monde (180 nationalités), avec la CN Tower, le marché de Kensington et les chutes du Niagara à 1h30 — l'une des merveilles naturelles du continent.",
      wikipedia: "Toronto",
      tags: ["Ville", "Culture", "Nature", "Gastronomie", "Architecture"],
      mustSee: [
        { name: "Chutes du Niagara", wikipedia: "Niagara_Falls" },
        { name: "CN Tower — 553 m", wikipedia: "File:Toronto - ON - CN Tower bei Nacht2.jpg" },
        { name: "Kensington Market", wikipedia: "Kensington_Market" },
        { name: "Parc national des Îles-de-la-Baie-Georgienne", wikipedia: "Georgian_Bay_Islands_National_Park" },
      ],
    },
    {
      id: 5,
      name: "Yukon & Grand Nord",
      region: "Yukon / Territoires du Nord-Ouest",
      description:
        "L'ultime frontière : aurores boréales sur Whitehorse, parcs nationaux où vivent ours polaires et caribous, la piste Dempster vers le cercle arctique. Pour les aventuriers.",
      wikipedia: "File:Cañón Miles, Yukón, Canadá, 2017-08-26, DD 130-132 PAN.jpg",
      tags: ["Aventure", "Aurores boréales", "Nature", "Faune", "Randonnée"],
      mustSee: [
        { name: "Aurores boréales à Whitehorse", wikipedia: "File:Frederic Edwin Church - Aurora Borealis - Google Art Project.jpg" },
        { name: "Parc national Kluane (UNESCO)", wikipedia: "Kluane_National_Park_and_Reserve" },
        { name: "Piste Dempster — cercle arctique", wikipedia: "File:Dempsterhighway.jpg" },
        { name: "Ours polaires de Churchill (Manitoba)", wikipedia: "Churchill,_Manitoba" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Canada est onéreux, surtout dans les grandes villes (Toronto, Vancouver). Cependant, la qualité de vie et les paysages exceptionnels justifient l'investissement.",
    currency: "CAD",
    exchangeRate: "1€ ≈ 1,50 CAD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hostel / camping", price: "25–50 €", detail: "Dortoir ou tente en parc national" },
          { label: "Hôtel 3★", price: "80–140 €", detail: "Standard en ville" },
          { label: "Chalet ou lodge", price: "150–400 €", detail: "Banff, Whistler, Québec" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Food truck / fast food", price: "8–15 €", detail: "Poutine, burger, shawarma" },
          { label: "Restaurant mid-range", price: "20–40 €", detail: "Menu complet en ville" },
          { label: "Restaurant gastronomique", price: "60–120 €", detail: "Grandes villes (Vancouver, Montréal)" },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: "Transport",
        items: [
          { label: "Location voiture / jour", price: "40–80 €", detail: "Indispensable hors ville" },
          { label: "Vol intérieur", price: "100–300 €", detail: "Toronto–Vancouver ~5h" },
          { label: "Train VIA Rail", price: "80–250 €", detail: "Montréal–Québec, Toronto–Niagara" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée parc national (par jour)", price: "8–12 €", detail: "Banff, Jasper, etc." },
          { label: "Excursion en bateau (Niagara)", price: "15–25 €", detail: "Maid of the Mist" },
          { label: "Forfait ski Whistler (journée)", price: "100–180 €", detail: "Parmi les meilleurs au monde" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "80–120 €/j", desc: "Hostel + cuisine maison + transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "160–250 €/j", desc: "Hôtel 3★ + restos + location voiture", color: "#3b82f6" },
      { type: "Luxe", daily: "400 €+/j", desc: "Lodges en parc + gastronomie + aventures guidées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "3 semaines",
      route: "Toronto (3j) → Niagara (1j) → Montréal (3j) → Québec (2j) → Vancouver (3j) → Banff & Rocheuses (7j) → Vancouver (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Canada", amount: "500–800 €" },
            { label: "Hébergement (21 nuits)", amount: "600–900 €" },
            { label: "Nourriture", amount: "600–900 €" },
            { label: "Location voiture & transports", amount: "400–600 €" },
            { label: "Activités & parcs", amount: "300–500 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "5 000 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Canada", amount: "600–1 000 €" },
            { label: "Hébergement (21 nuits)", amount: "1 500–2 500 €" },
            { label: "Nourriture", amount: "1 200–1 800 €" },
            { label: "Location voiture & vols intérieurs", amount: "800–1 200 €" },
            { label: "Activités premium", amount: "600–1 000 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Canada (Business)", amount: "3 000–5 000 €" },
            { label: "Lodges & hôtels 5★ (21 nuits)", amount: "4 000–8 000 €" },
            { label: "Gastronomie & expériences", amount: "2 000–4 000 €" },
            { label: "Transport privé & hélicoptère", amount: "1 000–3 000 €" },
            { label: "Activités exclusives", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~8h (Air Transat, Air France, Air Canada)" },
    { icon: "🪪", label: "Visa",              value: "eTA (autorisation électronique de voyage) — 7 CAD (~5 €), valable 5 ans. Non requis par voie terrestre ou maritime. Traitement quasi immédiat (parfois quelques jours)." },
    { icon: "💰", label: "Monnaie",           value: "Dollar canadien (1€ ≈ 1,50 CAD)" },
    { icon: "🗣️", label: "Langue",            value: "Anglais (Québec : Français)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B – 120 V (adaptateur nécessaire)" },
    { icon: "📱", label: "Réseau",            value: "Excellente couverture, e-SIM disponible" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable partout" },
    { icon: "💊", label: "Santé",             value: "Soins excellents mais très chers — assurance indispensable" },
  ],
};
