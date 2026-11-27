/*
 * Nota's service worker. It does two things. First, it adds the two headers
 * that make the page "cross-origin isolated" to every response from this
 * site, because a free static host cannot be told to send them. Isolation is
 * what lets the reading engine embed passages on several processor threads
 * (about 2.7 times faster on a laptop) instead of one.
 *
 * Second, it sends Nota's content security policy (apps/web/csp.mjs, put in
 * here by the build) with every page and worker script, which a free static
 * host cannot do either.
 *
 * Only this site's own responses are touched; requests to other sites (the AI
 * provider the student chose, the model files) pass straight through.
 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (new URL(request.url).origin !== self.location.origin) return;
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;
  event.respondWith(
    fetch(request).then((response) => {
      if (response.status === 0 || response.type === 'opaqueredirect') return response;
      const headers = new Headers(response.headers);
      headers.set('Cross-Origin-Opener-Policy', 'same-origin');
      headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
      const type = headers.get('content-type') || '';
      if (/text\/html|javascript/.test(type)) headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; worker-src 'self' blob:; connect-src 'self' https://generativelanguage.googleapis.com https://api.groq.com https://www.googleapis.com https://oauth2.googleapis.com https://huggingface.co https://*.hf.co https://*.huggingface.co https://api.open-meteo.com https://en.wikipedia.org https://en.wiktionary.org; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; media-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-src 'none'");
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    }),
  );
});
