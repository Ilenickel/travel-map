import { useState, useRef } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import { COUNTRIES } from '../../data/index';
import { namesMatch, countryAlpha2FromEmoji } from '../../lib/planningUtils';
import { useCityImages } from '../../hooks/useCityImages';
import { useCountryImages } from '../../hooks/useCountryImages';
import CityBlock from './CityBlock';
import CitySearchInput from './CitySearchInput';
import CountryFlag from './CountryFlag';
import TripSuggestionsModal from './TripSuggestionsModal';

export default function DestinationBlock({ dest, cities, activities, groups, lodgings, tripId, tripStartDate, tripEndDate, isMobile = false, mobileCityDetailId = null, onOpenCityDetail, onCloseCityDetail, onRemove, onAddCity, onAddDaytrip, onAssignCityToDay, onRemoveCity, onRenameCity, onAddActivity, onRemoveActivity, onRemoveActivities, onUpdateActivity, onDuplicateActivity, onAssignActivityToGroup, onAddGroup, onClearAutoGroups, onAssignActivitiesToDay, onAddLodging, onUpdateLodging, onRemoveLodging, onReloadTripData, onAfterImport }) {
  const { t, i18n } = useTranslation();
  const [addingCity, setAddingCity] = useState(false);
  // Replié : n'affiche que l'en-tête (image + nom + compteurs) — utile surtout
  // avec plusieurs pays dans le même voyage, pour ne pas avoir à faire défiler
  // tout le contenu d'un pays qu'on ne consulte pas en ce moment (demande du
  // 2026-07-23). Déplié par défaut (voyage à un seul pays, cas le plus courant).
  const [collapsed, setCollapsed] = useState(false);
  // Ville déjà présente dans cette destination et qu'on tente de rajouter :
  // on n'insère pas silencieusement un doublon, on demande confirmation
  // (dialogue léger, même charte que pp-discard-confirm-modal ci-dessous).
  const [pendingDuplicateName, setPendingDuplicateName] = useState(null);
  // Sélecteur "Manuel / Suggestions de voyages" (même style qu'avant la
  // fenêtre unifiée) : la vue manuelle (liste des villes) reste TOUJOURS
  // affichée en dessous quel que soit le mode choisi — "Suggestions de
  // voyages" ne bascule plus le panneau, il ouvre la fenêtre de suggestions
  // par-dessus (TripSuggestionsModal), directement sur son onglet "Planning
  // complet". `mode` ne pilote donc que la carte active du sélecteur.
  const [mode, setMode] = useState('manual');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [suggestionsInitialTab, setSuggestionsInitialTab] = useState('villes');

  const openSuggestions = (tab) => {
    setMode('suggestions');
    setSuggestionsInitialTab(tab);
    setSuggestionsOpen(true);
  };
  const closeSuggestions = () => {
    setSuggestionsOpen(false);
    setMode('manual'); // le panneau manuel est ce qui redevient visible une fois la popup fermée
  };

  const destCities = cities
    .filter(c => c.destination_id === dest.id)
    .sort((a, b) => a.position - b.position);

  // Villes déjà présentes au premier rendu de ce bloc : une ville qui apparaît
  // APRÈS vient d'être ajoutée dans cette session — son CityBlock s'ouvre
  // déplié (startExpanded), y compris sur mobile où le défaut est replié.
  const initialCityIdsRef = useRef(null);
  if (initialCityIdsRef.current === null) {
    initialCityIdsRef.current = new Set(destCities.map(c => c.id));
  }

  // Villes de base (étapes du voyage) vs excursions à la journée rattachées
  const baseCities = destCities.filter(c => !c.parent_city_id);
  const daytripsByParent = {};
  destCities.filter(c => c.parent_city_id).forEach(dt => {
    (daytripsByParent[dt.parent_city_id] ||= []).push(dt);
  });
  // Nombre de villes de base de CETTE destination encore "en attente" d'une
  // date (pending_day_offset, import complet pas encore ancré — voir
  // handleImportTrip). Sert à CityBlock/CityPlanningFieldsButton : dater UNE
  // seule ville pendant que d'autres attendent encore casse le placement
  // groupé (voir le prop siblingPendingBaseCitiesCount transmis plus bas).
  const pendingBaseCitiesCount = baseCities.filter(c => c.pending_day_offset != null).length;

  // Les trajets ne sont pas des lieux (section séparée) : exclus du compteur, comme
  // pour le total du voyage et le compteur par ville.
  const destActivitiesCount = activities.filter(
    a => a.category !== 'transport' && destCities.some(c => c.id === a.city_id)
  ).length;

  const flag = COUNTRIES[dest.country_code]?.emoji || '🌍';

  // Vignettes photo des villes de base ET des excursions (l'onglet Excursions
  // du détail mobile en affiche aussi, voir CityBlock) — mêmes règles que les
  // suggestions (useCityImages), batché ici pour TOUTE la destination, puis
  // distribué à chaque CityBlock. sourceLanguage = langue du site (les villes
  // sont tapées par l'utilisateur, pas des noms éditoriaux FR) — best-effort,
  // le serveur canonicalise de toute façon le nom via le géocodeur.
  const country = COUNTRIES[dest.country_code];
  const { getCityImage } = useCityImages(
    destCities.map((c) => ({ cityName: c.name })),
    {
      countryCode: dest.country_code,
      countryName: country?.name?.en || null,
      countryAlpha2: countryAlpha2FromEmoji(country?.emoji),
      sourceLanguage: i18n.language,
    }
  );
  // Image du pays (même backend que les cartes de l'accueil, voir
  // useCountryImages/Phase 1) pour l'en-tête du pays — restylé comme une ligne
  // de ville (image + nom + compteurs) plutôt que le gros bandeau dégradé
  // d'avant, à la demande du 2026-07-23.
  const { getCountryImage } = useCountryImages([
    { countryCode: dest.country_code, countryName: country?.name?.en || null },
  ]);
  const countryImage = getCountryImage(dest.country_code);

  // Création directe, comme pour une excursion (voir CityBlock, addingDaytrip) :
  // l'étape intermédiaire "jours prévus + date de début" (NewCityOptionsForm)
  // a disparu avec le champ "jours prévus" lui-même — la durée réelle d'une
  // ville se déduit maintenant de ses activités datées, plus d'une métadonnée
  // à saisir à la création, avant même d'avoir le moindre contenu.
  const handleCityAdd = (name) => {
    if (baseCities.some((c) => namesMatch(c.name, name))) {
      setPendingDuplicateName(name);
      return;
    }
    onAddCity(tripId, dest.id, name);
    setAddingCity(false);
  };

  const confirmAddDuplicate = () => {
    onAddCity(tripId, dest.id, pendingDuplicateName);
    setPendingDuplicateName(null);
    setAddingCity(false);
  };
  const cancelAddDuplicate = () => setPendingDuplicateName(null);

  // ─── Mobile : mode DÉTAIL d'une ville (liste → tap → détail plein écran) ───
  // Quand une ville est ouverte en détail, seul le bloc de la destination qui la
  // contient s'affiche, réduit à cette seule ville (prise en charge du retour
  // par CityBlock). Les autres destinations se masquent (return null) pour un
  // vrai plein écran, sans header pays / sélecteur de mode / autres villes.
  const detailCity = isMobile && mobileCityDetailId
    ? baseCities.find((c) => c.id === mobileCityDetailId)
    : null;
  if (isMobile && mobileCityDetailId && !detailCity) return null;
  if (detailCity) {
    return (
      <div className="pp-destination pp-destination--detail">
        <CityBlock
          city={detailCity}
          activities={activities}
          groups={groups}
          lodgings={lodgings}
          tripId={tripId}
          countryCode={dest.country_code}
          countryName={dest.country_name}
          index={0}
          tripStartDate={tripStartDate}
          tripEndDate={tripEndDate}
          siblingPendingBaseCitiesCount={pendingBaseCitiesCount}
          daytrips={daytripsByParent[detailCity.id] || []}
          cityImage={getCityImage(detailCity.name)}
          getCityImage={getCityImage}
          isMobile
          mobileDetailOpen
          onCloseDetail={onCloseCityDetail}
          onRemove={(id) => { onRemoveCity(id); onCloseCityDetail?.(); }}
          onRename={onRenameCity}
          onAddActivity={onAddActivity}
          onAddDaytrip={onAddDaytrip}
          onAssignCityToDay={onAssignCityToDay}
          onRemoveActivity={onRemoveActivity}
          onRemoveActivities={onRemoveActivities}
          onUpdateActivity={onUpdateActivity}
          onDuplicateActivity={onDuplicateActivity}
          onAssignActivityToGroup={onAssignActivityToGroup}
          onAddGroup={onAddGroup}
          onClearAutoGroups={onClearAutoGroups}
          onAssignActivitiesToDay={onAssignActivitiesToDay}
          onAddLodging={onAddLodging}
          onUpdateLodging={onUpdateLodging}
          onRemoveLodging={onRemoveLodging}
          onReloadTripData={onReloadTripData}
        />
      </div>
    );
  }

  return (
    <div className="pp-destination">
      <div
        className={`pp-destination-header${countryImage?.imageUrl ? ' has-image' : ''}`}
        // `imageUrl` (Unsplash urls.regular, ~1080px) plutôt que `thumbUrl`
        // (urls.small, ~400px) : ce bandeau plein largeur affichait la
        // version miniature, étirée et pixelisée sur un grand écran
        // (signalé le 2026-07-24). thumbUrl reste réservé aux usages
        // réellement petits (ex. cartes voyage de l'accueil, TripsHome.jsx).
        style={countryImage?.imageUrl ? { backgroundImage: `url(${countryImage.imageUrl})` } : undefined}
        onClick={() => setCollapsed((c) => !c)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCollapsed((c) => !c); } }}
      >
        <div className="pp-destination-header-shade" />
        <button
          className="pp-icon-btn pp-icon-btn--danger pp-destination-remove-btn"
          onClick={(e) => { e.stopPropagation(); onRemove(dest.id); }}
          title={t('destination.removeTitle')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </button>
        <svg
          className="pp-destination-chevron"
          width="26" height="26" viewBox="0 0 24 24" fill="currentColor"
          style={{ transform: collapsed ? 'rotate(-90deg)' : 'none' }}
        >
          <path d="M7 10l5 5 5-5z"/>
        </svg>
        <div className="pp-destination-info">
          <div className="pp-destination-title">
            <CountryFlag emoji={flag} size={30} />
            <h3 className="pp-destination-name">{dest.country_name}</h3>
          </div>
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
      </div>

      {collapsed ? null : <>
      {/* Sélecteur "Manuel / Suggestions de voyages" — même présentation à
          deux cartes qu'avant la fenêtre unifiée. "Manuel" ne fait que
          refléter l'état par défaut (le panneau en dessous est toujours
          affiché) ; "Suggestions de voyages" ouvre la fenêtre de suggestions
          par-dessus, sur son onglet "Planning complet". */}
      <div className="pp-dest-mode" role="tablist" aria-label={t('destination.modeLabel')}>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'manual'}
          className={`pp-dest-mode-card pp-dest-mode-card--manual${mode === 'manual' ? ' active' : ''}`}
          onClick={() => setMode('manual')}
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
          aria-selected={mode === 'suggestions'}
          className={`pp-dest-mode-card pp-dest-mode-card--suggestions${mode === 'suggestions' ? ' active' : ''}`}
          onClick={() => openSuggestions('planning')}
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
        <TripSuggestionsModal
          dest={dest}
          tripId={tripId}
          baseCitiesCount={baseCities.length}
          activities={activities}
          initialTab={suggestionsInitialTab}
          // Résolution de la ville à l'import (3d) : choisir un planning pour
          // une ville pas encore dans le voyage doit d'abord la CRÉER — même
          // fonction que handleCityAdd ci-dessus, qui renvoie la ville créée.
          onAddCity={onAddCity}
          // Sert uniquement à la note "sera importé à dater" : même critère
          // que l'ancre d'import côté serveur (date de départ du voyage OU au
          // moins une activité déjà datée quelque part dans le voyage) — voir
          // handleImportTrip dans api/trip-templates.js, qui dérive désormais
          // son point d'ancrage du contenu réel plutôt que d'un champ "jours
          // prévus" séparé.
          hasAnyDates={!!tripStartDate || activities.some((a) => a.visit_date)}
          onClose={closeSuggestions}
          // Sur mobile, les villes importées viennent d'apparaître/changer :
          // on ramène sur la page Villes pour les montrer directement (voir
          // TripEditor, goToCitiesPageIfMobile) — sans effet sur ordinateur.
          onImported={() => { closeSuggestions(); onReloadTripData?.(); onAfterImport?.(); }}
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
                  startExpanded={!initialCityIdsRef.current.has(city.id)}
                  index={idx}
                  cityImage={getCityImage(city.name)}
                  isMobile={isMobile}
                  mobileDetailOpen={false}
                  onOpenDetail={onOpenCityDetail}
                  tripStartDate={tripStartDate}
                  tripEndDate={tripEndDate}
                  // Cette ville elle-même comptée si elle est pending (voir
                  // pendingBaseCitiesCount plus haut) : CityBlock ne s'en sert
                  // que combiné à SES PROPRES activités en attente, donc peu
                  // importe si le compte inclut la ville elle-même ou non —
                  // ce qui compte est qu'il reste au moins UNE AUTRE ville en
                  // attente pour que l'avertissement ait un sens.
                  siblingPendingBaseCitiesCount={pendingBaseCitiesCount}
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
                  onAddGroup={onAddGroup}
                  onClearAutoGroups={onClearAutoGroups}
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

        {addingCity ? (
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

        {pendingDuplicateName && (
          <div className="pp-modal-overlay pp-discard-confirm-overlay" onClick={(e) => e.target === e.currentTarget && cancelAddDuplicate()}>
            <div className="pp-modal pp-discard-confirm-modal">
              <p className="pp-discard-confirm-text">
                {t('city.duplicateConfirmText', { city: pendingDuplicateName })}
              </p>
              <div className="pp-modal-actions">
                <button type="button" className="pp-btn pp-btn--ghost pp-btn--sm" onClick={cancelAddDuplicate}>
                  {t('common:actions.cancel')}
                </button>
                <button type="button" className="pp-btn pp-btn--primary pp-btn--sm" onClick={confirmAddDuplicate}>
                  {t('city.duplicateConfirmButton')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </>}
    </div>
  );
}
