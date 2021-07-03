'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ced50175170d6f274de6934592c4cf1b",
".git/config": "58077b1b4cdbc3c657ae796c40e2e0f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "231a362bd4ac61f1c2cb81770154261a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "03d1c51448b16edf19d74e91a5107879",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5310c9b0b3bb2a8dcd19ddcf6952b008",
".git/logs/refs/heads/master": "5310c9b0b3bb2a8dcd19ddcf6952b008",
".git/logs/refs/remotes/origin/master": "91bd922114150c62a061a74218550e58",
".git/objects/00/0a194f8eabba2a32586aa0997233b4cacde597": "b08f12545cc8b16182d76eb394bfa920",
".git/objects/04/01d406b03e20ce7497e22368585bb53c8c0f61": "cb0fd66afbf748c8d7bd40ec17064771",
".git/objects/0b/40d1189f094c5b7b211b15c82e8c8b0670a1ed": "423bf953d99db0a423ada332cd22f6e3",
".git/objects/10/7e13768162bc633530c3436787f838804a66c1": "70e42170ff0bc338f73975621f718444",
".git/objects/10/95f3646a6f0b41041f0f77941a44fdbeb7acbc": "f1e12f5640c1feac6c7817d4eb0d7e74",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/4f465f5c0d69018ef2efb58071acdd1ec44a4e": "3b1814110f7a8feea937e9341818c021",
".git/objects/26/a066552726be3058f0aa1facb52497f36d5e1f": "f98ad3d0304b30e879538ed76bb08ad0",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2a/7f78bf0e188432dcbb7e8a181d6e9fa955d4b6": "904e8cdf7cd5165042b14c8f14608f4b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/a0f259ecbc4d95447e19ea035824064ce80f3f": "d9e6b2f8805713c73d7b7d2e67a31f3a",
".git/objects/37/2fa2ed033003ef92ae0296e9ad930d6a92a9ae": "8d361f0abb2709691a8cb0c93e4b77d9",
".git/objects/38/11abaf936709aea38a09e03e19d4a22fb6b589": "3cccce101c84ed7921563bd12149346f",
".git/objects/3d/64c2b1132faceeaa605e76461a9f56c1bbd588": "bafece0f314be189fce5f17b261b0fff",
".git/objects/42/948ede15086f0ca2b2ea8a6d503001cefa7638": "a25064b70c2aace7fcec791ad6cd98c4",
".git/objects/53/0ff42b4c8521cacfcb73c92b77f810de76fc8b": "1157ce93d1d7aadb75dd76ba845f3836",
".git/objects/5e/103de5cf9cf1ce2219ec1b9012cc461b67696a": "84c539d884406313b89e855f1063b895",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/bbb118f88fc6820e4b7604e11b048f3d5f1ed1": "4bab1c331ced9f243a39e443ccc191a3",
".git/objects/85/c8a062248313a22745570f35573b9c9328e203": "7c9a485fe921a1e21d223646c567d8ab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/ac7a6140ac6fe8ab6a8a2d37c5c3ee8685951b": "8704743f636203437295447fae576b4f",
".git/objects/94/bdde841c6e0c42471ce79c2ddc8c61df49f9b8": "57c51fef4714441f0a7d307f2deb87ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/8e729961cd90acc9366fcdae0ba5b76090f595": "e5feeef76ac4ab6b8f2c56d53ed88f77",
".git/objects/a7/5412b3ab7406d94bcedbf80398d25db2925b3e": "6d5a26f3198bcb0bca37e770fe796f4e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/2bd5442b5186e5eb66be8ef571a75944782fb5": "38ea799bb2636e893caf8017601eb1b5",
".git/objects/ae/dbbff7a07c8df2f268869ad8d6a27688baa109": "00a224760158257b44b2a6a746add30a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/6e63aa543b4dd98bb70c489132183941e2ad15": "1cdeb0106c0a3f71abbc9523f858373f",
".git/objects/c1/acb90654571564c80a512245431fa4d81cd8c2": "997b7b87d7d271120e47ee6d36a7f2bd",
".git/objects/cc/7c21effea763c2f7205d693868daee5829cafb": "5d1996df01d087504b198a701244c53a",
".git/objects/cc/c0007a8adcff564826dba818b0d3e3c664cb0e": "8039f1433b2edc7de4a32a6477489719",
".git/objects/d5/a4d64ca126759674220eeaaac469f4b9258858": "9b67aedc0dc5beea611b376a5b9fbe14",
".git/objects/d9/c84bc44241c6505a23b1cf07f923da931cc5af": "c55ddaa9b52af914128ec45a4ebd4b88",
".git/objects/e0/25d4344674fb3041800ace7f6614ed9797f292": "f956535bad367aee7590459eab68f65a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/f26660fe49c6161844bef6864a800676cf1146": "1afd5d3c50cbfaca3c084b2017198df9",
".git/refs/heads/master": "f77bc61d7a30366613755eaf991fd6b8",
".git/refs/remotes/origin/master": "9a69108e41a82e6cba4a2ee878718cb6",
"assets/AssetManifest.json": "bc80f16311918cd656ddfb217a17949a",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/FontManifest.json": "2a69ce04a1cd18341f63e2d3c53ed7ca",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/foto1.jpg": "c6e54bdeee7b02b31f1e82f620ed4967",
"assets/images/foto2.jpg": "9002a9636c57348d6e620d660cb160d0",
"assets/images/foto3.jpg": "30b7edc7073f7d2bba843b4d4e116661",
"assets/NOTICES": "19bfe02f1b6a9ec36313ab5105b6cc05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "77ab542207bfdd9599af698bf0f079bd",
"/": "77ab542207bfdd9599af698bf0f079bd",
"main.dart.js": "fb127a2c4359d57f96f28ddfa1dacea1",
"manifest.json": "76f9bc48e011723c12403de9f390d846",
"version.json": "39cec071b5e86463d7676f27d96b4931"
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
