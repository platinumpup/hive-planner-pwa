const CACHE_NAME = 'hive-planner-oof-split-eye-exit-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/cat-bees-transparent.png',
  './icons/oof-splash-1.webp',
  './icons/oof-splash-2.webp',
  './icons/oof-splash-3.webp',
  './icons/oof-splash-4.webp',
  './icons/oof-splash-5.webp',
  './icons/oof-splash-organized.webp',
  './icons/oof-splash-chaos.webp',
  './icons/oof-splash-eye.webp'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
