export const HUNGARY = {
  code: "HUN",
  numericId: 348,
  name: "Hongrie",
  emoji: "🇭🇺",
  capital: "Budapest",
  language: "Hongrois",
  currency: "Forint (HUF)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  description:
    "La Hongrie est dominée par Budapest — l'une des plus belles capitales d'Europe, construite sur les deux rives du Danube : Buda (châteaux et collines) et Pest (grands boulevards et cafés Art Nouveau). Les bains thermaux (Budapest est assise sur 118 sources chaudes), le lac Balaton, la puszta (steppe) et les vins de Tokaj et d'Eger font de la Hongrie une destination riche et abordable.",

  bestPeriods: [
    {
      months: "Avril – Octobre",
      label: "Saison agréable",
      color: "#22c55e",
      description:
        "Températures idéales (18–28°C), terrasses, festivals (Budapest Summer Festival), lac Balaton animé. Juin–août les plus chauds mais les plus touristiques.",
      icon: "☀️",
    },
    {
      months: "Décembre",
      label: "Marchés de Noël",
      color: "#f59e0b",
      description:
        "Les marchés de Noël de Budapest (Vörösmarty tér) sont parmi les plus beaux d'Europe. Vin chaud, kürtőskalács et lumières sur le Danube.",
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "budapest",
      name: "Budapest",
      region: "Centre (rives du Danube)",
      data: [
        { month: "Jan", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 45,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 55,  icon: "☀️" },
        { month: "Sep", temp: 19, rain: 40,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 45,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 50,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "balaton",
      name: "Lac Balaton",
      region: "Transdanubie (ouest)",
      data: [
        { month: "Jan", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 40,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 70,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 70,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 60,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 50,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 45,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Budapest — Perle du Danube",
      region: "Capitale",
      description:
        "Budapest est divisée en deux par le Danube : Buda avec son château royal (UNESCO), la pêcherie Halászbástya et les collines boisées ; Pest avec ses grands boulevards Art Nouveau, le Parlement néogothique (un des plus grands du monde) et les rues animées du VIIe arrondissement. Le panorama depuis la citadelle au coucher du soleil est inoubliable.",
      wikipedia: "Budapest",
      tags: ["Danube", "UNESCO", "Parlement", "Art Nouveau", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Parlement de Budapest — le plus grand d'Europe (UNESCO)", wikipedia: "Hungarian_Parliament_Building" },
        { name: "Château de Buda et quartier du château (UNESCO)", wikipedia: "Buda_Castle" },
        { name: "Pêcherie Halászbástya — panorama sur le Danube et Pest", wikipedia: "Fisherman's_Bastion" },
        { name: "Grande synagogue Dohány — la plus grande d'Europe", wikipedia: "Dohány_Street_Synagogue" },
      ],
    },
    {
      id: 2,
      name: "Bains thermaux de Budapest",
      region: "Budapest",
      description:
        "Budapest est assise sur 118 sources d'eau chaude — la ville thermale la plus riche du monde. Le Széchenyi (1913, le plus grand bain en plein air d'Europe), le Gellért (Art Nouveau palatial), le Rudas (ottoman du XVIe siècle) et le Kiraly sont des monuments architecturaux autant que des lieux de vie. Une expérience culturelle profondément hongroise.",
      wikipedia: "File:Budapest Széchenyi Baths R01.jpg",
      tags: ["Thermes", "Ottoman", "Art Nouveau", "Culture"],
      mustSee: [
        { name: "Széchenyi — grand bain en plein air Art Nouveau (1913)", wikipedia: "Széchenyi_thermal_bath" },
        { name: "Gellért — bain de style Sécession viennoise", wikipedia: "File:Gellért Thermal Baths and Swimming Pool (41147709020).jpg" },
        { name: "Rudas — bain ottoman du XVIe siècle avec coupole à oculi", wikipedia: "File:Hungary 2010-02-27 (4636717404).jpg" },
        { name: "Bar à ruines du VIIe arr. — Szimpla Kert", wikipedia: "Szimpla_Kert" },
      ],
    },
    {
      id: 3,
      name: "Lac Balaton — Mer hongroise",
      region: "Transdanubie",
      description:
        "Le lac Balaton (594 km²) est le plus grand lac d'Europe centrale — surnommé 'la mer des Hongrois'. Sa rive nord (Badacsony) est couverte de vignobles volcaniques produisant les meilleurs vins blancs du pays ; la rive sud offre des plages de sable et des villages animés. L'abbaye de Tihany (XIe s.) sur sa presqu'île est l'une des plus anciennes de Hongrie.",
      wikipedia: "Lake_Balaton",
      tags: ["Lac", "Vin", "Plage", "Abbaye", "Nature"],
      mustSee: [
        { name: "Abbaye bénédictine de Tihany (XIe s.) sur sa presqu'île", wikipedia: "Tihany_Abbey" },
        { name: "Vignobles de Badacsony — vins blancs sur sol volcanique", wikipedia: "Badacsony" },
        { name: "Baignade dans le lac Balaton (eau chaude en été, 26°C)", wikipedia: "File:Lake Balaton Sunset, Zamárdi, Hungary.jpg" },
        { name: "Tour du lac à vélo (210km, piste cyclable dédiée)", wikipedia: "Lake_Balaton" },
      ],
    },
    {
      id: 4,
      name: "Tokaj et Eger — Routes des vins",
      region: "Hongrie du Nord-Est",
      description:
        "Tokaj (UNESCO) produit le 'vin des rois, roi des vins' selon Louis XIV : l'Aszú, un blanc liquoreux de noble pourriture parmi les plus grands vins du monde. La région viticole de Tokaj est classée patrimoine mondial. Eger, ville baroque sur fond de collines, est célèbre pour son 'Sang de Taureau' rouge et son château résistant aux Ottomans.",
      wikipedia: "Tokaj_wine_region",
      tags: ["Vin", "UNESCO", "Château", "Baroque", "Gastronomie"],
      mustSee: [
        { name: "Caves de Tokaj — dégustation d'Aszú dans les caves à moisissures nobles", wikipedia: "File:Wine Cellar in Slovakian Tokaj.jpg" },
        { name: "Château d'Eger — résistance héroïque contre les Ottomans (1552)", wikipedia: "Eger_Castle" },
        { name: "Vallée des Belles Femmes d'Eger — caves troglodytes et vin", wikipedia: "File:Eger, seen from Lyceum roof - panoramio.jpg" },
        { name: "Village de Hollókő — village palóc UNESCO intact", wikipedia: "Hollókő" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Hongrie est l'une des meilleures valeurs d'Europe : les bains thermaux, la nourriture et les hébergements coûtent environ 40–50% moins cher qu'en France. Budapest est la plus chère mais reste très abordable. Le forint fluctue — les paiements en euros sont parfois acceptés (à un taux défavorable).",
    currency: "HUF",
    exchangeRate: "1€ ≈ 395 HUF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse Budapest (dortoir ou chambre)", price: "20–45 €", detail: "Nombreuses et bien situées" },
          { label: "Hôtel 3★ Budapest ou lac Balaton", price: "60–110 €", detail: "Souvent petit-déj inclus" },
          { label: "Appartement Airbnb Budapest (2 pers.)", price: "45–90 €", detail: "Bien situé en centre-ville" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Gulyás (goulash) ou lángos dans une vendéglő", price: "6–12 €", detail: "Cuisine hongroise copieuse" },
          { label: "Restaurant mid-range Budapest", price: "14–25 €", detail: "Paprikás csirke, töltött káposzta" },
          { label: "Lángos (beignet frit garni) sur le marché", price: "2–4 €", detail: "Street food hongrois typique" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro + tram Budapest (ticket 24h)", price: "6 €", detail: "Réseau étendu et efficace" },
          { label: "Train MÁV Budapest–Eger (2h)", price: "8–15 €", detail: "Liaisons fréquentes" },
          { label: "Billet de bateau sur le Danube Budapest", price: "5–10 €", detail: "Panorama unique en soirée" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée bains Széchenyi (2h)", price: "22 €", detail: "Tarif journée en semaine" },
          { label: "Visite château de Buda + musée", price: "10–20 €", detail: "Vue imprenable sur le Danube" },
          { label: "Dégustation Tokaj Aszú (3 vins)", price: "15–30 €", detail: "Cave viticole avec guide" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "45–75 €/j", desc: "Auberge + vendéglő + transports publics + thermes", color: "#22c55e" },
      { type: "Confort", daily: "85–160 €/j", desc: "Hôtel 3★ + restaurants + activités + vin", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Budapest (4j) → Lac Balaton (2j) → Eger + Tokaj (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "800 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Budapest (Wizz Air, Ryanair)", amount: "80–200 €" },
            { label: "Hébergement (8 nuits)", amount: "200–380 €" },
            { label: "Transports (train + métro)", amount: "80–150 €" },
            { label: "Nourriture + vins", amount: "250–400 €" },
            { label: "Thermes + visites", amount: "100–200 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Budapest", amount: "100–250 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "550–1 000 €" },
            { label: "Transports + voiture de location", amount: "200–350 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Activités, thermes, dégustations", amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h20 (Wizz Air, Ryanair, Air France direct CDG/Beauvais–Budapest). Nombreuses liaisons." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Forint (HUF). Carte bancaire très bien acceptée. Eviter les bureaux de change en rue (taux désastreux) — utiliser les DAB des banques." },
    { icon: "🗣️", label: "Langue",            value: "Hongrois (langue isolée, difficile). Anglais bien parlé à Budapest. Moins courant en province. Allemand parfois utile." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution particulière. CEAM valide. Bonne qualité médicale." },
    { icon: "🌊", label: "Thermes",           value: "Aller aux bains au moins une fois : c'est une institution sociale hongroise, pas seulement touristique. Amener tongs et maillot. Le Széchenyi est ouvert jusqu'à 22h." },
    { icon: "🍷", label: "Vins",              value: "La Hongrie produit des vins exceptionnels méconnus : Tokaj Aszú (blanc liquoreux), Egri Bikavér (Sang de Taureau, rouge), Villányi (rouge du sud). Les acheter directement en cave." },
  ],
};
