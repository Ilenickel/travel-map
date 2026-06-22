export const LIBYA = {
  code: "LBY",
  numericId: 434,
  name: "Libye",
  emoji: "🇱🇾",
  capital: "Tripoli",
  language: "Arabe",
  currency: "Dinar libyen (LYD)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 2000, tripMid: 4000,
  },
  description:
    "La Libye abrite certains des sites antiques les mieux conservés du monde méditerranéen : Leptis Magna (UNESCO), la cité romaine la plus complète d'Afrique, Sabratha avec son théâtre sur la Méditerranée, et Cyrène la cité grecque (UNESCO). Le Fezzan et ses dunes du Sahara (oasis de Ghadamès, UNESCO) complètent un pays d'une richesse archéologique stupéfiante. Situation sécuritaire très instable — voyage déconseillé.",

  bestPeriods: [
    {
      months: "Octobre – Avril",
      label: "Période la moins chaude",
      color: "#22c55e",
      description:
        "Températures agréables sur la côte (15–25°C). Meilleure période pour visiter les sites antiques. Désert supportable de novembre à mars (10–20°C).",
      icon: "☀️",
    },
    {
      months: "Mai – Septembre",
      label: "Été méditerranéen et désertique",
      color: "#ef4444",
      description:
        "Chaleur extrême sur la côte (35–40°C) et dans le désert (45–50°C). Ghibli (vent de sable brûlant) fréquent. Déconseillé.",
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "tripoli",
      name: "Tripoli",
      region: "Tripolitaine (côte)",
      data: [
        { month: "Jan", temp: 12, rain: 55,  icon: "⛅" },
        { month: "Fév", temp: 13, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 16, rain: 20,  icon: "☀️" },
        { month: "Avr", temp: 19, rain: 10,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Jun", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 22, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 17, rain: 40,  icon: "⛅" },
        { month: "Déc", temp: 13, rain: 50,  icon: "⛅" },
      ],
    },
    {
      id: "sebha",
      name: "Sebha",
      region: "Fezzan (désert)",
      data: [
        { month: "Jan", temp: 13, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 17, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Avr", temp: 28, rain: 0,  icon: "⛅" },
        { month: "Mai", temp: 33, rain: 0,  icon: "🌡️" },
        { month: "Jun", temp: 37, rain: 0,  icon: "🌡️" },
        { month: "Jul", temp: 39, rain: 0,  icon: "🌡️" },
        { month: "Aoû", temp: 38, rain: 0,  icon: "🌡️" },
        { month: "Sep", temp: 34, rain: 0,  icon: "🌡️" },
        { month: "Oct", temp: 27, rain: 0,  icon: "⛅" },
        { month: "Nov", temp: 20, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 14, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Leptis Magna — La Rome d'Afrique",
      region: "Tripolitaine",
      description:
        "Leptis Magna (UNESCO) est l'un des sites romains les mieux conservés du monde : des forums, thermes, arcs de triomphe, un amphithéâtre et un théâtre pratiquement intacts sous le sable libyen. Ville natale de l'empereur Septime Sévère qui la transforma en une cité de marbre au IIe siècle. Un spectacle archéologique sans équivalent.",
      wikipedia: "Leptis_Magna",
      tags: ["UNESCO", "Romain", "Antique", "Spectaculaire"],
      mustSee: [
        { name: "Forum de Septime Sévère et arc de triomphe", wikipedia: "File:00IMGL4379.jpg" },
        { name: "Théâtre romain de Leptis Magna (IIe s.)", wikipedia: "File:Leptis_Magna_Theatre.jpg" },
        { name: "Amphithéâtre et bassin du port romain", wikipedia: "File:Leptis_Magna_amphitheatre_-_panoramio.jpg" },
      ],
    },
    {
      id: 2,
      name: "Sabratha — Théâtre sur la Méditerranée",
      region: "Tripolitaine",
      description:
        "Sabratha (UNESCO) est une ancienne cité phénicienne et romaine dont le théâtre, avec sa façade à trois étages de colonnes donnant directement sur la Méditerranée, est l'un des plus beaux du monde antique. Funduk central avec mosaïques et forum préservés.",
      wikipedia: "Sabratha",
      tags: ["UNESCO", "Romain", "Théâtre", "Méditerranée"],
      mustSee: [
        { name: "Théâtre de Sabratha (IIe s.) — façade à 3 étages sur la mer", wikipedia: "File:Theatre of Sabratha, Libya.jpg" },
        { name: "Temple de Liber Pater et mosaïques", wikipedia: "File:Triumph of liber pater2.JPG" },
        { name: "Musée archéologique de Sabratha", wikipedia: "File:Roman Museum, Sabratha (68372).jpg" },
        { name: "Forum romain et basilique judiciaire", wikipedia: "File:Amphitheatre, Sabratha (50144698711).jpg" },
      ],
    },
    {
      id: 3,
      name: "Ghadamès — Oasis du Sahara",
      region: "Fezzan",
      description:
        "Ghadamès (UNESCO) est une oasis du Sahara libyen à la frontière algérienne et tunisienne : ses maisons blanches interconnectées avec des passages couverts qui permettent de circuler en ville à l'abri du soleil, ses rues labyrintiques séculaires, et son artisanat en cuir et en maroquinerie. La 'perle du désert' berbère.",
      wikipedia: "Ghadames",
      tags: ["UNESCO", "Désert", "Oasis", "Berbère"],
      mustSee: [
        { name: "Vieille ville de Ghadamès (UNESCO) — passages couverts", wikipedia: "File:Ghadames, 2006.jpg" },
        { name: "Palmiers et jardins de l'oasis", wikipedia: "File:Ghadames - Altstadt-Palmenhain.jpg" },
        { name: "Coucher de soleil sur les dunes environnantes", wikipedia: "File:Ghadames - Grosse Moschee.jpg" },
      ],
    },
    {
      id: 4,
      name: "Cyrène — Cité grecque de Cyrénaïque",
      region: "Cyrénaïque",
      description:
        "Cyrène (UNESCO) est une colonie grecque du VIIe siècle av. J.-C., capitale de la Cyrénaïque : son temple d'Apollon (le plus grand de l'Afrique antique), la nécropole grecque taillée dans la roche, et l'agora hellénistique préservée dans un cadre montagneux spectaculaire sur les contreforts du Djebel Akhdar.",
      wikipedia: "Cyrene,_Libya",
      tags: ["UNESCO", "Grec", "Antique", "Montagne"],
      mustSee: [
        { name: "Temple d'Apollon de Cyrène (VIe s. av. J.-C.)", wikipedia: "File:CireneTempioApollo.jpg" },
        { name: "Nécropole grecque taillée dans la roche", wikipedia: "File:Exedra of Apollo Karneios, Cyrene (50144977036).jpg" },
        { name: "Agora hellénistique et forum romain", wikipedia: "File:1Roman theater ancient Cyrene (Cyrene, Libya).jpg" },
        { name: "Vue sur la Méditerranée depuis le Djebel Akhdar", wikipedia: "File:8(Temple of Apollo, Cyrene, Libya).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "En temps normal (avant le conflit), la Libye était une destination abordable. Aujourd'hui, le tourisme est quasiment inexistant et les prix très variables selon les zones de contrôle. Informations données à titre indicatif pour une période de stabilité.",
    currency: "LYD",
    exchangeRate: "1€ ≈ 5–6 LYD (taux variable selon marché)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre simple", price: "20–40 €", detail: "Dans les zones accessibles" },
          { label: "Hôtel 3★ (Tripoli)", price: "60–100 €", detail: "Quand disponible" },
          { label: "Hôtel international (Tripoli)", price: "120–200 €", detail: "Rare en période de conflit" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Cuisine locale (asida, couscous)", price: "3–8 €", detail: "Restaurants locaux" },
          { label: "Restaurant mid-range Tripoli", price: "10–20 €", detail: "Cuisine arabe et méditerranéenne" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi collectif entre villes", price: "5–15 €", detail: "Selon trajet" },
          { label: "4x4 avec chauffeur-guide / journée", price: "80–150 €", detail: "Indispensable pour les sites" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite guidée Leptis Magna ou Sabratha", price: "15–30 €", detail: "Guide francophone rare" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Guesthouse + cuisine locale + transport collectif", color: "#22c55e" },
      { type: "Confort", daily: "120–180 €/j", desc: "Hôtel 3★ + restaurants + 4x4 + guide", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Tripoli (2j) → Sabratha (1j) → Leptis Magna (1j) → Ghadamès (3j) → Cyrène (3j)",
      budgets: [
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R (escale Tunis ou Le Caire)", amount: "600–1 000 €" },
            { label: "Hébergement (10 nuits)", amount: "600–1 000 €" },
            { label: "4x4 + chauffeur-guide (agence)", amount: "800–1 500 €" },
            { label: "Nourriture", amount: "300–600 €" },
            { label: "Guides & entrées", amount: "200–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "Via Tunis (Tunisair), Le Caire (EgyptAir) ou Istanbul (Turkish). Pas de vol direct." },
    { icon: "⚠️", label: "Sécurité",         value: "AVERTISSEMENT MAJEUR : voyage formellement déconseillé dans l'ensemble du pays (zone rouge MEAE). Conflit armé actif dans de nombreuses régions." },
    { icon: "🪪", label: "Visa",              value: "Visa obligatoire — procédures très complexes en période de conflit. Invitation d'une agence locale souvent requise." },
    { icon: "💰", label: "Monnaie",           value: "Dinar libyen (LYD). Taux de change double (officiel / marché noir). Espèces indispensables." },
    { icon: "🗣️", label: "Langue",            value: "Arabe dialectal libyen. Très peu de francophones — anglais ou guide arabophone nécessaire." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/L (européen et italien) — 127/230V. Coupures fréquentes." },
    { icon: "💊", label: "Santé",             value: "Infrastructure médicale très dégradée. Rapatriement sanitaire indispensable. Antipaludéen non nécessaire (zone désertique)." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
  ],
};
