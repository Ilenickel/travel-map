import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import imageCompression from 'browser-image-compression';
import { supabase } from '../lib/supabase';
import { callModeration } from '../lib/moderation';
import { useAuth } from '../context/AuthContext';
import { useBadge } from '../context/BadgeContext';
import { validateImageFile } from '../lib/imageValidation';

export default function ReviewForm({ countryCode, destinationId, destinationName, existingReview, onSuccess, onCancel }) {
  const { t } = useTranslation('app');
  const { user } = useAuth();
  const { triggerCheck } = useBadge();
  const [rating, setRating] = useState(existingReview?.rating ?? 0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState(existingReview?.comment ?? '');
  const [photos, setPhotos] = useState(() => {
    const urls = existingReview?.photo_urls?.length
      ? existingReview.photo_urls
      : existingReview?.photo_url ? [existingReview.photo_url] : [];
    return urls.map((url) => ({ file: null, preview: url, url }));
  });
  const [submitting, setSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null); // null | { done: number, total: number }
  const [compressing, setCompressing] = useState(false);
  const [error, setError] = useState('');

  async function handlePhotos(e) {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    if (!files.length) return;
    setError('');
    // accept="image/*" sur l'input ne bloque rien réellement (juste une suggestion
    // pour la boîte de dialogue du système) : on vérifie donc le type nous-mêmes,
    // avant compression, pour ne jamais stocker un SVG (peut embarquer du script).
    const validFiles = [];
    let rejected = false;
    for (const file of files) {
      if (validateImageFile(file)) rejected = true;
      else validFiles.push(file);
    }
    if (rejected) setError(t('reviewForm.rejectedFiles'));
    if (!validFiles.length) return;
    setCompressing(true);
    const newPhotos = await Promise.all(validFiles.map(async (file) => {
      const compressed = await imageCompression(file, { maxSizeMB: 0.4, maxWidthOrHeight: 900, useWebWorker: true });
      return { file: compressed, preview: URL.createObjectURL(compressed), url: null };
    }));
    setPhotos((prev) => [...prev, ...newPhotos]);
    setCompressing(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (rating === 0) return;
    setSubmitting(true);
    setError('');

    try {
      const photosToUpload = photos.filter((p) => !p.url);
      if (photosToUpload.length > 0) {
        setUploadProgress({ done: 0, total: photosToUpload.length });
      }

      let orderedPhotoUrls = [];
      let newPhotos = [];
      try {
        let done = 0;
        for (const p of photos) {
          if (p.url) { orderedPhotoUrls.push(p.url); continue; }
          const prefix = destinationId ? `dest_${destinationId}` : countryCode;
          const path = `${user.id}/${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
          const { error: uploadErr } = await supabase.storage.from('review-photos').upload(path, p.file);
          if (uploadErr) throw new Error(uploadErr.message);
          const url = supabase.storage.from('review-photos').getPublicUrl(path).data.publicUrl;
          orderedPhotoUrls.push(url);
          newPhotos.push({ url, path });
          done++;
          setUploadProgress({ done, total: photosToUpload.length });
        }
      } catch (err) {
        console.error('[ReviewForm] upload:', err);
        setError(t('reviewForm.photoUploadError'));
        setSubmitting(false);
        setUploadProgress(null);
        return;
      }
      setUploadProgress(null);

      const result = await callModeration('moderate-review', {
        countryCode,
        destinationId,
        rating,
        comment: comment.trim(),
        newPhotos,
        photoUrls: orderedPhotoUrls,
      });

      if (!result.ok) {
        setError(result.reason || t('reviewForm.publicationFailed'));
        setSubmitting(false);
        return;
      }

      const reviewId = result.reviewId;

      if (destinationId) {
        if (!existingReview && countryCode && destinationName && reviewId) {
          const destUuid = destinationId.slice(destinationId.indexOf('_') + 1);
          const [{ data: followers }, { data: destOwnerRow }] = await Promise.all([
            supabase.from('follows').select('follower_id').eq('following_id', user.id),
            supabase.from('user_destinations').select('user_id').eq('id', destUuid).maybeSingle(),
          ]);

          const ownerId = destOwnerRow?.user_id ?? null;
          const notificationsToInsert = [];

          if (ownerId && ownerId !== user.id) {
            const { data: ownerPref } = await supabase.from('profiles').select('notif_my_dest_reviews').eq('id', ownerId).maybeSingle();
            if (ownerPref?.notif_my_dest_reviews !== false) {
              notificationsToInsert.push({
                user_id: ownerId,
                type: 'new_own_dest_review',
                destination_id: destinationId,
                destination_name: destinationName,
                country_code: countryCode,
                from_user_id: user.id,
                // destination_review_id (pas review_id) : reviewId est un id
                // de destination_reviews, pas de reviews — review_id a une
                // contrainte de clé étrangère vers reviews uniquement
                // (violée sinon, erreur 23503). destination_review_id est
                // la colonne dédiée (migration notifications_destination_review_id_v1.sql).
                destination_review_id: reviewId,
              });
            }
          }

          if (followers?.length) {
            const followerIds = followers.map((f) => f.follower_id).filter((id) => id !== ownerId);
            if (followerIds.length) {
              const { data: prefs } = await supabase.from('profiles').select('id, notif_dest_reviews').in('id', followerIds);
              const eligible = followerIds.filter((id) => {
                const pref = prefs?.find((p) => p.id === id);
                return pref ? pref.notif_dest_reviews !== false : true;
              });
              eligible.forEach((uid) => notificationsToInsert.push({
                user_id: uid,
                type: 'new_dest_review',
                destination_id: destinationId,
                destination_name: destinationName,
                country_code: countryCode,
                from_user_id: user.id,
                // Voir commentaire ci-dessus (destination_review_id, pas
                // review_id).
                destination_review_id: reviewId,
              }));
            }
          }

          if (notificationsToInsert.length) {
            const { error: notifErr } = await supabase.from('notifications').insert(notificationsToInsert);
            if (notifErr) console.error('[ReviewForm] notif dest insert:', notifErr);
          }
        }
      } else {
        if (!existingReview && reviewId) {
          const { data: followers } = await supabase.from('follows').select('follower_id').eq('following_id', user.id);
          if (followers?.length) {
            const followerIds = followers.map((f) => f.follower_id);
            const { data: prefs } = await supabase.from('profiles').select('id, notif_country_reviews').in('id', followerIds);
            const eligible = followerIds.filter((id) => {
              const pref = prefs?.find((p) => p.id === id);
              return pref ? pref.notif_country_reviews !== false : true;
            });
            if (eligible.length) {
              await supabase.from('notifications').insert(
                eligible.map((uid) => ({
                  user_id: uid,
                  type: 'new_review',
                  review_id: reviewId,
                  country_code: countryCode,
                  from_user_id: user.id,
                }))
              );
            }
          }
        }
      }

      setTimeout(() => triggerCheck(user.id), 300);
      onSuccess();
    } catch (err) {
      console.error('[ReviewForm] handleSubmit unexpected error:', err);
      setError(t('reviewForm.unexpectedError'));
      setSubmitting(false);
      setUploadProgress(null);
    }
  }

  const displayRating = hovered || rating;
  const RATING_LABELS = {
    0: t('reviewForm.ratingLabel0'), 1: t('reviewForm.ratingLabel1'), 2: t('reviewForm.ratingLabel2'),
    3: t('reviewForm.ratingLabel3'), 4: t('reviewForm.ratingLabel4'), 5: t('reviewForm.ratingLabel5'),
  };

  return (
    <div className="review-form-wrap">
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="review-rating-block">
          <div className="review-stars-row">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s} type="button"
                className={`review-star-btn${s <= displayRating ? ' active' : ''}`}
                onMouseEnter={() => setHovered(s)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => setRating(s)}
              >★</button>
            ))}
          </div>
          <span className={`review-rating-label${rating > 0 ? ' set' : ''}`}>{RATING_LABELS[displayRating]}</span>
        </div>

        <textarea
          className="review-textarea"
          placeholder={t('reviewForm.commentPlaceholder')}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
        />

        <div className="review-photos-row">
          {photos.map((p, i) => (
            <div key={i} className="review-photo-preview-wrap">
              <img src={p.preview} alt="" className="review-photo-preview" onError={(e) => { e.currentTarget.style.opacity = '0.3'; }} />
              {!submitting && <button type="button" className="review-photo-remove" onClick={() => setPhotos((prev) => prev.filter((_, j) => j !== i))}>✕</button>}
            </div>
          ))}
          {!submitting && !compressing && (
            <label className="review-photo-add-btn" title={t('reviewForm.addPhotoTitle')}>
              <span className="review-photo-add-icon">+</span>
              <span className="review-photo-add-text">{t('reviewForm.addPhotoText')}</span>
              <input type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handlePhotos} />
            </label>
          )}
          {compressing && (
            <div className="review-photo-compressing">
              <div className="review-photo-spinner" />
            </div>
          )}
        </div>

        {uploadProgress && (
          <div className="review-upload-progress">
            <div className="review-upload-bar-track">
              <div
                className="review-upload-bar-fill"
                style={{ width: `${(uploadProgress.done / uploadProgress.total) * 100}%` }}
              />
            </div>
            <span className="review-upload-label">
              {t('reviewForm.uploadingPhotos', { done: uploadProgress.done, total: uploadProgress.total })}
            </span>
          </div>
        )}

        {error && <div className="review-error">{error}</div>}

        <div className="review-form-actions">
          {onCancel && <button type="button" className="review-cancel-btn" onClick={onCancel}>{t('common:actions.cancel')}</button>}
          <button className="review-submit" type="submit" disabled={rating === 0 || submitting || compressing}>
            {uploadProgress
              ? t('reviewForm.photosProgress', { done: uploadProgress.done, total: uploadProgress.total })
              : submitting
                ? t('reviewForm.publishing')
                : existingReview ? t('reviewForm.updateButton') : t('reviewForm.publishButton')}
          </button>
        </div>
      </form>
    </div>
  );
}
