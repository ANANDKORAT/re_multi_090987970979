import { useEffect } from 'react';

const AdSenseAutoAds = () => {
  useEffect(() => {
    try {
      // Check if script is already loaded
      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${process.env.REACT_APP_ADS_PUB_ID}`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        
        // Add error handling
        script.onerror = (error) => {
          console.error('AdSense script failed to load:', error);
        };
        
        document.head.appendChild(script);

        // Initialize AdSense after script loads
        script.onload = () => {
          try {
            if (!window.adsbygoogle) {
              window.adsbygoogle = [];
            }
            if (window.adsbygoogle.loaded !== true) {
              window.adsbygoogle.push({
                google_ad_client: `ca-${process.env.REACT_APP_ADS_PUB_ID}`,
                enable_page_level_ads: true
              });
              window.adsbygoogle.loaded = true;
            }
          } catch (error) {
            console.error('Error initializing AdSense:', error);
          }
        };
      }
    } catch (error) {
      console.error('Error setting up AdSense:', error);
    }
  }, []);

  return null;
};

export default AdSenseAutoAds;