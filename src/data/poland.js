export const POLAND = {
  code: "POL",
  numericId: 616,
  name: { fr: "Pologne", en: "Poland" },
  emoji: "🇵🇱",
  capital: { fr: "Varsovie", en: "Warsaw" },
  language: { fr: "Polonais", en: "Polish" },
  currency: { fr: "Złoty (PLN)", en: "Złoty (PLN)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  description: {
    fr: "La Pologne est une révélation en Europe centrale : Cracovie et son centre médiéval intact (UNESCO), Auschwitz-Birkenau (mémorial UNESCO), Varsovie et son incroyable reconstruction à l'identique après la WWII, la forêt primaire de Białowieża avec ses bisons européens (UNESCO), et Gdańsk sur la mer Baltique. Un pays à la cuisine généreuse (pierogi, żurek, bigos) et à l'hospitalité sincère.",
    en: "Poland is a revelation in Central Europe: Kraków and its intact medieval centre (UNESCO), Auschwitz-Birkenau (UNESCO memorial), Warsaw and its incredible identical reconstruction after WWII, the Białowieża primeval forest with its European bison (UNESCO), and Gdańsk on the Baltic Sea. A country with generous cuisine (pierogi, żurek, bigos) and sincere hospitality.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Saison douce", en: "Mild season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : températures agréables (18–26°C), festivals, terrasses animées. Juin–août sont les mois les plus beaux mais aussi les plus fréquentés.",
        en: "Best time to visit: pleasant temperatures (18–26°C), festivals, lively terraces. June–August are the finest months but also the busiest.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Février", en: "December – February" },
      label: { fr: "Hiver", en: "Winter" },
      color: "#ef4444",
      description: {
        fr: "Froid (-5 à -10°C), mais marchés de Noël exceptionnels à Cracovie et Varsovie (décembre). Ski dans les Tatras (Zakopane).",
        en: "Cold (-5 to -10°C), but exceptional Christmas markets in Kraków and Warsaw (December). Skiing in the Tatras (Zakopane).",
      },
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "warsaw",
      name: "Varsovie",
      region: { fr: "Mazovie (centre)", en: "Masovia (centre)" },
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
      region: { fr: "Petite-Pologne (sud)", en: "Lesser Poland (south)" },
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
      name: { fr: "Cracovie — Centre médiéval UNESCO", en: "Kraków — UNESCO medieval centre" },
      region: { fr: "Petite-Pologne", en: "Lesser Poland" },
      description: {
        fr: "Cracovie est l'une des plus belles villes médiévales d'Europe : la place du marché (Rynek Główny, la plus grande place médiévale d'Europe), le château du Wawel dominant la Vistule, la vieille ville et Kazimierz (quartier juif historique) sont classés UNESCO depuis 1978. La ville a survécu à la WWII quasi intacte — un trésor rare en Europe centrale.",
        en: "Kraków is one of the most beautiful medieval cities in Europe: the market square (Rynek Główny, the largest medieval square in Europe), Wawel Castle overlooking the Vistula, the old town and Kazimierz (historic Jewish quarter) have been UNESCO-listed since 1978. The city survived WWII almost intact — a rare treasure in Central Europe.",
      },
      wikipedia: "Kraków",
      tags: ["Médiéval", "UNESCO", "Château", "Juif", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Rynek Główny — plus grande place médiévale d'Europe", en: "Rynek Główny — largest medieval square in Europe" }, wikipedia: "File:Empty_Old_Town_Market_Square_in_Kraków_during_the_COVID-19_pandemic_in_Poland,_April_2020.jpg" },
        { name: { fr: "Château royal du Wawel avec la crypte des rois de Pologne", en: "Wawel Royal Castle with the crypt of Polish kings" }, wikipedia: "Wawel_Castle" },
        { name: { fr: "Kazimierz — quartier juif historique et restaurants", en: "Kazimierz — historic Jewish quarter and restaurants" }, wikipedia: "File:Medieval_market_square,_Wolnica_Square,_Kazimierz,_Kraków,_Poland.jpg" },
        { name: { fr: "Mine de sel de Wieliczka (UNESCO) — cathédrale souterraine", en: "Wieliczka Salt Mine (UNESCO) — underground cathedral" }, wikipedia: "File:Wieliczka-daVinci.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Auschwitz-Birkenau — Mémorial UNESCO", en: "Auschwitz-Birkenau — UNESCO memorial" },
      region: { fr: "Oświęcim (à 70km de Cracovie)", en: "Oświęcim (70km from Kraków)" },
      description: {
        fr: "Le camp d'extermination d'Auschwitz-Birkenau est classé UNESCO 'pour que la mémoire humaine ne perde pas de vue cet acte de barbarie'. Le site concentre les plus importantes archives du génocide des Juifs d'Europe : 1,1 million de victimes, dont 90% de Juifs. Une visite guidée est obligatoire pour comprendre la portée du lieu.",
        en: "The Auschwitz-Birkenau extermination camp is UNESCO-listed 'so that human memory does not lose sight of this act of barbarism'. The site holds the most important archives of the genocide of Europe's Jews: 1.1 million victims, 90% of them Jewish. A guided tour is mandatory to understand the significance of the site.",
      },
      wikipedia: "Auschwitz_concentration_camp",
      tags: ["Mémorial", "UNESCO", "Histoire", "WWII"],
      mustSee: [
        { name: { fr: "Auschwitz I — 'Arbeit Macht Frei', blocs d'exposition, salles des victimes", en: "Auschwitz I — 'Arbeit Macht Frei', exhibition blocks, victims' rooms" }, wikipedia: "File:Auschwitz-Work Set Free-new.JPG" },
        { name: { fr: "Auschwitz II-Birkenau — ruines des chambres à gaz et crématoires", en: "Auschwitz II-Birkenau — ruins of the gas chambers and crematoria" }, wikipedia: "File:Auschwitz II Birkenau - crematory.jpg" },
        { name: { fr: "Visite guidée obligatoire (réservation en ligne indispensable)", en: "Mandatory guided tour (online booking essential)" }, wikipedia: "File:Scene of Auschwitz I, Poland4.jpg" },
        { name: { fr: "Mémorial et tombeau de cendres à Birkenau", en: "Memorial and tomb of ashes at Birkenau" }, wikipedia: "File:Crematorium at Auschwitz I 2012.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Varsovie — Phénix reconstruite", en: "Warsaw — the rebuilt phoenix" },
      region: { fr: "Mazovie (capitale)", en: "Masovia (capital)" },
      description: {
        fr: "Varsovie est l'une des grandes surprises d'Europe : détruite à 85% pendant la WWII, elle a été reconstruite à l'identique par ses habitants à partir de tableaux du peintre Canaletto. Sa Vieille Ville (UNESCO) ressemble à celle du XVIIe siècle. Le musée de l'Insurrection de Varsovie est l'un des plus émouvants d'Europe. La ville est aussi un hub de techno-culture et de gastronomie.",
        en: "Warsaw is one of Europe's great surprises: 85% destroyed during WWII, it was rebuilt identically by its residents using paintings by Canaletto. Its Old Town (UNESCO) looks just as it did in the 17th century. The Warsaw Uprising Museum is one of the most moving in Europe. The city is also a hub of techno culture and cuisine.",
      },
      wikipedia: "Warsaw",
      tags: ["Reconstruction", "UNESCO", "Musée", "Modernité", "Ville", "Histoire", "Gastronomie"],
      mustSee: [
        { name: { fr: "Vieille Ville de Varsovie (UNESCO) — reconstruite à l'identique", en: "Warsaw Old Town (UNESCO) — rebuilt identically" }, wikipedia: "File:Warsaw Old Town, Warsaw, Poland - panoramio (69).jpg" },
        { name: { fr: "Musée de l'Insurrection de Varsovie (1944)", en: "Warsaw Uprising Museum (1944)" }, wikipedia: "File:Muzeum Powstania Warszawskiego 2014 018.JPG" },
        { name: { fr: "POLIN — Musée de l'histoire des Juifs polonais", en: "POLIN — Museum of the History of Polish Jews" }, wikipedia: "File:Museum_of_the_History_of_Polish_Jews_in_Warsaw_building_0011.jpg" },
        { name: { fr: "Łazienki Park — palais sur l'eau et concerts Chopin (été)", en: "Łazienki Park — palace on the water and Chopin concerts (summer)" }, wikipedia: "File:4_Warszawa-Lazienki_Krolewskie_107.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Forêt de Białowieża — Derniers bisons", en: "Białowieża Forest — the last bison" },
      region: { fr: "Podlachie (est)", en: "Podlasie (east)" },
      description: {
        fr: "Białowieża est la dernière forêt primaire des plaines d'Europe — vieille de 12 000 ans, jamais exploitée industriellement. Elle abrite le bison européen (żubr), l'animal le plus lourd d'Europe, sauvé de l'extinction dans les années 1920. Les randonnées guidées dans la réserve stricte permettent d'observer les bisons, loups, lynx et cerfs en liberté.",
        en: "Białowieża is the last primeval lowland forest in Europe — 12,000 years old, never industrially logged. It's home to the European bison (żubr), Europe's heaviest animal, saved from extinction in the 1920s. Guided hikes in the strict reserve let you observe wild bison, wolves, lynx and deer.",
      },
      wikipedia: "Białowieża_Forest",
      tags: ["Forêt primaire", "Bisons", "UNESCO", "Nature"],
      mustSee: [
        { name: { fr: "Randonnée guidée dans la réserve stricte — bisons sauvages", en: "Guided hike in the strict reserve — wild bison" }, wikipedia: "File:European bison (Bison bonasus) male Białowieza.jpg" },
        { name: { fr: "Parc national — arbres millénaires et silence absolu", en: "National park — ancient trees and absolute silence" }, wikipedia: "File:Smolany Sadek Aleja Lipowa 2024 01.jpg" },
        { name: { fr: "Village de Białowieża — maisons en bois podlachies", en: "Białowieża village — wooden Podlasie houses" }, wikipedia: "File:Bialowieza beentree.jpg" },
      ],
    },
    {
      id: 5,
      name: { fr: "Zakopane & Tatras", en: "Zakopane & the Tatras" },
      region: { fr: "Petite-Pologne", en: "Lesser Poland" },
      description: {
        fr: "Surnommée la capitale d'hiver de la Pologne, Zakopane niche au pied des Tatras, plus haut massif du pays. Architecture montagnarde en bois, pistes de ski et sentiers vers lacs glaciaires en font une destination prisée. Le téléphérique du Kasprowy Wierch ouvre des panoramas saisissants.",
        en: "Nicknamed Poland's winter capital, Zakopane nestles at the foot of the Tatras, the country's highest mountain range. Wooden mountain architecture, ski slopes and trails to glacial lakes make it a popular destination. The Kasprowy Wierch cable car opens up stunning panoramas.",
      },
      wikipedia: "Zakopane",
      tags: ["Ski", "Randonnée", "Nature", "UNESCO"],
      mustSee: [
        { name: { fr: "Kasprowy Wierch — pistes et télécabine", en: "Kasprowy Wierch — ski runs and cable car" }, wikipedia: "Kasprowy_Wierch" },
        { name: { fr: "Vallée de Morskie Oko", en: "Morskie Oko valley" }, wikipedia: "Morskie_Oko" },
        { name: { fr: "Zakopane — ville de montagne", en: "Zakopane — mountain town" }, wikipedia: "Zakopane" },
        { name: { fr: "Parc national des Tatras", en: "Tatra National Park" }, wikipedia: "Tatra_National_Park,_Poland" },
        { name: { fr: "Gubalówka — vue panoramique", en: "Gubałówka — panoramic view" }, wikipedia: "File:2020 Zakopane Gubałówka z Drogi pod Reglami, 1.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Pologne est l'une des destinations les moins chères d'Europe occidentale — les prix sont environ 40% inférieurs à ceux de la France. La gastronomie polonaise est généreuse et abordable. Cracovie est la ville la plus touristique (et la plus chère), mais reste bien en dessous de Paris.",
      en: "Poland is one of the cheapest destinations in Western Europe — prices are about 40% lower than in France. Polish cuisine is generous and affordable. Kraków is the most touristy (and priciest) city, but remains well below Paris.",
    },
    currency: "PLN",
    exchangeRate: "1€ ≈ 4,25 PLN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse (Cracovie, Varsovie)", en: "Youth hostel (Kraków, Warsaw)" }, price: "15–30 €", detail: { fr: "Dortoir ou chambre privée, bonne qualité", en: "Dorm or private room, good quality" } },
          { label: { fr: "Hôtel 3★ centre-ville", en: "3★ city-centre hotel" }, price: "50–100 €", detail: { fr: "Confortable, petit-déj souvent inclus", en: "Comfortable, breakfast often included" } },
          { label: { fr: "Appartement Airbnb (Cracovie 2 pers.)", en: "Airbnb apartment (Kraków, 2 people)" }, price: "40–80 €", detail: { fr: "Bien situé, cuisine disponible", en: "Well located, kitchen available" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Bar mleczny (cantine soviétique) — pierogi + zupa", en: "Bar mleczny (Soviet-era canteen) — pierogi + zupa" }, price: "5–8 €", detail: { fr: "Repas complet, ambiance authentique", en: "Full meal, authentic atmosphere" } },
          { label: { fr: "Restaurant polonais mid-range", en: "Mid-range Polish restaurant" }, price: "12–22 €", detail: { fr: "Bigos, żurek, kiełbasa, bière", en: "Bigos, żurek, kiełbasa, beer" } },
          { label: { fr: "Zapiekanka (baguette grillée) — street food", en: "Zapiekanka (grilled baguette) — street food" }, price: "2–4 €", detail: { fr: "Le snack national polonais", en: "Poland's national snack" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Train PKP Intercity Varsovie–Cracovie (2h45)", en: "PKP Intercity train Warsaw–Kraków (2h45)" }, price: "15–40 €", detail: { fr: "Confortable et ponctuel", en: "Comfortable and punctual" } },
          { label: { fr: "Bus FlixBus inter-villes", en: "FlixBus intercity bus" }, price: "10–25 €", detail: { fr: "Économique, nombreuses liaisons", en: "Budget-friendly, many routes" } },
          { label: { fr: "Tramway + métro Varsovie (ticket 24h)", en: "Tram + metro in Warsaw (24h ticket)" }, price: "4 €", detail: { fr: "Réseau dense et efficace", en: "Dense and efficient network" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Mine de Wieliczka (visite guidée incluse)", en: "Wieliczka Mine (guided tour included)" }, price: "20 €", detail: { fr: "Incontournable près de Cracovie", en: "A must near Kraków" } },
          { label: { fr: "Auschwitz-Birkenau (visite guidée)", en: "Auschwitz-Birkenau (guided tour)" }, price: "40–60 €", detail: { fr: "Guide obligatoire, demi-journée minimum", en: "Guide mandatory, half-day minimum" } },
          { label: { fr: "Visite guidée Białowieża (guide agréé, 3h)", en: "Guided visit of Białowieża (licensed guide, 3h)" }, price: "25–45 €", detail: { fr: "Obligatoire dans la réserve stricte", en: "Mandatory in the strict reserve" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Auberge + bar mleczny + transports publics", en: "Hostel + bar mleczny + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "85–150 €/j", desc: { fr: "Hôtel 3★ + restaurants + visites guidées", en: "3★ hotel + restaurants + guided tours" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Varsovie (3j) → Białowieża (2j) → Gdańsk (2j) → Cracovie + Wieliczka + Auschwitz (3j)",
        en: "Warsaw (3d) → Białowieża (2d) → Gdańsk (2d) → Kraków + Wieliczka + Auschwitz (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Varsovie ou Cracovie (Wizz Air, Ryanair)", en: "Return flight Paris–Warsaw or Kraków (Wizz Air, Ryanair)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–350 €" },
            { label: { fr: "Transports intérieurs (train + bus)", en: "Domestic transport (train + bus)" }, amount: "100–200 €" },
            { label: { fr: "Nourriture (bar mleczny + restaurants)", en: "Food (bar mleczny + restaurants)" }, amount: "200–350 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entry fees" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Varsovie", en: "Return flight Paris–Warsaw" }, amount: "100–300 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)" }, amount: "600–1 100 €" },
            { label: { fr: "Trains InterCity + transferts", en: "InterCity trains + transfers" }, amount: "200–350 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–700 €" },
            { label: { fr: "Visites guidées + activités", en: "Guided tours + activities" }, amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h30 (Wizz Air, Ryanair, Air France direct CDG–Varsovie ou Cracovie). Nombreuses liaisons.", en: "~2h30 (Wizz Air, Ryanair, direct Air France CDG–Warsaw or Kraków). Many routes." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Złoty (PLN). Carte bancaire acceptée presque partout. Certains marchés et bars mleczny en espèces uniquement.", en: "Złoty (PLN). Cards accepted almost everywhere. Some markets and bars mleczny are cash-only." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Polonais. Anglais parlé par les jeunes et dans les zones touristiques. Français rarement parlé. Appli Google Translate très utile.", en: "Polish. English spoken by young people and in tourist areas. French rarely spoken. The Google Translate app is very useful." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/E (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution particulière. CEAM valide. Tiques dans les forêts (Białowieża) — pantalon long recommandé.", en: "No particular precautions needed. EHIC valid. Ticks in the forests (Białowieża) — long trousers recommended." } },
    { icon: "🍺", label: { fr: "Bière", en: "Beer" }, value: { fr: "La Pologne est un grand pays de bière : Żywiec, Tyskie, Okocim. Une pinte en bar coûte 2–4€ — parmi les moins chères d'Europe.", en: "Poland is a great beer country: Żywiec, Tyskie, Okocim. A pint at a bar costs 2–4€ — among the cheapest in Europe." } },
    { icon: "🌡️", label: { fr: "Hiver", en: "Winter" }, value: { fr: "Les hivers polonais sont froids (-5 à -15°C). S'équiper chaudement de novembre à mars. La neige est fréquente à Cracovie et magnifique sur le Vieux Marché.", en: "Polish winters are cold (-5 to -15°C). Dress warmly from November to March. Snow is common in Kraków and looks magnificent on the Old Market Square." } },
  ],
};
