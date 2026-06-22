export const NETHERLANDS = {
  code: "NLD",
  numericId: 528,
  name: "Pays-Bas",
  emoji: "🇳🇱",
  capital: "Amsterdam",
  language: "Néerlandais",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 80,
    budgetMid: 150,
    tripMin: 1050,
    tripMid: 2100,
  },
  description:
    "Les Pays-Bas sont une destination surprenante de diversité malgré leur petite taille, alliant une capitale cosmopolite et bohème à des tulipiers à perte de vue, des moulins à vent iconiques et des villes historiques médiévales. Amsterdam, avec ses canaux du XVIIe siècle, ses musées de rang mondial et son architecture unique, est l'une des villes les plus visitées d'Europe. La culture du vélo, l'hospitalité chaleureuse et la liberté d'esprit hollandaise en font une destination attachante et accessible.",
  bestPeriods: [
    {
      months: "Avr – Mai",
      label: "Tulipes & printemps",
      color: "#22c55e",
      description:
        "Les champs de tulipes sont en fleurs, Keukenhof est ouvert. Temps frais mais ensoleillé par belles journées.",
      icon: "🌷",
    },
    {
      months: "Jun – Aoû",
      label: "Été",
      color: "#22c55e",
      description:
        "Températures douces, terrasses animées, festivals de plein air. Meilleure période pour les excursions à vélo.",
      icon: "☀️",
    },
    {
      months: "Sep – Oct",
      label: "Automne",
      color: "#f59e0b",
      description:
        "Moins de touristes, lumière dorée sur les canaux, prix plus bas. Quelques risques de pluie.",
      icon: "🍂",
    },
    {
      months: "Nov – Mar",
      label: "Hiver",
      color: "#94a3b8",
      description:
        "Froid et pluvieux, mais ambiance chaleureuse dans les cafés-bruns. Marchés de Noël et patinoires.",
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "amsterdam",
      name: "Amsterdam",
      region: "Hollande-Septentrionale — climat océanique, assez pluvieux",
      data: [
        { month: "Jan", temp: 4, rain: 75, icon: "❄️" },
        { month: "Fév", temp: 4, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 7, rain: 65, icon: "❄️" },
        { month: "Avr", temp: 11, rain: 55, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 65, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 75, icon: "☀️" },
        { month: "Jul", temp: 19, rain: 85, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 90, icon: "☀️" },
        { month: "Sep", temp: 16, rain: 85, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 90, icon: "⛅" },
        { month: "Nov", temp: 8, rain: 85, icon: "⛅" },
        { month: "Déc", temp: 5, rain: 80, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Amsterdam",
      region: "Hollande-Septentrionale",
      description:
        "Amsterdam est une capitale unique en son genre, construite sur un réseau de 165 canaux bordés de maisons à pignons typiques du Siècle d'Or hollandais. Les musées Van Gogh, Rijksmuseum et Anne Frank font partie des plus visités du monde, mais la ville séduit surtout par son atmosphère de liberté, ses marchés aux puces et ses innombrables cafés-bruns. Se déplacer à vélo comme les 900 000 habitants est la meilleure façon de s'immerger dans la culture locale.",
      wikipedia: "Amsterdam",
      tags: ["Culture", "Musées", "Canaux", "Vélo", "Art"],
      mustSee: [
        {
          name: "Rijksmuseum — chef-d'œuvre de Rembrandt, Vermeer et Hals",
          wikipedia: "Rijksmuseum",
        },
        {
          name: "Musée Van Gogh — plus grande collection de l'artiste au monde",
          wikipedia: "File:VanGogh-starry night ballance1.jpg",
        },
        {
          name: "Maison d'Anne Frank — demeure où se cacha la jeune fille juive pendant la guerre",
          wikipedia: "Anne_Frank_House",
        },
        {
          name: "Ceinture de canaux du XVIIe siècle — classée au patrimoine mondial UNESCO",
          wikipedia: "File:Achterwehrer Schifffahrtskanal 1.JPG",
        },
      ],
    },
    {
      id: 2,
      name: "Keukenhof & Champs de tulipes",
      region: "Hollande-Méridionale",
      description:
        "Le Keukenhof, ouvert uniquement de mi-mars à mi-mai, est le plus grand jardin de fleurs du monde avec ses 7 millions de bulbes en fleurs sur 32 hectares. Alentour, les champs de tulipes multicolores s'étirent à perte de vue entre Lisse et Haarlem, créant un spectacle unique au monde. Louer un vélo pour sillonner ces paysages floraux est une expérience inoubliable et peu coûteuse.",
      wikipedia: "Keukenhof",
      tags: ["Nature", "Tulipes", "Vélo", "Printemps", "Photographie"],
      mustSee: [
        {
          name: "Keukenhof — 800 variétés de tulipes, narcisses et jacinthes en fleurs",
          wikipedia: "Keukenhof",
        },
        {
          name: "Haarlem — élégante ville historique avec superbe cathédrale et Frans Hals Museum",
          wikipedia: "Haarlem",
        },
        {
          name: "Aalsmeer — plus grand marché aux fleurs du monde (visite le matin)",
          wikipedia: "File:Aalsmeer Flower Auction Distribution (13013825874).jpg",
        },
      ],
    },
    {
      id: 3,
      name: "La Haye, Delft & Rotterdam",
      region: "Hollande-Méridionale",
      description:
        "Ces trois villes de Hollande-Méridionale offrent trois visages contrastés des Pays-Bas. La Haye est la ville des institutions internationales et du Mauritshuis (La Jeune Fille à la Perle). Delft, avec ses canaux miniatures et sa faïence bleue légendaire, est figée dans une sérénité XVIIe siècle. Rotterdam, détruite en 1940 et reconstruite, est devenue l'une des villes d'architecture contemporaine les plus audacieuses d'Europe.",
      wikipedia: "File:00 0781 Canal in Delft (NL).jpg",
      tags: ["Histoire", "Architecture", "Art", "Gastronomie", "Design"],
      mustSee: [
        {
          name: "Mauritshuis à La Haye ",
          wikipedia: "File:Mauritshuis - Den Haag-1780.jpg",
        },
        {
          name: "Vieille-Ville de Delft et fabrique de faïence royale",
          wikipedia: "File:Delft 21 April 2013 07.jpg",
        },
        {
          name: "Markthal de Rotterdam — halle couverte avec fresque géante et restaurants",
          wikipedia: "File:Markthal-Rotterdam.jpg",
        },
        {
          name: "Maisons cubes de Rotterdam (Kubuswoning) — icônes du design néerlandais",
          wikipedia: "File:Rotterdam Cube House street view.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Kinderdijk & Zaanse Schans",
      region: "Hollande-Méridionale / Hollande-Septentrionale",
      description:
        "Kinderdijk abrite le plus grand ensemble de moulins à vent préservés du monde, alignant 19 moulins le long des polders du XVIIIe siècle, classés au patrimoine de l'UNESCO. Zaanse Schans, à quelques kilomètres d'Amsterdam, est un village-musée vivant où moulins à vent en activité, fromageries et saboteries reconstituent la vie hollandaise d'antan. Ces deux sites condensent l'essence de l'identité néerlandaise dans des paysages iconiques.",
      wikipedia: "Kinderdijk",
      tags: ["Patrimoine UNESCO", "Moulins", "Nature", "Traditions", "Paysage"],
      mustSee: [
        {
          name: "Kinderdijk — 19 moulins à vent alignés sur les polders, classés UNESCO",
          wikipedia: "Kinderdijk",
        },
        {
          name: "Zaanse Schans — village-musée avec moulins, fromageries et saboteries",
          wikipedia: "Zaanse_Schans",
        },
        {
          name: "Giethoorn — village lacustre surnommé la Venise des Pays-Bas",
          wikipedia: "Giethoorn",
        },
        {
          name: "Alkmaar — célèbre marché aux fromages chaque vendredi matin",
          wikipedia: "Alkmaar",
        },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Les Pays-Bas sont légèrement plus chers que la moyenne de l'Europe de l'Ouest. Amsterdam en particulier a connu une forte hausse des prix ces dernières années. Cependant, se déplacer à vélo et manger dans les marchés ou supermarchés permet de contrôler son budget.",
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
            price: "28–45 €",
            detail: "Amsterdam est l'une des plus chères pour les auberges",
          },
          {
            label: "Hôtel 2–3 étoiles",
            price: "80–140 €",
            detail: "Chambre double, moins cher hors du centre d'Amsterdam",
          },
          {
            label: "Hôtel de canal (boutique)",
            price: "140–250 €",
            detail: "Hôtels dans les maisons historiques avec vue sur les canaux",
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          {
            label: "Stroopwafel, haaring, frites de rue",
            price: "3–8 €",
            detail: "Street food hollandais typique et abordable",
          },
          {
            label: "Déjeuner restaurant / broodje",
            price: "10–16 €",
            detail: "Sandwichs hollandais (broodjes) ou plat du jour",
          },
          {
            label: "Dîner restaurant",
            price: "22–40 €",
            detail: "Cuisine internationale très développée à Amsterdam",
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          {
            label: "OV-chipkaart (tram/bus/métro Amsterdam)",
            price: "2,50–3,50 €",
            detail: "Pass journée à 9 €, très pratique",
          },
          {
            label: "Location de vélo (journée)",
            price: "12–18 €",
            detail: "Meilleur moyen de transport aux Pays-Bas",
          },
          {
            label: "Train Amsterdam–Rotterdam ou La Haye",
            price: "12–20 €",
            detail: "En 40–50 min, trains très fréquents",
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          {
            label: "Rijksmuseum ou Van Gogh Museum",
            price: "20–22 €",
            detail: "Réservation en ligne obligatoire pour Van Gogh Museum",
          },
          {
            label: "Maison d'Anne Frank",
            price: "16 €",
            detail: "Réservation indispensable longtemps à l'avance",
          },
          {
            label: "Keukenhof (mai uniquement)",
            price: "22 €",
            detail: "Inclut les jardins, pas de navette depuis Amsterdam",
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "70–90 €/j",
        desc: "Auberge, street food et supermarché, vélo loué, musée par jour",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "140–200 €/j",
        desc: "Hôtel 3 étoiles, restaurants midi et soir, musées et activités",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "7 jours",
      route: "Amsterdam (4j) → Keukenhof/Haarlem (1j) → La Haye & Delft (1j) → Rotterdam (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 050 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Amsterdam", amount: "80–150 €" },
            { label: "Hébergement (6 nuits)", amount: "200–280 €" },
            { label: "Transports locaux + trains", amount: "100–130 €" },
            { label: "Nourriture + boissons", amount: "380–460 €" },
            { label: "Activités + musées", amount: "100–140 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 100 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Amsterdam", amount: "100–180 €" },
            { label: "Hébergement (6 nuits)", amount: "750–1 000 €" },
            { label: "Transports locaux + trains", amount: "150–200 €" },
            { label: "Nourriture + boissons", amount: "750–1 000 €" },
            { label: "Activités + musées", amount: "200–280 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: "Vol depuis Paris",
      value: "Paris–Amsterdam : 1h15 de vol. Aussi accessible en Thalys/Eurostar en 3h20 depuis Paris-Nord.",
    },
    {
      icon: "🪪",
      label: "Visa",
      value: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.",
    },
    {
      icon: "💰",
      label: "Monnaie",
      value: "Euro (€). CB acceptée presque partout, mais certains petits commerces sont cash only.",
    },
    {
      icon: "🗣️",
      label: "Langue",
      value: "Néerlandais. L'anglais est parlé couramment par pratiquement toute la population, l'un des meilleurs taux d'Europe.",
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
      label: "Vélo",
      value: "Le vélo est ROI aux Pays-Bas. Louer un vélo est indispensable et rend de nombreux sites accessibles sans train.",
    },
    {
      icon: "🌧️",
      label: "Météo",
      value: "Prévoir un imperméable léger en toute saison. Les averses sont brèves mais fréquentes. Le vent est souvent présent.",
    },
  ],
};
