import { useState, useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../lib/supabase";
import { useToast } from "../context/ToastContext";

const KEY = "triply-visited";

function loadLocal() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function useVisited(user) {
  const { t } = useTranslation("app");
  const toast = useToast();
  const [visited, setVisited] = useState(loadLocal);
  const prevUserId = useRef(null);
  const latestVisited = useRef(visited);
  latestVisited.current = visited;

  useEffect(() => {
    const nowId = user?.id ?? null;
    const wasNull = prevUserId.current === null;
    const isNowSet = nowId !== null;

    if (wasNull && isNowSet) {
      (async () => {
        const local = loadLocal();
        const { data } = await supabase.from('carnet_visited').select('country_code').eq('user_id', user.id);
        const remote = (data || []).map((r) => r.country_code);
        const merged = [...new Set([...local, ...remote])];
        if (local.length > 0) {
          await supabase.from('carnet_visited').upsert(
            local.map((code) => ({ user_id: user.id, country_code: code })),
            { onConflict: 'user_id,country_code' }
          );
          localStorage.removeItem(KEY);
        }
        setVisited(merged);
      })();
    } else if (!isNowSet && prevUserId.current !== null) {
      localStorage.removeItem(KEY);
      setVisited([]);
    }

    prevUserId.current = nowId;
  }, [user]);

  const toggle = useCallback(async (code) => {
    if (!user) {
      setVisited((prev) => {
        const next = prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code];
        localStorage.setItem(KEY, JSON.stringify(next));
        return next;
      });
      return;
    }
    const isIn = latestVisited.current.includes(code);
    setVisited(isIn
      ? latestVisited.current.filter((c) => c !== code)
      : [...latestVisited.current, code]
    );
    const { error } = isIn
      ? await supabase.from('carnet_visited').delete().eq('user_id', user.id).eq('country_code', code)
      : await supabase.from('carnet_visited').upsert(
          { user_id: user.id, country_code: code },
          { onConflict: 'user_id,country_code' }
        );
    if (error) {
      setVisited((prev) => isIn ? [...prev, code] : prev.filter((c) => c !== code));
      toast?.error(t('favorites.toggleError'));
    }
  }, [user, toast, t]);

  const remove = useCallback(async (code) => {
    if (!user) {
      setVisited((prev) => {
        const next = prev.filter((c) => c !== code);
        localStorage.setItem(KEY, JSON.stringify(next));
        return next;
      });
      return;
    }
    const removed = latestVisited.current.find((c) => c === code);
    setVisited(latestVisited.current.filter((c) => c !== code));
    const { error } = await supabase.from('carnet_visited').delete().eq('user_id', user.id).eq('country_code', code);
    if (error && removed) {
      setVisited((prev) => [...prev, removed]);
      toast?.error(t('favorites.toggleError'));
    }
  }, [user, toast, t]);

  const linkToAccount = useCallback(async () => {
    if (!user) return;
    const local = loadLocal();
    if (local.length > 0) {
      const { error } = await supabase.from('carnet_visited').upsert(
        local.map((code) => ({ user_id: user.id, country_code: code })),
        { onConflict: 'user_id,country_code' }
      );
      if (error) throw new Error(error.message);
      localStorage.removeItem(KEY);
    }
    const { data, error: fetchError } = await supabase
      .from('carnet_visited')
      .select('country_code')
      .eq('user_id', user.id);
    if (fetchError) throw new Error(fetchError.message);
    if (data) setVisited(data.map((r) => r.country_code));
  }, [user]);

  return { visited, toggle, remove, linkToAccount };
}
