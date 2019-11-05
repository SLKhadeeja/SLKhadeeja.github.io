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
        '/savedLocations.json',
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
        '/stylesheets/Chart.css'
      ]
     );
   })
 );
});

self.addEventListener('fetch', function(event) {
  // console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
 });

//  let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//   deferredPrompt = e;
//   btnAdd.style.display = 'block';
// });

// btnAdd.addEventListener('click', (e) => {
  
//   deferredPrompt.prompt();
//   deferredPrompt.userChoice
//     .then((choiceResult) => {
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }
//       deferredPrompt = null;
//     });
// });

// window.addEventListener('appinstalled', (evt) => {
//   console.log('a2hs installed');
// });