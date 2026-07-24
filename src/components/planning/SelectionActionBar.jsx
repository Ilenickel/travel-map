import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getDaysBetween, formatDateShort } from '../../lib/planningUtils';
import { useScrollIntoViewOnOpen } from '../../hooks/useScrollIntoViewOnOpen';

// Barre d'actions groupées pour la sélection multiple (CityBlock/DaytripCard) —
// réutilise volontairement les mêmes classes CSS que le menu "planifier sur un
// jour" de DaytripCard.jsx (.pp-group-day-dropdown / .pp-group-day-opt) plutôt
// que d'en inventer de nouvelles.
export default function SelectionActionBar({
  count, tripStartDate, tripEndDate,
  onAssignDay, onDelete, onCancel,
}) {
  const { t } = useTranslation();
  const [showDays, setShowDays] = useState(false);
  const daysDropdownRef = useScrollIntoViewOnOpen(showDays);
  const days = getDaysBetween(tripStartDate, tripEndDate);

  return (
    <div className="pp-selection-bar">
      <span className="pp-selection-count">{t('selection.count', { count })}</span>
      <div className="pp-selection-actions">
        <div className="pp-selection-dropdown-wrap">
          <button
            type="button"
            className="pp-btn pp-btn--ghost pp-btn--xs"
            onClick={() => setShowDays(s => !s)}
            disabled={days.length === 0}
            title={days.length === 0 ? t('day.addDatesTitle') : undefined}
          >
            {t('selection.moveToDayDropdown')}
          </button>
          {showDays && (
            <>
              <div className="pp-backdrop-overlay" onClick={() => setShowDays(false)} />
              <div className="pp-group-day-dropdown" ref={daysDropdownRef}>
                {days.map((d, i) => (
                  <button key={d} className="pp-group-day-opt" onClick={() => { onAssignDay(d); setShowDays(false); }}>
                    <span className="pp-group-day-num">{t('day.short', { n: i + 1 })}</span>
                    <span>{formatDateShort(d)}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <button type="button" className="pp-btn pp-btn--ghost pp-btn--xs pp-selection-delete" onClick={onDelete}>
          {t('common:actions.delete')}
        </button>
        <button type="button" className="pp-btn pp-btn--ghost pp-btn--xs" onClick={onCancel}>
          {t('common:actions.cancel')}
        </button>
      </div>
    </div>
  );
}
