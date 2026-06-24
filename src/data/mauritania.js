export const MAURITANIA = {
  code: "MRT",
  numericId: 478,
  name: "Mauritanie",
  emoji: "🇲🇷",
  capital: "Nouakchott",
  language: "Arabe (officiel), Français, Pulaar, Soninké, Wolof",
  currency: "Ouguiya (MRU)",
  timezone: "UTC",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 850, tripMid: 1700,
  },
  description:
    "La Mauritanie est un immense pays saharien entre mer et désert, peu visité mais d'une beauté saisissante. Les villes caravanières de Chinguetti et Ouadane (UNESCO), le plateau de l'Adrar avec ses dunes et ses gorges, et le banc d'Arguin (UNESCO), sanctuaire mondial des oiseaux migrateurs, composent un itinéraire inoubliable pour les aventuriers.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison fraîche idéale",
      color: "#22c55e",
      description:
        "La meilleure période pour voyager : températures agréables (20–28°C), pas de pluie, ciel bleu. Idéal pour le désert, les randonnées dans l'Adrar et la côte atlantique.",
      icon: "☀️",
    },
    {
      months: "Mars – Avril",
      label: "Début de chaleur",
      color: "#f59e0b",
      description:
        "Températures montant à 30–35°C, quelques vents de sable (harmattan). Encore possible mais inconfortable pour les randonnées prolongées.",
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "nouakchott",
      name: "Nouakchott",
      region: "Nouakchott (côte atlantique)",
      data: [
        { month: "Jan", temp: 18, rain: 5,  icon: "☀️" },
        { month: "Fév", temp: 20, rain: 3,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 2,  icon: "☀️" },
        { month: "Avr", temp: 25, rain: 5,  icon: "☀️" },
        { month: "Mai", temp: 28, rain: 3,  icon: "⛅" },
        { month: "Jun", temp: 29, rain: 5,  icon: "⛅" },
        { month: "Jul", temp: 30, rain: 10, icon: "⛅" },
        { month: "Aoû", temp: 33, rain: 15, icon: "🌡️" },
        { month: "Sep", temp: 32, rain: 20, icon: "🌡️" },
        { month: "Oct", temp: 28, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 23, rain: 5,  icon: "☀️" },
        { month: "Déc", temp: 19, rain: 3,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Chinguetti & l'Adrar",
      region: "Adrar",
      description:
        "Chinguetti, inscrite au patrimoine mondial de l'UNESCO, est l'une des sept villes saintes de l'Islam et un haut lieu du commerce caravanier transsaharien. Ses bibliothèques de manuscrits anciens et ses maisons en banco se noient dans les dunes de l'erg du Sahara.",
      wikipedia: "Chinguetti",
      tags: ["UNESCO", "Désert", "Histoire", "Islam"],
      mustSee: [
        { name: "Mosquée de Chinguetti — minaret en pierre", wikipedia: "Chinguetti_Mosque" },
        { name: "Dunes de l'Erg de Chinguetti — coucher de soleil", wikipedia: "File:Erg Chebbi.jpeg" },
        { name: "Atar — ville de l'Adrar, point de départ", wikipedia: "Atar,_Mauritania" },
      ],
    },
    {
      id: 2,
      name: "Parc national du Banc d'Arguin",
      region: "Dakhlet Nouadhibou / Inchiri",
      description:
        "Le banc d'Arguin est l'un des plus importants sanctuaires ornithologiques au monde, inscrit à l'UNESCO. Des millions d'oiseaux migrateurs s'y arrêtent entre l'Europe et l'Afrique sub-saharienne. Les pêcheurs imraguen utilisent encore des pirogues à voile pour pêcher au sein de ce lagon unique.",
      wikipedia: "File:ISS058-E-7710 - View of Mauritania.jpg",
      tags: ["UNESCO", "Oiseaux", "Nature", "Pêche traditionnelle"],
      mustSee: [
        { name: "Pêcheurs imraguen en pirogue à voile", wikipedia: "File:Banc-dArguin-byRundvald.jpg" },
        { name: "Plages désertes du parc", wikipedia: "File:PNBA 43.JPG" },
        { name: "Coucher de soleil sur la lagune", wikipedia: "File:Banc d'arguin.jpg" },
      ],
    },
    {
      id: 3,
      name: "Ouadane & l'Églab",
      region: "Adrar",
      description:
        "Ouadane, autre cité caravanière inscrite à l'UNESCO, domine une gorge spectaculaire au cœur du plateau de l'Adrar. Les paysages de roches rouges, de palmeraies et de ruines médiévales créent une atmosphère hors du temps pour les amateurs d'aventure saharienne.",
      wikipedia: "Ouadane",
      tags: ["UNESCO", "Désert", "Gorges", "Histoire"],
      mustSee: [
        { name: "Ancienne ville médiévale de Ouadane", wikipedia: "Ouadane" },
        { name: "Peintures rupestres de l'Adrar", wikipedia: "File:Adrar-Peintures rupestres (4).JPG" },
        { name: "Randonnée chameau dans le plateau", wikipedia: "File:Adrar-Camel (1).jpg" },
      ],
    },
    {
      id: 4,
      name: "Nouakchott & la côte",
      region: "Nouakchott",
      description:
        "Nouakchott, capitale née du désert en 1960, est une ville fascinante par ses contrastes : dunes qui avancent vers la mer, marché de poissons de Port de Pêche Artisanale où des pirogues déchargent des tonnes de poissons chaque matin, et quartiers de caravanes.",
      wikipedia: "Nouakchott",
      tags: ["Ville", "Marché", "Pêche", "Culture"],
      mustSee: [
        { name: "Port de Pêche Artisanale — marché au poisson", wikipedia: "File:Nouakchott beach - fishing boat.jpg" },
        { name: "Musée national de Mauritanie", wikipedia: "File:NouakchottNationalMuseum1.jpg" },
        { name: "Marché Capitale — tissus et artisanat", wikipedia: "File:Nouakchott,MarcheCapitale1.jpg" },
        { name: "Plage de Nouakchott au coucher de soleil", wikipedia: "File:Sunset on the Aresquiers beach.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "La Mauritanie est une destination abordable mais l'infrastructure touristique est limitée, surtout dans les zones désertiques. Les hôtels de milieu de gamme existent principalement dans les grandes villes ; dans l'Adrar, on trouve surtout des campements sahariens.",
    currency: "MRU",
    exchangeRate: "1€ ≈ 38 MRU",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Campement saharien (Adrar)", price: "15–30 €", detail: "Tente ou chambre simple, repas inclus parfois" },
          { label: "Hôtel 2–3★ Nouakchott / Atar", price: "30–50 €", detail: "Clim, eau chaude" },
          { label: "Hôtel de confort Nouakchott", price: "60–100 €", detail: "Meilleur rapport qualité-prix en capitale" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Thé à la menthe + pain (rue)", price: "0,50–1 €", detail: "Rituel social mauritanien" },
          { label: "Restaurant local (méchoui, couscous)", price: "4–8 €", detail: "Repas copieux" },
          { label: "Restaurant touristique Nouakchott", price: "12–25 €", detail: "Poisson frais, cuisine internationale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi collectif Nouakchott–Atar", price: "15–25 €", detail: "~450 km, route bitumée" },
          { label: "4x4 avec chauffeur-guide / jour", price: "60–100 €", detail: "Indispensable pour le désert" },
          { label: "Vol Nouakchott–Atar (Mauritania Airlines)", price: "60–100 €", detail: "1h de vol, gain de temps" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Randonnée chameau dans les dunes (1j)", price: "40–70 €", detail: "Guide + chameau + bivouac" },
          { label: "Visite bibliothèques de Chinguetti", price: "5–10 €", detail: "Donation recommandée" },
          { label: "Excursion banc d'Arguin (1j)", price: "50–80 €", detail: "Pirogue + guide ornithologique" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–60 €/j", desc: "Campement + bouffe locale + 4x4 partagé", color: "#22c55e" },
      { type: "Confort", daily: "80–120 €/j", desc: "Hôtel 3★ + restos + 4x4 privatif + guides", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Nouakchott (2j) → Banc d'Arguin (1j) → Atar (1j) → Chinguetti (2j) → Ouadane (2j) → Atar → Nouakchott (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nouakchott", amount: "350–500 €" },
            { label: "Hébergement (10 nuits)", amount: "200–280 €" },
            { label: "Transports locaux + 4x4 partagé", amount: "150–220 €" },
            { label: "Nourriture + boissons", amount: "100–150 €" },
            { label: "Activités + guides", amount: "100–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 700 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Nouakchott", amount: "450–650 €" },
            { label: "Hébergement (10 nuits)", amount: "500–700 €" },
            { label: "4x4 privatif + chauffeur", amount: "400–600 €" },
            { label: "Nourriture + boissons", amount: "200–280 €" },
            { label: "Activités + guides", amount: "200–250 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",    value: "~5h (Mauritania Airlines direct ou via Casablanca)" },
    { icon: "🪪", label: "Visa",                value: "Visa obligatoire — obtenu à l'arrivée (25 €) ou e-Visa en ligne" },
    { icon: "💰", label: "Monnaie",             value: "Ouguiya MRU — espèces indispensables, peu de DAB en dehors de Nouakchott" },
    { icon: "🗣️", label: "Langue",              value: "Arabe hassaniya (courant) + Français compris dans les milieux touristiques" },
    { icon: "🔌", label: "Prise électrique",    value: "Type C/E — 220 V" },
    { icon: "💊", label: "Santé",               value: "Antipaludéen recommandé + fièvre jaune recommandée — eau en bouteille uniquement" },
    { icon: "🌡️", label: "Chaleur",             value: "Températures dépassant 45°C en été — voyage juillet-septembre fortement déconseillé" },
    { icon: "🔒", label: "Sécurité",            value: "Consulter les avis du Quai d'Orsay — certaines zones frontalières déconseillées" },
  ],
};
