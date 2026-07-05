export const FINLAND = {
  code: "FIN",
  numericId: 246,
  name: { fr: "Finlande", en: "Finland" },
  emoji: "🇫🇮",
  capital: { fr: "Helsinki", en: "Helsinki" },
  language: { fr: "Finnois, Suédois", en: "Finnish, Swedish" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 100, budgetMid: 180,
    tripMin: 1500, tripMid: 3000,
  },
  description: {
    fr: "La Finlande est le 'pays de mille lacs' (il y en a 188 000) et de la forêt profonde. Helsinki, la capitale la plus au nord de l'UE, est une ville design et multiculturelle. En Laponie, Rovaniemi (ville officielle du Père Noël) et Saariselkä offrent les meilleures aurores boréales et safaris en motoneige d'Europe. Le sauna y est une institution culturelle fondamentale.",
    en: "Finland is the 'land of a thousand lakes' (there are actually 188,000 of them) and deep forests. Helsinki, the northernmost capital in the EU, is a design-driven, multicultural city. In Lapland, Rovaniemi (the official hometown of Santa Claus) and Saariselkä offer Europe's best northern lights and snowmobile safaris. Sauna is a fundamental part of the country's culture.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Été blanc", en: "White Summer" },
      color: "#22c55e",
      description: {
        fr: "Courte mais belle saison : soleil jusqu'à 23h, lacs bleus, festivals (Flow Festival à Helsinki), randonnées en Laponie sans moustiques. Températures 20–26°C à Helsinki.",
        en: "A short but beautiful season: sunlight until 11 pm, blue lakes, festivals (including Flow Festival in Helsinki), and hikes in Lapland without mosquitoes. Temperatures reach 20–26°C in Helsinki.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Hiver de Laponie", en: "Lapland Winter" },
      color: "#3b82f6",
      description: {
        fr: "Rovaniemi et le Père Noël, aurores boréales magnifiques, safaris en motoneige et traîneaux à rennes. Expérience hivernale unique en Europe.",
        en: "Rovaniemi and Santa Claus, magnificent northern lights, snowmobile safaris and reindeer sleigh rides. A winter experience unlike anywhere else in Europe.",
      },
      icon: "🌌",
    },
  ],

  weatherCities: [
    {
      id: "helsinki",
      name: "Helsinki",
      region: { fr: "Côte sud (Golfe de Finlande)", en: "South coast (Gulf of Finland)" },
      data: [
        { month: "Jan", temp: -4, rain: 45,  icon: "❄️" },
        { month: "Fév", temp: -5, rain: 35,  icon: "❄️" },
        { month: "Mar", temp: -1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  5, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: -2, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "rovaniemi",
      name: "Rovaniemi (Laponie)",
      region: { fr: "Cercle polaire arctique", en: "Arctic Circle" },
      data: [
        { month: "Jan", temp: -14, rain: 30, icon: "❄️" },
        { month: "Fév", temp: -14, rain: 25, icon: "❄️" },
        { month: "Mar", temp:  -8, rain: 25, icon: "❄️" },
        { month: "Avr", temp:  -1, rain: 25, icon: "❄️" },
        { month: "Mai", temp:   7, rain: 35, icon: "⛅" },
        { month: "Jun", temp:  13, rain: 65, icon: "⛅" },
        { month: "Jul", temp:  17, rain: 75, icon: "☀️" },
        { month: "Aoû", temp:  14, rain: 70, icon: "⛅" },
        { month: "Sep", temp:   8, rain: 50, icon: "⛅" },
        { month: "Oct", temp:   1, rain: 45, icon: "⛅" },
        { month: "Nov", temp:  -6, rain: 35, icon: "❄️" },
        { month: "Déc", temp: -12, rain: 35, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Helsinki — Design nordique et îles", en: "Helsinki — Nordic design and islands" },
      region: { fr: "Capitale (sud)", en: "Capital (south)" },
      description: {
        fr: "Helsinki est une capitale compacte et élégante sur la mer Baltique : le quartier de Kallio avec ses bars et galeries branchées, le Design District, la cathédrale luthérienne blanche (place du Sénat), le marché couvert de Vanha Kauppahalli, et les îles accessibles en ferry (Suomenlinna, forteresse UNESCO). Une ville qui respire.",
        en: "Helsinki is a compact, elegant capital on the Baltic Sea: Kallio with its trendy bars and galleries, the Design District, the white Lutheran cathedral on Senate Square, Vanha Kauppahalli market hall, and islands reached by ferry such as Suomenlinna, a UNESCO fortress. A city with room to breathe.",
      },
      wikipedia: "Helsinki",
      tags: ["Design", "Îles", "Architecture", "Café", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Suomenlinna — forteresse maritime UNESCO sur une île", en: "Suomenlinna — UNESCO sea fortress on an island" }, wikipedia: "Suomenlinna" },
        { name: { fr: "Sauna Löyly — sauna public avec plongée dans la mer Baltique", en: "Löyly Sauna — public sauna with a dip in the Baltic Sea" }, wikipedia: "Helsinki" },
        { name: { fr: "Musée de Design d'Helsinki — design finnois (Marimekko, Iittala)", en: "Helsinki Design Museum — Finnish design (Marimekko, Iittala)" }, wikipedia: "File:Designmuseo 2019.jpg" },
        { name: { fr: "Marché de Kauppatori et port — herring fumé et baies fraîches", en: "Kauppatori market and harbour — smoked herring and fresh berries" }, wikipedia: "File:Market Square in Helsinki, Finland, 2024 May.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Rovaniemi — Village du Père Noël", en: "Rovaniemi — Santa Claus Village" },
      region: { fr: "Laponie finlandaise", en: "Finnish Lapland" },
      description: {
        fr: "Rovaniemi est officiellement le domicile du Père Noël selon les Nations Unies — Santa Claus Village se trouve exactement sur le cercle polaire arctique. Mais au-delà du mythe, c'est la capitale de la Laponie : base pour les aurores boréales, safaris en motoneige, raquettes à neige dans la forêt de pins, et expéditions dans les parcs nationaux voisins.",
        en: "Rovaniemi is officially Santa Claus's home according to the United Nations — Santa Claus Village lies exactly on the Arctic Circle. But beyond the myth, it is the capital of Lapland: a base for northern lights viewing, snowmobile safaris, snowshoeing in pine forests, and expeditions into nearby national parks.",
      },
      wikipedia: "File:Santa Land Rovaniemi Arctic Circle2.jpg",
      tags: ["Père Noël", "Aurores", "Laponie", "Motoneige", "Ski"],
      mustSee: [
        { name: { fr: "Santa Claus Village — sur le cercle polaire exactement", en: "Santa Claus Village — right on the Arctic Circle" }, wikipedia: "Santa_Claus_Village" },
        { name: { fr: "Safari en motoneige dans la forêt de Laponie", en: "Snowmobile safari through the Lapland forest" }, wikipedia: "File:Santa Land Rovaniemi Arctic Circle2.jpg" },
        { name: { fr: "Aurores boréales depuis la campagne (sept–mars)", en: "Northern lights from the countryside (Sept–Mar)" }, wikipedia: "File:Frederic Edwin Church - Aurora Borealis - Google Art Project.jpg" },
        { name: { fr: "Traîneau à rennes avec éleveur Sami", en: "Reindeer sleigh ride with a Sámi herder" }, wikipedia: "File:MHB + renne du Père Noel à Rovaniemi en Finlande.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lacs de Saimaa — Canoë et nature", en: "Lake Saimaa — Canoeing and nature" },
      region: { fr: "Carélie du Sud", en: "South Karelia" },
      description: {
        fr: "Le lac Saimaa est le plus grand lac de Finlande et le quatrième d'Europe : son labyrinthe de 14 000 îles est le paradis du canoë et du kayak. La ville de Savonlinna abrite le château médiéval d'Olavinlinna, théâtre du Festival d'Opéra de Savonlinna (juillet) — unique au monde. Le ringed seal de Saimaa (phoque lacustre) est une espèce endémique gravement menacée.",
        en: "Lake Saimaa is Finland's largest lake and Europe's fourth largest: its maze of 14,000 islands is a paradise for canoeing and kayaking. The town of Savonlinna is home to the medieval Olavinlinna Castle, which hosts the Savonlinna Opera Festival in July — a one-of-a-kind setting. The Saimaa ringed seal, a freshwater seal, is a critically endangered endemic species.",
      },
      wikipedia: "Saimaa",
      tags: ["Lacs", "Canoë", "Opéra", "Phoques", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Canoë sur le Saimaa (itinéraire 3–7 jours, île à île)", en: "Canoeing on Lake Saimaa (3–7-day route, island to island)" }, wikipedia: "Saimaa" },
        { name: { fr: "Château médiéval d'Olavinlinna à Savonlinna", en: "Medieval Olavinlinna Castle in Savonlinna" }, wikipedia: "Olavinlinna" },
        { name: { fr: "Festival d'Opéra de Savonlinna (juillet, dans la cour du château)", en: "Savonlinna Opera Festival (July, in the castle courtyard)" }, wikipedia: "Savonlinna_Opera_Festival" },
        { name: { fr: "Phoque lacustre de Saimaa (Pusa hispida saimensis)", en: "Saimaa ringed seal (Pusa hispida saimensis)" }, wikipedia: "Saimaa_ringed_seal" },
      ],
    },
    {
      id: 4,
      name: { fr: "Archipel de Turku — Mille îles baltiques", en: "Turku Archipelago — A thousand Baltic islands" },
      region: { fr: "Côte sud-ouest", en: "Southwest coast" },
      description: {
        fr: "L'archipel de Turku est l'un des plus grands au monde (20 000 îles et îlots) et la partie habitée la plus au sud de la Finlande. Turku, ancienne capitale du pays, conserve son château médiéval et sa cathédrale du XIIIe siècle. Le ferry saisonnier parcourt l'archipel entre Turku et Åland en passant par des dizaines d'îles habitées.",
        en: "The Turku Archipelago is one of the largest in the world (20,000 islands and islets) and the southernmost inhabited part of Finland. Turku, the country's former capital, still has its medieval castle and 13th-century cathedral. The seasonal ferry route crosses the archipelago between Turku and Åland, stopping by dozens of inhabited islands.",
      },
      wikipedia: "File:Lempisaari, Naantali, Finland..jpg",
      tags: ["Îles", "Ferry", "Médiéval", "Baltique"],
      mustSee: [
        { name: { fr: "Château de Turku (XIIIe s.) — musée historique finnois", en: "Turku Castle (13th c.) — Finnish history museum" }, wikipedia: "Turku_Castle" },
        { name: { fr: "Archipel Trail en ferry (Turku → Åland) — paysage unique", en: "Archipelago Trail by ferry (Turku → Åland) — unique scenery" }, wikipedia: "File:Oasis of the seas leaving STX shipyard, Turku, Finland - pic2.JPG" },
        { name: { fr: "Visite d'une ferme d'archipel — fromage local et poisson fumé", en: "Visit an archipelago farm — local cheese and smoked fish" }, wikipedia: "File:Finland 2018-07-07 (44299618252).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Finlande est chère mais légèrement moins que les autres pays nordiques. L'euro facilite les comparaisons. Le lunch (ravintola lunch) à 10–15€ est une institution qui rend le déjeuner abordable. La chaîne de supermarchés K-Market et Alepa offre des prix raisonnables.",
      en: "Finland is expensive, though slightly less so than the other Nordic countries. The euro makes comparisons easy. The 10–15€ lunch special (ravintola lunch) is an institution that keeps midday meals affordable. Supermarket chains such as K-Market and Alepa offer reasonable prices.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse / hostel Helsinki", en: "Hostel in Helsinki" }, price: "30–60 €", detail: { fr: "Dortoir ou chambre privée", en: "Dorm bed or private room" } },
          { label: { fr: "Hôtel 3★ Helsinki", en: "3★ hotel in Helsinki" }, price: "100–180 €", detail: { fr: "Bon confort dans la capitale", en: "Good comfort in the capital" } },
          { label: { fr: "Chalet de Laponie (Rovaniemi, base aurores)", en: "Lapland chalet (Rovaniemi, northern lights base)" }, price: "100–250 €", detail: { fr: "Chalet bois avec poêle ou fenêtres boréales", en: "Wooden chalet with a stove or aurora-view windows" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Lunch (plat + salade + pain + café) en semaine", en: "Weekday lunch (main + salad + bread + coffee)" }, price: "10–15 €", detail: { fr: "Formule disponible partout en Finlande", en: "Set menu available all over Finland" } },
          { label: { fr: "Café + pulla (brioche à la cardamome)", en: "Coffee + pulla (cardamom bun)" }, price: "4–7 €", detail: { fr: "Rituel finlandais plusieurs fois par jour", en: "A Finnish ritual several times a day" } },
          { label: { fr: "Supermarché (K-Market, Lidl) — courses journée", en: "Supermarket (K-Market, Lidl) — day's groceries" }, price: "10–20 €", detail: { fr: "Large gamme, qualité bonne", en: "Wide selection, good quality" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Métro + bus Helsinki (journée)", en: "Helsinki metro + bus (day pass)" }, price: "9 €", detail: { fr: "Réseau HSL, très ponctuel", en: "HSL network, very punctual" } },
          { label: { fr: "Train VR Helsinki–Tampere (2h)", en: "VR train Helsinki–Tampere (2h)" }, price: "15–35 €", detail: { fr: "Réservation recommandée", en: "Booking recommended" } },
          { label: { fr: "Vol Helsinki–Rovaniemi (1h)", en: "Helsinki–Rovaniemi flight (1h)" }, price: "50–150 €", detail: { fr: "Finnair ou Norwegian — très pratique", en: "Finnair or Norwegian — very convenient" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Sauna public (Löyly ou Allas Sea Pool) + baignade", en: "Public sauna (Löyly or Allas Sea Pool) + swim" }, price: "20–35 €", detail: { fr: "Expérience finlandaise fondamentale", en: "A fundamental Finnish experience" } },
          { label: { fr: "Safari aurores boréales (Rovaniemi, 3h minibus)", en: "Northern lights safari (Rovaniemi, 3h minibus)" }, price: "60–100 €", detail: { fr: "Sept–mars, selon conditions", en: "Sept–Mar, depending on conditions" } },
          { label: { fr: "Location canoë lac Saimaa (journée)", en: "Lake Saimaa canoe rental (day)" }, price: "40–70 €", detail: { fr: "Itinéraire libre entre les îles", en: "Free route between the islands" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "100–160 €/j", desc: { fr: "Auberge + lunch + supermarché + transports publics", en: "Hostel + lunch special + supermarket + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "180–300 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3★ hotel + restaurants + guided excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Helsinki (3j) → Saimaa / Savonlinna (3j) → Rovaniemi Laponie (4j)",
        en: "Helsinki (3d) → Saimaa / Savonlinna (3d) → Rovaniemi, Lapland (4d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Helsinki (Finnair, Air France)", en: "Return flight Paris–Helsinki (Finnair, Air France)" }, amount: "100–250 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "400–700 €" },
            { label: { fr: "Transports (trains, vols intérieurs, ferries)", en: "Transport (trains, domestic flights, ferries)" }, amount: "300–500 €" },
            { label: { fr: "Nourriture (lunch + supermarché)", en: "Food (lunch specials + supermarket)" }, amount: "350–550 €" },
            { label: { fr: "Activités (sauna, aurores, canoë)", en: "Activities (sauna, northern lights, canoeing)" }, amount: "250–450 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Helsinki", en: "Return flight Paris–Helsinki" }, amount: "150–400 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)" }, amount: "1 000–1 800 €" },
            { label: { fr: "Vols intérieurs + transports", en: "Domestic flights + transport" }, amount: "400–700 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "600–900 €" },
            { label: { fr: "Safaris Laponie + activités", en: "Lapland safaris + activities" }, amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h30 (Finnair direct CDG–Helsinki). Aussi SAS via Stockholm. Nombreuses liaisons quotidiennes.", en: "~2h30 (Finnair direct CDG–Helsinki). SAS also flies via Stockholm. Many daily connections." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen Area. A French national ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€). Carte bancaire acceptée partout — contactless universel. Espèces presque inutiles.", en: "Euro (€). Cards are accepted everywhere — contactless is universal. Cash is almost unnecessary." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Finnois (langue très différente des autres langues européennes). Anglais parfaitement parlé partout. Suédois également officiel.", en: "Finnish (a language very different from other European languages). English is widely spoken everywhere. Swedish is also an official language." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
  ],
};
