'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
            updateViaCache: 'none'
          });
          
          if (registration.installing) {
            console.log('Service worker installing');
          } else if (registration.waiting) {
            console.log('Service worker installed');
          } else if (registration.active) {
            console.log('Service worker active');
          }
          
          // Check for updates every hour
          setInterval(() => {
            registration.update();
            console.log('Service worker update check');
          }, 60 * 60 * 1000);
          
        } catch (error) {
          console.error(`Service worker registration failed: ${error}`);
        }
      } else {
        console.log('Service workers are not supported.');
      }
    };

    // Register once the page is fully loaded
    if (document.readyState === 'complete') {
      registerServiceWorker();
    } else {
      window.addEventListener('load', registerServiceWorker);
      return () => window.removeEventListener('load', registerServiceWorker);
    }
  }, []);

  return null;
}
