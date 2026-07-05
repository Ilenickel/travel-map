import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import imageCompression from 'browser-image-compression';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import WikiImage from './WikiImage';
import { fetchTranslatedFields, translationKey } from '../lib/translateContent';
import { COUNTRIES } from '../data/index';
import { extractLabelVariants } from '../lib/labelVariants';

const PAGE_SIZE = 10;
const EMPTY_VOTES = { up: 0, down: 0, myVote: null };

// ─── Helper upload ────────────────────────────────────────────────────────────
async function uploadPlacePhoto(file, userId, prefix) {
  const path = `places/${userId}/${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const { error } = await supabase.storage.from('destination-photos').upload(path, file);
  if (error) throw new Error(error.message);
  const url = supabase.storage.from('destination-photos').getPublicUrl(path).data.publicUrl;
  return { url, path };
}

// ─── Formulaire d'ajout d'un lieu ────────────────────────────────────────────
function AddPlaceForm({ destType, destinationId, staticDestId, countryCode, countryName, destName, editorialNames = [], onAdded, onMerged, onCancel }) {
  const { t } = useTranslation('app');
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState({ file: null, preview: null });
  const [compressing, setCompressing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handlePhoto(e) {
    const file = e.target.files[0]; if (!file) return; e.target.value = '';
    setCompressing(true);
    const compressed = await imageCompression(file, { maxSizeMB: 0.3, maxWidthOrHeight: 800, useWebWorker: true });
    setPhoto({ file: compressed, preview: URL.createObjectURL(compressed) });
    setCompressing(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !photo.file) return;
    setSubmitting(true); setError('');

    let uploadedPath = null;
    let uploadedUrl = null;
    try {
      const prefix = destType === 'community' ? `comm_${destinationId?.slice(0, 8)}` : `stat_${countryCode}_${staticDestId}`;
      const { url, path } = await uploadPlacePhoto(photo.file, user.id, prefix);
      uploadedUrl = url; uploadedPath = path;
    } catch {
      setError(t('placesList.photoUploadError'));
      setSubmitting(false); return;
    }

    const { data: session } = await supabase.auth.getSession();
    const authToken = session?.session?.access_token ?? null;

    const payload = {
      authToken, destType,
      placeName: name.trim(),
      imageUrl: uploadedUrl,
      imagePath: uploadedPath,
      countryName, destName, countryCode,
      editorialNames,
      ...(destType === 'community' ? { destinationId } : { staticDestId: String(staticDestId) }),
    };

    let result;
    try {
      const res = await fetch('/api/add-place', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      result = await res.json();
    } catch {
      result = { ok: false, reason: t('placesList.connectionFailedError') };
    }

    if (!result.ok) {
      setError(result.reason || t('placesList.publicationFailedError'));
      setSubmitting(false); return;
    }

    // Doublon détecté côté serveur (même lieu déjà proposé, potentiellement
    // dans une autre langue) : pas de nouveau lieu créé, notre vote a été
    // ajouté à celui déjà existant — pas d'appel à onAdded, juste un message
    // et un rechargement pour que ce vote apparaisse.
    if (result.merged) {
      onMerged(result.matchedName, result.voted);
      return;
    }

    onAdded({
      id: result.placeId,
      name: name.trim(),
      image_url: uploadedUrl,
      image_path: uploadedPath,
      user_id: user.id,
      isJson: false,
      _votes: { ...EMPTY_VOTES },
    });
  }

  return (
    <form className="add-place-form" onSubmit={handleSubmit}>
      <input
        className="add-place-name-input"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={t('placesList.namePlaceholder')}
        maxLength={100}
        disabled={submitting}
      />
      <div className="add-place-photo-row">
        {photo.preview ? (
          <div className="add-place-photo-preview-wrap">
            <img src={photo.preview} className="add-place-photo-preview" alt="" />
            {!submitting && !compressing && (
              <button type="button" className="add-place-photo-remove"
                onClick={() => setPhoto({ file: null, preview: null })}>✕</button>
            )}
          </div>
        ) : (
          <label className={`add-place-photo-btn${compressing ? ' loading' : ''}`}>
            {compressing ? <><div className="dest-form-spinner dest-form-spinner--small" /> {t('placesList.compressing')}</> : t('placesList.addPhotoButton')}
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhoto} disabled={compressing || submitting} />
          </label>
        )}
      </div>
      {error && <div className="add-place-error">⚠ {error}</div>}
      <div className="add-place-actions">
        <button type="button" className="add-place-cancel" onClick={onCancel} disabled={submitting}>{t('placesList.cancelButton')}</button>
        <button type="submit" className="add-place-submit"
          disabled={!name.trim() || !photo.file || submitting || compressing}>
          {submitting ? t('placesList.publishing') : t('placesList.publishButton')}
        </button>
      </div>
    </form>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function PlacesList({ dest, countryCode, countryName, wikiImages = {} }) {
  const { t, i18n } = useTranslation('app');
  const { user } = useAuth();
  const isUserDest = !!dest.isUserDest;
  const destType = isUserDest ? 'community' : 'static';
  const staticDestId = !isUserDest ? String(dest.id) : null;
  const userId = user?.id ?? null;
  const translationContentType = isUserDest ? 'destination_place' : 'static_destination_place';

  // Variantes des noms de lieux "à ne pas manquer" figés (mustSee), pour
  // détecter côté serveur un doublon communautaire même si le libellé
  // éditorial est composé ("Old town (Yu Garden)") ou dans l'autre langue —
  // voir api/add-place.js. Chaque variante porte le libellé complet d'origine
  // (matchName) pour l'affichage, même quand le texte comparé est un fragment.
  const editorialNames = useMemo(() => {
    if (isUserDest) return [];
    const staticDest = COUNTRIES[countryCode]?.destinations?.find((d) => String(d.id) === staticDestId);
    const out = [];
    for (const m of staticDest?.mustSee || []) {
      const labels = m?.name && typeof m.name === 'object' ? [m.name.fr, m.name.en] : [m?.name];
      for (const label of labels.filter(Boolean)) {
        for (const variant of extractLabelVariants(label)) {
          out.push({ name: variant, matchName: label });
        }
      }
    }
    return out;
  }, [isUserDest, countryCode, staticDestId]);

  const [places, setPlaces] = useState([]);
  // Noms traduits des lieux communautaires/statiques (pas les lieux "à ne pas
  // manquer" statiques du JSON, déjà bilingues via localizeCountry) — un objet
  // { lang, text } par id pour savoir si la traduction en cache correspond
  // encore à la langue actuellement affichée (sinon, on la recharge).
  const [translatedNames, setTranslatedNames] = useState({});
  const [hasMore, setHasMore] = useState(false);
  const [communityOffset, setCommunityOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [votingId, setVotingId] = useState(null);
  // Message transitoire affiché quand le lieu soumis s'avère être un doublon
  // (même lieu déjà proposé, potentiellement dans une autre langue) : le
  // serveur a alors ajouté notre vote au lieu existant plutôt que d'en créer un nouveau.
  const [mergeNotice, setMergeNotice] = useState(null);
  const mergeNoticeTimerRef = useRef(null);

  // Même pattern que ReviewList : charge TOUS les votes des lieux (pour compter up/down),
  // et repère celui de l'utilisateur courant via userId.
  const fetchVotes = useCallback(async (ids) => {
    if (!ids.length) return {};
    const { data } = await supabase
      .from('place_votes')
      .select('place_id, vote_type, user_id')
      .eq('place_type', destType)
      .in('place_id', ids);
    const map = {};
    (data || []).forEach(v => {
      if (!map[v.place_id]) map[v.place_id] = { up: 0, down: 0, myVote: null };
      if (v.vote_type === 'up') map[v.place_id].up++;
      else map[v.place_id].down++;
      if (userId && v.user_id === userId) map[v.place_id].myVote = v.vote_type;
    });
    return map;
  }, [userId, destType]);

  const applyVotes = (rows, votes) => {
    const withVotes = rows.map(p => ({ ...p, _votes: votes[p.id] || { ...EMPTY_VOTES } }));
    return withVotes.sort((a, b) => {
      const sa = (a._votes.up - a._votes.down);
      const sb = (b._votes.up - b._votes.down);
      return sb - sa;
    });
  };

  const loadInitial = useCallback(async () => {
    setLoading(true);
    setHasMore(false);
    setShowAddForm(false);
    setCommunityOffset(0);

    if (isUserDest) {
      const { data } = await supabase
        .from('destination_places')
        .select('id, name, image_url, image_path, user_id, created_at')
        .eq('destination_id', dest.id)
        .order('score', { ascending: false })
        .order('created_at', { ascending: true })
        .range(0, PAGE_SIZE);
      const rows = data || [];
      const sliced = rows.slice(0, PAGE_SIZE);
      const votes = await fetchVotes(sliced.map(p => p.id));
      setPlaces(applyVotes(sliced, votes));
      setHasMore(rows.length > PAGE_SIZE);
      setCommunityOffset(sliced.length);
    } else {
      const jsonPlaces = (dest.mustSee || []).map(s => ({
        id: `json_${s.name}`, name: s.name, wikipedia: s.wikipedia,
        image_url: null, user_id: null, isJson: true, _votes: { ...EMPTY_VOTES },
      }));
      const slotSize = PAGE_SIZE - jsonPlaces.length;
      const { data } = await supabase
        .from('static_destination_places')
        .select('id, name, image_url, image_path, user_id, created_at')
        .eq('country_code', countryCode)
        .eq('static_dest_id', String(dest.id))
        .order('score', { ascending: false })
        .order('created_at', { ascending: true })
        .range(0, slotSize);
      const rows = data || [];
      const communitySliced = rows.slice(0, slotSize);
      const votes = await fetchVotes(communitySliced.map(p => p.id));
      setPlaces([...jsonPlaces, ...applyVotes(communitySliced, votes)]);
      setHasMore(rows.length > slotSize);
      setCommunityOffset(communitySliced.length);
    }

    setLoading(false);
  }, [dest.id, fetchVotes, isUserDest, countryCode]); // eslint-disable-line react-hooks/exhaustive-deps

  async function loadMore() {
    setLoading(true);

    if (isUserDest) {
      const from = communityOffset;
      const { data } = await supabase
        .from('destination_places')
        .select('id, name, image_url, image_path, user_id, created_at')
        .eq('destination_id', dest.id)
        .order('score', { ascending: false })
        .order('created_at', { ascending: true })
        .range(from, from + PAGE_SIZE);
      const rows = data || [];
      const sliced = rows.slice(0, PAGE_SIZE);
      const votes = await fetchVotes(sliced.map(p => p.id));
      setPlaces(prev => [...prev, ...applyVotes(sliced, votes)]);
      setHasMore(rows.length > PAGE_SIZE);
      setCommunityOffset(from + sliced.length);
    } else {
      const from = communityOffset;
      const { data } = await supabase
        .from('static_destination_places')
        .select('id, name, image_url, image_path, user_id, created_at')
        .eq('country_code', countryCode)
        .eq('static_dest_id', String(dest.id))
        .order('score', { ascending: false })
        .order('created_at', { ascending: true })
        .range(from, from + PAGE_SIZE);
      const rows = data || [];
      const sliced = rows.slice(0, PAGE_SIZE);
      const votes = await fetchVotes(sliced.map(p => p.id));
      setPlaces(prev => [...prev, ...applyVotes(sliced, votes)]);
      setHasMore(rows.length > PAGE_SIZE);
      setCommunityOffset(from + sliced.length);
    }

    setLoading(false);
  }

  // Re-fire quand dest change OU quand userId change (user se connecte/déconnecte)
  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  // Traduction des noms de lieux communautaires/statiques dans la langue
  // active, avec cache serveur (voir api/get-translated-content.js). Ne
  // retraduit que les lieux pas encore résolus pour la langue courante,
  // pour ne pas ré-appeler l'API à chaque mise à jour optimiste de `places`.
  useEffect(() => {
    const lang = i18n.language;
    const pending = places.filter(p => !p.isJson && translatedNames[p.id]?.lang !== lang);
    if (!pending.length) return;
    let cancelled = false;
    (async () => {
      const items = pending.map(p => ({ contentType: translationContentType, contentId: p.id, field: 'name', sourceText: p.name }));
      const result = await fetchTranslatedFields(items, lang);
      if (cancelled) return;
      setTranslatedNames(prev => {
        const next = { ...prev };
        for (const p of pending) {
          const key = translationKey(translationContentType, p.id, 'name');
          next[p.id] = { lang, text: result[key] ?? p.name };
        }
        return next;
      });
    })();
    return () => { cancelled = true; };
  }, [places, i18n.language, translationContentType]); // eslint-disable-line react-hooks/exhaustive-deps

  // Même logique que ReviewItem : upsert si vote nouveau/changé, delete si annulation
  async function handleVote(place, voteType) {
    if (!user || votingId === place.id) return;

    const currentVote = place._votes?.myVote ?? null;
    const newVote = currentVote === voteType ? null : voteType;

    // Mise à jour optimiste (même calcul que ReviewItem)
    setPlaces(prev => {
      const updated = prev.map(p => {
        if (p.id !== place.id) return p;
        const v = p._votes || { ...EMPTY_VOTES };
        const upDelta   = voteType === 'up'   ? (newVote === 'up'   ? 1 : -1) : (currentVote === 'up'   ? -1 : 0);
        const downDelta = voteType === 'down' ? (newVote === 'down' ? 1 : -1) : (currentVote === 'down' ? -1 : 0);
        return { ...p, _votes: { up: v.up + upDelta, down: v.down + downDelta, myVote: newVote } };
      });
      const json = updated.filter(p => p.isJson);
      const community = updated.filter(p => !p.isJson).sort((a, b) => {
        const scoreA = (a._votes?.up ?? 0) - (a._votes?.down ?? 0);
        const scoreB = (b._votes?.up ?? 0) - (b._votes?.down ?? 0);
        return scoreB - scoreA;
      });
      return [...json, ...community];
    });

    setVotingId(place.id);

    if (newVote === null) {
      await supabase.from('place_votes').delete()
        .eq('place_id', place.id)
        .eq('user_id', user.id)
        .eq('place_type', destType);
    } else {
      await supabase.from('place_votes').upsert(
        { place_id: place.id, user_id: user.id, place_type: destType, vote_type: newVote },
        { onConflict: 'user_id,place_id,place_type' }
      );
    }

    setVotingId(null);
  }

  async function handleDelete(place) {
    const { data: session } = await supabase.auth.getSession();
    const authToken = session?.session?.access_token ?? null;
    try {
      const res = await fetch('/api/delete-place', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authToken, placeId: place.id, placeType: destType }),
      });
      const result = await res.json();
      if (result.ok) {
        setPlaces(prev => prev.filter(p => p.id !== place.id));
        setDeletingId(null);
      }
    } catch {}
  }

  function handleAdded(newPlace) {
    setPlaces(prev => [...prev, newPlace]);
    setShowAddForm(false);
  }

  function handleMerged(matchedName, voted) {
    setShowAddForm(false);
    setMergeNotice({ name: matchedName, voted });
    if (voted) loadInitial(); // recharge lieux + votes pour que le vote ajouté apparaisse
    // Annule un précédent minuteur en attente : sans ça, deux fusions rapprochées
    // feraient disparaître le second message avant ses 6 secondes prévues.
    clearTimeout(mergeNoticeTimerRef.current);
    mergeNoticeTimerRef.current = setTimeout(() => setMergeNotice(null), 6000);
  }

  return (
    <div className="places-list">
      <div className="places-list-header">
        <h4 className="places-list-title">{t('placesList.title')}</h4>
        {user && !showAddForm && (
          <button className="places-add-btn" onClick={() => setShowAddForm(true)}>{t('placesList.addPlaceButton')}</button>
        )}
      </div>

      {mergeNotice && (
        <div className="places-merge-notice">
          {t(mergeNotice.voted ? 'placesList.duplicatePlaceMerged' : 'placesList.duplicatePlaceEditorial', { name: mergeNotice.name })}
        </div>
      )}

      {showAddForm && (
        <AddPlaceForm
          destType={destType}
          destinationId={isUserDest ? dest.id : null}
          staticDestId={staticDestId}
          countryCode={countryCode}
          countryName={countryName}
          destName={dest.name}
          editorialNames={editorialNames}
          onAdded={handleAdded}
          onMerged={handleMerged}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      <div className="must-list">
        {places.map(place => {
          const displayName = place.isJson ? place.name : (translatedNames[place.id]?.text ?? place.name);
          return (
          <div key={place.id} className="must-item">
            {place.isJson ? (
              <WikiImage src={wikiImages[place.wikipedia] ?? null} alt={displayName} className="must-item-img" />
            ) : (
              <img src={place.image_url} alt={displayName} className="must-item-img" />
            )}
            <span className="must-item-name">{displayName}</span>

            {!place.isJson && (
              <div className="must-item-actions">
                {deletingId === place.id ? (
                  <div className="review-confirm-delete">
                    <span className="review-confirm-msg">{t('placesList.confirmDeleteMessage')}</span>
                    <button className="review-confirm-yes" onClick={() => handleDelete(place)}>{t('placesList.yesButton')}</button>
                    <button className="review-confirm-no" onClick={() => setDeletingId(null)}>{t('placesList.noButton')}</button>
                  </div>
                ) : (
                  <>
                    <button
                      className={`must-vote-btn must-vote-btn--up${place._votes?.myVote === 'up' ? ' voted' : ''}${!user ? ' disabled' : ''}`}
                      disabled={!user || votingId === place.id}
                      onClick={() => handleVote(place, 'up')}
                      title={user ? t('placesList.likeThisPlace') : t('placesList.loginToVote')}
                    >
                      ▲ {place._votes?.up ?? 0}
                    </button>
                    <button
                      className={`must-vote-btn must-vote-btn--down${place._votes?.myVote === 'down' ? ' voted-down' : ''}${!user ? ' disabled' : ''}`}
                      disabled={!user || votingId === place.id}
                      onClick={() => handleVote(place, 'down')}
                      title={user ? t('placesList.dislikeThisPlace') : t('placesList.loginToVote')}
                    >
                      ▼ {place._votes?.down ?? 0}
                    </button>
                    {user?.id === place.user_id && (
                      <button className="must-delete-btn" onClick={() => setDeletingId(place.id)} title={t('placesList.deleteButton')}>✕</button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
          );
        })}
      </div>

      {loading && <div className="places-loading">{t('placesList.loading')}</div>}

      {hasMore && !loading && (
        <button className="places-load-more" onClick={loadMore}>
          {t('placesList.seeMorePlaces')}
        </button>
      )}
    </div>
  );
}
