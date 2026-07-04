import { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { supabase } from '../lib/supabase';
import { callModeration } from '../lib/moderation';
import { useAuth } from '../context/AuthContext';
import { useBadge } from '../context/BadgeContext';
import { validateImageFile } from '../lib/imageValidation';

export default function ReviewForm({ countryCode, destinationId, destinationName, existingReview, onSuccess, onCancel }) {
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
    if (rejected) setError('Certains fichiers ont été ignorés (format non accepté : JPG, PNG, WEBP ou GIF uniquement).');
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
        setError("Une erreur est survenue lors de l'envoi des photos.");
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
        setError(result.reason || "La publication n'a pas pu être vérifiée. Réessayez.");
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
                review_id: reviewId,
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
                review_id: reviewId,
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
      setError("Une erreur inattendue est survenue. Réessayez.");
      setSubmitting(false);
      setUploadProgress(null);
    }
  }

  const displayRating = hovered || rating;
  const RATING_LABELS = { 0: 'Sélectionnez une note', 1: 'Décevant', 2: 'Moyen', 3: 'Correct', 4: 'Très bien', 5: 'Excellent !' };

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
          placeholder="Partagez votre expérience… (optionnel)"
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
            <label className="review-photo-add-btn" title="Ajouter une photo">
              <span className="review-photo-add-icon">+</span>
              <span className="review-photo-add-text">Photo</span>
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
              Envoi des photos… {uploadProgress.done}/{uploadProgress.total}
            </span>
          </div>
        )}

        {error && <div className="review-error">{error}</div>}

        <div className="review-form-actions">
          {onCancel && <button type="button" className="review-cancel-btn" onClick={onCancel}>Annuler</button>}
          <button className="review-submit" type="submit" disabled={rating === 0 || submitting || compressing}>
            {uploadProgress
              ? `Photos… ${uploadProgress.done}/${uploadProgress.total}`
              : submitting
                ? 'Publication…'
                : existingReview ? 'Mettre à jour' : 'Publier'}
          </button>
        </div>
      </form>
    </div>
  );
}
