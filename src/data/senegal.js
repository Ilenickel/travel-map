export const SENEGAL = {
  code: "SEN",
  numericId: 686,
  name: { fr: "Sénégal", en: "Senegal", es: "Senegal", de: "Senegal" },
  emoji: "🇸🇳",
  capital: { fr: "Dakar", en: "Dakar", es: "Dakar", de: "Dakar" },
  language: { fr: "Français, Wolof", en: "French, Wolof", es: "Francés, wólof", de: "Französisch, Wolof" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)", es: "Franco CFA (XOF)", de: "CFA-Franc (XOF)" },
  timezone: "UTC",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 1200, tripMid: 2500,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 1,
    desert: 0,
    safari: 2,
    ski: 0,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "La « Teranga » (hospitalité en wolof) est l'âme du Sénégal. Dakar et son île de Gorée (UNESCO), les plages paradisiaques de la Casamance, le parc de la Niokolo-Koba et les lacs roses surprenants font de ce pays le premier choix pour l'Afrique de l'Ouest francophone.", en: "'Teranga' (hospitality in Wolof) is the soul of Senegal. Dakar and its Gorée Island (UNESCO), the idyllic beaches of Casamance, Niokolo-Koba National Park and the surprising pink lakes make this country the top choice for French-speaking West Africa.", es: "La «Teranga» (hospitalidad en wólof) es el alma de Senegal. Dakar y su isla de Gorea (UNESCO), las playas paradisíacas de Casamance, el parque de Niokolo-Koba y los sorprendentes lagos rosas convierten a este país en la primera opción para el África Occidental francófona.", de: "„Teranga“ (Gastfreundschaft auf Wolof) ist die Seele Senegals. Dakar und seine Insel Gorée (UNESCO), die paradiesischen Strände von Casamance, der Niokolo-Koba-Park und die überraschenden rosa Seen machen dieses Land zur ersten Wahl für das französischsprachige Westafrika.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mai", en: "November – May", es: "Noviembre – Mayo", de: "November – Mai" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche et fraîche (harmattan), idéale pour le tourisme. Les parcs ont leur meilleure visibilité, pas de pluie, températures agréables.", en: "Dry, cool season (harmattan), ideal for tourism. The parks offer the best visibility, no rain, pleasant temperatures.", es: "Estación seca y fresca (harmatán), ideal para el turismo. Los parques tienen su mejor visibilidad, sin lluvia, temperaturas agradables.", de: "Trockene und kühle Jahreszeit (Harmattan), ideal für den Tourismus. Die Parks haben beste Sicht, kein Regen, angenehme Temperaturen.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juillet – Octobre", en: "July – October", es: "Julio – Octubre", de: "Juli – Oktober" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Estación de lluvias", de: "Regenzeit" },
      color: "#3b82f6",
      description: {
        fr: "Saison verte, végétation luxuriante, moins de touristes et tarifs réduits. La Casamance est superbe.", en: "Green season, lush vegetation, fewer tourists and lower prices. Casamance is stunning.", es: "Estación verde, vegetación exuberante, menos turistas y precios más bajos. Casamance está espléndida.", de: "Grüne Jahreszeit, üppige Vegetation, weniger Touristen und reduzierte Preise. Casamance ist hervorragend.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "dakar",
      name: "Dakar",
      region: { fr: "Dakar", en: "Dakar", es: "Dakar", de: "Dakar" },
      data: [
        { month: "Jan", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Avr", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Mai", temp: 23, rain: 2,   icon: "☀️" },
        { month: "Jun", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Déc", temp: 21, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Île de Gorée", en: "Gorée Island", es: "Isla de Gorea", de: "Gorée-Insel" },
      region: { fr: "Dakar", en: "Dakar", es: "Dakar", de: "Dakar" },
      description: {
        fr: "L'île de Gorée, inscrite à l'UNESCO, est le symbole de la traite négrière atlantique. La Maison des Esclaves avec sa « Porte du non-retour » est un lieu de mémoire essentiel, au milieu d'une île paisible aux maisons colorées.", en: "Gorée Island, a UNESCO World Heritage site, is the symbol of the Atlantic slave trade. The House of Slaves with its 'Door of No Return' is an essential place of remembrance, set on a peaceful island with colourful houses.", es: "La isla de Gorea, Patrimonio de la Humanidad, es el símbolo de la trata de esclavos atlántica. La Casa de los Esclavos con su «Puerta sin retorno» es un lugar de memoria esencial, en medio de una isla apacible de casas coloridas.", de: "Die von der UNESCO gelistete Insel Gorée ist das Symbol des atlantischen Sklavenhandels. Das Haus der Sklaven mit seiner „Tür ohne Wiederkehr“ ist ein unverzichtbarer Ort der Erinnerung inmitten einer friedlichen Insel mit farbenfrohen Häusern.",
      },
      wikipedia: "File:Côtes de l'île de Gorée au Sénégal 11.jpg",
      tags: ["Histoire", "UNESCO", "Culture", "Architecture"],
      mustSee: [
        { name: { fr: "Maison des Esclaves — Porte du non-retour", en: "House of Slaves — Door of No Return", es: "Casa de los Esclavos — Puerta sin retorno", de: "Haus der Sklaven – Tür ohne Wiederkehr" }, wikipedia: "House_of_Slaves" },
        { name: { fr: "Fort d'Estrées & musée de Gorée", en: "Fort d'Estrées & Gorée Museum", es: "Fuerte de Estrées y museo de Gorea", de: "Estrées Fort & Gorée Museum" }, wikipedia: "File:GoréeMuséeHistorique2.JPG" },
        { name: { fr: "Village de pêcheurs de l'île", en: "The island's fishing village", es: "Pueblo de pescadores de la isla", de: "Fischerdorf auf der Insel" }, wikipedia: "File:Senegal Gorée island harbor.jpg" },
        { name: { fr: "Vue sur Dakar depuis le fort", en: "View of Dakar from the fort", es: "Vista de Dakar desde el fuerte", de: "Blick auf Dakar von der Festung aus" }, wikipedia: "Dakar" },
      ],
    },
    {
      id: 2,
      name: { fr: "Lac Rose (Lac Retba)", en: "Pink Lake (Lake Retba)", es: "Lago Rosa (Lago Retba)", de: "Rosa See (Retba-See)" },
      region: { fr: "Thiès", en: "Thiès", es: "Thiès", de: "Thiès" },
      description: {
        fr: "Le Lac Rose doit sa couleur rose-magenta aux algues halophiles et à la forte salinité (jusqu'à 10 fois la mer). Les pêcheurs de sel, enveloppés de beurre de karité pour se protéger, en récoltent à mains nues.", en: "The Pink Lake owes its magenta colour to halophilic algae and its high salinity (up to 10 times that of seawater). Salt harvesters, coated in shea butter for protection, gather it by hand.", es: "El Lago Rosa debe su color rosa-magenta a las algas halófilas y a su alta salinidad (hasta 10 veces la del mar). Los recolectores de sal, cubiertos de manteca de karité para protegerse, la recogen a mano.", de: "Pink Lake verdankt seine rosa-magentafarbene Farbe halophilen Algen und einem hohen Salzgehalt (bis zum Zehnfachen des Meeresspiegels). Salzfischer, zum Schutz in Sheabutter eingewickelt, ernten es mit bloßen Händen.",
      },
      wikipedia: "File:Lac Rose in Senegal.jpg",
      tags: ["Nature", "Culture"],
      mustSee: [
        { name: { fr: "Récolte du sel rose", en: "Pink salt harvesting", es: "Recolección de la sal rosa", de: "Rosa Salz ernten" }, wikipedia: "File:Lac Rose 017 (39668528723).jpg" },
        { name: { fr: "Baignade dans la saumure (flottaison)", en: "Swimming in the brine (floating)", es: "Baño en la salmuera (flotación)", de: "Baden in Sole (Flotation)" }, wikipedia: "File:Lac Rose 006 (46633565661).jpg" },
        { name: { fr: "Rallye Dakar (ancienne étape)", en: "Dakar Rally (former stage)", es: "Rally Dakar (antigua etapa)", de: "Rallye Dakar (ehemalige Etappe)" }, wikipedia: "File:Rally Dakar 2006 9-2.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Saly & Saint-Louis", en: "Saly & Saint-Louis", es: "Saly y Saint-Louis", de: "Saly & Saint-Louis" },
      region: { fr: "Thiès / Saint-Louis", en: "Thiès / Saint-Louis", es: "Thiès / Saint-Louis", de: "Thiès / Saint-Louis" },
      description: {
        fr: "Saly est la station balnéaire numéro 1 du Sénégal. Saint-Louis, ancienne capitale coloniale française inscrite à l'UNESCO, est une île fluviale aux maisons colorées et balcons en fer forgé.", en: "Saly is Senegal's number one beach resort. Saint-Louis, the former French colonial capital and a UNESCO World Heritage site, is a river island with colourful houses and wrought-iron balconies.", es: "Saly es el destino de playa número uno de Senegal. Saint-Louis, antigua capital colonial francesa declarada Patrimonio de la Humanidad, es una isla fluvial de casas coloridas y balcones de hierro forjado.", de: "Saly ist der Badeort Nummer 1 im Senegal. Saint-Louis, die ehemalige französische Kolonialhauptstadt, die zum UNESCO-Weltkulturerbe zählt, ist eine Flussinsel mit farbenfrohen Häusern und schmiedeeisernen Balkonen.",
      },
      wikipedia: "Saint-Louis,_Senegal",
      tags: ["Plage", "Histoire", "UNESCO", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Saint-Louis (UNESCO) — île coloniale", en: "Saint-Louis (UNESCO) — colonial island", es: "Saint-Louis (UNESCO) — isla colonial", de: "Saint-Louis (UNESCO) – Kolonialinsel" }, wikipedia: "Saint-Louis,_Senegal" },
        { name: { fr: "Pont Faidherbe", en: "Faidherbe Bridge", es: "Puente Faidherbe", de: "Faidherbe-Brücke" }, wikipedia: "Faidherbe_Bridge" },
        { name: { fr: "Parc national des Oiseaux du Djoudj", en: "Djoudj National Bird Sanctuary", es: "Parque nacional de aves de Djoudj", de: "Djoudj-Vogel-Nationalpark" }, wikipedia: "Djoudj_National_Bird_Sanctuary" },
        { name: { fr: "Plages de Saly", en: "Saly beaches", es: "Playas de Saly", de: "Strände von Saly" }, wikipedia: "File:Saly-beach-01.jpg" },
      ],
    },
    {
      id: 4,
      name: "Casamance",
      region: { fr: "Casamance", en: "Casamance", es: "Casamance", de: "Casamance" },
      description: {
        fr: "La Casamance est la région la plus verte et belle du Sénégal : forêts de fromagers, villages animistes en pays diola, rizières aquatiques et plages encore sauvages de Cap Skirring.", en: "Casamance is Senegal's greenest and most beautiful region: kapok tree forests, animist villages in Diola country, flooded rice paddies and the still-wild beaches of Cap Skirring.", es: "Casamance es la región más verde y bella de Senegal: bosques de árboles de kapok, pueblos animistas en tierra diola, arrozales inundados y las playas todavía salvajes de Cap Skirring.", de: "Casamance ist die grünste und schönste Region Senegals: Käsewälder, animistische Dörfer im Diola-Land, Wasserreisfelder und noch wilde Strände von Cap Skirring.",
      },
      wikipedia: "File:Casamance landscape.jpg",
      tags: ["Nature", "Plage", "Culture", "Randonnée", "Safari"],
      mustSee: [
        { name: { fr: "Cap Skirring — plage sauvage", en: "Cap Skirring — wild beach", es: "Cap Skirring — playa salvaje", de: "Cap Skirring – wilder Strand" }, wikipedia: "Cap_Skirring" },
        { name: { fr: "Ziguinchor — vieille ville coloniale", en: "Ziguinchor — old colonial town", es: "Ziguinchor — antigua ciudad colonial", de: "Ziguinchor – alte Kolonialstadt" }, wikipedia: "Ziguinchor" },
        { name: { fr: "Village diola de Kabrousse", en: "Kabrousse Diola village", es: "Pueblo diola de Kabrousse", de: "Diola-Dorf Kabrousse" }, wikipedia: "File:Alyssa K. Barry Enampore, Casamance, Senegal.jpg" },
        { name: { fr: "Basse-Casamance en pirogue", en: "Lower Casamance by canoe", es: "Baja Casamance en piragua", de: "Untere Casamance mit dem Kanu" }, wikipedia: "Casamance_River" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Sénégal est accessible économiquement. Dakar est plus chère que les autres villes, mais reste très abordable pour les Européens. La cuisine locale (thiéboudienne, yassa) est excellente.", en: "Senegal is affordable overall. Dakar is pricier than other cities, but remains very affordable for Europeans. Local cuisine (thiéboudienne, yassa) is excellent.", es: "Senegal es económicamente accesible. Dakar es más cara que otras ciudades, pero sigue siendo muy asequible para los europeos. La cocina local (thiéboudienne, yassa) es excelente.", de: "Senegal ist wirtschaftlich zugänglich. Dakar ist teurer als andere Städte, bleibt aber für Europäer sehr erschwinglich. Die lokale Küche (Thiéboudienne, Yassa) ist ausgezeichnet.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 656 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge / chambre locale", en: "Hostel / local room", es: "Albergue / habitación local", de: "Lokale Herberge/Zimmer" }, price: "15–30 €", detail: { fr: "En dehors de Dakar", en: "Outside Dakar", es: "Fuera de Dakar", de: "Außerhalb von Dakar" } },
          { label: { fr: "Hôtel 3★ Dakar", en: "3★ hotel in Dakar", es: "Hotel 3★ en Dakar", de: "Hotel 3★ Dakar" }, price: "45–80 €", detail: { fr: "Avec clim et petit-déjeuner", en: "With AC and breakfast", es: "Con aire acondicionado y desayuno", de: "Mit Klimaanlage und Frühstück" } },
          { label: { fr: "Lodge éco / resort Casamance", en: "Eco-lodge / resort in Casamance", es: "Eco-lodge / resort en Casamance", de: "Öko-Lodge / Resort Casamance" }, price: "70–150 €", detail: { fr: "Dans la nature", en: "In nature", es: "En plena naturaleza", de: "In der Natur" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Thiéboudienne (riz au poisson)", en: "Thiéboudienne (rice with fish)", es: "Thiéboudienne (arroz con pescado)", de: "Thiéboudienne (Reis mit Fisch)" }, price: "2–4 €", detail: { fr: "Plat national, délicieux", en: "The delicious national dish", es: "Plato nacional, delicioso", de: "Nationalgericht, lecker" } },
          { label: { fr: "Restaurant local (yassa, mafé)", en: "Local restaurant (yassa, mafé)", es: "Restaurante local (yassa, mafé)", de: "Lokales Restaurant (Yassa, Mafé)" }, price: "5–10 €", detail: { fr: "Menu complet", en: "Full set menu", es: "Menú completo", de: "Komplettes Menü" } },
          { label: { fr: "Restaurant touristique Dakar", en: "Tourist restaurant in Dakar", es: "Restaurante turístico en Dakar", de: "Touristenrestaurant Dakar" }, price: "15–30 €", detail: { fr: "Fruits de mer, terrasse", en: "Seafood, terrace", es: "Marisco, terraza", de: "Meeresfrüchte, Terrasse" } },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Sept-places (taxi intercités)", en: "Sept-place (intercity shared taxi)", es: "Sept-places (taxi interurbano compartido)", de: "Siebensitzer (Überlandtaxi)" }, price: "5–15 €", detail: { fr: "Dakar–Saly–Saint-Louis", en: "Dakar–Saly–Saint-Louis", es: "Dakar–Saly–Saint-Louis", de: "Dakar–Saly–Saint-Louis" } },
          { label: { fr: "Pirogue (Casamance)", en: "Canoe (Casamance)", es: "Piragua (Casamance)", de: "Piroge (Casamance)" }, price: "10–25 €", detail: { fr: "Entre villages", en: "Between villages", es: "Entre pueblos", de: "Zwischen Dörfern" } },
          { label: { fr: "Location 4x4 / jour", en: "4x4 rental / day", es: "Alquiler de 4x4 / día", de: "4x4-Vermietung / Tag" }, price: "50–80 €", detail: { fr: "Pour la Casamance ou Ferlo", en: "For Casamance or Ferlo", es: "Para Casamance o Ferlo", de: "Für Casamance oder Ferlo" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Traversée Gorée (aller-retour)", en: "Gorée crossing (round trip)", es: "Travesía a Gorea (ida y vuelta)", de: "Gorée-Überquerung (Hin- und Rückfahrt)" }, price: "3–5 €", detail: { fr: "Ferry depuis Dakar", en: "Ferry from Dakar", es: "Ferry desde Dakar", de: "Fähre von Dakar" } },
          { label: { fr: "Visite Parc du Djoudj (oiseaux)", en: "Djoudj Park visit (birds)", es: "Visita al parque de Djoudj (aves)", de: "Besuchen Sie den Djoudj Park (Vögel)" }, price: "5–10 €", detail: { fr: "Pélicans, flamants", en: "Pelicans, flamingos", es: "Pelícanos, flamencos", de: "Pelikane, Flamingos" } },
          { label: { fr: "Safari Niokolo-Koba", en: "Niokolo-Koba safari", es: "Safari en Niokolo-Koba", de: "Safari Niokolo-Koba" }, price: "30–60 €/j", detail: { fr: "Guide + entrée", en: "Guide + entry fee", es: "Guía + entrada", de: "Führer + Eintritt" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Guesthouse + thiéboudienne + sept-places", en: "Guesthouse + thiéboudienne + sept-place", es: "Guesthouse + thiéboudienne + sept-places", de: "Gästehaus + Thiéboudienne + Siebensitzer" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "80–120 €/j", desc: { fr: "Hôtel 3★ + restos + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones", de: "3★ Hotel + Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "200 €+/j", desc: { fr: "Lodge Casamance + gastronomie + circuit privé", en: "Casamance lodge + fine dining + private tour", es: "Lodge en Casamance + gastronomía + circuito privado", de: "Lodge Casamance + Gastronomie + private Tour" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: {
        fr: "Dakar & Gorée (3j) → Lac Rose & Saly (2j) → Saint-Louis (2j) → Casamance (4j) → Dakar (1j)", en: "Dakar & Gorée (3d) → Pink Lake & Saly (2d) → Saint-Louis (2d) → Casamance (4d) → Dakar (1d)", es: "Dakar y Gorea (3d) → Lago Rosa y Saly (2d) → Saint-Louis (2d) → Casamance (4d) → Dakar (1d)", de: "Dakar & Gorée (3 Tage) → Lac Rose & Saly (2 Tage) → Saint-Louis (2 Tage) → Casamance (4 Tage) → Dakar (1 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dakar", en: "Return flight Paris–Dakar", es: "Vuelo ida y vuelta Madrid–Dakar", de: "Hin- und Rückflug Paris–Dakar" }, amount: "300–500 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "250–350 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dakar", en: "Return flight Paris–Dakar", es: "Vuelo ida y vuelta Madrid–Dakar", de: "Hin- und Rückflug Paris–Dakar" }, amount: "400–700 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)", es: "Alojamiento (12 noches)", de: "Unterkunft (12 Nächte)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "500–700 €" },
            { label: { fr: "Transport & excursions", en: "Transport & excursions", es: "Transporte y excursiones", de: "Transport & Ausflüge" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "300–400 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dakar (direct)", en: "Return flight Paris–Dakar (direct)", es: "Vuelo ida y vuelta Madrid–Dakar (directo)", de: "Hin- und Rückflug Paris–Dakar (direkt)" }, amount: "800–1 500 €" },
            { label: { fr: "Lodges & hôtels design (12 nuits)", en: "Design lodges & hotels (12 nights)", es: "Lodges y hoteles de diseño (12 noches)", de: "Designer-Lodges & Hotels (12 Nächte)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias", de: "Gastronomie & Erlebnisse" }, amount: "800–1 500 €" },
            { label: { fr: "Transport privé & pirogue", en: "Private transport & canoe", es: "Transporte privado y piragua", de: "Privater Transport und Kanu" }, amount: "500–800 €" },
            { label: { fr: "Extras", en: "Extras", es: "Extras", de: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~5,5h (Air Sénégal direct, Transavia, Air France)", en: "~5.5h (Air Sénégal direct, Transavia, Air France)", es: "~5,5h (Air Sénégal directo, Iberia)", de: "ca. 5,5 Std. (Air Senegal Direkt, Transavia, Air France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "Visa-free for French citizens (90 days)", es: "Sin visado para ciudadanos de la UE (90 días)", de: "Visumfrei für Franzosen (90 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Franc CFA (1€ = 656 XOF — taux fixe euros)", en: "CFA franc (1€ = 656 XOF — fixed euro rate)", es: "Franco CFA (1€ = 656 XOF — tasa fija con el euro)", de: "CFA-Franc (1 € = 656 XOF – Festzins-Euro)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Français (officiel) + Wolof (courant)", en: "French (official) + Wolof (common)", es: "Francés (oficial) + wólof (habitual)", de: "Französisch (offiziell) + Wolof (fließend)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/E – 220 V", en: "Type C/E — 220V", es: "Tipo C/E – 220 V", de: "Typ C/E – 220 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Bonne couverture Dakar, faible en Casamance", en: "Good coverage in Dakar, weak in Casamance", es: "Buena cobertura en Dakar, débil en Casamance", de: "Gute Abdeckung in Dakar, schwach in Casamance" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille ou filtrée", en: "Not drinkable — bottled or filtered water", es: "No potable — agua embotellada o filtrada", de: "Nicht trinkbares Wasser – abgefülltes oder gefiltertes Wasser" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen recommandé + fièvre jaune OBLIGATOIRE", en: "Antimalarial recommended + yellow fever MANDATORY", es: "Antipalúdico recomendado + fiebre amarilla OBLIGATORIA", de: "Empfohlenes Malariamittel + OBLIGATORISCHES Gelbfieber" } },
  ],
};
