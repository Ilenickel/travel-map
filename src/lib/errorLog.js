// Filet de sécurité global : capte ce qui échappe aux try/catch et à
// l'ErrorBoundary (erreurs de rendu React) — erreurs de script non gérées et
// promesses rejetées sans .catch. Pas de service d'analytics ici : juste un
// point d'observation en mémoire, pensé pour qu'un futur Sentry/équivalent
// n'ait qu'à remplacer le corps de recordError.
let lastError = null;

export function recordError(error, context = '') {
  lastError = { error, context, at: Date.now() };
  console.error(context ? `[${context}]` : '[unhandled]', error);
}

export function getLastError() {
  return lastError;
}

export function installGlobalErrorHandlers() {
  window.addEventListener('error', (event) => {
    recordError(event.error || event.message, 'window.error');
  });
  window.addEventListener('unhandledrejection', (event) => {
    recordError(event.reason, 'unhandledrejection');
  });
}
