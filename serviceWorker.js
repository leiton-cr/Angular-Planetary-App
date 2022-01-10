/* Elementos a cargar en la cache */
const CACHE_ELEMENTS = [
    "./",
    "./background-stars.50fd3b8620fd6a92.svg",
    "./planet-neptune.d29f731411718c4c.svg",
    "./planet-uranus.f00e6b9f8ee1ec35.svg",
    "./planet-saturn.87a61114f9277b45.svg",
    "./sun.cd5ac36693b88433.png",
    "./planet-jupiter.c9dfaa0c07a3f6fe.svg",
    "./planet-earth.30b0f223333be2b9.svg",
    "./planet-venus.bedc4e9765337317.svg",
    "./planet-mars.6b3fc049f42fc3d5.svg",
    "./planet-mercury.56498ff83a8c50f5.svg",
    "./assets/images/icon/favicon.png"
];


/* Nombre de la cache a utilizar */
const CACHE_NAME = "v1_Planetary-APP";

/* Caches permitidas */
const CACHE_WHITE_LIST = [CACHE_NAME];

/*  Primer parte del ciclo de vida
    Instalacion de no existir el service worker
*/
self.addEventListener("install", e =>
    e.waitUntil(caches.open(CACHE_NAME)
        .then(cache => cache.addAll(CACHE_ELEMENTS))
        .then(() => self.skipWaiting())
        .catch(console.log)
    )
);

/*  Segunda parte del ciclo de vida 
    Revisamos por versiones de cache antiguas
*/
self.addEventListener("activate", (e) =>
    e.waitUntil(caches.keys()
        .then(cacheNames =>
            // Si no esta incluido en la white list se elimina.
            cacheNames.map(cache => !CACHE_WHITE_LIST.includes(cache) && caches.delete(cache)))
        .then(() => self.clients.claim())
        .catch(console.log)
    )
);

/*  Tercera parte del ciclo de vida 
    Busca primero los recursos solicitados en la caché.
*/
self.addEventListener("fetch", (e) => {
    e.respondWith(caches.match(e.request)
        .then(res => res ? res : fetch(e.request) )
    );
});
