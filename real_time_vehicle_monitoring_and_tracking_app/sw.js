self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('the-magic-cache').then(function(cache) {
      })
    );
  });

  self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('the-magic-cache').then(function(cache) {
        return cache.addAll([
          '../',
          '../index.html',
          '../locations.html',
          '../locking.html',
          '../tracking.html',
          '../manifest.json',
          '../locations.json',
          '../images/background11.jpg',
          '../images/logo.jpg',
          '../images/phone.png',
          '../images/track.png',
          '../images/vehicle.png',
          '../scripts/app.js',
          '../scripts/Chart.js',
          '../scripts/fetchLocation.js',
          '../scripts/geolib.js',
          '../scripts/lock.js',
          '../scripts/trackLocation.js',
          '../stylesheet/main.css',
          '../stylesheet/Chart.css'
        ]);
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

