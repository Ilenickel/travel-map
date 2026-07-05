export const IRAQ = {
  code: "IRQ",
  numericId: 368,
  name: { fr: "Irak", en: "Iraq" },
  emoji: "🇮🇶",
  capital: { fr: "Bagdad", en: "Baghdad" },
  language: { fr: "Arabe, Kurde", en: "Arabic, Kurdish" },
  currency: { fr: "Dinar irakien (IQD)", en: "Iraqi dinar (IQD)" },
  timezone: "UTC+3",
  filter: { budgetMin: 45, budgetMid: 90, tripMin: 950, tripMid: 2000 },
  description: {
    fr: "L'Irak est le berceau de la civilisation mésopotamienne, la « Terre entre les deux fleuves » où l'humanité a inventé l'écriture, les premières villes et les premières lois. Ses sites archéologiques — Babylone, Ur, Ninive — témoignent de millénaires d'histoire que peu de pays au monde peuvent égaler. Après des décennies de conflits, le pays amorce une timide ouverture touristique, notamment dans la région autonome du Kurdistan irakien, considérée comme relativement sûre.",
    en: "Iraq is the cradle of Mesopotamian civilisation, the 'land between the two rivers' where humanity invented writing, the first cities and the first laws. Its archaeological sites — Babylon, Ur and Nineveh — bear witness to millennia of history matched by very few countries. After decades of conflict, the country is cautiously opening to tourism, especially in the autonomous Kurdistan Region, which is generally considered the safest part of Iraq for visitors.",
  },

  bestPeriods: [
    {
      months: { fr: "Mar – Mai", en: "Mar – May" },
      label: { fr: "Printemps — idéal", en: "Spring — ideal" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (20–30 °C), végétation verdoyante dans le Kurdistan, idéal pour les sites archéologiques.",
        en: "Pleasant temperatures (20–30°C), green countryside in Kurdistan and ideal conditions for archaeological sites.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Oct – Nov", en: "Oct – Nov" },
      label: { fr: "Automne — très bien", en: "Autumn — very good" },
      color: "#22c55e",
      description: {
        fr: "Chaleur retombée, belles lumières dorées sur les ruines, ambiance calme.",
        en: "The heat has eased, golden light falls on the ruins, and the atmosphere is calm.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Déc – Fév", en: "Dec – Feb" },
      label: { fr: "Hiver — correct", en: "Winter — acceptable" },
      color: "#f59e0b",
      description: {
        fr: "Frais à Bagdad, froid et neigeux dans le Kurdistan. Quelques pluies mais peu de touristes.",
        en: "Cool in Baghdad, cold and snowy in Kurdistan. A few showers, but relatively few tourists.",
      },
      icon: "⛅",
    },
    {
      months: { fr: "Jun – Sep", en: "Jun – Sep" },
      label: { fr: "Été — à éviter", en: "Summer — best avoided" },
      color: "#ef4444",
      description: {
        fr: "Chaleur extrême (40–50 °C à Bagdad). Conditions de voyage très difficiles.",
        en: "Extreme heat (40–50°C in Baghdad). Travel conditions are extremely difficult.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "baghdad",
      name: "Bagdad",
      region: { fr: "Centre", en: "Central Iraq" },
      data: [
        { month: "Jan", temp: 10, rain: 25, icon: "⛅" },
        { month: "Fév", temp: 13, rain: 22, icon: "⛅" },
        { month: "Mar", temp: 18, rain: 20, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 20, icon: "☀️" },
        { month: "Mai", temp: 31, rain: 5, icon: "⛅" },
        { month: "Jun", temp: 36, rain: 0, icon: "🌡️" },
        { month: "Jul", temp: 40, rain: 0, icon: "🌡️" },
        { month: "Aoû", temp: 39, rain: 0, icon: "🌡️" },
        { month: "Sep", temp: 34, rain: 0, icon: "🌡️" },
        { month: "Oct", temp: 26, rain: 5, icon: "☀️" },
        { month: "Nov", temp: 17, rain: 20, icon: "☀️" },
        { month: "Déc", temp: 11, rain: 25, icon: "⛅" },
      ],
    },
    {
      id: "erbil",
      name: "Erbil",
      region: { fr: "Kurdistan", en: "Kurdistan Region" },
      data: [
        { month: "Jan", temp: 5, rain: 80, icon: "❄️" },
        { month: "Fév", temp: 7, rain: 70, icon: "⛅" },
        { month: "Mar", temp: 12, rain: 65, icon: "⛅" },
        { month: "Avr", temp: 18, rain: 55, icon: "☀️" },
        { month: "Mai", temp: 25, rain: 25, icon: "☀️" },
        { month: "Jun", temp: 33, rain: 2, icon: "🌡️" },
        { month: "Jul", temp: 38, rain: 0, icon: "🌡️" },
        { month: "Aoû", temp: 37, rain: 0, icon: "🌡️" },
        { month: "Sep", temp: 31, rain: 2, icon: "⛅" },
        { month: "Oct", temp: 22, rain: 20, icon: "☀️" },
        { month: "Nov", temp: 13, rain: 50, icon: "⛅" },
        { month: "Déc", temp: 7, rain: 75, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Erbil (Hawler)", en: "Erbil (Hawler)" },
      region: { fr: "Kurdistan irakien", en: "Iraqi Kurdistan" },
      description: {
        fr: "Erbil est la capitale de la région autonome du Kurdistan irakien et l'une des villes continuellement habitées les plus anciennes du monde. Sa citadelle, perchée sur un tell artificiel de 30 mètres de haut et inscrite au patrimoine mondial de l'UNESCO, surplombe une ville moderne et dynamique aux bazars animés et aux restaurants animés. Le Kurdistan irakien est la destination la plus accessible et la plus sûre d'Irak pour les voyageurs étrangers.",
        en: "Erbil is the capital of the autonomous Kurdistan Region and one of the oldest continuously inhabited cities in the world. Its citadel, perched on an artificial mound 30 metres high and listed as a UNESCO World Heritage Site, overlooks a modern, energetic city with lively bazaars and restaurants. For foreign visitors, Iraqi Kurdistan is the most accessible and safest part of Iraq.",
      },
      wikipedia: "Erbil",
      tags: ["UNESCO", "Histoire", "Kurdistan", "Culture", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Citadelle d'Erbil — forteresse millénaire classée à l'UNESCO", en: "Erbil Citadel — a UNESCO-listed millennium-old fortress" }, wikipedia: "File:Citadel (old city) of Hewlêr (Erbil).jpg" },
        { name: { fr: "Grand Bazar d'Erbil — marché couvert traditionnel", en: "Erbil Grand Bazaar — a traditional covered market" }, wikipedia: "File:Kurdistan - Erbil - Qaysari Market.jpg" },
        { name: { fr: "Musée de la Civilisation du Kurdistan — archéologie régionale", en: "Kurdish Civilisation Museum — regional archaeology" }, wikipedia: "File:250._Erbil_Stones_and_Gems_Museum._Interior_of_Erbil_Citadel,_Hawler,_Erbil_Governorate,_Iraq.jpg" },
        { name: { fr: "Parc Sami Abdulrahman — grande promenade urbaine", en: "Sami Abdulrahman Park — a large urban promenade" }, wikipedia: "File:Parki_Sami_Abdulrahman_in_Erbil,_capital_of_the_Kurdistan_Region_of_Iraq.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Bagdad", en: "Baghdad" },
      region: { fr: "Centre", en: "Central Iraq" },
      description: {
        fr: "Bagdad, fondée en 762 par le calife abbasside al-Mansur, fut pendant des siècles la capitale intellectuelle et culturelle du monde islamique, hébergeant la célèbre Maison de la Sagesse. La ville moderne, marquée par des décennies de conflits, conserve des trésors remarquables comme le Musée national irakien et la rue al-Mutanabbi, symbole de la vie intellectuelle irakienne. La situation sécuritaire s'est améliorée depuis 2017 mais reste fragile.",
        en: "Founded in 762 by the Abbasid caliph al-Mansur, Baghdad was for centuries the intellectual and cultural capital of the Islamic world, home to the famed House of Wisdom. The modern city, shaped by decades of conflict, still preserves remarkable treasures such as the Iraq National Museum and al-Mutanabbi Street, a symbol of Iraq's intellectual life. Security has improved since 2017, but the situation remains fragile.",
      },
      wikipedia: "Baghdad",
      tags: ["Histoire", "Musées", "Culture", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Musée national d'Irak — l'une des plus grandes collections d'antiquités mésopotamiennes", en: "Iraq National Museum — one of the world's largest Mesopotamian antiquities collections" }, wikipedia: "File:National Museum Iraq (cropped).jpg" },
        { name: { fr: "Rue al-Mutanabbi — artère des libraires et intellectuels", en: "Al-Mutanabbi Street — Baghdad's street of booksellers and intellectuals" }, wikipedia: "File:Al-Mutanabbi Street Gate.png" },
        { name: { fr: "Mosquée al-Kadhimiya — sanctuaire chiite du VIIIe imam", en: "Al-Kadhimiya Mosque — Shiite shrine of the eighth imam" }, wikipedia: "File:Ø§Ù„Ø¹ØªØ¨Ø© Ø§Ù„ÙƒØ§Ø¸Ù…ÙŠØ© (4).jpg" },
        { name: { fr: "Marché al-Shorja — grand marché populaire de Bagdad", en: "Al-Shorja market — Baghdad's great popular market" }, wikipedia: "File:Shorja samawa.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Babylone", en: "Babylon" },
      region: { fr: "Centre-Sud", en: "South-central Iraq" },
      description: {
        fr: "Babylone, l'une des cités les plus légendaires de l'Antiquité, fut la capitale du premier empire babylonien et le foyer du célèbre Code d'Hammourabi. Bien que le site ait été partiellement reconstruit et endommagé, ses ruines imposantes — dont les restes de la porte d'Ishtar et des vestiges du palais de Nabuchodonosor — restent un pèlerinage incontournable pour les amateurs d'histoire. Le site est désormais inscrit au patrimoine mondial de l'UNESCO.",
        en: "Babylon, one of antiquity's most legendary cities, was the capital of the First Babylonian Empire and the home of Hammurabi's famous code. Although the site has been partly reconstructed and damaged, its imposing ruins — including remnants of the Ishtar Gate and the remains of Nebuchadnezzar's palace — remain a must-see pilgrimage for history lovers. The site is now a UNESCO World Heritage Site.",
      },
      wikipedia: "Babylon",
      tags: ["UNESCO", "Antiquité", "Archéologie", "Mésopotamie", "Architecture", "Désert"],
      mustSee: [
        { name: { fr: "Porte d'Ishtar — reconstruction de la célèbre porte ornée de céramiques bleues", en: "Ishtar Gate — a reconstruction of the famous blue-glazed gate" }, wikipedia: "Ishtar_Gate" },
        { name: { fr: "Palais de Nabuchodonosor — ruines du palais royal babylonien", en: "Nebuchadnezzar's palace — ruins of the Babylonian royal palace" }, wikipedia: "Nebuchadnezzar_II" },
        { name: { fr: "Musée du site de Babylone — artefacts et maquettes", en: "Babylon site museum — artefacts and scale models" }, wikipedia: "File:Bible-Lands-Museum-Jerusalem-in-Babylon-32251.jpg" },
        { name: { fr: "Processional Way — voie sacrée de la cité antique", en: "Processional Way — the sacred road of the ancient city" }, wikipedia: "File:View down the processional way at Eleusis.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Ur", en: "Ur" },
      region: { fr: "Sud (Dhi Qar)", en: "South (Dhi Qar)" },
      description: {
        fr: "Ur est l'une des plus anciennes et des plus importantes cités sumériennes, mentionnée dans la Bible comme la patrie d'Abraham. Son gigantesque ziggurat, érigé vers 2100 av. J.-C. et remarquablement bien conservé, est l'une des structures les plus impressionnantes du Proche-Orient antique. Le site royal d'Ur, avec ses tombes royales et ses trésors exposés au British Museum, a révolutionné la compréhension de la civilisation sumérienne.",
        en: "Ur is one of the oldest and most important Sumerian cities, mentioned in the Bible as Abraham's birthplace. Its giant ziggurat, built around 2100 BCE and remarkably well preserved, is one of the most impressive structures in the ancient Near East. The Royal Cemetery of Ur, with its royal tombs and treasures now housed in the British Museum, transformed our understanding of Sumerian civilisation.",
      },
      wikipedia: "File:Ur-Nassiriyah.jpg",
      tags: ["Antiquité", "Archéologie", "Mésopotamie", "Religion", "Désert"],
      mustSee: [
        { name: { fr: "Ziggurat d'Ur — temple à degrés sumérien du IIIe millénaire av. J.-C.", en: "Ziggurat of Ur — a Sumerian stepped temple from the 3rd millennium BCE" }, wikipedia: "File:Ancient ziggurat at Ali Air Base Iraq 2005.jpg" },
        { name: { fr: "Tombes royales d'Ur — nécropole royale sumérienne", en: "Royal Tombs of Ur — the Sumerian royal necropolis" }, wikipedia: "File:Ziggurat of Ur.jpg" },
        { name: { fr: "Maison d'Abraham — site traditionnel de naissance du patriarche", en: "House of Abraham — the traditional birthplace of the patriarch" }, wikipedia: "File:Maison d'abraham.jpg" },
        { name: { fr: "Musée de Nasiriyah — collections archéologiques locales", en: "Nasiriyah Museum — local archaeological collections" }, wikipedia: "Nasiriyah" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "L'Irak est une destination peu onéreuse pour les voyageurs, en particulier dans le Kurdistan irakien qui dispose d'une infrastructure touristique en développement. Les prix sont généralement bas mais varient selon les régions et les prestataires.",
      en: "Iraq is a fairly inexpensive destination for travellers, especially in Iraqi Kurdistan, where the tourism infrastructure is still developing. Prices are generally low, but they vary by region and provider.",
    },
    currency: "IQD",
    exchangeRate: "1€ ≈ 1 450 IQD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge ou hôtel simple", en: "Hostel or simple hotel" }, price: "10–20 €", detail: { fr: "Chambre basique, souvent avec clim", en: "Basic room, often with air conditioning" } },
          { label: { fr: "Hôtel mid-range", en: "Mid-range hotel" }, price: "30–60 €", detail: { fr: "Confort correct, petit-déjeuner inclus", en: "Decent comfort, breakfast included" } },
          { label: { fr: "Hôtel de charme / boutique", en: "Boutique hotel" }, price: "70–120 €", detail: { fr: "Meilleurs hôtels d'Erbil ou Bagdad", en: "The better hotels in Erbil or Baghdad" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Restaurant local", en: "Local restaurant" }, price: "3–7 €", detail: { fr: "Kebab, tashreeb ou dolma", en: "Kebab, tashreeb or dolma" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant" }, price: "10–20 €", detail: { fr: "Grillades, mezze variés", en: "Grilled meats and assorted mezze" } },
          { label: { fr: "Street food", en: "Street food" }, price: "1–3 €", detail: { fr: "Shawarma, falafel, samoun bread", en: "Shawarma, falafel and samoon bread" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus ou minibus interurbain", en: "Intercity bus or minibus" }, price: "3–10 €", detail: { fr: "Entre grandes villes du Kurdistan", en: "Between major Kurdish cities" } },
          { label: { fr: "Taxi en ville", en: "City taxi" }, price: "2–5 €", detail: { fr: "Courte distance en ville", en: "Short urban rides" } },
          { label: { fr: "Vol domestique", en: "Domestic flight" }, price: "50–100 €", detail: { fr: "Bagdad–Erbil ou Bagdad–Bassora", en: "Baghdad–Erbil or Baghdad–Basra" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée sites archéologiques", en: "Archaeological site entry" }, price: "2–5 €", detail: { fr: "Babylone, Ur, citadelle d'Erbil", en: "Babylon, Ur and Erbil Citadel" } },
          { label: { fr: "Guide local", en: "Local guide" }, price: "40–70 €/j", detail: { fr: "Anglophone ou francophone, indispensable", en: "English- or French-speaking, essential" } },
          { label: { fr: "Excursion organisée", en: "Organised excursion" }, price: "50–100 €", detail: { fr: "Journée complète avec transport", en: "Full-day trip with transport included" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "35–55 €/j",
        desc: { fr: "Hébergement simple, repas locaux, transports partagés", en: "Simple accommodation, local food and shared transport" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "80–130 €/j",
        desc: { fr: "Bon hôtel, restaurants corrects, excursions avec guide", en: "Good hotel, decent restaurants and guided excursions" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: {
        fr: "Erbil → Sulaymaniyah → Bagdad → Babylone → Ur",
        en: "Erbil → Sulaymaniyah → Baghdad → Babylon → Ur",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "950 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Erbil", en: "Return flight Paris–Erbil" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (11 nuits)", en: "Accommodation (11 nights)" }, amount: "130–200 €" },
            { label: { fr: "Transports locaux + vols intérieurs", en: "Local transport + domestic flights" }, amount: "100–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "200–280 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "170–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Erbil", en: "Return flight Paris–Erbil" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (11 nuits)", en: "Accommodation (11 nights)" }, amount: "500–700 €" },
            { label: { fr: "Transports locaux + vols intérieurs", en: "Local transport + domestic flights" }, amount: "200–300 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "400–550 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "300–450 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "Vols vers Erbil ou Bagdad via Istanbul, Dubaï ou Amman, 6–10h de trajet", en: "Flights to Erbil or Baghdad via Istanbul, Dubai or Amman, typically 6–10 hours total" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa à l'arrivée disponible pour les Français (Kurdistan : e-visa) — situation variable selon les régions", en: "Visa on arrival is available for French travellers in some cases (Kurdistan: e-visa) — rules vary by region" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dinar irakien (IQD) — dollar américain largement accepté dans le Kurdistan", en: "Iraqi dinar (IQD) — US dollars are widely accepted in Kurdistan" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Arabe et kurde — anglais compris dans le secteur touristique du Kurdistan", en: "Arabic and Kurdish — English is understood in Kurdistan's tourist sector" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type D/G (230V) — adaptateur universel recommandé", en: "Type D/G (230V) — a universal adapter is recommended" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccins hépatite A/B, typhoïde, fièvre typhoïde recommandés. Eau du robinet non potable.", en: "Hepatitis A/B and typhoid vaccines are recommended. Tap water is not drinkable." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety" }, value: { fr: "Kurdistan irakien : déconseillé sauf raison impérative (zone plus stable). Bagdad et centre : formellement déconseillé aux touristes. Consulter impérativement les alertes du MAE.", en: "Iraqi Kurdistan: travel discouraged unless absolutely necessary, although it is the more stable area. Baghdad and the centre: formally advised against for tourists. Check official travel advisories before planning anything." } },
    { icon: "🌡️", label: { fr: "Climat", en: "Climate" }, value: { fr: "Éviter absolument juin–septembre (chaleurs extrêmes 40–50 °C). Privilégier mars–mai ou octobre–novembre.", en: "Avoid June–September at all costs because of extreme heat (40–50°C). March–May or October–November are much better choices." } },
  ],
};
