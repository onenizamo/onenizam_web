'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".well-known/assetlinks.json": "06084d303931abbde12341cd9c13044e",
"assets/AssetManifest.bin": "c4cf66dd914ce35ad7a72e5ab0da0a2c",
"assets/AssetManifest.json": "99ea1bc5b4ee754bfb840e93052b0f3e",
"assets/assets/icons/bg.png": "31fe2a95def6277a06f51b4d8bcf5720",
"assets/assets/icons/bg1.jpg": "e8f5cb27b98df23a796563765d89a334",
"assets/assets/icons/boy.png": "e09dcd633b09903a3d6628471262e4aa",
"assets/assets/icons/camera.png": "33984f0debe7281b72d75baa8195132d",
"assets/assets/icons/check-double.png": "31e36b4d601dbe657948acb99b222f22",
"assets/assets/icons/check.png": "0acccbd68ae4924c881730426084db55",
"assets/assets/icons/gallary.png": "740b20ab34b1f4822e245cd279a0fcb4",
"assets/assets/icons/home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/icons/message.png": "5e5d9a8181f9ac5690c4a66cf4e2c2a1",
"assets/assets/icons/no-wifi.png": "e7014d2e98eeee6604cc5fd586f30d0e",
"assets/assets/icons/no_profile.png": "561f4b073f28d1df8d23132920decba9",
"assets/assets/icons/profile.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/icons/protection.png": "54bf1c5bdde98438319b0f71bc71835c",
"assets/assets/icons/search.png": "2ffd0e2a3d1ed091fb5e4fc5775e6347",
"assets/assets/icons/search_1.png": "ba565b6e940bfe85fb87dc4c8ad1e4cb",
"assets/assets/icons/user.png": "c20e6d0a23bb5ca9b310598e65054167",
"assets/assets/interface/camera.png": "b84a8f07199bd8c41f2d1b7f9f47c648",
"assets/assets/interface/coming_soon.gif": "5c6a2ec7d08032f663ab951bc73e6389",
"assets/assets/interface/coming_soon_1.gif": "44d36e392a76bfbc3b34ce95ed758593",
"assets/assets/interface/comment_e.png": "66b4e4bed3b47dde072f04eb42e3e659",
"assets/assets/interface/comment_f.png": "b99bba4bb7c363ae594dbce63ccecbdc",
"assets/assets/interface/follow.png": "3757547146fb6b6a6cd307b609e18156",
"assets/assets/interface/followers.png": "2942d4cc94733274319c7eecffa99514",
"assets/assets/interface/gallary.png": "37498c9f37bc5e5029dcd9532509aa7b",
"assets/assets/interface/heart_e.png": "1f2de813cee552561b4b21aaad8ecf46",
"assets/assets/interface/heart_f.png": "93d8d6776f45d072adcfa70ed5c53f91",
"assets/assets/interface/loading.png": "c808cf9cdabb2c4db8f2ce9ce430047c",
"assets/assets/interface/message.png": "3940bdcac76f6ca872b373faf21c7b15",
"assets/assets/interface/message_2.png": "a900877d866adff6c069440f46321c9c",
"assets/assets/interface/more.png": "d1f26049172b6a1350faccba37cb867d",
"assets/assets/interface/personal_message.png": "70d16ab97df485ebd785ffb528342958",
"assets/assets/interface/personal_message_1.png": "a4f3e755ec7ba7a2e2cf7211b80234e6",
"assets/assets/interface/personal_message_2.png": "18e8cd09535f7645eb9d82cf1a504284",
"assets/assets/interface/profile_edit.png": "43440ff608907be68b55a865c72b044d",
"assets/assets/interface/profile_edit_1.png": "00b2365b0807a04a30322f4a0cbda441",
"assets/assets/interface/share_e.png": "917b19985e5ad29b1db881dcc91013e5",
"assets/assets/interface/share_f.png": "28a726c5275e15a92f29e10a5b831efc",
"assets/assets/interface/t.png": "597986d4f542e4bca8f27f89295cb31c",
"assets/assets/interface/unfollow.png": "c1766e95b22ba66a0746b0117ac561bf",
"assets/assets/interface/view.png": "8b8c78c49adb4f3a60ff67ab38c94c28",
"assets/assets/interface/wait.gif": "1319044e2d394efd0081d3723a8b3eb3",
"assets/assets/interface/wait1.gif": "5325da95686391e9fd5c5a493d099017",
"assets/assets/interface/warning.gif": "6c3d2f3c7fdd5e7bc866069508336eb6",
"assets/assets/logo/app_logo.png": "b55d6c3f4d1669491749e1d3f2b780e0",
"assets/assets/logo/app_logo96.png": "49f7e332227332a9fbc38e6a2aa5b67e",
"assets/assets/logo/app_logo_144.png": "9afed4f098611a2b820fb323a71ab576",
"assets/assets/logo/app_logo_192.png": "f3e3de05acb10dcbe07ae03c89e788e3",
"assets/assets/logo/app_logo_48.png": "18c9f0ad2427792c3157c8c0968f6ed9",
"assets/assets/logo/app_logo_72.png": "477a399dcbaee1517e8a4640ea1ec4d6",
"assets/assets/logo/logo.png": "6b801da3f5984bf5d820a1d17858a835",
"assets/assets/logo/logo.svg": "fa292fce3bef7cca7d7a8f9c01eea246",
"assets/assets/logo/logo_144.png": "0654d5186dc8f835aa16fa9fa073b534",
"assets/assets/logo/logo_192.png": "37259891d0c4f8146dc2bcd47060a823",
"assets/assets/logo/logo_48.png": "9200437f08c77ec83abd59e7bf64cf5e",
"assets/assets/logo/logo_72.png": "7fb2e82ec4758e9bb3cdcdd64a2fac93",
"assets/assets/logo/logo_96.png": "791b38aaaa24e6fdad9bd088ccf3b136",
"assets/assets/logo/text.png": "2ceb8a309629281fc9d61c5fdf58bceb",
"assets/assets/svg/check-double.svg": "a2df762f44980a64b102aa7afd0e5f2a",
"assets/assets/svg/check.svg": "6141a9b86a15ddf6416b8c9e8268c5c3",
"assets/assets/svg/facebook.svg": "de56e12fb61e4d9c3eb70a3dd8277a5d",
"assets/assets/svg/github.svg": "26f54b16aa06a3856c7dd85ee9296f81",
"assets/assets/svg/instagram.svg": "9497dd1cb520c1e778b70a73b99c1c44",
"assets/assets/svg/log_out.svg": "14d7389c7fda161a376cbac9c5bf8f3c",
"assets/assets/svg/mic_filled.svg": "22b84617fdf1e119398e120545724175",
"assets/assets/svg/mic_unfilled.svg": "04359ec3774f318d89a2e6be9806a1d5",
"assets/assets/svg/no_wifi.svg": "bfaf16cf5c42163946c4be1c78008469",
"assets/assets/svg/share.svg": "01c583b10f5ffa66408a700bce04a04e",
"assets/assets/svg/whatsapp.svg": "ea9436598e995f9ca8cc5154b4b3c1cb",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "b442cf72cf7148965afa5429b5f26efb",
"assets/NOTICES": "5e3a895a94601da81110cee2325eb884",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "18c9f0ad2427792c3157c8c0968f6ed9",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "f3e3de05acb10dcbe07ae03c89e788e3",
"icons/Icon-512.png": "4e4c166e45dbca7c82fa0c5057c78427",
"icons/Icon-maskable-192.png": "f3e3de05acb10dcbe07ae03c89e788e3",
"icons/Icon-maskable-512.png": "4e4c166e45dbca7c82fa0c5057c78427",
"index.html": "77a7e1c5b8d8b31b5182836495caa873",
"/": "77a7e1c5b8d8b31b5182836495caa873",
"main.dart.js": "2293bc8f6c2f10187a832928c42c7f91",
"manifest.json": "5bf6c28551e3ecc84c383ef03cd0a2a4",
"sitemap.xml": "4e73b0119f63962c54859d925f994b60",
"version.json": "7371f830ce0bc52d06064ac92c07441c",
"_redirects": "c51aba1dc7f217dd0a06c5a50a955b89"};
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
