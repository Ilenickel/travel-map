import { useState } from 'react';
import PlaceSearchInput from './PlaceSearchInput';
import { formatDateShort, lodgingNights, formatPrice } from '../../lib/planningUtils';
import { useAttachmentsCount } from '../../context/AttachmentsCountContext';
import AttachmentsPanel from './AttachmentsPanel';

// Normalise un lien de réservation saisi à la main : on n'accepte que du
// http(s) — un "javascript:..." collé (même par accident) ne doit jamais
// devenir un lien cliquable — et on préfixe https:// si l'utilisateur a collé
// "booking.com/..." sans schéma.
function sanitizeBookingUrl(raw) {
  const val = (raw || '').trim();
  if (!val) return null;
  if (/^https?:\/\//i.test(val)) return val;
  if (/^[a-z][a-z0-9+.-]*:/i.test(val)) return null; // autre schéma : refusé
  return `https://${val}`;
}

function LodgingForm({ initial, cityName, tripStartDate, tripEndDate, onSave, onCancel }) {
  const [name, setName] = useState(initial?.name || '');
  const [address, setAddress] = useState(initial?.address || '');
  const [placeLat, setPlaceLat] = useState(initial?.place_lat ?? null);
  const [placeLng, setPlaceLng] = useState(initial?.place_lng ?? null);
  const [checkIn, setCheckIn] = useState(initial?.check_in || '');
  const [checkOut, setCheckOut] = useState(initial?.check_out || '');
  const [price, setPrice] = useState(initial?.price ?? '');
  const [bookingUrl, setBookingUrl] = useState(initial?.booking_url || '');
  const [notes, setNotes] = useState(initial?.notes || '');
  const [dateError, setDateError] = useState(false);
  // En création, le nom passe par la recherche géolocalisée (pour récupérer
  // adresse et coordonnées d'un coup). En édition, un simple champ texte pour
  // ne pas imposer de re-rechercher pour une simple faute de frappe — mais si
  // l'adresse est modifiée à la main, les coordonnées d'origine ne
  // correspondent plus forcément : `coordsStale` le retient, pour ne jamais
  // enregistrer un marqueur qui pointerait vers l'ancienne adresse. Un lien
  // permet de rouvrir la recherche à la demande pour les récupérer à nouveau.
  const isCreate = !initial;
  const [coordsStale, setCoordsStale] = useState(false);
  const [showResearch, setShowResearch] = useState(false);

  const handlePlacePick = (place) => {
    setName(place.name);
    setAddress(place.address || '');
    setPlaceLat(place.lat ?? null);
    setPlaceLng(place.lng ?? null);
    setCoordsStale(false);
    setShowResearch(false);
  };

  const handleAddressChange = (val) => {
    setAddress(val);
    if (!isCreate && placeLat != null) setCoordsStale(true);
  };

  const save = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    if (checkIn && checkOut && checkOut < checkIn) { setDateError(true); return; }
    // Prix : le min="0" de l'input ne bloque pas une saisie clavier négative
    const parsedPrice = price === '' ? null : Math.max(0, parseFloat(price) || 0);
    onSave({
      name: trimmed,
      address: address.trim() || null,
      // Adresse modifiée à la main sans repasser par la recherche : mieux vaut
      // ne plus avoir de marqueur du tout qu'un marqueur à la mauvaise adresse.
      place_lat: coordsStale ? null : placeLat,
      place_lng: coordsStale ? null : placeLng,
      check_in: checkIn || null,
      check_out: checkOut || null,
      price: parsedPrice,
      booking_url: sanitizeBookingUrl(bookingUrl),
      notes: notes.trim() || null,
    });
  };

  return (
    <div className="pp-lodging-form">
      {isCreate || showResearch ? (
        <PlaceSearchInput
          cityHint={cityName}
          onSelect={handlePlacePick}
          onManualAdd={n => setName(n)}
          placeholder={`Chercher l'hôtel/logement à ${cityName}… (Entrée pour saisir tel quel)`}
          autoFocus={showResearch}
        />
      ) : null}
      <input
        className="pp-lodging-name-input"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nom de l'hébergement"
        onKeyDown={e => e.key === 'Enter' && save()}
      />
      <input
        className="pp-lodging-addr-input"
        value={address}
        onChange={e => handleAddressChange(e.target.value)}
        placeholder="Adresse (remplie automatiquement via la recherche)"
      />
      {!isCreate && !showResearch && (
        coordsStale ? (
          <p className="pp-lodging-coords-warning">
            ⚠️ Adresse modifiée : le marqueur sur la carte sera retiré (les coordonnées ne correspondent plus).{' '}
            <button type="button" className="pp-lodging-research-link" onClick={() => setShowResearch(true)}>
              Rechercher à nouveau pour le repositionner
            </button>
          </p>
        ) : (
          <button type="button" className="pp-lodging-research-link" onClick={() => setShowResearch(true)}>
            🔍 Rechercher à nouveau (pour changer la position sur la carte)
          </button>
        )
      )}
      <div className="pp-lodging-dates-row">
        <div className="pp-lodging-field">
          <label>Arrivée</label>
          <input
            type="date"
            value={checkIn}
            min={tripStartDate || undefined}
            max={checkOut || tripEndDate || undefined}
            onChange={e => { setCheckIn(e.target.value); setDateError(false); }}
          />
        </div>
        <div className="pp-lodging-field">
          <label>Départ</label>
          <input
            type="date"
            value={checkOut}
            min={checkIn || tripStartDate || undefined}
            max={tripEndDate || undefined}
            onChange={e => { setCheckOut(e.target.value); setDateError(false); }}
          />
        </div>
        <div className="pp-lodging-field pp-lodging-field--price">
          <label>Prix total</label>
          <div className="pp-lodging-price-wrap">
            <input
              type="number" min="0" step="0.01" placeholder="0"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            <span>€</span>
          </div>
        </div>
      </div>
      {dateError && (
        <p className="pp-lodging-date-error">La date de départ doit être postérieure ou égale à la date d'arrivée.</p>
      )}
      <input
        className="pp-lodging-url-input"
        type="url"
        value={bookingUrl}
        onChange={e => setBookingUrl(e.target.value)}
        placeholder="Lien de réservation (Booking, Airbnb…)"
      />
      <textarea
        className="pp-lodging-notes-input"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        placeholder="Note (n° de réservation, petit-déjeuner, code d'entrée…)"
        rows={2}
      />
      {!isCreate && <AttachmentsPanel tripId={initial.trip_id} lodgingId={initial.id} />}
      <div className="pp-activity-edit-actions">
        <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={save} disabled={!name.trim()}>
          Enregistrer
        </button>
        <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={onCancel}>Annuler</button>
      </div>
    </div>
  );
}

function LodgingCard({ lodging, cityName, tripStartDate, tripEndDate, onUpdate, onRemove }) {
  const [editing, setEditing] = useState(false);
  const nights = lodgingNights(lodging.check_in, lodging.check_out);
  const priceLabel = formatPrice(lodging.price);
  const { count: attachmentCount } = useAttachmentsCount(lodging.id);

  if (editing) {
    return (
      <div className="pp-lodging-card pp-activity--editing">
        <LodgingForm
          initial={lodging}
          cityName={cityName}
          tripStartDate={tripStartDate}
          tripEndDate={tripEndDate}
          onSave={fields => { onUpdate(lodging.id, fields); setEditing(false); }}
          onCancel={() => setEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className="pp-lodging-card" onClick={() => setEditing(true)} role="button" tabIndex={0}>
      <span className="pp-lodging-icon">🏨</span>
      <div className="pp-lodging-content">
        <div className="pp-lodging-title-row">
          <span className="pp-lodging-name">{lodging.name}</span>
          {lodging.booking_url && (
            <a
              className="pp-lodging-link"
              href={lodging.booking_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              title="Ouvrir le lien de réservation"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
              Réservation
            </a>
          )}
        </div>
        <div className="pp-lodging-chips">
          {lodging.check_in && lodging.check_out ? (
            <span className="pp-chip pp-chip--lodging-dates">
              📅 {formatDateShort(lodging.check_in)} → {formatDateShort(lodging.check_out)}
              {nights ? ` · ${nights} nuit${nights > 1 ? 's' : ''}` : ''}
            </span>
          ) : (
            <span className="pp-chip pp-chip--lodging-nodates">📅 Dates à définir</span>
          )}
        </div>
        {(priceLabel || attachmentCount > 0) && (
          <div className="pp-meta-line">
            {priceLabel && <span className="pp-meta-item pp-meta-item--price"><span className="pp-meta-icon">💰</span> {priceLabel}</span>}
            {attachmentCount > 0 && (
              <span className="pp-meta-item" title={`${attachmentCount} pièce${attachmentCount > 1 ? 's' : ''} jointe${attachmentCount > 1 ? 's' : ''}`}>
                <span className="pp-meta-icon">📎</span> {attachmentCount}
              </span>
            )}
          </div>
        )}
        {lodging.address && <p className="pp-lodging-addr">📍 {lodging.address}</p>}
        {lodging.notes && <p className="pp-lodging-notes">{lodging.notes}</p>}
      </div>
      <button
        className="pp-activity-del"
        onClick={e => { e.stopPropagation(); onRemove(lodging.id); }}
        title="Supprimer cet hébergement"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
  );
}

export default function LodgingSection({
  city, lodgings, tripId, tripStartDate, tripEndDate,
  onAddLodging, onUpdateLodging, onRemoveLodging,
}) {
  const [adding, setAdding] = useState(false);
  const cityLodgings = (lodgings || [])
    .filter(l => l.city_id === city.id)
    .sort((a, b) => (a.check_in || '9999').localeCompare(b.check_in || '9999') || a.position - b.position);

  return (
    // --empty : sans hébergement, la section se réduit au bouton d'ajout — le
    // filet indenté (marge + bordure pointillée) n'encadrerait rien et
    // décalerait ce bouton par rapport aux autres boutons d'ajout de la ville.
    <div className={`pp-lodgings-section${cityLodgings.length === 0 && !adding ? ' pp-lodgings-section--empty' : ''}`}>
      {cityLodgings.length > 0 && (
        <>
          <div className="pp-lodgings-section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
            </svg>
            Hébergements <span>({cityLodgings.length})</span>
          </div>
          <div className="pp-lodgings-list">
            {cityLodgings.map(l => (
              <LodgingCard
                key={l.id}
                lodging={l}
                cityName={city.name}
                tripStartDate={tripStartDate}
                tripEndDate={tripEndDate}
                onUpdate={onUpdateLodging}
                onRemove={onRemoveLodging}
              />
            ))}
          </div>
        </>
      )}

      {adding ? (
        <div className="pp-lodging-card pp-activity--editing">
          <LodgingForm
            cityName={city.name}
            tripStartDate={tripStartDate}
            tripEndDate={tripEndDate}
            onSave={fields => { onAddLodging(tripId, city.id, fields); setAdding(false); }}
            onCancel={() => setAdding(false)}
          />
        </div>
      ) : (
        <button className="pp-add-item-btn pp-add-lodging-btn" onClick={() => setAdding(true)}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
          </svg>
          Ajouter un hébergement
        </button>
      )}
    </div>
  );
}
