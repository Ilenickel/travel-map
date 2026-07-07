import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DaysStepper from './DaysStepper';

// Petit formulaire affiché juste après avoir choisi/saisi le nom d'une ville
// (ou d'une excursion) à ajouter : nombre de jours prévus + date de début,
// tous deux facultatifs — utilisés uniquement pour le planning-modèle
// communautaire (suggestion et partage, voir supabase/planning_modele_v2.sql).
// Volontairement une étape à part plutôt que des champs en permanence dans
// l'en-tête de la ville : ce sont des informations secondaires, à ne
// remplir qu'au moment où on les a en tête (avant de partir), pas un
// widget qui encombre l'affichage au quotidien.
export default function NewCityOptionsForm({ cityName, defaultPlannedDays = null, tripStartDate, onConfirm, onCancel }) {
  const { t } = useTranslation();
  const [plannedDays, setPlannedDays] = useState(defaultPlannedDays);
  // Pré-rempli à la date de début du voyage plutôt que vide : sans ça, le
  // sélecteur de date natif s'ouvre sur le mois en cours, obligeant à
  // remonter potentiellement toute une année pour un voyage déjà planifié.
  const [startDate, setStartDate] = useState(tripStartDate || '');

  const handleConfirm = () => {
    onConfirm({ plannedDays, startDate: plannedDays ? (startDate || null) : null });
  };

  return (
    <div className="pp-new-city-options">
      <div className="pp-new-city-options-name">{cityName}</div>
      <div className="pp-new-city-options-fields">
        <label className="pp-new-city-options-field">
          <span>{t('city.plannedDaysLabel')}</span>
          <DaysStepper value={plannedDays} onChange={setPlannedDays} placeholder={t('city.plannedDaysPlaceholder')} />
        </label>
        {plannedDays != null && (
          <label className="pp-new-city-options-field">
            <span>{t('city.startDateLabel')}</span>
            <input
              type="date"
              className="pp-date-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
        )}
      </div>
      <div className="pp-new-city-options-hint">{t('city.optionalFieldsHint')}</div>
      <div className="pp-modal-actions pp-new-city-options-actions">
        <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={onCancel}>{t('common:actions.cancel')}</button>
        <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={handleConfirm}>{t('common:actions.add')}</button>
      </div>
    </div>
  );
}
