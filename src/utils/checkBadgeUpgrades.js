import { supabase } from '../lib/supabase';
import {
  BADGE_EXPLORATEUR, BADGE_DECOUVERTE, BADGE_COMMUNAUTE,
  computeExplorateurLevel, computeDecouverteLevel,
  computeCommunauteScore, computeCommunauteLevel,
  ALL_BADGE_DEFS,
} from './badges';

export async function checkBadgeUpgrades(userId) {
  if (!userId) return [];

  const [
    { data: profile },
    { count: visitedCount },
    { count: reviewCount },
    { data: dests },
  ] = await Promise.all([
    supabase.from('profiles')
      .select('badge_explorateur, badge_decouverte, badge_communaute')
      .eq('id', userId)
      .single(),
    supabase.from('carnet_visited')
      .select('country_code', { count: 'exact', head: true })
      .eq('user_id', userId),
    supabase.from('reviews')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', userId),
    supabase.from('user_destinations')
      .select('id, destination_places(count)')
      .eq('user_id', userId),
  ]);

  if (!profile) return [];

  const destinations = (dests || []).map((d) => ({
    places_count: d.destination_places?.[0]?.count ?? 0,
  }));
  const communauteScore = computeCommunauteScore(reviewCount || 0, destinations);

  const computed = {
    explorateur: computeExplorateurLevel(visitedCount || 0),
    decouverte:  computeDecouverteLevel(),
    communaute:  computeCommunauteLevel(communauteScore),
  };

  const stored = {
    explorateur: profile.badge_explorateur ?? 0,
    decouverte:  profile.badge_decouverte  ?? 0,
    communaute:  profile.badge_communaute  ?? 0,
  };

  const upgrades = [];
  const DEFS = {
    explorateur: BADGE_EXPLORATEUR,
    decouverte:  BADGE_DECOUVERTE,
    communaute:  BADGE_COMMUNAUTE,
  };

  const newStored = { ...stored };
  for (const key of ['explorateur', 'decouverte', 'communaute']) {
    if (computed[key] > stored[key]) {
      for (let lvl = stored[key] + 1; lvl <= computed[key]; lvl++) {
        upgrades.push({
          key,
          oldLevel: lvl - 1,
          newLevel: lvl,
          oldDef: DEFS[key][lvl - 1],
          newDef: DEFS[key][lvl],
        });
      }
      newStored[key] = computed[key];
    }
  }

  if (upgrades.length > 0) {
    await supabase.from('profiles').update({
      badge_explorateur: newStored.explorateur,
      badge_decouverte:  newStored.decouverte,
      badge_communaute:  newStored.communaute,
    }).eq('id', userId);
  }

  return upgrades;
}

// Force un upgrade d'un niveau de badge (boutons de test temporaires)
export async function debugForceBadgeUp(userId, key) {
  if (!userId) return [];
  const col = `badge_${key}`;
  const { data: profile } = await supabase.from('profiles').select(col).eq('id', userId).single();
  if (!profile) return [];
  const current = profile[col] ?? 0;
  const defs = ALL_BADGE_DEFS[key];
  const next = Math.min(current + 1, defs.length - 1);
  if (next === current) return [];
  await supabase.from('profiles').update({ [col]: next }).eq('id', userId);
  return [{ key, oldLevel: current, newLevel: next, oldDef: defs[current], newDef: defs[next] }];
}

// Pourcentage d'utilisateurs ayant ce badge ou un niveau supérieur
export async function loadBadgePercentile(key, level) {
  if (level === 0) return null;
  const col = `badge_${key}`;
  const [{ count: total }, { count: withBadge }] = await Promise.all([
    supabase.from('profiles').select('id', { count: 'exact', head: true }),
    supabase.from('profiles').select('id', { count: 'exact', head: true }).gte(col, level),
  ]);
  if (!total) return null;
  return Math.max(1, Math.round(((withBadge || 0) / total) * 100));
}

export async function loadBadgeData(userId) {
  if (!userId) return null;
  const [
    { data: profile },
    { count: visitedCount },
    { count: reviewCount },
    { data: dests },
  ] = await Promise.all([
    supabase.from('profiles')
      .select('badge_explorateur, badge_decouverte, badge_communaute')
      .eq('id', userId)
      .single(),
    supabase.from('carnet_visited')
      .select('country_code', { count: 'exact', head: true })
      .eq('user_id', userId),
    supabase.from('reviews')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', userId),
    supabase.from('user_destinations')
      .select('id, destination_places(count)')
      .eq('user_id', userId),
  ]);

  if (!profile) return null;
  const destinations = (dests || []).map((d) => ({
    places_count: d.destination_places?.[0]?.count ?? 0,
  }));
  const communauteScore = computeCommunauteScore(reviewCount || 0, destinations);

  return {
    levels: {
      explorateur: profile.badge_explorateur ?? 0,
      decouverte:  profile.badge_decouverte  ?? 0,
      communaute:  profile.badge_communaute  ?? 0,
    },
    visitedCount:    visitedCount    || 0,
    communauteScore: communauteScore || 0,
  };
}
