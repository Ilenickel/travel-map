import { useState, useEffect, useRef } from 'react';
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
import { HalfStars } from './ReviewItem';
import BadgeSection from './BadgeSection';

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
  const [destReviews, setDestReviews] = useState([]);
  const [mainTab, setMainTab] = useState('reviews');
  const [reviewsSubTab, setReviewsSubTab] = useState('country');
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);
  const touchStartX = useRef(null);
  const [followerCount, setFollowerCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [followHovered, setFollowHovered] = useState(false);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [showVisited, setShowVisited] = useState(true);

  useEffect(() => {
    if (!userId) return;
    Promise.all([
      supabase.from('profiles').select('display_name, avatar_url, show_visited_countries').eq('id', userId).maybeSingle(),
      supabase.from('reviews').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
      supabase.from('destination_reviews').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
      supabase.from('follows').select('follower_id', { count: 'exact' }).eq('following_id', userId),
    ]).then(([{ data: prof }, { data: revs }, { data: dRevs }, { count }]) => {
      setProfile(prof || { display_name: 'Voyageur', avatar_url: null });
      setReviews(revs || []);
      setDestReviews(dRevs || []);
      setFollowerCount(count || 0);
      setShowVisited(prof?.show_visited_countries !== false);
      setLoading(false);
    }).catch(() => setLoading(false));

    supabase.from('carnet_visited').select('country_code').eq('user_id', userId)
      .then(({ data }) => setVisitedCountries((data || []).map((v) => v.country_code)))
      .catch(() => {});
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
  const totalReviews = reviews.length + destReviews.length;

  function reviewPhotos(r) {
    if (r.photo_urls?.length) return r.photo_urls;
    if (r.photo_url) return [r.photo_url];
    return [];
  }

  return (
    <div className="auth-overlay">
      <div className="profile-modal profile-modal--public">

        {/* Header modernisé */}
        <div className="pub-profile-header">
          <div className="pub-profile-hero">
            <div className="pub-profile-avatar-wrap">
              {profile?.avatar_url
                ? <img src={profile.avatar_url} alt={name} className="pub-profile-avatar-img" />
                : <div className="pub-profile-avatar-initials" style={{ background: avatarColor(name) }}>{name[0].toUpperCase()}</div>
              }
            </div>
            <div className="pub-profile-info">
              <h2 className="pub-profile-name">{name}</h2>
              <div className="pub-profile-stats">
                <div className="pub-profile-stat">
                  <span className="pub-profile-stat-value">{totalReviews}</span>
                  <span className="pub-profile-stat-label">avis</span>
                </div>
                <div className="pub-profile-stat-sep" />
                <div className="pub-profile-stat">
                  <span className="pub-profile-stat-value">{followerCount}</span>
                  <span className="pub-profile-stat-label">abonné{followerCount !== 1 ? 's' : ''}</span>
                </div>
                {showVisited && visitedCountries.length > 0 && (
                  <>
                    <div className="pub-profile-stat-sep" />
                    <div className="pub-profile-stat">
                      <span className="pub-profile-stat-value">{visitedCountries.length}</span>
                      <span className="pub-profile-stat-label">pays visités</span>
                    </div>
                  </>
                )}
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
                {followLoading ? '…' : isFollowing ? (followHovered ? 'Se désabonner' : 'Abonné ✓') : 'S\'abonner'}
              </button>
            )}
          </div>
        </div>
        <button className="auth-close public-profile-close" onClick={onClose}>✕</button>

        {/* Badges */}
        {!loading && <BadgeSection userId={userId} ownProfile={false} />}

        {/* Onglets principaux */}
        <div className="pub-profile-main-tabs">
          <button
            className={`pub-profile-main-tab${mainTab === 'reviews' ? ' active' : ''}`}
            onClick={() => setMainTab('reviews')}
          >
            Avis
            {totalReviews > 0 && <span className="profile-tab-count">{totalReviews}</span>}
          </button>
          <button
            className={`pub-profile-main-tab${mainTab === 'visited' ? ' active' : ''}`}
            onClick={() => setMainTab('visited')}
          >
            Pays visités
            {showVisited && visitedCountries.length > 0 && <span className="profile-tab-count">{visitedCountries.length}</span>}
          </button>
        </div>

        {/* Sous-onglets avis */}
        {mainTab === 'reviews' && (
          <div className="profile-reviews-subtabs profile-reviews-subtabs--nested">
            <button
              className={`profile-reviews-subtab${reviewsSubTab === 'country' ? ' active' : ''}`}
              onClick={() => setReviewsSubTab('country')}
            >
              Pays {reviews.length > 0 && <span className="profile-tab-count">{reviews.length}</span>}
            </button>
            <button
              className={`profile-reviews-subtab${reviewsSubTab === 'dest' ? ' active' : ''}`}
              onClick={() => setReviewsSubTab('dest')}
            >
              Destinations {destReviews.length > 0 && <span className="profile-tab-count">{destReviews.length}</span>}
            </button>
          </div>
        )}

        {/* Contenu */}
        <div className="profile-reviews-list">
          {loading && <div className="review-list-loading">Chargement…</div>}

          {/* Avis pays */}
          {!loading && mainTab === 'reviews' && reviewsSubTab === 'country' && (
            <>
              {reviews.length === 0 && (
                <div className="profile-reviews-empty">
                  <span style={{ fontSize: 32 }}>⭐</span>
                  <span>Cet utilisateur n'a pas encore laissé d'avis sur un pays.</span>
                </div>
              )}
              {reviews.map((r) => {
                const country = findCountry(r.country_code);
                const photos = reviewPhotos(r);
                return (
                  <div
                    key={r.id}
                    className="profile-review-item profile-review-item--clickable"
                    onClick={() => { onOpenCountry?.(r.country_code, 'reviews', { reviewId: r.id }); onClose(); }}
                  >
                    <div className="profile-review-top">
                      <div className="profile-review-country-info">
                        <FlagImage country={country} code={r.country_code} />
                        <span className="profile-review-country">{country?.name || r.country_code}</span>
                      </div>
                      <HalfStars rating={r.rating} size={15} />
                      <span className="profile-review-date">{relativeTime(r.created_at)}</span>
                    </div>
                    {r.comment && <p className="profile-review-comment">{r.comment}</p>}
                    {photos.length > 0 && (
                      <div className="profile-photo-strip">
                        {photos.map((url, i) => (
                          <img key={i} src={url} alt="" className="profile-photo-thumb"
                            onClick={(e) => { e.stopPropagation(); setLightbox({ photos, index: i }); }}
                            onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          )}

          {/* Avis destinations — groupés par pays */}
          {!loading && mainTab === 'reviews' && reviewsSubTab === 'dest' && (
            <>
              {destReviews.length === 0 && (
                <div className="profile-reviews-empty">
                  <span style={{ fontSize: 32 }}>📍</span>
                  <span>Cet utilisateur n'a pas encore laissé d'avis sur une destination.</span>
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
                              <HalfStars rating={r.rating} size={15} />
                              <span className="profile-review-date">{relativeTime(r.created_at)}</span>
                            </div>
                            {r.comment && <p className="profile-review-comment">{r.comment}</p>}
                            {photos.length > 0 && (
                              <div className="profile-photo-strip">
                                {photos.map((url, i) => (
                                  <img key={i} src={url} alt="" className="profile-photo-thumb"
                                    onClick={(e) => { e.stopPropagation(); setLightbox({ photos, index: i }); }}
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }} />
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

          {/* Pays visités */}
          {!loading && mainTab === 'visited' && (
            <>
              {!showVisited && (
                <div className="profile-reviews-empty">
                  <span style={{ fontSize: 32 }}>🔒</span>
                  <span>Cet utilisateur ne partage pas sa liste de pays visités.</span>
                </div>
              )}
              {showVisited && visitedCountries.length === 0 && (
                <div className="profile-reviews-empty">
                  <span style={{ fontSize: 32 }}>🗺️</span>
                  <span>Cet utilisateur n'a pas encore enregistré de pays visités.</span>
                </div>
              )}
              {showVisited && visitedCountries.length > 0 && (
                <div className="visited-countries-section">
                  <div className="visited-countries-header">
                    <span className="visited-countries-count">{visitedCountries.length} pays explorés</span>
                  </div>
                  <div className="visited-countries-grid">
                    {visitedCountries.map((code) => {
                      const country = findCountry(code);
                      return (
                        <div key={code} className="visited-country-chip">
                          <FlagImage country={country} code={code} />
                          <span>{country?.name || code}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
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
