// Pont de développement : exécute les fonctions serveur du dossier /api sous `npm run dev`.
// Vite (front) ne sait pas exécuter les fonctions serverless Vercel ; ce plugin reproduit
// leur exécution en local pour pouvoir tester la modération avec `npm run dev`.
//
// ⚠️ Actif UNIQUEMENT en développement (apply: 'serve'). N'a AUCUN effet sur le build
//    de production : en prod, c'est Vercel qui exécute /api nativement.
import { loadEnv } from 'vite';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

export default function devApiPlugin() {
  return {
    name: 'dev-api-functions',
    apply: 'serve',
    configResolved(config) {
      // Rend les variables du .env (y compris non préfixées VITE_) disponibles via process.env,
      // pour que les fonctions /api lisent OPENAI_API_KEY, SUPABASE_SERVICE_ROLE_KEY, etc.
      const env = loadEnv(config.mode, process.cwd(), '');
      for (const [key, value] of Object.entries(env)) {
        if (process.env[key] === undefined) process.env[key] = value;
      }
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith('/api/')) return next();

        const url = new URL(req.url, 'http://localhost');
        const name = url.pathname.replace(/^\/api\//, '');
        // Sécurité : nom de fonction simple uniquement (pas de traversée de répertoire)
        if (!/^[a-zA-Z0-9_-]+$/.test(name)) return next();

        const filePath = resolve(process.cwd(), 'api', `${name}.js`);
        if (!existsSync(filePath)) return next();

        // Corps JSON (POST)
        let body = {};
        if (req.method === 'POST') {
          body = await new Promise((resolveBody) => {
            let raw = '';
            req.on('data', (c) => { raw += c; });
            req.on('end', () => {
              try { resolveBody(raw ? JSON.parse(raw) : {}); }
              catch { resolveBody({}); }
            });
            req.on('error', () => resolveBody({}));
          });
        }

        // Adapte req/res à la signature Vercel (req.body, res.status().json())
        req.body = body;
        res.status = (code) => { res.statusCode = code; return res; };
        res.json = (obj) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(obj));
          return res;
        };

        try {
          // On charge la fonction via le graphe de modules de Vite (ssrLoadModule),
          // qui prend en compte les modifications de l'endpoint ET de toutes ses
          // dépendances (api/_lib/*) sans redémarrer le serveur. Un simple
          // cache-busting par query ne busterait que l'endpoint, pas ses imports.
          const mod = await server.ssrLoadModule(filePath);
          await mod.default(req, res);
        } catch (err) {
          console.error(`[dev-api] ${name}:`, err);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: false, reason: 'Erreur serveur locale (dev).' }));
          }
        }
      });
    },
  };
}
