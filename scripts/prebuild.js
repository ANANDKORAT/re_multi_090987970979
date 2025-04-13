// scripts/prebuild.js
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Ensure dotenv is loaded at the top

// Log the environment variable for debugging
console.log('Checking REACT_APP_ADSENSE_PUBLISHER_ID...');
const publisherId = process.env.REACT_APP_ADSENSE_PUBLISHER_ID;

if (!publisherId) {
  console.error('Error: REACT_APP_ADSENSE_PUBLISHER_ID is not set');
  process.exit(1);
}

// Create ads.txt content
const adsContent = `google.com, ${publisherId}\n`;

try {
  // Ensure the public directory exists
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    console.error('Error: public directory does not exist');
    process.exit(1);
  }

  // Write to public/ads.txt
  fs.writeFileSync(
    path.join(publicDir, 'ads.txt'),
    adsContent
  );
  console.log('ads.txt generated successfully');
} catch (error) {
  console.error('Error writing ads.txt:', error);
  process.exit(1);
}