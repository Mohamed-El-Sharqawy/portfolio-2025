export default function LayoutHead() {
  return (
    <>
      {/* Preconnect to critical domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="https://devsharqawy.com" />
      
      {/* PWA manifest */}
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      
      {/* Meta tags for browser compatibility */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#000000" />
      <meta name="color-scheme" content="dark" />
      
      {/* Fix for iOS Safari viewport issues */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Prevent iOS detection of phone numbers/emails */}
      <meta name="format-detection" content="telephone=no, email=no, address=no, date=no" />
    </>
  );
}
