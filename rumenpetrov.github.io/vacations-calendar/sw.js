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
    "url": "index-org.html",
    "revision": "b342aad4a3eed756198d2fd495e5866b"
  },
  {
    "url": "index.html",
    "revision": "b342aad4a3eed756198d2fd495e5866b"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-354e18d4.entry.js"
  },
  {
    "url": "build/p-4ee1bf76.entry.js"
  },
  {
    "url": "build/p-52727c09.entry.js"
  },
  {
    "url": "build/p-64a09963.entry.js"
  },
  {
    "url": "build/p-6686e54f.js"
  },
  {
    "url": "build/p-72b2d6d9.entry.js"
  },
  {
    "url": "build/p-8c90ff58.entry.js"
  },
  {
    "url": "build/p-92805477.entry.js"
  },
  {
    "url": "build/p-9b6a9315.js"
  },
  {
    "url": "build/p-b7cfa215.js"
  },
  {
    "url": "build/p-cc76a218.entry.js"
  },
  {
    "url": "build/p-f5805464.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
