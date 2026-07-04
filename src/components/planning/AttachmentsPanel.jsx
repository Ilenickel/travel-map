import { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useAttachmentsCount } from '../../context/AttachmentsCountContext';
import { listAttachments, uploadAttachment, deleteAttachment, getSignedUrl, ALLOWED_MIME_TYPES } from '../../lib/attachments';

function formatFileSize(bytes) {
  if (!bytes) return '';
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

function iconFor(mime) {
  if (mime === 'application/pdf') return '📄';
  return '🖼️';
}

// Pièces jointes (billets, réservations, QR codes…) attachées à une activité
// (lieu ou trajet) ou à un hébergement. Autonome : charge et gère ses propres
// données via lib/attachments.js, pas besoin de faire remonter l'état par
// useTrips — évite de faire traverser tripId/callbacks toute la hiérarchie
// CityBlock → DaytripCard → DayView → ActivityItem pour cette seule fonctionnalité.
export default function AttachmentsPanel({ tripId, activityId, lodgingId }) {
  const { user } = useAuth();
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  // L'édition d'une activité/d'un hébergement peut se fermer (donc démonter ce
  // panneau) pendant qu'un upload ou un chargement est encore en vol — sans cette
  // garde, le then/await tardif appellerait setState sur un composant démonté.
  // Remettre `true` DANS l'effet (pas seulement à la création du ref) est
  // indispensable : en StrictMode (dev), React monte→démonte→remonte chaque
  // composant pour tester sa résilience. Le démontage simulé passe le ref à
  // false ; sans le remettre à true au (re)montage, il reste bloqué à false
  // pour de bon — tout upload/chargement réel qui suit se voit alors annulé
  // silencieusement par cette garde, laissant le bouton "Envoi…" figé indéfiniment.
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const ownerId = activityId || lodgingId;
  const { refresh: refreshCounts } = useAttachmentsCount(ownerId);

  const load = useCallback(async () => {
    if (!user?.id) { setAttachments([]); setLoading(false); return; }
    setLoading(true);
    const rows = await listAttachments({ activityId, lodgingId, uploadedBy: user.id });
    if (!mountedRef.current) return;
    setAttachments(rows);
    setLoading(false);
  }, [activityId, lodgingId, user?.id]);

  useEffect(() => { load(); }, [load]);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (!file) return;
    setError('');
    setUploading(true);
    const { data, error: uploadErr } = await uploadAttachment({
      tripId, activityId, lodgingId, file, uploadedBy: user?.id,
    });
    if (!mountedRef.current) return;
    setUploading(false);
    if (uploadErr) { setError(uploadErr); return; }
    setAttachments(prev => [...prev, data]);
    refreshCounts();
  };

  const handleOpen = async (attachment) => {
    // On ouvre l'onglet tout de suite, dans le même tick que le clic — sinon le
    // délai réseau de getSignedUrl (await) fait perdre le contexte "geste utilisateur"
    // et Safari/Firefox bloquent l'ouverture comme un pop-up indésirable. On redirige
    // ensuite cet onglet vers l'URL signée une fois obtenue.
    const tab = window.open('', '_blank', 'noopener,noreferrer');
    const url = await getSignedUrl(attachment.file_path);
    if (!url) {
      setError("Impossible d'ouvrir ce fichier pour le moment.");
      tab?.close();
      return;
    }
    if (tab) tab.location.href = url;
    else setError('Autorisez les pop-ups pour ouvrir cette pièce jointe.');
  };

  const handleDelete = async (attachment) => {
    setAttachments(prev => prev.filter(a => a.id !== attachment.id));
    const { error: delErr } = await deleteAttachment(attachment);
    if (!mountedRef.current) return;
    if (delErr) { setError('Échec de la suppression.'); load(); return; }
    refreshCounts();
  };

  if (!ownerId) return null;

  return (
    <div className="pp-attachments" onClick={e => e.stopPropagation()}>
      <div className="pp-attachments-label">📎 Mes pièces jointes (billets, réservations, QR codes…) — visibles par vous seul{!user?.id ? ' (connectez-vous pour en ajouter)' : ''}</div>
      {!loading && attachments.length > 0 && (
        <ul className="pp-attachments-list">
          {attachments.map(a => (
            <li key={a.id} className="pp-attachment-item">
              <button
                type="button"
                className="pp-attachment-open"
                onClick={() => handleOpen(a)}
                title={`Ouvrir ${a.file_name}`}
              >
                <span className="pp-attachment-icon">{iconFor(a.mime_type)}</span>
                <span className="pp-attachment-name">{a.file_name}</span>
                {a.file_size ? <span className="pp-attachment-size">{formatFileSize(a.file_size)}</span> : null}
              </button>
              <button
                type="button"
                className="pp-attachment-del"
                onClick={() => handleDelete(a)}
                title="Supprimer cette pièce jointe"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept={ALLOWED_MIME_TYPES.join(',')}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button
        type="button"
        className="pp-btn pp-btn--ghost pp-btn--sm pp-attachment-add"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading || !user?.id}
      >
        {uploading ? 'Envoi…' : '+ Ajouter un fichier (image ou PDF, 15 Mo max)'}
      </button>
      {error && <p className="pp-attachment-error">{error}</p>}
    </div>
  );
}
