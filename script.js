// adding serviceworker
window.addEventListener('load', function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then(function (registration) {
            console.log(`Service Worker Registered ${registration.scope}`);
        }).catch(function (err) {
            console.log('Service Worker Not Registered', err);
        });
    }
});
