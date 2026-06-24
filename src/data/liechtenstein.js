export const LIECHTENSTEIN = {
  code: "LIE",
  numericId: 438,
  name: "Liechtenstein",
  emoji: "🇱🇮",
  capital: "Vaduz",
  language: "Allemand",
  currency: "Franc suisse (CHF)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 120, budgetMid: 200,
    tripMin: 1400, tripMid: 2500,
  },
  description:
    "Le Liechtenstein est l'un des six États doublement enclavés au monde, coincé entre la Suisse et l'Autriche, et le seul pays au monde à partager un nom avec sa famille régnante. Cette principauté de 37 000 habitants est connue pour son château médiéval dominant Vaduz, sa production viticole surprenante sur les pentes du Rhin, et son statut de paradis fiscal attirant de nombreuses holdings internationales. La nature grandiose des Alpes rhétiques offre de superbes randonnées et ski.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Randonnée et nature",
      color: "#22c55e",
      description:
        "L'été dévoile les sentiers alpins du Liechtenstein avec des vues splendides sur la vallée du Rhin et les Alpes suisses. Les températures sont agréables (18–25°C) et les vignobles en pleine verdure sont magnifiques à visiter.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Ski et hiver alpin",
      color: "#f59e0b",
      description:
        "La station de Malbun (à 1 600 m) propose un ski intimiste familial dans un cadre alpin authentique, loin des foules des grandes stations suisses. L'atmosphère hivernale de Vaduz avec son château enneigé est féerique.",
      icon: "⛷️",
    },
  ],
  weatherCities: [
    {
      id: "vaduz",
      name: "Vaduz",
      region: "Liechtenstein central",
      data: [
        { month: "Jan", temp: 1, rain: 65, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 55, icon: "❄️" },
        { month: "Mar", temp: 8, rain: 65, icon: "⛅" },
        { month: "Avr", temp: 12, rain: 75, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 95, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 110, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 120, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 115, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 85, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 75, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 70, icon: "⛅" },
        { month: "Déc", temp: 2, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Vaduz",
      region: "Commune de Vaduz",
      description:
        "Vaduz est l'une des plus petites capitales du monde, avec seulement 5 500 habitants. Elle est dominée par le château du prince Hans-Adam II, résidence officielle de la famille régnante et non ouverte au public, mais offrant une silhouette iconique sur la ville. La rue principale concentre les musées, le Kunstmuseum et les boutiques de timbres (le Liechtenstein est réputé philatéliquement).",
      wikipedia: "Vaduz",
      tags: ["Ville", "Château", "Musées", "Principauté"],
      mustSee: [
        { name: "Château de Vaduz — résidence princière médiévale en hauteur dominant la ville", wikipedia: "Vaduz_Castle" },
        { name: "Kunstmuseum Liechtenstein — musée d'art moderne et contemporain de haute qualité", wikipedia: "Kunstmuseum_Liechtenstein" },
        { name: "Landesmuseum — musée national d'histoire et de culture liechtensteinoise", wikipedia: "File:Liechtenstein_asv2022-10_img16_Vaduz_Verweserhaus.jpg" },
      ],
    },
    {
      id: 2,
      name: "Malbun",
      region: "Commune de Triesenberg",
      description:
        "Malbun est la seule station de ski du Liechtenstein, perchée à 1 600 m dans un vallon alpin préservé. Avec ses 23 km de pistes accessibles aux débutants et familles, et son ambiance intime typiquement alpine, elle offre une alternative authentique aux grandes stations suisses et autrichiennes voisines. L'été, les randonnées depuis Malbun vers les crêtes frontalières sont spectaculaires.",
      wikipedia: "Malbun",
      tags: ["Ski", "Montagne", "Famille", "Randonnée"],
      mustSee: [
        { name: "Domaine skiable de Malbun — 23 km de pistes familiales, ambiance locale", wikipedia: "Malbun" },
        { name: "Augstenberg (2 359 m) — point culminant accessible depuis Malbun, panorama exceptionnel", wikipedia: "Augstenberg" },
        { name: "Valorschtal — vallée idyllique au départ de randonnées vers l'Autriche", wikipedia: "File:Sücka_Saminatal_–_WAF_300_J_FL.jpg" },
        { name: "Fürstin-Gina-Weg — sentier panoramique autour du village de Malbun", wikipedia: "File:Furth_bei_Göttweig_-_Ortsansicht_der_KG_Steinaweg.jpg" },
      ],
    },
    {
      id: 3,
      name: "Triesenberg et villages alpins",
      region: "Commune de Triesenberg",
      description:
        "Triesenberg est un village walser perché à 884 m sur les flancs de la montagne, peuplé par des descendants de colons suisses alémanique (Walser) venus au XIVe siècle. Son musée walser et ses maisons traditionnelles en bois constituent un témoignage unique de cette culture de haute montagne. Le village offre une vue panoramique sur toute la vallée du Rhin et les Alpes suisses.",
      wikipedia: "Triesenberg",
      tags: ["Village", "Culture Walser", "Panorama", "Tradition"],
      mustSee: [
        { name: "Walsermuseum de Triesenberg — histoire de la colonisation walser du XIVe siècle", wikipedia: "Triesenberg" },
        { name: "Église paroissiale Saint-Joseph — architecture néo-romane dominant le village", wikipedia: "File:Triesenberg 08-2011 - panoramio (2).jpg" },
        { name: "Sentier panoramique Triesenberg — vue sur la vallée du Rhin et les Alpes", wikipedia: "File:Between_Steg_and_Triesenberg,_Liechtenstein_-_panoramio.jpg" },
        { name: "Steg — hameau alpin au bout de la vallée, idéal pour la randonnée", wikipedia: "File:Steg Gampel, 2024.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Le Liechtenstein utilise le franc suisse et partage les niveaux de prix élevés de la Suisse. C'est l'un des pays les plus chers d'Europe, avec des hébergements et une restauration à des tarifs comparables aux villes suisses. La proximité avec l'Autriche et la Suisse permet de trouver des options plus abordables.",
    currency: "CHF",
    exchangeRate: "1 CHF ≈ 1,06 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse ou gîte", price: "40–60 CHF", detail: "Options limitées, réservation indispensable" },
          { label: "Hôtel budget", price: "90–140 CHF", detail: "Chambre double simple à Vaduz ou Schaan" },
          { label: "Hôtel confort 3–4 étoiles", price: "160–250 CHF", detail: "Hôtels alpins de qualité à Vaduz ou Malbun" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Boulangerie ou Wurst (snack)", price: "8–14 CHF", detail: "Repas rapide, pain, charcuterie et fromages locaux" },
          { label: "Restaurant, menu midi", price: "20–30 CHF", detail: "Cuisine alpine : Käsknöpfle (spätzle au fromage), Rösti" },
          { label: "Restaurant dîner", price: "35–60 CHF", detail: "Cuisine liechtensteinoise gastronomique, vins locaux" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus national LIECHTENSTEINmobil", price: "2–4 CHF", detail: "Réseau de bus couvrant toutes les communes" },
          { label: "Train Zurich–Feldkirch (arrêt frontière)", price: "30–50 CHF", detail: "Plus proche grande gare, puis bus jusqu'à Vaduz (30 min)" },
          { label: "Location de vélo (journée)", price: "20–35 CHF", detail: "Idéal pour longer le Rhin et visiter les communes" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Kunstmuseum Liechtenstein", price: "15 CHF", detail: "Art moderne et contemporain de grande qualité" },
          { label: "Forfait ski Malbun (journée)", price: "40–55 CHF", detail: "Tarifs inférieurs aux grandes stations suisses" },
          { label: "Dégustation vins Domaine princier", price: "20–35 CHF", detail: "Visite et dégustation des vins du Prince régnant" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "120–160 €/j",
        desc: "Auberge, repas simples, bus, musées et randonnées gratuites",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "200–280 €/j",
        desc: "Hôtel alpin, restaurants, ski ou randonnée guidée, dégustations",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "3 jours",
      route: "Vaduz – Malbun – Triesenberg – Vignobles du Rhin",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "500 – 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Train A/R Paris–Zürich puis bus", amount: "80–160 €" },
            { label: "Hébergement (2 nuits)", amount: "80–120 €" },
            { label: "Transports locaux", amount: "15–25 €" },
            { label: "Nourriture + boissons", amount: "120–180 €" },
            { label: "Activités + musées", amount: "50–80 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "950 – 1 350 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Zürich puis navette", amount: "120–220 €" },
            { label: "Hébergement (2 nuits)", amount: "320–500 €" },
            { label: "Transports locaux", amount: "25–50 €" },
            { label: "Nourriture + boissons", amount: "280–400 €" },
            { label: "Activités + ski + dégustations", amount: "150–220 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Pas d'aéroport — prendre le train jusqu'à Zürich (4h30) ou Feldkirch (5h)" },
    { icon: "🪪", label: "Visa", value: "Aucun visa requis — membre de l'espace Schengen, carte d'identité française suffisante" },
    { icon: "💰", label: "Monnaie", value: "Franc suisse (CHF) — pays très cher, prévoir un budget conséquent" },
    { icon: "🗣️", label: "Langue", value: "Allemand (dialecte alémanique) — l'anglais est parlé dans les hôtels et musées" },
    { icon: "🔌", label: "Prise électrique", value: "Type J (prise suisse à 3 broches rondes) — adaptateur nécessaire" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie non valable — assurance voyage obligatoire" },
    { icon: "🏦", label: "Finance", value: "Paradis fiscal et financier — de nombreuses holdings internationales y sont domiciliées" },
    { icon: "📮", label: "Philatélie", value: "Les timbres du Liechtenstein sont collectionnés dans le monde entier, en vente au musée" },
  ],
};
