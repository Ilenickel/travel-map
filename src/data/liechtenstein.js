export const LIECHTENSTEIN = {
  code: "LIE",
  numericId: 438,
  name: { fr: "Liechtenstein", en: "Liechtenstein" },
  emoji: "🇱🇮",
  capital: { fr: "Vaduz", en: "Vaduz" },
  language: { fr: "Allemand", en: "German" },
  currency: { fr: "Franc suisse (CHF)", en: "Swiss Franc (CHF)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 120, budgetMid: 200,
    tripMin: 1400, tripMid: 2500,
  },
  description: {
    fr: "Le Liechtenstein est l'un des six États doublement enclavés au monde, coincé entre la Suisse et l'Autriche, et le seul pays au monde à partager un nom avec sa famille régnante. Cette principauté de 37 000 habitants est connue pour son château médiéval dominant Vaduz, sa production viticole surprenante sur les pentes du Rhin, et son statut de paradis fiscal attirant de nombreuses holdings internationales. La nature grandiose des Alpes rhétiques offre de superbes randonnées et ski.",
    en: "Liechtenstein is one of only six doubly landlocked states in the world, wedged between Switzerland and Austria, and the only country to share its name with its ruling family. This principality of 37,000 people is known for its medieval castle overlooking Vaduz, its surprising wine production on the slopes above the Rhine, and its status as a tax haven attracting numerous international holding companies. The grandiose nature of the Rhaetian Alps offers superb hiking and skiing.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Randonnée et nature", en: "Hiking and nature" },
      color: "#22c55e",
      description: {
        fr: "L'été dévoile les sentiers alpins du Liechtenstein avec des vues splendides sur la vallée du Rhin et les Alpes suisses. Les températures sont agréables (18–25°C) et les vignobles en pleine verdure sont magnifiques à visiter.",
        en: "Summer reveals Liechtenstein's alpine trails with splendid views over the Rhine valley and the Swiss Alps. Temperatures are pleasant (18–25°C) and the lush green vineyards are beautiful to visit.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Ski et hiver alpin", en: "Skiing and alpine winter" },
      color: "#f59e0b",
      description: {
        fr: "La station de Malbun (à 1 600 m) propose un ski intimiste familial dans un cadre alpin authentique, loin des foules des grandes stations suisses. L'atmosphère hivernale de Vaduz avec son château enneigé est féerique.",
        en: "The Malbun resort (at 1,600 m) offers intimate family skiing in an authentic alpine setting, far from the crowds of the big Swiss resorts. Vaduz's winter atmosphere, with its snow-capped castle, is magical.",
      },
      icon: "⛷️",
    },
  ],
  weatherCities: [
    {
      id: "vaduz",
      name: "Vaduz",
      region: { fr: "Liechtenstein central", en: "Central Liechtenstein" },
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
      region: { fr: "Commune de Vaduz", en: "Vaduz municipality" },
      description: {
        fr: "Vaduz est l'une des plus petites capitales du monde, avec seulement 5 500 habitants. Elle est dominée par le château du prince Hans-Adam II, résidence officielle de la famille régnante et non ouverte au public, mais offrant une silhouette iconique sur la ville. La rue principale concentre les musées, le Kunstmuseum et les boutiques de timbres (le Liechtenstein est réputé philatéliquement).",
        en: "Vaduz is one of the smallest capitals in the world, with just 5,500 inhabitants. It is dominated by the castle of Prince Hans-Adam II, the official residence of the ruling family, not open to the public but offering an iconic silhouette over the town. The main street is home to museums, the Kunstmuseum and stamp shops (Liechtenstein is renowned for its philately).",
      },
      wikipedia: "Vaduz",
      tags: ["Ville", "Château", "Musées", "Principauté"],
      mustSee: [
        { name: { fr: "Château de Vaduz — résidence princière médiévale en hauteur dominant la ville", en: "Vaduz Castle — medieval princely residence overlooking the town" }, wikipedia: "Vaduz_Castle" },
        { name: { fr: "Kunstmuseum Liechtenstein — musée d'art moderne et contemporain de haute qualité", en: "Kunstmuseum Liechtenstein — high-quality modern and contemporary art museum" }, wikipedia: "Kunstmuseum_Liechtenstein" },
        { name: { fr: "Landesmuseum — musée national d'histoire et de culture liechtensteinoise", en: "Landesmuseum — national museum of Liechtenstein history and culture" }, wikipedia: "File:Liechtenstein_asv2022-10_img16_Vaduz_Verweserhaus.jpg" },
      ],
    },
    {
      id: 2,
      name: "Malbun",
      region: { fr: "Commune de Triesenberg", en: "Triesenberg municipality" },
      description: {
        fr: "Malbun est la seule station de ski du Liechtenstein, perchée à 1 600 m dans un vallon alpin préservé. Avec ses 23 km de pistes accessibles aux débutants et familles, et son ambiance intime typiquement alpine, elle offre une alternative authentique aux grandes stations suisses et autrichiennes voisines. L'été, les randonnées depuis Malbun vers les crêtes frontalières sont spectaculaires.",
        en: "Malbun is Liechtenstein's only ski resort, perched at 1,600 m in an unspoiled alpine valley. With 23 km of slopes suited to beginners and families, and its typically intimate alpine atmosphere, it offers an authentic alternative to the large neighbouring Swiss and Austrian resorts. In summer, hikes from Malbun to the border ridges are spectacular.",
      },
      wikipedia: "Malbun",
      tags: ["Ski", "Montagne", "Famille", "Randonnée"],
      mustSee: [
        { name: { fr: "Domaine skiable de Malbun — 23 km de pistes familiales, ambiance locale", en: "Malbun ski area — 23 km of family-friendly slopes, local atmosphere" }, wikipedia: "Malbun" },
        { name: { fr: "Augstenberg (2 359 m) — point culminant accessible depuis Malbun, panorama exceptionnel", en: "Augstenberg (2,359 m) — highest peak accessible from Malbun, exceptional panorama" }, wikipedia: "Augstenberg" },
        { name: { fr: "Valorschtal — vallée idyllique au départ de randonnées vers l'Autriche", en: "Valorschtal — idyllic valley, starting point for hikes towards Austria" }, wikipedia: "File:Sücka_Saminatal_–_WAF_300_J_FL.jpg" },
        { name: { fr: "Fürstin-Gina-Weg — sentier panoramique autour du village de Malbun", en: "Fürstin-Gina-Weg — panoramic trail around the village of Malbun" }, wikipedia: "File:Furth_bei_Göttweig_-_Ortsansicht_der_KG_Steinaweg.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Triesenberg et villages alpins", en: "Triesenberg and alpine villages" },
      region: { fr: "Commune de Triesenberg", en: "Triesenberg municipality" },
      description: {
        fr: "Triesenberg est un village walser perché à 884 m sur les flancs de la montagne, peuplé par des descendants de colons suisses alémanique (Walser) venus au XIVe siècle. Son musée walser et ses maisons traditionnelles en bois constituent un témoignage unique de cette culture de haute montagne. Le village offre une vue panoramique sur toute la vallée du Rhin et les Alpes suisses.",
        en: "Triesenberg is a Walser village perched at 884 m on the mountainside, populated by descendants of German-speaking Swiss settlers (Walser) who arrived in the 14th century. Its Walser museum and traditional wooden houses are a unique testament to this high-mountain culture. The village offers a panoramic view over the entire Rhine valley and the Swiss Alps.",
      },
      wikipedia: "Triesenberg",
      tags: ["Village", "Culture Walser", "Panorama", "Tradition"],
      mustSee: [
        { name: { fr: "Walsermuseum de Triesenberg — histoire de la colonisation walser du XIVe siècle", en: "Walsermuseum in Triesenberg — history of 14th-century Walser settlement" }, wikipedia: "Triesenberg" },
        { name: { fr: "Église paroissiale Saint-Joseph — architecture néo-romane dominant le village", en: "St. Joseph's parish church — neo-Romanesque architecture overlooking the village" }, wikipedia: "File:Triesenberg 08-2011 - panoramio (2).jpg" },
        { name: { fr: "Sentier panoramique Triesenberg — vue sur la vallée du Rhin et les Alpes", en: "Triesenberg panoramic trail — view over the Rhine valley and the Alps" }, wikipedia: "File:Between_Steg_and_Triesenberg,_Liechtenstein_-_panoramio.jpg" },
        { name: { fr: "Steg — hameau alpin au bout de la vallée, idéal pour la randonnée", en: "Steg — alpine hamlet at the end of the valley, ideal for hiking" }, wikipedia: "File:Steg Gampel, 2024.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Le Liechtenstein utilise le franc suisse et partage les niveaux de prix élevés de la Suisse. C'est l'un des pays les plus chers d'Europe, avec des hébergements et une restauration à des tarifs comparables aux villes suisses. La proximité avec l'Autriche et la Suisse permet de trouver des options plus abordables.",
      en: "Liechtenstein uses the Swiss franc and shares Switzerland's high price levels. It is one of the most expensive countries in Europe, with accommodation and dining at rates comparable to Swiss cities. Proximity to Austria and Switzerland makes it possible to find more affordable options.",
    },
    currency: "CHF",
    exchangeRate: "1 CHF ≈ 1,06 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse ou gîte", en: "Youth hostel or B&B" }, price: "40–60 CHF", detail: { fr: "Options limitées, réservation indispensable", en: "Limited options, booking essential" } },
          { label: { fr: "Hôtel budget", en: "Budget hotel" }, price: "90–140 CHF", detail: { fr: "Chambre double simple à Vaduz ou Schaan", en: "Simple double room in Vaduz or Schaan" } },
          { label: { fr: "Hôtel confort 3–4 étoiles", en: "3–4 star comfort hotel" }, price: "160–250 CHF", detail: { fr: "Hôtels alpins de qualité à Vaduz ou Malbun", en: "Quality alpine hotels in Vaduz or Malbun" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Boulangerie ou Wurst (snack)", en: "Bakery or Wurst (snack)" }, price: "8–14 CHF", detail: { fr: "Repas rapide, pain, charcuterie et fromages locaux", en: "Quick meal, bread, cold cuts and local cheeses" } },
          { label: { fr: "Restaurant, menu midi", en: "Restaurant, lunch menu" }, price: "20–30 CHF", detail: { fr: "Cuisine alpine : Käsknöpfle (spätzle au fromage), Rösti", en: "Alpine cuisine: Käsknöpfle (cheese spätzle), Rösti" } },
          { label: { fr: "Restaurant dîner", en: "Restaurant dinner" }, price: "35–60 CHF", detail: { fr: "Cuisine liechtensteinoise gastronomique, vins locaux", en: "Fine Liechtenstein cuisine, local wines" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus national LIECHTENSTEINmobil", en: "National LIECHTENSTEINmobil bus" }, price: "2–4 CHF", detail: { fr: "Réseau de bus couvrant toutes les communes", en: "Bus network covering all municipalities" } },
          { label: { fr: "Train Zurich–Feldkirch (arrêt frontière)", en: "Train Zurich–Feldkirch (border stop)" }, price: "30–50 CHF", detail: { fr: "Plus proche grande gare, puis bus jusqu'à Vaduz (30 min)", en: "Nearest major station, then bus to Vaduz (30 min)" } },
          { label: { fr: "Location de vélo (journée)", en: "Bike rental (day)" }, price: "20–35 CHF", detail: { fr: "Idéal pour longer le Rhin et visiter les communes", en: "Ideal for following the Rhine and visiting the municipalities" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: "Kunstmuseum Liechtenstein", price: "15 CHF", detail: { fr: "Art moderne et contemporain de grande qualité", en: "High-quality modern and contemporary art" } },
          { label: { fr: "Forfait ski Malbun (journée)", en: "Malbun ski pass (day)" }, price: "40–55 CHF", detail: { fr: "Tarifs inférieurs aux grandes stations suisses", en: "Lower rates than the big Swiss resorts" } },
          { label: { fr: "Dégustation vins Domaine princier", en: "Princely Wine Estate tasting" }, price: "20–35 CHF", detail: { fr: "Visite et dégustation des vins du Prince régnant", en: "Tour and tasting of the reigning Prince's wines" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "120–160 €/j",
        desc: { fr: "Auberge, repas simples, bus, musées et randonnées gratuites", en: "Hostel, simple meals, bus, museums and free hikes" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "200–280 €/j",
        desc: { fr: "Hôtel alpin, restaurants, ski ou randonnée guidée, dégustations", en: "Alpine hotel, restaurants, skiing or guided hikes, tastings" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "3 jours", en: "3 days" },
      route: { fr: "Vaduz – Malbun – Triesenberg – Vignobles du Rhin", en: "Vaduz – Malbun – Triesenberg – Rhine vineyards" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "500 – 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Train A/R Paris–Zürich puis bus", en: "Return train Paris–Zurich then bus" }, amount: "80–160 €" },
            { label: { fr: "Hébergement (2 nuits)", en: "Accommodation (2 nights)" }, amount: "80–120 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "15–25 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "120–180 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "50–80 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "950 – 1 350 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Zürich puis navette", en: "Return flight Paris–Zurich then shuttle" }, amount: "120–220 €" },
            { label: { fr: "Hébergement (2 nuits)", en: "Accommodation (2 nights)" }, amount: "320–500 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "25–50 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "280–400 €" },
            { label: { fr: "Activités + ski + dégustations", en: "Activities + skiing + tastings" }, amount: "150–220 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "Pas d'aéroport — prendre le train jusqu'à Zürich (4h30) ou Feldkirch (5h)", en: "No airport — take the train to Zurich (4h30) or Feldkirch (5h)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa requis — membre de l'espace Schengen, carte d'identité française suffisante", en: "No visa required — Schengen area member, French national ID card is sufficient" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc suisse (CHF) — pays très cher, prévoir un budget conséquent", en: "Swiss franc (CHF) — a very expensive country, plan a substantial budget" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Allemand (dialecte alémanique) — l'anglais est parlé dans les hôtels et musées", en: "German (Alemannic dialect) — English is spoken in hotels and museums" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type J (prise suisse à 3 broches rondes) — adaptateur nécessaire", en: "Type J (Swiss 3-round-pin plug) — adapter required" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Carte européenne d'assurance maladie non valable — assurance voyage obligatoire", en: "European health insurance card not valid — travel insurance mandatory" } },
    { icon: "🏦", label: { fr: "Finance", en: "Finance" }, value: { fr: "Paradis fiscal et financier — de nombreuses holdings internationales y sont domiciliées", en: "Tax and financial haven — home to numerous international holding companies" } },
    { icon: "📮", label: { fr: "Philatélie", en: "Philately" }, value: { fr: "Les timbres du Liechtenstein sont collectionnés dans le monde entier, en vente au musée", en: "Liechtenstein stamps are collected worldwide, on sale at the museum" } },
  ],
};
