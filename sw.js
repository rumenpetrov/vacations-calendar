/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "3f59d5171408477e99a469b68a5d2365"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-059c7bd8.entry.js"
  },
  {
    "url": "build/p-2968d1ce.js"
  },
  {
    "url": "build/p-4a094bff.entry.js"
  },
  {
    "url": "build/p-590dbd47.entry.js"
  },
  {
    "url": "build/p-5e54def4.entry.js"
  },
  {
    "url": "build/p-7a398b4c.js"
  },
  {
    "url": "build/p-8b76ffef.entry.js"
  },
  {
    "url": "build/p-9b6a9315.js"
  },
  {
    "url": "build/p-ba478914.entry.js"
  },
  {
    "url": "build/p-cacc7d1d.entry.js"
  },
  {
    "url": "build/p-e6ab75ee.entry.js"
  },
  {
    "url": "build/p-f2f26741.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
