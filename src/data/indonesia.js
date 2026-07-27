export const INDONESIA = {
  code: "IDN",
  numericId: 360,
  name: { fr: "Indonésie", en: "Indonesia", es: "Indonesia", de: "Indonesien" },
  emoji: "🇮🇩",
  capital: { fr: "Jakarta", en: "Jakarta", es: "Yakarta", de: "Jakarta" },
  language: { fr: "Indonésien", en: "Indonesian", es: "Indonesio", de: "Indonesisch" },
  currency: { fr: "Roupie (Rp)", en: "Rupiah (Rp)", es: "Rupia (Rp)", de: "Rupie (Rp)" },
  timezone: "UTC+7 à UTC+9",
  filter: {
    budgetMin: 20, budgetMid: 60,
    tripMin: 1000, tripMid: 2000,
  },
  criteria: {
    unesco: 2,
    nature: 3,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 3,
  },
  description: {
    fr: "L'Indonésie est le plus grand archipel du monde avec 17 000 îles. Bali, île des dieux aux temples et rizières en terrasses, Komodo et ses dragons, Lombok et ses plages vierges, et les orangs-outans de Bornéo forment un pays d'une biodiversité époustouflante.", en: "Indonesia is the world's largest archipelago, spanning 17,000 islands. Bali, the island of the gods with its temples and rice terraces, Komodo and its dragons, Lombok and its untouched beaches, and the orangutans of Borneo come together in a country of breathtaking biodiversity.", es: "Indonesia es el archipiélago más grande del mundo, con 17 000 islas. Bali, la isla de los dioses con sus templos y arrozales en terrazas, Komodo y sus dragones, Lombok y sus playas vírgenes, y los orangutanes de Borneo conforman un país de una biodiversidad asombrosa.", de: "Indonesien ist mit 17.000 Inseln der größte Archipel der Welt. Bali, die Insel der Götter mit Tempeln und Reisterrassen, Komodo und seine Drachen, Lombok und seine unberührten Strände sowie die Orang-Utans von Borneo bilden ein Land atemberaubender Artenvielfalt.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Octobre", en: "April – October", es: "Abril – Octubre", de: "April – Oktober" },
      label: { fr: "Saison sèche (Bali)", en: "Dry season (Bali)", es: "Estación seca (Bali)", de: "Trockenzeit (Bali)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour Bali et les petites îles Sunda (Lombok, Flores, Komodo). Mer calme, soleil garanti.", en: "Best time for Bali and the small Sunda islands (Lombok, Flores, Komodo). Calm seas and guaranteed sunshine.", es: "La mejor época para Bali y las pequeñas islas de la Sonda (Lombok, Flores, Komodo). Mar en calma y sol garantizado.", de: "Beste Zeit für Bali und die kleinen Sunda-Inseln (Lombok, Flores, Komodo). Ruhiges Meer, garantierte Sonne.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mai – Septembre", en: "May – September", es: "Mayo – Septiembre", de: "Mai – September" },
      label: { fr: "Saison sèche générale", en: "General dry season", es: "Estación seca general", de: "Allgemeine Trockenzeit" },
      color: "#3b82f6",
      description: {
        fr: "La saison sèche s'étend sur tout l'archipel (sauf Sulawesi). Idéal pour plonger à Raja Ampat et visiter Bornéo.", en: "The dry season extends across the archipelago (except Sulawesi). Ideal for diving in Raja Ampat and visiting Borneo.", es: "La estación seca se extiende por todo el archipiélago (salvo Sulawesi). Ideal para bucear en Raja Ampat y visitar Borneo.", de: "Die Trockenzeit erstreckt sich über den gesamten Archipel (außer Sulawesi). Ideal zum Tauchen in Raja Ampat und für einen Besuch in Borneo.",
      },
      icon: "🌊",
    },
    {
      months: { fr: "Novembre – Mars", en: "November – March", es: "Noviembre – Marzo", de: "November – März" },
      label: { fr: "Saison humide", en: "Wet season", es: "Estación húmeda", de: "Regenzeit" },
      color: "#fb923c",
      description: {
        fr: "Java et Bali ont plus de pluie mais restent visitables. Le nord de Bali et Flores restent secs. Moins de touristes.", en: "Java and Bali get more rain but remain visitable. Northern Bali and Flores stay dry. Fewer tourists.", es: "Java y Bali reciben más lluvia pero siguen siendo visitables. El norte de Bali y Flores permanecen secos. Menos turistas.", de: "Java und Bali haben mehr Regen, sind aber weiterhin besuchbar. Nordbali und Flores bleiben trocken. Weniger Touristen.",
      },
      icon: "🌧",
    },
  ],

  weatherCities: [
    {
      id: "bali",
      name: "Bali",
      region: { fr: "Bali", en: "Bali", es: "Bali", de: "Bali" },
      data: [
        { month: "Jan", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Jun", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 100, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 280, icon: "🌧️" },
      ],
    },
    {
      id: "jakarta",
      name: "Jakarta",
      region: { fr: "Java", en: "Java", es: "Java", de: "Java" },
      data: [
        { month: "Jan", temp: 27, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 210, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 95,  icon: "⛅" },
        { month: "Jun", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Jul", temp: 28, rain: 60,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 50,  icon: "⛅" },
        { month: "Sep", temp: 28, rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 165, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 280, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Bali", en: "Bali", es: "Bali", de: "Bali" },
      region: { fr: "Bali", en: "Bali", es: "Bali", de: "Bali" },
      description: {
        fr: "L'île des dieux, avec ses rizières en terrasses (Tegallalang), ses temples hindous (Tanah Lot, Uluwatu), ses plages de surf et ses villages artisanaux d'Ubud.", en: "The island of the gods, with its terraced rice fields (Tegallalang), Hindu temples (Tanah Lot, Uluwatu), surf beaches and artisan villages around Ubud.", es: "La isla de los dioses, con sus arrozales en terrazas (Tegallalang), sus templos hindúes (Tanah Lot, Uluwatu), sus playas de surf y los pueblos artesanales de Ubud.", de: "Die Insel der Götter mit ihren Reisterrassen (Tegallalang), ihren Hindu-Tempeln (Tanah Lot, Uluwatu), ihren Surfstränden und ihren Kunsthandwerkerdörfern Ubud.",
      },
      wikipedia: "File:Sunset,_Kuta,_Bali,_Indonesia,_20220825_1755_0879.jpg",
      tags: ["Plage", "Culture", "Nature", "Spiritualité", "Gastronomie", "Ville"],
      mustSee: [
        { name: { fr: "Rizières en terrasses de Tegallalang", en: "Tegallalang rice terraces", es: "Arrozales en terrazas de Tegallalang", de: "Tegallalang-Reisterrassen" }, wikipedia: "File:Rice_terraces,_Bali.jpg" },
        { name: { fr: "Temple Tanah Lot au coucher du soleil", en: "Tanah Lot temple at sunset", es: "Templo Tanah Lot al atardecer", de: "Tanah Lot Tempel bei Sonnenuntergang" }, wikipedia: "Tanah_Lot" },
        { name: { fr: "Temple Uluwatu sur les falaises", en: "Uluwatu temple on the cliffs", es: "Templo Uluwatu sobre los acantilados", de: "Uluwatu-Tempel auf den Klippen" }, wikipedia: "File:Luhur_Uluwatu_Temple,_Bali,_20220826_0953_1016.jpg" },
        { name: { fr: "Ubud — cœur culturel de Bali", en: "Ubud — Bali's cultural heart", es: "Ubud — el corazón cultural de Bali", de: "Ubud – kulturelles Herz Balis" }, wikipedia: "Ubud" },
      ],
    },
    {
      id: 2,
      name: { fr: "Yogyakarta & Borobudur", en: "Yogyakarta & Borobudur", es: "Yogyakarta y Borobudur", de: "Yogyakarta und Borobudur" },
      region: { fr: "Java", en: "Java", es: "Java", de: "Java" },
      description: {
        fr: "Borobudur est le plus grand temple bouddhiste du monde (9e siècle), classé UNESCO. À 70 km se trouve Prambanan, complexe de temples hindous tout aussi spectaculaire.", en: "Borobudur is the world's largest Buddhist temple (9th century), listed by UNESCO. 70 km away is Prambanan, an equally spectacular Hindu temple complex.", es: "Borobudur es el templo budista más grande del mundo (siglo IX), declarado Patrimonio de la Humanidad por la UNESCO. A 70 km se encuentra Prambanan, un complejo de templos hindúes igual de espectacular.", de: "Borobudur ist der größte buddhistische Tempel der Welt (9. Jahrhundert) und steht auf der UNESCO-Liste. 70 km entfernt liegt Prambanan, ein ebenso spektakulärer hinduistischer Tempelkomplex.",
      },
      wikipedia: "Borobudur",
      tags: ["Histoire", "UNESCO", "Culture", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Borobudur — temple bouddhiste", en: "Borobudur — Buddhist temple", es: "Borobudur — templo budista", de: "Borobudur – buddhistischer Tempel" }, wikipedia: "Borobudur" },
        { name: { fr: "Prambanan — temples hindous", en: "Prambanan — Hindu temples", es: "Prambanan — templos hindúes", de: "Prambanan – Hindu-Tempel" }, wikipedia: "Prambanan" },
        { name: { fr: "Kraton — palais du Sultan", en: "Kraton — the Sultan's palace", es: "Kratón — palacio del sultán", de: "Kraton – Sultanspalast" }, wikipedia: "Kraton_Ngayogyakarta_Hadiningrat" },
        { name: { fr: "Mont Merapi (volcan actif)", en: "Mount Merapi (active volcano)", es: "Monte Merapi (volcán activo)", de: "Merapi (aktiver Vulkan)" }, wikipedia: "Mount_Merapi" },
      ],
    },
    {
      id: 3,
      name: { fr: "Île de Komodo", en: "Komodo Island", es: "Isla de Komodo", de: "Komodo-Insel" },
      region: { fr: "Nusa Tenggara", en: "Nusa Tenggara", es: "Nusa Tenggara", de: "Nusa Tenggara" },
      description: {
        fr: "Les dragons de Komodo, les plus grands lézards du monde, habitent ce parc national UNESCO. Plages roses uniques (Pantai Merah) et snorkeling exceptionnel.", en: "Komodo dragons, the world's largest lizards, live in this UNESCO national park. Unique pink beaches (Pantai Merah) and outstanding snorkelling.", es: "Los dragones de Komodo, los lagartos más grandes del mundo, habitan este parque nacional declarado Patrimonio de la Humanidad. Playas rosas únicas (Pantai Merah) y un snorkel excepcional.", de: "Komodowarane, die größten Echsen der Welt, bewohnen diesen UNESCO-Nationalpark. Einzigartige rosa Strände (Pantai Merah) und außergewöhnliche Schnorchelmöglichkeiten.",
      },
      wikipedia: "Komodo_National_Park",
      tags: ["Nature", "UNESCO", "Plage", "Aventure"],
      mustSee: [
        { name: { fr: "Dragon de Komodo", en: "Komodo dragon", es: "Dragón de Komodo", de: "Komodowaran" }, wikipedia: "Komodo_dragon" },
        { name: { fr: "Plage rose de Pantai Merah", en: "Pantai Merah pink beach", es: "Playa rosa de Pantai Merah", de: "Pantai Merah Pink Beach" }, wikipedia: "File:Pantai_Pulau_Merah_Banyuwangi.jpg" },
        { name: { fr: "Parc national de Komodo", en: "Komodo National Park", es: "Parque nacional de Komodo", de: "Komodo-Nationalpark" }, wikipedia: "Komodo_National_Park" },
        { name: { fr: "Manta Point — plongée", en: "Manta Point — diving", es: "Manta Point — buceo", de: "Manta Point – Tauchen" }, wikipedia: "File:Komodo_Island_north_aerial.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Raja Ampat", en: "Raja Ampat", es: "Raja Ampat", de: "Raja Ampat" },
      region: { fr: "Papouasie occidentale", en: "West Papua", es: "Papúa Occidental", de: "West-Papua" },
      description: {
        fr: "Le meilleur site de plongée et de snorkeling du monde. 75 % des espèces de coraux de la planète vivent dans ces eaux cristallines entourées d'îles karstiques verdoyantes.", en: "One of the world's best diving and snorkelling spots. Seventy-five percent of the planet's coral species live in these crystal-clear waters surrounded by lush karst islands.", es: "Uno de los mejores lugares de buceo y snorkel del mundo. El 75 % de las especies de coral del planeta vive en estas aguas cristalinas rodeadas de islas kársticas exuberantes.", de: "Der beste Tauch- und Schnorchelplatz der Welt. 75 % der Korallenarten der Erde leben in diesen kristallklaren Gewässern, umgeben von grünen Karstinseln.",
      },
      wikipedia: "Raja_Ampat_Islands",
      tags: ["Plage", "Nature"],
      mustSee: [
        { name: { fr: "Wayag — vue aérienne sur les îles karstiques", en: "Wayag — aerial view over the karst islands", es: "Wayag — vista aérea de las islas kársticas", de: "Wayag – Luftaufnahme von Karstinseln" }, wikipedia: "File:Wayag_Island,_Raja_Ampat_(14280693998).jpg" },
        { name: { fr: "Pianemo — belvédère iconique", en: "Pianemo — iconic viewpoint", es: "Pianemo — mirador icónico", de: "Pianemo – ikonischer Aussichtspunkt" }, wikipedia: "File:Raja Ampat, West Papua, Indonesia.jpg" },
        { name: { fr: "Snorkeling à Arborek", en: "Snorkelling at Arborek", es: "Snorkel en Arborek", de: "Schnorcheln in Arborek" }, wikipedia: "Raja_Ampat_Islands" },
        { name: { fr: "Blue Water Mangroves (kayak)", en: "Blue Water Mangroves (kayaking)", es: "Blue Water Mangroves (kayak)", de: "Blue Water Mangroves (Kajak)" }, wikipedia: "File:Pulau Piaynemo, Raja Ampat.jpg" },
      ],
    },
    {
      id: 5,
      name: { fr: "Lombok & Îles Gili", en: "Lombok & Gili Islands", es: "Lombok e islas Gili", de: "Lombok und Gili-Inseln" },
      region: { fr: "Nusa Tenggara Ouest", en: "West Nusa Tenggara", es: "Nusa Tenggara Occidental", de: "West-Nusa Tenggara" },
      description: {
        fr: "Lombok, moins touristique que Bali, avec le majestueux volcan Rinjani et les îles Gili — paradis sans voitures pour la plongée, le snorkeling et la fête.", en: "Lombok, less touristy than Bali, with the majestic Mount Rinjani and the Gili Islands, a car-free paradise for diving, snorkelling and nightlife.", es: "Lombok, menos turística que Bali, con el majestuoso volcán Rinjani y las islas Gili, un paraíso sin coches para el buceo, el snorkel y la fiesta.", de: "Lombok, weniger touristisch als Bali, mit dem majestätischen Vulkan Rinjani und den Gili-Inseln – autofreies Paradies zum Tauchen, Schnorcheln und Feiern.",
      },
      wikipedia: "Lombok",
      tags: ["Plage", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Trekking au Volcan Rinjani (3 726 m)", en: "Trekking Mount Rinjani (3,726 m)", es: "Trekking al volcán Rinjani (3726 m)", de: "Trekking zum Rinjani-Vulkan (3.726 m)" }, wikipedia: "Mount_Rinjani" },
        { name: { fr: "Gili Trawangan — plage & fête", en: "Gili Trawangan — beach & nightlife", es: "Gili Trawangan — playa y fiesta", de: "Gili Trawangan – Strand & Party" }, wikipedia: "File:Gili Trawangan (island), Beach restaurant at night, Indonesia.jpg" },
        { name: { fr: "Gili Meno — tortues marines", en: "Gili Meno — sea turtles", es: "Gili Meno — tortugas marinas", de: "Gili Meno – Meeresschildkröten" }, wikipedia: "File:Gili Islands, Brigantine, Bali Sea, Indonesia.jpg" },
        { name: { fr: "Plage de Selong Belanak", en: "Selong Belanak Beach", es: "Playa de Selong Belanak", de: "Seong Belanak Strand" }, wikipedia: "Lombok" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Indonésie est l'une des destinations les moins chères d'Asie. À Bali, les prix ont augmenté mais restent très accessibles. Java et les îles plus reculées sont encore moins chères.", en: "Indonesia is one of the cheapest destinations in Asia. Prices have risen in Bali, but it remains very affordable. Java and the more remote islands are even cheaper.", es: "Indonesia es uno de los destinos más baratos de Asia. En Bali, los precios han subido, pero sigue siendo muy accesible. Java y las islas más remotas son aún más económicas.", de: "Indonesien ist eines der günstigsten Reiseziele in Asien. Auf Bali sind die Preise gestiegen, sind aber immer noch sehr erschwinglich. Java und abgelegenere Inseln sind sogar noch günstiger.",
    },
    currency: "IDR (Rp)",
    exchangeRate: "~16 500 Rp = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Dortoir hostel", en: "Hostel dorm", es: "Dormitorio de hostal", de: "Schlafsaal im Hostel" }, price: "4–10 €", detail: { fr: "Bonne qualité à Bali et Yogyakarta", en: "Good quality in Bali and Yogyakarta", es: "Buena calidad en Bali y Yogyakarta", de: "Gute Qualität in Bali und Yogyakarta" } },
          { label: { fr: "Guesthouse familiale", en: "Family guesthouse", es: "Casa de huéspedes familiar", de: "Familiengästehaus" }, price: "10–25 €", detail: { fr: "Chambre privée avec ventilo ou clim", en: "Private room with fan or AC", es: "Habitación privada con ventilador o aire acondicionado", de: "Privatzimmer mit Ventilator oder Klimaanlage" } },
          { label: { fr: "Villa Bali avec piscine", en: "Bali villa with pool", es: "Villa en Bali con piscina", de: "Villa Bali mit Swimmingpool" }, price: "40–100 €", detail: { fr: "Pour 2 personnes — incroyable rapport Q/P", en: "For 2 people — incredible value for money", es: "Para 2 personas — una relación calidad-precio increíble", de: "Für 2 Personen – unglaubliches Q/P-Verhältnis" } },
          { label: { fr: "Resort confort", en: "Comfort resort", es: "Resort de gama media", de: "Komfort-Resort" }, price: "80–200 €", detail: { fr: "Piscine, spa, bord de mer", en: "Pool, spa, beachfront", es: "Piscina, spa, frente al mar", de: "Schwimmbad, Spa, Meer" } },
          { label: { fr: "Villa luxe (private pool)", en: "Luxury villa (private pool)", es: "Villa de lujo (piscina privada)", de: "Luxusvilla (privater Pool)" }, price: "200–600 €", detail: { fr: "Villas de rêve avec jardin tropical", en: "Dream villas with tropical gardens", es: "Villas de ensueño con jardín tropical", de: "Traumvillen mit tropischem Garten" } },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Nasi goreng / mie goreng (warung)", en: "Nasi goreng / mie goreng (warung)", es: "Nasi goreng / mie goreng (warung)", de: "Nasi Goreng / Mie Goreng (Warung)" }, price: "1–2 €", detail: { fr: "La street food de base — délicieuse", en: "Classic street food — delicious", es: "La comida callejera básica — deliciosa", de: "Einfaches Streetfood – köstlich" } },
          { label: { fr: "Gado gado / sate (marché)", en: "Gado gado / sate (market)", es: "Gado gado / satay (mercado)", de: "Gado Gado/Sate (Markt)" }, price: "1,50–3 €", detail: { fr: "Plats traditionnels savoureux", en: "Tasty traditional dishes", es: "Platos tradicionales sabrosos", de: "Leckere traditionelle Gerichte" } },
          { label: { fr: "Restaurant local (mid-range Bali)", en: "Local restaurant (mid-range Bali)", es: "Restaurante local (gama media en Bali)", de: "Lokales Restaurant (Mittelklasse-Bali)" }, price: "4–10 €", detail: { fr: "Bebek betutu, rendang, rijsttafel", en: "Bebek betutu, rendang, rijsttafel", es: "Bebek betutu, rendang, rijsttafel", de: "Bebek betutu, rendang, rijsttafel" } },
          { label: { fr: "Restaurant touristique (Seminyak)", en: "Tourist restaurant (Seminyak)", es: "Restaurante turístico (Seminyak)", de: "Touristenrestaurant (Seminyak)" }, price: "10–20 €", detail: { fr: "Cuisine internationale ou fusion", en: "International or fusion cuisine", es: "Cocina internacional o fusión", de: "Internationale oder Fusionsküche" } },
          { label: { fr: "Jus de fruits frais", en: "Fresh fruit juice", es: "Zumo de fruta fresca", de: "Frischer Fruchtsaft" }, price: "1–2 €", detail: { fr: "Mangue, papaye, ananas — frais !", en: "Mango, papaya, pineapple — fresh!", es: "¡Mango, papaya, piña — recién hechos!", de: "Mango, Papaya, Ananas – frisch!" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Ojek / Go-Jek (moto)", en: "Ojek / Go-Jek (motorbike)", es: "Ojek / Go-Jek (moto)", de: "Ojek / Go-Jek (Motorrad)" }, price: "0,50–2 €", detail: { fr: "Rapide et économique en ville", en: "Fast and affordable in cities", es: "Rápido y económico en la ciudad", de: "Schnell und günstig in der Stadt" } },
          { label: { fr: "Grab (voiture)", en: "Grab (car)", es: "Grab (coche)", de: "Schnapp dir (Auto)" }, price: "2–8 €", detail: { fr: "Pour les trajets plus longs ou en famille", en: "For longer trips or families", es: "Para trayectos más largos o en familia", de: "Für längere Reisen oder mit der Familie" } },
          { label: { fr: "Scooter en location", en: "Scooter rental", es: "Alquiler de scooter", de: "Rollerverleih" }, price: "4–8 €/j", detail: { fr: "Idéal à Bali, permis international recommandé", en: "Ideal in Bali, international licence recommended", es: "Ideal en Bali, se recomienda carnet internacional", de: "Ideal auf Bali, internationale Lizenz empfohlen" } },
          { label: { fr: "Bus DAMRI (aéroport)", en: "DAMRI bus (airport)", es: "Autobús DAMRI (aeropuerto)", de: "DAMRI-Bus (Flughafen)" }, price: "2–4 €", detail: { fr: "Depuis Bali, Jakarta, Yogyakarta", en: "From Bali, Jakarta, Yogyakarta", es: "Desde Bali, Yakarta, Yogyakarta", de: "Aus Bali, Jakarta, Yogyakarta" } },
          { label: { fr: "Vol intérieur (Lion Air, Citilink)", en: "Domestic flight (Lion Air, Citilink)", es: "Vuelo doméstico (Lion Air, Citilink)", de: "Inlandsflug (Lion Air, Citilink)" }, price: "20–60 €", detail: { fr: "Indispensable pour aller de Java à Bali", en: "Essential for getting from Java to Bali", es: "Indispensable para ir de Java a Bali", de: "Unverzichtbar, um von Java nach Bali zu gelangen" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Entrée Borobudur", en: "Borobudur entry", es: "Entrada a Borobudur", de: "Borobudur-Eingang" }, price: "25 € (étrangers)", detail: { fr: "Lever de soleil disponible (plus cher)", en: "Sunrise option available (more expensive)", es: "Opción de amanecer disponible (más cara)", de: "Sunrise verfügbar (teurer)" } },
          { label: { fr: "Cours de cuisine balinaise", en: "Balinese cooking class", es: "Clase de cocina balinesa", de: "Balinesischer Kochkurs" }, price: "20–40 €", detail: { fr: "Marché + cuisine + déjeuner inclus", en: "Market visit + cooking + lunch included", es: "Mercado + cocina + almuerzo incluido", de: "Markt + Kochen + Mittagessen inklusive" } },
          { label: { fr: "Rafting (Ayung River, Bali)", en: "Rafting (Ayung River, Bali)", es: "Rafting (río Ayung, Bali)", de: "Rafting (Ayung River, Bali)" }, price: "25–40 €", detail: { fr: "2h sur la rivière, transfert inclus", en: "2 hours on the river, transfers included", es: "2 horas en el río, traslado incluido", de: "2 Stunden auf dem Fluss, Transfer inklusive" } },
          { label: { fr: "Plongée (2 plongées + équip.)", en: "Diving (2 dives + gear)", es: "Buceo (2 inmersiones + equipo)", de: "Tauchen (2 Tauchgänge + Ausrüstung)" }, price: "40–70 €", detail: { fr: "Nusa Penida, Gili, Raja Ampat", en: "Nusa Penida, Gili, Raja Ampat", es: "Nusa Penida, Gili, Raja Ampat", de: "Nusa Penida, Gili, Raja Ampat" } },
          { label: { fr: "Cérémonie hindoue à Tanah Lot", en: "Hindu ceremony at Tanah Lot", es: "Ceremonia hindú en Tanah Lot", de: "Hinduistische Zeremonie in Tanah Lot" }, price: "Gratuit – 3 €", detail: { fr: "Entrée + sarong fourni", en: "Entry + sarong provided", es: "Entrada + sarong incluido", de: "Eintritt + Sarong vorhanden" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "20–40 €/j", desc: { fr: "Hostel + warungs + scooter partagé", en: "Hostel + warungs + shared scooter", es: "Hostal + warungs + scooter compartido", de: "Hostel + Warungs + geteilter Roller" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "60–110 €/j", desc: { fr: "Villa Bali + restos + activités", en: "Bali villa + restaurants + activities", es: "Villa en Bali + restaurantes + actividades", de: "Villa Bali + Restaurants + Aktivitäten" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "200 €/j+", desc: { fr: "Villa private pool + gastronomie + excursions privées", en: "Private-pool villa + fine dining + private excursions", es: "Villa con piscina privada + alta gastronomía + excursiones privadas", de: "Private Poolvilla + Gastronomie + private Ausflüge" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: {
        fr: "Bali — Ubud (3j) → Nusa Penida (2j) → Lombok (3j) → Gili (2j) → Yogyakarta (3j) → Borobudur (1j)", en: "Bali — Ubud (3d) → Nusa Penida (2d) → Lombok (3d) → Gili (2d) → Yogyakarta (3d) → Borobudur (1d)", es: "Bali — Ubud (3d) → Nusa Penida (2d) → Lombok (3d) → Gili (2d) → Yogyakarta (3d) → Borobudur (1d)", de: "Bali – Ubud (3 Tage) → Nusa Penida (2 Tage) → Lombok (3 Tage) → Gili (2 Tage) → Yogyakarta (3 Tage) → Borobudur (1 Tag)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 000 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bali", en: "Return flight Paris–Bali", es: "Vuelo ida y vuelta París–Bali", de: "Hin- und Rückflug Paris–Bali" }, amount: "450–700 €" },
            { label: { fr: "Ferries & vols intérieurs", en: "Ferries & domestic flights", es: "Ferris y vuelos domésticos", de: "Fähren und Inlandsflüge" }, amount: "60–100 €" },
            { label: { fr: "Hébergement (14 nuits)", en: "Accommodation (14 nights)", es: "Alojamiento (14 noches)", de: "Unterkunft (14 Nächte)" }, amount: "150–250 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bali", en: "Return flight Paris–Bali", es: "Vuelo ida y vuelta París–Bali", de: "Hin- und Rückflug Paris–Bali" }, amount: "600–900 €" },
            { label: { fr: "Ferries & vols intérieurs", en: "Ferries & domestic flights", es: "Ferris y vuelos domésticos", de: "Fähren und Inlandsflüge" }, amount: "100–180 €" },
            { label: { fr: "Hébergement villas (14 nuits)", en: "Villa accommodation (14 nights)", es: "Alojamiento en villas (14 noches)", de: "Villa-Unterkunft (14 Nächte)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "350–600 €" },
            { label: { fr: "Activités (plongée, rafting...)", en: "Activities (diving, rafting...)", es: "Actividades (buceo, rafting...)", de: "Aktivitäten (Tauchen, Rafting...)" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "5 000 € +",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Bali (business)", en: "Return flight Paris–Bali (business)", es: "Vuelo ida y vuelta París–Bali (business)", de: "Hin- und Rückflug Paris–Bali (Business Class)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Transferts privés", en: "Private transfers", es: "Traslados privados", de: "Privattransfers" }, amount: "200–400 €" },
            { label: { fr: "Villas private pool (14 nuits)", en: "Private-pool villas (14 nights)", es: "Villas con piscina privada (14 noches)", de: "Private Poolvillen (14 Nächte)" }, amount: "1 500–3 000 €" },
            { label: { fr: "Gastronomie & spa", en: "Fine dining & spa", es: "Alta gastronomía y spa", de: "Gastronomie & Spa" }, amount: "600–1 200 €" },
            { label: { fr: "Excursions privées & imprévus", en: "Private excursions & contingency", es: "Excursiones privadas e imprevistos", de: "Private Ausflüge und unvorhergesehene Ereignisse" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~13–14h avec escale (Singapour, Doha, Dubai)", en: "~13–14h with a layover (Singapore, Doha, Dubai)", es: "~13–14h con escala (Singapur, Doha, Dubái)", de: "ca. 13–14 Std. mit Zwischenstopp (Singapur, Doha, Dubai)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa à l'arrivée 30 jours (35 $) ou e-Visa en ligne", en: "30-day visa on arrival ($35) or online e-Visa", es: "Visado a la llegada de 30 días (35 $) o e-Visa en línea", de: "30-Tage-Visum bei Ankunft (35 $) oder E-Visum online" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Roupie indonésienne (Rp) — retrait DAB, peu de cartes acceptées", en: "Indonesian Rupiah (Rp) — ATM withdrawals recommended, cards not widely accepted", es: "Rupia indonesia (Rp) — se recomienda retirar en cajeros, pocas tarjetas aceptadas", de: "Indonesische Rupiah (Rp) – Abhebung am Geldautomaten, nur wenige Karten werden akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Indonésien (Bahasa) — anglais courant à Bali et sites touristiques", en: "Indonesian (Bahasa) — English widely spoken in Bali and tourist areas", es: "Indonesio (Bahasa) — inglés habitual en Bali y zonas turísticas", de: "Indonesisch (Bahasa) – fließendes Englisch auf Bali und an Sehenswürdigkeiten" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/F — 220V (même qu'en France)", en: "Type C/F — 220V (same as France)", es: "Tipo C/F — 220V (igual que en Francia)", de: "Typ C/F – 220 V (wie in Frankreich)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "SIM locale très bon marché (Telkomsel, XL)", en: "Very cheap local SIM (Telkomsel, XL)", es: "SIM local muy barata (Telkomsel, XL)", de: "Sehr günstige lokale SIM-Karte (Telkomsel, XL)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable", en: "Not drinkable — bottled water is essential", es: "No potable — el agua embotellada es indispensable", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccins hépatite A/B, typhoïde recommandés, anti-moustiques (dengue)", en: "Hepatitis A/B and typhoid vaccines recommended; mosquito repellent advised (dengue)", es: "Se recomiendan vacunas de hepatitis A/B y fiebre tifoidea, repelente de mosquitos (dengue)", de: "Empfohlene Impfungen gegen Hepatitis A/B, Typhus und Mückenschutz (Dengue)." } },
  ],
};
