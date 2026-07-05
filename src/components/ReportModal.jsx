import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { reportContent, REPORT_REASON_CODES } from '../lib/admin';

export default function ReportModal({ contentType, contentId, onClose, onReported }) {
  const { t } = useTranslation('app');
  const [reason, setReason] = useState('');
  const [detail, setDetail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!reason) { setError(t('report.chooseReasonError')); return; }
    setSubmitting(true);
    setError('');
    const result = await reportContent(contentType, contentId, reason, detail.trim());
    setSubmitting(false);
    if (!result.ok) {
      setError(result.reason || t('report.genericError'));
      return;
    }
    onReported();
    onClose();
  }

  return (
    <div className="report-modal-backdrop">
      <div className="report-modal" onClick={(e) => e.stopPropagation()}>
        <div className="report-modal-header">
          <span className="report-modal-title">🚩 {t('report.title')}</span>
          <button className="report-modal-close" onClick={onClose}>✕</button>
        </div>
        <form className="report-modal-body" onSubmit={handleSubmit}>
          <p className="report-modal-hint">{t('report.hint')}</p>
          <div className="report-modal-reasons">
            {REPORT_REASON_CODES.map((code) => (
              <label key={code} className={`report-reason-option${reason === code ? ' selected' : ''}`}>
                <input
                  type="radio"
                  name="reason"
                  value={code}
                  checked={reason === code}
                  onChange={() => setReason(code)}
                />
                {t(`report.reasonsLong.${code}`)}
              </label>
            ))}
          </div>
          <textarea
            className="report-modal-detail"
            placeholder={t('report.detailPlaceholder')}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            maxLength={400}
            rows={3}
          />
          {error && <p className="report-modal-error">{error}</p>}
          <div className="report-modal-actions">
            <button type="button" className="report-modal-cancel" onClick={onClose} disabled={submitting}>
              {t('common:actions.cancel')}
            </button>
            <button type="submit" className="report-modal-submit" disabled={submitting || !reason}>
              {submitting ? t('report.sending') : t('report.submitButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
