export const NETHERLANDS = {
  code: "NLD",
  numericId: 528,
  name: { fr: "Pays-Bas", en: "Netherlands" },
  emoji: "🇳🇱",
  capital: { fr: "Amsterdam", en: "Amsterdam" },
  language: { fr: "Néerlandais", en: "Dutch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 80,
    budgetMid: 150,
    tripMin: 1050,
    tripMid: 2100,
  },
  description: {
    fr: "Les Pays-Bas sont une destination surprenante de diversité malgré leur petite taille, alliant une capitale cosmopolite et bohème à des tulipiers à perte de vue, des moulins à vent iconiques et des villes historiques médiévales. Amsterdam, avec ses canaux du XVIIe siècle, ses musées de rang mondial et son architecture unique, est l'une des villes les plus visitées d'Europe. La culture du vélo, l'hospitalité chaleureuse et la liberté d'esprit hollandaise en font une destination attachante et accessible.",
    en: "The Netherlands is a surprisingly diverse destination despite its small size, combining a cosmopolitan, bohemian capital with tulip fields as far as the eye can see, iconic windmills and medieval historic towns. Amsterdam, with its 17th-century canals, world-class museums and unique architecture, is one of the most visited cities in Europe. Bike culture, warm hospitality and the Dutch free spirit make it an endearing and accessible destination.",
  },
  bestPeriods: [
    {
      months: { fr: "Avr – Mai", en: "Apr – May" },
      label: { fr: "Tulipes & printemps", en: "Tulips & spring" },
      color: "#22c55e",
      description: {
        fr: "Les champs de tulipes sont en fleurs, Keukenhof est ouvert. Temps frais mais ensoleillé par belles journées.",
        en: "Tulip fields are in bloom, Keukenhof is open. Cool but sunny on fine days.",
      },
      icon: "🌷",
    },
    {
      months: { fr: "Jun – Aoû", en: "Jun – Aug" },
      label: { fr: "Été", en: "Summer" },
      color: "#22c55e",
      description: {
        fr: "Températures douces, terrasses animées, festivals de plein air. Meilleure période pour les excursions à vélo.",
        en: "Mild temperatures, lively terraces, outdoor festivals. Best period for bike trips.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Sep – Oct", en: "Sep – Oct" },
      label: { fr: "Automne", en: "Autumn" },
      color: "#f59e0b",
      description: {
        fr: "Moins de touristes, lumière dorée sur les canaux, prix plus bas. Quelques risques de pluie.",
        en: "Fewer tourists, golden light over the canals, lower prices. Some chance of rain.",
      },
      icon: "🍂",
    },
    {
      months: { fr: "Nov – Mar", en: "Nov – Mar" },
      label: { fr: "Hiver", en: "Winter" },
      color: "#94a3b8",
      description: {
        fr: "Froid et pluvieux, mais ambiance chaleureuse dans les cafés-bruns. Marchés de Noël et patinoires.",
        en: "Cold and rainy, but a cosy atmosphere in the brown cafés. Christmas markets and ice rinks.",
      },
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "amsterdam",
      name: "Amsterdam",
      region: { fr: "Hollande-Septentrionale — climat océanique, assez pluvieux", en: "North Holland — oceanic climate, fairly rainy" },
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
      region: { fr: "Hollande-Septentrionale", en: "North Holland" },
      description: {
        fr: "Amsterdam est une capitale unique en son genre, construite sur un réseau de 165 canaux bordés de maisons à pignons typiques du Siècle d'Or hollandais. Les musées Van Gogh, Rijksmuseum et Anne Frank font partie des plus visités du monde, mais la ville séduit surtout par son atmosphère de liberté, ses marchés aux puces et ses innombrables cafés-bruns. Se déplacer à vélo comme les 900 000 habitants est la meilleure façon de s'immerger dans la culture locale.",
        en: "Amsterdam is a one-of-a-kind capital, built on a network of 165 canals lined with gabled houses typical of the Dutch Golden Age. The Van Gogh Museum, the Rijksmuseum and the Anne Frank House are among the most visited in the world, but the city charms above all through its atmosphere of freedom, its flea markets and its countless brown cafés. Getting around by bike like its 900,000 residents is the best way to soak up the local culture.",
      },
      wikipedia: "Amsterdam",
      tags: ["Culture", "Musées", "Canaux", "Vélo", "Art"],
      mustSee: [
        {
          name: { fr: "Rijksmuseum — chef-d'œuvre de Rembrandt, Vermeer et Hals", en: "Rijksmuseum — masterpieces by Rembrandt, Vermeer and Hals" },
          wikipedia: "Rijksmuseum",
        },
        {
          name: { fr: "Musée Van Gogh — plus grande collection de l'artiste au monde", en: "Van Gogh Museum — the largest collection of the artist's work in the world" },
          wikipedia: "File:VanGogh-starry night ballance1.jpg",
        },
        {
          name: { fr: "Maison d'Anne Frank — demeure où se cacha la jeune fille juive pendant la guerre", en: "Anne Frank House — the home where the young Jewish girl hid during the war" },
          wikipedia: "Anne_Frank_House",
        },
        {
          name: { fr: "Ceinture de canaux du XVIIe siècle — classée au patrimoine mondial UNESCO", en: "17th-century canal ring — UNESCO World Heritage Site" },
          wikipedia: "File:Achterwehrer Schifffahrtskanal 1.JPG",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Keukenhof & Champs de tulipes", en: "Keukenhof & Tulip Fields" },
      region: { fr: "Hollande-Méridionale", en: "South Holland" },
      description: {
        fr: "Le Keukenhof, ouvert uniquement de mi-mars à mi-mai, est le plus grand jardin de fleurs du monde avec ses 7 millions de bulbes en fleurs sur 32 hectares. Alentour, les champs de tulipes multicolores s'étirent à perte de vue entre Lisse et Haarlem, créant un spectacle unique au monde. Louer un vélo pour sillonner ces paysages floraux est une expérience inoubliable et peu coûteuse.",
        en: "Keukenhof, open only from mid-March to mid-May, is the world's largest flower garden with 7 million bulbs in bloom across 32 hectares. Around it, multicoloured tulip fields stretch as far as the eye can see between Lisse and Haarlem, creating a spectacle unlike anywhere else. Renting a bike to explore these floral landscapes is an unforgettable and inexpensive experience.",
      },
      wikipedia: "Keukenhof",
      tags: ["Nature", "Tulipes", "Vélo", "Printemps", "Photographie"],
      mustSee: [
        {
          name: { fr: "Keukenhof — 800 variétés de tulipes, narcisses et jacinthes en fleurs", en: "Keukenhof — 800 varieties of tulips, daffodils and hyacinths in bloom" },
          wikipedia: "Keukenhof",
        },
        {
          name: { fr: "Haarlem — élégante ville historique avec superbe cathédrale et Frans Hals Museum", en: "Haarlem — elegant historic town with a superb cathedral and the Frans Hals Museum" },
          wikipedia: "Haarlem",
        },
        {
          name: { fr: "Aalsmeer — plus grand marché aux fleurs du monde (visite le matin)", en: "Aalsmeer — the world's largest flower auction (visit in the morning)" },
          wikipedia: "File:Aalsmeer Flower Auction Distribution (13013825874).jpg",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "La Haye, Delft & Rotterdam", en: "The Hague, Delft & Rotterdam" },
      region: { fr: "Hollande-Méridionale", en: "South Holland" },
      description: {
        fr: "Ces trois villes de Hollande-Méridionale offrent trois visages contrastés des Pays-Bas. La Haye est la ville des institutions internationales et du Mauritshuis (La Jeune Fille à la Perle). Delft, avec ses canaux miniatures et sa faïence bleue légendaire, est figée dans une sérénité XVIIe siècle. Rotterdam, détruite en 1940 et reconstruite, est devenue l'une des villes d'architecture contemporaine les plus audacieuses d'Europe.",
        en: "These three cities in South Holland offer three contrasting faces of the Netherlands. The Hague is the city of international institutions and the Mauritshuis (Girl with a Pearl Earring). Delft, with its miniature canals and legendary blue pottery, feels frozen in 17th-century serenity. Rotterdam, destroyed in 1940 and rebuilt, has become one of Europe's boldest cities for contemporary architecture.",
      },
      wikipedia: "File:00 0781 Canal in Delft (NL).jpg",
      tags: ["Histoire", "Architecture", "Art", "Gastronomie", "Design"],
      mustSee: [
        {
          name: { fr: "Mauritshuis à La Haye", en: "Mauritshuis in The Hague" },
          wikipedia: "File:Mauritshuis - Den Haag-1780.jpg",
        },
        {
          name: { fr: "Vieille-Ville de Delft et fabrique de faïence royale", en: "Delft old town and the Royal Delft pottery factory" },
          wikipedia: "File:Delft 21 April 2013 07.jpg",
        },
        {
          name: { fr: "Markthal de Rotterdam — halle couverte avec fresque géante et restaurants", en: "Rotterdam Markthal — covered market hall with a giant mural and restaurants" },
          wikipedia: "File:Markthal-Rotterdam.jpg",
        },
        {
          name: { fr: "Maisons cubes de Rotterdam (Kubuswoning) — icônes du design néerlandais", en: "Rotterdam cube houses (Kubuswoning) — icons of Dutch design" },
          wikipedia: "File:Rotterdam Cube House street view.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Kinderdijk & Zaanse Schans",
      region: { fr: "Hollande-Méridionale / Hollande-Septentrionale", en: "South Holland / North Holland" },
      description: {
        fr: "Kinderdijk abrite le plus grand ensemble de moulins à vent préservés du monde, alignant 19 moulins le long des polders du XVIIIe siècle, classés au patrimoine de l'UNESCO. Zaanse Schans, à quelques kilomètres d'Amsterdam, est un village-musée vivant où moulins à vent en activité, fromageries et saboteries reconstituent la vie hollandaise d'antan. Ces deux sites condensent l'essence de l'identité néerlandaise dans des paysages iconiques.",
        en: "Kinderdijk is home to the largest preserved group of windmills in the world, with 19 windmills lined up along 18th-century polders, a UNESCO World Heritage site. Zaanse Schans, a few kilometres from Amsterdam, is a living open-air museum village where working windmills, cheese farms and clog workshops recreate Dutch life of old. Together, these two sites capture the essence of Dutch identity in iconic landscapes.",
      },
      wikipedia: "Kinderdijk",
      tags: ["UNESCO", "Moulins", "Nature", "Traditions", "Paysage"],
      mustSee: [
        {
          name: { fr: "Kinderdijk — 19 moulins à vent alignés sur les polders, classés UNESCO", en: "Kinderdijk — 19 windmills lined up on the polders, UNESCO-listed" },
          wikipedia: "Kinderdijk",
        },
        {
          name: { fr: "Zaanse Schans — village-musée avec moulins, fromageries et saboteries", en: "Zaanse Schans — open-air museum village with windmills, cheese farms and clog workshops" },
          wikipedia: "Zaanse_Schans",
        },
        {
          name: { fr: "Giethoorn — village lacustre surnommé la Venise des Pays-Bas", en: "Giethoorn — lakeside village nicknamed the Venice of the Netherlands" },
          wikipedia: "Giethoorn",
        },
        {
          name: { fr: "Alkmaar — célèbre marché aux fromages chaque vendredi matin", en: "Alkmaar — famous cheese market every Friday morning" },
          wikipedia: "Alkmaar",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Les Pays-Bas sont légèrement plus chers que la moyenne de l'Europe de l'Ouest. Amsterdam en particulier a connu une forte hausse des prix ces dernières années. Cependant, se déplacer à vélo et manger dans les marchés ou supermarchés permet de contrôler son budget.",
      en: "The Netherlands is slightly more expensive than the Western European average. Amsterdam in particular has seen a sharp rise in prices in recent years. However, getting around by bike and eating at markets or supermarkets helps keep the budget under control.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          {
            label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)" },
            price: "28–45 €",
            detail: { fr: "Amsterdam est l'une des plus chères pour les auberges", en: "Amsterdam is among the most expensive for hostels" },
          },
          {
            label: { fr: "Hôtel 2–3 étoiles", en: "2–3 star hotel" },
            price: "80–140 €",
            detail: { fr: "Chambre double, moins cher hors du centre d'Amsterdam", en: "Double room, cheaper outside Amsterdam's centre" },
          },
          {
            label: { fr: "Hôtel de canal (boutique)", en: "Canal-house hotel (boutique)" },
            price: "140–250 €",
            detail: { fr: "Hôtels dans les maisons historiques avec vue sur les canaux", en: "Hotels in historic houses with canal views" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          {
            label: { fr: "Stroopwafel, haaring, frites de rue", en: "Stroopwafel, haaring, street fries" },
            price: "3–8 €",
            detail: { fr: "Street food hollandais typique et abordable", en: "Typical, affordable Dutch street food" },
          },
          {
            label: { fr: "Déjeuner restaurant / broodje", en: "Restaurant lunch / broodje" },
            price: "12–20 €",
            detail: { fr: "Sandwichs hollandais (broodjes) ou plat du jour", en: "Dutch sandwiches (broodjes) or dish of the day" },
          },
          {
            label: { fr: "Dîner restaurant", en: "Restaurant dinner" },
            price: "25–45 €",
            detail: { fr: "Cuisine internationale très développée à Amsterdam", en: "Highly developed international cuisine scene in Amsterdam" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          {
            label: { fr: "OV-chipkaart (tram/bus/métro Amsterdam)", en: "OV-chipkaart (tram/bus/metro Amsterdam)" },
            price: "2,50–3,50 €",
            detail: { fr: "Pass journée à 9 €, très pratique", en: "Day pass for 9 €, very handy" },
          },
          {
            label: { fr: "Location de vélo (journée)", en: "Bike rental (day)" },
            price: "12–18 €",
            detail: { fr: "Meilleur moyen de transport aux Pays-Bas", en: "The best way to get around the Netherlands" },
          },
          {
            label: { fr: "Train Amsterdam–Rotterdam ou La Haye", en: "Train Amsterdam–Rotterdam or The Hague" },
            price: "12–20 €",
            detail: { fr: "En 40–50 min, trains très fréquents", en: "40–50 min, very frequent trains" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          {
            label: { fr: "Rijksmuseum ou Van Gogh Museum", en: "Rijksmuseum or Van Gogh Museum" },
            price: "22–27 €",
            detail: { fr: "Réservation en ligne obligatoire pour Van Gogh Museum", en: "Online booking mandatory for the Van Gogh Museum" },
          },
          {
            label: { fr: "Maison d'Anne Frank", en: "Anne Frank House" },
            price: "16 €",
            detail: { fr: "Réservation indispensable longtemps à l'avance", en: "Booking essential well in advance" },
          },
          {
            label: { fr: "Keukenhof (mai uniquement)", en: "Keukenhof (May only)" },
            price: "22 €",
            detail: { fr: "Inclut les jardins, pas de navette depuis Amsterdam", en: "Includes the gardens, no shuttle from Amsterdam" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "80–105 €/j",
        desc: { fr: "Auberge, street food et supermarché, vélo loué, musée par jour", en: "Hostel, street food and supermarket, rented bike, one museum a day" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "140–200 €/j",
        desc: { fr: "Hôtel 3 étoiles, restaurants midi et soir, musées et activités", en: "3-star hotel, lunch and dinner restaurants, museums and activities" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days" },
      route: { fr: "Amsterdam (4j) → Keukenhof/Haarlem (1j) → La Haye & Delft (1j) → Rotterdam (1j)", en: "Amsterdam (4d) → Keukenhof/Haarlem (1d) → The Hague & Delft (1d) → Rotterdam (1d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 050 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Amsterdam", en: "Return flight Paris–Amsterdam" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)" }, amount: "200–280 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains" }, amount: "100–130 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "410–490 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "110–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 100 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Amsterdam", en: "Return flight Paris–Amsterdam" }, amount: "100–180 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)" }, amount: "750–1 000 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains" }, amount: "150–200 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "750–1 000 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "200–280 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris" },
      value: { fr: "Paris–Amsterdam : 1h15 de vol. Aussi accessible en Thalys/Eurostar en 3h20 depuis Paris-Nord.", en: "Paris–Amsterdam: 1h15 flight. Also reachable by Thalys/Eurostar in 3h20 from Paris-Nord." },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa" },
      value: { fr: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.", en: "No visa required for EU/Schengen citizens. ID card is sufficient." },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency" },
      value: { fr: "Euro (€). CB acceptée presque partout, mais certains petits commerces sont cash only.", en: "Euro (€). Cards accepted almost everywhere, but some small shops are cash only." },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language" },
      value: { fr: "Néerlandais. L'anglais est parlé couramment par pratiquement toute la population, l'un des meilleurs taux d'Europe.", en: "Dutch. English is spoken fluently by nearly the entire population, one of the best rates in Europe." },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet" },
      value: { fr: "Type F (Schuko, 2 broches rondes). 230V / 50Hz. Compatible avec les prises françaises.", en: "Type F (Schuko, 2 round pins). 230V / 50Hz. Compatible with French plugs." },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health" },
      value: { fr: "Soins médicaux excellents. Carte Européenne d'Assurance Maladie valable pour les ressortissants UE.", en: "Excellent healthcare. European Health Insurance Card valid for EU nationals." },
    },
    {
      icon: "🚲",
      label: { fr: "Vélo", en: "Bike" },
      value: { fr: "Le vélo est ROI aux Pays-Bas. Louer un vélo est indispensable et rend de nombreux sites accessibles sans train.", en: "The bike is king in the Netherlands. Renting one is essential and makes many sites accessible without a train." },
    },
    {
      icon: "🌧️",
      label: { fr: "Météo", en: "Weather" },
      value: { fr: "Prévoir un imperméable léger en toute saison. Les averses sont brèves mais fréquentes. Le vent est souvent présent.", en: "Bring a light rain jacket in every season. Showers are brief but frequent. Wind is often present." },
    },
  ],
};
