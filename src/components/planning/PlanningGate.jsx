import { Link } from 'react-router-dom';

const FEATURES = [
  { icon: '🗺', text: 'Créez des itinéraires multi-pays' },
  { icon: '🏙', text: 'Organisez par ville et par jour' },
  { icon: '📍', text: 'Recherchez des lieux à visiter' },
  { icon: '📅', text: 'Définissez vos dates de voyage' },
  { icon: '✈️', text: 'Gérez plusieurs voyages à la fois' },
  { icon: '📋', text: 'Exportez votre itinéraire en texte' },
];

export default function PlanningGate({ onConnect }) {
  return (
    <div className="pp-gate">
      <div className="pp-gate-card">
        <div className="pp-gate-hero">
          <div className="pp-gate-icon">✈️</div>
          <h1 className="pp-gate-title">Planifiez votre prochain voyage</h1>
          <p className="pp-gate-desc">
            Créez et organisez vos itinéraires étape par étape, ville par ville, jour par jour.
            Tout en un seul endroit, gratuitement.
          </p>
        </div>

        <ul className="pp-gate-features">
          {FEATURES.map((f, i) => (
            <li key={i} className="pp-gate-feature">
              <span className="pp-gate-feature-icon">{f.icon}</span>
              <span className="pp-gate-feature-text">{f.text}</span>
            </li>
          ))}
        </ul>

        <div className="pp-gate-cta">
          <button className="pp-btn pp-btn--primary pp-btn--lg" onClick={onConnect}>
            Se connecter pour commencer
          </button>
          <Link to="/" className="pp-gate-back">
            ← Revenir à la carte
          </Link>
        </div>
      </div>
    </div>
  );
}
