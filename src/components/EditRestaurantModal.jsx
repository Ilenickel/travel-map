import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { callModeration } from '../lib/moderation';
import { restaurantNames } from '../lib/restaurants';
import CuisineTagPicker from './CuisineTagPicker';
import useCuisineTags, { registerCuisineTags } from '../hooks/useCuisineTags';
import useEscapeLayer from '../hooks/useEscapeLayer';
import { useModalHistory } from '../hooks/useModalHistory';
import useIsMobile from '../hooks/useIsMobile';
import './../styles/restaurants.css';

// Retouche d'un restaurant DÉJÀ publié, par la personne qui l'a proposé.
//
// Volontairement limité au budget et aux types de cuisine : le nom, l'adresse
// et la position viennent de Geoapify au moment de la contribution, les laisser
// modifier reviendrait à pouvoir remplacer un établissement par un autre sous
// le même identifiant — avec ses avis et ses favoris attachés. Ce qui manque en
// pratique, c'est justement le reste : un budget laissé au hasard, un type de
// cuisine oublié parce qu'il n'existait pas encore dans la liste.
//
// Réutilise l'action `add` de api/places.js avec `placeId` : le serveur y a
// déjà tout le chemin d'édition (vérification du propriétaire, modération des
// libellés de types créés à la volée). Voir handleAdd.

const BUDGET_OPTIONS = [
  { level: 1, symbol: '€' },
  { level: 2, symbol: '€€' },
  { level: 3, symbol: '€€€' },
];

export default function EditRestaurantModal({ restaurant, onCancel, onSaved }) {
  const { t, i18n } = useTranslation('app');
  const communityTags = useCuisineTags();
  const names = restaurantNames(restaurant, i18n.language);
  // Plein écran sur mobile (voir RestaurantsModal).
  const isMobile = useIsMobile(1024);

  const [budget, setBudget] = useState(restaurant.budgetLevel || 2);
  const [cuisineTags, setCuisineTags] = useState(restaurant.cuisineTags || []);
  const [createdTags, setCreatedTags] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const requestClose = () => { if (!submitting) onCancel(); };
  useEscapeLayer(requestClose);
  // Bouton retour du téléphone : il referme CE formulaire, pas l'écran qui le
  // contient. Sans entrée d'historique à dépiler, il fermait la fiche pays tout
  // entière — et la retouche en cours avec elle. Les deux autres fenêtres de ce
  // chantier l'avaient, celle-ci avait été oubliée (trouvé en TNR).
  useModalHistory(requestClose);

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError('');

    const newTags = createdTags.filter((tg) => cuisineTags.includes(tg.slug));
    const result = await callModeration('places', {
      action: 'add',
      placeId: restaurant.id,
      destType: restaurant.type,
      category: 'restaurant',
      // Champs RENVOYÉS TELS QUELS et non modifiables ici : la mise à jour
      // serveur réécrit ces colonnes, les omettre les viderait (voir
      // restaurantFields dans api/places.js).
      placeName: restaurant.name,
      nameLatin: restaurant.nameLatin || null,
      address: restaurant.address || null,
      imageUrl: restaurant.imageUrl || '',
      // Ni `destName` ni `countryName` : ils déclenchent la vérification de
      // cohérence géographique du nom, inutile ici — le nom ne change pas, il
      // l'a déjà passée à la publication, et un second appel pourrait rejeter
      // à tort une adresse que l'IA ne connaît pas.
      cuisineTags,
      newTags,
      budgetLevel: budget,
    });

    if (!result.ok) {
      setError(result.reason || t('placesList.publicationFailedError'));
      setSubmitting(false);
      return;
    }

    // Types créés à l'instant : injectés dans le cache partagé, sinon la fiche
    // les afficherait sous leur identifiant jusqu'au prochain rechargement.
    registerCuisineTags(newTags);
    onSaved({ ...restaurant, budgetLevel: budget, cuisineTags });
  }

  return createPortal(
    // Comme la fenêtre d'ajout : le clic sur le fond ne ferme pas — c'est le
    // seul geste qu'on peut faire sans le vouloir.
    <div className={`resto-modal-overlay${isMobile ? ' resto-modal-overlay--full' : ''}`}>
      <div className="resto-modal resto-modal--narrow" role="dialog" aria-modal="true">
        <div className="resto-modal-header">
          <h3 className="resto-modal-title">{t('restaurants.editTitle')}</h3>
          <button className="resto-modal-close" onClick={requestClose} aria-label={t('restaurants.closeSheet')}>✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="resto-modal-body">
            <div className="resto-form-picked">
              <div className="resto-form-picked-text">
                <span className="resto-search-result-name">{names.primary}</span>
                {names.secondary && <span className="resto-search-result-local">{names.secondary}</span>}
                {restaurant.address && <span className="resto-search-result-addr">{restaurant.address}</span>}
              </div>
            </div>

            <label className="resto-form-label">{t('restaurants.budgetLabel')}</label>
            <div className="resto-budget-row">
              {BUDGET_OPTIONS.map((b) => (
                <button
                  key={b.level}
                  type="button"
                  className={`resto-budget-btn${budget === b.level ? ' resto-budget-btn--active' : ''}`}
                  onClick={() => setBudget(b.level)}
                >
                  {b.symbol}
                </button>
              ))}
            </div>

            <label className="resto-form-label">{t('restaurants.tagsLabel')}</label>
            <p className="resto-form-sublabel">{t('restaurants.tagsHint')}</p>
            <CuisineTagPicker
              selected={cuisineTags}
              onChange={setCuisineTags}
              communityTags={communityTags}
              allowCreate
              createdTags={createdTags}
              onCreateTag={(tag) => setCreatedTags((prev) => [...prev, tag])}
              inlineSelection
              triggerLabel={t('restaurants.tagsAdd')}
              className="resto-filter--block"
            />

            {error && <div className="add-place-error">⚠ {error}</div>}
          </div>

          <div className="resto-modal-footer">
            <button type="button" className="add-place-cancel" onClick={requestClose} disabled={submitting}>
              {t('placesList.cancelButton')}
            </button>
            <button type="submit" className="add-place-submit" disabled={submitting}>
              {submitting ? t('restaurants.saving') : t('restaurants.saveButton')}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
