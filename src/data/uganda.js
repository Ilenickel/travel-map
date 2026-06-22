export const UGANDA = {
  code: "UGA",
  numericId: 800,
  name: "Ouganda",
  emoji: "🇺🇬",
  capital: "Kampala",
  language: "Swahili, Anglais",
  currency: "Shilling ougandais (UGX)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 180,
    tripMin: 2500, tripMid: 7000,
  },
  description:
    "L'Ouganda, « la perle de l'Afrique » selon Churchill, est le pays des gorilles de Bwindi et des chimpanzés de Nyungwe. Avec plus de 1 000 espèces d'oiseaux (premier pays africain), la source du Nil Blanc à Jinja, les chutes Murchison et les lions grimpeurs d'Ishasha, c'est la destination de la biodiversité absolue.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Grande saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période pour les gorilles, chimpanzés et safaris. Sentiers praticables, faune active. Juin = top absolu.",
      icon: "🦍",
    },
    {
      months: "Décembre – Février",
      label: "Petite saison sèche",
      color: "#fb923c",
      description:
        "Bonne période secondaire pour les gorilles. Moins de touristes et tarifs légèrement plus bas.",
      icon: "🐦",
    },
  ],

  weatherCities: [
    {
      id: "kampala",
      name: "Kampala",
      region: "Buganda",
      data: [
        { month: "Jan", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 60,  icon: "☀️" },
        { month: "Mar", temp: 25, rain: 120, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 170, icon: "☀️" },
        { month: "Mai", temp: 24, rain: 110, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 70,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 50,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 60,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 80,  icon: "☀️" },
        { month: "Oct", temp: 24, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 24, rain: 140, icon: "☀️" },
        { month: "Déc", temp: 25, rain: 90,  icon: "☀️" },
      ],
    },
    {
      id: "bwindi",
      name: "Bwindi (Forêt impénétrable)",
      region: "Uganda Sud-Ouest",
      data: [
        { month: "Jan", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Fév", temp: 19, rain: 100, icon: "☀️" },
        { month: "Mar", temp: 19, rain: 130, icon: "☀️" },
        { month: "Avr", temp: 19, rain: 150, icon: "☀️" },
        { month: "Mai", temp: 18, rain: 120, icon: "☀️" },
        { month: "Jun", temp: 18, rain: 80,  icon: "☀️" },
        { month: "Jul", temp: 17, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 80,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 100, icon: "☀️" },
        { month: "Oct", temp: 18, rain: 130, icon: "☀️" },
        { month: "Nov", temp: 19, rain: 130, icon: "☀️" },
        { month: "Déc", temp: 19, rain: 90,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Gorilles de Bwindi",
      region: "Uganda Sud-Ouest",
      description:
        "La Forêt impénétrable de Bwindi (UNESCO) est le sanctuaire le plus important des gorilles de montagne : elle abrite plus de la moitié de la population mondiale (environ 500 individus). Un permis (700$) donne accès à une heure magique avec une famille de gorilles en forêt tropicale.",
      wikipedia: "Bwindi_Impenetrable_National_Park",
      tags: ["UNESCO", "Gorilles", "Forêt", "Unique"],
      mustSee: [
        { name: "Trekking gorilles de montagne (permis 700$)", wikipedia: "Mountain_gorilla" },
        { name: "Visite communautés Batwa (peuple pygmée)", wikipedia: "File:Twa dancers.jpg" },
        { name: "Lodge de luxe — nuit dans la jungle", wikipedia: "Bwindi_Impenetrable_National_Park" },
      ],
    },
    {
      id: 2,
      name: "Queen Elizabeth National Park",
      region: "Uganda Ouest",
      description:
        "Queen Elizabeth est le parc le plus visité d'Ouganda : les lions grimpeurs d'Ishasha (qui dorment dans les figuiers, phénomène rarissime), les chimpanzés du canyon de Kyambura, le canal Kazinga (une des plus belles concentrations d'hippos et de buffles du monde) et les flamants du lac Édouard.",
      wikipedia: "File:Crater lake in Queen Elizabeth National Park.jpg",
      tags: ["Lions grimpeurs", "Chimpanzés", "Safari bateau", "Big Five"],
      mustSee: [
        { name: "Lions grimpeurs d'Ishasha (uniquement ici et Tanzanie)", wikipedia: "File:Tree-climbing lions (Panthera leo).jpg" },
        { name: "Safari bateau canal Kazinga — hippos & buffles", wikipedia: "Kazinga_Channel" },
        { name: "Trek chimpanzés Kyambura Gorge", wikipedia: "Chimpanzee" },
        { name: "Lac Édouard — flamants et pélicans", wikipedia: "File:Fishermen on Lake Edward.jpg" },
      ],
    },
    {
      id: 3,
      name: "Chutes Murchison",
      region: "Uganda Nord-Ouest",
      description:
        "Murchison Falls est le parc national le plus grand d'Ouganda : les chutes Murchison, où le Nil Blanc s'engouffre en entier dans une fissure de 7 m de large pour plonger 43 m plus bas, sont parmi les plus spectaculaires d'Afrique. Le safari bateau jusqu'aux chutes révèle crocodiles du Nil, hippos et girafes.",
      wikipedia: "Murchison_Falls",
      tags: ["Chutes", "Nil", "Safari bateau", "Girafes"],
      mustSee: [
        { name: "Chutes Murchison (Nil dans une fissure de 7m)", wikipedia: "Murchison_Falls_National_Park" },
        { name: "Safari bateau Nil — crocodiles, hippos, oiseaux", wikipedia: "Nile_crocodile" },
        { name: "Girafes de Rothschild (espèce menacée)", wikipedia: "Rothschild's_giraffe" },
        { name: "Pêche au Nil — tilapia et capitaine du Nil", wikipedia: "Nile_perch" },
      ],
    },
    {
      id: 4,
      name: "Jinja — Source du Nil",
      region: "Uganda Est",
      description:
        "Jinja est la ville où le Nil Blanc prend sa source depuis le lac Victoria : l'endroit le plus symbolique du Nil, que John Hanning Speke identifia en 1862. C'est aussi la capitale des sports extrêmes d'Afrique de l'Est : rafting classe V, kayak, bungee sur le Nil et stand-up paddle.",
      wikipedia: "Jinja,_Uganda",
      tags: ["Source du Nil", "Rafting", "Aventure", "Histoire"],
      mustSee: [
        { name: "Source du Nil Blanc — monument Speke", wikipedia: "File:White_Nile_Fishermen_(18156464842).jpg" },
        { name: "Rafting classe V sur le Nil (adrénaline max)", wikipedia: "File:Fun Rafting Elo River Magelang.jpg" },
        { name: "Bungee jumping sur le Nil (44 m)", wikipedia: "Bungee_jumping" },
        { name: "Kayak & stand-up paddle (coucher de soleil)", wikipedia: "Jinja,_Uganda" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Ouganda est moins cher que le Rwanda mais le permis gorilles y coûte 700$ (vs 1 500$). Kampala est une capitale animée avec des options pour tous les budgets. En dehors des parcs, les prix sont très accessibles.",
    currency: "UGX",
    exchangeRate: "1€ ≈ 4 200 UGX",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / hostel Kampala", price: "15–35 €", detail: "Chambres propres avec clim" },
          { label: "Lodge mid-range parc national", price: "100–200 €", detail: "Repas inclus, guides" },
          { label: "Lodge luxe (Bwindi Gorilla)", price: "400–1 000 €", detail: "All-inclusive, vue forêt" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Matoke (banane verte, plat national)", price: "2–5 €", detail: "Cuisine locale copieuse" },
          { label: "Restaurant Kampala", price: "8–18 €", detail: "Cuisine ougandaise ou internationale" },
          { label: "Repas lodge jungle (inclus)", price: "inclus", detail: "Gastronomie dans la forêt" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Matatu (minibus collectif)", price: "2–6 €", detail: "Kampala-Jinja ou villes" },
          { label: "Vol Entebbe–Kihihi (Bwindi)", price: "100–200 €", detail: "A/R, 1h vs 9h route" },
          { label: "4x4 avec chauffeur (journée)", price: "80–130 €", detail: "Recommandé pour les parcs" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Permis gorilles Bwindi", price: "700 $", detail: "1h avec une famille — à réserver longtemps à l'avance" },
          { label: "Trek chimpanzés Queen Elizabeth", price: "100–150 €", detail: "Demi-journée guidée" },
          { label: "Rafting Nil (classe V, journée)", price: "80–100 €", detail: "Depuis Jinja — épique" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–100 €/j", desc: "Guesthouse + matoke + matatu", color: "#22c55e" },
      { type: "Confort", daily: "180–350 €/j", desc: "Lodge mid-range + permis gorilles amorti", color: "#3b82f6" },
      { type: "Luxe", daily: "600 €+/j", desc: "Lodge gorilles all-inclusive + expériences privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Entebbe/Kampala (1j) → Murchison Falls (2j) → Queen Elizabeth (2j) → Bwindi gorilles (3j) → Jinja (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Entebbe", amount: "500–800 €" },
            { label: "Permis gorilles (1 unité)", amount: "650 € (700$)" },
            { label: "Hébergement (10 nuits)", amount: "400–650 €" },
            { label: "Vols intérieurs + transports", amount: "300–500 €" },
            { label: "Activités & nourriture", amount: "300–500 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "7 000 – 10 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Entebbe", amount: "600–1 000 €" },
            { label: "Permis gorilles (2 unités)", amount: "1 300 € (1 400$)" },
            { label: "Lodges mid-range (10 nuits)", amount: "1 500–2 500 €" },
            { label: "Vols intérieurs + 4x4", amount: "800–1 200 €" },
            { label: "Chimpanzés + rafting + extras", amount: "600–1 000 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "16 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Entebbe (Business)", amount: "3 000–5 000 €" },
            { label: "Permis gorilles (2+ unités)", amount: "1 300 €+" },
            { label: "Lodges all-inclusive (10 nuits)", amount: "5 000–9 000 €" },
            { label: "Vols charters & transferts privés", amount: "2 000–3 500 €" },
            { label: "Extras & expériences", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~9h (Ethiopian Airlines via Addis, Kenya Airways via Nairobi)" },
    { icon: "🪪", label: "Visa",              value: "e-Visa en ligne obligatoire (~50$)" },
    { icon: "💰", label: "Monnaie",           value: "Shilling ougandais (1€ ≈ 4 200 UGX) — USD acceptés parcs" },
    { icon: "🗣️", label: "Langue",            value: "Swahili + Anglais (officiels) + 40 langues locales" },
    { icon: "🔌", label: "Prise électrique",  value: "Type G – 240 V (comme UK)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture Kampala et villes, très limitée forêts" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille obligatoire" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen OBLIGATOIRE + fièvre jaune OBLIGATOIRE" },
  ],
};
