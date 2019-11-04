self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('autotrack').then(function(cache) {
     return cache.addAll(
       [
        '/',
        '/index.html',
        '/locations.html',
        '/locking.html',
        '/tracking.html',
        '/manifest.json',
        '/locations.json',
        '/images/background11.jpg',
        '/images/logo.jpg',
        '/images/phone.png',
        '/images/track.png',
        '/images/vehicle.png',
        '/images/carLogo.png',
        '/scripts/Chart.js',
        '/scripts/fetchLocation.js',
        '/scripts/geolib.js',
        '/scripts/lock.js',
        '/scripts/trackLocation.js',
        '/stylesheets/main.css',
        '/stylesheets/Chart.css',
        '/fonts/RosewoodStd-Regular.otf'
      ]
     );
   })
 );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
 });