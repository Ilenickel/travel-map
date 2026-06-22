export const DOMINICAN_REPUBLIC = {
  code: "DOM",
  numericId: 214,
  name: "République Dominicaine",
  emoji: "🇩🇴",
  capital: "Saint-Domingue",
  language: "Espagnol",
  currency: "Peso dominicain (DOP)",
  timezone: "UTC-4",
  filter: {
    budgetMin: 50, budgetMid: 130,
    tripMin: 1500, tripMid: 3800,
  },
  description:
    "La République Dominicaine offre la diversité des Grandes Antilles dans un seul pays : Punta Cana et ses 23 km de plage de cocotiers, Samaná et ses baleines à bosse (janvier–mars), la Zona Colonial de Saint-Domingue classée UNESCO — première ville européenne des Amériques — et Las Terrenas, la Côte d'Azur des Caraïbes.",

  bestPeriods: [
    {
      months: "Décembre – Avril",
      label: "Haute saison",
      color: "#22c55e",
      description:
        "Meilleure période : plages parfaites, mer calme, pas de cyclones, baleines à Samaná (jan–mar). Températures idéales 26–28°C.",
      icon: "🐋",
    },
    {
      months: "Juin – Août",
      label: "Été chaud",
      color: "#ef4444",
      description:
        "Chaleur (30–33°C), humidité élevée et saison des cyclones. Réservé aux budgets serrés et amateurs de soleil intense.",
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "santo_domingo",
      name: "Saint-Domingue",
      region: "Sud",
      data: [
        { month: "Jan", temp: 25, rain: 60,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 140, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 70,  icon: "⛅" },
      ],
    },
    {
      id: "punta_cana",
      name: "Punta Cana",
      region: "Est",
      data: [
        { month: "Jan", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 45,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Jul", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Aoû", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 70,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Punta Cana & plages Est",
      region: "Est",
      description:
        "Punta Cana est le symbole caribéen du all-inclusive : 23 km de plage de cocotiers au sable blanc, eau turquoise à 28°C toute l'année et une offre hôtelière parmi les plus grandes au monde. L'Isla Saona voisine est une excursion classique incontournable.",
      wikipedia: "Punta_Cana",
      tags: ["Plage", "All-inclusive", "Cocotiers", "Mer"],
      mustSee: [
        { name: "Plage Bávaro (23 km) — cocotiers & sable blanc", wikipedia: "File:Bavaro - 23 octobre 2011.JPG" },
        { name: "Isla Saona — plage déserte en catamaran", wikipedia: "Saona_Island" },
        { name: "Isla Catalina — snorkel & barracudas", wikipedia: "File:Isla Catalina, Caribbean.jpg" },
        { name: "Hoyo Azul — lagon bleu dans la jungle", wikipedia: "Punta_Cana" },
      ],
    },
    {
      id: 2,
      name: "Saint-Domingue — Zona Colonial",
      region: "Sud",
      description:
        "La Zona Colonial de Saint-Domingue, classée UNESCO, est la première ville coloniale européenne fondée dans les Amériques (1498). La Cathédrale Primatiale (la plus ancienne des Amériques), le Palais de Diego Colomb et la Calle el Conde composent un musée vivant de l'histoire hispanique.",
      wikipedia: "Santo_Domingo",
      tags: ["UNESCO", "Histoire", "Colonial", "Architecture"],
      mustSee: [
        { name: "Zona Colonial — Calle el Conde (piétonne)", wikipedia: "File:Aerial view Ciudad Colonial Santo Domingo 09 2019 0067.jpg" },
        { name: "Alcázar de Colón (palais de Diego Colomb)", wikipedia: "Alcázar_de_Colón" },
        { name: "Cathédrale primatiale (la plus ancienne des Amériques)", wikipedia: "File:Santo Domingo de la Calzada, catedral-PM 32754.jpg" },
        { name: "Fortaleza Ozama — fort colonial face à la mer", wikipedia: "File:Santo Domingo - Fortaleza Ozama 0960.jpg" },
      ],
    },
    {
      id: 3,
      name: "Samaná",
      region: "Nord-Est",
      description:
        "La Péninsule de Samaná est l'une des plus belles destinations de la Caraïbe : les baleines à bosse (janvier–mars) viennent s'y reproduire en grand nombre, la cascade El Limón se visite à cheval dans la jungle tropicale, et Cayo Levantado (l'île aux bacardis) est un paradis blanc.",
      wikipedia: "File:Samaná Pueblo Principe 2.jpg",
      tags: ["Baleines", "Nature", "Cascade", "Île"],
      mustSee: [
        { name: "Baleines à bosse (jan–mars) — observation en bateau", wikipedia: "Humpback_whale" },
        { name: "Cascada El Limón — à cheval dans la jungle", wikipedia: "File:El Limon.JPG" },
        { name: "Cayo Levantado — plage déserte intime", wikipedia: "Cayo_Levantado" },
        { name: "Los Haitises — mangroves et grottes taïnos", wikipedia: "Los_Haitises_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Las Terrenas",
      region: "Nord-Est (Samaná)",
      description:
        "Las Terrenas est surnommée la « Saint-Tropez des Caraïbes » : une communauté franco-italo-dominicaine cosmopolite, des plages sauvages (Playa Bonita), une gastronomie étonnante et une atmosphère décontractée sans les excès du all-inclusive. Idéal pour les voyageurs indépendants.",
      wikipedia: "File:Las-Terrenas.jpg",
      tags: ["Plage", "Gastronomie", "Indépendant", "Cosmopolite"],
      mustSee: [
        { name: "Playa Bonita — la plus belle plage de Las Terrenas", wikipedia: "File:Las Terrenas beach 7.JPG" },
        { name: "Plage aux Champignons — formations coralliennes", wikipedia: "File:Photo LFILT.jpg" },
        { name: "Gastronomie franco-caribéenne — rue principale", wikipedia: "File:Las-Terrenas.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La République Dominicaine est accessible — le all-inclusive peut paraître cher mais inclut tout. En dehors des resorts, les prix sont très raisonnables. Saint-Domingue et Las Terrenas permettent une vie locale authentique à petit prix.",
    currency: "DOP",
    exchangeRate: "1€ ≈ 65 DOP",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse Las Terrenas", price: "30–60 €", detail: "Chambre avec clim" },
          { label: "Hôtel 3★ (hors resort)", price: "50–90 €", detail: "Bon confort, petit-déjeuner" },
          { label: "Resort all-inclusive Punta Cana", price: "120–300 €", detail: "Tout inclus par personne" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Sancocho, tostones (cuisine locale)", price: "3–6 €", detail: "Marché ou comedor local" },
          { label: "Fruits de mer Las Terrenas", price: "15–30 €", detail: "Langoustes, daurades, crevettes" },
          { label: "Restaurant gastronomique Saint-Domingue", price: "20–40 €", detail: "Cuisine créative" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Guagua (bus collectif)", price: "2–5 €", detail: "Trajet interurbain" },
          { label: "Transfer privé aéroport–Samaná", price: "40–70 €", detail: "3h depuis Punta Cana" },
          { label: "Vol intérieur (STI–SDQ)", price: "50–100 €", detail: "Quand disponible" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Excursion baleines Samaná", price: "50–80 €", detail: "Janvier–mars, bateau 3h" },
          { label: "Isla Saona (catamaran, journée)", price: "60–90 €", detail: "Transport + repas inclus" },
          { label: "Randonnée El Limón à cheval", price: "30–50 €", detail: "3h, guide inclus" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Guesthouse + cuisine locale + guagua", color: "#22c55e" },
      { type: "Confort", daily: "130–200 €/j", desc: "Hôtel 3★ + restos + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Resort all-inclusive 5★ + circuit privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Saint-Domingue (2j) → Las Terrenas & Samaná (4j) → Punta Cana (6j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–République Dominicaine", amount: "350–600 €" },
            { label: "Hébergement (12 nuits)", amount: "450–750 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Transports", amount: "200–300 €" },
            { label: "Activités & imprévus", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–RD", amount: "450–750 €" },
            { label: "Hébergement (12 nuits)", amount: "1 200–2 000 €" },
            { label: "Nourriture & cocktails", amount: "600–900 €" },
            { label: "Excursions & baleines", amount: "500–800 €" },
            { label: "Transports & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–RD (Business)", amount: "2 000–3 500 €" },
            { label: "Resort all-inclusive 5★ (12 nuits)", amount: "3 000–5 000 €" },
            { label: "Excursions privées & spa", amount: "800–1 500 €" },
            { label: "Gastronomie gastronomique", amount: "500–800 €" },
            { label: "Extras", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~9h direct (Air France, Corsair, Air Caraïbes, Level)" },
    { icon: "🪪", label: "Visa",              value: "Carte touristique (~10$) incluse dans la plupart des vols charters" },
    { icon: "💰", label: "Monnaie",           value: "Peso dominicain (1€ ≈ 65 DOP) — USD acceptés partout" },
    { icon: "🗣️", label: "Langue",            value: "Espagnol (officiel) — français compris à Las Terrenas" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B – 110 V (comme USA)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture nationale (Claro, Altice)" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille obligatoire" },
    { icon: "💊", label: "Santé",             value: "Pas d'antipaludéen requis dans les zones touristiques standards" },
  ],
};
