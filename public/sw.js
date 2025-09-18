// Service Worker for Portfolio Site
const CACHE_NAME = 'portfolio-cache-v2'; // Increment version when making changes
const APP_SHELL = 'app-shell-v1';

// Assets to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/manifest.webmanifest',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-icon.png'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
  self.skipWaiting(); // Activate immediately
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Caching app shell and static assets');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          // Delete old caches except current one
          return cacheName.startsWith('portfolio-cache-') && cacheName !== CACHE_NAME;
        }).map(cacheName => {
          console.log('[ServiceWorker] Removing old cache', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('[ServiceWorker] Claiming clients');
      return self.clients.claim(); // Take control of all clients
    })
  );
});

// Helper function to determine if request is for an image
function isImageRequest(request) {
  return request.destination === 'image' || 
         request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i);
}

// Helper function to determine if request is for a document
function isDocumentRequest(request) {
  return request.mode === 'navigate' || 
         (request.method === 'GET' && request.destination === 'document');
}

// Fetch event - use stale-while-revalidate for most requests
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // For page navigations, use network-first strategy
  if (isDocumentRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone the response to store in cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(event.request).then(cachedResponse => {
            return cachedResponse || caches.match('/');
          });
        })
    );
    return;
  }
  
  // For images, use cache-first strategy
  if (isImageRequest(event.request)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        // Return cached response if available
        if (cachedResponse) {
          // Update cache in background
          fetch(event.request).then(response => {
            if (response.ok) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, response.clone());
              });
            }
          }).catch(() => {});
          return cachedResponse;
        }
        
        // Otherwise fetch from network and cache
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200) {
            return response;
          }
          
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
    );
    return;
  }
  
  // For everything else, use stale-while-revalidate strategy
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return cached response immediately if available
      const fetchPromise = fetch(event.request)
        .then(networkResponse => {
          // Update cache with fresh response
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(error => {
          console.log('[ServiceWorker] Fetch failed; returning cached response or null', error);
        });

      return cachedResponse || fetchPromise;
    })
  );
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Periodic background sync when supported
self.addEventListener('periodicsync', event => {
  if (event.tag === 'update-cache') {
    event.waitUntil(updateCache());
  }
});

// Function to update cache in background
async function updateCache() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(STATIC_ASSETS);
  console.log('[ServiceWorker] Background sync complete');
}
