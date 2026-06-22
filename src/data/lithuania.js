export const LITHUANIA = {
  code: "LTU",
  numericId: 440,
  name: "Lituanie",
  emoji: "🇱🇹",
  capital: "Vilnius",
  language: "Lituanien",
  currency: "Euro (EUR)",
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  description:
    "La Lituanie est le plus grand et le plus méconnu des États baltes : Vilnius et son extraordinaire vieille ville baroque (UNESCO, la plus grande vieille ville baroque du nord de l'Europe), la flèche de sable de Courlande (UNESCO, la plus grande dune migratrice d'Europe), Kaunas et son Art Déco interwar unique, et Trakai et son château rouge sur une île lacustre.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Été et automne dorés",
      color: "#22c55e",
      description:
        "Températures agréables (17–22°C), longues journées, festivals (Vilnius City Days, Jazz Festival). Septembre splendide avec les couleurs de forêt.",
      icon: "☀️",
    },
    {
      months: "Décembre – Janvier",
      label: "Noël baroque",
      color: "#f59e0b",
      description:
        "Marchés de Noël sur la place de la cathédrale de Vilnius, lumières sur les clochers baroques, ambiance magique. Froid (-5°C).",
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "vilnius",
      name: "Vilnius",
      region: "Aukštaitija (est, capitale)",
      data: [
        { month: "Jan", temp: -4, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -3, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  8, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 14, rain: 55,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: -2, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "curonian_spit",
      name: "Flèche de Courlande",
      region: "Côte baltique (UNESCO)",
      data: [
        { month: "Jan", temp: -3, rain: 45,  icon: "❄️" },
        { month: "Fév", temp: -3, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 14, rain: 60,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 60,  icon: "⛅" },
        { month: "Nov", temp:  4, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  0, rain: 50,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Vilnius — Baroque du Nord (UNESCO)",
      region: "Capitale",
      description:
        "La vieille ville de Vilnius est la plus grande vieille ville baroque du nord de l'Europe (classée UNESCO) : 1 500 bâtiments des XVIe–XVIIIe siècles, 65 églises, la cathédrale néoclassique sur sa grande place et le quartier bohème d'Užupis (qui a déclaré son indépendance comme 'République' artistique en 1997). Le panorama depuis la colline de Gediminas est inoubliable.",
      wikipedia: "Vilnius",
      tags: ["Baroque", "UNESCO", "Bohème", "Clochers"],
      mustSee: [
        { name: "Vieille Ville baroque de Vilnius (UNESCO) — 65 églises", wikipedia: "Vilnius_Old_Town" },
        { name: "Tour de Gediminas — panorama sur la ville et ses clochers", wikipedia: "File:Gedimino pilis by Augustas Didzgalvis.jpg" },
        { name: "République d'Užupis — quartier artiste avec sa propre constitution", wikipedia: "Užupis" },
        { name: "Porte de l'Aurore — Madone miraculeuse vénérée depuis 1671", wikipedia: "Gate_of_Dawn" },
      ],
    },
    {
      id: 2,
      name: "Flèche de Courlande — Dunes UNESCO",
      region: "Côte baltique",
      description:
        "La flèche de Courlande (UNESCO) est une langue de sable de 98km séparant le lagon de Courlande de la mer Baltique — la plus grande dune migratrice d'Europe (60m de haut). Les villages de pêcheurs colorés, les forêts de pins et les plages de sable blanc sont accessibles depuis Klaipėda. La partie lituanienne fait partie du parc national de Neringa.",
      wikipedia: "Curonian_Spit",
      tags: ["Dunes", "UNESCO", "Baltique", "Pêcheurs"],
      mustSee: [
        { name: "Dunes du Désert mort (Parnidis) — panorama depuis 52m", wikipedia: "File:Kurische Nehrung Parnidden-Düne 01.JPG" },
        { name: "Nida — village de pêcheurs avec maisons en bois colorées", wikipedia: "Nida,_Lithuania" },
        { name: "Plage de Juodkrantė — observation des cormorans et hérons", wikipedia: "Juodkrantė" },
      ],
    },
    {
      id: 3,
      name: "Trakai — Château rouge sur l'eau",
      region: "Aukštaitija (à 30km de Vilnius)",
      description:
        "Le château de l'île de Trakai (XIVe s.) est le château le plus photographié de Lituanie : brique rouge reflétée dans le lac Galvė, accessible par un pont de bois. La ville est aussi le berceau des Karaïtes — une communauté turcique de 300 personnes installée depuis 600 ans, qui perpétue la cuisine traditionnelle kibinas (chausson karaïte).",
      wikipedia: "Trakai_Island_Castle",
      tags: ["Château sur l'eau", "Médiéval", "Lac", "Karaïtes"],
      mustSee: [
        { name: "Château de l'île de Trakai — brique rouge sur le lac Galvė", wikipedia: "Trakai_Island_Castle" },
        { name: "Kayak ou paddle sur le lac autour du château", wikipedia: "Trakai" },
        { name: "Kibinas (chausson karaïte) dans un restaurant traditionnel", wikipedia: "Kibinai" },
        { name: "Péninsule de Trakai — vue sur 30 lacs depuis la colline", wikipedia: "Trakai" },
      ],
    },
    {
      id: 4,
      name: "Kaunas — Art Déco Interwar",
      region: "Žemaitija (centre)",
      description:
        "Kaunas fut la capitale provisoire de la Lituanie entre les deux guerres (1920–1939) et concentre le plus bel ensemble Art Déco d'Europe du Nord pour cette période. La Laisvės Alėja (Boulevard de la Liberté, piétonne, 1,7km) est bordée de bâtiments interwar exceptionnels. Le musée Čiurlionis expose le peintre symboliste le plus important de Lituanie.",
      wikipedia: "Kaunas",
      tags: ["Art Déco", "Interwar", "Musées", "Boulevard"],
      mustSee: [
        { name: "Laisvės Alėja — boulevard Art Déco de 1,7km (piéton)", wikipedia: "File:Laisvės alėja, Kaunas.jpg" },
        { name: "Musée Čiurlionis — peintre symboliste et compositeur lituanien", wikipedia: "File:M. K. Ciurlionis National Art Museum (2018).jpg" },
        { name: "Château de Kaunas (XIVe s.) au confluent du Neris et Némunas", wikipedia: "Kaunas_Castle" },
        { name: "Marché Halės turgus — vie quotidienne et cuisine lituanienne", wikipedia: "File:Hales Market - panoramio.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Lituanie est la moins chère des trois capitales baltes. Vilnius est particulièrement abordable pour une capitale de l'UE. Le niveau de restauration a fortement progressé ces dernières années.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse Vilnius (dortoir ou chambre)", price: "18–35 €", detail: "Nombreuses et bien situées en Vieille Ville" },
          { label: "Hôtel 3★ Vilnius Vieille Ville", price: "55–100 €", detail: "Souvent dans des bâtisses baroques" },
          { label: "Pension Nida (Flèche de Courlande)", price: "40–80 €", detail: "Charme balnéaire de la Baltique" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Cepelinai (zeppelins de pomme de terre farcis) dans une kavinė", price: "7–12 €", detail: "Plat national lituanien, très copieux" },
          { label: "Restaurant mid-range Vilnius Vieille Ville", price: "12–22 €", detail: "Cuisine moderne lituanienne" },
          { label: "Kibinai (chausson karaïte farci) à Trakai", price: "3–5 €", detail: "Snack unique d'Europe" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus + trolley Vilnius (ticket 24h)", price: "4 €", detail: "Réseau étendu en ville" },
          { label: "Train Vilnius–Kaunas (1h30)", price: "5–10 €", detail: "Fréquent et abordable" },
          { label: "Bus Lux Express Vilnius–Riga ou Tallinn", price: "15–25 €", detail: "Confortables avec WiFi" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée château de Trakai (bateau inclus)", price: "8 €", detail: "Musée du Grand-Duché à l'intérieur" },
          { label: "Tour guidé Vilnius baroque (2h à pied)", price: "12–20 €", detail: "Guide francophone disponible" },
          { label: "Location de vélo Flèche de Courlande (journée)", price: "10–18 €", detail: "Idéal pour longer les dunes" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "45–75 €/j", desc: "Auberge + cepelinai + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "85–150 €/j", desc: "Hôtel 3★ + restaurants + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "7 jours",
      route: "Vilnius (3j) → Trakai (1j) → Kaunas (1j) → Flèche de Courlande (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "800 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Vilnius (Ryanair, Wizz Air)", amount: "80–200 €" },
            { label: "Hébergement (7 nuits)", amount: "180–320 €" },
            { label: "Transports (train + bus)", amount: "80–150 €" },
            { label: "Nourriture + cepelinai + bière", amount: "200–350 €" },
            { label: "Activités + château Trakai", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Vilnius", amount: "100–250 €" },
            { label: "Hôtels 3★ (7 nuits)", amount: "450–800 €" },
            { label: "Voiture de location + transports", amount: "250–400 €" },
            { label: "Nourriture & restaurants", amount: "350–600 €" },
            { label: "Activités, concerts, Courlande", amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~3h (Ryanair direct Beauvais/CDG–Vilnius, Wizz Air). Liaisons régulières." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€). Carte bancaire très bien acceptée partout. Espèces utiles sur la Flèche de Courlande." },
    { icon: "🗣️", label: "Langue",            value: "Lituanien (langue indo-européenne très ancienne). Anglais bien parlé par les jeunes. Russe compris par les plus âgés." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution. CEAM valide. Tiques en forêt (Courlande) — répulsif recommandé en été." },
    { icon: "🏖️", label: "Plages baltiques",  value: "La mer Baltique est froide en Lituanie (19°C max en juillet) mais les plages de sable sont immenses et peu fréquentées hors de la Flèche de Courlande." },
    { icon: "🍺", label: "Bière",             value: "La Lituanie a une forte tradition brassicole artisanale — les bières de ferme (farmhouse ales) de la région de Biržai sont uniques en Europe et introuvables ailleurs." },
  ],
};
