import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import imageCompression from "browser-image-compression";
import { supabase } from "../lib/supabase";
import { callModeration } from "../lib/moderation";
import { useAuth } from "../context/AuthContext";
import { validateImageFile } from "../lib/imageValidation";
import { isSimilar } from "../lib/similarity";
import { CANONICAL_TAGS, translateTag } from "../lib/tagTranslations";

// Valeurs stockées en français (comparées aux tags des données pays et de
// user_destinations) ; seul le libellé du bouton suit la langue active (translateTag).
const AVAILABLE_TAGS = CANONICAL_TAGS;

function findDuplicate(name, destinations) {
  return destinations.find((d) => isSimilar(name, d.name)) ?? null;
}

// staticDestinations = destinations des data files, existingDestinations = destinations communautaires
export default function DestinationForm({
  countryCode, countryName,
  existingDestination,
  staticDestinations = [],
  existingDestinations = [],
  onSuccess, onCancel,
}) {
  const { t } = useTranslation('app');
  const { user } = useAuth();
  const [name, setName] = useState(existingDestination?.name ?? '');
  const [description, setDescription] = useState(existingDestination?.description ?? '');
  const [tags, setTags] = useState(existingDestination?.tags ?? []);
  const [destImage, setDestImage] = useState({
    file: null,
    preview: existingDestination?.image_url ?? null,
    url: existingDestination?.image_url ?? null,
  });
  const [places, setPlaces] = useState(() =>
    existingDestination?.destination_places?.length
      ? [...existingDestination.destination_places]
          .sort((a, b) => a.sort_order - b.sort_order)
          .map(p => ({ id: p.id, name: p.name, file: null, preview: p.image_url, url: p.image_url }))
      : [{ id: null, name: '', file: null, preview: null, url: null }]
  );
  const [submitting, setSubmitting] = useState(false);
  const [compressingSlot, setCompressingSlot] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [error, setError] = useState('');
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState(null);

  // duplicateFound : { matchedName, existingDestId (null = dest statique), savedUpload (null = pas encore uploadé) }
  const [duplicateFound, setDuplicateFound] = useState(null);
  // mergeResult : { addedPlaces, mergedPlaces } — affiché seulement si au moins
  // un lieu a été reconnu comme doublon (mergedPlaces > 0), sinon on ferme
  // directement comme avant (rien de notable à signaler).
  const [mergeResult, setMergeResult] = useState(null);

  const formBodyRef = useRef(null);
  const isCompressing = compressingSlot !== null;

  const isValid =
    name.trim().length > 0 &&
    description.trim().length > 0 &&
    (destImage.file || destImage.url) &&
    places.length >= 1 &&
    places.every(p => p.name.trim().length > 0 && (p.file || p.url));

  function toggleTag(tag) {
    setTags(prev => {
      if (prev.includes(tag)) return prev.filter(t => t !== tag);
      if (prev.length >= 7) return prev;
      return [...prev, tag];
    });
  }

  async function handleDestImage(e) {
    const file = e.target.files[0]; if (!file) return; e.target.value = '';
    // accept="image/*" sur l'input ne bloque rien réellement (juste une suggestion
    // pour la boîte de dialogue du système) : on vérifie donc le type nous-mêmes,
    // avant compression, pour ne jamais stocker un SVG (peut embarquer du script).
    const validationError = validateImageFile(file);
    if (validationError) { setError(validationError); return; }
    setCompressingSlot('dest');
    const compressed = await imageCompression(file, { maxSizeMB: 0.5, maxWidthOrHeight: 1200, useWebWorker: true });
    setDestImage({ file: compressed, preview: URL.createObjectURL(compressed), url: null });
    setCompressingSlot(null);
  }

  async function handlePlaceImage(e, idx) {
    const file = e.target.files[0]; if (!file) return; e.target.value = '';
    const validationError = validateImageFile(file);
    if (validationError) { setError(validationError); return; }
    setCompressingSlot(idx);
    const compressed = await imageCompression(file, { maxSizeMB: 0.3, maxWidthOrHeight: 800, useWebWorker: true });
    setPlaces(prev => prev.map((p, i) => i === idx ? { ...p, file: compressed, preview: URL.createObjectURL(compressed), url: null } : p));
    setCompressingSlot(null);
  }

  function addPlace() {
    if (places.length >= 10) return;
    setPlaces(prev => [...prev, { id: null, name: '', file: null, preview: null, url: null }]);
    setTimeout(() => { formBodyRef.current?.scrollTo({ top: formBodyRef.current.scrollHeight, behavior: 'smooth' }); }, 50);
  }

  function removePlace(idx) { setPlaces(prev => prev.filter((_, i) => i !== idx)); }

  // Upload + appel serveur.
  // mergeId   : UUID de la destination cible si on fusionne, null sinon.
  // savedUpload : photos déjà uploadées lors d'un premier appel (évite un re-upload).
  async function doSubmit(mergeId, savedUpload = null) {
    setSubmitting(true);
    setError('');

    let finalDestUrl, coverNewPath, placesPayload;
    const uploadedPaths = [];

    async function cleanupAndFail(msg) {
      if (uploadedPaths.length) await supabase.storage.from('destination-photos').remove(uploadedPaths);
      setError(msg || t('destinationForm.genericError'));
      setSubmitting(false); setUploadProgress(null);
    }

    if (savedUpload) {
      // Réutilise les photos déjà uploadées (doublon détecté après upload)
      ({ finalDestUrl, coverNewPath, placesPayload } = savedUpload);
    } else {
      const needsDestUpload = !!destImage.file;
      const placeUploads = places.filter(p => !!p.file);
      const totalUploads = (needsDestUpload ? 1 : 0) + placeUploads.length;
      let doneUploads = 0;
      if (totalUploads > 0) setUploadProgress({ done: 0, total: totalUploads });

      finalDestUrl = destImage.url;
      coverNewPath = null;
      if (destImage.file) {
        const path = `destinations/${user.id}/${countryCode}_dest_${Date.now()}_${Math.random().toString(36).slice(2)}`;
        const { error: upErr } = await supabase.storage.from('destination-photos').upload(path, destImage.file);
        if (upErr) { await cleanupAndFail(t('destinationForm.coverUploadError')); return; }
        uploadedPaths.push(path); coverNewPath = path;
        finalDestUrl = supabase.storage.from('destination-photos').getPublicUrl(path).data.publicUrl;
        setUploadProgress({ done: ++doneUploads, total: totalUploads });
      }

      placesPayload = [];
      for (const [idx, place] of places.entries()) {
        let finalUrl = place.url, placeNewPath = null;
        if (place.file) {
          const path = `places/${user.id}/${countryCode}_place_${idx}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
          const { error: upErr } = await supabase.storage.from('destination-photos').upload(path, place.file);
          if (upErr) { await cleanupAndFail(t('destinationForm.placeUploadError', { index: idx + 1 })); return; }
          uploadedPaths.push(path); placeNewPath = path;
          finalUrl = supabase.storage.from('destination-photos').getPublicUrl(path).data.publicUrl;
          setUploadProgress({ done: ++doneUploads, total: totalUploads });
        }
        placesPayload.push({ name: place.name.trim(), url: finalUrl, path: placeNewPath });
      }
      setUploadProgress(null);
    }

    // Noms de toutes les destinations du pays (statiques + communautaires) pour la vérification IA cross-langue
    const allExisting = [...staticDestinations, ...existingDestinations].filter(d => d.id !== existingDestination?.id);
    const existingNames = allExisting.map(d => d.name).filter(Boolean);

    const result = await callModeration('moderate-destination', {
      countryCode, countryName,
      name: name.trim(), description: description.trim(), tags,
      cover: { url: finalDestUrl, path: coverNewPath },
      places: placesPayload,
      existingDestinationId: existingDestination?.id ?? null,
      mergeIntoId: mergeId ?? null,
      existingNames: mergeId ? [] : existingNames, // pas besoin de vérifier les doublons si on fusionne
    });

    if (!result.ok) {
      if (result.duplicate) {
        // L'IA a trouvé un doublon cross-langue après upload — les photos de lieux sont conservées côté serveur
        setDuplicateFound({
          matchedName: result.matchedName,
          existingDestId: result.existingDestId ?? null,
          savedUpload: result.existingDestId
            ? { finalDestUrl, coverNewPath: null, placesPayload } // cover nettoyée par le serveur
            : null,
        });
        setSubmitting(false);
        return;
      }
      setError(result.reason || t('destinationForm.verificationFailed'));
      setSubmitting(false);
      return;
    }

    if (mergeId) {
      const mergedPlaces = result.mergedPlaces ?? 0;
      if (mergedPlaces > 0) {
        setMergeResult({ addedPlaces: result.addedPlaces ?? 0, mergedPlaces });
        setSubmitting(false);
      } else {
        onSuccess(null);
      }
      return;
    }

    const finalPlaces = placesPayload.map((p, i) => ({ name: p.name, image_url: p.url, sort_order: i }));
    if (!existingDestination) {
      onSuccess({
        id: result.destinationId, user_id: user.id, country_code: countryCode,
        name: name.trim(), description: description.trim(), image_url: finalDestUrl,
        tags, isUserDest: true, created_at: new Date().toISOString(),
        destination_places: finalPlaces.map((p, i) => ({ id: `tmp_${i}`, destination_id: result.destinationId, ...p })),
      });
    } else {
      onSuccess({
        ...existingDestination,
        name: name.trim(), description: description.trim(), image_url: finalDestUrl,
        tags, updated_at: new Date().toISOString(),
        destination_places: finalPlaces.map((p, i) => ({ id: `tmp_${i}`, destination_id: existingDestination.id, ...p })),
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTriedSubmit(true);
    if (!isValid) {
      setError(t('destinationForm.missingFieldsError'));
      return;
    }

    // Vérification rapide côté client (même langue) avant tout upload
    if (!existingDestination) {
      const allExisting = [...staticDestinations, ...existingDestinations];
      const dup = findDuplicate(name.trim(), allExisting);
      if (dup) {
        setDuplicateFound({
          matchedName: dup.name,
          existingDestId: dup.isUserDest ? dup.id : null, // seules les destinations communautaires sont fusionnables
          savedUpload: null,
        });
        return;
      }
    }

    await doSubmit(null);
  }

  async function handleConfirmMerge() {
    const { existingDestId, savedUpload } = duplicateFound;
    setDuplicateFound(null);
    await doSubmit(existingDestId, savedUpload);
  }

  const canMerge = duplicateFound?.existingDestId != null;

  return (
    <>
    {lightboxUrl && (
      <div className="dest-lightbox" onClick={() => setLightboxUrl(null)}>
        <img src={lightboxUrl} className="dest-lightbox-img" alt="Aperçu" onClick={e => e.stopPropagation()} />
        <button className="dest-lightbox-close" onClick={() => setLightboxUrl(null)}>✕</button>
      </div>
    )}

    {mergeResult && (
      <div className="dest-duplicate-overlay">
        <div className="dest-duplicate-box">
          <div className="dest-duplicate-title">{t('destinationForm.mergeResultTitle')}</div>
          <p className="dest-duplicate-msg">
            {mergeResult.addedPlaces > 0 && (
              <>{t('destinationForm.mergeAddedCount', { count: mergeResult.addedPlaces })}<br /></>
            )}
            {t('destinationForm.mergeVotedCount', { count: mergeResult.mergedPlaces })}
          </p>
          <div className="dest-duplicate-actions">
            <button type="button" className="dest-duplicate-btn--merge" onClick={() => { setMergeResult(null); onSuccess(null); }}>
              {t('destinationForm.okButton')}
            </button>
          </div>
        </div>
      </div>
    )}

    {duplicateFound && (
      <div className="dest-duplicate-overlay">
        <div className="dest-duplicate-box">
          <div className="dest-duplicate-title">{t('destinationForm.duplicateFoundTitle')}</div>
          <p className="dest-duplicate-msg">
            {t('destinationForm.duplicateExistsPrefix')} <strong>{duplicateFound.matchedName}</strong> {t('destinationForm.duplicateExistsSuffix')}
            {canMerge
              ? <><br />{t('destinationForm.duplicateMergeQuestion')}</>
              : <><br />{t('destinationForm.duplicateAddManually')} <strong>{t('destinationForm.duplicateAddManuallyButton')}</strong>.</>
            }
          </p>
          {canMerge && (
            <p className="dest-duplicate-hint">
              {t('destinationForm.duplicateMergeHint')}
            </p>
          )}
          <div className="dest-duplicate-actions">
            <button type="button" className="dest-duplicate-btn--cancel" onClick={() => setDuplicateFound(null)}>
              {canMerge ? t('destinationForm.cancelMergeButton') : t('destinationForm.okButton')}
            </button>
            {canMerge && (
              <button type="button" className="dest-duplicate-btn--merge" onClick={handleConfirmMerge} disabled={submitting}>
                {submitting ? t('destinationForm.mergingInProgress') : t('destinationForm.confirmMergeButton')}
              </button>
            )}
          </div>
        </div>
      </div>
    )}

    <form className="dest-form" onSubmit={handleSubmit}>
      <div className="dest-form-header">
        <span className="dest-form-header-title">
          {existingDestination ? t('destinationForm.editTitle') : t('destinationForm.newTitle')}
        </span>
        <button type="button" className="dest-form-header-close" onClick={onCancel}>✕</button>
      </div>

      <div className="dest-form-body" ref={formBodyRef}>

        <div className="dest-form-cover-section">
          {destImage.preview ? (
            <div className="dest-form-cover-preview">
              <img src={destImage.preview} alt="Couverture" className="dest-form-cover-img dest-form-cover-img--clickable" onClick={() => setLightboxUrl(destImage.preview)} />
              {compressingSlot === 'dest' && (
                <div className="dest-form-cover-loading"><div className="dest-form-spinner" /><span>{t('destinationForm.compressing')}</span></div>
              )}
              {!submitting && compressingSlot !== 'dest' && (
                <>
                  <label className="dest-form-cover-change">
                    {t('destinationForm.changePhoto')}
                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleDestImage} />
                  </label>
                  <button type="button" className="dest-form-cover-remove"
                    onClick={() => setDestImage({ file: null, preview: null, url: null })}>✕</button>
                </>
              )}
            </div>
          ) : (
            <label className={`dest-form-cover-empty${compressingSlot === 'dest' ? ' loading' : ''}`}>
              {compressingSlot === 'dest' ? (
                <><div className="dest-form-spinner" /><span>{t('destinationForm.compressingInProgress')}</span></>
              ) : (
                <>
                  <span className="dest-form-cover-icon">🖼</span>
                  <span className="dest-form-cover-hint">{t('destinationForm.coverHint')} <span className="required">*</span></span>
                  <span className="dest-form-cover-sub">{t('destinationForm.coverSub')}</span>
                </>
              )}
              <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleDestImage} disabled={isCompressing} />
            </label>
          )}
        </div>

        <div className="dest-form-section">
          <input
            className="dest-form-name-input"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t('destinationForm.namePlaceholder')}
            maxLength={100}
          />
          <div className="dest-form-desc-wrap">
            <textarea
              className="dest-form-desc-input"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={t('destinationForm.descriptionPlaceholder')}
              rows={4}
              maxLength={2000}
            />
            <span className="dest-form-counter">{description.length}/2000</span>
          </div>
        </div>

        <div className="dest-form-section">
          <div className="dest-form-section-label">
            {t('destinationForm.tagsLabel')}
            <span className="dest-form-section-hint">{tags.length === 0 ? t('destinationForm.tagsMax') : t('destinationForm.tagsCount', { count: tags.length })}</span>
          </div>
          <div className="dest-form-tags-grid">
            {AVAILABLE_TAGS.map(tag => {
              const selected = tags.includes(tag);
              const maxed = tags.length >= 7 && !selected;
              return (
                <button key={tag} type="button"
                  className={`dest-form-tag-pill${selected ? ' selected' : ''}${maxed ? ' maxed' : ''}`}
                  onClick={() => toggleTag(tag)} disabled={maxed}>{translateTag(tag, t)}</button>
              );
            })}
          </div>
        </div>

        <div className="dest-form-section">
          <div className="dest-form-section-label">
            {t('destinationForm.placesLabel')} <span className="required">*</span>
            <span className="dest-form-section-hint">{places.length}/10</span>
          </div>

          {places.map((place, idx) => (
            <div key={idx} className="dest-form-place-block">
              <div className="dest-form-place-header">
                <span className="dest-form-place-num">{t('destinationForm.placeNum', { num: idx + 1 })}</span>
                <button type="button" className="dest-form-place-remove"
                  disabled={places.length === 1} onClick={() => removePlace(idx)}
                  title={places.length === 1 ? t('destinationForm.placeAtLeastOne') : t('destinationForm.placeRemove')}>✕</button>
              </div>
              <input className="dest-form-input" placeholder={t('destinationForm.placeNamePlaceholder')} value={place.name} maxLength={100}
                onChange={e => setPlaces(prev => prev.map((p, i) => i === idx ? { ...p, name: e.target.value } : p))}
              />
              <div className="dest-form-place-img-row">
                {compressingSlot === idx ? (
                  <div className="dest-form-place-compressing">
                    <div className="dest-form-spinner dest-form-spinner--small" /><span>{t('destinationForm.compressingInProgress')}</span>
                  </div>
                ) : place.preview ? (
                  <div className="dest-form-img-preview-wrap">
                    <img src={place.preview} className="dest-form-img-preview dest-form-img-preview--small dest-form-cover-img--clickable" alt="" onClick={() => setLightboxUrl(place.preview)} />
                    {!submitting && (
                      <>
                        <button type="button" className="dest-form-img-remove"
                          onClick={() => setPlaces(prev => prev.map((p, i) => i === idx ? { ...p, file: null, preview: null, url: null } : p))}>✕</button>
                        <label className="dest-form-place-img-change" title={t('destinationForm.changePhotoTitle')}>
                          📷
                          <input type="file" accept="image/*" style={{ display: 'none' }}
                            onChange={e => handlePlaceImage(e, idx)} disabled={isCompressing} />
                        </label>
                      </>
                    )}
                  </div>
                ) : (
                  <label className={`dest-form-img-btn dest-form-img-btn--small${isCompressing ? ' disabled' : ''}`}>
                    {t('destinationForm.addPhotoButton')}
                    <input type="file" accept="image/*" style={{ display: 'none' }}
                      onChange={e => handlePlaceImage(e, idx)} disabled={isCompressing} />
                  </label>
                )}
              </div>
            </div>
          ))}

          <button type="button"
            className={`dest-form-add-place-btn${places.length >= 10 ? ' disabled' : ''}`}
            disabled={places.length >= 10} onClick={addPlace}>
            {places.length >= 10 ? t('destinationForm.addPlaceButtonMax') : t('destinationForm.addPlaceButton')}
          </button>
        </div>

        {uploadProgress && (
          <div className="dest-form-section dest-form-progress">
            <div className="dest-form-progress-track">
              <div className="dest-form-progress-fill" style={{ width: `${(uploadProgress.done / uploadProgress.total) * 100}%` }} />
            </div>
            <span>{t('destinationForm.uploading', { done: uploadProgress.done, total: uploadProgress.total })}</span>
          </div>
        )}

        {triedSubmit && error && (
          <div className="dest-form-error">
            <span className="dest-form-error-icon">⚠</span>
            <span>{error}</span>
          </div>
        )}
      </div>

      <div className="dest-form-footer">
        <button type="button" className="dest-form-cancel-btn" onClick={onCancel}>{t('destinationForm.cancelButton')}</button>
        <button type="submit" className="dest-form-submit-btn" disabled={!isValid || submitting || isCompressing}>
          {submitting ? t('destinationForm.publishing') : existingDestination ? t('destinationForm.updateButton') : t('destinationForm.publishButton')}
        </button>
      </div>
    </form>
    </>
  );
}
