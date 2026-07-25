import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation, Trans } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import { formatPrice, formatDateShort } from '../../lib/planningUtils';
import { currencySymbol } from '../../lib/currency';
import { useSettings } from '../../context/SettingsContext';

function Avatar({ profile, size }) {
  const style = size ? { width: size, height: size } : undefined;
  if (profile?.avatar_url) {
    return <img src={profile.avatar_url} alt="" className="pp-expense-avatar" style={style} />;
  }
  const initial = (profile?.display_name || '?').charAt(0).toUpperCase();
  return <div className="pp-expense-avatar pp-expense-avatar--initials" style={style}>{initial}</div>;
}

// Une couleur stable par participant (index dans la liste ACTUELLE, propriétaire
// d'abord) : reprise à l'identique sur le segment de la barre du bilan, le point
// de la légende et l'anneau de l'avatar dans sa carte — le même repère visuel
// partout, plutôt qu'un anneau vert/ambre qui ne parlait que du delta.
const PARTICIPANT_COLORS = ['#6366f1', '#14b8a6', '#f59e0b', '#ec4899', '#3b82f6', '#84cc16', '#f97316', '#a855f7'];

// Suivi des dépenses partagées ("qui a payé quoi") : un compte par
// participant du voyage, chacun peut ajouter/retirer des sommes. La liste des
// participants est DÉRIVÉE (propriétaire + trip_members + payeurs historiques),
// jamais stockée : une personne invitée en cours de voyage apparaît donc
// automatiquement, sans toucher aux montants déjà saisis pour les autres — et
// un ancien membre qui a payé des choses reste visible ("Ancien participant").
export default function TripExpensesPanel({ tripId, trip, userId, active = true }) {
  const { t } = useTranslation();
  useSettings(); // abonnement devise : formatPrice dépend de la devise choisie
  const [participants, setParticipants] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // Accordéon : un seul participant déplié à la fois (liste courte, on évite
  // le mur de cartes toutes ouvertes en même temps).
  const [expandedId, setExpandedId] = useState(null);
  const [addingFor, setAddingFor] = useState(null);
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const [saving, setSaving] = useState(false);
  // Bénéficiaires sélectionnés pour la dépense en cours de saisie : par
  // défaut TOUT le monde (comportement historique), l'utilisateur peut
  // décocher les personnes absentes de cette dépense précise (ex: un resto
  // partagé par 3 des 8 participants). Un Set d'ids, jamais vide tant que le
  // formulaire est ouvert (au moins le payeur reste coché).
  const [selectedBeneficiaries, setSelectedBeneficiaries] = useState(null);
  // Liste dépliante des bénéficiaires (voir openAddForm) : fermée par défaut,
  // tout le monde est déjà coché sans avoir à l'ouvrir — ne s'ouvre que si on
  // veut retirer quelqu'un. Évite d'afficher toutes les personnes à la suite
  // (encombrant dès 8-10 participants).
  const [benefsMenuOpen, setBenefsMenuOpen] = useState(false);
  // Petit popover "qui doit quoi à qui" ouvert depuis le i à côté du solde
  // d'un participant — un seul à la fois, indépendant de l'accordéon (peut
  // s'ouvrir même carte fermée).
  const [balanceInfoId, setBalanceInfoId] = useState(null);
  // Popover "partagé entre" ouvert depuis la pastille "N pers." d'une dépense
  // partielle — clic requis sur PC comme sur mobile (pas de hover natif),
  // un seul ouvert à la fois. Id de la dépense concernée, ou null.
  const [splitInfoId, setSplitInfoId] = useState(null);
  // Position (coordonnées écran) du popover "partagé entre" : rendu via portail
  // dans document.body pour échapper à l'overflow:hidden de .pp-expense-card
  // (sinon coupé net au bord de la carte, voir capture utilisateur).
  const [splitInfoPos, setSplitInfoPos] = useState(null);
  // Élément déclencheur ("N pers.") actuellement ouvert + le popover
  // lui-même : simples refs mutables (pas de callback ref ni de Map), pour
  // ignorer les clics à l'intérieur lors de la fermeture au clic dehors. La
  // position est calculée directement au clic (synchrone, voir onClick plus
  // bas) plutôt que dans un useEffect séparé : évite un aller-retour de rendu
  // en plus qui pouvait rater le bon état selon le timing.
  const splitTriggerElRef = useRef(null);
  const splitPopoverRef = useRef(null);

  useEffect(() => {
    if (!splitInfoId) return;
    const closeIfOutside = (e) => {
      if (splitTriggerElRef.current?.contains(e.target)) return;
      if (splitPopoverRef.current?.contains(e.target)) return;
      setSplitInfoId(null);
      setSplitInfoPos(null);
    };
    document.addEventListener('click', closeIfOutside, true);
    return () => {
      document.removeEventListener('click', closeIfOutside, true);
    };
  }, [splitInfoId]);
  // Un participant avec des dizaines/centaines de dépenses ne doit pas tout
  // dérouler d'un coup (le carnet Notes/Lieux paginent déjà ainsi ailleurs
  // dans l'app) : seules les PAGE_SIZE plus récentes sont montrées par défaut,
  // "Voir plus" en affiche PAGE_SIZE de plus. Réinitialisé à chaque ouverture
  // d'un autre participant (voir toggleExpanded).
  const PAGE_SIZE = 8;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const loadAll = useCallback(async () => {
    if (!tripId) return;
    const [{ data: memberRows }, { data: expenseRows }] = await Promise.all([
      supabase.from('trip_members').select('user_id').eq('trip_id', tripId),
      supabase.from('trip_expenses').select('*').eq('trip_id', tripId).order('created_at', { ascending: false }),
    ]);
    const memberIds = (memberRows || []).map((r) => r.user_id);
    const payerIds = (expenseRows || []).map((e) => e.payer_id);
    const allIds = [...new Set([trip?.user_id, ...memberIds, ...payerIds].filter(Boolean))];
    let profMap = {};
    if (allIds.length) {
      // Comme dans TripShareModal : trip_members.user_id référence auth.users,
      // pas profiles — pas d'embed PostgREST possible, on rattache nous-mêmes.
      const { data: profs } = await supabase
        .from('profiles')
        .select('id, display_name, avatar_url')
        .in('id', allIds);
      (profs || []).forEach((p) => { profMap[p.id] = p; });
    }
    const memberSet = new Set([trip?.user_id, ...memberIds].filter(Boolean));
    // Propriétaire d'abord, puis les membres (ordre alphabétique), puis les
    // anciens participants qui ont encore des sommes à leur nom.
    const ordered = [
      ...(trip?.user_id ? [trip.user_id] : []),
      ...memberIds
        .filter((id) => id !== trip?.user_id)
        .sort((a, b) => (profMap[a]?.display_name || '').localeCompare(profMap[b]?.display_name || '')),
      ...[...new Set(payerIds)].filter((id) => !memberSet.has(id)),
    ];
    setParticipants([...new Set(ordered)].map((id) => ({
      id,
      profile: profMap[id] || null,
      isFormer: !memberSet.has(id),
    })));
    setExpenses(expenseRows || []);
    setLoaded(true);
  }, [tripId, trip?.user_id]);

  // Rechargé à chaque ouverture de l'onglet (active) : sur un voyage partagé,
  // les sommes saisies par les autres depuis la dernière visite apparaissent.
  useEffect(() => {
    if (active) loadAll();
  }, [active, loadAll]);

  const parsedAmount = parseFloat(String(amount).replace(',', '.'));
  const amountValid = !Number.isNaN(parsedAmount) && parsedAmount > 0;

  // ── Dérivés (participants actuels, totaux, soldes) — calculés avant les
  // handlers qui les utilisent (ex: openAddForm coche tout le monde par
  // défaut). ──
  const byPayer = {};
  expenses.forEach((e) => { (byPayer[e.payer_id] ||= []).push(e); });
  const totalOf = (id) => (byPayer[id] || []).reduce((s, e) => s + Number(e.amount || 0), 0);
  // Participants ACTUELS (membres + propriétaire) : c'est entre eux que les
  // comptes s'équilibrent, pas avec un ancien membre.
  const currentParticipants = participants.filter((p) => !p.isFormer);

  // Bénéficiaires effectifs d'une dépense : sa liste explicite si elle en a
  // une (dépense limitée à quelques personnes), sinon TOUS les participants
  // actuels (comportement historique — une somme sans bénéficiaires précisés
  // reste partagée par tout le groupe).
  const effectiveBeneficiaries = (e) => (e.beneficiaries && e.beneficiaries.length)
    ? e.beneficiaries
    : currentParticipants.map((p) => p.id);

  // Une dépense est "partagée par tout le groupe" seulement si TOUS les
  // participants actuels en font partie — comparer les tailles ne suffit pas :
  // une dépense à 2 (A, B) sur un voyage à 3 (A, B, C) où B part ensuite
  // laisserait 2 participants actuels (A, C) pour une liste de bénéficiaires
  // toujours longue de 2 (A, B), un simple test de longueur la ferait donc
  // passer à tort pour "partagée par tout le groupe" et l'ajouterait à la
  // cagnotte commune. On vérifie donc que chaque participant ACTUEL est bien
  // dans la liste des bénéficiaires (peu importe si celle-ci contient aussi
  // un ancien participant, ex. B ci-dessus qui reste redevable).
  const isSharedByAll = (e) => {
    const benefs = effectiveBeneficiaries(e);
    return currentParticipants.every((p) => benefs.includes(p.id));
  };

  // La "cagnotte" globale du bilan n'inclut QUE les dépenses partagées par
  // TOUT le groupe : une dépense à 3 personnes sur un voyage à 8 ne doit pas
  // gonfler ce total commun — elle ne concerne que les 3 en question, et se
  // règle directement entre elles (voir le i de chaque carte), pas dans la
  // cagnotte.
  const sharedExpenses = expenses.filter(isSharedByAll);
  const grandTotal = sharedExpenses.reduce((s, e) => s + Number(e.amount || 0), 0);
  const hasPartialExpenses = expenses.length > sharedExpenses.length;
  // Part de chacun dans la cagnotte commune (uniquement les dépenses "pour
  // tout le monde"), utilisée pour la barre/légende du bilan — même périmètre
  // que grandTotal ci-dessus.
  const sharedPaidOf = (id) => sharedExpenses
    .filter((e) => e.payer_id === id)
    .reduce((s, e) => s + Number(e.amount || 0), 0);

  // Ce que chacun DOIT au total (sa part de TOUTES les dépenses auxquelles
  // il/elle participe, partielles incluses) : sert au solde payé-dû par
  // personne, périmètre différent de la cagnotte commune ci-dessus.
  const owedOf = (id) => expenses.reduce((s, e) => {
    const benefs = effectiveBeneficiaries(e);
    if (!benefs.includes(id)) return s;
    return s + Number(e.amount || 0) / benefs.length;
  }, 0);
  // Solde = ce qu'il a payé moins ce qu'il doit. Positif → on lui doit de
  // l'argent ; négatif → il doit encore de l'argent au groupe.
  const balanceOf = (id) => totalOf(id) - owedOf(id);

  const colorOf = (id) => {
    const idx = currentParticipants.findIndex((p) => p.id === id);
    return idx === -1 ? 'var(--text-muted)' : PARTICIPANT_COLORS[idx % PARTICIPANT_COLORS.length];
  };

  const nameOf = (id) => participants.find((p) => p.id === id)?.profile?.display_name || t('expenses.formerParticipant');

  // ── "Qui doit quoi à qui", nette DEUX À DEUX ──
  // Chaque dépense crée une dette de chaque bénéficiaire (hors le payeur
  // lui-même) vers le payeur, pour sa part. On NETTE ensuite ces dettes,
  // mais uniquement entre les DEUX MÊMES personnes (jamais à travers un
  // troisième) : si B doit 100 à A (hôtel) et que A doit 50 à B (train que B
  // a payé pour tout le monde), on affiche juste "B doit 50 à A" — mais ce
  // que C doit à B (sa part du train) reste une ligne à part, distincte de
  // ce que C doit à A (sa part de l'hôtel). Rien ne se mélange entre des
  // paires différentes, et une dépense à 3 seulement ne touche jamais le
  // 4e participant qui n'y était pas.
  const rawDebts = {}; // rawDebts[debtorId][creditorId] = montant brut dû
  expenses.forEach((e) => {
    const benefs = effectiveBeneficiaries(e);
    if (!benefs.length) return;
    const share = Number(e.amount || 0) / benefs.length;
    benefs.forEach((beneficiaryId) => {
      if (beneficiaryId === e.payer_id) return;
      rawDebts[beneficiaryId] = rawDebts[beneficiaryId] || {};
      rawDebts[beneficiaryId][e.payer_id] = (rawDebts[beneficiaryId][e.payer_id] || 0) + share;
    });
  });
  const owesTo = {}; // owesTo[debtorId] = [{ id: creditorId, amount }]
  const owedBy = {}; // owedBy[creditorId] = [{ id: debtorId, amount }]
  // Toutes les personnes impliquées dans au moins une dépense (payeur ou
  // bénéficiaire), PAS seulement les participants actuels : un ancien
  // participant qui doit encore de l'argent (ou à qui on doit encore de
  // l'argent) doit continuer à apparaître dans ce détail, sinon son solde
  // agrégé (balanceOf, qui lui inclut toutes les dépenses) ne correspondrait
  // plus à ce qui est montré ici.
  const allInvolvedIds = new Set(currentParticipants.map((p) => p.id));
  expenses.forEach((e) => {
    allInvolvedIds.add(e.payer_id);
    effectiveBeneficiaries(e).forEach((bid) => allInvolvedIds.add(bid));
  });
  const involvedIds = [...allInvolvedIds];
  involvedIds.forEach((x, i) => {
    involvedIds.slice(i + 1).forEach((y) => {
      const xOwesY = rawDebts[x]?.[y] || 0;
      const yOwesX = rawDebts[y]?.[x] || 0;
      const net = Math.round((xOwesY - yOwesX) * 100) / 100;
      if (net === 0) return;
      const [debtor, creditor, netAmount] = net > 0 ? [x, y, net] : [y, x, -net];
      (owesTo[debtor] ||= []).push({ id: creditor, amount: netAmount });
      (owedBy[creditor] ||= []).push({ id: debtor, amount: netAmount });
    });
  });

  const toggleExpanded = (id) => {
    setExpandedId((cur) => (cur === id ? null : id));
    setAddingFor(null);
    setBalanceInfoId(null);
    setBenefsMenuOpen(false);
    setSplitInfoId(null);
    setSplitInfoPos(null);
    setVisibleCount(PAGE_SIZE);
  };

  // Ouverture directe depuis la légende du bilan : même remise à zéro que
  // toggleExpanded (pagination et formulaire d'ajout appartiennent au
  // participant qu'on quitte), mais toujours OUVRIR, jamais replier.
  const openParticipant = (id) => {
    setExpandedId(id);
    setAddingFor(null);
    setVisibleCount(PAGE_SIZE);
  };

  const openAddForm = (payerId) => {
    setExpandedId(payerId);
    setAddingFor(payerId);
    setLabel('');
    setAmount('');
    setBenefsMenuOpen(false);
    // Par défaut : tout le monde partage la dépense (cas le plus courant).
    setSelectedBeneficiaries(new Set(currentParticipants.map((p) => p.id)));
  };

  // Bouton commun "Ajouter une dépense" (hors accordéon) : évite d'avoir à
  // ouvrir la carte du bon participant et défiler jusqu'à son bouton propre.
  // Payeur par défaut = l'utilisateur courant s'il est participant, sinon le
  // premier participant actuel ; la carte correspondante s'ouvre et défile
  // dans la vue.
  const openAddFormGlobal = () => {
    if (currentParticipants.length === 0) return;
    const defaultPayerId = currentParticipants.some((p) => p.id === userId)
      ? userId
      : currentParticipants[0].id;
    openAddForm(defaultPayerId);
    requestAnimationFrame(() => {
      document.getElementById(`pp-expense-card-${defaultPayerId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  const toggleBeneficiary = (id) => {
    // Le payeur fait forcément partie des bénéficiaires : illogique de payer
    // une somme dont on s'exclut soi-même (voir addingFor, l'id du payeur en
    // cours de saisie).
    if (id === addingFor) return;
    setSelectedBeneficiaries((cur) => {
      const next = new Set(cur);
      if (next.has(id)) {
        if (next.size === 1) return next; // au moins un bénéficiaire requis
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allBeneficiariesSelected = selectedBeneficiaries && selectedBeneficiaries.size === currentParticipants.length;

  const submitExpense = async () => {
    if (!amountValid || saving) return;
    setSaving(true);
    const beneficiaryIds = [...(selectedBeneficiaries || [])];
    await supabase.from('trip_expenses').insert({
      trip_id: tripId,
      payer_id: addingFor,
      created_by: userId,
      label: label.trim() || null,
      amount: Math.round(parsedAmount * 100) / 100,
      // Si tout le monde est coché, on stocke NULL (dépense partagée par le
      // groupe actuel) plutôt qu'une liste figée : un futur invité rejoindra
      // naturellement le partage de cette dépense-là aussi.
      beneficiaries: allBeneficiariesSelected ? null : beneficiaryIds,
    });
    setSaving(false);
    setAddingFor(null);
    loadAll();
  };

  const removeExpense = async (id) => {
    await supabase.from('trip_expenses').delete().eq('id', id);
    loadAll();
  };

  return (
    <div className="pp-expenses">
      {/* ── Bilan : gros total (dépenses partagées par TOUT le groupe
          uniquement) + barre de répartition + légende cliquable. Les
          dépenses partielles (ex: resto à 3) n'y entrent pas — elles se
          règlent directement entre les personnes concernées, voir le i de
          chaque carte. */}
      <div className="pp-expenses-hero">
        <div className="pp-expenses-hero-icon" aria-hidden="true">🧾</div>
        <div className="pp-expenses-hero-total">{formatPrice(grandTotal)}</div>
        <div className="pp-expenses-hero-sub">{t('expenses.subtitle')}</div>
        {hasPartialExpenses && (
          <div className="pp-expenses-hero-note">
            <Trans i18nKey="expenses.potNote" components={{ icon: <span className="pp-expense-delta-info-btn pp-expense-delta-info-btn--inline">i</span> }} />
          </div>
        )}

        {loaded && grandTotal > 0 && currentParticipants.length > 0 && (
          <>
            <div className="pp-expenses-bar">
              {currentParticipants.map(({ id }) => {
                const pct = (sharedPaidOf(id) / grandTotal) * 100;
                if (pct <= 0) return null;
                return <span key={id} style={{ width: `${pct}%`, background: colorOf(id) }} />;
              })}
            </div>
            <div className="pp-expenses-legend">
              {currentParticipants.map(({ id, profile }) => (
                <button
                  type="button"
                  key={id}
                  className="pp-expenses-legend-item"
                  onClick={() => openParticipant(id)}
                >
                  <span className="pp-expenses-legend-dot" style={{ background: colorOf(id) }} />
                  <span className="pp-expenses-legend-name">{profile?.display_name || t('expenses.formerParticipant')}</span>
                  <span className="pp-expenses-legend-pct">{Math.round((sharedPaidOf(id) / grandTotal) * 100)}%</span>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="pp-expenses-stats-row">
          <strong>{currentParticipants.length}</strong> {t('expenses.participantsLabel', { count: currentParticipants.length })}
        </div>

        {loaded && currentParticipants.length > 0 && (
          <div className="pp-expenses-footer">
            <div className="pp-expenses-footer-divider" aria-hidden="true" />
            <button type="button" className="pp-expense-add-trigger pp-expense-add-trigger--global" onClick={openAddFormGlobal}>
              <span className="pp-expense-add-trigger-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </span>
              {t('expenses.addButton')}
            </button>
          </div>
        )}
      </div>

      {/* ── Liste des participants, en accordéon ── */}
      <div className="pp-expense-accordion">
        {loaded && participants.map(({ id, profile, isFormer }) => {
          const rows = byPayer[id] || [];
          const total = totalOf(id);
          // Solde = payé - dû (basé sur les bénéficiaires réels de chaque
          // dépense, partielles incluses).
          const delta = !isFormer ? balanceOf(id) : null;
          const hasDelta = delta !== null && Math.round(Math.abs(delta) * 100) > 0;
          const color = isFormer ? 'var(--text-muted)' : colorOf(id);
          const isOpen = expandedId === id;
          const infoOpen = balanceInfoId === id;
          return (
            <div
              key={id}
              id={`pp-expense-card-${id}`}
              className={`pp-expense-card${isFormer ? ' pp-expense-card--former' : ''}${isOpen ? ' pp-expense-card--open' : ''}`}
              style={{ '--p-color': color }}
            >
              {/* En-tête : nom complet à gauche (retour à la ligne autorisé —
                  le voir en entier prime), badge "Vous" dessous ; à droite le
                  montant avec le nombre de dépenses dessous. Un <div> (pas un
                  <button>) car il contient le bouton "i" du solde : imbriquer
                  un bouton dans un bouton n'est pas valide en HTML. */}
              <div
                className="pp-expense-card-head"
                role="button"
                tabIndex={0}
                onClick={() => toggleExpanded(id)}
                onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggleExpanded(id); } }}
                aria-expanded={isOpen}
              >
                <span className="pp-expense-card-avatar-ring">
                  <Avatar profile={profile} size={32} />
                </span>
                <span className="pp-expense-card-who">
                  <span className="pp-expense-card-name">
                    <span className="pp-expense-card-name-text">{profile?.display_name || t('expenses.formerParticipant')}</span>
                  </span>
                  {id === userId && <span className="pp-expense-you-tag">{t('expenses.youTag')}</span>}
                  {isFormer && (
                    <span className="pp-expense-card-count pp-expense-card-count--wrap">{t('expenses.formerNote')}</span>
                  )}
                </span>
                <span className="pp-expense-card-totals">
                  <span className="pp-expense-card-total-row">
                    {isFormer && (
                      <button
                        type="button"
                        className="pp-expense-card-former-add"
                        title={t('expenses.addButton')}
                        onClick={(ev) => { ev.stopPropagation(); openAddForm(id); }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                      </button>
                    )}
                    <span className="pp-expense-card-total">{formatPrice(total)}</span>
                  </span>
                  {!isFormer && (
                    <span className="pp-expense-card-count">{t('expenses.entriesCount', { count: rows.length })}</span>
                  )}
                  {hasDelta && (
                    <span className={`pp-expense-delta${delta > 0 ? ' pp-expense-delta--plus' : ' pp-expense-delta--minus'}`}>
                      <span className="pp-expense-delta-arrow" aria-hidden="true">{delta > 0 ? '▲' : '▼'}</span> {formatPrice(Math.abs(delta))}
                      <button
                        type="button"
                        className="pp-expense-delta-info-btn"
                        title={t('expenses.balanceInfoTitle')}
                        onClick={(ev) => { ev.stopPropagation(); setBalanceInfoId((cur) => (cur === id ? null : id)); }}
                      >
                        i
                      </button>
                    </span>
                  )}
                </span>
                <svg className="pp-expense-card-chevron" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
                </svg>
              </div>

              {/* Popover "qui doit quoi à qui" pour cette personne : liste ce
                  qu'elle doit à chacun (net, après compensation deux-à-deux)
                  et ce qu'on lui doit — indépendant de l'accordéon, peut
                  s'ouvrir carte fermée. */}
              {infoOpen && (
                <div className="pp-expense-balance-popover">
                  {(owesTo[id] || []).map((o) => (
                    <div key={`owe-${o.id}`} className="pp-expense-balance-line">
                      <span className="pp-expense-balance-line-dot" style={{ background: colorOf(o.id) }} />
                      <span className="pp-expense-balance-line-text">{t('expenses.youOweLine', { name: nameOf(o.id) })}</span>
                      <span className="pp-expense-balance-line-amount pp-expense-delta--minus">{formatPrice(o.amount)}</span>
                    </div>
                  ))}
                  {(owedBy[id] || []).map((o) => (
                    <div key={`owed-${o.id}`} className="pp-expense-balance-line">
                      <span className="pp-expense-balance-line-dot" style={{ background: colorOf(o.id) }} />
                      <span className="pp-expense-balance-line-text">{t('expenses.owesYouLine', { name: nameOf(o.id) })}</span>
                      <span className="pp-expense-balance-line-amount pp-expense-delta--plus">{formatPrice(o.amount)}</span>
                    </div>
                  ))}
                  {!(owesTo[id]?.length) && !(owedBy[id]?.length) && (
                    <div className="pp-expense-balance-empty">{t('expenses.balanceAllSettled')}</div>
                  )}
                </div>
              )}

              {isOpen && (
                <div className="pp-expense-card-body">
                  {rows.length > 0 && (
                    <>
                      <ul className="pp-expense-list">
                        {rows.slice(0, visibleCount).map((e) => {
                          const benefs = effectiveBeneficiaries(e);
                          const isPartial = !isSharedByAll(e);
                          return (
                          <li key={e.id} className="pp-expense-row">
                            <span className="pp-expense-row-main">
                              <span className="pp-expense-row-label">{e.label || t('expenses.noLabel')}</span>
                              <span className="pp-expense-row-meta">
                                {e.created_at && (
                                  <span className="pp-expense-row-date">{formatDateShort(e.created_at.slice(0, 10))}</span>
                                )}
                                {isPartial && (
                                  <span className="pp-expense-row-split-wrap">
                                    <button
                                      type="button"
                                      className="pp-expense-row-split"
                                      onClick={(ev) => {
                                        ev.stopPropagation();
                                        if (splitInfoId === e.id) {
                                          setSplitInfoId(null);
                                          setSplitInfoPos(null);
                                          splitTriggerElRef.current = null;
                                          return;
                                        }
                                        const rect = ev.currentTarget.getBoundingClientRect();
                                        splitTriggerElRef.current = ev.currentTarget;
                                        setSplitInfoPos({ top: rect.bottom + 6, left: rect.left });
                                        setSplitInfoId(e.id);
                                      }}
                                    >
                                      {t('expenses.splitBadge', { count: benefs.length })}
                                    </button>
                                    {splitInfoId === e.id && splitInfoPos && createPortal(
                                      <div
                                        ref={splitPopoverRef}
                                        className="pp-expense-split-popover"
                                        style={{ top: splitInfoPos.top, left: splitInfoPos.left }}
                                      >
                                        <div className="pp-expense-split-popover-title">{t('expenses.sharedWithLabel')}</div>
                                        {benefs.map((bid) => {
                                          const bprofile = participants.find((p) => p.id === bid)?.profile;
                                          return (
                                            <div key={bid} className="pp-expense-split-popover-item">
                                              <Avatar profile={bprofile} size={18} />
                                              <span>{bprofile?.display_name || t('expenses.formerParticipant')}</span>
                                            </div>
                                          );
                                        })}
                                      </div>,
                                      document.body
                                    )}
                                  </span>
                                )}
                              </span>
                            </span>
                            <span className="pp-expense-row-amount">{formatPrice(Number(e.amount))}</span>
                            <button
                              type="button"
                              className="pp-expense-row-del"
                              onClick={() => removeExpense(e.id)}
                              title={t('expenses.deleteTitle')}
                            >
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                            </button>
                          </li>
                          );
                        })}
                      </ul>
                      {rows.length > visibleCount && (
                        <button
                          type="button"
                          className="pp-expense-showmore-btn"
                          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                        >
                          {t('expenses.showMore', { count: rows.length - visibleCount })}
                        </button>
                      )}
                    </>
                  )}

                  {addingFor === id ? (
                    <div className="pp-expense-add-form">
                      <div className="pp-expense-add-amount-wrap">
                        <span className="pp-expense-add-currency" aria-hidden="true">{currencySymbol()}</span>
                        <input
                          className="pp-expense-add-amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0,00"
                          inputMode="decimal"
                          autoFocus
                          onKeyDown={(e) => e.key === 'Enter' && submitExpense()}
                        />
                      </div>
                      <input
                        className="pp-expense-add-label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder={t('expenses.labelPlaceholder')}
                        onKeyDown={(e) => e.key === 'Enter' && submitExpense()}
                      />

                      {/* Qui partage cette dépense : par défaut tout le monde
                          (le cas courant, déjà coché sans avoir à ouvrir la
                          liste) — cliquer le déclencheur déplie une liste à
                          cocher pour retirer les absents, plutôt que de tout
                          afficher d'un coup (encombrant dès 8-10 personnes).
                          Leur part ne bougera pas et la cagnotte commune
                          n'inclut cette somme que si tout le monde reste
                          coché. Affiché à partir de 3 participants : à 2, la
                          dépense est forcément partagée par les deux. */}
                      {currentParticipants.length > 2 && (
                        <div className="pp-expense-add-benefs">
                          <div className="pp-expense-add-benefs-label">{t('expenses.sharedWithLabel')}</div>
                          <button
                            type="button"
                            className="pp-expense-benefs-trigger"
                            onClick={() => setBenefsMenuOpen((o) => !o)}
                            aria-expanded={benefsMenuOpen}
                          >
                            <span className="pp-expense-benefs-trigger-avatars">
                              {currentParticipants
                                .filter(({ id: pid }) => selectedBeneficiaries?.has(pid))
                                .slice(0, 4)
                                .map(({ id: pid, profile: pprofile }) => (
                                  <Avatar key={pid} profile={pprofile} size={20} />
                                ))}
                            </span>
                            <span className="pp-expense-benefs-trigger-label">
                              {allBeneficiariesSelected
                                ? t('expenses.sharedWithEveryone')
                                : t('expenses.sharedWithCount', { count: selectedBeneficiaries?.size || 0 })}
                            </span>
                            <svg className="pp-expense-benefs-trigger-chevron" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
                            </svg>
                          </button>
                          {benefsMenuOpen && (
                            <div className="pp-expense-benefs-menu">
                              {currentParticipants.map(({ id: pid, profile: pprofile }) => {
                                const checked = selectedBeneficiaries?.has(pid);
                                const isPayer = pid === addingFor;
                                return (
                                  <button
                                    type="button"
                                    key={pid}
                                    className={`pp-expense-benefs-menu-item${checked ? ' pp-expense-benefs-menu-item--on' : ''}${isPayer ? ' pp-expense-benefs-menu-item--locked' : ''}`}
                                    onClick={() => toggleBeneficiary(pid)}
                                    disabled={isPayer}
                                    title={isPayer ? t('expenses.payerAlwaysIncluded') : undefined}
                                  >
                                    <Avatar profile={pprofile} size={22} />
                                    <span className="pp-expense-benefs-menu-name">{pprofile?.display_name || t('expenses.formerParticipant')}</span>
                                    {isPayer ? (
                                      <svg className="pp-expense-benefs-menu-lock" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2zm6-9h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM8.9 6a3.1 3.1 0 0 1 6.2 0v2H8.9z"/>
                                      </svg>
                                    ) : (
                                      <span className="pp-expense-benefs-menu-check" aria-hidden="true">
                                        {checked && (
                                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                          </svg>
                                        )}
                                      </span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                          {!allBeneficiariesSelected && (
                            <div className="pp-expense-add-benefs-hint">
                              {t('expenses.splitHint', { count: selectedBeneficiaries?.size || 0 })}
                            </div>
                          )}
                        </div>
                      )}

                      <div className="pp-expense-add-actions">
                        <button type="button" className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingFor(null)}>
                          {t('common:actions.cancel')}
                        </button>
                        <button
                          type="button"
                          className="pp-btn pp-btn--primary pp-btn--sm"
                          onClick={submitExpense}
                          disabled={!amountValid || saving}
                        >
                          {t('common:actions.add')}
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {loaded && expenses.length === 0 && (
        <p className="pp-expenses-empty">{t('expenses.emptyHint')}</p>
      )}
    </div>
  );
}
