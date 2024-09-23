'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".well-known/assetlinks.json": "411d7f23447013c44e132a39f8f149e2",
"assets/AssetManifest.bin": "4a9cae6bc3ce41ce28cb4278e0fbc5c9",
"assets/AssetManifest.bin.json": "218da5ddff8e5319e929fb18a893e811",
"assets/AssetManifest.json": "ffcca33218711ec695d62aa486e4bfa5",
"assets/assets/fonts/arial.ttf": "fa3228aadde0db988e1822c2f736c131",
"assets/assets/fonts/constantia.ttf": "d145e0da42db9c9a2277fed0ad3bd723",
"assets/assets/fonts/lato.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/qaligo.ttf": "f3a3c48f952de765efbc21ec880a392c",
"assets/assets/fonts/roboto.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
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
"assets/assets/interface/add.png": "36b9881555fcfea728f6e1a267f6bcea",
"assets/assets/interface/camera.png": "b84a8f07199bd8c41f2d1b7f9f47c648",
"assets/assets/interface/cataloge.png": "5a8b171cb4337002c093d76fae62ab77",
"assets/assets/interface/cataloge_1.png": "014c60a3726e7e35f1dffd9c42bef174",
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
"assets/assets/interface/post.png": "254fa85cac8adcab232d2d7f45fbeac1",
"assets/assets/interface/post_1.png": "3292578f855343fa279f84660c5e78b9",
"assets/assets/interface/profile_edit.png": "43440ff608907be68b55a865c72b044d",
"assets/assets/interface/profile_edit_1.png": "00b2365b0807a04a30322f4a0cbda441",
"assets/assets/interface/share_e.png": "917b19985e5ad29b1db881dcc91013e5",
"assets/assets/interface/share_f.png": "28a726c5275e15a92f29e10a5b831efc",
"assets/assets/interface/t.png": "597986d4f542e4bca8f27f89295cb31c",
"assets/assets/interface/unfollow.png": "c1766e95b22ba66a0746b0117ac561bf",
"assets/assets/interface/update.png": "c2e4acde3b62bebd33526b41aa508cbf",
"assets/assets/interface/view.png": "8b8c78c49adb4f3a60ff67ab38c94c28",
"assets/assets/interface/wait.gif": "1319044e2d394efd0081d3723a8b3eb3",
"assets/assets/interface/wait1.gif": "5325da95686391e9fd5c5a493d099017",
"assets/assets/interface/warning.gif": "6c3d2f3c7fdd5e7bc866069508336eb6",
"assets/assets/logo/logo.png": "66199cce97161931665b2ef95edd8ee3",
"assets/assets/logo/logo_192.png": "428f2279ee4b4cebe762ce61104e4a58",
"assets/assets/logo/logo_48.png": "48fc98b09b6c0e75755a4a03c52d96de",
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
"assets/FontManifest.json": "5b4fe7133ca4b699ecc057cf405cd99e",
"assets/fonts/MaterialIcons-Regular.otf": "e875d7ae6ffe36c5b34f67883869ae31",
"assets/NOTICES": "7e170eaacc3fec590310661339830a39",
"assets/packages/chat_media/assets/png/large/document.png": "2db0a2f7e4874388d2bc23e9f5ea345b",
"assets/packages/chat_media/assets/png/large/pdf.png": "9a85752042ae270b88114895b82da2c1",
"assets/packages/chat_media/assets/png/large/rar.png": "49e30492fda920b23e1ca7f80404cb63",
"assets/packages/chat_media/assets/png/large/zip.png": "957f64592ad18aea76b8c79800d59f32",
"assets/packages/chat_media/assets/png/small/music-file.png": "d12ba197d68aa116c48a5ed002fbddf4",
"assets/packages/chat_media/assets/png/small/pdf.png": "8cec1ef375898c59e070a434de09c882",
"assets/packages/chat_media/assets/png/small/rar.png": "6bf4d523b785a5f0ac59b146dd18d3a9",
"assets/packages/chat_media/assets/png/small/zip.png": "768dd2e8a13f386d9f66b59cd1956b2e",
"assets/packages/neumorphic_ui/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "48fc98b09b6c0e75755a4a03c52d96de",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "995ea47d7e1b45e0c66b0195a77533fc",
"icons/Icon-192.png": "f3e3de05acb10dcbe07ae03c89e788e3",
"icons/Icon-512.png": "4e4c166e45dbca7c82fa0c5057c78427",
"icons/Icon-maskable-192.png": "f3e3de05acb10dcbe07ae03c89e788e3",
"icons/Icon-maskable-512.png": "4e4c166e45dbca7c82fa0c5057c78427",
"index.html": "25331b7527b03abf8a5d8f0d5cd0d0eb",
"/": "25331b7527b03abf8a5d8f0d5cd0d0eb",
"main.dart.js": "db22bf475982353f72281d2bea51e4c2",
"manifest.json": "5bf6c28551e3ecc84c383ef03cd0a2a4",
"sitemap.xml": "4e73b0119f63962c54859d925f994b60",
"version.json": "c34fffbdc04c3c270c7de900ebce7a52",
"_redirects": "c51aba1dc7f217dd0a06c5a50a955b89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
