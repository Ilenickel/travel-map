export const SLOVENIA = {
  code: "SVN",
  numericId: 705,
  name: "Slovénie",
  emoji: "🇸🇮",
  capital: "Ljubljana",
  language: "Slovène",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 60, budgetMid: 110,
    tripMin: 900, tripMid: 2000,
  },
  description:
    "La Slovénie est le pays le plus vert d'Europe : 60% du territoire couvert par la forêt, le lac de Bled (château médiéval sur île au milieu d'un lac vert émeraude dans les Alpes juliennes), les grottes de Postojna (les plus visitées d'Europe), le parc national du Triglav et ses 2 864m, la côte adriatique de Piran, et Ljubljana — une capitale à vélo au bord de la Ljubljanica.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Été alpin",
      color: "#22c55e",
      description:
        "Lac de Bled idéal (eau à 22°C), Triglav accessible, Ljubljana animée, côte de Piran ensoleillée. Températures 22–28°C en plaine, 15–20°C en montagne.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Ski alpin",
      color: "#3b82f6",
      description:
        "Ski à Kranjska Gora et Krvavec. Lac de Bled sous la neige — une des plus belles vues d'Europe en hiver. Températures -5 à -15°C en altitude.",
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "ljubljana",
      name: "Ljubljana",
      region: "Bassin de Ljubljana (centre)",
      data: [
        { month: "Jan", temp:  1, rain: 70,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 70,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 100, icon: "⛅" },
        { month: "Mai", temp: 17, rain: 110, icon: "⛅" },
        { month: "Jun", temp: 19, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 100, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 95,  icon: "☀️" },
        { month: "Sep", temp: 16, rain: 100, icon: "⛅" },
        { month: "Oct", temp: 11, rain: 110, icon: "⛅" },
        { month: "Nov", temp:  5, rain: 100, icon: "⛅" },
        { month: "Déc", temp:  1, rain: 85,  icon: "❄️" },
      ],
    },
    {
      id: "bled",
      name: "Lac de Bled",
      region: "Alpes juliennes (nord-ouest)",
      data: [
        { month: "Jan", temp: -1, rain: 80,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 75,  icon: "❄️" },
        { month: "Mar", temp:  6, rain: 95,  icon: "⛅" },
        { month: "Avr", temp: 11, rain: 110, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 120, icon: "⛅" },
        { month: "Jun", temp: 18, rain: 130, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 110, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 105, icon: "☀️" },
        { month: "Sep", temp: 15, rain: 110, icon: "⛅" },
        { month: "Oct", temp:  9, rain: 120, icon: "⛅" },
        { month: "Nov", temp:  3, rain: 110, icon: "⛅" },
        { month: "Déc", temp: -1, rain: 85,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Lac de Bled — Carte postale des Alpes",
      region: "Alpes juliennes",
      description:
        "Le lac de Bled est l'une des vues les plus photographiées d'Europe : une église baroque sur une petite île au milieu d'un lac vert émeraude encerclé d'Alpes, avec un château médiéval perché sur une falaise. La pletna (barque traditionnelle) emmène les visiteurs à l'île. La crème à la vanille (kremšnita) inventée ici est un rituel.",
      wikipedia: "Lake_Bled",
      tags: ["Lac", "Alpes", "Château", "Île", "Nature", "Randonnée", "Ski"],
      mustSee: [
        { name: "Île de Bled en pletna — église baroque du XVIIe siècle", wikipedia: "File:Bled Overview.JPG" },
        { name: "Château de Bled (XIe s.) — vue plongeante sur le lac", wikipedia: "Bled_Castle" },
        { name: "Vintgar Gorge — canyon de 1,6km à 4km de Bled", wikipedia: "Vintgar_Gorge" },
        { name: "Kremšnita (crème à la vanille) au café Park — recette originale depuis 1953", wikipedia: "Lake_Bled" },
      ],
    },
    {
      id: 2,
      name: "Grottes de Postojna et Predjama",
      region: "Carso (sud-ouest)",
      description:
        "Les grottes de Postojna sont les plus visitées d'Europe (24 millions de visiteurs depuis leur découverte) : 24km de galeries avec stalactites géantes, le protée (olm, le 'poisson humain' — salamandre aveugle endémique aux grottes balkaniques) et un train souterrain qui parcourt 5km dans les entrailles. À 10km : le château de Predjama, dans la falaise au-dessus d'une grotte.",
      wikipedia: "Postojna_Cave",
      tags: ["Grottes", "Stalactites", "Olm", "Château-grotte", "UNESCO"],
      mustSee: [
        { name: "Train souterrain dans les grottes de Postojna (5km)", wikipedia: "File:Postojna Cave train (3).jpg" },
        { name: "Protée (olm) — salamandre aveugle endémique des grottes balkaniques", wikipedia: "Olm" },
        { name: "Concert de Noël dans les grottes (acoustique unique)", wikipedia: "File:Postojna Cave. Concert Hall. 2012-07-26 13-42-19.jpg" },
        { name: "Château de Predjama — forteresse dans la falaise au-dessus d'une grotte", wikipedia: "Predjama_Castle" },
      ],
    },
    {
      id: 3,
      name: "Parc national du Triglav",
      region: "Alpes juliennes (nord)",
      description:
        "Le Triglav (2 864m) est le symbole national slovène — son ascension est un rite de passage pour tout Slovène. Le parc national du Triglav (838 km²) est le seul parc national du pays : lacs d'altitude de couleur opale (les Lacs des Sept Lagons), gorges de Soča (eau d'un turquoise hallucinant, paradis du kayak), et prairies alpines fleuries.",
      wikipedia: "File:Triglav National Park (28749976304).jpg",
      tags: ["Alpinisme", "Kayak", "Lacs", "Nature", "Randonnée", "Ski", "UNESCO"],
      mustSee: [
        { name: "Rivière Soča — turquoise intense, kayak et rafting", wikipedia: "Soča" },
        { name: "Sept lacs de Triglav — randonnée de 2 jours", wikipedia: "File:Triglav_Lakes_Valley_Mountain_Lodge_in_Slovenia%27s_Julian_Alps.jpg" },
        { name: "Gorge de Vintgar depuis Bled (marche 1h30)", wikipedia: "Vintgar_Gorge" },
        { name: "Ascension du Triglav (2 864m) — 2 jours avec guide", wikipedia: "Triglav" },
      ],
    },
    {
      id: 4,
      name: "Ljubljana — Capitale verte à vélo",
      region: "Capitale",
      description:
        "Ljubljana est la capitale européenne de l'environnement 2016 : centre-ville intégralement piéton depuis 2007, 30km de pistes cyclables, la Ljubljanica traversant le centre avec ses terrasses animées, le château médiéval sur la colline, et les marchés biologiques du vendredi. Une ville à taille humaine, dynamique et bilingue (anglais parfait).",
      wikipedia: "Ljubljana",
      tags: ["Capitale verte", "Vélo", "Rivière", "Marché", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Triple-pont de Plečnik — entrée monumentale en vieille ville", wikipedia: "Triple_Bridge" },
        { name: "Château de Ljubljana — vue panoramique sur les Alpes", wikipedia: "Ljubljana_Castle" },
        { name: "Marché de Pogačar (vendredi) — produits bio slovènes", wikipedia: "Ljubljana" },
        { name: "Promenade de la Ljubljanica — terrasses et bateaux le soir", wikipedia: "Ljubljanica" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Slovénie est légèrement moins chère que la France mais plus chère que ses voisins Croatie ou Hongrie. Le lac de Bled est très touristique et donc cher en été. Ljubljana reste très abordable pour une capitale de l'UE.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hostel / guesthouse Ljubljana ou Bled", price: "25–55 €", detail: "Bonne qualité, vues souvent incluses" },
          { label: "Hôtel 3★ Ljubljana centre", price: "80–150 €", detail: "Bon confort en ville" },
          { label: "Pension au bord du lac de Bled (été)", price: "90–180 €", detail: "Vue sur le lac, réserver 3 mois à l'avance" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Jota (soupe de haricots et choucroute) + kruh (pain)", price: "7–12 €", detail: "Cuisine slovène simple et copieuse" },
          { label: "Restaurant mid-range Ljubljana ou Bled", price: "14–25 €", detail: "Cuisine locale créative" },
          { label: "Kremšnita de Bled — la vraie, au café Park", price: "4–6 €", detail: "Crème à la vanille — expérience obligatoire" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus public Ljubljana–Bled (1h20)", price: "7 €", detail: "Fréquent, direct" },
          { label: "Location de vélo Ljubljana (journée)", price: "10–15 €", detail: "La meilleure façon de visiter la capitale" },
          { label: "Train Ljubljana–Postojna (1h, pour les grottes)", price: "6 €", detail: "Puis bus ou taxi depuis la gare" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Grottes de Postojna (visite guidée 1h30 + train)", price: "28 €", detail: "Incontournable de Slovénie" },
          { label: "Pletna (barque traditionnelle) vers l'île de Bled", price: "16 €", detail: "A/R, 30 min de traversée" },
          { label: "Kayak sur la Soča (demi-journée avec guide)", price: "40–70 €", detail: "Eau turquoise unique en Europe" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–95 €/j", desc: "Hostel + cuisine locale + bus + activités basiques", color: "#22c55e" },
      { type: "Confort", daily: "110–200 €/j", desc: "Hôtel 3★ + restaurants + activités guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Ljubljana (2j) → Postojna + Predjama (1j) → Lac de Bled (3j) → Soča + Triglav (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "900 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Ljubljana (Ryanair, Air France)", amount: "80–200 €" },
            { label: "Hébergement (8 nuits)", amount: "250–500 €" },
            { label: "Transports (bus + vélo)", amount: "80–150 €" },
            { label: "Nourriture + kremšnita", amount: "280–450 €" },
            { label: "Grottes + pletna + kayak", amount: "150–280 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 000 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Ljubljana", amount: "100–250 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "700–1 300 €" },
            { label: "Voiture de location (8 jours)", amount: "250–400 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Activités guidées + ski + sorties", amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h (Ryanair direct Beauvais–Ljubljana, Air France CDG–Ljubljana). Aussi via Vienne ou Zagreb." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€). Carte bancaire acceptée partout. Espèces utiles dans les refuges de montagne." },
    { icon: "🗣️", label: "Langue",            value: "Slovène. Anglais parlé quasi-universellement, y compris en zone rurale. Excellente destination pour les non-polyglottes." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution. CEAM valide. Tiques dans les forêts — vaccination recommandée pour les randonneurs intensifs (encéphalite à tiques)." },
    { icon: "🌿", label: "Durabilité",        value: "La Slovénie est championne d'Europe du tourisme durable — Ljubljana a été nommée capitale européenne verte 2016. Privilégier les transports publics et les hébergements certifiés 'Slovenia Green'." },
    { icon: "🏔️", label: "Triglav",           value: "Monter au Triglav est un rite de passage national. L'ascension dure 2 jours avec nuit en refuge (D/A obligatoire). Les Slovènes disent : 'Qui n'a pas gravi le Triglav n'est pas vraiment slovène'." },
  ],
};
