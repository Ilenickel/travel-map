export const SLOVENIA = {
  code: "SVN",
  numericId: 705,
  name: { fr: "Slovénie", en: "Slovenia" },
  emoji: "🇸🇮",
  capital: { fr: "Ljubljana", en: "Ljubljana" },
  language: { fr: "Slovène", en: "Slovenian" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 60, budgetMid: 110,
    tripMin: 900, tripMid: 2000,
  },
  description: {
    fr: "La Slovénie est le pays le plus vert d'Europe : 60% du territoire couvert par la forêt, le lac de Bled (château médiéval sur île au milieu d'un lac vert émeraude dans les Alpes juliennes), les grottes de Postojna (les plus visitées d'Europe), le parc national du Triglav et ses 2 864m, la côte adriatique de Piran, et Ljubljana — une capitale à vélo au bord de la Ljubljanica.",
    en: "Slovenia is Europe's greenest country: 60% of its territory covered by forest, Lake Bled (a medieval castle on an island in the middle of an emerald-green lake in the Julian Alps), the Postojna Caves (the most visited in Europe), Triglav National Park with its 2,864m peak, the Adriatic coastline of Piran, and Ljubljana — a cycling capital on the banks of the Ljubljanica.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Été alpin", en: "Alpine summer" },
      color: "#22c55e",
      description: {
        fr: "Lac de Bled idéal (eau à 22°C), Triglav accessible, Ljubljana animée, côte de Piran ensoleillée. Températures 22–28°C en plaine, 15–20°C en montagne.",
        en: "Lake Bled at its best (water at 22°C), Triglav accessible, lively Ljubljana, sunny Piran coast. Temperatures 22–28°C in the lowlands, 15–20°C in the mountains.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Ski alpin", en: "Alpine skiing" },
      color: "#3b82f6",
      description: {
        fr: "Ski à Kranjska Gora et Krvavec. Lac de Bled sous la neige — une des plus belles vues d'Europe en hiver. Températures -5 à -15°C en altitude.",
        en: "Skiing at Kranjska Gora and Krvavec. Lake Bled under snow — one of the most beautiful winter views in Europe. Temperatures -5 to -15°C at altitude.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "ljubljana",
      name: "Ljubljana",
      region: { fr: "Bassin de Ljubljana (centre)", en: "Ljubljana basin (centre)" },
      data: [
        { month: "Jan", temp:  1, rain: 70,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 70,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 100, icon: "⛅" },
        { month: "Mai", temp: 17, rain: 110, icon: "⛅" },
        { month: "Jun", temp: 19, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 100, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 95,  icon: "☀️" },
        { month: "Sep", temp: 16, rain: 100, icon: "⛅" },
        { month: "Oct", temp: 11, rain: 110, icon: "⛅" },
        { month: "Nov", temp:  5, rain: 100, icon: "⛅" },
        { month: "Déc", temp:  1, rain: 85,  icon: "❄️" },
      ],
    },
    {
      id: "bled",
      name: { fr: "Lac de Bled", en: "Lake Bled" },
      region: { fr: "Alpes juliennes (nord-ouest)", en: "Julian Alps (north-west)" },
      data: [
        { month: "Jan", temp: -1, rain: 80,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 75,  icon: "❄️" },
        { month: "Mar", temp:  6, rain: 95,  icon: "⛅" },
        { month: "Avr", temp: 11, rain: 110, icon: "⛅" },
        { month: "Mai", temp: 15, rain: 120, icon: "⛅" },
        { month: "Jun", temp: 18, rain: 130, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 110, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 105, icon: "☀️" },
        { month: "Sep", temp: 15, rain: 110, icon: "⛅" },
        { month: "Oct", temp:  9, rain: 120, icon: "⛅" },
        { month: "Nov", temp:  3, rain: 110, icon: "⛅" },
        { month: "Déc", temp: -1, rain: 85,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Lac de Bled — Carte postale des Alpes", en: "Lake Bled — The Alps' postcard view" },
      region: { fr: "Alpes juliennes", en: "Julian Alps" },
      description: {
        fr: "Le lac de Bled est l'une des vues les plus photographiées d'Europe : une église baroque sur une petite île au milieu d'un lac vert émeraude encerclé d'Alpes, avec un château médiéval perché sur une falaise. La pletna (barque traditionnelle) emmène les visiteurs à l'île. La crème à la vanille (kremšnita) inventée ici est un rituel.",
        en: "Lake Bled is one of the most photographed views in Europe: a baroque church on a small island in the middle of an emerald-green lake ringed by the Alps, with a medieval castle perched on a cliff. The pletna (traditional boat) carries visitors to the island. The vanilla cream cake (kremšnita) invented here is a must.",
      },
      wikipedia: "Lake_Bled",
      tags: ["Lac", "Alpes", "Château", "Île", "Nature", "Randonnée", "Ski"],
      mustSee: [
        { name: { fr: "Île de Bled en pletna — église baroque du XVIIe siècle", en: "Bled Island by pletna — 17th-century baroque church" }, wikipedia: "File:Bled Overview.JPG" },
        { name: { fr: "Château de Bled (XIe s.) — vue plongeante sur le lac", en: "Bled Castle (11th century) — sweeping view over the lake" }, wikipedia: "Bled_Castle" },
        { name: { fr: "Vintgar Gorge — canyon de 1,6km à 4km de Bled", en: "Vintgar Gorge — a 1.6km canyon 4km from Bled" }, wikipedia: "Vintgar_Gorge" },
        { name: { fr: "Kremšnita (crème à la vanille) au café Park — recette originale depuis 1953", en: "Kremšnita (vanilla cream cake) at Café Park — original recipe since 1953" }, wikipedia: "Lake_Bled" },
      ],
    },
    {
      id: 2,
      name: { fr: "Grottes de Postojna et Predjama", en: "Postojna and Predjama Caves" },
      region: { fr: "Carso (sud-ouest)", en: "Karst (south-west)" },
      description: {
        fr: "Les grottes de Postojna sont les plus visitées d'Europe (24 millions de visiteurs depuis leur découverte) : 24km de galeries avec stalactites géantes, le protée (olm, le 'poisson humain' — salamandre aveugle endémique aux grottes balkaniques) et un train souterrain qui parcourt 5km dans les entrailles. À 10km : le château de Predjama, dans la falaise au-dessus d'une grotte.",
        en: "The Postojna Caves are the most visited in Europe (24 million visitors since their discovery): 24km of galleries with giant stalactites, the olm (the 'human fish' — a blind salamander endemic to Balkan caves), and an underground train that runs 5km into the depths. 10km away: Predjama Castle, built into a cliff above a cave.",
      },
      wikipedia: "Postojna_Cave",
      tags: ["Grottes", "Stalactites", "Olm", "Château-grotte", "UNESCO"],
      mustSee: [
        { name: { fr: "Train souterrain dans les grottes de Postojna (5km)", en: "Underground train through the Postojna Caves (5km)" }, wikipedia: "File:Postojna Cave train (3).jpg" },
        { name: { fr: "Protée (olm) — salamandre aveugle endémique des grottes balkaniques", en: "Olm — blind salamander endemic to Balkan caves" }, wikipedia: "Olm" },
        { name: { fr: "Concert de Noël dans les grottes (acoustique unique)", en: "Christmas concert in the caves (unique acoustics)" }, wikipedia: "File:Postojna Cave. Concert Hall. 2012-07-26 13-42-19.jpg" },
        { name: { fr: "Château de Predjama — forteresse dans la falaise au-dessus d'une grotte", en: "Predjama Castle — fortress in a cliff above a cave" }, wikipedia: "Predjama_Castle" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national du Triglav", en: "Triglav National Park" },
      region: { fr: "Alpes juliennes (nord)", en: "Julian Alps (north)" },
      description: {
        fr: "Le Triglav (2 864m) est le symbole national slovène — son ascension est un rite de passage pour tout Slovène. Le parc national du Triglav (838 km²) est le seul parc national du pays : lacs d'altitude de couleur opale (les Lacs des Sept Lagons), gorges de Soča (eau d'un turquoise hallucinant, paradis du kayak), et prairies alpines fleuries.",
        en: "Triglav (2,864m) is the Slovenian national symbol — climbing it is a rite of passage for every Slovenian. Triglav National Park (838 km²) is the country's only national park: opal-coloured mountain lakes (the Seven Lakes Valley), the Soča gorge (dazzling turquoise water, a kayaking paradise), and blooming alpine meadows.",
      },
      wikipedia: "File:Triglav National Park (28749976304).jpg",
      tags: ["Alpinisme", "Kayak", "Lacs", "Nature", "Randonnée", "Ski", "UNESCO"],
      mustSee: [
        { name: { fr: "Rivière Soča — turquoise intense, kayak et rafting", en: "Soča River — intense turquoise, kayaking and rafting" }, wikipedia: "Soča" },
        { name: { fr: "Sept lacs de Triglav — randonnée de 2 jours", en: "Triglav's Seven Lakes — a 2-day hike" }, wikipedia: "File:Triglav_Lakes_Valley_Mountain_Lodge_in_Slovenia%27s_Julian_Alps.jpg" },
        { name: { fr: "Gorge de Vintgar depuis Bled (marche 1h30)", en: "Vintgar Gorge from Bled (1h30 walk)" }, wikipedia: "Vintgar_Gorge" },
        { name: { fr: "Ascension du Triglav (2 864m) — 2 jours avec guide", en: "Climbing Triglav (2,864m) — 2 days with a guide" }, wikipedia: "Triglav" },
      ],
    },
    {
      id: 4,
      name: { fr: "Ljubljana — Capitale verte à vélo", en: "Ljubljana — The green cycling capital" },
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "Ljubljana est la capitale européenne de l'environnement 2016 : centre-ville intégralement piéton depuis 2007, 30km de pistes cyclables, la Ljubljanica traversant le centre avec ses terrasses animées, le château médiéval sur la colline, et les marchés biologiques du vendredi. Une ville à taille humaine, dynamique et bilingue (anglais parfait).",
        en: "Ljubljana was European Green Capital in 2016: fully pedestrianised city centre since 2007, 30km of cycle paths, the Ljubljanica river running through the centre with lively terraces, a medieval castle on the hill, and organic markets on Fridays. A human-scale city, dynamic and bilingual (excellent English).",
      },
      wikipedia: "Ljubljana",
      tags: ["Capitale verte", "Vélo", "Rivière", "Marché", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Triple-pont de Plečnik — entrée monumentale en vieille ville", en: "Plečnik's Triple Bridge — monumental entrance to the old town" }, wikipedia: "Triple_Bridge" },
        { name: { fr: "Château de Ljubljana — vue panoramique sur les Alpes", en: "Ljubljana Castle — panoramic view of the Alps" }, wikipedia: "Ljubljana_Castle" },
        { name: { fr: "Marché de Pogačar (vendredi) — produits bio slovènes", en: "Pogačar Market (Friday) — organic Slovenian produce" }, wikipedia: "Ljubljana" },
        { name: { fr: "Promenade de la Ljubljanica — terrasses et bateaux le soir", en: "Ljubljanica river promenade — terraces and boats in the evening" }, wikipedia: "Ljubljanica" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Slovénie est légèrement moins chère que la France mais plus chère que ses voisins Croatie ou Hongrie. Le lac de Bled est très touristique et donc cher en été. Ljubljana reste très abordable pour une capitale de l'UE.",
      en: "Slovenia is slightly cheaper than France but pricier than neighbouring Croatia or Hungary. Lake Bled is very touristy and therefore expensive in summer. Ljubljana remains very affordable for an EU capital.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hostel / guesthouse Ljubljana ou Bled", en: "Hostel / guesthouse in Ljubljana or Bled" }, price: "25–55 €", detail: { fr: "Bonne qualité, vues souvent incluses", en: "Good quality, often with views" } },
          { label: { fr: "Hôtel 3★ Ljubljana centre", en: "3★ hotel, central Ljubljana" }, price: "80–150 €", detail: { fr: "Bon confort en ville", en: "Good in-town comfort" } },
          { label: { fr: "Pension au bord du lac de Bled (été)", en: "Guesthouse by Lake Bled (summer)" }, price: "90–180 €", detail: { fr: "Vue sur le lac, réserver 3 mois à l'avance", en: "Lake view, book 3 months ahead" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Jota (soupe de haricots et choucroute) + kruh (pain)", en: "Jota (bean and sauerkraut soup) + kruh (bread)" }, price: "7–12 €", detail: { fr: "Cuisine slovène simple et copieuse", en: "Simple, hearty Slovenian cuisine" } },
          { label: { fr: "Restaurant mid-range Ljubljana ou Bled", en: "Mid-range restaurant in Ljubljana or Bled" }, price: "14–25 €", detail: { fr: "Cuisine locale créative", en: "Creative local cuisine" } },
          { label: { fr: "Kremšnita de Bled — la vraie, au café Park", en: "Bled's Kremšnita — the original, at Café Park" }, price: "4–6 €", detail: { fr: "Crème à la vanille — expérience obligatoire", en: "Vanilla cream cake — a must-try" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus public Ljubljana–Bled (1h20)", en: "Public bus Ljubljana–Bled (1h20)" }, price: "7 €", detail: { fr: "Fréquent, direct", en: "Frequent, direct" } },
          { label: { fr: "Location de vélo Ljubljana (journée)", en: "Bike rental in Ljubljana (day)" }, price: "10–15 €", detail: { fr: "La meilleure façon de visiter la capitale", en: "The best way to explore the capital" } },
          { label: { fr: "Train Ljubljana–Postojna (1h, pour les grottes)", en: "Train Ljubljana–Postojna (1h, for the caves)" }, price: "6 €", detail: { fr: "Puis bus ou taxi depuis la gare", en: "Then bus or taxi from the station" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Grottes de Postojna (visite guidée 1h30 + train)", en: "Postojna Caves (guided tour 1h30 + train)" }, price: "28 €", detail: { fr: "Incontournable de Slovénie", en: "A Slovenian must-see" } },
          { label: { fr: "Pletna (barque traditionnelle) vers l'île de Bled", en: "Pletna (traditional boat) to Bled Island" }, price: "16 €", detail: { fr: "A/R, 30 min de traversée", en: "Return trip, 30 min crossing" } },
          { label: { fr: "Kayak sur la Soča (demi-journée avec guide)", en: "Kayaking on the Soča (half-day, guided)" }, price: "40–70 €", detail: { fr: "Eau turquoise unique en Europe", en: "Uniquely turquoise water in Europe" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–95 €/j", desc: { fr: "Hostel + cuisine locale + bus + activités basiques", en: "Hostel + local food + bus + basic activities" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "110–200 €/j", desc: { fr: "Hôtel 3★ + restaurants + activités guidées", en: "3★ hotel + restaurants + guided activities" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "Ljubljana (2j) → Postojna + Predjama (1j) → Lac de Bled (3j) → Soča + Triglav (2j)",
        en: "Ljubljana (2d) → Postojna + Predjama (1d) → Lake Bled (3d) → Soča + Triglav (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Ljubljana (Ryanair, Air France)", en: "Return flight Paris–Ljubljana (Ryanair, Air France)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "250–500 €" },
            { label: { fr: "Transports (bus + vélo)", en: "Transport (bus + bike)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + kremšnita", en: "Food + kremšnita" }, amount: "280–450 €" },
            { label: { fr: "Grottes + pletna + kayak", en: "Caves + pletna + kayaking" }, amount: "150–280 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 000 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Ljubljana", en: "Return flight Paris–Ljubljana" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)" }, amount: "700–1 300 €" },
            { label: { fr: "Voiture de location (8 jours)", en: "Car rental (8 days)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–700 €" },
            { label: { fr: "Activités guidées + ski + sorties", en: "Guided activities + skiing + outings" }, amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h (Ryanair direct Beauvais–Ljubljana, Air France CDG–Ljubljana). Aussi via Vienne ou Zagreb.", en: "~2h (Ryanair direct Beauvais–Ljubljana, Air France CDG–Ljubljana). Also via Vienna or Zagreb." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€). Carte bancaire acceptée partout. Espèces utiles dans les refuges de montagne.", en: "Euro (€). Bank cards accepted everywhere. Cash useful at mountain refuges." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Slovène. Anglais parlé quasi-universellement, y compris en zone rurale. Excellente destination pour les non-polyglottes.", en: "Slovenian. English spoken almost universally, even in rural areas. An excellent destination for non-polyglots." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution. CEAM valide. Tiques dans les forêts — vaccination recommandée pour les randonneurs intensifs (encéphalite à tiques).", en: "No particular precautions. EHIC valid. Ticks in the forests — vaccination recommended for keen hikers (tick-borne encephalitis)." } },
    { icon: "🌿", label: { fr: "Durabilité", en: "Sustainability" }, value: { fr: "La Slovénie est championne d'Europe du tourisme durable — Ljubljana a été nommée capitale européenne verte 2016. Privilégier les transports publics et les hébergements certifiés 'Slovenia Green'.", en: "Slovenia is Europe's champion of sustainable tourism — Ljubljana was named European Green Capital in 2016. Favour public transport and 'Slovenia Green' certified accommodation." } },
    { icon: "🏔️", label: { fr: "Triglav", en: "Triglav" }, value: { fr: "Monter au Triglav est un rite de passage national. L'ascension dure 2 jours avec nuit en refuge (D/A obligatoire). Les Slovènes disent : 'Qui n'a pas gravi le Triglav n'est pas vraiment slovène'.", en: "Climbing Triglav is a national rite of passage. The climb takes 2 days with an overnight stay at a mountain hut (half-board mandatory). Slovenians say: 'Whoever hasn't climbed Triglav isn't truly Slovenian'." } },
  ],
};
