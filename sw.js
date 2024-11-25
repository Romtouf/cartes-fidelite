const CACHE_NAME = 'wallet-v1';
const ASSETS_TO_CACHE = [
  '/cartes-fidelite/',
  '/cartes-fidelite/index.html',
  '/cartes-fidelite/manifest.json',
  '/cartes-fidelite/icons/icon-72x72.png',
  '/cartes-fidelite/icons/icon-96x96.png',
  '/cartes-fidelite/icons/icon-128x128.png',
  '/cartes-fidelite/icons/icon-144x144.png',
  '/cartes-fidelite/icons/icon-152x152.png',
  '/cartes-fidelite/icons/icon-192x192.png',
  '/cartes-fidelite/icons/icon-384x384.png',
  '/cartes-fidelite/icons/icon-512x512.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js',
  'https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});