export const BHUTAN = {
  code: "BTN",
  numericId: 64,
  name: { fr: "Bhoutan", en: "Bhutan", es: "Bután", de: "Bhutan" },
  emoji: "🇧🇹",
  capital: { fr: "Thimphou", en: "Thimphu", es: "Timbu", de: "Thimphu" },
  language: { fr: "Dzongkha", en: "Dzongkha", es: "Dzongkha", de: "Dzongkha" },
  currency: { fr: "Ngultrum (BTN)", en: "Ngultrum (BTN)", es: "Ngultrum (BTN)", de: "Ngultrum (BTN)" },
  timezone: "UTC+6",
  filter: {
    budgetMin: 200, budgetMid: 350,
    tripMin: 3000, tripMid: 5500,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 1,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 0,
    plongee: 0,
  },
  description: {
    fr: "Le Bhoutan est le dernier royaume bouddhiste de l'Himalaya, mesurant son succès au « Bonheur National Brut » plutôt qu'au PIB. Monastères perchés à flanc de falaise, rizières en terrasses, forêts vierges et une culture tibétaine intacte — une destination hors du temps, accessible mais unique.", en: "Bhutan is the last Buddhist kingdom in the Himalayas, measuring its success by “Gross National Happiness” rather than GDP. Cliffside monasteries, terraced rice fields, pristine forests and an unspoilt Tibetan culture make it a timeless destination—accessible, yet truly unique.", es: "Bután es el último reino budista del Himalaya, que mide su éxito en «Felicidad Nacional Bruta» en lugar de PIB. Monasterios encaramados en acantilados, arrozales en terrazas, bosques vírgenes y una cultura tibetana intacta — un destino atemporal, accesible pero único.", de: "Bhutan ist das letzte buddhistische Königreich im Himalaya und misst seinen Erfolg eher am „Bruttonationalglück“ als am BIP. Klöster auf Klippen, Reisterrassen, Urwälder und eine intakte tibetische Kultur – ein zeitloses Reiseziel, zugänglich, aber einzigartig.",
  },

  bestPeriods: [
    {
      months: { fr: "Mars – Mai", en: "March – May", es: "Marzo – Mayo", de: "März – Mai" },
      label: { fr: "Printemps & Rhododendrons", en: "Spring & Rhododendrons", es: "Primavera y rododendros", de: "Frühling und Rhododendren" },
      color: "#22c55e",
      description: {
        fr: "Rhododendrons en fleurs (plus de 46 espèces), ciels clairs sur l'Himalaya, températures douces. Idéal pour trek et festivals (Paro Tsechu en avril).", en: "Blooming rhododendrons (more than 46 species), clear Himalayan skies and mild temperatures. Ideal for trekking and festivals (Paro Tsechu in April).", es: "Rododendros en flor (más de 46 especies), cielos despejados sobre el Himalaya, temperaturas suaves. Ideal para el trekking y los festivales (Paro Tsechu en abril).", de: "Blühende Rhododendren (mehr als 46 Arten), klarer Himmel über dem Himalaya, milde Temperaturen. Ideal für Trekking und Festivals (Paro Tsechu im April).",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Novembre", en: "September – November", es: "Septiembre – Noviembre", de: "September – November" },
      label: { fr: "Automne cristallin", en: "Crystal-clear autumn", es: "Otoño cristalino", de: "Kristallherbst" },
      color: "#fb923c",
      description: {
        fr: "Après la mousson, l'air est lavé, les panoramas sur les sommets (Jomolhari, Gangkhar Puensum) sont spectaculaires. Idéal pour les treks.", en: "After the monsoon, the air is washed clean and the views of the peaks (Jomolhari, Gangkhar Puensum) are spectacular. Ideal for trekking.", es: "Tras el monzón, el aire queda limpio y las vistas de las cumbres (Jomolhari, Gangkhar Puensum) son espectaculares. Ideal para el trekking.", de: "Nach dem Monsun ist die Luft gereinigt, die Panoramen der Gipfel (Jomolhari, Gangkhar Puensum) sind spektakulär. Ideal für Wanderungen.",
      },
      icon: "🏔️",
    },
  ],

  weatherCities: [
    {
      id: "thimphu",
      name: "Thimphou",
      region: { fr: "Thimphou", en: "Thimphu", es: "Timbu", de: "Thimphu" },
      data: [
        { month: "Jan", temp:  5, rain:  10, icon: "❄️" },
        { month: "Fév", temp:  7, rain:  20, icon: "❄️" },
        { month: "Mar", temp: 10, rain:  30, icon: "⛅" },
        { month: "Avr", temp: 13, rain:  60, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 150, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 200, icon: "⛅" },
        { month: "Aoû", temp: 20, rain: 200, icon: "⛅" },
        { month: "Sep", temp: 18, rain: 120, icon: "☀️" },
        { month: "Oct", temp: 14, rain:  50, icon: "⛅" },
        { month: "Nov", temp:  9, rain:  15, icon: "⛅" },
        { month: "Déc", temp:  6, rain:   5, icon: "❄️" },
      ],
    },
    {
      id: "paro",
      name: "Paro",
      region: { fr: "Paro", en: "Paro", es: "Paro", de: "Paro" },
      data: [
        { month: "Jan", temp:  3, rain:   8, icon: "❄️" },
        { month: "Fév", temp:  5, rain:  15, icon: "❄️" },
        { month: "Mar", temp:  9, rain:  25, icon: "⛅" },
        { month: "Avr", temp: 13, rain:  55, icon: "⛅" },
        { month: "Mai", temp: 16, rain:  90, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 140, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 200, icon: "⛅" },
        { month: "Aoû", temp: 20, rain: 200, icon: "⛅" },
        { month: "Sep", temp: 17, rain: 110, icon: "☀️" },
        { month: "Oct", temp: 13, rain:  45, icon: "⛅" },
        { month: "Nov", temp:  8, rain:  12, icon: "⛅" },
        { month: "Déc", temp:  4, rain:   4, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Paro — Taktsang (Nid du Tigre)", en: "Paro — Taktsang (Tiger's Nest)", es: "Paro — Taktsang (Nido del Tigre)", de: "Paro – Taktsang (Tigernest)" },
      region: { fr: "Paro", en: "Paro", es: "Paro", de: "Paro" },
      description: {
        fr: "Le monastère de Paro Taktsang, perché à 3 120 m sur une falaise verticale, est l'image iconique du Bhoutan. La randonnée de 2h depuis la vallée est accessible à tous.", en: "The Paro Taktsang monastery, perched at 3,120 m on a sheer cliff face, is Bhutan's iconic image. The 2-hour hike up from the valley is accessible to most travellers.", es: "El monasterio de Paro Taktsang, encaramado a 3120 m en un acantilado vertical, es la imagen icónica de Bután. La caminata de 2h desde el valle es accesible para cualquiera.", de: "Das Kloster Paro Taktsang, das auf 3.120 m Höhe auf einer senkrechten Klippe thront, ist das Wahrzeichen Bhutans. Die zweistündige Wanderung vom Tal aus ist für jedermann begehbar.",
      },
      wikipedia: "Paro_Taktsang",
      tags: ["Randonnée", "Spiritualité", "Panorama"],
      mustSee: [
        { name: { fr: "Monastère du Nid du Tigre (Taktsang)", en: "Tiger's Nest Monastery (Taktsang)", es: "Monasterio del Nido del Tigre (Taktsang)", de: "Tigernest-Kloster (Taktsang)" }, wikipedia: "Paro_Taktsang" },
        { name: { fr: "Rinpung Dzong — forteresse-monastère", en: "Rinpung Dzong — fortress-monastery", es: "Rinpung Dzong — fortaleza-monasterio", de: "Rinpung Dzong – Festungskloster" }, wikipedia: "Rinpung_Dzong" },
        { name: { fr: "Musée national du Bhoutan", en: "National Museum of Bhutan", es: "Museo Nacional de Bután", de: "Nationalmuseum von Bhutan" }, wikipedia: "National_Museum_of_Bhutan" },
      ],
    },
    {
      id: 2,
      name: { fr: "Thimphou", en: "Thimphu", es: "Timbu", de: "Thimphu" },
      region: { fr: "Thimphou", en: "Thimphu", es: "Timbu", de: "Thimphu" },
      description: {
        fr: "Capitale sans feux de circulation (unique au monde), Thimphou est une ville à taille humaine avec le Tashichho Dzong, la statue de Bouddha Dordenma (51 m) et des marchés colorés.", en: "A capital city with no traffic lights (unique in the world), Thimphu is a human-scale city with Tashichho Dzong, the 51 m Buddha Dordenma statue and colourful markets.", es: "Capital sin semáforos (única en el mundo), Timbu es una ciudad a escala humana con el Tashichho Dzong, la estatua del Buda Dordenma (51 m) y mercados coloridos.", de: "Als Hauptstadt ohne Ampeln (einzigartig auf der Welt) ist Thimphu eine Stadt im menschlichen Maßstab mit dem Tashichho Dzong, der Statue von Buddha Dordenma (51 m) und farbenfrohen Märkten.",
      },
      wikipedia: "Thimphu",
      tags: ["Ville", "Culture", "Spiritualité"],
      mustSee: [
        { name: { fr: "Bouddha Dordenma (51 m)", en: "Buddha Dordenma (51 m)", es: "Buda Dordenma (51 m)", de: "Buddha Dordenma (51 m)" }, wikipedia: "Buddha_Dordenma_statue" },
        { name: "Tashichho Dzong", wikipedia: "Tashichho_Dzong" },
        { name: { fr: "Changangkha Lhakhang (XIIe s.)", en: "Changangkha Lhakhang (12th c.)", es: "Changangkha Lhakhang (s. XII)", de: "Changangkha Lhakhang (12. Jahrhundert)" }, wikipedia: "Changangkha_Lhakhang" },
      ],
    },
    {
      id: 3,
      name: "Punakha",
      region: { fr: "Punakha", en: "Punakha", es: "Punakha", de: "Punakha" },
      description: {
        fr: "Ancienne capitale d'hiver, Punakha abrite le plus beau dzong du Bhoutan, à la confluence de deux rivières sacrées, entouré de rizières et de champs de moutarde dorée.", en: "Former winter capital, Punakha is home to Bhutan's most beautiful dzong, at the confluence of two sacred rivers, surrounded by rice paddies and golden mustard fields.", es: "Antigua capital de invierno, Punakha alberga el dzong más bello de Bután, en la confluencia de dos ríos sagrados, rodeado de arrozales y campos dorados de mostaza.", de: "Punakha, die alte Winterhauptstadt, beherbergt Bhutans schönsten Dzong, am Zusammenfluss zweier heiliger Flüsse, umgeben von Reisfeldern und goldenen Senffeldern.",
      },
      wikipedia: "Punakha_Dzong",
      tags: ["Histoire", "Architecture", "Nature"],
      mustSee: [
        { name: { fr: "Punakha Dzong — joyau architectural", en: "Punakha Dzong — architectural jewel", es: "Punakha Dzong — joya arquitectónica", de: "Punakha Dzong – architektonisches Juwel" }, wikipedia: "Punakha_Dzong" },
        { name: { fr: "Champs de moutarde (fév–mars)", en: "Mustard fields (Feb–Mar)", es: "Campos de mostaza (feb–mar)", de: "Senffelder (Feb–März)" }, wikipedia: "Punakha" },
        { name: { fr: "Chimi Lhakhang — temple de la fertilité", en: "Chimi Lhakhang — fertility temple", es: "Chimi Lhakhang — templo de la fertilidad", de: "Chimi Lhakhang – Fruchtbarkeitstempel" }, wikipedia: "Chimi_Lhakhang" },
      ],
    },
    {
      id: 4,
      name: { fr: "Bumthang — Vallée sacrée", en: "Bumthang — Sacred Valley", es: "Bumthang — Valle sagrado", de: "Bumthang – Heiliges Tal" },
      region: { fr: "Bumthang", en: "Bumthang", es: "Bumthang", de: "Bumthang" },
      description: {
        fr: "Le cœur culturel et spirituel du Bhoutan, avec les plus anciens temples du pays, des forêts de sapins, des brasseries artisanales et la chaleur des habitants.", en: "Bhutan's cultural and spiritual heart, with the country's oldest temples, fir forests, craft breweries and warmly welcoming locals.", es: "El corazón cultural y espiritual de Bután, con los templos más antiguos del país, bosques de abetos, cervecerías artesanales y la calidez de sus habitantes.", de: "Das kulturelle und spirituelle Herz Bhutans mit den ältesten Tempeln des Landes, Tannenwäldern, Handwerksbrauereien und der Herzlichkeit der Menschen.",
      },
      wikipedia: "Bumthang_District",
      tags: ["Spiritualité", "Randonnée", "Culture"],
      mustSee: [
        { name: "Jakar Dzong", wikipedia: "Jakar_Dzong" },
        { name: { fr: "Kurjey Lhakhang (empreinte de Guru Rinpoché)", en: "Kurjey Lhakhang (Guru Rinpoche footprint)", es: "Kurjey Lhakhang (huella de Guru Rinpoché)", de: "Kurjey Lhakhang (Fußabdruck von Guru Rinpoche)" }, wikipedia: "Kurjey_Lhakhang" },
        { name: { fr: "Red Panda Brewery (bière bhoutanaise)", en: "Red Panda Brewery (Bhutanese beer)", es: "Red Panda Brewery (cerveza butanesa)", de: "Red Panda Brewery (bhutanisches Bier)" }, wikipedia: "Bumthang_District" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Bhoutan impose une taxe touristique journalière (Sustainable Development Fee : 100$/jour en 2024, réduite de 200$/jour depuis 2023). Cela inclut hébergement 3★, repas, guide et transport locaux.", en: "Bhutan charges a daily tourism fee (Sustainable Development Fee: $100/day in 2024, down from $200/day since 2023). This includes 3-star accommodation, meals, a guide and local transport.", es: "Bután impone una tasa turística diaria (Sustainable Development Fee: 100$/día en 2024, reducida desde los 200$/día de 2023). Incluye alojamiento 3★, comidas, guía y transporte local.", de: "Bhutan erhebt eine tägliche Kurtaxe (Gebühr für nachhaltige Entwicklung: 100 $/Tag im Jahr 2024, reduziert um 200 $/Tag seit 2023). Darin sind 3★ Unterkunft, Verpflegung, örtlicher Reiseführer und Transport enthalten.",
    },
    currency: "BTN / INR",
    exchangeRate: "1€ ≈ 90 BTN (parité avec roupie indienne)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Hôtel 3★ (inclus dans SDF)", en: "3-star hotel (included in SDF)", es: "Hotel 3★ (incluido en la SDF)", de: "Hotel 3★ (im SDF enthalten)" }, price: "Inclus", detail: { fr: "Dans la taxe touristique journalière", en: "Included in the daily tourism fee", es: "Incluido en la tasa turística diaria", de: "In der täglichen Kurtaxe" } },
          { label: { fr: "Hôtel 4★ (supplément)", en: "4-star hotel (supplement)", es: "Hotel 4★ (suplemento)", de: "Hotel 4★ (Zuschlag)" }, price: "+50–100 €/nuit", detail: { fr: "Au-dessus du minimum SDF", en: "On top of the minimum SDF package", es: "Por encima del mínimo de la SDF", de: "Über dem Obdachlosenminimum" } },
          { label: { fr: "Lodge de luxe Aman/Six Senses", en: "Aman / Six Senses luxury lodge", es: "Lodge de lujo Aman/Six Senses", de: "Luxus-Lodge Aman/Six Senses" }, price: "600–1 500 €/nuit", detail: { fr: "En sus du SDF", en: "In addition to the SDF", es: "Además de la SDF", de: "Neben Obdachlosen" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Ema Datshi (chili au fromage)", en: "Ema Datshi (chilli and cheese)", es: "Ema Datshi (chile con queso)", de: "Ema Datshi (Chili-Käse)" }, price: "Inclus SDF", detail: { fr: "Plat national, 3 repas inclus", en: "National dish, 3 meals included", es: "Plato nacional, 3 comidas incluidas", de: "Nationalgericht, 3 Mahlzeiten inklusive" } },
          { label: { fr: "Restaurant upgradé", en: "Higher-end restaurant", es: "Restaurante de categoría superior", de: "Modernisiertes Restaurant" }, price: "15–30 €", detail: { fr: "En supplément du SDF", en: "At extra cost beyond the SDF", es: "Con suplemento sobre la SDF", de: "Neben Obdachlosen" } },
          { label: { fr: "Red Rice & Momo", en: "Red Rice & Momo", es: "Arroz rojo y momo", de: "Roter Reis und Momo" }, price: "3–6 €", detail: { fr: "Si hors circuit officiel", en: "If travelling outside the official circuit", es: "Si se viaja fuera del circuito oficial", de: "Wenn außerhalb des offiziellen Kreises" } },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Transport inclus dans SDF", en: "Transport included in SDF", es: "Transporte incluido en la SDF", de: "Transport im SDF inbegriffen" }, price: "Inclus", detail: { fr: "Véhicule + chauffeur dans le circuit", en: "Vehicle + driver within the itinerary", es: "Vehículo + chófer dentro del circuito", de: "Fahrzeug + Fahrer im Rundkurs" } },
          { label: { fr: "Vol Paro–Katmandou", en: "Paro–Kathmandu flight", es: "Vuelo Paro–Katmandú", de: "Flug Paro–Kathmandu" }, price: "150–250 €", detail: { fr: "Option combinaison avec Népal", en: "A good add-on option with Nepal", es: "Buena opción para combinar con Nepal", de: "Kombinationsmöglichkeit mit Nepal" } },
          { label: { fr: "Druk Air (vol arrivée)", en: "Druk Air (inbound flight)", es: "Druk Air (vuelo de llegada)", de: "Druk Air (Ankunftsflug)" }, price: "200–400 €", detail: { fr: "Seul accès aérien", en: "Bhutan's only commercial air gateway", es: "Único acceso aéreo comercial", de: "Nur Luftzugang" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Toutes visites incluses dans SDF", en: "All sightseeing included in SDF", es: "Todas las visitas incluidas en la SDF", de: "Alle Besuche im SDF enthalten" }, price: "Inclus", detail: { fr: "Guide + entrées", en: "Guide + entrance fees", es: "Guía + entradas", de: "Führer + Einträge" } },
          { label: { fr: "Trek Jomolhari (7j)", en: "Jomolhari trek (7d)", es: "Trekking Jomolhari (7d)", de: "Jomolhari Trek (7 Tage)" }, price: "+200–400 €", detail: { fr: "Supplément trek avec guide", en: "Extra charge for a guided trek", es: "Suplemento por trekking con guía", de: "Trek-Beilage mit Führer" } },
          { label: { fr: "Festival Tsechu (place réservée)", en: "Tsechu festival (reserved seat)", es: "Festival Tsechu (asiento reservado)", de: "Tsechu Festival (reservierter Platz)" }, price: "+30–60 €", detail: { fr: "Billets pour meilleurs places", en: "Tickets for the best seats", es: "Entradas para los mejores asientos", de: "Beste Sitzplatzkarten" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "200 €/j", desc: { fr: "SDF 100$/j + vol A/R lissé + suppléments minimum", en: "SDF $100/day + averaged return flight + minimal extras", es: "SDF 100$/día + vuelo ida y vuelta prorrateado + suplementos mínimos", de: "SDF von 100 $ pro Tag + anteiliger Hin- und Rückflug + minimale Zusatzkosten" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "300–400 €/j", desc: { fr: "SDF + hôtel 4★ + excursions supplémentaires", en: "SDF + 4-star hotel + extra excursions", es: "SDF + hotel 4★ + excursiones adicionales", de: "SDF + 4★ Hotel + zusätzliche Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "700 €+/j", desc: { fr: "SDF + lodges Aman/Six Senses + treks privés", en: "SDF + Aman / Six Senses lodges + private treks", es: "SDF + lodges Aman/Six Senses + treks privados", de: "SDF + Aman/Six Senses Lodges + private Wanderungen" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: { fr: "Paro (2j) → Thimphou (3j) → Punakha (2j) → Bumthang (3j)", en: "Paro (2d) → Thimphu (3d) → Punakha (2d) → Bumthang (3d)", es: "Paro (2d) → Timbu (3d) → Punakha (2d) → Bumthang (3d)", de: "Paro (2 Tage) → Thimphu (3 Tage) → Punakha (2 Tage) → Bumthang (3 Tage)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "3 000 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Paro (Druk Air/Bangkok Air)", en: "Return flight Paris–Paro (Druk Air/Bangkok Air)", es: "Vuelo ida y vuelta Madrid–Paro (Druk Air/Bangkok Air)", de: "Hin- und Rückflug Paris–Paro (Druk Air/Bangkok Air)" }, amount: "700–1 200 €" },
            { label: { fr: "SDF 100$/j × 10 jours", en: "SDF $100/day × 10 days", es: "SDF 100$/día × 10 días", de: "SDF 100 $/Tag × 10 Tage" }, amount: "~920 €" },
            { label: { fr: "Hébergement & repas (inclus SDF)", en: "Accommodation & meals (included in SDF)", es: "Alojamiento y comidas (incluidos en la SDF)", de: "Unterkunft und Verpflegung (auch für Obdachlose)" }, amount: "Inclus" },
            { label: { fr: "Guide & transport (inclus SDF)", en: "Guide & transport (included in SDF)", es: "Guía y transporte (incluidos en la SDF)", de: "Führung und Transport (auch für Obdachlose)" }, amount: "Inclus" },
            { label: { fr: "Suppléments & imprévus", en: "Extras & contingency", es: "Suplementos e imprevistos", de: "Ergänzungen und unvorhergesehene Ereignisse" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "5 500 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Paro", en: "Return flight Paris–Paro", es: "Vuelo ida y vuelta Madrid–Paro", de: "Hin- und Rückflug Paris–Paro" }, amount: "900–1 400 €" },
            { label: { fr: "SDF 100$/j × 10 jours", en: "SDF $100/day × 10 days", es: "SDF 100$/día × 10 días", de: "SDF 100 $/Tag × 10 Tage" }, amount: "~920 €" },
            { label: { fr: "Hôtel 4★ (supplément)", en: "4-star hotel (supplement)", es: "Hotel 4★ (suplemento)", de: "Hotel 4★ (Zuschlag)" }, amount: "700–1 200 €" },
            { label: { fr: "Treks & excursions", en: "Treks & excursions", es: "Treks y excursiones", de: "Wanderungen und Ausflüge" }, amount: "500–800 €" },
            { label: { fr: "Repas upgradés & imprévus", en: "Premium meals & contingency", es: "Comidas mejoradas e imprevistos", de: "Verbesserte und ungeplante Mahlzeiten" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "12 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Paro (Business)", en: "Return flight Paris–Paro (Business)", es: "Vuelo ida y vuelta Madrid–Paro (business)", de: "Hin- und Rückflug Paris–Paro (Business)" }, amount: "2 000–4 000 €" },
            { label: { fr: "SDF 100$/j × 10 jours", en: "SDF $100/day × 10 days", es: "SDF 100$/día × 10 días", de: "SDF 100 $/Tag × 10 Tage" }, amount: "~920 €" },
            { label: { fr: "Lodges Amankora ou Six Senses", en: "Amankora or Six Senses lodges", es: "Lodges Amankora o Six Senses", de: "Amankora oder Six Senses Lodges" }, amount: "6 000–12 000 €" },
            { label: { fr: "Treks privés & expériences exclusives", en: "Private treks & exclusive experiences", es: "Treks privados y experiencias exclusivas", de: "Private Wanderungen und exklusive Erlebnisse" }, amount: "1 000–2 000 €" },
            { label: { fr: "Gastronomie & imprévus", en: "Fine dining & contingency", es: "Alta gastronomía e imprevistos", de: "Gastronomie und unerwartete Ereignisse" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~12h (Druk Air/Bangkok Air via Bangkok ou Delhi)", en: "~12h (Druk Air/Bangkok Air via Bangkok or Delhi)", es: "~12h (Druk Air/Bangkok Air vía Bangkok o Delhi)", de: "ca. 12 Std. (Druk Air/Bangkok Air über Bangkok oder Delhi)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire (obtenu via agence agréée + SDF)", en: "Visa required (arranged through an approved agency + SDF)", es: "Visado obligatorio (obtenido a través de agencia autorizada + SDF)", de: "Visum erforderlich (über zugelassene Agentur + SDF erhalten)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Ngultrum = Roupie indienne (1€ ≈ 90 BTN)", en: "Ngultrum = pegged to the Indian rupee (1€ ≈ 90 BTN)", es: "Ngultrum = ligado a la rupia india (1€ ≈ 90 BTN)", de: "Ngultrum = Indische Rupie (1€ ≈ 90 BTN)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Dzongkha (anglais dans le tourisme)", en: "Dzongkha (English is used in tourism)", es: "Dzongkha (el inglés se usa en el turismo)", de: "Dzongkha (Englisch im Tourismus)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type D/F/G – 230 V", en: "Type D/F/G – 230 V", es: "Tipo D/F/G – 230 V", de: "Typ D/F/G – 230 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Couverture dans les vallées, limité en montagne", en: "Coverage in the valleys, limited in the mountains", es: "Cobertura en los valles, limitada en la montaña", de: "Abdeckung in den Tälern, begrenzt in den Bergen" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non recommandée — eau en bouteille", en: "Not recommended — bottled water", es: "No recomendada — agua embotellada", de: "Nicht empfohlen – Wasser in Flaschen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin hépatite A recommandé, médicaments anti-altitude", en: "Hepatitis A vaccine recommended, plus altitude medication", es: "Se recomienda vacuna de hepatitis A, medicamentos contra el mal de altura", de: "Hepatitis-A-Impfung empfohlen, Medikamente gegen Höhenunterschiede" } },
  ],
};
