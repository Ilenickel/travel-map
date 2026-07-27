export const BENIN = {
  code: "BEN",
  numericId: 204,
  name: { fr: "Bénin", en: "Benin", es: "Benín", de: "Benin" },
  emoji: "🇧🇯",
  capital: { fr: "Porto-Novo", en: "Porto-Novo", es: "Porto Novo", de: "Porto-Novo" },
  language: { fr: "Français, Fon, Yoruba, Bariba", en: "French, Fon, Yoruba, Bariba", es: "Francés, fon, yoruba, bariba", de: "Französisch, Fon, Yoruba, Bariba" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)", es: "Franco CFA (XOF)", de: "CFA-Franc (XOF)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 35, budgetMid: 80,
    tripMin: 1200, tripMid: 2500,
  },
  criteria: {
    unesco: 2,
    nature: 1,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 2,
    ski: 0,
    ville: 1,
    plage: 1,
  },
  description: {
    fr: "Le Bénin est le berceau du vaudou : Ouidah et sa route des esclaves menant au Door of No Return, les palais royaux d'Abomey (UNESCO) du royaume du Dahomey, la cité lacustre de Ganvié (50 000 personnes vivant sur l'eau), et la réserve de la Pendjari pour les lions, éléphants et guépards les plus accessibles d'Afrique de l'Ouest.", en: "Benin is the cradle of Vodun: Ouidah and its slave route leading to the Door of No Return, the Royal Palaces of Abomey (UNESCO) from the Kingdom of Dahomey, the stilt city of Ganvié (50,000 people living on the water), and the Pendjari reserve for some of the most accessible lions, elephants and cheetahs in West Africa.", es: "Benín es la cuna del vudú: Ouidah y su ruta de los esclavos que conduce a la Door of No Return, los palacios reales de Abomey (UNESCO) del reino de Dahomey, la ciudad lacustre de Ganvié (50 000 personas viviendo sobre el agua), y la reserva de Pendjari para los leones, elefantes y guepardos más accesibles de África Occidental.", de: "Benin ist die Wiege des Voodoo: Ouidah und seine Sklavenroute, die zur Tür ohne Wiederkehr führt, die Königspaläste von Abomey (UNESCO) des Königreichs Dahomey, die Seestadt Ganvié (50.000 Menschen leben auf dem Wasser) und das Pendjari-Reservat für die am besten zugänglichen Löwen, Elefanten und Geparden in Westafrika.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February", es: "Noviembre – Febrero", de: "November – Februar" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour voyager : harmattan, ciel dégagé, routes praticables. Meilleure saison pour la Pendjari. Températures agréables 25–32°C.", en: "Ideal for travelling: harmattan winds, clear skies and passable roads. The best season for Pendjari. Pleasant temperatures of 25–32°C.", es: "Ideal para viajar: harmattan, cielo despejado, carreteras transitables. Mejor época para Pendjari. Temperaturas agradables de 25–32°C.", de: "Ideal zum Reisen: Harmattan, klarer Himmel, befahrbare Straßen. Beste Saison für Pendjari. Angenehme Temperaturen 25–32°C.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Saison des pluies", en: "Rainy season", es: "Estación de lluvias", de: "Regenzeit" },
      color: "#ef4444",
      description: {
        fr: "Pluies régulières (100–200mm/mois), routes difficiles en brousse, Pendjari peu accessible. Moins favorable.", en: "Regular rainfall (100–200mm/month), difficult bush roads, and limited access to Pendjari. Less favourable overall.", es: "Lluvias regulares (100–200mm/mes), carreteras difíciles en la sabana, Pendjari poco accesible. Menos favorable.", de: "Regelmäßige Regenfälle (100–200 mm/Monat), schwierige Straßen im Busch, Pendjari nicht sehr gut zugänglich. Weniger günstig.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "cotonou",
      name: "Cotonou",
      region: { fr: "Littoral (côte)", en: "Littoral (coast)", es: "Littoral (costa)", de: "Küste (Küste)" },
      data: [
        { month: "Jan", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 29, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 180, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 300, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 100, icon: "⛅" },
        { month: "Aoû", temp: 25, rain: 50,  icon: "⛅" },
        { month: "Sep", temp: 26, rain: 80,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 15,  icon: "⛅" },
      ],
    },
    {
      id: "natitingou",
      name: "Natitingou",
      region: { fr: "Atacora (nord)", en: "Atacora (north)", es: "Atacora (norte)", de: "Atacora (Norden)" },
      data: [
        { month: "Jan", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Fév", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 33, rain: 20,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 60,  icon: "🌡️" },
        { month: "Mai", temp: 31, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 28, rain: 160, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 230, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 60,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 28, rain: 0,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Abomey — Palais royaux du Dahomey", en: "Abomey — Royal Palaces of Dahomey", es: "Abomey — Palacios reales de Dahomey", de: "Abomey – Königspaläste von Dahomey" },
      region: { fr: "Zou", en: "Zou", es: "Zou", de: "Zou" },
      description: {
        fr: "Les palais royaux d'Abomey (UNESCO) sont le témoignage du puissant royaume du Dahomey (XVIIe–XIXe s.) : bas-reliefs en argile racontant les exploits guerriers des rois, musée royal avec des trônes ornés de crânes d'ennemis, et l'histoire des Amazones du Dahomey — armée de femmes guerrières. Un des sites historiques les plus fascinants d'Afrique.", en: "The Royal Palaces of Abomey (UNESCO) bear witness to the powerful Kingdom of Dahomey (17th–19th centuries): clay bas-reliefs recounting the kings' military exploits, a royal museum with thrones decorated with enemies' skulls, and the story of the Dahomey Amazons — an army of women warriors. One of the most fascinating historical sites in Africa.", es: "Los palacios reales de Abomey (UNESCO) son testimonio del poderoso reino de Dahomey (s. XVII–XIX): bajorrelieves de arcilla que narran las hazañas guerreras de los reyes, un museo real con tronos adornados con cráneos de enemigos, y la historia de las Amazonas de Dahomey — un ejército de mujeres guerreras. Uno de los sitios históricos más fascinantes de África.", de: "Die königlichen Paläste von Abomey (UNESCO) sind Zeugnisse des mächtigen Königreichs Dahomey (17.–19. Jahrhundert): Flachreliefs aus Ton erzählen von den Kriegstaten der Könige, ein königliches Museum mit Thronen, die mit den Schädeln von Feinden verziert sind, und die Geschichte der Amazonen von Dahomey – einer Armee weiblicher Krieger. Eine der faszinierendsten historischen Stätten in Afrika.",
      },
      wikipedia: "Abomey",
      tags: ["UNESCO", "Histoire", "Nature"],
      mustSee: [
        { name: { fr: "Palais royal d'Abomey (UNESCO) — bas-reliefs et musée", en: "Royal Palace of Abomey (UNESCO) — bas-reliefs and museum", es: "Palacio real de Abomey (UNESCO) — bajorrelieves y museo", de: "Königspalast von Abomey (UNESCO) – Flachreliefs und Museum" }, wikipedia: "Royal_Palaces_of_Abomey" },
        { name: { fr: "Histoire des Amazones du Dahomey (Agojie)", en: "History of the Dahomey Amazons (Agojie)", es: "Historia de las Amazonas de Dahomey (Agojie)", de: "Geschichte der Amazonen von Dahomey (Agojie)" }, wikipedia: "Dahomey_Amazons" },
        { name: { fr: "Trône royal orné de crânes d'ennemis", en: "Royal throne adorned with enemies' skulls", es: "Trono real adornado con cráneos de enemigos", de: "Königlicher Thron, verziert mit Schädeln von Feinden" }, wikipedia: "File:Trône du Ghézo, Fon, Bénin, Musée du quai Branly.jpg" },
        { name: { fr: "Temple Nesuxwé — culte des ancêtres royaux", en: "Nesuxwé Temple — worship of the royal ancestors", es: "Templo Nesuxwé — culto a los ancestros reales", de: "Nesuxwé-Tempel – Kult der königlichen Vorfahren" }, wikipedia: "File:Palais du TOHUIYO AGBALE ADANMANYIKPOWE 01.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Ouidah — Route des esclaves et vaudou", en: "Ouidah — Slave Route and Vodun", es: "Ouidah — Ruta de los esclavos y vudú", de: "Ouidah – Sklavenroute und Voodoo" },
      region: { fr: "Atlantique", en: "Atlantique", es: "Atlantique", de: "atlantisch" },
      description: {
        fr: "Ouidah fut le plus grand port de la traite négrière d'Afrique de l'Ouest : la Route des Esclaves (3km) mène du centre-ville à la plage du Door of No Return, mémorial émouvant érigé à l'endroit où des millions d'Africains ont embarqué vers les Amériques. Ouidah est aussi la capitale mondiale du vaudou — cérémonies, temples de pythons et féticheurs.", en: "Ouidah was the largest slave-trading port in West Africa: the Slave Route (3 km) runs from the town centre to the beach at the Door of No Return, a moving memorial erected where millions of Africans were forced to embark for the Americas. Ouidah is also the world capital of Vodun — with ceremonies, python temples and traditional healers.", es: "Ouidah fue el mayor puerto de la trata de esclavos de África Occidental: la Ruta de los Esclavos (3 km) va desde el centro de la ciudad hasta la playa de la Door of No Return, un conmovedor memorial erigido en el lugar donde millones de africanos embarcaron hacia las Américas. Ouidah es también la capital mundial del vudú — ceremonias, templos de pitones y curanderos.", de: "Ouidah war der größte Hafen des Sklavenhandels in Westafrika: Die Sklavenroute (3 km) führt vom Stadtzentrum zum Strand der Tür ohne Wiederkehr, einem bewegenden Denkmal, das an der Stelle errichtet wurde, an der sich Millionen Afrikaner auf den Weg nach Amerika machten. Ouidah ist auch die Welthauptstadt des Voodoo – Zeremonien, Python-Tempel und Fetischisten.",
      },
      wikipedia: "File:The city of Ouidah.jpg",
      tags: ["Histoire", "Spiritualité"],
      mustSee: [
        { name: { fr: "Door of No Return — mémorial de la traite négrière", en: "Door of No Return — memorial to the slave trade", es: "Door of No Return — memorial a la trata de esclavos", de: "Tür ohne Wiederkehr – Denkmal für den Sklavenhandel" }, wikipedia: "File:Door of No Return Sign Ouidah (218406275).jpg" },
        { name: { fr: "Temple des Pythons — pythons sacrés en liberté", en: "Temple of Pythons — sacred free-roaming pythons", es: "Templo de las Pitones — pitones sagradas en libertad", de: "Tempel der Pythons – heilige Pythons in freier Wildbahn" }, wikipedia: "File:Entrée du Temple des Pythons (Ouidah).jpg" },
        { name: { fr: "Forêt sacrée de Kpasse — vaudou et sculptures", en: "Sacred Forest of Kpasse — Vodun and sculptures", es: "Bosque sagrado de Kpasse — vudú y esculturas", de: "Heiliger Wald von Kpasse – Voodoo und Skulpturen" }, wikipedia: "File:Forêt sacrée de Kpassè 01.jpg" },
        { name: { fr: "Musée d'Histoire de Ouidah (ancienne fort portugaise)", en: "Ouidah History Museum (former Portuguese fort)", es: "Museo de Historia de Ouidah (antiguo fuerte portugués)", de: "Ouidah History Museum (ehemalige portugiesische Festung)" }, wikipedia: "File:Musee d'Histoire in Ouidah 2015.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Ganvié — La Venise de l'Afrique", en: "Ganvié — The Venice of Africa", es: "Ganvié — La Venecia de África", de: "Ganvié – Das Venedig Afrikas" },
      region: { fr: "Atlantique", en: "Atlantique", es: "Atlantique", de: "atlantisch" },
      description: {
        fr: "Ganvié est une cité lacustre de 50 000 habitants construite sur pilotis au milieu du lac Nokoué, fondée au XVIIe siècle par les Tofinu pour fuir les razzias des guerriers du Dahomey (qui ne pouvaient traverser l'eau). Marché flottant, pêcheurs en pirogue, maisons sur stilts — un mode de vie aquatique unique au monde.", en: "Ganvié is a lake city of 50,000 inhabitants built on stilts in the middle of Lake Nokoué, founded in the 17th century by the Tofinu to escape raids by Dahomey warriors (who could not cross the water). Floating markets, fishermen in pirogues, houses on stilts — a water-based way of life unlike anywhere else in the world.", es: "Ganvié es una ciudad lacustre de 50 000 habitantes construida sobre pilotes en medio del lago Nokoué, fundada en el siglo XVII por los tofinu para huir de las incursiones de los guerreros de Dahomey (que no podían cruzar el agua). Mercado flotante, pescadores en piragua, casas sobre pilotes — un modo de vida acuático único en el mundo.", de: "Ganvié ist eine Seestadt mit 50.000 Einwohnern, die auf Stelzen mitten im Nokoué-See erbaut wurde und im 17. Jahrhundert von den Tofinu gegründet wurde, um den Überfällen der Krieger von Dahomey (die das Wasser nicht überqueren konnten) zu entgehen. Schwimmender Markt, Fischer in Kanus, Häuser auf Stelzen – ein einzigartiger Lebensstil im Wasser auf der Welt.",
      },
      wikipedia: "File:The village of Ganvié on Lake Nokoué.jpg",
      tags: ["Nature", "Aventure", "Culture"],
      mustSee: [
        { name: { fr: "Tour en pirogue du village lacustre", en: "Pirogue tour of the stilt village", es: "Paseo en piragua por el pueblo lacustre", de: "Kanutour durch das Seedorf" }, wikipedia: "File:The village of Ganvié on Lake Nokoué.jpg" },
        { name: { fr: "Marché flottant de Ganvié — commerce sur l'eau", en: "Ganvié floating market — trade on the water", es: "Mercado flotante de Ganvié — comercio sobre el agua", de: "Schwimmender Markt von Ganvié – Handel auf dem Wasser" }, wikipedia: "File:Benin village on water Ganvié.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Pendjari — Lions et éléphants", en: "Pendjari — Lions and Elephants", es: "Pendjari — Leones y elefantes", de: "Pendjari – Löwen und Elefanten" },
      region: { fr: "Atacora", en: "Atacora", es: "Atacora", de: "Atacora" },
      description: {
        fr: "La réserve de biosphère de la Pendjari est l'un des rares endroits d'Afrique de l'Ouest où observer lions, éléphants, hippopotames, buffles, guépards et hypopotames dans leur environnement naturel. Géré avec African Parks, le parc a vu ses populations animales exploser ces dernières années. Base à Natitingou.", en: "The Pendjari Biosphere Reserve is one of the few places in West Africa where you can see lions, elephants, hippos, buffalo, cheetahs and hippopotamuses in their natural habitat. Managed with African Parks, the park has seen its wildlife populations surge in recent years. Base yourself in Natitingou.", es: "La reserva de biosfera de Pendjari es uno de los pocos lugares de África Occidental donde observar leones, elefantes, hipopótamos, búfalos y guepardos en su entorno natural. Gestionado junto con African Parks, el parque ha visto crecer notablemente sus poblaciones animales en los últimos años. Base en Natitingou.", de: "Das Biosphärenreservat Pendjari ist einer der seltenen Orte in Westafrika, an dem Sie Löwen, Elefanten, Flusspferde, Büffel, Geparden und Hypopotamien in ihrer natürlichen Umgebung beobachten können. Der von African Parks verwaltete Park verzeichnete in den letzten Jahren eine explosionsartige Zunahme seiner Tierpopulationen. Basis in Natitingou.",
      },
      wikipedia: "Pendjari_National_Park",
      tags: ["Safari", "Nature"],
      mustSee: [
        { name: { fr: "Safari jeep — lions, éléphants, guépards", en: "Jeep safari — lions, elephants, cheetahs", es: "Safari en jeep — leones, elefantes, guepardos", de: "Jeep-Safari – Löwen, Elefanten, Geparden" }, wikipedia: "File:Pendjari kuhantilopen.JPG" },
        { name: { fr: "Cascades de Tanougou", en: "Tanougou Falls", es: "Cascadas de Tanougou", de: "Tanougou-Wasserfälle" }, wikipedia: "File:Pendjari Fluss.JPG" },
        { name: { fr: "Villages Somba / Tata (maisons-château traditionnelles)", en: "Somba / Tata villages (traditional fortress houses)", es: "Pueblos somba / tata (casas-castillo tradicionales)", de: "Somba-/Tata-Dörfer (traditionelle Burghäuser)" }, wikipedia: "File:Alyssa K. Barry Koutammakou,Togo.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Bénin est l'une des destinations les plus abordables d'Afrique de l'Ouest. Le franc CFA arrimé à l'euro simplifie le budget. Cotonou est plus chère que l'intérieur du pays. Les safaris à la Pendjari restent raisonnables comparés à l'Afrique de l'Est.", en: "Benin is one of the most affordable destinations in West Africa. The CFA franc, pegged to the euro, makes budgeting easier. Cotonou is more expensive than the rest of the country. Safaris in Pendjari remain reasonably priced compared with East Africa.", es: "Benín es uno de los destinos más asequibles de África Occidental. El franco CFA, fijado al euro, facilita la gestión del presupuesto. Cotonú es más cara que el interior del país. Los safaris en Pendjari siguen siendo razonables en comparación con África Oriental.", de: "Benin ist eines der günstigsten Reiseziele in Westafrika. Der an den Euro gekoppelte CFA-Franc vereinfacht den Haushalt. Cotonou ist teurer als das Landesinnere. Pendjari-Safaris bleiben im Vergleich zu Ostafrika erschwinglich.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse / chambre simple", en: "Guesthouse / basic room", es: "Casa de huéspedes / habitación sencilla", de: "Gästehaus / Einzelzimmer" }, price: "15–35 €", detail: { fr: "Ventilateur ou clim basique", en: "Fan or basic air conditioning", es: "Ventilador o aire acondicionado básico", de: "Ventilator oder einfache Klimaanlage" } },
          { label: { fr: "Hôtel 3★ confort (Cotonou, Natitingou)", en: "Comfortable 3★ hotel (Cotonou, Natitingou)", es: "Hotel confort 3★ (Cotonú, Natitingou)", de: "3★ Komforthotel (Cotonou, Natitingou)" }, price: "50–90 €", detail: { fr: "Clim, salle de bain, wifi", en: "Air conditioning, bathroom, Wi-Fi", es: "Aire acondicionado, baño, wifi", de: "Klimaanlage, Badezimmer, WLAN" } },
          { label: { fr: "Lodge Pendjari (African Parks)", en: "Pendjari lodge (African Parks)", es: "Lodge en Pendjari (African Parks)", de: "Lodge Pendjari (Afrikanische Parks)" }, price: "100–200 €", detail: { fr: "Pension complète, safari inclus", en: "Full board, safari included", es: "Pensión completa, safari incluido", de: "Vollpension, Safari inklusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Pâte de maïs / sauce arachide dans un buvette", en: "Corn paste / peanut sauce at a local eatery", es: "Pasta de maíz / salsa de cacahuete en un puesto local", de: "Maisteig / Erdnusssauce in einer Erfrischungsbar" }, price: "1–3 €", detail: { fr: "Cuisine locale typique", en: "Typical local cuisine", es: "Cocina local típica", de: "Typische lokale Küche" } },
          { label: { fr: "Restaurant mid-range Cotonou", en: "Mid-range restaurant in Cotonou", es: "Restaurante de gama media en Cotonú", de: "Mittelklasserestaurant Cotonou" }, price: "8–18 €", detail: { fr: "Poisson braisé, menu complet", en: "Grilled fish, full meal", es: "Pescado a la brasa, menú completo", de: "Geschmorter Fisch, komplettes Menü" } },
          { label: { fr: "Restaurant gastronomique Cotonou", en: "Fine dining restaurant in Cotonou", es: "Restaurante gastronómico en Cotonú", de: "Gourmetrestaurant Cotonou" }, price: "25–50 €", detail: { fr: "Cuisine française et locale", en: "French and local cuisine", es: "Cocina francesa y local", de: "Französische und lokale Küche" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Zémidjan (moto-taxi) — trajet urbain", en: "Zémidjan (motorbike taxi) — urban ride", es: "Zémidjan (mototaxi) — trayecto urbano", de: "Zémidjan (Motorradtaxi) – Stadtfahrt" }, price: "0,30–1 €", detail: { fr: "Transport typique Cotonou", en: "Typical Cotonou transport", es: "Transporte típico de Cotonú", de: "Typischer Transport Cotonou" } },
          { label: { fr: "Bus / minibus (Cotonou–Abomey, 2h)", en: "Bus / minibus (Cotonou–Abomey, 2h)", es: "Autobús / minibús (Cotonú–Abomey, 2h)", de: "Bus / Kleinbus (Cotonou–Abomey, 2 Std.)" }, price: "3–6 €", detail: { fr: "Inconfortable mais économique", en: "Uncomfortable but cheap", es: "Incómodo pero económico", de: "Unbequem, aber wirtschaftlich" } },
          { label: { fr: "Location 4x4 avec chauffeur / journée", en: "4x4 rental with driver / day", es: "Alquiler de 4x4 con chófer / día", de: "4x4-Vermietung mit Fahrer / Tag" }, price: "60–100 €", detail: { fr: "Indispensable pour Pendjari", en: "Essential for Pendjari", es: "Indispensable para Pendjari", de: "Unverzichtbar für Pendjari" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Visite Palais d'Abomey (UNESCO)", en: "Abomey Palaces visit (UNESCO)", es: "Visita a los palacios de Abomey (UNESCO)", de: "Besuchen Sie den Abomey-Palast (UNESCO)" }, price: "5–10 €", detail: { fr: "Avec guide francophone", en: "With a French-speaking guide", es: "Con guía francófono", de: "Mit französischsprachigem Reiseführer" } },
          { label: { fr: "Safari journée Pendjari (guide + jeep)", en: "Pendjari day safari (guide + jeep)", es: "Safari de un día en Pendjari (guía + jeep)", de: "Pendjari-Tagessafari (Führer + Jeep)" }, price: "50–80 €", detail: { fr: "Départ Natitingou", en: "Departure from Natitingou", es: "Salida desde Natitingou", de: "Abfahrt Natitingou" } },
          { label: { fr: "Tour en pirogue Ganvié", en: "Ganvié pirogue tour", es: "Paseo en piragua por Ganvié", de: "Ganvié-Kanutour" }, price: "10–20 €", detail: { fr: "2h depuis Abomey-Calavi", en: "2 hours from Abomey-Calavi", es: "2h desde Abomey-Calavi", de: "2 Stunden von Abomey-Calavi" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Guesthouse + cuisine locale + zemidjan", en: "Guesthouse + local food + zemidjan", es: "Casa de huéspedes + comida local + zemidjan", de: "Gästehaus + lokale Küche + Zemidjan" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "80–130 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones", de: "3★ Hotel + Restaurants + Ausflüge" }, color: "#3b82f6" },
      { type: { fr: "Safari", en: "Safari", es: "Safari", de: "Safari" }, daily: "150–250 €/j", desc: { fr: "Lodge Pendjari pension complète + safaris", en: "Full-board Pendjari lodge + safaris", es: "Lodge en Pendjari con pensión completa + safaris", de: "Lodge Pendjari Vollpension + Safaris" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Cotonou (2j) → Ouidah (1j) → Ganvié (1j) → Abomey (2j) → Natitingou / Pendjari (4j)", en: "Cotonou (2d) → Ouidah (1d) → Ganvié (1d) → Abomey (2d) → Natitingou / Pendjari (4d)", es: "Cotonú (2d) → Ouidah (1d) → Ganvié (1d) → Abomey (2d) → Natitingou / Pendjari (4d)", de: "Cotonou (2 Tage) → Ouidah (1 Tage) → Ganvié (1 Tage) → Abomey (2 Tage) → Natitingou / Pendjari (4 Tage)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Cotonou", en: "Return flight Paris–Cotonou", es: "Vuelo ida y vuelta Madrid–Cotonú", de: "Hin- und Rückflug Paris–Cotonou" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–400 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "100–200 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "150–250 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entrance fees", es: "Actividades y entradas", de: "Aktivitäten & Einträge" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "2 500 – 3 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Cotonou", en: "Return flight Paris–Cotonou", es: "Vuelo ida y vuelta Madrid–Cotonú", de: "Hin- und Rückflug Paris–Cotonou" }, amount: "600–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "700–1 100 €" },
            { label: { fr: "4x4 & chauffeur", en: "4x4 & driver", es: "4x4 y chófer", de: "4x4 & Fahrer" }, amount: "400–600 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & outings", es: "Comida y salidas", de: "Essen und Ausflüge" }, amount: "350–600 €" },
            { label: { fr: "Safari Pendjari & excursions", en: "Pendjari safari & excursions", es: "Safari en Pendjari y excursiones", de: "Safari Pendjari & Ausflüge" }, amount: "350–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~6–7h (Ethiopian Airlines via Addis, Air France via escale, Corsair direct saison)", en: "~6–7h (Ethiopian Airlines via Addis, Air France with a stopover, seasonal Corsair direct flight)", es: "~6–7h (Ethiopian Airlines vía Adís Abeba, Air France con escala, Corsair directo en temporada)", de: "ca. 6–7 Std. (Ethiopian Airlines über Addis, Air France mit Zwischenstopp, saisonaler Corsair-Direktflug)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Visa obligatoire — e-Visa disponible en ligne (~50€). Valable 30 jours.", en: "Visa required — e-Visa available online (~€50). Valid for 30 days.", es: "Visado obligatorio — e-Visa disponible en línea (~50€). Válido 30 días.", de: "Visum erforderlich – E-Visum online verfügbar (ca. 50 €). Gültig für 30 Tage." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces essentielles hors Cotonou.", en: "CFA franc (XOF). €1 = 655 XOF at a fixed rate. Cash is essential outside Cotonou.", es: "Franco CFA (XOF). 1€ = 655 XOF tipo fijo. Efectivo esencial fuera de Cotonú.", de: "CFA-Franc (XOF). 1€ = 655 XOF Festpreis. Wesentliche Arten außerhalb von Cotonou." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Français (officiel) — facile pour francophones. Fon et Yoruba en zone rurale.", en: "French (official) — easy for French speakers. Fon and Yoruba are common in rural areas.", es: "Francés (oficial) — fácil para francófonos. Fon y yoruba en zonas rurales.", de: "Französisch (offiziell) – einfach für Französischsprachige. Fon und Yoruba in ländlichen Gebieten." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V.", es: "Tipo C/E (europeo) — 220V.", de: "Typ C/E (europäisch) – 220 V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable toute l'année.", en: "Yellow fever vaccination required. Antimalarial medication is essential year-round.", es: "Vacuna contra la fiebre amarilla obligatoria. Antipalúdico indispensable todo el año.", de: "Gelbfieberimpfung erforderlich. Das ganze Jahr über unverzichtbar gegen Malaria." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water is essential.", es: "No potable — agua embotellada indispensable.", de: "Nicht trinkbar – Wasser in Flaschen unbedingt erforderlich." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Couverture acceptable dans les villes. Pendjari : réseau limité. SIM MTN locale recommandée.", en: "Decent coverage in cities. In Pendjari, the network is limited. A local MTN SIM is recommended.", es: "Cobertura aceptable en las ciudades. En Pendjari: red limitada. Se recomienda SIM local MTN.", de: "Akzeptable Abdeckung in Städten. Pendjari: begrenztes Netz. Lokale MTN-SIM-Karte empfohlen." } },
  ],
};
