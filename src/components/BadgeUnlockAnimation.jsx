import { useEffect, useState } from 'react';
import { BADGE_COLORS } from '../utils/badges';

export default function BadgeUnlockAnimation({ upgrade, onDismiss }) {
  const [step, setStep] = useState(0);
  // step 0: card enters
  // step 1: old→new transition plays
  // step 2: name + button appear

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500);
    const t2 = setTimeout(() => setStep(2), 1600);
    const t3 = setTimeout(onDismiss, 8000);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onDismiss]);

  const { oldDef, newDef, key } = upgrade;
  const { color, bg, label } = BADGE_COLORS[key];

  return (
    <div className="bua-overlay" onClick={onDismiss}>
      <div className="bua-card" onClick={(e) => e.stopPropagation()} style={{ '--badge-color': color, '--badge-bg': bg }}>

        {/* Header pill */}
        <div className="bua-pill">{label}</div>
        <div className="bua-headline">Nouveau niveau débloqué !</div>

        {/* Emoji stage */}
        <div className="bua-stage">
          {/* Old badge — visible until step 1 plays out */}
          <div className={`bua-old ${step >= 1 ? 'bua-old--exit' : ''}`}>
            <span className="bua-old-emoji">{oldDef.icon}</span>
            <span className="bua-old-name">{oldDef.name}</span>
          </div>

          {/* Arrow */}
          <div className={`bua-arrow ${step >= 1 ? 'bua-arrow--show' : ''}`}>→</div>

          {/* New badge */}
          <div className={`bua-new ${step >= 1 ? 'bua-new--enter' : ''}`}>
            <div className="bua-new-ring" />
            <span className="bua-new-emoji">{newDef.icon}</span>
          </div>
        </div>

        {/* Name */}
        <div className={`bua-name ${step >= 2 ? 'bua-name--show' : ''}`}>
          {newDef.name}
        </div>

        {/* Button */}
        <button
          className={`bua-btn ${step >= 2 ? 'bua-btn--show' : ''}`}
          onClick={onDismiss}
        >
          Continuer →
        </button>
      </div>
    </div>
  );
}
