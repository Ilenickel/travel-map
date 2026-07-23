import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import PlaceSearchInput from './PlaceSearchInput';
import { formatDateShort, lodgingNights, formatPrice } from '../../lib/planningUtils';
import { CURRENCY_SYMBOLS, eurToInputValue, inputValueToEur } from '../../lib/currency';
import { useSettings } from '../../context/SettingsContext';
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
  const { t } = useTranslation();
  // Prix stocké en EUR mais saisi dans la devise d'affichage choisie
  // (voir src/lib/currency.js).
  const { currency } = useSettings();
  const [name, setName] = useState(initial?.name || '');
  const [address, setAddress] = useState(initial?.address || '');
  const [placeLat, setPlaceLat] = useState(initial?.place_lat ?? null);
  const [placeLng, setPlaceLng] = useState(initial?.place_lng ?? null);
  const [checkIn, setCheckIn] = useState(initial?.check_in || '');
  const [checkOut, setCheckOut] = useState(initial?.check_out || '');
  const [price, setPrice] = useState(eurToInputValue(initial?.price));
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
    const parsedPrice = price === '' ? null : inputValueToEur(Math.max(0, parseFloat(price) || 0));
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
          placeholder={t('lodging.searchPlaceholder', { city: cityName })}
          autoFocus={showResearch}
        />
      ) : null}
      <input
        className="pp-lodging-name-input"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={t('lodging.namePlaceholder')}
        onKeyDown={e => e.key === 'Enter' && save()}
      />
      <input
        className="pp-lodging-addr-input"
        value={address}
        onChange={e => handleAddressChange(e.target.value)}
        placeholder={t('lodging.addressPlaceholder')}
      />
      {!isCreate && !showResearch && (
        coordsStale ? (
          <p className="pp-lodging-coords-warning">
            {t('lodging.coordsStaleWarning')}{' '}
            <button type="button" className="pp-lodging-research-link" onClick={() => setShowResearch(true)}>
              {t('lodging.researchLinkReposition')}
            </button>
          </p>
        ) : (
          <button type="button" className="pp-lodging-research-link" onClick={() => setShowResearch(true)}>
            {t('lodging.researchLinkChange')}
          </button>
        )
      )}
      <div className="pp-lodging-dates-row">
        <div className="pp-lodging-field">
          <label>{t('lodging.checkInLabel')}</label>
          <input
            type="date"
            value={checkIn}
            min={tripStartDate || undefined}
            max={checkOut || tripEndDate || undefined}
            onChange={e => { setCheckIn(e.target.value); setDateError(false); }}
          />
        </div>
        <div className="pp-lodging-field">
          <label>{t('lodging.checkOutLabel')}</label>
          <input
            type="date"
            value={checkOut}
            min={checkIn || tripStartDate || undefined}
            max={tripEndDate || undefined}
            onChange={e => { setCheckOut(e.target.value); setDateError(false); }}
          />
        </div>
        <div className="pp-lodging-field pp-lodging-field--price">
          <label>{t('lodging.totalPriceLabel')}</label>
          <div className="pp-lodging-price-wrap">
            <input
              type="number" min="0" step="0.01" placeholder="0"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            <span>{CURRENCY_SYMBOLS[currency]}</span>
          </div>
        </div>
      </div>
      {dateError && (
        <p className="pp-lodging-date-error">{t('lodging.dateError')}</p>
      )}
      <input
        className="pp-lodging-url-input"
        type="url"
        value={bookingUrl}
        onChange={e => setBookingUrl(e.target.value)}
        placeholder={t('lodging.bookingUrlPlaceholder')}
      />
      <textarea
        className="pp-lodging-notes-input"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        placeholder={t('lodging.notesPlaceholder')}
        rows={2}
      />
      {!isCreate && <AttachmentsPanel tripId={initial.trip_id} lodgingId={initial.id} />}
      <div className="pp-activity-edit-actions">
        <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={save} disabled={!name.trim()}>
          {t('common:actions.save')}
        </button>
        <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={onCancel}>{t('common:actions.cancel')}</button>
      </div>
    </div>
  );
}

function LodgingCard({ lodging, cityName, tripStartDate, tripEndDate, onUpdate, onRemove }) {
  const { t } = useTranslation();
  useSettings(); // abonnement devise : formatPrice dépend de la devise choisie
  const [editing, setEditing] = useState(false);
  const nights = lodgingNights(lodging.check_in, lodging.check_out);
  const priceLabel = formatPrice(lodging.price);
  const { count: attachmentCount } = useAttachmentsCount(lodging.id);

  return (
    <>
    {editing && createPortal(
      <div className="pp-modal-overlay" onClick={(e) => e.target === e.currentTarget && setEditing(false)}>
        <div className="pp-modal pp-activity-edit-modal">
          <LodgingForm
            initial={lodging}
            cityName={cityName}
            tripStartDate={tripStartDate}
            tripEndDate={tripEndDate}
            onSave={fields => { onUpdate(lodging.id, fields); setEditing(false); }}
            onCancel={() => setEditing(false)}
          />
        </div>
      </div>,
      document.body
    )}
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
              title={t('lodging.openBookingTitle')}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
              {t('lodging.bookingLinkLabel')}
            </a>
          )}
        </div>
        <div className="pp-lodging-chips">
          {lodging.check_in && lodging.check_out ? (
            <span className="pp-chip pp-chip--lodging-dates">
              📅 {formatDateShort(lodging.check_in)} → {formatDateShort(lodging.check_out)}
              {nights ? ` · ${t('lodging.nights', { count: nights })}` : ''}
            </span>
          ) : (
            <span className="pp-chip pp-chip--lodging-nodates">{t('lodging.datesUndefined')}</span>
          )}
        </div>
        {(priceLabel || attachmentCount > 0) && (
          <div className="pp-meta-line">
            {priceLabel && <span className="pp-meta-item pp-meta-item--price"><span className="pp-meta-icon">💰</span> {priceLabel}</span>}
            {attachmentCount > 0 && (
              <span className="pp-meta-item" title={t('activity.attachmentCount', { count: attachmentCount })}>
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
        title={t('lodging.deleteTitle')}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
    </>
  );
}

// L'état "ajout en cours" est piloté par le parent (menu "+ Ajouter" de
// CityBlock / DaytripCard) via `adding`/`onCloseAdd` : la section n'a plus de
// bouton d'ajout propre, elle disparaît complètement quand elle est vide.
export default function LodgingSection({
  city, lodgings, tripId, tripStartDate, tripEndDate, adding = false, onCloseAdd,
  onAddLodging, onUpdateLodging, onRemoveLodging,
}) {
  const { t } = useTranslation();
  const cityLodgings = (lodgings || [])
    .filter(l => l.city_id === city.id)
    .sort((a, b) => (a.check_in || '9999').localeCompare(b.check_in || '9999') || a.position - b.position);

  if (cityLodgings.length === 0 && !adding) return null;

  return (
    <div className="pp-lodgings-section">
      {cityLodgings.length > 0 && (
        <>
          <div className="pp-lodgings-section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
            </svg>
            {t('lodging.sectionLabel')} <span>({cityLodgings.length})</span>
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

      {adding && (
        <div className="pp-lodging-card pp-activity--editing">
          <LodgingForm
            cityName={city.name}
            tripStartDate={tripStartDate}
            tripEndDate={tripEndDate}
            onSave={fields => { onAddLodging(tripId, city.id, fields); onCloseAdd(); }}
            onCancel={onCloseAdd}
          />
        </div>
      )}
    </div>
  );
}
