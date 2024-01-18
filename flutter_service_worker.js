'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5fc66611b4b10af0ba0c7ecd48214c66",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "8034f7d8ca8ca9cbbfe9c22a731c99d3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "087b9324ab003f2d0fece5be57edafe0",
".git/logs/refs/heads/main": "087b9324ab003f2d0fece5be57edafe0",
".git/logs/refs/remotes/origin/main": "5165a0b70d4bcacc2f16ebea4671c41f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/84db87e101c59f3c6845c442e2433ae6d7eca8": "13f253d3444011d804f06f5006c585bb",
".git/objects/08/3e5edb265ca0c69a4ed5d16bc8d1c1cb7c8238": "6597f0d84159bd8e7cb65e7c407d4115",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/16/ecdc15f811166fdc58c81c82b4cab97b3d7514": "94550893f336ca3f522a556ecf5513f5",
".git/objects/1d/9dea5edd547527119a0b0f60fa1442ac0fc933": "947b7ff32ed487b8948c014dd6006909",
".git/objects/1f/1bbbd166dcb9e971efd417d7ca2b383f343a4b": "49db6e943a87f3ced7ceabd374f99449",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/1fc206d225ce15a702dc8df3230c7523f67a81": "b30228b9fde66b40baafd3db73f96c7f",
".git/objects/29/e3a040577e27f88189a9babc4f13942b736133": "95132476349e60b41a89cc84a8cc2547",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3d/a32cfdd002ffc496bc4bb7e6fe30c6802839a7": "7a9c28f0c34456fd86b7bae1fcd29686",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/dd71414d3e97e44c4ab5258e6a4f2f047bf52a": "acb38ad9df9725903fe98a1b127d6bcf",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/e355d945dd976fd19256079a5398f2381a8677": "fc14765085f808fa0ab9ab4fb701196f",
".git/objects/60/54d06619681a7480b5b00b8f21aebdb044ffbf": "8ee86e12e0ea873151c72447b076525b",
".git/objects/60/85a59aa2ee890c8941202e83d56dfdb4d75aa1": "e143bcc39fb429f15bc3db111203fc4f",
".git/objects/68/bcdb70a46173a466ac722598b2828b80706a65": "0e652d25dee6c1e11bac0c08f9ea0293",
".git/objects/6a/35440ab9e55c5f0f722868dad04323528b5938": "77d9d9248222c5cdb17f462f84bfb82e",
".git/objects/6b/f0a1a0525e5266995b0246e14a613e6a2a5f72": "fe2dfacb0c5158c6328aae9b6178be16",
".git/objects/72/9390550658d0826413e0544ffefba88e0310df": "c3cf36214e24156d84d8b2c26b40723c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/ce523f6115bfba06212dbb3beeb94589041013": "ee1bd3e7daac8164b066abec0068ce93",
".git/objects/a2/e9eae767def9e16649574f6904faa549891d76": "b21133e1063546f4d892d9d3bb628428",
".git/objects/b2/6e42f73a1d45b55cbfa63f4bd4c99abe27974a": "7969dcbb5a6fe6f32118be73c1fb6299",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c5/d8a2da5ad0f41cc74ba035615b37c2e5e0e8a2": "240632b9bce8be3b5bc4b28998b6caa8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/537b8a437202fabb6b86d3e4517bc7df7e21ee": "885b6aee5330fc19b58c40745402d3b1",
".git/objects/e1/c895d5f4b0c476d1697841eeb61100d1ddd36b": "cc2cadfc0ad8ae1b350b1c8906595e8b",
".git/objects/e7/56618408449ab7c5b0914260c979c5562e8028": "ff0d9d274319bd6a273298fd9b29e2a2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fd/5126b4022f7c1096281f3fb967171b7ea130e4": "fd03bec808a8b096dbca53d9a2511c45",
".git/refs/heads/main": "e42740ef9672ccc8fff124b9deeef880",
".git/refs/remotes/origin/main": "e42740ef9672ccc8fff124b9deeef880",
"assets/AssetManifest.bin": "75eec839a142d2cbb41bb9cd5a267344",
"assets/AssetManifest.bin.json": "f26c1d930f5016333679164ef46ef23c",
"assets/AssetManifest.json": "df9a7ee4d6116c1f0e6d4974d7dc1f7c",
"assets/FontManifest.json": "78edb7b94f3ec0f4faa82568e50d5066",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "c5aa7c8d24fc14318efbc066eb0c13df",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "946de7fd1470d676b40bcb8f3fbffef1",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "aad23b975d521339314bdc3ab4d4fbf0",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "773ebba095ec3590660722932c6e8500",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "e0bf253dc822f16a3c2a27cc229e03c5",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "afd764841ed1ab86e0d8070e83531e68",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "1b9aa14436c86843d7081313d68f2e72",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d20342ff6ce6b4df641858d4ae18549f",
"/": "d20342ff6ce6b4df641858d4ae18549f",
"main.dart.js": "219ada4f2f1c485880d6ce3b55729303",
"manifest.json": "906c6c62a7d0f10fab615721bf93ec24",
"version.json": "37a8b063557dde50405f770e8a56c90a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
