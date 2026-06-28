export const BADGE_EXPLORATEUR = [
  { level: 0, icon: '🌱', name: 'Curieux',           threshold: 0,   category: 'Explorateur' },
  { level: 1, icon: '🧭', name: 'Voyageur novice',   threshold: 1,   category: 'Explorateur' },
  { level: 2, icon: '🎒', name: 'Aventurier',         threshold: 3,   category: 'Explorateur' },
  { level: 3, icon: '🗺️', name: 'Explorateur',        threshold: 7,   category: 'Explorateur' },
  { level: 4, icon: '🏕️', name: 'Baroudeur',          threshold: 12,  category: 'Explorateur' },
  { level: 5, icon: '🌍', name: 'Globe-trotteur',     threshold: 20,  category: 'Explorateur' },
  { level: 6, icon: '✈️', name: 'Grand voyageur',     threshold: 35,  category: 'Explorateur' },
  { level: 7, icon: '🧳', name: 'Nomade',             threshold: 50,  category: 'Explorateur' },
  { level: 8, icon: '🏔️', name: 'Pionnier',           threshold: 75,  category: 'Explorateur' },
  { level: 9, icon: '👑', name: 'Légende du voyage',  threshold: 100, category: 'Explorateur' },
];

export const BADGE_DECOUVERTE = [
  { level: 0, icon: '🔍', name: 'Premier pas',        threshold: 0,   category: 'Découverte' },
  { level: 1, icon: '🌟', name: 'Découvreur',         threshold: 1,   category: 'Découverte' },
  { level: 2, icon: '🔦', name: 'Éclaireur',          threshold: 3,   category: 'Découverte' },
  { level: 3, icon: '🗺️', name: 'Explorateur',        threshold: 7,   category: 'Découverte' },
  { level: 4, icon: '📜', name: 'Cartographe',        threshold: 15,  category: 'Découverte' },
  { level: 5, icon: '🧭', name: 'Navigateur',         threshold: 25,  category: 'Découverte' },
  { level: 6, icon: '⚔️', name: 'Conquérant',         threshold: 40,  category: 'Découverte' },
  { level: 7, icon: '🤝', name: 'Ambassadeur',        threshold: 60,  category: 'Découverte' },
  { level: 8, icon: '🎓', name: 'Maître explorateur', threshold: 85,  category: 'Découverte' },
  { level: 9, icon: '🏆', name: 'Légende',            threshold: 120, category: 'Découverte' },
];

export const BADGE_COMMUNAUTE = [
  { level: 0, icon: '👤', name: 'Nouveau voyageur',  threshold: 0,    category: 'Communauté' },
  { level: 1, icon: '📝', name: 'Contributeur',       threshold: 10,   category: 'Communauté' },
  { level: 2, icon: '🗺️', name: 'Guide local',        threshold: 30,   category: 'Communauté' },
  { level: 3, icon: '🎖️', name: 'Guide confirmé',     threshold: 80,   category: 'Communauté' },
  { level: 4, icon: '🏆', name: 'Expert voyage',      threshold: 200,  category: 'Communauté' },
  { level: 5, icon: '🌟', name: 'Mentor',             threshold: 450,  category: 'Communauté' },
  { level: 6, icon: '🤝', name: 'Ambassadeur',        threshold: 900,  category: 'Communauté' },
  { level: 7, icon: '🌐', name: 'Référence mondiale', threshold: 1800, category: 'Communauté' },
];

export function computeLevel(defs, value) {
  let level = 0;
  for (const def of defs) {
    if (value >= def.threshold) level = def.level;
    else break;
  }
  return level;
}

export function computeExplorateurLevel(visitedCount) {
  return computeLevel(BADGE_EXPLORATEUR, visitedCount);
}

export function computeDecouverteLevel() {
  return 0;
}

export function computeCommunauteScore(reviewCount, destinations) {
  const reviewScore = reviewCount * 10;
  const destScore = destinations.reduce((sum, d) => {
    const places = d.places_count ?? 0;
    return sum + 20 + Math.max(0, places - 1) * 5;
  }, 0);
  return reviewScore + destScore;
}

export function computeCommunauteLevel(score) {
  return computeLevel(BADGE_COMMUNAUTE, score);
}

export function badgeProgress(defs, currentLevel, currentValue) {
  const cur = defs[currentLevel];
  const next = defs[currentLevel + 1];
  if (!next) return { pct: 100, label: 'Niveau maximum atteint', nextName: null, remaining: 0 };
  const pct = Math.min(100, Math.round(((currentValue - cur.threshold) / (next.threshold - cur.threshold)) * 100));
  const remaining = next.threshold - currentValue;
  return { pct, label: `${currentValue} / ${next.threshold}`, nextName: next.name, nextIcon: next.icon, remaining };
}

export const BADGE_HOW_TO = {
  explorateur: "💡 Marquez des pays comme visités en cliquant sur ✈️ dans la fiche d'un pays.",
  decouverte:  '💡 Fonctionnalité de planification de voyages bientôt disponible !',
  communaute:  '💡 Laissez des avis sur les pays et ajoutez des destinations avec des lieux.',
};
