export const CZECH_REPUBLIC = {
  code: "CZE",
  numericId: 203,
  name: { fr: "Tchéquie", en: "Czech Republic" },
  emoji: "🇨🇿",
  capital: { fr: "Prague", en: "Prague" },
  language: { fr: "Tchèque", en: "Czech" },
  currency: { fr: "Couronne tchèque (CZK)", en: "Czech koruna (CZK)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 55, budgetMid: 95,
    tripMin: 900, tripMid: 2000,
  },
  description: {
    fr: "La Tchéquie est dominée par Prague — l'une des villes les plus belles et les mieux préservées d'Europe : le Pont Charles, le Château de Prague, le quartier juif de Josefov, la Vieille Ville avec son horloge astronomique. Mais au-delà de Prague : Český Krumlov (château baroque UNESCO), Brno, les champs de houblon de Bohême et la bière Pilsner (inventée ici en 1842).",
    en: "The Czech Republic is defined by Prague — one of the most beautiful and best-preserved cities in Europe: Charles Bridge, Prague Castle, the Jewish quarter of Josefov, and the Old Town with its astronomical clock. But beyond Prague lie Český Krumlov (a UNESCO-listed Baroque castle town), Brno, Bohemia's hop fields, and Pilsner beer, which was invented here in 1842.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Octobre", en: "April – October" },
      label: { fr: "Saison douce", en: "Mild season" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (18–26°C), terrasses, festivals. Mai–juin idéal avant les foules d'été. Septembre–octobre : couleurs d'automne magnifiques et moins de touristes.",
        en: "Pleasant temperatures (18–26°C), outdoor terraces and festivals. May–June is ideal before the summer crowds. September–October brings beautiful autumn colours and fewer tourists.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre", en: "December" },
      label: { fr: "Marchés de Noël", en: "Christmas markets" },
      color: "#f59e0b",
      description: {
        fr: "Les marchés de Noël de Prague (place de la Vieille Ville) sont parmi les plus beaux d'Europe. Vin chaud, trdelník, lumières et neige possible.",
        en: "Prague's Christmas markets, especially in Old Town Square, are among the most beautiful in Europe. Mulled wine, trdelník, festive lights and the chance of snow set the scene.",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "prague",
      name: "Prague",
      region: { fr: "Bohême (centre)", en: "Bohemia (central)" },
      data: [
        { month: "Jan", temp:  0, rain: 20,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 20,  icon: "❄️" },
        { month: "Mar", temp:  6, rain: 30,  icon: "⛅" },
        { month: "Avr", temp: 11, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 16, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 65,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 60,  icon: "☀️" },
        { month: "Sep", temp: 16, rain: 40,  icon: "⛅" },
        { month: "Oct", temp: 10, rain: 35,  icon: "⛅" },
        { month: "Nov", temp:  5, rain: 30,  icon: "⛅" },
        { month: "Déc", temp:  1, rain: 25,  icon: "❄️" },
      ],
    },
    {
      id: "cesky_krumlov",
      name: "Český Krumlov",
      region: { fr: "Bohême du Sud", en: "South Bohemia" },
      data: [
        { month: "Jan", temp: -1, rain: 40,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 35,  icon: "❄️" },
        { month: "Mar", temp:  5, rain: 45,  icon: "⛅" },
        { month: "Avr", temp: 10, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 15, rain: 85,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 95,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 100, icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 90,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  9, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  4, rain: 50,  icon: "⛅" },
        { month: "Déc", temp:  0, rain: 40,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Prague — La Ville aux cents tours", en: "Prague — The City of a Hundred Spires" },
      region: { fr: "Bohême", en: "Bohemia" },
      description: {
        fr: "Prague est la plus belle capitale d'Europe centrale : le Pont Charles (XIVe s.) avec ses 30 statues baroques, le Château de Prague (le plus grand complexe castral du monde, UNESCO), la Vieille Ville avec son horloge astronomique (1410) et ses fontaines, et le quartier juif de Josefov — le quartier juif médiéval le mieux préservé au monde. La nuit, la ville brille de mille feux.",
        en: "Prague is Central Europe's finest capital: Charles Bridge from the 14th century with its 30 Baroque statues, Prague Castle — the largest castle complex in the world and a UNESCO site — the Old Town with its astronomical clock dating from 1410 and its fountains, and the Jewish quarter of Josefov, the best-preserved medieval Jewish quarter in the world. By night, the city sparkles.",
      },
      wikipedia: "Prague",
      tags: ["Médiéval", "UNESCO", "Château", "Pont Charles", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Pont Charles — statues baroques sur la Vltava (XIVe s.)", en: "Charles Bridge — Baroque statues above the Vltava (14th century)" }, wikipedia: "Charles_Bridge" },
        { name: { fr: "Château de Prague — complexe de cathédrale, palais, vignoble", en: "Prague Castle — cathedral, palace and vineyard complex" }, wikipedia: "Prague_Castle" },
        { name: { fr: "Horloge astronomique de la Vieille Ville (Orloj, 1410)", en: "Old Town Astronomical Clock (Orloj, 1410)" }, wikipedia: "Prague_astronomical_clock" },
        { name: { fr: "Josefov — synagogues médiévales et cimetière juif", en: "Josefov — medieval synagogues and Jewish cemetery" }, wikipedia: "Josefov" },
      ],
    },
    {
      id: 2,
      name: { fr: "Český Krumlov — Château baroque UNESCO", en: "Český Krumlov — UNESCO Baroque Castle" },
      region: { fr: "Bohême du Sud", en: "South Bohemia" },
      description: {
        fr: "Český Krumlov est un village médiéval et baroque intact classé UNESCO : son château du XIIIe siècle (deuxième plus grand de Bohême) domine un méandre de la Vltava. Le théâtre baroque du château est l'un des mieux préservés au monde, encore équipé de ses décors originaux. En été, le festival des Cinq-pétales fait revivre la ville en costumes du XVIe siècle.",
        en: "Český Krumlov is an intact medieval and Baroque town listed by UNESCO. Its 13th-century castle, the second largest in Bohemia, overlooks a bend in the Vltava. The castle's Baroque theatre is one of the best preserved in the world and still has its original stage sets. In summer, the Five-Petalled Rose Festival brings the town back to life in 16th-century costume.",
      },
      wikipedia: "Český_Krumlov",
      tags: ["Château", "UNESCO", "Baroque", "Village", "Architecture"],
      mustSee: [
        { name: { fr: "Château de Český Krumlov — méandre de la Vltava, panorama", en: "Český Krumlov Castle — Vltava meander and panoramic views" }, wikipedia: "Český_Krumlov_Castle" },
        { name: { fr: "Théâtre baroque du château — scène du XVIIe s. intacte", en: "Castle Baroque theatre — intact 17th-century stage" }, wikipedia: "File:Divadlo Krumlov.JPG" },
        { name: { fr: "Canot sur la Vltava à travers le méandre sous le château", en: "Canoeing on the Vltava through the bend below the castle" }, wikipedia: "File:Vltava river in Prague.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Plzeň — Berceau de la Pilsner", en: "Plzeň — Birthplace of Pilsner" },
      region: { fr: "Bohême de l'Ouest", en: "West Bohemia" },
      description: {
        fr: "Plzeň (Pilsen) est la capitale mondiale de la bière blonde : la Pilsner Urquell a été inventée ici en 1842 par Josef Groll, révolutionnant la brasserie mondiale. La brasserie Pilsner Urquell est classée patrimoine industriel : ses caves voûtées où mûrit encore la bière de garde (tankovna) sont visitables avec dégustation. La ville a aussi une belle cathédrale gothique.",
        en: "Plzeň (Pilsen) is the world capital of pale lager: Pilsner Urquell was invented here in 1842 by Josef Groll, revolutionising brewing worldwide. The Pilsner Urquell brewery is part of the country's industrial heritage, and its vaulted cellars, where unfiltered lager still matures, can be visited with tastings. The city also has a beautiful Gothic cathedral.",
      },
      wikipedia: "File:Plzeň - Chvojová 03.jpg",
      tags: ["Bière", "Brasserie", "Pilsner", "Caves"],
      mustSee: [
        { name: { fr: "Brasserie Pilsner Urquell — caves et dégustation de bière non-filtrée", en: "Pilsner Urquell Brewery — cellars and unfiltered beer tasting" }, wikipedia: "File:Pilsner Urquell mug.jpg" },
        { name: { fr: "Musée de la bière de Bohême (Pivovarské muzeum)", en: "Bohemian Beer Museum (Pivovarské muzeum)" }, wikipedia: "File:Pivovar Kostelec nad Černými lesy (01).jpg" },
        { name: { fr: "Cathédrale gothique Saint-Barthélemy avec la plus haute tour de Bohême", en: "Gothic St. Bartholomew's Cathedral with Bohemia's tallest tower" }, wikipedia: "File:Plzeň 12.3.2012.jpg" },
        { name: { fr: "Souterrains médiévaux sous la ville de Plzeň", en: "Medieval underground tunnels beneath Plzeň" }, wikipedia: "File:Plzeň - Chvojová 01.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Brno et Moravie — Caves et vignes", en: "Brno and Moravia — Cellars and Vineyards" },
      region: { fr: "Moravie (est)", en: "Moravia (east)" },
      description: {
        fr: "Brno, deuxième ville de Tchéquie, est une ville universitaire et culturelle avec le château Špilberk (prison d'État des Habsbourg) et la villa Tugendhat (chef-d'œuvre de Mies van der Rohe, UNESCO). La Moravie produit 95% des vins tchèques : les villages de Velké Pavlovice, Mikulov et Znojmo offrent une route des vins similaire à l'Alsace.",
        en: "Brno, the Czech Republic's second city, is a lively university and cultural centre with Špilberk Castle, once a Habsburg state prison, and Villa Tugendhat, Mies van der Rohe's UNESCO-listed masterpiece. Moravia produces 95% of Czech wine, and villages such as Velké Pavlovice, Mikulov and Znojmo offer a wine route reminiscent of Alsace.",
      },
      wikipedia: "File:Brno, Škoda 13T č. 1902.jpg",
      tags: ["Vin", "Modernisme", "UNESCO", "Université", "Ville"],
      mustSee: [
        { name: { fr: "Villa Tugendhat Brno (UNESCO) — chef-d'œuvre de Mies van der Rohe", en: "Villa Tugendhat in Brno (UNESCO) — a Mies van der Rohe masterpiece" }, wikipedia: "Villa_Tugendhat" },
        { name: { fr: "Château Špilberk — prison habsbourgeoise et vue sur Brno", en: "Špilberk Castle — Habsburg prison and views over Brno" }, wikipedia: "Špilberk_Castle" },
        { name: { fr: "Causse morave (Moravský kras) — grottes et abîmes", en: "Moravian Karst (Moravský kras) — caves and dramatic sinkholes" }, wikipedia: "Moravian_Karst" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Tchéquie est abordable pour les Européens occidentaux, surtout en dehors de Prague. La couronne tchèque n'est pas dans l'euro — les prix semblent élevés en CZK mais restent modérés en euros. La bière est souvent moins chère que l'eau.",
      en: "The Czech Republic is affordable for Western Europeans, especially outside Prague. The Czech koruna is not part of the euro, so prices may look high in CZK but remain moderate in euros. Beer is often cheaper than water.",
    },
    currency: "CZK",
    exchangeRate: "1€ ≈ 25 CZK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse Prague centre", en: "Hostel in central Prague" }, price: "15–35 €", detail: { fr: "Excellents hostels, nombreux et bien situés", en: "Excellent hostels, plentiful and well located" } },
          { label: { fr: "Hôtel 3★ Prague ou Brno", en: "3-star hotel in Prague or Brno" }, price: "60–120 €", detail: { fr: "Souvent inclus petit-déjeuner", en: "Breakfast is often included" } },
          { label: { fr: "Appartement Airbnb à Prague (2 pers.)", en: "Airbnb apartment in Prague (2 people)" }, price: "50–100 €", detail: { fr: "Bien situé en Vieille Ville", en: "Well located in the Old Town" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Svíčková (bœuf à la crème) ou guláš dans une hospoda", en: "Svíčková (beef in cream sauce) or guláš in a hospoda" }, price: "8–14 €", detail: { fr: "La cuisine bohémienne typique", en: "Classic Bohemian comfort food" } },
          { label: { fr: "Bière Pilsner Urquell ou Kozel (pint en bar)", en: "Pilsner Urquell or Kozel beer (pint in a bar)" }, price: "2–4 €", detail: { fr: "Parmi les moins chères d'Europe", en: "Among the cheapest in Europe" } },
          { label: { fr: "Trdelník (pâtisserie) dans la rue", en: "Street-side trdelník pastry" }, price: "3–5 €", detail: { fr: "Touristique mais délicieux", en: "Touristy but delicious" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus RegioJet ou FlixBus Prague–Brno (2h30)", en: "RegioJet or FlixBus Prague–Brno coach (2h30)" }, price: "10–20 €", detail: { fr: "Confortable, WiFi, café", en: "Comfortable, with Wi-Fi and coffee" } },
          { label: { fr: "Métro + tram Prague (ticket 24h)", en: "Prague metro + tram (24-hour pass)" }, price: "5 €", detail: { fr: "Réseau dense, 24h/24", en: "Dense network, running around the clock" } },
          { label: { fr: "Train ČD Rychlík Prague–Plzeň (1h30)", en: "ČD Rychlík train Prague–Plzeň (1h30)" }, price: "8–15 €", detail: { fr: "Ponctuel", en: "Usually on time" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Billet Château de Prague (Cathédrale + Vieux Palais)", en: "Prague Castle ticket (Cathedral + Old Royal Palace)" }, price: "15 €", detail: { fr: "Journée complète recommandée", en: "A full day is recommended" } },
          { label: { fr: "Dégustation guidée brasserie Pilsner Urquell", en: "Guided tasting at Pilsner Urquell Brewery" }, price: "20–30 €", detail: { fr: "Caves + bière non-filtrée", en: "Cellars + unfiltered beer" } },
          { label: { fr: "Croisière panoramique sur la Vltava (1h)", en: "Panoramic cruise on the Vltava (1h)" }, price: "12–20 €", detail: { fr: "Vue sur Pont Charles et château", en: "Views of Charles Bridge and the castle" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "55–90 €/j", desc: { fr: "Auberge + hospoda + transports publics", en: "Hostel + hospoda + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "95–170 €/j", desc: { fr: "Hôtel 3★ + restaurants + visites guidées", en: "3-star hotel + restaurants + guided visits" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "Prague (4j) → Český Krumlov (2j) → Plzeň (1j) → retour Prague (1j)",
        en: "Prague (4d) → Český Krumlov (2d) → Plzeň (1d) → back to Prague (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Prague (Wizz Air, Ryanair, Air France)", en: "Return flight Paris–Prague (Wizz Air, Ryanair, Air France)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "200–350 €" },
            { label: { fr: "Transports intérieurs (bus + train + tram)", en: "Internal transport (bus + train + tram)" }, amount: "100–180 €" },
            { label: { fr: "Nourriture + bières", en: "Food + beers" }, amount: "250–400 €" },
            { label: { fr: "Entrées + visites guidées", en: "Entry tickets + guided visits" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 000 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Prague", en: "Return flight Paris–Prague" }, amount: "100–300 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3-star hotels (8 nights)" }, amount: "550–1 100 €" },
            { label: { fr: "Transports + voiture de location", en: "Transport + rental car" }, amount: "200–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–700 €" },
            { label: { fr: "Activités, brasseries, sorties", en: "Activities, breweries and nights out" }, amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~1h50 (Air France direct, Wizz Air, Ryanair CDG/Beauvais–Prague). Nombreuses liaisons.", en: "~1h50 (direct Air France, Wizz Air, Ryanair from CDG/Beauvais to Prague). Plenty of connections." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French national ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Couronne tchèque (CZK). Carte bancaire acceptée partout à Prague. Retrait DAB pour les petits commerces et bars.", en: "Czech koruna (CZK). Bank cards are accepted almost everywhere in Prague. Use ATMs for small shops and bars." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Tchèque. Anglais bien parlé à Prague. Moins courant en dehors. Allemand aussi utile.", en: "Czech. English is widely spoken in Prague, less so elsewhere. German is also useful." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/E (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution particulière. CEAM valide. Qualité des soins excellente.", en: "No special precautions needed. The EHIC is valid. Healthcare quality is excellent." } },
    { icon: "🍺", label: { fr: "Bière", en: "Beer" }, value: { fr: "La République Tchèque est le premier pays consommateur de bière par habitant au monde. Une pinte de Pilsner en bar coûte 1,50–3€.", en: "The Czech Republic has the world's highest beer consumption per capita. A pint of Pilsner in a bar costs about €1.50–3." } },
    { icon: "⚠️", label: { fr: "Pickpockets", en: "Pickpockets" }, value: { fr: "Prague attire beaucoup de touristes et les pickpockets sont actifs sur le Pont Charles, dans les tramways 22/23 et autour de l'Horloge astronomique. Vigilance recommandée.", en: "Prague attracts large numbers of tourists, and pickpockets are active on Charles Bridge, on trams 22/23 and around the Astronomical Clock. Stay alert." } },
  ],
};
