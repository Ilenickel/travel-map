import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TRANSPORT_MODES } from '../../lib/planningUtils';

const TRANSPORT_MODE_LIST = Object.entries(TRANSPORT_MODES);

// Formulaire compact d'ajout d'un trajet (mode + durée), réutilisé par CityBlock et
// DaytripCard. Contrairement à un lieu, un trajet n'a pas de coordonnées à chercher —
// pas de recherche géographique ici, juste un nom libre, un mode et une durée.
export default function TrajetAddInput({ onAdd, onClose }) {
  const { t } = useTranslation();
  const [mode, setMode] = useState('voiture');
  const [name, setName] = useState('');
  const [h, setH] = useState('');
  const [m, setM] = useState('');

  const handleAdd = () => {
    // Math.max : le min="0" des inputs n'empêche pas une saisie clavier négative
    const totalMinutes = Math.max(0, parseInt(h, 10) || 0) * 60 + Math.max(0, parseInt(m, 10) || 0);
    const label = name.trim() || TRANSPORT_MODES[mode].label;
    onAdd(label, {
      category: 'transport',
      transport_mode: mode,
      duration_minutes: totalMinutes > 0 ? totalMinutes : null,
    });
  };

  return (
    <div className="pp-add-trajet-wrap">
      <div className="pp-cat-picker">
        {TRANSPORT_MODE_LIST.map(([key, val]) => (
          <button
            key={key}
            type="button"
            className={`pp-cat-btn${mode === key ? ' active' : ''}`}
            onClick={() => setMode(key)}
            title={val.label}
          >
            {val.icon}
          </button>
        ))}
      </div>
      <input
        className="pp-add-trajet-name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={t('trajet.namePlaceholder', { mode: TRANSPORT_MODES[mode].label })}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        autoFocus
      />
      <div className="pp-trajet-duration">
        <input
          type="number" min="0" placeholder="0"
          className="pp-trajet-duration-input"
          value={h}
          onChange={e => setH(e.target.value)}
        />
        <span>h</span>
        <input
          type="number" min="0" max="59" placeholder="00"
          className="pp-trajet-duration-input"
          value={m}
          onChange={e => setM(e.target.value)}
        />
        <span>min</span>
      </div>
      <div className="pp-add-trajet-actions">
        <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={handleAdd}>{t('common:actions.add')}</button>
        <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={onClose}>{t('common:actions.cancel')}</button>
      </div>
    </div>
  );
}
