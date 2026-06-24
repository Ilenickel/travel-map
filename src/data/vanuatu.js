export const VANUATU = {
  code: "VUT",
  numericId: 548,
  name: "Vanuatu",
  emoji: "🇻🇺",
  capital: "Port-Vila",
  language: "Bislama (créole), Anglais, Français",
  currency: "Vatu vanuatuan (VUV)",
  timezone: "UTC+11",
  filter: { budgetMin: 60, budgetMid: 120, tripMin: 1800, tripMid: 3200 },
  description:
    "Le Vanuatu est un archipel de 80 îles mélanésiennes offrant une des expériences Pacifique les plus authentiques et aventureuses qui soit. L'île de Tanna abrite le Yasur, l'un des volcans les plus accessibles et les plus actifs au monde, où l'on peut observer les éruptions depuis le bord du cratère au coucher du soleil. Le pays préserve une culture kastom vivante, avec des cérémonies traditionnelles, le saut de gaul (ancêtre du saut à l'élastique) et un statut de Patrimoine mondial de l'UNESCO pour le Domaine de Roi Mata.",
  bestPeriods: [
    {
      months: "Avr – Oct",
      label: "Saison sèche",
      color: "#22c55e",
      description: "Temps agréable et ensoleillé, mer calme, idéal pour la plongée et les visites volcaniques",
      icon: "☀️",
    },
    {
      months: "Nov – Mar",
      label: "Saison des pluies / cyclones",
      color: "#f59e0b",
      description: "Fortes pluies et risque de cyclones tropicaux. Volcans parfois difficiles d'accès",
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "port_vila",
      name: "Port-Vila",
      region: "Éfaté",
      data: [
        { month: "Jan", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 270, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Avr", temp: 26, rain: 180, icon: "☀️" },
        { month: "Mai", temp: 25, rain: 120, icon: "☀️" },
        { month: "Jun", temp: 24, rain: 80, icon: "☀️" },
        { month: "Jul", temp: 23, rain: 65, icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 70, icon: "☀️" },
        { month: "Sep", temp: 24, rain: 85, icon: "☀️" },
        { month: "Oct", temp: 25, rain: 110, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 160, icon: "☀️" },
        { month: "Déc", temp: 28, rain: 200, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Volcan Yasur — Île de Tanna",
      region: "Tanna",
      description:
        "Le Yasur est l'un des volcans les plus accessibles et les plus actifs de la planète, en éruption quasi continue depuis au moins 800 ans. On peut approcher le bord du cratère à pied pour assister à des explosions de lave impressionnantes, surtout au coucher du soleil. L'île de Tanna est aussi le fief du mouvement John Frum, un culte du cargo mélanésien fascinant, et abrite des villages kastom où les habitants maintiennent un mode de vie traditionnel.",
      wikipedia: "Mount_Yasur",
      tags: ["Volcan", "Aventure", "Nature", "Culture"],
      mustSee: [
        { name: "Cratère du Yasur — bord du volcan actif au coucher du soleil (expérience unique)", wikipedia: "Mount_Yasur" },
        { name: "Village kastom de Yakel — communauté vivant selon les traditions ancestrales", wikipedia: "File:Tanna Island 2010 IMG 4808 (16635432558).jpg" },
        { name: "Plaine des Cendres — paysage volcanique minéral autour du Yasur", wikipedia: "File:Tanna Island 2010 IMG 4821 (16200545724).jpg" },
        { name: "Mouvement John Frum — culte du cargo et cérémonies à Sulphur Bay", wikipedia: "John_Frum" },
      ],
    },
    {
      id: 2,
      name: "Saut de Gaul (Naghol) — Île de Pentecôte",
      region: "Pentecôte",
      description:
        "Le saut de gaul (naghol en bislama) est une cérémonie ancestrale pratiquée chaque année entre avril et juin sur l'île de Pentecôte. Des hommes sautent depuis des tours en bois de 30 mètres de haut, les pieds attachés par des lianes souples, pour célébrer la récolte des ignames. Cette pratique, ancêtre documenté du saut à l'élastique, est un moment de bravoure et de lien spirituel avec la terre, qui ne doit être photographiée qu'avec respect.",
      wikipedia: "Land_diving",
      tags: ["Culturel", "Cérémoniel", "Aventure", "Ancestral"],
      mustSee: [
        { name: "Saut de Gaul de Pentecôte — cérémonie du saut en liane (avril–juin uniquement)", wikipedia: "Land_diving" },
        { name: "Village de Lonorore — artisanat local et accueil en homestay", wikipedia: "File:Pentecost Island Houses.jpg" },
        { name: "Plages noires de Pentecôte — plages de sable volcanique isolées", wikipedia: "File:Pentecost Island Beach.jpg" },
        { name: "Randonnée dans les forêts de Pentecôte — faune et flore endémiques", wikipedia: "File:Pentecost Island.jpg" },
      ],
    },
    {
      id: 3,
      name: "Domaine de Roi Mata (UNESCO)",
      region: "Éfaté & Lelepa",
      description:
        "Le Domaine de Roi Mata est le premier site mélanésien inscrit au Patrimoine mondial de l'UNESCO, en 2008. Il comprend trois sites liés au grand chef Roi Mata, qui unifia les peuples d'Éfaté au début du XVIIe siècle : sa demeure sur l'île principale, le site de sa mort à Fels Cave, et son lieu de sépulture sur l'île de Retoka. Cette sépulture collective de 50 personnes, enterrées vivantes pour accompagner leur chef, est un témoignage exceptionnel de la culture mélanésienne.",
      wikipedia: "File:A_stream_on_Efate,_Vanuatu.jpg",
      tags: ["UNESCO", "Histoire", "Culturel", "Archéologie", "Architecture"],
      mustSee: [
        { name: "Île de Retoka — sépulture collective de Roi Mata (site UNESCO)", wikipedia: "File:Eretoka-2008-11-02.jpg" },
        { name: "Fels Cave — grotte où le chef Roi Mata rendit son dernier souffle", wikipedia: "File:Fele's Cave.jpg" },
      ],
    },
    {
      id: 4,
      name: "Blue Holes & Épaves de Port-Vila",
      region: "Éfaté",
      description:
        "Les blue holes du Vanuatu sont des bassins d'eau douce aux teintes bleues surnaturelles, formés dans des calcaires karstiques sous la jungle tropicale. Le blue hole de Riri et celui de Nanda sont accessibles depuis Port-Vila et offrent une plongée ou une baignade dans une eau d'une pureté et d'une fraîcheur remarquables. Au large, le SS Coolidge est l'une des plus grandes et des plus accessibles épaves de guerre du monde.",
      wikipedia: "SS_President_Coolidge",
      tags: ["Plongée", "Snorkeling", "Épave WWII", "Nature", "Ville"],
      mustSee: [
        { name: "Épave du SS President Coolidge — paquebot de luxe reconverti en transport de troupes, coulé en 1942", wikipedia: "SS_President_Coolidge" },
        { name: "Blue Hole de Nanda — bassin d'eau douce cristalline dans la forêt de Malekula", wikipedia: "File:Nanda Blue Hole Santo (29282050925).jpg" },
        { name: "Mele Cascades — chutes d'eau et bassins naturels proches de Port-Vila", wikipedia: "File:Cascade de Mélé (38876748484).jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Le Vanuatu est une destination accessible, bien que les coûts varient fortement selon les îles. Port-Vila offre un choix d'hébergements et de restaurants allant du budget au luxe. Les îles extérieures (Tanna, Pentecôte, Malekula) sont plus économiques mais nécessitent des vols intérieurs coûteux. Le vatu (VUV) est la monnaie locale, et les cartes bancaires sont acceptées à Port-Vila.",
    currency: "VUV",
    exchangeRate: "1€ ≈ 130 VUV",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse ou bungalow communautaire", price: "20–40 €" },
          { label: "Hôtel de gamme moyenne à Port-Vila", price: "60–110 €" },
          { label: "Resort ou écolodge haut de gamme", price: "150–300 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Marché local (lap-lap, poisson, légumes)", price: "2–5 €" },
          { label: "Restaurant local à Port-Vila", price: "8–18 €" },
          { label: "Restaurant de resort ou bar touristique", price: "20–40 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Minibus local (bus Port-Vila)", price: "0,50–1 €" },
          { label: "Vol intérieur (Port-Vila–Tanna)", price: "70–120 €" },
          { label: "Location de voiture / jour à Éfaté", price: "50–80 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Excursion volcan Yasur (guide + transport)", price: "50–80 €" },
          { label: "Plongée épave SS Coolidge (2 bouteilles)", price: "70–100 €" },
          { label: "Visite saut de gaul à Pentecôte (saison avr–jun)", price: "60–90 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "60–90 €/j",
        desc: "Guesthouses, marchés locaux, minibus, quelques activités",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "120–200 €/j",
        desc: "Hôtels confortables, restaurants variés, vols intérieurs, plongée",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Port-Vila (Éfaté) → Tanna (Yasur) → Santo (Coolidge) ou Pentecôte",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 900 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Port-Vila", amount: "1 000–1 300 €" },
            { label: "Hébergement (12 nuits)", amount: "280–420 €" },
            { label: "Vols intérieurs (2 trajets)", amount: "150–250 €" },
            { label: "Nourriture + boissons", amount: "200–300 €" },
            { label: "Activités (Yasur, plongée, tours)", amount: "200–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 200 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Port-Vila", amount: "1 200–1 600 €" },
            { label: "Hébergement (12 nuits)", amount: "720–1 100 €" },
            { label: "Vols intérieurs + transfers privés", amount: "300–450 €" },
            { label: "Nourriture + boissons", amount: "350–500 €" },
            { label: "Activités et excursions", amount: "400–600 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "22–28h avec 2 escales (via Sydney, Brisbane ou Auckland, puis Air Vanuatu)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français jusqu'à 30 jours ; extension possible sur place" },
    { icon: "💰", label: "Monnaie", value: "Vatu (VUV). Cartes bancaires acceptées à Port-Vila ; espèces indispensables dans les îles" },
    { icon: "🗣️", label: "Langue", value: "Bislama (créole officiel), anglais et français ; 100+ langues locales. Le français est courant à Port-Vila" },
    { icon: "🔌", label: "Prise électrique", value: "Type I (comme en Australie), 230V — adaptateur recommandé" },
    { icon: "💊", label: "Santé", value: "Paludisme présent dans les îles nord. Vaccins : hépatites A et B, typhoïde. Eau du robinet non potable" },
    { icon: "🌀", label: "Cyclones", value: "Saison cyclonique novembre–avril. Cyclone Pam (2015) a dévasté le pays — infrastructures reconstruites depuis" },
    { icon: "🌋", label: "Volcan", value: "Le Yasur est actif en permanence ; suivre les avis d'alerte locaux avant la visite (niveau 2 habituellement)" },
  ],
};
