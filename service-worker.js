const CACHE_NAME = "roktomitro-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./images/icon-192.png",  // এই লাইন আপডেট করা হয়েছে
  "./images/icon-512.png"   // এই লাইন আপডেট করা হয়েছে
];

// বাকি কোড আগের মতোই থাকবে...
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
