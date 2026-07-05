export const HAITI = {
  code: "HTI",
  numericId: 332,
  name: { fr: "Haïti", en: "Haiti" },
  emoji: "🇭🇹",
  capital: { fr: "Port-au-Prince", en: "Port-au-Prince" },
  language: { fr: "Créole haïtien, Français", en: "Haitian Creole, French" },
  currency: { fr: "Gourde haïtienne (HTG)", en: "Haitian gourde (HTG)" },
  timezone: "UTC-5",
  filter: { budgetMin: 35, budgetMid: 70, tripMin: 850, tripMid: 1800 },
  description: {
    fr: "Haïti, première république noire du monde fondée en 1804 après une révolution d'esclaves unique dans l'histoire, possède un patrimoine culturel extraordinaire mêlant influences africaines, françaises et taïnos. Le pays abrite des sites classés UNESCO comme la Citadelle Laferrière et le Sans-Souci, témoignages d'une grandeur passée. ⚠️ AVERTISSEMENT SÉCURITÉ : En raison de la violence des gangs et de l'instabilité politique extrême depuis 2021, le voyage en Haïti est fortement déconseillé par la plupart des gouvernements — consultez impérativement les avis officiels avant tout projet de visite.",
    en: "Haiti, the world's first Black republic, founded in 1804 after a slave revolution unique in history, has an extraordinary cultural heritage blending African, French and Taíno influences. The country is home to UNESCO-listed sites such as the Citadelle Laferrière and Sans-Souci, reminders of a former grandeur. ⚠️ SECURITY WARNING: Because of gang violence and extreme political instability since 2021, travel to Haiti is strongly discouraged by most governments — be sure to consult official advisories before planning any visit.",
  },
  bestPeriods: [
    {
      months: { fr: "Déc – Mars", en: "Dec – March" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Période la plus sèche et agréable, températures douces, idéale pour visiter",
        en: "The driest and most pleasant period, with mild temperatures, ideal for visiting.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avr – Jun & Oct – Nov", en: "Apr – Jun & Oct – Nov" },
      label: { fr: "Saisons des pluies", en: "Rainy seasons" },
      color: "#f59e0b",
      description: {
        fr: "Deux saisons pluvieuses avec risques de crues et d'inondations",
        en: "Two rainy seasons with risks of flash floods and flooding.",
      },
      icon: "🌧️",
    },
    {
      months: { fr: "Jun – Nov", en: "Jun – Nov" },
      label: { fr: "Saison cyclonique", en: "Hurricane season" },
      color: "#ef4444",
      description: {
        fr: "Risque élevé d'ouragans — éviter cette période",
        en: "High hurricane risk — avoid this period.",
      },
      icon: "🌀",
    },
  ],
  weatherCities: [
    {
      id: "port_au_prince",
      name: "Port-au-Prince",
      region: { fr: "Ouest", en: "West" },
      data: [
        { month: "Jan", temp: 25, rain: 60, icon: "☀️" },
        { month: "Fév", temp: 25, rain: 55, icon: "☀️" },
        { month: "Mar", temp: 26, rain: 80, icon: "☀️" },
        { month: "Avr", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 90, icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 95, icon: "⛅" },
        { month: "Sep", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 160, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 110, icon: "🌧️" },
        { month: "Déc", temp: 24, rain: 65, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "Citadelle Laferrière & Sans-Souci", en: "Citadelle Laferrière & Sans-Souci" },
      region: { fr: "Nord", en: "North" },
      description: {
        fr: "La Citadelle Laferrière est l'une des plus grandes forteresses de l'hémisphère occidental, construite au début du XIXe siècle par le roi Henri Christophe pour défendre Haïti contre une éventuelle reconquête française. Classée au patrimoine mondial de l'UNESCO avec le palais Sans-Souci, elle témoigne de la grandeur de la première nation noire indépendante. Le site est accessible depuis Cap-Haïtien, à quelques heures de cheval ou de marche dans les montagnes.",
        en: "The Citadelle Laferrière is one of the largest fortresses in the Western Hemisphere, built in the early 19th century by King Henri Christophe to defend Haiti against a possible French reconquest. Listed as a UNESCO World Heritage Site together with Sans-Souci Palace, it reflects the grandeur of the first independent Black nation. The site can be reached from Cap-Haïtien after a few hours on horseback or on foot in the mountains.",
      },
      wikipedia: "Citadelle_Laferrière",
      tags: ["UNESCO", "Histoire", "Architecture", "Randonnée"],
      mustSee: [
        { name: { fr: "Citadelle Laferrière — forteresse UNESCO du roi Henri Christophe", en: "Citadelle Laferrière — UNESCO fortress of King Henri Christophe" }, wikipedia: "Citadelle_Laferrière" },
        { name: { fr: "Palais Sans-Souci — ruines royales du XIXe siècle", en: "Sans-Souci Palace — 19th-century royal ruins" }, wikipedia: "File:Sans-Souci_Palace_front.jpg" },
        { name: { fr: "Cap-Haïtien — ancienne capitale coloniale française", en: "Cap-Haïtien — former French colonial capital" }, wikipedia: "File:View_of_Cap-Haitien.jpg" },
        { name: { fr: "Musée du Panthéon National Haïtien — histoire de la révolution", en: "Museum of the Haitian National Pantheon — history of the revolution" }, wikipedia: "File:MUPANAH 2018 - Roof.jpg" },
      ],
    },
    {
      id: 2,
      name: "Jacmel",
      region: { fr: "Sud-Est", en: "Southeast" },
      description: {
        fr: "Jacmel est une ville côtière réputée pour son architecture coloniale préservée, sa scène artistique foisonnante et son célèbre carnaval. La ville abrite de nombreux ateliers d'artistes et est considérée comme la capitale culturelle d'Haïti. Son front de mer pittoresque et ses maisons en fer forgé d'influence victorienne en font une destination unique dans les Caraïbes.",
        en: "Jacmel is a coastal town known for its preserved colonial architecture, thriving art scene and famous carnival. The town is home to many artists' workshops and is considered Haiti's cultural capital. Its picturesque seafront and Victorian-style wrought-iron houses make it a unique destination in the Caribbean.",
      },
      wikipedia: "Jacmel",
      tags: ["Art", "Culture", "Architecture", "Plage"],
      mustSee: [
        { name: { fr: "Marché de fer de Jacmel — marché artisanal coloré", en: "Jacmel iron market — colourful craft market" }, wikipedia: "Jacmel" },
        { name: { fr: "Carnaval de Jacmel — fête culturelle réputée (février)", en: "Jacmel Carnival — renowned cultural celebration (February)" }, wikipedia: "File:Kanaval in Jacmel Haiti 2014 01.jpg" },
        { name: { fr: "Maisons coloniales — architecture victorienne et fer forgé", en: "Colonial houses — Victorian wrought-iron architecture" }, wikipedia: "File:HT Jacmel 1010 (9) (17029406128).jpg" },
        { name: { fr: "Plage de Cyvadier — plage calme à proximité", en: "Cyvadier Beach — quiet nearby beach" }, wikipedia: "File:HT Jacmel 1010 (60) (16594718984).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Île-à-Vache", en: "Île-à-Vache" },
      region: { fr: "Sud", en: "South" },
      description: {
        fr: "Île-à-Vache est une île tropicale paisible au large des Cayes, l'une des rares régions d'Haïti offrant encore un tourisme balnéaire dans des conditions relativement sûres. Ses plages de sable blanc, ses eaux turquoise et son atmosphère tranquille contrastent avec les difficultés du pays continental. Autrefois refuge du pirate Henry Morgan, elle offre une plongée et des paysages naturels remarquables.",
        en: "Île-à-Vache is a peaceful tropical island off Les Cayes, one of the few parts of Haiti still offering seaside tourism under relatively safe conditions. Its white-sand beaches, turquoise waters and calm atmosphere stand in sharp contrast to the difficulties on the mainland. Once a hideout for the pirate Henry Morgan, it offers diving opportunities and remarkable natural scenery.",
      },
      wikipedia: "File:Ile-a-Vache - Haiti.jpg",
      tags: ["Plage", "Nature", "Plongée", "Île"],
      mustSee: [
        { name: { fr: "Plages de sable blanc — eaux turquoise et récifs coralliens", en: "White-sand beaches — turquoise waters and coral reefs" }, wikipedia: "File:Ile-a-Vache - Haiti.jpg" },
        { name: { fr: "Village de pêcheurs — vie locale authentique", en: "Fishing village — authentic local life" }, wikipedia: "File:Vaches ile dupas.jpg" },
        { name: { fr: "Randonnée sur l'île — végétation tropicale et panoramas", en: "Hiking on the island — tropical vegetation and panoramic views" }, wikipedia: "File:Ile-a-Vache Inland Lake - Haiti.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Haïti est l'une des destinations les moins chères des Caraïbes, mais l'instabilité économique et la dévaluation de la gourde rendent les prix très variables. La dollarisation partielle de l'économie est courante dans le secteur touristique.",
      en: "Haiti is one of the cheapest destinations in the Caribbean, but economic instability and the depreciation of the gourde make prices highly variable. Partial dollarisation of the economy is common in the tourism sector.",
    },
    currency: "HTG",
    exchangeRate: "1€ ≈ 135 HTG",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse locale", en: "Local guesthouse" }, price: "15–25 €" },
          { label: { fr: "Hôtel confort", en: "Comfort hotel" }, price: "40–70 €" },
          { label: { fr: "Resort / hôtel haut de gamme", en: "Resort / upscale hotel" }, price: "100–180 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Repas local (griot, riz et haricots)", en: "Local meal (griot, rice and beans)" }, price: "3–6 €" },
          { label: { fr: "Restaurant intermédiaire", en: "Mid-range restaurant" }, price: "10–20 €" },
          { label: { fr: "Restaurant de style occidental", en: "Western-style restaurant" }, price: "20–40 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Tap-tap (minibus collectif)", en: "Tap-tap (shared minibus)" }, price: "0,50–1 €" },
          { label: { fr: "Moto-taxi (trajet court)", en: "Motorbike taxi (short ride)" }, price: "1–3 €" },
          { label: { fr: "Location de voiture avec chauffeur / jour", en: "Car hire with driver / day" }, price: "60–100 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite guidée Citadelle Laferrière", en: "Guided visit to Citadelle Laferrière" }, price: "15–30 €" },
          { label: { fr: "Excursion Île-à-Vache (bateau + journée)", en: "Île-à-Vache excursion (boat + day trip)" }, price: "25–50 €" },
          { label: { fr: "Cours de peinture / atelier artisanal à Jacmel", en: "Painting class / craft workshop in Jacmel" }, price: "20–40 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "35–55 €/j",
        desc: { fr: "Guesthouse simple, repas locaux, transports collectifs", en: "Simple guesthouse, local meals, shared transport" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "70–120 €/j",
        desc: { fr: "Hôtel correct, restaurants variés, chauffeur privé", en: "Decent hotel, varied restaurants, private driver" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Port-au-Prince → Cap-Haïtien (Citadelle) → Jacmel → Île-à-Vache",
        en: "Port-au-Prince → Cap-Haïtien (Citadel) → Jacmel → Île-à-Vache",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Port-au-Prince", en: "Return flight Paris–Port-au-Prince" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "135–225 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "80–120 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "100–150 €" },
            { label: { fr: "Activités + visites", en: "Activities + visits" }, amount: "85–135 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Port-au-Prince", en: "Return flight Paris–Port-au-Prince" }, amount: "600–850 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "630–900 €" },
            { label: { fr: "Transports locaux + chauffeur", en: "Local transport + driver" }, amount: "250–350 €" },
            { label: { fr: "Nourriture + restaurants", en: "Food + restaurants" }, amount: "200–300 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "120–200 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "10–14h avec escale (Miami, New York ou Fort-de-France)", en: "10–14h with a stopover (Miami, New York or Fort-de-France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Pas de visa requis pour les ressortissants français (séjour ≤ 90 jours)", en: "No visa required for French citizens (stay ≤ 90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Gourde haïtienne (HTG) — USD largement accepté dans le secteur touristique", en: "Haitian gourde (HTG) — USD widely accepted in the tourism sector" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Créole haïtien (langue maternelle), Français (officiel)", en: "Haitian Creole (mother tongue), French (official)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B (110V, 60Hz) — adaptateur nécessaire pour les Européens", en: "Type A/B (110V, 60Hz) — adapter needed for Europeans" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccins hépatite A/B, typhoïde, rage recommandés. Paludisme dans certaines zones — prophylaxie conseillée. Eau non potable.", en: "Hepatitis A/B, typhoid and rabies vaccines recommended. Malaria exists in some areas — prophylaxis advised. Water is not safe to drink." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Security" }, value: { fr: "DÉCONSEILLÉ : violence des gangs extrême à Port-au-Prince et dans plusieurs régions depuis 2021. Consultez les avis officiels du MAE avant tout voyage.", en: "NOT ADVISED: extreme gang violence in Port-au-Prince and several regions since 2021. Check official foreign ministry advisories before any travel." } },
    { icon: "🌀", label: { fr: "Cyclones", en: "Hurricanes" }, value: { fr: "Saison cyclonique juin–novembre — éviter cette période, risques majeurs", en: "Hurricane season runs from June to November — avoid this period, major risks." } },
  ],
};
