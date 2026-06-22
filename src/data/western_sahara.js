export const WESTERN_SAHARA = {
  code: "ESH",
  numericId: 732,
  name: "Sahara Occidental",
  emoji: "🏜️",
  capital: "Laâyoune",
  language: "Arabe, Français, Espagnol, Hassaniya",
  currency: "Dirham marocain (MAD)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 700, tripMid: 1400,
  },
  description:
    "Le Sahara Occidental est un territoire disputé dont le statut politique reste non résolu depuis la décolonisation espagnole en 1976 : le Maroc en contrôle la quasi-totalité, tandis que le Front Polisario (soutenu par l'Algérie) administre les camps de réfugiés en Algérie. Malgré ce contexte complexe, Dakhla est devenue une capitale mondiale du kitesurf et de la planche à voile, et les paysages désertiques de l'Atlantique saharien sont d'une beauté saisissante.",

  bestPeriods: [
    {
      months: "Octobre – Avril",
      label: "Saison douce",
      color: "#22c55e",
      description:
        "Températures idéales (18–24°C), vent modéré à Laâyoune. Parfait pour explorer les paysages désertiques, la côte atlantique et les sites archéologiques. Dakhla animée en automne.",
      icon: "☀️",
    },
    {
      months: "Juin – Septembre",
      label: "Saison alizés (Dakhla)",
      color: "#3b82f6",
      description:
        "Vents d'alizés réguliers et forts : haute saison pour le kitesurf et la planche à voile à Dakhla. Températures fraîches grâce au courant des Canaries (20–26°C). Lagune turquoise superbe.",
      icon: "🪂",
    },
  ],

  weatherCities: [
    {
      id: "laayoune",
      name: "Laâyoune",
      region: "Principale ville",
      data: [
        { month: "Jan", temp: 17, rain: 20,  icon: "☀️" },
        { month: "Fév", temp: 18, rain: 15,  icon: "☀️" },
        { month: "Mar", temp: 19, rain: 10,  icon: "☀️" },
        { month: "Avr", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Mai", temp: 21, rain: 2,   icon: "☀️" },
        { month: "Jun", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 24, rain: 2,   icon: "☀️" },
        { month: "Oct", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Nov", temp: 19, rain: 10,  icon: "☀️" },
        { month: "Déc", temp: 17, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "dakhla",
      name: "Dakhla",
      region: "Presqu'île (côte atlantique)",
      data: [
        { month: "Jan", temp: 17, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 17, rain: 8,   icon: "☀️" },
        { month: "Mar", temp: 18, rain: 5,   icon: "☀️" },
        { month: "Avr", temp: 19, rain: 2,   icon: "☀️" },
        { month: "Mai", temp: 20, rain: 0,   icon: "☀️" },
        { month: "Jun", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 23, rain: 0,   icon: "☀️" },
        { month: "Oct", temp: 21, rain: 2,   icon: "☀️" },
        { month: "Nov", temp: 19, rain: 5,   icon: "☀️" },
        { month: "Déc", temp: 17, rain: 8,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Dakhla — Capitale mondiale du kitesurf",
      region: "Côte atlantique sud",
      description:
        "Dakhla est une presqu'île de 40 km de long creusant une lagune protégée aux eaux turquoise, devenue la mecque mondiale du kitesurf et de la planche à voile grâce à ses alizés réguliers et sa lagune peu profonde. Des dizaines de centres de glisse proposent cours et locations de matériel pour tous niveaux. En dehors des sports nautiques, les plages de sable blanc, la pêche aux crevettes géantes et les couchers de soleil sur l'Atlantique en font une destination balnéaire confidentielle.",
      wikipedia: "File:Sand dunes, Remote view of Dakhla Oasis 2, Egypt.jpg",
      tags: ["Kitesurf", "Planche à voile", "Lagune", "Plage"],
      mustSee: [
        { name: "Lagune de Dakhla — eaux turquoise et vents constants, paradis du kite", wikipedia: "File:Dakhla - panoramio.jpg" },
        { name: "Plage Blanche — immense plage de sable vierge au nord de Dakhla", wikipedia: "File:Plage PK25 Dakhla.jpg" },
      
      ],
    },
    {
      id: 2,
      name: "Laâyoune",
      region: "Nord du Sahara Occidental",
      description:
        "Laâyoune est la principale ville du Sahara Occidental, construite par l'Espagne au XXe siècle et aujourd'hui largement développée par le Maroc. Malgré son statut politique particulier, c'est une ville moderne avec de larges boulevards, des mosquées imposantes et un marché animé où se côtoient populations sahraouie et marocaine. La ville est le point de départ pour explorer les paysages désertiques environnants et la côte atlantique.",
      wikipedia: "File:Aerial photograph of Laayoune 04.jpg",
      tags: ["Ville", "Sahara", "Culture", "Étape"],
      mustSee: [
        { name: "Grande Mosquée de Laâyoune — architecture hispano-marocaine", wikipedia: "File:Mosque moulay abd el aziz laayoune.jpg" },
        { name: "Place du Mechouar — cœur de la vie urbaine", wikipedia: "File:Looking Across Place Mechouar.jpg" },
        { name: "Foum El Oued — plage à 25km, surf et pêche", wikipedia: "File:Oued Saoura 3.jpg" },
      ],
    },
    {
      id: 3,
      name: "Côte atlantique saharienne",
      region: "Route côtière Tan-Tan → Dakhla",
      description:
        "La route côtière longeant l'Atlantique depuis Tan-Tan (Maroc) jusqu'à Dakhla est l'un des road trips les plus sauvages d'Afrique du Nord. Des centaines de kilomètres de dunes de sable plongeant dans un Atlantique bleu-vert, des villages de pêcheurs sahraouis vivant de l'abondante mer, des flambants roses dans les lagunes côtières et des ciels étoilés d'une pureté absolue. La pêche est exceptionnelle sur toute la côte.",
      wikipedia: "File:Atlantic Ocean in Western Sahara.jpg",
      tags: ["Road trip", "Côte", "Pêche", "Nature"],
      mustSee: [
        { name: "Plage de Tarfaya — ancienne escale de l'Aéropostale (Saint-Exupéry)", wikipedia: "File:Tarfaya - طرفاية 7.jpg" },
        { name: "Lagunes à flamants roses — en hiver, milliers d'oiseaux migrateurs", wikipedia: "File:Greater flamingos (Phoenicopterus roseus) resting.jpg" },
        { name: "Dunes côtières de l'Atlantique — sable saharien et vagues atlantiques", wikipedia: "File:Atlantic Ocean in Western Sahara.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Sahara Occidental sous contrôle marocain utilise le dirham marocain et applique les mêmes prix que le Maroc rural, rendant la destination très abordable. Dakhla est légèrement plus chère en haute saison de kitesurf (juin-septembre) en raison de la demande touristique internationale.",
    currency: "MAD",
    exchangeRate: "1€ ≈ 11 MAD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / chambre basique", range: "10–20 €" },
          { label: "Guesthouse / riad simple", range: "25–50 €" },
          { label: "Lodge kitesurf (Dakhla)", range: "60–120 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Tajine ou poisson grillé, restaurant local", range: "4–8 €" },
          { label: "Restaurant milieu de gamme", range: "10–20 €" },
          { label: "Crevettes géantes grillées (Dakhla)", range: "8–15 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus CTM (Agadir–Laâyoune)", range: "15–25 €" },
          { label: "Bus CTM (Laâyoune–Dakhla)", range: "15–25 €" },
          { label: "Taxi en ville (Laâyoune)", range: "2–5 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Leçon de kitesurf (2h, débutant)", range: "50–80 €" },
          { label: "Location kitesurf (journée)", range: "40–70 €" },
          { label: "Sortie pêche en mer (demi-journée)", range: "20–40 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Hébergement simple, nourriture locale, bus, activités libres", color: "#22c55e" },
      { type: "Confort", daily: "60–100 €/j", desc: "Lodge correct à Dakhla, restaurant, kitesurf ou activités guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Agadir → Laâyoune → Dakhla (kitesurf + plages) → retour en avion depuis Dakhla",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "700 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Agadir (+ vol int. Dakhla–Casablanca)", amount: "250–450 €" },
            { label: "Hébergement (7 nuits)", amount: "105–210 €" },
            { label: "Transports (bus CTM, taxis)", amount: "80–120 €" },
            { label: "Nourriture + boissons", amount: "120–200 €" },
            { label: "Activités (kitesurf 1j, excursions)", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 400 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Agadir + vol Dakhla", amount: "350–550 €" },
            { label: "Hébergement (7 nuits, lodge Dakhla)", amount: "350–700 €" },
            { label: "Location voiture", amount: "200–350 €" },
            { label: "Nourriture + boissons", amount: "250–400 €" },
            { label: "Kitesurf (3 jours) + activités", amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vols vers Agadir ou Casablanca (RAM, Air Arabia, Transavia). Puis vols intérieurs Royal Air Maroc vers Laâyoune ou Dakhla. Vol direct Paris–Dakhla possible en haute saison." },
    { icon: "🪪", label: "Visa", value: "Pas de visa requis pour les Français (le territoire est géré par le Maroc). Passeport valide 6 mois. Certains postes-frontières peuvent faire l'objet de questions sur la destination." },
    { icon: "💰", label: "Monnaie", value: "Dirham marocain (MAD). Espèces recommandées. Distributeurs à Laâyoune et Dakhla. Cartes bancaires acceptées dans les lodges de kitesurf." },
    { icon: "🗣️", label: "Langue", value: "Arabe et hassaniya (dialecte sahraoui), français largement compris, espagnol dans les zones plus proches de l'ancienne influence coloniale espagnole." },
    { icon: "🔌", label: "Prise électrique", value: "Type C et Type E (comme en France). Tension 220V. Alimentation électrique généralement stable." },
    { icon: "💊", label: "Santé", value: "Pas de vaccination spéciale requise. Chaleur estivale modérée grâce aux alizés. Eau en bouteille recommandée. Crème solaire indispensable (UV forts toute l'année)." },
    { icon: "⚠️", label: "Situation politique", value: "Territoire disputé : le Maroc contrôle ~80% du territoire (y compris Laâyoune et Dakhla), le Polisario administre les camps de Tindouf (Algérie). Le MEAE recommande la prudence et déconseille toute prise de position politique sur place." },
    { icon: "🪂", label: "Kitesurf à Dakhla", value: "Dakhla est réputée mondialement pour ses conditions de vent et sa lagune. Nombreux spots pour débutants et confirmés. Haute saison : juin–septembre pour les alizés. Basse saison plus calme mais plaisante pour la découverte." },
  ],
};
