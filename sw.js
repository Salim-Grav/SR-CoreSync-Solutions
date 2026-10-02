// S&R CoreSync Solutions - Ultra-Fast Service Worker for PWA
const CACHE_NAME = 'coresync-cache-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './en/index.html',
  './nl/index.html',
  './demo.html',
  './logo-studio.html',
  './manifest.json',
  './css/dananajmah-bundle.min.css',
  './assets/logo-neon.svg',
  './assets/logo-neon-icon.svg',
  './assets/mountain.webp',
  './assets/bg-about.webp',
  './assets/work-1.webp',
  './assets/work-2.webp',
  './assets/work-3.webp',
  './assets/grid.png',
  './assets/bg-4.png',
  './assets/bg-2-gold.png',
  './assets/bg-3.png',
  './assets/founder-salim.png',
  './assets/founder-raed.png',
  './assets/about-founder-raed.jpg',
  './assets/signature-neon.svg',
  './assets/signature-neon-raed.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('Cache pre-fetch warning:', err);
      });
    })
  );
  self.skipWaiting();
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
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cache instantly, update in background if online
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => {
        const accept = event.request.headers.get('accept') || '';
        if (accept.includes('text/html')) {
          if (event.request.url.includes('/en/')) return caches.match('./en/index.html');
          if (event.request.url.includes('/nl/')) return caches.match('./nl/index.html');
          return caches.match('./index.html');
        }
      });
    })
  );
});
