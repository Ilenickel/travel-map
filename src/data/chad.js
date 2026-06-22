export const CHAD = {
  code: "TCD",
  numericId: 148,
  name: "Tchad",
  emoji: "🇹🇩",
  capital: "N'Djamena",
  language: "Français, Arabe tchadien",
  currency: "Franc CFA (XAF)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 45, budgetMid: 90,
    tripMin: 1000, tripMid: 2200,
  },
  description:
    "Le Tchad est une destination d'aventure hors des sentiers battus, offrant le plateau de l'Ennedi (UNESCO) avec ses arches de grès et ses peintures rupestres sahariennes, et le parc de Zakouma qui abrite l'une des dernières grandes concentrations d'éléphants d'Afrique centrale. Pays enclavé entre désert et savane, il demande une bonne préparation logistique.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison fraîche",
      color: "#22c55e",
      description:
        "Meilleure période pour voyager : températures supportables (20–30°C), routes praticables, safari à Zakouma. L'Ennedi est accessible et les nuits dans le désert sont fraîches et étoilées.",
      icon: "☀️",
    },
    {
      months: "Juillet – Septembre",
      label: "Saison des pluies (sud)",
      color: "#f59e0b",
      description:
        "Les pluies transforment le Sahel en savane verte. Routes difficiles voire impraticables dans le sud. Le désert du nord reste sec mais extrêmement chaud (40°C+).",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "ndjamena",
      name: "N'Djamena",
      region: "Capitale (Sahel)",
      data: [
        { month: "Jan", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 27, rain: 0,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 2,   icon: "🌡️" },
        { month: "Avr", temp: 37, rain: 15,  icon: "🌡️" },
        { month: "Mai", temp: 38, rain: 35,  icon: "🌡️" },
        { month: "Jun", temp: 32, rain: 60,  icon: "🌡️" },
        { month: "Jul", temp: 29, rain: 175, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Oct", temp: 31, rain: 25,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 2,   icon: "⛅" },
        { month: "Déc", temp: 22, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "faya",
      name: "Faya-Largeau",
      region: "Borkou (Désert saharien)",
      data: [
        { month: "Jan", temp: 20, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 24, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 30, rain: 0,   icon: "⛅" },
        { month: "Avr", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Mai", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 37, rain: 5,   icon: "🌡️" },
        { month: "Aoû", temp: 36, rain: 10,  icon: "🌡️" },
        { month: "Sep", temp: 36, rain: 5,   icon: "🌡️" },
        { month: "Oct", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Nov", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Déc", temp: 20, rain: 0,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Plateau de l'Ennedi",
      region: "Région d'Ennedi (nord-est)",
      description:
        "Le plateau de l'Ennedi est l'un des joyaux cachés de l'Afrique, classé au patrimoine mondial de l'UNESCO pour ses formations rocheuses de grès aux formes spectaculaires et ses milliers de peintures et gravures rupestres vieilles de 7 000 ans. L'Arche de Aloba, parmi les plus grandes du monde, et les gorges de Guelta d'Archei, dernier refuge des crocodiles sahariens, sont ses sites emblématiques. L'accès nécessite un 4x4 et une organisation logistique sérieuse.",
      wikipedia: "Ennedi_Plateau",
      tags: ["UNESCO", "Désert", "Art rupestre", "Aventure"],
      mustSee: [
        { name: "Arche d'Aloba — l'une des plus grandes arches naturelles du monde", wikipedia: "Aloba_Arch" },
        { name: "Guelta d'Archei — oasis avec crocodiles sahariens reliques", wikipedia: "Guelta_d'Archei" },
        { name: "Peintures rupestres de l'Ennedi — art préhistorique saharien", wikipedia: "File:Kamel Terkei.jpg" },
        { name: "Bichagara — formation rocheuse et camp nomade touareg", wikipedia: "File:Camels in Hope of a Drink (23555725233).jpg" },
      ],
    },
    {
      id: 2,
      name: "Parc National de Zakouma",
      region: "Région du Salamat (sud-est)",
      description:
        "Zakouma est l'une des plus belles réussites de conservation animalière d'Afrique centrale. Après avoir failli disparaître sous les braconniers, ses populations d'éléphants (plus de 600 individus) ont retrouvé une dynamique positive grâce à African Parks. Lions, buffles, lycaons, hippos et une avifaune exceptionnelle en font une destination de safari de premier ordre, encore confidentielle.",
      wikipedia: "Zakouma_National_Park",
      tags: ["Safari", "Éléphants", "Conservation", "Faune"],
      mustSee: [
        { name: "Troupeaux d'éléphants — regroupements spectaculaires en saison sèche", wikipedia: "File:Elephant du parc national de Zakouma.jpg" },
        { name: "Lions de Zakouma — meutes emblématiques du parc", wikipedia: "Zakouma_National_Park" },
        { name: "Lac Zakouma — point d'eau central avec hippos et oiseaux", wikipedia: "Zakouma_National_Park" },
        { name: "Goz Beida — ville de départ avec camp de réfugiés et ONG", wikipedia: "File:Goz beida.jpg" },
      ],
    },
    {
      id: 3,
      name: "Lac Tchad",
      region: "Région du Lac (ouest)",
      description:
        "Le lac Tchad, autrefois 4e plus grand lac d'Afrique, a rétréci de 90% depuis les années 1960 en raison du changement climatique et des prélèvements agricoles, devenant un symbole des défis environnementaux du continent. Les villages de pêcheurs buduma vivent encore sur ses rives et ses îles flottantes de papyrus. N'Djamena, la capitale animée, est le point de départ naturel.",
      wikipedia: "Lake_Chad",
      tags: ["Environnement", "Culture", "Pêche", "Histoire"],
      mustSee: [
        { name: "Villages buduma — communautés de pêcheurs sur les îles du lac", wikipedia: "File:Habitat d’un boudouma du Tchad.jpg" },
        { name: "N'Djamena — capitale avec grand marché central", wikipedia: "N'Djamena" },
        { name: "Musée National du Tchad — collections archéologiques et ethnographiques", wikipedia: "File:Musée national 2.jpg" },
        { name: "Bol — principale ville riveraine du lac", wikipedia: "Bol,_Chad" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Tchad est une destination peu coûteuse mais les infrastructures touristiques sont quasi inexistantes en dehors des grands axes. Les expéditions vers l'Ennedi ou Zakouma nécessitent une logistique lourde (4x4, carburant, guide) qui représente l'essentiel du budget. Le franc CFA est la monnaie commune à l'Afrique centrale francophone.",
    currency: "XAF",
    exchangeRate: "1€ ≈ 655 XAF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / chambre basique", range: "10–25 €" },
          { label: "Hôtel milieu de gamme (N'Djamena)", range: "40–80 €" },
          { label: "Camp safari (Zakouma)", range: "150–300 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Gargote locale (riz, viande)", range: "2–5 €" },
          { label: "Restaurant en ville", range: "8–20 €" },
          { label: "Provisions pour expédition", range: "10–20 €/j" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi en ville (N'Djamena)", range: "2–5 €" },
          { label: "Location 4x4 avec chauffeur", range: "100–200 €/j" },
          { label: "Vol intérieur (N'Djamena–Abéché)", range: "100–200 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée parc de Zakouma (par jour)", range: "20–40 €" },
          { label: "Guide pour l'Ennedi (forfait)", range: "80–150 €/j" },
          { label: "Excursion lac Tchad depuis Bol", range: "30–60 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "45–70 €/j", desc: "Hébergement simple, nourriture locale, hors logistique expédition", color: "#22c55e" },
      { type: "Confort", daily: "90–200 €/j", desc: "Hôtel correct, camp safari, guide et 4x4 inclus", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "N'Djamena → Zakouma (safari) → Abéché → Plateau de l'Ennedi",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 000 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–N'Djamena", amount: "450–650 €" },
            { label: "Hébergement (11 nuits)", amount: "150–300 €" },
            { label: "Transports locaux", amount: "100–200 €" },
            { label: "Nourriture + boissons", amount: "150–250 €" },
            { label: "Activités + guides", amount: "150–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–N'Djamena", amount: "500–700 €" },
            { label: "Hébergement (11 nuits)", amount: "440–900 €" },
            { label: "Location 4x4 + carburant", amount: "600–1 000 €" },
            { label: "Nourriture + boissons", amount: "300–450 €" },
            { label: "Activités + guides", amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vols via Casablanca (Royal Air Maroc), Addis-Abeba (Ethiopian) ou Paris direct avec Air France selon saison. Durée totale ~8–12h." },
    { icon: "🪪", label: "Visa", value: "Visa obligatoire. Obtention en ambassade du Tchad à Paris. Permis de photographie souvent requis séparément pour les sites sensibles." },
    { icon: "💰", label: "Monnaie", value: "Franc CFA CEMAC (XAF). Espèces indispensables, peu de distributeurs en dehors de N'Djamena. Prévoyez largement en cash pour les expéditions." },
    { icon: "🗣️", label: "Langue", value: "Français et arabe tchadien (langue du commerce). Dans le désert, les langues toubu et arabe local prédominent." },
    { icon: "🔌", label: "Prise électrique", value: "Type C et Type E (comme en France). Tension 220V. Électricité très aléatoire en dehors de N'Djamena." },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune obligatoire. Paludisme présent dans le sud : prophylaxie indispensable. Méningite, typhoïde recommandés. Emportez une pharmacie complète pour les expéditions." },
    { icon: "⚠️", label: "Sécurité", value: "Zone nord (Tibesti) déconseillée. Région du lac Tchad (ouest) : risque Boko Haram. Ennedi et Zakouma relativement sûrs mais conseiller officiel recommandé. Consulter les avis du MEAE avant départ." },
    { icon: "🏜️", label: "Logistique désert", value: "Expédition Ennedi : minimum 2 véhicules 4x4, guide obligatoire, carburant pour 1 000 km. Agences spécialisées à Paris ou N'Djamena fortement conseillées." },
  ],
};
