export const TUNISIA = {
  code: "TUN",
  numericId: 788,
  name: "Tunisie",
  emoji: "🇹🇳",
  capital: "Tunis",
  language: "Arabe, Français",
  currency: "Dinar tunisien (TND)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 35, budgetMid: 70,
    tripMin: 800, tripMid: 1500,
  },
  description:
    "La Tunisie est la destination africaine la plus accessible depuis l'Europe : Carthage et son histoire millénaire, Sidi Bou Saïd aux maisons blanc et bleu, le désert du Sahara à Douz, les plages de Djerba et la médina de Tunis inscrite à l'UNESCO.",

  bestPeriods: [
    {
      months: "Mars – Mai",
      label: "Printemps",
      color: "#22c55e",
      description:
        "Températures idéales (16–25 °C), fleurs de pommiers dans le Tell, peu de touristes. Idéal pour Tunis, Dougga, Kairouan.",
      icon: "🌸",
    },
    {
      months: "Septembre – Novembre",
      label: "Arrière-saison",
      color: "#fb923c",
      description:
        "Mer chaude (24–27 °C), températures agréables, foules moins denses que juillet-août. Bon moment pour tout.",
      icon: "🌊",
    },
  ],

  weatherCities: [
    {
      id: "tunis",
      name: "Tunis",
      region: "Grand Tunis",
      data: [
        { month: "Jan", temp: 11, rain: 60,  icon: "⛅" },
        { month: "Fév", temp: 12, rain: 50,  icon: "⛅" },
        { month: "Mar", temp: 14, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 35,  icon: "☀️" },
        { month: "Mai", temp: 20, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 10,  icon: "☀️" },
        { month: "Jul", temp: 29, rain: 2,   icon: "⛅" },
        { month: "Aoû", temp: 30, rain: 5,   icon: "⛅" },
        { month: "Sep", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Oct", temp: 22, rain: 50,  icon: "☀️" },
        { month: "Nov", temp: 16, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: 12, rain: 65,  icon: "⛅" },
      ],
    },
    {
      id: "djerba",
      name: "Djerba",
      region: "Médenine",
      data: [
        { month: "Jan", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Fév", temp: 14, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 16, rain: 30,  icon: "☀️" },
        { month: "Avr", temp: 18, rain: 15,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 15,  icon: "☀️" },
        { month: "Jun", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 30, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 31, rain: 2,   icon: "⛅" },
        { month: "Sep", temp: 28, rain: 20,  icon: "⛅" },
        { month: "Oct", temp: 23, rain: 45,  icon: "☀️" },
        { month: "Nov", temp: 18, rain: 45,  icon: "⛅" },
        { month: "Déc", temp: 14, rain: 45,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Tunis & Carthage",
      region: "Grand Tunis",
      description:
        "La médina de Tunis (UNESCO) est un labyrinthe envoûtant de souks, mosquées et palais. À 15 km, les ruines de Carthage (UNESCO) et le village blanc et bleu de Sidi Bou Saïd complètent une journée inoubliable.",
      wikipedia: "Tunis",
      tags: ["Histoire", "UNESCO", "Médina", "Archéologie"],
      mustSee: [
        { name: "Médina de Tunis (UNESCO)", wikipedia: "Medina_of_Tunis" },
        { name: "Ruines de Carthage (UNESCO)", wikipedia: "File:Tunisie Carthage Ruines 08.JPG" },
        { name: "Sidi Bou Saïd — village blanc et bleu", wikipedia: "Sidi_Bou_Said" },
        { name: "Musée du Bardo — mosaïques romaines", wikipedia: "File:Bardo Museum Hall.jpg" },
      ],
    },
    {
      id: 2,
      name: "Sahara & Déserts du Sud",
      region: "Kébili / Tozeur",
      description:
        "Les déserts du Sud tunisien offrent des paysages grandioses : dunes de l'Erg Oriental à Douz, l'oasis de Tozeur, les chott (lacs salés) et le tournage de Star Wars dans des décors extraterrestres.",
      wikipedia: "File:Sahara autour de Jbil.jpg",
      tags: ["Désert", "Dunes", "4x4", "Star Wars"],
      mustSee: [
        { name: "Dunes de Douz (porte du Sahara)", wikipedia: "File:Douz Tunisia.jpg" },
        { name: "Chott el-Jérid (lac de sel)", wikipedia: "File:Chott-El-Jerid-Sunrise.JPG" },
        { name: "Oasis de Tozeur & palmeraie", wikipedia: "Tozeur" },
        { name: "Décors de Star Wars (Matmata)", wikipedia: "Matmata,_Tunisia" },
      ],
    },
    {
      id: 3,
      name: "Djerba",
      region: "Médenine",
      description:
        "L'île de Djerba est la principale destination balnéaire de Tunisie : plages dorées, eaux turquoise, la vieille ville d'Houmt Souk et la synagogue de La Ghriba, l'une des plus anciennes du monde.",
      wikipedia: "File:Djerba harbor.jpg",
      tags: ["Plage", "Détente", "Culture", "Balnéaire"],
      mustSee: [
        { name: "Plage de Sidi Mahrez", wikipedia: "File:Djerba el mouradi menzel hotel beach-3.jpg" },
        { name: "Synagogue de La Ghriba (IIIe s. av. J.-C.)", wikipedia: "File:Synagogue de la Ghriba Djerba 11.jpg" },
        { name: "Houmt Souk — quartier historique", wikipedia: "File:Houmt Souk May 2007.JPG" },
        { name: "Fort Borj El Kebir", wikipedia: "File:Borj ghazi Mustapha002.jpg" },
      ],
    },
    {
      id: 4,
      name: "Dougga & Sites romains",
      region: "Beja / Siliana",
      description:
        "Dougga est le site romain le mieux conservé d'Afrique du Nord (UNESCO) : théâtre, temples, forum et arc de triomphe dans un cadre rural préservé. Sbeitla et El-Djem complètent un circuit archéologique exceptionnel.",
      wikipedia: "Dougga",
      tags: ["Archéologie", "Romain", "UNESCO", "Histoire"],
      mustSee: [
        { name: "Site romain de Dougga (UNESCO)", wikipedia: "Dougga" },
        { name: "Amphithéâtre d'El-Djem (UNESCO)", wikipedia: "Amphitheatre_of_El_Jem" },
        { name: "Kairouan — mosquée Aghlabide (UNESCO)", wikipedia: "Great_Mosque_of_Kairouan" },
        { name: "Sbeitla — ruines romano-byzantines", wikipedia: "File:Sbeitla 10.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Tunisie est l'une des destinations les moins chères de la Méditerranée. Le dinar est faible, tout est abordable pour les touristes européens.",
    currency: "TND",
    exchangeRate: "1€ ≈ 3,40 TND",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Riad / maison d'hôte", price: "20–40 €", detail: "Dans la médina de Tunis" },
          { label: "Hôtel 3★ balnéaire", price: "40–70 €", detail: "Demi-pension souvent incluse" },
          { label: "Resort 4★ Djerba", price: "70–120 €", detail: "All-inclusive disponible" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Brik à l'œuf, fricassé", price: "1–3 €", detail: "Snacks emblématiques" },
          { label: "Restaurant local (couscous, chorba)", price: "5–10 €", detail: "Repas complet" },
          { label: "Restaurant gastronomique Tunis", price: "15–30 €", detail: "Fruits de mer, cuisine moderne" },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: "Transport",
        items: [
          { label: "Location voiture / jour", price: "25–40 €", detail: "Pratique pour le sud" },
          { label: "Taxi (Tunis, trajet)", price: "2–5 €", detail: "Compteur obligatoire" },
          { label: "Louage (taxi partagé intercités)", price: "5–15 €", detail: "Rapide et local" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Carthage / Dougga", price: "3–6 €", detail: "Tarifs très accessibles" },
          { label: "Musée du Bardo", price: "5–8 €", detail: "Collections romaines uniques" },
          { label: "Excursion Sahara (1 nuit)", price: "60–100 €", detail: "Dune, nuit sous les étoiles" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–55 €/j", desc: "Guesthouse + restaurants locaux + transports", color: "#22c55e" },
      { type: "Confort", daily: "70–110 €/j", desc: "Hôtel 3★ + bons restos + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Resort 5★ all-inclusive + expériences privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Tunis & Carthage (3j) → Kairouan (1j) → El-Djem (1j) → Djerba (3j) → Sahara / Tozeur (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "800 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tunis", amount: "150–300 €" },
            { label: "Hébergement (10 nuits)", amount: "200–350 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Location voiture", amount: "200–300 €" },
            { label: "Activités & imprévus", amount: "100–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tunis", amount: "200–400 €" },
            { label: "Hébergement (10 nuits)", amount: "500–800 €" },
            { label: "Nourriture", amount: "300–500 €" },
            { label: "Transport + excursions", amount: "300–400 €" },
            { label: "Activités & imprévus", amount: "200–300 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "3 500 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Tunis (direct)", amount: "400–800 €" },
            { label: "Resorts & riads de luxe (10 nuits)", amount: "1 500–2 500 €" },
            { label: "Gastronomie & dégustations", amount: "500–800 €" },
            { label: "Circuit privé & safari désert", amount: "400–600 €" },
            { label: "Extras", amount: "200 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2,5h (Transavia, Tunisair, Nouvelair)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (jusqu'à 3 mois)" },
    { icon: "💰", label: "Monnaie",           value: "Dinar (1€ ≈ 3,40 TND) — espèces, euros acceptés" },
    { icon: "🗣️", label: "Langue",            value: "Arabe + Français (très courant)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture, SIM locale ~5€ (Ooredoo, Orange)" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non recommandée (calcaire) — eau en bouteille" },
    { icon: "💊", label: "Santé",             value: "Aucun vaccin obligatoire, soins corrects" },
  ],
};
