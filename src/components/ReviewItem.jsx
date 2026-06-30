import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { callAdminAction } from '../lib/admin';
import ReportModal from './ReportModal';

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
  if (diff < 31536000) return rtf.format(-Math.floor(diff / 2592000), 'month');
  return rtf.format(-Math.floor(diff / 31536000), 'year');
}

function Avatar({ profile }) {
  const name = profile?.display_name || '?';
  const colors = ['#6366f1','#8b5cf6','#ec4899','#f59e0b','#10b981','#3b82f6'];
  const color = colors[name.charCodeAt(0) % colors.length];
  if (profile?.avatar_url) return <img src={profile.avatar_url} alt={name} className="review-avatar" />;
  return (
    <div className="review-avatar review-avatar-initials" style={{ background: color }}>
      {name[0].toUpperCase()}
    </div>
  );
}

export function HalfStars({ rating, size = 16 }) {
  return (
    <span className="half-stars" style={{ fontSize: size }}>
      {[1,2,3,4,5].map((s) => {
        if (rating >= s) return <span key={s} className="hs-full">★</span>;
        if (rating >= s - 0.5) return <span key={s} className="hs-half">★</span>;
        return <span key={s} className="hs-empty">★</span>;
      })}
    </span>
  );
}

export default function ReviewItem({ review, currentUserId, onDelete, onEdit, onVoteChange, onOpenProfile, isDestReview = false, hasAlert = false, alertData = null, onAdminAction }) {
  const voteTable = isDestReview ? 'destination_review_votes' : 'review_votes';
  const reviewTable = isDestReview ? 'destination_reviews' : 'reviews';
  const { user, isAdmin } = useAuth();
  const [profile, setProfile] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const touchStartX = useRef(null);
  const [votes, setVotes] = useState({
    up: review._votes?.up || 0,
    down: review._votes?.down || 0,
    mine: review._votes?.myVote ?? null,
  });
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [reported, setReported] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [adminActing, setAdminActing] = useState(false);

  const photos = review.photo_urls?.length ? review.photo_urls : review.photo_url ? [review.photo_url] : [];
  const isOwn = review.user_id === currentUserId;

  // Vérifie en DB si l'utilisateur a déjà signalé cet avis (persiste au-delà de la session locale)
  useEffect(() => {
    if (!user || isOwn) return;
    const contentType = isDestReview ? 'dest_review' : 'review';
    supabase.from('reports')
      .select('id')
      .eq('reporter_id', user.id)
      .eq('content_type', contentType)
      .eq('content_id', review.id)
      .maybeSingle()
      .then(({ data }) => { if (data) setReported(true); });
  }, [user, review.id, isOwn, isDestReview]);

  useEffect(() => {
    setVotes({ up: review._votes?.up || 0, down: review._votes?.down || 0, mine: review._votes?.myVote ?? null });
  }, [review._votes]);

  useEffect(() => {
    supabase.from('profiles').select('display_name, avatar_url')
      .eq('id', review.user_id).maybeSingle()
      .then(({ data }) => {
        if (data?.display_name) {
          setProfile(data);
        } else if (user && user.id === review.user_id) {
          setProfile({
            display_name: user.user_metadata?.display_name || user.user_metadata?.full_name || user.email?.split('@')[0] || 'Voyageur',
            avatar_url: user.user_metadata?.avatar_url || data?.avatar_url || null,
          });
        } else {
          // Autre utilisateur sans profil connu
          setProfile({ display_name: 'Voyageur', avatar_url: null });
        }
      });
  }, [review.user_id, user]);

  async function vote(val) {
    if (!user) return;
    const newVal = votes.mine === val ? null : val;
    setVotes((prev) => {
      const upDelta  = val === 1  ? (newVal === 1  ? 1 : -1) : (prev.mine === 1  ? -1 : 0);
      const downDelta = val === -1 ? (newVal === -1 ? 1 : -1) : (prev.mine === -1 ? -1 : 0);
      return { up: prev.up + upDelta, down: prev.down + downDelta, mine: newVal };
    });
    if (newVal === null) {
      await supabase.from(voteTable).delete().eq('review_id', review.id).eq('user_id', user.id);
    } else {
      await supabase.from(voteTable).upsert(
        { review_id: review.id, user_id: user.id, vote: newVal },
        { onConflict: 'user_id,review_id' }
      );
    }
    onVoteChange?.();
  }

  async function handleDelete() {
    setDeleting(true);
    await supabase.from(reviewTable).delete().eq('id', review.id);
    onDelete?.();
  }

  async function handleAdminActionLocal(action) {
    if (adminActing) return;
    setAdminActing(true);
    const contentType = isDestReview ? 'dest_review' : 'review';
    const result = await callAdminAction(action, contentType, review.id);
    setAdminActing(false);
    if (result.ok) onAdminAction?.();
  }

  const contentType = isDestReview ? 'dest_review' : 'review';

  return (
    <>
    {reportModalOpen && !reported && (
      <ReportModal
        contentType={contentType}
        contentId={review.id}
        onClose={() => setReportModalOpen(false)}
        onReported={() => setReported(true)}
      />
    )}
    <div className={`review-item${hasAlert && isAdmin ? ' review-item--alert' : ''}`} id={`review-${review.id}`}>

      {/* Bandeau alerte admin */}
      {hasAlert && isAdmin && (
        <div className="admin-alert-bandeau">
          <div className="admin-alert-bandeau-top">
            <div className="admin-alert-bandeau-left">
              <span>🚨</span>
              <span className="admin-alert-bandeau-title">Contenu signalé</span>
              {alertData?.reason && <span className="admin-alert-bandeau-reason">{REASON_LABEL[alertData.reason] || alertData.reason}</span>}
            </div>
            <div className="admin-alert-bandeau-actions">
              <button className="admin-inline-btn admin-inline-btn--dismiss" disabled={adminActing} onClick={() => handleAdminActionLocal('dismiss_report')}>Fausse alerte</button>
              <button className="admin-inline-btn admin-inline-btn--delete" disabled={adminActing} onClick={() => handleAdminActionLocal('delete_content')}>Supprimer</button>
            </div>
          </div>
          {alertData?.detail && <div className="admin-alert-bandeau-detail">« {alertData.detail} »</div>}
        </div>
      )}

      {/* Ligne 1 : avatar + nom + date + boutons own + signaler */}
      <div className="review-item-header">
        <Avatar profile={profile} />
        <div className="review-item-meta">
          <button className="review-item-name-btn" onClick={() => onOpenProfile?.(review.user_id)}>
            {profile?.display_name || '…'}
          </button>
          <span className="review-item-date">{relativeTime(review.created_at)}</span>
        </div>
        <div className="review-item-own-actions">
          {isOwn ? (
            confirmDelete ? (
              <div className="review-confirm-delete">
                <span className="review-confirm-msg">Voulez-vous vraiment supprimer cet avis ?</span>
                <button className="review-confirm-yes" onClick={handleDelete} disabled={deleting}>Oui</button>
                <button className="review-confirm-no" onClick={() => setConfirmDelete(false)}>Non</button>
              </div>
            ) : (
              <>
                <button className="review-action-btn review-action-btn--edit" onClick={onEdit} title="Modifier">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                </button>
                <button className="review-action-btn review-action-btn--delete" onClick={() => setConfirmDelete(true)} title="Supprimer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6l1 1h4v2H4V4h4l1-1zM5 8h14l-1 13H6L5 8zm5 2v8h1v-8h-1zm3 0v8h1v-8h-1z"/></svg>
                </button>
              </>
            )
          ) : user && (
            <button
              className={`review-report-btn${reported ? ' reported' : ''}`}
              onClick={() => !reported && setReportModalOpen(true)}
              disabled={reported}
              title={reported ? 'Signalement envoyé' : 'Signaler ce contenu'}
            >
              {reported ? '🚩 Signalé' : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
                  </svg>
                  Signaler
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Ligne 2 : étoiles */}
      <HalfStars rating={review.rating} size={19} />

      {/* Commentaire */}
      {review.comment && <p className="review-item-comment">{review.comment}</p>}

      {/* Miniatures photos */}
      {photos.length > 0 && (
        <div className="review-photos-strip">
          {photos.map((url, i) => (
            <img key={i} src={url} alt="" className="review-strip-thumb" onClick={() => setLightbox(i)} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          ))}
        </div>
      )}

      {/* Votes */}
      <div className="review-item-votes">
        <button
          className={`review-vote-btn${votes.mine === 1 ? ' active' : ''}`}
          onClick={() => vote(1)}
          title={user ? undefined : 'Connectez-vous pour voter'}
        >
          👍
          <span className="review-vote-label">
            {votes.up > 0
              ? `${votes.up} ${votes.up === 1 ? 'personne a' : 'personnes ont'} trouvé cela utile`
              : 'Utile'}
          </span>
        </button>
        <button
          className={`review-vote-btn review-vote-down${votes.mine === -1 ? ' active' : ''}`}
          onClick={() => vote(-1)}
          title={user ? 'Pas utile' : 'Connectez-vous pour voter'}
        >
          👎{votes.down > 0 && <span className="review-vote-count">{votes.down}</span>}
        </button>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="review-lightbox" onClick={() => setLightbox(null)}>
          <div
            className="review-lightbox-inner"
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 40) {
                e.stopPropagation();
                setLightbox((i) => diff > 0 ? (i + 1) % photos.length : (i + photos.length - 1) % photos.length);
              }
              touchStartX.current = null;
            }}
          >
            <img src={photos[lightbox]} alt="" className="review-lightbox-img" />
            {photos.length > 1 && (
              <>
                <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + photos.length - 1) % photos.length); }}>‹</button>
                <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}>›</button>
                <span className="lightbox-counter">{lightbox + 1} / {photos.length}</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
}
