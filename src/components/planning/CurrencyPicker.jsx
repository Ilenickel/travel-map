import { useState, useRef, useEffect, useMemo, useCallback, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { EXPENSE_CURRENCY_CODES, currencyName, currencySymbolOf, searchCurrencies } from '../../lib/expenseCurrencies';

// Largeur de repli quand aucun ancrage n'est fourni. Avec un `anchorRef`, la
// liste prend la largeur de l'élément ancré (le champ montant) — c'est ce qui
// la fait tomber pile sous lui plutôt que de pendre de travers.
const MENU_FALLBACK_WIDTH = 330;
// En dessous, les noms de devises commencent à être tronqués (le plus long,
// « Dirham des Émirats arabes unis », fait 30 caractères).
const MENU_MIN_WIDTH = 260;
const MENU_MAX_HEIGHT = 340;
const VIEWPORT_MARGIN = 8;

// Sélecteur de devise du formulaire de dépenses : ~150 devises, donc une
// recherche en haut de liste plutôt qu'un long défilement. Les devises des
// pays du voyage sont épinglées en tête — au Japon, JPY est déjà sélectionné
// et n'importe quelle autre devise reste à une frappe.
//
// Liste déroulante accrochée au champ, mais rendue en PORTAIL vers <body> et
// positionnée en `fixed` d'après la position réelle du déclencheur (même
// technique que le popover « partagé entre » de TripExpensesPanel) : en
// enfant du champ, elle se faisait rogner par le bas de la modale — on ne
// voyait que quatre devises sur 150.
export default function CurrencyPicker({ value, onChange, suggested = [], anchorRef = null }) {
  const { t, i18n } = useTranslation('planning');
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [pos, setPos] = useState(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const close = useCallback(() => { setOpen(false); setQuery(''); setPos(null); }, []);

  // Place la liste sous son ancrage — le CHAMP montant quand il est fourni,
  // pas le petit bouton déclencheur : calée sur le bouton (donc alignée à
  // droite, sur ~40px de large), elle pendait de travers et paraissait
  // décalée par rapport à la modale. Alignée sur le champ, elle tombe pile
  // dessous, aux mêmes bords. Bascule au-dessus s'il n'y a pas la place en
  // dessous, et hauteur plafonnée par l'espace réellement disponible : c'est
  // ce qui garantit qu'elle n'est jamais coupée.
  const place = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const anchor = anchorRef?.current || trigger;
    const a = anchor.getBoundingClientRect();
    const t = trigger.getBoundingClientRect();
    // visualViewport : sur iOS, innerHeight ne diminue pas quand le clavier
    // s'ouvre — sans ça la liste se calculerait une hauteur qui passe dessous.
    const vv = window.visualViewport;
    const vw = vv?.width ?? window.innerWidth;
    const vh = vv?.height ?? window.innerHeight;
    // getBoundingClientRect est relatif au viewport de mise en page ; on
    // ramène tout dans le repère du viewport VISUEL avant de comparer.
    const vTop = vv?.offsetTop ?? 0;
    const vLeft = vv?.offsetLeft ?? 0;

    const width = Math.max(
      Math.min(MENU_MIN_WIDTH, vw - VIEWPORT_MARGIN * 2),
      Math.min(anchorRef?.current ? a.width : MENU_FALLBACK_WIDTH, vw - VIEWPORT_MARGIN * 2)
    );
    const left = Math.max(
      vLeft + VIEWPORT_MARGIN,
      Math.min(a.left, vLeft + vw - width - VIEWPORT_MARGIN)
    );
    // Verticalement on suit le DÉCLENCHEUR : c'est lui qu'on vient de
    // toucher, la liste doit s'ouvrir dans son prolongement.
    const below = vTop + vh - t.bottom - VIEWPORT_MARGIN;
    const above = t.top - vTop - VIEWPORT_MARGIN;
    const openUp = below < 220 && above > below;
    const maxHeight = Math.min(MENU_MAX_HEIGHT, Math.max(160, (openUp ? above : below) - 6));
    setPos({
      left,
      width,
      maxHeight,
      ...(openUp
        ? { bottom: window.innerHeight - t.top + 6 }
        : { top: t.bottom + 6 }),
    });
  }, [anchorRef]);

  useLayoutEffect(() => {
    if (!open) return;
    place();
    // La modale de dépense défile derrière : on suit le champ plutôt que de
    // laisser la liste orpheline au milieu de l'écran. `capture` pour capter
    // aussi le défilement du corps de la modale, pas seulement celui de la page.
    window.addEventListener('scroll', place, true);
    window.addEventListener('resize', place);
    window.visualViewport?.addEventListener('resize', place);
    return () => {
      window.removeEventListener('scroll', place, true);
      window.removeEventListener('resize', place);
      window.visualViewport?.removeEventListener('resize', place);
    };
  }, [open, place]);

  // Fermeture au clic dehors et à Échap. En capture, comme le popover
  // « partagé entre » : la liste vit dans <body>, hors de la modale.
  // stopPropagation sur Échap, sinon la même touche fermerait aussi la modale
  // de dépense qui héberge ce sélecteur (deux niveaux d'un coup).
  useEffect(() => {
    if (!open) return;
    const closeIfOutside = (e) => {
      if (triggerRef.current?.contains(e.target)) return;
      if (menuRef.current?.contains(e.target)) return;
      close();
    };
    const closeOnEsc = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); close(); }
    };
    document.addEventListener('click', closeIfOutside, true);
    document.addEventListener('keydown', closeOnEsc, true);
    return () => {
      document.removeEventListener('click', closeIfOutside, true);
      document.removeEventListener('keydown', closeOnEsc, true);
    };
  }, [open, close]);

  // Le focus va sur la recherche à l'ouverture (le geste attendu est de taper
  // le nom ou le code) — sauf sur mobile, où ça ferait surgir le clavier
  // par-dessus la liste alors que la devise cherchée est souvent déjà dans
  // les suggestions juste en dessous.
  useEffect(() => {
    if (!open) return;
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) searchRef.current?.focus();
  }, [open]);

  const lang = i18n.language;
  // Suggestions dédupliquées et limitées aux devises réellement connues :
  // `suggested` vient du champ libre `costOfLiving.currency` des données pays,
  // qui peut citer un code exotique absent de la liste (et donc de l'API des
  // taux) — on ne veut pas proposer une devise qu'on ne saurait pas convertir.
  const suggestions = useMemo(
    () => [...new Set(suggested)].filter((c) => EXPENSE_CURRENCY_CODES.includes(c)),
    [suggested]
  );
  const results = useMemo(() => searchCurrencies(query, lang), [query, lang]);
  // Recherche en cours → une seule liste à plat (les suggestions n'ont plus
  // de sens quand on cherche « peso »). Sinon : suggestions en tête, puis
  // tout le reste sans les répéter.
  const searching = query.trim().length > 0;
  const rest = useMemo(
    () => (searching ? results : results.filter((c) => !suggestions.includes(c))),
    [searching, results, suggestions]
  );

  const pick = (code) => { onChange(code); close(); };

  const renderItem = (code) => (
    <button
      type="button"
      key={code}
      className={`pp-currency-item${code === value ? ' pp-currency-item--on' : ''}`}
      onClick={() => pick(code)}
    >
      {/* Symbole seul : afficher le code à côté n'apportait rien et donnait
          des lignes « AED AED » pour un tiers des devises, dont le symbole
          EST leur code (currencySymbolOf retombe dessus). */}
      <span className="pp-currency-item-symbol">{currencySymbolOf(code)}</span>
      <span className="pp-currency-item-name">{currencyName(code, lang)}</span>
      {code === value && (
        <svg className="pp-currency-item-check" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      )}
    </button>
  );

  return (
    <>
      {/* Déclencheur logé DANS le champ montant : pas de bordure ni de fond
          propres (une boîte dans la boîte jurait avec la ligne), juste un
          filet de séparation. Le code seul suffit — le symbole est déjà
          affiché en tête du champ, « € … € EUR » faisait doublon. */}
      <button
        ref={triggerRef}
        type="button"
        className="pp-currency-trigger"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        title={currencyName(value, lang)}
      >
        <span className="pp-currency-trigger-code">{value}</span>
        <svg className="pp-currency-trigger-chevron" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
        </svg>
      </button>

      {open && pos && createPortal(
        <div
          ref={menuRef}
          className="pp-currency-menu"
          style={{ left: pos.left, width: pos.width, maxHeight: pos.maxHeight, top: pos.top, bottom: pos.bottom }}
        >
          <div className="pp-currency-search-wrap">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/>
            </svg>
            <input
              ref={searchRef}
              className="pp-currency-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('expenses.currencySearchPlaceholder')}
              // Entrée valide le premier résultat : taper « jpy » puis Entrée
              // suffit, sans quitter le clavier pour viser la ligne.
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return;
                e.preventDefault();
                const first = searching ? rest[0] : (suggestions[0] ?? rest[0]);
                if (first) pick(first);
              }}
            />
          </div>

          <div className="pp-currency-list">
            {!searching && suggestions.length > 0 && (
              <>
                <div className="pp-currency-group-label">{t('expenses.currencySuggested')}</div>
                {suggestions.map(renderItem)}
                <div className="pp-currency-group-label">{t('expenses.currencyAll')}</div>
              </>
            )}
            {rest.map(renderItem)}
            {searching && rest.length === 0 && (
              <div className="pp-currency-empty">{t('expenses.currencyNoResult')}</div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
