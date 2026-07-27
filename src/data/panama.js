export const PANAMA = {
  code: "PAN",
  numericId: 591,
  name: { fr: "Panama", en: "Panama", es: "Panamá", de: "Panama" },
  emoji: "🇵🇦",
  capital: { fr: "Panama City", en: "Panama City", es: "Ciudad de Panamá", de: "Panama-Stadt" },
  language: { fr: "Espagnol", en: "Spanish", es: "Español", de: "Spanisch" },
  currency: { fr: "Dollar américain / Balboa (USD)", en: "US dollar / Balboa (USD)", es: "Dólar estadounidense / Balboa (USD)", de: "US-Dollar / Balboa (USD)" },
  timezone: "UTC-5",
  filter: {
    budgetMin: 50, budgetMid: 100,
    tripMin: 1600, tripMid: 3500,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 2,
    plongee: 2,
  },
  description: {
    fr: "Panama, carrefour du monde depuis 1914, est bien plus que son canal légendaire : le Casco Viejo classé UNESCO, les paradis caribéens des îles Kuna Yala et Bocas del Toro, et une biodiversité exceptionnelle (Darién) font de ce trait d'union entre deux continents une destination de voyage d'exception.", en: "Panama, a crossroads of the world since 1914, is far more than its legendary canal: the UNESCO-listed Casco Viejo, the Caribbean paradises of the Kuna Yala islands and Bocas del Toro, and exceptional biodiversity (Darién) make this link between two continents an outstanding travel destination.", es: "Panamá, encrucijada del mundo desde 1914, es mucho más que su legendario canal: el Casco Viejo declarado Patrimonio de la Humanidad, los paraísos caribeños de las islas Kuna Yala y Bocas del Toro, y una biodiversidad excepcional (Darién) convierten a este puente entre dos continentes en un destino de viaje excepcional.", de: "Panama, seit 1914 der Knotenpunkt der Welt, ist viel mehr als sein legendärer Kanal: Das UNESCO-Weltkulturerbe Casco Viejo, die karibischen Paradiese der Inseln Kuna Yala und Bocas del Toro sowie die außergewöhnliche Artenvielfalt (Darién) machen diese Verbindung zwischen zwei Kontinenten zu einem außergewöhnlichen Reiseziel.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Avril", en: "December – April", es: "Diciembre – Abril", de: "Dezember – April" },
      label: { fr: "Saison sèche Pacifique", en: "Pacific dry season", es: "Estación seca del Pacífico", de: "Trockenzeit im Pazifik" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour Panama City, le canal et les plages Pacifique. Ciel dégagé, chaleur supportable, mer calme.", en: "Ideal for Panama City, the canal and the Pacific beaches. Clear skies, bearable heat, calm seas.", es: "Ideal para Ciudad de Panamá, el canal y las playas del Pacífico. Cielo despejado, calor soportable, mar en calma.", de: "Ideal für Panama City, den Kanal und die Pazifikstrände. Klarer Himmel, erträgliche Hitze, ruhige See.",
      },
      icon: "⚓",
    },
    {
      months: { fr: "Février – Mars", en: "February – March", es: "Febrero – Marzo", de: "Februar – März" },
      label: { fr: "Meilleur côte Caraïbe", en: "Best on the Caribbean coast", es: "Mejor época en la costa Caribe", de: "Beste Karibikküste" },
      color: "#3b82f6",
      description: {
        fr: "Fenêtre sèche sur la côte Caraïbe (Bocas del Toro, San Blas). Eaux translucides, snorkel parfait.", en: "Dry window on the Caribbean coast (Bocas del Toro, San Blas). Crystal-clear waters, perfect for snorkelling.", es: "Ventana seca en la costa Caribe (Bocas del Toro, San Blas). Aguas transparentes, esnórquel perfecto.", de: "Trockenes Fenster an der Karibikküste (Bocas del Toro, San Blas). Durchsichtiges Wasser, perfekter Schnorchel.",
      },
      icon: "🏝️",
    },
  ],

  weatherCities: [
    {
      id: "panama_city",
      name: "Panama City",
      region: { fr: "Pacifique", en: "Pacific", es: "Pacífico", de: "Friedlich" },
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 10,  icon: "☀️" },
        { month: "Mar", temp: 29, rain: 10,  icon: "☀️" },
        { month: "Avr", temp: 29, rain: 60,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 210, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 60,  icon: "⛅" },
      ],
    },
    {
      id: "bocas_del_toro",
      name: "Bocas del Toro",
      region: { fr: "Caraïbes Ouest", en: "West Caribbean", es: "Caribe Oeste", de: "Westliche Karibik" },
      data: [
        { month: "Jan", temp: 26, rain: 130, icon: "☀️" },
        { month: "Fév", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Mar", temp: 27, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 240, icon: "⛅" },
        { month: "Jul", temp: 26, rain: 280, icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 26, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 26, rain: 180, icon: "☀️" },
        { month: "Déc", temp: 26, rain: 140, icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Canal de Panama", en: "Panama Canal", es: "Canal de Panamá", de: "Panamakanal" },
      region: "Panama City",
      description: {
        fr: "Le Canal de Panama, l'une des plus grandes réalisations d'ingénierie humaine, relie l'Atlantique au Pacifique en 80 km. Les écluses de Miraflores permettent d'observer en direct le transit de porte-conteneurs géants. Le musée interocéanique retrace l'épopée de sa construction.", en: "The Panama Canal, one of humanity's greatest engineering achievements, links the Atlantic to the Pacific over 80 km. The Miraflores Locks let you watch giant container ships pass through live. The Interoceanic Museum retraces the epic story of its construction.", es: "El Canal de Panamá, una de las mayores obras de ingeniería de la humanidad, conecta el Atlántico con el Pacífico en 80 km. Las esclusas de Miraflores permiten observar en directo el tránsito de portacontenedores gigantes. El museo interoceánico narra la epopeya de su construcción.", de: "Der Panamakanal, eine der größten Errungenschaften der menschlichen Ingenieurskunst, verbindet den Atlantik auf 80 km mit dem Pazifik. An den Miraflores-Schleusen können Sie die Durchfahrt riesiger Containerschiffe live beobachten. Das interozeanische Museum zeichnet die epische Geschichte seiner Erbauung nach.",
      },
      wikipedia: "File:Panama Canal Gatun Locks.jpg",
      tags: ["Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Écluses de Miraflores — transit en direct", en: "Miraflores Locks — live ship transit", es: "Esclusas de Miraflores — tránsito en directo", de: "Miraflores-Schleusen – Live-Transit" }, wikipedia: "File:Panama Canal Miraflores Locks.jpg" },
        { name: { fr: "Écluses d'Agua Clara (canal élargi)", en: "Agua Clara Locks (expanded canal)", es: "Esclusas de Agua Clara (canal ampliado)", de: "Agua Clara-Schleusen (erweiterter Kanal)" }, wikipedia: "File:Agua Clara Locks 09 2019 0752.jpg" },
        { name: { fr: "Musée interocéanique (Ciudad de Panamá)", en: "Interoceanic Museum (Panama City)", es: "Museo interoceánico (Ciudad de Panamá)", de: "Interozeanisches Museum (Panama-Stadt)" }, wikipedia: "File:Museo_del_Canal.jpg" },
        { name: { fr: "Pont des Amériques — panorama canal", en: "Bridge of the Americas — canal panorama", es: "Puente de las Américas — panorámica del canal", de: "Brücke von Amerika – Kanalpanorama" }, wikipedia: "File:08-029 Puente de las Américas 3.jpg" },
      ],
    },
    {
      id: 2,
      name: "Casco Viejo",
      region: "Panama City",
      description: {
        fr: "Le Casco Viejo, quartier historique de Panama City classé UNESCO, est une péninsule de ruelles coloniales espagnoles, d'hôtels boutiques et de restaurants gastronomiques avec vue sur les gratte-ciels de l'hypermoderne skyline panaméenne — un contraste saisissant entre passé et futur.", en: "Casco Viejo, the UNESCO-listed historic quarter of Panama City, is a peninsula of Spanish colonial alleyways, boutique hotels and gourmet restaurants overlooking the skyscrapers of Panama's ultra-modern skyline — a striking contrast between past and future.", es: "El Casco Viejo, barrio histórico de Ciudad de Panamá declarado Patrimonio de la Humanidad, es una península de callejuelas coloniales españolas, hoteles boutique y restaurantes gastronómicos con vistas a los rascacielos del ultramoderno skyline panameño: un contraste sorprendente entre pasado y futuro.", de: "Casco Viejo, das zum UNESCO-Weltkulturerbe gehörende historische Viertel von Panama-Stadt, ist eine Halbinsel aus spanischen Kolonialstraßen, Boutique-Hotels und Gourmet-Restaurants mit Blick auf die Wolkenkratzer der hypermodernen Skyline von Panama – ein markanter Kontrast zwischen Vergangenheit und Zukunft.",
      },
      wikipedia: "Casco_Viejo,_Panama",
      tags: ["UNESCO", "Histoire", "Gastronomie", "Nightlife"],
      mustSee: [
        { name: { fr: "Plaza de la Independencia & cathédrale", en: "Plaza de la Independencia & cathedral", es: "Plaza de la Independencia y catedral", de: "Unabhängigkeitsplatz und Kathedrale" }, wikipedia: "File:Panama Catedral Metropolitana.jpg" },
        { name: { fr: "Rooftop bars — vue skyline + canal", en: "Rooftop bars — skyline + canal views", es: "Bares en azoteas — vistas al skyline y al canal", de: "Rooftop-Bars – Blick auf die Skyline und den Kanal" }, wikipedia: "Casco_Viejo,_Panama" },
        { name: { fr: "Ruines de la vieille ville (Panama Viejo)", en: "Old town ruins (Panama Viejo)", es: "Ruinas de la ciudad vieja (Panamá Viejo)", de: "Ruinen der Altstadt (Panama Viejo)" }, wikipedia: "File:Catedral Panamá Viejo.jpg" },
        { name: { fr: "Théâtre National et Palais présidentiel", en: "National Theatre and Presidential Palace", es: "Teatro Nacional y Palacio Presidencial", de: "Nationaltheater und Präsidentenpalast" }, wikipedia: "File:National Theater in the Old Town of panama City.jpg" },
      ],
    },
    {
      id: 3,
      name: "Bocas del Toro",
      region: { fr: "Caraïbes Ouest", en: "West Caribbean", es: "Caribe Oeste", de: "Westliche Karibik" },
      description: {
        fr: "L'archipel de Bocas del Toro est le paradis caribéen du Panama : îles coralliennes, eaux turquoise, dauphins dans les lagunes, grenouilles vénéneuses dans la jungle et plages de sable blanc. Bocas Town (Isla Colón) est une ville sur pilotis, colorée et festive.", en: "The Bocas del Toro archipelago is Panama's Caribbean paradise: coral islands, turquoise waters, dolphins in the lagoons, poison dart frogs in the jungle and white sand beaches. Bocas Town (Isla Colón) is a colourful, festive town built on stilts.", es: "El archipiélago de Bocas del Toro es el paraíso caribeño de Panamá: islas coralinas, aguas turquesas, delfines en las lagunas, ranas venenosas en la jungla y playas de arena blanca. Bocas Town (Isla Colón) es una ciudad sobre pilotes, colorida y festiva.", de: "Die Inselgruppe Bocas del Toro ist Panamas karibisches Paradies: Koralleninseln, türkisfarbenes Wasser, Delfine in den Lagunen, giftige Frösche im Dschungel und weiße Sandstrände. Bocas Town (Isla Colón) ist eine farbenfrohe und festliche Stadt auf Stelzen.",
      },
      wikipedia: "File:Bocas aerial.jpg",
      tags: ["Plage", "Safari"],
      mustSee: [
        { name: { fr: "Red Frog Beach — grenouilles vénéneuses", en: "Red Frog Beach — poison dart frogs", es: "Red Frog Beach — ranas venenosas", de: "Red Frog Beach – giftige Frösche" }, wikipedia: "File:Oophaga pumilio 263283848.jpg" },
        { name: { fr: "Dolphin Bay — dauphins dans la lagune", en: "Dolphin Bay — dolphins in the lagoon", es: "Dolphin Bay — delfines en la laguna", de: "Dolphin Bay – Delfine in der Lagune" }, wikipedia: "File:Dolphin in Cardigan Bay, off New Quay.jpg" },
        { name: { fr: "Snorkel récifs coralliens (Isla Bastimentos)", en: "Snorkelling on coral reefs (Isla Bastimentos)", es: "Esnórquel en arrecifes de coral (Isla Bastimentos)", de: "Schnorchel-Korallenriffe (Isla Bastimentos)" }, wikipedia: "File:Isla Bastimentos La Mochila.jpg" },
        { name: { fr: "Bocas Town — vie nocturne sur pilotis", en: "Bocas Town — nightlife on stilts", es: "Bocas Town — vida nocturna sobre pilotes", de: "Bocas Town – Nachtleben auf Stelzen" }, wikipedia: "File:Early morning at Bocas del Toro.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "San Blas — Îles Kuna Yala", en: "San Blas — Kuna Yala Islands", es: "San Blas — Islas Kuna Yala", de: "San Blas – Kuna-Yala-Inseln" },
      region: { fr: "Caraïbes Est", en: "East Caribbean", es: "Caribe Este", de: "Östliche Karibik" },
      description: {
        fr: "San Blas (Guna Yala) est un archipel de 365 îles coraliennes géré par le peuple kuna, l'une des rares nations indigènes ayant conservé son autonomie complète. Eaux cristallines, plages désertes, hamacs sur l'eau et commerce des molas (tissus brodés) composent ce paradis hors du temps.", en: "San Blas (Guna Yala) is an archipelago of 365 coral islands governed by the Kuna people, one of the few indigenous nations to have retained full autonomy. Crystal-clear waters, deserted beaches, hammocks over the water and trade in molas (embroidered textiles) make up this timeless paradise.", es: "San Blas (Guna Yala) es un archipiélago de 365 islas coralinas gestionado por el pueblo kuna, una de las pocas naciones indígenas que ha conservado su autonomía completa. Aguas cristalinas, playas desiertas, hamacas sobre el agua y comercio de molas (telas bordadas) componen este paraíso atemporal.", de: "San Blas (Guna Yala) ist ein Archipel aus 365 Koralleninseln, das vom Volk der Kuna verwaltet wird, einem der wenigen indigenen Völker, die sich völlige Autonomie bewahrt haben. Kristallklares Wasser, einsame Strände, Hängematten auf dem Wasser und der Handel mit Molas (bestickten Stoffen) machen dieses zeitlose Paradies aus.",
      },
      wikipedia: "Guna_Yala",
      tags: ["Plage", "Culture"],
      mustSee: [
        { name: { fr: "Île aux cocotiers avec hamacs sur l'eau", en: "Coconut island with hammocks over the water", es: "Isla de cocoteros con hamacas sobre el agua", de: "Kokosnussinsel mit Hängematten auf dem Wasser" }, wikipedia: "San_Blas_Islands" },
        { name: { fr: "Molas — textiles brodés des Kunas", en: "Molas — embroidered Kuna textiles", es: "Molas — textiles bordados de los kunas", de: "Molas – bestickte Textilien der Kuna" }, wikipedia: "File:Mola_blouse,_Kuna_peoples,_San_Blas_Islands,_Panama,_20th_century,_cotton,_polyester_-_Fernbank_Museum_of_Natural_History_-_DSC09997.JPG" },
        { name: { fr: "Snorkel lagon turquoise (Cocos Bandidos)", en: "Snorkelling in the turquoise lagoon (Cocos Bandidos)", es: "Esnórquel en la laguna turquesa (Cocos Bandidos)", de: "Türkiser Lagunenschnorchel (Cocos Bandidos)" }, wikipedia: "Guna_Yala" },
        { name: { fr: "Communauté Kuna — mode de vie traditionnel", en: "Kuna community — traditional way of life", es: "Comunidad kuna — modo de vida tradicional", de: "Kuna-Gemeinschaft – traditionelle Lebensweise" }, wikipedia: "Guna_people" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Panama utilise le dollar américain et est plus cher que ses voisins centraméricains, surtout Panama City. Mais San Blas et Bocas restent abordables. Le niveau de vie est parmi les plus élevés d'Amérique centrale.", en: "Panama uses the US dollar and is more expensive than its Central American neighbours, especially Panama City. But San Blas and Bocas remain affordable. The cost of living is among the highest in Central America.", es: "Panamá usa el dólar estadounidense y es más caro que sus vecinos centroamericanos, especialmente Ciudad de Panamá. Pero San Blas y Bocas siguen siendo asequibles. El nivel de vida está entre los más altos de Centroamérica.", de: "Panama verwendet den US-Dollar und ist teurer als seine zentralamerikanischen Nachbarn, insbesondere Panama City. Aber San Blas und Bocas bleiben erschwinglich. Der Lebensstandard gehört zu den höchsten in Mittelamerika.",
    },
    currency: "USD",
    exchangeRate: "1€ ≈ 1,08 USD (Balboa = 1 USD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Hostel Panama City (Casco Viejo)", en: "Hostel in Panama City (Casco Viejo)", es: "Hostel en Ciudad de Panamá (Casco Viejo)", de: "Hostel Panama City (Casco Viejo)" }, price: "15–30 €", detail: { fr: "Dortoir ou chambre simple", en: "Dorm or single room", es: "Dormitorio o habitación individual", de: "Schlafsaal oder Einzelzimmer" } },
          { label: { fr: "Hôtel boutique Casco Viejo", en: "Boutique hotel in Casco Viejo", es: "Hotel boutique en el Casco Viejo", de: "Casco Viejo Boutique-Hotel" }, price: "80–150 €", detail: { fr: "Charme colonial, rooftop", en: "Colonial charm, rooftop", es: "Encanto colonial, azotea", de: "Kolonialer Charme, Dachterrasse" } },
          { label: { fr: "Camping San Blas (tout inclus)", en: "San Blas camping (all-inclusive)", es: "Camping en San Blas (todo incluido)", de: "Camping San Blas (alles inklusive)" }, price: "60–100 €", detail: { fr: "Tente + repas + transfert", en: "Tent + meals + transfer", es: "Tienda + comidas + traslado", de: "Zelt + Mahlzeiten + Transfer" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Arroz con pollo (local)", en: "Arroz con pollo (local)", es: "Arroz con pollo (local)", de: "Arroz con pollo (lokal)" }, price: "4–7 €", detail: { fr: "Plat national, copieux", en: "National dish, hearty", es: "Plato nacional, abundante", de: "Nationalgericht, herzhaft" } },
          { label: { fr: "Restaurant Panama City (Casco)", en: "Restaurant in Panama City (Casco)", es: "Restaurante en Ciudad de Panamá (Casco)", de: "Restaurant Panama-Stadt (Casco)" }, price: "15–30 €", detail: { fr: "Cuisine créative ou fruits de mer", en: "Creative cuisine or seafood", es: "Cocina creativa o marisco", de: "Kreative Küche oder Meeresfrüchte" } },
          { label: { fr: "Homard frais (San Blas)", en: "Fresh lobster (San Blas)", es: "Langosta fresca (San Blas)", de: "Frischer Hummer (San Blas)" }, price: "10–20 €", detail: { fr: "Pêche du jour par les Kunas", en: "Day's catch by the Kuna", es: "Pesca del día por los kunas", de: "Angeln des Tages an den Kunas" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus Panama City–Bocas del Toro", en: "Bus Panama City–Bocas del Toro", es: "Autobús Ciudad de Panamá–Bocas del Toro", de: "Bus Panama-Stadt–Bocas del Toro" }, price: "15–20 €", detail: { fr: "9h avec transfert bateau", en: "9h including boat transfer", es: "9h con traslado en barco", de: "9 Std. mit Bootstransfer" } },
          { label: { fr: "Vol Panama City–Bocas del Toro", en: "Flight Panama City–Bocas del Toro", es: "Vuelo Ciudad de Panamá–Bocas del Toro", de: "Flug Panama-Stadt–Bocas del Toro" }, price: "80–150 €", detail: { fr: "A/R, 50 min", en: "Return, 50 min", es: "Ida y vuelta, 50 min", de: "Hin- und Rückflug, 50 Min." } },
          { label: { fr: "Excursion San Blas (avion + bateau)", en: "San Blas excursion (plane + boat)", es: "Excursión a San Blas (avión + barco)", de: "Ausflug nach San Blas (Flugzeug + Boot)" }, price: "100–150 €", detail: { fr: "Journée ou nuit sur île", en: "Day trip or overnight on an island", es: "Día o noche en una isla", de: "Tag und Nacht auf der Insel" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite écluses Miraflores", en: "Miraflores Locks visit", es: "Visita a las esclusas de Miraflores", de: "Besuchen Sie die Miraflores-Schleusen" }, price: "15–20 €", detail: { fr: "Musée + observation direct", en: "Museum + live observation", es: "Museo + observación en directo", de: "Museum + direkte Beobachtung" } },
          { label: { fr: "Tour bateau San Blas (2j/1n)", en: "San Blas boat tour (2d/1n)", es: "Tour en barco por San Blas (2d/1n)", de: "San Blas Bootstour (2 Tage/1 Nacht)" }, price: "80–120 €", detail: { fr: "Nuit sur île, repas inclus", en: "Overnight on an island, meals included", es: "Noche en una isla, comidas incluidas", de: "Übernachtung auf der Insel, Mahlzeiten inklusive" } },
          { label: { fr: "Plongée Bocas del Toro (2 plongées)", en: "Diving in Bocas del Toro (2 dives)", es: "Buceo en Bocas del Toro (2 inmersiones)", de: "Tauchen Bocas del Toro (2 Tauchgänge)" }, price: "60–80 €", detail: { fr: "Guide + équipement", en: "Guide + equipment", es: "Guía + equipo", de: "Führer + Ausrüstung" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "50–70 €/j", desc: { fr: "Hostel + cuisine locale + bus + camping San Blas", en: "Hostel + local food + bus + San Blas camping", es: "Hostel + comida local + autobús + camping en San Blas", de: "Herberge + lokale Küche + Bus + Campingplatz San Blas" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "100–160 €/j", desc: { fr: "Boutique hôtel + restaurants + vols intérieurs", en: "Boutique hotel + restaurants + domestic flights", es: "Hotel boutique + restaurantes + vuelos interiores", de: "Boutique-Hotel + Restaurants + Inlandsflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "300 €+/j", desc: { fr: "Hôtel 5★ + vols privés San Blas + gastronomie", en: "5★ hotel + private flights to San Blas + fine dining", es: "Hotel 5★ + vuelos privados a San Blas + gastronomía", de: "5★ Hotel + Privatflüge San Blas + Gastronomie" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Panama City & Canal (3j) → Bocas del Toro (3j) → San Blas (3j) → Panama City départ (1j)", en: "Panama City & Canal (3d) → Bocas del Toro (3d) → San Blas (3d) → Departure from Panama City (1d)", es: "Ciudad de Panamá y el Canal (3d) → Bocas del Toro (3d) → San Blas (3d) → Salida desde Ciudad de Panamá (1d)", de: "Panama-Stadt und Kanal (3 Tage) → Bocas del Toro (3 Tage) → San Blas (3 Tage) → Abfahrt nach Panama-Stadt (1 Tag)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 600 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Panama City", en: "Return flight Paris–Panama City", es: "Vuelo ida y vuelta Madrid–Ciudad de Panamá", de: "Hin- und Rückflug Paris–Panama-Stadt" }, amount: "550–850 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "300–450 €" },
            { label: { fr: "Transports (bus + vols + bateaux)", en: "Transport (bus + flights + boats)", es: "Transporte (autobús + vuelos + barcos)", de: "Transport (Busse + Flüge + Boote)" }, amount: "250–400 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "150–300 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Panama City", en: "Return flight Paris–Panama City", es: "Vuelo ida y vuelta Madrid–Ciudad de Panamá", de: "Hin- und Rückflug Paris–Panama-Stadt" }, amount: "700–1 100 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "900–1 500 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails", es: "Comida y cócteles", de: "Essen und Cocktails" }, amount: "500–800 €" },
            { label: { fr: "Vols intérieurs + transferts", en: "Domestic flights + transfers", es: "Vuelos interiores + traslados", de: "Inlandsflüge + Transfers" }, amount: "500–800 €" },
            { label: { fr: "Excursions & plongée", en: "Excursions & diving", es: "Excursiones y buceo", de: "Ausflüge & Tauchen" }, amount: "400–700 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Panama (Business)", en: "Return flight Paris–Panama (Business)", es: "Vuelo ida y vuelta Madrid–Panamá (Business)", de: "Hin- und Rückflug Paris–Panama (Business)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Hôtels 5★ (10 nuits)", en: "5★ hotels (10 nights)", es: "Hoteles 5★ (10 noches)", de: "5★ Hotels (10 Nächte)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Gastronomie & spa", en: "Fine dining & spa", es: "Gastronomía y spa", de: "Gastronomie & Spa" }, amount: "800–1 500 €" },
            { label: { fr: "Vols charter + transferts privés", en: "Charter flights + private transfers", es: "Vuelos chárter + traslados privados", de: "Charterflüge + private Transfers" }, amount: "800–1 500 €" },
            { label: { fr: "Extras", en: "Extras", es: "Extras", de: "Extras" }, amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~13h avec escale (Copa Airlines via Bogotá, Air France via Miami)", en: "~13h with a layover (Copa Airlines via Bogotá, Air France via Miami)", es: "~13h con escala (Copa Airlines vía Bogotá, Iberia vía Miami)", de: "ca. 13 Std. mit Zwischenstopp (Copa Airlines via Bogotá, Air France via Miami)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa 180 jours (Français)", en: "Visa-free for 180 days (French citizens)", es: "Sin visado, 180 días (ciudadanos de la UE)", de: "Visumfrei 180 Tage (Französisch)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dollar américain / Balboa (taux 1:1) — espèces recommandées à San Blas", en: "US dollar / Balboa (1:1 rate) — cash recommended in San Blas", es: "Dólar estadounidense / Balboa (tasa 1:1) — efectivo recomendado en San Blas", de: "US-Dollar/Balboa (Wechselkurs 1:1) – Bargeld wird in San Blas empfohlen" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Espagnol (officiel) — kuna à San Blas, anglais à Bocas", en: "Spanish (official) — Kuna in San Blas, English in Bocas", es: "Español (oficial) — kuna en San Blas, inglés en Bocas", de: "Spanisch (offiziell) – Kuna in San Blas, Englisch in Bocas" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/B – 110 V (comme USA)", en: "Type A/B — 110V (like the US)", es: "Tipo A/B – 110 V (como en EE. UU.)", de: "Typ A/B – 110 V (wie USA)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Très bon Panama City, limité à San Blas et jungle", en: "Very good in Panama City, limited in San Blas and the jungle", es: "Muy buena en Ciudad de Panamá, limitada en San Blas y la jungla", de: "Sehr gutes Panama City, beschränkt auf San Blas und den Dschungel" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable à Panama City — non potable dans les îles", en: "Drinkable in Panama City — not drinkable on the islands", es: "Potable en Ciudad de Panamá — no potable en las islas", de: "In Panama City trinkbar, auf den Inseln nicht trinkbar" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen pour la province du Darién uniquement", en: "Antimalarial only needed for Darién province", es: "Antipalúdico solo necesario para la provincia de Darién", de: "Malariamittel nur für die Provinz Darién" } },
  ],
};
