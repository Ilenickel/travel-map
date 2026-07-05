export const MALTA = {
  code: "MLT",
  numericId: 470,
  name: { fr: "Malte", en: "Malta" },
  emoji: "🇲🇹",
  capital: { fr: "La Valette", en: "Valletta" },
  language: { fr: "Maltais, Anglais", en: "Maltese, English" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 60, budgetMid: 110,
    tripMin: 800, tripMid: 1600,
  },
  description: {
    fr: "Malte est un archipel méditerranéen de trois îles habitées (Malte, Gozo et Comino) dont l'histoire s'étend sur 7 000 ans. La Valette, plus petite capitale de l'UE et classée UNESCO, regorge d'églises baroques et de palais des Chevaliers de Saint-Jean. Les temples mégalithiques de Malte sont les plus anciennes structures autoportantes du monde, antérieures de 1 000 ans aux pyramides d'Égypte.",
    en: "Malta is a Mediterranean archipelago of three inhabited islands (Malta, Gozo and Comino) whose history spans 7,000 years. Valletta, the EU's smallest capital and a UNESCO World Heritage Site, is packed with baroque churches and palaces of the Knights of St John. Malta's megalithic temples are the oldest free-standing structures in the world, predating the pyramids of Egypt by 1,000 years.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Juin", en: "April – June" },
      label: { fr: "Printemps méditerranéen", en: "Mediterranean spring" },
      color: "#22c55e",
      description: {
        fr: "Période idéale avec des températures douces (18–25°C), la mer encore fraîche mais la végétation en fleurs. Peu de touristes, prix plus bas et pas de la chaleur étouffante de l'été.",
        en: "An ideal period with mild temperatures (18–25°C), the sea still cool but the vegetation in bloom. Few tourists, lower prices and none of summer's stifling heat.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October" },
      label: { fr: "Arrière-saison", en: "Late season" },
      color: "#f59e0b",
      description: {
        fr: "La mer reste chaude (25°C) après l'été et les températures sont idéales (22–28°C). Les foules estivales ont disparu tout en conservant une météo excellente pour la baignade et les visites culturelles.",
        en: "The sea stays warm (25°C) after summer and temperatures are ideal (22–28°C). The summer crowds are gone while the weather remains excellent for swimming and sightseeing.",
      },
      icon: "🌊",
    },
  ],
  weatherCities: [
    {
      id: "valletta",
      name: { fr: "La Valette", en: "Valletta" },
      region: { fr: "Malte centrale", en: "Central Malta" },
      data: [
        { month: "Jan", temp: 14, rain: 85, icon: "⛅" },
        { month: "Fév", temp: 14, rain: 75, icon: "⛅" },
        { month: "Mar", temp: 16, rain: 50, icon: "☀️" },
        { month: "Avr", temp: 18, rain: 30, icon: "☀️" },
        { month: "Mai", temp: 22, rain: 15, icon: "☀️" },
        { month: "Jun", temp: 26, rain: 5, icon: "☀️" },
        { month: "Jul", temp: 29, rain: 5, icon: "⛅" },
        { month: "Aoû", temp: 30, rain: 5, icon: "⛅" },
        { month: "Sep", temp: 27, rain: 30, icon: "⛅" },
        { month: "Oct", temp: 23, rain: 60, icon: "☀️" },
        { month: "Nov", temp: 19, rain: 80, icon: "☀️" },
        { month: "Déc", temp: 15, rain: 90, icon: "⛅" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "La Valette", en: "Valletta" },
      region: { fr: "Malte", en: "Malta" },
      description: {
        fr: "La Valette est la plus petite capitale de l'Union européenne et l'une des villes les plus fortifiées d'Europe, classée au patrimoine mondial de l'UNESCO. Construite par les Chevaliers de l'Ordre de Saint-Jean au XVIe siècle, elle abrite une concentration exceptionnelle de monuments historiques. La co-cathédrale Saint-Jean, avec ses intérieurs baroques dorés et ses deux toiles du Caravage, est un chef-d'œuvre absolu.",
        en: "Valletta is the smallest capital in the European Union and one of the most fortified cities in Europe, a UNESCO World Heritage Site. Built by the Knights of the Order of St John in the 16th century, it holds an exceptional concentration of historic monuments. St John's Co-Cathedral, with its gilded baroque interiors and two Caravaggio paintings, is an absolute masterpiece.",
      },
      wikipedia: "Valletta",
      tags: ["UNESCO", "Ville", "Baroque", "Chevaliers de Malte", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Co-cathédrale Saint-Jean — baroque maltais et Caravage (La Décollation)", en: "St John's Co-Cathedral — Maltese baroque and Caravaggio (The Beheading)" }, wikipedia: "File:Concatedral_de_San_Juan,_La_Valeta,_isla_de_Malta,_Malta,_2021-08-25,_DD_246-248_HDR.jpg" },
        { name: { fr: "Palais du Grand Maître — résidence officielle du Président de Malte", en: "Grandmaster's Palace — official residence of the President of Malta" }, wikipedia: "Grandmaster's_Palace,_Valletta" },
        { name: { fr: "Jardins de Barrakka Supérieure — panorama sur le Grand Harbour", en: "Upper Barrakka Gardens — panorama over the Grand Harbour" }, wikipedia: "Upper_Barrakka_Gardens" },
        { name: { fr: "MUŻA — musée national des arts de Malte", en: "MUŻA — Malta's national museum of art" }, wikipedia: "MUŻA" },
      ],
    },
    {
      id: 2,
      name: "Mdina",
      region: { fr: "Malte centrale", en: "Central Malta" },
      description: {
        fr: "Surnommée la 'Cité du Silence', Mdina est une ancienne capitale fortifiée médiévale perchée sur une colline au centre de l'île de Malte. Avec moins de 300 habitants permanents, ses ruelles désertes à la tombée de la nuit créent une atmosphère presque magique. Elle a notamment servi de décor à King's Landing dans la première saison de Game of Thrones.",
        en: "Nicknamed the 'Silent City', Mdina is a former fortified medieval capital perched on a hill in the centre of Malta. With fewer than 300 permanent residents, its deserted alleys at nightfall create an almost magical atmosphere. It notably served as the backdrop for King's Landing in the first season of Game of Thrones.",
      },
      wikipedia: "Mdina",
      tags: ["Médiéval", "Fortifié", "Histoire", "Game of Thrones", "Architecture"],
      mustSee: [
        { name: { fr: "Remparts de Mdina — vues panoramiques sur toute l'île de Malte", en: "Mdina ramparts — panoramic views over the whole island of Malta" }, wikipedia: "Mdina" },
        { name: { fr: "Cathédrale Saint-Paul — baroque du XVIIIe siècle sur un tremblement de terre", en: "St Paul's Cathedral — 18th-century baroque rebuilt after an earthquake" }, wikipedia: "File:Catedral_de_San_Pablo,_Mdina,_isla_de_Malta,_Malta,_2021-08-25,_DD_150-152_HDR.jpg" },
        { name: { fr: "Musée des Donjons — histoire des chevaliers et instruments de torture", en: "Mdina Dungeons Museum — history of the knights and instruments of torture" }, wikipedia: "File:Gibbeting, Mdina Dungeons.jpg" },
        { name: { fr: "Rabat — ville adjacente avec catacombes paléochrétiennes", en: "Rabat — neighbouring town with early Christian catacombs" }, wikipedia: "Rabat,_Malta" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lagune Bleue de Comino", en: "Comino Blue Lagoon" },
      region: "Comino",
      description: {
        fr: "La Lagune Bleue de l'île de Comino est l'une des eaux les plus cristallines de toute la Méditerranée, avec des teintes turquoise et azur d'une beauté irréelle. L'île de Comino, quasi inhabitée, abrite seulement un hôtel. La Lagune Bleue est idéale pour la baignade, le snorkeling et la plongée. En basse saison, elle prend un caractère paradisiaque.",
        en: "The Blue Lagoon on the island of Comino has some of the clearest waters in the entire Mediterranean, with unreal turquoise and azure hues. The island of Comino, almost uninhabited, has only one hotel. The Blue Lagoon is ideal for swimming, snorkelling and diving. In low season it takes on a paradise-like feel.",
      },
      wikipedia: "File:Blue_Lagoon_and_Cominotto.JPG",
      tags: ["Plage", "Snorkeling", "Île", "Méditerranée", "Nature"],
      mustSee: [
        { name: { fr: "Lagune Bleue — eaux turquoise spectaculaires, snorkeling exceptionnel", en: "Blue Lagoon — spectacular turquoise waters, outstanding snorkelling" }, wikipedia: "File:Blue_Lagoon_and_Cominotto.JPG" },
        { name: { fr: "Tour Santa Marija — tour défensive du XVIIe siècle sur l'île", en: "Santa Marija Tower — 17th-century defensive tower on the island" }, wikipedia: "File:Comino_St_Mary’s_Tower.JPG" },
        { name: { fr: "Lagune de Cristal — deuxième lagune moins fréquentée et tout aussi belle", en: "Crystal Lagoon — a second, less crowded and equally beautiful lagoon" }, wikipedia: "File:Crystal_lagoon_-_Malta.jpg" },
        { name: { fr: "Grottes marines — exploration en bateau des grottes calcaires de l'île", en: "Sea caves — boat exploration of the island's limestone caves" }, wikipedia: "File:Comino caves.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Temples mégalithiques", en: "Megalithic Temples" },
      region: { fr: "Malte sud", en: "Southern Malta" },
      description: {
        fr: "Les temples mégalithiques de Malte sont les structures architecturales autoportantes les plus anciennes du monde, datant de 3 600 à 2 500 av. J.-C. Les temples de Ħaġar Qim et Mnajdra, surplombant la mer, et ceux de Tarxien, classés UNESCO, témoignent d'une civilisation préhistorique mystérieuse et avancée. Le Musée archéologique national de La Valette conserve les précieuses 'Vénus de Malte'.",
        en: "Malta's megalithic temples are the oldest free-standing architectural structures in the world, dating from 3600 to 2500 BC. The temples of Ħaġar Qim and Mnajdra, overlooking the sea, and those of Tarxien, all UNESCO-listed, bear witness to a mysterious and advanced prehistoric civilisation. The National Archaeological Museum in Valletta holds the precious 'Venus of Malta' figurines.",
      },
      wikipedia: "Megalithic_Temples_of_Malta",
      tags: ["UNESCO", "Préhistoire", "Archéologie", "Mégalithes"],
      mustSee: [
        { name: { fr: "Temples de Ħaġar Qim et Mnajdra — mégalithes face à la mer, classés UNESCO", en: "Ħaġar Qim and Mnajdra temples — UNESCO-listed megaliths facing the sea" }, wikipedia: "Ħaġar_Qim" },
        { name: { fr: "Hypogée de Ħal Saflieni — temple souterrain préhistorique unique au monde", en: "Ħal Saflieni Hypogeum — a unique underground prehistoric temple" }, wikipedia: "Ħal_Saflieni_Hypogeum" },
        { name: { fr: "Temples de Tarxien — complexe mégalithique en plein milieu de la ville", en: "Tarxien Temples — a megalithic complex right in the middle of town" }, wikipedia: "File:Templos_de_Tarxien,_isla_de_Malta,_Malta,_2021-08-25,_DD_29.jpg" },
        { name: { fr: "Musée archéologique national — 'Vénus de Malte' et trésors préhistoriques", en: "National Archaeological Museum — 'Venus of Malta' and prehistoric treasures" }, wikipedia: "File:Cart Ruts Hall.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Malte est l'une des destinations les plus abordables de la Méditerranée occidentale. Les prix sont inférieurs à ceux de la France ou de l'Italie, avec un excellent rapport qualité-prix pour la restauration et les activités. L'été voit les prix grimper sensiblement.",
      en: "Malta is one of the most affordable destinations in the western Mediterranean. Prices are lower than in France or Italy, with excellent value for money on food and activities. Summer sees prices rise noticeably.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)" }, price: "18–30 €", detail: { fr: "Bonne offre à La Valette, St Julian's et Sliema", en: "Good options in Valletta, St Julian's and Sliema" } },
          { label: { fr: "Hôtel budget ou guesthouse", en: "Budget hotel or guesthouse" }, price: "50–85 €", detail: { fr: "Chambre double correcte en centre-ville", en: "Decent double room in the town centre" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel" }, price: "90–160 €", detail: { fr: "Hôtels de charme dans la vieille ville de La Valette", en: "Charming hotels in Valletta's old town" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Pastizzi (chausson feuilleté au fromage ou petits pois)", en: "Pastizzi (flaky pastry with cheese or peas)" }, price: "0,50–1 €", detail: { fr: "Snack traditionnel maltais, incontournable et ultra-abordable", en: "A traditional Maltese snack, a must-try and ultra-cheap" } },
          { label: { fr: "Restaurant local, plat du jour", en: "Local restaurant, dish of the day" }, price: "10–16 €", detail: { fr: "Rabbit stew (lapin), ftira (pain maltais), plats de poisson", en: "Rabbit stew, ftira (Maltese bread), fish dishes" } },
          { label: { fr: "Restaurant touristique dîner", en: "Touristy restaurant dinner" }, price: "20–35 €", detail: { fr: "Cuisine méditerranéenne de qualité, fruits de mer frais", en: "Quality Mediterranean cuisine, fresh seafood" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus maltais (trajet unique)", en: "Maltese bus (single ride)" }, price: "1,50–2 €", detail: { fr: "Réseau couvrant toute l'île, principal moyen de transport", en: "Network covering the whole island, the main mode of transport" } },
          { label: { fr: "Ferries inter-îles (Malte–Gozo)", en: "Inter-island ferry (Malta–Gozo)" }, price: "4,65 €", detail: { fr: "Traversée aller-retour Cirkewwa–Mġarr, 25 minutes", en: "Round-trip crossing Cirkewwa–Mġarr, 25 minutes" } },
          { label: { fr: "Bateau vers la Lagune Bleue", en: "Boat to the Blue Lagoon" }, price: "25–40 €", detail: { fr: "Excursion en bateau depuis Malte ou Gozo, tour de l'île inclus", en: "Boat excursion from Malta or Gozo, island tour included" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Co-cathédrale Saint-Jean (La Valette)", en: "St John's Co-Cathedral (Valletta)" }, price: "15 €", detail: { fr: "Inclut audioguide et tapisseries baroques", en: "Includes audio guide and baroque tapestries" } },
          { label: { fr: "Hypogée de Ħal Saflieni (réservation obligatoire)", en: "Ħal Saflieni Hypogeum (booking required)" }, price: "35 €", detail: { fr: "Visite guidée limitée à 80 personnes par jour", en: "Guided tour limited to 80 people per day" } },
          { label: { fr: "Plongée sous-marine (1 plongée)", en: "Scuba diving (1 dive)" }, price: "40–60 €", detail: { fr: "Sites exceptionnels dont le sous-marin Tug II et le Blue Hole de Gozo", en: "Outstanding sites including the Tug II wreck and Gozo's Blue Hole" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "60–80 €/j",
        desc: { fr: "Auberge, pastizzi et restaurants locaux, bus, visites abordables", en: "Hostel, pastizzi and local restaurants, bus, affordable sightseeing" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "110–160 €/j",
        desc: { fr: "Hôtel charme, bonne restauration, activités nautiques et visites", en: "Charming hotel, good dining, water activities and sightseeing" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days" },
      route: {
        fr: "La Valette – Mdina – Comino (Lagune Bleue) – Gozo",
        en: "Valletta – Mdina – Comino (Blue Lagoon) – Gozo",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "550 – 750 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Malte", en: "Return flight Paris–Malta" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)" }, amount: "108–180 €" },
            { label: { fr: "Transports locaux + ferries", en: "Local transport + ferries" }, amount: "50–70 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "210–280 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees" }, amount: "60–90 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Malte", en: "Return flight Paris–Malta" }, amount: "120–200 €" },
            { label: { fr: "Hébergement (6 nuits)", en: "Accommodation (6 nights)" }, amount: "540–720 €" },
            { label: { fr: "Transports locaux + ferries", en: "Local transport + ferries" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "300–420 €" },
            { label: { fr: "Activités + plongée", en: "Activities + diving" }, amount: "150–220 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "2h30 de vol direct depuis CDG vers l'aéroport international de Malte", en: "2h30 direct flight from CDG to Malta International Airport" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa requis — zone Schengen, carte d'identité française suffisante", en: "No visa required — Schengen area, an EU ID card is sufficient" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€) — pays très accessible financièrement pour la Méditerranée", en: "Euro (€) — a very budget-friendly country for the Mediterranean" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Maltais et anglais officiels — le français est peu parlé, l'anglais est universel", en: "Maltese and English are official — French is little spoken, English is universal" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G (prise britannique à 3 broches) — adaptateur indispensable", en: "Type G (British 3-pin plug) — adapter essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Carte européenne d'assurance maladie (CEAM) valable — soins de bonne qualité", en: "European Health Insurance Card (EHIC) valid — good quality healthcare" } },
    { icon: "🌊", label: { fr: "Baignade", en: "Swimming" }, value: { fr: "Mer chaude de juin à novembre — snorkeling et plongée exceptionnels", en: "Warm sea from June to November — outstanding snorkelling and diving" } },
    { icon: "🎬", label: { fr: "Cinéma", en: "Film" }, value: { fr: "Malte a servi de décor à Gladiator, Game of Thrones et Troie", en: "Malta has served as a filming location for Gladiator, Game of Thrones and Troy" } },
  ],
};
