import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TRIP_CRITERIA } from '../../lib/planningUtils';

// Popup affichée sur l'écran principal de planification (pas dans l'éditeur
// d'un voyage précis) dès qu'AU MOINS un voyage de l'utilisateur est terminé
// sans réponse encore donnée (trips.share_prompt_answered, voir
// supabase/planning_modele_v2.sql) : propose d'activer le partage automatique
// comme modèle (planning-modèle communautaire, branche planModel). Répondre
// oui ou non marque définitivement share_prompt_answered pour CE voyage — la
// popup ne réapparaît plus pour lui, mais peut réapparaître pour un autre
// voyage terminé si l'utilisateur en a plusieurs.
//
// Accepter passe par une 2e étape (facultative) : les widgets de critères
// (avec enfants, en couple… voir TRIP_CRITERIA) qui identifient le voyage,
// recopiés sur les modèles au partage et utilisés comme filtres au-dessus des
// suggestions (supabase/planning_modele_v8.sql). Valider avec 0 critère reste
// possible — les critères sont un plus, pas une condition du partage.
export default function EndTripSharePrompt({ trip, onAnswer }) {
  const { t } = useTranslation();
  const [step, setStep] = useState('ask'); // 'ask' | 'criteria'
  const [criteria, setCriteria] = useState([]);

  const toggleCriterion = (key) => {
    setCriteria((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);
  };

  return (
    <div className="pp-modal-overlay">
      <div className="pp-modal pp-end-trip-share-modal">
        <div className="pp-modal-header">
          <h3 className="pp-modal-title">
            {step === 'ask' ? t('shareTemplate.endTripTitle') : t('shareTemplate.criteriaTitle')}
          </h3>
        </div>
        <div className="pp-modal-body">
          {step === 'ask' ? (
            <>
              <p className="pp-end-trip-share-text">{t('shareTemplate.endTripText', { title: trip.title })}</p>
              <div className="pp-share-template-note">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" opacity=".5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
                {t('shareTemplate.infoText')}
              </div>
              <div className="pp-modal-actions">
                <button className="pp-btn pp-btn--ghost" onClick={() => onAnswer(false)}>
                  {t('shareTemplate.declineButton')}
                </button>
                <button className="pp-btn pp-btn--primary" onClick={() => setStep('criteria')}>
                  {t('shareTemplate.acceptButton')}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="pp-end-trip-share-text">{t('shareTemplate.criteriaText')}</p>
              <div className="pp-criteria-chips">
                {Object.entries(TRIP_CRITERIA).map(([key, c]) => (
                  <button
                    key={key}
                    type="button"
                    className={`pp-criteria-chip${criteria.includes(key) ? ' active' : ''}`}
                    onClick={() => toggleCriterion(key)}
                    aria-pressed={criteria.includes(key)}
                  >
                    <span aria-hidden="true">{c.icon}</span> {c.label}
                    {criteria.includes(key) && <span className="pp-criteria-chip-check">✓</span>}
                  </button>
                ))}
              </div>
              <div className="pp-share-template-note">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" opacity=".5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
                {t('shareTemplate.criteriaHint')}
              </div>
              <div className="pp-modal-actions">
                <button className="pp-btn pp-btn--primary" onClick={() => onAnswer(true, criteria)}>
                  {t('shareTemplate.criteriaValidateButton')}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
