import { useEffect } from 'react';

const AdSenseAutoAds = () => {
  useEffect(() => {
    // Load the AdSense script
    const script = document.createElement('script');
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.REACT_APP_ADS_PUB_ID}`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AdSenseAutoAds;