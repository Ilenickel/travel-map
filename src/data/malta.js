export const MALTA = {
  code: "MLT",
  numericId: 470,
  name: "Malte",
  emoji: "🇲🇹",
  capital: "La Valette",
  language: "Maltais, Anglais",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 60, budgetMid: 110,
    tripMin: 800, tripMid: 1600,
  },
  description:
    "Malte est un archipel méditerranéen de trois îles habitées (Malte, Gozo et Comino) dont l'histoire s'étend sur 7 000 ans. La Valette, plus petite capitale de l'UE et classée UNESCO, regorge d'églises baroques et de palais des Chevaliers de Saint-Jean. Les temples mégalithiques de Malte sont les plus anciennes structures autoportantes du monde, antérieures de 1 000 ans aux pyramides d'Égypte.",

  bestPeriods: [
    {
      months: "Avril – Juin",
      label: "Printemps méditerranéen",
      color: "#22c55e",
      description:
        "Période idéale avec des températures douces (18–25°C), la mer encore fraîche mais la végétation en fleurs. Peu de touristes, prix plus bas et pas de la chaleur étouffante de l'été.",
      icon: "☀️",
    },
    {
      months: "Septembre – Octobre",
      label: "Arrière-saison",
      color: "#f59e0b",
      description:
        "La mer reste chaude (25°C) après l'été et les températures sont idéales (22–28°C). Les foules estivales ont disparu tout en conservant une météo excellente pour la baignade et les visites culturelles.",
      icon: "🌊",
    },
  ],
  weatherCities: [
    {
      id: "valletta",
      name: "La Valette",
      region: "Malte centrale",
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
      name: "La Valette",
      region: "Malte",
      description:
        "La Valette est la plus petite capitale de l'Union européenne et l'une des villes les plus fortifiées d'Europe, classée au patrimoine mondial de l'UNESCO. Construite par les Chevaliers de l'Ordre de Saint-Jean au XVIe siècle, elle abrite une concentration exceptionnelle de monuments historiques. La co-cathédrale Saint-Jean, avec ses intérieurs baroques dorés et ses deux toiles du Caravage, est un chef-d'œuvre absolu.",
      wikipedia: "Valletta",
      tags: ["UNESCO", "Ville", "Baroque", "Chevaliers de Malte", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Co-cathédrale Saint-Jean — baroque maltais et Caravage (La Décollation)", wikipedia: "File:Concatedral_de_San_Juan,_La_Valeta,_isla_de_Malta,_Malta,_2021-08-25,_DD_246-248_HDR.jpg" },
        { name: "Palais du Grand Maître — résidence officielle du Président de Malte", wikipedia: "Grandmaster's_Palace,_Valletta" },
        { name: "Jardins de Barrakka Supérieure — panorama sur le Grand Harbour", wikipedia: "Upper_Barrakka_Gardens" },
        { name: "MUŻA — musée national des arts de Malte", wikipedia: "MUŻA" },
      ],
    },
    {
      id: 2,
      name: "Mdina",
      region: "Malte centrale",
      description:
        "Surnommée la 'Cité du Silence', Mdina est une ancienne capitale fortifiée médiévale perchée sur une colline au centre de l'île de Malte. Avec moins de 300 habitants permanents, ses ruelles désertes à la tombée de la nuit créent une atmosphère presque magique. Elle a notamment servi de décor à King's Landing dans la première saison de Game of Thrones.",
      wikipedia: "Mdina",
      tags: ["Médiéval", "Fortifié", "Histoire", "Game of Thrones", "Architecture"],
      mustSee: [
        { name: "Remparts de Mdina — vues panoramiques sur toute l'île de Malte", wikipedia: "Mdina" },
        { name: "Cathédrale Saint-Paul — baroque du XVIIIe siècle sur un tremblement de terre", wikipedia: "File:Catedral_de_San_Pablo,_Mdina,_isla_de_Malta,_Malta,_2021-08-25,_DD_150-152_HDR.jpg" },
        { name: "Musée des Donjons — histoire des chevaliers et instruments de torture", wikipedia: "File:Gibbeting, Mdina Dungeons.jpg" },
        { name: "Rabat — ville adjacente avec catacombes paléochrétiennes", wikipedia: "Rabat,_Malta" },
      ],
    },
    {
      id: 3,
      name: "Lagune Bleue de Comino",
      region: "Comino",
      description:
        "La Lagune Bleue de l'île de Comino est l'une des eaux les plus cristallines de toute la Méditerranée, avec des teintes turquoise et azur d'une beauté irréelle. L'île de Comino, quasi inhabitée, abrite seulement un hôtel. La Lagune Bleue est idéale pour la baignade, le snorkeling et la plongée. En basse saison, elle prend un caractère paradisiaque.",
      wikipedia: "File:Blue_Lagoon_and_Cominotto.JPG",
      tags: ["Plage", "Snorkeling", "Île", "Méditerranée", "Nature"],
      mustSee: [
        { name: "Lagune Bleue — eaux turquoise spectaculaires, snorkeling exceptionnel", wikipedia: "File:Blue_Lagoon_and_Cominotto.JPG" },
        { name: "Tour Santa Marija — tour défensive du XVIIe siècle sur l'île", wikipedia: "File:Comino_St_Mary’s_Tower.JPG" },
        { name: "Lagune de Cristal — deuxième lagune moins fréquentée et tout aussi belle", wikipedia: "File:Crystal_lagoon_-_Malta.jpg" },
        { name: "Grottes marines — exploration en bateau des grottes calcaires de l'île", wikipedia: "File:Comino caves.jpg" },
      ],
    },
    {
      id: 4,
      name: "Temples mégalithiques",
      region: "Malte sud",
      description:
        "Les temples mégalithiques de Malte sont les structures architecturales autoportantes les plus anciennes du monde, datant de 3 600 à 2 500 av. J.-C. Les temples de Ħaġar Qim et Mnajdra, surplombant la mer, et ceux de Tarxien, classés UNESCO, témoignent d'une civilisation préhistorique mystérieuse et avancée. Le Musée archéologique national de La Valette conserve les précieuses 'Vénus de Malte'.",
      wikipedia: "Megalithic_Temples_of_Malta",
      tags: ["UNESCO", "Préhistoire", "Archéologie", "Mégalithes"],
      mustSee: [
        { name: "Temples de Ħaġar Qim et Mnajdra — mégalithes face à la mer, classés UNESCO", wikipedia: "Ħaġar_Qim" },
        { name: "Hypogée de Ħal Saflieni — temple souterrain préhistorique unique au monde", wikipedia: "Ħal_Saflieni_Hypogeum" },
        { name: "Temples de Tarxien — complexe mégalithique en plein milieu de la ville", wikipedia: "File:Templos_de_Tarxien,_isla_de_Malta,_Malta,_2021-08-25,_DD_29.jpg" },
        { name: "Musée archéologique national — 'Vénus de Malte' et trésors préhistoriques", wikipedia: "File:Cart Ruts Hall.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Malte est l'une des destinations les plus abordables de la Méditerranée occidentale. Les prix sont inférieurs à ceux de la France ou de l'Italie, avec un excellent rapport qualité-prix pour la restauration et les activités. L'été voit les prix grimper sensiblement.",
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse (dortoir)", price: "18–30 €", detail: "Bonne offre à La Valette, St Julian's et Sliema" },
          { label: "Hôtel budget ou guesthouse", price: "50–85 €", detail: "Chambre double correcte en centre-ville" },
          { label: "Hôtel confort 3–4 étoiles", price: "90–160 €", detail: "Hôtels de charme dans la vieille ville de La Valette" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Pastizzi (chausson feuilleté au fromage ou petits pois)", price: "0,50–1 €", detail: "Snack traditionnel maltais, incontournable et ultra-abordable" },
          { label: "Restaurant local, plat du jour", price: "10–16 €", detail: "Rabbit stew (lapin), ftira (pain maltais), plats de poisson" },
          { label: "Restaurant touristique dîner", price: "20–35 €", detail: "Cuisine méditerranéenne de qualité, fruits de mer frais" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus maltais (trajet unique)", price: "1,50–2 €", detail: "Réseau couvrant toute l'île, principal moyen de transport" },
          { label: "Ferries inter-îles (Malte–Gozo)", price: "4,65 €", detail: "Traversée aller-retour Cirkewwa–Mġarr, 25 minutes" },
          { label: "Bateau vers la Lagune Bleue", price: "25–40 €", detail: "Excursion en bateau depuis Malte ou Gozo, tour de l'île inclus" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Co-cathédrale Saint-Jean (La Valette)", price: "15 €", detail: "Inclut audioguide et tapisseries baroques" },
          { label: "Hypogée de Ħal Saflieni (réservation obligatoire)", price: "35 €", detail: "Visite guidée limitée à 80 personnes par jour" },
          { label: "Plongée sous-marine (1 plongée)", price: "40–60 €", detail: "Sites exceptionnels dont le sous-marin Tug II et le Blue Hole de Gozo" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "60–80 €/j",
        desc: "Auberge, pastizzi et restaurants locaux, bus, visites abordables",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "110–160 €/j",
        desc: "Hôtel charme, bonne restauration, activités nautiques et visites",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "7 jours",
      route: "La Valette – Mdina – Comino (Lagune Bleue) – Gozo",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "550 – 750 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Malte", amount: "80–150 €" },
            { label: "Hébergement (6 nuits)", amount: "108–180 €" },
            { label: "Transports locaux + ferries", amount: "50–70 €" },
            { label: "Nourriture + boissons", amount: "210–280 €" },
            { label: "Activités + entrées", amount: "60–90 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 100 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Malte", amount: "120–200 €" },
            { label: "Hébergement (6 nuits)", amount: "540–720 €" },
            { label: "Transports locaux + ferries", amount: "80–120 €" },
            { label: "Nourriture + boissons", amount: "300–420 €" },
            { label: "Activités + plongée", amount: "150–220 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "2h30 de vol direct depuis CDG vers l'aéroport international de Malte" },
    { icon: "🪪", label: "Visa", value: "Aucun visa requis — zone Schengen, carte d'identité française suffisante" },
    { icon: "💰", label: "Monnaie", value: "Euro (€) — pays très accessible financièrement pour la Méditerranée" },
    { icon: "🗣️", label: "Langue", value: "Maltais et anglais officiels — le français est peu parlé, l'anglais est universel" },
    { icon: "🔌", label: "Prise électrique", value: "Type G (prise britannique à 3 broches) — adaptateur indispensable" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie (CEAM) valable — soins de bonne qualité" },
    { icon: "🌊", label: "Baignade", value: "Mer chaude de juin à novembre — snorkeling et plongée exceptionnels" },
    { icon: "🎬", label: "Cinéma", value: "Malte a servi de décor à Gladiator, Game of Thrones et Troie" },
  ],
};
