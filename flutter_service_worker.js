'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5e528cf95007395bcba9eaccb4e4f125",
".git/config": "962ac26b9634205d4bc18bdb4df69f38",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "93c5ec06ec89f4cdfa74b46901e6bb91",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9afe19459344ac01c2eced3a7c4edf6f",
".git/logs/refs/heads/master": "9afe19459344ac01c2eced3a7c4edf6f",
".git/logs/refs/remotes/origin/master": "fbfaa3f63a012dba79e2c7931f75ef2e",
".git/objects/08/e31eed770c4ba6b168f29234ecb5d71b110950": "d1ad54aac00cc27043126e7b055eab5b",
".git/objects/0b/f2298d98529e8ea84c3406b1ae376064d2bd9b": "4c7e5a358b8fbaee844d18162fff8624",
".git/objects/12/3144cd50be6175aae2941a7aafced284baff1f": "99877fe7bf005180a12385ae3bda1042",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/6ecec8a1c81b5a0f969e1b9e2da69eaa0215ea": "ae38228fb6c940157a59fa5316dbbcd6",
".git/objects/31/5adab615043c63d6f51f33c0c0e4ab348df8fc": "2e9141158eee519c3ba1132dc6a20d52",
".git/objects/38/f432f277a75a624732cb87b00097c493d3498b": "5693cb27d8cde12aa6a29d21b79618b8",
".git/objects/3a/072bae00eac46e9ad80428d299e4f8d8daf22c": "4244ae554acbda7de2260781260a0b96",
".git/objects/41/02de044a9cc6e057178dd1e987c52ced751fae": "ff31735cca593c45b48b05c956e03d61",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/12ee96e64b29d981b353306d2bb4e6da3eaa21": "bc47a07d412964bfdcbb9a1c283fe473",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/6c/f392a53cfe6b6c00d8ea4d835a12ddf962a23b": "92ad6a5ffee660fea4fe062251dedd49",
".git/objects/75/8e563de6e3f8be240170f4086838b381acb6a4": "35d479cbc2a12e9c4f6693b533bffc33",
".git/objects/79/8559e4610f38e160eb54a303d4a2455f512316": "ffc4bcd426cb0c0bee0be5f8c68371a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/8ed1fb8fde1965e81f785413f6a0ba7a36b1f3": "20d5c1936a6066ff3394f1944b6809bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/ed071fbaf30150cb64535af5299e0072be498a": "c05b564bc090edc75a98c14ccd3f178c",
".git/objects/a7/e595a1246b90f28da7c74b719408cd79817ed1": "38d042224f71656be448e93fb80820bc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/e045263dc8e6054f055610d0cc9ee86448b782": "0d82766919f160974c2d70f7b1ab5793",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f4420acf3d50afa590116b76bfe32aec1db160": "e332d30fc316e5e926ddb0831c14bda7",
".git/objects/bb/a99e5a68b8a82c7dca361c862d93d2d71d2204": "3401876d0ab4a0f93bf7e60b1f35f5bc",
".git/objects/c4/1b7396ec4270e0d473c45f9c11fe2f47d10595": "ffdb913eeec9c87f8df9325ebb93b7f1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f9/3c33f9380fc1774a5aa8eed2a453bcf46c5bd5": "d0f0cb8e2505511fbeb33847d1d82636",
".git/objects/fd/384cf2e5a98935f32f68436c978cc3fc87fd51": "84d0dca53b04bed80e311b2d19a32c8a",
".git/refs/heads/master": "bf2b8c95f257016b6060e337ac4d5071",
".git/refs/remotes/origin/master": "bf2b8c95f257016b6060e337ac4d5071",
"assets/AssetManifest.json": "e2caca135f8f069e7fe554b6a15ce949",
"assets/assets/images/camurcunordegi.jpg": "d004e587c76f315764ed96cd3ee31c31",
"assets/assets/images/cinordegi.jpg": "34bee495c0e4147e0fb8d69a8e9fd3cc",
"assets/assets/images/kilkuyruk.jpg": "f94f1cf728fa5857efd10eae568b6b3e",
"assets/assets/images/macarordegi.jpg": "f0613684fdbf0cf19d919c7e13526e8f",
"assets/assets/images/ordek.jpg": "20be267f4c3c42941f3801f502cc12e7",
"assets/assets/images/ordeksaka.jpg": "409279a6e3805320aa8e14ee6a76f938",
"assets/assets/images/ormanordegi.jpg": "e224556ac04464dd78949e1cbf6b8250",
"assets/assets/images/pekinordegi.jpg": "39b4e926e5215647fbd18c1213310cb7",
"assets/assets/images/yabanordegi.jpg": "259c73b3edb68d61c029cd62ae2bdd12",
"assets/assets/images/yesilbas.jpg": "de6dba5b58d81f82070ed766f338a0d2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0aceb40388bd5d7d4ff5882a5c486385",
"/": "0aceb40388bd5d7d4ff5882a5c486385",
"main.dart.js": "ac7c4bf0c66e4e631b7f913bf2558366",
"manifest.json": "eba741108f0c2a2aeaabe8003b7f9df7",
"version.json": "2bb050f4b1ea3efa00e64d601efa5a35"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
