import { createContext, useContext, useCallback, useState } from 'react';

const ToastContext = createContext(null);
let nextId = 0;

// Portée volontairement limitée en Phase 0 : ce système ne remonte que les
// échecs des écritures Supabase à plus fort trafic (favoris/visités,
// notifications, vote, session) — pas les 200+ autres appels du repo, qui
// restent en console.error pour l'instant (voir plan de stabilité).
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const push = useCallback((message, type, duration = 4000) => {
    const id = ++nextId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => dismiss(id), duration);
  }, [dismiss]);

  const value = {
    toasts,
    dismiss,
    toast: {
      error: (message) => push(message, 'error'),
      success: (message) => push(message, 'success'),
      info: (message) => push(message, 'info'),
    },
  };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast() {
  return useContext(ToastContext)?.toast;
}

export function useToastState() {
  return useContext(ToastContext);
}
