const cacheName = "breakout-game-cache";
const assets = [
    "./",
    "./index.html",
    "./app.js",
    "./style.css",
    "./favicon.ico"
];

// install event
self.addEventListener("install", (evt) => {
    evt.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log("caching shell assets");
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.filter(key => key !== cacheName).map(key => caches.delete(key)));
        })
    );
});

// fetch event
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});