export const DJIBOUTI = {
  code: "DJI",
  numericId: 262,
  name: "Djibouti",
  emoji: "🇩🇯",
  capital: "Djibouti",
  language: "Français, Arabe, Afar, Somali",
  currency: "Franc djiboutien (DJF)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 55, budgetMid: 140,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "Djibouti est un petit pays de la Corne de l'Afrique aux paysages lunaires : le lac Assal (153m sous le niveau de la mer, point le plus bas d'Afrique et deuxième le plus salé au monde après la mer Morte), le lac Abbé et ses cheminées de vapeur, les requins baleines du golfe de Tadjourah (novembre à janvier), et la dive sur le légendaire site du Ghoubbet.",

  bestPeriods: [
    {
      months: "Octobre – Avril",
      label: "Saison fraîche",
      color: "#22c55e",
      description:
        "Meilleure période : températures supportables (25–32°C), mer calme. Requins baleines de novembre à janvier. Randonnées dans les monts du Day possibles.",
      icon: "☀️",
    },
    {
      months: "Juin – Septembre",
      label: "Khamsin — chaleur extrême",
      color: "#ef4444",
      description:
        "Températures extrêmes (38–45°C dans les terres), vent chaud et sable. Très difficile pour les activités extérieures. Déconseillé.",
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "djibouti_city",
      name: "Djibouti (ville)",
      region: "Côte du golfe de Tadjourah",
      data: [
        { month: "Jan", temp: 25, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 28, rain: 25,  icon: "⛅" },
        { month: "Avr", temp: 30, rain: 20,  icon: "⛅" },
        { month: "Mai", temp: 33, rain: 10,  icon: "🌡️" },
        { month: "Jun", temp: 38, rain: 5,   icon: "🌡️" },
        { month: "Jul", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 36, rain: 5,   icon: "🌡️" },
        { month: "Oct", temp: 30, rain: 15,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 25,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 20,  icon: "☀️" },
      ],
    },
    {
      id: "lac_assal",
      name: "Lac Assal",
      region: "Désert de l'Afar (intérieur)",
      data: [
        { month: "Jan", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Fév", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 32, rain: 5,   icon: "🌡️" },
        { month: "Avr", temp: 35, rain: 0,   icon: "🌡️" },
        { month: "Mai", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 42, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 44, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 44, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 35, rain: 0,   icon: "🌡️" },
        { month: "Nov", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 28, rain: 5,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Requins baleines du golfe de Tadjourah",
      region: "Golfe de Tadjourah (côte nord)",
      description:
        "De novembre à janvier, le golfe de Tadjourah accueille l'une des concentrations les plus denses de requins baleines au monde — jusqu'à 50 individus parfois visibles simultanément depuis le bateau. La nage avec le plus grand poisson du monde dans ces eaux claires et chaudes est l'une des expériences marines les plus intenses de la planète.",
      wikipedia: "Whale_shark",
      tags: ["Requins baleines", "Plongée", "Nage", "Unique"],
      mustSee: [
        { name: "Nage avec les requins baleines (nov–janv, Arta Beach)", wikipedia: "Whale_shark" },
        { name: "Plongée Ghoubbet — manta rays et topographie lunaire", wikipedia: "File:Okinawa Churaumi aquarium Manta hdsr Vlux5 01.jpg" },
        { name: "Snorkeling récifs des Sept-Frères (îles coralliennes)", wikipedia: "File:Beach on the Gulf of Tadjoura.jpg" },
        { name: "Croisière coucher de soleil dans le golfe de Tadjourah", wikipedia: "File:Gulf of Tadjoura1.jpg" },
      ],
    },
    {
      id: 2,
      name: "Lac Assal — Point le plus bas d'Afrique",
      region: "Région d'Arta",
      description:
        "Le lac Assal (153m sous le niveau de la mer) est le point le plus bas d'Afrique et l'un des endroits les plus arides de la planète. Sa teneur en sel (35%) est 10 fois celle de la mer — on y flotte sans effort. Les cristaux de sel blanc sur les rives bleues et les couleurs du paysage volcanique environnant créent un panorama extraterrestre.",
      wikipedia: "File:Lake Assal NASA (cropped).jpg",
      tags: ["Paysage lunaire", "Sel", "Point le plus bas", "Volcanique"],
      mustSee: [
        { name: "Bain flottant dans le lac Assal (eau ultra-salée)", wikipedia: "File:Lake Assal NASA (cropped).jpg" },
        { name: "Panorama sur les coulées de lave noire et le sel blanc", wikipedia: "File:Assal Lake, 2024.jpg" },
        { name: "Caravanes de sel des éleveurs Afar", wikipedia: "File:Assal Lake, 2024.jpg" },
        { name: "Coulée de lave de l'Ardoukoba (volcan récent, 1978)", wikipedia: "File:Lake Assal NASA (cropped).jpg" },
      ],
    },
    {
      id: 3,
      name: "Lac Abbé — Paysage de science-fiction",
      region: "Frontière éthiopienne (ouest)",
      description:
        "Le lac Abbé est l'une des visions les plus surréelles d'Afrique : des centaines de cheminées calcaires de 50m de hauteur crachent leur vapeur dans un décor volcanique désertique — Steven Spielberg a failli y tourner une scène de Star Wars. Le camp de nuit sous les étoiles et le lever de soleil sur les cheminées sont des moments inoubliables.",
      wikipedia: "File:Lac Abbe-02.JPG",
      tags: ["Cheminées", "Volcanique", "Star Wars", "Camping"],
      mustSee: [
        { name: "Cheminées de vapeur à l'aurore (paysage volcanique unique)", wikipedia: "File:Abbe-3.jpg" },
        { name: "Camp de nuit sous les étoiles au bord du lac", wikipedia: "File:Tukul Lake Abbe Djibouti.jpg" },
      ],
    },
    {
      id: 4,
      name: "Monts du Day — Forêt relique",
      region: "Massif du Day (nord)",
      description:
        "Les monts du Day abritent l'unique forêt de genévriers de Djibouti — vestige d'une époque où le pays était verdoyant. À 1 700m d'altitude, les températures sont radicalement différentes de la côte brûlante. Le parc national du Day abrite le francolin de Djibouti (oiseau endémique en danger critique) et des dik-diks (minuscules antilopes).",
      wikipedia: "File:Goda Mountains - National Park of Forêt du Day.jpg",
      tags: ["Forêt", "Oiseaux", "Altitude", "Randonnée"],
      mustSee: [
        { name: "Forêt de genévriers du Day — seule forêt de Djibouti", wikipedia: "File:Goda Mountains - National Park of Forêt du Day.jpg" },
        { name: "Vue panoramique sur la cuvette de l'Afar", wikipedia: "File:Dracaena ombet Djibouti.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Djibouti est cher pour la région (carrefour logistique mondial avec présences militaires étrangères). La plupart des produits sont importés. En revanche le franc djiboutien est arrimé au dollar — pas de surprise de change.",
    currency: "DJF",
    exchangeRate: "1€ ≈ 198 DJF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / auberge en ville", price: "30–60 €", detail: "Chambres simples, climatisées" },
          { label: "Hôtel 3★ Djibouti ville (Horseed, Djibouti Palace)", price: "80–150 €", detail: "Confortable, piscine" },
          { label: "Camp de brousse (lac Abbé, Ghoubbet)", price: "60–120 €", detail: "Tentes équipées + demi-pension" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Skudahkharis (riz + viande chèvre) restaurant somalien", price: "5–12 €", detail: "Cuisine locale typique" },
          { label: "Restaurant mid-range Djibouti ville", price: "20–40 €", detail: "Cuisine française et éthiopienne" },
          { label: "Marché Riyad — poissons du golfe frais", price: "5–15 €", detail: "Langouste et thon du matin" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "4x4 + chauffeur/guide (journée lac Assal/Abbé)", price: "100–180 €", detail: "Indispensable hors ville" },
          { label: "Taxi en ville", price: "3–8 €", detail: "Négocier avant de monter" },
          { label: "Train Djibouti–Addis-Abeba (Ethio-Djibouti Rail)", price: "20–40 €", detail: "Voyage de 12h, paysage de l'Afar" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Excursion requins baleines (bateau + guide, matinée)", price: "80–130 €", detail: "Nov–janv, 4h en mer" },
          { label: "Plongée Ghoubbet (2 plongées, équipement)", price: "90–140 €", detail: "Mantas et topographie unique" },
          { label: "Tour lac Abbé (nuit incluse)", price: "120–200 €", detail: "Transfert 4x4 + camp + guide" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "55–90 €/j", desc: "Guesthouse + cuisine locale + 4x4 partagé", color: "#22c55e" },
      { type: "Confort", daily: "140–250 €/j", desc: "Hôtel 3★ + restaurants + excursions privées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "7 jours",
      route: "Djibouti ville (2j) → Lac Assal + Ghoubbet (1j) → Lac Abbé avec nuit (2j) → Requins baleines (1j) → retour (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Djibouti (Air France, Turkish)", amount: "600–900 €" },
            { label: "Hébergement (7 nuits)", amount: "280–500 €" },
            { label: "4x4 + guides + transports", amount: "300–500 €" },
            { label: "Nourriture", amount: "200–350 €" },
            { label: "Requins baleines + plongée", amount: "200–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Djibouti", amount: "700–1 000 €" },
            { label: "Hôtels 3★ (7 nuits)", amount: "700–1 200 €" },
            { label: "Circuits privés 4x4 + guides", amount: "600–1 000 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Plongée & excursions mer", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~8–10h (Air France direct 3×/semaine, Turkish via Istanbul, Ethiopian via Addis-Abeba)." },
    { icon: "🪪", label: "Visa",              value: "e-Visa obligatoire en ligne avant le départ (~76 USD, 31 jours) sur evisa.gouv.dj. Aussi disponible à l'arrivée." },
    { icon: "💰", label: "Monnaie",           value: "Franc djiboutien (DJF, arrimé au dollar). Dollars USD préférés. Carte bancaire dans les hôtels uniquement." },
    { icon: "🗣️", label: "Langue",            value: "Français et Arabe (officiels). Afar et Somali entre habitants. Français suffisant pour voyager." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 220V. Aucun adaptateur nécessaire pour les appareils français." },
    { icon: "💊", label: "Santé",             value: "Antipaludéen recommandé (risque faible mais présent). Vaccin typhoïde conseillé. Chaleur extrême : hydratation intensive de juin à sept." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille uniquement. Se méfier de la déshydratation en été (boire 4–6L/jour)." },
    { icon: "🌡️", label: "Chaleur",          value: "De juin à septembre, les températures dépassent 40°C dans les terres. Toute activité extérieure doit être planifiée tôt le matin." },
  ],
};
