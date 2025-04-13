// scripts/prebuild.js
const fs = require('fs');
const path = require('path');

// Read environment variable
const publisherId = process.env.REACT_APP_ADSENSE_PUBLISHER_ID;

if (!publisherId) {
  console.error('Error: REACT_APP_ADSENSE_PUBLISHER_ID is not set');
  process.exit(1);
}

// Create ads.txt content
const adsContent = `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`;

// Write to public/ads.txt
fs.writeFileSync(
  path.join(__dirname, '../public/ads.txt'), 
  adsContent
);

console.log('ads.txt generated successfully');