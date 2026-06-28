import { useEffect, useState } from 'react';
import { BADGE_COLORS } from '../utils/badges';

export default function BadgeUnlockAnimation({ upgrade, onDismiss }) {
  const [step, setStep] = useState(0);
  // step 0: card entre, ancien badge centré visible
  // step 1: ancien sort, nouveau entre centré
  // step 2: nom + bouton apparaissent

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 700);
    const t2 = setTimeout(() => setStep(2), 1600);
    const t3 = setTimeout(onDismiss, 8000);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onDismiss]);

  const { oldDef, newDef, key } = upgrade;
  const { color, bg, label } = BADGE_COLORS[key];

  return (
    <div className="bua-overlay" onClick={onDismiss}>
      <div className="bua-card" onClick={(e) => e.stopPropagation()} style={{ '--badge-color': color, '--badge-bg': bg }}>

        <div className="bua-pill">{label}</div>
        <div className="bua-headline">Nouveau niveau débloqué !</div>

        <div className="bua-stage">
          {step === 0 && (
            <div className="bua-old bua-centered">
              <span className="bua-old-emoji">{oldDef.icon}</span>
              <span className="bua-old-name">{oldDef.name}</span>
            </div>
          )}
          {step === 1 && (
            <div className="bua-old bua-centered bua-old--exit">
              <span className="bua-old-emoji">{oldDef.icon}</span>
              <span className="bua-old-name">{oldDef.name}</span>
            </div>
          )}
          {step >= 1 && (
            <div className="bua-new bua-centered bua-new--enter">
              <div className="bua-new-ring" />
              <span className="bua-new-emoji">{newDef.icon}</span>
            </div>
          )}
        </div>

        <div className={`bua-name ${step >= 2 ? 'bua-name--show' : ''}`}>
          {newDef.name}
        </div>

        <button className={`bua-btn ${step >= 2 ? 'bua-btn--show' : ''}`} onClick={onDismiss}>
          Continuer →
        </button>
      </div>
    </div>
  );
}
