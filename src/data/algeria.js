export const ALGERIA = {
  code: "DZA",
  numericId: 12,
  name: "Algérie",
  emoji: "🇩🇿",
  capital: "Alger",
  language: "Arabe, Tamazight (berbère), Français",
  currency: "Dinar algérien (DZD)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 40, budgetMid: 90,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "L'Algérie est le plus grand pays d'Afrique et l'un des moins visités : la Casbah d'Alger (UNESCO) avec ses maisons ottomanes, Ghardaïa et la vallée du M'Zab (UNESCO), les dunes dorées du Grand Erg Occidental dans le Sahara, les ruines romaines de Timgad et Djémila (UNESCO), et les gorges des Aures. Un pays aux dimensions continentales et à l'hospitalité légendaire.",

  bestPeriods: [
    {
      months: "Mars – Mai",
      label: "Printemps méditerranéen",
      color: "#22c55e",
      description:
        "Idéal pour le nord : Alger et la côte sont agréables (18–25°C). Sahara encore supportable (25–35°C). Meilleure période globale.",
      icon: "🌸",
    },
    {
      months: "Octobre – Novembre",
      label: "Automne doux",
      color: "#22c55e",
      description:
        "Excellent pour le Sahara (20–28°C) et les sites romains. Nord agréable. Dunes sans chaleur extrême.",
      icon: "☀️",
    },
    {
      months: "Juin – Août",
      label: "Été saharien",
      color: "#ef4444",
      description:
        "Chaleur extrême dans le Sahara (45–50°C) et le sud. Côte méditerranéenne agréable mais bondée. Sahara déconseillé.",
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "algiers",
      name: "Alger",
      region: "Méditerranée (nord)",
      data: [
        { month: "Jan", temp: 12, rain: 90,  icon: "⛅" },
        { month: "Fév", temp: 13, rain: 70,  icon: "⛅" },
        { month: "Mar", temp: 15, rain: 60,  icon: "⛅" },
        { month: "Avr", temp: 17, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 30,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Sep", temp: 25, rain: 25,  icon: "☀️" },
        { month: "Oct", temp: 21, rain: 55,  icon: "⛅" },
        { month: "Nov", temp: 16, rain: 80,  icon: "⛅" },
        { month: "Déc", temp: 13, rain: 100, icon: "⛅" },
      ],
    },
    {
      id: "tamanrasset",
      name: "Tamanrasset",
      region: "Hoggar / Sahara (extrême sud)",
      data: [
        { month: "Jan", temp: 14, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 17, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 21, rain: 0,  icon: "☀️" },
        { month: "Avr", temp: 26, rain: 5,  icon: "☀️" },
        { month: "Mai", temp: 30, rain: 5,  icon: "⛅" },
        { month: "Jun", temp: 34, rain: 5,  icon: "🌡️" },
        { month: "Jul", temp: 35, rain: 10, icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 15, icon: "🌡️" },
        { month: "Sep", temp: 30, rain: 10, icon: "⛅" },
        { month: "Oct", temp: 25, rain: 5,  icon: "☀️" },
        { month: "Nov", temp: 19, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 15, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "La Casbah d'Alger",
      region: "Alger",
      description:
        "La Casbah d'Alger (UNESCO) est un labyrinthe de ruelles ottomanes en pente douce sur la colline surplombant la mer : palais des Deys, mosquées du XVIe siècle, maisons à patios intérieurs avec fontaines, et les marches de rue emblématiques des films de la bataille d'Alger. Un monde à part, vivant et authentique.",
      wikipedia: "Casbah_of_Algiers",
      tags: ["UNESCO", "Casbah", "Ottoman", "Méditerranée"],
      mustSee: [
        { name: "Casbah d'Alger (UNESCO) — ruelles ottomanes du XVIe s.", wikipedia: "Casbah_of_Algiers" },
        { name: "Palais des Raïs (Bastion 23) — musée des arts et traditions", wikipedia: "File:Palais des Rais (Es'hine) - Alger.JPG" },
        { name: "Mosquée Ketchaoua (1612) — ottomane puis cathédrale", wikipedia: "Ketchaoua_Mosque" },
        { name: "Front de mer d'Alger — la Méditerranée au pied de la Casbah", wikipedia: "File:Alger Kasbah02.jpg" },
      ],
    },
    {
      id: 2,
      name: "Tassili n'Ajjer — Art rupestre saharien",
      region: "Illizi / Sahara",
      description:
        "Le Tassili n'Ajjer (UNESCO) est le plus grand site d'art rupestre préhistorique du monde : 15 000 gravures et peintures réparties sur un plateau de grès éreinté par l'érosion, représentant les animaux et les hommes du Sahara vert d'il y a 10 000 ans. Une forêt de rochers en formes fantastiques dans un désert absolument pur.",
      wikipedia: "File:Tassili Desert Algeria.jpg",
      tags: ["UNESCO", "Sahara", "Art rupestre", "Préhistoire"],
      mustSee: [
        { name: "Peintures rupestres de Sefar — le 'musée' préhistorique", wikipedia: "File:Eheren1.jpg" },
        { name: "Forêt de rochers de Tamrit — cyprès du Sahara millénaires", wikipedia: "File:Tassili n'Ajjer-Tamghit 02.jpg" },
        { name: "Bivouac sous les étoiles du désert", wikipedia: "File:Tassili Desert Algeria.jpg" },
        { name: "Gravures d'Iheren — girafes et éléphants dans le Sahara", wikipedia: "File:The Tanzoumaitak cave painting in Tassili n'ajjer.jpg" },
      ],
    },
    {
      id: 3,
      name: "Djémila & Timgad — Cités romaines",
      region: "Sétif / Batna",
      description:
        "Djémila (UNESCO) et Timgad (UNESCO) sont deux cités romaines exceptionnellement bien conservées dans les montagnes algériennes : Timgad, construite en 100 apr. J.-C. par Trajan pour ses légions, étale sa grille parfaite dans la steppe ; Djémila, 'la belle' en arabe, est perchée sur un éperon rocheux avec forums, temples et arc de triomphe intacts.",
      wikipedia: "Timgad",
      tags: ["UNESCO", "Romain", "Antique", "Montagne"],
      mustSee: [
        { name: "Timgad (UNESCO) — cité romaine de Trajan aux plans parfaits", wikipedia: "File:Timgad Ruins Panorama.jpg" },
        { name: "Djémila (UNESCO) — forum et arc de triomphe sur un éperon", wikipedia: "Djémila" },
        { name: "Musée archéologique de Djémila — mosaïques romaines", wikipedia: "File:Algerie Djemila 05.jpg" },
        { name: "Paysage de montagne autour des cités", wikipedia: "Timgad" },
      ],
    },
    {
      id: 4,
      name: "Hoggar — Désert et Touaregs",
      region: "Tamanrasset",
      description:
        "Le Hoggar (Ahaggar) est le cœur montagneux et spirituel du Sahara algérien : des volcans et des pics de granite rouge formant un paysage minéral et désertique à 3 000m d'altitude, l'ermitage du père de Foucauld sur l'Assekrem (lever de soleil légendaire), et les campements Touaregs aux tentes bleues. Une des plus grandes solitudes au monde.",
      wikipedia: "File:Le Hoggar, Massif de l'Attekor.png",
      tags: ["Sahara", "Touaregs", "Montagne", "Désert"],
      mustSee: [
        { name: "Assekrem — lever de soleil sur le Hoggar (2 780m)", wikipedia: "Assekrem" },
        { name: "Ermitage du Père de Foucauld (1905)", wikipedia: "Charles_de_Foucauld" },
        { name: "Bivouac Touareg dans le désert de pierres (reg)", wikipedia: "File:Ahaggar Mountains 1981 33.jpg" },
        { name: "Tamanrasset — marché Touareg (bijoux argent, cuir)", wikipedia: "Tamanrasset" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Algérie est très abordable pour les touristes : les prix officiels sont fixés en dinars, peu chers au taux officiel. La principale difficulté est la nécessité d'une agence touristique agréée pour le Sahara. Les visas pour les Français sont parfois restrictifs — vérifier les conditions actuelles.",
    currency: "DZD",
    exchangeRate: "1€ ≈ 145–155 DZD (taux officiel)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hôtel économique / pension", price: "20–40 €", detail: "Simple, clim ou ventilateur" },
          { label: "Hôtel 3★ (Alger, Constantine)", price: "60–100 €", detail: "Clim, wifi, bon niveau" },
          { label: "Hôtel de luxe / El Aurassi Alger", price: "130–220 €", detail: "Standard international" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Chorba / couscous dans un restaurant local", price: "2–5 €", detail: "Cuisine algérienne authentique" },
          { label: "Restaurant mid-range Alger", price: "8–18 €", detail: "Fruits de mer, menu complet" },
          { label: "Restaurant gastronomique Alger", price: "25–50 €", detail: "Cuisine méditerranéenne" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro / tram Alger", price: "0,30–0,50 €", detail: "Réseau correct dans la capitale" },
          { label: "Bus ou train inter-villes", price: "3–10 €", detail: "Selon trajet" },
          { label: "Circuit Sahara avec agence (par jour)", price: "80–150 €/j", detail: "Obligatoire pour le Tassili et Hoggar" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite guidée Casbah d'Alger", price: "10–20 €", detail: "Guide francophone" },
          { label: "Visite Timgad ou Djémila (transport inclus)", price: "15–30 €", detail: "Depuis Batna ou Sétif" },
          { label: "Circuit Tassili n'Ajjer (7 jours, agence)", price: "800–1 500 €", detail: "Tout compris depuis Djanet" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–70 €/j", desc: "Hôtel économique + cuisine locale + transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "90–140 €/j", desc: "Hôtel 3★ + restaurants + excursions guidées", color: "#3b82f6" },
      { type: "Sahara", daily: "120–200 €/j", desc: "Circuit agence Tassili / Hoggar tout compris", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Alger (3j) → Timgad / Djémila (2j) → Ghardaïa / M'Zab (2j) → Djanet / Tassili (5j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Alger", amount: "200–400 €" },
            { label: "Hébergement (12 nuits)", amount: "350–600 €" },
            { label: "Transports (bus, train, vol intérieur)", amount: "200–400 €" },
            { label: "Nourriture", amount: "150–300 €" },
            { label: "Guides & excursions nord", amount: "150–300 €" },
          ],
        },
        {
          type: "Confort + Sahara",
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Alger", amount: "250–450 €" },
            { label: "Hébergement (7 nuits nord)", amount: "500–800 €" },
            { label: "Circuit Tassili (5j, agence)", amount: "800–1 500 €" },
            { label: "Vols intérieurs Alger–Djanet", amount: "200–400 €" },
            { label: "Nourriture & guides", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 direct (Air Algérie, Air France, Transavia, Vueling — nombreuses liaisons)" },
    { icon: "🪪", label: "Visa",              value: "Visa obligatoire pour les Français — ambassade d'Algérie à Paris. Délais variables, parfois refus. Vérifier les conditions actuelles avant de réserver." },
    { icon: "💰", label: "Monnaie",           value: "Dinar algérien (DZD). Euros à changer dans les banques. Carte bancaire peu acceptée en dehors des grands hôtels." },
    { icon: "🗣️", label: "Langue",            value: "Arabe (officiel) + Tamazight. Français très largement parlé et compris — communication facile." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V." },
    { icon: "💊", label: "Santé",             value: "Pas de vaccin obligatoire. Antipaludéen non nécessaire. Précautions alimentaires habituelles." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable dans la plupart des régions — eau en bouteille recommandée." },
    { icon: "📷", label: "Photographie",      value: "Éviter de photographier bâtiments officiels, militaires, police, frontières. Demander l'autorisation pour les personnes." },
  ],
};
