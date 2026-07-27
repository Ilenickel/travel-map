export const MALDIVES = {
  code: "MDV",
  numericId: 462,
  name: { fr: "Maldives", en: "Maldives", es: "Maldivas", de: "Malediven" },
  emoji: "🇲🇻",
  capital: { fr: "Malé", en: "Malé", es: "Malé", de: "Malé" },
  language: { fr: "Maldivien (dhivehi)", en: "Maldivian (Dhivehi)", es: "Maldivo (dhivehi)", de: "Maledivisch (Dhivehi)" },
  currency: { fr: "Rufiyaa (MVR)", en: "Rufiyaa (MVR)", es: "Rufiyaa (MVR)", de: "Rufiyaa (MVR)" },
  timezone: "UTC+5",
  filter: {
    budgetMin: 100, budgetMid: 160,
    tripMin: 2500, tripMid: 5000,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 3,
    plongee: 3,
  },
  description: {
    fr: "Les Maldives sont la quintessence du paradis tropical : 1 200 îles coralliennes aux lagons turquoise, sable blanc immaculé et biodiversité marine exceptionnelle. Destination emblématique des bungalows sur pilotis et de la plongée avec requins-baleines et raies manta.", en: "The Maldives are the quintessential tropical paradise: 1,200 coral islands with turquoise lagoons, pristine white sand and exceptional marine biodiversity. An iconic destination for overwater bungalows and diving with whale sharks and manta rays.", es: "Maldivas es el paraíso tropical por excelencia: 1.200 islas de coral con lagunas turquesas, arena blanca inmaculada y una biodiversidad marina excepcional. Destino emblemático de los bungalós sobre pilotes y del buceo con tiburones ballena y mantarrayas.", de: "Die Malediven sind der Inbegriff eines tropischen Paradieses: 1.200 Koralleninseln mit türkisfarbenen Lagunen, unberührtem weißem Sand und einer außergewöhnlichen Artenvielfalt im Meer. Berühmtes Reiseziel für Überwasserbungalows und Tauchgänge mit Walhaien und Mantarochen.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril", de: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Ciel bleu, mer calme, visibilité parfaite pour la plongée (30–40 m). Idéal pour les atolls du Nord.", en: "Blue skies, calm seas, perfect visibility for diving (30–40 m). Ideal for the northern atolls.", es: "Cielo azul, mar en calma, visibilidad perfecta para el buceo (30–40 m). Ideal para los atolones del norte.", de: "Blauer Himmel, ruhige See, perfekte Sicht zum Tauchen (30–40 m). Ideal für die nördlichen Atolle.",
      },
      icon: "🏝️",
    },
    {
      months: { fr: "Mai – Octobre", en: "May – October", es: "Mayo – Octubre", de: "Mai – Oktober" },
      label: { fr: "Mousson douce", en: "Gentle monsoon", es: "Monzón suave", de: "Milder Monsun" },
      color: "#3b82f6",
      description: {
        fr: "Pluies passagères mais mers plus vertes, plancton bioluminescent, raies mantas et requins-baleines plus nombreux dans le Sud.", en: "Occasional rain but greener seas, bioluminescent plankton, and more manta rays and whale sharks in the South.", es: "Lluvias pasajeras pero mares más verdes, plancton bioluminiscente, y más mantarrayas y tiburones ballena en el sur.", de: "Vorübergehende Regenfälle, aber grünere Meere, biolumineszierendes Plankton, zahlreichere Mantarochen und Walhaie im Süden.",
      },
      icon: "🦈",
    },
  ],

  weatherCities: [
    {
      id: "male",
      name: "Malé",
      region: { fr: "Atoll Nord Malé", en: "North Malé Atoll", es: "Atolón de Malé Norte", de: "Nord-Male-Atoll" },
      data: [
        { month: "Jan", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 55,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 30, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 29, rain: 265, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 240, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 195, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 175, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 185, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 220, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 225, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 170, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Atoll Nord Malé", en: "North Malé Atoll", es: "Atolón de Malé Norte", de: "Nord-Male-Atoll" },
      region: "Kaafu",
      description: {
        fr: "Le plus accessible depuis l'aéroport international, avec des resorts iconiques sur pilotis, la plongée à Banana Reef (premier site de plongée des Maldives) et les excursions de dauphin.", en: "The most accessible from the international airport, with iconic overwater resorts, diving at Banana Reef (the first diving site in the Maldives) and dolphin excursions.", es: "El más accesible desde el aeropuerto internacional, con resorts emblemáticos sobre pilotes, buceo en Banana Reef (el primer sitio de buceo de Maldivas) y excursiones para ver delfines.", de: "Am besten vom internationalen Flughafen aus erreichbar, mit berühmten Überwasserresorts, Tauchen am Banana Reef (dem besten Tauchplatz der Malediven) und Delfintouren.",
      },
      wikipedia: "File:Kaafu Atoll, Maldives - panoramio (9).jpg",
      tags: ["Plage", "Luxe"],
      mustSee: [
        { name: { fr: "Bungalows sur pilotis", en: "Overwater bungalows", es: "Bungalós sobre pilotes", de: "Überwasserbungalows" }, wikipedia: "File:1 Maldives, Indian Ocean, Asia.jpg" },
        { name: { fr: "Banana Reef (plongée)", en: "Banana Reef (diving)", es: "Banana Reef (buceo)", de: "Bananenriff (Tauchen)" }, wikipedia: "File:Funadhoo.jpg" },
        { name: { fr: "Malé — capitale colorée", en: "Malé — colourful capital", es: "Malé — capital colorida", de: "Malé – bunte Hauptstadt" }, wikipedia: "File:Male-total.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Atoll d'Ari", en: "Ari Atoll", es: "Atolón de Ari", de: "Ari-Atoll" },
      region: { fr: "Alif Alif & Alif Dhaal", en: "Alif Alif & Alif Dhaal", es: "Alif Alif y Alif Dhaal", de: "Alif Alif & Alif Dhaal" },
      description: {
        fr: "Paradis des plongeurs avec les requins-baleines présents toute l'année, les raies manta dans les passes et des murs coralliaux à couper le souffle.", en: "A diver's paradise with whale sharks present year-round, manta rays in the channels and breathtaking coral walls.", es: "Paraíso de los buceadores con tiburones ballena presentes todo el año, mantarrayas en los canales y muros de coral espectaculares.", de: "Ein Taucherparadies mit ganzjährig präsenten Walhaien, Mantarochen in den Pässen und atemberaubenden Korallenwänden.",
      },
      wikipedia: "Ari_Atoll",
      tags: ["Plage", "Safari", "Nature"],
      mustSee: [
        { name: { fr: "Plongée avec requins-baleines", en: "Diving with whale sharks", es: "Buceo con tiburones ballena", de: "Tauchen mit Walhaien" }, wikipedia: "Whale_shark" },
        { name: { fr: "Nage avec raies mantas", en: "Swimming with manta rays", es: "Nado con mantarrayas", de: "Schwimmen mit Mantarochen" }, wikipedia: "File:Manta birostris-Thailand3.jpg" },
        { name: { fr: "Récif corallien de Kuramathi", en: "Kuramathi coral reef", es: "Arrecife de coral de Kuramathi", de: "Kuramathi-Korallenriff" }, wikipedia: "Ari_Atoll" },
      ],
    },
    {
      id: 3,
      name: { fr: "Atoll de Baa — Réserve UNESCO", en: "Baa Atoll — UNESCO Reserve", es: "Atolón de Baa — Reserva UNESCO", de: "Baa-Atoll – UNESCO-Reservat" },
      region: "Baa",
      description: {
        fr: "Réserve de biosphère UNESCO, l'atoll de Baa abrite le lagon de Hanifaru Bay, où des centaines de raies manta se rassemblent chaque saison pour se nourrir.", en: "A UNESCO biosphere reserve, Baa Atoll is home to Hanifaru Bay lagoon, where hundreds of manta rays gather each season to feed.", es: "Reserva de biosfera de la UNESCO, el atolón de Baa alberga la laguna de Hanifaru Bay, donde cientos de mantarrayas se reúnen cada temporada para alimentarse.", de: "Das Baa-Atoll ist ein UNESCO-Biosphärenreservat und beherbergt die Lagune der Hanifaru-Bucht, wo sich jede Saison Hunderte von Mantarochen zum Fressen versammeln.",
      },
      wikipedia: "File:Baa atoll islands.JPG",
      tags: ["UNESCO", "Safari", "Plage"],
      mustSee: [
        { name: { fr: "Hanifaru Bay — banquet de raies manta", en: "Hanifaru Bay — manta ray feeding frenzy", es: "Hanifaru Bay — festín de mantarrayas", de: "Hanifaru Bay – Bankett der Mantarochen" }, wikipedia: "File:Manta birostris-Thailand3.jpg" },
        { name: { fr: "Snorkeling — récifs de Baa", en: "Snorkelling — Baa reefs", es: "Snorkel — arrecifes de Baa", de: "Schnorcheln – Baa-Riffe" }, wikipedia: "File:Baa Atoll (Voavah).JPG" },
        { name: { fr: "Fuvahmulah — requins tigres", en: "Fuvahmulah — tiger sharks", es: "Fuvahmulah — tiburones tigre", de: "Fuvahmulah – Tigerhaie" }, wikipedia: "File:Dharavandhoo_Thila_-_Hanifaru_Bay_Sharks.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Les Maldives sont une destination principalement de luxe. Les resorts sur îles privées pratiquent des tarifs parmi les plus élevés du monde. Une alternative plus économique existe via les guesthouses des îles locales.", en: "The Maldives are primarily a luxury destination. Private island resorts charge some of the highest rates in the world. A more affordable alternative exists through guesthouses on local islands.", es: "Maldivas es un destino principalmente de lujo. Los resorts en islas privadas cobran algunas de las tarifas más altas del mundo. Existe una alternativa más económica a través de las guesthouses de las islas locales.", de: "Die Malediven sind in erster Linie ein Luxusreiseziel. Resorts auf Privatinseln verlangen einige der höchsten Preise der Welt. Eine kostengünstigere Alternative sind Gästehäuser auf den lokalen Inseln.",
    },
    currency: "MVR",
    exchangeRate: "1€ ≈ 17,00 MVR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse île locale", en: "Local island guesthouse", es: "Guesthouse en isla local", de: "Lokales Gästehaus auf der Insel" }, price: "60–120 €", detail: { fr: "Maafushi, Rasdhoo — plus authentique", en: "Maafushi, Rasdhoo — more authentic", es: "Maafushi, Rasdhoo — más auténtico", de: "Maafushi, Rasdhoo – authentischer" } },
          { label: { fr: "Resort 4★", en: "4★ resort", es: "Resort 4★", de: "Resort 4★" }, price: "250–500 €", detail: { fr: "All-inclusive recommandé", en: "All-inclusive recommended", es: "Se recomienda todo incluido", de: "All-Inclusive empfohlen" } },
          { label: { fr: "Bungalow sur pilotis 5★", en: "5★ overwater bungalow", es: "Bungaló sobre pilotes 5★", de: "Bungalow auf Stelzen 5★" }, price: "800–3 000 €", detail: { fr: "One&Only, Soneva, Six Senses…", en: "One&Only, Soneva, Six Senses…", es: "One&Only, Soneva, Six Senses…", de: "One&Only, Soneva, Six Senses…" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Mas huni (petit-déj local)", en: "Mas huni (local breakfast)", es: "Mas huni (desayuno local)", de: "Mas huni (lokales Frühstück)" }, price: "3–5 €", detail: { fr: "Thon râpé et noix de coco", en: "Shredded tuna and coconut", es: "Atún rallado y coco", de: "Geschredderter Thunfisch und Kokosnuss" } },
          { label: { fr: "Restaurant île locale", en: "Local island restaurant", es: "Restaurante en isla local", de: "Lokales Inselrestaurant" }, price: "10–20 €", detail: { fr: "Curry de poisson et riz", en: "Fish curry and rice", es: "Curry de pescado y arroz", de: "Fisch-Reis-Curry" } },
          { label: { fr: "Dîner resort (all-inclusive inclus)", en: "Resort dinner (if not all-inclusive)", es: "Cena en el resort (si no es todo incluido)", de: "Abendessen im Resort (All-Inclusive inklusive)" }, price: "80–200 €", detail: { fr: "Si non AI", en: "If not on an all-inclusive plan", es: "Si no está incluido", de: "Wenn nicht KI" } },
        ],
      },
      {
        id: "transport",
        icon: "🚤",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Speed boat inter-îles", en: "Inter-island speedboat", es: "Lancha rápida entre islas", de: "Schnellboot zwischen den Inseln" }, price: "10–30 €", detail: { fr: "Navette partagée depuis Malé", en: "Shared shuttle from Malé", es: "Traslado compartido desde Malé", de: "Gemeinsamer Shuttle von Malé" } },
          { label: { fr: "Hydravion vers resort (20 min)", en: "Seaplane to resort (20 min)", es: "Hidroavión al resort (20 min)", de: "Wasserflugzeug zum Resort (20 Min.)" }, price: "300–600 €", detail: { fr: "Aller simple en hydravion", en: "One-way seaplane transfer", es: "Traslado de ida en hidroavión", de: "Einweg-Wasserflugzeug" } },
          { label: { fr: "Dhoni (bateau local)", en: "Dhoni (local boat)", es: "Dhoni (barco local)", de: "Dhoni (lokales Boot)" }, price: "5–15 €", detail: { fr: "Transfers courts entre îles proches", en: "Short transfers between nearby islands", es: "Traslados cortos entre islas cercanas", de: "Kurze Transfers zwischen nahegelegenen Inseln" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Excursion plongée (2 plongées)", en: "Diving excursion (2 dives)", es: "Excursión de buceo (2 inmersiones)", de: "Tauchausflug (2 Tauchgänge)" }, price: "60–100 €", detail: { fr: "Équipement inclus", en: "Equipment included", es: "Equipo incluido", de: "Ausrüstung inklusive" } },
          { label: { fr: "Snorkeling guidé + nourrissage raies", en: "Guided snorkelling + ray feeding", es: "Snorkel guiado + alimentación de mantarrayas", de: "Geführtes Schnorcheln + Rochenfütterung" }, price: "30–60 €", detail: { fr: "Demi-journée", en: "Half-day", es: "Media jornada", de: "Halber Tag" } },
          { label: { fr: "Excursion dauphin au coucher du soleil", en: "Sunset dolphin excursion", es: "Excursión de delfines al atardecer", de: "Delfinausflug bei Sonnenuntergang" }, price: "40–70 €", detail: { fr: "Dhoni au crépuscule", en: "Dhoni at dusk", es: "Dhoni al anochecer", de: "Dhoni in der Abenddämmerung" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "100–150 €/j", desc: { fr: "Guesthouses îles locales + restaurants locaux", en: "Local island guesthouses + local restaurants", es: "Guesthouses en islas locales + restaurantes locales", de: "Lokale Inselpensionen + lokale Restaurants" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "300–500 €/j", desc: { fr: "Resort all-inclusive 4★ avec activités", en: "4★ all-inclusive resort with activities", es: "Resort todo incluido 4★ con actividades", de: "4★ All-Inclusive-Resort mit Aktivitäten" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "1 000 €+/j", desc: { fr: "Bungalow sur pilotis 5★ + expériences exclusives", en: "5★ overwater bungalow + exclusive experiences", es: "Bungaló sobre pilotes 5★ + experiencias exclusivas", de: "5★ Überwasserbungalow + exklusive Erlebnisse" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Malé (1j) → Atoll Nord Malé (4j) → Atoll d'Ari (3j) → Malé (2j)", en: "Malé (1d) → North Malé Atoll (4d) → Ari Atoll (3d) → Malé (2d)", es: "Malé (1d) → Atolón de Malé Norte (4d) → Atolón de Ari (3d) → Malé (2d)", de: "Malé (1 Tag) → Nord-Malé-Atoll (4 Tage) → Ari-Atoll (3 Tage) → Malé (2 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Malé", en: "Return flight Paris–Malé", es: "Vuelo ida y vuelta París–Malé", de: "Hin- und Rückflug Paris–Malé" }, amount: "600–900 €" },
            { label: { fr: "Guesthouses (10 nuits)", en: "Guesthouses (10 nights)", es: "Guesthouses (10 noches)", de: "Gästehäuser (10 Nächte)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "500–700 €" },
            { label: { fr: "Speed boats & transports", en: "Speedboats & transport", es: "Lanchas rápidas y transporte", de: "Schnellboote und Transport" }, amount: "300–500 €" },
            { label: { fr: "Plongée & activités", en: "Diving & activities", es: "Buceo y actividades", de: "Tauchen & Aktivitäten" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "5 000 – 7 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Malé", en: "Return flight Paris–Malé", es: "Vuelo ida y vuelta París–Malé", de: "Hin- und Rückflug Paris–Malé" }, amount: "700–1 000 €" },
            { label: { fr: "Resort all-inclusive (10 nuits)", en: "All-inclusive resort (10 nights)", es: "Resort todo incluido (10 noches)", de: "All-Inclusive-Resort (10 Nächte)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Hydravion", en: "Seaplane", es: "Hidroavión", de: "Wasserflugzeug" }, amount: "600–1 000 €" },
            { label: { fr: "Excursions premium", en: "Premium excursions", es: "Excursiones premium", de: "Premium-Ausflüge" }, amount: "500–800 €" },
            { label: { fr: "Extras & imprévus", en: "Extras & contingency", es: "Extras e imprevistos", de: "Extras und Unvorhergesehenes" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "15 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Malé (Business)", en: "Return flight Paris–Malé (Business)", es: "Vuelo ida y vuelta París–Malé (Business)", de: "Hin- und Rückflug Paris–Malé (Business)" }, amount: "3 000–6 000 €" },
            { label: { fr: "Bungalow sur pilotis 5★ (10 nuits)", en: "5★ overwater bungalow (10 nights)", es: "Bungaló sobre pilotes 5★ (10 noches)", de: "Overwater Bungalow 5★ (10 Nächte)" }, amount: "8 000–20 000 €" },
            { label: { fr: "Hydravion privé", en: "Private seaplane", es: "Hidroavión privado", de: "Privates Wasserflugzeug" }, amount: "2 000–4 000 €" },
            { label: { fr: "Expériences exclusives", en: "Exclusive experiences", es: "Experiencias exclusivas", de: "Exklusive Erlebnisse" }, amount: "1 000–3 000 €" },
            { label: { fr: "Extras & spa", en: "Extras & spa", es: "Extras y spa", de: "Extras & Spa" }, amount: "1 000 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~10h (Emirates via Dubaï, Qatar Airways)", en: "~10h (Emirates via Dubai, Qatar Airways)", es: "~10h (Emirates vía Dubái, Qatar Airways)", de: "ca. 10 Std. (Emirates über Dubai, Qatar Airways)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Gratuit à l'arrivée (30 jours)", en: "Free on arrival (30 days)", es: "Gratuito a la llegada (30 días)", de: "Kostenlos bei der Ankunft (30 Tage)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Rufiyaa ($ acceptés dans les resorts)", en: "Rufiyaa (USD accepted in resorts)", es: "Rufiyaa (se aceptan USD en los resorts)", de: "Rufiyaa ($ wird in Resorts akzeptiert)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Dhivehi (anglais dans tout le tourisme)", en: "Dhivehi (English throughout the tourism industry)", es: "Dhivehi (inglés en todo el sector turístico)", de: "Dhivehi (Englisch im gesamten Tourismus)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G – 230 V (comme UK)", en: "Type G – 230V (same as UK)", es: "Tipo G – 230 V (como en el Reino Unido)", de: "Typ G – 230 V (wie Großbritannien)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Cobertura", de: "Mobilfunknetz" }, value: { fr: "Couverture dans les resorts, wifi inclus", en: "Coverage in resorts, wifi included", es: "Cobertura en los resorts, wifi incluido", de: "Abdeckung in Resorts, WLAN inklusive" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau dessalinisée en bouteille", en: "Not drinkable — bottled desalinated water", es: "No potable — agua desalinizada embotellada", de: "Nicht trinkbar – entsalztes Wasser in Flaschen" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucun vaccin obligatoire, médecin dans les grands resorts", en: "No mandatory vaccines, doctor available at major resorts", es: "Ninguna vacuna obligatoria, médico disponible en los grandes resorts", de: "Keine Impfpflicht, Arzt in großen Resorts" } },
  ],
};
