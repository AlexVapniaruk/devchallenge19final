let cacheName = "pwa";
let filesToCache = ["/app/buttons.js", '/app/cities.js', "/index.html", "/style.css", "/main.js", '/app/compas.js'];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});