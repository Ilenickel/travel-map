import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { findCountry } from '../data/index';

function relativeTime(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });
  if (diff < 60) return rtf.format(-Math.floor(diff), 'second');
  if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
  if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
  if (diff < 2592000) return rtf.format(-Math.floor(diff / 86400), 'day');
  return rtf.format(-Math.floor(diff / 2592000), 'month');
}

const AVATAR_COLORS = ['#6366f1','#8b5cf6','#ec4899','#f59e0b','#10b981','#3b82f6'];

function FlagImage({ country, code }) {
  if (!country?.emoji) return <span style={{ fontSize: 13 }}>{code}</span>;
  const chars = [...country.emoji];
  if (chars.length < 2) return <span>{country.emoji}</span>;
  const alpha2 = chars.slice(0, 2).map((c) => String.fromCharCode(c.codePointAt(0) - 0x1F1E6 + 65)).join('').toLowerCase();
  return (
    <img src={`https://flagcdn.com/w20/${alpha2}.png`} alt={country?.name || code}
      style={{ width: 16, borderRadius: 2, verticalAlign: 'middle', flexShrink: 0 }}
      onError={(e) => { e.currentTarget.style.display = 'none'; }} />
  );
}

export default function NotificationPanel({ notifications, onClose, onOpenCountry, markRead, markAllRead, deleteOne, deleteAll, deleteMany, hideOne }) {
  const [profiles, setProfiles] = useState({});
  const [tooltip, setTooltip] = useState(null); // { id, x, y }
  const [invitePending, setInvitePending] = useState(null); // id de la notif en cours de traitement
  const infoBtnRefs = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    const ids = [...new Set(notifications.map((n) => n.from_user_id).filter(Boolean))];
    if (!ids.length) return;
    supabase.from('profiles').select('id, display_name, avatar_url').in('id', ids)
      .then(({ data }) => {
        const map = {};
        (data || []).forEach((p) => { map[p.id] = p; });
        setProfiles(map);
      });
  }, [notifications]);

  async function handleClick(notif) {
    await markRead(notif.id);
    if (notif.type === 'new_follower') {
      onClose();
      return;
    }
    if (notif.type === 'destination_ownership_transfer') {
      onOpenCountry(notif.country_code, 'destinations', { destId: notif.destination_id });
    } else if (notif.type === 'new_dest_review' || notif.type === 'new_own_dest_review') {
      const underscore = notif.destination_id?.indexOf('_') ?? -1;
      const destLocalId = underscore !== -1 ? notif.destination_id.slice(underscore + 1) : null;
      let reviewId = notif.review_id ?? null;
      if (!reviewId && notif.destination_id && notif.from_user_id) {
        const { data: rev } = await supabase
          .from('destination_reviews')
          .select('id')
          .eq('destination_id', notif.destination_id)
          .eq('user_id', notif.from_user_id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        reviewId = rev?.id ?? null;
      }
      onOpenCountry(notif.country_code, 'destinations', { destId: destLocalId, reviewId });
    } else {
      onOpenCountry(notif.country_code, 'reviews', { reviewId: notif.review_id ?? null });
    }
    onClose();
  }

  async function handleAcceptInvite(notif) {
    const invitationId = notif.metadata?.invitation_id;
    const tripId = notif.metadata?.trip_id;
    if (!invitationId) return;
    setInvitePending(notif.id);
    const { error } = await supabase.rpc('accept_trip_invitation', { invitation_id: invitationId });
    setInvitePending(null);
    if (error) {
      // L'invitation n'est plus valide (annulée par l'organisateur, ou déjà traitée).
      // On retire la notification devenue inutile (son bouton Accepter n'aurait aucun
      // effet) plutôt que de laisser l'utilisateur bloqué sans feedback.
      await deleteOne(notif.id);
      alert("Cette invitation n'est plus disponible (elle a été annulée ou déjà traitée).");
      return;
    }
    await deleteOne(notif.id);
    onClose();
    navigate(tripId ? `/planifier?trip=${tripId}` : '/planifier');
  }

  async function handleDeclineInvite(notif) {
    const invitationId = notif.metadata?.invitation_id;
    if (!invitationId) { await deleteOne(notif.id); return; }
    setInvitePending(notif.id);
    await supabase.rpc('decline_trip_invitation', { invitation_id: invitationId });
    setInvitePending(null);
    await deleteOne(notif.id);
  }

  // Seul un vrai clic sur "Refuser" doit refuser une invitation de voyage. La croix
  // générique (ou "Tout supprimer") ne fait que la retirer visuellement du panneau :
  // elle reste "en attente" en base et réapparaîtra au prochain sondage/realtime tant
  // que l'utilisateur n'a pas explicitement accepté ou refusé.
  function handleDismiss(notif) {
    if (notif.type === 'trip_invitation') { hideOne(notif.id); return; }
    deleteOne(notif.id);
  }

  function handleDismissAll() {
    const invites = notifications.filter(n => n.type === 'trip_invitation');
    const others = notifications.filter(n => n.type !== 'trip_invitation');
    invites.forEach(n => hideOne(n.id));
    if (others.length) deleteMany(others.map(n => n.id));
  }

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="notif-panel">
      <div className="notif-panel-header">
        <span className="notif-panel-title">Notifications</span>
        <div className="notif-panel-actions">
          {unreadCount > 0 && (
            <button className="notif-mark-all" onClick={markAllRead}>Tout lire</button>
          )}
          {notifications.length > 0 && (
            <button className="notif-clear-all" onClick={handleDismissAll}>Tout supprimer</button>
          )}
        </div>
      </div>

      {tooltip && (
        <div className="notif-info-tooltip" style={{ top: tooltip.y, right: window.innerWidth - tooltip.x }}>
          Le créateur de cette destination s'est retiré. Vous avez maintenant le droit de la modifier ou de la supprimer.
        </div>
      )}

      {notifications.length === 0 ? (
        <div className="notif-empty">Aucune notification pour l'instant.</div>
      ) : (
        <div className="notif-list">
          {notifications.map((n) => {
            const isOwnershipTransfer = n.type === 'destination_ownership_transfer';
            const isNewFollower = n.type === 'new_follower';
            const isTripInvitation = n.type === 'trip_invitation';
            const followerList = isNewFollower ? (n.metadata?.followers ?? []) : null;
            const profile = (isOwnershipTransfer || isNewFollower) ? null : profiles[n.from_user_id];
            const name = isNewFollower
              ? (followerList[0]?.name || 'Voyageur')
              : (profile?.display_name || 'Voyageur');
            const color = AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
            const country = findCountry(n.country_code);

            let followerAvatarUrl = null;
            if (isNewFollower && followerList.length > 0) followerAvatarUrl = followerList[0].avatar;

            function followerText() {
              if (!followerList.length) return <>Quelqu'un vient de s'abonner à votre compte</>;
              if (followerList.length === 1)
                return <><strong>{followerList[0].name}</strong> vient de s'abonner à votre compte</>;
              if (followerList.length === 2)
                return <><strong>{followerList[0].name}</strong> et <strong>{followerList[1].name}</strong> viennent de s'abonner à votre compte</>;
              const others = followerList.length - 2;
              return <><strong>{followerList[0].name}</strong>, <strong>{followerList[1].name}</strong> et {others} autre{others > 1 ? 's' : ''} personne{others > 1 ? 's' : ''} se sont abonnées à votre compte</>;
            }

            return (
              <div
                key={n.id}
                className={`notif-item${!n.read ? ' notif-item--unread' : ''}`}
              >
                <button
                  className="notif-item-main"
                  onClick={() => { if (isTripInvitation) { if (!n.read) markRead(n.id); } else handleClick(n); }}
                >
                  <div className="notif-avatar">
                    {isOwnershipTransfer ? (
                      <div className="notif-avatar-system">🔑</div>
                    ) : isNewFollower ? (
                      followerAvatarUrl
                        ? <img src={followerAvatarUrl} alt={name} className="notif-avatar-img" />
                        : <div className="notif-avatar-initials" style={{ background: color }}>{name[0].toUpperCase()}</div>
                    ) : profile?.avatar_url ? (
                      <img src={profile.avatar_url} alt={name} className="notif-avatar-img" />
                    ) : (
                      <div className="notif-avatar-initials" style={{ background: color }}>{name[0].toUpperCase()}</div>
                    )}
                    {!n.read && <span className="notif-unread-dot" />}
                  </div>
                  <div className="notif-content">
                    <p className="notif-text">
                      {isOwnershipTransfer ? (
                        <>Vous êtes désormais responsable de la destination <strong>{n.destination_name}</strong></>
                      ) : isNewFollower ? (
                        followerText()
                      ) : isTripInvitation ? (
                        <><strong>{name}</strong> vous invite au voyage « {n.metadata?.trip_title || 'Voyage'} »</>
                      ) : n.type === 'new_own_dest_review' ? (
                        <><strong>{name}</strong> a laissé un avis sur votre destination <strong>{n.destination_name}</strong></>
                      ) : n.type === 'new_dest_review' ? (
                        <>
                          <strong>{name}</strong> a publié un avis sur <strong>{n.destination_name}</strong>{' '}
                          <span className="notif-country">
                            <FlagImage country={country} code={n.country_code} />
                            {' '}{country?.name || n.country_code}
                          </span>
                        </>
                      ) : (
                        <>
                          <strong>{name}</strong> a publié un avis sur{' '}
                          <span className="notif-country">
                            <FlagImage country={country} code={n.country_code} />
                            {' '}{country?.name || n.country_code}
                          </span>
                        </>
                      )}
                    </p>
                    <span className="notif-time">{relativeTime(n.created_at)}</span>
                    {isTripInvitation && (
                      <div className="notif-invite-actions" onClick={e => e.stopPropagation()}>
                        <button
                          className="notif-invite-btn notif-invite-btn--accept"
                          disabled={invitePending === n.id}
                          onClick={() => handleAcceptInvite(n)}
                        >
                          Accepter
                        </button>
                        <button
                          className="notif-invite-btn notif-invite-btn--decline"
                          disabled={invitePending === n.id}
                          onClick={() => handleDeclineInvite(n)}
                        >
                          Refuser
                        </button>
                      </div>
                    )}
                  </div>
                </button>
                {isOwnershipTransfer && (
                  <button
                    ref={el => { infoBtnRefs.current[n.id] = el; }}
                    className="notif-info-btn"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="En savoir plus"
                    onMouseEnter={() => {
                      const rect = infoBtnRefs.current[n.id]?.getBoundingClientRect();
                      if (rect) setTooltip({ id: n.id, x: rect.right, y: rect.bottom + 6 });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  >ℹ</button>
                )}
                <button
                  className="notif-delete-btn"
                  onClick={(e) => { e.stopPropagation(); handleDismiss(n); }}
                  title="Supprimer"
                >✕</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
