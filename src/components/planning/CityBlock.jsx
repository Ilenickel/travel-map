import { useState } from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import ActivityItem from './ActivityItem';
import PlaceSearchInput from './PlaceSearchInput';
import CitySearchInput from './CitySearchInput';
import DaytripCard from './DaytripCard';

export default function CityBlock({ city, activities, groups, tripId, index, tripStartDate, tripEndDate, daytrips = [], onRemove, onRename, onAddActivity, onRemoveActivity, onUpdateActivity, onAssignActivityToGroup, onAddDaytrip, onAssignCityToDay }) {
  const [addingPlace, setAddingPlace] = useState(false);
  const [addingDaytrip, setAddingDaytrip] = useState(false);
  const [editing, setEditing] = useState(false);
  const [cityName, setCityName] = useState(city.name);
  const [collapsed, setCollapsed] = useState(false);

  const cityActivities = activities
    .filter(a => a.city_id === city.id)
    .sort((a, b) => a.position - b.position);

  const saveRename = () => {
    const trimmed = cityName.trim();
    if (trimmed && trimmed !== city.name) onRename(city.id, { name: trimmed });
    else setCityName(city.name); // Reset if empty or unchanged
    setEditing(false);
  };

  const cancelRename = () => {
    setCityName(city.name);
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

  return (
    <Draggable draggableId={`city-${city.id}`} index={index}>
      {(cityProvided, citySnapshot) => (
        <div
          ref={cityProvided.innerRef}
          {...cityProvided.draggableProps}
          className={`pp-city${citySnapshot.isDragging ? ' pp-city--dragging' : ''}`}
        >
          <div className="pp-city-header">
            <div className="pp-city-drag" {...cityProvided.dragHandleProps} title="Réordonner la ville">
              <svg width="12" height="16" viewBox="0 0 12 16" fill="currentColor" opacity=".3">
                <circle cx="3" cy="3" r="1.5"/><circle cx="9" cy="3" r="1.5"/>
                <circle cx="3" cy="8" r="1.5"/><circle cx="9" cy="8" r="1.5"/>
                <circle cx="3" cy="13" r="1.5"/><circle cx="9" cy="13" r="1.5"/>
              </svg>
            </div>

            <button
              className="pp-city-collapse"
              onClick={() => setCollapsed(c => !c)}
              title={collapsed ? 'Développer' : 'Réduire'}
            >
              <svg
                width="14" height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ transform: collapsed ? 'rotate(-90deg)' : 'none', transition: 'transform 0.2s' }}
              >
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>

            <span className="pp-city-pin">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{color:'var(--accent2)',opacity:.7}}>
                <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
              </svg>
            </span>

            {editing ? (
              <input
                className="pp-city-name-input"
                value={cityName}
                onChange={e => setCityName(e.target.value)}
                onBlur={saveRename}
                onKeyDown={e => { if (e.key === 'Enter') saveRename(); if (e.key === 'Escape') cancelRename(); }}
                autoFocus
              />
            ) : (
              <span className="pp-city-name" onDoubleClick={() => setEditing(true)}>
                <span className="pp-city-eyebrow">Ville</span> {city.name}
              </span>
            )}

            <span className="pp-city-count">
              {cityActivities.length} lieu{cityActivities.length !== 1 ? 'x' : ''}
            </span>

            <div className="pp-city-actions">
              <button className="pp-icon-btn" onClick={() => setEditing(true)} title="Renommer la ville">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </button>
              <button className="pp-icon-btn pp-icon-btn--danger" onClick={() => onRemove(city.id)} title="Supprimer la ville">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
              </button>
            </div>
          </div>

          {!collapsed && (
            <div className="pp-city-body">
              <Droppable droppableId={`activities-${city.id}`}>
                {(provided, snapshot) => (
                  <ul
                    className={`pp-activities${snapshot.isDraggingOver ? ' pp-activities--over' : ''}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {cityActivities.map((act, idx) => (
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
                    {cityActivities.length === 0 && !snapshot.isDraggingOver && (
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
                  <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingPlace(false)}>
                    Annuler
                  </button>
                </div>
              ) : (
                <button className="pp-add-item-btn" onClick={() => setAddingPlace(true)}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  Ajouter un lieu ou activité
                </button>
              )}

              {/* Excursions à la journée rattachées à cette ville */}
              {daytrips.length > 0 && (
                <div className="pp-daytrips-list">
                  {daytrips.map(dt => (
                    <DaytripCard
                      key={dt.id}
                      city={dt}
                      activities={activities}
                      groups={groups}
                      tripId={tripId}
                      tripStartDate={tripStartDate}
                      onRemove={onRemove}
                      onRename={onRename}
                      onAddActivity={onAddActivity}
                      onRemoveActivity={onRemoveActivity}
                      onUpdateActivity={onUpdateActivity}
                      onAssignActivityToGroup={onAssignActivityToGroup}
                      onAssignCityToDay={onAssignCityToDay}
                      tripEndDate={tripEndDate}
                    />
                  ))}
                </div>
              )}

              {addingDaytrip ? (
                <div className="pp-add-city-wrap">
                  <CitySearchInput
                    onSelect={name => { onAddDaytrip(tripId, city.destination_id, city.id, name); setAddingDaytrip(false); }}
                    onManual={name => { onAddDaytrip(tripId, city.destination_id, city.id, name); setAddingDaytrip(false); }}
                    placeholder="Chercher une ville pour l'excursion… (ou Entrée pour ajouter)"
                    autoFocus
                  />
                  <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingDaytrip(false)}>Annuler</button>
                </div>
              ) : (
                <button className="pp-add-item-btn pp-add-daytrip-btn" onClick={() => setAddingDaytrip(true)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
                  </svg>
                  Ajouter une excursion à la journée
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}
