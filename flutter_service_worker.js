'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "72c865cf262f8f61b0b26acc06a51ab0",
"assets/assets/images/aerocoolatomic.jpg": "20d893856566e57ecb7f13fc66086aba",
"assets/assets/images/aoc27g2u5.jpg": "4b3657101b2efaee3e3fabd7751db4dd",
"assets/assets/images/aocu2790pqu.jpg": "ca5cf6f389adcee4c62f6176163439d5",
"assets/assets/images/asusdesigno.jpg": "33622dd7583261e6340e18e987135e11",
"assets/assets/images/asustufh3.jpg": "73ebfbdf60af2d4fe94d5e6a5de7931e",
"assets/assets/images/asustufmonitor.jpg": "d47ddc5125bfd822af2b94356a4cc25f",
"assets/assets/images/case.jpg": "40143e04da0d94ef7e74c120b48fea85",
"assets/assets/images/corsaircarbide.jpg": "fb3945ee7e9a4caffcd5956d21185f96",
"assets/assets/images/corsairicue.jpg": "a476a71ab91ed1386f6badc19f8e1a15",
"assets/assets/images/frisbyfc8890g.jpg": "63f0ee4d8f794896873a533023258ff5",
"assets/assets/images/gamepowerkizaru.jpg": "f350f2205791e0a2239a17ff0022a1cb",
"assets/assets/images/gamepowermedusa.jpg": "5dc63f4c8a67f3d94727ded251811a9f",
"assets/assets/images/huaweixs.jpg": "dafb4f7ee909d62b0263fe625841bf25",
"assets/assets/images/hyperx.jpg": "e20b3a3d4f91752c06642c2f4bb760e1",
"assets/assets/images/iphone.png": "75939759ab4b6c940f2a298f57ba250a",
"assets/assets/images/iphone13pro.jpg": "4bc8c6c33c3718b83960c2b8c190fd53",
"assets/assets/images/iphone_11.jpg": "0132eeea9450675b7591ff8619406887",
"assets/assets/images/kulaklik.jpg": "ca58893b6b513777938f466adeb45b2c",
"assets/assets/images/laptop.jpg": "a0ac4224935cc442db40fe242ccc33a4",
"assets/assets/images/lenovothinkvision.jpg": "f3301377a9aae862901254fb06b1e333",
"assets/assets/images/logitechg332.jpg": "c442b5dbb86b03113a3021ca3fa37823",
"assets/assets/images/monitor.jpg": "db1a1807151649b8cbe045517cc4bb99",
"assets/assets/images/phone.jpg": "84c9a971604a4995dbf219afb4254c77",
"assets/assets/images/powerboostvkp1900b.jpg": "ca31bf8b1946800f539dbe9b500ef315",
"assets/assets/images/profile.jpg": "dca1afe4247dbe72569c7277d0145f9f",
"assets/assets/images/rampagecarismamesh.jpg": "2e1c446205aa969d116958ff36a2398b",
"assets/assets/images/razerkraken.jpg": "ba00062362b401a3172e0423c56d0999",
"assets/assets/images/samsungfold3.jpg": "87fbf9699d21a9f0a37ef03a6af44679",
"assets/assets/images/samsungs21ultra.jpg": "47f4bdfe2eab4368de1e90e220234d5f",
"assets/assets/images/smartphone.jpg": "f8962ee686373bbb5e11e7d17cbd6583",
"assets/assets/images/spacemonitor.jpg": "4785c2fcc1314095768bc67da4832836",
"assets/assets/images/xiaomi11ultra.jpg": "49597f19ff63619e6951e1aef81fb203",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "77542ca1239827256cb76395ff57f616",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "4819f8418256a1d778899c139dc36db4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0fda900171cc187c0d000cdbc4522ffa",
"/": "0fda900171cc187c0d000cdbc4522ffa",
"main.dart.js": "5991a452c99af823906623cda9c76542",
"manifest.json": "1a6ba2a327a1616563f9a3dffd52e0fe",
"version.json": "6dbf4729639bd0dc8aa5565e5c789552"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
