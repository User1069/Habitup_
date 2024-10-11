const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/estilo.css',
    '/contac.html',
    '/contacto.html',
    '/que son.html',
    '/rutinas.html',
    '/dietas.js',
    '/java.js',
    '/javascript.js',
    '/que son.css',
    '/rutinas.css',
    '/dietas.css',
    '/contacto.css',
    '/contact.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});