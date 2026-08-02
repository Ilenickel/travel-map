import { useState, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import imageCompression from 'browser-image-compression';
import { supabase } from '../lib/supabase';
import { callModeration } from '../lib/moderation';
import { useAuth } from '../context/AuthContext';
import { validateImageFile } from '../lib/imageValidation';
import { BUDGET_SYMBOL, restaurantNames } from '../lib/restaurants';
import { openMapsUrl } from '../lib/googleMapsRoute';
import { cuisineTagLabel } from '../lib/cuisineTags';
import useCuisineTags from '../hooks/useCuisineTags';
import useEscapeLayer from '../hooks/useEscapeLayer';
import { useModalHistory } from '../hooks/useModalHistory';
import usePlaceFavorites from '../hooks/usePlaceFavorites';
import { Avatar } from './ReviewItem';
import SourceBadge from './SourceBadge';
import RatingSummary, { ratingCountsFrom } from './RatingSummary';
import RestaurantPickerMap from './RestaurantPickerMap';

// Fiche complète d'un restaurant : photo, adresse, cuisine, budget, et les avis
// notés de la communauté.
//
// Rendue en feuille (plein écran sur mobile, panneau centré sur ordinateur) via
// un portail vers <body> : la fiche s'ouvre depuis une liste elle-même contenue
// dans un conteneur à débordement limité (onglet de planification, panneau
// pays), qui la rognerait sinon.

const REVIEW_BUCKET = 'review-photos';

function Stars({ value, size = 14 }) {
  return (
    <span className="resto-stars" style={{ fontSize: size }} aria-label={String(value)}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(value) ? 'resto-star resto-star--on' : 'resto-star'}>★</span>
      ))}
    </span>
  );
}

export default function RestaurantDetail({
  restaurant, countryCode, countryName,
  canAddToTrip = false, onAddToTrip = null, alreadyAdded = false,
  canRemoveFromTrip = false, onRemoveFromTrip = null,
  onClose, onRatingChange,
}) {
  const { t, i18n } = useTranslation('app');
  const { user } = useAuth();
  const names = restaurantNames(restaurant, i18n.language);
  const communityTags = useCuisineTags();
  const communityLabels = Object.fromEntries(communityTags.map((tg) => [tg.slug, tg.label]));
  const { isFavorite, toggleFavorite } = usePlaceFavorites(user?.id ?? null);
  const favorite = isFavorite(restaurant.type, restaurant.id);

  // Coordonnées de préférence, adresse en repli : une recherche par nom seul
  // ouvrirait n'importe laquelle des adresses d'une enseigne.
  const googleMapsQuery = restaurant.lat != null && restaurant.lng != null
    ? `${restaurant.lat},${restaurant.lng}`
    : [restaurant.name, restaurant.address].filter(Boolean).join(' ');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(googleMapsQuery)}`;

  const [reviews, setReviews] = useState(null);
  const [authors, setAuthors] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  // Carte dépliée À CÔTÉ de la fiche, ne portant que CE restaurant. Refermer la
  // fiche pour aller chercher le repère dans la liste faisait perdre le fil ;
  // et n'afficher que lui évite d'avoir à le retrouver parmi les autres.
  const [showMap, setShowMap] = useState(false);
  // Voir le commentaire sur le bouton d'ajout/retrait au programme.
  const [justToggledTrip, setJustToggledTrip] = useState(false);

  // Repère unique de la carte dépliée, mémorisé : écrit en tableau littéral, il
  // changeait d'identité à chaque rendu de la fiche, la carte reposait son
  // repère et se recadrait. Un simple ajout aux favoris ou l'arrivée des avis
  // annulait donc le déplacement que l'utilisateur venait de faire dessus.
  const mapPoints = useMemo(
    () => [{ id: restaurant.id, name: names.primary, lat: restaurant.lat, lng: restaurant.lng }],
    [restaurant.id, names.primary, restaurant.lat, restaurant.lng],
  );

  const placeKey = `${restaurant.type}:${restaurant.id}`;

  const loadReviews = useCallback(async () => {
    const { data } = await supabase
      .from('place_reviews')
      .select('id, user_id, rating, comment, photo_urls, photo_paths, created_at, updated_at')
      .eq('place_id', restaurant.id)
      .eq('place_type', restaurant.type)
      .order('created_at', { ascending: false });
    const rows = data || [];
    setReviews(rows);

    // Noms d'auteurs en une seule requête (pas une par avis).
    const ids = [...new Set(rows.map((r) => r.user_id))];
    if (ids.length) {
      const { data: profiles } = await supabase.from('profiles').select('id, display_name, avatar_url').in('id', ids);
      const map = {};
      (profiles || []).forEach((p) => { map[p.id] = p; });
      setAuthors(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeKey]);

  useEffect(() => { loadReviews(); }, [loadReviews]);

  // La feuille couvre tout l'écran sur mobile : laisser Échap sans effet
  // piégerait l'utilisateur au clavier.
  // Échap referme d'abord le formulaire d'avis s'il est ouvert, la fiche
  // seulement ensuite : une touche mal visée ne doit pas effacer un commentaire
  // en cours. Couche isolée (voir useEscapeLayer) pour ne pas fermer du même
  // coup l'explorateur ou la modale qui contient cette fiche.
  useEscapeLayer(() => {
    if (showForm) setShowForm(false);
    else onClose();
  });

  // Bouton retour du téléphone. Indispensable depuis que la fiche occupe tout
  // l'écran : plus rien du contexte n'est visible derrière elle, le geste
  // naturel pour « revenir » est le retour système — qui, sans cette entrée
  // d'historique à dépiler, quittait l'application entière au lieu de rendre la
  // liste des restaurants.
  // Contrairement à Échap, un seul niveau : le retour referme la fiche même si
  // le formulaire d'avis est ouvert. Ne fermer que le formulaire consommerait
  // l'entrée d'historique, et le retour suivant quitterait l'application.
  useModalHistory(onClose);

  const myReview = reviews?.find((r) => r.user_id === user?.id) ?? null;

  // Tous les avis sauf le mien : celui-ci est présenté à part, en tête.
  const otherReviews = (reviews || []).filter((r) => r.user_id !== user?.id);

  const renderReview = (r) => (
    <li key={r.id} className="resto-review">
      {/* Même en-tête que les avis de pays et de destination : pastille
          d'auteur (photo ou initiale colorée), nom, note, puis les actions
          POUSSÉES À DROITE — au milieu, la croix se lisait comme faisant
          partie de la note. */}
      <div className="resto-review-head">
        <Avatar profile={authors[r.user_id]} />
        <div className="resto-review-meta">
          <span className="resto-review-author">
            {authors[r.user_id]?.display_name || t('review.travelerFallback')}
          </span>
          <Stars value={r.rating} />
        </div>
        {r.user_id === user?.id && (
          <div className="resto-review-actions">
            {confirmDelete ? (
              <div className="review-confirm-delete">
                <span className="review-confirm-msg">{t('review.deleteConfirmMessage')}</span>
                <button className="review-confirm-no" onClick={() => setConfirmDelete(false)}>{t('common:no')}</button>
                <button className="review-confirm-yes" onClick={handleDeleteReview}>{t('common:yes')}</button>
              </div>
            ) : (
              // Crayon et poubelle côte à côte, aux classes partagées avec les
              // avis de pays et de destination (voir ReviewItem) : « modifier »
              // et « supprimer » portent sur le même avis, les séparer — le
              // crayon en tête de section, la poubelle sur la carte — obligeait
              // à les chercher à deux endroits.
              <>
                <button
                  className="review-action-btn review-action-btn--edit"
                  onClick={() => setShowForm(true)}
                  title={t('review.editTitle')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                </button>
                <button
                  className="review-action-btn review-action-btn--delete"
                  onClick={() => setConfirmDelete(true)}
                  title={t('common:actions.delete')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6l1 1h4v2H4V4h4l1-1zM5 8h14l-1 13H6L5 8zm5 2v8h1v-8h-1zm3 0v8h1v-8h-1z"/></svg>
                </button>
              </>
            )}
          </div>
        )}
      </div>
      {r.comment && <p className="resto-review-comment">{r.comment}</p>}
      {r.photo_urls?.length > 0 && (
        <div className="resto-review-photos">
          {r.photo_urls.map((url, i) => (
            <img key={i} src={url} alt="" className="resto-review-photo" loading="lazy" />
          ))}
        </div>
      )}
    </li>
  );

  function recomputeAndReport(nextReviews) {
    const count = nextReviews.length;
    const avg = count ? nextReviews.reduce((s, r) => s + r.rating, 0) / count : null;
    onRatingChange?.(avg, count);
  }

  async function handleDeleteReview() {
    const result = await callModeration('place-reviews', {
      action: 'delete', placeId: restaurant.id, placeType: restaurant.type,
    });
    if (result.ok) {
      const next = (reviews || []).filter((r) => r.user_id !== user.id);
      setReviews(next);
      setConfirmDelete(false);
      recomputeAndReport(next);
    }
  }

  return createPortal(
    // Fermeture au clic sur le fond, sauf pendant la rédaction d'un avis :
    // commentaire tapé et photos téléversées seraient perdus sans retour
    // possible. La croix reste toujours disponible.
    <div
      className="resto-sheet-overlay"
      onClick={(e) => { if (e.target === e.currentTarget && !showForm) onClose(); }}
    >
      <div className={`resto-sheet${showMap ? ' resto-sheet--with-map' : ''}`} role="dialog" aria-modal="true">
        <div className="resto-sheet-main">
        <div className="resto-sheet-body">
          {/* Plus de photo de présentation : une photo malheureuse choisie par
              un contributeur nuisait durablement au restaurant sans que
              personne ne puisse la retirer. Les photos passent désormais
              uniquement par les avis, comme sur les applications de cartes. */}
          <div className="resto-sheet-head">
            <div className="resto-sheet-head-text">
              <h3 className="resto-sheet-name">{names.primary}</h3>
              {/* Seconde graphie : pour un lecteur francophone, le nom d'origine
                  — celui qu'on cherchera des yeux sur la devanture. */}
              {names.secondary && <p className="resto-sheet-name-local">{names.secondary}</p>}
            </div>
            {/* Favori et fermeture DANS LE FLUX, côte à côte et de même taille.
                La croix était posée en absolu : elle flottait à une hauteur
                différente du favori, et les deux ronds se chevauchaient. */}
            <div className="resto-sheet-head-actions">
              {user && (
                <button
                  className={`resto-fav-btn${favorite ? ' resto-fav-btn--on' : ''}`}
                  onClick={() => toggleFavorite(restaurant.type, restaurant.id)}
                  aria-pressed={favorite}
                  title={favorite ? t('restaurants.favoriteRemove') : t('restaurants.favoriteAdd')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                    <path d="M17 3H7a2 2 0 0 0-2 2v16l7-4 7 4V5a2 2 0 0 0-2-2z" />
                  </svg>
                </button>
              )}
              <button className="resto-sheet-close" onClick={onClose} aria-label={t('restaurants.closeSheet')}>✕</button>
            </div>
          </div>

          {/* Origine, types de cuisine et budget sur UNE seule bande de
              pastilles. En trois rangées distinctes, la fiche s'ouvrait sur un
              empilement d'étiquettes avant même l'adresse ; ce sont pourtant
              trois qualificatifs de même nature, qui se lisent d'un balayage. */}
          <div className="resto-sheet-meta">
            <SourceBadge source={restaurant.source} />
            {(restaurant.cuisineTags || []).map((slug) => (
              <span key={slug} className="resto-card-tag">
                {cuisineTagLabel(slug, t, communityLabels)}
              </span>
            ))}
            {restaurant.budgetLevel && <span className="resto-card-budget">{BUDGET_SYMBOL[restaurant.budgetLevel]}</span>}
            {restaurant.ratingCount === 0 && (
              <span className="resto-card-rating--none">{t('restaurants.noRating')}</span>
            )}
          </div>

          {restaurant.address && (
            <div className="resto-sheet-address-row">
              {/* Repère de carte devant l'adresse : sans lui, deux lignes de
                  texte gris se confondaient avec le reste des informations
                  secondaires au lieu de se lire comme « où c'est ». */}
              <svg className="resto-sheet-address-pin" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
              </svg>
              <p className="resto-sheet-address">{restaurant.address}</p>
              {/* `?api=1` est le format d'URL universel de Google Maps : il
                  ouvre l'application sur téléphone et le site sur ordinateur,
                  sans avoir à détecter la plateforme. On vise les coordonnées
                  quand on les a — un nom d'enseigne seul retomberait sur la
                  mauvaise adresse d'une franchise. */}
              <a
                className="resto-sheet-gmaps"
                href={googleMapsUrl}
                rel="noopener noreferrer"
                title={t('restaurants.openInGoogleMaps')}
                onClick={(e) => { e.preventDefault(); openMapsUrl(googleMapsUrl); }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
                </svg>
                {t('restaurants.openInGoogleMaps')}
              </a>
            </div>
          )}

          <div className="resto-sheet-reviews">
            {/* Titre à gauche, action à droite : le bouton posé sous le titre se
                lisait comme le contenu de la section, pas comme son action. */}
            <div className="resto-sheet-reviews-head">
              <h4 className="resto-sheet-reviews-title">{t('restaurants.reviewsTitle')}</h4>
              {/* Uniquement « donner » son avis : la MODIFICATION est portée par
                  le crayon posé sur l'avis lui-même, à côté de sa poubelle.
                  Garder les deux ici doublonnait l'action et l'éloignait de ce
                  sur quoi elle porte. Le libellé reste dans `title` et
                  `aria-label` — un picto seul ne se lit pas au lecteur d'écran. */}
              {user && !showForm && !myReview && (
                <button
                  className="resto-review-edit-btn"
                  onClick={() => setShowForm(true)}
                  title={t('restaurants.writeReview')}
                  aria-label={t('restaurants.writeReview')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                </button>
              )}
            </div>

            <RatingSummary average={restaurant.ratingAvg ?? 0} counts={ratingCountsFrom(reviews)} />

            {!user && <p className="resto-form-hint">{t('restaurants.loginToReview')}</p>}

            {showForm && (
              <PlaceReviewForm
                placeId={restaurant.id}
                placeType={restaurant.type}
                countryCode={countryCode}
                countryName={countryName}
                existing={myReview}
                onCancel={() => setShowForm(false)}
                onSaved={async () => {
                  setShowForm(false);
                  await loadReviews();
                  // Rechargé depuis la base plutôt que recalculé localement :
                  // la moyenne renvoyée à la liste doit refléter exactement ce
                  // que la fonction SQL vient d'écrire sur la ligne du lieu.
                  const { data } = await supabase
                    .from(restaurant.type === 'community' ? 'destination_places' : 'static_destination_places')
                    .select('rating_avg, rating_count')
                    .eq('id', restaurant.id)
                    .maybeSingle();
                  if (data) onRatingChange?.(data.rating_avg != null ? Number(data.rating_avg) : null, data.rating_count ?? 0);
                }}
              />
            )}

            {reviews === null && <p className="resto-form-hint">{t('restaurants.loading')}</p>}
            {/* Exactement le rendu des avis de pays et de destination
                (.review-list-empty, voir ReviewList) : un simple texte centré.
                Une variante ornée d'icône et de cadre pointillé détonnait. */}
            {reviews?.length === 0 && !showForm && (
              <div className="review-list-empty">{t('restaurants.noReviews')}</div>
            )}

            {/* Mon avis isolé en tête, comme sur les avis de pays et de
                destination (voir .review-mon-avis-block) : on doit pouvoir
                retrouver et corriger le sien sans parcourir toute la liste. */}
            {myReview && !showForm && (
              <div className="review-mon-avis-block">
                <span className="review-mon-avis-label">{t('reviewList.myReviewLabel')}</span>
                <ul className="resto-review-list">
                  {renderReview(myReview)}
                </ul>
              </div>
            )}

            {otherReviews.length > 0 && (
              <span className="resto-reviews-others-label">{t('restaurants.otherReviews')}</span>
            )}
            <ul className="resto-review-list">
              {otherReviews.map(renderReview)}
            </ul>
          </div>
        </div>

        {/* Action principale, ancrée en bas et toujours atteignable, mais PAS LA
            MÊME selon d'où l'on vient :
            — en planification, on arrive d'une liste posée sur une carte, on
              sait donc déjà où est ce restaurant ; ce qu'on veut, c'est
              l'ajouter au programme de la ville en cours. Bouton plus discret
              que le pavé « Voir sur la carte » (il ne se déclenche qu'une fois),
              mais centré et bien visible.
            — depuis la fiche pays, la liste n'a pas de carte : « où est-ce ? »
              est la question qui reste, et la carte se déplie À CÔTÉ de la
              fiche plutôt que de la refermer, pour garder le fil de sa lecture. */}
        {canAddToTrip ? (
          <div className="resto-sheet-footer">
            <button
              className={`resto-sheet-trip-btn${alreadyAdded ? ' resto-sheet-trip-btn--done' : ''}${justToggledTrip ? ' resto-sheet-trip-btn--justtoggled' : ''}`}
              // Déjà au programme : le bouton devient un RETRAIT (second clic),
              // sur le modèle « abonné / se désabonner ». Il ne redevient inerte
              // que si le retrait est impossible.
              disabled={alreadyAdded && !canRemoveFromTrip}
              onMouseLeave={() => setJustToggledTrip(false)}
              // La fiche RESTE ouverte après l'ajout comme après le retrait.
              // Elle se refermait auparavant, ce qui rendait le geste
              // irréversible sans rouvrir la fiche, et privait de toute
              // confirmation : le bouton passait à « Au programme » puis
              // disparaissait aussitôt. En restant ouverte, elle montre le
              // nouvel état et laisse revenir sur son choix d'un second clic.
              //
              // Le curseur ne bouge pas après le clic : sans neutraliser le
              // survol jusqu'à ce qu'il sorte du bouton (même mécanisme que
              // les cartes de la liste), on voyait le rouge du retrait
              // s'appliquer instantanément à l'état qu'on vient d'atteindre
              // en ajoutant (signalé le 2026-07-31).
              onClick={() => {
                setJustToggledTrip(true);
                if (alreadyAdded) {
                  onRemoveFromTrip?.();
                  return;
                }
                // Le voyage reçoit le nom AFFICHÉ : une activité nommée
                // « 挽肉と米 » dans un planning en français serait illisible.
                onAddToTrip({ ...restaurant, displayName: names.primary });
              }}
            >
              {/* Coche et non plus « + » une fois le restaurant au programme :
                  c'est un CONSTAT, pas une action grisée. */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                {alreadyAdded
                  ? <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  : <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>}
              </svg>
              {/* Libellé LONG, contrairement au « Ajouter » de la liste :
                  ici rien autour ne dit où va le restaurant, et le pied de
                  fiche a la place de l'écrire en toutes lettres. */}
              {alreadyAdded ? t('restaurants.alreadyInPlanning') : t('restaurants.addToPlanning')}
            </button>
          </div>
        ) : restaurant.lat != null && restaurant.lng != null && (
          <div className="resto-sheet-footer">
            <button
              className={`resto-sheet-map-btn${showMap ? ' resto-sheet-map-btn--active' : ''}`}
              onClick={() => setShowMap((v) => !v)}
              aria-pressed={showMap}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
              </svg>
              {showMap ? t('restaurants.hideMap') : t('restaurants.showOnMap')}
            </button>
          </div>
        )}
        </div>

        {/* Un seul repère : ce restaurant. Reprendre toute la liste obligerait
            à le retrouver parmi les autres, alors qu'on vient précisément de
            demander « où est CELUI-CI ». */}
        {showMap && restaurant.lat != null && restaurant.lng != null && (
          <div className="resto-sheet-map-pane">
            <RestaurantPickerMap
              className="resto-sheet-map"
              points={mapPoints}
              selectedId={restaurant.id}
              numbered={false}
            />
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

// ─── Formulaire d'avis noté ─────────────────────────────────────────────────
// Volontairement distinct de ReviewForm : celui-ci porte toute la chaîne de
// notifications propre aux avis de pays et de destination (abonnés,
// propriétaire de la destination, badges), qui n'a pas de sens pour un
// restaurant. Le réutiliser aurait demandé de le trouer de conditions.
function PlaceReviewForm({ placeId, placeType, countryCode, countryName, existing, onCancel, onSaved }) {
  const { t } = useTranslation('app');
  const { user } = useAuth();
  const [rating, setRating] = useState(existing?.rating ?? 0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState(existing?.comment ?? '');
  const [photos, setPhotos] = useState(() =>
    (existing?.photo_urls || []).map((url, i) => ({
      file: null, preview: url, url, path: existing?.photo_paths?.[i] ?? null,
    }))
  );
  const [compressing, setCompressing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handlePhotos(e) {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    if (!files.length) return;
    setError('');
    const valid = [];
    let rejected = false;
    for (const file of files) {
      if (validateImageFile(file)) rejected = true;
      else valid.push(file);
    }
    if (rejected) setError(t('reviewForm.rejectedFiles'));
    if (!valid.length) return;
    setCompressing(true);
    const added = await Promise.all(valid.map(async (file) => {
      const compressed = await imageCompression(file, { maxSizeMB: 0.4, maxWidthOrHeight: 900, useWebWorker: true });
      return { file: compressed, preview: URL.createObjectURL(compressed), url: null, path: null };
    }));
    setPhotos((prev) => [...prev, ...added]);
    setCompressing(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (rating === 0 || submitting) return;
    setSubmitting(true);
    setError('');

    const finalUrls = [];
    const finalPaths = [];
    const newPhotos = [];
    try {
      for (const p of photos) {
        if (p.url) { finalUrls.push(p.url); finalPaths.push(p.path); continue; }
        const path = `${user.id}/resto_${placeId}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
        const { error: upErr } = await supabase.storage.from(REVIEW_BUCKET).upload(path, p.file);
        if (upErr) throw new Error(upErr.message);
        const url = supabase.storage.from(REVIEW_BUCKET).getPublicUrl(path).data.publicUrl;
        finalUrls.push(url);
        finalPaths.push(path);
        newPhotos.push({ url, path });
      }
    } catch {
      setError(t('reviewForm.photoUploadError'));
      setSubmitting(false);
      return;
    }

    const result = await callModeration('place-reviews', {
      action: 'save',
      placeId, placeType, countryCode, countryName,
      rating,
      comment: comment.trim(),
      newPhotos,
      photoUrls: finalUrls,
      photoPaths: finalPaths,
    });

    if (!result.ok) {
      setError(result.reason || t('reviewForm.publicationFailed'));
      setSubmitting(false);
      return;
    }
    onSaved();
  }

  const display = hovered || rating;

  return (
    <form className="resto-review-form" onSubmit={handleSubmit}>
      <div className="review-stars-row">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s} type="button"
            className={`review-star-btn${s <= display ? ' active' : ''}`}
            onMouseEnter={() => setHovered(s)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setRating(s)}
          >★</button>
        ))}
      </div>

      <textarea
        className="review-textarea"
        placeholder={t('restaurants.reviewPlaceholder')}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={3}
      />

      <div className="review-photos-row">
        {photos.map((p, i) => (
          <div key={i} className="review-photo-preview-wrap">
            <img src={p.preview} alt="" className="review-photo-preview" />
            {!submitting && <button type="button" className="review-photo-remove" onClick={() => setPhotos((prev) => prev.filter((_, j) => j !== i))}>✕</button>}
          </div>
        ))}
        {!submitting && !compressing && (
          <label className="review-photo-add-btn">
            <span className="review-photo-add-icon">+</span>
            <input type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handlePhotos} />
          </label>
        )}
        {compressing && <div className="review-photo-compressing"><div className="review-photo-spinner" /></div>}
      </div>

      {error && <div className="review-error">{error}</div>}

      <div className="review-form-actions">
        <button type="button" className="review-cancel-btn" onClick={onCancel} disabled={submitting}>
          {t('placesList.cancelButton')}
        </button>
        <button type="submit" className="review-submit" disabled={rating === 0 || submitting || compressing}>
          {submitting ? t('reviewForm.publishing') : existing ? t('reviewForm.updateButton') : t('reviewForm.publishButton')}
        </button>
      </div>
    </form>
  );
}
