import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';

function Avatar({ profile }) {
  if (profile?.avatar_url) {
    return <img src={profile.avatar_url} alt="" className="pp-member-avatar" />;
  }
  const initial = (profile?.display_name || '?').charAt(0).toUpperCase();
  return <div className="pp-member-avatar pp-member-avatar--initials">{initial}</div>;
}

export default function TripShareModal({ tripId, trip, userId, onClose, onLeaveTrip }) {
  const { t } = useTranslation();
  const [tab, setTab] = useState('members');
  const [members, setMembers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [pseudo, setPseudo] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTimer, setSearchTimer] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ownerProfile, setOwnerProfile] = useState(null);
  const [kickConfirm, setKickConfirm] = useState(null);
  const [leaveConfirm, setLeaveConfirm] = useState(false);

  useEffect(() => {
    loadMembers();
    loadInvites();
    loadOwnerProfile();

    // Se rafraîchit dès qu'une invitation change de statut pendant que ce modal
    // reste ouvert (ex : l'invité refuse ou accepte pendant qu'on regarde la liste)
    const channel = supabase
      .channel(`trip-invitations-${tripId}`)
      .on('postgres_changes', {
        event: '*', schema: 'public', table: 'trip_invitations',
        filter: `trip_id=eq.${tripId}`,
      }, () => { loadInvites(); loadMembers(); })
      .on('postgres_changes', {
        event: '*', schema: 'public', table: 'trip_members',
        filter: `trip_id=eq.${tripId}`,
      }, () => loadMembers())
      .subscribe();

    // Filet de sécurité : si la réplication realtime n'est pas activée pour ces
    // tables côté Supabase, le canal ci-dessus ne se déclenche jamais. On rafraîchit
    // donc aussi par sondage pendant que le modal reste ouvert.
    const poll = setInterval(() => { loadInvites(); loadMembers(); }, 8000);

    return () => { supabase.removeChannel(channel); clearInterval(poll); };
  }, [tripId, trip?.user_id]);

  const loadOwnerProfile = async () => {
    if (!trip?.user_id) return;
    const { data } = await supabase.from('profiles').select('*').eq('id', trip.user_id).single();
    setOwnerProfile(data);
  };

  const loadMembers = async () => {
    const { data: rows } = await supabase
      .from('trip_members')
      .select('id, user_id, role, joined_at')
      .eq('trip_id', tripId);
    if (!rows || !rows.length) { setMembers([]); return; }
    // trip_members.user_id référence auth.users (pas profiles), donc PostgREST ne peut
    // pas résoudre un embed automatique profiles:user_id(...) — on récupère les profils
    // séparément et on les rattache nous-mêmes plutôt que de dépendre de cette relation.
    const { data: profs } = await supabase
      .from('profiles')
      .select('id, display_name, avatar_url')
      .in('id', rows.map(r => r.user_id));
    const profMap = {};
    (profs || []).forEach(p => { profMap[p.id] = p; });
    setMembers(rows.map(r => ({ ...r, profiles: profMap[r.user_id] || null })));
  };

  const loadInvites = async () => {
    const { data } = await supabase
      .from('trip_invitations')
      .select('id, invitee_email, invitee_id, created_at')
      .eq('trip_id', tripId)
      .eq('status', 'pending');
    setInvites(data || []);
  };

  const isOwner = trip?.user_id === userId;

  const handlePseudoChange = (val) => {
    setPseudo(val);
    setSelectedProfile(null);
    setStatus(null);
    clearTimeout(searchTimer);
    if (!val.trim() || val.trim().length < 2) {
      setSearchResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      const { data } = await supabase
        .from('profiles')
        .select('id, display_name, avatar_url, allow_trip_invitations')
        .ilike('display_name', `%${val.trim()}%`)
        .neq('id', userId)
        .limit(6);
      setSearchResults(data || []);
    }, 300);
    setSearchTimer(timer);
  };

  const selectProfile = (profile) => {
    setSelectedProfile(profile);
    setPseudo(profile.display_name);
    setSearchResults([]);
  };

  const handleInvite = async () => {
    if (!selectedProfile) {
      setStatus({ type: 'error', msg: t('share.errSelectUser') });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      if (selectedProfile.allow_trip_invitations === false) {
        setStatus({ type: 'error', msg: t('share.errNoInvitations') });
        return;
      }
      if (members.some(m => m.user_id === selectedProfile.id)) {
        setStatus({ type: 'error', msg: t('share.errAlreadyMember') });
        return;
      }
      if (invites.some(i => i.invitee_id === selectedProfile.id)) {
        setStatus({ type: 'error', msg: t('share.errAlreadyPending') });
        return;
      }
      const { data: invitation, error } = await supabase.from('trip_invitations').insert({
        trip_id: tripId,
        inviter_id: userId,
        invitee_email: selectedProfile.display_name,
        invitee_id: selectedProfile.id,
        status: 'pending',
      }).select().single();
      if (error || !invitation) { setStatus({ type: 'error', msg: t('share.errSendFailed') }); return; }
      const { error: notifErr } = await supabase.from('notifications').insert({
        user_id: selectedProfile.id,
        from_user_id: userId,
        type: 'trip_invitation',
        metadata: { trip_id: tripId, trip_title: trip?.title, invitation_id: invitation.id },
        read: false,
      });
      if (notifErr) console.error('[TripShareModal] notification insert failed:', notifErr);
      setStatus({ type: 'success', msg: t('share.successInviteSent', { name: selectedProfile.display_name }) });
      setPseudo('');
      setSelectedProfile(null);
      loadInvites();
    } finally {
      setLoading(false);
    }
  };

  const handleCancelInvite = async (id) => {
    // Fonction SECURITY DEFINER : passe le statut à 'cancelled' ET supprime la
    // notification reçue par l'invité (l'organisateur ne peut pas la supprimer
    // directement à cause du RLS restreint au destinataire de la notification).
    const { error } = await supabase.rpc('cancel_trip_invitation', { invitation_id: id });
    if (error) { console.error('cancel_trip_invitation failed:', error); return; }
    setInvites(prev => prev.filter(i => i.id !== id));
  };

  const handleKick = async (memberId) => {
    if (kickConfirm !== memberId) { setKickConfirm(memberId); return; }
    await supabase.from('trip_members').delete().eq('id', memberId);
    setMembers(prev => prev.filter(m => m.id !== memberId));
    setKickConfirm(null);
  };

  const handleLeave = async () => {
    if (!leaveConfirm) { setLeaveConfirm(true); return; }
    await onLeaveTrip(tripId);
    onClose();
  };

  return (
    <div className="pp-modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="pp-modal">
        <div className="pp-modal-header">
          <h3 className="pp-modal-title">{t('share.title')}</h3>
          <button className="pp-icon-btn" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>

        <div className="pp-modal-tabs">
          <button className={`pp-modal-tab${tab === 'members' ? ' active' : ''}`} onClick={() => setTab('members')}>
            {t('share.membersTab')} {members.length > 0 && <span className="pp-modal-tab-badge">{members.length + 1}</span>}
          </button>
          <button className={`pp-modal-tab${tab === 'invite' ? ' active' : ''}`} onClick={() => setTab('invite')}>
            {t('share.inviteTab')}
          </button>
        </div>

        <div className="pp-modal-body">
          {tab === 'members' && (
            <div className="pp-members-list">
              <div className="pp-member-row">
                <Avatar profile={ownerProfile} />
                <div className="pp-member-info">
                  <span className="pp-member-name">{ownerProfile?.display_name || t('share.ownerFallback')}</span>
                  <span className="pp-member-role pp-member-role--owner">{t('share.ownerRole')}</span>
                </div>
                {trip?.user_id === userId && <span className="pp-member-you">{t('share.youLabel')}</span>}
              </div>

              {members.map(m => (
                <div key={m.id} className="pp-member-row">
                  <Avatar profile={m.profiles} />
                  <div className="pp-member-info">
                    <span className="pp-member-name">{m.profiles?.display_name || t('share.travelerFallback')}</span>
                    <span className="pp-member-role">{t('share.travelerRole')}</span>
                  </div>
                  {m.user_id === userId && <span className="pp-member-you">{t('share.youLabel')}</span>}
                  {isOwner && m.user_id !== userId && (
                    <button
                      className={`pp-btn pp-btn--ghost pp-btn--xs${kickConfirm === m.id ? ' pp-btn--danger' : ''}`}
                      onClick={() => handleKick(m.id)}
                      title={kickConfirm === m.id ? t('common:actions.confirm') : t('share.removeTitle')}
                    >
                      {kickConfirm === m.id ? t('common:actions.confirm') : t('share.removeButton')}
                    </button>
                  )}
                  {!isOwner && m.user_id === userId && (
                    <button
                      className={`pp-btn pp-btn--ghost pp-btn--xs${leaveConfirm ? ' pp-btn--danger' : ''}`}
                      onClick={handleLeave}
                      title={leaveConfirm ? t('common:actions.confirm') : t('share.leaveThisTripTitle')}
                    >
                      {leaveConfirm ? t('common:actions.confirm') : t('tripCard.leaveTripButton')}
                    </button>
                  )}
                </div>
              ))}

              {invites.length > 0 && (
                <>
                  <div className="pp-members-section-label">{t('share.pendingInvitesLabel')}</div>
                  {invites.map(inv => (
                    <div key={inv.id} className="pp-member-row pp-member-row--pending">
                      <div className="pp-member-avatar pp-member-avatar--pending">✉️</div>
                      <div className="pp-member-info">
                        <span className="pp-member-name">{inv.invitee_email}</span>
                        <span className="pp-member-role">{t('share.pendingResponseLabel')}</span>
                      </div>
                      {isOwner && (
                        <button className="pp-btn pp-btn--ghost pp-btn--xs" onClick={() => handleCancelInvite(inv.id)}>
                          {t('common:actions.cancel')}
                        </button>
                      )}
                    </div>
                  ))}
                </>
              )}

              {members.length === 0 && invites.length === 0 && (
                <p className="pp-members-empty">{t('share.noCompanionsYet')}</p>
              )}
            </div>
          )}

          {tab === 'invite' && (
            <div className="pp-invite-form">
              <p className="pp-invite-desc">{t('share.inviteDesc')}</p>
              <div className="pp-invite-search-wrap">
                <div className="pp-invite-input-row">
                  <input
                    type="text"
                    className="pp-invite-input"
                    placeholder={t('share.pseudoPlaceholder')}
                    value={pseudo}
                    onChange={e => handlePseudoChange(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && selectedProfile) handleInvite(); }}
                    disabled={loading}
                    autoComplete="off"
                  />
                  <button
                    className="pp-btn pp-btn--primary pp-btn--sm"
                    onClick={handleInvite}
                    disabled={loading || !selectedProfile}
                  >
                    {loading ? '…' : t('share.inviteButton')}
                  </button>
                </div>
                {searchResults.length > 0 && !selectedProfile && (
                  <div className="pp-invite-results">
                    {searchResults.map(p => (
                      <button key={p.id} className="pp-invite-result-row" onClick={() => selectProfile(p)}>
                        <div className="pp-invite-result-avatar">
                          {p.avatar_url
                            ? <img src={p.avatar_url} alt="" />
                            : <span>{(p.display_name || '?').charAt(0).toUpperCase()}</span>
                          }
                        </div>
                        <span className="pp-invite-result-name">{p.display_name}</span>
                        {p.allow_trip_invitations === false && (
                          <span className="pp-invite-result-blocked" title={t('share.blockedTitle')}>🔒</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
                {pseudo.length >= 2 && searchResults.length === 0 && !selectedProfile && (
                  <div className="pp-invite-no-results">{t('share.noUserFound', { pseudo })}</div>
                )}
              </div>

              {selectedProfile && !status && (
                <div className="pp-invite-selected">
                  <div className="pp-invite-result-avatar">
                    {selectedProfile.avatar_url
                      ? <img src={selectedProfile.avatar_url} alt="" />
                      : <span>{(selectedProfile.display_name || '?').charAt(0).toUpperCase()}</span>
                    }
                  </div>
                  <span>{selectedProfile.display_name}</span>
                  <button className="pp-icon-btn" onClick={() => { setSelectedProfile(null); setPseudo(''); }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                  </button>
                </div>
              )}

              {status && (
                <div className={`pp-invite-status pp-invite-status--${status.type}`}>
                  {status.type === 'success' ? '✓' : '✕'} {status.msg}
                </div>
              )}

              <div className="pp-invite-note">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" opacity=".5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
                {t('share.accountNote')}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
