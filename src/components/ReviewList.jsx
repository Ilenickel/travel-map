import { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import ReviewItem from './ReviewItem';

export default function ReviewList({ countryCode, currentUserId, refreshKey, sortBy = 'date', excludeId, onEdit, onDelete, onOpenProfile }) {
  const [rawReviews, setRawReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = useCallback(async () => {
    setLoading(true);

    const { data: rows } = await supabase
      .from('reviews')
      .select('*')
      .eq('country_code', countryCode);

    if (!rows?.length) { setRawReviews([]); setLoading(false); return; }

    const ids = rows.map((r) => r.id);
    const { data: votesData } = await supabase
      .from('review_votes')
      .select('review_id, vote, user_id')
      .in('review_id', ids);

    const voteMap = {};
    (votesData || []).forEach((v) => {
      if (!voteMap[v.review_id]) voteMap[v.review_id] = { up: 0, down: 0, myVote: null };
      if (v.vote === 1) voteMap[v.review_id].up++;
      else if (v.vote === -1) voteMap[v.review_id].down++;
      if (currentUserId && v.user_id === currentUserId) voteMap[v.review_id].myVote = v.vote;
    });

    setRawReviews(rows.map((r) => ({ ...r, _votes: voteMap[r.id] || { up: 0, down: 0, myVote: null } })));
    setLoading(false);
  }, [countryCode, currentUserId]);

  useEffect(() => { fetchAll(); }, [fetchAll, refreshKey]);

  // Tri client-side — ne déclenche pas de rechargement
  const sorted = useMemo(() => {
    const copy = [...rawReviews];
    if (sortBy === 'votes') {
      copy.sort((a, b) => (b._votes.up - a._votes.up) || (new Date(b.created_at) - new Date(a.created_at)));
    } else {
      copy.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    return excludeId ? copy.filter((r) => r.id !== excludeId) : copy;
  }, [rawReviews, sortBy, excludeId]);

  if (loading) return <div className="review-list-loading">Chargement des avis…</div>;
  if (!rawReviews.length) return <div className="review-list-empty">Aucun avis pour ce pays. Soyez le premier !</div>;

  return (
    <div className="review-list">
      {sorted.map((r) => (
        <ReviewItem
          key={r.id}
          review={r}
          currentUserId={currentUserId}
          onDelete={() => { fetchAll(); onDelete?.(); }}
          onEdit={() => onEdit?.(r)}
          onVoteChange={fetchAll}
          onOpenProfile={onOpenProfile}
        />
      ))}
    </div>
  );
}
