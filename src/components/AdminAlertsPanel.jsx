import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { callAdminAction, resolveAlertNavigation } from '../lib/admin';
import { relativeTime } from '../lib/relativeTime';

export default function AdminAlertsPanel({ alerts, onClose, onNavigate, onRefresh }) {
  const { t } = useTranslation('app');
  const [acting, setActing] = useState(null);
  const [navigating, setNavigating] = useState(null);
  const [errors, setErrors] = useState({});

  async function handleAction(alert, action) {
    setActing(alert.id);
    setErrors((e) => ({ ...e, [alert.id]: null }));
    const result = await callAdminAction(action, alert.content_type, alert.content_id);
    setActing(null);
    if (!result.ok) {
      setErrors((e) => ({ ...e, [alert.id]: result.reason || t('adminPanel.genericError') }));
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
      setErrors((e) => ({ ...e, [alert.id]: t('adminPanel.contentNotFound') }));
    }
  }

  return (
    <>
      <div className="admin-panel-backdrop" onClick={onClose} />
      <div className="admin-panel">
        <div className="admin-panel-header">
          <span className="admin-panel-title">🚨 {t('adminPanel.title')} <span className="admin-panel-count">{alerts.length}</span></span>
          <button className="admin-panel-close" onClick={onClose}>✕</button>
        </div>

        {alerts.length === 0 ? (
          <div className="admin-panel-empty">
            <span className="admin-panel-empty-icon">✅</span>
            <span>{t('adminPanel.empty')}</span>
          </div>
        ) : (
          <ul className="admin-panel-list">
            {alerts.map((alert) => (
              <li key={alert.id} className="admin-alert-item">
                <div className="admin-alert-meta">
                  <span className="admin-alert-type">{t(`report.contentType.${alert.content_type}`, { defaultValue: alert.content_type })}</span>
                  <span className="admin-alert-time">{relativeTime(alert.created_at)}</span>
                </div>
                {(alert.reason || alert.detail) && (
                  <div className="admin-alert-sub">
                    {alert.reason && <span className="admin-alert-reason">{t(`report.reasonsShort.${alert.reason}`, { defaultValue: alert.reason })}</span>}
                    {alert.detail && <span className="admin-alert-detail-inline">— « {alert.detail} »</span>}
                  </div>
                )}
                {errors[alert.id] && <div className="admin-alert-error">{errors[alert.id]}</div>}
                <div className="admin-alert-actions">
                  <button
                    className="admin-alert-btn admin-alert-btn--go"
                    disabled={navigating === alert.id}
                    onClick={() => handleNavigate(alert)}
                    title={t('adminPanel.viewTitle')}
                  >
                    {navigating === alert.id ? '…' : t('adminPanel.viewButton')}
                  </button>
                  <button
                    className="admin-alert-btn admin-alert-btn--dismiss"
                    disabled={acting === alert.id}
                    onClick={() => handleAction(alert, 'dismiss_report')}
                  >
                    {acting === alert.id ? '…' : t('adminPanel.dismissButton')}
                  </button>
                  <button
                    className="admin-alert-btn admin-alert-btn--delete"
                    disabled={acting === alert.id}
                    onClick={() => handleAction(alert, 'delete_content')}
                  >
                    {acting === alert.id ? '…' : t('adminPanel.deleteButton')}
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
