import { useEffect, useState } from 'react';
import { loadBadgeData } from '../utils/checkBadgeUpgrades';
import {
  BADGE_EXPLORATEUR, BADGE_DECOUVERTE, BADGE_COMMUNAUTE,
  badgeProgress, BADGE_HOW_TO,
} from '../utils/badges';

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
    { key: 'explorateur', label: 'Explorateur', defs: BADGE_EXPLORATEUR, level: levels.explorateur, value: visitedCount,    howTo: BADGE_HOW_TO.explorateur },
    { key: 'decouverte',  label: 'Découverte',  defs: BADGE_DECOUVERTE,  level: levels.decouverte,  value: 0,               howTo: BADGE_HOW_TO.decouverte  },
    { key: 'communaute',  label: 'Communauté',  defs: BADGE_COMMUNAUTE,  level: levels.communaute,  value: communauteScore, howTo: BADGE_HOW_TO.communaute  },
  ];

  if (!ownProfile) {
    return (
      <div className="badge-section-public">
        {badges.map(({ key, label, defs, level }) => {
          const def = defs[level];
          return (
            <div key={key} className="badge-chip-public" title={`${label} — ${def.name}`}>
              <span className="badge-chip-icon">{def.icon}</span>
              <span className="badge-chip-name">{def.name}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="badge-section-own">
      {badges.map(({ key, label, defs, level, value, howTo }) => {
        const def = defs[level];
        const isMax = level === defs.length - 1;
        const progress = badgeProgress(defs, level, value);

        return (
          <div key={key} className="badge-card-own">
            <div className="badge-card-header">
              <span className="badge-card-category-label">{label}</span>
              <div className="badge-card-current">
                <span className="badge-card-icon">{def.icon}</span>
                <span className="badge-card-name">{def.name}</span>
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

            <p className="badge-card-howto">{howTo}</p>
          </div>
        );
      })}
    </div>
  );
}
