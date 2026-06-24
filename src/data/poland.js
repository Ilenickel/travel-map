export const POLAND = {
  code: "POL",
  numericId: 616,
  name: "Pologne",
  emoji: "🇵🇱",
  capital: "Varsovie",
  language: "Polonais",
  currency: "Złoty (PLN)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  description:
    "La Pologne est une révélation en Europe centrale : Cracovie et son centre médiéval intact (UNESCO), Auschwitz-Birkenau (mémorial UNESCO), Varsovie et son incroyable reconstruction à l'identique après la WWII, la forêt primaire de Białowieża avec ses bisons européens (UNESCO), et Gdańsk sur la mer Baltique. Un pays à la cuisine généreuse (pierogi, żurek, bigos) et à l'hospitalité sincère.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Saison douce",
      color: "#22c55e",
      description:
        "Meilleure période : températures agréables (18–26°C), festivals, terrasses animées. Juin–août sont les mois les plus beaux mais aussi les plus fréquentés.",
      icon: "☀️",
    },
    {
      months: "Décembre – Février",
      label: "Hiver",
      color: "#ef4444",
      description:
        "Froid (-5 à -10°C), mais marchés de Noël exceptionnels à Cracovie et Varsovie (décembre). Ski dans les Tatras (Zakopane).",
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "warsaw",
      name: "Varsovie",
      region: "Mazovie (centre)",
      data: [
        { month: "Jan", temp: -2, rain: 25,  icon: "❄️" },
        { month: "Fév", temp: -1, rain: 25,  icon: "❄️" },
        { month: "Mar", temp:  4, rain: 30,  icon: "⛅" },
        { month: "Avr", temp: 10, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 15, rain: 55,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 75,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 50,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 45,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 40,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 35,  icon: "❄️" },
      ],
    },
    {
      id: "krakow",
      name: "Cracovie",
      region: "Petite-Pologne (sud)",
      data: [
        { month: "Jan", temp: -2, rain: 30,  icon: "❄️" },
        { month: "Fév", temp: -1, rain: 25,  icon: "❄️" },
        { month: "Mar", temp:  4, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 10, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 85,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 90,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 60,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 50,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 45,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 40,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Cracovie — Centre médiéval UNESCO",
      region: "Petite-Pologne",
      description:
        "Cracovie est l'une des plus belles villes médiévales d'Europe : la place du marché (Rynek Główny, la plus grande place médiévale d'Europe), le château du Wawel dominant la Vistule, la vieille ville et Kazimierz (quartier juif historique) sont classés UNESCO depuis 1978. La ville a survécu à la WWII quasi intacte — un trésor rare en Europe centrale.",
      wikipedia: "Kraków",
      tags: ["Médiéval", "UNESCO", "Château", "Juif", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Rynek Główny — plus grande place médiévale d'Europe", wikipedia: "File:Empty_Old_Town_Market_Square_in_Kraków_during_the_COVID-19_pandemic_in_Poland,_April_2020.jpg" },
        { name: "Château royal du Wawel avec la crypte des rois de Pologne", wikipedia: "Wawel_Castle" },
        { name: "Kazimierz — quartier juif historique et restaurants", wikipedia: "File:Medieval_market_square,_Wolnica_Square,_Kazimierz,_Kraków,_Poland.jpg" },
        { name: "Mine de sel de Wieliczka (UNESCO) — cathédrale souterraine", wikipedia: "File:Wieliczka-daVinci.jpg" },
      ],
    },
    {
      id: 2,
      name: "Auschwitz-Birkenau — Mémorial UNESCO",
      region: "Oświęcim (à 70km de Cracovie)",
      description:
        "Le camp d'extermination d'Auschwitz-Birkenau est classé UNESCO 'pour que la mémoire humaine ne perde pas de vue cet acte de barbarie'. Le site concentre les plus importantes archives du génocide des Juifs d'Europe : 1,1 million de victimes, dont 90% de Juifs. Une visite guidée est obligatoire pour comprendre la portée du lieu.",
      wikipedia: "Auschwitz_concentration_camp",
      tags: ["Mémorial", "UNESCO", "Histoire", "WWII"],
      mustSee: [
        { name: "Auschwitz I — 'Arbeit Macht Frei', blocs d'exposition, salles des victimes", wikipedia: "File:Auschwitz-Work Set Free-new.JPG" },
        { name: "Auschwitz II-Birkenau — ruines des chambres à gaz et crématoires", wikipedia: "File:Auschwitz II Birkenau - crematory.jpg" },
        { name: "Visite guidée obligatoire (réservation en ligne indispensable)", wikipedia: "File:Scene of Auschwitz I, Poland4.jpg" },
        { name: "Mémorial et tombeau de cendres à Birkenau", wikipedia: "File:Crematorium at Auschwitz I 2012.jpg" },
      ],
    },
    {
      id: 3,
      name: "Varsovie — Phénix reconstruite",
      region: "Mazovie (capitale)",
      description:
        "Varsovie est l'une des grandes surprises d'Europe : détruite à 85% pendant la WWII, elle a été reconstruite à l'identique par ses habitants à partir de tableaux du peintre Canaletto. Sa Vieille Ville (UNESCO) ressemble à celle du XVIIe siècle. Le musée de l'Insurrection de Varsovie est l'un des plus émouvants d'Europe. La ville est aussi un hub de techno-culture et de gastronomie.",
      wikipedia: "Warsaw",
      tags: ["Reconstruction", "UNESCO", "Musée", "Modernité", "Ville", "Histoire", "Gastronomie"],
      mustSee: [
        { name: "Vieille Ville de Varsovie (UNESCO) — reconstruite à l'identique", wikipedia: "File:Warsaw Old Town, Warsaw, Poland - panoramio (69).jpg" },
        { name: "Musée de l'Insurrection de Varsovie (1944)", wikipedia: "File:Muzeum Powstania Warszawskiego 2014 018.JPG" },
        { name: "POLIN — Musée de l'histoire des Juifs polonais", wikipedia: "File:Museum_of_the_History_of_Polish_Jews_in_Warsaw_building_0011.jpg" },
        { name: "Łazienki Park — palais sur l'eau et concerts Chopin (été)", wikipedia: "File:4_Warszawa-Lazienki_Krolewskie_107.jpg" },
      ],
    },
    {
      id: 4,
      name: "Forêt de Białowieża — Derniers bisons",
      region: "Podlachie (est)",
      description:
        "Białowieża est la dernière forêt primaire des plaines d'Europe — vieille de 12 000 ans, jamais exploitée industriellement. Elle abrite le bison européen (żubr), l'animal le plus lourd d'Europe, sauvé de l'extinction dans les années 1920. Les randonnées guidées dans la réserve stricte permettent d'observer les bisons, loups, lynx et cerfs en liberté.",
      wikipedia: "Białowieża_Forest",
      tags: ["Forêt primaire", "Bisons", "UNESCO", "Nature"],
      mustSee: [
        { name: "Randonnée guidée dans la réserve stricte — bisons sauvages", wikipedia: "File:European bison (Bison bonasus) male Białowieza.jpg" },
        { name: "Parc national — arbres millénaires et silence absolu", wikipedia: "File:Smolany Sadek Aleja Lipowa 2024 01.jpg" },
        { name: "Village de Białowieża — maisons en bois podlachies", wikipedia: "File:Bialowieza beentree.jpg" },
      ],
    },
    {
      id: 5,
      name: "Zakopane & Tatras",
      region: "Petite-Pologne",
      description:
        "Surnommée la capitale d'hiver de la Pologne, Zakopane niche au pied des Tatras, plus haut massif du pays. Architecture montagnarde en bois, pistes de ski et sentiers vers lacs glaciaires en font une destination prisée. Le téléphérique du Kasprowy Wierch ouvre des panoramas saisissants.",
      wikipedia: "Zakopane",
      tags: ["Ski", "Randonnée", "Nature", "UNESCO"],
      mustSee: [
        { name: "Kasprowy Wierch — pistes et télécabine", wikipedia: "Kasprowy_Wierch" },
        { name: "Vallée de Morskie Oko", wikipedia: "Morskie_Oko" },
        { name: "Zakopane — ville de montagne", wikipedia: "Zakopane" },
        { name: "Parc national des Tatras", wikipedia: "Tatra_National_Park,_Poland" },
        { name: "Gubalówka — vue panoramique", wikipedia: "File:2020 Zakopane Gubałówka z Drogi pod Reglami, 1.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Pologne est l'une des destinations les moins chères d'Europe occidentale — les prix sont environ 40% inférieurs à ceux de la France. La gastronomie polonaise est généreuse et abordable. Cracovie est la ville la plus touristique (et la plus chère), mais reste bien en dessous de Paris.",
    currency: "PLN",
    exchangeRate: "1€ ≈ 4,25 PLN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse (Cracovie, Varsovie)", price: "15–30 €", detail: "Dortoir ou chambre privée, bonne qualité" },
          { label: "Hôtel 3★ centre-ville", price: "50–100 €", detail: "Confortable, petit-déj souvent inclus" },
          { label: "Appartement Airbnb (Cracovie 2 pers.)", price: "40–80 €", detail: "Bien situé, cuisine disponible" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Bar mleczny (cantine soviétique) — pierogi + zupa", price: "5–8 €", detail: "Repas complet, ambiance authentique" },
          { label: "Restaurant polonais mid-range", price: "12–22 €", detail: "Bigos, żurek, kiełbasa, bière" },
          { label: "Zapiekanka (baguette grillée) — street food", price: "2–4 €", detail: "Le snack national polonais" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Train PKP Intercity Varsovie–Cracovie (2h45)", price: "15–40 €", detail: "Confortable et ponctuel" },
          { label: "Bus FlixBus inter-villes", price: "10–25 €", detail: "Économique, nombreuses liaisons" },
          { label: "Tramway + métro Varsovie (ticket 24h)", price: "4 €", detail: "Réseau dense et efficace" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Mine de Wieliczka (visite guidée incluse)", price: "20 €", detail: "Incontournable près de Cracovie" },
          { label: "Auschwitz-Birkenau (visite guidée)", price: "40–60 €", detail: "Guide obligatoire, demi-journée minimum" },
          { label: "Visite guidée Białowieża (guide agréé, 3h)", price: "25–45 €", detail: "Obligatoire dans la réserve stricte" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "45–75 €/j", desc: "Auberge + bar mleczny + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "85–150 €/j", desc: "Hôtel 3★ + restaurants + visites guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Varsovie (3j) → Białowieża (2j) → Gdańsk (2j) → Cracovie + Wieliczka + Auschwitz (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "800 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Varsovie ou Cracovie (Wizz Air, Ryanair)", amount: "80–200 €" },
            { label: "Hébergement (10 nuits)", amount: "200–350 €" },
            { label: "Transports intérieurs (train + bus)", amount: "100–200 €" },
            { label: "Nourriture (bar mleczny + restaurants)", amount: "200–350 €" },
            { label: "Activités & entrées", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Varsovie", amount: "100–300 €" },
            { label: "Hôtels 3★ (10 nuits)", amount: "600–1 100 €" },
            { label: "Trains InterCity + transferts", amount: "200–350 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Visites guidées + activités", amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 (Wizz Air, Ryanair, Air France direct CDG–Varsovie ou Cracovie). Nombreuses liaisons." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Złoty (PLN). Carte bancaire acceptée presque partout. Certains marchés et bars mleczny en espèces uniquement." },
    { icon: "🗣️", label: "Langue",            value: "Polonais. Anglais parlé par les jeunes et dans les zones touristiques. Français rarement parlé. Appli Google Translate très utile." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution particulière. CEAM valide. Tiques dans les forêts (Białowieża) — pantalon long recommandé." },
    { icon: "🍺", label: "Bière",             value: "La Pologne est un grand pays de bière : Żywiec, Tyskie, Okocim. Une pinte en bar coûte 2–4€ — parmi les moins chères d'Europe." },
    { icon: "🌡️", label: "Hiver",            value: "Les hivers polonais sont froids (-5 à -15°C). S'équiper chaudement de novembre à mars. La neige est fréquente à Cracovie et magnifique sur le Vieux Marché." },
  ],
};
