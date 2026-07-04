import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FEATURE_ICONS = ['🗺', '🏙', '📍', '📅', '✈️', '📋'];

export default function PlanningGate({ onConnect }) {
  const { t } = useTranslation();
  const featureTexts = t('gate.features', { returnObjects: true });

  return (
    <div className="pp-gate">
      <div className="pp-gate-card">
        <div className="pp-gate-hero">
          <div className="pp-gate-icon">✈️</div>
          <h1 className="pp-gate-title">{t('gate.title')}</h1>
          <p className="pp-gate-desc">
            {t('gate.desc')}
          </p>
        </div>

        <ul className="pp-gate-features">
          {FEATURE_ICONS.map((icon, i) => (
            <li key={i} className="pp-gate-feature">
              <span className="pp-gate-feature-icon">{icon}</span>
              <span className="pp-gate-feature-text">{featureTexts[i]}</span>
            </li>
          ))}
        </ul>

        <div className="pp-gate-cta">
          <button className="pp-btn pp-btn--primary pp-btn--lg" onClick={onConnect}>
            {t('gate.ctaButton')}
          </button>
          <Link to="/" className="pp-gate-back">
            {t('gate.backToMap')}
          </Link>
        </div>
      </div>
    </div>
  );
}
