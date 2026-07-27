export const PORTUGAL = {
  code: "PRT",
  numericId: 620,
  name: { fr: "Portugal", en: "Portugal", es: "Portugal", de: "Portugal" },
  emoji: "🇵🇹",
  capital: { fr: "Lisbonne", en: "Lisbon", es: "Lisboa", de: "Lissabon" },
  language: { fr: "Portugais", en: "Portuguese", es: "Portugués", de: "Portugiesisch" },
  currency: { fr: "Euro (€)", en: "Euro (€)", es: "Euro (€)", de: "Euro (€)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 45, budgetMid: 120,
    tripMin: 1400, tripMid: 2700,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 2,
    gastronomie: 3,
    architecture: 3,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 3,
    plage: 3,
    plongee: 2,
  },
  description: {
    fr: "Le Portugal séduit par sa douceur de vivre : Lisbonne avec ses tramways et ses azulejos, le fado mélancolique, les plages de l'Algarve, le vin de Porto et les monastères manuélins de Sintra. Un pays accessible, chaleureux et riche en histoire.", en: "Portugal charms with its easy-going lifestyle: Lisbon with its trams and azulejo tiles, melancholic fado music, the beaches of the Algarve, Port wine, and the Manueline monasteries of Sintra. An accessible, warm country steeped in history.", es: "Portugal seduce por su dulzura de vivir: Lisboa con sus tranvías y sus azulejos, el fado melancólico, las playas del Algarve, el vino de Oporto y los monasterios manuelinos de Sintra. Un país accesible, cálido y rico en historia.", de: "Portugal verführt mit seiner sanften Lebensart: Lissabon mit seinen Straßenbahnen und Azulejos, melancholischem Fado, den Stränden der Algarve, Portwein und den manuelinischen Klöstern von Sintra. Ein zugängliches, warmes und geschichtsträchtiges Land.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Juin", en: "April – June", es: "Abril – Junio", de: "April – Juni" },
      label: { fr: "Printemps", en: "Spring", es: "Primavera", de: "Frühling" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (18–24 °C), fleurs de printemps, avant les foules et la chaleur. Parfait pour Lisbonne, Porto et l'intérieur des terres.", en: "Pleasant temperatures (18–24 °C), spring blossoms, before the crowds and the heat arrive. Perfect for Lisbon, Porto, and the interior.", es: "Temperaturas agradables (18–24 °C), flores de primavera, antes de las multitudes y el calor. Perfecto para Lisboa, Oporto y el interior del país.", de: "Angenehme Temperaturen (18–24°C), Frühlingsblumen, vor Menschenmassen und Hitze. Perfekt für Lissabon, Porto und das Landesinnere.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October", es: "Septiembre – Octubre", de: "September – Oktober" },
      label: { fr: "Arrière-saison", en: "Late season", es: "Temporada baja", de: "Späte Saison" },
      color: "#fb923c",
      description: {
        fr: "Mer encore chaude en Algarve, lumière dorée, moins de touristes, prix plus bas. Excellent pour tout le pays.", en: "The sea is still warm in the Algarve, the light turns golden, there are fewer tourists, and prices drop. Excellent all over the country.", es: "Mar todavía cálido en el Algarve, luz dorada, menos turistas, precios más bajos. Excelente para todo el país.", de: "Noch warmes Meer an der Algarve, goldenes Licht, weniger Touristen, niedrigere Preise. Ausgezeichnet für das ganze Land.",
      },
      icon: "🍇",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August", es: "Julio – Agosto", de: "Juli – August" },
      label: { fr: "Plages & Soleil", en: "Beaches & Sunshine", es: "Playas y sol", de: "Strände und Sonne" },
      color: "#3b82f6",
      description: {
        fr: "Soleil garanti sur les côtes. L'Algarve et les plages de l'Alentejo sont à leur mieux. Côte ouest ventée, idéale pour le surf.", en: "Guaranteed sunshine along the coasts. The Algarve and the Alentejo beaches are at their best. The windy west coast is ideal for surfing.", es: "Sol garantizado en las costas. El Algarve y las playas del Alentejo están en su mejor momento. La costa oeste, ventosa, es ideal para el surf.", de: "Garantierter Sonnenschein an den Küsten. Die Strände der Algarve und des Alentejo sind von ihrer schönsten Seite. Windige Westküste, ideal zum Surfen.",
      },
      icon: "☀️",
    },
  ],

  weatherCities: [
    {
      id: "lisbon",
      name: { fr: "Lisbonne", en: "Lisbon", es: "Lisboa", de: "Lissabon" },
      region: { fr: "Estremadura", en: "Estremadura", es: "Estremadura", de: "Estremadura" },
      data: [
        { month: "Jan", temp: 12, rain: 105, icon: "⛅" },
        { month: "Fév", temp: 13, rain: 108, icon: "⛅" },
        { month: "Mar", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Avr", temp: 16, rain: 60,  icon: "☀️" },
        { month: "Mai", temp: 19, rain: 35,  icon: "☀️" },
        { month: "Jun", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 8,   icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 9,   icon: "☀️" },
        { month: "Sep", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 85,  icon: "☀️" },
        { month: "Nov", temp: 15, rain: 120, icon: "⛅" },
        { month: "Déc", temp: 13, rain: 110, icon: "⛅" },
      ],
    },
    {
      id: "porto",
      name: { fr: "Porto", en: "Porto", es: "Oporto", de: "Hafen" },
      region: { fr: "Norte", en: "Norte", es: "Norte", de: "Norden" },
      data: [
        { month: "Jan", temp: 11, rain: 130, icon: "⛅" },
        { month: "Fév", temp: 12, rain: 145, icon: "⛅" },
        { month: "Mar", temp: 14, rain: 90,  icon: "⛅" },
        { month: "Avr", temp: 15, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "☀️" },
        { month: "Jun", temp: 21, rain: 45,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 25,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 120, icon: "☀️" },
        { month: "Nov", temp: 14, rain: 145, icon: "⛅" },
        { month: "Déc", temp: 11, rain: 150, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Lisbonne", en: "Lisbon", es: "Lisboa", de: "Lissabon" },
      region: { fr: "Estremadura", en: "Estremadura", es: "Estremadura", de: "Estremadura" },
      description: {
        fr: "Capitale aux sept collines, Lisbonne charme avec ses tramways historiques, ses miradouros (belvédères), le quartier de l'Alfama et ses nuits de fado inoubliables.", en: "The capital of seven hills, Lisbon charms with its historic trams, its miradouros (viewpoints), the Alfama district, and unforgettable nights of fado.", es: "Capital de las siete colinas, Lisboa cautiva con sus tranvías históricos, sus miradouros (miradores), el barrio de Alfama y sus inolvidables noches de fado.", de: "Lissabon, die Hauptstadt der sieben Hügel, bezaubert mit ihren historischen Straßenbahnen, ihren Miradouros (Aussichtspunkten), dem Alfama-Viertel und ihren unvergesslichen Fado-Abenden.",
      },
      wikipedia: "Lisbon",
      tags: ["Ville", "Culture", "Gastronomie", "Nightlife", "Histoire", "Architecture", "UNESCO"],
      mustSee: [
        { name: { fr: "Tramway 28 & Alfama", en: "Tram 28 & Alfama", es: "Tranvía 28 y Alfama", de: "Straßenbahn 28 & Alfama" }, wikipedia: "Alfama" },
        { name: { fr: "Monastère des Hiéronymites", en: "Jerónimos Monastery", es: "Monasterio de los Jerónimos", de: "Hieronymus-Kloster" }, wikipedia: "Jerónimos_Monastery" },
        { name: { fr: "Tour de Belém", en: "Belém Tower", es: "Torre de Belém", de: "Belem-Turm" }, wikipedia: "Belém_Tower" },
        { name: { fr: "Miradouro da Graça", en: "Miradouro da Graça", es: "Miradouro da Graça", de: "Miradouro da Graça" }, wikipedia: "File:Convento_da_Graça,_view_from_Castelo_de_São_Jorge,_Lisbon,_20250604_1720_9422.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Porto", en: "Porto", es: "Oporto", de: "Hafen" },
      region: { fr: "Norte", en: "Norte", es: "Norte", de: "Norden" },
      description: {
        fr: "Ville de caractère sur le Douro, avec ses caves de porto à Vila Nova de Gaia, son quartier de Ribeira classé UNESCO, les librairies mythiques et les pasteis de nata.", en: "A city full of character on the Douro river, with its Port wine cellars in Vila Nova de Gaia, the UNESCO-listed Ribeira district, legendary bookshops, and pastéis de nata.", es: "Ciudad con carácter a orillas del Duero, con sus bodegas de vino de Oporto en Vila Nova de Gaia, su barrio de Ribeira declarado Patrimonio de la UNESCO, las librerías legendarias y los pasteles de nata.", de: "Charaktervolle Stadt am Douro mit ihren Portweinkellern in Vila Nova de Gaia, ihrem zum UNESCO-Weltkulturerbe gehörenden Stadtteil Ribeira, legendären Buchhandlungen und Pasteis de Nata.",
      },
      wikipedia: "Porto",
      tags: ["Culture", "UNESCO", "Gastronomie", "Ville", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Ribeira — quartier du bord du Douro", en: "Ribeira — riverside district on the Douro", es: "Ribeira — barrio a orillas del Duero", de: "Ribeira – Stadtteil am Ufer des Douro" }, wikipedia: "File:View_of_Ribeira_from_Cais_de_Gaia,_20250605_1628_9890.jpg" },
        { name: { fr: "Caves de Porto (Vila Nova de Gaia)", en: "Port wine cellars (Vila Nova de Gaia)", es: "Bodegas de vino de Oporto (Vila Nova de Gaia)", de: "Portweinkeller (Vila Nova de Gaia)" }, wikipedia: "Vila_Nova_de_Gaia" },
        { name: { fr: "Librairie Lello", en: "Lello Bookshop", es: "Librería Lello", de: "Lello-Buchhandlung" }, wikipedia: "Livraria_Lello" },
        { name: { fr: "Pont Dom Luís I", en: "Dom Luís I Bridge", es: "Puente Dom Luís I", de: "Brücke Dom Luís I" }, wikipedia: "Dom_Luís_I_Bridge" },
      ],
    },
    {
      id: 3,
      name: { fr: "Sintra", en: "Sintra", es: "Sintra", de: "Sintra" },
      region: { fr: "Estremadura", en: "Estremadura", es: "Estremadura", de: "Estremadura" },
      description: {
        fr: "À 30 min de Lisbonne, un village féerique dans une forêt brumeuse, avec les palais extravagants de Pena et Quinta da Regaleira classés UNESCO.", en: "Just 30 minutes from Lisbon, a fairytale village in a misty forest, home to the extravagant UNESCO-listed Pena Palace and Quinta da Regaleira.", es: "A 30 minutos de Lisboa, un pueblo de cuento en un bosque brumoso, con los extravagantes palacios de Pena y Quinta da Regaleira, declarados Patrimonio de la UNESCO.", de: "30 Minuten von Lissabon entfernt, einem magischen Dorf in einem nebligen Wald mit den extravaganten Palästen Pena und Quinta da Regaleira, die zum UNESCO-Weltkulturerbe gehören.",
      },
      wikipedia: "Sintra",
      tags: ["Histoire", "UNESCO", "Architecture", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Palais national de Pena", en: "Pena National Palace", es: "Palacio Nacional de la Pena", de: "Nationalpalast von Pena" }, wikipedia: "Pena_Palace" },
        { name: { fr: "Quinta da Regaleira", en: "Quinta da Regaleira", es: "Quinta da Regaleira", de: "Quinta da Regaleira" }, wikipedia: "Quinta_da_Regaleira" },
        { name: { fr: "Château des Maures", en: "Moorish Castle", es: "Castillo de los Moros", de: "Maurisches Schloss" }, wikipedia: "Moorish_Castle" },
        { name: { fr: "Palais national de Sintra", en: "Sintra National Palace", es: "Palacio Nacional de Sintra", de: "Nationalpalast von Sintra" }, wikipedia: "File:Palacio Nacional, Sintra, Portugal, 2019-05-25, DD 89.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Algarve", en: "Algarve", es: "Algarve", de: "Algarve" },
      region: { fr: "Sud", en: "South", es: "Sur", de: "Süden" },
      description: {
        fr: "La plus belle région côtière du Portugal : falaises dorées, grottes marines, plages de sable fin et petits villages de pêcheurs. Lagos, Sagres et Albufeira en tête.", en: "Portugal's finest coastal region: golden cliffs, sea caves, fine sandy beaches, and small fishing villages. Lagos, Sagres, and Albufeira lead the way.", es: "La región costera más bella de Portugal: acantilados dorados, cuevas marinas, playas de arena fina y pequeños pueblos de pescadores. Lagos, Sagres y Albufeira a la cabeza.", de: "Die schönste Küstenregion Portugals: goldene Klippen, Meereshöhlen, feine Sandstrände und kleine Fischerdörfer. Lagos, Sagres und Albufeira liegen an der Spitze.",
      },
      wikipedia: "Algarve",
      tags: ["Plage", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Plage de Praia da Marinha", en: "Praia da Marinha Beach", es: "Playa de Praia da Marinha", de: "Strand Praia da Marinha" }, wikipedia: "Praia_da_Marinha" },
        { name: { fr: "Grottes de Benagil", en: "Benagil Caves", es: "Cuevas de Benagil", de: "Benagil-Höhlen" }, wikipedia: "File:Algar_de_Benagil,_O_Algarve_20210713_111259_(51615818880).jpg" },
        { name: { fr: "Cap Saint-Vincent — bout du monde", en: "Cape St. Vincent — the end of the world", es: "Cabo San Vicente — el fin del mundo", de: "Kap St. Vincent – Ende der Welt" }, wikipedia: "File:Cabo-sao-vicente-lighthouse-2019-msu-2309.jpg" },
        { name: { fr: "Lagos — vieille ville et falaises", en: "Lagos — old town and cliffs", es: "Lagos — casco antiguo y acantilados", de: "Lagos – Altstadt und Klippen" }, wikipedia: "Lagos,_Portugal" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Portugal est l'un des pays d'Europe occidentale les moins chers, tout en offrant une excellente qualité de vie. Les pastelarias et les restaurants du midi sont particulièrement abordables.", en: "Portugal is one of the cheapest countries in Western Europe, while still offering an excellent quality of life. Pastelarias and lunchtime restaurants are particularly affordable.", es: "Portugal es uno de los países más baratos de Europa occidental, ofreciendo a la vez una excelente calidad de vida. Las pastelarias y los restaurantes del mediodía son especialmente asequibles.", de: "Portugal ist eines der günstigsten Länder Westeuropas und bietet dennoch eine hervorragende Lebensqualität. Besonders erschwinglich sind die Pastelarias und Mittagsrestaurants.",
    },

    currency: "EUR (€)",
    exchangeRate: "Monnaie locale",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir hostel", en: "Hostel dorm", es: "Dormitorio de hostel", de: "Schlafsaal im Hostel" }, price: "20–35 €", detail: { fr: "Parmi les meilleurs d'Europe — ambiance top", en: "Among the best in Europe — great atmosphere", es: "Entre los mejores de Europa — ambiente inmejorable", de: "Zu den Besten Europas – Top-Atmosphäre" } },
          { label: { fr: "Guesthouse / pension", en: "Guesthouse", es: "Guesthouse / pensión", de: "Gästehaus/Pension" }, price: "35–65 €", detail: { fr: "Chambre privée avec petit-déj souvent inclus", en: "Private room, breakfast often included", es: "Habitación privada, a menudo con desayuno incluido", de: "Privatzimmer, oft inklusive Frühstück" } },
          { label: { fr: "Hôtel confort", en: "Comfort hotel", es: "Hotel confort", de: "Komforthotel" }, price: "70–150 €", detail: { fr: "Chambre double bien équipée, ~150 € en moyenne à Lisbonne", en: "Well-equipped double room, ~150 € on average in Lisbon", es: "Habitación doble bien equipada, ~150 € de media en Lisboa", de: "Gut ausgestattetes Doppelzimmer, durchschnittlich ca. 150 € in Lissabon" } },
          { label: { fr: "Quinta (maison de campagne)", en: "Quinta (country house)", es: "Quinta (casa de campo)", de: "Quinta (Landhaus)" }, price: "80–180 €", detail: { fr: "Vignobles, piscine, authenticité", en: "Vineyards, pool, authentic charm", es: "Viñedos, piscina, autenticidad", de: "Weinberge, Schwimmbad, Authentizität" } },
          { label: { fr: "Hôtel boutique / pousada", en: "Boutique hotel / pousada", es: "Hotel boutique / pousada", de: "Boutique-Hotel/Pousada" }, price: "150–400 €", detail: { fr: "Château ou couvent converti", en: "Converted castle or convent", es: "Castillo o convento reconvertido", de: "Umgebautes Schloss oder Kloster" } },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Pastel de nata + café", en: "Pastel de nata + coffee", es: "Pastel de nata + café", de: "Pastel de Nata + Kaffee" }, price: "2–3,50 €", detail: { fr: "1,50 € le pastel à la Pastéis de Belém — indispensable !", en: "1.50 € for the pastry at Pastéis de Belém — a must!", es: "1,50 € el pastel en Pastéis de Belém — ¡imprescindible!", de: "1,50 € für ein Pastell bei Pastéis de Belém – unverzichtbar!" } },
          { label: { fr: "Prato do dia (plat du jour)", en: "Prato do dia (dish of the day)", es: "Prato do dia (plato del día)", de: "Prato do dia (Tagesgericht)" }, price: "7–12 €", detail: { fr: "Entrée + plat + dessert + boisson", en: "Starter + main + dessert + drink", es: "Entrante + plato principal + postre + bebida", de: "Vorspeise + Hauptgericht + Dessert + Getränk" } },
          { label: { fr: "Bacalhau (morue) au restaurant", en: "Bacalhau (cod) at a restaurant", es: "Bacalhau (bacalao) en restaurante", de: "Bacalhau (Kabeljau) im Restaurant" }, price: "12–20 €", detail: { fr: "365 façons de le préparer selon la légende", en: "Legend says there are 365 ways to prepare it", es: "Según la leyenda, existen 365 formas de prepararlo", de: "Der Legende nach gibt es 365 Zubereitungsarten" } },
          { label: { fr: "Petiscos (tapas portugaises)", en: "Petiscos (Portuguese tapas)", es: "Petiscos (tapas portuguesas)", de: "Petiscos (portugiesische Tapas)" }, price: "2–5 €/petisco", detail: { fr: "Chouriço, pica-pau, amêijoas", en: "Chouriço, pica-pau, clams", es: "Chouriço, pica-pau, almejas", de: "Chouriço, Pica-Pau, Amêijoas" } },
          { label: { fr: "Restaurant gastronomique", en: "Fine dining restaurant", es: "Restaurante gastronómico", de: "Gourmet-Restaurant" }, price: "35–80 €", detail: { fr: "Cuisine portugaise contemporaine remarquable", en: "Outstanding contemporary Portuguese cuisine", es: "Extraordinaria cocina portuguesa contemporánea", de: "Hervorragende zeitgenössische portugiesische Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Métro Lisbonne / Porto", en: "Lisbon / Porto metro", es: "Metro de Lisboa / Oporto", de: "U-Bahn Lissabon/Porto" }, price: "1,50–2,50 €", detail: { fr: "Viva Viagem — ticket ou pass journalier", en: "Viva Viagem — single ticket or day pass", es: "Viva Viagem — billete sencillo o bono diario", de: "Viva Viagem – Ticket oder Tageskarte" } },
          { label: { fr: "Tramway historique (Lisbonne)", en: "Historic tram (Lisbon)", es: "Tranvía histórico (Lisboa)", de: "Historische Straßenbahn (Lissabon)" }, price: "3 €", detail: { fr: "Le fameux tram 28", en: "The famous tram 28", es: "El famoso tranvía 28", de: "Die berühmte Straßenbahn 28" } },
          { label: { fr: "Train Comboios de Portugal", en: "Comboios de Portugal train", es: "Tren Comboios de Portugal", de: "Zug Comboios de Portugal" }, price: "12–36 €", detail: { fr: "Lisbonne–Porto Intercidades ~28 €, Alfa Pendular ~36 € (dès 12 € tôt)", en: "Lisbon–Porto Intercidades ~28 €, Alfa Pendular ~36 € (from 12 € if booked early)", es: "Lisboa–Oporto Intercidades ~28 €, Alfa Pendular ~36 € (desde 12 € reservando pronto)", de: "Lissabon–Porto Intercidades ca. 28 €, Alfa Pendular ca. 36 € (ab 12 € früher)" } },
          { label: { fr: "Bus Rede Expressos", en: "Rede Expressos bus", es: "Autobús Rede Expressos", de: "Bus Rede Expressos" }, price: "5–20 €", detail: { fr: "Réseau national bon marché", en: "Cheap national network", es: "Red nacional económica", de: "Günstiges nationales Netz" } },
          { label: { fr: "Location de voiture", en: "Car rental", es: "Alquiler de coche", de: "Autovermietung" }, price: "25–60 €/j", detail: { fr: "Indispensable pour l'Algarve et l'intérieur", en: "Essential for the Algarve and the interior", es: "Indispensable para el Algarve y el interior", de: "Unverzichtbar für die Algarve und das Landesinnere" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Monastère des Hiéronymites", en: "Jerónimos Monastery", es: "Monasterio de los Jerónimos", de: "Hieronymus-Kloster" }, price: "10 €", detail: { fr: "Chef-d'œuvre manuélin, billet combiné Tour de Belém", en: "Manueline masterpiece, combined ticket with Belém Tower", es: "Obra maestra manuelina, entrada combinada con la Torre de Belém", de: "Manuelinisches Meisterwerk, Belém-Tour-Kombiticket" } },
          { label: { fr: "Palais de Pena (Sintra)", en: "Pena Palace (Sintra)", es: "Palacio de la Pena (Sintra)", de: "Pena-Palast (Sintra)" }, price: "14–18 €", detail: { fr: "Réservation recommandée en été", en: "Booking recommended in summer", es: "Se recomienda reservar en verano", de: "Reservierung im Sommer empfohlen" } },
          { label: { fr: "Spectacle de fado (Alfama)", en: "Fado show (Alfama)", es: "Espectáculo de fado (Alfama)", de: "Fado-Show (Alfama)" }, price: "20–40 €", detail: { fr: "Avec dîner : 40–80 €", en: "With dinner: 40–80 €", es: "Con cena: 40–80 €", de: "Mit Abendessen: 40–80 €" } },
          { label: { fr: "Tour en bateau (grottes Algarve)", en: "Boat tour (Algarve caves)", es: "Tour en barco (cuevas del Algarve)", de: "Bootstour (Höhlen der Algarve)" }, price: "15–25 €", detail: { fr: "Grottes de Benagil notamment", en: "Benagil Caves in particular", es: "En particular las cuevas de Benagil", de: "Insbesondere die Höhlen von Benagil" } },
          { label: { fr: "Surf school (côte atlantique)", en: "Surf school (Atlantic coast)", es: "Escuela de surf (costa atlántica)", de: "Surfschule (Atlantikküste)" }, price: "35–60 €", detail: { fr: "Équipement inclus, instructeur", en: "Equipment and instructor included", es: "Equipo e instructor incluidos", de: "Ausrüstung inklusive, Lehrer" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "45–70 €/j", desc: { fr: "Hostel + pastelaria + transports en commun", en: "Hostel + pastelaria + public transport", es: "Hostel + pastelaria + transporte público", de: "Hostel + Pastelaria + öffentliche Verkehrsmittel" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "120–180 €/j", desc: { fr: "Hôtel confort + restos + activités", en: "Comfort hotel + restaurants + activities", es: "Hotel confort + restaurantes + actividades", de: "Komforthotel + Restaurants + Aktivitäten" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "280 €+/j", desc: { fr: "Pousada + gastronomie + expériences exclusives", en: "Pousada + fine dining + exclusive experiences", es: "Pousada + gastronomía + experiencias exclusivas", de: "Pousada + Gastronomie + exklusive Erlebnisse" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: { fr: "Lisbonne (4j) → Sintra (1j) → Alentejo (2j) → Algarve (4j) → Porto (3j)", en: "Lisbon (4d) → Sintra (1d) → Alentejo (2d) → Algarve (4d) → Porto (3d)", es: "Lisboa (4d) → Sintra (1d) → Alentejo (2d) → Algarve (4d) → Oporto (3d)", de: "Lissabon (4 Tage) → Sintra (1 Tage) → Alentejo (2 Tage) → Algarve (4 Tage) → Porto (3 Tage)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 400 – 1 900 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lisbonne", en: "Return flight Paris–Lisbon", es: "Vuelo ida y vuelta París–Lisboa", de: "Hin- und Rückflug Paris–Lissabon" }, amount: "80–200 €" },
            { label: { fr: "Transports intérieurs (train + bus)", en: "Domestic transport (train + bus)", es: "Transporte interno (tren + autobús)", de: "Inlandstransport (Zug + Bus)" }, amount: "100–180 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "350–550 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "450–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "250–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 700 – 3 900 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lisbonne", en: "Return flight Paris–Lisbon", es: "Vuelo ida y vuelta París–Lisboa", de: "Hin- und Rückflug Paris–Lissabon" }, amount: "100–250 €" },
            { label: { fr: "Transports & location voiture (partielle)", en: "Transport & partial car rental", es: "Transporte y alquiler de coche (parcial)", de: "Transport & Autovermietung (teilweise)" }, amount: "200–350 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "1 000–1 700 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "800–1 100 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "450–650 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "5 000 € +",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lisbonne (business)", en: "Return flight Paris–Lisbon (business)", es: "Vuelo ida y vuelta París–Lisboa (business)", de: "Hin- und Rückflug Paris–Lissabon (Business Class)" }, amount: "400–1 000 €" },
            { label: { fr: "Location voiture premium", en: "Premium car rental", es: "Alquiler de coche premium", de: "Premium-Autovermietung" }, amount: "400–700 €" },
            { label: { fr: "Pousadas & quintas (14 nuits)", en: "Pousadas & quintas (14 nights)", es: "Pousadas y quintas (14 noches)", de: "Pousadas & Quintas (14 Nächte)" }, amount: "2 000–4 000 €" },
            { label: { fr: "Gastronomie & fado dîner", en: "Fine dining & fado dinner", es: "Gastronomía y cena con fado", de: "Gastronomie und Fado-Abendessen" }, amount: "800–1 500 €" },
            { label: { fr: "Expériences & imprévus", en: "Experiences & contingency", es: "Experiencias e imprevistos", de: "Erlebnisse und unerwartete Ereignisse" }, amount: "500–900 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~2h15 direct (TAP Air Portugal, Air France, Transavia)", en: "~2h15 direct (TAP Air Portugal, Air France, Transavia)", es: "~2h15 directo (TAP Air Portugal, Air France, Transavia)", de: "ca. 2 Std. 15 Min. direkt (TAP Air Portugal, Air France, Transavia)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Pas de visa (espace Schengen)", en: "No visa required (Schengen area)", es: "Sin visado (espacio Schengen)", de: "Kein Visum (Schengen-Raum)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€) — cartes acceptées partout", en: "Euro (€) — cards accepted everywhere", es: "Euro (€) — tarjetas aceptadas en todas partes", de: "Euro (€) – Karten werden überall akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Portugais — anglais dans les zones touristiques, espagnol compris", en: "Portuguese — English in tourist areas, Spanish is understood", es: "Portugués — inglés en zonas turísticas, se entiende el español", de: "Portugiesisch – Englisch in Touristengebieten, Spanisch inklusive" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/F — 230V (même qu'en France)", en: "Type C/F — 230V (same as France)", es: "Tipo C/F — 230V (igual que en Francia)", de: "Typ C/F – 230 V (wie in Frankreich)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Roaming européen inclus, excellent réseau 4G/5G", en: "European roaming included, excellent 4G/5G network", es: "Roaming europeo incluido, excelente red 4G/5G", de: "Europäisches Roaming inklusive, ausgezeichnetes 4G/5G-Netz" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable dans tout le pays", en: "Drinkable throughout the country", es: "Potable en todo el país", de: "Trinken im ganzen Land" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Carte européenne d'assurance maladie valide", en: "European Health Insurance Card is valid", es: "La tarjeta sanitaria europea es válida", de: "Gültige europäische Krankenversicherungskarte" } },
  ],
};
