import { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import ActivityItem from './ActivityItem';
import PlaceSearchInput from './PlaceSearchInput';
import { getDaysBetween, formatDateShort } from '../../lib/planningUtils';
import { NATIVE_DAYTRIP_DRAG_TYPE } from './DayView';

function DayDropdown({ tripStartDate, tripEndDate, onSelect, onClose }) {
  const days = getDaysBetween(tripStartDate, tripEndDate);
  return (
    <div className="pp-group-day-dropdown">
      {days.length === 0 ? (
        <div className="pp-group-day-empty">Ajoutez des dates au voyage pour planifier</div>
      ) : (
        days.map((d, i) => (
          <button key={d} className="pp-group-day-opt" onClick={() => { onSelect(d); onClose(); }}>
            <span className="pp-group-day-num">J{i + 1}</span>
            <span>{formatDateShort(d)}</span>
          </button>
        ))
      )}
    </div>
  );
}

export default function DaytripCard({ city, activities, groups, tripId, tripStartDate, tripEndDate, onRemove, onRename, onAddActivity, onRemoveActivity, onUpdateActivity, onAssignActivityToGroup, onAssignCityToDay }) {
  const [addingPlace, setAddingPlace] = useState(false);
  const [editing, setEditing] = useState(false);
  const [cityName, setCityName] = useState(city.name);
  const [collapsed, setCollapsed] = useState(false);
  const [showDays, setShowDays] = useState(false);

  const dtActivities = activities
    .filter(a => a.city_id === city.id)
    .sort((a, b) => a.position - b.position);

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
        title={collapsed ? 'Développer (glisser la carte pour tout planifier sur un jour)' : 'Réduire (glisser la carte pour tout planifier sur un jour)'}
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
            <span className="pp-daytrip-badge">Excursion</span>
          </span>
        )}

        <span className="pp-city-count">
          {dtActivities.length} lieu{dtActivities.length !== 1 ? 'x' : ''}
          <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" style={{ transform: collapsed ? 'rotate(-90deg)' : 'none', transition: 'transform .15s', marginLeft: 3 }}>
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </span>

        <div className="pp-city-actions" onClick={stop}>
          {dtActivities.length > 0 && (
            <div style={{ position: 'relative' }}>
              <button className="pp-icon-btn" title="Planifier cette excursion sur un jour" onClick={() => setShowDays(s => !s)}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
              </button>
              {showDays && (
                <>
                  <div className="pp-backdrop-overlay" onClick={() => setShowDays(false)} />
                  <DayDropdown
                    tripStartDate={tripStartDate}
                    tripEndDate={tripEndDate}
                    onSelect={date => onAssignCityToDay(city.id, date)}
                    onClose={() => setShowDays(false)}
                  />
                </>
              )}
            </div>
          )}
          <button className="pp-icon-btn" onClick={() => setEditing(true)} title="Renommer l'excursion">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </button>
          <button className="pp-icon-btn pp-icon-btn--danger" onClick={() => onRemove(city.id)} title="Supprimer l'excursion">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="pp-daytrip-body">
          <Droppable droppableId={`activities-${city.id}`}>
            {(provided, snapshot) => (
              <ul
                className={`pp-activities${snapshot.isDraggingOver ? ' pp-activities--over' : ''}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {dtActivities.map((act, idx) => (
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
                {dtActivities.length === 0 && !snapshot.isDraggingOver && (
                  <li className="pp-activities-empty">Aucun lieu — ajoutez-en un ci-dessous</li>
                )}
              </ul>
            )}
          </Droppable>

          {addingPlace ? (
            <div className="pp-add-place-wrap">
              <PlaceSearchInput
                cityHint={city.name}
                onSelect={handlePlaceSelect}
                onManualAdd={handleManualAdd}
                placeholder={`Rechercher un lieu à ${city.name}… (Entrée pour ajouter)`}
                autoFocus
              />
              <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingPlace(false)}>Annuler</button>
            </div>
          ) : (
            <button className="pp-add-item-btn" onClick={() => setAddingPlace(true)}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              Ajouter un lieu
            </button>
          )}
        </div>
      )}
    </div>
  );
}
