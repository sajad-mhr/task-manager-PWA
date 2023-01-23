const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "task-manager-PWA",
  "index.html",
  "css/style.css",
  "js/app.js",
  "./assets/images/maskable_icon_x192.png",
  "./assets/images/maskable_icon_x512.png",
  "assets/fonts/Vazir.ttf",
  "assets/cheked.mp3",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
]
 
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

  