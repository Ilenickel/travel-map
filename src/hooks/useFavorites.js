import { useState, useCallback, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase";

const KEY = "triply-favorites";

function loadLocal() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function useFavorites(user) {
  const [favorites, setFavorites] = useState(loadLocal);
  const prevUserId = useRef(null);
  const latestFavorites = useRef(favorites);
  latestFavorites.current = favorites;

  useEffect(() => {
    const nowId = user?.id ?? null;
    const wasNull = prevUserId.current === null;
    const isNowSet = nowId !== null;

    if (wasNull && isNowSet) {
      (async () => {
        const local = loadLocal();
        const { data } = await supabase.from('carnet_favorites').select('country_code').eq('user_id', user.id);
        const remote = (data || []).map((r) => r.country_code);
        const merged = [...new Set([...local, ...remote])];
        if (local.length > 0) {
          await supabase.from('carnet_favorites').upsert(
            local.map((code) => ({ user_id: user.id, country_code: code })),
            { onConflict: 'user_id,country_code' }
          );
          localStorage.removeItem(KEY);
        }
        setFavorites(merged);
      })();
    } else if (!isNowSet && prevUserId.current !== null) {
      localStorage.removeItem(KEY);
      setFavorites([]);
    }

    prevUserId.current = nowId;
  }, [user]);

  const toggle = useCallback(async (code) => {
    if (!user) {
      setFavorites((prev) => {
        const next = prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code];
        localStorage.setItem(KEY, JSON.stringify(next));
        return next;
      });
      return;
    }
    const isIn = latestFavorites.current.includes(code);
    setFavorites(isIn
      ? latestFavorites.current.filter((c) => c !== code)
      : [...latestFavorites.current, code]
    );
    if (isIn) {
      await supabase.from('carnet_favorites').delete().eq('user_id', user.id).eq('country_code', code);
    } else {
      await supabase.from('carnet_favorites').upsert(
        { user_id: user.id, country_code: code },
        { onConflict: 'user_id,country_code' }
      );
    }
  }, [user]);

  const remove = useCallback(async (code) => {
    if (!user) {
      setFavorites((prev) => {
        const next = prev.filter((c) => c !== code);
        localStorage.setItem(KEY, JSON.stringify(next));
        return next;
      });
      return;
    }
    setFavorites(latestFavorites.current.filter((c) => c !== code));
    await supabase.from('carnet_favorites').delete().eq('user_id', user.id).eq('country_code', code);
  }, [user]);

  const linkToAccount = useCallback(async () => {
    if (!user) return;
    const local = loadLocal();
    if (local.length > 0) {
      const { error } = await supabase.from('carnet_favorites').upsert(
        local.map((code) => ({ user_id: user.id, country_code: code })),
        { onConflict: 'user_id,country_code' }
      );
      if (error) throw new Error(error.message);
      localStorage.removeItem(KEY);
    }
    const { data, error: fetchError } = await supabase
      .from('carnet_favorites')
      .select('country_code')
      .eq('user_id', user.id);
    if (fetchError) throw new Error(fetchError.message);
    if (data) setFavorites(data.map((r) => r.country_code));
  }, [user]);

  return { favorites, toggle, remove, linkToAccount };
}
