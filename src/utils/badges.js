import i18n from '../i18n';

function badgeLevel(level, icon, threshold, category, key) {
  return { level, icon, threshold, get name() { return i18n.t(`badges.${category}.${key}`, { ns: 'app' }); } };
}

// ── Couleurs par catégorie ────────────────────────────────────
export const BADGE_COLORS = {
  explorateur: { color: '#38bdf8', bg: 'rgba(56,189,248,0.12)',  get label() { return i18n.t('badges.categories.explorateur', { ns: 'app' }); } },
  decouverte:  { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',  get label() { return i18n.t('badges.categories.decouverte', { ns: 'app' }); } },
  communaute:  { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', get label() { return i18n.t('badges.categories.communaute', { ns: 'app' }); } },
};

// ── Définitions ───────────────────────────────────────────────

export const BADGE_EXPLORATEUR = [
  badgeLevel(0, '🌱', 0,  'explorateur', 'curious'),
  badgeLevel(1, '🧭', 4,  'explorateur', 'novice'),
  badgeLevel(2, '🎒', 8,  'explorateur', 'adventurer'),
  badgeLevel(3, '🗺️', 14,  'explorateur', 'explorer'),
  badgeLevel(4, '✈️', 20, 'explorateur', 'greatTraveler'),
  badgeLevel(5, '🌍', 30, 'explorateur', 'globetrotter'),
  badgeLevel(6, '🧳', 40, 'explorateur', 'nomad'),
  badgeLevel(7, '👑', 50, 'explorateur', 'legend'),
];

export const BADGE_DECOUVERTE = [
  badgeLevel(0, '💭', 0,  'decouverte', 'inspired'),
  badgeLevel(1, '📋', 2,  'decouverte', 'firstItinerary'),
  badgeLevel(2, '🗓️', 4,  'decouverte', 'preparedTraveler'),
  badgeLevel(3, '🔭', 7,  'decouverte', 'savvyPlanner'),
  badgeLevel(4, '🧠', 10, 'decouverte', 'strategist'),
  badgeLevel(5, '🏅', 15, 'decouverte', 'architect'),
  badgeLevel(6, '🏆', 25, 'decouverte', 'master'),
];

export const BADGE_COMMUNAUTE = [
  badgeLevel(0, '🌐', 0,    'communaute', 'newTraveler'),
  badgeLevel(1, '✍️', 80,   'communaute', 'contributor'),
  badgeLevel(2, '📖', 240,  'communaute', 'localGuide'),
  badgeLevel(3, '🎯', 600,  'communaute', 'confirmedGuide'),
  badgeLevel(4, '⭐', 1200,  'communaute', 'expert'),
  badgeLevel(5, '🎓', 2000, 'communaute', 'mentor'),
  badgeLevel(6, '🤝', 3400, 'communaute', 'ambassador'),
  badgeLevel(7, '🌎', 5000, 'communaute', 'worldReference'),
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

export function computeCommunauteScore(reviewCount, destinations, voteCount = 0, ownPlaceCount = 0, otherPlaceCount = 0) {
  const reviewScore = reviewCount * 5;
  const destScore = destinations.length * 25;
  const placeScore = ownPlaceCount * 5 + otherPlaceCount * 10;
  const voteScore = voteCount * 2;
  return reviewScore + destScore + placeScore + voteScore;
}

export function computeCommunauteLevel(score) {
  return computeLevel(BADGE_COMMUNAUTE, score);
}

export function badgeProgress(defs, currentLevel, currentValue) {
  const cur = defs[currentLevel];
  const next = defs[currentLevel + 1];
  if (!cur || !next) return { pct: 100, label: i18n.t('badges.maxLevelReached', { ns: 'app' }), nextName: null, remaining: 0 };
  const pct = Math.max(0, Math.min(100, Math.round((currentValue / next.threshold) * 100)));
  return { pct, label: `${currentValue} / ${next.threshold}`, nextName: next.name, nextIcon: next.icon, remaining: next.threshold - currentValue };
}

export const BADGE_HOW_TO = {
  get explorateur() { return i18n.t('badges.howTo.explorateur', { ns: 'app' }); },
  get decouverte() { return i18n.t('badges.howTo.decouverte', { ns: 'app' }); },
  get communaute() { return i18n.t('badges.howTo.communaute', { ns: 'app' }); },
};

export const ALL_BADGE_DEFS = {
  explorateur: BADGE_EXPLORATEUR,
  decouverte:  BADGE_DECOUVERTE,
  communaute:  BADGE_COMMUNAUTE,
};
