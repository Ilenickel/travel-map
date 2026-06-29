import { useState } from 'react';
import { callAdminAction, resolveAlertNavigation } from '../lib/admin';

const TYPE_LABEL = {
  review: 'Avis pays',
  dest_review: 'Avis destination',
  destination: 'Destination communautaire',
};

const REASON_LABEL = {
  photo_obscene: 'Photo obscène',
  photo_logo: 'Photo avec logo caché',
  photo_wrongplace: 'Photo ne correspond pas',
  insult: 'Insulte / propos offensant',
  politics: 'Contenu politique',
  spam: 'Spam',
  wrong_info: 'Informations incorrectes',
  other: 'Autre',
};

function relativeTime(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });
  if (diff < 60) return rtf.format(-Math.floor(diff), 'second');
  if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
  if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
  if (diff < 2592000) return rtf.format(-Math.floor(diff / 86400), 'day');
  return rtf.format(-Math.floor(diff / 2592000), 'month');
}

export default function AdminAlertsPanel({ alerts, onClose, onNavigate, onRefresh }) {
  const [acting, setActing] = useState(null);
  const [navigating, setNavigating] = useState(null);
  const [errors, setErrors] = useState({});

  async function handleAction(alert, action) {
    setActing(alert.id);
    setErrors((e) => ({ ...e, [alert.id]: null }));
    const result = await callAdminAction(action, alert.content_type, alert.content_id);
    setActing(null);
    if (!result.ok) {
      setErrors((e) => ({ ...e, [alert.id]: result.reason || 'Erreur.' }));
      return;
    }
    onRefresh();
  }

  async function handleNavigate(alert) {
    setNavigating(alert.id);
    const result = await resolveAlertNavigation(alert.content_type, alert.content_id);
    setNavigating(null);
    if (result?.ok && result.nav) {
      onNavigate(result.nav);
      onClose();
    } else {
      setErrors((e) => ({ ...e, [alert.id]: 'Contenu introuvable (peut-être déjà supprimé).' }));
    }
  }

  return (
    <>
      <div className="admin-panel-backdrop" onClick={onClose} />
      <div className="admin-panel">
        <div className="admin-panel-header">
          <span className="admin-panel-title">🚨 Modération <span className="admin-panel-count">{alerts.length}</span></span>
          <button className="admin-panel-close" onClick={onClose}>✕</button>
        </div>

        {alerts.length === 0 ? (
          <div className="admin-panel-empty">
            <span className="admin-panel-empty-icon">✅</span>
            <span>Aucune alerte en attente</span>
          </div>
        ) : (
          <ul className="admin-panel-list">
            {alerts.map((alert) => (
              <li key={alert.id} className="admin-alert-item">
                <div className="admin-alert-meta">
                  <span className="admin-alert-type">{TYPE_LABEL[alert.content_type] || alert.content_type}</span>
                  <span className="admin-alert-time">{relativeTime(alert.created_at)}</span>
                </div>
                {(alert.reason || alert.detail) && (
                  <div className="admin-alert-sub">
                    {alert.reason && <span className="admin-alert-reason">{REASON_LABEL[alert.reason] || alert.reason}</span>}
                    {alert.detail && <span className="admin-alert-detail-inline">— « {alert.detail} »</span>}
                  </div>
                )}
                {errors[alert.id] && <div className="admin-alert-error">{errors[alert.id]}</div>}
                <div className="admin-alert-actions">
                  <button
                    className="admin-alert-btn admin-alert-btn--go"
                    disabled={navigating === alert.id}
                    onClick={() => handleNavigate(alert)}
                    title="Voir le contenu signalé"
                  >
                    {navigating === alert.id ? '…' : 'Voir'}
                  </button>
                  <button
                    className="admin-alert-btn admin-alert-btn--dismiss"
                    disabled={acting === alert.id}
                    onClick={() => handleAction(alert, 'dismiss_report')}
                  >
                    {acting === alert.id ? '…' : 'Fausse alerte'}
                  </button>
                  <button
                    className="admin-alert-btn admin-alert-btn--delete"
                    disabled={acting === alert.id}
                    onClick={() => handleAction(alert, 'delete_content')}
                  >
                    {acting === alert.id ? '…' : 'Supprimer'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
