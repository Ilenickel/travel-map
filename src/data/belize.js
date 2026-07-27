export const BELIZE = {
  code: "BLZ",
  numericId: 84,
  name: { fr: "Belize", en: "Belize", es: "Belice", de: "Belize" },
  emoji: "🇧🇿",
  capital: { fr: "Belmopan", en: "Belmopan", es: "Belmopán", de: "Belmopan" },
  language: { fr: "Anglais, Espagnol, Kriol", en: "English, Spanish, Kriol", es: "Inglés, Español, Kriol", de: "Englisch, Spanisch, Kriol" },
  currency: { fr: "Dollar bélizien (BZD)", en: "Belize dollar (BZD)", es: "Dólar beliceño (BZD)", de: "Belize-Dollar (BZD)" },
  timezone: "UTC-6",
  filter: {
    budgetMin: 60, budgetMid: 120,
    tripMin: 1800, tripMid: 3800,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 1,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 1,
    plage: 2,
    plongee: 3,
  },
  description: {
    fr: "Le Belize est la perle de la Mésoamérique : le Great Blue Hole, trou bleu légendaire classé UNESCO, et la deuxième barrière de corail au monde. Jungle maya, jaguars du parc Cockscomb, ruines de Caracol et atolls caraïbes paradisiaques composent un pays-nature à taille humaine.", en: "Belize is the jewel of Mesoamerica: home to the legendary UNESCO-listed Great Blue Hole and the world's second-largest barrier reef. Maya jungle, jaguars in Cockscomb Park, the ruins of Caracol and idyllic Caribbean atolls make up a compact country devoted to nature.", es: "Belice es la joya de Mesoamérica: el Great Blue Hole, legendario agujero azul declarado Patrimonio de la Humanidad por la UNESCO, y la segunda barrera de coral más grande del mundo. Jungla maya, jaguares del parque Cockscomb, ruinas de Caracol y atolones caribeños de ensueño componen un país-naturaleza a escala humana.", de: "Belize ist die Perle Mesoamerikas: das Great Blue Hole, ein legendäres UNESCO-Weltkulturerbe und das zweitgrößte Korallenriff der Welt. Maya-Dschungel, Jaguare im Cockscomb Park, Ruinen von Caracol und paradiesische karibische Atolle bilden ein natürliches Land im menschlichen Maßstab.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April", es: "Noviembre – Abril", de: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season", es: "Estación seca", de: "Trockenzeit" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : mer calme, visibilité parfaite pour la plongée et le snorkel. Bonne saison pour les ruines mayas et la jungle.", en: "Best time to go: calm seas and perfect visibility for diving and snorkelling. Also a great season for Maya ruins and the jungle.", es: "Mejor época: mar en calma, visibilidad perfecta para el buceo y el esnórquel. Buena temporada también para las ruinas mayas y la jungla.", de: "Beste Zeit: ruhige See, perfekte Sicht zum Tauchen und Schnorcheln. Gute Jahreszeit für Maya-Ruinen und den Dschungel.",
      },
      icon: "🐠",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August", es: "Julio – Agosto", de: "Juli – August" },
      label: { fr: "Veranillo", en: "Veranillo", es: "Veranillo", de: "Veranillo" },
      color: "#fb923c",
      description: {
        fr: "Pause sèche relative en pleine saison des pluies. Moins de monde, tarifs réduits, jungle verte.", en: "A relatively dry break in the middle of the rainy season. Fewer crowds, lower prices and lush green jungle.", es: "Pausa relativamente seca en plena temporada de lluvias. Menos turistas, precios más bajos, jungla verde y exuberante.", de: "Relative Trockenpause mitten in der Regenzeit. Weniger Menschen, reduzierte Preise, grüner Dschungel.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "belize_city",
      name: "Belize City",
      region: { fr: "Côte", en: "Coast", es: "Costa", de: "Seite" },
      data: [
        { month: "Jan", temp: 24, rain: 90,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 35,  icon: "☀️" },
        { month: "Avr", temp: 28, rain: 45,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 230, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 140, icon: "☀️" },
        { month: "Déc", temp: 24, rain: 100, icon: "☀️" },
      ],
    },
    {
      id: "cayo",
      name: "Cayo",
      region: { fr: "Ouest", en: "West", es: "Oeste", de: "Westen" },
      data: [
        { month: "Jan", temp: 23, rain: 80,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Avr", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 25, rain: 220, icon: "⛅" },
        { month: "Nov", temp: 24, rain: 110, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 80,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Great Blue Hole & Atolls", en: "Great Blue Hole & Atolls", es: "Great Blue Hole y Atolones", de: "Great Blue Hole und Atolle" },
      region: { fr: "Mer des Caraïbes", en: "Caribbean Sea", es: "Mar Caribe", de: "Karibisches Meer" },
      description: {
        fr: "Le Great Blue Hole, cratère sous-marin de 300 m de diamètre et 125 m de profondeur, est l'une des merveilles naturelles mondiales inscrites à l'UNESCO. Entouré du Lighthouse Reef, il offre l'une des plongées les plus mythiques de la planète, avec stalactites géantes et requins.", en: "The Great Blue Hole, an underwater sinkhole 300 m across and 125 m deep, is one of the world's UNESCO-listed natural wonders. Surrounded by Lighthouse Reef, it offers one of the most legendary dives on the planet, with giant stalactites and sharks.", es: "El Great Blue Hole, cráter submarino de 300 m de diámetro y 125 m de profundidad, es una de las maravillas naturales del mundo inscritas en la UNESCO. Rodeado por el Lighthouse Reef, ofrece una de las inmersiones más míticas del planeta, con estalactitas gigantes y tiburones.", de: "Das Great Blue Hole, ein Unterwasserkrater mit einem Durchmesser von 300 m und einer Tiefe von 125 m, ist eines der von der UNESCO gelisteten Naturwunder der Welt. Umgeben vom Lighthouse Reef bietet es einen der legendärsten Tauchgänge der Welt mit riesigen Stalaktiten und Haien.",
      },
      wikipedia: "Great_Blue_Hole",
      tags: ["UNESCO", "Plage", "Nature"],
      mustSee: [
        { name: { fr: "Plongée dans le Great Blue Hole (−40 m)", en: "Dive in the Great Blue Hole (−40 m)", es: "Inmersión en el Great Blue Hole (−40 m)", de: "Tauchen im Great Blue Hole (−40 m)" }, wikipedia: "Lighthouse_Reef" },
        { name: { fr: "Half Moon Caye — fous à pieds rouges", en: "Half Moon Caye — red-footed boobies", es: "Half Moon Caye — piqueros de patas rojas", de: "Half Moon Caye – Rotfußtölpel" }, wikipedia: "Half_Moon_Caye" },
        { name: { fr: "Turneffe Atoll — snorkel récifs", en: "Turneffe Atoll — reef snorkelling", es: "Turneffe Atoll — esnórquel en los arrecifes", de: "Turneffe Atoll – Schnorchelriffe" }, wikipedia: "Turneffe_Atoll" },
        { name: { fr: "Requins de récif et tortues vertes", en: "Reef sharks and green turtles", es: "Tiburones de arrecife y tortugas verdes", de: "Riffhaie und Grüne Schildkröten" }, wikipedia: "Nurse_shark" },
      ],
    },
    {
      id: 2,
      name: "Ambergris Caye",
      region: { fr: "Caraïbes Nord", en: "Northern Caribbean", es: "Caribe Norte", de: "Nördliche Karibik" },
      description: {
        fr: "Ambergris Caye est la plus grande île du Belize et la plus populaire : San Pedro, village de plage animé, la réserve marine Hol Chan et Shark Ray Alley où l'on nage avec raies pastenagues et requins citrons en toute sécurité.", en: "Ambergris Caye is Belize's largest and most popular island: home to San Pedro, a lively beach town, the Hol Chan Marine Reserve, and Shark Ray Alley where you can safely swim with stingrays and nurse sharks.", es: "Ambergris Caye es la isla más grande y popular de Belice: San Pedro, animado pueblo de playa, la reserva marina Hol Chan y Shark Ray Alley, donde se puede nadar con rayas y tiburones nodriza con total seguridad.", de: "Ambergris Caye ist Belizes größte und beliebteste Insel: San Pedro, ein lebhaftes Stranddorf, das Hol Chan Marine Reserve und die Shark Ray Alley, wo Sie in völliger Sicherheit mit Stachelrochen und Zitronenhaien schwimmen können.",
      },
      wikipedia: "Ambergris_Caye",
      tags: ["Plage", "Nightlife"],
      mustSee: [
        { name: { fr: "Hol Chan Marine Reserve — snorkel coraux", en: "Hol Chan Marine Reserve — coral snorkelling", es: "Hol Chan Marine Reserve — esnórquel entre corales", de: "Hol Chan Marine Reserve – Korallenschnorchel" }, wikipedia: "Hol_Chan_Marine_Reserve" },
        { name: { fr: "Shark Ray Alley — nage avec raies & requins", en: "Shark Ray Alley — swim with rays & sharks", es: "Shark Ray Alley — nado con rayas y tiburones", de: "Shark Ray Alley – Schwimmen mit Rochen und Haien" }, wikipedia: "File:Nurse Shark (Ginglymostoma cirratum) (36552532791).jpg" },
        { name: { fr: "Caye Caulker — plage No Shoes, No Shirts", en: "Caye Caulker — laid-back “No Shoes, No Shirts” beach vibe", es: "Caye Caulker — playa de ambiente relajado “No Shoes, No Shirts”", de: "Caye Caulker – Strand Keine Schuhe, keine Hemden" }, wikipedia: "Caye_Caulker" },
      ],
    },
    {
      id: 3,
      name: { fr: "Caracol & Ruines Mayas", en: "Caracol & Maya Ruins", es: "Caracol y Ruinas Mayas", de: "Caracol und Maya-Ruinen" },
      region: { fr: "Ouest (Cayo)", en: "West (Cayo)", es: "Oeste (Cayo)", de: "Westen (Cayo)" },
      description: {
        fr: "Caracol est la plus grande cité maya du Belize, cachée dans la forêt de la réserve Chiquibul. Sa pyramide Caana (Sky Palace, 43 m) surpasse Belmopan en hauteur. Jaguars, tapirs et singes hurleurs côtoient les archéologues.", en: "Caracol is Belize's largest Maya city, hidden in the forests of the Chiquibul Reserve. Its Caana pyramid (Sky Palace, 43 m) rises higher than Belmopan. Jaguars, tapirs and howler monkeys share the area with archaeologists.", es: "Caracol es la mayor ciudad maya de Belice, escondida en los bosques de la reserva de Chiquibul. Su pirámide Caana (Sky Palace, 43 m) supera en altura a Belmopán. Jaguares, tapires y monos aulladores conviven con los arqueólogos.", de: "Caracol ist die größte Maya-Stadt in Belize, versteckt im Wald des Chiquibul-Reservats. Seine Caana-Pyramide (Himmelspalast, 43 m) übertrifft Belmopan in der Höhe. Jaguare, Tapire und Brüllaffen stehen Seite an Seite mit Archäologen.",
      },
      wikipedia: "File:Caana, top view, Caracol, Chiquibul Forest Reserve, Belize.jpg",
      tags: ["Histoire", "Nature", "Safari"],
      mustSee: [
        { name: { fr: "Pyramide Caana (Sky Palace) — panorama jungle", en: "Caana Pyramid (Sky Palace) — jungle panorama", es: "Pirámide Caana (Sky Palace) — panorama de la jungla", de: "Caana-Pyramide (Himmelspalast) – Dschungelpanorama" }, wikipedia: "File:Caracol-Temple.jpg" },
        { name: { fr: "Stèles et autels mayas sculptés", en: "Carved Maya stelae and altars", es: "Estelas y altares mayas esculpidos", de: "Geschnitzte Maya-Stelen und Altäre" }, wikipedia: "File:Stone Stela, Caana, Caracol, Belize.jpg" },
        { name: { fr: "Réserve Chiquibul — jaguars & tapirs", en: "Chiquibul Reserve — jaguars & tapirs", es: "Reserva Chiquibul — jaguares y tapires", de: "Chiquibul-Reservat – Jaguare und Tapire" }, wikipedia: "File:Coringa Reserve Forest from the Watch Tower (02).jpg" },
        { name: { fr: "Xunantunich — site maya accessible", en: "Xunantunich — easily accessible Maya site", es: "Xunantunich — sitio maya de fácil acceso", de: "Xunantunich – zugängliche Maya-Stätte" }, wikipedia: "Xunantunich" },
      ],
    },
    {
      id: 4,
      name: { fr: "Cayo & Grottes d'Actun Tunichil Muknal", en: "Cayo & Actun Tunichil Muknal Caves", es: "Cayo y Cuevas de Actun Tunichil Muknal", de: "Actun Tunichil Muknal Cayo und Höhlen" },
      region: { fr: "Ouest", en: "West", es: "Oeste", de: "Westen" },
      description: {
        fr: "Le Cayo District est le cœur aventure du Belize : les grottes ATM (Actun Tunichil Muknal), sanctuaire maya rempli de squelettes et céramiques sacrées, les chutes de San Ignacio et la forêt primaire de la Mountain Pine Ridge.", en: "The Cayo District is Belize's adventure heartland: the ATM caves (Actun Tunichil Muknal), a Maya sanctuary filled with skeletons and sacred pottery, the waterfalls near San Ignacio, and the primary forest of Mountain Pine Ridge.", es: "El distrito de Cayo es el corazón de la aventura en Belice: las cuevas ATM (Actun Tunichil Muknal), santuario maya lleno de esqueletos y cerámicas sagradas, las cascadas cerca de San Ignacio y el bosque primario de Mountain Pine Ridge.", de: "Der Cayo District ist das Abenteuerherz von Belize: die ATM-Höhlen (Actun Tunichil Muknal), ein Maya-Heiligtum voller Skelette und heiliger Keramik, die San Ignacio Falls und der Primärwald des Mountain Pine Ridge.",
      },
      wikipedia: "File:Belize mountians, Cayo district Laslovarga002.JPG",
      tags: ["Nature", "Aventure", "Histoire"],
      mustSee: [
        { name: { fr: "Grottes ATM — squelettes mayas in situ", en: "ATM caves — Maya skeletons in situ", es: "Cuevas ATM — esqueletos mayas in situ", de: "ATM-Höhlen – Maya-Skelette vor Ort" }, wikipedia: "Actun_Tunichil_Muknal" },
        { name: { fr: "Mountain Pine Ridge — chutes & piscines", en: "Mountain Pine Ridge — waterfalls & pools", es: "Mountain Pine Ridge — cascadas y piscinas naturales", de: "Mountain Pine Ridge – Wasserfälle und Teiche" }, wikipedia: "Mountain_Pine_Ridge_Forest_Reserve" },
        { name: { fr: "Cockscomb Basin — sanctuaire jaguar", en: "Cockscomb Basin — jaguar sanctuary", es: "Cockscomb Basin — santuario del jaguar", de: "Cockscomb Basin – Jaguar-Schutzgebiet" }, wikipedia: "Cockscomb_Basin_Wildlife_Sanctuary" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Belize est relativement cher pour l'Amérique centrale car beaucoup de produits sont importés. Le dollar bélizien est arrimé au dollar américain (2 BZD = 1 USD). Les îles coûtent plus cher que le continent.", en: "Belize is relatively expensive for Central America because many products are imported. The Belize dollar is pegged to the US dollar (2 BZD = 1 USD). The islands are pricier than the mainland.", es: "Belice es relativamente caro para Centroamérica porque muchos productos son importados. El dólar beliceño está fijado al dólar estadounidense (2 BZD = 1 USD). Las islas cuestan más que el continente.", de: "Belize ist für Mittelamerika relativ teuer, da viele Produkte importiert werden. Der belizianische Dollar ist an den US-Dollar gekoppelt (2 BZD = 1 USD). Die Inseln kosten mehr als das Festland.",
    },
    currency: "BZD",
    exchangeRate: "1€ ≈ 2,2 USD (2 BZD = 1 USD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Hostel continental (Cayo)", en: "Mainland hostel (Cayo)", es: "Hostal continental (Cayo)", de: "Continental Hostel (Cayo)" }, price: "20–35 €", detail: { fr: "Dortoir ou chambre simple", en: "Dorm bed or simple room", es: "Dormitorio compartido o habitación sencilla", de: "Schlafsaal oder Einzelzimmer" } },
          { label: { fr: "Guesthouse Ambergris Caye", en: "Ambergris Caye guesthouse", es: "Guesthouse en Ambergris Caye", de: "Gästehaus Ambergris Caye" }, price: "60–120 €", detail: { fr: "Chambre avec ventilateur", en: "Room with fan", es: "Habitación con ventilador", de: "Zimmer mit Ventilator" } },
          { label: { fr: "Resort balnéaire", en: "Beach resort", es: "Resort de playa", de: "Strandresort" }, price: "200–500 €", detail: { fr: "Front de mer, tout-inclus", en: "Beachfront, all-inclusive", es: "Frente al mar, todo incluido", de: "Direkt am Strand, All-Inclusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Rice & beans + poulet (local)", en: "Rice & beans + chicken (local)", es: "Rice & beans + pollo (local)", de: "Reis & Bohnen + Hühnchen (lokal)" }, price: "4–7 €", detail: { fr: "Plat national, partout", en: "National dish, found everywhere", es: "Plato nacional, disponible en todas partes", de: "Nationalgericht, überall" } },
          { label: { fr: "Fruits de mer (Ambergris Caye)", en: "Seafood (Ambergris Caye)", es: "Marisco (Ambergris Caye)", de: "Meeresfrüchte (Ambergris Caye)" }, price: "15–25 €", detail: { fr: "Langouste, crevettes", en: "Lobster, shrimp", es: "Langosta, gambas", de: "Hummer, Garnelen" } },
          { label: { fr: "Restaurant avec vue mer", en: "Sea-view restaurant", es: "Restaurante con vistas al mar", de: "Restaurant mit Meerblick" }, price: "25–45 €", detail: { fr: "Poissons frais & cocktails", en: "Fresh fish & cocktails", es: "Pescado fresco y cócteles", de: "Frischer Fisch und Cocktails" } },
        ],
      },
      {
        id: "transport",
        icon: "🚤",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Ferry Belize City–Ambergris Caye", en: "Belize City–Ambergris Caye ferry", es: "Ferry Belize City–Ambergris Caye", de: "Fähre Belize City–Ambergris Caye" }, price: "15–20 €", detail: { fr: "1h15 en bateau express", en: "1h15 by express boat", es: "1h15 en barco rápido", de: "1 Std. 15 Min. mit dem Expressboot" } },
          { label: { fr: "Bus continent (Cayo–Belize City)", en: "Mainland bus (Cayo–Belize City)", es: "Autobús continental (Cayo–Belize City)", de: "Festlandbus (Cayo–Belize City)" }, price: "5–8 €", detail: { fr: "Confortable, régulier", en: "Comfortable, frequent", es: "Cómodo y frecuente", de: "Bequem, regelmäßig" } },
          { label: { fr: "Excursion Great Blue Hole", en: "Great Blue Hole excursion", es: "Excursión al Great Blue Hole", de: "Tolle Blue-Hole-Tour" }, price: "250–350 €", detail: { fr: "Journée complète en avion + bateau", en: "Full-day trip by plane + boat", es: "Día completo en avión + barco", de: "Ganzer Tag mit Flugzeug + Boot" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Plongée (2 plongées)", en: "Diving (2 dives)", es: "Buceo (2 inmersiones)", de: "Tauchen (2 Tauchgänge)" }, price: "60–90 €", detail: { fr: "Guide + équipement", en: "Guide + equipment", es: "Guía + equipo", de: "Führer + Ausrüstung" } },
          { label: { fr: "Grottes ATM (guide obligatoire)", en: "ATM caves (guide required)", es: "Cuevas ATM (guía obligatorio)", de: "ATM-Höhlen (obligatorischer Führer)" }, price: "60–80 €", detail: { fr: "Demi-journée, inoubliable", en: "Half-day, unforgettable", es: "Medio día, inolvidable", de: "Halber Tag, unvergesslich" } },
          { label: { fr: "Snorkel Hol Chan (demi-journée)", en: "Hol Chan snorkelling (half-day)", es: "Esnórquel en Hol Chan (medio día)", de: "Schnorcheln in Hol Chan (halber Tag)" }, price: "25–40 €", detail: { fr: "Bateau + guide + masque", en: "Boat + guide + mask", es: "Barco + guía + máscara", de: "Boot + Führer + Maske" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Hostel continent + cuisine locale + bus", en: "Mainland hostel + local food + buses", es: "Hostel en el continente + comida local + autobuses", de: "Herberge auf dem Festland + lokale Küche + Bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "120–200 €/j", desc: { fr: "Guesthouse île + restos + plongée", en: "Island guesthouse + restaurants + diving", es: "Casa de huéspedes en la isla + restaurantes + buceo", de: "Inselgasthaus + Restaurants + Tauchen" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" }, daily: "350 €+/j", desc: { fr: "Resort front de mer + Blue Hole + guide privé", en: "Beachfront resort + Blue Hole + private guide", es: "Resort frente al mar + Blue Hole + guía privado", de: "Strandresort + Blue Hole + privater Guide" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: {
        fr: "Belize City (1j) → Ambergris Caye / Blue Hole (4j) → Cayo & Caracol (3j) → Cockscomb & côte (2j)", en: "Belize City (1d) → Ambergris Caye / Blue Hole (4d) → Cayo & Caracol (3d) → Cockscomb & coast (2d)", es: "Belize City (1d) → Ambergris Caye / Blue Hole (4d) → Cayo y Caracol (3d) → Cockscomb y costa (2d)", de: "Belize City (1T) → Ambergris Caye / Blue Hole (4T) → Cayo & Caracol (3T) → Cockscomb & Küste (2T)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Belize City", en: "Return flight Paris–Belize City", es: "Vuelo ida y vuelta Madrid–Belize City", de: "Hin- und Rückflug Paris–Belize City" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "400–600 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" }, amount: "300–450 €" },
            { label: { fr: "Ferries & transports", en: "Ferries & transport", es: "Ferris y transporte", de: "Fähren und Transport" }, amount: "200–300 €" },
            { label: { fr: "Activités (snorkel, grottes)", en: "Activities (snorkelling, caves)", es: "Actividades (esnórquel, cuevas)", de: "Aktivitäten (Schnorcheln, Höhlen)" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Belize City", en: "Return flight Paris–Belize City", es: "Vuelo ida y vuelta Madrid–Belize City", de: "Hin- und Rückflug Paris–Belize City" }, amount: "700–1 100 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "1 000–1 600 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails", es: "Comida y cócteles", de: "Essen und Cocktails" }, amount: "500–750 €" },
            { label: { fr: "Plongées & excursions", en: "Dives & excursions", es: "Inmersiones y excursiones", de: "Tauchgänge und Ausflüge" }, amount: "700–1 000 €" },
            { label: { fr: "Transports & imprévus", en: "Transport & contingency", es: "Transporte e imprevistos", de: "Transport und unvorhergesehene Ereignisse" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo", de: "Luxus" },
          color: "#f59e0b",
          total: "9 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris (Business)", en: "Return flight Paris (Business)", es: "Vuelo ida y vuelta Madrid (Business)", de: "Hin- und Rückflug Paris (Business)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Resorts front de mer (10 nuits)", en: "Beachfront resorts (10 nights)", es: "Resorts frente al mar (10 noches)", de: "Strandresorts (10 Nächte)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Plongée Blue Hole + excursions privées", en: "Blue Hole dive + private excursions", es: "Inmersión en el Blue Hole + excursiones privadas", de: "Blue-Hole-Tauchen + private Ausflüge" }, amount: "800–1 500 €" },
            { label: { fr: "Gastronomie & spa", en: "Fine dining & spa", es: "Alta gastronomía y spa", de: "Gastronomie & Spa" }, amount: "600–1 000 €" },
            { label: { fr: "Transfers privés & extras", en: "Private transfers & extras", es: "Traslados privados y extras", de: "Privattransfers und Extras" }, amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~12h avec escale (via Miami ou Houston)", en: "~12h with a layover (via Miami or Houston)", es: "~12h con escala (vía Miami o Houston)", de: "ca. 12 Std. mit Zwischenstopp (über Miami oder Houston)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Sans visa 30 jours (Français), extensible sur place", en: "No visa for 30 days (French citizens), extendable locally", es: "Sin visado 30 días (españoles), ampliable in situ", de: "Visumfrei 30 Tage (Französisch), vor Ort verlängerbar" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Dollar bélizien (2 BZD = 1 USD) — USD acceptés partout", en: "Belize dollar (2 BZD = 1 USD) — USD accepted everywhere", es: "Dólar beliceño (2 BZD = 1 USD) — el USD se acepta en todas partes", de: "Belize-Dollar (2 BZD = 1 USD) – USD wird überall akzeptiert" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Anglais (officiel), Espagnol, Kriol bélizien", en: "English (official), Spanish, Belizean Kriol", es: "Inglés (oficial), español, criollo beliceño", de: "Englisch (offiziell), Spanisch, belizianisches Kriol" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type A/B/G – 110 V", en: "Type A/B/G – 110 V", es: "Tipo A/B/G – 110 V", de: "Typ A/B/G – 110 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red móvil", de: "Mobilfunknetz" }, value: { fr: "Couverture correcte sur les îles, limitée en jungle", en: "Good coverage on the islands, limited in the jungle", es: "Cobertura correcta en las islas, limitada en la selva", de: "Korrekte Abdeckung auf den Inseln, begrenzt im Dschungel" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo", de: "Leitungswasser" }, value: { fr: "Non potable — eau en bouteille ou filtrée", en: "Not drinkable — bottled or filtered water", es: "No potable — agua embotellada o filtrada", de: "Nicht trinkbares Wasser – abgefülltes oder gefiltertes Wasser" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Antipaludéen recommandé en zone continentale et jungle", en: "Antimalarial medication recommended on the mainland and in the jungle", es: "Se recomienda antipalúdico en zona continental y selva", de: "Antimalariamittel empfohlen in Kontinental- und Dschungelgebieten" } },
  ],
};
