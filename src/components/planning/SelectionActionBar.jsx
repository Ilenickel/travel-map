import { useState } from 'react';
import { getDaysBetween, formatDateShort } from '../../lib/planningUtils';

// Barre d'actions groupées pour la sélection multiple (CityBlock/DaytripCard) —
// réutilise volontairement les mêmes classes CSS que les menus "planifier sur un
// jour" déjà présents (GroupManager.jsx, DaytripCard.jsx : .pp-group-day-dropdown
// / .pp-group-day-opt) plutôt que d'en inventer de nouvelles.
export default function SelectionActionBar({
  count, groups = [], tripStartDate, tripEndDate,
  onAssignGroup, onAssignDay, onDelete, onCancel,
}) {
  const [showGroups, setShowGroups] = useState(false);
  const [showDays, setShowDays] = useState(false);
  const days = getDaysBetween(tripStartDate, tripEndDate);

  return (
    <div className="pp-selection-bar">
      <span className="pp-selection-count">{count} sélectionné{count !== 1 ? 's' : ''}</span>
      <div className="pp-selection-actions">
        {groups.length > 0 && (
          <div className="pp-selection-dropdown-wrap">
            <button
              type="button"
              className="pp-btn pp-btn--ghost pp-btn--xs"
              onClick={() => { setShowGroups(s => !s); setShowDays(false); }}
            >
              Groupe ▾
            </button>
            {showGroups && (
              <>
                <div className="pp-backdrop-overlay" onClick={() => setShowGroups(false)} />
                <div className="pp-group-day-dropdown">
                  <button className="pp-group-day-opt" onClick={() => { onAssignGroup(null); setShowGroups(false); }}>
                    <span className="pp-group-chip-dot" style={{ background: 'var(--border-light)' }} />
                    <span>Aucun</span>
                  </button>
                  {groups.map(g => (
                    <button key={g.id} className="pp-group-day-opt" onClick={() => { onAssignGroup(g.id); setShowGroups(false); }}>
                      <span className="pp-group-chip-dot" style={{ background: g.color }} />
                      <span>{g.name}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="pp-selection-dropdown-wrap">
          <button
            type="button"
            className="pp-btn pp-btn--ghost pp-btn--xs"
            onClick={() => { setShowDays(s => !s); setShowGroups(false); }}
            disabled={days.length === 0}
            title={days.length === 0 ? 'Ajoutez des dates au voyage pour planifier' : undefined}
          >
            Déplacer vers un jour ▾
          </button>
          {showDays && (
            <>
              <div className="pp-backdrop-overlay" onClick={() => setShowDays(false)} />
              <div className="pp-group-day-dropdown">
                {days.map((d, i) => (
                  <button key={d} className="pp-group-day-opt" onClick={() => { onAssignDay(d); setShowDays(false); }}>
                    <span className="pp-group-day-num">J{i + 1}</span>
                    <span>{formatDateShort(d)}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <button type="button" className="pp-btn pp-btn--ghost pp-btn--xs pp-selection-delete" onClick={onDelete}>
          Supprimer
        </button>
        <button type="button" className="pp-btn pp-btn--ghost pp-btn--xs" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </div>
  );
}
