'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "58077b1b4cdbc3c657ae796c40e2e0f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1a6a83f95681b26cb78b2804e10fa3a3",
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
".git/index": "23c9230af4871bb12e689c6de1e6b62a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90ff3ee90d7445886f5718073999586d",
".git/logs/refs/heads/master": "d6702f8a6d9869f2ad9a0e3bf592df27",
".git/logs/refs/remotes/origin/master": "54ade5863a1c21460c0c7205c0cd230e",
".git/objects/00/0a194f8eabba2a32586aa0997233b4cacde597": "b08f12545cc8b16182d76eb394bfa920",
".git/objects/03/2a521747404f014e4c27960de2b10e7e3c119f": "7ecf616a17bce689d2987989a95160a2",
".git/objects/04/01d406b03e20ce7497e22368585bb53c8c0f61": "cb0fd66afbf748c8d7bd40ec17064771",
".git/objects/08/42a49b8fe4da7616c16d79b12dc81e52b06d64": "ed01b79f08d48c0c9167c8f43f4f7025",
".git/objects/0b/40d1189f094c5b7b211b15c82e8c8b0670a1ed": "423bf953d99db0a423ada332cd22f6e3",
".git/objects/10/7e13768162bc633530c3436787f838804a66c1": "70e42170ff0bc338f73975621f718444",
".git/objects/10/95f3646a6f0b41041f0f77941a44fdbeb7acbc": "f1e12f5640c1feac6c7817d4eb0d7e74",
".git/objects/11/015b35ff6cfc9a7d56489cfe1d316974ce28eb": "9b719c926ee2003da963ab50f7cfc969",
".git/objects/1c/0e9ae371c2d4cb91f6aa009f8338adec412b5d": "b8ebde877fe9bb3eb38e9e0c2877edf0",
".git/objects/1d/2ced8e5d6bd4e43fd125c0368baa5deee95810": "65b0e0a60608aeb283c19fbf61ca3074",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/4f465f5c0d69018ef2efb58071acdd1ec44a4e": "3b1814110f7a8feea937e9341818c021",
".git/objects/25/685ccbef4694257fbb1e917a5026f5632a5c0c": "2c99de234f245ab8dbdf0cb23579c5a0",
".git/objects/26/a066552726be3058f0aa1facb52497f36d5e1f": "f98ad3d0304b30e879538ed76bb08ad0",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2a/7f78bf0e188432dcbb7e8a181d6e9fa955d4b6": "904e8cdf7cd5165042b14c8f14608f4b",
".git/objects/31/964fb9897fc089bd7c13881889d3bf81973b8a": "0ca970f734f1a744f4d13649cfb4fe12",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/a0f259ecbc4d95447e19ea035824064ce80f3f": "d9e6b2f8805713c73d7b7d2e67a31f3a",
".git/objects/37/2fa2ed033003ef92ae0296e9ad930d6a92a9ae": "8d361f0abb2709691a8cb0c93e4b77d9",
".git/objects/38/11abaf936709aea38a09e03e19d4a22fb6b589": "3cccce101c84ed7921563bd12149346f",
".git/objects/38/a037ba6585e63f980c397e135a7cee05f20f94": "3ddb355bc7aec3eccb4d6d45fadd2f5b",
".git/objects/3d/64c2b1132faceeaa605e76461a9f56c1bbd588": "bafece0f314be189fce5f17b261b0fff",
".git/objects/42/948ede15086f0ca2b2ea8a6d503001cefa7638": "a25064b70c2aace7fcec791ad6cd98c4",
".git/objects/48/d99f4d96533970d5b258aa63a0bf2ff650ec24": "8d17c86a5c7adbf5cba5c14cba93c48d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/95055b6f9dddd216cc42f6ebd24a9ac3737f10": "15cb83811e2b544b530c3f127cdcddca",
".git/objects/53/0ff42b4c8521cacfcb73c92b77f810de76fc8b": "1157ce93d1d7aadb75dd76ba845f3836",
".git/objects/55/951ae098ce201230ef298f82a11f9a0434bbee": "25496dd8d4f39d854769da98739656b9",
".git/objects/5e/103de5cf9cf1ce2219ec1b9012cc461b67696a": "84c539d884406313b89e855f1063b895",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/68/aad13095bb8c0ef6afbd4627a5671f18a3b9a1": "3e7fbea8f0a8d89df85e0c105c00d5b8",
".git/objects/70/1cdbe9032b6be076a3fa38be0202bbb81bb227": "fd67eb644c00f20fe1ee423c89e01401",
".git/objects/73/9e4d1db472a7770ba3cddeaf55927b41ff28fa": "6340870e2baacb447ac23822e579e880",
".git/objects/78/d0ae3d0d90ddff02878d6b5063ac66d371780b": "31299294d8591f5531353ab24f86d506",
".git/objects/78/f94e3d230ea93a599f57c9b852a13c5dabb1a4": "53230245a5033cb3c835e749da556803",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/8bcaac5220d07262e3f6edab3efc8973cb1faf": "5dd575b3ba401369549f5832fcdcc781",
".git/objects/85/bbb118f88fc6820e4b7604e11b048f3d5f1ed1": "4bab1c331ced9f243a39e443ccc191a3",
".git/objects/85/c8a062248313a22745570f35573b9c9328e203": "7c9a485fe921a1e21d223646c567d8ab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/fc90078411637a42c7a1a5309672694f07f10a": "ccb38ffe40f50ac873b43827aecbd481",
".git/objects/91/ac7a6140ac6fe8ab6a8a2d37c5c3ee8685951b": "8704743f636203437295447fae576b4f",
".git/objects/94/bdde841c6e0c42471ce79c2ddc8c61df49f9b8": "57c51fef4714441f0a7d307f2deb87ad",
".git/objects/9d/89eb9917d0aeedcebe99991a94dd26303ccba8": "6bdd186fb7d46e218a340ab2709ab1e6",
".git/objects/9e/50b5dc470e1beb25f0000bdcd6499d4eb4197d": "ead87f107536100e1b4ca18c7ea48f57",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/8e729961cd90acc9366fcdae0ba5b76090f595": "e5feeef76ac4ab6b8f2c56d53ed88f77",
".git/objects/a7/46baebec6fb622c5cb88042d2001e36c8d085e": "789a39f98f53f6c34a1b33553a43b042",
".git/objects/a7/5412b3ab7406d94bcedbf80398d25db2925b3e": "6d5a26f3198bcb0bca37e770fe796f4e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/fd691bf17a9fd0921b9510f80f03af5c7ec983": "8cb3c301126451ba99847e1b22f59f51",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/2bd5442b5186e5eb66be8ef571a75944782fb5": "38ea799bb2636e893caf8017601eb1b5",
".git/objects/ac/e5a5c40ac1c8db4036881b43786d532e582e4e": "73b103423b2bab4baa9b5a03da942bfd",
".git/objects/ae/dbbff7a07c8df2f268869ad8d6a27688baa109": "00a224760158257b44b2a6a746add30a",
".git/objects/b3/57acbad9fa64fe3f63c04d378efe98834622a6": "f028250368f2722a11cd24829482ef76",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/5ec3d5b4156a7309ed74a467dbf5d6d71d0818": "e60ef86c098ce54abee4b6145fc472d3",
".git/objects/c0/6e63aa543b4dd98bb70c489132183941e2ad15": "1cdeb0106c0a3f71abbc9523f858373f",
".git/objects/c1/acb90654571564c80a512245431fa4d81cd8c2": "997b7b87d7d271120e47ee6d36a7f2bd",
".git/objects/c3/dad354958a9c066e617d87c408e300027d9d1d": "f5731c7bd8a5f7062e04e53b39520a19",
".git/objects/cc/7c21effea763c2f7205d693868daee5829cafb": "5d1996df01d087504b198a701244c53a",
".git/objects/cc/c0007a8adcff564826dba818b0d3e3c664cb0e": "8039f1433b2edc7de4a32a6477489719",
".git/objects/cd/96e90126ce85e1076400759aea8248699cccb5": "6b62f68f18ee58df25c83499642478d1",
".git/objects/d4/7987b65ec2cff5009c489a3e60728ea4f9137d": "9406cdb6eadee3925d49db28d65672ab",
".git/objects/d5/a4d64ca126759674220eeaaac469f4b9258858": "9b67aedc0dc5beea611b376a5b9fbe14",
".git/objects/d9/478366be3ec11d34f3520e1cec075f62a9bdea": "c5446130d9dbe29dfe429ebf113eeaf3",
".git/objects/d9/c84bc44241c6505a23b1cf07f923da931cc5af": "c55ddaa9b52af914128ec45a4ebd4b88",
".git/objects/d9/c986dfae29bda02f9cdde93d8eafb2599a53e8": "f4511281145372db1c6db5dabf1ac9eb",
".git/objects/dd/f69ce92cb30205679ca8089e8e0765d47b952e": "dc80bf15a48b3b2ca605a9b252676707",
".git/objects/de/139e19752b7c5ac44078571b2f0cff3005aee4": "3fe9caf538fa562def555e48969f99e3",
".git/objects/e0/25d4344674fb3041800ace7f6614ed9797f292": "f956535bad367aee7590459eab68f65a",
".git/objects/e0/9111a4913e43b47fc1d0053177e688d6d6edbe": "dc044af32d76521e509196c87281bf09",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/777db4d62d46510735c1c02cc2062a9958d1b3": "3ceb4c651e30ea2f82ab3bf689426801",
".git/objects/ef/00be2f650a509b20def88df60db940e12a87df": "0a1d18b5a8b9b20cb711d7eaea9c6eba",
".git/objects/ef/472f10415f45b4bd8ab30372368f4b92713b83": "2de78dce78fbc67d3cbd11b86d8e3b8d",
".git/objects/ef/a2ca9ac4329252730ceac441bc40b8b61aad59": "45e2921510a011474e705acfb2c39df3",
".git/objects/f4/f26660fe49c6161844bef6864a800676cf1146": "1afd5d3c50cbfaca3c084b2017198df9",
".git/objects/ff/b7e801a0e614f71fb48f35f050e3f48a0c4b5f": "42f186695a648c95cbedfd7cb4b82080",
".git/ORIG_HEAD": "878dbd050447b9d554d6b07a44a6cbd3",
".git/refs/heads/master": "878dbd050447b9d554d6b07a44a6cbd3",
".git/refs/remotes/origin/master": "6abeafa840504deb9806c5a9603176be",
"assets/AssetManifest.json": "ec758eef9d3bc979f866e8519b26ec86",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/FontManifest.json": "2a69ce04a1cd18341f63e2d3c53ed7ca",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/foto1.jpg": "c6e54bdeee7b02b31f1e82f620ed4967",
"assets/NOTICES": "d9e46709c6ba6130f736b609e5fd1d9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "0ecfe6a339ff5e21bd7800efb5f8631f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"googleaf40dfad12b1e953.html": "60659429b6304a4cdad58810f8591d8e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0d311236a2da09e2890c24b74d5dd22f",
"/": "0d311236a2da09e2890c24b74d5dd22f",
"main.dart.js": "4db16e9635f6c2d67a089824a5ed87c5",
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
