const cacheName = 'pwa-demo-cache-v1';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('Caching assets');
            return cache.addAll(assets);
        })
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
});

// Fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
