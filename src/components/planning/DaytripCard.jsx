import { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import ActivityItem from './ActivityItem';
import PlaceSearchInput from './PlaceSearchInput';
import TrajetAddInput from './TrajetAddInput';
import LodgingSection from './LodgingSection';
import AddMenu from './AddMenu';
import SelectionActionBar from './SelectionActionBar';
import { getDaysBetween, formatDateShort, sumCosts, formatPrice } from '../../lib/planningUtils';
import { NATIVE_DAYTRIP_DRAG_TYPE } from './DayView';
import { useSettings } from '../../context/SettingsContext';
import { useScrollIntoViewOnOpen } from '../../hooks/useScrollIntoViewOnOpen';

function DayDropdown({ tripStartDate, tripEndDate, onSelect, onClose }) {
  const { t } = useTranslation();
  const days = getDaysBetween(tripStartDate, tripEndDate);
  // `true` constant : ce composant n'est monté QUE quand le dropdown est
  // ouvert (voir showDays côté parent) — son montage EST l'ouverture, l'effet
  // du hook (dépendance [isOpen]) se déclenche donc une fois, au montage.
  const dropdownRef = useScrollIntoViewOnOpen(true);
  return (
    <div className="pp-group-day-dropdown" ref={dropdownRef}>
      {days.length === 0 ? (
        <div className="pp-group-day-empty">{t('day.addDatesTitle')}</div>
      ) : (
        days.map((d, i) => (
          <button key={d} className="pp-group-day-opt" onClick={() => { onSelect(d); onClose(); }}>
            <span className="pp-group-day-num">{t('day.short', { n: i + 1 })}</span>
            <span>{formatDateShort(d)}</span>
          </button>
        ))
      )}
    </div>
  );
}

export default function DaytripCard({
  city, activities, groups, lodgings, tripId, tripStartDate, tripEndDate,
  onRemove, onRename, onAddActivity, onRemoveActivity, onRemoveActivities, onUpdateActivity, onDuplicateActivity,
  onAssignActivityToGroup, onAssignActivitiesToGroup, onAssignActivitiesToDay, onAssignCityToDay,
  onAddLodging, onUpdateLodging, onRemoveLodging,
}) {
  const [addingPlace, setAddingPlace] = useState(false);
  const [addingTrajet, setAddingTrajet] = useState(false);
  const [addingLodging, setAddingLodging] = useState(false);
  const [editing, setEditing] = useState(false);
  const [cityName, setCityName] = useState(city.name);
  const [collapsed, setCollapsed] = useState(false);
  const [showDays, setShowDays] = useState(false);
  // Menu "⋯" consolidé (même pattern que CityMenu.jsx) : les 4 icônes d'action
  // séparées vivaient directement dans .pp-city-actions, MASQUÉES par défaut
  // (opacity:0, même classe que CityBlock) mais jamais révélées ici — la règle
  // CSS qui les révèle au survol ne cible que .pp-city:hover, pas
  // .pp-daytrip:hover : sur PC comme sur mobile, elles étaient donc soit
  // invisibles (PC), soit permanentes sans lien avec les villes (tactile),
  // jamais cohérentes avec le menu consolidé des villes de base.
  const [menuOpen, setMenuOpen] = useState(false);
  const menuDropdownRef = useScrollIntoViewOnOpen(menuOpen);
  // Sélection multiple (lieux uniquement) — même mécanique que CityBlock.jsx.
  const [selecting, setSelecting] = useState(false);
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const { t } = useTranslation();
  useSettings(); // abonnement devise : formatPrice dépend de la devise choisie

  const dtActivities = activities
    .filter(a => a.city_id === city.id)
    .sort((a, b) => a.position - b.position);
  const dtPlaces = dtActivities.filter(a => a.category !== 'transport');
  const dtTrajets = dtActivities.filter(a => a.category === 'transport');
  const dtCost = sumCosts(dtActivities);

  const saveRename = () => {
    const trimmed = cityName.trim();
    if (trimmed && trimmed !== city.name) onRename(city.id, { name: trimmed });
    else setCityName(city.name);
    setEditing(false);
  };

  const handlePlaceSelect = (place) => {
    onAddActivity(tripId, city.id, place.name, {
      place_lat: place.lat,
      place_lng: place.lng,
      place_address: place.address || null,
    });
    setAddingPlace(false);
  };

  const handleManualAdd = (name) => {
    onAddActivity(tripId, city.id, name, {});
    setAddingPlace(false);
  };

  const toggleSelecting = () => {
    setSelecting(s => !s);
    setSelectedIds(new Set());
  };

  const toggleSelected = (actId) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(actId)) next.delete(actId); else next.add(actId);
      return next;
    });
  };

  const validSelectedIds = dtPlaces.filter(a => selectedIds.has(a.id)).map(a => a.id);

  const handleAssignGroup = (groupId) => {
    if (validSelectedIds.length) onAssignActivitiesToGroup(validSelectedIds, groupId);
  };

  const handleAssignDay = (date) => {
    if (validSelectedIds.length) onAssignActivitiesToDay(validSelectedIds, date);
  };

  const handleDeleteSelection = () => {
    if (validSelectedIds.length) onRemoveActivities(validSelectedIds);
    setSelecting(false);
    setSelectedIds(new Set());
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div className="pp-daytrip">
      <div
        className="pp-daytrip-header"
        draggable={!editing}
        onClick={() => setCollapsed(c => !c)}
        onDragStart={e => {
          e.dataTransfer.setData(NATIVE_DAYTRIP_DRAG_TYPE, city.id);
          e.dataTransfer.effectAllowed = 'move';
        }}
        title={collapsed ? t('daytrip.expandTitle') : t('daytrip.collapseTitle')}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="pp-daytrip-icon">
          <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
        </svg>

        {editing ? (
          <input
            className="pp-city-name-input"
            value={cityName}
            onChange={e => setCityName(e.target.value)}
            onBlur={saveRename}
            onClick={stop}
            onKeyDown={e => { if (e.key === 'Enter') saveRename(); if (e.key === 'Escape') { setCityName(city.name); setEditing(false); } }}
            autoFocus
          />
        ) : (
          <span className="pp-daytrip-name-wrap">
            <span className="pp-daytrip-name" onDoubleClick={e => { stop(e); setEditing(true); }}>{city.name}</span>
            <span className="pp-daytrip-badge">{t('daytrip.badge')}</span>
          </span>
        )}

        {dtCost != null && (
          <span className="pp-city-cost" title={t('daytrip.costTitle', { city: city.name })}>
            💰 {formatPrice(dtCost)}
          </span>
        )}

        <span className="pp-city-count">
          {t('place.count', { count: dtPlaces.length })}
          <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" style={{ transform: collapsed ? 'rotate(-90deg)' : 'none', transition: 'transform .15s', marginLeft: 3 }}>
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </span>

        {/* Menu unique remplaçant les icônes d'action séparées — même pattern
            que CityMenu.jsx (voir CityBlock), pour une cohérence visuelle
            entre villes de base et excursions. */}
        <div className="pp-city-menu-wrap" onClick={stop}>
          <button
            type="button"
            className={`pp-icon-btn pp-city-menu-btn${menuOpen ? ' pp-icon-btn--active' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            title={t('daytrip.menuTitle')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
          {menuOpen && (
            <>
              <div className="pp-backdrop-overlay" onClick={() => setMenuOpen(false)} />
              <div className="pp-city-menu-dropdown" ref={menuDropdownRef}>
                {dtPlaces.length > 0 && (
                  <button
                    className="pp-dropdown-item"
                    onClick={() => { toggleSelecting(); setMenuOpen(false); }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {selecting ? t('place.exitSelectTitle') : t('place.selectTitle')}
                  </button>
                )}
                {dtActivities.length > 0 && (
                  <div style={{ position: 'relative' }}>
                    <button className="pp-dropdown-item" onClick={() => setShowDays(s => !s)}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                      </svg>
                      {t('daytrip.planOnDayTitle')}
                    </button>
                    {showDays && (
                      <>
                        <div className="pp-backdrop-overlay" onClick={() => setShowDays(false)} />
                        <DayDropdown
                          tripStartDate={tripStartDate}
                          tripEndDate={tripEndDate}
                          onSelect={date => { onAssignCityToDay(city.id, date); setMenuOpen(false); }}
                          onClose={() => setShowDays(false)}
                        />
                      </>
                    )}
                  </div>
                )}
                <button className="pp-dropdown-item" onClick={() => { setEditing(true); setMenuOpen(false); }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  </svg>
                  {t('daytrip.renameTitle')}
                </button>
                <button className="pp-dropdown-item pp-dropdown-item--danger" onClick={() => { onRemove(city.id); setMenuOpen(false); }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  </svg>
                  {t('daytrip.deleteTitle')}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {!collapsed && (
        <div className="pp-daytrip-body">
          {selecting && validSelectedIds.length > 0 && (
            <SelectionActionBar
              count={validSelectedIds.length}
              groups={groups}
              tripStartDate={tripStartDate}
              tripEndDate={tripEndDate}
              onAssignGroup={handleAssignGroup}
              onAssignDay={handleAssignDay}
              onDelete={handleDeleteSelection}
              onCancel={toggleSelecting}
            />
          )}
          <Droppable droppableId={`activities-${city.id}`}>
            {(provided, snapshot) => (
              <ul
                className={`pp-activities${snapshot.isDraggingOver ? ' pp-activities--over' : ''}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {dtPlaces.map((act, idx) => (
                  <ActivityItem
                    key={act.id}
                    act={act}
                    index={idx}
                    tripStartDate={tripStartDate}
                    groups={groups}
                    onRemove={onRemoveActivity}
                    onUpdate={onUpdateActivity}
                    onDuplicate={onDuplicateActivity}
                    onAssignToGroup={onAssignActivityToGroup}
                    selectable={selecting}
                    selected={selectedIds.has(act.id)}
                    onToggleSelect={toggleSelected}
                    dragDisabled={selecting}
                  />
                ))}
                {provided.placeholder}
                {dtPlaces.length === 0 && !snapshot.isDraggingOver && (
                  <li className="pp-activities-empty">{t('place.emptyList')}</li>
                )}
              </ul>
            )}
          </Droppable>

          {addingPlace && (
            <div className="pp-add-place-wrap">
              <PlaceSearchInput
                cityHint={city.name}
                onSelect={handlePlaceSelect}
                onManualAdd={handleManualAdd}
                placeholder={t('place.searchPlaceholder', { city: city.name })}
                autoFocus
              />
              <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingPlace(false)}>{t('common:actions.cancel')}</button>
            </div>
          )}

          {/* Hébergements de l'excursion : une excursion qui dure plusieurs jours
              (trek, île, ville-étape) a son propre logement — une excursion est
              une ville en base (trip_cities), la section marche donc telle quelle.
              L'ajout est piloté par le menu "+ Ajouter" en bas de carte. */}
          <LodgingSection
            city={city}
            lodgings={lodgings}
            tripId={tripId}
            tripStartDate={tripStartDate}
            tripEndDate={tripEndDate}
            adding={addingLodging}
            onCloseAdd={() => setAddingLodging(false)}
            onAddLodging={onAddLodging}
            onUpdateLodging={onUpdateLodging}
            onRemoveLodging={onRemoveLodging}
          />

          {dtTrajets.length > 0 && (
            <div className="pp-trajets-section">
              <div className="pp-trajets-section-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 8h-1V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1h7v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.1 0 2-.9 2-2v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zM12 6l4 4h-8l4-4z"/>
                </svg>
                {t('trajetsSection.label')} <span>({dtTrajets.length})</span>
              </div>
              <Droppable droppableId={`trajets-${city.id}`}>
                {(provided, snapshot) => (
                  <ul
                    className={`pp-trajets-list${snapshot.isDraggingOver ? ' pp-trajets-list--over' : ''}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {dtTrajets.map((act, idx) => (
                      <ActivityItem
                        key={act.id}
                        act={act}
                        index={idx}
                        tripStartDate={tripStartDate}
                        groups={groups}
                        onRemove={onRemoveActivity}
                        onUpdate={onUpdateActivity}
                        onAssignToGroup={onAssignActivityToGroup}
                      />
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          )}

          {addingTrajet && (
            <TrajetAddInput
              onAdd={(name, details) => { onAddActivity(tripId, city.id, name, details); setAddingTrajet(false); }}
              onClose={() => setAddingTrajet(false)}
            />
          )}

          {/* Menu unique remplaçant les 3 boutons d'ajout empilés (lieu,
              hébergement, trajet) — même mécanique que CityBlock, sans
              l'option excursion (pas d'excursion dans une excursion) */}
          <AddMenu
            items={[
              {
                key: 'place',
                tone: 'indigo',
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                ),
                label: t('addMenu.place'),
                desc: t('addMenu.placeDesc'),
                onSelect: () => setAddingPlace(true),
              },
              {
                key: 'lodging',
                tone: 'emerald',
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                  </svg>
                ),
                label: t('addMenu.lodging'),
                desc: t('addMenu.lodgingDesc'),
                onSelect: () => setAddingLodging(true),
              },
              {
                key: 'trajet',
                tone: 'blue',
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 8h-1V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1h7v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.1 0 2-.9 2-2v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zM12 6l4 4h-8l4-4z"/>
                  </svg>
                ),
                label: t('addMenu.trajet'),
                desc: t('addMenu.trajetDesc'),
                onSelect: () => setAddingTrajet(true),
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}
