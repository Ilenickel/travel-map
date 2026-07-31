import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { buildDayRoute, MAX_STOPS } from '../../lib/googleMapsRoute';
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

export default function DayRouteButton({ stops }) {
  const { t } = useTranslation();
  const [pending, setPending] = useState(null);

  useEscapeLayer(() => setPending(null), !!pending);

  const route = buildDayRoute(stops);
  // Aucune étape géolocalisée : il n'y a rien à ouvrir. Le bouton disparaît
  // plutôt que de mener à une carte vide.
  if (!route.url) return null;

  const hasWarning = route.missing.length > 0 || route.excludedCount > 0;

  const openRoute = (url) => {
    // `noopener` : la page ouverte ne doit pas pouvoir manipuler la nôtre.
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleClick = () => {
    if (hasWarning) setPending(route);
    else openRoute(route.url);
  };

  return (
    <>
      <button className="pp-day-route-btn" onClick={handleClick}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
        </svg>
        {t('dayRoute.button')}
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
