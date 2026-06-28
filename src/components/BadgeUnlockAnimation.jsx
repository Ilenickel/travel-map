import { useEffect, useState } from 'react';

export default function BadgeUnlockAnimation({ upgrade, onDismiss }) {
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('old'),  500);
    const t2 = setTimeout(() => setPhase('new'),  1100);
    const t3 = setTimeout(() => setPhase('done'), 1700);
    const t4 = setTimeout(onDismiss, 7000);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDismiss]);

  const { oldDef, newDef, key } = upgrade;
  const categoryLabel = { explorateur: 'Explorateur', decouverte: 'Découverte', communaute: 'Communauté' }[key];

  return (
    <div className="badge-overlay" onClick={onDismiss}>
      <div className="badge-unlock-card" onClick={(e) => e.stopPropagation()}>
        <div className="badge-unlock-title">✨ Nouveau badge débloqué !</div>
        <div className="badge-unlock-category">{categoryLabel}</div>

        <div className="badge-unlock-emoji-area">
          {phase === 'old' && (
            <span className="badge-emoji-old">{oldDef.icon}</span>
          )}
          {phase === 'new' && (
            <span className="badge-emoji-old badge-emoji-old--out">{oldDef.icon}</span>
          )}
          {(phase === 'new' || phase === 'done') && (
            <span className="badge-emoji-new">{newDef.icon}</span>
          )}
        </div>

        {phase === 'done' && (
          <>
            <div className="badge-unlock-name">{newDef.name}</div>
            <button className="badge-unlock-dismiss" onClick={onDismiss}>
              Continuer →
            </button>
          </>
        )}
      </div>
    </div>
  );
}
