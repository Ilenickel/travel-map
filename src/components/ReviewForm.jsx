import { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useBadge } from '../context/BadgeContext';

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
    setCompressing(true);
    const newPhotos = await Promise.all(files.map(async (file) => {
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

    const photosToUpload = photos.filter((p) => !p.url);
    if (photosToUpload.length > 0) {
      setUploadProgress({ done: 0, total: photosToUpload.length });
    }

    let uploadedUrls;
    try {
      // Upload séquentiel pour afficher la progression photo par photo
      uploadedUrls = [];
      let done = 0;
      for (const p of photos) {
        if (p.url) { uploadedUrls.push(p.url); continue; }
        const prefix = destinationId ? `dest_${destinationId}` : countryCode;
        const path = `${user.id}/${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
        const { error: uploadErr } = await supabase.storage.from('review-photos').upload(path, p.file);
        if (uploadErr) throw new Error(uploadErr.message);
        uploadedUrls.push(supabase.storage.from('review-photos').getPublicUrl(path).data.publicUrl);
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

    if (destinationId) {
      const { error: upsertErr } = await supabase.from('destination_reviews').upsert(
        {
          user_id: user.id,
          destination_id: destinationId,
          rating,
          comment: comment.trim() || null,
          photo_url: uploadedUrls[0] ?? null,
          photo_urls: uploadedUrls,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,destination_id' }
      );
      if (upsertErr) {
        console.error('[ReviewForm] upsert dest:', upsertErr);
        setError("Une erreur est survenue lors de la publication de l'avis.");
        setSubmitting(false);
        return;
      }

      // Notifier les abonnés qui ont activé les notifs de destination
      if (!existingReview && countryCode && destinationName) {
        const [{ data: newReview }, { data: followers }] = await Promise.all([
          supabase.from('destination_reviews').select('id').eq('user_id', user.id).eq('destination_id', destinationId).single(),
          supabase.from('follows').select('follower_id').eq('following_id', user.id),
        ]);
        if (followers?.length && newReview) {
          const followerIds = followers.map((f) => f.follower_id);
          const { data: prefs } = await supabase.from('profiles').select('id, notif_dest_reviews').in('id', followerIds);
          const eligible = followerIds.filter((id) => {
            const pref = prefs?.find((p) => p.id === id);
            return pref ? pref.notif_dest_reviews !== false : true;
          });
          if (eligible.length) {
            const { error: notifErr } = await supabase.from('notifications').insert(
              eligible.map((uid) => ({
                user_id: uid,
                type: 'new_dest_review',
                destination_id: destinationId,
                destination_name: destinationName,
                country_code: countryCode,
                from_user_id: user.id,
              }))
            );
            if (notifErr) console.error('[ReviewForm] notif dest insert:', notifErr);
          }
        }
      }
    } else {
      const { error: upsertErr } = await supabase.from('reviews').upsert(
        {
          user_id: user.id,
          country_code: countryCode,
          rating,
          comment: comment.trim() || null,
          photo_url: uploadedUrls[0] ?? null,
          photo_urls: uploadedUrls,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,country_code' }
      );

      if (upsertErr) {
        console.error('[ReviewForm] upsert:', upsertErr);
        setError("Une erreur est survenue lors de la publication de l'avis.");
        setSubmitting(false);
        return;
      }

      // Notifier les abonnés qui ont activé les notifs d'avis pays
      if (!existingReview) {
        const [{ data: newReview }, { data: followers }] = await Promise.all([
          supabase.from('reviews').select('id').eq('user_id', user.id).eq('country_code', countryCode).single(),
          supabase.from('follows').select('follower_id').eq('following_id', user.id),
        ]);
        if (followers?.length && newReview) {
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
                review_id: newReview.id,
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
  }

  const displayRating = hovered || rating;

  return (
    <form className="review-form" onSubmit={handleSubmit}>
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
        {rating > 0 && <span className="review-rating-label">{rating}/5</span>}
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
            📷
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
  );
}
