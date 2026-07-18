import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DaysStepper from './DaysStepper';

// Bouton discret (icône calendrier) ouvrant un petit popover pour éditer le
// nombre de jours prévus + la date de début d'une ville/excursion déjà
// ajoutée — facultatifs, utilisés uniquement par le planning-modèle
// (suggestion et partage, voir supabase/planning_modele_v2.sql). Remplace
// deux champs en permanence visibles dans l'en-tête (qui débordaient sur
// petit écran) par une action à la demande, cohérente avec le reste des
// icônes d'action de la ville (renommer, supprimer…).
export default function CityPlanningFieldsButton({ city, tripStartDate, onUpdate, asMenuItem = false }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handlePlannedDaysChange = (n) => {
    // Pré-remplit la date de début à la date de départ du voyage dès que des
    // jours sont renseignés pour la première fois : sans ça, le sélecteur de
    // date natif s'ouvrirait sur le mois en cours, obligeant à remonter
    // potentiellement toute une année pour un voyage déjà planifié.
    const patch = { planned_days: n };
    if (n != null && city.planned_days == null && !city.start_date && tripStartDate) {
      patch.start_date = tripStartDate;
    }
    onUpdate(city.id, patch);
  };
  const handleStartDateChange = (val) => {
    onUpdate(city.id, { start_date: val || null });
  };

  const hasValue = city.planned_days != null;

  return (
    <div className="pp-city-planning-popover-wrap">
      <button
        type="button"
        className={asMenuItem ? 'pp-dropdown-item' : `pp-icon-btn${hasValue ? ' pp-icon-btn--active' : ''}`}
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
        title={asMenuItem ? undefined : t('city.planningFieldsTitle')}
      >
        <svg width={asMenuItem ? 13 : 12} height={asMenuItem ? 13 : 12} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
        </svg>
        {asMenuItem && t('city.planningFieldsTitle')}
      </button>
      {open && (
        <>
          <div className="pp-backdrop-overlay" onClick={() => setOpen(false)} />
          <div className="pp-city-planning-popover" onClick={(e) => e.stopPropagation()}>
            <label className="pp-new-city-options-field">
              <span>{t('city.plannedDaysLabel')}</span>
              <DaysStepper value={city.planned_days} onChange={handlePlannedDaysChange} placeholder={t('city.plannedDaysPlaceholder')} />
            </label>
            {city.planned_days != null && (
              <label className="pp-new-city-options-field">
                <span>{t('city.startDateLabel')}</span>
                <input
                  type="date"
                  className="pp-date-input"
                  value={city.start_date ?? tripStartDate ?? ''}
                  onChange={(e) => handleStartDateChange(e.target.value)}
                />
              </label>
            )}
            <div className="pp-new-city-options-hint">{t('city.optionalFieldsHint')}</div>
          </div>
        </>
      )}
    </div>
  );
}
