// ── Couleurs par catégorie ────────────────────────────────────
export const BADGE_COLORS = {
  explorateur: { color: '#38bdf8', bg: 'rgba(56,189,248,0.12)',  label: 'Explorateur' },
  decouverte:  { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',  label: 'Découverte'  },
  communaute:  { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', label: 'Communauté'  },
};

// ── Définitions ───────────────────────────────────────────────

export const BADGE_EXPLORATEUR = [
  { level: 0, icon: '🌱', name: 'Curieux',          threshold: 0  },
  { level: 1, icon: '🧭', name: 'Voyageur novice',  threshold: 2  },
  { level: 2, icon: '🎒', name: 'Aventurier',        threshold: 4  },
  { level: 3, icon: '🗺️', name: 'Explorateur',       threshold: 7  },
  { level: 4, icon: '✈️', name: 'Grand voyageur',    threshold: 10 },
  { level: 5, icon: '🌍', name: 'Globe-trotteur',    threshold: 15 },
  { level: 6, icon: '🧳', name: 'Nomade',            threshold: 20 },
  { level: 7, icon: '👑', name: 'Légende du voyage', threshold: 25 },
];

export const BADGE_DECOUVERTE = [
  { level: 0, icon: '💭', name: 'Inspiré',                threshold: 0  },
  { level: 1, icon: '📋', name: 'Premier itinéraire',     threshold: 2  },
  { level: 2, icon: '🗓️', name: 'Voyageur préparé',       threshold: 4  },
  { level: 3, icon: '🔭', name: 'Planificateur avisé',    threshold: 7  },
  { level: 4, icon: '🧠', name: 'Stratège globe-trotter', threshold: 10 },
  { level: 5, icon: '🏅', name: 'Architecte de voyages',  threshold: 15 },
  { level: 6, icon: '🏆', name: 'Maître des itinéraires', threshold: 25 },
];

export const BADGE_COMMUNAUTE = [
  { level: 0, icon: '🌐', name: 'Nouveau voyageur',  threshold: 0    },
  { level: 1, icon: '✍️', name: 'Contributeur',       threshold: 40   },
  { level: 2, icon: '📖', name: 'Guide local',        threshold: 120  },
  { level: 3, icon: '🎯', name: 'Guide confirmé',     threshold: 300  },
  { level: 4, icon: '⭐', name: 'Expert voyage',      threshold: 600  },
  { level: 5, icon: '🎓', name: 'Mentor',             threshold: 1000 },
  { level: 6, icon: '🤝', name: 'Ambassadeur',        threshold: 1700 },
  { level: 7, icon: '🌎', name: 'Référence mondiale', threshold: 2500 },
];

// ── Fonctions de calcul ───────────────────────────────────────

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

export function computeCommunauteScore(reviewCount, destinations, voteCount = 0) {
  const reviewScore = reviewCount * 10;
  const destScore = destinations.reduce((sum, d) => {
    const places = d.places_count ?? 0;
    return sum + 20 + Math.max(0, places - 1) * 5;
  }, 0);
  const voteScore = voteCount * 2;
  return reviewScore + destScore + voteScore;
}

export function computeCommunauteLevel(score) {
  return computeLevel(BADGE_COMMUNAUTE, score);
}

export function badgeProgress(defs, currentLevel, currentValue) {
  const cur = defs[currentLevel];
  const next = defs[currentLevel + 1];
  if (!next) return { pct: 100, label: 'Niveau maximum atteint', nextName: null, remaining: 0 };
  const pct = Math.max(0, Math.min(100, Math.round((currentValue / next.threshold) * 100)));
  return { pct, label: `${currentValue} / ${next.threshold}`, nextName: next.name, nextIcon: next.icon, remaining: next.threshold - currentValue };
}

export const BADGE_HOW_TO = {
  explorateur: "Marquez des pays comme visités en cliquant sur ✈️ dans la fiche d'un pays.",
  decouverte:  'Fonctionnalité de planification de voyages bientôt disponible !',
  communaute:  'Laissez des avis sur les pays et ajoutez des destinations avec des lieux.',
};

export const ALL_BADGE_DEFS = {
  explorateur: BADGE_EXPLORATEUR,
  decouverte:  BADGE_DECOUVERTE,
  communaute:  BADGE_COMMUNAUTE,
};
