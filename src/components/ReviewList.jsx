import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { supabase } from '../lib/supabase';
import ReviewItem from './ReviewItem';

export default function ReviewList({ countryCode, destinationId, currentUserId, refreshKey, sortBy = 'date', excludeId, onEdit, onDelete, onOpenProfile, emptyMessage, highlightId }) {
  const [rawReviews, setRawReviews] = useState([]);
  const highlightedRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const isDestReview = !!destinationId;
  const reviewTable = isDestReview ? 'destination_reviews' : 'reviews';
  const voteTable = isDestReview ? 'destination_review_votes' : 'review_votes';
  const filterField = isDestReview ? 'destination_id' : 'country_code';
  const filterValue = isDestReview ? destinationId : countryCode;

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const { data: rows, error } = await supabase
        .from(reviewTable)
        .select('*')
        .eq(filterField, filterValue);

      if (error) throw error;
      if (!rows?.length) { setRawReviews([]); setLoading(false); return; }

      const ids = rows.map((r) => r.id);
      const { data: votesData } = await supabase
        .from(voteTable)
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
    } catch {
      setRawReviews([]);
    } finally {
      setLoading(false);
    }
  }, [reviewTable, voteTable, filterField, filterValue, currentUserId]);

  useEffect(() => { fetchAll(); }, [fetchAll, refreshKey]);

  useEffect(() => {
    if (!highlightId || !rawReviews.length || highlightedRef.current === highlightId) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(`review-${highlightId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        highlightedRef.current = highlightId;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [rawReviews, highlightId]);

  const myReview = useMemo(() => {
    if (!currentUserId) return null;
    return rawReviews.find((r) => r.user_id === currentUserId && r.id !== excludeId) ?? null;
  }, [rawReviews, currentUserId, excludeId]);

  const sortedOthers = useMemo(() => {
    const others = rawReviews.filter((r) => {
      if (r.id === excludeId) return false;
      if (currentUserId && r.user_id === currentUserId) return false;
      return true;
    });
    if (sortBy === 'votes') {
      others.sort((a, b) => (b._votes.up - a._votes.up) || (new Date(b.created_at) - new Date(a.created_at)));
    } else {
      others.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    return others;
  }, [rawReviews, sortBy, excludeId, currentUserId]);

  if (loading) return <div className="review-list-loading">Chargement des avis…</div>;
  if (!rawReviews.length) return <div className="review-list-empty">{emptyMessage || 'Aucun avis pour ce pays. Soyez le premier !'}</div>;

  return (
    <div className="review-list">
      {myReview && (
        <div className="review-mon-avis-block">
          <span className="review-mon-avis-label">Mon avis</span>
          <ReviewItem
            key={myReview.id}
            review={myReview}
            currentUserId={currentUserId}
            onDelete={() => { fetchAll(); onDelete?.(); }}
            onEdit={() => onEdit?.(myReview)}
            onVoteChange={fetchAll}
            onOpenProfile={onOpenProfile}
            isDestReview={isDestReview}
          />
        </div>
      )}
      {sortedOthers.length > 0 && (
        sortedOthers.map((r) => (
          <ReviewItem
            key={r.id}
            review={r}
            currentUserId={currentUserId}
            onDelete={() => { fetchAll(); onDelete?.(); }}
            onEdit={() => onEdit?.(r)}
            onVoteChange={fetchAll}
            onOpenProfile={onOpenProfile}
            isDestReview={isDestReview}
          />
        ))
      )}
    </div>
  );
}
