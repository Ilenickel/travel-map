import { useState, useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Bouton discret (icône calendrier) ouvrant un petit popover pour choisir la
// date de début d'une ville/excursion déjà ajoutée — facultative, elle sert
// uniquement à ANCRER un planning importé "en attente" (voir
// supabase/planning_modele_v10.sql, anchor_city_pending_days) : dès qu'elle
// est choisie, les activités importées reçoivent leurs vraies dates.
// Il n'y a plus de champ "jours prévus" séparé : la durée réellement occupée
// par la ville se déduit désormais des activités qui y sont datées (voir
// citiesForDay dans DayView.jsx), jamais d'une métadonnée saisie à la main
// qui pouvait se désynchroniser du contenu réel.
// `highlight` : ville dont les activités importées attendent encore une date de
// début (pending_day_index, voir planning_modele_v10.sql) — l'icône réapparaît
// alors en permanence dans l'en-tête de la ville (pas seulement dans le menu),
// avec un halo clignotant pour montrer qu'il reste une date à choisir.
export default function CityPlanningFieldsButton({
  city, tripStartDate, onUpdate, asMenuItem = false, highlight = false,
  hasPendingContent = false, siblingPendingBaseCitiesCount = 0,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  // Le popover s'ouvre normalement aligné à droite (right:0 en CSS), pensé
  // pour un déclencheur en bout de ligne — mais ce bouton n'est PAS le
  // dernier de .pp-city-actions (CityMenu "⋮" le suit), donc son bord droit
  // n'est pas forcément assez loin du bord droit de la carte pour laisser le
  // popover se déployer vers la gauche sans déborder du viewport à gauche.
  // Une simple bascule droite/gauche (comme .pp-selection-dropdown-wrap
  // .pp-group-day-dropdown) NE SUFFIT PAS ici : ce bouton est près du bord
  // DROIT de l'écran, donc grandir vers la droite déborderait encore plus.
  // On calcule directement la position gauche idéale (mesurée à l'ouverture)
  // et on la clampe dans les limites du viewport, quel que soit le côté où ça
  // finit par pencher. `null` = pas encore mesuré, CSS par défaut (right:0)
  // s'applique le temps d'un seul commit React (useLayoutEffect s'exécute
  // avant la peinture du navigateur, donc jamais de flash visible).
  const [popoverOffsetLeft, setPopoverOffsetLeft] = useState(null);
  // Brouillon LOCAL, jamais appliqué tant que "Confirmer" n'a pas été cliqué —
  // pour TOUTE date, pas seulement la suggestion pré-remplie : choisir une
  // date dans le calendrier ancre immédiatement les activités en attente
  // (anchor_city_pending_days) si la ville en a, ET une fois ancrée avec de
  // vraies activités, ce menu disparaît carrément (voir CityMenu, dateLocked)
  // — sans confirmation explicite, un simple clic maladroit dans le
  // sélecteur natif verrouillerait les jours des activités sans aucun moyen
  // d'y revenir depuis cette UI.
  const [draft, setDraft] = useState(city.start_date ?? tripStartDate ?? '');

  const handleToggleOpen = (e) => {
    e.stopPropagation();
    setOpen((o) => {
      const next = !o;
      // Réinitialise le brouillon sur la vraie valeur à chaque ouverture :
      // une valeur laissée en brouillon lors d'une fermeture sans confirmer
      // (clic à l'extérieur) ne doit pas réapparaître comme si elle était
      // sur le point d'être appliquée la fois suivante.
      if (next) setDraft(city.start_date ?? tripStartDate ?? '');
      return next;
    });
  };

  // Position gauche clampée dans le viewport, mesurée à l'ouverture —
  // POPOVER_WIDTH DOIT correspondre exactement à la largeur CSS fixe de
  // .pp-city-planning-popover (width: 250px, pas juste min-width : avec une
  // largeur variable selon le contenu, ce calcul pouvait sous-estimer la
  // largeur réelle et laisser déborder le popover quand même).
  useLayoutEffect(() => {
    if (!open || !wrapRef.current) return;
    const POPOVER_WIDTH = 250;
    const MARGIN = 12;
    const rect = wrapRef.current.getBoundingClientRect();
    // Position par défaut (right:0 en CSS) : bord droit du popover collé au
    // bord droit du déclencheur, donc bord gauche à rect.right - largeur.
    const idealScreenLeft = rect.right - POPOVER_WIDTH;
    const maxScreenLeft = window.innerWidth - POPOVER_WIDTH - MARGIN;
    const clampedScreenLeft = Math.max(MARGIN, Math.min(idealScreenLeft, maxScreenLeft));
    // Reconverti en décalage relatif au wrap (containing block de l'absolute) :
    // .pp-city-planning-popover-wrap n'a ni padding ni bordure, donc son bord
    // gauche en coordonnées écran est directement rect.left.
    setPopoverOffsetLeft(clampedScreenLeft - rect.left);
  }, [open]);

  const hasValue = city.start_date != null;
  const savedValue = city.start_date ?? '';
  const hasUnconfirmedChange = draft !== savedValue;

  // Cas où dater CETTE ville coupe le placement groupé d'un import complet :
  // le voyage n'a pas encore de date de départ, cette ville a du contenu
  // importé en attente, ET au moins UNE AUTRE ville de base attend aussi (le
  // ">1" exclut la ville elle-même du compte, voir DestinationBlock,
  // siblingPendingBaseCitiesCount). Confirmer ici ancre cette ville (voir
  // updateCity, anchor_city_pending_days) et — effet de bord de
  // extendTripEnvelopeForAnchor — donne au voyage une date de départ dérivée
  // de CETTE seule ville. Le halo "date de départ à remplir" disparaît alors
  // (TripEditorHeader, needsStartDateHighlight se base sur trip.start_date),
  // alors que les AUTRES villes en attente, elles, ne sont jamais ancrées :
  // plus aucun indice ne signale qu'il en reste à dater une par une. On ne
  // bloque pas ce choix (l'utilisateur peut avoir une bonne raison de dater
  // une ville en particulier) — juste prévenu avant de le faire.
  const wouldBreakGroupImport = hasPendingContent && !tripStartDate && siblingPendingBaseCitiesCount > 1;

  const handleConfirm = () => {
    onUpdate(city.id, { start_date: draft || null });
  };

  return (
    <div className="pp-city-planning-popover-wrap" ref={wrapRef}>
      <button
        type="button"
        className={asMenuItem ? 'pp-dropdown-item' : `pp-icon-btn${hasValue ? ' pp-icon-btn--active' : ''}${highlight ? ' pp-icon-btn--pulse' : ''}`}
        onClick={handleToggleOpen}
        title={asMenuItem ? undefined : (highlight ? t('city.pendingDateTitle') : t('city.startDateFieldTitle'))}
      >
        <svg width={asMenuItem ? 13 : 12} height={asMenuItem ? 13 : 12} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
        </svg>
        {asMenuItem && t('city.startDateFieldTitle')}
      </button>
      {open && (
        <>
          <div className="pp-backdrop-overlay" onClick={() => setOpen(false)} />
          <div
            className="pp-city-planning-popover"
            style={popoverOffsetLeft != null ? { left: popoverOffsetLeft, right: 'auto' } : undefined}
            onClick={(e) => e.stopPropagation()}
          >
            <label className="pp-new-city-options-field">
              <span>{t('city.startDateLabel')}</span>
              <div className="pp-city-start-date-row">
                <input
                  type="date"
                  className="pp-date-input"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
                <button
                  type="button"
                  className="pp-btn pp-btn--ghost pp-btn--sm pp-city-start-date-confirm"
                  disabled={!hasUnconfirmedChange}
                  onClick={handleConfirm}
                  title={t('city.confirmDateTitle')}
                >
                  {t('city.confirmDateButton')}
                </button>
              </div>
            </label>
            {wouldBreakGroupImport ? (
              <div className="pp-new-city-options-hint pp-new-city-options-hint--warning">
                ⚠️ {t('city.confirmDateBreaksGroupImportWarning')}
              </div>
            ) : (
              <div className="pp-new-city-options-hint">{t('city.startDateFieldHint')}</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
