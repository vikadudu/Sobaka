const CACHE_NAME = 'sobaka-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/help.html',
  '/history.html',
  '/priot.html',
  '/otvets.html',
  '/style.css',
  '/dog.jpg',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});