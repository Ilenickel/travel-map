import { Component } from 'react';
import i18n from '../i18n';
import { recordError } from '../lib/errorLog';

// Seul composant classe du projet : React n'a pas d'équivalent fonctionnel
// pour getDerivedStateFromError/componentDidCatch. Ne couvre que les erreurs
// de RENDU React — les erreurs async/handlers passent par errorLog.js (voir
// installGlobalErrorHandlers dans main.jsx).
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    recordError(error, `react-render: ${info?.componentStack?.split('\n')[1]?.trim() || ''}`);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    const t = i18n.t.bind(i18n);
    return (
      <div className="error-boundary-fallback">
        <div className="error-boundary-card">
          <div className="error-boundary-icon" aria-hidden="true">⚠️</div>
          <h1>{t('errorBoundary.title', { ns: 'app' })}</h1>
          <p>{t('errorBoundary.message', { ns: 'app' })}</p>
          <button type="button" onClick={() => window.location.reload()}>
            {t('errorBoundary.reloadButton', { ns: 'app' })}
          </button>
        </div>
      </div>
    );
  }
}
