export const BELIZE = {
  code: "BLZ",
  numericId: 84,
  name: "Belize",
  emoji: "🇧🇿",
  capital: "Belmopan",
  language: "Anglais, Espagnol, Kriol",
  currency: "Dollar bélizien (BZD)",
  timezone: "UTC-6",
  filter: {
    budgetMin: 60, budgetMid: 120,
    tripMin: 1800, tripMid: 3800,
  },
  description:
    "Le Belize est la perle de la Mésoamérique : le Great Blue Hole, trou bleu légendaire classé UNESCO, et la deuxième barrière de corail au monde. Jungle maya, jaguars du parc Cockscomb, ruines de Caracol et atolls caraïbes paradisiaques composent un pays-nature à taille humaine.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période : mer calme, visibilité parfaite pour la plongée et le snorkel. Bonne saison pour les ruines mayas et la jungle.",
      icon: "🐠",
    },
    {
      months: "Juillet – Août",
      label: "Veranillo",
      color: "#fb923c",
      description:
        "Pause sèche relative en pleine saison des pluies. Moins de monde, tarifs réduits, jungle verte.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "belize_city",
      name: "Belize City",
      region: "Côte",
      data: [
        { month: "Jan", temp: 24, rain: 90,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 35,  icon: "☀️" },
        { month: "Avr", temp: 28, rain: 45,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 230, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 140, icon: "☀️" },
        { month: "Déc", temp: 24, rain: 100, icon: "☀️" },
      ],
    },
    {
      id: "cayo",
      name: "Cayo",
      region: "Ouest",
      data: [
        { month: "Jan", temp: 23, rain: 80,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Avr", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 25, rain: 220, icon: "⛅" },
        { month: "Nov", temp: 24, rain: 110, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 80,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Great Blue Hole & Atolls",
      region: "Mer des Caraïbes",
      description:
        "Le Great Blue Hole, cratère sous-marin de 300 m de diamètre et 125 m de profondeur, est l'une des merveilles naturelles mondiales inscrites à l'UNESCO. Entouré du Lighthouse Reef, il offre l'une des plongées les plus mythiques de la planète, avec stalactites géantes et requins.",
      wikipedia: "Great_Blue_Hole",
      tags: ["UNESCO", "Plongée", "Snorkel", "Nature"],
      mustSee: [
        { name: "Plongée dans le Great Blue Hole (−40 m)", wikipedia: "Lighthouse_Reef" },
        { name: "Half Moon Caye — fous à pieds rouges", wikipedia: "Half_Moon_Caye" },
        { name: "Turneffe Atoll — snorkel récifs", wikipedia: "Turneffe_Atoll" },
        { name: "Requins de récif et tortues vertes", wikipedia: "Nurse_shark" },
      ],
    },
    {
      id: 2,
      name: "Ambergris Caye",
      region: "Caraïbes Nord",
      description:
        "Ambergris Caye est la plus grande île du Belize et la plus populaire : San Pedro, village de plage animé, la réserve marine Hol Chan et Shark Ray Alley où l'on nage avec raies pastenagues et requins citrons en toute sécurité.",
      wikipedia: "Ambergris_Caye",
      tags: ["Île", "Plage", "Snorkel", "Vie nocturne"],
      mustSee: [
        { name: "Hol Chan Marine Reserve — snorkel coraux", wikipedia: "Hol_Chan_Marine_Reserve" },
        { name: "Shark Ray Alley — nage avec raies & requins", wikipedia: "File:Nurse Shark (Ginglymostoma cirratum) (36552532791).jpg" },
        { name: "Caye Caulker — plage No Shoes, No Shirts", wikipedia: "Caye_Caulker" },
        { name: "San Pedro — vie nocturne & fruits de mer", wikipedia: "File:Barrier Reef Drive, San Pedro Town, Belize.jpg" },
      ],
    },
    {
      id: 3,
      name: "Caracol & Ruines Mayas",
      region: "Ouest (Cayo)",
      description:
        "Caracol est la plus grande cité maya du Belize, cachée dans la forêt de la réserve Chiquibul. Sa pyramide Caana (Sky Palace, 43 m) surpasse Belmopan en hauteur. Jaguars, tapirs et singes hurleurs côtoient les archéologues.",
      wikipedia: "File:Caana, top view, Caracol, Chiquibul Forest Reserve, Belize.jpg",
      tags: ["Mayas", "Jungle", "Archéologie", "Faune"],
      mustSee: [
        { name: "Pyramide Caana (Sky Palace) — panorama jungle", wikipedia: "File:Caracol-Temple.jpg" },
        { name: "Stèles et autels mayas sculptés", wikipedia: "File:Stone Stela, Caana, Caracol, Belize.jpg" },
        { name: "Réserve Chiquibul — jaguars & tapirs", wikipedia: "File:Coringa Reserve Forest from the Watch Tower (02).jpg" },
        { name: "Xunantunich — site maya accessible", wikipedia: "Xunantunich" },
      ],
    },
    {
      id: 4,
      name: "Cayo & Grottes d'Actun Tunichil Muknal",
      region: "Ouest",
      description:
        "Le Cayo District est le cœur aventure du Belize : les grottes ATM (Actun Tunichil Muknal), sanctuaire maya rempli de squelettes et céramiques sacrées, les chutes de San Ignacio et la forêt primaire de la Mountain Pine Ridge.",
      wikipedia: "File:Belize mountians, Cayo district Laslovarga002.JPG",
      tags: ["Grottes", "Aventure", "Nature", "Mayas"],
      mustSee: [
        { name: "Grottes ATM — squelettes mayas in situ", wikipedia: "Actun_Tunichil_Muknal" },
        { name: "Mountain Pine Ridge — chutes & piscines", wikipedia: "Mountain_Pine_Ridge_Forest_Reserve" },
        { name: "Cockscomb Basin — sanctuaire jaguar", wikipedia: "Cockscomb_Basin_Wildlife_Sanctuary" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Belize est relativement cher pour l'Amérique centrale car beaucoup de produits sont importés. Le dollar bélizien est arrimé au dollar américain (2 BZD = 1 USD). Les îles coûtent plus cher que le continent.",
    currency: "BZD",
    exchangeRate: "1€ ≈ 2,2 USD (2 BZD = 1 USD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hostel continental (Cayo)", price: "20–35 €", detail: "Dortoir ou chambre simple" },
          { label: "Guesthouse Ambergris Caye", price: "60–120 €", detail: "Chambre avec ventilateur" },
          { label: "Resort balnéaire", price: "200–500 €", detail: "Front de mer, tout-inclus" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Rice & beans + poulet (local)", price: "4–7 €", detail: "Plat national, partout" },
          { label: "Fruits de mer (Ambergris Caye)", price: "15–25 €", detail: "Langouste, crevettes" },
          { label: "Restaurant avec vue mer", price: "25–45 €", detail: "Poissons frais & cocktails" },
        ],
      },
      {
        id: "transport",
        icon: "🚤",
        label: "Transport",
        items: [
          { label: "Ferry Belize City–Ambergris Caye", price: "15–20 €", detail: "1h15 en bateau express" },
          { label: "Bus continent (Cayo–Belize City)", price: "5–8 €", detail: "Confortable, régulier" },
          { label: "Excursion Great Blue Hole", price: "250–350 €", detail: "Journée complète en avion + bateau" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Plongée (2 plongées)", price: "60–90 €", detail: "Guide + équipement" },
          { label: "Grottes ATM (guide obligatoire)", price: "60–80 €", detail: "Demi-journée, inoubliable" },
          { label: "Snorkel Hol Chan (demi-journée)", price: "25–40 €", detail: "Bateau + guide + masque" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–90 €/j", desc: "Hostel continent + cuisine locale + bus", color: "#22c55e" },
      { type: "Confort", daily: "120–200 €/j", desc: "Guesthouse île + restos + plongée", color: "#3b82f6" },
      { type: "Luxe", daily: "350 €+/j", desc: "Resort front de mer + Blue Hole + guide privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Belize City (1j) → Ambergris Caye / Blue Hole (4j) → Cayo & Caracol (3j) → Cockscomb & côte (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Belize City", amount: "600–900 €" },
            { label: "Hébergement (10 nuits)", amount: "400–600 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Ferries & transports", amount: "200–300 €" },
            { label: "Activités (snorkel, grottes)", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Belize City", amount: "700–1 100 €" },
            { label: "Hébergement (10 nuits)", amount: "1 000–1 600 €" },
            { label: "Nourriture & cocktails", amount: "500–750 €" },
            { label: "Plongées & excursions", amount: "700–1 000 €" },
            { label: "Transports & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "9 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris (Business)", amount: "2 500–4 000 €" },
            { label: "Resorts front de mer (10 nuits)", amount: "3 000–5 000 €" },
            { label: "Plongée Blue Hole + excursions privées", amount: "800–1 500 €" },
            { label: "Gastronomie & spa", amount: "600–1 000 €" },
            { label: "Transfers privés & extras", amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~12h avec escale (via Miami ou Houston)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 30 jours (Français), extensible sur place" },
    { icon: "💰", label: "Monnaie",           value: "Dollar bélizien (2 BZD = 1 USD) — USD acceptés partout" },
    { icon: "🗣️", label: "Langue",            value: "Anglais (officiel), Espagnol, Kriol bélizien" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B/G – 110 V" },
    { icon: "📱", label: "Réseau",            value: "Couverture correcte sur les îles, limitée en jungle" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille ou filtrée" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen recommandé en zone continentale et jungle" },
  ],
};
