importScripts("/precache-manifest.2162338b5127b7b454a000ac6aecdb86.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: 'octo' });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('install', (event) => {
  console.log('[sw]: installed');

  event.waitUntil(
    self.skipWaiting()
  );
});

self.addEventListener('activate', (event) => {
  console.log('[sw]: activated');

  event.waitUntil(
    self.clients.claim()
  );
});
