export const PAPUA_NEW_GUINEA = {
  code: "PNG",
  numericId: 598,
  name: "Papouasie-Nouvelle-Guinée",
  emoji: "🇵🇬",
  capital: "Port Moresby",
  language: "Tok Pisin, Anglais, Hiri Motu (+ 800 langues locales)",
  currency: "Kina papouan (PGK)",
  timezone: "UTC+10",
  filter: { budgetMin: 60, budgetMid: 130, tripMin: 1500, tripMid: 3000 },
  description:
    "La Papouasie-Nouvelle-Guinée est l'un des pays les plus diversifiés au monde, avec plus de 800 langues parlées et des cultures ancestrales préservées dans des highlands isolés. Ses paysages extraordinaires vont des récifs coralliens turquoise aux forêts tropicales denses et aux sommets enneigés, comme le mont Wilhelm (4 509 m). C'est une destination pour voyageurs aventuriers cherchant une immersion authentique loin des sentiers battus.",
  bestPeriods: [
    {
      months: "Mai – Oct",
      label: "Saison sèche",
      color: "#22c55e",
      description: "Temps le plus clément sur la côte, idéal pour la randonnée et la plongée",
      icon: "☀️",
    },
    {
      months: "Nov – Avr",
      label: "Saison des pluies",
      color: "#f59e0b",
      description: "Pluies fréquentes et fortes, mais festivals culturels en août (Goroka Show)",
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "port_moresby",
      name: "Port Moresby",
      region: "Côte sud",
      data: [
        { month: "Jan", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 160, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Avr", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 60, icon: "⛅" },
        { month: "Jun", temp: 24, rain: 30, icon: "☀️" },
        { month: "Jul", temp: 23, rain: 20, icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 25, icon: "☀️" },
        { month: "Sep", temp: 26, rain: 30, icon: "☀️" },
        { month: "Oct", temp: 27, rain: 50, icon: "⛅" },
        { month: "Nov", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 130, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Hauts Plateaux — Pays Huli",
      region: "Highlands du Sud",
      description:
        "Le territoire des Huli Wigmen est l'une des expériences culturelles les plus saisissantes de Papouasie. Ces guerriers portent des perruques faites de leurs propres cheveux, ornées de plumes d'oiseau de paradis et de fleurs. La région de Tari offre une fenêtre unique sur des traditions millénaires encore vivantes, avec des chefferies et des cérémonies sing-sing spectaculaires.",
      wikipedia: "Huli_people",
      tags: ["Culture", "Highlands", "Ethnique", "Aventure"],
      mustSee: [
        { name: "Guerriers Huli Wigmen — perruques rituelles et parures traditionnelles", wikipedia: "Huli_people" },
        { name: "Marché de Tari — échanges locaux et artisanat des highlands", wikipedia: "File:Huli huli (8084262832).jpg" },
        { name: "Festival Sing-Sing de Goroka — rassemblement de 100+ tribus en août", wikipedia: "File:Goroka Show - Lastra.jpg" },
        { name: "Mt. Hagen Cultural Show — danses et costumes traditionnels", wikipedia: "File:(Mount_Hagen_cultural_show_in_Papua_New_Guinea)_-_DPLA_-_7857cec288cce6e6407b34026296b200.jpg" },
      ],
    },
    {
      id: 2,
      name: "Fleuve Sepik",
      region: "Province du Sepik Est",
      description:
        "Le Sepik est l'un des grands fleuves de Mélanésie et un haut lieu de l'art tribal mondial. Les villages installés le long de ses berges produisent depuis des siècles des sculptures, masques cérémoniels et maisons des esprits (haus tambaran) d'une puissance artistique extraordinaire. Naviguer sur le Sepik en pirogue et visiter les villages est une expérience hors du temps.",
      wikipedia: "File:Sepik_0057.jpg",
      tags: ["Art tribal", "Nature", "Fleuve", "Culturel"],
      mustSee: [
        { name: "Haus Tambaran d'Angoram — maison des esprits ancestrale de 20 m de haut", wikipedia: "Spirit_house" },
        { name: "Village de Palimbei — sculpture sur bois et crocodiles sacrés", wikipedia: "File:Milwaukee_Public_Museum_November_2022_141_(Oceania--Sepik_River_Art,_New_Guinea).jpg" },
        { name: "Lac Chambri — pêche traditionnelle et poterie des femmes", wikipedia: "File:Chambri_Lake.jpg" },
      ],
    },
    {
      id: 3,
      name: "Kokoda Track",
      region: "Province Centrale & Oro",
      description:
        "La piste de Kokoda est un trek historique et physiquement exigeant de 96 km à travers la jungle montagneuse de Papouasie. Elle commémore la Campagne de Nouvelle-Guinée de 1942, où des soldats australiens et papouans ont repoussé l'avancée japonaise dans des conditions extrêmes. Ce chemin est aujourd'hui un pèlerinage pour les Australiens et une expérience de randonnée intense.",
      wikipedia: "File:Kokoda_track_Papua_New_Guinea.JPG",
      tags: ["Histoire WWII", "Trek", "Aventure", "Mémorial"],
      mustSee: [
        { name: "Isurava Memorial — monument aux soldats morts lors de la bataille de 1942", wikipedia: "File:Plaques_on_the_Kokoda_Track_Memorial_Walk,_Kings_Park,_Western_Australia,_January_2021_01.jpg" },
        { name: "Cols d'altitude — paysages de forêt nuageuse et vues panoramiques", wikipedia: "File:Bush_Walk_Kokoda_044.jpg" },
        { name: "Brigade Papuan Infantry — hommage aux porteurs papouans 'Fuzzy Wuzzy Angels'", wikipedia: "Fuzzy_Wuzzy_Angels" },
      ],
    },
    
  ],
  costOfLiving: {
    intro:
      "La Papouasie-Nouvelle-Guinée est une destination relativement coûteuse pour les voyageurs indépendants, surtout comparée aux autres pays d'Asie du Pacifique. Les transports intérieurs (vols domestiques, bateaux) représentent le poste de dépense le plus important. L'hébergement de qualité reste cher, mais les marchés locaux et les cuisines de rue offrent de la nourriture bon marché.",
    currency: "PGK",
    exchangeRate: "1€ ≈ 4,0 PGK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse / guesthouse basique", price: "30–50 €" },
          { label: "Hôtel de confort moyen", price: "60–100 €" },
          { label: "Resort haut de gamme", price: "150–300 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Marché local et street food", price: "3–6 €" },
          { label: "Restaurant simple", price: "8–15 €" },
          { label: "Restaurant touristique", price: "20–40 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "PMV (minibus local) en ville", price: "0,50–1 €" },
          { label: "Vol domestique Port Moresby–Goroka", price: "60–120 €" },
          { label: "Taxi en ville (trajet court)", price: "5–15 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Trek Kokoda (guide + porteurs, 10 jours)", price: "600–900 €" },
          { label: "Plongée sous-marine (1 baptême / sortie)", price: "50–80 €" },
          { label: "Visite village culturel avec guide", price: "20–50 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "60–90 €/j",
        desc: "Guesthouses basiques, marchés locaux, transports en PMV",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "130–200 €/j",
        desc: "Hôtels corrects, restaurants, visites guidées et vols domestiques",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Port Moresby → Goroka → Tari (Huli) → Madang → retour",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Port Moresby", amount: "900–1 200 €" },
            { label: "Hébergement (12 nuits)", amount: "360–540 €" },
            { label: "Vols domestiques", amount: "150–250 €" },
            { label: "Nourriture + boissons", amount: "180–250 €" },
            { label: "Activités et guides", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 200 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Port Moresby", amount: "1 200–1 600 €" },
            { label: "Hébergement (12 nuits)", amount: "720–1 200 €" },
            { label: "Vols domestiques + transfers", amount: "300–400 €" },
            { label: "Nourriture + boissons", amount: "350–500 €" },
            { label: "Activités et guides", amount: "400–600 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "20–28h avec 2 escales (via Singapour, Sydney ou Hong Kong)" },
    { icon: "🪪", label: "Visa", value: "Visa à l'arrivée pour les ressortissants français (60 jours, PGK 100 soit ~25 €) ou e-Visa en ligne" },
    { icon: "💰", label: "Monnaie", value: "Kina papouan (PGK). Espèces recommandées hors Port Moresby" },
    { icon: "🗣️", label: "Langue", value: "Tok Pisin et anglais compris par la plupart ; 800+ langues locales" },
    { icon: "🔌", label: "Prise électrique", value: "Type I (comme en Australie), 240V — adaptateur nécessaire" },
    { icon: "💊", label: "Santé", value: "Vaccins recommandés : fièvre typhoïde, hépatites A et B, rage. Paludisme : prophylaxie indispensable dans toutes les régions" },
    { icon: "🦟", label: "Sécurité", value: "Vigilance accrue à Port Moresby (criminalité). En brousse, préférer un guide local expérimenté" },
    { icon: "📡", label: "Connectivité", value: "Couverture mobile limitée hors des villes. Cartes SIM Digicel disponibles à Port Moresby" },
  ],
};
