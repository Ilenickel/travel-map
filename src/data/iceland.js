export const ICELAND = {
  code: "ISL",
  numericId: 352,
  name: { fr: "Islande", en: "Iceland", es: "Islandia", de: "Island" },
  emoji: "🇮🇸",
  capital: { fr: "Reykjavik", en: "Reykjavik", es: "Reikiavik", de: "Reykjavík" },
  language: { fr: "Islandais", en: "Icelandic", es: "Islandés", de: "Isländisch" },
  currency: { fr: "Couronne islandaise (kr)", en: "Icelandic króna (kr)", es: "Corona islandesa (kr)", de: "Isländische Krone (kr)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 80, budgetMid: 160,
    tripMin: 2200, tripMid: 4000,
  },
  criteria: {
    unesco: 2,
    nature: 3,
    randonnee: 3,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 1,
    plongee: 2,
  },
  description: {
    fr: "L'Islande est une destination de bout du monde, terra d'aurores boréales, de geysers, de volcans actifs, de glaciers immenses et de cascades spectaculaires. Le pays du feu et de la glace, avec Reykjavik la capitale la plus nordique du monde, offre des paysages d'une beauté surnaturelle.", en: "Iceland is an end-of-the-world destination, a land of northern lights, geysers, active volcanoes, immense glaciers and spectacular waterfalls. The land of fire and ice, with Reykjavik as the world's northernmost capital, offers landscapes of almost supernatural beauty.", es: "Islandia es un destino de fin del mundo, tierra de auroras boreales, géiseres, volcanes activos, glaciares inmensos y cascadas espectaculares. El país del fuego y el hielo, con Reikiavik como la capital más septentrional del mundo, ofrece paisajes de una belleza casi sobrenatural.", de: "Island ist ein Reiseziel am Ende der Welt, Heimat der Nordlichter, Geysire, aktiver Vulkane, riesiger Gletscher und spektakulärer Wasserfälle. Das Land aus Feuer und Eis, mit Reykjavik als nördlichster Hauptstadt der Welt, bietet Landschaften von übernatürlicher Schönheit.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August", es: "Junio – Agosto", de: "Juni – August" },
      label: { fr: "Soleil de minuit", en: "Midnight sun", es: "Sol de medianoche", de: "Mitternachtssonne" },
      color: "#22c55e",
      description: {
        fr: "Jours quasi sans nuit (soleil de minuit), météo la plus clémente, routes accessibles dont les Highlands. Cascades en plein débit.", en: "Days with almost no night (midnight sun), the mildest weather, and accessible roads including the Highlands. Waterfalls are at full flow.", es: "Días casi sin noche (sol de medianoche), el clima más benigno, carreteras accesibles incluidas las Highlands. Cascadas a pleno caudal.", de: "Fast nachtlose Tage (Mitternachtssonne), das mildeste Wetter, zugängliche Straßen einschließlich der Highlands. Wasserfälle in vollem Gange.",
      },
      icon: "🌞",
    },
    {
      months: { fr: "Septembre – Novembre", en: "September – November", es: "Septiembre – Noviembre", de: "September – November" },
      label: { fr: "Aurores boréales", en: "Northern lights", es: "Auroras boreales", de: "Nordlicht" },
      color: "#a78bfa",
      description: {
        fr: "Premières aurores boréales visibles, températures encore correctes, couleurs automnales spectaculaires. Moins de foule.", en: "The first northern lights become visible, temperatures are still reasonable, and autumn colours are spectacular. Fewer crowds.", es: "Primeras auroras boreales visibles, temperaturas todavía razonables, colores otoñales espectaculares. Menos afluencia.", de: "Erste sichtbare Nordlichter, noch angenehme Temperaturen, spektakuläre Herbstfarben. Weniger Menschenmassen.",
      },
      icon: "🌌",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Hiver & Aurores", en: "Winter & Northern lights", es: "Invierno y auroras", de: "Winter & Polarlichter" },
      color: "#93c5fd",
      description: {
        fr: "Saison des aurores boréales par excellence. Nuits longues, paysages enneigés féeriques, lacs glacés. Prévoir équipement chaud.", en: "Prime northern-lights season. Long nights, magical snowy landscapes and frozen lakes. Bring proper cold-weather gear.", es: "Temporada por excelencia de las auroras boreales. Noches largas, paisajes nevados de cuento, lagos helados. Llevar equipo de abrigo.", de: "Nordlichtsaison schlechthin. Lange Nächte, zauberhafte Schneelandschaften, eisige Seen. Bringen Sie warme Ausrüstung mit.",
      },
      icon: "❄️",
    },
  ],

  weatherCities: [
    {
      id: "reykjavik",
      name: "Reykjavik",
      region: { fr: "Région capitale", en: "Capital Region", es: "Región capital", de: "Hauptstadtregion" },
      data: [
        { month: "Jan", temp: 0,  rain: 70,  icon: "❄️" },
        { month: "Fév", temp: 0,  rain: 80,  icon: "❄️" },
        { month: "Mar", temp: 1,  rain: 75,  icon: "❄️" },
        { month: "Avr", temp: 3,  rain: 50,  icon: "❄️" },
        { month: "Mai", temp: 7,  rain: 50,  icon: "⛅" },
        { month: "Jun", temp: 10, rain: 40,  icon: "⛅" },
        { month: "Jul", temp: 12, rain: 50,  icon: "⛅" },
        { month: "Aoû", temp: 12, rain: 60,  icon: "⛅" },
        { month: "Sep", temp: 9,  rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 5,  rain: 65,  icon: "❄️" },
        { month: "Nov", temp: 2,  rain: 70,  icon: "❄️" },
        { month: "Déc", temp: 1,  rain: 85,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Cercle d'Or (Golden Circle)", en: "Golden Circle", es: "Círculo de Oro (Golden Circle)", de: "Goldener Kreis" },
      region: { fr: "Sud-Ouest", en: "South-West", es: "Suroeste", de: "Südwesten" },
      description: {
        fr: "Circuit incontournable depuis Reykjavik : le geyser Strokkur, le parc national de Þingvellir (naissance de la démocratie, faille tectonique) et les chutes de Gullfoss.", en: "The essential route from Reykjavik: Strokkur geyser, Þingvellir National Park (birthplace of democracy, tectonic rift) and the Gullfoss waterfalls.", es: "Ruta imprescindible desde Reikiavik: el géiser Strokkur, el parque nacional de Þingvellir (cuna de la democracia, falla tectónica) y las cataratas de Gullfoss.", de: "Eine unverzichtbare Tour ab Reykjavik: der Strokkur-Geysir, der Thingvellir-Nationalpark (Geburt der Demokratie, tektonische Verwerfung) und die Gullfoss-Wasserfälle.",
      },
      wikipedia: "Golden_Circle_(Iceland)",
      tags: ["Nature", "UNESCO"],
      mustSee: [
        { name: { fr: "Geyser Strokkur", en: "Strokkur geyser", es: "Géiser Strokkur", de: "Strokkur-Geysir" }, wikipedia: "Strokkur" },
        { name: { fr: "Chutes de Gullfoss", en: "Gullfoss waterfalls", es: "Cataratas de Gullfoss", de: "Gullfoss-Wasserfälle" }, wikipedia: "Gullfoss" },
        { name: { fr: "Parc national de Þingvellir", en: "Þingvellir National Park", es: "Parque nacional de Þingvellir", de: "Thingvellir-Nationalpark" }, wikipedia: "Þingvellir" },
        { name: { fr: "Lac Kerid — cratère volcanique", en: "Kerid crater lake", es: "Lago Kerid — cráter volcánico", de: "Keridsee – Vulkankrater" }, wikipedia: "Kerið" },
      ],
    },
    {
      id: 2,
      name: { fr: "Côte Sud & Jökulsárlón", en: "South Coast & Jökulsárlón", es: "Costa Sur y Jökulsárlón", de: "Südküste und Jökulsárlón" },
      region: { fr: "Sud", en: "South", es: "Sur", de: "Süden" },
      description: {
        fr: "La route côtière la plus spectaculaire d'Islande : cascades de Seljalandsfoss et Skógafoss, plage de sable noir de Reynisfjara et le lac glaciaire de Jökulsárlón avec ses icebergs.", en: "Iceland's most spectacular coastal route: the Seljalandsfoss and Skógafoss waterfalls, Reynisfjara black-sand beach and Jökulsárlón glacial lagoon with its icebergs.", es: "La ruta costera más espectacular de Islandia: las cascadas de Seljalandsfoss y Skógafoss, la playa de arena negra de Reynisfjara y la laguna glaciar de Jökulsárlón con sus icebergs.", de: "Islands spektakulärste Küstenfahrt: die Wasserfälle Seljalandsfoss und Skógafoss, der schwarze Sandstrand Reynisfjara und der Gletschersee Jökulsárlón mit seinen Eisbergen.",
      },
      wikipedia: "Jökulsárlón",
      tags: ["Nature", "Plage", "Randonnée"],
      mustSee: [
        { name: { fr: "Jökulsárlón — lac des icebergs", en: "Jökulsárlón — iceberg lagoon", es: "Jökulsárlón — laguna de icebergs", de: "Jökulsárlón – Eisbergsee" }, wikipedia: "Jökulsárlón" },
        { name: { fr: "Plage de sable noir Reynisfjara", en: "Reynisfjara black-sand beach", es: "Playa de arena negra de Reynisfjara", de: "Reynisfjara schwarzer Sandstrand" }, wikipedia: "Reynisfjara" },
        { name: { fr: "Cascades Seljalandsfoss", en: "Seljalandsfoss waterfalls", es: "Cascadas de Seljalandsfoss", de: "Seljalandsfoss-Wasserfälle" }, wikipedia: "Seljalandsfoss" },
        { name: { fr: "Skógafoss & sentier de randonnée", en: "Skógafoss & hiking trail", es: "Skógafoss y sendero de senderismo", de: "Skógafoss und Wanderweg" }, wikipedia: "Skógafoss" },
      ],
    },
    {
      id: 3,
      name: "Snæfellsnes",
      region: { fr: "Ouest", en: "West", es: "Oeste", de: "Westen" },
      description: {
        fr: "Péninsule glaciaire inspirée par Jules Verne (Voyage au centre de la Terre). Glacier Snæfellsjökull, falaises de basalte, villages de pêcheurs et aurores boréales.", en: "A glacier-capped peninsula that inspired Jules Verne (Journey to the Center of the Earth). Snæfellsjökull glacier, basalt cliffs, fishing villages and northern lights.", es: "Península glaciar que inspiró a Julio Verne (Viaje al centro de la Tierra). Glaciar Snæfellsjökull, acantilados de basalto, pueblos de pescadores y auroras boreales.", de: "Gletscherhalbinsel, inspiriert von Jules Verne (Reise zum Mittelpunkt der Erde). Snæfellsjökull-Gletscher, Basaltklippen, Fischerdörfer und die Nordlichter.",
      },
      wikipedia: "File:View_from_Helgafell,_Snæfellsnes_peninsula,_Iceland,_20230505_1513_5245.jpg",
      tags: ["Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Glacier Snæfellsjökull", en: "Snæfellsjökull glacier", es: "Glaciar Snæfellsjökull", de: "Snæfellsjökull-Gletscher" }, wikipedia: "Snæfellsjökull" },
        { name: { fr: "Falaises de Lóndrangar", en: "Lóndrangar cliffs", es: "Acantilados de Lóndrangar", de: "Lóndrangar-Klippen" }, wikipedia: "Lóndrangar" },
        { name: { fr: "Village de Arnarstapi", en: "Arnarstapi village", es: "Pueblo de Arnarstapi", de: "Dorf Arnarstapi" }, wikipedia: "Arnarstapi" },
        { name: { fr: "Plage de Djúpalónssandur", en: "Djúpalónssandur beach", es: "Playa de Djúpalónssandur", de: "Strand von Djúpalónssandur" }, wikipedia: "File:Dritvik - Djúpalónssandur 03 HDR (1416785147).jpg" },
      ],
    },
    {
      id: 4,
      name: "Reykjavik",
      region: { fr: "Région capitale", en: "Capital Region", es: "Región capital", de: "Hauptstadtregion" },
      description: {
        fr: "La plus petite capitale du monde est surprenante : architecture colorée, scène culturelle vibrante, restaurants de nouvelle cuisine nordique et le Blue Lagoon à 40 min.", en: "The world's smallest capital is full of surprises: colourful architecture, a vibrant cultural scene, new Nordic restaurants and the Blue Lagoon just 40 minutes away.", es: "La capital más pequeña del mundo sorprende: arquitectura colorida, una escena cultural vibrante, restaurantes de nueva cocina nórdica y la Blue Lagoon a 40 minutos.", de: "Die kleinste Hauptstadt der Welt überrascht: farbenfrohe Architektur, lebendige Kulturszene, Restaurants der neuen nordischen Küche und die Blaue Lagune 40 Minuten entfernt.",
      },
      wikipedia: "File:View of Reykjavík from Hallgrímskirkja, 20230507 1227 5715.jpg",
      tags: ["Ville", "Culture", "Gastronomie", "Détente", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Hallgrímskirkja — cathédrale emblématique", en: "Hallgrímskirkja — iconic cathedral", es: "Hallgrímskirkja — catedral emblemática", de: "Hallgrímskirkja – ikonische Kathedrale" }, wikipedia: "Hallgrímskirkja" },
        { name: "Blue Lagoon", wikipedia: "Blue_Lagoon_(geothermal_spa)" },
        { name: { fr: "Musée national d'Islande", en: "National Museum of Iceland", es: "Museo Nacional de Islandia", de: "Nationalmuseum von Island" }, wikipedia: "National_Museum_of_Iceland" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Islande est l'une des destinations les plus chères d'Europe. Prévoyez un budget conséquent, notamment pour l'hébergement et la restauration. Location de voiture indispensable hors Reykjavik.", en: "Iceland is one of Europe's most expensive destinations. Plan for a substantial budget, especially for accommodation and food. Renting a car is essential outside Reykjavik.", es: "Islandia es uno de los destinos más caros de Europa. Hay que prever un presupuesto considerable, especialmente para alojamiento y comida. Alquilar un coche es indispensable fuera de Reikiavik.", de: "Island ist eines der teuersten Reiseziele in Europa. Planen Sie ein beträchtliches Budget ein, insbesondere für Unterkunft und Verpflegung. Autovermietung außerhalb von Reykjavik unerlässlich.",
    },
    currency: "ISK (kr)",
    exchangeRate: "~150 kr = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Camping (été seulement)", en: "Camping (summer only)", es: "Camping (solo en verano)", de: "Camping (nur im Sommer)" }, price: "15–25 €", detail: { fr: "Réseau de campings bien équipés", en: "Well-equipped campsite network", es: "Red de campings bien equipados", de: "Netz gut ausgestatteter Campingplätze" } },
          { label: { fr: "Dortoir hostel", en: "Hostel dorm", es: "Dormitorio en hostel", de: "Schlafsaal im Hostel" }, price: "35–55 €", detail: { fr: "Assez cher pour un dortoir, mais pratique", en: "Quite expensive for a dorm, but practical", es: "Bastante caro para un dormitorio, pero práctico", de: "Ziemlich teuer für ein Wohnheim, aber praktisch" } },
          { label: { fr: "Guesthouse / ferme", en: "Guesthouse / farm stay", es: "Guesthouse / granja", de: "Gästehaus/Bauernhof" }, price: "80–150 €", detail: { fr: "Ambiance authentique, souvent isolée", en: "Authentic atmosphere, often isolated", es: "Ambiente auténtico, a menudo aislado", de: "Authentische, oft isolierte Atmosphäre" } },
          { label: { fr: "Hôtel confort", en: "Comfort hotel", es: "Hotel confort", de: "Komforthotel" }, price: "150–280 €", detail: { fr: "Standard correct dans les villes", en: "Decent standard in towns", es: "Estándar correcto en las ciudades", de: "Korrekter Standard in Städten" } },
          { label: { fr: "Hôtel de luxe", en: "Luxury hotel", es: "Hotel de lujo", de: "Luxushotel" }, price: "300–600 €", detail: { fr: "Reykjavik, lieux insolites avec vue", en: "Reykjavik, unusual places with a view", es: "Reikiavik, lugares insólitos con vistas", de: "Reykjavik, ungewöhnliche Orte mit Aussicht" } },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Hot-dog isl. (Bæjarins beztu)", en: "Icelandic hot dog (Bæjarins Beztu)", es: "Hot dog islandés (Bæjarins Beztu)", de: "Hot Dog Insel. (Bæjarins beztu)" }, price: "3–4 €", detail: { fr: "Institution nationale — file d'attente assurée", en: "National institution — expect a queue", es: "Institución nacional — cola asegurada", de: "Nationale Institution – garantierte Warteschlange" } },
          { label: { fr: "Boulangerie / café", en: "Bakery / café", es: "Panadería / café", de: "Bäckerei/Café" }, price: "5–10 €", detail: { fr: "Skyr, pain de seigle, cinnamon roll", en: "Skyr, rye bread, cinnamon roll", es: "Skyr, pan de centeno, cinnamon roll", de: "Skyr, Roggenbrot, Zimtschnecke" } },
          { label: { fr: "Restaurant casual", en: "Casual restaurant", es: "Restaurante informal", de: "Lässiges Restaurant" }, price: "20–35 €", detail: { fr: "Fish & chips, burger islandais", en: "Fish & chips, Icelandic burger", es: "Fish & chips, hamburguesa islandesa", de: "Fish & Chips, isländischer Burger" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant", es: "Restaurante de gama media", de: "Mittelklasserestaurant" }, price: "35–60 €", detail: { fr: "Agneau islandais, saumon, skyr", en: "Icelandic lamb, salmon, skyr", es: "Cordero islandés, salmón, skyr", de: "Isländisches Lamm, Lachs, Skyr" } },
          { label: { fr: "Restaurant gastronomique", en: "Fine dining", es: "Alta gastronomía", de: "Gourmet-Restaurant" }, price: "80–150 €", detail: { fr: "Nouvelle cuisine nordique, exceptionnel", en: "New Nordic cuisine, exceptional", es: "Nueva cocina nórdica, excepcional", de: "Neue nordische Küche, außergewöhnlich" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus Reykjavik (Strætó)", en: "Reykjavik bus (Strætó)", es: "Autobús de Reikiavik (Strætó)", de: "Bus Reykjavik (Straetó)" }, price: "3,50 €", detail: { fr: "Réseau limité à la capitale", en: "Network limited to the capital", es: "Red limitada a la capital", de: "Netz auf die Hauptstadt beschränkt" } },
          { label: { fr: "Location de voiture compacte", en: "Compact car rental", es: "Alquiler de coche compacto", de: "Kompaktwagenvermietung" }, price: "60–100 €/j", detail: { fr: "Indispensable pour le Ring Road", en: "Essential for the Ring Road", es: "Indispensable para la Ring Road", de: "Unverzichtbar für die Ringstraße" } },
          { label: { fr: "Location 4x4", en: "4x4 rental", es: "Alquiler de 4x4", de: "4x4-Vermietung" }, price: "100–200 €/j", detail: { fr: "Obligatoire pour les Highlands (pistes F)", en: "Mandatory for the Highlands (F-roads)", es: "Obligatorio para las Highlands (pistas F)", de: "Obligatorisch für die Highlands (F-Trails)" } },
          { label: { fr: "Bus Reykjavik–Golden Circle (tour)", en: "Reykjavik–Golden Circle bus (tour)", es: "Autobús Reikiavik–Golden Circle (tour)", de: "Bus Reykjavik–Golden Circle (Tour)" }, price: "60–100 €", detail: { fr: "Excursion organisée depuis Reykjavik", en: "Organised excursion from Reykjavik", es: "Excursión organizada desde Reikiavik", de: "Organisierter Ausflug ab Reykjavik" } },
          { label: { fr: "Ferry Westfjords", en: "Westfjords ferry", es: "Ferry a los Westfjords", de: "Fähre Westfjorde" }, price: "20–50 €", detail: { fr: "Baldur Ferry — scenic", en: "Baldur Ferry — scenic route", es: "Baldur Ferry — ruta panorámica", de: "Baldur Ferry – malerisch" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités & Culture", en: "Activities & Culture", es: "Actividades y cultura", de: "Aktivitäten & Kultur" },
        items: [
          { label: { fr: "Blue Lagoon (entrée standard)", en: "Blue Lagoon (standard entry)", es: "Blue Lagoon (entrada estándar)", de: "Blaue Lagune (Standardeintritt)" }, price: "60–100 €", detail: { fr: "Réservation obligatoire des semaines à l'avance", en: "Booking required weeks in advance", es: "Reserva obligatoria con semanas de antelación", de: "Reservierungen sind Wochen im Voraus erforderlich" } },
          { label: { fr: "Tour aurores boréales", en: "Northern lights tour", es: "Tour de auroras boreales", de: "Nordlichttour" }, price: "50–80 €", detail: { fr: "Minibus nocturne, conditions météo non garanties", en: "Night minibus, weather conditions not guaranteed", es: "Minibús nocturno, condiciones meteorológicas no garantizadas", de: "Nachtbus, Wetterbedingungen nicht garantiert" } },
          { label: { fr: "Randonnée sur glacier guidée", en: "Guided glacier hike", es: "Caminata guiada por glaciar", de: "Geführte Gletscherwanderung" }, price: "50–100 €", detail: { fr: "Crampons et guide inclus — incontournable", en: "Crampons and guide included — a must", es: "Crampones y guía incluidos — imprescindible", de: "Steigeisen und Führer inklusive – unerlässlich" } },
          { label: { fr: "Snorkeling / plongée à Þingvellir", en: "Snorkelling / diving at Þingvellir", es: "Esnórquel / buceo en Þingvellir", de: "Schnorcheln/Tauchen in Þingvellir" }, price: "80–150 €", detail: { fr: "Dans la faille entre deux plaques tectoniques", en: "In the rift between two tectonic plates", es: "En la fisura entre dos placas tectónicas", de: "In der Verwerfung zwischen zwei tektonischen Platten" } },
          { label: { fr: "Observation des baleines (Húsavík)", en: "Whale watching (Húsavík)", es: "Avistamiento de ballenas (Húsavík)", de: "Walbeobachtung (Húsavík)" }, price: "60–90 €", detail: { fr: "Meilleures chances mai–août", en: "Best odds from May to August", es: "Mejores posibilidades mayo–agosto", de: "Beste Quoten Mai–August" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "80–120 €/j", desc: { fr: "Camping + cuisine maison + voiture partagée", en: "Camping + self-catering + shared car", es: "Camping + cocina propia + coche compartido", de: "Camping + Hausmannskost + geteiltes Auto" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "160–260 €/j", desc: { fr: "Guesthouse + restos + activités", en: "Guesthouse + restaurants + activities", es: "Guesthouse + restaurantes + actividades", de: "Gästehaus + Restaurants + Aktivitäten" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "400 €+/j", desc: { fr: "Hôtel 5★ + gastronomie nordique + expériences premium", en: "5★ hotel + Nordic fine dining + premium experiences", es: "Hotel 5★ + alta gastronomía nórdica + experiencias premium", de: "5★ Hotel + nordische Gastronomie + Premium-Erlebnisse" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "2 semaines", en: "2 weeks", es: "2 semanas", de: "2 Wochen" },
      route: { fr: "Reykjavik (2j) → Golden Circle (1j) → Côte Sud (2j) → Jökulsárlón (1j) → Highlands (2j) → Nord (3j) → Snæfellsnes (2j) → Reykjavik (1j)", en: "Reykjavik (2d) → Golden Circle (1d) → South Coast (2d) → Jökulsárlón (1d) → Highlands (2d) → North (3d) → Snæfellsnes (2d) → Reykjavik (1d)", es: "Reikiavik (2d) → Golden Circle (1d) → Costa Sur (2d) → Jökulsárlón (1d) → Highlands (2d) → Norte (3d) → Snæfellsnes (2d) → Reikiavik (1d)", de: "Reykjavik (2T) → Golden Circle (1T) → Südküste (2T) → Jökulsárlón (1T) → Hochland (2T) → Norden (3T) → Snæfellsnes (2T) → Reykjavik (1T)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Reykjavik", en: "Return flight Paris–Reykjavik", es: "Vuelo ida y vuelta Madrid–Reikiavik", de: "Hin- und Rückflug Paris–Reykjavik" }, amount: "150–400 €" },
            { label: { fr: "Location de voiture (14j)", en: "Car rental (14 days)", es: "Alquiler de coche (14 días)", de: "Autovermietung (14 Tage)" }, amount: "700–1 000 €" },
            { label: { fr: "Hébergement (campings + hostels)", en: "Accommodation (campsites + hostels)", es: "Alojamiento (campings + hostels)", de: "Unterkunft (Campingplätze + Hostels)" }, amount: "400–600 €" },
            { label: { fr: "Nourriture (supermarché + restos budget)", en: "Food (supermarkets + budget restaurants)", es: "Comida (supermercado + restaurantes económicos)", de: "Lebensmittel (Supermarkt + günstige Restaurants)" }, amount: "400–600 €" },
            { label: { fr: "Activités (Blue Lagoon, glacier...)", en: "Activities (Blue Lagoon, glacier...)", es: "Actividades (Blue Lagoon, glaciar...)", de: "Aktivitäten (Blaue Lagune, Gletscher...)" }, amount: "350–550 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Reykjavik", en: "Return flight Paris–Reykjavik", es: "Vuelo ida y vuelta Madrid–Reikiavik", de: "Hin- und Rückflug Paris–Reykjavik" }, amount: "200–500 €" },
            { label: { fr: "Location de voiture 4x4 (14j)", en: "4x4 rental (14 days)", es: "Alquiler de 4x4 (14 días)", de: "4x4-Autovermietung (14 Tage)" }, amount: "1 000–1 500 €" },
            { label: { fr: "Hébergement guesthouses (14 nuits)", en: "Guesthouse accommodation (14 nights)", es: "Alojamiento en guesthouses (14 noches)", de: "Unterkunft im Gästehaus (14 Nächte)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "800–1 200 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency", es: "Actividades e imprevistos", de: "Aktivitäten und unvorhergesehene Ereignisse" }, amount: "600–900 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "8 000 € +",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Reykjavik (business)", en: "Return flight Paris–Reykjavik (business)", es: "Vuelo ida y vuelta Madrid–Reikiavik (business)", de: "Hin- und Rückflug Paris–Reykjavik (Business Class)" }, amount: "800–2 000 €" },
            { label: { fr: "Location SUV premium (14j)", en: "Premium SUV rental (14 days)", es: "Alquiler de SUV premium (14 días)", de: "Premium-SUV-Miete (14 Tage)" }, amount: "1 500–2 500 €" },
            { label: { fr: "Hôtels & lodges luxe (14 nuits)", en: "Luxury hotels & lodges (14 nights)", es: "Hoteles y lodges de lujo (14 noches)", de: "Luxushotels & Lodges (14 Nächte)" }, amount: "3 000–6 000 €" },
            { label: { fr: "Gastronomie nordique & Blue Lagoon premium", en: "Nordic fine dining & premium Blue Lagoon", es: "Alta gastronomía nórdica y Blue Lagoon premium", de: "Nordische Gastronomie und erstklassige Blaue Lagune" }, amount: "1 000–2 000 €" },
            { label: { fr: "Expériences privées & imprévus", en: "Private experiences & contingency", es: "Experiencias privadas e imprevistos", de: "Private Erlebnisse & unvorhergesehene Ereignisse" }, amount: "800–1 500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~3h direct (Icelandair, easyJet, Vueling)", en: "~3h direct (Icelandair, easyJet, Vueling)", es: "~3h directo (Icelandair, easyJet, Vueling)", de: "ca. 3 Std. direkt (Icelandair, easyJet, Vueling)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Pas de visa (espace Schengen)", en: "No visa required (Schengen area)", es: "Sin visado (espacio Schengen)", de: "Kein Visum (Schengen-Raum)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Couronne islandaise (kr) — carte bancaire acceptée partout", en: "Icelandic króna (kr) — card payments accepted everywhere", es: "Corona islandesa (kr) — tarjeta bancaria aceptada en todas partes", de: "Isländische Krone (kr) – Bankkarte wird überall akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Islandais — anglais parfaitement parlé partout", en: "Icelandic — English spoken fluently everywhere", es: "Islandés — inglés perfectamente hablado en todas partes", de: "Isländisch – Englisch wird überall perfekt gesprochen" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F — 230V (même qu'en France)", en: "Type C/F — 230V (same as in France)", es: "Tipo C/F — 230V (igual que en Europa continental)", de: "Typ C/F – 230 V (wie in Frankreich)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Roaming européen inclus — réseau excellent sur Ring Road", en: "EU roaming included — excellent coverage on the Ring Road", es: "Roaming europeo incluido — excelente cobertura en la Ring Road", de: "Europäisches Roaming inklusive – ausgezeichnetes Netz auf der Ringstraße" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Excellente, parmi la meilleure eau du monde", en: "Excellent, among the best drinking water in the world", es: "Excelente, entre la mejor agua potable del mundo", de: "Ausgezeichnet, eines der besten Wasser der Welt" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Carte européenne d'assurance maladie valide, aucun risque sanitaire", en: "European Health Insurance Card valid, no particular health risk", es: "Tarjeta Sanitaria Europea válida, sin riesgo sanitario particular", de: "Gültige Europäische Krankenversicherungskarte, keine Gesundheitsrisiken" } },
  ],
};
