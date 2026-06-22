export const CZECH_REPUBLIC = {
  code: "CZE",
  numericId: 203,
  name: "Tchéquie",
  emoji: "🇨🇿",
  capital: "Prague",
  language: "Tchèque",
  currency: "Couronne tchèque (CZK)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 55, budgetMid: 95,
    tripMin: 900, tripMid: 2000,
  },
  description:
    "La Tchéquie est dominée par Prague — l'une des villes les plus belles et les mieux préservées d'Europe : le Pont Charles, le Château de Prague, le quartier juif de Josefov, la Vieille Ville avec son horloge astronomique. Mais au-delà de Prague : Český Krumlov (château baroque UNESCO), Brno, les champs de houblon de Bohême et la bière Pilsner (inventée ici en 1842).",

  bestPeriods: [
    {
      months: "Avril – Octobre",
      label: "Saison douce",
      color: "#22c55e",
      description:
        "Températures agréables (18–26°C), terrasses, festivals. Mai–juin idéal avant les foules d'été. Septembre–octobre : couleurs d'automne magnifiques et moins de touristes.",
      icon: "☀️",
    },
    {
      months: "Décembre",
      label: "Marchés de Noël",
      color: "#f59e0b",
      description:
        "Les marchés de Noël de Prague (place de la Vieille Ville) sont parmi les plus beaux d'Europe. Vin chaud, trdelník, lumières et neige possible.",
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "prague",
      name: "Prague",
      region: "Bohême (centre)",
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
      region: "Bohême du Sud",
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
      name: "Prague — La Ville aux cents tours",
      region: "Bohême",
      description:
        "Prague est la plus belle capitale d'Europe centrale : le Pont Charles (XIVe s.) avec ses 30 statues baroques, le Château de Prague (le plus grand complexe castral du monde, UNESCO), la Vieille Ville avec son horloge astronomique (1410) et ses fontaines, et le quartier juif de Josefov — le quartier juif médiéval le mieux préservé au monde. La nuit, la ville brille de mille feux.",
      wikipedia: "Prague",
      tags: ["Médiéval", "UNESCO", "Château", "Pont Charles"],
      mustSee: [
        { name: "Pont Charles — statues baroques sur la Vltava (XIVe s.)", wikipedia: "Charles_Bridge" },
        { name: "Château de Prague — complexe de cathédrale, palais, vignoble", wikipedia: "Prague_Castle" },
        { name: "Horloge astronomique de la Vieille Ville (Orloj, 1410)", wikipedia: "Prague_astronomical_clock" },
        { name: "Josefov — synagogues médiévales et cimetière juif", wikipedia: "Josefov" },
      ],
    },
    {
      id: 2,
      name: "Český Krumlov — Château baroque UNESCO",
      region: "Bohême du Sud",
      description:
        "Český Krumlov est un village médiéval et baroque intact classé UNESCO : son château du XIIIe siècle (deuxième plus grand de Bohême) domine un méandre de la Vltava. Le théâtre baroque du château est l'un des mieux préservés au monde, encore équipé de ses décors originaux. En été, le festival des Cinq-pétales fait revivre la ville en costumes du XVIe siècle.",
      wikipedia: "Český_Krumlov",
      tags: ["Château", "UNESCO", "Baroque", "Village"],
      mustSee: [
        { name: "Château de Český Krumlov — méandre de la Vltava, panorama", wikipedia: "Český_Krumlov_Castle" },
        { name: "Théâtre baroque du château — scène du XVIIe s. intacte", wikipedia: "File:Divadlo Krumlov.JPG" },
        { name: "Canot sur la Vltava à travers le méandre sous le château", wikipedia: "File:Vltava river in Prague.jpg" },
      ],
    },
    {
      id: 3,
      name: "Plzeň — Berceau de la Pilsner",
      region: "Bohême de l'Ouest",
      description:
        "Plzeň (Pilsen) est la capitale mondiale de la bière blonde : la Pilsner Urquell a été inventée ici en 1842 par Josef Groll, révolutionnant la brasserie mondiale. La brasserie Pilsner Urquell est classée patrimoine industriel : ses caves voûtées où mûrit encore la bière de garde (tankovna) sont visitables avec dégustation. La ville a aussi une belle cathédrale gothique.",
      wikipedia: "File:Plzeň - Chvojová 03.jpg",
      tags: ["Bière", "Brasserie", "Pilsner", "Caves"],
      mustSee: [
        { name: "Brasserie Pilsner Urquell — caves et dégustation de bière non-filtrée", wikipedia: "File:Pilsner Urquell mug.jpg" },
        { name: "Musée de la bière de Bohême (Pivovarské muzeum)", wikipedia: "File:Pivovar Kostelec nad Černými lesy (01).jpg" },
        { name: "Cathédrale gothique Saint-Barthélemy avec la plus haute tour de Bohême", wikipedia: "File:Plzeň 12.3.2012.jpg" },
        { name: "Souterrains médiévaux sous la ville de Plzeň", wikipedia: "File:Plzeň - Chvojová 01.jpg" },
      ],
    },
    {
      id: 4,
      name: "Brno et Moravie — Caves et vignes",
      region: "Moravie (est)",
      description:
        "Brno, deuxième ville de Tchéquie, est une ville universitaire et culturelle avec le château Špilberk (prison d'État des Habsbourg) et la villa Tugendhat (chef-d'œuvre de Mies van der Rohe, UNESCO). La Moravie produit 95% des vins tchèques : les villages de Velké Pavlovice, Mikulov et Znojmo offrent une route des vins similaire à l'Alsace.",
      wikipedia: "File:Brno, Škoda 13T č. 1902.jpg",
      tags: ["Vin", "Modernisme", "UNESCO", "Université"],
      mustSee: [
        { name: "Villa Tugendhat Brno (UNESCO) — chef-d'œuvre de Mies van der Rohe", wikipedia: "Villa_Tugendhat" },
        { name: "Château Špilberk — prison habsbourgeoise et vue sur Brno", wikipedia: "Špilberk_Castle" },
        { name: "Causse morave (Moravský kras) — grottes et abîmes", wikipedia: "Moravian_Karst" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Tchéquie est abordable pour les Européens occidentaux, surtout en dehors de Prague. La couronne tchèque n'est pas dans l'euro — les prix semblent élevés en CZK mais restent modérés en euros. La bière est souvent moins chère que l'eau.",
    currency: "CZK",
    exchangeRate: "1€ ≈ 25 CZK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse Prague centre", price: "15–35 €", detail: "Excellents hostels, nombreux et bien situés" },
          { label: "Hôtel 3★ Prague ou Brno", price: "60–120 €", detail: "Souvent inclus petit-déjeuner" },
          { label: "Appartement Airbnb à Prague (2 pers.)", price: "50–100 €", detail: "Bien situé en Vieille Ville" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Svíčková (bœuf à la crème) ou guláš dans une hospoda", price: "8–14 €", detail: "La cuisine bohémienne typique" },
          { label: "Bière Pilsner Urquell ou Kozel (pint en bar)", price: "2–4 €", detail: "Parmi les moins chères d'Europe" },
          { label: "Trdelník (pâtisserie) dans la rue", price: "3–5 €", detail: "Touristique mais délicieux" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus RegioJet ou FlixBus Prague–Brno (2h30)", price: "10–20 €", detail: "Confortable, WiFi, café" },
          { label: "Métro + tram Prague (ticket 24h)", price: "5 €", detail: "Réseau dense, 24h/24" },
          { label: "Train ČD Rychlík Prague–Plzeň (1h30)", price: "8–15 €", detail: "Ponctuel" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Billet Château de Prague (Cathédrale + Vieux Palais)", price: "15 €", detail: "Journée complète recommandée" },
          { label: "Dégustation guidée brasserie Pilsner Urquell", price: "20–30 €", detail: "Caves + bière non-filtrée" },
          { label: "Croisière panoramique sur la Vltava (1h)", price: "12–20 €", detail: "Vue sur Pont Charles et château" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "55–90 €/j", desc: "Auberge + hospoda + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "95–170 €/j", desc: "Hôtel 3★ + restaurants + visites guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Prague (4j) → Český Krumlov (2j) → Plzeň (1j) → retour Prague (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "900 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Prague (Wizz Air, Ryanair, Air France)", amount: "80–200 €" },
            { label: "Hébergement (8 nuits)", amount: "200–350 €" },
            { label: "Transports intérieurs (bus + train + tram)", amount: "100–180 €" },
            { label: "Nourriture + bières", amount: "250–400 €" },
            { label: "Entrées + visites guidées", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 000 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Prague", amount: "100–300 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "550–1 100 €" },
            { label: "Transports + voiture de location", amount: "200–400 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Activités, brasseries, sorties", amount: "300–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~1h50 (Air France direct, Wizz Air, Ryanair CDG/Beauvais–Prague). Nombreuses liaisons." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Couronne tchèque (CZK). Carte bancaire acceptée partout à Prague. Retrait DAB pour les petits commerces et bars." },
    { icon: "🗣️", label: "Langue",            value: "Tchèque. Anglais bien parlé à Prague. Moins courant en dehors. Allemand aussi utile." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution particulière. CEAM valide. Qualité des soins excellente." },
    { icon: "🍺", label: "Bière",             value: "La République Tchèque est le premier pays consommateur de bière par habitant au monde. Une pinte de Pilsner en bar coûte 1,50–3€." },
    { icon: "⚠️", label: "Pickpockets",       value: "Prague attire beaucoup de touristes et les pickpockets sont actifs sur le Pont Charles, dans les tramways 22/23 et autour de l'Horloge astronomique. Vigilance recommandée." },
  ],
};
