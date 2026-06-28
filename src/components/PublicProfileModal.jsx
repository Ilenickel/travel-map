import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { findCountry } from '../data/index';
import { HalfStars } from './ReviewItem';

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

export default function PublicProfileModal({ userId, onClose, onOpenCountry }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);
  const touchStartX = useRef(null);
  const [followerCount, setFollowerCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [followHovered, setFollowHovered] = useState(false);

  useEffect(() => {
    if (!userId) return;
    Promise.all([
      supabase.from('profiles').select('display_name, avatar_url').eq('id', userId).maybeSingle(),
      supabase.from('reviews').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
      supabase.from('follows').select('follower_id', { count: 'exact' }).eq('following_id', userId),
    ]).then(([{ data: prof }, { data: revs }, { count }]) => {
      setProfile(prof || { display_name: 'Voyageur', avatar_url: null });
      setReviews(revs || []);
      setFollowerCount(count || 0);
      setLoading(false);
    }).catch(() => setLoading(false));
    if (user && user.id !== userId) {
      supabase.from('follows').select('follower_id')
        .eq('follower_id', user.id).eq('following_id', userId)
        .maybeSingle()
        .then(({ data }) => setIsFollowing(!!data));
    }
  }, [userId, user]);

  async function toggleFollow() {
    if (!user || followLoading) return;
    setFollowLoading(true);
    if (isFollowing) {
      await supabase.from('follows').delete().eq('follower_id', user.id).eq('following_id', userId);
      setIsFollowing(false);
      setFollowerCount((c) => Math.max(0, c - 1));
    } else {
      await supabase.from('follows').upsert(
        { follower_id: user.id, following_id: userId },
        { onConflict: 'follower_id,following_id', ignoreDuplicates: true }
      );
      setIsFollowing(true);
      setFollowerCount((c) => c + 1);
    }
    setFollowLoading(false);
  }

  const name = profile?.display_name || 'Voyageur';

  function reviewPhotos(r) {
    if (r.photo_urls?.length) return r.photo_urls;
    if (r.photo_url) return [r.photo_url];
    return [];
  }

  return (
    <div className="auth-overlay">
      <div className="profile-modal">

        {/* Header */}
        <div className="profile-modal-header">
          <div className="profile-modal-avatar-wrap" style={{ cursor: 'default' }}>
            {profile?.avatar_url
              ? <img src={profile.avatar_url} alt={name} className="profile-modal-avatar-img" />
              : <div className="profile-modal-avatar-initials" style={{ background: avatarColor(name) }}>{name[0].toUpperCase()}</div>
            }
          </div>
          <div className="profile-modal-header-info">
            <span className="profile-modal-name">{name}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 2 }}>
              <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>{reviews.length} avis</span>
              <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>·</span>
              <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>{followerCount} abonné{followerCount !== 1 ? 's' : ''}</span>
            </div>
          </div>
          {user && user.id !== userId && (
            <button
              className={`follow-btn${isFollowing ? ' follow-btn--following' : ''}${isFollowing && followHovered ? ' follow-btn--unfollow' : ''}`}
              onClick={toggleFollow}
              disabled={followLoading}
              onMouseEnter={() => setFollowHovered(true)}
              onMouseLeave={() => setFollowHovered(false)}
            >
              {followLoading
                ? '…'
                : isFollowing
                  ? (followHovered ? 'Se désabonner' : 'Abonné ✓')
                  : 'S\'abonner'
              }
            </button>
          )}
          <button className="auth-close" onClick={onClose}>✕</button>
        </div>

        {/* Contenu */}
        <div className="profile-reviews-list">
          {loading && <div className="review-list-loading">Chargement…</div>}
          {!loading && reviews.length === 0 && (
            <div className="profile-reviews-empty">
              <span style={{ fontSize: 32 }}>⭐</span>
              <span>Cet utilisateur n'a pas encore laissé d'avis.</span>
            </div>
          )}
          {reviews.map((r) => {
            const country = findCountry(r.country_code);
            const photos = reviewPhotos(r);
            return (
              <div key={r.id} className="profile-review-item">
                <div className="profile-review-top">
                  <button
                    className="profile-review-country-btn"
                    onClick={() => { onOpenCountry?.(r.country_code); onClose(); }}
                    title={`Ouvrir la fiche ${country?.name}`}
                  >
                    <FlagImage country={country} code={r.country_code} />
                    <span className="profile-review-country">{country?.name || r.country_code}</span>
                  </button>
                  <HalfStars rating={r.rating} size={15} />
                  <span className="profile-review-date">{relativeTime(r.created_at)}</span>
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
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
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
