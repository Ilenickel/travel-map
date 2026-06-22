export const BULGARIA = {
  code: "BGR",
  numericId: 100,
  name: "Bulgarie",
  emoji: "🇧🇬",
  capital: "Sofia",
  language: "Bulgare",
  currency: "Lev bulgare (BGN)",
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 35, budgetMid: 65,
    tripMin: 700, tripMid: 1600,
  },
  description:
    "La Bulgarie est l'une des meilleures valeurs d'Europe : la côte de la mer Noire avec ses plages de sable et ses eaux chaudes (27°C en été), les villes médiévales de Veliko Tarnovo et Plovdiv (capitale européenne de la culture 2019), le monastère de Rila (UNESCO), les Balkans avec leurs villages roses de Koprivshtitsa, et le vin local parmi les meilleurs d'Europe de l'Est.",

  bestPeriods: [
    {
      months: "Mai – Septembre",
      label: "Printemps et été",
      color: "#22c55e",
      description:
        "Côte noire excellente de juin à septembre (eau 26–28°C). Intérieur des terres agréable en mai-juin et septembre. Températures 22–28°C à Sofia en été.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Ski hivernal",
      color: "#3b82f6",
      description:
        "Bansko et Borovets offrent le ski le moins cher d'Europe (forfait 25–35€/jour). Températures -5 à -10°C en montagne.",
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "sofia",
      name: "Sofia",
      region: "Thrace (centre-ouest)",
      data: [
        { month: "Jan", temp:  0, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  7, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 12, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 17, rain: 75,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 45,  icon: "☀️" },
        { month: "Sep", temp: 19, rain: 45,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 60,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "varna",
      name: "Varna",
      region: "Côte de la mer Noire",
      data: [
        { month: "Jan", temp:  3, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  4, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 22, rain: 50,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Sep", temp: 22, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 16, rain: 45,  icon: "⛅" },
        { month: "Nov", temp: 10, rain: 50,  icon: "⛅" },
        { month: "Déc", temp:  5, rain: 50,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Côte de la mer Noire — Plages et histoire",
      region: "Littorale Est",
      description:
        "La côte bulgare de la mer Noire offre 350km de plages de sable doré et des eaux chaudes (27°C en juillet-août). Sozopol, cité grecque antique sur un cap rocheux, est l'une des plus belles villes côtières de Bulgarie. Nessebar (UNESCO) est une ville byzantine et médiévale préservée sur un isthme rocheux. Les stations de Sunny Beach et Golden Sands attirent les familles.",
      wikipedia: "File:Bulgaria black sea coast.jpg",
      tags: ["Plage", "Mer Noire", "Grec antique", "UNESCO"],
      mustSee: [
        { name: "Sozopol — cité grecque antique sur cap rocheux", wikipedia: "File:Sozopol2.jpg" },
        { name: "Nessebar — ville byzantine et médiévale (UNESCO)", wikipedia: "File:Church of Christ Pantocrator Nesebar.jpg" },
        { name: "Plages de sable de Sunny Beach et Golden Sands", wikipedia: "File:Sunny-Beach-BDimitrov.jpg" },
        { name: "Cap Kaliakra — falaises sur la mer Noire + colonie de dauphins", wikipedia: "File:Kaliakra.JPG" },
      ],
    },
    {
      id: 2,
      name: "Monastère de Rila — UNESCO",
      region: "Balkans (massif de Rila)",
      description:
        "Le monastère de Rila (UNESCO) est le plus grand et le plus important de Bulgarie — fondé au Xe siècle dans les montagnes à 1 147m d'altitude. Ses fresques du XIXe siècle (plus de 1 200 scènes bibliques sur les galeries) et son architecture à arcs rayés noirs et blancs en font l'un des plus beaux ensembles religieux des Balkans. Pèlerinage national vivant.",
      wikipedia: "Rila_Monastery",
      tags: ["Monastère", "UNESCO", "Fresques", "Montagnes"],
      mustSee: [
        { name: "Fresques des galeries du monastère (1 200 scènes)", wikipedia: "File:Religious fresco in Rila Monastery.jpg" },
        { name: "Musée du monastère — trésor religieux et icônes", wikipedia: "Rila_Monastery" },
        { name: "Randonnée aux Lacs de Rila (7 lacs glaciaires à 2 500m)", wikipedia: "Seven_Rila_Lakes" },
        { name: "Tour des Balkans depuis le monastère — vue sur les crêtes", wikipedia: "File:Rila Monastery 12.jpg" },
      ],
    },
    {
      id: 3,
      name: "Plovdiv — Capitale européenne de la culture",
      region: "Thrace (sud)",
      description:
        "Plovdiv est la deuxième ville de Bulgarie et l'une des plus vieilles villes d'Europe continuellement habitée (6 000 ans). Son vieux quartier sur les collines (Kapana — le labyrinthe) mélange maisons renaissance bulgare du XIXe siècle, rues pavées, galeries d'art et cafés branchés. L'amphithéâtre romain du IIe siècle est encore utilisé pour les concerts.",
      wikipedia: "Plovdiv",
      tags: ["Vieille ville", "Romain", "Capitale culture", "Art"],
      mustSee: [
        { name: "Vieille ville de Plovdiv — maisons renaissance bulgare du XIXe s.", wikipedia: "File:Odeon plovdiv old.jpg" },
        { name: "Amphithéâtre romain (IIe s.) — concerts en plein air", wikipedia: "File:Plovdiv Ancient theatre.jpg" },
        { name: "Kapana — le labyrinthe, quartier artiste et café", wikipedia: "File:Plovdiv116.jpg" },
        { name: "Musée d'histoire régionale + collections thraces et romaines", wikipedia: "File:Regional Ethnographic Museum, Plovdiv.jpg" },
      ],
    },
    {
      id: 4,
      name: "Veliko Tarnovo — Ancienne capitale médiévale",
      region: "Bulgarie centrale",
      description:
        "Veliko Tarnovo était la capitale du Second Empire bulgare (1185–1393). Sa forteresse de Tsarevets, sur une colline entourée d'un méandre de la Yantra, est le symbole national bulgare. Le spectacle son-et-lumière nocturne sur les remparts est inoubliable. La vieille ville en terrasses descend vers la rivière dans un paysage de carte postale.",
      wikipedia: "File:Veliko Tarnovo (Велико Търново) - Tsarevets.JPG",
      tags: ["Médiéval", "Forteresse", "Capitale", "Son-et-lumière"],
      mustSee: [
        { name: "Forteresse de Tsarevets — spectacle son-et-lumière le soir", wikipedia: "File:Tsarevets - Veliko Tarnovo - 2.jpg" },
        { name: "Vieille ville de Veliko Tarnovo — maisons en terrasses", wikipedia: "File:Veliko Tarnovo - Varosha quarter.jpg" },
        { name: "Monastère de Preobrazhenski au pied des falaises", wikipedia: "File:MONASTERY OF PREOBRZENSKI, VELIKO TURNOVO.jpg" },
        { name: "Village artisanal d'Arbanasi — maisons forteresses ottomanes", wikipedia: "File:Arbanasi-imagesfrombulgaria.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Bulgarie est la destination la moins chère de l'UE. Les prix sont 50–60% inférieurs à ceux de la France. La côte de la mer Noire, très touristique, est un peu plus chère en juillet-août. Le ski à Bansko est le moins cher d'Europe pour la même qualité de neige.",
    currency: "BGN",
    exchangeRate: "1€ ≈ 1,96 BGN (taux fixe — lev arrimé à l'euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / pension en province", price: "15–30 €", detail: "Chambre propre, petit-déj inclus souvent" },
          { label: "Hôtel 3★ Sofia ou Plovdiv", price: "45–90 €", detail: "Bon confort, bien situé" },
          { label: "Appartement bord de mer (Sozopol, juillet-août)", price: "40–90 €", detail: "Location directe, vue mer" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Shopska salade + banitsa (feta et épinards feuilletés)", price: "5–10 €", detail: "Repas complet bulgare" },
          { label: "Restaurant mid-range Sofia ou Plovdiv", price: "10–20 €", detail: "Kavarma, grillades et vin local" },
          { label: "Boza + banitsa au marché du matin", price: "1–3 €", detail: "Petit-déjeuner bulgare ultra-typique" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus interurbain (Sofia–Plovdiv, 2h)", price: "6–10 €", detail: "Réseau dense et abordable" },
          { label: "Train BDZ Sofia–Varna (7h, ligne panoramique)", price: "12–20 €", detail: "Traversée des Balkans" },
          { label: "Tramway Sofia (ticket)", price: "0,50 €", detail: "Réseau étendu en capitale" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite monastère de Rila + randonnée 7 lacs", price: "15–40 €", detail: "Journée depuis Sofia" },
          { label: "Spectacle son-et-lumière Tsarevets (soir)", price: "5–10 €", detail: "Incontournable à Tarnovo" },
          { label: "Forfait ski Bansko (journée)", price: "25–35 €", detail: "Le ski le moins cher d'Europe" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Guesthouse + restaurants locaux + bus", color: "#22c55e" },
      { type: "Confort", daily: "65–120 €/j", desc: "Hôtel 3★ + restaurants + visites guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Sofia (2j) → Rila (1j) → Plovdiv (2j) → Veliko Tarnovo (2j) → Côte mer Noire / Sozopol (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "700 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Sofia (Wizz Air, Ryanair, Bulgaria Air)", amount: "70–200 €" },
            { label: "Hébergement (10 nuits)", amount: "200–350 €" },
            { label: "Transports (bus + train)", amount: "80–150 €" },
            { label: "Nourriture + vins locaux", amount: "200–350 €" },
            { label: "Activités, monastères, plages", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 600 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Sofia", amount: "100–250 €" },
            { label: "Hôtels 3★ (10 nuits)", amount: "500–900 €" },
            { label: "Voiture de location (10 jours)", amount: "250–400 €" },
            { label: "Nourriture & restaurants", amount: "350–650 €" },
            { label: "Activités, ski, sorties", amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 (Wizz Air, Ryanair, Bulgaria Air direct CDG/Beauvais–Sofia). Aussi vols vers Varna et Bourgas en été." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — UE (Bulgarie membre depuis 2007). Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Lev bulgare (BGN, arrimé à l'euro). Carte bancaire bien acceptée en ville. Espèces indispensables à la campagne et dans les monastères." },
    { icon: "🗣️", label: "Langue",            value: "Bulgare (alphabet cyrillique). Anglais parlé par les jeunes. Russe compris par les anciens. Peu de français." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution. CEAM valide. Eau du robinet potable dans les villes (vérifier en zone rurale)." },
    { icon: "🤝", label: "Gestuelle",         value: "ATTENTION : en Bulgarie, hocher la tête de haut en bas signifie NON, et secouer la tête de gauche à droite signifie OUI — le contraire de la France. Source de nombreux malentendus." },
    { icon: "🍷", label: "Vin",               value: "La Bulgarie produit d'excellents vins (Mavrud, Melnik, Rubin) à des prix imbattables. Les régions de Melnik et Plovdiv sont les meilleures." },
  ],
};
