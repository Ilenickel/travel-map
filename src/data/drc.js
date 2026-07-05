export const DRC = {
  code: "COD",
  numericId: 180,
  name: { fr: "République Démocratique du Congo", en: "Democratic Republic of the Congo" },
  emoji: "🇨🇩",
  capital: { fr: "Kinshasa", en: "Kinshasa" },
  language: {
    fr: "Français (officiel), Lingala, Swahili, Kikongo, Tshiluba",
    en: "French (official), Lingala, Swahili, Kikongo, Tshiluba",
  },
  currency: { fr: "Franc Congolais (CDF)", en: "Congolese franc (CDF)" },
  timezone: "UTC+1 / UTC+2",
  filter: {
    budgetMin: 45, budgetMid: 95,
    tripMin: 1000, tripMid: 2500,
  },
  description: {
    fr: "La République Démocratique du Congo est le deuxième plus grand pays d'Afrique, abritant l'une des forêts tropicales les plus riches du monde et le célèbre fleuve Congo. C'est le seul endroit au monde où l'on peut observer à la fois les gorilles de montagne et les bonobos dans leur habitat naturel. Malgré les défis sécuritaires dans l'est du pays, l'ouest et Kinshasa offrent des expériences culturelles et naturelles uniques.",
    en: "The Democratic Republic of the Congo is Africa's second-largest country, home to one of the world's richest rainforests and the legendary Congo River. It is the only place on Earth where you can observe both mountain gorillas and bonobos in their natural habitat. Despite the security challenges in the east of the country, the west and Kinshasa offer unique cultural and natural experiences.",
  },
  bestPeriods: [
    {
      months: { fr: "Jun – Aoû", en: "Jun – Aug" },
      label: { fr: "Saison sèche (sud)", en: "Dry season (south)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour visiter Kinshasa et le parc national des Virunga. Climat agréable, routes praticables.",
        en: "The best time to visit Kinshasa and Virunga National Park. Pleasant weather and passable roads.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Déc – Fév", en: "Dec – Feb" },
      label: { fr: "Saison sèche (nord)", en: "Dry season (north)" },
      color: "#f59e0b",
      description: {
        fr: "Petite saison sèche dans le nord. Bonne période pour l'observation des gorilles au parc des Virunga.",
        en: "Short dry season in the north. A good time for gorilla tracking in Virunga Park.",
      },
      icon: "⛅",
    },
  ],
  weatherCities: [
    {
      id: "kinshasa",
      name: "Kinshasa",
      region: { fr: "Capitale", en: "Capital" },
      data: [
        { month: "Jan", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Avr", temp: 29, rain: 180, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 23, rain: 25, icon: "☀️" },
        { month: "Jul", temp: 22, rain: 5, icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 15, icon: "☀️" },
        { month: "Sep", temp: 26, rain: 110, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 190, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 160, icon: "🌧️" },
      ],
    },
    {
      id: "goma",
      name: "Goma",
      region: { fr: "Nord-Kivu", en: "North Kivu" },
      data: [
        { month: "Jan", temp: 21, rain: 90, icon: "☀️" },
        { month: "Fév", temp: 21, rain: 110, icon: "🌧️" },
        { month: "Mar", temp: 21, rain: 160, icon: "⛅" },
        { month: "Avr", temp: 21, rain: 180, icon: "🌧️" },
        { month: "Mai", temp: 21, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 20, rain: 40, icon: "☀️" },
        { month: "Jul", temp: 19, rain: 20, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 30, icon: "☀️" },
        { month: "Sep", temp: 21, rain: 90, icon: "☀️" },
        { month: "Oct", temp: 21, rain: 150, icon: "⛅" },
        { month: "Nov", temp: 21, rain: 200, icon: "🌧️" },
        { month: "Déc", temp: 21, rain: 100, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "Parc National des Virunga", en: "Virunga National Park" },
      region: { fr: "Nord-Kivu", en: "North Kivu" },
      description: {
        fr: "Le parc national des Virunga est le plus ancien parc national d'Afrique, classé au patrimoine mondial de l'UNESCO. Il abrite des gorilles de montagne en voie de disparition ainsi que le volcan Nyiragongo avec sa célèbre lave en fusion. C'est l'une des expériences naturelles les plus spectaculaires du continent africain.",
        en: "Virunga National Park is Africa's oldest national park and a UNESCO World Heritage Site. It is home to endangered mountain gorillas as well as Mount Nyiragongo, famed for its molten lava lake. It is one of the most spectacular natural experiences on the African continent.",
      },
      wikipedia: "Virunga_National_Park",
      tags: ["Nature", "Gorilles", "Volcan", "UNESCO"],
      mustSee: [
        {
          name: { fr: "Volcan Nyiragongo — cratère avec lac de lave en fusion", en: "Mount Nyiragongo — crater with a molten lava lake" },
          wikipedia: "File:Lava Lake Nyiragongo 2.jpg",
        },
        {
          name: { fr: "Trekking gorilles de montagne — forêt de Bukima", en: "Mountain gorilla trek — Bukima forest" },
          wikipedia: "Mountain_gorilla",
        },
        {
          name: { fr: "Lac Édouard — panorama et faune aquatique", en: "Lake Edward — sweeping views and aquatic wildlife" },
          wikipedia: "Lake_Edward",
        },
      ],
    },
    {
      id: 2,
      name: "Lola ya Bonobo",
      region: { fr: "Kinshasa", en: "Kinshasa" },
      description: {
        fr: "Lola ya Bonobo est le seul sanctuaire de bonobos au monde, situé à la périphérie de Kinshasa. Ce refuge accueille des bonobos orphelins et blessés dans un cadre forestier naturel de 30 hectares. Une visite incontournable pour observer ces grands singes fascinants, les plus proches parents de l'homme avec les chimpanzés.",
        en: "Lola ya Bonobo is the world's only bonobo sanctuary, located on the outskirts of Kinshasa. This refuge cares for orphaned and injured bonobos in a 30-hectare natural forest setting. It is an essential visit to observe these fascinating great apes, humanity's closest relatives alongside chimpanzees.",
      },
      wikipedia: "Lola_ya_Bonobo",
      tags: ["Bonobos", "Sanctuaire", "Nature", "Conservation"],
      mustSee: [
        { name: { fr: "Observation des bonobos en liberté dans la forêt", en: "Watching bonobos roam freely in the forest" }, wikipedia: "Bonobo" },
        { name: { fr: "Centre de réhabilitation des jeunes bonobos", en: "Young bonobo rehabilitation centre" }, wikipedia: "Lola_ya_Bonobo" },
        { name: { fr: "Visite guidée et interaction avec les soigneurs", en: "Guided tour and time with the caretakers" }, wikipedia: "Lola_ya_Bonobo" },
        { name: { fr: "Promenade sur les sentiers de la forêt tropicale", en: "Walk along the rainforest trails" }, wikipedia: "Lola_ya_Bonobo" },
      ],
    },
    {
      id: 3,
      name: "Kinshasa",
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "Kinshasa est l'une des plus grandes métropoles d'Afrique avec plus de 15 millions d'habitants, debordant d'énergie et de culture. La scène musicale congolaise, berceau du soukous et de la rumba africaine, est vivante dans les nombreux bars et concerts de la ville. Face à Brazzaville, elle offre une vue unique sur les deux capitales les plus proches du monde séparées par le fleuve Congo.",
        en: "Kinshasa is one of Africa's largest metropolises, with more than 15 million inhabitants and a constant buzz of energy and culture. The Congolese music scene, birthplace of soukous and African rumba, comes alive in the city's many bars and live venues. Facing Brazzaville, it offers a unique view of the world's two closest capitals, separated by the Congo River.",
      },
      wikipedia: "Kinshasa",
      tags: ["Culture", "Musique", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Marché de la Liberté — artisanat et vie locale", en: "Marché de la Liberté — crafts and local life" }, wikipedia: "Kinshasa" },
        { name: { fr: "Académie des Beaux-Arts de Kinshasa", en: "Kinshasa Academy of Fine Arts" }, wikipedia: "File:Académie_Beaux_Arts_Kinshasa_2.JPG" },
        { name: { fr: "Bord du fleuve Congo — traversée en pirogue", en: "Congo riverfront — dugout canoe crossing" }, wikipedia: "Congo_River" },
        { name: { fr: "Les bars de musique live et soukous", en: "Live music and soukous bars" }, wikipedia: "Soukous" },
      ],
    },
    {
      id: 4,
      name: { fr: "Fleuve Congo et Pool Malebo", en: "Congo River and Pool Malebo" },
      region: { fr: "Kinshasa / Brazzaville", en: "Kinshasa / Brazzaville" },
      description: {
        fr: "Le fleuve Congo est le deuxième fleuve le plus puissant du monde après l'Amazone, formant une frontière naturelle spectaculaire avec la République du Congo. Le Pool Malebo est un élargissement du fleuve créant un lac naturel de 30 km de large, offrant des paysages époustouflants. Les rapides de Livingstone en aval de Kinshasa sont parmi les plus puissants de la planète.",
        en: "The Congo River is the second most powerful river in the world after the Amazon, forming a spectacular natural border with the Republic of the Congo. Pool Malebo is a widening of the river that creates a natural lake 30 km across, with breathtaking scenery. The Livingstone Falls downstream from Kinshasa are among the most powerful rapids on the planet.",
      },
      wikipedia: "Congo_River",
      tags: ["Fleuve", "Nature", "Aventure", "Paysage"],
      mustSee: [
        {
          name: { fr: "Pool Malebo — panorama sur le plus grand élargissement du fleuve", en: "Pool Malebo — views over the river's widest expansion" },
          wikipedia: "File:Congo River with upstream half of Pool Malebo and Mbamu.jpg",
        },
        {
          name: { fr: "Rapides de Livingstone — puissance hydraulique spectaculaire", en: "Livingstone Falls — spectacular hydraulic power" },
          wikipedia: "Livingstone_Falls",
        },
        {
          name: { fr: "Traversée en bateau Kinshasa–Brazzaville", en: "Kinshasa–Brazzaville boat crossing" },
          wikipedia: "Kinshasa",
        },
        {
          name: { fr: "Îles du fleuve — pêche traditionnelle et villages", en: "River islands — traditional fishing and village life" },
          wikipedia: "File:Sunrise near Mossaka (Congo).JPG",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "La RDC est une destination abordable pour les voyageurs occidentaux, mais les coûts peuvent varier considérablement selon les régions. Kinshasa est plus chère que le reste du pays. Les transports intérieurs sont onéreux en raison des distances et de l'état des routes.",
      en: "The DRC is an affordable destination for Western travellers, but costs can vary significantly from one region to another. Kinshasa is more expensive than the rest of the country. Domestic transport is costly because of the distances involved and the poor state of the roads.",
    },
    currency: "CDF",
    exchangeRate: "1€ ≈ 2 900 CDF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge / chambre chez l'habitant", en: "Hostel / homestay room" }, priceRange: "15–30 €" },
          { label: { fr: "Hôtel milieu de gamme", en: "Mid-range hotel" }, priceRange: "40–80 €" },
          { label: { fr: "Hôtel confort à Kinshasa", en: "Comfort hotel in Kinshasa" }, priceRange: "80–150 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Repas local (pondu, fumbwa, fufu)", en: "Local meal (pondu, fumbwa, fufu)" }, priceRange: "2–5 €" },
          { label: { fr: "Restaurant milieu de gamme", en: "Mid-range restaurant" }, priceRange: "8–15 €" },
          { label: { fr: "Restaurant expatrié à Kinshasa", en: "Expat-style restaurant in Kinshasa" }, priceRange: "15–30 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Taxi-bus local (fula-fula)", en: "Local shared taxi-bus (fula-fula)" }, priceRange: "0,5–2 €" },
          { label: { fr: "Taxi privé en ville", en: "Private taxi in town" }, priceRange: "5–15 €" },
          { label: { fr: "Vol intérieur Kinshasa–Goma", en: "Domestic flight Kinshasa–Goma" }, priceRange: "150–300 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite du sanctuaire Lola ya Bonobo", en: "Visit to Lola ya Bonobo sanctuary" }, priceRange: "10–15 €" },
          { label: { fr: "Trekking gorilles (Virunga)", en: "Gorilla trek (Virunga)" }, priceRange: "400–500 €" },
          { label: { fr: "Ascension Nyiragongo", en: "Nyiragongo climb" }, priceRange: "300–400 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "45–70 €/j",
        desc: { fr: "Hébergement simple, repas locaux, transports publics, activités basiques", en: "Simple accommodation, local meals, public transport and basic activities" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "95–180 €/j",
        desc: { fr: "Hôtel confortable, restaurants variés, taxi privé, activités guidées", en: "Comfortable hotel, varied restaurants, private taxi and guided activities" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Kinshasa → Lola ya Bonobo → Goma → Virunga (gorilles) → Nyiragongo",
        en: "Kinshasa → Lola ya Bonobo → Goma → Virunga (gorillas) → Nyiragongo",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 000 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kinshasa", en: "Return flight Paris–Kinshasa" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "150–250 €" },
            { label: { fr: "Transports locaux + vol intérieur", en: "Local transport + domestic flight" }, amount: "200–300 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "80–150 €" },
            { label: { fr: "Activités (Lola ya Bonobo inclus)", en: "Activities (including Lola ya Bonobo)" }, amount: "50–100 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 500 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Kinshasa", en: "Return flight Paris–Kinshasa" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "400–700 €" },
            { label: { fr: "Transports locaux + vol intérieur", en: "Local transport + domestic flight" }, amount: "300–500 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "150–300 €" },
            { label: { fr: "Activités dont trek gorilles", en: "Activities including gorilla trek" }, amount: "500–700 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris" },
      value: {
        fr: "8–12h avec escale (Air France via Addis, Brussels Airlines, Ethiopian Airlines). Pas de vol direct depuis Paris.",
        en: "8–12 hours with a stopover (Air France via Addis, Brussels Airlines, Ethiopian Airlines). No direct flight from Paris.",
      },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa" },
      value: {
        fr: "Visa obligatoire, obtenir avant le départ à l'ambassade de RDC à Paris. Processus parfois complexe, prévoir plusieurs semaines.",
        en: "Visa required and must be obtained before departure from the DRC embassy in Paris. The process can be complex, so allow several weeks.",
      },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency" },
      value: {
        fr: "Le dollar américain (USD) est largement utilisé. Franc Congolais (CDF) pour les petites dépenses. Emporter des espèces.",
        en: "The US dollar (USD) is widely used. The Congolese franc (CDF) is used for small everyday expenses. Bring cash.",
      },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language" },
      value: {
        fr: "Le français est la langue officielle. Le lingala est parlé à Kinshasa et dans l'ouest. Le swahili est dominant à l'est.",
        en: "French is the official language. Lingala is spoken in Kinshasa and in the west. Swahili is the dominant language in the east.",
      },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet" },
      value: {
        fr: "Type C et D (220V). Pannes de courant fréquentes — prévoir une batterie externe.",
        en: "Type C and D (220V). Power cuts are frequent, so bring a power bank.",
      },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health" },
      value: {
        fr: "Vaccins recommandés : fièvre jaune (obligatoire), hépatites A et B, typhoïde, méningite. Paludisme endémique, prophylaxie indispensable. Eau en bouteille uniquement.",
        en: "Recommended vaccines: yellow fever (mandatory), hepatitis A and B, typhoid and meningitis. Malaria is endemic, so prophylaxis is essential. Drink bottled water only.",
      },
    },
    {
      icon: "⚠️",
      label: { fr: "Sécurité", en: "Safety" },
      value: {
        fr: "L'est du pays (Nord-Kivu, Sud-Kivu, Ituri) est en conflit actif — les voyages sont fortement déconseillés. Kinshasa et l'ouest sont relativement plus sûrs. Consulter les avis du Quai d'Orsay avant tout voyage.",
        en: "The east of the country (North Kivu, South Kivu, Ituri) is experiencing active conflict, and travel there is strongly discouraged. Kinshasa and the west are comparatively safer. Check the French foreign ministry travel advisories before any trip.",
      },
    },
    {
      icon: "📞",
      label: { fr: "Connectivité", en: "Connectivity" },
      value: {
        fr: "Internet 4G disponible à Kinshasa et dans les grandes villes. Acheter une SIM locale (Vodacom, Airtel). Couverture limitée en zones rurales.",
        en: "4G internet is available in Kinshasa and the main cities. Buy a local SIM card (Vodacom, Airtel). Coverage is limited in rural areas.",
      },
    },
  ],
};
