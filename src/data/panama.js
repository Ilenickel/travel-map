export const PANAMA = {
  code: "PAN",
  numericId: 591,
  name: "Panama",
  emoji: "🇵🇦",
  capital: "Panama City",
  language: "Espagnol",
  currency: "Dollar américain / Balboa (USD)",
  timezone: "UTC-5",
  filter: {
    budgetMin: 50, budgetMid: 100,
    tripMin: 1600, tripMid: 3500,
  },
  description:
    "Panama, carrefour du monde depuis 1914, est bien plus que son canal légendaire : le Casco Viejo classé UNESCO, les paradis caribéens des îles Kuna Yala et Bocas del Toro, et une biodiversité exceptionnelle (Darién) font de ce trait d'union entre deux continents une destination de voyage d'exception.",

  bestPeriods: [
    {
      months: "Décembre – Avril",
      label: "Saison sèche Pacifique",
      color: "#22c55e",
      description:
        "Idéal pour Panama City, le canal et les plages Pacifique. Ciel dégagé, chaleur supportable, mer calme.",
      icon: "⚓",
    },
    {
      months: "Février – Mars",
      label: "Meilleur côte Caraïbe",
      color: "#3b82f6",
      description:
        "Fenêtre sèche sur la côte Caraïbe (Bocas del Toro, San Blas). Eaux translucides, snorkel parfait.",
      icon: "🏝️",
    },
  ],

  weatherCities: [
    {
      id: "panama_city",
      name: "Panama City",
      region: "Pacifique",
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 10,  icon: "☀️" },
        { month: "Mar", temp: 29, rain: 10,  icon: "☀️" },
        { month: "Avr", temp: 29, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 210, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 60,  icon: "⛅" },
      ],
    },
    {
      id: "bocas_del_toro",
      name: "Bocas del Toro",
      region: "Caraïbes Ouest",
      data: [
        { month: "Jan", temp: 26, rain: 130, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Mar", temp: 27, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 240, icon: "⛅" },
        { month: "Jul", temp: 26, rain: 280, icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 26, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 180, icon: "☀️" },
        { month: "Déc", temp: 26, rain: 140, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Canal de Panama",
      region: "Panama City",
      description:
        "Le Canal de Panama, l'une des plus grandes réalisations d'ingénierie humaine, relie l'Atlantique au Pacifique en 80 km. Les écluses de Miraflores permettent d'observer en direct le transit de porte-conteneurs géants. Le musée interocéanique retrace l'épopée de sa construction.",
      wikipedia: "File:Panama Canal Gatun Locks.jpg",
      tags: ["Ingénierie", "Histoire", "Icône", "Incontournable"],
      mustSee: [
        { name: "Écluses de Miraflores — transit en direct", wikipedia: "File:Panama Canal Miraflores Locks.jpg" },
        { name: "Écluses d'Agua Clara (canal élargi)", wikipedia: "File:Agua Clara Locks 09 2019 0752.jpg" },
        { name: "Musée interocéanique (Ciudad de Panamá)", wikipedia: "File:Museo_del_Canal.jpg" },
        { name: "Pont des Amériques — panorama canal", wikipedia: "File:08-029 Puente de las Américas 3.jpg" },
      ],
    },
    {
      id: 2,
      name: "Casco Viejo",
      region: "Panama City",
      description:
        "Le Casco Viejo, quartier historique de Panama City classé UNESCO, est une péninsule de ruelles coloniales espagnoles, d'hôtels boutiques et de restaurants gastronomiques avec vue sur les gratte-ciels de l'hypermoderne skyline panaméenne — un contraste saisissant entre passé et futur.",
      wikipedia: "Casco_Viejo,_Panama",
      tags: ["UNESCO", "Colonial", "Gastronomie", "Rooftop"],
      mustSee: [
        { name: "Plaza de la Independencia & cathédrale", wikipedia: "File:Panama Catedral Metropolitana.jpg" },
        { name: "Rooftop bars — vue skyline + canal", wikipedia: "Casco_Viejo,_Panama" },
        { name: "Ruines de la vieille ville (Panama Viejo)", wikipedia: "File:Catedral Panamá Viejo.jpg" },
        { name: "Théâtre National et Palais présidentiel", wikipedia: "File:National Theater in the Old Town of panama City.jpg" },
      ],
    },
    {
      id: 3,
      name: "Bocas del Toro",
      region: "Caraïbes Ouest",
      description:
        "L'archipel de Bocas del Toro est le paradis caribéen du Panama : îles coralliennes, eaux turquoise, dauphins dans les lagunes, grenouilles vénéneuses dans la jungle et plages de sable blanc. Bocas Town (Isla Colón) est une ville sur pilotis, colorée et festive.",
      wikipedia: "File:Bocas aerial.jpg",
      tags: ["Île", "Caraïbes", "Snorkel", "Faune"],
      mustSee: [
        { name: "Red Frog Beach — grenouilles vénéneuses", wikipedia: "File:Oophaga pumilio 263283848.jpg" },
        { name: "Dolphin Bay — dauphins dans la lagune", wikipedia: "File:Dolphin in Cardigan Bay, off New Quay.jpg" },
        { name: "Snorkel récifs coralliens (Isla Bastimentos)", wikipedia: "File:Isla Bastimentos La Mochila.jpg" },
        { name: "Bocas Town — vie nocturne sur pilotis", wikipedia: "File:Early morning at Bocas del Toro.jpg" },
      ],
    },
    {
      id: 4,
      name: "San Blas — Îles Kuna Yala",
      region: "Caraïbes Est",
      description:
        "San Blas (Guna Yala) est un archipel de 365 îles coraliennes géré par le peuple kuna, l'une des rares nations indigènes ayant conservé son autonomie complète. Eaux cristallines, plages désertes, hamacs sur l'eau et commerce des molas (tissus brodés) composent ce paradis hors du temps.",
      wikipedia: "Guna_Yala",
      tags: ["Île", "Culture Kuna", "Paradis", "Authentique"],
      mustSee: [
        { name: "Île aux cocotiers avec hamacs sur l'eau", wikipedia: "San_Blas_Islands" },
        { name: "Molas — textiles brodés des Kunas", wikipedia: "File:Mola_blouse,_Kuna_peoples,_San_Blas_Islands,_Panama,_20th_century,_cotton,_polyester_-_Fernbank_Museum_of_Natural_History_-_DSC09997.JPG" },
        { name: "Snorkel lagon turquoise (Cocos Bandidos)", wikipedia: "Guna_Yala" },
        { name: "Communauté Kuna — mode de vie traditionnel", wikipedia: "Guna_people" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Panama utilise le dollar américain et est plus cher que ses voisins centraméricains, surtout Panama City. Mais San Blas et Bocas restent abordables. Le niveau de vie est parmi les plus élevés d'Amérique centrale.",
    currency: "USD",
    exchangeRate: "1€ ≈ 1,08 USD (Balboa = 1 USD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hostel Panama City (Casco Viejo)", price: "15–30 €", detail: "Dortoir ou chambre simple" },
          { label: "Hôtel boutique Casco Viejo", price: "80–150 €", detail: "Charme colonial, rooftop" },
          { label: "Camping San Blas (tout inclus)", price: "60–100 €", detail: "Tente + repas + transfert" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Arroz con pollo (local)", price: "4–7 €", detail: "Plat national, copieux" },
          { label: "Restaurant Panama City (Casco)", price: "15–30 €", detail: "Cuisine créative ou fruits de mer" },
          { label: "Homard frais (San Blas)", price: "10–20 €", detail: "Pêche du jour par les Kunas" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Panama City–Bocas del Toro", price: "15–20 €", detail: "9h avec transfert bateau" },
          { label: "Vol Panama City–Bocas del Toro", price: "80–150 €", detail: "A/R, 50 min" },
          { label: "Excursion San Blas (avion + bateau)", price: "100–150 €", detail: "Journée ou nuit sur île" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite écluses Miraflores", price: "15–20 €", detail: "Musée + observation direct" },
          { label: "Tour bateau San Blas (2j/1n)", price: "80–120 €", detail: "Nuit sur île, repas inclus" },
          { label: "Plongée Bocas del Toro (2 plongées)", price: "60–80 €", detail: "Guide + équipement" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–70 €/j", desc: "Hostel + cuisine locale + bus + camping San Blas", color: "#22c55e" },
      { type: "Confort", daily: "100–160 €/j", desc: "Boutique hôtel + restaurants + vols intérieurs", color: "#3b82f6" },
      { type: "Luxe", daily: "300 €+/j", desc: "Hôtel 5★ + vols privés San Blas + gastronomie", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Panama City & Canal (3j) → Bocas del Toro (3j) → San Blas (3j) → Panama City départ (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 600 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Panama City", amount: "550–850 €" },
            { label: "Hébergement (10 nuits)", amount: "300–500 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Transports (bus + vols + bateaux)", amount: "250–400 €" },
            { label: "Activités & imprévus", amount: "150–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Panama City", amount: "700–1 100 €" },
            { label: "Hébergement (10 nuits)", amount: "900–1 500 €" },
            { label: "Nourriture & cocktails", amount: "500–800 €" },
            { label: "Vols intérieurs + transferts", amount: "500–800 €" },
            { label: "Excursions & plongée", amount: "400–700 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Panama (Business)", amount: "2 500–4 000 €" },
            { label: "Hôtels 5★ (10 nuits)", amount: "2 000–3 500 €" },
            { label: "Gastronomie & spa", amount: "800–1 500 €" },
            { label: "Vols charter + transferts privés", amount: "800–1 500 €" },
            { label: "Extras", amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~13h avec escale (Copa Airlines via Bogotá, Air France via Miami)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 180 jours (Français)" },
    { icon: "💰", label: "Monnaie",           value: "Dollar américain / Balboa (taux 1:1) — espèces recommandées à San Blas" },
    { icon: "🗣️", label: "Langue",            value: "Espagnol (officiel) — kuna à San Blas, anglais à Bocas" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B – 110 V (comme USA)" },
    { icon: "📱", label: "Réseau",            value: "Très bon Panama City, limité à San Blas et jungle" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable à Panama City — non potable dans les îles" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen pour la province du Darién uniquement" },
  ],
};
