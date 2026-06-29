import { useState, useRef } from "react";
import imageCompression from "browser-image-compression";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

const AVAILABLE_TAGS = [
  'Histoire', 'Culture', 'Nature', 'Architecture', 'Gastronomie',
  'Shopping', 'Art', 'Plage', 'Montagne', 'Temples', 'UNESCO',
  'Tradition', 'Modernité', 'Aventure', 'Randonnée', 'Détente',
  'Spiritualité', 'Musées', 'Famille', 'Luxe', 'Ruines',
  'Nightlife', 'Panorama', 'Rural', 'Ville',
];

export default function DestinationForm({ countryCode, existingDestination, onSuccess, onCancel }) {
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
  // null | 'dest' | number (index du lieu)
  const [compressingSlot, setCompressingSlot] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [error, setError] = useState('');
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState(null);
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
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = '';
    setCompressingSlot('dest');
    const compressed = await imageCompression(file, { maxSizeMB: 0.5, maxWidthOrHeight: 1200, useWebWorker: true });
    setDestImage({ file: compressed, preview: URL.createObjectURL(compressed), url: null });
    setCompressingSlot(null);
  }

  async function handlePlaceImage(e, idx) {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = '';
    setCompressingSlot(idx);
    const compressed = await imageCompression(file, { maxSizeMB: 0.3, maxWidthOrHeight: 800, useWebWorker: true });
    setPlaces(prev => prev.map((p, i) =>
      i === idx ? { ...p, file: compressed, preview: URL.createObjectURL(compressed), url: null } : p
    ));
    setCompressingSlot(null);
  }

  function addPlace() {
    if (places.length >= 10) return;
    setPlaces(prev => [...prev, { id: null, name: '', file: null, preview: null, url: null }]);
    setTimeout(() => {
      formBodyRef.current?.scrollTo({ top: formBodyRef.current.scrollHeight, behavior: 'smooth' });
    }, 50);
  }

  function removePlace(idx) {
    setPlaces(prev => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTriedSubmit(true);
    if (!isValid) {
      setError('Merci de renseigner le nom, la description, une photo de couverture et au moins un lieu avec photo.');
      return;
    }
    setSubmitting(true);
    setError('');

    const needsDestUpload = !!destImage.file;
    const placeUploads = places.filter(p => !!p.file);
    const totalUploads = (needsDestUpload ? 1 : 0) + placeUploads.length;
    let doneUploads = 0;
    if (totalUploads > 0) setUploadProgress({ done: 0, total: totalUploads });

    const uploadedPaths = [];

    async function cleanupAndFail(msg) {
      if (uploadedPaths.length) await supabase.storage.from('destination-photos').remove(uploadedPaths);
      setError(msg || "Une erreur est survenue. Vérifiez votre connexion et réessayez."); setSubmitting(false); setUploadProgress(null);
    }

    let finalDestUrl = destImage.url;
    if (destImage.file) {
      const path = `destinations/${user.id}/${countryCode}_dest_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      const { error: upErr } = await supabase.storage.from('destination-photos').upload(path, destImage.file);
      if (upErr) { await cleanupAndFail("Impossible d'envoyer la photo de couverture. Vérifiez votre connexion et réessayez."); return; }
      uploadedPaths.push(path);
      finalDestUrl = supabase.storage.from('destination-photos').getPublicUrl(path).data.publicUrl;
      doneUploads++;
      setUploadProgress({ done: doneUploads, total: totalUploads });
    }

    const finalPlaces = [];
    for (const [idx, place] of places.entries()) {
      let finalUrl = place.url;
      if (place.file) {
        const path = `places/${user.id}/${countryCode}_place_${idx}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
        const { error: upErr } = await supabase.storage.from('destination-photos').upload(path, place.file);
        if (upErr) { await cleanupAndFail(`Impossible d'envoyer la photo du lieu ${idx + 1}. Vérifiez votre connexion et réessayez.`); return; }
        uploadedPaths.push(path);
        finalUrl = supabase.storage.from('destination-photos').getPublicUrl(path).data.publicUrl;
        doneUploads++;
        setUploadProgress({ done: doneUploads, total: totalUploads });
      }
      finalPlaces.push({ name: place.name.trim(), image_url: finalUrl, sort_order: idx });
    }
    setUploadProgress(null);

    if (!existingDestination) {
      const { data: newDest, error: insErr } = await supabase
        .from('user_destinations')
        .insert({ user_id: user.id, country_code: countryCode, name: name.trim(), description: description.trim(), image_url: finalDestUrl, tags })
        .select('id')
        .single();
      if (insErr) { await cleanupAndFail("La destination n'a pas pu être créée. Vérifiez votre connexion et réessayez."); return; }
      const { error: placesErr } = await supabase.from('destination_places').insert(
        finalPlaces.map(p => ({ ...p, destination_id: newDest.id }))
      );
      if (placesErr) { await cleanupAndFail("Les lieux n'ont pas pu être enregistrés. Vérifiez votre connexion et réessayez."); return; }
      onSuccess({
        id: newDest.id, user_id: user.id, country_code: countryCode,
        name: name.trim(), description: description.trim(), image_url: finalDestUrl,
        tags, isUserDest: true, created_at: new Date().toISOString(),
        destination_places: finalPlaces.map((p, i) => ({ id: `tmp_${i}`, destination_id: newDest.id, ...p })),
      });
    } else {
      const { error: updErr } = await supabase
        .from('user_destinations')
        .update({ name: name.trim(), description: description.trim(), image_url: finalDestUrl, updated_at: new Date().toISOString(), tags })
        .eq('id', existingDestination.id);
      if (updErr) { await cleanupAndFail("Les modifications n'ont pas pu être enregistrées. Vérifiez votre connexion et réessayez."); return; }
      await supabase.from('destination_places').delete().eq('destination_id', existingDestination.id);
      const { error: placesErr } = await supabase.from('destination_places').insert(
        finalPlaces.map(p => ({ ...p, destination_id: existingDestination.id }))
      );
      if (placesErr) { await cleanupAndFail("Les lieux n'ont pas pu être mis à jour. Vérifiez votre connexion et réessayez."); return; }
      onSuccess({
        ...existingDestination,
        name: name.trim(), description: description.trim(), image_url: finalDestUrl,
        tags, updated_at: new Date().toISOString(),
        destination_places: finalPlaces.map((p, i) => ({ id: `tmp_${i}`, destination_id: existingDestination.id, ...p })),
      });
    }
  }

  return (
    <>
    {lightboxUrl && (
      <div className="dest-lightbox" onClick={() => setLightboxUrl(null)}>
        <img src={lightboxUrl} className="dest-lightbox-img" alt="Aperçu" onClick={e => e.stopPropagation()} />
        <button className="dest-lightbox-close" onClick={() => setLightboxUrl(null)}>✕</button>
      </div>
    )}
    <form className="dest-form" onSubmit={handleSubmit}>

      {/* Header sticky */}
      <div className="dest-form-header">
        <span className="dest-form-header-title">
          {existingDestination ? 'Modifier la destination' : 'Nouvelle destination'}
        </span>
        <button type="button" className="dest-form-header-close" onClick={onCancel}>✕</button>
      </div>

      {/* Body scrollable */}
      <div className="dest-form-body" ref={formBodyRef}>

        {/* Photo de couverture */}
        <div className="dest-form-cover-section">
          {destImage.preview ? (
            <div className="dest-form-cover-preview">
              <img src={destImage.preview} alt="Couverture" className="dest-form-cover-img dest-form-cover-img--clickable" onClick={() => setLightboxUrl(destImage.preview)} />
              {compressingSlot === 'dest' && (
                <div className="dest-form-cover-loading">
                  <div className="dest-form-spinner" />
                  <span>Compression…</span>
                </div>
              )}
              {!submitting && compressingSlot !== 'dest' && (
                <>
                  <label className="dest-form-cover-change">
                    📷 Changer
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
                <><div className="dest-form-spinner" /><span>Compression en cours…</span></>
              ) : (
                <>
                  <span className="dest-form-cover-icon">🖼</span>
                  <span className="dest-form-cover-hint">Photo de couverture <span className="required">*</span></span>
                  <span className="dest-form-cover-sub">Cliquez pour choisir une image</span>
                </>
              )}
              <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleDestImage} disabled={isCompressing} />
            </label>
          )}
        </div>

        {/* Nom + Description */}
        <div className="dest-form-section">
          <input
            className="dest-form-name-input"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nom de la destination *"
            maxLength={100}
          />
          <div className="dest-form-desc-wrap">
            <textarea
              className="dest-form-desc-input"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Décrivez cette destination…"
              rows={4}
              maxLength={2000}
            />
            <span className="dest-form-counter">{description.length}/2000</span>
          </div>
        </div>

        {/* Tags */}
        <div className="dest-form-section">
          <div className="dest-form-section-label">
            Tags
            <span className="dest-form-section-hint">
              {tags.length === 0 ? '7 maximum' : `${tags.length} / 7 maximum`}
            </span>
          </div>
          <div className="dest-form-tags-grid">
            {AVAILABLE_TAGS.map(tag => {
              const selected = tags.includes(tag);
              const maxed = tags.length >= 7 && !selected;
              return (
                <button
                  key={tag}
                  type="button"
                  className={`dest-form-tag-pill${selected ? ' selected' : ''}${maxed ? ' maxed' : ''}`}
                  onClick={() => toggleTag(tag)}
                  disabled={maxed}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lieux */}
        <div className="dest-form-section">
          <div className="dest-form-section-label">
            Lieux à visiter <span className="required">*</span>
            <span className="dest-form-section-hint">{places.length}/10</span>
          </div>

          {places.map((place, idx) => (
            <div key={idx} className="dest-form-place-block">
              <div className="dest-form-place-header">
                <span className="dest-form-place-num">Lieu {idx + 1}</span>
                <button
                  type="button"
                  className="dest-form-place-remove"
                  disabled={places.length === 1}
                  onClick={() => removePlace(idx)}
                  title={places.length === 1 ? "Au moins un lieu requis" : "Retirer ce lieu"}
                >✕</button>
              </div>
              <input
                className="dest-form-input"
                placeholder="Nom du lieu *"
                value={place.name}
                maxLength={100}
                onChange={e => setPlaces(prev => prev.map((p, i) => i === idx ? { ...p, name: e.target.value } : p))}
              />
              <div className="dest-form-place-img-row">
                {compressingSlot === idx ? (
                  <div className="dest-form-place-compressing">
                    <div className="dest-form-spinner dest-form-spinner--small" />
                    <span>Compression en cours…</span>
                  </div>
                ) : place.preview ? (
                  <div className="dest-form-img-preview-wrap">
                    <img src={place.preview} className="dest-form-img-preview dest-form-img-preview--small dest-form-cover-img--clickable" alt="" onClick={() => setLightboxUrl(place.preview)} />
                    {!submitting && (
                      <>
                        <button type="button" className="dest-form-img-remove"
                          onClick={() => setPlaces(prev => prev.map((p, i) => i === idx ? { ...p, file: null, preview: null, url: null } : p))}>✕</button>
                        <label className="dest-form-place-img-change" title="Changer la photo">
                          📷
                          <input type="file" accept="image/*" style={{ display: 'none' }}
                            onChange={e => handlePlaceImage(e, idx)} disabled={isCompressing} />
                        </label>
                      </>
                    )}
                  </div>
                ) : (
                  <label className={`dest-form-img-btn dest-form-img-btn--small${isCompressing ? ' disabled' : ''}`}>
                    📷 Ajouter une photo *
                    <input type="file" accept="image/*" style={{ display: 'none' }}
                      onChange={e => handlePlaceImage(e, idx)} disabled={isCompressing} />
                  </label>
                )}
              </div>
            </div>
          ))}

          <button
            type="button"
            className={`dest-form-add-place-btn${places.length >= 10 ? ' disabled' : ''}`}
            disabled={places.length >= 10}
            onClick={addPlace}
          >
            ＋ Ajouter un lieu{places.length >= 10 ? ' (max atteint)' : ''}
          </button>
        </div>

        {uploadProgress && (
          <div className="dest-form-section dest-form-progress">
            <div className="dest-form-progress-track">
              <div className="dest-form-progress-fill"
                style={{ width: `${(uploadProgress.done / uploadProgress.total) * 100}%` }} />
            </div>
            <span>Envoi… {uploadProgress.done}/{uploadProgress.total}</span>
          </div>
        )}

        {triedSubmit && error && (
          <div className="dest-form-error">
            <span className="dest-form-error-icon">⚠</span>
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Footer sticky */}
      <div className="dest-form-footer">
        <button type="button" className="dest-form-cancel-btn" onClick={onCancel}>Annuler</button>
        <button
          type="submit"
          className="dest-form-submit-btn"
          disabled={!isValid || submitting || isCompressing}
        >
          {submitting ? 'Publication…' : existingDestination ? 'Mettre à jour' : 'Publier →'}
        </button>
      </div>
    </form>
    </>
  );
}
