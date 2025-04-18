import React, { useEffect, useState } from 'react';

const AdSenseUnit = ({ adFormat }) => {
  const [adFailed, setAdFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let observer;
    let timeout;
    
    try {
      const pushAd = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.error('Error loading AdSense unit:', error);
          setAdFailed(true);
          setIsLoading(false);
        }
      };

      // Add event listener for ad load failure
      const adContainer = document.querySelector('.adsbygoogle');
      if (adContainer) {
        observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.target.style.display === 'none') {
              setAdFailed(true);
              setIsLoading(false);
            }
          });
        });

        observer.observe(adContainer, { 
          attributes: true, 
          attributeFilter: ['style'] 
        });
      }

      // Set a timeout to consider the ad failed if it doesn't load within 2 seconds
      timeout = setTimeout(() => {
        setAdFailed(true);
        setIsLoading(false);
      }, 2000);

      pushAd();
    } catch (error) {
      console.error('Error setting up AdSense:', error);
      setAdFailed(true);
      setIsLoading(false);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  if (adFailed && !isLoading) {
    return null;
  }

  const containerStyle = {
    display: isLoading ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: adFormat === 'rectangle' ? '250px' : '100px',
    minWidth: '300px',
    width: '100%',
    margin: '10px 0',
    background: '#f8f9fa',
    border: '1px dashed #dee2e6',
    position: 'relative'
  };

  const adStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
  };

  return (
    <div style={containerStyle}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={`ca-${process.env.REACT_APP_ADS_PUB_ID}`}
        data-ad-slot={process.env.REACT_APP_ADS_SLOT_ID}
        data-ad-format={adFormat || 'auto'}
        data-full-width-responsive="true"
      />
      {isLoading && (
        <div style={{ 
          position: 'absolute',
          color: '#6c757d',
          fontSize: '14px',
          textAlign: 'center',
          padding: '10px'
        }}>
          Loading Advertisement...
        </div>
      )}
    </div>
  );
};

export default AdSenseUnit;