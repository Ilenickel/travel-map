export const GERMANY = {
  code: "DEU",
  numericId: 276,
  name: "Allemagne",
  emoji: "🇩🇪",
  capital: "Berlin",
  language: "Allemand",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 70,
    budgetMid: 140,
    tripMin: 950,
    tripMid: 1900,
  },
  description:
    "L'Allemagne est un pays d'une grande diversité culturelle et paysagère, alliant métropoles dynamiques, forêts profondes, châteaux féeriques et villages médiévaux préservés. Berlin, capitale réunifiée, incarne à elle seule l'histoire tourmentée et le renouveau créatif du XXe siècle. La Bavière, avec ses Alpes imposantes, ses bières légendaires et son architecture baroque, offre un contraste saisissant avec le nord industriel et la vallée du Rhin.",
  bestPeriods: [
    {
      months: "Mai – Sep",
      label: "Idéal",
      color: "#22c55e",
      description:
        "Temps ensoleillé, jardins en fleurs, festivals de plein air et biergärten animés.",
      icon: "☀️",
    },
    {
      months: "Oct",
      label: "Oktoberfest",
      color: "#22c55e",
      description:
        "Munich accueille la célèbre fête de la bière, forêts aux couleurs automnales splendides.",
      icon: "🍺",
    },
    {
      months: "Nov – Mar",
      label: "Marchés de Noël",
      color: "#f59e0b",
      description:
        "Les marchés de Noël d'Allemagne sont parmi les plus beaux d'Europe, mais le froid est vif.",
      icon: "🎄",
    },
  ],
  weatherCities: [
    {
      id: "berlin",
      name: "Berlin",
      region: "Nord-Est — climat continental tempéré",
      data: [
        { month: "Jan", temp: 1, rain: 45, icon: "❄️" },
        { month: "Fév", temp: 2, rain: 40, icon: "❄️" },
        { month: "Mar", temp: 6, rain: 45, icon: "❄️" },
        { month: "Avr", temp: 11, rain: 40, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 55, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 65, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 55, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 60, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 45, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 40, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 45, icon: "❄️" },
        { month: "Déc", temp: 2, rain: 50, icon: "❄️" },
      ],
    },
    {
      id: "munich",
      name: "Munich",
      region: "Bavière — climat continental, été plus chaud",
      data: [
        { month: "Jan", temp: 0, rain: 55, icon: "❄️" },
        { month: "Fév", temp: 2, rain: 50, icon: "❄️" },
        { month: "Mar", temp: 7, rain: 60, icon: "❄️" },
        { month: "Avr", temp: 12, rain: 70, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 95, icon: "☀️" },
        { month: "Jun", temp: 20, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 22, rain: 115, icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 110, icon: "☀️" },
        { month: "Sep", temp: 18, rain: 85, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 65, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 60, icon: "❄️" },
        { month: "Déc", temp: 1, rain: 60, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Berlin",
      region: "Brandebourg",
      description:
        "Berlin est une ville en perpétuelle réinvention, marquée par les cicatrices de l'Histoire et animée d'une créativité artistique unique en Europe. Le vestige du Mur, le Reichstag, l'île aux Musées et le mémorial de l'Holocauste témoignent d'un passé dense et complexe. La capitale allemande est aussi réputée pour sa scène musicale underground, ses galeries d'art contemporain et sa vie nocturne légendaire.",
      wikipedia: "Berlin",
      tags: ["Histoire", "Culture", "Art", "Musées", "Vie nocturne", "Ville", "Architecture"],
      mustSee: [
        {
          name: "Mur de Berlin & Checkpoint Charlie — symboles de la Guerre froide",
          wikipedia: "Berlin_Wall",
        },
        {
          name: "Reichstag — siège du Parlement allemand avec dôme de verre panoramique",
          wikipedia: "Reichstag_building",
        },
        {
          name: "Île aux Musées — ensemble de 5 musées classé au patrimoine UNESCO",
          wikipedia: "Museum_Island",
        },
        {
          name: "Mémorial de l'Holocauste — installation sobre et puissante de 2 711 stèles",
          wikipedia: "Memorial_to_the_Murdered_Jews_of_Europe",
        },
      ],
    },
    {
      id: 2,
      name: "Bavière & Munich",
      region: "Bavière",
      description:
        "La Bavière est la région la plus touristique d'Allemagne, avec Munich comme capitale festive et culturelle. La Marienplatz et la Residenz témoignent de la splendeur des Wittelsbach, tandis que les Alpes bavaroises toutes proches offrent randonnées et stations de ski. Le château de Neuschwanstein, perché sur son rocher, est l'un des sites les plus visités d'Europe.",
      wikipedia: "File:Bavaria Statue and Ruhmeshalle Munich, April 2019 -01.jpg",
      tags: ["Culture", "Alpes", "Gastronomie", "Châteaux", "Oktoberfest", "Ski", "Ville"],
      mustSee: [
        {
          name: "Château de Neuschwanstein — château de conte de fées de Louis II de Bavière",
          wikipedia: "Neuschwanstein_Castle",
        },
        {
          name: "Marienplatz & Rathaus à Munich — cœur animé de la capitale bavaroise",
          wikipedia: "Marienplatz",
        },
        {
          name: "Englischer Garten — l'un des plus grands parcs urbains du monde",
          wikipedia: "File:Monopteros, Englischer Garten, Munich, 20251110 0835 6028.jpg",
        },
        {
          name: "Zugspitze — point culminant d'Allemagne à 2 962 m",
          wikipedia: "Zugspitze",
        },
      ],
    },
    {
      id: 3,
      name: "Vallée du Rhin Romantique",
      region: "Rhénanie-Palatinat",
      description:
        "Le Rhin romantique entre Bingen et Coblence offre l'un des paysages les plus pittoresques d'Europe, avec ses vignobles en terrasses, ses châteaux médiévaux perchés et ses villages aux maisons à colombages. La Loreley, rocher légendaire surplombant le fleuve, cristallise toute la poésie de cette région inscrite au patrimoine mondial de l'UNESCO. Une croisière fluviale permet d'apprécier ce panorama unique.",
      wikipedia: "Rhine_Gorge",
      tags: ["Nature", "Vin", "UNESCO", "Randonnée", "Croisière", "Architecture"],
      mustSee: [
        {
          name: "Rocher de la Loreley — site légendaire aux 130 m de hauteur sur le Rhin",
          wikipedia: "Lorelei",
        },
        {
          name: "Château de Rheinfels — imposante forteresse médiévale du XIIIe siècle",
          wikipedia: "Rheinfels_Castle",
        },
        {
          name: "Rüdesheim am Rhein — village viticole avec sa célèbre Drosselgasse",
          wikipedia: "Rüdesheim_am_Rhein",
        },
        {
          name: "Coblence & Deutsches Eck — confluent monumental du Rhin et de la Moselle",
          wikipedia: "Koblenz",
        },
      ],
    },
    {
      id: 4,
      name: "Forêt-Noire & Heidelberg",
      region: "Bade-Wurtemberg",
      description:
        "La Forêt-Noire est un massif forestier d'une beauté sauvage, parsemé de villages traditionnels aux toits de chaume, de cascades et de lacs glaciaires. Tout proche, Heidelberg est l'une des plus belles villes médiévales d'Allemagne, dominée par son château en ruines romantiques et traversée par la Neckar. Les gâteaux Schwarzwälder Kirschtorte et les horloges à coucou sont les emblèmes gastronomiques et artisanaux de la région.",
      wikipedia: "Black_Forest",
      tags: ["Nature", "Randonnée", "Histoire", "Gastronomie", "Vélo"],
      mustSee: [
        {
          name: "Château de Heidelberg — ruines romantiques dominant la ville et le Neckar",
          wikipedia: "Heidelberg_Castle",
        },
        {
          name: "Triberg — village des cascades et capitale des horloges à coucou",
          wikipedia: "Triberg_im_Schwarzwald",
        },
        {
          name: "Titisee — lac glaciaire au cœur de la Forêt-Noire",
          wikipedia: "Titisee",
        },
        {
          name: "Fribourg-en-Brisgau — ville universitaire avec sa magnifique cathédrale gothique",
          wikipedia: "Freiburg_im_Breisgau",
        },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "L'Allemagne offre un bon rapport qualité-prix pour l'Europe de l'Ouest. Berlin est l'une des capitales les moins chères d'Europe occidentale. Munich et Francfort sont plus onéreuses, mais restent abordables comparées à Paris ou Londres.",
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          {
            label: "Auberge de jeunesse (dortoir)",
            price: "20–35 €",
            detail: "Très développé dans toutes les grandes villes",
          },
          {
            label: "Hôtel 2–3 étoiles",
            price: "65–120 €",
            detail: "Chambre double, petit-déjeuner souvent inclus",
          },
          {
            label: "Hôtel 4 étoiles",
            price: "120–220 €",
            detail: "Plus cher à Munich et Francfort",
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          {
            label: "Bratwurst / kebab / bakery",
            price: "3–7 €",
            detail: "Street food très développé et de qualité",
          },
          {
            label: "Déjeuner au restaurant",
            price: "10–16 €",
            detail: "Plat du jour, souvent très copieux",
          },
          {
            label: "Dîner restaurant traditionnel",
            price: "18–35 €",
            detail: "Avec bière incluse dans les brasseries",
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          {
            label: "Ticket métro / bus (aller simple)",
            price: "2–3,50 €",
            detail: "Pass journée très avantageux (7–10 €)",
          },
          {
            label: "Train IC/ICE Berlin–Munich",
            price: "30–90 €",
            detail: "En 4h, tarif Sparpreis dès 17 € si réservé tôt",
          },
          {
            label: "FlixBus longue distance",
            price: "10–30 €",
            detail: "Alternative économique au train pour les longues distances",
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          {
            label: "Musée à Berlin (île aux Musées)",
            price: "12–19 €",
            detail: "Pass combiné disponible pour plusieurs musées",
          },
          {
            label: "Château de Neuschwanstein",
            price: "17 €",
            detail: "Réservation obligatoire en ligne en haute saison",
          },
          {
            label: "Tour guidé à vélo",
            price: "15–25 €",
            detail: "Berlin propose d'excellentes visites à vélo",
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "60–80 €/j",
        desc: "Auberge, street food et plats du jour, transports en commun",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "120–180 €/j",
        desc: "Hôtel 3 étoiles, restaurants mid-range, activités culturelles",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Berlin (4j) → Vallée du Rhin (2j) → Munich & Bavière (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "950 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Berlin", amount: "80–150 €" },
            { label: "Hébergement (9 nuits)", amount: "220–315 €" },
            { label: "Transports locaux + trains", amount: "130–180 €" },
            { label: "Nourriture + boissons", amount: "380–450 €" },
            { label: "Activités + musées", amount: "70–100 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 900 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Berlin", amount: "100–200 €" },
            { label: "Hébergement (9 nuits)", amount: "800–1 100 €" },
            { label: "Transports locaux + trains", amount: "200–280 €" },
            { label: "Nourriture + boissons", amount: "600–750 €" },
            { label: "Activités + musées", amount: "130–200 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: "Vol depuis Paris",
      value: "Paris–Berlin : 1h30 de vol. Nombreuses compagnies low-cost (easyJet, Transavia). Aussi accessible en train de nuit.",
    },
    {
      icon: "🪪",
      label: "Visa",
      value: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.",
    },
    {
      icon: "💰",
      label: "Monnaie",
      value: "Euro (€). Attention : de nombreux restaurants et commerces en Allemagne sont encore cash only.",
    },
    {
      icon: "🗣️",
      label: "Langue",
      value: "Allemand. Anglais très bien parlé dans les grandes villes et les zones touristiques.",
    },
    {
      icon: "🔌",
      label: "Prise électrique",
      value: "Type F (Schuko, 2 broches rondes). 230V / 50Hz. Compatible avec les prises françaises.",
    },
    {
      icon: "💊",
      label: "Santé",
      value: "Soins médicaux excellents. Carte Européenne d'Assurance Maladie valable pour les ressortissants UE.",
    },
    {
      icon: "🚲",
      label: "Mobilité",
      value: "Excellent réseau cyclable dans toutes les grandes villes. Transports en commun très ponctuels.",
    },
    {
      icon: "🏪",
      label: "Commerces",
      value: "Fermés le dimanche dans la quasi-totalité du pays. Planifier les courses en conséquence.",
    },
  ],
};
