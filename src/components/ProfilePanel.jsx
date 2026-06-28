import { useState, useEffect, useRef } from 'react';
import imageCompression from 'browser-image-compression';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { findCountry, COUNTRIES } from '../data/index';

function parseDestId(destId) {
  if (!destId) return { countryCode: null, localId: destId, countryMeta: null, dest: null };
  for (const code of Object.keys(COUNTRIES)) {
    if (destId.startsWith(code + '_')) {
      const localId = destId.slice(code.length + 1);
      const dest = COUNTRIES[code].destinations?.find((d) => String(d.id) === localId);
      return { countryCode: code, localId, countryMeta: findCountry(code), dest };
    }
  }
  return { countryCode: null, localId: destId, countryMeta: null, dest: null };
}
import BadgeSection from './BadgeSection';
import { useBadge } from '../context/BadgeContext';

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
  const { triggerCheck } = useBadge();
  const [tab, setTab] = useState('profile');
  const [badgeRefreshKey, setBadgeRefreshKey] = useState(0);
  const [displayName, setDisplayName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [notifCountryReviews, setNotifCountryReviews] = useState(true);
  const [notifDestReviews, setNotifDestReviews] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [destReviews, setDestReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsSubTab, setReviewsSubTab] = useState('country');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { photos, index }
  const [followerCount, setFollowerCount] = useState(0);
  const fileInputRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (!user) return;
    triggerCheck(user.id).then(() => setBadgeRefreshKey((k) => k + 1));
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!user) return;
    supabase.from('profiles').select('display_name, avatar_url, notif_country_reviews, notif_dest_reviews').eq('id', user.id).single().then(({ data }) => {
      if (data?.display_name) setDisplayName(data.display_name);
      if (data?.avatar_url) { setAvatarUrl(data.avatar_url); setAvatarPreview(data.avatar_url); }
      else setDisplayName(user?.user_metadata?.display_name || user?.user_metadata?.full_name || '');
      if (data?.notif_country_reviews !== undefined) setNotifCountryReviews(data.notif_country_reviews !== false);
      if (data?.notif_dest_reviews !== undefined) setNotifDestReviews(data.notif_dest_reviews !== false);
    });
  }, [user]);

  useEffect(() => {
    Promise.all([
      supabase.from('reviews').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
      supabase.from('destination_reviews').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
      supabase.from('follows').select('follower_id', { count: 'exact' }).eq('following_id', user.id),
    ]).then(([{ data }, { data: dData }, { count }]) => {
      setReviews(data || []);
      setDestReviews(dData || []);
      setFollowerCount(count || 0);
      setReviewsLoading(false);
    }).catch(() => setReviewsLoading(false));
  }, [user]);

  async function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
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
      notif_country_reviews: notifCountryReviews,
      notif_dest_reviews: notifDestReviews,
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
            Mes avis <span className="profile-tab-count">{reviews.length + destReviews.length}</span>
          </button>
          <button className={`profile-modal-tab${tab === 'badges' ? ' active' : ''}`} onClick={() => setTab('badges')}>🏅 Badges</button>
        </div>

        {/* Onglet Profil */}
        {tab === 'profile' && (
          <div className="profile-tab-content">
            <div className="auth-field">
              <label className="auth-label">Pseudo</label>
              <input className="auth-input" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Ton pseudo" />
            </div>
            <div className="profile-notif-prefs">
              <span className="profile-notif-prefs-title">Notifications du compte</span>
              <label className="profile-notif-pref-row">
                <span className="profile-toggle">
                  <input type="checkbox" checked={notifCountryReviews} onChange={(e) => setNotifCountryReviews(e.target.checked)} />
                  <span className="profile-toggle-track"><span className="profile-toggle-thumb" /></span>
                </span>
                <span>Recevoir une notification lorsqu'une personne suivie ajoute un avis sur un pays</span>
              </label>
              <label className="profile-notif-pref-row">
                <span className="profile-toggle">
                  <input type="checkbox" checked={notifDestReviews} onChange={(e) => setNotifDestReviews(e.target.checked)} />
                  <span className="profile-toggle-track"><span className="profile-toggle-thumb" /></span>
                </span>
                <span>Recevoir une notification lorsqu'une personne suivie ajoute un avis sur une destination spécifique</span>
              </label>
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

        {/* Onglet Badges */}
        {tab === 'badges' && (
          <div className="profile-tab-content">
            <BadgeSection userId={user.id} ownProfile={true} refreshKey={badgeRefreshKey} />
          </div>
        )}

        {/* Onglet Mes avis */}
        {tab === 'reviews' && (
          <>
            <div className="profile-reviews-subtabs">
              <button className={`profile-reviews-subtab${reviewsSubTab === 'country' ? ' active' : ''}`} onClick={() => setReviewsSubTab('country')}>
                Pays {reviews.length > 0 && <span className="profile-tab-count">{reviews.length}</span>}
              </button>
              <button className={`profile-reviews-subtab${reviewsSubTab === 'dest' ? ' active' : ''}`} onClick={() => setReviewsSubTab('dest')}>
                Destinations {destReviews.length > 0 && <span className="profile-tab-count">{destReviews.length}</span>}
              </button>
            </div>
            <div className="profile-reviews-list">
              {reviewsLoading && <div className="review-list-loading">Chargement…</div>}

              {/* Avis pays */}
              {!reviewsLoading && reviewsSubTab === 'country' && (
                <>
                  {reviews.length === 0 && (
                    <div className="profile-reviews-empty">
                      <span style={{ fontSize: 32 }}>⭐</span>
                      <span>Tu n'as pas encore laissé d'avis sur un pays.</span>
                    </div>
                  )}
                  {reviews.map((r) => {
                    const country = findCountry(r.country_code);
                    const photos = reviewPhotos(r);
                    return (
                      <div
                        key={r.id}
                        className="profile-review-item profile-review-item--clickable"
                        onClick={() => { if (confirmDeleteId !== r.id) { onOpenCountry?.(r.country_code, 'reviews', { reviewId: r.id }); onClose(); } }}
                      >
                        {confirmDeleteId === r.id && (
                          <div className="profile-confirm-overlay">
                            <div className="profile-confirm-box">
                              <p className="profile-confirm-msg">Supprimer cet avis ?</p>
                              <div className="profile-confirm-actions">
                                <button className="profile-confirm-cancel" onClick={(e) => { e.stopPropagation(); setConfirmDeleteId(null); }}>Annuler</button>
                                <button className="profile-confirm-delete" onClick={(e) => { e.stopPropagation(); handleDeleteReview(r.id); }}>Supprimer</button>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="profile-review-top">
                          <div className="profile-review-country-info">
                            <FlagImage country={country} code={r.country_code} />
                            <span className="profile-review-country">{country?.name || r.country_code}</span>
                          </div>
                          <span className="profile-review-stars">
                            {[1,2,3,4,5].map((s) => <span key={s} className={s <= r.rating ? 'star-filled' : 'star-empty'}>★</span>)}
                          </span>
                          <span className="profile-review-date">{relativeTime(r.created_at)}</span>
                          <button className="profile-review-delete-btn" onClick={(e) => { e.stopPropagation(); setConfirmDeleteId(r.id); }} title="Supprimer">🗑</button>
                        </div>
                        {r.comment && <p className="profile-review-comment">{r.comment}</p>}
                        {photos.length > 0 && (
                          <div className="profile-photo-strip">
                            {photos.map((url, i) => (
                              <img key={i} src={url} alt="" className="profile-photo-thumb" onClick={(e) => { e.stopPropagation(); setLightbox({ photos, index: i }); }} />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </>
              )}

              {/* Avis destinations — groupés par pays */}
              {!reviewsLoading && reviewsSubTab === 'dest' && (
                <>
                  {destReviews.length === 0 && (
                    <div className="profile-reviews-empty">
                      <span style={{ fontSize: 32 }}>📍</span>
                      <span>Tu n'as pas encore laissé d'avis sur une destination.</span>
                    </div>
                  )}
                  {destReviews.length > 0 && (() => {
                    const groups = {};
                    destReviews.forEach((r) => {
                      const { countryCode } = parseDestId(r.destination_id);
                      const key = countryCode || '__unknown__';
                      if (!groups[key]) groups[key] = [];
                      groups[key].push(r);
                    });
                    return Object.entries(groups).map(([key, groupReviews]) => {
                      const countryMeta = key !== '__unknown__' ? findCountry(key) : null;
                      return (
                        <div key={key} className="profile-dest-group">
                          <div className="profile-dest-group-header">
                            {countryMeta && <FlagImage country={countryMeta} code={key} />}
                            <span className="profile-dest-group-name">{countryMeta?.name || key}</span>
                            <span className="profile-dest-group-count">{groupReviews.length} avis</span>
                          </div>
                          {groupReviews.map((r) => {
                            const { dest, countryCode } = parseDestId(r.destination_id);
                            const photos = reviewPhotos(r);
                            return (
                              <div
                                key={r.id}
                                className="profile-review-item profile-review-item--clickable profile-review-item--dest"
                                onClick={() => { if (countryCode) { onOpenCountry?.(countryCode, 'destinations', { destId: parseDestId(r.destination_id).localId, reviewId: r.id }); onClose(); } }}
                              >
                                <div className="profile-review-top">
                                  <span className="profile-review-dest-name">📍 {dest?.name || r.destination_id}</span>
                                  <span className="profile-review-stars">
                                    {[1,2,3,4,5].map((s) => <span key={s} className={s <= r.rating ? 'star-filled' : 'star-empty'}>★</span>)}
                                  </span>
                                  <span className="profile-review-date">{relativeTime(r.created_at)}</span>
                                </div>
                                {r.comment && <p className="profile-review-comment">{r.comment}</p>}
                                {photos.length > 0 && (
                                  <div className="profile-photo-strip">
                                    {photos.map((url, i) => (
                                      <img key={i} src={url} alt="" className="profile-photo-thumb" onClick={(e) => { e.stopPropagation(); setLightbox({ photos, index: i }); }} />
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    });
                  })()}
                </>
              )}
            </div>
          </>
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
