import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { callModeration } from '../../lib/moderation';
import { COUNTRIES } from '../../data/index';
import { localizeField } from '../../lib/localizeCountry';
import { countryAlpha2FromEmoji, matchingStaticDestinations, namesMatch } from '../../lib/planningUtils';
import { useWikipediaImages } from '../../hooks/useWikipediaImages';
import { formatWikiAttribution } from '../../lib/wikiAttribution';
import WikiImage from '../WikiImage';
import useIsMobile from '../../hooks/useIsMobile';

// Bouton "X lieux conseillés" affiché après l'ajout d'une ville en planification.
// Interroge les lieux communautaires + statiques déjà connus pour la
// destination correspondante (voir api/get-place-suggestions.js), plus les
// lieux éditoriaux figés (mustSee, écrits en dur dans src/data/<pays>.js) de
// cette même destination, et permet d'en ajouter directement à la ville en
// cours de planification. La géolocalisation est résolue à la volée
// (Geoapify) au moment de l'ajout, best-effort : le lieu reste ajoutable même
// si elle échoue.

// Lieux éditoriaux (mustSee) des destinations statiques correspondantes : déjà
// bilingues { fr, en } dans le JSON, donc simple localizeField — pas besoin de
// passer par le cache de traduction Google (ni de coût associé).
// `labelFr`/`labelEn` transmis tous les deux au serveur (voir api/geocode-place.js) :
// Geoapify/OSM connaît souvent bien mieux un lieu sous son nom anglais que sa
// traduction française (constaté empiriquement : "The Bund" trouve le lieu,
// "Le Bund" renvoie un résultat sans rapport en Mongolie ; "Shanghai Tower"
// trouve la tour, "tour de Shanghai" renvoie une école de langue). `labelFr`
// reste la clé de cache stable (editorial_place_geocache), peu importe quelle
// langue a fini par le géocoder avec succès.
function editorialPlacesFor(matchedDests, countryCode, lang) {
  return matchedDests.flatMap((d) =>
    (d.mustSee || []).map((m, idx) => {
      const bilingual = m?.name && typeof m.name === 'object';
      const labelFr = bilingual ? m.name.fr : m?.name;
      const labelEn = bilingual ? m.name.en : null;
      return {
        id: `editorial:${countryCode}:${d.id}:${idx}`,
        type: 'editorial',
        staticDestId: String(d.id),
        labelFr: labelFr || labelEn,
        labelEn: labelEn || labelFr,
        name: localizeField(m.name, lang),
        lat: null,
        lng: null,
        // Slug Wikipédia/Commons du lieu éditorial (déjà utilisé pour les
        // vignettes du panneau pays) : sert ici à l'aperçu photo au survol.
        wikipedia: m.wikipedia || null,
      };
    })
  );
}

export default function PlaceSuggestionsButton({ cityName, countryCode, countryName, tripId, cityId, existingActivityNames = [], onAddActivity }) {
  const { t } = useTranslation();
  const { t: tApp } = useTranslation('app'); // clés wikiCredit.* (voir lib/wikiAttribution.js)
  const [places, setPlaces] = useState(null); // null = pas encore chargé
  const [open, setOpen] = useState(false);
  const [addingId, setAddingId] = useState(null);
  // Lieu survolé — aperçu photo grand format à côté de la liste.
  const [hoveredId, setHoveredId] = useState(null);
  // Réf de la liste déroulante : sert à positionner l'aperçu photo, rendu
  // dans un portail vers <body> (voir plus bas).
  const listRef = useRef(null);
  // Réf du bouton déclencheur — sert à positionner la liste elle-même une
  // fois portalée vers <body> (voir plus bas).
  const triggerRef = useRef(null);
  // Sur mobile, la vraie photo en 42px était trop petite pour rien y voir et
  // décalait/repoussait le texte à la ligne selon sa forme — remplacée par
  // une icône fixe uniforme (signalé le 2026-07-24, "l'affichage des photos
  // est inutile... ça décale tout le texte"). L'aperçu grand format au tap
  // reste inchangé.
  const isMobile = useIsMobile(1024);
  const countryAlpha2 = countryAlpha2FromEmoji(COUNTRIES[countryCode]?.emoji);

  // Photos des lieux éditoriaux via Wikipédia/Commons (même source que les
  // vignettes du panneau pays, cache module partagé). Les lieux communautaires
  // portent déjà leur photo uploadée (imageUrl, voir api/get-place-suggestions.js).
  const wikiSlugs = (places || []).map((p) => p.wikipedia).filter(Boolean);
  const { images: wikiImages, meta: wikiMeta } = useWikipediaImages(wikiSlugs);
  const previewSrcFor = (place) =>
    place.imageUrl || (place.wikipedia ? wikiImages[place.wikipedia] : null) || null;
  // Attribution uniquement pour une photo Wikipédia/Commons — les photos
  // communautaires (place.imageUrl) sont uploadées par les utilisateurs du
  // site, aucune obligation d'attribution Wikimedia ne s'y applique.
  const previewMetaFor = (place) =>
    !place.imageUrl && place.wikipedia ? wikiMeta[place.wikipedia] : undefined;

  // Chargement discret dès le montage pour connaître le nombre de suggestions
  // (bouton masqué si aucune correspondance) sans attendre un clic préalable.
  useEffect(() => {
    let cancelled = false;
    const lang = i18n.language;
    const matchedStaticDests = matchingStaticDestinations(cityName, countryCode);
    const editorialPlaces = editorialPlacesFor(matchedStaticDests, countryCode, lang);
    (async () => {
      const result = await callModeration('get-place-suggestions', {
        cityName,
        countryCode,
        staticDestIds: matchedStaticDests.map((d) => String(d.id)),
        targetLanguage: lang,
      });
      if (cancelled) return;
      const communityPlaces = result.ok ? (result.places || []) : [];
      setPlaces([...editorialPlaces, ...communityPlaces]);
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName, countryCode, i18n.language]);

  const handleAdd = async (place) => {
    setAddingId(place.id);
    let lat = place.lat;
    let lng = place.lng;
    if (lat == null || lng == null) {
      // Géocodage + vérification (lexicale, repli IA) entièrement côté serveur
      // (voir api/geocode-place.js) — y compris pour les lieux éditoriaux
      // (mustSee), mis en cache dans editorial_place_geocache pour ne payer
      // Geoapify/l'IA qu'une seule fois par lieu, jamais deux.
      const geo = await callModeration('geocode-place', {
        placeType: place.type,
        placeId: place.type === 'editorial' ? undefined : place.id,
        staticCountryCode: place.type === 'static' ? countryCode : undefined,
        countryCode: place.type === 'editorial' ? countryCode : undefined,
        staticDestId: place.type === 'editorial' ? place.staticDestId : undefined,
        labelFr: place.type === 'editorial' ? place.labelFr : undefined,
        labelEn: place.type === 'editorial' ? place.labelEn : undefined,
        cityName,
        countryName,
        countryAlpha2,
        lang: i18n.language,
      });
      if (geo.ok && geo.geocoded) { lat = geo.lat; lng = geo.lng; }
    }
    await onAddActivity(tripId, cityId, place.name, {
      place_lat: lat ?? null,
      place_lng: lng ?? null,
      // Slug Wikipédia/Commons du lieu (lieux éditoriaux mustSee — les lieux
      // communautaires n'en ont pas) : stocké sur l'activité pour que la
      // vignette photo des suggestions reste exacte si ce voyage est ensuite
      // partagé en modèle (voir planning_modele_v11.sql).
      wikipedia: place.wikipedia ?? null,
    });
    setAddingId(null);
  };

  if (places === null) return null;
  if (places.length === 0) return null;

  return (
    <div className="pp-place-suggestions">
      <button ref={triggerRef} className="pp-place-suggestions-btn" onClick={() => setOpen((o) => !o)}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
        </svg>
        {t('placeSuggestions.button', { count: places.length })}
      </button>
      {open && triggerRef.current && createPortal(
        <>
          <div className="pp-backdrop-overlay" onClick={() => setOpen(false)} />
          <ul
            ref={listRef}
            className="pp-search-dropdown pp-place-suggestions-dropdown pp-place-suggestions-dropdown--portal"
            style={(() => {
              // Portalée vers <body> (pas un enfant normal du bouton) : sinon,
              // rognée par le premier ancêtre à overflow limité sur son
              // chemin — ici .pp-detail-body (scroll de l'onglet Activités),
              // qui coupe net la liste dès que le contenu au-dessus est trop
              // court pour lui laisser assez de hauteur (signalé le
              // 2026-07-23, "on ne voit pas le composant entier"). Même
              // technique que l'aperçu photo juste en dessous, position
              // calculée depuis le bouton déclencheur.
              const rect = triggerRef.current.getBoundingClientRect();
              return { position: 'fixed', left: rect.left, top: rect.bottom + 4, width: rect.width, zIndex: 200 };
            })()}
            onMouseLeave={() => setHoveredId(null)}
          >
          {places.map((place) => {
            // Source de vérité unique = les activités réellement présentes dans
            // la ville (persiste après un remontage du composant, et redevient
            // ajoutable si l'activité est supprimée ensuite — contrairement à un
            // état local qui resterait bloqué sur "Ajouté" indéfiniment).
            const added = existingActivityNames.some((n) => namesMatch(n, place.name));
            return (
              <li
                key={place.id}
                className="pp-search-item pp-place-suggestions-item"
                onMouseEnter={() => setHoveredId(place.id)}
              >
                {/* Vignette tactile (masquée sur desktop via CSS, où l'aperçu
                    grand format au survol prend le relais) — TOUJOURS rendue,
                    avec un repli générique si aucune photo n'est résolue :
                    avant, l'absence de photo faisait disparaître la vignette
                    entière, ne laissant aucun repère visuel qu'il pouvait y
                    en avoir une (signalé le 2026-07-23, "aucun moyen de voir
                    les photos"). Un tap dessus ouvre l'aperçu en grand — plus
                    besoin de survol (desktop) ni d'appui long pour le
                    découvrir. Sur mobile, l'icône est placée APRÈS le texte
                    (entre le nom et "Ajouter"), pas avant — demande du
                    2026-07-24. */}
                {!isMobile && (previewSrcFor(place) ? (
                  <button
                    type="button"
                    className="pp-place-suggestions-thumb-btn"
                    onClick={(e) => { e.stopPropagation(); setHoveredId((id) => (id === place.id ? null : place.id)); }}
                    title={t('placeSuggestions.previewImageAlt', { name: place.name })}
                  >
                    <WikiImage
                      className="pp-place-suggestions-thumb"
                      src={previewSrcFor(place)}
                      alt=""
                      meta={previewMetaFor(place)}
                    />
                  </button>
                ) : (
                  <span className="pp-place-suggestions-thumb pp-place-suggestions-thumb--placeholder" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
                    </svg>
                  </span>
                ))}
                <div className="pp-search-item-text">
                  <span className="pp-search-item-name">{place.name}</span>
                </div>
                {isMobile && previewSrcFor(place) && (
                  <button
                    type="button"
                    className="pp-place-suggestions-thumb pp-place-suggestions-thumb--icon"
                    // Set direct (pas un toggle) : sur mobile, le tap déclenche
                    // d'abord un mouseenter synthétique (onMouseEnter du <li>,
                    // qui fixe déjà hoveredId=place.id) PUIS le click — un
                    // toggle repartait donc aussitôt à null et annulait
                    // l'ouverture au premier tap, il fallait taper 2 fois
                    // (signalé le 2026-07-24). La fermeture reste possible via
                    // le fond de l'aperçu plein écran (overlay cliquable).
                    onClick={(e) => { e.stopPropagation(); setHoveredId(place.id); }}
                    title={t('placeSuggestions.previewImageAlt', { name: place.name })}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </button>
                )}
                <button
                  className="pp-btn pp-btn--ghost pp-btn--sm"
                  disabled={added || addingId === place.id}
                  onClick={() => handleAdd(place)}
                >
                  {addingId === place.id ? (
                    <span className="pp-search-busy" />
                  ) : added ? (
                    t('placeSuggestions.added')
                  ) : (
                    t('placeSuggestions.addButton')
                  )}
                </button>
              </li>
            );
          })}
          </ul>
        </>,
        document.body
      )}
      {open && (() => {
        // Aperçu photo grand format du lieu survolé, affiché à côté de la
        // liste (rien si le lieu n'a ni photo communautaire ni image
        // Wikipédia résolue — pas de cadre vide qui clignote). Rendu dans un
        // portail vers <body> : la colonne voisine (Groupes d'activité...)
        // crée son propre contexte d'empilement au-dessus de celui de la
        // colonne des villes — aucun z-index posé ici ne peut passer devant,
        // seul un portail sort l'aperçu de cette hiérarchie (même technique
        // que les cartes en cours de drag, voir ActivityItem). Position fixed
        // calculée depuis la liste, recalculée à chaque changement de survol.
        const hoveredPlace = places.find((p) => p.id === hoveredId);
        const previewSrc = hoveredPlace ? previewSrcFor(hoveredPlace) : null;
        if (!previewSrc || !listRef.current) return null;
        // Mobile (pas de survol utile, aperçu ouvert par TAP sur la vignette,
        // voir plus haut) : centré en overlay plein écran avec un fond
        // cliquable pour fermer, plutôt que positionné "à côté de la liste"
        // (calcul pensé pour desktop, n'a pas de sens sur un écran étroit —
        // signalé le 2026-07-23, "aucune solution pour voir les photos").
        // 1024 (pas 768) — même seuil que le reste de l'app depuis le
        // 2026-07-23 : resté à 768 ici, une tablette (survol tactile
        // inutilisable) retombait sur l'aperçu positionné "à côté de la
        // liste" pensé pour la souris, seul vrai moyen de voir une photo cassé.
        const isMobileViewport = window.innerWidth <= 1024;
        if (isMobileViewport) {
          return createPortal(
            <div className="pp-place-suggestions-preview-overlay" onClick={() => setHoveredId(null)}>
              <div className="pp-place-suggestions-preview pp-place-suggestions-preview--mobile" onClick={(e) => e.stopPropagation()}>
                <img
                  src={previewSrc}
                  alt={t('placeSuggestions.previewImageAlt', { name: hoveredPlace.name })}
                  className="pp-place-suggestions-preview-img"
                  decoding="async"
                />
                <span className="pp-place-suggestions-preview-name">{hoveredPlace.name}</span>
                {formatWikiAttribution(previewMetaFor(hoveredPlace), tApp) && (
                  <span className="pp-place-suggestions-preview-credit">
                    {formatWikiAttribution(previewMetaFor(hoveredPlace), tApp)}
                  </span>
                )}
              </div>
            </div>,
            document.body
          );
        }
        const rect = listRef.current.getBoundingClientRect();
        const PREVIEW_WIDTH = 340;
        // À droite de la liste par défaut ; bascule à gauche si le bord de
        // l'écran est trop proche.
        const fitsRight = rect.right + 12 + PREVIEW_WIDTH <= window.innerWidth;
        const left = fitsRight ? rect.right + 12 : Math.max(8, rect.left - 12 - PREVIEW_WIDTH);
        return createPortal(
          <div
            className="pp-place-suggestions-preview"
            style={{ left, top: rect.top }}
            aria-hidden="true"
          >
            {/* L'aperçu disparaît dès que la souris quitte la liste : un badge
                cliquable y serait inutilisable — le crédit est affiché en clair
                sous le nom, visible tant que la photo l'est. */}
            <img
              src={previewSrc}
              alt={t('placeSuggestions.previewImageAlt', { name: hoveredPlace.name })}
              className="pp-place-suggestions-preview-img"
              decoding="async"
            />
            <span className="pp-place-suggestions-preview-name">{hoveredPlace.name}</span>
            {formatWikiAttribution(previewMetaFor(hoveredPlace), tApp) && (
              <span className="pp-place-suggestions-preview-credit">
                {formatWikiAttribution(previewMetaFor(hoveredPlace), tApp)}
              </span>
            )}
          </div>,
          document.body
        );
      })()}
    </div>
  );
}
