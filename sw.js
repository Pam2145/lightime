const CACHE_NAME = 'lightime-v1';
const ASSETS = [
  './',
  './index.html',
  // Add style.css if you have a separate file
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
