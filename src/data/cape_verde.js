export const CAPE_VERDE = {
  code: "CPV",
  numericId: 132,
  name: { fr: "Cap-Vert", en: "Cape Verde" },
  emoji: "🇨🇻",
  capital: { fr: "Praia", en: "Praia" },
  language: { fr: "Portugais, Créole cap-verdien", en: "Portuguese, Cape Verdean Creole" },
  currency: { fr: "Escudo cap-verdien (CVE)", en: "Cape Verdean escudo (CVE)" },
  timezone: "UTC-1",
  filter: {
    budgetMin: 50, budgetMid: 110,
    tripMin: 1500, tripMid: 3200,
  },
  description: {
    fr: "Le Cap-Vert est un archipel de 10 îles volcanique au large des côtes sénégalaises : le volcan Fogo (encore actif) dont les vignes poussent dans la lave, Mindelo et son carnaval afro-brésilien légendaire, les plages de Sal pour le kitesurf et Santo Antão, paradis de la randonnée dans des paysages lunaires verdoyants.",
    en: "Cape Verde is a volcanic archipelago of 10 islands off the Senegalese coast: the still-active Fogo volcano, whose vineyards grow in the lava, Mindelo with its legendary Afro-Brazilian carnival, the beaches of Sal for kitesurfing, and Santo Antão, a hiking paradise of lush, lunar-like landscapes.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Juin", en: "November – June" },
      label: { fr: "Saison sèche et ensoleillée", en: "Dry and sunny season" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour toutes les activités. Températures agréables (22–27°C), mer calme, ciel bleu. Kitesurf à son meilleur de nov à juin.",
        en: "Ideal for all activities. Pleasant temperatures (22–27°C), calm sea, blue skies. Kitesurfing at its best from November to June.",
      },
      icon: "🏄",
    },
    {
      months: { fr: "Juillet – Octobre", en: "July – October" },
      label: { fr: "Harmattan et vents de sable", en: "Harmattan and sandy winds" },
      color: "#ef4444",
      description: {
        fr: "Vents d'harmattan et sable du Sahara réduisant la visibilité. Quelques pluies sur Fogo et Santo Antão. Mer plus agitée.",
        en: "Harmattan winds and Saharan dust reduce visibility. Some rain over Fogo and Santo Antão. Rougher seas.",
      },
      icon: "💨",
    },
  ],

  weatherCities: [
    {
      id: "sal",
      name: "Sal",
      region: { fr: "Barlavento (Sotavento)", en: "Barlavento (Sotavento)" },
      data: [
        { month: "Jan", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Avr", temp: 23, rain: 0,  icon: "☀️" },
        { month: "Mai", temp: 24, rain: 0,  icon: "☀️" },
        { month: "Jun", temp: 26, rain: 0,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 5,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 15, icon: "⛅" },
        { month: "Sep", temp: 29, rain: 25, icon: "⛅" },
        { month: "Oct", temp: 28, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 26, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 23, rain: 0,  icon: "☀️" },
      ],
    },
    {
      id: "sao_vicente",
      name: "São Vicente (Mindelo)",
      region: { fr: "Barlavento", en: "Barlavento" },
      data: [
        { month: "Jan", temp: 21, rain: 10, icon: "☀️" },
        { month: "Fév", temp: 21, rain: 10, icon: "☀️" },
        { month: "Mar", temp: 21, rain: 5,  icon: "☀️" },
        { month: "Avr", temp: 22, rain: 0,  icon: "☀️" },
        { month: "Mai", temp: 23, rain: 0,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 0,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 0,  icon: "☀️" },
        { month: "Aoû", temp: 27, rain: 10, icon: "⛅" },
        { month: "Sep", temp: 28, rain: 30, icon: "⛅" },
        { month: "Oct", temp: 27, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 25, rain: 5,  icon: "☀️" },
        { month: "Déc", temp: 22, rain: 10, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Fogo — Volcan & Vignes", en: "Fogo — Volcano & Vineyards" },
      region: { fr: "Sotavento", en: "Sotavento" },
      description: {
        fr: "L'île de Fogo est dominée par le Pico do Fogo (2 829 m), volcan actif dont la dernière éruption date de 2014–2015. Dans la caldeira (Chã das Caldeiras), un village de 1 000 personnes cultive du vin et du café dans la lave, encerclé par les parois de la caldera — un des paysages les plus saisissants de l'Afrique.",
        en: "Fogo island is dominated by the Pico do Fogo (2,829 m), an active volcano whose last eruption was in 2014–2015. Inside the caldera (Chã das Caldeiras), a village of 1,000 people grows wine and coffee in the lava, ringed by the caldera walls — one of the most striking landscapes in Africa.",
      },
      wikipedia: "File:Fogo, Cape Verde Islands.jpg",
      tags: ["Volcan", "Randonnée", "Unique", "Vin"],
      mustSee: [
        { name: { fr: "Ascension Pico do Fogo (2 829 m, 5h)", en: "Pico do Fogo ascent (2,829 m, 5h)" }, wikipedia: "Pico_do_Fogo" },
        { name: { fr: "Village Chã das Caldeiras dans la lave", en: "Chã das Caldeiras village in the lava" }, wikipedia: "Chã_das_Caldeiras" },
        { name: { fr: "Vue sur les îles voisines depuis la caldeira", en: "View of neighbouring islands from the caldera" }, wikipedia: "File:Carlb-fogo-newfoundland-2002.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Mindelo & São Vicente", en: "Mindelo & São Vicente" },
      region: { fr: "Barlavento", en: "Barlavento" },
      description: {
        fr: "Mindelo est la capitale culturelle du Cap-Vert : berceau de la morna (musique mélancolique de Cesária Évora, classée UNESCO), port colonial coloré aux bâtisses portugaises, et le Carnaval de Mindelo (février) — le plus spectaculaire d'Afrique. Une ville qui vibre.",
        en: "Mindelo is Cape Verde's cultural capital: birthplace of morna (Cesária Évora's melancholic music, UNESCO-listed), a colourful colonial port lined with Portuguese buildings, and home to the Mindelo Carnival (February) — the most spectacular in Africa. A city that truly vibrates.",
      },
      wikipedia: "Mindelo",
      tags: ["Culture", "Musique", "Carnaval", "Port"],
      mustSee: [
        { name: { fr: "Carnaval de Mindelo (février) — le plus grand d'Afrique", en: "Mindelo Carnival (February) — the biggest in Africa" }, wikipedia: "File:קרנבל_מינדלו_באי_סאו_ויסנטה_באיי_כף_ורדה_פברואר_2023_21.jpg" },
        { name: { fr: "Morna — héritage de Cesária Évora (UNESCO)", en: "Morna — Cesária Évora's legacy (UNESCO)" }, wikipedia: "Morna_(music)" },
        { name: { fr: "Baie de Porto Grande — coucher de soleil", en: "Porto Grande Bay — sunset" }, wikipedia: "Porto_Grande" },
        { name: { fr: "Marché Municipal & rue piétonne Avenida Marginal", en: "Municipal Market & Avenida Marginal pedestrian street" }, wikipedia: "Mindelo" },
      ],
    },
    {
      id: 3,
      name: { fr: "Sal — Kitesurf & Salines", en: "Sal — Kitesurfing & Salt Flats" },
      region: { fr: "Barlavento", en: "Barlavento" },
      description: {
        fr: "Sal est l'île la plus touristique du Cap-Vert : ses vents constants et ses eaux peu profondes en font un paradis mondial du kitesurf et du windsurf. Pedra de Lume, un ancien cratère volcanique rempli d'eau salée, permet de flotter comme en mer Morte. Santa Maria est la plage la plus fréquentée.",
        en: "Sal is Cape Verde's most touristy island: its steady winds and shallow waters make it a world-class paradise for kitesurfing and windsurfing. Pedra de Lume, a former volcanic crater filled with salt water, lets you float just like in the Dead Sea. Santa Maria is the busiest beach.",
      },
      wikipedia: "File:Sal, Cape Verde Islands.jpeg",
      tags: ["Kitesurf", "Plage", "Salines", "Sports nautiques"],
      mustSee: [
        { name: { fr: "Kitesurf Kite Beach Santa Maria (vent constant)", en: "Kitesurfing at Kite Beach Santa Maria (steady wind)" }, wikipedia: "Kiteboarding" },
        { name: { fr: "Pedra de Lume — cratère volcanique salin (flottaison)", en: "Pedra de Lume — salty volcanic crater (floating)" }, wikipedia: "Pedra_de_Lume" },
        { name: { fr: "Snorkel Santa Maria — tortues imbriquées", en: "Snorkelling at Santa Maria — hawksbill turtles" }, wikipedia: "Hawksbill_sea_turtle" },
      ],
    },
    {
      id: 4,
      name: { fr: "Santo Antão — Randonnée", en: "Santo Antão — Hiking" },
      region: { fr: "Barlavento", en: "Barlavento" },
      description: {
        fr: "Santo Antão est la plus grande et la plus verte des îles du Cap-Vert : ses vallées tropicales (Paúl, Ribeira Grande) contrastent avec ses crêtes arides et ses falaises sur l'Atlantique. La randonnée de la Cova à la plage de Ponta do Sol (5h) est l'une des plus belles de l'Afrique.",
        en: "Santo Antão is the largest and greenest of Cape Verde's islands: its tropical valleys (Paúl, Ribeira Grande) contrast with arid ridges and cliffs over the Atlantic. The hike from Cova to Ponta do Sol beach (5h) is one of the finest in Africa.",
      },
      wikipedia: "File:Coastline Santo Antao.JPG",
      tags: ["Randonnée", "Nature", "Vallées", "Montagne"],
      mustSee: [
        { name: { fr: "Vallée de Paul — randonnée tropicale dans les bananiers", en: "Paul Valley — tropical hike through banana groves" }, wikipedia: "File:Santo Antão, Cabo Verde 2017-04 --3.jpg" },
        { name: { fr: "Trek Cova–Ponta do Sol (falaises atlantiques, 5h)", en: "Cova–Ponta do Sol trek (Atlantic cliffs, 5h)" }, wikipedia: "Santo_Antão,_Cape_Verde" },
        { name: { fr: "Distilleries de grogue (rhum local) artisanales", en: "Artisanal grogue (local rum) distilleries" }, wikipedia: "Grogue" },
        { name: { fr: "Pico da Cruz — sommet avec vue sur les îles", en: "Pico da Cruz — summit with island views" }, wikipedia: "File:Santo Antão, Cabo Verde 2017-04 --9.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Cap-Vert est accessible avec un budget raisonnable. L'escudo cap-verdien est arrimé à l'euro (1€ = 110 CVE), ce qui facilite la gestion du budget. Sal est plus chère que Fogo ou Santo Antão. Les vols inter-îles sont indispensables.",
      en: "Cape Verde is affordable on a reasonable budget. The Cape Verdean escudo is pegged to the euro (1€ = 110 CVE), which makes budgeting easy. Sal is pricier than Fogo or Santo Antão. Inter-island flights are essential.",
    },
    currency: "CVE",
    exchangeRate: "1€ = 110 CVE (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Pension / guesthouse (Fogo, Santo Antão)", en: "Guesthouse (Fogo, Santo Antão)" }, price: "20–40 €", detail: { fr: "Simple et authentique", en: "Simple and authentic" } },
          { label: { fr: "Hôtel 3★ Santa Maria (Sal)", en: "3★ hotel in Santa Maria (Sal)" }, price: "60–120 €", detail: { fr: "Vue mer, clim, piscine", en: "Sea view, A/C, pool" } },
          { label: { fr: "Resort tout-inclus Sal ou Boa Vista", en: "All-inclusive resort in Sal or Boa Vista" }, price: "150–300 €", detail: { fr: "All-inclusive, plage privée", en: "All-inclusive, private beach" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Cachupa (ragoût national)", en: "Cachupa (national stew)" }, price: "3–6 €", detail: { fr: "Plat traditionnel copieux", en: "Hearty traditional dish" } },
          { label: { fr: "Poisson frais grillé (atum, garoupa)", en: "Grilled fresh fish (tuna, grouper)" }, price: "8–15 €", detail: { fr: "Pêche du jour", en: "Catch of the day" } },
          { label: { fr: "Restaurant Santa Maria (Sal)", en: "Restaurant in Santa Maria (Sal)" }, price: "15–30 €", detail: { fr: "Fruits de mer, terrasse", en: "Seafood, terrace" } },
        ],
      },
      {
        id: "transport",
        icon: "✈️",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Vol inter-îles (Bestfly, TACV)", en: "Inter-island flight (Bestfly, TACV)" }, price: "40–80 €", detail: { fr: "A/R, 30–60 min", en: "Return, 30–60 min" } },
          { label: { fr: "Ferry (Santiago–Fogo ou São Vicente–Santo Antão)", en: "Ferry (Santiago–Fogo or São Vicente–Santo Antão)" }, price: "15–25 €", detail: { fr: "1–3h selon trajet", en: "1–3h depending on route" } },
          { label: { fr: "Aluguer (taxi partagé)", en: "Aluguer (shared taxi)" }, price: "2–5 €", detail: { fr: "Transport local", en: "Local transport" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Cours de kitesurf (2h)", en: "Kitesurfing lesson (2h)" }, price: "60–80 €", detail: { fr: "Matériel inclus, Sal", en: "Equipment included, Sal" } },
          { label: { fr: "Ascension Pico do Fogo (guide obligatoire)", en: "Pico do Fogo ascent (guide mandatory)" }, price: "30–50 €", detail: { fr: "5h, vue spectaculaire", en: "5h, spectacular view" } },
          { label: { fr: "Snorkel ou plongée (2 immersions)", en: "Snorkelling or diving (2 dives)" }, price: "50–70 €", detail: { fr: "Tortues, raies", en: "Turtles, rays" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cachupa + aluguer + vols inter-îles", en: "Guesthouse + cachupa + aluguer + inter-island flights" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "110–180 €/j", desc: { fr: "Hôtel 3★ + restos + kitesurf + activités", en: "3★ hotel + restaurants + kitesurfing + activities" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "300 €+/j", desc: { fr: "Resort all-inclusive + excursions privées + spa", en: "All-inclusive resort + private excursions + spa" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: { fr: "Sal (3j) → São Vicente / Mindelo (2j) → Santo Antão (3j) → Santiago / Fogo (4j)", en: "Sal (3d) → São Vicente / Mindelo (2d) → Santo Antão (3d) → Santiago / Fogo (4d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Cap-Vert (direct)", en: "Return flight Paris–Cape Verde (direct)" }, amount: "300–550 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "400–600 €" },
            { label: { fr: "Vols inter-îles (3–4)", en: "Inter-island flights (3–4)" }, amount: "200–350 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "250–400 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 200 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Cap-Vert (direct)", en: "Return flight Paris–Cape Verde (direct)" }, amount: "400–700 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "900–1 500 €" },
            { label: { fr: "Vols inter-îles", en: "Inter-island flights" }, amount: "300–500 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & outings" }, amount: "500–800 €" },
            { label: { fr: "Kitesurf & activités", en: "Kitesurfing & activities" }, amount: "400–700 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "7 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Cap-Vert (Business)", en: "Return flight Paris–Cape Verde (Business)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Resorts & boutique hôtels (12 nuits)", en: "Resorts & boutique hotels (12 nights)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Vols privés inter-îles", en: "Private inter-island flights" }, amount: "600–1 000 €" },
            { label: { fr: "Gastronomie & spa", en: "Fine dining & spa" }, amount: "600–1 000 €" },
            { label: { fr: "Extras & expériences", en: "Extras & experiences" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6h direct (TACV, TAP via Lisbonne, Binter, TUI, Vueling)", en: "~6h direct (TACV, TAP via Lisbon, Binter, TUI, Vueling)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Pré-enregistrement EASE obligatoire en ligne avant le départ (~30€) sur ease.gov.cv", en: "Mandatory online EASE pre-registration before departure (~30€) at ease.gov.cv" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Escudo cap-verdien (1€ = 110 CVE — taux fixe garanti)", en: "Cape Verdean escudo (1€ = 110 CVE — guaranteed fixed rate)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Portugais (officiel) + Créole cap-verdien (langue de vie)", en: "Portuguese (official) + Cape Verdean Creole (everyday language)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F – 220 V", en: "Type C/F – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture îles principales, limitée Santo Antão rural", en: "Good coverage on main islands, limited in rural Santo Antão" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille indispensable", en: "Not drinkable — bottled water essential" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Pas de vaccin obligatoire. Dengue possible en saison des pluies.", en: "No mandatory vaccine. Dengue fever possible during the rainy season." } },
  ],
};
