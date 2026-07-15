import { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import { COUNTRIES } from '../../data/index';
import CityBlock from './CityBlock';
import CitySearchInput from './CitySearchInput';
import CountryFlag from './CountryFlag';
import NewCityOptionsForm from './NewCityOptionsForm';
import TripFullSuggestions from './TripFullSuggestions';

export default function DestinationBlock({ dest, cities, activities, groups, lodgings, tripId, tripStartDate, tripEndDate, onRemove, onAddCity, onAddDaytrip, onAssignCityToDay, onRemoveCity, onRenameCity, onAddActivity, onRemoveActivity, onRemoveActivities, onUpdateActivity, onDuplicateActivity, onAssignActivityToGroup, onAssignActivitiesToGroup, onAssignActivitiesToDay, onAddLodging, onUpdateLodging, onRemoveLodging, onReloadTripData }) {
  const { t } = useTranslation();
  const [addingCity, setAddingCity] = useState(false);
  const [pendingCityName, setPendingCityName] = useState(null);
  // La vue manuelle (ville par ville) reste toujours affichée en dessous —
  // "Suggestions de voyages" n'est plus un mode qui la remplace, mais un
  // déclencheur de popup (voir TripFullSuggestions) : elle ne modifie rien
  // tant qu'aucun import n'est confirmé, donc pas besoin de "revenir" en
  // arrière comme avec l'ancien bascule de mode.
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const destCities = cities
    .filter(c => c.destination_id === dest.id)
    .sort((a, b) => a.position - b.position);

  // Villes de base (étapes du voyage) vs excursions à la journée rattachées
  const baseCities = destCities.filter(c => !c.parent_city_id);
  const daytripsByParent = {};
  destCities.filter(c => c.parent_city_id).forEach(dt => {
    (daytripsByParent[dt.parent_city_id] ||= []).push(dt);
  });

  // Les trajets ne sont pas des lieux (section séparée) : exclus du compteur, comme
  // pour le total du voyage et le compteur par ville.
  const destActivitiesCount = activities.filter(
    a => a.category !== 'transport' && destCities.some(c => c.id === a.city_id)
  ).length;

  const flag = COUNTRIES[dest.country_code]?.emoji || '🌍';

  const handleCityAdd = (name) => {
    setAddingCity(false);
    setPendingCityName(name);
  };

  const handleConfirmCityOptions = async ({ plannedDays, startDate }) => {
    const city = await onAddCity(tripId, dest.id, pendingCityName);
    if (city && plannedDays) onRenameCity(city.id, { planned_days: plannedDays, start_date: startDate });
    setPendingCityName(null);
  };

  return (
    <div className="pp-destination">
      <div className="pp-destination-header">
        <div className="pp-destination-flag"><CountryFlag emoji={flag} size={26} /></div>
        <div className="pp-destination-info">
          <span className="pp-destination-eyebrow">{t('destination.eyebrow')}</span>
          <h3 className="pp-destination-name">{dest.country_name}</h3>
          <div className="pp-destination-stats">
            <span className="pp-dest-stat">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
              {t('destination.citiesCount', { count: baseCities.length })}
            </span>
            <span className="pp-dest-stat">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              {t('place.count', { count: destActivitiesCount })}
            </span>
          </div>
        </div>
        <button
          className="pp-icon-btn pp-icon-btn--danger"
          onClick={() => onRemove(dest.id)}
          title={t('destination.removeTitle')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </button>
      </div>

      {/* Sélecteur de mode : manuel / suggestions de voyages entiers — deux
          grandes cartes de choix, c'est LE point d'entrée après ajout d'un pays */}
      <div className="pp-dest-mode" role="tablist" aria-label={t('destination.modeLabel')}>
        <button
          type="button"
          role="tab"
          aria-selected={!suggestionsOpen}
          className={`pp-dest-mode-card pp-dest-mode-card--manual${!suggestionsOpen ? ' active' : ''}`}
          onClick={() => setSuggestionsOpen(false)}
        >
          <span className="pp-dest-mode-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </span>
          <span className="pp-dest-mode-texts">
            <span className="pp-dest-mode-title">{t('destination.modeManual')}</span>
            <span className="pp-dest-mode-desc">{t('destination.modeManualDesc')}</span>
          </span>
          <span className="pp-dest-mode-radio" aria-hidden="true" />
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={suggestionsOpen}
          className={`pp-dest-mode-card pp-dest-mode-card--suggestions${suggestionsOpen ? ' active' : ''}`}
          onClick={() => setSuggestionsOpen(true)}
        >
          <span className="pp-dest-mode-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.9 5.7L19.6 9.6 13.9 11.5 12 17.2 10.1 11.5 4.4 9.6 10.1 7.7 12 2zM19 14l.95 2.85L22.8 17.8l-2.85.95L19 21.6l-.95-2.85-2.85-.95 2.85-.95L19 14zM5.5 15.5l.72 2.14 2.14.72-2.14.72-.72 2.14-.72-2.14-2.14-.72 2.14-.72.72-2.14z"/>
            </svg>
          </span>
          <span className="pp-dest-mode-texts">
            <span className="pp-dest-mode-title">{t('destination.modeSuggestions')}</span>
            <span className="pp-dest-mode-desc">{t('destination.modeSuggestionsDesc')}</span>
          </span>
          <span className="pp-dest-mode-radio" aria-hidden="true" />
        </button>
      </div>

      {suggestionsOpen && (
        <TripFullSuggestions
          dest={dest}
          tripId={tripId}
          baseCitiesCount={baseCities.length}
          // Sert uniquement à la note "sera importé à dater" : même critère
          // que l'ancre d'import côté serveur (date de départ du voyage OU au
          // moins une ville datée quelque part dans le voyage) — voir
          // handleImportTrip dans api/trip-templates.js.
          hasAnyDates={!!tripStartDate || cities.some((c) => c.start_date && c.planned_days)}
          onClose={() => setSuggestionsOpen(false)}
          onImported={() => { setSuggestionsOpen(false); onReloadTripData?.(); }}
        />
      )}

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
                  lodgings={lodgings}
                  tripId={tripId}
                  countryCode={dest.country_code}
                  countryName={dest.country_name}
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
                  onRemoveActivities={onRemoveActivities}
                  onUpdateActivity={onUpdateActivity}
                  onDuplicateActivity={onDuplicateActivity}
                  onAssignActivityToGroup={onAssignActivityToGroup}
                  onAssignActivitiesToGroup={onAssignActivitiesToGroup}
                  onAssignActivitiesToDay={onAssignActivitiesToDay}
                  onAddLodging={onAddLodging}
                  onUpdateLodging={onUpdateLodging}
                  onRemoveLodging={onRemoveLodging}
                  onReloadTripData={onReloadTripData}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {pendingCityName ? (
          <NewCityOptionsForm
            cityName={pendingCityName}
            tripStartDate={tripStartDate}
            onConfirm={handleConfirmCityOptions}
            onCancel={() => setPendingCityName(null)}
          />
        ) : addingCity ? (
          <div className="pp-add-city-wrap">
            <CitySearchInput
              onSelect={handleCityAdd}
              onManual={handleCityAdd}
              placeholder={t('city.searchPlaceholderDefault')}
              autoFocus
            />
            <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingCity(false)}>
              {t('common:actions.cancel')}
            </button>
          </div>
        ) : (
          <button className="pp-add-item-btn pp-add-city-btn" onClick={() => setAddingCity(true)}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            {t('destination.addCityButton')}
          </button>
        )}
      </div>
    </div>
  );
}
