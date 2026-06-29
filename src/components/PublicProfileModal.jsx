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

export default function PublicProfileModal({ userId: initialUserId, onClose, onOpenCountry }) {
  const { user } = useAuth();
  const [userId, setUserId] = useState(initialUserId);
  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [destGroupCounts, setDestGroupCounts] = useState({});
  const [expandedDestGroups, setExpandedDestGroups] = useState(new Set());
  const [loadedDestGroups, setLoadedDestGroups] = useState({});
  const [loadingDestGroups, setLoadingDestGroups] = useState(new Set());
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
  const [addedDestCounts, setAddedDestCounts] = useState({});
  const [expandedAddedDestGroups, setExpandedAddedDestGroups] = useState(new Set());
  const [loadedAddedDestGroups, setLoadedAddedDestGroups] = useState({});
  const [loadingAddedDestGroups, setLoadingAddedDestGroups] = useState(new Set());

  useEffect(() => {
    if (!userId) return;
    setProfile(null);
    setReviews([]);
    setDestGroupCounts({});
    setExpandedDestGroups(new Set());
    setLoadedDestGroups({});
    setLoadingDestGroups(new Set());
    setFollowerCount(0);
    setIsFollowing(false);
    setVisitedCountries([]);
    setAddedDestCounts({});
    setExpandedAddedDestGroups(new Set());
    setLoadedAddedDestGroups({});
    setLoadingAddedDestGroups(new Set());
    setMainTab('reviews');
    setReviewsSubTab('country');
    setLoading(true);
    Promise.all([
      supabase.from('profiles').select('display_name, avatar_url, show_visited_countries').eq('id', userId).maybeSingle(),
      supabase.from('reviews').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
      supabase.from('destination_reviews').select('destination_id').eq('user_id', userId),
      supabase.from('follows').select('follower_id', { count: 'exact' }).eq('following_id', userId),
      supabase.from('user_destinations').select('country_code').eq('user_id', userId),
    ]).then(([{ data: prof }, { data: revs }, { data: dRevs }, { count: fCount }, { data: udData }]) => {
      setProfile(prof || { display_name: 'Voyageur', avatar_url: null });
      setReviews(revs || []);
      const counts = {};
      (dRevs || []).forEach((r) => {
        const { countryCode } = parseDestId(r.destination_id);
        const key = countryCode || '__unknown__';
        counts[key] = (counts[key] || 0) + 1;
      });
      setDestGroupCounts(counts);
      setFollowerCount(fCount || 0);
      setShowVisited(prof?.show_visited_countries !== false);
      const udCounts = {};
      (udData || []).forEach(d => { udCounts[d.country_code] = (udCounts[d.country_code] || 0) + 1; });
      setAddedDestCounts(udCounts);
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

  async function toggleDestGroup(key) {
    if (expandedDestGroups.has(key)) {
      setExpandedDestGroups((prev) => { const s = new Set(prev); s.delete(key); return s; });
      return;
    }
    setExpandedDestGroups((prev) => new Set([...prev, key]));
    if (loadedDestGroups[key] !== undefined) return;
    setLoadingDestGroups((prev) => new Set([...prev, key]));
    let groupData;
    if (key === '__unknown__') {
      const { data } = await supabase.from('destination_reviews').select('*')
        .eq('user_id', userId).order('created_at', { ascending: false });
      groupData = (data || []).filter((r) => !parseDestId(r.destination_id).countryCode);
    } else {
      const { data } = await supabase.from('destination_reviews').select('*')
        .eq('user_id', userId).like('destination_id', `${key}_%`)
        .order('created_at', { ascending: false });
      groupData = data || [];
    }
    setLoadedDestGroups((prev) => ({ ...prev, [key]: groupData }));
    setLoadingDestGroups((prev) => { const s = new Set(prev); s.delete(key); return s; });
  }

  const totalDestReviews = Object.values(destGroupCounts).reduce((a, b) => a + b, 0);
  const totalAddedDests = Object.values(addedDestCounts).reduce((a, b) => a + b, 0);

  async function toggleAddedDestGroup(key) {
    if (expandedAddedDestGroups.has(key)) {
      setExpandedAddedDestGroups(prev => { const s = new Set(prev); s.delete(key); return s; });
      return;
    }
    setExpandedAddedDestGroups(prev => new Set([...prev, key]));
    if (loadedAddedDestGroups[key] !== undefined) return;
    setLoadingAddedDestGroups(prev => new Set([...prev, key]));
    const { data } = await supabase.from('user_destinations')
      .select('id, name, description, image_url, tags, country_code, created_at')
      .eq('user_id', userId).eq('country_code', key)
      .order('created_at', { ascending: false });
    setLoadedAddedDestGroups(prev => ({ ...prev, [key]: data || [] }));
    setLoadingAddedDestGroups(prev => { const s = new Set(prev); s.delete(key); return s; });
  }
  const name = profile?.display_name || 'Voyageur';
  const totalReviews = reviews.length + totalDestReviews;

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
                  <span className="pub-profile-stat-value">{followerCount}</span>
                  <span className="pub-profile-stat-label">abonné{followerCount !== 1 ? 's' : ''}</span>
                </div>
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
            className={`pub-profile-main-tab${mainTab === 'destinations' ? ' active' : ''}`}
            onClick={() => setMainTab('destinations')}
          >
            Destinations
            {totalAddedDests > 0 && <span className="profile-tab-count">{totalAddedDests}</span>}
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
              Destinations {totalDestReviews > 0 && <span className="profile-tab-count">{totalDestReviews}</span>}
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

          {/* Avis destinations — accordion lazy par pays */}
          {!loading && mainTab === 'reviews' && reviewsSubTab === 'dest' && (
            <>
              {totalDestReviews === 0 && (
                <div className="profile-reviews-empty">
                  <span style={{ fontSize: 32 }}>📍</span>
                  <span>Cet utilisateur n'a pas encore laissé d'avis sur une destination.</span>
                </div>
              )}
              {Object.entries(destGroupCounts).map(([key, count]) => {
                const countryMeta = key !== '__unknown__' ? findCountry(key) : null;
                const isExpanded = expandedDestGroups.has(key);
                const isGroupLoading = loadingDestGroups.has(key);
                const groupReviews = loadedDestGroups[key] || [];
                return (
                  <div key={key} className="profile-dest-group">
                    <div className="profile-dest-group-header profile-dest-group-header--clickable" onClick={() => toggleDestGroup(key)}>
                      {countryMeta && <FlagImage country={countryMeta} code={key} />}
                      <span className="profile-dest-group-name">{countryMeta?.name || key}</span>
                      <span className="profile-dest-group-count">{count} avis</span>
                      <span className="profile-dest-group-chevron">{isExpanded ? '▲' : '▼'}</span>
                    </div>
                    {isExpanded && (
                      <>
                        {isGroupLoading && <div className="review-list-loading profile-dest-group-loading" style={{ padding: '10px 16px', textAlign: 'center' }}>Chargement des avis en cours…</div>}
                        {!isGroupLoading && groupReviews.map((r) => {
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
                      </>
                    )}
                  </div>
                );
              })}
            </>
          )}

          {/* Destinations ajoutées */}
          {!loading && mainTab === 'destinations' && (
            <>
              {totalAddedDests === 0 && (
                <div className="profile-reviews-empty">
                  <span style={{ fontSize: 32 }}>📍</span>
                  <span>Cet utilisateur n'a pas encore ajouté de destination.</span>
                </div>
              )}
              {Object.entries(addedDestCounts).sort((a, b) => b[1] - a[1]).map(([countryCode, count]) => {
                const countryMeta = findCountry(countryCode);
                const isExpanded = expandedAddedDestGroups.has(countryCode);
                const isGroupLoading = loadingAddedDestGroups.has(countryCode);
                const dests = loadedAddedDestGroups[countryCode] || [];
                return (
                  <div key={countryCode} className="profile-dest-group">
                    <div className="profile-dest-group-header profile-dest-group-header--clickable" onClick={() => toggleAddedDestGroup(countryCode)}>
                      {countryMeta && <FlagImage country={countryMeta} code={countryCode} />}
                      <span className="profile-dest-group-name">{countryMeta?.name || countryCode}</span>
                      <span className="profile-dest-group-count">{count} destination{count > 1 ? 's' : ''}</span>
                      <span className="profile-dest-group-chevron">{isExpanded ? '▲' : '▼'}</span>
                    </div>
                    {isExpanded && (
                      <>
                        {isGroupLoading && <div className="review-list-loading" style={{ padding: '10px 16px', textAlign: 'center' }}>Chargement des destinations…</div>}
                        {!isGroupLoading && dests.map(dest => (
                          <div
                            key={dest.id}
                            className="profile-added-dest-item profile-review-item--clickable"
                            onClick={() => { onOpenCountry?.(countryCode, 'destinations', { commDestId: dest.id }); onClose(); }}
                          >
                            <img src={dest.image_url} alt={dest.name} className="profile-added-dest-img" onError={e => { e.currentTarget.style.display = 'none'; }} />
                            <div className="profile-added-dest-info">
                              <span className="profile-added-dest-name">📍 {dest.name}</span>
                              {dest.tags?.length > 0 && (
                                <div className="profile-added-dest-tags">
                                  {dest.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                              )}
                              <span className="profile-review-date">{relativeTime(dest.created_at)}</span>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                );
              })}
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
