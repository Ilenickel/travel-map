export const SEYCHELLES = {
  code: "SYC",
  numericId: 690,
  name: { fr: "Seychelles", en: "Seychelles", es: "Seychelles", de: "Seychellen" },
  emoji: "🇸🇨",
  capital: { fr: "Victoria", en: "Victoria", es: "Victoria", de: "Victoria" },
  language: { fr: "Créole seychellois, Anglais, Français", en: "Seychellois Creole, English, French", es: "Criollo seychellense, inglés, francés", de: "Seychellen-Kreolisch, Englisch, Französisch" },
  currency: { fr: "Roupie seychelloise (SCR)", en: "Seychellois rupee (SCR)", es: "Rupia seychellense (SCR)", de: "Seychellen-Rupie (SCR)" },
  timezone: "UTC+4",
  filter: {
    budgetMin: 150, budgetMid: 230,
    tripMin: 3000, tripMid: 7000,
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
    ville: 0,
    plage: 3,
    plongee: 2,
  },
  description: {
    fr: "Les Seychelles sont l'archipel le plus exclusif de l'océan Indien : 115 îles granitiques et coralliennes aux plages de granit rose exceptionnelles (Anse Source d'Argent classée plus belle plage du monde), eaux turquoise d'une clarté absolue, tortues géantes d'Aldabra (UNESCO, plus grande population mondiale), et la valée de Mai (UNESCO) avec le coco de mer — le fruit le plus grand du règne végétal.", en: "Seychelles is the most exclusive archipelago in the Indian Ocean: 115 granite and coral islands with exceptional pink granite beaches (Anse Source d'Argent, ranked the most beautiful beach in the world), turquoise waters of absolute clarity, giant Aldabra tortoises (UNESCO, the world's largest population), and the Vallée de Mai (UNESCO) with the coco de mer — the largest fruit in the plant kingdom.", es: "Seychelles es el archipiélago más exclusivo del océano Índico: 115 islas graníticas y coralinas con playas de granito rosa excepcionales (Anse Source d'Argent, clasificada como la playa más bella del mundo), aguas turquesas de una claridad absoluta, tortugas gigantes de Aldabra (UNESCO, la mayor población mundial), y el valle de Mai (UNESCO) con el coco de mer, el fruto más grande del reino vegetal.", de: "Die Seychellen sind der exklusivste Archipel im Indischen Ozean: 115 Granit- und Koralleninseln mit außergewöhnlichen rosa Granitstränden (Anse Source d'Argent gilt als der schönste Strand der Welt), absolut klares türkisfarbenes Wasser, Riesenschildkröten von Aldabra (UNESCO, größte Population der Welt) und das Vallée de Mai (UNESCO) mit der Coco de Mer – der größten Frucht im Pflanzenreich.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Mai", en: "April – May", es: "Abril – Mayo", de: "April – Mai" },
      label: { fr: "Transition calme", en: "Calm transition", es: "Transición tranquila", de: "Ruhiger Übergang" },
      color: "#22c55e",
      description: {
        fr: "Mers calmes, peu de vent, températures agréables 26–30°C, plongée excellente. Meilleure visibilité sous-marine de l'année.", en: "Calm seas, little wind, pleasant temperatures 26–30°C, excellent diving. The year's best underwater visibility.", es: "Mares en calma, poco viento, temperaturas agradables de 26–30 °C, buceo excelente. Mejor visibilidad submarina del año.", de: "Ruhige See, wenig Wind, angenehme Temperaturen 26–30°C, ausgezeichnetes Tauchen. Beste Unterwassersicht des Jahres.",
      },
      icon: "🌊",
    },
    {
      months: { fr: "Octobre – Novembre", en: "October – November", es: "Octubre – Noviembre", de: "Oktober – November" },
      label: { fr: "Transition calme (bis)", en: "Calm transition (again)", es: "Transición tranquila (bis)", de: "Ruhiger Übergang (Wiederholung)" },
      color: "#22c55e",
      description: {
        fr: "Autre période idéale : calme entre les deux moussons. Mer lisse, ciel bleu, températures parfaites.", en: "Another ideal window: calm between the two monsoons. Smooth sea, blue sky, perfect temperatures.", es: "Otra época ideal: calma entre los dos monzones. Mar liso, cielo azul, temperaturas perfectas.", de: "Eine weitere ideale Zeit: Ruhe zwischen den beiden Monsunen. Glattes Meer, blauer Himmel, perfekte Temperaturen.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto", de: "Juni – August" },
      label: { fr: "Mousson sud-est", en: "South-east monsoon", es: "Monzón del sureste", de: "Südostmonsun" },
      color: "#f59e0b",
      description: {
        fr: "Vents et houle sur la côte ouest de Mahé et Praslin. Certaines plages moins accessibles. Praslin et La Digue plus exposées. Températures restent chaudes.", en: "Winds and swell on the west coast of Mahé and Praslin. Some beaches less accessible. Praslin and La Digue more exposed. Temperatures remain warm.", es: "Vientos y oleaje en la costa oeste de Mahé y Praslin. Algunas playas menos accesibles. Praslin y La Digue más expuestas. Las temperaturas siguen siendo cálidas.", de: "Winde und Wellengang an der Westküste von Mahé und Praslin. Einige weniger zugängliche Strände. Praslin und La Digue sind exponierter. Die Temperaturen bleiben warm.",
      },
      icon: "💨",
    },
  ],

  weatherCities: [
    {
      id: "mahe",
      name: "Mahé (Victoria)",
      region: { fr: "Île principale", en: "Main island", es: "Isla principal", de: "Hauptinsel" },
      data: [
        { month: "Jan", temp: 28, rain: 380, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 280, icon: "🌧️" },
        { month: "Mar", temp: 29, rain: 150, icon: "🌧️" },
        { month: "Avr", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Jul", temp: 26, rain: 90,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 80,  icon: "☀️" },
        { month: "Sep", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 310, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "La Digue — Anse Source d'Argent", en: "La Digue — Anse Source d'Argent", es: "La Digue — Anse Source d'Argent", de: "La Digue – Anse Source d’Argent" },
      region: { fr: "Îles Intérieures", en: "Inner Islands", es: "Islas Interiores", de: "Innere Inseln" },
      description: {
        fr: "La Digue est l'île la plus pittoresque des Seychelles : Anse Source d'Argent est classée l'une des plus belles plages du monde — rochers de granit rose sculptés par le vent et la mer, eaux turquoise peu profondes, cocotiers. On se déplace uniquement à vélo ou en oxycart. Une île préservée hors du temps.", en: "La Digue is the most picturesque island in Seychelles: Anse Source d'Argent is ranked one of the most beautiful beaches in the world — pink granite boulders sculpted by wind and sea, shallow turquoise waters, coconut palms. You get around only by bike or ox cart. A preserved, timeless island.", es: "La Digue es la isla más pintoresca de Seychelles: Anse Source d'Argent está clasificada como una de las playas más bellas del mundo, con rocas de granito rosa esculpidas por el viento y el mar, aguas turquesas poco profundas y cocoteros. Solo se puede recorrer en bicicleta o carro de bueyes. Una isla preservada fuera del tiempo.", de: "La Digue ist die malerischste Insel der Seychellen: Anse Source d'Argent gilt als einer der schönsten Strände der Welt – rosafarbene Granitfelsen, die vom Wind und dem Meer geformt wurden, seichtes türkisfarbenes Wasser, Kokospalmen. Wir reisen nur mit dem Fahrrad oder Oxycart. Eine über die Zeit hinaus erhaltene Insel.",
      },
      wikipedia: "File:Grand Anse-La Digue-Seychellen.jpg",
      tags: ["Plage", "Nature", "Aventure"],
      mustSee: [
        { name: { fr: "Anse Source d'Argent — la plus photographiée du monde", en: "Anse Source d'Argent — the most photographed beach in the world", es: "Anse Source d'Argent — la más fotografiada del mundo", de: "Anse Source d’Argent – der meistfotografierte der Welt" }, wikipedia: "File:Anse Source d'Argent 3-La Digue.jpg" },
        { name: { fr: "Grand Anse La Digue — plage sauvage côté vent", en: "Grand Anse La Digue — wild beach on the windward side", es: "Grand Anse La Digue — playa salvaje del lado del viento", de: "Grand Anse La Digue – wilder Strand auf der Luvseite" }, wikipedia: "File:Seychellen la digue nil daigle.jpg" },
        { name: { fr: "Réserve veuve de paradis (espèce endémique)", en: "Seychelles paradise flycatcher reserve (endemic species)", es: "Reserva del colimbo del paraíso (especie endémica)", de: "Widow of Paradise-Reservat (endemische Arten)" }, wikipedia: "Seychelles_paradise_flycatcher" },
        { name: { fr: "Tour de l'île à vélo (15km)", en: "Cycling round the island (15km)", es: "Vuelta a la isla en bicicleta (15 km)", de: "Inselrundfahrt mit dem Fahrrad (15 km)" }, wikipedia: "La_Digue" },
      ],
    },
    {
      id: 2,
      name: { fr: "Praslin — Vallée de Mai", en: "Praslin — Vallée de Mai", es: "Praslin — Vallée de Mai", de: "Praslin – Vallée de Mai" },
      region: { fr: "Îles Intérieures", en: "Inner Islands", es: "Islas Interiores", de: "Innere Inseln" },
      description: {
        fr: "Praslin abrite la Vallée de Mai (UNESCO), la plus petite zone du patrimoine mondial : une forêt de cocotiers de mer (coco de mer) dont le fruit est le plus grand du règne végétal (25kg). Le black parrot endémique niche ici. Anse Lazio, souvent élue meilleure plage du monde, est à 20 minutes. Les eaux au nord de l'île sont idéales pour la plongée.", en: "Praslin is home to the Vallée de Mai (UNESCO), the smallest World Heritage site: a forest of coco de mer palms whose fruit is the largest in the plant kingdom (25kg). The endemic black parrot nests here. Anse Lazio, often voted the world's best beach, is 20 minutes away. The waters north of the island are ideal for diving.", es: "Praslin alberga el Vallée de Mai (UNESCO), el sitio de Patrimonio de la Humanidad más pequeño: un bosque de palmeras coco de mer cuyo fruto es el más grande del reino vegetal (25 kg). Aquí anida el loro negro endémico. Anse Lazio, a menudo votada la mejor playa del mundo, está a 20 minutos. Las aguas al norte de la isla son ideales para el buceo.", de: "Auf Praslin befindet sich das Vallée de Mai (UNESCO), das kleinste Weltkulturerbe: ein Wald aus Kokospalmen (Coco de Mer), deren Früchte mit 25 kg die größten im Pflanzenreich sind. Der endemische schwarze Papagei nistet hier. Anse Lazio, oft zum besten Strand der Welt gewählt, ist 20 Minuten entfernt. Die Gewässer im Norden der Insel eignen sich ideal zum Tauchen.",
      },
      wikipedia: "Praslin",
      tags: ["UNESCO", "Nature", "Plage"],
      mustSee: [
        { name: { fr: "Vallée de Mai (UNESCO) — forêt de coco de mer (fruit 25kg)", en: "Vallée de Mai (UNESCO) — coco de mer forest (25kg fruit)", es: "Vallée de Mai (UNESCO) — bosque de coco de mer (fruto de 25 kg)", de: "Vallée de Mai (UNESCO) – Coco de Mer-Wald (Früchte 25 kg)" }, wikipedia: "Vallée_de_Mai" },
        { name: { fr: "Anse Lazio — souvent élue plus belle plage du monde", en: "Anse Lazio — often voted the world's most beautiful beach", es: "Anse Lazio — a menudo votada la playa más bella del mundo", de: "Anse Lazio – oft zum schönsten Strand der Welt gewählt" }, wikipedia: "Anse_Lazio" },
        { name: { fr: "Black parrot (perroquet endémique) en vol", en: "Seychelles black parrot (endemic) in flight", es: "Loro negro de Seychelles (endémico) en vuelo", de: "Schwarzer Papagei (endemischer Papagei) im Flug" }, wikipedia: "Seychelles_black_parrot" },
        { name: { fr: "Plongée Anse Boudin — raies manta et tortues", en: "Diving at Anse Boudin — manta rays and turtles", es: "Buceo en Anse Boudin — rayas manta y tortugas", de: "Tauchen Anse Boudin – Mantarochen und Schildkröten" }, wikipedia: "Praslin" },
      ],
    },
    {
      id: 3,
      name: { fr: "Mahé — Capital et plongée", en: "Mahé — Capital and diving", es: "Mahé — Capital y buceo", de: "Mahé – Hauptstadt und Tauchen" },
      region: { fr: "Île principale", en: "Main island", es: "Isla principal", de: "Hauptinsel" },
      description: {
        fr: "Mahé, la plus grande île, concentre les infrastructures : Victoria la capitale (la plus petite du monde), les marchés de Victoria aux épices et artisanat créole, les jardins botaniques avec tortues géantes géantes en liberté, et la plongée autour des îles voisines. Les plages de Beau Vallon (nord) sont les plus animées des Seychelles.", en: "Mahé, the largest island, concentrates the country's infrastructure: Victoria the capital (the smallest in the world), its markets full of spices and Creole crafts, botanical gardens with free-roaming giant tortoises, and diving around the neighbouring islands. Beau Vallon beach (north) is the liveliest in Seychelles.", es: "Mahé, la isla más grande, concentra las infraestructuras: Victoria, la capital (la más pequeña del mundo), sus mercados llenos de especias y artesanía criolla, jardines botánicos con tortugas gigantes en libertad, y buceo alrededor de las islas vecinas. La playa de Beau Vallon (norte) es la más animada de Seychelles.", de: "Mahé, die größte Insel, konzentriert die Infrastrukturen: Victoria, die Hauptstadt (die kleinste der Welt), die Victoria-Märkte mit Gewürzen und kreolischem Kunsthandwerk, die botanischen Gärten mit riesigen Riesenschildkröten in freier Wildbahn und Tauchmöglichkeiten rund um die Nachbarinseln. Die Strände von Beau Vallon (Norden) sind die belebtesten der Seychellen.",
      },
      wikipedia: "File:Wind turbines - wind energy - Mahe - Seychelles.jpg",
      tags: ["Ville", "Plage", "Shopping", "Safari"],
      mustSee: [
        { name: { fr: "Marché de Victoria — épices, artisanat créole", en: "Victoria Market — spices, Creole crafts", es: "Mercado de Victoria — especias, artesanía criolla", de: "Victoria Market – Gewürze, kreolisches Kunsthandwerk" }, wikipedia: "File:Big Ben Clock Tower - Victoria - Mahe - Seychelles - 01.jpg" },
        { name: { fr: "Jardins botaniques — tortues géantes Aldabra en semi-liberté", en: "Botanical gardens — semi-wild giant Aldabra tortoises", es: "Jardines botánicos — tortugas gigantes de Aldabra semilibres", de: "Botanische Gärten – Aldabra-Riesenschildkröten in Halbfreiheit" }, wikipedia: "File:Green_turtle_Chelonia_mydas_is_basking_on_Punaluu_Beach_Big_Island_of_Hawaii.jpg" },
        { name: { fr: "Plongée autour des îlots (requins dormeurs, raies)", en: "Diving around the islets (nurse sharks, rays)", es: "Buceo alrededor de los islotes (tiburones nodriza, rayas)", de: "Tauchen rund um die Inseln (schlafende Haie, Rochen)" }, wikipedia: "File:Heterodontus francisci.jpg" },
        { name: { fr: "Plage Beau Vallon — la plus fréquentée, couchers de soleil", en: "Beau Vallon beach — the busiest, with beautiful sunsets", es: "Playa Beau Vallon — la más concurrida, atardeceres", de: "Beau Vallon Beach – am belebtesten, Sonnenuntergänge" }, wikipedia: "File:2006-06-23_13-34-02_Seychelles_Beau_Vallon_Beau_Vallon.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Les Seychelles sont l'une des destinations les plus chères d'Afrique et de l'océan Indien. Un voyage abordable est néanmoins possible en restant sur les trois îles principales (Mahé, Praslin, La Digue), en évitant les hôtels de luxe, et en cuisinant partiellement soi-même.", en: "Seychelles is one of the most expensive destinations in Africa and the Indian Ocean. An affordable trip is nonetheless possible by staying on the three main islands (Mahé, Praslin, La Digue), avoiding luxury hotels, and self-catering some meals.", es: "Seychelles es uno de los destinos más caros de África y del océano Índico. Un viaje asequible es no obstante posible quedándose en las tres islas principales (Mahé, Praslin, La Digue), evitando hoteles de lujo, y cocinando parcialmente por cuenta propia.", de: "Die Seychellen sind eines der teuersten Reiseziele in Afrika und im Indischen Ozean. Eine erschwingliche Reise ist dennoch möglich, wenn man auf den drei Hauptinseln (Mahé, Praslin, La Digue) übernachtet, Luxushotels meidet und teilweise selbst kocht.",
    },
    currency: "SCR",
    exchangeRate: "1€ ≈ 15–16 SCR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / chambre chez l'habitant", en: "Guesthouse / room with a local host", es: "Guesthouse / habitación con anfitrión local", de: "Gästehaus / Gastfamilie" }, price: "80–130 €", detail: { fr: "Self-catering, petit chalet", en: "Self-catering, small chalet", es: "Autoservicio, pequeño chalet", de: "Selbstversorger, kleines Chalet" } },
          { label: { fr: "Hôtel 3★ (Mahé, Praslin, La Digue)", en: "3★ hotel (Mahé, Praslin, La Digue)", es: "Hotel 3★ (Mahé, Praslin, La Digue)", de: "Hotel 3★ (Mahé, Praslin, La Digue)" }, price: "150–250 €", detail: { fr: "Vue mer, piscine, petit-déj", en: "Sea view, pool, breakfast", es: "Vista al mar, piscina, desayuno", de: "Meerblick, Schwimmbad, Frühstück" } },
          { label: { fr: "Resort luxe (Banyan Tree, Six Senses)", en: "Luxury resort (Banyan Tree, Six Senses)", es: "Resort de lujo (Banyan Tree, Six Senses)", de: "Luxusresort (Banyan Tree, Six Senses)" }, price: "600–2 000 €", detail: { fr: "Bungalow sur l'eau, all-inclusive", en: "Overwater bungalow, all-inclusive", es: "Bungaló sobre el agua, todo incluido", de: "Überwasserbungalow, All-Inclusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Rougaille de poisson dans un restaurant local", en: "Fish rougaille at a local restaurant", es: "Rougaille de pescado en un restaurante local", de: "Fischrougaille in einem lokalen Restaurant" }, price: "10–20 €", detail: { fr: "Cuisine créole typique", en: "Typical Creole cuisine", es: "Cocina criolla típica", de: "Typische kreolische Küche" } },
          { label: { fr: "Restaurant mid-range (Mahé, Praslin)", en: "Mid-range restaurant (Mahé, Praslin)", es: "Restaurante de gama media (Mahé, Praslin)", de: "Mittelklasse-Restaurant (Mahé, Praslin)" }, price: "25–45 €", detail: { fr: "Fruits de mer, langouste", en: "Seafood, lobster", es: "Marisco, langosta", de: "Meeresfrüchte, Hummer" } },
          { label: { fr: "Supermarché / self-catering", en: "Supermarket / self-catering", es: "Supermercado / autoservicio", de: "Supermarkt/Selbstversorger" }, price: "15–25 €/j", detail: { fr: "Option économique guesthouse", en: "Budget option for guesthouses", es: "Opción económica en guesthouse", de: "Günstige Pensionsoption" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Ferry Mahé–Praslin (Cat Rose) ou Praslin–La Digue", en: "Ferry Mahé–Praslin (Cat Rose) or Praslin–La Digue", es: "Ferry Mahé–Praslin (Cat Rose) o Praslin–La Digue", de: "Fähre Mahé–Praslin (Cat Rose) oder Praslin–La Digue" }, price: "30–60 €", detail: { fr: "A/R, 45–60 min", en: "Return trip, 45–60 min", es: "Ida y vuelta, 45–60 min", de: "Hin- und Rückfahrt, 45–60 Minuten" } },
          { label: { fr: "Bus local Mahé (réseau public)", en: "Local bus in Mahé (public network)", es: "Autobús local en Mahé (red pública)", de: "Lokalbus Mahé (öffentliches Netz)" }, price: "0,30–1 €", detail: { fr: "Limité mais existant", en: "Limited but available", es: "Limitado pero disponible", de: "Begrenzt, aber vorhanden" } },
          { label: { fr: "Location de vélo La Digue", en: "Bike rental in La Digue", es: "Alquiler de bicicleta en La Digue", de: "Fahrradverleih La Digue" }, price: "8–15 €/j", detail: { fr: "Transport idéal sur l'île", en: "Ideal transport on the island", es: "Transporte ideal en la isla", de: "Idealer Transport auf der Insel" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Plongée (2 plongées, équipement)", en: "Diving (2 dives, equipment)", es: "Buceo (2 inmersiones, equipo)", de: "Tauchen (2 Tauchgänge, Ausrüstung)" }, price: "100–150 €", detail: { fr: "Richesse marine exceptionnelle", en: "Exceptional marine life", es: "Riqueza marina excepcional", de: "Außergewöhnlicher Meeresreichtum" } },
          { label: { fr: "Entrée Vallée de Mai Praslin (UNESCO)", en: "Vallée de Mai entry, Praslin (UNESCO)", es: "Entrada al Vallée de Mai, Praslin (UNESCO)", de: "Eingang zum Vallée de Mai Praslin (UNESCO)" }, price: "25 €", detail: { fr: "Matinée pour les oiseaux", en: "Morning best for birds", es: "Mañana ideal para las aves", de: "Morgen für die Vögel" } },
          { label: { fr: "Excursion snorkeling en catamaran", en: "Snorkelling excursion by catamaran", es: "Excursión de esnórquel en catamarán", de: "Katamaran-Schnorchelausflug" }, price: "60–100 €", detail: { fr: "Journée, repas inclus", en: "Full day, meal included", es: "Día completo, comida incluida", de: "Tag, Mahlzeiten inklusive" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "150–220 €/j", desc: { fr: "Guesthouse + cuisine locale + ferry + vélo", en: "Guesthouse + local food + ferry + bike", es: "Guesthouse + cocina local + ferry + bicicleta", de: "Gästehaus + lokale Küche + Fähre + Fahrrad" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "350–550 €/j", desc: { fr: "Hôtel 3★ + restaurants + plongée + excursions", en: "3★ hotel + restaurants + diving + excursions", es: "Hotel 3★ + restaurantes + buceo + excursiones", de: "3★ Hotel + Restaurants + Tauchen + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "800 €+/j", desc: { fr: "Resort 5★ + tout-inclus + spa + Aldabra", en: "5★ resort + all-inclusive + spa + Aldabra", es: "Resort 5★ + todo incluido + spa + Aldabra", de: "Resort 5★ + All-Inclusive + Spa + Aldabra" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days", es: "12 días", de: "12 Tage" },
      route: { fr: "Mahé (4j) → Praslin (4j) → La Digue (4j)", en: "Mahé (4d) → Praslin (4d) → La Digue (4d)", es: "Mahé (4d) → Praslin (4d) → La Digue (4d)", de: "Mahé (4 Tage) → Praslin (4 Tage) → La Digue (4 Tage)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "3 000 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mahé", en: "Return flight Paris–Mahé", es: "Vuelo ida y vuelta Madrid–Mahé", de: "Hin- und Rückflug Paris–Mahé" }, amount: "700–1 200 €" },
            { label: { fr: "Guesthouses (12 nuits)", en: "Guesthouses (12 nights)", es: "Guesthouses (12 noches)", de: "Gästehäuser (12 Nächte)" }, amount: "900–1 600 €" },
            { label: { fr: "Ferrys inter-îles", en: "Inter-island ferries", es: "Ferris interinsulares", de: "Fähren zwischen den Inseln" }, amount: "150–300 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "500–800 €" },
            { label: { fr: "Activités & plongée", en: "Activities & diving", es: "Actividades y buceo", de: "Aktivitäten und Tauchen" }, amount: "300–600 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "6 000 – 10 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Mahé (Business ou nuit)", en: "Return flight Paris–Mahé (Business or overnight)", es: "Vuelo ida y vuelta Madrid–Mahé (Business o nocturno)", de: "Hin- und Rückflug Paris–Mahé (Geschäfts- oder Nachtflug)" }, amount: "800–1 500 €" },
            { label: { fr: "Hôtels 3★ (12 nuits)", en: "3★ hotels (12 nights)", es: "Hoteles 3★ (12 noches)", de: "3★ Hotels (12 Nächte)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Ferrys + transfers", en: "Ferries + transfers", es: "Ferris + traslados", de: "Fähren + Transfers" }, amount: "300–500 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "900–1 500 €" },
            { label: { fr: "Plongée & excursions", en: "Diving & excursions", es: "Buceo y excursiones", de: "Tauchen & Ausflüge" }, amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~10h (Air Seychelles direct, Turkish via Istanbul, Emirates via Dubaï, Air France via escale)", en: "~10h (Air Seychelles direct, Turkish via Istanbul, Emirates via Dubai, Air France with a layover)", es: "~11h (Air Seychelles directo, Turkish vía Estambul, Emirates vía Dubái)", de: "ca. 10 Std. (Air Seychelles direkt, Turkish über Istanbul, Emirates über Dubai, Air France mit Zwischenstopp)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Pas de visa requis — permis de séjour à l'arrivée (30 jours renouvelable). Billet retour obligatoire.", en: "No visa required — residence permit on arrival (30 days, renewable). Return ticket mandatory.", es: "Sin visado necesario — permiso de residencia a la llegada (30 días renovable). Billete de vuelta obligatorio.", de: "Kein Visum erforderlich – Aufenthaltserlaubnis bei der Ankunft (30 Tage verlängerbar). Rückflugticket erforderlich." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Roupie seychelloise (SCR). Euros et dollars acceptés partout. Carte bancaire courante.", en: "Seychellois rupee (SCR). Euros and dollars accepted everywhere. Bank cards common.", es: "Rupia seychellense (SCR). Euros y dólares aceptados en todas partes. Tarjeta bancaria habitual.", de: "Seychellen-Rupie (SCR). Euro und Dollar werden überall akzeptiert. Aktuelle Bankkarte." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Créole seychellois (vie quotidienne) + Anglais et Français (officiels). Communication très facile.", en: "Seychellois Creole (daily life) + English and French (official). Communication is very easy.", es: "Criollo seychellense (vida cotidiana) + inglés y francés (oficiales). Comunicación muy fácil.", de: "Seychellen-Kreolisch (Alltagsleben) + Englisch und Französisch (Beamte). Sehr einfache Kommunikation." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type G (britannique) — 240V. Adaptateur recommandé.", en: "Type G (British) — 240V. Adapter recommended.", es: "Tipo G (británico) — 240V. Se recomienda adaptador.", de: "Typ G (britisch) – 240 V. Adapter empfohlen." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas de vaccin obligatoire. Pas de paludisme. Précautions alimentaires standard.", en: "No mandatory vaccines. No malaria. Standard food precautions.", es: "Ninguna vacuna obligatoria. Sin malaria. Precauciones alimentarias estándar.", de: "Keine Impfpflicht. Keine Malaria. Standardmäßige Ernährungsvorkehrungen." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Potable sur Mahé. Eau en bouteille recommandée pour les îles extérieures.", en: "Drinkable on Mahé. Bottled water recommended for the outer islands.", es: "Potable en Mahé. Se recomienda agua embotellada para las islas exteriores.", de: "Trinkbar auf Mahé. Für die Außeninseln wird Wasser in Flaschen empfohlen." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red", de: "Mobilfunknetz" }, value: { fr: "Excellente couverture sur Mahé, Praslin et La Digue. Îles extérieures : réseau satellite uniquement.", en: "Excellent coverage on Mahé, Praslin and La Digue. Outer islands: satellite network only.", es: "Excelente cobertura en Mahé, Praslin y La Digue. Islas exteriores: solo red satelital.", de: "Hervorragende Abdeckung für Mahé, Praslin und La Digue. Äußere Inseln: Nur Satellitennetzwerk." } },
  ],
};
