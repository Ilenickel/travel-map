import { useTranslation } from 'react-i18next';
import PlacesList from './PlacesList';
import RestaurantExplorer from './RestaurantExplorer';
import './../styles/restaurants.css';

// Section « À ne pas manquer » d'une destination, découpée en deux onglets :
// « Lieux et activités » d'un côté, « Restaurants » de l'autre.
//
// Attention à la hiérarchie : « À ne pas manquer » reste le TITRE de la section
// et chapeaute les deux onglets — ce n'est pas le nom de l'un d'eux. Les
// restaurants sont, eux aussi, des adresses à ne pas manquer.
//
// Les deux listes étaient auparavant empilées l'une sous l'autre, ce qui
// allongeait la fiche sans fin et noyait les restaurants tout en bas. Ce sont
// deux façons distinctes de préparer un séjour — on cherche l'une OU l'autre à
// un moment donné, jamais les deux en même temps : des onglets sont la bonne
// réponse.
//
// L'onglet actif est PILOTÉ PAR LE PARENT (CountryPanel) : la section des avis
// de la destination, rendue plus bas dans la page, ne doit apparaître que sous
// l'onglet « Lieux et activités » — un restaurant a ses propres avis, dans sa
// fiche.

export default function DestinationHighlights({
  dest, countryCode, countryName, countryAlpha2,
  wikiImages = {}, wikiMeta = {},
  tab, onTabChange,
  // Lieu à mettre en avant dans l'onglet « Lieux et activités » (deep-link
  // depuis l'onglet « Mes ajouts » du profil, voir CountryPanel).
  focusPlaceId = null,
}) {
  const { t } = useTranslation('app');
  // AUCUN défilement automatique au changement d'onglet.
  // Il avait été ajouté quand l'onglet Restaurants embarquait une carte, donc
  // un contenu haut qui démarrait sous la ligne de flottaison. Depuis que la
  // fiche pays n'affiche plus de carte, la liste commence immédiatement sous
  // les onglets : il n'y a plus rien à rejoindre. Et comme il se déclenchait à
  // la fin du chargement — plusieurs secondes après le clic — il ramenait la
  // page en haut alors que la personne lisait déjà plus bas (signalé trois
  // fois : 2026-07-29). Ne pas le réintroduire sans une vraie raison.

  const isUserDest = !!dest.isUserDest;

  return (
    <div className="dest-highlights">
      <h4 className="dest-highlights-title">{t('placesList.title')}</h4>

      <div className="dest-highlights-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === 'places'}
          className={`dest-highlights-tab${tab === 'places' ? ' dest-highlights-tab--active' : ''}`}
          onClick={() => onTabChange('places')}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
          </svg>
          {t('placesList.tabPlaces')}
        </button>
        <button
          role="tab"
          aria-selected={tab === 'restaurants'}
          className={`dest-highlights-tab${tab === 'restaurants' ? ' dest-highlights-tab--active' : ''}`}
          onClick={() => onTabChange('restaurants')}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
          </svg>
          {t('restaurants.title')}
        </button>
      </div>

      {/* Onglet inactif DÉMONTÉ, pas seulement masqué : l'explorateur porte une
          carte Leaflet, la garder vivante en arrière-plan coûterait des tuiles
          et un observateur de taille pour rien. */}
      {tab === 'places' ? (
        <PlacesList
          dest={dest}
          countryCode={countryCode}
          countryName={countryName}
          wikiImages={wikiImages}
          wikiMeta={wikiMeta}
          hideTitle
          focusPlaceId={focusPlaceId}
        />
      ) : (
        <RestaurantExplorer
          mode="destination"
          destType={isUserDest ? 'community' : 'static'}
          destinationId={isUserDest ? dest.id : null}
          staticDestId={isUserDest ? null : String(dest.id)}
          countryCode={countryCode}
          countryName={countryName}
          countryAlpha2={countryAlpha2}
          destName={dest.name}
          hideTitle
        />
      )}
    </div>
  );
}
