
const CACHE="audioguide-safran-v1";
const FILES=["index.html","fiche01.html","fiche02.html","fiche03.html","fiche33.html","manifest.json","assets/images/logo.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
