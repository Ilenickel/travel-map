export const LATVIA = {
  code: "LVA",
  numericId: 428,
  name: "Lettonie",
  emoji: "🇱🇻",
  capital: "Riga",
  language: "Letton",
  currency: "Euro (EUR)",
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 50, budgetMid: 90,
    tripMin: 900, tripMid: 1900,
  },
  description:
    "La Lettonie est le cœur des États baltes : Riga, sa capitale, possède le plus grand ensemble d'architecture Art Nouveau d'Europe (800 bâtiments classés UNESCO) et une Vieille Ville médiévale hanséatique. Les plages de sable de Jūrmala (35km de côte), les châteaux de Gauja et la forêt primaire de Slītere font de la Lettonie une destination nature et culture abordable.",

  bestPeriods: [
    {
      months: "Juin – Août",
      label: "Été balte",
      color: "#22c55e",
      description:
        "Longues journées lumineuses (17–22°C), plages de Jūrmala animées, festivals (Jāņi, la Saint-Jean la plus folle d'Europe). Meilleure saison pour Riga.",
      icon: "☀️",
    },
    {
      months: "Décembre – Janvier",
      label: "Noël balte",
      color: "#f59e0b",
      description:
        "Marchés de Noël de Riga (place de la Dôme), fêtes traditionnelles, forêts enneigées. Froid (-5°C) mais atmosphère unique.",
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "riga",
      name: "Riga",
      region: "Côte de la mer Baltique",
      data: [
        { month: "Jan", temp: -4, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -4, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 45,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 65,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 60,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "jurmala",
      name: "Jūrmala",
      region: "Côte du golfe de Riga",
      data: [
        { month: "Jan", temp: -4, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -4, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 60,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 60,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 45,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Riga — Art Nouveau et Hanséatique",
      region: "Capitale",
      description:
        "Riga possède le plus grand ensemble Art Nouveau d'Europe : 800 bâtiments ornés de masques, atlantes et ornements floraux, concentrés dans le quartier Alberta iela. La Vieille Ville médiévale (UNESCO) avec la cathédrale du Dôme (plus grand orgue des pays baltes), la Maison des Têtes Noires et les ruelles pavées est l'une des plus belles du nord de l'Europe.",
      wikipedia: "Riga",
      tags: ["Art Nouveau", "UNESCO", "Hanséatique", "Orgue"],
      mustSee: [
        { name: "Alberta iela — rue Art Nouveau, chef-d'œuvre de Mikhail Eisenstein", wikipedia: "File:Edificio_modernista_en_Alberta_iela_2a,_Riga,_Letonia,_2012-08-07,_DD_02.JPG" },
        { name: "Maison des Têtes Noires (XVe s.) reconstruite — façade dorée", wikipedia: "File:House of the Blackheads, Riga, Latvia-24June2009.jpg" },
        { name: "Cathédrale du Dôme et son orgue historique (XIIIe s.)", wikipedia: "Riga_Cathedral" },
        { name: "Marché central de Riga — dans des hangars de zeppelins reconvertis", wikipedia: "Riga_Central_Market" },
      ],
    },
    {
      id: 2,
      name: "Jūrmala — Plages de sable et villas en bois",
      region: "Golfe de Riga",
      description:
        "Jūrmala est la station balnéaire historique de la noblesse russe et soviétique : 35km de plages de sable fin sur le golfe de Riga (eau plus chaude que la Baltique ouverte), et un alignement unique de villas en bois sculptées du XIXe siècle dans la pinède. À 30 minutes de train depuis Riga, c'est la sortie estivale incontournable des Rigains.",
      wikipedia: "Jūrmala",
      tags: ["Plage", "Villas en bois", "Pinède", "Balnéaire"],
      mustSee: [
        { name: "Plage de Majori — sable blanc et mer chaude du golfe", wikipedia: "File:Jurmala 2017 05.jpg" },
        { name: "Villas en bois Art Nouveau sculptées dans la pinède", wikipedia: "File:Kāpu iela 80 Jūrmala.jpg" },
        { name: "Jomas iela — rue piétonne animée avec cafés et marchés", wikipedia: "File:Jomas Street, Jurmala, Latvia.png" },
      ],
    },
    {
      id: 3,
      name: "Parc national de Gauja — Châteaux et grès",
      region: "Vidzeme (nord-est)",
      description:
        "Le parc national de Gauja est le plus grand de Lettonie : la rivière Gauja a taillé des falaises de grès rouge et des grottes dans la forêt. Sigulda, surnommée la 'Suisse lettone', est entourée de trois châteaux médiévaux (Sigulda, Turaida, Krimulda) en ruines dans la forêt. Un circuit de deux jours depuis Riga.",
      wikipedia: "Gauja_National_Park",
      tags: ["Forêt", "Châteaux", "Grottes", "Randonnée"],
      mustSee: [
        { name: "Château de Turaida (XIIIe s.) et tour ronde dans la forêt", wikipedia: "File:Turaida_Castle.JPG" },
        { name: "Grottes de grès de Gutmanis — plus grande grotte des pays baltes", wikipedia: "File:Gutmana ala3 8sep07.jpg" },
        { name: "Falaises de grès rouge le long de la Gauja", wikipedia: "File:Gauja National Park 14.jpg" },
      ],
    },
    {
      id: 4,
      name: "Rundale — Versailles balte",
      region: "Zemgale (sud)",
      description:
        "Le palais de Rundale est le Versailles des pays baltes : conçu par Rastrelli (l'architecte de l'Ermitage de Saint-Pétersbourg) pour le duc de Courlande au XVIIIe siècle, ses 138 pièces rococo et ses jardins à la française sont parmi les plus beaux d'Europe du Nord. À 80km de Riga, c'est une excursion d'une demi-journée.",
      wikipedia: "File:Rundāle Palace 27.jpg",
      tags: ["Palais", "Baroque", "Jardins", "Rococo"],
      mustSee: [
        { name: "Salle d'or du palais de Rundale — rococo letton parfait", wikipedia: "File:Rundale_Palace_reception_hall.JPG" },
        { name: "Jardins à la française de Rundale — parterres de roses", wikipedia: "File:Le_château_de_Rundal_(Rundal_Pils)_(6).JPG" },
        { name: "Exposition de la vie de cour du XVIIIe siècle", wikipedia: "File:Le_château_de_Rundal_(Rundal_Pils)_(9).JPG" },
        { name: "Village de Bauska et château ruiné à la confluence des rivières", wikipedia: "File:Bauska, Rīgas iela - panoramio (3).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Lettonie utilise l'euro depuis 2014. Les prix sont 30–40% inférieurs à ceux de la France. Riga est la plus chère des trois capitales baltes mais reste très abordable. Les transports en commun sont bon marché et efficaces.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse Riga (dortoir ou chambre)", price: "20–40 €", detail: "Bonne qualité, bien situées" },
          { label: "Hôtel 3★ Riga Vieille Ville", price: "60–110 €", detail: "Souvent dans des bâtiments historiques" },
          { label: "Villa en bois Jūrmala (location)", price: "50–100 €", detail: "Charme soviétique et balnéaire" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Pelēkie zirņi (pois gris au lard) + kvass dans une bodega", price: "6–10 €", detail: "Plats lettons traditionnels" },
          { label: "Restaurant mid-range Riga", price: "12–22 €", detail: "Cuisine locale et internationale" },
          { label: "Marché central — fromage de ferme, pain de seigle, poisson fumé", price: "5–10 €", detail: "Le meilleur marché des pays baltes" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Tram + bus Riga (ticket 24h)", price: "5 €", detail: "Réseau dense et ponctuel" },
          { label: "Train Riga–Jūrmala (30 min)", price: "2 €", detail: "Départs toutes les 30 min" },
          { label: "Bus Riga–Tallinn ou Vilnius (Lux Express)", price: "15–30 €", detail: "Bus confortables inter-capitales" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite palais de Rundale (entrée + jardins)", price: "10 €", detail: "Balade dans le parc incluse" },
          { label: "Concert dans la cathédrale du Dôme (orgue)", price: "15–25 €", detail: "Acoustique exceptionnelle" },
          { label: "Tour guidé Art Nouveau Riga (2h à pied)", price: "15–25 €", detail: "Guide francophone disponible" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Auberge + cuisine locale + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "90–160 €/j", desc: "Hôtel 3★ + restaurants + visites guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "7 jours",
      route: "Riga (3j) → Gauja / Sigulda (1j) → Jūrmala (1j) → Rundale (1j) → retour (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "900 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Riga (Ryanair, Air Baltic)", amount: "80–200 €" },
            { label: "Hébergement (7 nuits)", amount: "200–350 €" },
            { label: "Transports (train + bus)", amount: "80–150 €" },
            { label: "Nourriture + kvass + marché", amount: "220–380 €" },
            { label: "Activités + Rundale + Gauja", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 900 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Riga", amount: "100–250 €" },
            { label: "Hôtels 3★ (7 nuits)", amount: "500–900 €" },
            { label: "Voiture de location + transports", amount: "250–400 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Concerts, palais, excursions", amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~3h (Air Baltic direct CDG–Riga, Ryanair Beauvais–Riga). Plusieurs liaisons par semaine." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€). Carte bancaire acceptée partout. Espèces utiles dans les marchés et zones rurales." },
    { icon: "🗣️", label: "Langue",            value: "Letton. Anglais bien parlé par les jeunes. Russe compris par tous les plus de 40 ans." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution. CEAM valide. Tiques dans les forêts — pantalon long recommandé en été." },
    { icon: "🌲", label: "Nature",            value: "55% du territoire est couvert de forêts. Les Lettons ramassent champignons et baies en automne — une pratique nationale. Les forêts sont accessibles librement." },
    { icon: "🍺", label: "Kvass",             value: "Le kvass est la boisson nationale : une bière légèrement fermentée à base de pain de seigle, peu alcoolisée et rafraîchissante. À essayer au marché central." },
  ],
};
