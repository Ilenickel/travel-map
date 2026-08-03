import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { formatDateShort, addDaysToDateStr } from '../../lib/planningUtils';
import { useScrollIntoViewOnOpen } from '../../hooks/useScrollIntoViewOnOpen';
import { useModalHistory } from '../../hooks/useModalHistory';

// Menu "⋯" d'une JOURNÉE de la vue par jour. Jusqu'ici, agir sur une journée
// entière supposait de déplacer ses activités une par une : ce menu regroupe
// les gestes que l'utilisateur a naturellement en tête à l'échelle du jour
// (intervertir deux jours, décaler, s'offrir une journée de plus au milieu du
// voyage…). Toutes les actions passent par une confirmation qui décrit
// précisément ce qui va changer — plusieurs d'entre elles touchent au reste du
// voyage (décalage en cascade, date de fin), ce qui ne doit jamais surprendre.
//
// Le composant ne connaît AUCUNE règle métier : il compose un descripteur
// ({ kind, ... }) et le remet à `onRun`, qui vit dans DayView.

// Médaillon d'en-tête du dialogue : même famille visuelle que
// .pp-editorial-notice-icon (pastille ronde en dégradé accent) plutôt qu'un
// titre nu — c'est ce qui distingue une boîte de dialogue de l'application
// d'une alerte système.
const KIND_ICONS = {
  swap: '⇄', move: '→', duplicate: '⧉', insert: '＋', unplan: '↩', delete: '🗑',
};

// Item de menu — le `title` porte la raison d'un éventuel grisage, sinon rien
// n'expliquerait pourquoi l'action est inerte (ex : voyage d'un seul jour).
function MenuItem({ icon, label, onClick, disabled = false, disabledTitle, danger = false }) {
  return (
    <button
      type="button"
      className={`pp-dropdown-item${danger ? ' pp-dropdown-item--danger' : ''}`}
      onClick={onClick}
      disabled={disabled}
      title={disabled ? disabledTitle : undefined}
    >
      <span className="pp-day-actions-icon" aria-hidden="true">{icon}</span>
      {label}
    </button>
  );
}

// ─── Sélecteur de jour ──────────────────────────────────────────────────────
// Liste déroulante maison (et non un <select> natif, dont l'apparence est
// imposée par le système et détonne complètement avec le reste de l'écran) :
// même langage visuel que le sélecteur de devise (CurrencyPicker) — panneau
// arrondi rendu en PORTAIL et positionné en `fixed`, donc jamais rogné par la
// modale qui l'ouvre, lignes à coins arrondis, coche sur la ligne active,
// ascenseur masqué (on fait défiler au doigt/à la molette).
// `options` : les jours réellement proposés (souvent un sous-ensemble — les
// débuts de période possibles pour une interversion, par exemple).
// `allDays` : le voyage entier, UNIQUEMENT pour numéroter les jours. Les deux
// sont volontairement distincts : numéroter d'après la liste filtrée
// afficherait "J1" en face du 23 mars dès que les premiers jours ne sont pas
// proposés.
function DayPicker({ options, allDays, value, onChange, counts, disabledDay, emptyLabel }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const [pos, setPos] = useState(null);

  const place = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const below = window.innerHeight - r.bottom - 12;
    const above = r.top - 12;
    // S'ouvre vers le haut quand le bas manque de place : sur mobile, un champ
    // situé en bas de la modale n'aurait sinon que quelques pixels de liste.
    const openUp = below < 200 && above > below;
    setPos({
      left: Math.max(8, Math.min(r.left, window.innerWidth - r.width - 8)),
      width: r.width,
      maxHeight: Math.min(300, Math.max(140, openUp ? above : below)),
      ...(openUp ? { bottom: window.innerHeight - r.top + 6 } : { top: r.bottom + 6 }),
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    place();
    // La modale peut défiler sous la liste (formulaire "période" sur petit
    // écran) : plutôt que de suivre le champ image par image, on referme —
    // c'est le comportement des menus natifs et ça évite une liste qui
    // flotte au milieu de nulle part.
    const close = () => setOpen(false);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [open, place]);

  const label = (d) => (
    <>
      <span className="pp-day-pick-num">{t('day.short', { n: allDays.indexOf(d) + 1 })}</span>
      <span className="pp-day-pick-date">{formatDateShort(d)}</span>
      {counts?.[d] > 0 && (
        <span className="pp-day-pick-count" title={t('dayActions.dayCountTitle', { count: counts[d] })}>
          {counts[d]}
        </span>
      )}
    </>
  );

  const selectable = options.filter(d => d !== disabledDay);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`pp-day-pick-trigger${open ? ' pp-day-pick-trigger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        disabled={selectable.length === 0}
      >
        <span className="pp-day-pick-trigger-label">
          {value ? label(value) : <span className="pp-day-pick-empty">{emptyLabel}</span>}
        </span>
        <svg className="pp-day-pick-chevron" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
        </svg>
      </button>

      {open && pos && createPortal(
        <>
          <div className="pp-day-pick-backdrop" onClick={() => setOpen(false)} />
          <div
            className="pp-day-pick-menu"
            style={{ left: pos.left, width: pos.width, top: pos.top, bottom: pos.bottom, maxHeight: pos.maxHeight }}
          >
            {selectable.map(d => (
              <button
                key={d}
                type="button"
                className={`pp-day-pick-item${d === value ? ' pp-day-pick-item--on' : ''}`}
                onClick={() => { onChange(d); setOpen(false); }}
              >
                {label(d)}
                {d === value && (
                  <svg className="pp-day-pick-check" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>,
        document.body
      )}
    </>
  );
}

// Confirmation d'une action, dans un composant à part (et non un simple bloc
// JSX conditionnel du menu) pour deux raisons : son état de formulaire
// (jour cible, période) se réinitialise alors naturellement à chaque
// ouverture, puisqu'il est monté puis démonté ; et surtout `useModalHistory`
// ne peut s'appeler que depuis un composant réellement monté avec le
// dialogue — c'est lui qui fait que le bouton retour du téléphone referme
// CETTE confirmation au lieu de quitter le voyage entier.
function DayActionDialog({
  kind, day, dayIdx, days, tripEndDate, activityCount, countsByDay,
  hasContentAfter, insertExtendsEnd, onClose, onConfirm,
}) {
  const { t } = useTranslation();
  useModalHistory(onClose);

  // Interversion et déplacement partagent le même formulaire : une tranche de
  // jours (1 par défaut) et une destination.
  const hasPeriod = kind === 'swap' || kind === 'move';
  const needsTarget = hasPeriod || kind === 'duplicate';

  const [period, setPeriod] = useState(false);
  const [periodEnd, setPeriodEnd] = useState(day);
  // Jour proposé par défaut : le lendemain, ou la veille pour le dernier jour
  // du voyage — jamais le jour courant, qui ne veut rien dire comme cible.
  const [targetDay, setTargetDay] = useState(() => days[dayIdx + 1] || days[dayIdx - 1] || day);

  const periodLength = period ? Math.max(1, days.indexOf(periodEnd) - dayIdx + 1) : 1;
  const sourceEndIdx = dayIdx + periodLength - 1;

  // Une interversion échange deux tranches de MÊME longueur : la seconde doit
  // donc tenir entièrement dans le voyage ET ne pas chevaucher la première
  // (un jour ne peut pas être échangé avec lui-même). On ne propose que les
  // débuts valides plutôt que de laisser choisir puis refuser.
  const swapStarts = days.filter((d, i) =>
    i + periodLength - 1 <= days.length - 1 && (i + periodLength - 1 < dayIdx || i > sourceEndIdx));
  const targetChoices = kind === 'swap' ? swapStarts : days;
  // Cible dérivée (jamais un état à resynchroniser) : changer la longueur de
  // la période peut invalider le choix précédent, on retombe alors sur la
  // première possibilité — sans quoi le dialogue afficherait un jour cible
  // devenu impossible.
  const effectiveTarget = targetChoices.includes(targetDay) ? targetDay : (targetChoices[0] ?? null);
  const targetEnd = effectiveTarget ? addDaysToDateStr(effectiveTarget, periodLength - 1) : null;

  // Déplacer une période au-delà du dernier jour du voyage rallongerait celui-ci :
  // sans ça, les activités déplacées atterriraient sur des dates hors calendrier —
  // invisibles à l'écran, et pas non plus dans "Non planifiées".
  const moveExtendsTo = kind === 'move' && targetEnd && tripEndDate && targetEnd > tripEndDate ? targetEnd : null;
  const insertedDay = addDaysToDateStr(day, 1);
  const newEndAfterInsert = tripEndDate ? addDaysToDateStr(tripEndDate, 1) : null;
  const newEndAfterDelete = tripEndDate ? addDaysToDateStr(tripEndDate, -1) : null;

  // Une journée n'est pas un objet en base : déplacer une tranche qui ne
  // contient AUCUNE activité n'écrirait rien du tout. Plutôt que d'afficher
  // une confirmation de succès pour une action sans effet, on bloque et on
  // explique. (Compté sur toute la tranche, pas seulement sur la journée du
  // menu : une journée vide suivie de jours pleins reste, elle, déplaçable.)
  const rangeCount = days
    .slice(dayIdx, dayIdx + periodLength)
    .reduce((sum, d) => sum + (countsByDay?.[d] || 0), 0);
  const targetRangeCount = effectiveTarget
    ? days.slice(days.indexOf(effectiveTarget), days.indexOf(effectiveTarget) + periodLength)
      .reduce((sum, d) => sum + (countsByDay?.[d] || 0), 0)
    : 0;
  const nothingToMove = kind === 'move' && rangeCount === 0;
  // Deux tranches vides échangées ne produiraient elles non plus aucune
  // écriture — même garde-fou que pour le déplacement.
  const nothingToSwap = kind === 'swap' && (!effectiveTarget || (rangeCount === 0 && targetRangeCount === 0));
  const canConfirm = needsTarget
    ? (!!effectiveTarget && effectiveTarget !== day && !nothingToMove && !nothingToSwap)
    : true;

  const descriptor = () => {
    switch (kind) {
      case 'swap': return { kind, targetDay: effectiveTarget, spanDays: periodLength };
      case 'move': return { kind, targetDay: effectiveTarget, spanDays: periodLength, extendEndTo: moveExtendsTo };
      case 'duplicate': return { kind, targetDay: effectiveTarget };
      default: return { kind };
    }
  };

  const targetLabel = kind === 'swap'
    ? (period ? t('dayActions.targetLabelSwapPeriod') : t('dayActions.targetLabelSwap'))
    : (period ? t('dayActions.targetLabelMovePeriod') : t('dayActions.targetLabel'));

  return createPortal(
    <div className="pp-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="pp-modal pp-day-action-modal" role="dialog" aria-modal="true">
        <div className="pp-modal-header pp-day-action-header">
          <span className={`pp-day-action-badge${kind === 'delete' ? ' pp-day-action-badge--danger' : ''}`} aria-hidden="true">
            {KIND_ICONS[kind]}
          </span>
          <div className="pp-day-action-titles">
            <span className="pp-modal-title">{t(`dayActions.${kind}`)}</span>
            <span className="pp-day-action-subtitle">
              {t('dayActions.heading', { n: dayIdx + 1, date: formatDateShort(day) })}
            </span>
          </div>
          <button type="button" className="pp-icon-btn" onClick={onClose} aria-label={t('common:actions.cancel')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div className="pp-modal-body pp-day-action-body">
          {hasPeriod && (
            <label className="pp-day-action-check">
              <input
                type="checkbox"
                checked={period}
                onChange={(e) => { setPeriod(e.target.checked); setPeriodEnd(days[dayIdx + 1] || day); }}
              />
              <span>{t(kind === 'swap' ? 'dayActions.periodLabelSwap' : 'dayActions.periodLabel')}</span>
            </label>
          )}

          {hasPeriod && period && (
            <div className="pp-day-action-field">
              <span className="pp-day-action-label">{t('dayActions.periodUntilLabel')}</span>
              {/* Une période part TOUJOURS de la journée du menu : seuls les
                  jours suivants peuvent en fermer la fin. */}
              <DayPicker
                options={days.slice(dayIdx)}
                allDays={days}
                value={periodEnd}
                onChange={setPeriodEnd}
                counts={countsByDay}
              />
              <span className="pp-day-action-help">
                {t('dayActions.periodSummary', { count: periodLength, from: formatDateShort(day), through: formatDateShort(periodEnd) })}
              </span>
            </div>
          )}

          {needsTarget && (
            <div className="pp-day-action-field">
              <span className="pp-day-action-label">{targetLabel}</span>
              <DayPicker
                options={targetChoices}
                allDays={days}
                value={effectiveTarget}
                onChange={setTargetDay}
                counts={countsByDay}
                disabledDay={kind === 'swap' ? null : day}
                emptyLabel={t('dayActions.noTargetAvailable')}
              />
              {/* Fin de la seconde période : jamais choisie, toujours déduite
                  de la longueur de la première — deux tranches échangées
                  doivent avoir exactement la même durée. */}
              {period && targetEnd && (
                <span className="pp-day-action-help">
                  {t('dayActions.targetPeriodSummary', { from: formatDateShort(effectiveTarget), through: formatDateShort(targetEnd) })}
                </span>
              )}
            </div>
          )}

          <div className="pp-day-action-summary">
            {nothingToMove && <p>{t(period ? 'dayActions.moveEmptyRange' : 'dayActions.moveEmptyDay')}</p>}
            {kind === 'swap' && (nothingToSwap
              // `nb` et non `count` : ces deux phrases n'ont pas de forme
              // plurielle propre, et un `count` dans les options ferait
              // chercher à i18next des clés _one/_other inexistantes.
              ? <p>{t(targetChoices.length === 0 ? 'dayActions.swapNoRoom' : 'dayActions.swapEmpty', { nb: periodLength })}</p>
              : (period
                ? <p>{t('dayActions.swapPeriodText', {
                  count: periodLength, from: formatDateShort(day), through: formatDateShort(periodEnd),
                  to: formatDateShort(effectiveTarget), toEnd: formatDateShort(targetEnd),
                })}</p>
                : <p>{t('dayActions.swapText', { a: formatDateShort(day), b: formatDateShort(effectiveTarget) })}</p>
              )
            )}
            {kind === 'move' && !nothingToMove && (period
              ? <p>{t('dayActions.movePeriodText', {
                from: formatDateShort(day), through: formatDateShort(periodEnd),
                count: periodLength, to: formatDateShort(effectiveTarget), toEnd: formatDateShort(targetEnd),
              })}</p>
              : <p>{t('dayActions.moveText', { count: activityCount, from: formatDateShort(day), to: formatDateShort(effectiveTarget) })}</p>
            )}
            {kind === 'duplicate' && (
              <p>{t('dayActions.duplicateText', { count: activityCount, from: formatDateShort(day), to: formatDateShort(effectiveTarget) })}</p>
            )}
            {kind === 'insert' && <p>{t('dayActions.insertText', { date: formatDateShort(insertedDay) })}</p>}
            {kind === 'unplan' && <p>{t('dayActions.unplanText', { count: activityCount, date: formatDateShort(day) })}</p>}
            {kind === 'delete' && <p>{t('dayActions.deleteText', { date: formatDateShort(day), end: formatDateShort(newEndAfterDelete) })}</p>}
          </div>

          {/* Avertissements : même habillage ambre que le reste du site
              (.pp-fulltrip-notice), rouge quand il y a perte de planification. */}
          {kind === 'move' && moveExtendsTo && (
            <p className="pp-day-action-notice">{t('dayActions.moveExtendWarning', { date: formatDateShort(moveExtendsTo) })}</p>
          )}
          {kind === 'insert' && hasContentAfter && (
            <p className="pp-day-action-notice">{t('dayActions.insertShiftWarning', { date: formatDateShort(insertedDay) })}</p>
          )}
          {kind === 'insert' && insertExtendsEnd && (
            <p className="pp-day-action-notice">
              {t('dayActions.insertEndWarning', { from: formatDateShort(tripEndDate), to: formatDateShort(newEndAfterInsert) })}
            </p>
          )}
          {kind === 'delete' && activityCount > 0 && (
            <p className="pp-day-action-notice pp-day-action-notice--danger">
              {t('dayActions.deleteUnplanWarning', { count: activityCount })}
            </p>
          )}
        </div>

        <div className="pp-modal-footer pp-day-action-footer">
          <button type="button" className="pp-btn pp-btn--ghost pp-btn--sm" onClick={onClose}>
            {t('common:actions.cancel')}
          </button>
          <button
            type="button"
            className={`pp-btn pp-btn--sm ${kind === 'delete' ? 'pp-btn--danger' : 'pp-btn--primary'}`}
            onClick={() => onConfirm(descriptor())}
            disabled={!canConfirm}
          >
            {t('dayActions.confirm')}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function DayActionsMenu({
  day, dayIdx, days, tripEndDate, activityCount, doneCount, countsByDay,
  hasContentAfter, insertExtendsEnd, onRun, onStartSelection,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useScrollIntoViewOnOpen(open);
  // Dialogue ouvert : 'swap' | 'move' | 'duplicate' | 'insert' | 'unplan' | 'delete'
  const [dialog, setDialog] = useState(null);

  const singleDayTrip = days.length < 2;
  const isEmpty = activityCount === 0;

  const openDialog = (kind) => { setDialog(kind); setOpen(false); };

  const run = (descriptor) => {
    setDialog(null);
    setOpen(false);
    onRun(descriptor);
  };

  return (
    <div className="pp-day-actions-wrap" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className={`pp-icon-btn pp-day-actions-btn${open ? ' pp-icon-btn--active' : ''}`}
        onClick={() => setOpen(o => !o)}
        title={t('dayActions.menuTitle')}
        aria-label={t('dayActions.menuTitle')}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>

      {open && (
        <>
          <div className="pp-backdrop-overlay" onClick={() => setOpen(false)} />
          <div className="pp-city-menu-dropdown pp-day-actions-dropdown" ref={dropdownRef}>
            <div className="pp-day-actions-heading">
              {t('dayActions.heading', { n: dayIdx + 1, date: formatDateShort(day) })}
            </div>

            <MenuItem
              icon="☑" label={t('dayActions.select')}
              onClick={() => { setOpen(false); onStartSelection(); }}
              disabled={isEmpty} disabledTitle={t('dayActions.emptyDayTitle')}
            />
            <MenuItem
              icon={KIND_ICONS.swap} label={t('dayActions.swap')}
              onClick={() => openDialog('swap')}
              disabled={singleDayTrip} disabledTitle={t('dayActions.needTwoDaysTitle')}
            />
            <MenuItem
              icon={KIND_ICONS.move} label={t('dayActions.move')}
              onClick={() => openDialog('move')}
              disabled={singleDayTrip} disabledTitle={t('dayActions.needTwoDaysTitle')}
            />
            <MenuItem
              icon={KIND_ICONS.duplicate} label={t('dayActions.duplicate')}
              onClick={() => openDialog('duplicate')}
              disabled={singleDayTrip || isEmpty}
              disabledTitle={singleDayTrip ? t('dayActions.needTwoDaysTitle') : t('dayActions.emptyDayTitle')}
            />
            <MenuItem
              icon={KIND_ICONS.insert} label={t('dayActions.insert')}
              onClick={() => openDialog('insert')}
            />
            <MenuItem
              icon="✓"
              label={doneCount === activityCount ? t('dayActions.markUndone') : t('dayActions.markDone')}
              onClick={() => run({ kind: 'done', value: doneCount !== activityCount })}
              disabled={isEmpty} disabledTitle={t('dayActions.emptyDayTitle')}
            />
            <MenuItem
              icon={KIND_ICONS.unplan} label={t('dayActions.unplan')}
              onClick={() => openDialog('unplan')}
              disabled={isEmpty} disabledTitle={t('dayActions.emptyDayTitle')}
            />
            <MenuItem
              icon={KIND_ICONS.delete} label={t('dayActions.delete')} danger
              onClick={() => openDialog('delete')}
              disabled={singleDayTrip} disabledTitle={t('dayActions.needTwoDaysTitle')}
            />
          </div>
        </>
      )}

      {dialog && (
        <DayActionDialog
          kind={dialog}
          day={day}
          dayIdx={dayIdx}
          days={days}
          tripEndDate={tripEndDate}
          activityCount={activityCount}
          countsByDay={countsByDay}
          hasContentAfter={hasContentAfter}
          insertExtendsEnd={insertExtendsEnd}
          onClose={() => setDialog(null)}
          onConfirm={run}
        />
      )}
    </div>
  );
}
