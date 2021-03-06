'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f90f71fb6edf00664acb0e5a7e953d73",
".git/config": "962ac26b9634205d4bc18bdb4df69f38",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0eb6fa6858c605f2ff3ef8666feaeb32",
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
".git/index": "b21e4902c1ec38d2c2a9f6b53dca093d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce6ff718f82e53507fd5f211c31e2b4a",
".git/logs/refs/heads/master": "ce6ff718f82e53507fd5f211c31e2b4a",
".git/logs/refs/remotes/origin/master": "5887dadaf20693fea7b324d7f5d711cb",
".git/objects/01/0f66b71de7cbe4cb9401b2cdb996bc15baee76": "668ad16349e8c3a084776033d1cb9aa0",
".git/objects/08/e31eed770c4ba6b168f29234ecb5d71b110950": "d1ad54aac00cc27043126e7b055eab5b",
".git/objects/0b/f2298d98529e8ea84c3406b1ae376064d2bd9b": "4c7e5a358b8fbaee844d18162fff8624",
".git/objects/12/3144cd50be6175aae2941a7aafced284baff1f": "99877fe7bf005180a12385ae3bda1042",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/6ecec8a1c81b5a0f969e1b9e2da69eaa0215ea": "ae38228fb6c940157a59fa5316dbbcd6",
".git/objects/31/5adab615043c63d6f51f33c0c0e4ab348df8fc": "2e9141158eee519c3ba1132dc6a20d52",
".git/objects/32/93498acc289ef7f01f128d40413dfd17d70d04": "04f18476e04c1afc661fcc6f32603589",
".git/objects/38/f432f277a75a624732cb87b00097c493d3498b": "5693cb27d8cde12aa6a29d21b79618b8",
".git/objects/3a/072bae00eac46e9ad80428d299e4f8d8daf22c": "4244ae554acbda7de2260781260a0b96",
".git/objects/3f/b422321fec58419e3d50ac735b3fb73a41277f": "3e850c26846bc29608e54c68cd6d13b8",
".git/objects/41/02de044a9cc6e057178dd1e987c52ced751fae": "ff31735cca593c45b48b05c956e03d61",
".git/objects/44/d43d99d513991a6dc77c9e2b0dbf8c65599a61": "e995249530d619220e0acc7970283598",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/493c610f78a571c4a285e8bc0fb82cfddacc23": "00af6daf3ab62a5d21e4655405619a39",
".git/objects/5d/1f31f8b0b5fd1c8501d0ff05ac0d25e5bfacd7": "9dd2f910bf42d3b8a5f2967bdd5b7f4c",
".git/objects/5d/c0ea89fe56a79e6156706f55d6d969360e6df3": "696e8fdeefbac6e4d82f127169608870",
".git/objects/5e/12ee96e64b29d981b353306d2bb4e6da3eaa21": "bc47a07d412964bfdcbb9a1c283fe473",
".git/objects/66/81e2ffb865637ec4ddffe92442c44d108f419d": "b856c5a32e02c88764937a1cb4a86181",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/69/acfcb68e6434843a1903cf16c4030d5c90ef2e": "bf4210a7a1634eb3ad995fccd7d31532",
".git/objects/6c/76ca468f5967765620aaff7610821a3ca977fe": "f37e2f15ee6b7239e806a2b13f08b160",
".git/objects/6c/f392a53cfe6b6c00d8ea4d835a12ddf962a23b": "92ad6a5ffee660fea4fe062251dedd49",
".git/objects/75/8e563de6e3f8be240170f4086838b381acb6a4": "35d479cbc2a12e9c4f6693b533bffc33",
".git/objects/75/ff95c724e77d121dde7c38abc807a95c189552": "c0484c15425beb5fe722c106108058f1",
".git/objects/79/8559e4610f38e160eb54a303d4a2455f512316": "ffc4bcd426cb0c0bee0be5f8c68371a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/8ed1fb8fde1965e81f785413f6a0ba7a36b1f3": "20d5c1936a6066ff3394f1944b6809bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/657257bd4b5786770c9e828a61836d4048883d": "cf4319117e693290af697182b08e4d5c",
".git/objects/96/e0b76aff50e5c2b743f4545d75210fdfa38181": "e78b03df7568c932b09349a5c9d5ac01",
".git/objects/9e/2e185631416a570bf4896ebbcd519bb550be00": "4a69549f3102b5562918a2a652544ed5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/2a0095963fee284e5bcd0393568179f2b54544": "e4a9de128d68c1c174f535b6afbad3c3",
".git/objects/a4/ed071fbaf30150cb64535af5299e0072be498a": "c05b564bc090edc75a98c14ccd3f178c",
".git/objects/a6/4e4d68dc83beaef6aa1093a286171e024b4eca": "4367c1eb875e92a0d7cc7de18fb027e6",
".git/objects/a7/e595a1246b90f28da7c74b719408cd79817ed1": "38d042224f71656be448e93fb80820bc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/da159a48ffcb31e45d10792b6719124ff5bc01": "3373233ec033ae272c306b70e177b386",
".git/objects/ad/e045263dc8e6054f055610d0cc9ee86448b782": "0d82766919f160974c2d70f7b1ab5793",
".git/objects/b1/5f648ddff30de312080198daa53580069fb38e": "4330e35ea02f5140832b31dd7edcb548",
".git/objects/b6/46e80d9fd3eb960a2a79a2512b218832a4b027": "0f4c4becc3d4a2f9bb16766446f226a8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f4420acf3d50afa590116b76bfe32aec1db160": "e332d30fc316e5e926ddb0831c14bda7",
".git/objects/ba/15e89e56e6786568fccb23a794d329b199e334": "36ea7657e1247446314ecec61986faef",
".git/objects/bb/a99e5a68b8a82c7dca361c862d93d2d71d2204": "3401876d0ab4a0f93bf7e60b1f35f5bc",
".git/objects/bf/daa3211628180266a9b7eb294d5e77a0153467": "4411de4b3c827e5f7041a6a064d5c4de",
".git/objects/c3/fc72dc72a4436f00d5484821c5d8b5686e7a98": "a39aefa4b426832ade62d3ab032c2a0a",
".git/objects/c4/1b7396ec4270e0d473c45f9c11fe2f47d10595": "ffdb913eeec9c87f8df9325ebb93b7f1",
".git/objects/c7/bae33a23ee58fac3c85fcc5967ae977dcd97c9": "2b1c6ab8827ce44e118e713eb8216c24",
".git/objects/cb/7326f7f693378afe81c608284406bb7c2bacf7": "3184c3b83f52a767b301dbb8a579b3fd",
".git/objects/d7/632c8d4bf54cf77bb2f0cc8bc155a87acffec4": "801a794a05ac785b4d70ada4234feb5b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/d9349330f6598845d4bb754d47d10988acee8c": "36f76504c56bfe6fd8477e4ea06eba2c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/e37f87def323eb2756ab6a822cfbbac58432b3": "01def9cb9b4d782f915775ff02f4f2b2",
".git/objects/f9/3c33f9380fc1774a5aa8eed2a453bcf46c5bd5": "d0f0cb8e2505511fbeb33847d1d82636",
".git/objects/fd/384cf2e5a98935f32f68436c978cc3fc87fd51": "84d0dca53b04bed80e311b2d19a32c8a",
".git/ORIG_HEAD": "b1c5695badd3f3ac2b1f0481c66cbf99",
".git/refs/heads/master": "b1c5695badd3f3ac2b1f0481c66cbf99",
".git/refs/remotes/origin/master": "b1c5695badd3f3ac2b1f0481c66cbf99",
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
"index.html": "038b754eefaba35495554bf02cc11e97",
"/": "038b754eefaba35495554bf02cc11e97",
"main.dart.js": "44e774a0ce0a182ca310d81adddfbd97",
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
