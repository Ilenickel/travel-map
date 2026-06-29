import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { supabase } from '../lib/supabase';
import ReviewItem from './ReviewItem';

const PAGE_SIZE = 10;

export default function ReviewList({ countryCode, destinationId, currentUserId, refreshKey, sortBy = 'date', excludeId, onEdit, onDelete, onOpenProfile, emptyMessage, highlightId }) {
  const [myReview, setMyReview] = useState(null);
  const [highlightedReview, setHighlightedReview] = useState(null);
  const [otherReviews, setOtherReviews] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [totalOtherCount, setTotalOtherCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const highlightScrolledRef = useRef(null);

  const isDestReview = !!destinationId;
  const reviewTable = isDestReview ? 'destination_reviews' : 'reviews';
  const voteTable = isDestReview ? 'destination_review_votes' : 'review_votes';
  const filterField = isDestReview ? 'destination_id' : 'country_code';
  const filterValue = isDestReview ? destinationId : countryCode;

  const fetchVotes = useCallback(async (ids) => {
    if (!ids.length) return {};
    const { data } = await supabase.from(voteTable).select('review_id, vote, user_id').in('review_id', ids);
    const map = {};
    (data || []).forEach((v) => {
      if (!map[v.review_id]) map[v.review_id] = { up: 0, down: 0, myVote: null };
      if (v.vote === 1) map[v.review_id].up++;
      else if (v.vote === -1) map[v.review_id].down++;
      if (currentUserId && v.user_id === currentUserId) map[v.review_id].myVote = v.vote;
    });
    return map;
  }, [voteTable, currentUserId]);

  const applyVotes = (reviews, votes) =>
    reviews.map((r) => ({ ...r, _votes: votes[r.id] || { up: 0, down: 0, myVote: null } }));

  const fetchInitial = useCallback(async () => {
    setLoading(true);
    setMyReview(null);
    setHighlightedReview(null);
    setOtherReviews([]);
    setOffset(0);
    setHasMore(false);
    setTotalOtherCount(0);

    try {
      // 1. Avis propre (toujours visible si connecté)
      let ownReview = null;
      if (currentUserId) {
        const { data } = await supabase.from(reviewTable).select('*')
          .eq(filterField, filterValue).eq('user_id', currentUserId).maybeSingle();
        ownReview = data || null;
      }

      // 2. Avis mis en avant depuis une notif ou un profil
      let pinnedReview = null;
      if (highlightId && highlightId !== ownReview?.id) {
        const { data } = await supabase.from(reviewTable).select('*')
          .eq('id', highlightId).maybeSingle();
        pinnedReview = data || null;
      }

      // 3. Première page des autres avis (exclut propre + pinned)
      let query = supabase.from(reviewTable)
        .select('*', { count: 'exact' })
        .eq(filterField, filterValue)
        .order('created_at', { ascending: false })
        .range(0, PAGE_SIZE - 1);
      if (currentUserId) query = query.neq('user_id', currentUserId);
      if (pinnedReview?.id) query = query.neq('id', pinnedReview.id);

      const { data: others, count } = await query;
      const othersData = others || [];
      const total = count || 0;

      // 4. Votes pour tous les avis chargés
      const allIds = [
        ...(ownReview ? [ownReview.id] : []),
        ...(pinnedReview ? [pinnedReview.id] : []),
        ...othersData.map((r) => r.id),
      ];
      const votes = await fetchVotes(allIds);

      setMyReview(ownReview ? { ...ownReview, _votes: votes[ownReview.id] || { up: 0, down: 0, myVote: null } } : null);
      setHighlightedReview(pinnedReview ? { ...pinnedReview, _votes: votes[pinnedReview.id] || { up: 0, down: 0, myVote: null } } : null);
      setOtherReviews(applyVotes(othersData, votes));
      setTotalOtherCount(total);
      setHasMore(total > PAGE_SIZE);
      setOffset(PAGE_SIZE);
    } catch (e) {
      console.error('[ReviewList] fetchInitial:', e);
    } finally {
      setLoading(false);
    }
  }, [reviewTable, filterField, filterValue, currentUserId, highlightId, fetchVotes]);

  // Rafraîchit uniquement les votes sans réinitialiser la pagination
  const refreshVotes = useCallback(async () => {
    const allIds = [
      ...(myReview ? [myReview.id] : []),
      ...(highlightedReview ? [highlightedReview.id] : []),
      ...otherReviews.map((r) => r.id),
    ];
    const votes = await fetchVotes(allIds);
    setMyReview((prev) => prev ? { ...prev, _votes: votes[prev.id] || { up: 0, down: 0, myVote: null } } : null);
    setHighlightedReview((prev) => prev ? { ...prev, _votes: votes[prev.id] || { up: 0, down: 0, myVote: null } } : null);
    setOtherReviews((prev) => applyVotes(prev, votes));
  }, [myReview, highlightedReview, otherReviews, fetchVotes]);

  const fetchMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    try {
      let query = supabase.from(reviewTable).select('*')
        .eq(filterField, filterValue)
        .order('created_at', { ascending: false })
        .range(offset, offset + PAGE_SIZE - 1);
      if (currentUserId) query = query.neq('user_id', currentUserId);
      if (highlightedReview?.id) query = query.neq('id', highlightedReview.id);

      const { data: newOthers } = await query;
      const newData = newOthers || [];

      if (newData.length > 0) {
        const newVotes = await fetchVotes(newData.map((r) => r.id));
        setOtherReviews((prev) => [...prev, ...applyVotes(newData, newVotes)]);
        const newOffset = offset + PAGE_SIZE;
        setOffset(newOffset);
        setHasMore(newOffset < totalOtherCount);
      } else {
        setHasMore(false);
      }
    } catch (e) {
      console.error('[ReviewList] fetchMore:', e);
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, hasMore, offset, reviewTable, filterField, filterValue, currentUserId, highlightedReview, totalOtherCount, fetchVotes]);

  useEffect(() => { fetchInitial(); }, [fetchInitial, refreshKey]);

  // Scroll vers l'avis mis en avant (notif/profil) dès qu'il est dans le DOM
  useEffect(() => {
    if (!highlightId || highlightScrolledRef.current === highlightId) return;
    const el = document.getElementById(`review-${highlightId}`);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
      highlightScrolledRef.current = highlightId;
    }
  }, [highlightId, myReview, highlightedReview, otherReviews]);

  const sortedOthers = useMemo(() => {
    const list = otherReviews.filter((r) => r.id !== excludeId);
    if (sortBy === 'votes') {
      return [...list].sort((a, b) =>
        (b._votes.up - a._votes.up) || (new Date(b.created_at) - new Date(a.created_at))
      );
    }
    return list;
  }, [otherReviews, sortBy, excludeId]);

  const isEmpty = !myReview && !highlightedReview && otherReviews.length === 0;

  if (loading) return <div className="review-list-loading">Chargement des avis…</div>;
  if (isEmpty) return <div className="review-list-empty">{emptyMessage || 'Aucun avis pour ce pays. Soyez le premier !'}</div>;

  const remaining = totalOtherCount - otherReviews.length;

  return (
    <div className="review-list">
      {myReview && myReview.id !== excludeId && (
        <div className="review-mon-avis-block">
          <span className="review-mon-avis-label">Mon avis</span>
          <ReviewItem
            review={myReview}
            currentUserId={currentUserId}
            onDelete={() => { fetchInitial(); onDelete?.(); }}
            onEdit={() => onEdit?.(myReview)}
            onVoteChange={refreshVotes}
            onOpenProfile={onOpenProfile}
            isDestReview={isDestReview}
          />
        </div>
      )}

      {highlightedReview && highlightedReview.id !== excludeId && (
        <ReviewItem
          review={highlightedReview}
          currentUserId={currentUserId}
          onDelete={() => { fetchInitial(); onDelete?.(); }}
          onEdit={() => onEdit?.(highlightedReview)}
          onVoteChange={refreshVotes}
          onOpenProfile={onOpenProfile}
          isDestReview={isDestReview}
        />
      )}

      {sortedOthers.map((r) => (
        <ReviewItem
          key={r.id}
          review={r}
          currentUserId={currentUserId}
          onDelete={() => { fetchInitial(); onDelete?.(); }}
          onEdit={() => onEdit?.(r)}
          onVoteChange={refreshVotes}
          onOpenProfile={onOpenProfile}
          isDestReview={isDestReview}
        />
      ))}

      {hasMore && (
        <button className="review-load-more-btn" onClick={fetchMore} disabled={loadingMore}>
          {loadingMore
            ? 'Chargement…'
            : remaining > 0
              ? `Afficher plus (${remaining} restant${remaining > 1 ? 's' : ''})`
              : 'Afficher plus'}
        </button>
      )}
    </div>
  );
}
