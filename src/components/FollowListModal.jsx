import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { supabase } from '../lib/supabase';

const AVATAR_COLORS = ['#6366f1','#8b5cf6','#ec4899','#f59e0b','#10b981','#3b82f6'];
function avatarColor(name) { return AVATAR_COLORS[(name || '?').charCodeAt(0) % AVATAR_COLORS.length]; }

function UserAvatar({ url, name, size = 40 }) {
  return url
    ? <img src={url} alt={name} className="follow-list-avatar-img" style={{ width: size, height: size }} />
    : <div className="follow-list-avatar-initials" style={{ background: avatarColor(name), width: size, height: size }}>{name[0].toUpperCase()}</div>;
}

export default function FollowListModal({ userId, type, onClose, onOpenProfile, onFollowChange }) {
  // Liste abonnés/abonnements
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listSearch, setListSearch] = useState('');

  // Recherche globale
  const [addMode, setAddMode] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [followingIds, setFollowingIds] = useState(new Set());
  const [followLoadingId, setFollowLoadingId] = useState(null);
  const debounceRef = useRef(null);

  // Chargement liste abonnés/abonnements
  useEffect(() => {
    if (!userId) return;
    async function fetchList() {
      setLoading(true);
      let ids = [];
      if (type === 'followers') {
        const { data } = await supabase.from('follows').select('follower_id').eq('following_id', userId);
        ids = (data || []).map(r => r.follower_id);
      } else {
        const { data } = await supabase.from('follows').select('following_id').eq('follower_id', userId);
        ids = (data || []).map(r => r.following_id);
      }
      if (ids.length === 0) { setList([]); setLoading(false); return; }
      const { data: profiles } = await supabase.from('profiles').select('id, display_name, avatar_url').in('id', ids);
      setList(profiles || []);
      setLoading(false);
    }
    fetchList();
  }, [userId, type]);

  // Chargement des abonnements actuels (pour état du bouton dans recherche)
  useEffect(() => {
    if (!userId) return;
    supabase.from('follows').select('following_id').eq('follower_id', userId)
      .then(({ data }) => setFollowingIds(new Set((data || []).map(r => r.following_id))));
  }, [userId]);

  // Recherche globale avec debounce
  useEffect(() => {
    if (!addMode) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (query.trim().length < 1) { setSearchResults([]); return; }
    debounceRef.current = setTimeout(async () => {
      setSearchLoading(true);
      const { data } = await supabase
        .from('profiles')
        .select('id, display_name, avatar_url')
        .ilike('display_name', `%${query.trim()}%`)
        .neq('id', userId)
        .limit(20);
      setSearchResults(data || []);
      setSearchLoading(false);
    }, 300);
    return () => clearTimeout(debounceRef.current);
  }, [query, addMode, userId]);

  async function toggleFollow(targetId, e) {
    e.stopPropagation();
    if (followLoadingId) return;
    setFollowLoadingId(targetId);
    if (followingIds.has(targetId)) {
      const { error } = await supabase.from('follows').delete().eq('follower_id', userId).eq('following_id', targetId);
      if (!error) {
        setFollowingIds(prev => { const s = new Set(prev); s.delete(targetId); return s; });
        if (type === 'following') setList(prev => prev.filter(u => u.id !== targetId));
        onFollowChange?.(-1);
      }
    } else {
      const { error } = await supabase.from('follows').upsert(
        { follower_id: userId, following_id: targetId },
        { onConflict: 'follower_id,following_id', ignoreDuplicates: true }
      );
      if (!error) {
        setFollowingIds(prev => new Set([...prev, targetId]));
        if (type === 'following') {
          const profile = searchResults.find(u => u.id === targetId) || list.find(u => u.id === targetId);
          if (profile && !list.some(u => u.id === targetId)) {
            setList(prev => [...prev, profile]);
          }
        }
        onFollowChange?.(+1);
        supabase.auth.getSession().then(({ data: s }) => {
          fetch('/api/notify-new-follower', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ authToken: s?.session?.access_token ?? null, targetUserId: targetId }),
          });
        });
      }
    }
    setFollowLoadingId(null);
  }

  const filteredList = list.filter(u =>
    !listSearch || (u.display_name || '').toLowerCase().includes(listSearch.toLowerCase())
  );

  const modal = (
    <div className="auth-overlay" onClick={onClose}>
      <div className="follow-list-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="follow-list-header">
          {addMode
            ? <button className="follow-list-back-btn" onClick={() => { setAddMode(false); setQuery(''); setSearchResults([]); }}>← Retour</button>
            : <h3 className="follow-list-title">{type === 'followers' ? 'Abonnés' : 'Abonnements'}</h3>
          }
          <button className="auth-close" onClick={onClose}>✕</button>
        </div>

        {/* Mode recherche globale */}
        {addMode ? (
          <>
            <div className="follow-list-search-wrap">
              <input
                className="follow-list-search"
                type="text"
                placeholder="Rechercher un utilisateur…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                autoFocus
              />
            </div>
            <div className="follow-list-body">
              {searchLoading && <div className="review-list-loading">Recherche…</div>}
              {!searchLoading && query.trim().length === 0 && (
                <div className="profile-reviews-empty" style={{ paddingTop: 32 }}>
                  <span style={{ fontSize: 28 }}>🔍</span>
                  <span>Saisissez un pseudo pour rechercher.</span>
                </div>
              )}
              {!searchLoading && query.trim().length > 0 && searchResults.length === 0 && (
                <div className="profile-reviews-empty" style={{ paddingTop: 32 }}>
                  <span style={{ fontSize: 28 }}>😶</span>
                  <span>Aucun utilisateur trouvé.</span>
                </div>
              )}
              {searchResults.map(u => {
                const name = u.display_name || 'Voyageur';
                const isFollowing = followingIds.has(u.id);
                const isLoading = followLoadingId === u.id;
                return (
                  <div key={u.id} className="follow-list-user-row" onClick={() => onOpenProfile(u.id)} style={{ cursor: 'pointer' }}>
                    <UserAvatar url={u.avatar_url} name={name} />
                    <span className="follow-list-username">{name}</span>
                    <button
                      className={`follow-list-follow-btn${isFollowing ? ' follow-list-follow-btn--following' : ''}`}
                      onClick={(e) => toggleFollow(u.id, e)}
                      disabled={isLoading}
                    >
                      {isLoading ? '…' : isFollowing ? 'Abonné ✓' : 'S\'abonner'}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {/* Bouton ajouter (onglet abonnements seulement) */}
            {type === 'following' && (
              <div className="follow-list-add-wrap">
                <button className="follow-list-add-btn" onClick={() => setAddMode(true)}>
                  Ajouter un utilisateur
                </button>
              </div>
            )}

            {/* Recherche dans la liste */}
            <div className="follow-list-search-wrap">
              <input
                className="follow-list-search"
                type="text"
                placeholder="Filtrer la liste…"
                value={listSearch}
                onChange={e => setListSearch(e.target.value)}
                autoFocus={type !== 'following'}
              />
            </div>

            <div className="follow-list-body">
              {loading && <div className="review-list-loading">Chargement…</div>}
              {!loading && filteredList.length === 0 && (
                <div className="profile-reviews-empty">
                  <span style={{ fontSize: 28 }}>🔍</span>
                  <span>
                    {listSearch
                      ? 'Aucun résultat.'
                      : type === 'followers'
                        ? 'Aucun abonné pour l\'instant.'
                        : 'Aucun abonnement pour l\'instant.'
                    }
                  </span>
                </div>
              )}
              {!loading && filteredList.map(u => {
                const name = u.display_name || 'Voyageur';
                const isFollowing = followingIds.has(u.id);
                const isLoading = followLoadingId === u.id;
                return (
                  <div key={u.id} className="follow-list-user-row" onClick={() => onOpenProfile(u.id)} style={{ cursor: 'pointer' }}>
                    <UserAvatar url={u.avatar_url} name={name} />
                    <span className="follow-list-username">{name}</span>
                    {type === 'following' && (
                      <button
                        className={`follow-list-follow-btn follow-list-follow-btn--following`}
                        onClick={(e) => toggleFollow(u.id, e)}
                        disabled={isLoading}
                      >
                        {isLoading ? '…' : 'Abonné ✓'}
                      </button>
                    )}
                    {type === 'followers' && (
                      <button
                        className={`follow-list-follow-btn${isFollowing ? ' follow-list-follow-btn--following' : ''}`}
                        onClick={(e) => toggleFollow(u.id, e)}
                        disabled={isLoading}
                      >
                        {isLoading ? '…' : isFollowing ? 'Abonné ✓' : 'S\'abonner'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
