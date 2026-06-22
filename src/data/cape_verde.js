export const CAPE_VERDE = {
  code: "CPV",
  numericId: 132,
  name: "Cap-Vert",
  emoji: "🇨🇻",
  capital: "Praia",
  language: "Portugais, Créole cap-verdien",
  currency: "Escudo cap-verdien (CVE)",
  timezone: "UTC-1",
  filter: {
    budgetMin: 50, budgetMid: 110,
    tripMin: 1500, tripMid: 3200,
  },
  description:
    "Le Cap-Vert est un archipel de 10 îles volcanique au large des côtes sénégalaises : le volcan Fogo (encore actif) dont les vignes poussent dans la lave, Mindelo et son carnaval afro-brésilien légendaire, les plages de Sal pour le kitesurf et Santo Antão, paradis de la randonnée dans des paysages lunaires verdoyants.",

  bestPeriods: [
    {
      months: "Novembre – Juin",
      label: "Saison sèche et ensoleillée",
      color: "#22c55e",
      description:
        "Idéal pour toutes les activités. Températures agréables (22–27°C), mer calme, ciel bleu. Kitesurf à son meilleur de nov à juin.",
      icon: "🏄",
    },
    {
      months: "Juillet – Octobre",
      label: "Harmattan et vents de sable",
      color: "#ef4444",
      description:
        "Vents d'harmattan et sable du Sahara réduisant la visibilité. Quelques pluies sur Fogo et Santo Antão. Mer plus agitée.",
      icon: "💨",
    },
  ],

  weatherCities: [
    {
      id: "sal",
      name: "Sal",
      region: "Barlavento (Sotavento)",
      data: [
        { month: "Jan", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Avr", temp: 23, rain: 0,  icon: "☀️" },
        { month: "Mai", temp: 24, rain: 0,  icon: "☀️" },
        { month: "Jun", temp: 26, rain: 0,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 5,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 15, icon: "⛅" },
        { month: "Sep", temp: 29, rain: 25, icon: "⛅" },
        { month: "Oct", temp: 28, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 26, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 23, rain: 0,  icon: "☀️" },
      ],
    },
    {
      id: "sao_vicente",
      name: "São Vicente (Mindelo)",
      region: "Barlavento",
      data: [
        { month: "Jan", temp: 21, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 21, rain: 10, icon: "☀️" },
        { month: "Mar", temp: 21, rain: 5,  icon: "☀️" },
        { month: "Avr", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Mai", temp: 23, rain: 0,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 0,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 0,  icon: "☀️" },
        { month: "Aoû", temp: 27, rain: 10, icon: "⛅" },
        { month: "Sep", temp: 28, rain: 30, icon: "⛅" },
        { month: "Oct", temp: 27, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 25, rain: 5,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 10, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Fogo — Volcan & Vignes",
      region: "Sotavento",
      description:
        "L'île de Fogo est dominée par le Pico do Fogo (2 829 m), volcan actif dont la dernière éruption date de 2014–2015. Dans la caldeira (Chã das Caldeiras), un village de 1 000 personnes cultive du vin et du café dans la lave, encerclé par les parois de la caldera — un des paysages les plus saisissants de l'Afrique.",
      wikipedia: "File:Fogo, Cape Verde Islands.jpg",
      tags: ["Volcan", "Randonnée", "Unique", "Vin"],
      mustSee: [
        { name: "Ascension Pico do Fogo (2 829 m, 5h)", wikipedia: "Pico_do_Fogo" },
        { name: "Village Chã das Caldeiras dans la lave", wikipedia: "Chã_das_Caldeiras" },
        { name: "Vue sur les îles voisines depuis la caldeira", wikipedia: "File:Carlb-fogo-newfoundland-2002.jpg" },
      ],
    },
    {
      id: 2,
      name: "Mindelo & São Vicente",
      region: "Barlavento",
      description:
        "Mindelo est la capitale culturelle du Cap-Vert : berceau de la morna (musique mélancolique de Cesária Évora, classée UNESCO), port colonial coloré aux bâtisses portugaises, et le Carnaval de Mindelo (février) — le plus spectaculaire d'Afrique. Une ville qui vibre.",
      wikipedia: "Mindelo",
      tags: ["Culture", "Musique", "Carnaval", "Port"],
      mustSee: [
        { name: "Carnaval de Mindelo (février) — le plus grand d'Afrique", wikipedia: "File:קרנבל_מינדלו_באי_סאו_ויסנטה_באיי_כף_ורדה_פברואר_2023_21.jpg" },
        { name: "Morna — héritage de Cesária Évora (UNESCO)", wikipedia: "Morna_(music)" },
        { name: "Baie de Porto Grande — coucher de soleil", wikipedia: "Porto_Grande" },
        { name: "Marché Municipal & rue piétonne Avenida Marginal", wikipedia: "Mindelo" },
      ],
    },
    {
      id: 3,
      name: "Sal — Kitesurf & Salines",
      region: "Barlavento",
      description:
        "Sal est l'île la plus touristique du Cap-Vert : ses vents constants et ses eaux peu profondes en font un paradis mondial du kitesurf et du windsurf. Pedra de Lume, un ancien cratère volcanique rempli d'eau salée, permet de flotter comme en mer Morte. Santa Maria est la plage la plus fréquentée.",
      wikipedia: "File:Sal, Cape Verde Islands.jpeg",
      tags: ["Kitesurf", "Plage", "Salines", "Sports nautiques"],
      mustSee: [
        { name: "Kitesurf Kite Beach Santa Maria (vent constant)", wikipedia: "Kiteboarding" },
        { name: "Pedra de Lume — cratère volcanique salin (flottaison)", wikipedia: "Pedra_de_Lume" },
        { name: "Snorkel Santa Maria — tortues imbriquées", wikipedia: "Hawksbill_sea_turtle" },
      ],
    },
    {
      id: 4,
      name: "Santo Antão — Randonnée",
      region: "Barlavento",
      description:
        "Santo Antão est la plus grande et la plus verte des îles du Cap-Vert : ses vallées tropicales (Paúl, Ribeira Grande) contrastent avec ses crêtes arides et ses falaises sur l'Atlantique. La randonnée de la Cova à la plage de Ponta do Sol (5h) est l'une des plus belles de l'Afrique.",
      wikipedia: "File:Coastline Santo Antao.JPG",
      tags: ["Randonnée", "Nature", "Vallées", "Montagne"],
      mustSee: [
        { name: "Vallée de Paul — randonnée tropicale dans les bananiers", wikipedia: "File:Santo Antão, Cabo Verde 2017-04 --3.jpg" },
        { name: "Trek Cova–Ponta do Sol (falaises atlantiques, 5h)", wikipedia: "Santo_Antão,_Cape_Verde" },
        { name: "Distilleries de grogue (rhum local) artisanales", wikipedia: "Grogue" },
        { name: "Pico da Cruz — sommet avec vue sur les îles", wikipedia: "File:Santo Antão, Cabo Verde 2017-04 --9.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Cap-Vert est accessible avec un budget raisonnable. L'escudo cap-verdien est arrimé à l'euro (1€ = 110 CVE), ce qui facilite la gestion du budget. Sal est plus chère que Fogo ou Santo Antão. Les vols inter-îles sont indispensables.",
    currency: "CVE",
    exchangeRate: "1€ = 110 CVE (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Pension / guesthouse (Fogo, Santo Antão)", price: "20–40 €", detail: "Simple et authentique" },
          { label: "Hôtel 3★ Santa Maria (Sal)", price: "60–120 €", detail: "Vue mer, clim, piscine" },
          { label: "Resort tout-inclus Sal ou Boa Vista", price: "150–300 €", detail: "All-inclusive, plage privée" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Cachupa (ragoût national)", price: "3–6 €", detail: "Plat traditionnel copieux" },
          { label: "Poisson frais grillé (atum, garoupa)", price: "8–15 €", detail: "Pêche du jour" },
          { label: "Restaurant Santa Maria (Sal)", price: "15–30 €", detail: "Fruits de mer, terrasse" },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: "Transport",
        items: [
          { label: "Vol inter-îles (Bestfly, TACV)", price: "40–80 €", detail: "A/R, 30–60 min" },
          { label: "Ferry (Santiago–Fogo ou São Vicente–Santo Antão)", price: "15–25 €", detail: "1–3h selon trajet" },
          { label: "Aluguer (taxi partagé)", price: "2–5 €", detail: "Transport local" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Cours de kitesurf (2h)", price: "60–80 €", detail: "Matériel inclus, Sal" },
          { label: "Ascension Pico do Fogo (guide obligatoire)", price: "30–50 €", detail: "5h, vue spectaculaire" },
          { label: "Snorkel ou plongée (2 immersions)", price: "50–70 €", detail: "Tortues, raies" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Guesthouse + cachupa + aluguer + vols inter-îles", color: "#22c55e" },
      { type: "Confort", daily: "110–180 €/j", desc: "Hôtel 3★ + restos + kitesurf + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Resort all-inclusive + excursions privées + spa", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Sal (3j) → São Vicente / Mindelo (2j) → Santo Antão (3j) → Santiago / Fogo (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Cap-Vert (direct)", amount: "300–550 €" },
            { label: "Hébergement (12 nuits)", amount: "400–600 €" },
            { label: "Vols inter-îles (3–4)", amount: "200–350 €" },
            { label: "Nourriture", amount: "250–400 €" },
            { label: "Activités & imprévus", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 200 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Cap-Vert (direct)", amount: "400–700 €" },
            { label: "Hébergement (12 nuits)", amount: "900–1 500 €" },
            { label: "Vols inter-îles", amount: "300–500 €" },
            { label: "Nourriture & sorties", amount: "500–800 €" },
            { label: "Kitesurf & activités", amount: "400–700 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Cap-Vert (Business)", amount: "1 500–2 500 €" },
            { label: "Resorts & boutique hôtels (12 nuits)", amount: "2 500–4 000 €" },
            { label: "Vols privés inter-îles", amount: "600–1 000 €" },
            { label: "Gastronomie & spa", amount: "600–1 000 €" },
            { label: "Extras & expériences", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6h direct (TACV, TAP via Lisbonne, Binter, TUI, Vueling)" },
    { icon: "🪪", label: "Visa",              value: "Pré-enregistrement EASE obligatoire en ligne avant le départ (~30€) sur ease.gov.cv" },
    { icon: "💰", label: "Monnaie",           value: "Escudo cap-verdien (1€ = 110 CVE — taux fixe garanti)" },
    { icon: "🗣️", label: "Langue",            value: "Portugais (officiel) + Créole cap-verdien (langue de vie)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture îles principales, limitée Santo Antão rural" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable" },
    { icon: "💊", label: "Santé",             value: "Pas de vaccin obligatoire. Dengue possible en saison des pluies." },
  ],
};
