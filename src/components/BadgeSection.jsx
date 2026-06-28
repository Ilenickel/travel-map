import { useEffect, useState, useCallback } from 'react';
import { loadBadgeData, loadBadgePercentile } from '../utils/checkBadgeUpgrades';
import {
  BADGE_EXPLORATEUR, BADGE_DECOUVERTE, BADGE_COMMUNAUTE,
  badgeProgress, BADGE_HOW_TO, BADGE_COLORS,
} from '../utils/badges';

const BADGE_DEFS = { explorateur: BADGE_EXPLORATEUR, decouverte: BADGE_DECOUVERTE, communaute: BADGE_COMMUNAUTE };

// ── Popover de progression (tous les niveaux) ────────────────
function BadgeProgressPopover({ badgeKey, currentLevel, onClose }) {
  const defs = BADGE_DEFS[badgeKey];
  const { color, bg, label } = BADGE_COLORS[badgeKey];

  return (
    <div className="badge-popover-overlay" onClick={onClose}>
      <div className="badge-popover" onClick={(e) => e.stopPropagation()} style={{ '--badge-color': color, '--badge-bg': bg }}>
        <div className="badge-popover-header">
          <span className="badge-popover-title">{label} — tous les niveaux</span>
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
                    {def.threshold === 0 ? 'Niveau de départ' : `Seuil : ${def.threshold}`}
                  </span>
                </div>
                {isCurrent && <span className="badge-popover-current-tag">Actuel</span>}
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
function PublicBadgeChip({ badgeKey, level }) {
  const [open, setOpen] = useState(false);
  const [pct, setPct] = useState(null);
  const defs = BADGE_DEFS[badgeKey];
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
        title={pct !== null ? `Vous faites partie des ${pct}% d'utilisateurs ayant ce badge` : label}
      >
        <span className="badge-chip-icon">{def.icon}</span>
        <div className="badge-chip-text">
          <span className="badge-chip-category">{label}</span>
          <span className="badge-chip-name">{def.name}</span>
        </div>
        {pct !== null && <span className="badge-chip-pct">Top {pct}%</span>}
      </div>
      {open && <BadgeProgressPopover badgeKey={badgeKey} currentLevel={level} onClose={() => setOpen(false)} />}
    </>
  );
}

// ── Badge card (propre profil) ────────────────────────────────
function OwnBadgeCard({ badgeKey, level, value, howTo }) {
  const [open, setOpen] = useState(false);
  const [pct, setPct] = useState(null);
  const defs = BADGE_DEFS[badgeKey];
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
        {/* Header centré */}
        <div className="badge-card-header">
          <span className="badge-card-category-label">{label}</span>
          <div className="badge-card-current">
            <button className="badge-card-icon-btn" onClick={() => setOpen(true)} title="Voir tous les niveaux">
              <span className="badge-card-icon">{def.icon}</span>
            </button>
            <div className="badge-card-text">
              <span className="badge-card-name">{def.name}</span>
              {pct !== null && level > 0 && (
                <span className="badge-card-pct">Top {pct}% des utilisateurs</span>
              )}
            </div>
          </div>
        </div>

        {!isMax && (
          <>
            <div className="badge-card-next-label">
              Prochain : {progress.nextIcon} {progress.nextName}
            </div>
            <div className="badge-progress-bar-wrap">
              <div className="badge-progress-bar-fill" style={{ width: `${progress.pct}%` }} />
            </div>
            <div className="badge-progress-label">{progress.label}</div>
          </>
        )}
        {isMax && <div className="badge-card-max">🏆 Niveau maximum atteint</div>}

        <p className="badge-card-howto">💡 {howTo}</p>
      </div>
      {open && <BadgeProgressPopover badgeKey={badgeKey} currentLevel={level} onClose={() => setOpen(false)} />}
    </>
  );
}

// ── Composant principal ───────────────────────────────────────
export default function BadgeSection({ userId, ownProfile = false, refreshKey = 0 }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    loadBadgeData(userId).then((d) => { setData(d); setLoading(false); });
  }, [userId, refreshKey]);

  if (loading) return <div className="badge-section-loading">Chargement…</div>;
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
        {badges.map(({ key, level }) => (
          <PublicBadgeChip key={key} badgeKey={key} level={level} />
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
