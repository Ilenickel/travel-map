import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { loadBadgeData, loadBadgePercentile } from '../utils/checkBadgeUpgrades';
import {
  BADGE_EXPLORATEUR, BADGE_DECOUVERTE, BADGE_COMMUNAUTE,
  badgeProgress, BADGE_HOW_TO, BADGE_COLORS,
} from '../utils/badges';

const BADGE_DEFS = { explorateur: BADGE_EXPLORATEUR, decouverte: BADGE_DECOUVERTE, communaute: BADGE_COMMUNAUTE };

// ── Popover de progression (tous les niveaux) ────────────────
function BadgeProgressPopover({ badgeKey, currentLevel, onClose }) {
  const { t } = useTranslation('app');
  const defs = BADGE_DEFS[badgeKey];
  const { color, bg, label } = BADGE_COLORS[badgeKey];

  return (
    <div className="badge-popover-overlay" onClick={onClose}>
      <div className="badge-popover" onClick={(e) => e.stopPropagation()} style={{ '--badge-color': color, '--badge-bg': bg }}>
        <div className="badge-popover-header">
          <span className="badge-popover-title">{label} — {t('badges.allLevelsSuffix')}</span>
          <button className="badge-popover-close" onClick={onClose}>✕</button>
        </div>
        <div className="badge-popover-list">
          {defs.map((def) => {
            const obtained = def.level <= currentLevel;
            const isCurrent = def.level === currentLevel;
            return (
              <div key={def.level} className={`badge-popover-row ${obtained ? 'obtained' : 'locked'} ${isCurrent ? 'current' : ''}`}>
                <span className="badge-popover-icon">{def.icon}</span>
                <div className="badge-popover-info">
                  <span className="badge-popover-name">{def.name}</span>
                  <span className="badge-popover-threshold">
                    {def.threshold === 0 ? t('badges.startingLevel') : t('badges.threshold', { value: def.threshold })}
                  </span>
                </div>
                {isCurrent && <span className="badge-popover-current-tag">{t('badges.currentTag')}</span>}
                {obtained && !isCurrent && <span className="badge-popover-check">✓</span>}
                {!obtained && <span className="badge-popover-lock">🔒</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Badge chip (profil public) ────────────────────────────────
function PublicBadgeChip({ badgeKey, level: rawLevel }) {
  const { t } = useTranslation('app');
  const [open, setOpen] = useState(false);
  const [pct, setPct] = useState(null);
  const defs = BADGE_DEFS[badgeKey];
  const level = Math.min(rawLevel, defs.length - 1);
  const def = defs[level];
  const { color, bg, label } = BADGE_COLORS[badgeKey];

  useEffect(() => {
    loadBadgePercentile(badgeKey, level).then(setPct);
  }, [badgeKey, level]);

  return (
    <>
      <div
        className="badge-chip-public"
        style={{ '--badge-color': color, '--badge-bg': bg }}
        onClick={() => setOpen(true)}
        title={pct !== null ? t('badges.percentileHint', { pct }) : label}
      >
        <span className="badge-chip-icon">{def.icon}</span>
        <div className="badge-chip-text">
          <span className="badge-chip-category">{label}</span>
          <span className="badge-chip-name">{def.name}</span>
        </div>
        {pct !== null && <span className="badge-chip-pct">{t('badges.topPercent', { pct })}</span>}
      </div>
      {open && <BadgeProgressPopover badgeKey={badgeKey} currentLevel={level} onClose={() => setOpen(false)} />}
    </>
  );
}

// ── Badge card (propre profil) ────────────────────────────────
function OwnBadgeCard({ badgeKey, level: rawLevel, value, howTo }) {
  const { t } = useTranslation('app');
  const [open, setOpen] = useState(false);
  const [pct, setPct] = useState(null);
  const defs = BADGE_DEFS[badgeKey];
  const level = Math.min(rawLevel, defs.length - 1);
  const def = defs[level];
  const isMax = level === defs.length - 1;
  const progress = badgeProgress(defs, level, value);
  const { color, bg, label } = BADGE_COLORS[badgeKey];

  useEffect(() => {
    loadBadgePercentile(badgeKey, level).then(setPct);
  }, [badgeKey, level]);

  return (
    <>
      <div className="badge-card-own" style={{ '--badge-color': color, '--badge-bg': bg }}>
        <div className="badge-card-top">
          <span className="badge-card-category-label">{label}</span>
          {pct !== null && level > 0 && (
            <span className="badge-card-pct-pill">{t('badges.topPercent', { pct })}</span>
          )}
        </div>

        <div className="badge-card-hero" onClick={() => setOpen(true)} title={t('badges.seeAllLevels')}>
          <div className="badge-card-icon-circle">
            <span className="badge-card-icon">{def.icon}</span>
          </div>
          <div className="badge-card-identity">
            <span className="badge-card-name">{def.name}</span>
            <span className="badge-card-level-label">{t('badges.levelLabel', { level })}</span>
          </div>
        </div>
        <div className="badge-card-divider" />

        {!isMax && (
          <div className="badge-card-progress-section">
            <div className="badge-card-next-row">
              <span className="badge-card-next-label">{t('badges.nextLabel', { icon: progress.nextIcon, name: progress.nextName })}</span>
              <span className="badge-card-pct-inline">{progress.pct}%</span>
            </div>
            <div className="badge-progress-bar-wrap">
              <div className="badge-progress-bar-fill" style={{ width: `${progress.pct}%` }} />
            </div>
            <div className="badge-progress-label">{progress.label}</div>
          </div>
        )}
        {isMax && <div className="badge-card-max">{t('badges.maxLevelBadge')}</div>}

        <p className="badge-card-howto-inline">💡 {howTo}</p>
      </div>
      {open && <BadgeProgressPopover badgeKey={badgeKey} currentLevel={level} onClose={() => setOpen(false)} />}
    </>
  );
}

// ── Composant principal ───────────────────────────────────────
export default function BadgeSection({ userId, ownProfile = false, refreshKey = 0 }) {
  const { t } = useTranslation('app');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    loadBadgeData(userId).then((d) => { setData(d); setLoading(false); });
  }, [userId, refreshKey]);

  if (loading) return <div className="badge-section-loading">{t('common:loading')}</div>;
  if (!data) return null;

  const { levels, visitedCount, communauteScore } = data;

  const badges = [
    { key: 'explorateur', level: levels.explorateur, value: visitedCount,    howTo: BADGE_HOW_TO.explorateur },
    { key: 'decouverte',  level: levels.decouverte,  value: 0,               howTo: BADGE_HOW_TO.decouverte  },
    { key: 'communaute',  level: levels.communaute,  value: communauteScore, howTo: BADGE_HOW_TO.communaute  },
  ];

  if (!ownProfile) {
    return (
      <div className="badge-section-public">
        {badges.map(({ key, level, howTo }) => (
          <PublicBadgeChip key={key} badgeKey={key} level={level} howTo={howTo} />
        ))}
      </div>
    );
  }

  return (
    <div className="badge-section-own">
      {badges.map(({ key, level, value, howTo }) => (
        <OwnBadgeCard key={key} badgeKey={key} level={level} value={value} howTo={howTo} />
      ))}
    </div>
  );
}
