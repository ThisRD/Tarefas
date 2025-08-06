const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/Tarefas/',
    '/Tarefas/index.html',
    '/Tarefas/style.css',
    '/Tarefas/manifest.json',
    '/Tarefas/icons/sla1.jpg',
    '/Tarefas/icons/sla2.jpg'
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
