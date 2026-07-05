export const LITHUANIA = {
  code: "LTU",
  numericId: 440,
  name: { fr: "Lituanie", en: "Lithuania" },
  emoji: "🇱🇹",
  capital: { fr: "Vilnius", en: "Vilnius" },
  language: { fr: "Lituanien", en: "Lithuanian" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  description: {
    fr: "La Lituanie est le plus grand et le plus méconnu des États baltes : Vilnius et son extraordinaire vieille ville baroque (UNESCO, la plus grande vieille ville baroque du nord de l'Europe), la flèche de sable de Courlande (UNESCO, la plus grande dune migratrice d'Europe), Kaunas et son Art Déco interwar unique, et Trakai et son château rouge sur une île lacustre.",
    en: "Lithuania is the largest and least known of the Baltic states: Vilnius with its extraordinary baroque old town (UNESCO, the largest baroque old town in Northern Europe), the sandy Curonian Spit (UNESCO, Europe's largest migrating dune), Kaunas with its unique interwar Art Deco, and Trakai with its red castle on a lake island.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Été et automne dorés", en: "Golden summer and autumn" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (17–22°C), longues journées, festivals (Vilnius City Days, Jazz Festival). Septembre splendide avec les couleurs de forêt.",
        en: "Pleasant temperatures (17–22°C), long days, festivals (Vilnius City Days, Jazz Festival). September is stunning with the forest colours.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Janvier", en: "December – January" },
      label: { fr: "Noël baroque", en: "Baroque Christmas" },
      color: "#f59e0b",
      description: {
        fr: "Marchés de Noël sur la place de la cathédrale de Vilnius, lumières sur les clochers baroques, ambiance magique. Froid (-5°C).",
        en: "Christmas markets on Vilnius Cathedral Square, lights on the baroque spires, magical atmosphere. Cold (-5°C).",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "vilnius",
      name: "Vilnius",
      region: { fr: "Aukštaitija (est, capitale)", en: "Aukštaitija (east, capital)" },
      data: [
        { month: "Jan", temp: -4, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -3, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  8, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 14, rain: 55,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: -2, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "curonian_spit",
      name: { fr: "Flèche de Courlande", en: "Curonian Spit" },
      region: { fr: "Côte baltique (UNESCO)", en: "Baltic coast (UNESCO)" },
      data: [
        { month: "Jan", temp: -3, rain: 45,  icon: "❄️" },
        { month: "Fév", temp: -3, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 60,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 14, rain: 60,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 60,  icon: "⛅" },
        { month: "Nov", temp:  4, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  0, rain: 50,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Vilnius — Baroque du Nord (UNESCO)", en: "Vilnius — Baroque of the North (UNESCO)" },
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "La vieille ville de Vilnius est la plus grande vieille ville baroque du nord de l'Europe (classée UNESCO) : 1 500 bâtiments des XVIe–XVIIIe siècles, 65 églises, la cathédrale néoclassique sur sa grande place et le quartier bohème d'Užupis (qui a déclaré son indépendance comme 'République' artistique en 1997). Le panorama depuis la colline de Gediminas est inoubliable.",
        en: "Vilnius Old Town is the largest baroque old town in Northern Europe (UNESCO-listed): 1,500 buildings from the 16th–18th centuries, 65 churches, the neoclassical cathedral on its main square, and the bohemian district of Užupis (which declared itself an artistic 'Republic' in 1997). The panorama from Gediminas Hill is unforgettable.",
      },
      wikipedia: "Vilnius",
      tags: ["Baroque", "UNESCO", "Bohème", "Clochers", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Vieille Ville baroque de Vilnius (UNESCO) — 65 églises", en: "Baroque Old Town of Vilnius (UNESCO) — 65 churches" }, wikipedia: "Vilnius_Old_Town" },
        { name: { fr: "Tour de Gediminas — panorama sur la ville et ses clochers", en: "Gediminas Tower — panorama over the city and its spires" }, wikipedia: "File:Gedimino pilis by Augustas Didzgalvis.jpg" },
        { name: { fr: "République d'Užupis — quartier artiste avec sa propre constitution", en: "Republic of Užupis — artists' district with its own constitution" }, wikipedia: "Užupis" },
        { name: { fr: "Porte de l'Aurore — Madone miraculeuse vénérée depuis 1671", en: "Gate of Dawn — miraculous Madonna venerated since 1671" }, wikipedia: "Gate_of_Dawn" },
      ],
    },
    {
      id: 2,
      name: { fr: "Flèche de Courlande — Dunes UNESCO", en: "Curonian Spit — UNESCO dunes" },
      region: { fr: "Côte baltique", en: "Baltic coast" },
      description: {
        fr: "La flèche de Courlande (UNESCO) est une langue de sable de 98km séparant le lagon de Courlande de la mer Baltique — la plus grande dune migratrice d'Europe (60m de haut). Les villages de pêcheurs colorés, les forêts de pins et les plages de sable blanc sont accessibles depuis Klaipėda. La partie lituanienne fait partie du parc national de Neringa.",
        en: "The Curonian Spit (UNESCO) is a 98km sand strip separating the Curonian Lagoon from the Baltic Sea — Europe's largest migrating dune (60m high). Colourful fishing villages, pine forests and white sand beaches are accessible from Klaipėda. The Lithuanian side is part of Neringa National Park.",
      },
      wikipedia: "Curonian_Spit",
      tags: ["Dunes", "UNESCO", "Baltique", "Pêcheurs", "Plage", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Dunes du Désert mort (Parnidis) — panorama depuis 52m", en: "Dead Dunes of Parnidis — panorama from 52m" }, wikipedia: "File:Kurische Nehrung Parnidden-Düne 01.JPG" },
        { name: { fr: "Nida — village de pêcheurs avec maisons en bois colorées", en: "Nida — fishing village with colourful wooden houses" }, wikipedia: "Nida,_Lithuania" },
        { name: { fr: "Plage de Juodkrantė — observation des cormorans et hérons", en: "Juodkrantė beach — cormorant and heron watching" }, wikipedia: "Juodkrantė" },
      ],
    },
    {
      id: 3,
      name: { fr: "Trakai — Château rouge sur l'eau", en: "Trakai — Red castle on the water" },
      region: { fr: "Aukštaitija (à 30km de Vilnius)", en: "Aukštaitija (30km from Vilnius)" },
      description: {
        fr: "Le château de l'île de Trakai (XIVe s.) est le château le plus photographié de Lituanie : brique rouge reflétée dans le lac Galvė, accessible par un pont de bois. La ville est aussi le berceau des Karaïtes — une communauté turcique de 300 personnes installée depuis 600 ans, qui perpétue la cuisine traditionnelle kibinas (chausson karaïte).",
        en: "Trakai Island Castle (14th c.) is Lithuania's most photographed castle: red brick reflected in Lake Galvė, reached by a wooden bridge. The town is also home to the Karaites — a Turkic community of 300 people settled here for 600 years, who keep alive the traditional kibinas (Karaite pastry) cuisine.",
      },
      wikipedia: "Trakai_Island_Castle",
      tags: ["Château sur l'eau", "Médiéval", "Lac", "Karaïtes", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Château de l'île de Trakai — brique rouge sur le lac Galvė", en: "Trakai Island Castle — red brick on Lake Galvė" }, wikipedia: "Trakai_Island_Castle" },
        { name: { fr: "Kayak ou paddle sur le lac autour du château", en: "Kayaking or paddleboarding on the lake around the castle" }, wikipedia: "Trakai" },
        { name: { fr: "Kibinas (chausson karaïte) dans un restaurant traditionnel", en: "Kibinas (Karaite pastry) at a traditional restaurant" }, wikipedia: "Kibinai" },
        { name: { fr: "Péninsule de Trakai — vue sur 30 lacs depuis la colline", en: "Trakai Peninsula — view over 30 lakes from the hill" }, wikipedia: "Trakai" },
      ],
    },
    {
      id: 4,
      name: { fr: "Kaunas — Art Déco Interwar", en: "Kaunas — Interwar Art Deco" },
      region: { fr: "Žemaitija (centre)", en: "Žemaitija (centre)" },
      description: {
        fr: "Kaunas fut la capitale provisoire de la Lituanie entre les deux guerres (1920–1939) et concentre le plus bel ensemble Art Déco d'Europe du Nord pour cette période. La Laisvės Alėja (Boulevard de la Liberté, piétonne, 1,7km) est bordée de bâtiments interwar exceptionnels. Le musée Čiurlionis expose le peintre symboliste le plus important de Lituanie.",
        en: "Kaunas was Lithuania's provisional capital between the two world wars (1920–1939) and holds the finest collection of interwar Art Deco architecture in Northern Europe. Laisvės Alėja (Liberty Avenue, a 1.7km pedestrian boulevard) is lined with exceptional interwar buildings. The Čiurlionis Museum showcases Lithuania's most important symbolist painter.",
      },
      wikipedia: "Kaunas",
      tags: ["Art Déco", "Interwar", "Musées", "Boulevard", "Ville"],
      mustSee: [
        { name: { fr: "Laisvės Alėja — boulevard Art Déco de 1,7km (piéton)", en: "Laisvės Alėja — 1.7km Art Deco boulevard (pedestrian)" }, wikipedia: "File:Laisvės alėja, Kaunas.jpg" },
        { name: { fr: "Musée Čiurlionis — peintre symboliste et compositeur lituanien", en: "Čiurlionis Museum — Lithuanian symbolist painter and composer" }, wikipedia: "File:M. K. Ciurlionis National Art Museum (2018).jpg" },
        { name: { fr: "Château de Kaunas (XIVe s.) au confluent du Neris et Némunas", en: "Kaunas Castle (14th c.) at the confluence of the Neris and Nemunas rivers" }, wikipedia: "Kaunas_Castle" },
        { name: { fr: "Marché Halės turgus — vie quotidienne et cuisine lituanienne", en: "Halės turgus market — everyday life and Lithuanian cuisine" }, wikipedia: "File:Hales Market - panoramio.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Lituanie est la moins chère des trois capitales baltes. Vilnius est particulièrement abordable pour une capitale de l'UE. Le niveau de restauration a fortement progressé ces dernières années.",
      en: "Lithuania is the cheapest of the three Baltic capitals. Vilnius is particularly affordable for an EU capital. Dining standards have improved significantly in recent years.",
    },
    currency: "EUR",
    exchangeRate: { fr: "1€ = 1€ (zone euro)", en: "1€ = 1€ (eurozone)" },
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse Vilnius (dortoir ou chambre)", en: "Vilnius youth hostel (dorm or room)" }, price: "18–35 €", detail: { fr: "Nombreuses et bien situées en Vieille Ville", en: "Numerous and well located in the Old Town" } },
          { label: { fr: "Hôtel 3★ Vilnius Vieille Ville", en: "3★ hotel in Vilnius Old Town" }, price: "55–100 €", detail: { fr: "Souvent dans des bâtisses baroques", en: "Often in baroque buildings" } },
          { label: { fr: "Pension Nida (Flèche de Courlande)", en: "Guesthouse in Nida (Curonian Spit)" }, price: "40–80 €", detail: { fr: "Charme balnéaire de la Baltique", en: "Baltic seaside charm" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Cepelinai (zeppelins de pomme de terre farcis) dans une kavinė", en: "Cepelinai (stuffed potato dumplings) at a kavinė" }, price: "7–12 €", detail: { fr: "Plat national lituanien, très copieux", en: "Lithuania's national dish, very filling" } },
          { label: { fr: "Restaurant mid-range Vilnius Vieille Ville", en: "Mid-range restaurant in Vilnius Old Town" }, price: "12–22 €", detail: { fr: "Cuisine moderne lituanienne", en: "Modern Lithuanian cuisine" } },
          { label: { fr: "Kibinai (chausson karaïte farci) à Trakai", en: "Kibinai (stuffed Karaite pastry) in Trakai" }, price: "3–5 €", detail: { fr: "Snack unique d'Europe", en: "A snack unique in Europe" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus + trolley Vilnius (ticket 24h)", en: "Bus + trolleybus in Vilnius (24h ticket)" }, price: "4 €", detail: { fr: "Réseau étendu en ville", en: "Extensive city network" } },
          { label: { fr: "Train Vilnius–Kaunas (1h30)", en: "Train Vilnius–Kaunas (1h30)" }, price: "5–10 €", detail: { fr: "Fréquent et abordable", en: "Frequent and affordable" } },
          { label: { fr: "Bus Lux Express Vilnius–Riga ou Tallinn", en: "Lux Express bus Vilnius–Riga or Tallinn" }, price: "15–25 €", detail: { fr: "Confortables avec WiFi", en: "Comfortable with WiFi" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée château de Trakai (bateau inclus)", en: "Trakai Castle entrance (boat included)" }, price: "8 €", detail: { fr: "Musée du Grand-Duché à l'intérieur", en: "Grand Duchy museum inside" } },
          { label: { fr: "Tour guidé Vilnius baroque (2h à pied)", en: "Guided baroque Vilnius walking tour (2h)" }, price: "12–20 €", detail: { fr: "Guide francophone disponible", en: "French-speaking guide available" } },
          { label: { fr: "Location de vélo Flèche de Courlande (journée)", en: "Bike rental on the Curonian Spit (day)" }, price: "10–18 €", detail: { fr: "Idéal pour longer les dunes", en: "Ideal for riding along the dunes" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Auberge + cepelinai + transports publics", en: "Hostel + cepelinai + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "85–150 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days" },
      route: {
        fr: "Vilnius (3j) → Trakai (1j) → Kaunas (1j) → Flèche de Courlande (2j)",
        en: "Vilnius (3d) → Trakai (1d) → Kaunas (1d) → Curonian Spit (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vilnius (Ryanair, Wizz Air)", en: "Return flight Paris–Vilnius (Ryanair, Wizz Air)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "180–320 €" },
            { label: { fr: "Transports (train + bus)", en: "Transport (train + bus)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + cepelinai + bière", en: "Food + cepelinai + beer" }, amount: "200–350 €" },
            { label: { fr: "Activités + château Trakai", en: "Activities + Trakai Castle" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Vilnius", en: "Return flight Paris–Vilnius" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (7 nuits)", en: "3★ hotels (7 nights)" }, amount: "450–800 €" },
            { label: { fr: "Voiture de location + transports", en: "Rental car + transport" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "350–600 €" },
            { label: { fr: "Activités, concerts, Courlande", en: "Activities, concerts, Curonian Spit" }, amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~3h (Ryanair direct Beauvais/CDG–Vilnius, Wizz Air). Liaisons régulières.", en: "~3h (Ryanair direct from Beauvais/CDG–Vilnius, Wizz Air). Regular flights." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. French national ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€). Carte bancaire très bien acceptée partout. Espèces utiles sur la Flèche de Courlande.", en: "Euro (€). Cards very widely accepted. Cash useful on the Curonian Spit." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Lituanien (langue indo-européenne très ancienne). Anglais bien parlé par les jeunes. Russe compris par les plus âgés.", en: "Lithuanian (a very ancient Indo-European language). English well spoken by young people. Russian understood by older generations." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution. CEAM valide. Tiques en forêt (Courlande) — répulsif recommandé en été.", en: "No special precautions. EHIC valid. Ticks in the forest (Curonian Spit) — repellent recommended in summer." } },
    { icon: "🏖️", label: { fr: "Plages baltiques", en: "Baltic beaches" }, value: { fr: "La mer Baltique est froide en Lituanie (19°C max en juillet) mais les plages de sable sont immenses et peu fréquentées hors de la Flèche de Courlande.", en: "The Baltic Sea is cold in Lithuania (19°C max in July) but the sandy beaches are vast and uncrowded outside the Curonian Spit." } },
    { icon: "🍺", label: { fr: "Bière", en: "Beer" }, value: { fr: "La Lituanie a une forte tradition brassicole artisanale — les bières de ferme (farmhouse ales) de la région de Biržai sont uniques en Europe et introuvables ailleurs.", en: "Lithuania has a strong craft brewing tradition — the farmhouse ales of the Biržai region are unique in Europe and unavailable elsewhere." } },
  ],
};
