import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
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

  const toggleExpanded = (id) => {
    setExpandedId((cur) => (cur === id ? null : id));
    setAddingFor(null);
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
  };

  const submitExpense = async () => {
    if (!amountValid || saving) return;
    setSaving(true);
    await supabase.from('trip_expenses').insert({
      trip_id: tripId,
      payer_id: addingFor,
      created_by: userId,
      label: label.trim() || null,
      amount: Math.round(parsedAmount * 100) / 100,
    });
    setSaving(false);
    setAddingFor(null);
    loadAll();
  };

  const removeExpense = async (id) => {
    await supabase.from('trip_expenses').delete().eq('id', id);
    loadAll();
  };

  const byPayer = {};
  expenses.forEach((e) => { (byPayer[e.payer_id] ||= []).push(e); });
  const totalOf = (id) => (byPayer[id] || []).reduce((s, e) => s + Number(e.amount || 0), 0);
  const grandTotal = expenses.reduce((s, e) => s + Number(e.amount || 0), 0);
  // La moyenne se calcule sur les participants ACTUELS (membres + proprio) :
  // c'est entre eux que les comptes s'équilibrent, pas avec un ancien membre.
  const currentParticipants = participants.filter((p) => !p.isFormer);
  const average = currentParticipants.length ? grandTotal / currentParticipants.length : 0;
  const colorOf = (id) => {
    const idx = currentParticipants.findIndex((p) => p.id === id);
    return idx === -1 ? 'var(--text-muted)' : PARTICIPANT_COLORS[idx % PARTICIPANT_COLORS.length];
  };

  return (
    <div className="pp-expenses">
      {/* ── Bilan : gros total + barre de répartition (un segment coloré par
          participant, proportionnel à ce qu'il a payé) + légende cliquable —
          la part de chacun se lit d'un coup d'œil, sans ouvrir une carte. La
          même couleur ré-apparaît sur l'anneau de sa carte plus bas. */}
      <div className="pp-expenses-hero">
        <div className="pp-expenses-hero-icon" aria-hidden="true">🧾</div>
        <div className="pp-expenses-hero-total">{formatPrice(grandTotal)}</div>
        <div className="pp-expenses-hero-sub">{t('expenses.subtitle')}</div>

        {loaded && grandTotal > 0 && currentParticipants.length > 0 && (
          <>
            <div className="pp-expenses-bar">
              {currentParticipants.map(({ id }) => {
                const pct = (totalOf(id) / grandTotal) * 100;
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
                  <span className="pp-expenses-legend-pct">{Math.round((totalOf(id) / grandTotal) * 100)}%</span>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="pp-expenses-stats-row">
          <strong>{currentParticipants.length}</strong> {t('expenses.participantsLabel', { count: currentParticipants.length })}
          <span className="pp-expenses-stat-sep">·</span>
          {t('expenses.averageLabel')} <strong>{formatPrice(average)}</strong>
        </div>
      </div>

      {/* ── Liste des participants, en accordéon ── */}
      <div className="pp-expense-accordion">
        {loaded && participants.map(({ id, profile, isFormer }) => {
          const rows = byPayer[id] || [];
          const total = totalOf(id);
          const delta = grandTotal > 0 && !isFormer ? total - average : null;
          const color = isFormer ? 'var(--text-muted)' : colorOf(id);
          const isOpen = expandedId === id;
          return (
            <div
              key={id}
              className={`pp-expense-card${isFormer ? ' pp-expense-card--former' : ''}${isOpen ? ' pp-expense-card--open' : ''}`}
              style={{ '--p-color': color }}
            >
              {/* En-tête : nom complet à gauche (retour à la ligne autorisé —
                  le voir en entier prime), badge "Vous" dessous ; à droite le
                  montant avec le nombre de dépenses dessous. Pas de barre de
                  part ici : la répartition est déjà dans le bilan en haut. */}
              <button type="button" className="pp-expense-card-head" onClick={() => toggleExpanded(id)} aria-expanded={isOpen}>
                <span className="pp-expense-card-avatar-ring">
                  <Avatar profile={profile} size={32} />
                </span>
                <span className="pp-expense-card-who">
                  <span className="pp-expense-card-name">
                    <span className="pp-expense-card-name-text">{profile?.display_name || t('expenses.formerParticipant')}</span>
                  </span>
                  {id === userId && <span className="pp-expense-you-tag">{t('expenses.youTag')}</span>}
                  {isFormer && <span className="pp-expense-card-count">{t('expenses.formerNote')}</span>}
                </span>
                <span className="pp-expense-card-totals">
                  <span className="pp-expense-card-total">{formatPrice(total)}</span>
                  {!isFormer && (
                    <span className="pp-expense-card-count">{t('expenses.entriesCount', { count: rows.length })}</span>
                  )}
                  {delta !== null && Math.round(Math.abs(delta) * 100) > 0 && (
                    <span
                      className={`pp-expense-delta${delta > 0 ? ' pp-expense-delta--plus' : ' pp-expense-delta--minus'}`}
                      title={t('expenses.deltaTitle')}
                    >
                      {delta > 0 ? '↑' : '↓'} {formatPrice(Math.abs(delta))}
                    </span>
                  )}
                </span>
                <svg className="pp-expense-card-chevron" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
                </svg>
              </button>

              {isOpen && (
                <div className="pp-expense-card-body">
                  {rows.length > 0 && (
                    <>
                      <ul className="pp-expense-list">
                        {rows.slice(0, visibleCount).map((e) => (
                          <li key={e.id} className="pp-expense-row">
                            <span className="pp-expense-row-main">
                              <span className="pp-expense-row-label">{e.label || t('expenses.noLabel')}</span>
                              {e.created_at && (
                                <span className="pp-expense-row-date">{formatDateShort(e.created_at.slice(0, 10))}</span>
                              )}
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
                        ))}
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
                  ) : (
                    <button type="button" className="pp-add-item-btn pp-expense-add-btn" onClick={() => openAddForm(id)}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                      {t('expenses.addButton')}
                    </button>
                  )}
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
