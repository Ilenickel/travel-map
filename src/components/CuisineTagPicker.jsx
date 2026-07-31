import { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import useAnchoredPanel from '../hooks/useAnchoredPanel';
import useEscapeLayer from '../hooks/useEscapeLayer';
import {
  PREDEFINED_CUISINE_TAGS, CUISINE_TAG_GROUPS,
  cuisineTagLabel, slugifyTag, tagMatchesQuery,
} from '../lib/cuisineTags';

// Sélecteur de types de cuisine, à choix multiple.
//
// Sert à DEUX usages avec le même composant, pour que filtrer et renseigner se
// fassent exactement de la même façon :
//   - filtre de la liste (« je ne veux voir que les sushis ») ;
//   - saisie à la contribution, où `allowCreate` autorise en plus la création
//     d'un type absent de la liste (il devient alors disponible pour tout le
//     monde).
//
// La liste dépasse la cinquantaine d'entrées : un champ de recherche la filtre
// à la volée, insensible à la casse et aux accents — taper « pi » suffit à
// faire remonter « Pizzeria ».

const GROUP_LABEL_KEY = {
  type: 'restaurants.tagGroupType',
  diet: 'restaurants.tagGroupDiet',
  world: 'restaurants.tagGroupWorld',
};

export default function CuisineTagPicker({
  selected = [],
  onChange,
  communityTags = [],
  allowCreate = false,
  // Appelée avec { slug, label } quand l'utilisateur crée un type absent de la
  // liste. Le libellé saisi n'existe nulle part ailleurs : sans cette remontée,
  // l'appelant n'aurait que le slug et ne pourrait pas l'enregistrer.
  onCreateTag = null,
  // Tags créés dans la session en cours, pas encore enregistrés.
  createdTags = [],
  // Affiche la sélection SOUS le champ, panneau fermé. Indispensable dans un
  // formulaire : sans ça, il faut rouvrir la liste pour se rappeler ce qu'on a
  // coché. Inutile en barre de filtres, où le compteur du bouton suffit.
  inlineSelection = false,
  triggerLabel,
  className = '',
}) {
  const { t } = useTranslation('app');
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const rootRef = useRef(null);
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  // Panneau portalé : en position absolue, il était rogné par le bas de la
  // modale d'ajout (`overflow: hidden`) — voir useAnchoredPanel. Plus large en
  // barre de filtres, aligné sur le champ en mode formulaire.
  const panelStyle = useAnchoredPanel(rootRef, open, {
    width: inlineSelection ? undefined : 300,
    maxHeight: 380,
  });

  useEffect(() => {
    if (!open) return undefined;
    // Le panneau est portalé : il n'est pas un descendant DOM de `rootRef`,
    // il faut donc le tester à part — sinon cocher une case refermerait la
    // liste au premier clic.
    const onDown = (e) => {
      if (rootRef.current?.contains(e.target) || panelRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    // Le champ de recherche prend le focus : c'est la raison d'être du panneau,
    // exiger un clic de plus pour taper serait une friction inutile.
    inputRef.current?.focus();
    return () => {
      document.removeEventListener('mousedown', onDown);
    };
  }, [open]);

  // Échap ferme le panneau SEUL : ouvert depuis la modale d'ajout, il en était
  // la couche supérieure et une frappe fermait les deux (voir useEscapeLayer).
  useEscapeLayer(() => setOpen(false), open);

  // Inclut les tags créés à l'instant (pas encore en base) pour que la pastille
  // du bas affiche le libellé saisi et non le slug.
  const communityLabels = useMemo(() => {
    const map = {};
    for (const tg of communityTags) map[tg.slug] = tg.label;
    for (const tg of createdTags) map[tg.slug] = tg.label;
    return map;
  }, [communityTags, createdTags]);

  // Tags communautaires rangés à part, sous leur propre intertitre : ils n'ont
  // pas de famille (personne ne la renseigne à la création).
  const groups = useMemo(() => {
    const out = CUISINE_TAG_GROUPS.map((group) => ({
      group,
      title: t(GROUP_LABEL_KEY[group]),
      tags: PREDEFINED_CUISINE_TAGS
        .filter((tg) => tg.group === group)
        .map((tg) => ({ slug: tg.slug, label: t(`cuisineTags.${tg.slug}`) }))
        .filter((tg) => tagMatchesQuery(tg.label, query))
        .sort((a, b) => a.label.localeCompare(b.label)),
    }));
    const community = communityTags
      .map((tg) => ({ slug: tg.slug, label: tg.label }))
      .filter((tg) => tagMatchesQuery(tg.label, query))
      .sort((a, b) => a.label.localeCompare(b.label));
    if (community.length) {
      out.push({ group: 'community', title: t('restaurants.badgeCommunity'), tags: community });
    }
    return out.filter((g) => g.tags.length);
  }, [query, communityTags, t]);

  const trimmed = query.trim();
  const newSlug = slugifyTag(trimmed);
  // Proposition de création : seulement si la recherche ne correspond à rien et
  // que le libellé produit un identifiant exploitable.
  const canCreate = allowCreate
    && trimmed.length >= 2
    && newSlug.length >= 2
    && !groups.length
    && !selected.includes(newSlug);

  const toggle = (slug) => {
    onChange(selected.includes(slug) ? selected.filter((s) => s !== slug) : [...selected, slug]);
  };

  const create = () => {
    // Le tag n'est PAS écrit en base ici : il ne le sera qu'à la publication du
    // restaurant (api/places.js), après modération de son libellé. Tant que le
    // formulaire n'est pas envoyé, rien ne doit apparaître pour les autres.
    onCreateTag?.({ slug: newSlug, label: trimmed });
    onChange([...selected, newSlug]);
    setQuery('');
  };

  // En mode formulaire, la sélection est listée sous le champ : le bouton
  // annonce donc l'action (« Choisir des types ») plutôt que de répéter un
  // compte déjà visible juste en dessous.
  const label = selected.length && !inlineSelection
    ? t('restaurants.filterCuisineCount', { count: selected.length })
    : (triggerLabel || t('restaurants.filterCuisineAny'));

  return (
    <div className={`resto-filter ${className}`.trim()} ref={rootRef}>
      <button
        type="button"
        className={`resto-filter-btn${selected.length && !inlineSelection ? ' resto-filter-btn--set' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {inlineSelection && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        )}
        <span className="resto-filter-btn-label">{label}</span>
        <svg
          className="resto-filter-btn-chevron"
          width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {/* Sélection visible panneau fermé (formulaire uniquement) : chaque
          pastille se retire d'un clic, sans rouvrir la liste. */}
      {inlineSelection && selected.length > 0 && (
        <div className="resto-tag-selected resto-tag-selected--inline">
          {selected.map((slug) => (
            <button
              key={slug}
              type="button"
              className="resto-tag-chip"
              onClick={() => toggle(slug)}
            >
              {cuisineTagLabel(slug, t, communityLabels)}
              <span aria-hidden="true">✕</span>
            </button>
          ))}
        </div>
      )}

      {open && panelStyle && createPortal(
        <div ref={panelRef} className="resto-filter-panel resto-filter-panel--tags" style={panelStyle}>
          <input
            ref={inputRef}
            className="resto-tag-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('restaurants.tagSearchPlaceholder')}
          />

          <div className="resto-tag-list">
            {groups.map((g) => (
              <div key={g.group} className="resto-tag-group">
                <div className="resto-tag-group-title">{g.title}</div>
                {g.tags.map((tg) => (
                  <label key={tg.slug} className="resto-tag-option">
                    <input
                      type="checkbox"
                      checked={selected.includes(tg.slug)}
                      onChange={() => toggle(tg.slug)}
                    />
                    <span>{tg.label}</span>
                  </label>
                ))}
              </div>
            ))}

            {!groups.length && !canCreate && (
              <p className="resto-tag-empty">{t('restaurants.tagNoMatch')}</p>
            )}

            {canCreate && (
              <div className="resto-tag-create">
                <p className="resto-tag-empty">{t('restaurants.tagNoMatch')}</p>
                <button type="button" className="resto-tag-create-btn" onClick={create}>
                  {t('restaurants.tagCreate', { label: trimmed })}
                </button>
                <p className="resto-tag-create-hint">{t('restaurants.tagCreateHint')}</p>
              </div>
            )}
          </div>

          {selected.length > 0 && (
            <div className="resto-tag-selected">
              {selected.map((slug) => (
                <button
                  key={slug}
                  type="button"
                  className="resto-tag-chip"
                  onClick={() => toggle(slug)}
                  title={t('restaurants.clearFilters')}
                >
                  {cuisineTagLabel(slug, t, communityLabels)}
                  <span aria-hidden="true">✕</span>
                </button>
              ))}
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}
