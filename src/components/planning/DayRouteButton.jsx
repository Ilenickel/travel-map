import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { buildDayRoute, openMapsUrl, MAX_STOPS } from '../../lib/googleMapsRoute';
import useEscapeLayer from '../../hooks/useEscapeLayer';

// « Ouvrir la journée dans Google Maps » : enchaîne les étapes du jour en un
// itinéraire, dans l'ordre du planning.
//
// Une confirmation s'affiche AVANT d'ouvrir Maps dès que le résultat ne sera
// pas fidèle au planning :
//   - des étapes sans coordonnées seront absentes (elles sont listées) ;
//   - la journée dépasse le plafond de Google Maps et sera coupée (on dit où).
// Les deux avertissements se cumulent le cas échéant. Sans anomalie, on ouvre
// directement : imposer une confirmation qui n'apprend rien serait un clic de
// trop.

// `variant` :
//   - 'pill' (défaut, écran « Jour J ») : REPREND telle quelle la recette de
//     .pp-add-city-btn / .pp-add-menu-btn (bouton "Ajouter une ville" côté
//     ordinateur, "Ajouter" côté mobile) — bordure en dégradé, icône dans son
//     propre disque dégradé, recette clair/sombre déjà validée ailleurs dans
//     l'appli. 4 essais précédents avec une teinte inventée pour l'occasion
//     ont tous été refusés (2026-07-31) : ce bouton doit appartenir au MÊME
//     langage visuel que les autres actions "Ajouter", pas en inventer un.
//   - 'link' (vue par jour, une ligne par jour du voyage) : REPREND telle
//     quelle la recette de .pp-add-item-btn (le bouton "Ajouter" à l'intérieur
//     d'une liste) — plus légère, adaptée à sa répétition sur chaque jour.
export default function DayRouteButton({ stops, variant = 'pill' }) {
  const { t } = useTranslation();
  const [pending, setPending] = useState(null);

  useEscapeLayer(() => setPending(null), !!pending);

  const route = buildDayRoute(stops);
  // Aucune étape géolocalisée : il n'y a rien à ouvrir. Le bouton disparaît
  // plutôt que de mener à une carte vide.
  if (!route.url) return null;

  const hasWarning = route.missing.length > 0 || route.excludedCount > 0;

  const openRoute = (url) => openMapsUrl(url);

  const handleClick = () => {
    if (hasWarning) setPending(route);
    else openRoute(route.url);
  };

  return (
    <>
      <button
        className={`pp-day-route-btn pp-day-route-btn--${variant}`}
        onClick={handleClick}
        title={variant === 'link' ? t('dayRoute.button') : undefined}
      >
        {/* Icône dans son propre disque dégradé, comme le "+" de
            .pp-add-menu-btn-plus ou le svg de .pp-add-city-btn : ce disque
            EST la marque visuelle "action" dans cette appli, on la reprend au
            lieu d'inventer une autre convention. */}
        <span className="pp-day-route-btn-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>
          </svg>
        </span>
        {/* Vue par jour : libellé abrégé ("Voir sur Maps"), le contexte (la
            ligne du jour) dit déjà de quelle journée il s'agit — le texte
            complet serait trop lourd répété sur chaque jour du voyage. */}
        {variant === 'link' ? t('dayRoute.shortLabel') : t('dayRoute.button')}
      </button>

      {pending && createPortal(
        <div className="pp-day-route-overlay" onClick={(e) => { if (e.target === e.currentTarget) setPending(null); }}>
          <div className="pp-day-route-modal" role="dialog" aria-modal="true">
            <h3 className="pp-day-route-title">{t('dayRoute.confirmTitle')}</h3>

            {/* Étapes sans coordonnées : listées nommément, sinon on ne peut pas
                savoir ce qui manquera une fois dans Maps. */}
            {pending.missing.length > 0 && (
              <div className="pp-day-route-warn">
                <p className="pp-day-route-warn-text">
                  {t('dayRoute.missingGeo', { count: pending.missing.length })}
                </p>
                <ul className="pp-day-route-list">
                  {pending.missing.map((s) => <li key={s.id}>{s.name}</li>)}
                </ul>
              </div>
            )}

            {/* Troncature : on nomme la dernière étape retenue, pour situer
                exactement où l'itinéraire s'arrêtera. */}
            {pending.excludedCount > 0 && (
              <div className="pp-day-route-warn">
                <p className="pp-day-route-warn-text">
                  {t('dayRoute.tooManyStops', { max: MAX_STOPS, count: pending.excludedCount })}
                </p>
                <p className="pp-day-route-cut">
                  {t('dayRoute.cutAfter', { name: pending.cutAfter })}
                </p>
              </div>
            )}

            <div className="pp-day-route-actions">
              <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setPending(null)}>
                {t('common:actions.cancel')}
              </button>
              <button
                className="pp-btn pp-btn--primary pp-btn--sm"
                onClick={() => { openRoute(pending.url); setPending(null); }}
              >
                {t('dayRoute.confirmOpen')}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
