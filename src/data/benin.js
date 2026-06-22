export const BENIN = {
  code: "BEN",
  numericId: 204,
  name: "Bénin",
  emoji: "🇧🇯",
  capital: "Porto-Novo",
  language: "Français, Fon, Yoruba, Bariba",
  currency: "Franc CFA (XOF)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1200, tripMid: 2500,
  },
  description:
    "Le Bénin est le berceau du vaudou : Ouidah et sa route des esclaves menant au Door of No Return, les palais royaux d'Abomey (UNESCO) du royaume du Dahomey, la cité lacustre de Ganvié (50 000 personnes vivant sur l'eau), et la réserve de la Pendjari pour les lions, éléphants et guépards les plus accessibles d'Afrique de l'Ouest.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Idéal pour voyager : harmattan, ciel dégagé, routes praticables. Meilleure saison pour la Pendjari. Températures agréables 25–32°C.",
      icon: "☀️",
    },
    {
      months: "Juin – Septembre",
      label: "Saison des pluies",
      color: "#ef4444",
      description:
        "Pluies régulières (100–200mm/mois), routes difficiles en brousse, Pendjari peu accessible. Moins favorable.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "cotonou",
      name: "Cotonou",
      region: "Littoral (côte)",
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 29, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 180, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 100, icon: "⛅" },
        { month: "Aoû", temp: 25, rain: 50,  icon: "⛅" },
        { month: "Sep", temp: 26, rain: 80,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 15,  icon: "⛅" },
      ],
    },
    {
      id: "natitingou",
      name: "Natitingou",
      region: "Atacora (nord)",
      data: [
        { month: "Jan", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Fév", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 20,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 60,  icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 28, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 230, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 60,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 28, rain: 0,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Abomey — Palais royaux du Dahomey",
      region: "Zou",
      description:
        "Les palais royaux d'Abomey (UNESCO) sont le témoignage du puissant royaume du Dahomey (XVIIe–XIXe s.) : bas-reliefs en argile racontant les exploits guerriers des rois, musée royal avec des trônes ornés de crânes d'ennemis, et l'histoire des Amazones du Dahomey — armée de femmes guerrières. Un des sites historiques les plus fascinants d'Afrique.",
      wikipedia: "Abomey",
      tags: ["UNESCO", "Histoire", "Royauté", "Amazones"],
      mustSee: [
        { name: "Palais royal d'Abomey (UNESCO) — bas-reliefs et musée", wikipedia: "Royal_Palaces_of_Abomey" },
        { name: "Histoire des Amazones du Dahomey (Agojie)", wikipedia: "Dahomey_Amazons" },
        { name: "Trône royal orné de crânes d'ennemis", wikipedia: "File:Trône du Ghézo, Fon, Bénin, Musée du quai Branly.jpg" },
        { name: "Temple Nesuxwé — culte des ancêtres royaux", wikipedia: "File:Palais du TOHUIYO AGBALE ADANMANYIKPOWE 01.jpg" },
      ],
    },
    {
      id: 2,
      name: "Ouidah — Route des esclaves et vaudou",
      region: "Atlantique",
      description:
        "Ouidah fut le plus grand port de la traite négrière d'Afrique de l'Ouest : la Route des Esclaves (3km) mène du centre-ville à la plage du Door of No Return, mémorial émouvant érigé à l'endroit où des millions d'Africains ont embarqué vers les Amériques. Ouidah est aussi la capitale mondiale du vaudou — cérémonies, temples de pythons et féticheurs.",
      wikipedia: "File:The city of Ouidah.jpg",
      tags: ["Histoire", "Vaudou", "Mémorial", "Traite"],
      mustSee: [
        { name: "Door of No Return — mémorial de la traite négrière", wikipedia: "File:Door of No Return Sign Ouidah (218406275).jpg" },
        { name: "Temple des Pythons — pythons sacrés en liberté", wikipedia: "File:Entrée du Temple des Pythons (Ouidah).jpg" },
        { name: "Forêt sacrée de Kpasse — vaudou et sculptures", wikipedia: "File:Forêt sacrée de Kpassè 01.jpg" },
        { name: "Musée d'Histoire de Ouidah (ancienne fort portugaise)", wikipedia: "File:Musee d'Histoire in Ouidah 2015.jpg" },
      ],
    },
    {
      id: 3,
      name: "Ganvié — La Venise de l'Afrique",
      region: "Atlantique",
      description:
        "Ganvié est une cité lacustre de 50 000 habitants construite sur pilotis au milieu du lac Nokoué, fondée au XVIIe siècle par les Tofinu pour fuir les razzias des guerriers du Dahomey (qui ne pouvaient traverser l'eau). Marché flottant, pêcheurs en pirogue, maisons sur stilts — un mode de vie aquatique unique au monde.",
      wikipedia: "File:The village of Ganvié on Lake Nokoué.jpg",
      tags: ["Lacustre", "Unique", "Pirogue", "Culture"],
      mustSee: [
        { name: "Tour en pirogue du village lacustre", wikipedia: "File:The village of Ganvié on Lake Nokoué.jpg" },
        { name: "Marché flottant de Ganvié — commerce sur l'eau", wikipedia: "File:Benin village on water Ganvié.jpg" },
      ],
    },
    {
      id: 4,
      name: "Pendjari — Lions et éléphants",
      region: "Atacora",
      description:
        "La réserve de biosphère de la Pendjari est l'un des rares endroits d'Afrique de l'Ouest où observer lions, éléphants, hippopotames, buffles, guépards et hypopotames dans leur environnement naturel. Géré avec African Parks, le parc a vu ses populations animales exploser ces dernières années. Base à Natitingou.",
      wikipedia: "Pendjari_National_Park",
      tags: ["Safari", "Lions", "Éléphants", "Nature"],
      mustSee: [
        { name: "Safari jeep — lions, éléphants, guépards", wikipedia: "File:Pendjari kuhantilopen.JPG" },
        { name: "Cascades de Tanougou", wikipedia: "File:Pendjari Fluss.JPG" },
        { name: "Villages Somba / Tata (maisons-château traditionnelles)", wikipedia: "File:Alyssa K. Barry Koutammakou,Togo.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Bénin est l'une des destinations les plus abordables d'Afrique de l'Ouest. Le franc CFA arrimé à l'euro simplifie le budget. Cotonou est plus chère que l'intérieur du pays. Les safaris à la Pendjari restent raisonnables comparés à l'Afrique de l'Est.",
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre simple", price: "15–35 €", detail: "Ventilateur ou clim basique" },
          { label: "Hôtel 3★ confort (Cotonou, Natitingou)", price: "50–90 €", detail: "Clim, salle de bain, wifi" },
          { label: "Lodge Pendjari (African Parks)", price: "100–200 €", detail: "Pension complète, safari inclus" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Pâte de maïs / sauce arachide dans un buvette", price: "1–3 €", detail: "Cuisine locale typique" },
          { label: "Restaurant mid-range Cotonou", price: "8–18 €", detail: "Poisson braisé, menu complet" },
          { label: "Restaurant gastronomique Cotonou", price: "25–50 €", detail: "Cuisine française et locale" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Zémidjan (moto-taxi) — trajet urbain", price: "0,30–1 €", detail: "Transport typique Cotonou" },
          { label: "Bus / minibus (Cotonou–Abomey, 2h)", price: "3–6 €", detail: "Inconfortable mais économique" },
          { label: "Location 4x4 avec chauffeur / journée", price: "60–100 €", detail: "Indispensable pour Pendjari" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite Palais d'Abomey (UNESCO)", price: "5–10 €", detail: "Avec guide francophone" },
          { label: "Safari journée Pendjari (guide + jeep)", price: "50–80 €", detail: "Départ Natitingou" },
          { label: "Tour en pirogue Ganvié", price: "10–20 €", detail: "2h depuis Abomey-Calavi" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Guesthouse + cuisine locale + zemidjan", color: "#22c55e" },
      { type: "Confort", daily: "80–130 €/j", desc: "Hôtel 3★ + restaurants + excursions", color: "#3b82f6" },
      { type: "Safari", daily: "150–250 €/j", desc: "Lodge Pendjari pension complète + safaris", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Cotonou (2j) → Ouidah (1j) → Ganvié (1j) → Abomey (2j) → Natitingou / Pendjari (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Cotonou", amount: "500–700 €" },
            { label: "Hébergement (10 nuits)", amount: "200–400 €" },
            { label: "Transports locaux", amount: "100–200 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Activités & entrées", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Cotonou", amount: "600–800 €" },
            { label: "Hébergement (10 nuits)", amount: "700–1 100 €" },
            { label: "4x4 & chauffeur", amount: "400–600 €" },
            { label: "Nourriture & sorties", amount: "350–600 €" },
            { label: "Safari Pendjari & excursions", amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~6–7h (Ethiopian Airlines via Addis, Air France via escale, Corsair direct saison)" },
    { icon: "🪪", label: "Visa",              value: "Visa obligatoire — e-Visa disponible en ligne (~50€). Valable 30 jours." },
    { icon: "💰", label: "Monnaie",           value: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces essentielles hors Cotonou." },
    { icon: "🗣️", label: "Langue",            value: "Français (officiel) — facile pour francophones. Fon et Yoruba en zone rurale." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 220V." },
    { icon: "💊", label: "Santé",             value: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable toute l'année." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
    { icon: "📱", label: "Réseau",            value: "Couverture acceptable dans les villes. Pendjari : réseau limité. SIM MTN locale recommandée." },
  ],
};
