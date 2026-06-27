import { useState, useEffect, useRef } from 'react';
import imageCompression from 'browser-image-compression';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { findCountry } from '../data/index';

function relativeTime(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });
  if (diff < 60) return rtf.format(-Math.floor(diff), 'second');
  if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
  if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
  if (diff < 2592000) return rtf.format(-Math.floor(diff / 86400), 'day');
  return rtf.format(-Math.floor(diff / 2592000), 'month');
}

const AVATAR_COLORS = ['#6366f1','#8b5cf6','#ec4899','#f59e0b','#10b981','#3b82f6'];
function avatarColor(name) { return AVATAR_COLORS[(name || '?').charCodeAt(0) % AVATAR_COLORS.length]; }

function reviewPhotos(r) {
  if (r.photo_urls?.length) return r.photo_urls;
  if (r.photo_url) return [r.photo_url];
  return [];
}

function FlagImage({ country, code }) {
  if (!country?.emoji) return <span className="profile-review-flag">{code}</span>;
  const chars = [...country.emoji];
  if (chars.length < 2) return <span className="profile-review-flag">{country.emoji}</span>;
  const alpha2 = chars.slice(0, 2)
    .map((c) => String.fromCharCode(c.codePointAt(0) - 0x1F1E6 + 65))
    .join('').toLowerCase();
  return (
    <img
      src={`https://flagcdn.com/w20/${alpha2}.png`}
      srcSet={`https://flagcdn.com/w40/${alpha2}.png 2x`}
      alt={country.name}
      className="profile-review-flag-img"
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
    />
  );
}

export default function ProfilePanel({ onClose, onSave, onOpenCountry }) {
  const { user, signOut } = useAuth();
  const [tab, setTab] = useState('profile');
  const [displayName, setDisplayName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { photos, index }
  const [followerCount, setFollowerCount] = useState(0);
  const fileInputRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (!user) return;
    supabase.from('profiles').select('display_name, avatar_url').eq('id', user.id).single().then(({ data }) => {
      if (data?.display_name) setDisplayName(data.display_name);
      if (data?.avatar_url) { setAvatarUrl(data.avatar_url); setAvatarPreview(data.avatar_url); }
      else setDisplayName(user?.user_metadata?.display_name || user?.user_metadata?.full_name || '');
    });
  }, [user]);

  useEffect(() => {
    Promise.all([
      supabase.from('reviews').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
      supabase.from('follows').select('follower_id', { count: 'exact' }).eq('following_id', user.id),
    ]).then(([{ data }, { count }]) => {
      setReviews(data || []);
      setFollowerCount(count || 0);
      setReviewsLoading(false);
    });
  }, [user]);

  async function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const compressed = await imageCompression(file, { maxSizeMB: 0.3, maxWidthOrHeight: 400, useWebWorker: true });
    setAvatarFile(compressed);
    setAvatarPreview(URL.createObjectURL(compressed));
  }

  async function handleSave() {
    setSaving(true);
    setSaveMsg('');
    let newAvatarUrl = avatarUrl;

    if (avatarFile) {
      if (avatarFile.size > 4 * 1024 * 1024) {
        setSaveMsg("Une erreur est survenue lors de l'enregistrement de votre nouvelle photo de profil.");
        console.error('[ProfilePanel] fichier trop volumineux après compression :', avatarFile.size);
        setSaving(false);
        return;
      }
      const path = `avatars/${user.id}_${Date.now()}`;
      const { error: uploadErr } = await supabase.storage.from('review-photos').upload(path, avatarFile, { upsert: true });
      if (uploadErr) {
        console.error('[ProfilePanel] upload avatar:', uploadErr);
        setSaveMsg("Une erreur est survenue lors de l'enregistrement de votre nouvelle photo de profil.");
        setSaving(false);
        return;
      }
      const { data } = supabase.storage.from('review-photos').getPublicUrl(path);
      newAvatarUrl = data.publicUrl;
    }

    const { error: upsertErr } = await supabase.from('profiles').upsert({
      id: user.id,
      display_name: displayName.trim(),
      avatar_url: newAvatarUrl,
    });

    if (upsertErr) {
      console.error('[ProfilePanel] upsert profile:', upsertErr);
      setSaveMsg("Une erreur est survenue lors de la sauvegarde du profil.");
      setSaving(false);
      return;
    }

    setAvatarUrl(newAvatarUrl);
    setAvatarPreview(newAvatarUrl);
    setAvatarFile(null);
    setSaveMsg('Profil mis à jour !');
    setSaving(false);
    setTimeout(() => setSaveMsg(''), 3000);
    onSave?.();
  }

  async function handleDeleteReview(id) {
    await supabase.from('reviews').delete().eq('id', id);
    setReviews((prev) => prev.filter((r) => r.id !== id));
    setConfirmDeleteId(null);
  }

  const name = displayName || user?.email || '?';
  const initials = name[0].toUpperCase();

  return (
    <div className="auth-overlay">
      <div className="profile-modal">

        {/* Header */}
        <div className="profile-modal-header">
          <div className="profile-modal-avatar-wrap" onClick={() => fileInputRef.current?.click()}>
            {avatarPreview
              ? <img src={avatarPreview} alt={name} className="profile-modal-avatar-img" />
              : <div className="profile-modal-avatar-initials" style={{ background: avatarColor(name) }}>{initials}</div>
            }
            <div className="profile-modal-avatar-overlay">📷</div>
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
          <div className="profile-modal-header-info">
            <span className="profile-modal-name">{displayName || user?.email}</span>
            <span className="profile-modal-email">{user?.email}</span>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
              {followerCount} abonné{followerCount !== 1 ? 's' : ''}
            </span>
          </div>
          <button className="auth-close" onClick={onClose}>✕</button>
        </div>

        {/* Tabs */}
        <div className="profile-modal-tabs">
          <button className={`profile-modal-tab${tab === 'profile' ? ' active' : ''}`} onClick={() => setTab('profile')}>Profil</button>
          <button className={`profile-modal-tab${tab === 'reviews' ? ' active' : ''}`} onClick={() => setTab('reviews')}>
            Mes avis <span className="profile-tab-count">{reviews.length}</span>
          </button>
        </div>

        {/* Onglet Profil */}
        {tab === 'profile' && (
          <div className="profile-tab-content">
            <div className="auth-field">
              <label className="auth-label">Pseudo</label>
              <input className="auth-input" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Ton pseudo" />
            </div>
            {saveMsg && <div className="auth-success">{saveMsg}</div>}
            <div className="profile-tab-actions">
              <button className="auth-submit" onClick={handleSave} disabled={saving}>
                {saving ? 'Enregistrement…' : 'Enregistrer'}
              </button>
              <button className="profile-signout-btn" onClick={() => { signOut(); onClose(); }}>
                Se déconnecter
              </button>
            </div>
          </div>
        )}

        {/* Onglet Mes avis */}
        {tab === 'reviews' && (
          <div className="profile-reviews-list">
            {reviewsLoading && <div className="review-list-loading">Chargement…</div>}
            {!reviewsLoading && reviews.length === 0 && (
              <div className="profile-reviews-empty">
                <span style={{ fontSize: 32 }}>⭐</span>
                <span>Tu n'as pas encore laissé d'avis.</span>
              </div>
            )}
            {reviews.map((r) => {
              const country = findCountry(r.country_code);
              const photos = reviewPhotos(r);
              return (
                <div key={r.id} className="profile-review-item">
                  {confirmDeleteId === r.id && (
                    <div className="profile-confirm-overlay">
                      <div className="profile-confirm-box">
                        <p className="profile-confirm-msg">Supprimer cet avis ?</p>
                        <div className="profile-confirm-actions">
                          <button className="profile-confirm-cancel" onClick={() => setConfirmDeleteId(null)}>Annuler</button>
                          <button className="profile-confirm-delete" onClick={() => handleDeleteReview(r.id)}>Supprimer</button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="profile-review-top">
                    <button
                      className="profile-review-country-btn"
                      onClick={() => { onOpenCountry?.(r.country_code); onClose(); }}
                      title={`Ouvrir la fiche ${country?.name}`}
                    >
                      <FlagImage country={country} code={r.country_code} />
                      <span className="profile-review-country">{country?.name || r.country_code}</span>
                    </button>
                    <span className="profile-review-stars">
                      {[1,2,3,4,5].map((s) => <span key={s} className={s <= r.rating ? 'star-filled' : 'star-empty'}>★</span>)}
                    </span>
                    <span className="profile-review-date">{relativeTime(r.created_at)}</span>
                    <button className="profile-review-delete-btn" onClick={() => setConfirmDeleteId(r.id)} title="Supprimer">
                      🗑
                    </button>
                  </div>
                  {r.comment && <p className="profile-review-comment">{r.comment}</p>}
                  {photos.length > 0 && (
                    <div className="profile-photo-strip">
                      {photos.map((url, i) => (
                        <img
                          key={i}
                          src={url}
                          alt=""
                          className="profile-photo-thumb"
                          onClick={() => setLightbox({ photos, index: i })}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox photos */}
      {lightbox && (
        <div className="review-lightbox" onClick={() => setLightbox(null)}>
          <div
            className="review-lightbox-inner"
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 40) {
                e.stopPropagation();
                setLightbox((lb) => ({ ...lb, index: diff > 0
                  ? (lb.index + 1) % lb.photos.length
                  : (lb.index + lb.photos.length - 1) % lb.photos.length
                }));
              }
              touchStartX.current = null;
            }}
          >
            <img src={lightbox.photos[lightbox.index]} alt="" className="review-lightbox-img" />
            {lightbox.photos.length > 1 && (
              <>
                <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightbox((lb) => ({ ...lb, index: (lb.index + lb.photos.length - 1) % lb.photos.length })); }}>‹</button>
                <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % lb.photos.length })); }}>›</button>
                <span className="lightbox-counter">{lightbox.index + 1} / {lightbox.photos.length}</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
