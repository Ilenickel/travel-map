export const ANDORRA = {
  code: "AND",
  numericId: 20,
  name: { fr: "Andorre", en: "Andorra", es: "Andorra", de: "Andorra" },
  emoji: "🇦🇩",
  capital: { fr: "Andorre-la-Vieille", en: "Andorra la Vella", es: "Andorra la Vella", de: "Andorra la Vella" },
  language: { fr: "Catalan", en: "Catalan", es: "Catalán", de: "Katalanisch" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)", es: "Euro (EUR)", de: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 70, budgetMid: 130,
    tripMin: 900, tripMid: 1700,
  },
  criteria: {
    unesco: 1,
    nature: 2,
    randonnee: 2,
    gastronomie: 1,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 1,
    plage: 0,
    plongee: 0,
  },
  description: {
    fr: "Andorre est une principauté co-dirigée par la France et l'Espagne, nichée dans les Pyrénées à plus de 1 000 mètres d'altitude. Malgré sa superficie de 468 km², elle offre un domaine skiable parmi les plus grands de la péninsule ibérique avec Grandvalira, des randonnées estivales spectaculaires et un statut de paradis du shopping hors taxes qui attire des millions de visiteurs chaque année. Des églises romanes du XIe siècle témoignent d'un riche patrimoine médiéval.", en: "Andorra is a principality co-ruled by France and Spain, nestled in the Pyrenees at over 1,000 metres of altitude. Despite its small size of 468 km², it boasts one of the largest ski areas in the Iberian Peninsula with Grandvalira, spectacular summer hiking, and a tax-free shopping paradise status that draws millions of visitors every year. Eleventh-century Romanesque churches bear witness to a rich medieval heritage.", es: "Andorra es un principado codirigido por Francia y España, enclavado en los Pirineos a más de 1000 metros de altitud. Pese a su reducida superficie de 468 km², cuenta con uno de los dominios esquiables más grandes de la península ibérica con Grandvalira, senderismo estival espectacular y un estatus de paraíso de las compras libres de impuestos que atrae a millones de visitantes cada año. Iglesias románicas del siglo XI dan testimonio de un rico patrimonio medieval.", de: "Andorra ist ein von Frankreich und Spanien gemeinsam regiertes Fürstentum, eingebettet in den Pyrenäen auf über 1.000 Metern über dem Meeresspiegel. Trotz seiner Fläche von 468 km² bietet es mit Grandvalira eines der größten Skigebiete der Iberischen Halbinsel, spektakuläre Sommerwanderungen und den Status eines zollfreien Einkaufsparadieses, das jedes Jahr Millionen von Besuchern anzieht. Romanische Kirchen aus dem 11. Jahrhundert zeugen von einem reichen mittelalterlichen Erbe.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Saison ski", en: "Ski season", es: "Temporada de esquí", de: "Skisaison" },
      color: "#22c55e",
      description: {
        fr: "La haute saison pour le ski avec le domaine Grandvalira et ses 210 km de pistes. Enneigement garanti à haute altitude, villages animés, shopping détaxé et ambiance montagne incomparable dans les Pyrénées.", en: "The high season for skiing with the Grandvalira ski area and its 210 km of slopes. Guaranteed snow at high altitude, lively villages, tax-free shopping and an unmatched mountain atmosphere in the Pyrenees.", es: "La temporada alta de esquí con el dominio de Grandvalira y sus 210 km de pistas. Nieve garantizada en altitud, pueblos animados, compras libres de impuestos y un ambiente de montaña incomparable en los Pirineos.", de: "Hochsaison zum Skifahren im Grandvalira-Gebiet mit seinen 210 Pistenkilometern. Schneesicherheit in großer Höhe, lebendige Dörfer, steuerfreies Einkaufen und unvergleichliche Bergatmosphäre in den Pyrenäen.",
      },
      icon: "⛷️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Randonnée estivale", en: "Summer hiking", es: "Senderismo estival", de: "Sommerwandern" },
      color: "#f59e0b",
      description: {
        fr: "L'été dévoile les sommets pyrénéens, les lacs de montagne et des sentiers de grande randonnée à couper le souffle. Le Cirque de Tristaina, les lacs del Pessons et les crêtes frontalières offrent des panoramas exceptionnels.", en: "Summer reveals the Pyrenean peaks, mountain lakes, and breathtaking long-distance trails. The Tristaina Cirque, the Pessons lakes and the border ridges offer exceptional panoramas.", es: "El verano revela las cumbres pirenaicas, los lagos de montaña y senderos de gran recorrido de infarto. El Circo de Tristaina, los lagos del Pessons y las crestas fronterizas ofrecen panorámicas excepcionales.", de: "Der Sommer offenbart die Gipfel der Pyrenäen, Bergseen und atemberaubende Fernwanderwege. Der Cirque de Tristaina, die Pessons-Seen und die Grenzkämme bieten außergewöhnliche Panoramen.",
      },
      icon: "🥾",
    },
  ],
  weatherCities: [
    {
      id: "andorra_la_vella",
      name: { fr: "Andorre-la-Vieille", en: "Andorra la Vella", es: "Andorra la Vella", de: "Andorra la Vella" },
      region: "Parròquia d'Andorra la Vella",
      data: [
        { month: "Jan", temp: -1, rain: 60, icon: "❄️" },
        { month: "Fév", temp: 1, rain: 55, icon: "❄️" },
        { month: "Mar", temp: 5, rain: 65, icon: "❄️" },
        { month: "Avr", temp: 9, rain: 80, icon: "⛅" },
        { month: "Mai", temp: 13, rain: 90, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 70, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 55, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 60, icon: "☀️" },
        { month: "Sep", temp: 16, rain: 75, icon: "☀️" },
        { month: "Oct", temp: 11, rain: 80, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 70, icon: "❄️" },
        { month: "Déc", temp: 1, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Grandvalira",
      region: { fr: "Parròquies d'Encamp et Canillo", en: "Parishes of Encamp and Canillo", es: "Parroquias de Encamp y Canillo", de: "Parroquien von Encamp und Canillo" },
      description: {
        fr: "Grandvalira est le plus grand domaine skiable de la péninsule ibérique avec 210 km de pistes réparties sur 6 paroisses et 2 stations (Pas de la Casa et Soldeu). Les pistes bien entretenues, les ESF locales et les nombreux restaurants d'altitude en font une destination ski prisée des familles françaises et espagnoles. L'altitude garantit un bon enneigement de décembre à avril.", en: "Grandvalira is the largest ski area in the Iberian Peninsula, with 210 km of slopes spread across 6 parishes and 2 resorts (Pas de la Casa and Soldeu). Well-groomed runs, local ski schools and numerous mountain restaurants make it a popular ski destination for French and Spanish families. The altitude guarantees good snow cover from December to April.", es: "Grandvalira es el mayor dominio esquiable de la península ibérica, con 210 km de pistas repartidas en 6 parroquias y 2 estaciones (Pas de la Casa y Soldeu). Las pistas bien cuidadas, las escuelas de esquí locales y los numerosos restaurantes de altura la convierten en un destino de esquí muy apreciado por familias francesas y españolas. La altitud garantiza buena nieve de diciembre a abril.", de: "Grandvalira ist das größte Skigebiet auf der Iberischen Halbinsel mit 210 Pistenkilometern, verteilt auf 6 Gemeinden und 2 Skigebiete (Pas de la Casa und Soldeu). Die gut gepflegten Pisten, der örtliche ESF und zahlreiche Bergrestaurants machen es zu einem beliebten Skigebiet für französische und spanische Familien. Die Höhenlage garantiert eine gute Schneedecke von Dezember bis April.",
      },
      wikipedia: "File:Grandvalira ski resort, Andorra5.jpg",
      tags: ["Ski", "Montagne"],
      mustSee: [
        { name: { fr: "Soldeu — station principale avec pistes débutants et intermédiaires", en: "Soldeu — main resort with beginner and intermediate slopes", es: "Soldeu — estación principal con pistas para principiantes e intermedios", de: "Soldeu – Hauptort mit Pisten für Anfänger und Fortgeschrittene" }, wikipedia: "Soldeu" },
        { name: { fr: "Pas de la Casa — station frontalière avec shopping et nightlife animé", en: "Pas de la Casa — border resort with shopping and lively nightlife", es: "Pas de la Casa — estación fronteriza con compras y animada vida nocturna", de: "Pas de la Casa – Grenzort mit Einkaufsmöglichkeiten und lebhaftem Nachtleben" }, wikipedia: "File:Pas de la Casa (1).jpg" },
        { name: { fr: "Grau Roig — secteur tranquille avec belle vue sur les pistes", en: "Grau Roig — quiet sector with beautiful views over the slopes", es: "Grau Roig — sector tranquilo con bonitas vistas a las pistas", de: "Grau Roig – ruhige Gegend mit schöner Aussicht auf die Pisten" }, wikipedia: "Grau_Roig" },
        { name: { fr: "Piste géante Avet — slalom géant de Coupe du Monde à Soldeu", en: "Avet giant slope — World Cup giant slalom run in Soldeu", es: "Pista gigante Avet — eslalon gigante de Copa del Mundo en Soldeu", de: "Avet Riesenslalom – Weltcup-Riesenslalom in Soldeu" }, wikipedia: "File:Grandvalira ski resort, Andorra6.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Andorre-la-Vieille", en: "Andorra la Vella", es: "Andorra la Vella", de: "Andorra la Vella" },
      region: "Parròquia d'Andorra la Vella",
      description: {
        fr: "La capitale d'Andorre est la plus haute capitale d'Europe à 1 023 m d'altitude. Malgré sa petite taille, elle offre un contraste saisissant entre sa vieille ville médiévale autour de la Casa de la Vall et son centre commercial moderne réputé pour le shopping hors taxes. L'Avinguda Meritxell concentre les grandes marques à des prix défiant toute concurrence.", en: "Andorra's capital is the highest capital in Europe, at 1,023 m of altitude. Despite its small size, it offers a striking contrast between its medieval old town around the Casa de la Vall and its modern shopping district renowned for tax-free deals. Avinguda Meritxell is lined with major brands at unbeatable prices.", es: "La capital de Andorra es la capital más alta de Europa, a 1023 m de altitud. Pese a su reducido tamaño, ofrece un contraste sorprendente entre su casco antiguo medieval en torno a la Casa de la Vall y su moderno centro comercial famoso por las compras libres de impuestos. La Avinguda Meritxell concentra las grandes marcas a precios inmejorables.", de: "Die Hauptstadt Andorras ist mit 1.023 m über dem Meeresspiegel die höchstgelegene Hauptstadt Europas. Trotz seiner geringen Größe bietet es einen auffälligen Kontrast zwischen seiner mittelalterlichen Altstadt rund um Casa de la Vall und seinem modernen Einkaufszentrum, das für Duty-Free-Einkäufe bekannt ist. Avinguda Meritxell vereint große Marken zu unschlagbaren Preisen.",
      },
      wikipedia: "Andorra_la_Vella",
      tags: ["Ville", "Shopping", "Histoire"],
      mustSee: [
        { name: { fr: "Casa de la Vall — Parlement historique du XVIe siècle, monument symbolique", en: "Casa de la Vall — historic 16th-century Parliament, a symbolic landmark", es: "Casa de la Vall — Parlamento histórico del siglo XVI, monumento emblemático", de: "Casa de la Vall – Historisches Parlamentsgebäude aus dem 16. Jahrhundert, symbolisches Denkmal" }, wikipedia: "Casa_de_la_Vall" },
        { name: { fr: "Église Sant Esteve — église romane au cœur de la vieille ville", en: "Sant Esteve Church — Romanesque church in the heart of the old town", es: "Iglesia de Sant Esteve — iglesia románica en el corazón del casco antiguo", de: "Kirche Sant Esteve – romanische Kirche im Herzen der Altstadt" }, wikipedia: "File:Església de Sant Esteve de Bixessarri - 2.jpg" },
        { name: { fr: "Caldea — complexe thermal et spa pyrénéen, plus grand spa d'Europe du Sud", en: "Caldea — Pyrenean thermal spa complex, the largest in Southern Europe", es: "Caldea — complejo termal y spa pirenaico, el mayor del sur de Europa", de: "Caldea – Thermalkomplex und Spa in den Pyrenäen, größtes Spa in Südeuropa" }, wikipedia: "Caldea" },
        { name: { fr: "Avinguda Meritxell — boulevard des shopping duty-free", en: "Avinguda Meritxell — the duty-free shopping boulevard", es: "Avinguda Meritxell — el bulevar de las compras libres de impuestos", de: "Avinguda Meritxell – Duty-Free-Einkaufsboulevard" }, wikipedia: "File:Andorra la vella felul.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Patrimoine roman", en: "Romanesque heritage", es: "Patrimonio románico", de: "Romanisches Erbe" },
      region: { fr: "Parròquies de La Massana et Ordino", en: "Parishes of La Massana and Ordino", es: "Parroquias de La Massana y Ordino", de: "Parroquien von La Massana und Ordino" },
      description: {
        fr: "Andorre conserve un remarquable patrimoine d'églises romanes du XIe–XIIIe siècles, témoignages de sa fondation médiévale. Sant Joan de Caselles, Sant Climent de Pal et Sant Martí de la Cortinada ornées de fresques médiévales authentiques sont accessibles facilement. Le musée national de l'art roman de Catalogne (MNAC) à Barcelone conserve les plus belles œuvres déplacées.", en: "Andorra preserves a remarkable heritage of 11th–13th-century Romanesque churches, testament to its medieval origins. Sant Joan de Caselles, Sant Climent de Pal and Sant Martí de la Cortinada, adorned with authentic medieval frescoes, are all easily accessible. The National Museum of Catalan Romanesque Art (MNAC) in Barcelona holds the finest relocated works.", es: "Andorra conserva un notable patrimonio de iglesias románicas de los siglos XI–XIII, testimonio de su fundación medieval. Sant Joan de Caselles, Sant Climent de Pal y Sant Martí de la Cortinada, decoradas con auténticos frescos medievales, son de fácil acceso. El Museo Nacional de Arte Románico de Cataluña (MNAC) en Barcelona conserva las obras más destacadas trasladadas allí.", de: "Andorra bewahrt ein bemerkenswertes Erbe romanischer Kirchen aus dem 11.–13. Jahrhundert, Zeugnisse seiner mittelalterlichen Gründung. Sant Joan de Caselles, Sant Climent de Pal und Sant Martí de la Cortinada, die mit authentischen mittelalterlichen Fresken geschmückt sind, sind leicht zu erreichen. Das Nationalmuseum für romanische Kunst Kataloniens (MNAC) in Barcelona bewahrt die schönsten verdrängten Werke.",
      },
      wikipedia: "File:QUERALBS - St. Jaume.JPG",
      tags: ["Architecture", "Histoire", "Culture"],
      mustSee: [
        { name: { fr: "Sant Joan de Caselles — tour roman du XIIe siècle avec retable polychrome", en: "Sant Joan de Caselles — 12th-century Romanesque tower with a polychrome altarpiece", es: "Sant Joan de Caselles — torre románica del siglo XII con retablo policromado", de: "Sant Joan de Caselles – romanischer Turm aus dem 12. Jahrhundert mit polychromem Altarbild" }, wikipedia: "Sant_Joan_de_Caselles" },
        { name: { fr: "Sant Climent de Pal — église romane avec clocher carré typique", en: "Sant Climent de Pal — Romanesque church with a typical square bell tower", es: "Sant Climent de Pal — iglesia románica con el típico campanario cuadrado", de: "Sant Climent de Pal – romanische Kirche mit typischem quadratischen Glockenturm" }, wikipedia: "File:Sant Climent de Pal 2017.jpg" },
        { name: { fr: "Sant Martí de la Cortinada — fresques romanes conservées in situ", en: "Sant Martí de la Cortinada — Romanesque frescoes preserved in situ", es: "Sant Martí de la Cortinada — frescos románicos conservados in situ", de: "Sant Martí de la Cortinada – vor Ort erhaltene romanische Fresken" }, wikipedia: "File:2013._San_Martí_de_La_Cortinada._Andorra_37.jpg" },
        { name: { fr: "Musée national de l'Andorre à Ordino — histoire et culture andorrane", en: "National Museum of Andorra in Ordino — Andorran history and culture", es: "Museo Nacional de Andorra en Ordino — historia y cultura andorrana", de: "Nationalmuseum von Andorra in Ordino – andorranische Geschichte und Kultur" }, wikipedia: "Ordino" },
      ],
    },
    {
      id: 4,
      name: { fr: "Randonnées et lacs de montagne", en: "Hiking and mountain lakes", es: "Senderismo y lagos de montaña", de: "Wander- und Bergseen" },
      region: { fr: "Tout le pays", en: "Throughout the country", es: "Todo el país", de: "Das ganze Land" },
      description: {
        fr: "En été, Andorre se transforme en paradis de la randonnée avec plus de 600 km de sentiers balisés sillonnant les Pyrénées. Le Cirque de Tristaina avec ses trois lacs glaciaires, les lacs del Pessons en cirque grandiose, et le pic de Coma Pedrosa (2 943 m, point culminant) offrent des expériences inoubliables à des niveaux de difficulté variés.", en: "In summer, Andorra becomes a hiking paradise with over 600 km of marked trails winding through the Pyrenees. The Tristaina Cirque with its three glacial lakes, the grand cirque of the Pessons lakes, and Coma Pedrosa peak (2,943 m, the country's highest point) offer unforgettable experiences at varying levels of difficulty.", es: "En verano, Andorra se convierte en un paraíso del senderismo con más de 600 km de sendas señalizadas que recorren los Pirineos. El Circo de Tristaina con sus tres lagos glaciares, el grandioso circo de los lagos del Pessons y el pico de Coma Pedrosa (2943 m, el punto más alto) ofrecen experiencias inolvidables con distintos niveles de dificultad.", de: "Im Sommer verwandelt sich Andorra in ein Wanderparadies mit mehr als 600 km markierten Wegen kreuz und quer durch die Pyrenäen. Der Cirque de Tristaina mit seinen drei Gletscherseen, die Pessons-Seen in einem grandiosen Kar und der Gipfel des Coma Pedrosa (2.943 m, höchster Punkt) bieten unvergessliche Erlebnisse in unterschiedlichen Schwierigkeitsgraden.",
      },
      wikipedia: "File:Andorra l Vella-20100128-RM-165853.jpg",
      tags: ["Randonnée", "Nature", "Montagne"],
      mustSee: [
        { name: { fr: "Cirque de Tristaina — trois lacs glaciaires à 2 300 m, randonnée facile", en: "Tristaina Cirque — three glacial lakes at 2,300 m, an easy hike", es: "Circo de Tristaina — tres lagos glaciares a 2300 m, ruta fácil", de: "Cirque de Tristaina – drei Gletscherseen auf 2.300 m, leichte Wanderung" }, wikipedia: "File:Tristaina 50 Cirque.jpg" },
        { name: { fr: "Lacs del Pessons — cirque de 8 lacs à 2 400 m", en: "Pessons lakes — a cirque of 8 lakes at 2,400 m", es: "Lagos del Pessons — circo de 8 lagos a 2400 m", de: "Lacs del Pessons – Kar aus 8 Seen auf 2.400 m" }, wikipedia: "File:Circ dels Pessons (Encamp) - 12.jpg" },
        { name: { fr: "Pic de Coma Pedrosa — point culminant d'Andorre (2 943 m)", en: "Coma Pedrosa peak — Andorra's highest point (2,943 m)", es: "Pico de Coma Pedrosa — punto más alto de Andorra (2943 m)", de: "Coma Pedrosa Peak – höchster Punkt in Andorra (2.943 m)" }, wikipedia: "Coma_Pedrosa" },
        { name: { fr: "Vallée d'Ordino — village typique andorran avec musée de la forêt", en: "Ordino valley — a typical Andorran village with a forest museum", es: "Valle de Ordino — pueblo típico andorrano con museo del bosque", de: "Ordino-Tal – typisch andorranisches Dorf mit Waldmuseum" }, wikipedia: "Ordino" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Andorre est connue pour son shopping hors taxes sur l'alcool, le tabac, l'électronique et les parfums. Les hébergements sont abordables hors saison ski. En hiver, les stations pratiquent des tarifs élevés. La restauration reste dans des prix raisonnables pour des Pyrénées.", en: "Andorra is known for its tax-free shopping on alcohol, tobacco, electronics and perfume. Accommodation is affordable outside ski season. In winter, resort prices rise sharply. Dining out remains reasonably priced for the Pyrenees.", es: "Andorra es conocida por sus compras libres de impuestos en alcohol, tabaco, electrónica y perfumes. El alojamiento es asequible fuera de la temporada de esquí. En invierno, las estaciones aplican tarifas elevadas. La restauración se mantiene en precios razonables para los Pirineos.", de: "Andorra ist für seinen zollfreien Einkauf von Alkohol, Tabak, Elektronik und Parfüm bekannt. Außerhalb der Skisaison ist die Unterkunft erschwinglich. Im Winter verlangen die Resorts hohe Preise. Die Verpflegung bleibt für die Pyrenäen preisgünstig.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge / gîte de montagne (dortoir)", en: "Mountain hostel / lodge (dorm)", es: "Albergue / refugio de montaña (dormitorio)", de: "Bergherberge / Lodge (Schlafsaal)" }, price: "20–35 €", detail: { fr: "Refuges et auberges idéaux pour les randonneurs", en: "Refuges and hostels ideal for hikers", es: "Refugios y albergues ideales para senderistas", de: "Ideale Schutzhütten und Herbergen für Wanderer" } },
          { label: { fr: "Hôtel 2–3 étoiles hors saison", en: "2–3 star hotel off season", es: "Hotel 2–3 estrellas fuera de temporada", de: "2–3-Sterne-Hotel außerhalb der Saison" }, price: "55–90 €", detail: { fr: "Bonne offre à Andorre-la-Vieille et dans les paroisses", en: "Good options in Andorra la Vella and the parishes", es: "Buena oferta en Andorra la Vella y en las parroquias", de: "Gutes Angebot in Andorra la Vella und Gemeinden" } },
          { label: { fr: "Hôtel ski en haute saison (décembre–mars)", en: "Ski hotel in high season (December–March)", es: "Hotel de esquí en temporada alta (diciembre–marzo)", de: "Skihotel in der Hochsaison (Dezember–März)" }, price: "100–180 €", detail: { fr: "Prix plus élevés en période de neige et week-ends", en: "Higher prices during snow season and weekends", es: "Precios más altos en temporada de nieve y fines de semana", de: "Höhere Preise während der Schneeperioden und an Wochenenden" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Boulangerie ou snack", en: "Bakery or snack", es: "Panadería o tentempié", de: "Bäckerei oder Snack" }, price: "5–10 €", detail: { fr: "Croissants, sandwichs et coca andorrane typiques", en: "Croissants, sandwiches and typical Andorran flatbread", es: "Cruasanes, bocadillos y coca andorrana típica", de: "Croissants, Sandwiches und typisch andorranische Coca" } },
          { label: { fr: "Restaurant montagne, menu midi", en: "Mountain restaurant, lunch menu", es: "Restaurante de montaña, menú del mediodía", de: "Bergrestaurant, Mittagskarte" }, price: "12–20 €", detail: { fr: "Escudella (pot-au-feu catalan), trinxat, grillades de montagne", en: "Escudella (Catalan stew), trinxat, mountain grilled meats", es: "Escudella (cocido catalán), trinxat, carnes a la brasa de montaña", de: "Escudella (katalanischer Eintopf), Trinxat, Berggrills" } },
          { label: { fr: "Restaurant dîner ou chalet d'altitude", en: "Dinner restaurant or mountain chalet", es: "Restaurante de cena o chalet de altura", de: "Abendessen im Restaurant oder in der Berghütte" }, price: "22–40 €", detail: { fr: "Cuisine pyrénéenne, raclette, fondues et charcuteries locales", en: "Pyrenean cuisine, raclette, fondue and local cured meats", es: "Cocina pirenaica, raclette, fondues y embutidos locales", de: "Pyrenäenküche, Raclette, Fondue und lokale Wurstwaren" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus depuis Toulouse ou Barcelone", en: "Bus from Toulouse or Barcelona", es: "Autobús desde Toulouse o Barcelona", de: "Bus von Toulouse oder Barcelona" }, price: "10–25 €", detail: { fr: "Navettes régulières depuis les gares TGV les plus proches", en: "Regular shuttles from the nearest high-speed rail stations", es: "Lanzaderas regulares desde las estaciones de alta velocidad más cercanas", de: "Regelmäßige Shuttles von den nächstgelegenen TGV-Bahnhöfen" } },
          { label: { fr: "Bus national andorran (L1–L5)", en: "Andorran national bus (L1–L5)", es: "Autobús nacional andorrano (L1–L5)", de: "Andorranischer Nationalbus (L1–L5)" }, price: "1–3 €", detail: { fr: "Réseau couvrant toutes les paroisses de la principauté", en: "Network covering all parishes of the principality", es: "Red que cubre todas las parroquias del principado", de: "Netz, das alle Pfarreien des Fürstentums abdeckt" } },
          { label: { fr: "Forfait ski Grandvalira (journée)", en: "Grandvalira ski pass (day)", es: "Forfait de esquí Grandvalira (día)", de: "Grandvalira Skipass (Tag)" }, price: "39–50 €", detail: { fr: "Tarifs réduits en réservant à l'avance en ligne", en: "Discounted rates for online advance booking", es: "Tarifas reducidas reservando con antelación en línea", de: "Reduzierte Preise bei Online-Buchung im Voraus" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Caldea (spa thermal)", en: "Caldea (thermal spa)", es: "Caldea (spa termal)", de: "Caldea (Thermalbad)" }, price: "35–55 €", detail: { fr: "3h d'accès aux bassins thermaux et jacuzzis extérieurs", en: "3 hours' access to thermal pools and outdoor hot tubs", es: "3h de acceso a las piscinas termales y jacuzzis exteriores", de: "3 Stunden Zugang zu Thermalbecken und Whirlpools im Freien" } },
          { label: { fr: "Location vélo de montagne (VTT)", en: "Mountain bike rental", es: "Alquiler de bicicleta de montaña (BTT)", de: "Mountainbike-Verleih (MTB)" }, price: "25–40 €", detail: { fr: "VTT électrique disponible pour les pistes estivales", en: "Electric mountain bikes available for summer trails", es: "BTT eléctricas disponibles para las rutas estivales", de: "Für Sommertouren steht ein elektrisches Mountainbike zur Verfügung" } },
          { label: { fr: "Visite distillerie ou cave à vins", en: "Distillery or winery tour", es: "Visita a destilería o bodega", de: "Besuch einer Brennerei oder eines Weinkellers" }, price: "8–15 €", detail: { fr: "Dégustation de whisky ou vins des Pyrénées", en: "Tasting of whisky or Pyrenean wines", es: "Degustación de whisky o vinos de los Pirineos", de: "Verkostung von Whisky oder Pyrenäenweinen" } },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
        daily: "70–100 €/j",
        desc: { fr: "Auberge ou refuge, repas simples, bus national, randonnées gratuites", en: "Hostel or refuge, simple meals, national bus, free hiking", es: "Albergue o refugio, comidas sencillas, autobús nacional, senderismo gratuito", de: "Herberge oder Schutzhütte, einfache Mahlzeiten, Nationalbus, kostenlose Wanderungen" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
        daily: "130–190 €/j",
        desc: { fr: "Hôtel confort, restaurants de montagne, forfait ski ou spa, shopping", en: "Comfort hotel, mountain restaurants, ski pass or spa, shopping", es: "Hotel confort, restaurantes de montaña, forfait de esquí o spa, compras", de: "Komforthotel, Bergrestaurants, Ski- oder Wellnesspaket, Shopping" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "5 jours", en: "5 days", es: "5 días", de: "5 Tage" },
      route: { fr: "Andorre-la-Vieille – Grandvalira – Ordino – Randonnées", en: "Andorra la Vella – Grandvalira – Ordino – Hiking", es: "Andorra la Vella – Grandvalira – Ordino – Senderismo", de: "Andorra la Vella – Grandvalira – Ordino – Wandern" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "450 – 650 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Transport A/R depuis Toulouse ou Barcelone", en: "Round-trip transport from Toulouse or Barcelona", es: "Transporte ida y vuelta desde Toulouse o Barcelona", de: "Rücktransport ab Toulouse oder Barcelona" }, amount: "30–70 €" },
            { label: { fr: "Hébergement (4 nuits)", en: "Accommodation (4 nights)", es: "Alojamiento (4 noches)", de: "Unterkunft (4 Nächte)" }, amount: "80–140 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "15–25 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "160–240 €" },
            { label: { fr: "Activités (ski ou randonnée + spa)", en: "Activities (skiing or hiking + spa)", es: "Actividades (esquí o senderismo + spa)", de: "Aktivitäten (Skifahren oder Wandern + Spa)" }, amount: "80–140 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "900 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Transport A/R depuis Paris en voiture ou avion Toulouse", en: "Round-trip transport from Paris by car or flight via Toulouse", es: "Transporte ida y vuelta desde París en coche o avión vía Toulouse", de: "Rücktransport von Paris mit dem Auto oder Flugzeug nach Toulouse" }, amount: "80–180 €" },
            { label: { fr: "Hébergement (4 nuits)", en: "Accommodation (4 nights)", es: "Alojamiento (4 noches)", de: "Unterkunft (4 Nächte)" }, amount: "320–480 €" },
            { label: { fr: "Transports locaux", en: "Local transport", es: "Transporte local", de: "Nahverkehr" }, amount: "20–40 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks", es: "Comida + bebidas", de: "Essen + Getränke" }, amount: "280–400 €" },
            { label: { fr: "Activités (forfait ski + spa Caldea)", en: "Activities (ski pass + Caldea spa)", es: "Actividades (forfait de esquí + spa Caldea)", de: "Aktivitäten (Ski- und Caldea-Spa-Paket)" }, amount: "200–280 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "Pas d'aéroport — accès par route depuis Toulouse (3h) ou Barcelone (3h)", en: "No airport — accessible by road from Toulouse (3h) or Barcelona (3h)", es: "Sin aeropuerto — acceso por carretera desde Toulouse (3h) o Barcelona (3h)", de: "Kein Flughafen – Anfahrt über die Straße von Toulouse (3 Std.) oder Barcelona (3 Std.)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa requis — non membre de l'UE mais accord de libre circulation avec France et Espagne", en: "No visa required — not an EU member but has a free movement agreement with France and Spain", es: "No se requiere visado — no es miembro de la UE, pero tiene acuerdo de libre circulación con Francia y España", de: "Kein Visum erforderlich – kein Mitglied der EU, aber Freizügigkeitsabkommen mit Frankreich und Spanien" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Euro (€) — TVA très réduite, paradis du shopping hors taxes", en: "Euro (€) — very low VAT, a tax-free shopping paradise", es: "Euro (€) — IVA muy reducido, paraíso de las compras libres de impuestos", de: "Euro (€) – Sehr reduzierte Mehrwertsteuer, steuerfreies Einkaufsparadies" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Catalan (officiel) — espagnol et français très largement parlés", en: "Catalan (official) — Spanish and French widely spoken", es: "Catalán (oficial) — el español y el francés se hablan ampliamente", de: "Katalanisch (offiziell) – weit verbreitetes Spanisch und Französisch" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F (identique à la France) — aucun adaptateur nécessaire", en: "Type C/F (same as France) — no adapter needed", es: "Tipo C/F (igual que Francia) — no se necesita adaptador", de: "Typ C/F (wie Frankreich) – kein Adapter erforderlich" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Carte européenne d'assurance maladie non valable — assurance voyage recommandée", en: "European health insurance card not valid — travel insurance recommended", es: "La tarjeta sanitaria europea no es válida — se recomienda seguro de viaje", de: "Ungültige Europäische Krankenversicherungskarte – Reiseversicherung empfohlen" } },
    { icon: "🛒", label: { fr: "Shopping", en: "Shopping", es: "Compras", de: "Einkaufen" }, value: { fr: "Alcool, tabac, parfums, électronique et vêtements à prix très réduits hors taxes", en: "Alcohol, tobacco, perfume, electronics and clothing at heavily discounted tax-free prices", es: "Alcohol, tabaco, perfumes, electrónica y ropa a precios muy reducidos libres de impuestos", de: "Alkohol, Tabak, Parfüm, Elektronik und Kleidung zu stark reduzierten Preisen ohne Steuern" } },
    { icon: "⛷️", label: { fr: "Ski", en: "Skiing", es: "Esquí", de: "Ski" }, value: { fr: "Grandvalira : 210 km de pistes, 1 900–2 640 m d'altitude, parmi les plus abordables des Pyrénées", en: "Grandvalira: 210 km of slopes, 1,900–2,640 m altitude, among the most affordable in the Pyrenees", es: "Grandvalira: 210 km de pistas, 1900–2640 m de altitud, entre los más asequibles de los Pirineos", de: "Grandvalira: 210 km Pisten, 1.900–2.640 m Höhe, eine der günstigsten in den Pyrenäen" } },
  ],
};
