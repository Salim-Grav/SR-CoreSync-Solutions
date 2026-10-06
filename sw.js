// S&R CoreSync Solutions - Progressive Web App & Offline Presentation Service Worker
const CACHE_NAME = 'coresync-offline-v2';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './demo.html',
  './logo-studio.html',
  './manifest.json',
  './assets/logo-neon-icon.svg',
  './css/dananajmah-bundle.min.css',
  './css/enterprise-suite.css',
  './css/demo-portal.css',
  './css/enterprise-suite.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('Some offline assets failed to precache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Network first, falling back to cache for offline presentation mode
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Cache successful responses for subsequent offline viewing
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('./demo.html') || caches.match('./index.html');
          }
        });
      })
  );
});
