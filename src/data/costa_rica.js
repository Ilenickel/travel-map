export const COSTA_RICA = {
  code: "CRI",
  numericId: 188,
  name: "Costa Rica",
  emoji: "🇨🇷",
  capital: "San José",
  language: "Espagnol",
  currency: "Colón (CRC)",
  timezone: "UTC-6",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 1800, tripMid: 4500,
  },
  description:
    "Le Costa Rica, malgré ses 0,03% de la surface terrestre, abrite 5% de la biodiversité mondiale. Forêts nuageuses de Monteverde, volcan Arenal, tortues de Tortuguero, singes paresseux de Manuel Antonio — et 99% d'électricité renouvelable. La destination éco-tourisme par excellence.",

  bestPeriods: [
    {
      months: "Décembre – Avril",
      label: "Saison sèche Pacifique",
      color: "#22c55e",
      description:
        "Idéal pour la côte Pacifique (Manuel Antonio, Nicoya, Guanacaste). Beau temps assuré, faune active, plages magnifiques.",
      icon: "🦥",
    },
    {
      months: "Juillet – Août",
      label: "Veranillo (pause sèche)",
      color: "#3b82f6",
      description:
        "Fenêtre sèche de 4–6 semaines au milieu de la saison verte. Jungle verdoyante, moins de touristes, prix réduits.",
      icon: "🐸",
    },
  ],

  weatherCities: [
    {
      id: "san_jose",
      name: "San José",
      region: "Vallée Centrale",
      data: [
        { month: "Jan", temp: 22, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 23, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 24, rain: 15,  icon: "☀️" },
        { month: "Avr", temp: 25, rain: 40,  icon: "☀️" },
        { month: "Mai", temp: 25, rain: 230, icon: "⛅" },
        { month: "Jun", temp: 24, rain: 290, icon: "⛅" },
        { month: "Jul", temp: 23, rain: 210, icon: "⛅" },
        { month: "Aoû", temp: 24, rain: 240, icon: "⛅" },
        { month: "Sep", temp: 23, rain: 280, icon: "⛅" },
        { month: "Oct", temp: 23, rain: 310, icon: "⛅" },
        { month: "Nov", temp: 23, rain: 150, icon: "☀️" },
        { month: "Déc", temp: 22, rain: 25,  icon: "☀️" },
      ],
    },
    {
      id: "manuel_antonio",
      name: "Manuel Antonio",
      region: "Pacifique Central",
      data: [
        { month: "Jan", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 29, rain: 30,  icon: "☀️" },
        { month: "Avr", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 310, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 400, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 350, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 360, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 420, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 430, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 60,  icon: "⛅" },
      ],
    },
    {
      id: "monteverde",
      name: "Monteverde",
      region: "Guanacaste / Puntarenas",
      data: [
        { month: "Jan", temp: 18, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 18, rain: 20,  icon: "⛅" },
        { month: "Mar", temp: 18, rain: 30,  icon: "⛅" },
        { month: "Avr", temp: 18, rain: 70,  icon: "☀️" },
        { month: "Mai", temp: 18, rain: 180, icon: "☀️" },
        { month: "Jun", temp: 17, rain: 250, icon: "⛅" },
        { month: "Jul", temp: 17, rain: 240, icon: "⛅" },
        { month: "Aoû", temp: 17, rain: 240, icon: "⛅" },
        { month: "Sep", temp: 17, rain: 300, icon: "⛅" },
        { month: "Oct", temp: 18, rain: 280, icon: "⛅" },
        { month: "Nov", temp: 18, rain: 90,  icon: "☀️" },
        { month: "Déc", temp: 18, rain: 30,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Manuel Antonio",
      region: "Pacifique Central",
      description:
        "Le Parc national Manuel Antonio concentre la magie du Costa Rica : singes capucins et écureuils se promenant sur la plage, paresseux endormis dans les branches, ratons laveurs curieux — et des plages de sable blanc aux eaux turquoise protégées. L'un des parcs les plus visités et les plus beaux du pays.",
      wikipedia: "Manuel_Antonio_National_Park",
      tags: ["Faune", "Plage", "Nature", "Singes"],
      mustSee: [
        { name: "Singes capucins et paresseux sur la plage", wikipedia: "File:Cebus capucinus 241523285.jpg" },
        { name: "Playa Espadilla — surf et baignade", wikipedia: "File:Espadilla Sur. Manuel Antonio. Costa Rica.jpg" },
        { name: "Snorkel à Playa Biesanz", wikipedia: "File:Parque Nacional Manuel Antonio 02.jpg" },
        { name: "Ratons laveurs & pécaris du parc", wikipedia: "White-nosed_coati" },
      ],
    },
    {
      id: 2,
      name: "Forêt nuageuse de Monteverde",
      region: "Guanacaste / Puntarenas",
      description:
        "Monteverde est la forêt nuageuse la plus célèbre d'Amérique centrale : un écosystème suspendu dans les nuages à 1 400 m d'altitude, abritant le quetzal resplendissant, 400 espèces d'oiseaux et des orchidées uniques. Les ponts suspendus et les zip lines traversent la canopée.",
      wikipedia: "Monteverde_Cloud_Forest_Reserve",
      tags: ["Forêt nuageuse", "Quetzal", "Canopée", "Biodiversité"],
      mustSee: [
        { name: "Zip line & tyrolienne sur la canopée (Sky Walk)", wikipedia: "File:Seoraksan Cable Car 04.jpg" },
        { name: "Quetzal resplendissant (janv–mai)", wikipedia: "File:Resplendent quetzal (Pharomachrus mocinno) male 3.jpg" },
        { name: "Ponts suspendus Selvatura — 8 ponts", wikipedia: "File:Monteverde Cloud Forest Reserve February 2026 (24).jpg" },
        { name: "Fromagerie artisanale — fromage Monteverde", wikipedia: "Monteverde_Cloud_Forest_Reserve" },
      ],
    },
    {
      id: 3,
      name: "Volcan Arenal & Thermes",
      region: "Alajuela",
      description:
        "L'Arenal est le volcan actif le plus célèbre du Costa Rica (1 670 m), entouré de sources thermales naturelles (Tabacón) chauffées par la lave et d'un lac turquoise. La forêt tropicale environnante abrite fourmis-feuilles, toucans et singes hurleurs.",
      wikipedia: "Arenal_Volcano",
      tags: ["Volcan", "Thermes", "Nature", "Randonnée"],
      mustSee: [
        { name: "Thermes de Tabacón — cascades de lave chaude", wikipedia: "File:Tabacon Hot Springs, Arenal Costa Rica (673029573).jpg" },
        { name: "Lac Arenal — kayak & windsurf", wikipedia: "Lake_Arenal" },
        { name: "Randonnée Arenal — coulées de lave fossilisées", wikipedia: "Arenal_Volcano_National_Park" },
        { name: "Cataracte La Fortuna (70 m, nage)", wikipedia: "File:La Fortuna Waterfall Wide Left.jpg" },
      ],
    },
    {
      id: 4,
      name: "Tortuguero",
      region: "Caraïbes Nord",
      description:
        "Tortuguero, accessible uniquement par bateau ou avion, est le sanctuaire mondial des tortues vertes : entre juillet et octobre, des milliers de femelles viennent pondre sur ses plages noires la nuit. Le parc national est aussi l'un des plus riches en biodiversité du Costa Rica.",
      wikipedia: "Tortuguero_National_Park",
      tags: ["Tortues", "Caraïbes", "Jungle", "Faune"],
      mustSee: [
        { name: "Ponte des tortues vertes (juil–oct, nuit)", wikipedia: "Green_sea_turtle" },
        { name: "Safari en canot — crocodiles & singes", wikipedia: "File:Tortuguero boat trip.JPG" },
        { name: "Anolis, piranhas et lamantins des canaux", wikipedia: "File:Manatee photo.jpg" },
        { name: "Plage noire de Tortuguero", wikipedia: "File:Tortuguero national park-IMG 0884.JPG" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Costa Rica est cher pour l'Amérique centrale — comparable à l'Europe du Sud pour certains services. Le Pura Vida lifestyle a un prix, mais l'expérience nature est incomparable. Les parcs nationaux ont des droits d'entrée élevés pour les non-résidents.",
    currency: "CRC",
    exchangeRate: "1€ ≈ 580 CRC",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Hostel / auberge", price: "20–40 €", detail: "Dortoir ou chambre simple" },
          { label: "Hôtel 3★ / lodge nature", price: "80–150 €", detail: "Confort, vue jungle ou mer" },
          { label: "Eco-lodge luxe", price: "250–600 €", detail: "Rainforest lodge premium" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Casado (rice & beans + viande)", price: "5–8 €", detail: "Plat traditionnel complet" },
          { label: "Restaurant touristique", price: "15–30 €", detail: "Manuel Antonio ou Arenal" },
          { label: "Fruits de mer (côte Pacifique)", price: "20–40 €", detail: "Daurade, poulpe, crevettes" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus public San José–Montéverde", price: "5–8 €", detail: "4h, recommandé" },
          { label: "Shuttle privé (Arenal ou Manuel Antonio)", price: "25–45 €", detail: "Confortable, direct" },
          { label: "Vol San José–Tortuguero", price: "80–120 €", detail: "Obligatoire ou bateau (3h)" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée Parc Manuel Antonio", price: "18 €", detail: "Réservation en ligne obligatoire" },
          { label: "Zip line Monteverde (Sky Trek)", price: "50–70 €", detail: "8 câbles, 2h, vue spectaculaire" },
          { label: "Observation tortues (guide nuit)", price: "25–40 €", detail: "Juil–oct, Tortuguero" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Hostel + casado + bus public + parcs", color: "#22c55e" },
      { type: "Confort", daily: "120–200 €/j", desc: "Lodge nature + restaurants + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "350 €+/j", desc: "Eco-lodge premium + guide privé + thermes", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Arenal (3j) → Monteverde (2j) → Manuel Antonio (3j) → Tortuguero (3j) → San José (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–San José", amount: "550–850 €" },
            { label: "Hébergement (12 nuits)", amount: "400–650 €" },
            { label: "Nourriture", amount: "350–500 €" },
            { label: "Transports (shuttles + bus)", amount: "200–350 €" },
            { label: "Parcs & activités", amount: "200–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "4 500 – 6 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–San José", amount: "700–1 100 €" },
            { label: "Lodges (12 nuits)", amount: "1 200–2 000 €" },
            { label: "Nourriture & cocktails", amount: "600–900 €" },
            { label: "Vols intérieurs + transferts", amount: "500–800 €" },
            { label: "Activités & thermes", amount: "700–1 000 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "11 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–San José (Business)", amount: "2 500–4 000 €" },
            { label: "Eco-lodges 5★ (12 nuits)", amount: "3 500–6 000 €" },
            { label: "Gastronomie & spa", amount: "1 000–1 800 €" },
            { label: "Vols privés & transferts", amount: "800–1 500 €" },
            { label: "Guides privés & extras", amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~11h avec escale (Air France via Madrid, KLM via Amsterdam)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 90 jours (Français)" },
    { icon: "💰", label: "Monnaie",           value: "Colón (1€ ≈ 580 CRC) — dollars US très largement acceptés" },
    { icon: "🗣️", label: "Langue",            value: "Espagnol (officiel)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B – 120 V (comme USA)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture, limité dans les parcs reculés et Tortuguero" },
    { icon: "🚰", label: "Eau du robinet",    value: "Potable dans la grande majorité du pays (rare en Amérique centrale !)" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen recommandé zone Caraïbe uniquement" },
  ],
};
