import { useState } from 'react';
import { reportContent } from '../lib/admin';

const REPORT_REASONS = [
  { value: 'photo_obscene', label: 'Photo obscène ou inappropriée' },
  { value: 'photo_logo', label: 'Photo avec logo / contenu caché' },
  { value: 'photo_wrongplace', label: 'Photo ne correspond pas au lieu' },
  { value: 'insult', label: 'Insulte ou propos offensant' },
  { value: 'politics', label: 'Contenu politique ou polémique' },
  { value: 'spam', label: 'Spam ou contenu sans rapport' },
  { value: 'wrong_info', label: 'Informations incorrectes / fausses' },
  { value: 'other', label: 'Autre' },
];

export default function ReportModal({ contentType, contentId, onClose, onReported }) {
  const [reason, setReason] = useState('');
  const [detail, setDetail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!reason) { setError('Veuillez choisir une raison.'); return; }
    setSubmitting(true);
    setError('');
    const result = await reportContent(contentType, contentId, reason, detail.trim());
    setSubmitting(false);
    if (!result.ok) {
      setError(result.reason || 'Une erreur est survenue.');
      return;
    }
    onReported();
    onClose();
  }

  return (
    <div className="report-modal-backdrop">
      <div className="report-modal" onClick={(e) => e.stopPropagation()}>
        <div className="report-modal-header">
          <span className="report-modal-title">🚩 Signaler ce contenu</span>
          <button className="report-modal-close" onClick={onClose}>✕</button>
        </div>
        <form className="report-modal-body" onSubmit={handleSubmit}>
          <p className="report-modal-hint">Aidez-nous à comprendre le problème :</p>
          <div className="report-modal-reasons">
            {REPORT_REASONS.map((r) => (
              <label key={r.value} className={`report-reason-option${reason === r.value ? ' selected' : ''}`}>
                <input
                  type="radio"
                  name="reason"
                  value={r.value}
                  checked={reason === r.value}
                  onChange={() => setReason(r.value)}
                />
                {r.label}
              </label>
            ))}
          </div>
          <textarea
            className="report-modal-detail"
            placeholder="Détails supplémentaires (optionnel)…"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            maxLength={400}
            rows={3}
          />
          {error && <p className="report-modal-error">{error}</p>}
          <div className="report-modal-actions">
            <button type="button" className="report-modal-cancel" onClick={onClose} disabled={submitting}>
              Annuler
            </button>
            <button type="submit" className="report-modal-submit" disabled={submitting || !reason}>
              {submitting ? 'Envoi…' : '🚩 Envoyer le signalement'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
