export const ALBANIA = {
  code: "ALB",
  numericId: 8,
  name: "Albanie",
  emoji: "🇦🇱",
  capital: "Tirana",
  language: "Albanais",
  currency: "Lek albanais (ALL)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 600, tripMid: 1200,
  },
  description:
    "L'Albanie est la dernière frontière balkanique : une côte adriatique et ionique encore préservée (la Riviera albanaise avec ses eaux turquoise), Berat et Gjirokastër (deux villes ottomanes UNESCO), le lac d'Ohrid partagé avec la Macédoine du Nord, les montagnes maudites (Alpes albanaises) au nord — un pays qui sort d'un isolement de 50 ans et offre une authenticité rare.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Été adriatique et ionique",
      color: "#22c55e",
      description:
        "Côte idéale (24–30°C, eau chaude, plages peu fréquentées). Juillet-août chaud mais la Riviera reste moins bondée que la Croatie. Juin et septembre parfaits.",
      icon: "☀️",
    },
    {
      months: "Avril – Mai",
      label: "Printemps montagne",
      color: "#f59e0b",
      description:
        "Les Alpes albanaises (Valbonë, Theth) sont magnifiques au printemps. Idéal pour la randonnée et la visite des villes UNESCO de Berat et Gjirokastër.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "tirana",
      name: "Tirana",
      region: "Plaine centrale (capitale)",
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
      region: "Riviera ionique (sud)",
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
      name: "Berat — Ville des mille fenêtres (UNESCO)",
      region: "Centre",
      description:
        "Berat (UNESCO) est l'une des mieux préservées des villes ottomanes des Balkans : ses maisons blanches aux centaines de fenêtres identiques s'étagent sur la colline sous la citadelle médiévale du XIIIe siècle. Le quartier de Mangalem (côté musulman) et Gorica (côté chrétien) se font face de part et d'autre de la rivière Osum. Un musée vivant de l'architecture ottomane.",
      wikipedia: "Berat",
      tags: ["UNESCO", "Ottoman", "Citadelle", "Fenêtres"],
      mustSee: [
        { name: "Citadelle de Berat (Kalaja) — habitée depuis le IVe s. av. J.-C.", wikipedia: "Berat_Castle" },
        { name: "Quartier de Mangalem — maisons ottomanes aux cents fenêtres", wikipedia: "Berat" },
        { name: "Musée des icônes d'Onufri — peintre albanais du XVIe siècle", wikipedia: "Onufri" },
        { name: "Vue sur la rivière Osum depuis le pont de Gorica", wikipedia: "Berat" },
      ],
    },
    {
      id: 2,
      name: "Gjirokastër — Cité de pierre (UNESCO)",
      region: "Sud",
      description:
        "Gjirokastër (UNESCO) est une ville de pierre du XVIIe siècle dans la vallée de Drinos : ses maisons-tours aux toits de pierre grise (ardoise locale) et sa citadelle ottomane sont uniques dans les Balkans. Ville natale d'Enver Hoxha (dictateur communiste) et d'Ismail Kadaré (romancier albanais de réputation mondiale). La prison communiste dans la citadelle est un témoignage historique fort.",
      wikipedia: "Gjirokastër",
      tags: ["UNESCO", "Pierre", "Ottoman", "Citadelle"],
      mustSee: [
        { name: "Citadelle de Gjirokastër — avion américain F-86 capturé en 1957", wikipedia: "File:Gjirokastër Castle (by Pudelek) 3.jpg" },
        { name: "Maison-musée d'Ismail Kadaré — romancier albanais", wikipedia: "File:Gjirokastër, Albania November 2022 - Winding lane.jpg" },
        { name: "Village de Labovë e Kryqit — monastère du Xe siècle dans les montagnes", wikipedia: "File:Gjirokastër, Albania November 2022 - View.jpg" },
      ],
    },
    {
      id: 3,
      name: "Riviera albanaise — Côte ionique",
      region: "Sud (côte)",
      description:
        "La Riviera albanaise (de Vlorë à Sarandë) est la côte méditerranéenne la moins connue d'Europe : eaux ioniques turquoise, falaises calcaires, plages de galets et de sable, villages de pêcheurs accrochés à la falaise (Dhermi, Himara, Lukova). La route panoramique de la Riviera (SH8) est l'une des plus belles d'Europe et reste peu fréquentée.",
      wikipedia: "File:Bunec beach Albanian Riviera.jpg",
      tags: ["Côte", "Turquoise", "Panorama", "Villages"],
      mustSee: [
        { name: "Plage de Ksamil — 4 îlots dans l'eau turquoise face à Corfou", wikipedia: "File:Bunec beach Albanian Riviera.jpg" },
        { name: "Route panoramique SH8 Vlorë–Sarandë — vue sur les îles grecques", wikipedia: "File:Road construction at Albanian Riviera.jpg" },
        { name: "Dhermi — village suspendu au-dessus de la mer ionique", wikipedia: "File:Dhermi village.jpg" },
        { name: "Ruines de Butrint (UNESCO) — cité antique grecque et romaine dans une lagune", wikipedia: "Butrint" },
      ],
    },
    {
      id: 4,
      name: "Alpes albanaises — Valbonë et Theth",
      region: "Nord",
      description:
        "Les Alpes albanaises (aussi appelées 'Montagnes Maudites') au nord de l'Albanie sont l'une des zones les plus sauvages des Balkans : le parc national de Valbonë avec ses pics de 2 700m, la vallée de Theth (village isolé avec sa tour de guet du Bektachisme), et le trek Valbonë-Theth (6h) sont parmi les plus beaux de la région.",
      wikipedia: "File:Albanian Alps from Air.jpg",
      tags: ["Randonnée", "Alpes", "Nature", "Isolé"],
      mustSee: [
        { name: "Trek Valbonë–Theth (6h) — passage montagneux à 1 800m", wikipedia: "File:Albanian Alps from Air.jpg" },
        { name: "Cascade de Theth (Grunas) — 30m dans la forêt de pins", wikipedia: "File:2024-10-14 Theth National Park 18.jpg" },
        { name: "Kulla (tour de guet) de Theth — architecture du Kanun albanais", wikipedia: "File:Kisha e Thethit - 2018 (8).jpg" },
        { name: "Lac de Koman — traversée en ferry dans un paysage de fjord", wikipedia: "File:Ferry Berisha on Lake Komani, September 2022 05.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Albanie est l'un des pays les moins chers des Balkans : les prix restent très bas malgré une hausse du tourisme depuis 2018. La côte est plus chère en juillet-août. Tirana et les villes UNESCO sont très abordables toute l'année.",
    currency: "ALL",
    exchangeRate: "1€ ≈ 105 ALL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse familiale (Berat, Gjirokastër)", price: "20–40 €", detail: "Petits-déjeuners albanais inclus souvent" },
          { label: "Hôtel 3★ Tirana centre", price: "45–80 €", detail: "Bon confort, proche des Blok" },
          { label: "Bungalow / villa côtière (Ksamil)", price: "50–100 €", detail: "Vue mer, réserver à l'avance en juillet-août" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Byrek (feuillleté à la viande ou épinards)", price: "1–3 €", detail: "Petit-déjeuner albanais universel" },
          { label: "Tavë kosi (agneau au yaourt) dans une taverne locale", price: "6–12 €", detail: "Plat national albanais" },
          { label: "Poisson grillé sur la côte ionique", price: "10–20 €", detail: "Pêche du jour, très frais" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Furgon (minibus) Tirana–Berat (2h30)", price: "3–5 €", detail: "Transport local essentiel" },
          { label: "Bus Tirana–Sarandë (4h30)", price: "8–15 €", detail: "Compagnies privées, départ fréquent" },
          { label: "Ferry Sarandë–Corfou (Grèce, 30 min)", price: "20–35 €", detail: "Liaison quotidienne" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée citadelle de Berat ou Gjirokastër", price: "2–5 €", detail: "Très peu cher" },
          { label: "Ruines de Butrint (UNESCO)", price: "10 €", detail: "Site antique exceptionnel près de Sarandë" },
          { label: "Guide trek Valbonë–Theth (journée)", price: "20–40 €", detail: "Transport en ferry Koman inclus souvent" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Guesthouse + byrek + furgon", color: "#22c55e" },
      { type: "Confort", daily: "60–110 €/j", desc: "Hôtel 3★ + taverne + voiture", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Tirana (2j) → Berat (2j) → Gjirokastër (2j) → Riviera + Ksamil (3j) → Alpes / Theth (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "600 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tirana (Wizz Air, Air Albania)", amount: "80–200 €" },
            { label: "Hébergement (10 nuits)", amount: "200–350 €" },
            { label: "Transports (furgons + bus)", amount: "80–130 €" },
            { label: "Nourriture + cafés + bière locale", amount: "180–300 €" },
            { label: "Activités + Butrint + guider", amount: "80–160 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 200 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tirana", amount: "100–250 €" },
            { label: "Hôtels 3★ (10 nuits)", amount: "450–800 €" },
            { label: "Voiture de location (10 jours)", amount: "250–400 €" },
            { label: "Nourriture & restaurants", amount: "300–550 €" },
            { label: "Activités, trek, côte", amount: "150–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 (Wizz Air direct Beauvais/CDG–Tirana, Air Albania). Liaisons régulières." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité acceptés. Pas dans l'UE (candidat)." },
    { icon: "💰", label: "Monnaie",           value: "Lek albanais (ALL). Euros acceptés dans les hôtels et sur la côte. Espèces indispensables dans les villages et furgons." },
    { icon: "🗣️", label: "Langue",            value: "Albanais (langue unique — ni slave ni romane). Anglais parlé par les jeunes à Tirana et sur la côte. Italien très compris (forte influence TV italienne)." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Pas de précautions particulières. Eau du robinet à éviter dans les zones rurales. Assurance voyage recommandée." },
    { icon: "🚗", label: "Routes",            value: "Les routes de montagne (Alpes albanaises) sont parfois en mauvais état. Un 4x4 est recommandé pour Valbonë et Theth. Les furgons locaux connaissent tous les chemins." },
    { icon: "🏖️", label: "Riviera",          value: "La Riviera albanaise est encore préservée des grandes foules, contrairement à la Croatie voisine. Juillet-août plus fréquenté — préférer juin ou septembre." },
  ],
};
