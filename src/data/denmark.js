export const DENMARK = {
  code: "DNK",
  numericId: 208,
  name: { fr: "Danemark", en: "Denmark" },
  emoji: "🇩🇰",
  capital: { fr: "Copenhague", en: "Copenhagen" },
  language: { fr: "Danois", en: "Danish" },
  currency: { fr: "Couronne danoise (DKK)", en: "Danish krone (DKK)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 110, budgetMid: 190,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "Le Danemark est le pays du 'hygge' (bien-être douillet), du design scandinave, de Noma (plusieurs fois meilleur restaurant du monde), et de Hamlet (château d'Elseneur). Copenhague est la capitale vélo d'Europe, avec ses canaux de Nyhavn, ses marchés de street food de Reffen, ses musées de design et le parc de Tivoli. Le Danemark inclut aussi les Îles Féroé et le Groenland.",
    en: "Denmark is the land of hygge (cosy wellbeing), Scandinavian design, Noma (several times named the world's best restaurant), and Hamlet (Elsinore Castle). Copenhagen is Europe's cycling capital, with the Nyhavn canals, Reffen's street food markets, design museums and Tivoli Gardens. Denmark also includes the Faroe Islands and Greenland.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Été danois", en: "Danish summer" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : 18–23°C à Copenhague, longues journées lumineuses, festivals (Roskilde Festival), terrasses, marchés et archipels. L'été danois est court mais intense.",
        en: "Best time to go: 18–23°C in Copenhagen, long bright days, festivals (Roskilde Festival), terraces, markets and archipelagos. The Danish summer is short but intense.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre", en: "December" },
      label: { fr: "Noël scandinave", en: "Scandinavian Christmas" },
      color: "#f59e0b",
      description: {
        fr: "Marchés de Noël parmi les plus beaux d'Europe, Tivoli illuminé, hygge dans les cafés, vin chaud (gløgg) et æbleskiver. Températures froides (0–5°C) mais atmosphère unique.",
        en: "Some of Europe's most beautiful Christmas markets, Tivoli lit up, hygge in cafés, mulled wine (gløgg) and æbleskiver. Cold temperatures (0–5°C), but a truly unique atmosphere.",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "copenhagen",
      name: "Copenhague",
      region: { fr: "Capitale (île de Sjælland)", en: "Capital region (island of Zealand)" },
      data: [
        { month: "Jan", temp:  2, rain: 55,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  5, rain: 45,  icon: "⛅" },
        { month: "Avr", temp:  9, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 14, rain: 45,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Oct", temp: 10, rain: 65,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 65,  icon: "⛅" },
        { month: "Déc", temp:  3, rain: 55,  icon: "❄️" },
      ],
    },
    {
      id: "aarhus",
      name: "Aarhus",
      region: { fr: "Jutland (péninsule principale)", en: "Jutland (main peninsula)" },
      data: [
        { month: "Jan", temp:  1, rain: 55,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 45,  icon: "❄️" },
        { month: "Mar", temp:  4, rain: 40,  icon: "⛅" },
        { month: "Avr", temp:  8, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 70,  icon: "⛅" },
        { month: "Oct", temp: 10, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  5, rain: 65,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 60,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Copenhague — Vélos et canaux", en: "Copenhagen — Bikes and canals" },
      region: { fr: "Sjælland", en: "Zealand" },
      description: {
        fr: "Copenhague est régulièrement élue ville la plus cyclable du monde (400km de pistes cyclables). Nyhavn, ses maisons colorées du XVIIe siècle au bord de l'eau, est l'image de la ville. La Petite Sirène (sculpture d'Andersen), les ruelles de Christiania (commune libre), et la scène gastronomique (Noma, Geranium, Kadeau) font de Copenhague une capitale européenne de premier rang.",
        en: "Copenhagen is regularly ranked the world's most bike-friendly city (400 km of cycle lanes). Nyhavn, with its colourful 17th-century waterfront houses, is the city's signature image. The Little Mermaid (Andersen's sculpture), the lanes of Christiania (a self-governing free town), and the food scene (Noma, Geranium, Kadeau) make Copenhagen a top-tier European capital.",
      },
      wikipedia: "Copenhagen",
      tags: ["Vélo", "Design", "Gastronomie", "Canaux", "Ville", "Architecture"],
      mustSee: [
        { name: { fr: "Nyhavn — maisons colorées et bateaux historiques", en: "Nyhavn — colourful houses and historic boats" }, wikipedia: "Nyhavn" },
        { name: { fr: "Tivoli Gardens — parc d'attractions depuis 1843", en: "Tivoli Gardens — amusement park since 1843" }, wikipedia: "File:Tivoli Lake Parterrehaven.jpg" },
        { name: { fr: "Musée National et Statens Museum for Kunst", en: "National Museum and Statens Museum for Kunst" }, wikipedia: "File:Statens Museum for Kunst, København.jpg" },
        { name: { fr: "Christiania — commune libre et culture alternative", en: "Christiania — free town and alternative culture" }, wikipedia: "Freetown_Christiania" },
      ],
    },
    {
      id: 2,
      name: { fr: "Château de Kronborg — Hamlet's Castle", en: "Kronborg Castle — Hamlet's Castle" },
      region: { fr: "Helsingør (Elseneur)", en: "Helsingør (Elsinore)" },
      description: {
        fr: "Le château de Kronborg à Helsingør (à 45min de train de Copenhague) est classé UNESCO : c'est le château d'Elseneur de la pièce de Shakespeare 'Hamlet'. Construit en 1574, il contrôle le détroit de l'Øresund entre le Danemark et la Suède. Ses donjons abritent la statue du Viking légendaire Holger Danske, endormi jusqu'au jour où le Danemark aura besoin de lui.",
        en: "Kronborg Castle in Helsingør (45 minutes by train from Copenhagen) is a UNESCO site: it is Elsinore Castle from Shakespeare's Hamlet. Built in 1574, it overlooks the Øresund strait between Denmark and Sweden. Its underground casemates house the statue of the legendary Viking Holger Danske, asleep until the day Denmark needs him.",
      },
      wikipedia: "Kronborg",
      tags: ["Château", "Shakespeare", "UNESCO", "Histoire"],
      mustSee: [
        { name: { fr: "Château de Kronborg — décor de Hamlet (UNESCO)", en: "Kronborg Castle — the setting of Hamlet (UNESCO)" }, wikipedia: "Kronborg" },
        { name: { fr: "Donjons avec la statue de Holger Danske", en: "Casemates with the statue of Holger Danske" }, wikipedia: "File:Holger Danske, Kronborg 2023.jpg" },
        { name: { fr: "Vue sur l'Øresund et la Suède à 4km", en: "Views over the Øresund and Sweden just 4 km away" }, wikipedia: "Helsingør" },
        { name: { fr: "Musée maritime danois (M/S Museet for Søfart)", en: "Danish Maritime Museum (M/S Museet for Søfart)" }, wikipedia: "File:Maritime Museum of Denmark April 2026 01.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Legoland et Jutland — Dunes et patrimoine", en: "Legoland & Jutland — Dunes and heritage" },
      region: { fr: "Jutland (ouest)", en: "West Jutland" },
      description: {
        fr: "Billund abrite le Legoland original (créé en 1968) — le plus grand parc Lego du monde. Mais le Jutland réserve bien d'autres trésors : les dunes de Råbjerg Mile (la dune migratrice), les plages sauvages de la mer du Nord, et les tumulus vikings de Jelling (runes royales du Xe siècle, UNESCO) — le berceau du christianisme danois.",
        en: "Billund is home to the original Legoland (created in 1968) — the world's largest Lego park. But Jutland has many other treasures: the dunes of Råbjerg Mile (the migrating dune), the wild North Sea beaches, and the Viking burial mounds of Jelling (10th-century royal runestones, UNESCO) — the cradle of Danish Christianity.",
      },
      wikipedia: "File:Jutland Street - geograph.org.uk - 7939998.jpg",
      tags: ["Legoland", "Dunes", "UNESCO", "Plage", "Nature"],
      mustSee: [
        { name: { fr: "Legoland Billund — le parc Lego original (depuis 1968)", en: "Legoland Billund — the original Lego park (since 1968)" }, wikipedia: "File:LegoBillundTowerView.jpg" },
        { name: { fr: "Tumulus de Jelling — runes royales du Xe siècle (UNESCO)", en: "Jelling burial mounds — 10th-century royal runestones (UNESCO)" }, wikipedia: "File:Jelling, cemetery July 2015.jpg" },
        { name: { fr: "Dune migratrice de Råbjerg Mile — désert de sable en Scandinavie", en: "Råbjerg Mile migrating dune — a sandy desert in Scandinavia" }, wikipedia: "Råbjerg_Mile" },
        { name: { fr: "Plages sauvages de Skagen — pointe nord du Jutland", en: "Skagen's wild beaches — the northern tip of Jutland" }, wikipedia: "Skagen" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bornholm — Île fumée de harengs", en: "Bornholm — Island of smoked herring" },
      region: { fr: "Mer Baltique", en: "Baltic Sea" },
      description: {
        fr: "Bornholm est une île danoise en mer Baltique (plus proche de la Suède et de la Pologne que du Danemark) : ses roundkirker (églises-forteresses rondes du XIIe siècle, uniques en Europe), ses fumeries de harengs de Hasle et Nexø, ses plages de sable blanc, et ses rochers de granite font d'elle la perle cachée de Scandinavie.",
        en: "Bornholm is a Danish island in the Baltic Sea (closer to Sweden and Poland than to Denmark): its roundkirker (12th-century round fortress churches, unique in Europe), its smoked herring smokehouses in Hasle and Nexø, its white sand beaches, and its granite cliffs make it one of Scandinavia's hidden gems.",
      },
      wikipedia: "Bornholm",
      tags: ["Île", "Fumoirs", "Médiéval", "Baltique", "Nature", "Plage"],
      mustSee: [
        { name: { fr: "Roundkirker (églises rondes forteresses) — uniques en Europe", en: "Roundkirker (round fortress churches) — unique in Europe" }, wikipedia: "File:Nylars Round Church on Bornholm.jpg" },
        { name: { fr: "Rocher de Hammershus — ruines de château le plus grand de Scandinavie", en: "Hammershus — the ruins of Scandinavia's largest castle" }, wikipedia: "File:Bornholm Hammershus 01.jpg" },
        { name: { fr: "Plages de sable blanc de Dueodde (côte sud)", en: "Dueodde's white sand beaches (south coast)" }, wikipedia: "File:Stormy Baltic sea on Bornholm.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Danemark est parmi les pays les plus chers d'Europe. Les taxes (TVA à 25%) sont élevées mais incluses dans les prix affichés. Copenhague rivalise avec Zürich et Oslo en termes de coût de la vie. Le vélo permet d'économiser sur les transports.",
      en: "Denmark is one of the most expensive countries in Europe. Taxes (25% VAT) are high, but they are included in displayed prices. Copenhagen rivals Zurich and Oslo in terms of cost of living. Cycling helps save money on transport.",
    },
    currency: "DKK",
    exchangeRate: "1€ ≈ 7,45 DKK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse / hostel Copenhague", en: "Copenhagen hostel / youth hostel" }, price: "35–70 €", detail: { fr: "Dortoir ou chambre privée", en: "Dorm or private room" } },
          { label: { fr: "Hôtel 3★ Copenhague", en: "3★ hotel in Copenhagen" }, price: "130–220 €", detail: { fr: "Confort standard en capitale", en: "Standard comfort in the capital" } },
          { label: { fr: "Camping Danemark (réseau officiel)", en: "Camping in Denmark (official network)" }, price: "15–30 €", detail: { fr: "Qualité excellente, emplacements ombragés", en: "Excellent quality, shaded pitches" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Smørrebrød (tartines ouvertes danoises) dans un café", en: "Smørrebrød (Danish open sandwiches) in a café" }, price: "12–20 €", detail: { fr: "Déjeuner typique danois", en: "Typical Danish lunch" } },
          { label: { fr: "Street food marché de Torvehallerne ou Reffen", en: "Street food at Torvehallerne or Reffen" }, price: "10–18 €", detail: { fr: "Halles + conteneurs sur la rive", en: "Food hall + shipping containers on the waterfront" } },
          { label: { fr: "Supermarché Netto ou Aldi — courses journée", en: "Netto or Aldi supermarket — food for the day" }, price: "15–25 €", detail: { fr: "Option économique essentielle", en: "Essential budget option" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Métro + bus Copenhague (ticket 24h, zones 1–4)", en: "Copenhagen metro + bus (24-hour ticket, zones 1–4)" }, price: "14 €", detail: { fr: "Réseau excellent et ponctuel", en: "Excellent and punctual network" } },
          { label: { fr: "Train Copenhague–Aarhus (3h, DSB)", en: "Copenhagen–Aarhus train (3h, DSB)" }, price: "25–55 €", detail: { fr: "Réservation recommandée en été", en: "Booking recommended in summer" } },
          { label: { fr: "Location vélo Copenhague (journée)", en: "Bike rental in Copenhagen (full day)" }, price: "15–25 €", detail: { fr: "Le meilleur moyen de découvrir la ville", en: "The best way to explore the city" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Tivoli Gardens (entrée)", en: "Tivoli Gardens (entry)" }, price: "18 €", detail: { fr: "Manèges en supplément (pass disponible)", en: "Rides cost extra (passes available)" } },
          { label: { fr: "Musée national danois (entrée gratuite)", en: "National Museum of Denmark (free entry)" }, price: "0 €", detail: { fr: "Collections vikings et médiévales", en: "Viking and medieval collections" } },
          { label: { fr: "Tour en kayak des canaux de Copenhague", en: "Kayak tour of Copenhagen's canals" }, price: "30–50 €", detail: { fr: "Guidé ou location libre (2h)", en: "Guided or self-rental (2h)" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "110–170 €/j", desc: { fr: "Hostel + smørrebrød + supermarché + vélo", en: "Hostel + smørrebrød + supermarket + bike" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "190–320 €/j", desc: { fr: "Hôtel 3★ + restaurants + musées + excursions", en: "3★ hotel + restaurants + museums + excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "Copenhague (4j) → Helsingør / Kronborg (1j) → Bornholm (2j) → retour (1j)",
        en: "Copenhagen (4d) → Helsingør / Kronborg (1d) → Bornholm (2d) → return (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Copenhague (SAS, Air France, EasyJet)", en: "Return flight Paris–Copenhagen (SAS, Air France, EasyJet)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "400–650 €" },
            { label: { fr: "Transports (train + ferry + vélo)", en: "Transport (train + ferry + bike)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture (smørrebrød + supermarché)", en: "Food (smørrebrød + supermarket)" }, amount: "350–500 €" },
            { label: { fr: "Activités & entrées", en: "Activities & admission tickets" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Copenhague", en: "Return flight Paris–Copenhagen" }, amount: "100–300 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)" }, amount: "1 000–1 800 €" },
            { label: { fr: "Transports + ferry Bornholm", en: "Transport + Bornholm ferry" }, amount: "300–500 €" },
            { label: { fr: "Nourriture & restaurants (gastronomie)", en: "Food & restaurants (fine dining)" }, amount: "700–1 200 €" },
            { label: { fr: "Activités, musées, tours", en: "Activities, museums, tours" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h (SAS, Air France, EasyJet direct CDG–Copenhague CPH). Nombreux vols quotidiens.", en: "~2h (SAS, Air France, EasyJet direct CDG–Copenhagen CPH). Many daily flights." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French national ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Couronne danoise (DKK). Carte bancaire acceptée partout. Euros parfois acceptés (change défavorable). Espèces quasi inutiles.", en: "Danish krone (DKK). Cards are accepted everywhere. Euros are sometimes accepted (with poor exchange rates). Cash is almost unnecessary." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Danois. Anglais quasi-universel — tous les Danois parlent un anglais excellent.", en: "Danish. English is nearly universal — Danes generally speak excellent English." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F/K (européen + type K danois à 3 broches rondes) — 230V. La plupart des prises françaises fonctionnent directement.", en: "Type C/F/K (European + Danish type K with 3 round pins) — 230V. Most French plugs work directly." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution. Carte européenne d'assurance maladie (CEAM) valide. Système de santé parmi les meilleurs du monde.", en: "No special precautions. The European Health Insurance Card (EHIC) is valid. The healthcare system is among the best in the world." } },
    { icon: "🚲", label: { fr: "Vélo", en: "Cycling" }, value: { fr: "Copenhague est la capitale mondiale du vélo : 380km de pistes, priorité absolue aux cyclistes. Louer un vélo est le meilleur moyen de visiter.", en: "Copenhagen is the cycling capital of the world: 380 km of bike lanes and absolute priority for cyclists. Renting a bike is the best way to explore." } },
    { icon: "😊", label: { fr: "Hygge", en: "Hygge" }, value: { fr: "Le hygge désigne l'art danois du bien-être douillet : bougies, plaid, café chaud et bonne compagnie. C'est une philosophie de vie, surtout en hiver.", en: "Hygge is the Danish art of cosy wellbeing: candles, blankets, hot coffee and good company. It is a way of life, especially in winter." } },
  ],
};
