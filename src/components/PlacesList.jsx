import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import imageCompression from 'browser-image-compression';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import WikiImage from './WikiImage';
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
    // 1600/0.5 (pas 800/0.3) : ces photos sont affichées bien plus grandes
    // qu'avant sur PC/mobile, 800px paraissait flou — même ajustement que la
    // photo de couverture de destination (2026-07-23).
    const compressed = await imageCompression(file, { maxSizeMB: 0.5, maxWidthOrHeight: 1600, useWebWorker: true });
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

// ─── Formulaire d'édition d'un lieu (inline, dans la carte) ─────────────────
function EditPlaceForm({ place, destType, countryCode, countryName, destName, editorialNames = [], onSaved, onCancel }) {
  const { t } = useTranslation('app');
  const { user } = useAuth();
  const [name, setName] = useState(place.name);
  const [photo, setPhoto] = useState({ file: null, preview: place.image_url });
  const [compressing, setCompressing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handlePhoto(e) {
    const file = e.target.files[0]; if (!file) return; e.target.value = '';
    setCompressing(true);
    // 1600/0.5 (pas 800/0.3) : ces photos sont affichées bien plus grandes
    // qu'avant sur PC/mobile, 800px paraissait flou — même ajustement que la
    // photo de couverture de destination (2026-07-23).
    const compressed = await imageCompression(file, { maxSizeMB: 0.5, maxWidthOrHeight: 1600, useWebWorker: true });
    setPhoto({ file: compressed, preview: URL.createObjectURL(compressed) });
    setCompressing(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !photo.preview) return;
    setSubmitting(true); setError('');

    let uploadedPath = null;
    let uploadedUrl = place.image_url;
    if (photo.file) {
      try {
        const prefix = destType === 'community' ? `comm_${place.destination_id?.slice(0, 8) ?? 'edit'}` : `stat_${countryCode}_edit`;
        const { url, path } = await uploadPlacePhoto(photo.file, user.id, prefix);
        uploadedUrl = url; uploadedPath = path;
      } catch {
        setError(t('placesList.photoUploadError'));
        setSubmitting(false); return;
      }
    }

    const { data: session } = await supabase.auth.getSession();
    const authToken = session?.session?.access_token ?? null;

    const payload = {
      authToken,
      placeId: place.id,
      destType,
      placeName: name.trim(),
      imageUrl: uploadedUrl,
      imagePath: uploadedPath,
      countryName, destName,
      editorialNames,
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

    onSaved({ ...place, name: name.trim(), image_url: uploadedUrl, image_path: uploadedPath ?? place.image_path });
  }

  return (
    <form className="must-item-edit-form" onSubmit={handleSubmit}>
      <input
        className="add-place-name-input"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={t('placesList.namePlaceholder')}
        maxLength={100}
        disabled={submitting}
      />
      <div className="must-edit-photo-row">
        {photo.preview ? (
          <div className="must-edit-photo-preview-wrap">
            <img src={photo.preview} className="must-edit-photo-preview" alt="" />
            {!submitting && !compressing && (
              <button type="button" className="add-place-photo-remove"
                onClick={() => setPhoto({ file: null, preview: null })}>✕</button>
            )}
          </div>
        ) : (
          <label className={`must-edit-photo-btn${compressing ? ' loading' : ''}`}>
            {compressing ? <><div className="dest-form-spinner dest-form-spinner--small" /> {t('placesList.compressing')}</> : t('placesList.addPhotoButton')}
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhoto} disabled={compressing || submitting} />
          </label>
        )}
      </div>
      {error && <div className="add-place-error">⚠ {error}</div>}
      <div className="add-place-actions">
        <button type="button" className="add-place-cancel" onClick={onCancel} disabled={submitting}>{t('placesList.cancelButton')}</button>
        <button type="submit" className="add-place-submit"
          disabled={!name.trim() || !photo.preview || submitting || compressing}>
          {submitting ? t('placesList.publishing') : t('placesList.saveButton')}
        </button>
      </div>
    </form>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function PlacesList({ dest, countryCode, countryName, wikiImages = {}, wikiMeta = {} }) {
  const { t, i18n } = useTranslation('app');
  const { user } = useAuth();
  const isUserDest = !!dest.isUserDest;
  const destType = isUserDest ? 'community' : 'static';
  const staticDestId = !isUserDest ? String(dest.id) : null;
  const userId = user?.id ?? null;

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
  const [communityOffset, setCommunityOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [votingId, setVotingId] = useState(null);
  // Message transitoire affiché quand le lieu soumis s'avère être un doublon
  // (même lieu déjà proposé, potentiellement dans une autre langue) : le
  // serveur a alors ajouté notre vote au lieu existant plutôt que d'en créer un nouveau.
  const [mergeNotice, setMergeNotice] = useState(null);
  const mergeNoticeTimerRef = useRef(null);

  // Le tri se fait CÔTÉ BASE (order by score) — `score` est tenu à jour par
  // api/vote-place.js à chaque vote (upvotes/downvotes, score en dérive en
  // base) : pas besoin de charger tous les lieux ni de retrier côté client
  // pour paginer correctement, la page N est déjà à sa vraie place globale.
  // Cette requête ne sert plus qu'à retrouver le vote propre à l'utilisateur
  // courant (myVote) — les compteurs affichés viennent de upvotes/downvotes,
  // déjà sur la ligne.
  const fetchMyVotes = useCallback(async (ids) => {
    if (!userId || !ids.length) return {};
    const { data } = await supabase
      .from('place_votes')
      .select('place_id, vote_type')
      .eq('place_type', destType)
      .eq('user_id', userId)
      .in('place_id', ids);
    const map = {};
    (data || []).forEach(v => { map[v.place_id] = v.vote_type; });
    return map;
  }, [userId, destType]);

  const attachVotes = (rows, myVotes) => rows.map(p => ({
    ...p,
    _votes: { up: p.upvotes ?? 0, down: p.downvotes ?? 0, myVote: myVotes[p.id] ?? null },
  }));

  const PLACE_FIELDS = 'id, name, image_url, image_path, user_id, created_at, upvotes, downvotes, score';

  const loadInitial = useCallback(async () => {
    setLoading(true);
    setShowAddForm(false);
    setCommunityOffset(0);

    if (isUserDest) {
      const { data } = await supabase
        .from('destination_places')
        .select(PLACE_FIELDS)
        .eq('destination_id', dest.id)
        .order('score', { ascending: false })
        .order('created_at', { ascending: true })
        .range(0, PAGE_SIZE);
      const rows = data || [];
      const sliced = rows.slice(0, PAGE_SIZE);
      const myVotes = await fetchMyVotes(sliced.map(p => p.id));
      setPlaces(attachVotes(sliced, myVotes));
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
        .select(PLACE_FIELDS)
        .eq('country_code', countryCode)
        .eq('static_dest_id', String(dest.id))
        .order('score', { ascending: false })
        .order('created_at', { ascending: true })
        .range(0, slotSize);
      const rows = data || [];
      const communitySliced = rows.slice(0, slotSize);
      const myVotes = await fetchMyVotes(communitySliced.map(p => p.id));
      setPlaces([...jsonPlaces, ...attachVotes(communitySliced, myVotes)]);
      setHasMore(rows.length > slotSize);
      setCommunityOffset(communitySliced.length);
    }

    setLoading(false);
  }, [dest.id, fetchMyVotes, isUserDest, countryCode]); // eslint-disable-line react-hooks/exhaustive-deps

  async function loadMore() {
    setLoading(true);
    const from = communityOffset;
    const table = isUserDest ? 'destination_places' : 'static_destination_places';
    let query = supabase.from(table).select(PLACE_FIELDS);
    query = isUserDest ? query.eq('destination_id', dest.id) : query.eq('country_code', countryCode).eq('static_dest_id', String(dest.id));
    const { data } = await query
      .order('score', { ascending: false })
      .order('created_at', { ascending: true })
      .range(from, from + PAGE_SIZE);
    const rows = data || [];
    const sliced = rows.slice(0, PAGE_SIZE);
    const myVotes = await fetchMyVotes(sliced.map(p => p.id));
    // Simple concaténation : la base a déjà livré cette page dans son ordre
    // global correct (order by score), pas besoin de retrier avec ce qui est
    // déjà affiché.
    setPlaces(prev => [...prev, ...attachVotes(sliced, myVotes)]);
    setHasMore(rows.length > PAGE_SIZE);
    setCommunityOffset(from + sliced.length);
    setLoading(false);
  }

  // Re-fire quand dest change OU quand userId change (user se connecte/déconnecte)
  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  // Le nom d'un lieu "à ne pas manquer" n'est plus traduit (2026-07-23) :
  // c'est un nom propre, pas du texte descriptif — Google Translate le
  // traduisait littéralement (même souci que get-place-suggestions.js).
  // `translatedNames`/`translationContentType` retirés : plus rien ne les
  // utilisait une fois cette traduction supprimée.

  // Même logique que ReviewItem : upsert si vote nouveau/changé, delete si annulation
  async function handleVote(place, voteType) {
    if (!user || votingId === place.id) return;

    const currentVote = place._votes?.myVote ?? null;
    const newVote = currentVote === voteType ? null : voteType;

    // Mise à jour optimiste des compteurs affichés + réordonnancement DES
    // SEULS lieux déjà visibles (pas de rechargement complet) : le prochain
    // "voir plus" repartira de la base, déjà correctement triée par `score`.
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
        setCommunityOffset(o => Math.max(0, o - 1));
        setDeletingId(null);
      }
    } catch {}
  }

  function handleAdded(newPlace) {
    setPlaces(prev => [...prev, newPlace]);
    setCommunityOffset(o => o + 1);
    setShowAddForm(false);
  }

  function handleSaved(updatedPlace) {
    setPlaces(prev => prev.map(p => (p.id === updatedPlace.id ? { ...p, ...updatedPlace } : p)));
    setEditingId(null);
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
          const displayName = place.name;
          return (
          <div key={place.id} className="must-item">
            {editingId === place.id ? (
              <EditPlaceForm
                place={place}
                destType={destType}
                countryCode={countryCode}
                countryName={countryName}
                destName={dest.name}
                editorialNames={editorialNames}
                onSaved={handleSaved}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <>
                {place.isJson ? (
                  <WikiImage src={wikiImages[place.wikipedia] ?? null} meta={wikiMeta[place.wikipedia]} alt={displayName} className="must-item-img" />
                ) : (
                  <img src={place.image_url} alt={displayName} className="must-item-img" />
                )}
                <span className="must-item-name">{displayName}</span>

                {!place.isJson && (
                  <div className="must-item-actions">
                    {deletingId === place.id ? (
                      <div className="dest-card-confirm-block">
                        <span className="dest-card-confirm-msg">{t('placesList.confirmDeleteMessage')}</span>
                        <div className="dest-card-confirm-btns">
                          <button className="review-confirm-no" onClick={() => setDeletingId(null)}>{t('placesList.noButton')}</button>
                          <button className="review-confirm-yes" onClick={() => handleDelete(place)}>{t('placesList.yesButton')}</button>
                        </div>
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
                          <>
                            <button className="must-edit-btn" onClick={() => setEditingId(place.id)} title={t('placesList.editButton')}>✎</button>
                            <button className="must-delete-btn" onClick={() => setDeletingId(place.id)} title={t('placesList.deleteButton')}>✕</button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
              </>
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
