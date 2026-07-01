import { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { COUNTRIES } from '../../data/index';
import CityBlock from './CityBlock';
import CitySearchInput from './CitySearchInput';
import CountryFlag from './CountryFlag';

export default function DestinationBlock({ dest, cities, activities, groups, tripId, tripStartDate, tripEndDate, onRemove, onAddCity, onAddDaytrip, onAssignCityToDay, onRemoveCity, onRenameCity, onAddActivity, onRemoveActivity, onUpdateActivity, onAssignActivityToGroup }) {
  const [addingCity, setAddingCity] = useState(false);

  const destCities = cities
    .filter(c => c.destination_id === dest.id)
    .sort((a, b) => a.position - b.position);

  // Villes de base (étapes du voyage) vs excursions à la journée rattachées
  const baseCities = destCities.filter(c => !c.parent_city_id);
  const daytripsByParent = {};
  destCities.filter(c => c.parent_city_id).forEach(dt => {
    (daytripsByParent[dt.parent_city_id] ||= []).push(dt);
  });

  const destActivitiesCount = activities.filter(
    a => destCities.some(c => c.id === a.city_id)
  ).length;

  const flag = COUNTRIES[dest.country_code]?.emoji || '🌍';

  const handleCityAdd = (name) => {
    onAddCity(tripId, dest.id, name);
    setAddingCity(false);
  };

  return (
    <div className="pp-destination">
      <div className="pp-destination-header">
        <div className="pp-destination-flag"><CountryFlag emoji={flag} size={26} /></div>
        <div className="pp-destination-info">
          <span className="pp-destination-eyebrow">Pays</span>
          <h3 className="pp-destination-name">{dest.country_name}</h3>
          <div className="pp-destination-stats">
            <span className="pp-dest-stat">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
              {baseCities.length} ville{baseCities.length !== 1 ? 's' : ''}
            </span>
            <span className="pp-dest-stat">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              {destActivitiesCount} lieu{destActivitiesCount !== 1 ? 'x' : ''}
            </span>
          </div>
        </div>
        <button
          className="pp-icon-btn pp-icon-btn--danger"
          onClick={() => onRemove(dest.id)}
          title="Retirer ce pays du voyage"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </button>
      </div>

      <div className="pp-cities-container">
        <Droppable droppableId={`cities-${dest.id}`} type="city">
          {(provided) => (
            <div
              className="pp-cities"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {baseCities.map((city, idx) => (
                <CityBlock
                  key={city.id}
                  city={city}
                  activities={activities}
                  groups={groups}
                  tripId={tripId}
                  index={idx}
                  tripStartDate={tripStartDate}
                  tripEndDate={tripEndDate}
                  daytrips={daytripsByParent[city.id] || []}
                  onRemove={onRemoveCity}
                  onRename={onRenameCity}
                  onAddActivity={onAddActivity}
                  onAddDaytrip={onAddDaytrip}
                  onAssignCityToDay={onAssignCityToDay}
                  onRemoveActivity={onRemoveActivity}
                  onUpdateActivity={onUpdateActivity}
                  onAssignActivityToGroup={onAssignActivityToGroup}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {addingCity ? (
          <div className="pp-add-city-wrap">
            <CitySearchInput
              onSelect={handleCityAdd}
              onManual={handleCityAdd}
              placeholder="Chercher une ville… (ou Entrée pour ajouter)"
              autoFocus
            />
            <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingCity(false)}>
              Annuler
            </button>
          </div>
        ) : (
          <button className="pp-add-item-btn pp-add-city-btn" onClick={() => setAddingCity(true)}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Ajouter une ville
          </button>
        )}
      </div>
    </div>
  );
}
