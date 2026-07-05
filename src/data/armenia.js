export const ARMENIA = {
  code: "ARM",
  numericId: 51,
  name: { fr: "Arménie", en: "Armenia" },
  emoji: "🇦🇲",
  capital: { fr: "Erevan", en: "Yerevan" },
  language: { fr: "Arménien", en: "Armenian" },
  currency: { fr: "Dram (AMD)", en: "Dram (AMD)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 25, budgetMid: 55,
    tripMin: 1000, tripMid: 1800,
  },
  description: {
    fr: "L'Arménie, berceau du christianisme (301 ap. J.-C.), fascine par ses monastères médiévaux perchés dans des gorges profondes, son lac Sévan aux teintes cobalt, l'ombre du mont Ararat sur Erevan et une culture du café et du cognac incomparables.",
    en: "Armenia, the cradle of Christianity (301 AD), captivates with its medieval monasteries perched in deep gorges, cobalt-hued Lake Sevan, the shadow of Mount Ararat over Yerevan, and an unrivalled coffee and cognac culture.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Juin", en: "May – June" },
      label: { fr: "Printemps fleuri", en: "Blossoming Spring" },
      color: "#22c55e",
      description: {
        fr: "Nature éclatante, températures douces (16–24 °C). Idéal pour les monastères, les gorges et les randonnées.",
        en: "Vibrant nature, mild temperatures (16–24 °C). Ideal for monasteries, gorges and hiking.",
      },
      icon: "🌺",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October" },
      label: { fr: "Automne & Vendanges", en: "Autumn & Harvest" },
      color: "#fb923c",
      description: {
        fr: "Raisins, figues, grenades mûrissent. Lumière dorée sur les monastères, températures parfaites.",
        en: "Grapes, figs and pomegranates ripen. Golden light over the monasteries, perfect temperatures.",
      },
      icon: "🍇",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August" },
      label: { fr: "Été montagnard", en: "Mountain Summer" },
      color: "#3b82f6",
      description: {
        fr: "Chaud à Erevan (27 °C) mais les montagnes (Dilijan, Tatev) restent fraîches et magnifiques.",
        en: "Hot in Yerevan (27 °C) but the mountains (Dilijan, Tatev) stay cool and stunning.",
      },
      icon: "⛰️",
    },
  ],

  weatherCities: [
    {
      id: "yerevan",
      name: "Yerevan",
      region: { fr: "Ararat", en: "Ararat" },
      data: [
        { month: "Jan", temp: 0,  rain: 30,  icon: "❄️" },
        { month: "Fév", temp: 1,  rain: 30,  icon: "❄️" },
        { month: "Mar", temp: 7,  rain: 45,  icon: "❄️" },
        { month: "Avr", temp: 13, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 60,  icon: "☀️" },
        { month: "Jun", temp: 23, rain: 25,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Sep", temp: 22, rain: 25,  icon: "☀️" },
        { month: "Oct", temp: 15, rain: 45,  icon: "⛅" },
        { month: "Nov", temp: 8,  rain: 35,  icon: "⛅" },
        { month: "Déc", temp: 2,  rain: 30,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Yerevan",
      region: { fr: "Ararat", en: "Ararat" },
      description: {
        fr: "La « ville rose » (construite en tuf volcanique rose) avec la cascade monumentale, le musée Matenadaran aux manuscrits enluminés, et la vue sur le mont Ararat en toile de fond.",
        en: "The \"pink city\" (built from pink volcanic tuff) with its monumental cascade, the Matenadaran museum of illuminated manuscripts, and Mount Ararat as a backdrop.",
      },
      wikipedia: "Yerevan",
      tags: ["Ville", "Culture", "Art", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Cascade — escalier monumental", en: "Cascade — monumental staircase" }, wikipedia: "Yerevan_Cascade" },
        { name: { fr: "Matenadaran — manuscrits anciens", en: "Matenadaran — ancient manuscripts" }, wikipedia: "Matenadaran" },
        { name: { fr: "Place de la République", en: "Republic Square" }, wikipedia: "Republic_Square,_Yerevan" },
        { name: { fr: "Mont Ararat (vue depuis Erevan)", en: "Mount Ararat (view from Yerevan)" }, wikipedia: "Mount_Ararat" },
      ],
    },
    {
      id: 2,
      name: { fr: "Geghard & Garni", en: "Geghard & Garni" },
      region: { fr: "Kotayk", en: "Kotayk" },
      description: {
        fr: "Le monastère de Geghard (XIIIe s.), partiellement taillé dans la roche d'une gorge, est l'un des plus impressionnants du Caucase. À 20 km, le temple grec de Garni (Ier s. ap. J.-C.) est unique.",
        en: "Geghard Monastery (13th century), partly carved into the rock of a gorge, is one of the most impressive in the Caucasus. 20 km away, the Greek temple of Garni (1st century AD) is unique.",
      },
      wikipedia: "Geghard",
      tags: ["Histoire", "UNESCO", "Archéologie", "Architecture"],
      mustSee: [
        { name: { fr: "Monastère de Geghard (UNESCO)", en: "Geghard Monastery (UNESCO)" }, wikipedia: "Geghard" },
        { name: { fr: "Temple grec de Garni", en: "Garni Greek Temple" }, wikipedia: "Garni_Temple" },
        { name: { fr: "Gorge de l'Azat", en: "Azat Gorge" }, wikipedia: "File:Río Azat, valle de Garni, Armenia, 2016-10-02, DD 37-39 HDR.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Tatev — Câble & Monastère", en: "Tatev — Cable Car & Monastery" },
      region: { fr: "Syunik", en: "Syunik" },
      description: {
        fr: "Le monastère de Tatev (IXe s.) trône sur un promontoire vertigineux dans le Syunik. Pour y accéder : « Wings of Tatev », le plus long téléphérique réversible passager du monde (5,7 km).",
        en: "Tatev Monastery (9th century) sits on a vertiginous promontory in Syunik. To reach it: \"Wings of Tatev\", the world's longest reversible passenger cable car (5.7 km).",
      },
      wikipedia: "Tatev_Monastery",
      tags: ["Histoire", "Panorama", "Aventure", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Téléphérique Wings of Tatev (5,7 km)", en: "Wings of Tatev cable car (5.7 km)" }, wikipedia: "Wings_of_Tatev" },
        { name: { fr: "Monastère de Tatev (IXe s.)", en: "Tatev Monastery (9th century)" }, wikipedia: "Tatev_Monastery" },
        { name: { fr: "Gorge de Vorotan", en: "Vorotan Gorge" }, wikipedia: "File:Vorotan_kz02.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Lac Sévan", en: "Lake Sevan" },
      region: { fr: "Gegharkunik", en: "Gegharkunik" },
      description: {
        fr: "L'un des plus grands lacs d'eau douce du monde en altitude (1 900 m), entouré de montagnes. Les monastères de Sevanavank sur une presqu'île offrent une vue époustouflante.",
        en: "One of the world's largest high-altitude freshwater lakes (1,900 m), surrounded by mountains. The Sevanavank monasteries on a peninsula offer a breathtaking view.",
      },
      wikipedia: "Lake_Sevan",
      tags: ["Nature", "Histoire", "Randonnée", "Ski"],
      mustSee: [
        { name: { fr: "Monastères de Sevanavank", en: "Sevanavank Monasteries" }, wikipedia: "Sevanavank" },
        { name: { fr: "Plages et baignade (juillet-août)", en: "Beaches and swimming (July-August)" }, wikipedia: "Lake_Sevan" },
        { name: { fr: "Dilijan — forêts et guesthouses", en: "Dilijan — forests and guesthouses" }, wikipedia: "File:Dilijan monument banner.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Arménie est l'une des destinations les plus économiques du Caucase. Erevan est très abordable avec une scène culinaire et artistique surprenante.",
      en: "Armenia is one of the most affordable destinations in the Caucasus. Yerevan is very inexpensive with a surprising culinary and art scene.",
    },
    currency: "AMD",
    exchangeRate: "1€ ≈ 430 AMD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse familiale", en: "Family guesthouse" }, price: "10–20 €", detail: { fr: "Souvent avec petit-déjeuner arménien", en: "Often with Armenian breakfast included" } },
          { label: { fr: "Hôtel 3★ Erevan", en: "3★ hotel in Yerevan" }, price: "30–55 €", detail: { fr: "Centre-ville", en: "City centre" } },
          { label: { fr: "Hôtel boutique design", en: "Design boutique hotel" }, price: "70–130 €", detail: { fr: "Quartier branché d'Erevan", en: "Trendy neighbourhood of Yerevan" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Lavash + houmous + mezze", en: "Lavash + hummus + mezze" }, price: "2–5 €", detail: { fr: "Rue ou marché Vernissage", en: "Street or Vernissage market" } },
          { label: { fr: "Restaurant local (khorovats)", en: "Local restaurant (khorovats)" }, price: "6–12 €", detail: { fr: "BBQ arménien à toute heure", en: "Armenian BBQ any time of day" } },
          { label: { fr: "Restaurant gastronomique Erevan", en: "Fine dining in Yerevan" }, price: "15–35 €", detail: { fr: "Excellente cuisine moderne", en: "Excellent modern cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Métro Erevan (trajet)", en: "Yerevan metro (ride)" }, price: "0,20 €", detail: { fr: "Limité mais pratique", en: "Limited but convenient" } },
          { label: { fr: "Taxi Erevan (GG / Yandex)", en: "Yerevan taxi (GG / Yandex)" }, price: "1–3 €", detail: { fr: "Application recommandée", en: "App recommended" } },
          { label: { fr: "Marshrutka intercités", en: "Intercity marshrutka" }, price: "2–6 €", detail: { fr: "Erevan–Gyumri ou Sévan", en: "Yerevan–Gyumri or Sevan" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Wings of Tatev (aller-retour)", en: "Wings of Tatev (round trip)" }, price: "12–16 €", detail: { fr: "Téléphérique record mondial", en: "World-record cable car" } },
          { label: { fr: "Dégustation brandy Ararat", en: "Ararat brandy tasting" }, price: "8–20 €", detail: { fr: "Distillerie ouverte aux visiteurs", en: "Distillery open to visitors" } },
          { label: { fr: "Tour en Jeep (Khosrov, Noravank)", en: "Jeep tour (Khosrov, Noravank)" }, price: "40–70 €/j", detail: { fr: "Guide + transport", en: "Guide + transport" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "25–40 €/j", desc: { fr: "Guesthouse + restaurants locaux + transports", en: "Guesthouse + local restaurants + transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "55–80 €/j", desc: { fr: "Hôtel 3★ + bonnes tables + excursions", en: "3★ hotel + good restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "150 €+/j", desc: { fr: "Boutique hôtel + gastronomie + circuit privé", en: "Boutique hotel + fine dining + private tour" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Erevan (4j) → Garni & Geghard (1j) → Lac Sévan (1j) → Dilijan (1j) → Tatev (2j) → Erevan (1j)",
        en: "Yerevan (4d) → Garni & Geghard (1d) → Lake Sevan (1d) → Dilijan (1d) → Tatev (2d) → Yerevan (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 000 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Erevan", en: "Return flight Paris–Yerevan" }, amount: "300–500 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "200–300 €" },
            { label: { fr: "Transport local", en: "Local transport" }, amount: "100–150 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Erevan", en: "Return flight Paris–Yerevan" }, amount: "400–650 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "400–650 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Transport & guides", en: "Transport & guides" }, amount: "300–500 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "250–400 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "4 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Erevan (direct)", en: "Return flight Paris–Yerevan (direct)" }, amount: "800–1 500 €" },
            { label: { fr: "Hébergement boutique (10 nuits)", en: "Boutique accommodation (10 nights)" }, amount: "900–1 500 €" },
            { label: { fr: "Gastronomie & dégustations", en: "Fine dining & tastings" }, amount: "500–800 €" },
            { label: { fr: "Circuit privé & chauffeur", en: "Private tour & driver" }, amount: "500–800 €" },
            { label: { fr: "Expériences & imprévus", en: "Experiences & contingency" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~4–5h (Air France, Flyone Armenia)", en: "~4–5h (Air France, Flyone Armenia)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (180 jours)", en: "No visa required for French citizens (180 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dram (1€ ≈ 430 AMD) — espèces souvent préférées", en: "Dram (1€ ≈ 430 AMD) — cash often preferred" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Arménien (russe compris, anglais chez les jeunes)", en: "Armenian (Russian understood, English among younger people)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F – 220 V", en: "Type C/F – 220V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture, SIM locale ~3€", en: "Good coverage, local SIM ~€3" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Potable à Erevan", en: "Drinkable in Yerevan" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucun vaccin obligatoire", en: "No mandatory vaccinations" } },
  ],
};
