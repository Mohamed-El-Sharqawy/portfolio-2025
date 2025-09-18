'use client';

import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PwaInstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Store the install prompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for app installation
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowPrompt(false);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    
    // Show the install prompt
    await installPrompt.prompt();
    
    // Wait for user choice
    const choiceResult = await installPrompt.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // Reset the prompt variable
    setInstallPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt || isInstalled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-4 max-w-xs">
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">Install App</h3>
          <p className="text-gray-300 text-sm mb-3">Install this app on your device for quick access.</p>
          <div className="flex space-x-2">
            <button 
              onClick={handleInstallClick}
              className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              <Download className="h-4 w-4 mr-1" />
              Install
            </button>
            <button 
              onClick={() => setShowPrompt(false)}
              className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md text-sm font-medium transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
