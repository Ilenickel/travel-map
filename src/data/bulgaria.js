export const BULGARIA = {
  code: "BGR",
  numericId: 100,
  name: { fr: "Bulgarie", en: "Bulgaria" },
  emoji: "🇧🇬",
  capital: { fr: "Sofia", en: "Sofia" },
  language: { fr: "Bulgare", en: "Bulgarian" },
  currency: { fr: "Lev bulgare (BGN)", en: "Bulgarian lev (BGN)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 35, budgetMid: 65,
    tripMin: 700, tripMid: 1600,
  },
  description: {
    fr: "La Bulgarie est l'une des meilleures valeurs d'Europe : la côte de la mer Noire avec ses plages de sable et ses eaux chaudes (27°C en été), les villes médiévales de Veliko Tarnovo et Plovdiv (capitale européenne de la culture 2019), le monastère de Rila (UNESCO), les Balkans avec leurs villages roses de Koprivshtitsa, et le vin local parmi les meilleurs d'Europe de l'Est.",
    en: "Bulgaria is one of Europe's best-value destinations: the Black Sea coast with its sandy beaches and warm waters (27°C in summer), the medieval cities of Veliko Tarnovo and Plovdiv (European Capital of Culture 2019), the Rila Monastery (UNESCO), the Balkan Mountains with their pink-hued villages like Koprivshtitsa, and local wine that ranks among the best in Eastern Europe.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Septembre", en: "May – September" },
      label: { fr: "Printemps et été", en: "Spring and summer" },
      color: "#22c55e",
      description: {
        fr: "Côte noire excellente de juin à septembre (eau 26–28°C). Intérieur des terres agréable en mai-juin et septembre. Températures 22–28°C à Sofia en été.",
        en: "The Black Sea coast is excellent from June to September (water at 26–28°C). Inland areas are pleasant in May-June and September. Summer temperatures in Sofia range from 22–28°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Ski hivernal", en: "Winter skiing" },
      color: "#3b82f6",
      description: {
        fr: "Bansko et Borovets offrent le ski le moins cher d'Europe (forfait 25–35€/jour). Températures -5 à -10°C en montagne.",
        en: "Bansko and Borovets offer the cheapest skiing in Europe (lift pass 25–35€/day). Temperatures in the mountains range from -5 to -10°C.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "sofia",
      name: "Sofia",
      region: { fr: "Thrace (centre-ouest)", en: "Thrace (central-west)" },
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
      region: { fr: "Côte de la mer Noire", en: "Black Sea coast" },
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
      name: { fr: "Côte de la mer Noire — Plages et histoire", en: "Black Sea Coast — Beaches and history" },
      region: { fr: "Littorale Est", en: "Eastern coast" },
      description: {
        fr: "La côte bulgare de la mer Noire offre 350km de plages de sable doré et des eaux chaudes (27°C en juillet-août). Sozopol, cité grecque antique sur un cap rocheux, est l'une des plus belles villes côtières de Bulgarie. Nessebar (UNESCO) est une ville byzantine et médiévale préservée sur un isthme rocheux. Les stations de Sunny Beach et Golden Sands attirent les familles.",
        en: "Bulgaria's Black Sea coast offers 350 km of golden sandy beaches and warm waters (27°C in July-August). Sozopol, an ancient Greek town on a rocky cape, is one of the country's most beautiful seaside destinations. Nessebar (UNESCO) is a well-preserved Byzantine and medieval town set on a rocky isthmus. The resorts of Sunny Beach and Golden Sands are especially popular with families.",
      },
      wikipedia: "File:Bulgaria black sea coast.jpg",
      tags: ["Plage", "Mer Noire", "Grec antique", "UNESCO", "Nature"],
      mustSee: [
        { name: { fr: "Sozopol — cité grecque antique sur cap rocheux", en: "Sozopol — ancient Greek town on a rocky cape" }, wikipedia: "File:Sozopol2.jpg" },
        { name: { fr: "Nessebar — ville byzantine et médiévale (UNESCO)", en: "Nessebar — Byzantine and medieval town (UNESCO)" }, wikipedia: "File:Church of Christ Pantocrator Nesebar.jpg" },
        { name: { fr: "Plages de sable de Sunny Beach et Golden Sands", en: "Sandy beaches of Sunny Beach and Golden Sands" }, wikipedia: "File:Sunny-Beach-BDimitrov.jpg" },
        { name: { fr: "Cap Kaliakra — falaises sur la mer Noire + colonie de dauphins", en: "Cape Kaliakra — Black Sea cliffs and dolphin colony" }, wikipedia: "File:Kaliakra.JPG" },
      ],
    },
    {
      id: 2,
      name: { fr: "Monastère de Rila — UNESCO", en: "Rila Monastery — UNESCO" },
      region: { fr: "Balkans (massif de Rila)", en: "Balkans (Rila massif)" },
      description: {
        fr: "Le monastère de Rila (UNESCO) est le plus grand et le plus important de Bulgarie — fondé au Xe siècle dans les montagnes à 1 147m d'altitude. Ses fresques du XIXe siècle (plus de 1 200 scènes bibliques sur les galeries) et son architecture à arcs rayés noirs et blancs en font l'un des plus beaux ensembles religieux des Balkans. Pèlerinage national vivant.",
        en: "Rila Monastery (UNESCO) is Bulgaria's largest and most important monastery — founded in the 10th century in the mountains at an altitude of 1,147 m. Its 19th-century frescoes (more than 1,200 biblical scenes across the galleries) and black-and-white striped arcaded architecture make it one of the Balkans' finest religious ensembles. It remains a living national pilgrimage site.",
      },
      wikipedia: "Rila_Monastery",
      tags: ["Monastère", "UNESCO", "Fresques", "Montagnes", "Nature", "Randonnée", "Architecture"],
      mustSee: [
        { name: { fr: "Fresques des galeries du monastère (1 200 scènes)", en: "Frescoes in the monastery galleries (1,200 scenes)" }, wikipedia: "File:Religious fresco in Rila Monastery.jpg" },
        { name: { fr: "Musée du monastère — trésor religieux et icônes", en: "Monastery museum — religious treasures and icons" }, wikipedia: "Rila_Monastery" },
        { name: { fr: "Randonnée aux Lacs de Rila (7 lacs glaciaires à 2 500m)", en: "Hike to the Rila Lakes (7 glacial lakes at 2,500 m)" }, wikipedia: "Seven_Rila_Lakes" },
        { name: { fr: "Tour des Balkans depuis le monastère — vue sur les crêtes", en: "Balkan tower above the monastery — ridge views" }, wikipedia: "File:Rila Monastery 12.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Plovdiv — Capitale européenne de la culture", en: "Plovdiv — European Capital of Culture" },
      region: { fr: "Thrace (sud)", en: "Thrace (south)" },
      description: {
        fr: "Plovdiv est la deuxième ville de Bulgarie et l'une des plus vieilles villes d'Europe continuellement habitée (6 000 ans). Son vieux quartier sur les collines (Kapana — le labyrinthe) mélange maisons renaissance bulgare du XIXe siècle, rues pavées, galeries d'art et cafés branchés. L'amphithéâtre romain du IIe siècle est encore utilisé pour les concerts.",
        en: "Plovdiv is Bulgaria's second city and one of the oldest continuously inhabited cities in Europe (6,000 years). Its old quarter on the hills (Kapana — the maze) blends 19th-century Bulgarian Revival houses, cobbled streets, art galleries and trendy cafés. The 2nd-century Roman amphitheatre is still used for concerts.",
      },
      wikipedia: "Plovdiv",
      tags: ["Vieille ville", "Romain", "Capitale culture", "Art", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Vieille ville de Plovdiv — maisons renaissance bulgare du XIXe s.", en: "Plovdiv Old Town — 19th-century Bulgarian Revival houses" }, wikipedia: "File:Odeon plovdiv old.jpg" },
        { name: { fr: "Amphithéâtre romain (IIe s.) — concerts en plein air", en: "Roman amphitheatre (2nd c.) — open-air concerts" }, wikipedia: "File:Plovdiv Ancient theatre.jpg" },
        { name: { fr: "Kapana — le labyrinthe, quartier artiste et café", en: "Kapana — the maze, arts-and-café district" }, wikipedia: "File:Plovdiv116.jpg" },
        { name: { fr: "Musée d'histoire régionale + collections thraces et romaines", en: "Regional History Museum and its Thracian and Roman collections" }, wikipedia: "File:Regional Ethnographic Museum, Plovdiv.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Veliko Tarnovo — Ancienne capitale médiévale", en: "Veliko Tarnovo — Former medieval capital" },
      region: { fr: "Bulgarie centrale", en: "Central Bulgaria" },
      description: {
        fr: "Veliko Tarnovo était la capitale du Second Empire bulgare (1185–1393). Sa forteresse de Tsarevets, sur une colline entourée d'un méandre de la Yantra, est le symbole national bulgare. Le spectacle son-et-lumière nocturne sur les remparts est inoubliable. La vieille ville en terrasses descend vers la rivière dans un paysage de carte postale.",
        en: "Veliko Tarnovo was the capital of the Second Bulgarian Empire (1185–1393). Its Tsarevets Fortress, perched on a hill encircled by a bend in the Yantra River, is a national symbol of Bulgaria. The nighttime sound-and-light show on the ramparts is unforgettable. The terraced old town tumbles down toward the river in a postcard-perfect setting.",
      },
      wikipedia: "File:Veliko Tarnovo (Велико Търново) - Tsarevets.JPG",
      tags: ["Médiéval", "Forteresse", "Ville", "Son-et-lumière", "Architecture"],
      mustSee: [
        { name: { fr: "Forteresse de Tsarevets — spectacle son-et-lumière le soir", en: "Tsarevets Fortress — evening sound-and-light show" }, wikipedia: "File:Tsarevets - Veliko Tarnovo - 2.jpg" },
        { name: { fr: "Vieille ville de Veliko Tarnovo — maisons en terrasses", en: "Veliko Tarnovo Old Town — terraced houses" }, wikipedia: "File:Veliko Tarnovo - Varosha quarter.jpg" },
        { name: { fr: "Monastère de Preobrazhenski au pied des falaises", en: "Preobrazhenski Monastery at the foot of the cliffs" }, wikipedia: "File:MONASTERY OF PREOBRZENSKI, VELIKO TURNOVO.jpg" },
        { name: { fr: "Village artisanal d'Arbanasi — maisons forteresses ottomanes", en: "Artisan village of Arbanasi — Ottoman fortress houses" }, wikipedia: "File:Arbanasi-imagesfrombulgaria.jpg" },
      ],
    },
    {
      id: 5,
      name: { fr: "Bansko & Pirin", en: "Bansko & Pirin" },
      region: { fr: "Blagoevgrad", en: "Blagoevgrad" },
      description: {
        fr: "Au pied des sommets du Pirin classés à l'UNESCO, Bansko est la première station de ski des Balkans. Son centre historique aux maisons de pierre et bois charme autant que ses pistes modernes. Lacs glaciaires, forêts et monastères proches en font une base idéale toute l'année.",
        en: "At the foot of the UNESCO-listed Pirin peaks, Bansko is the Balkans' leading ski resort. Its historic centre of stone-and-wood houses is every bit as charming as its modern slopes. Glacial lakes, forests and nearby monasteries make it an ideal base all year round.",
      },
      wikipedia: "Bansko",
      tags: ["Ski", "Randonnée", "Nature", "UNESCO"],
      mustSee: [
        { name: { fr: "Domaine skiable de Bansko", en: "Bansko ski area" }, wikipedia: "File:Bansko ski 2025 19.jpg" },
        { name: { fr: "Parc national de Pirin", en: "Pirin National Park" }, wikipedia: "Pirin_National_Park" },
        { name: { fr: "Vieille ville de Bansko — maisons bulgares", en: "Bansko Old Town — traditional Bulgarian houses" }, wikipedia: "Bansko" },
        { name: { fr: "Lac de Vihren", en: "Vihren Lake" }, wikipedia: "Vihren" },
        { name: { fr: "Monastère de Rila depuis Bansko", en: "Rila Monastery from Bansko" }, wikipedia: "File:Klosterkirche des Rilaklosters.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Bulgarie est la destination la moins chère de l'UE. Les prix sont 50–60% inférieurs à ceux de la France. La côte de la mer Noire, très touristique, est un peu plus chère en juillet-août. Le ski à Bansko est le moins cher d'Europe pour la même qualité de neige.",
      en: "Bulgaria is the cheapest destination in the EU. Prices are 50–60% lower than in France. The Black Sea coast, which is very touristy, gets a little pricier in July and August. Skiing in Bansko is the cheapest in Europe for a comparable snow quality.",
    },
    currency: "BGN",
    exchangeRate: "1€ ≈ 1,96 BGN (taux fixe — lev arrimé à l'euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / pension en province", en: "Guesthouse / countryside pension" }, price: "15–30 €", detail: { fr: "Chambre propre, petit-déj inclus souvent", en: "Clean room, breakfast often included" } },
          { label: { fr: "Hôtel 3★ Sofia ou Plovdiv", en: "3★ hotel in Sofia or Plovdiv" }, price: "45–90 €", detail: { fr: "Bon confort, bien situé", en: "Comfortable and well located" } },
          { label: { fr: "Appartement bord de mer (Sozopol, juillet-août)", en: "Seaside apartment (Sozopol, July-August)" }, price: "40–90 €", detail: { fr: "Location directe, vue mer", en: "Direct rental, sea view" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Shopska salade + banitsa (feta et épinards feuilletés)", en: "Shopska salad + banitsa (flaky pastry with feta and spinach)" }, price: "5–10 €", detail: { fr: "Repas complet bulgare", en: "Complete Bulgarian meal" } },
          { label: { fr: "Restaurant mid-range Sofia ou Plovdiv", en: "Mid-range restaurant in Sofia or Plovdiv" }, price: "10–20 €", detail: { fr: "Kavarma, grillades et vin local", en: "Kavarma, grilled meats and local wine" } },
          { label: { fr: "Boza + banitsa au marché du matin", en: "Boza + banitsa at the morning market" }, price: "1–3 €", detail: { fr: "Petit-déjeuner bulgare ultra-typique", en: "A super-typical Bulgarian breakfast" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus interurbain (Sofia–Plovdiv, 2h)", en: "Intercity bus (Sofia–Plovdiv, 2h)" }, price: "6–10 €", detail: { fr: "Réseau dense et abordable", en: "Extensive and affordable network" } },
          { label: { fr: "Train BDZ Sofia–Varna (7h, ligne panoramique)", en: "BDZ train Sofia–Varna (7h, scenic route)" }, price: "12–20 €", detail: { fr: "Traversée des Balkans", en: "Crossing the Balkan Mountains" } },
          { label: { fr: "Tramway Sofia (ticket)", en: "Sofia tram (single ticket)" }, price: "0,50 €", detail: { fr: "Réseau étendu en capitale", en: "Extensive network in the capital" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite monastère de Rila + randonnée 7 lacs", en: "Rila Monastery visit + Seven Lakes hike" }, price: "15–40 €", detail: { fr: "Journée depuis Sofia", en: "Day trip from Sofia" } },
          { label: { fr: "Spectacle son-et-lumière Tsarevets (soir)", en: "Tsarevets sound-and-light show (evening)" }, price: "5–10 €", detail: { fr: "Incontournable à Tarnovo", en: "A must in Tarnovo" } },
          { label: { fr: "Forfait ski Bansko (journée)", en: "Bansko ski pass (day)" }, price: "25–35 €", detail: { fr: "Le ski le moins cher d'Europe", en: "The cheapest skiing in Europe" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Guesthouse + restaurants locaux + bus", en: "Guesthouse + local restaurants + buses" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "65–120 €/j", desc: { fr: "Hôtel 3★ + restaurants + visites guidées", en: "3★ hotel + restaurants + guided visits" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Sofia (2j) → Rila (1j) → Plovdiv (2j) → Veliko Tarnovo (2j) → Côte mer Noire / Sozopol (3j)",
        en: "Sofia (2d) → Rila (1d) → Plovdiv (2d) → Veliko Tarnovo (2d) → Black Sea coast / Sozopol (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "700 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Sofia (Wizz Air, Ryanair, Bulgaria Air)", en: "Return flight Paris–Sofia (Wizz Air, Ryanair, Bulgaria Air)" }, amount: "70–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–350 €" },
            { label: { fr: "Transports (bus + train)", en: "Transport (bus + train)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + vins locaux", en: "Food + local wines" }, amount: "200–350 €" },
            { label: { fr: "Activités, monastères, plages", en: "Activities, monasteries, beaches" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 600 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Sofia", en: "Return flight Paris–Sofia" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)" }, amount: "500–900 €" },
            { label: { fr: "Voiture de location (10 jours)", en: "Rental car (10 days)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "350–650 €" },
            { label: { fr: "Activités, ski, sorties", en: "Activities, skiing, outings" }, amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h30 (Wizz Air, Ryanair, Bulgaria Air direct CDG/Beauvais–Sofia). Aussi vols vers Varna et Bourgas en été.", en: "~2h30 (Wizz Air, Ryanair, Bulgaria Air direct CDG/Beauvais–Sofia). There are also flights to Varna and Burgas in summer." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — UE (Bulgarie membre depuis 2007). Carte d'identité française suffisante.", en: "No visa required — EU country (Bulgaria has been a member since 2007). A French national ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Lev bulgare (BGN, arrimé à l'euro). Carte bancaire bien acceptée en ville. Espèces indispensables à la campagne et dans les monastères.", en: "Bulgarian lev (BGN, pegged to the euro). Cards are widely accepted in cities. Cash is essential in the countryside and in monasteries." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Bulgare (alphabet cyrillique). Anglais parlé par les jeunes. Russe compris par les anciens. Peu de français.", en: "Bulgarian (Cyrillic alphabet). English is spoken by younger people. Older generations often understand Russian. Very little French." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution. CEAM valide. Eau du robinet potable dans les villes (vérifier en zone rurale).", en: "No special precautions. EHIC accepted. Tap water is drinkable in cities (check locally in rural areas)." } },
    { icon: "🤝", label: { fr: "Gestuelle", en: "Body language" }, value: { fr: "ATTENTION : en Bulgarie, hocher la tête de haut en bas signifie NON, et secouer la tête de gauche à droite signifie OUI — le contraire de la France. Source de nombreux malentendus.", en: "IMPORTANT: in Bulgaria, nodding up and down means NO, while shaking your head side to side means YES — the opposite of France. This causes plenty of misunderstandings." } },
    { icon: "🍷", label: { fr: "Vin", en: "Wine" }, value: { fr: "La Bulgarie produit d'excellents vins (Mavrud, Melnik, Rubin) à des prix imbattables. Les régions de Melnik et Plovdiv sont les meilleures.", en: "Bulgaria produces excellent wines (Mavrud, Melnik, Rubin) at unbeatable prices. The Melnik and Plovdiv regions are the best." } },
  ],
};
