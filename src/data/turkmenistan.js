export const TURKMENISTAN = {
  code: "TKM",
  numericId: 795,
  name: "Turkménistan",
  emoji: "🇹🇲",
  capital: "Achgabat",
  language: "Turkmène, Russe",
  currency: "Manat turkmène (TMT)",
  timezone: "UTC+5",
  filter: { budgetMin: 50, budgetMid: 100, tripMin: 1000, tripMid: 2200 },
  description:
    "Le Turkménistan est l'un des pays les plus fermés et les plus mystérieux du monde, souvent comparé à la Corée du Nord pour son isolement délibéré et son culte de la personnalité présidentiel. Pourtant, ceux qui parviennent à y entrer découvrent un pays fascinant : la capitale Achgabat, recouverte de marbre blanc à perte de vue, figure dans le Livre Guinness des Records, et le cratère de gaz de Darvaza — surnommé la 'Porte de l'Enfer' — brûle dans le désert du Karakoum depuis plus de 50 ans.",
  bestPeriods: [
    {
      months: "Avr–Mai",
      label: "Printemps court",
      color: "#22c55e",
      description: "La meilleure période : températures agréables (15–25 °C), désert en fleurs dans les régions semi-arides, visites confortables à Achgabat et dans l'antique Merv.",
      icon: "🌸",
    },
    {
      months: "Sep–Oct",
      label: "Automne doux",
      color: "#22c55e",
      description: "Températures retombées après l'été caniculaire. Lumière dorée sur les sites historiques. Période idéale pour la visite de Merv (UNESCO).",
      icon: "🍂",
    },
    {
      months: "Jun–Aoû",
      label: "Été torride",
      color: "#f59e0b",
      description: "Températures extrêmes (40–50 °C dans le Karakoum). Le cratère de Darvaza est plus spectaculaire de nuit. Voyage possible mais exigeant physiquement.",
      icon: "🌡️",
    },
    {
      months: "Nov–Mar",
      label: "Hiver froid",
      color: "#f59e0b",
      description: "Nuits froides dans le désert (proches de 0 °C). Achgabat reste visitabile. Période creuse pour le tourisme.",
      icon: "❄️",
    },
  ],
  weatherCities: [
    {
      id: "ashgabat",
      name: "Achgabat",
      region: "Sud (capitale)",
      data: [
        { month: "Jan", temp: 2, rain: 15, icon: "❄️" },
        { month: "Fév", temp: 5, rain: 20, icon: "⛅" },
        { month: "Mar", temp: 12, rain: 30, icon: "⛅" },
        { month: "Avr", temp: 19, rain: 25, icon: "☀️" },
        { month: "Mai", temp: 25, rain: 20, icon: "☀️" },
        { month: "Jun", temp: 32, rain: 5, icon: "🌡️" },
        { month: "Jul", temp: 35, rain: 3, icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 5, icon: "🌡️" },
        { month: "Sep", temp: 26, rain: 8, icon: "⛅" },
        { month: "Oct", temp: 18, rain: 20, icon: "☀️" },
        { month: "Nov", temp: 10, rain: 20, icon: "⛅" },
        { month: "Déc", temp: 4, rain: 15, icon: "⛅" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Achgabat",
      region: "Capitale",
      description:
        "Achgabat est une capitale-musée à ciel ouvert, entièrement revêtue de marbre blanc — détentrice du record mondial du plus grand nombre de bâtiments en marbre blanc selon le Livre Guinness. Reconstruite après un séisme dévastateur en 1948 qui tua les deux tiers de sa population, la ville a été transformée par les présidents successifs en une vitrine de la grandeur nationale avec ses palais dorés, ses fontaines monumentales et ses monuments à la gloire du Turkménistan. Une expérience surréaliste et unique au monde.",
      wikipedia: "Ashgabat",
      tags: ["Ville", "Architecture", "Surréaliste", "Marbres"],
      mustSee: [
        { name: "Monument de la Neutralité — tripode de 95 m couronné d'une étoile rotative", wikipedia: "Neutrality_Monument" },
        { name: "Palais Présidentiel Oguzhan — complexe de palais en marbre blanc", wikipedia: "Ashgabat" },
        { name: "Parc olympique de Turkménistan — stade futuriste en forme de cheval", wikipedia: "File:AIMAG_2017_Opening_ceremony,_Ashgabat,_Turkmenistan.jpg" },
      ],
    },
    {
      id: 2,
      name: "Cratère de Darvaza",
      region: "Désert du Karakoum (centre)",
      description:
        "Le cratère de gaz de Darvaza, surnommé la 'Porte de l'Enfer' ou 'Bouche du diable', est un phénomène unique au monde : un gouffre de 69 mètres de diamètre et 30 mètres de profondeur dans le désert du Karakoum, qui brûle sans interruption depuis 1971 lorsque des ingénieurs soviétiques y mirent le feu pour éviter des fuites de méthane. La lueur orangée du cratère, visible à des kilomètres à la ronde dans la nuit du désert, est l'une des images les plus saisissantes d'Asie centrale.",
      wikipedia: "Darvaza_gas_crater",
      tags: ["Géologie", "Désert", "Spectacle", "Unique"],
      mustSee: [
        { name: "Cratère principal de Darvaza — la 'Porte de l'Enfer' au cœur du Karakoum", wikipedia: "Darvaza_gas_crater" },
        { name: "Campement de nuit sous les étoiles — expérience unique face aux flammes", wikipedia: "File:Darvaza Gas Crater at Dawn (42435085262).jpg" },
        { name: "Cratère d'eau de Darvaza — lac salé aux teintes turquoise à 8 km", wikipedia: "File:Turquoise_Lake_Crater_-_Turkmenistan,_Darvaza_-_panoramio.jpg" },
        { name: "Cratère de boue de Darvaza — curiosité géologique à proximité", wikipedia: "File:Mud_Crater_-_Turkmenistan,_Darvaza_-_panoramio.jpg" },
      ],
    },
    {
      id: 3,
      name: "Ancienne Merv",
      region: "Province de Mary",
      description:
        "L'ancienne Merv, inscrite au patrimoine mondial de l'UNESCO, fut l'une des plus grandes villes du monde médiéval et l'un des nœuds les plus importants de la Route de la Soie. Au XIIe siècle, sous les Seldjoukides, elle comptait peut-être plus d'un million d'habitants et était un centre majeur de science, de théologie et d'art. Rasée par les Mongols de Gengis Khan en 1221, elle n'a jamais retrouvé sa splendeur. Ses vestiges — citadelles, caravansérails et mausolées — s'étendent sur des dizaines de kilomètres dans la plaine.",
      wikipedia: "Merv",
      tags: ["UNESCO", "Route de la Soie", "Archéologie", "Islam"],
      mustSee: [
        { name: "Mausolée Sultan Sanjar — chef-d'œuvre seldjoukide du XIIe siècle", wikipedia: "File:Sultan Sanjar mausoleum.jpg" },
        { name: "Citadelle d'Erk Kala — la plus ancienne, bâtie au IVe s. av. J.-C.", wikipedia: "File:Erk Kala (1) (31597776268).jpg" },
        { name: "Citadelle de Gyaur Kala — cité parthe-sassanide aux murailles imposantes", wikipedia: "File:Great_Kyz_Kala_monument,_with_Kyz_Bibi_and_Sultan_Kala_walls_in_the_background,_in_2011.jpg" },
      ],
    },
    {
      id: 4,
      name: "Köneürgench",
      region: "Nord (Dashoguz)",
      description:
        "Köneürgench (ancienne Urgench), également inscrite à l'UNESCO, fut la capitale du puissant empire du Khorezm aux XIIe–XIIIe siècles avant d'être rasée par les armées de Gengis Khan en 1221. Ses monuments — minarets, mausolées et caravansérails en brique crue — témoignent de la sophistication architecturale de l'Asie centrale préislamique et islamique. Le minaret de Kutlug Timur, haut de 60 mètres, est le plus haut minaret d'Asie centrale.",
      wikipedia: "Konye-Urgench",
      tags: ["UNESCO", "Khorezm", "Islam", "Archéologie"],
      mustSee: [
        { name: "Minaret de Kutlug Timur — le plus haut minaret d'Asie centrale (60 m)", wikipedia: "Kutlug_Timur_Minaret" },
        { name: "Mausolée de Tekesh — sépulcre du sultan khorezm du XIIe siècle", wikipedia: "File:Tekesh Mausoleum.JPG" },
        { name: "Mausolée de Najm ad-Din Kubra — fondateur de l'ordre soufi Kubrawiyya", wikipedia: "File:Kunya-Urgench-130377.jpg" },
        { name: "Caravansérail de Tünebeşik — halte médiévale sur la Route de la Soie", wikipedia: "File:KonyeUrgenchKarawanserei.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Le Turkménistan est l'un des pays les plus difficiles et les plus coûteux à visiter au monde, non pas en raison du coût de vie local (qui est bas), mais à cause des contraintes administratives : visa très difficile à obtenir, guide officiel obligatoire (payant), permis spéciaux pour chaque région. Le gouvernement contrôle étroitement le tourisme. Un voyage bien organisé via une agence spécialisée est quasiment indispensable.",
    currency: "TMT",
    exchangeRate: "1€ ≈ 3–3,5 TMT (taux officiel, taux noir bien supérieur)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hôtel d'État standard (obligatoire via agence)", min: 40, max: 70 },
          { label: "Hôtel 3–4 étoiles (Achgabat)", min: 80, max: 150 },
          { label: "Camping en désert (avec guide officiel)", min: 20, max: 40 },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Repas local (plov, manty, shorba)", min: 3, max: 8 },
          { label: "Restaurant d'hôtel / touristique", min: 10, max: 25 },
          { label: "Dîner gastronomique à Achgabat", min: 25, max: 50 },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "4x4 avec chauffeur officiel (journée)", min: 60, max: 120 },
          { label: "Vol intérieur (Achgabat–Mary–Dashoguz)", min: 50, max: 100 },
          { label: "Train (Achgabat–Mary)", min: 5, max: 15 },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Guide officiel obligatoire (par jour)", min: 50, max: 100 },
          { label: "Entrée sites UNESCO (Merv, Köneürgench)", min: 5, max: 15 },
          { label: "Nuit au bord du cratère de Darvaza", min: 30, max: 60 },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "60–90 €/j",
        desc: "Budget minimum incluant guide obligatoire, hôtels d'État et transports. Impossible de voyager seul sans agence.",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "120–200 €/j",
        desc: "Avec agence réceptive, hôtels de qualité, véhicule privé et guide francophone. Confort et sécurité administrative.",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Achgabat → Darvaza → Merv → Köneürgench",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 100 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Achgabat (via Istanbul/Moscou)", amount: "500–700 €" },
            { label: "Visa + lettre d'invitation", amount: "80–120 €" },
            { label: "Hébergement (7 nuits)", amount: "200–350 €" },
            { label: "Guide obligatoire (7 jours)", amount: "200–350 €" },
            { label: "Transports + nourriture", amount: "100–180 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 000 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Achgabat", amount: "600–900 €" },
            { label: "Package agence spécialisée (guide, visa, hôtels)", amount: "1 000–1 500 €" },
            { label: "Transports privés 4x4", amount: "250–450 €" },
            { label: "Nourriture + boissons", amount: "100–200 €" },
            { label: "Activités + permis spéciaux", amount: "80–150 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "8–12h via Istanbul (Turkish Airlines), Moscou ou Dubaï. Turkmenistan Airlines propose des vols depuis Francfort et Birmingham." },
    { icon: "🪪", label: "Visa", value: "TRÈS DIFFICILE — visa touristique individuel quasiment impossible. La plupart des visiteurs passent par une agence agréée qui obtient une lettre d'invitation officielle. Transit 5 jours possible sans visa pour certaines nationalités." },
    { icon: "💰", label: "Monnaie", value: "Manat turkmène (TMT). Le gouvernement maintient un taux de change officiel très surévalué. Les échanges au marché noir sont illégaux mais pratiqués. Seules les espèces fonctionnent réellement." },
    { icon: "🗣️", label: "Langue", value: "Turkmène (proche de l'azerbaïdjanais et de l'ouzbek). Le russe est compris par la génération soviétique. L'anglais n'est pratiquement pas parlé en dehors des agences touristiques." },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F, 220V — compatible avec les prises européennes." },
    { icon: "💊", label: "Santé", value: "Vaccins recommandés : hépatites A/B, typhoïde. Eau du robinet à éviter impérativement. Infrastructure médicale limitée en dehors d'Achgabat. Emporter une trousse complète." },
    { icon: "⚠️", label: "Sécurité", value: "Le Turkménistan est globalement sûr physiquement pour les touristes. Les risques principaux sont administratifs : filature par les services secrets, contrôles fréquents, interdit de photographier bâtiments officiels, militaires ou policiers." },
    { icon: "📸", label: "Photographie", value: "INTERDITE près des bâtiments gouvernementaux, militaires, des aéroports et des marchés. Demander toujours l'autorisation avant de photographier des personnes. Les infractions peuvent entraîner confiscation du matériel et expulsion." },
  ],
};
