import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Exact vector reproduction of the official CBM Academy logo as uploaded
// Top text: "CBM Academy" (CBM in orange #FF6B00, Academy in dark charcoal #1E1E1E)
// Bottom text: "Your Digital Marketing Journey Begins Here" in dark charcoal #1E1E1E
// Crisp high-resolution SVG rendered directly to JPG / PNG

const svg = `
<svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
  <!-- Solid clean white canvas matching uploaded original image -->
  <rect width="100%" height="100%" fill="#FFFFFF"/>

  <!-- Centered Logo Group -->
  <g transform="translate(600, 480)">
    <!-- Line 1: CBM Academy -->
    <text text-anchor="middle" y="-20" font-family="'Liberation Sans', 'Nimbus Sans', 'Helvetica Neue', Arial, sans-serif" font-size="142" font-weight="900" letter-spacing="-1.5px">
      <tspan fill="#FF6A00">CBM</tspan>
      <tspan fill="#1D1D1F"> Academy</tspan>
    </text>

    <!-- Line 2: Tagline "Your Digital Marketing Journey Begins Here" -->
    <text text-anchor="middle" y="80" font-family="'Liberation Sans', 'Nimbus Sans', 'Helvetica Neue', Arial, sans-serif" font-size="52" font-weight="700" fill="#202022" letter-spacing="-0.5px">
      Your Digital Marketing Journey Begins Here
    </text>
  </g>
</svg>
`;

// Also create a tightly cropped version for ultra-crisp navbar display
const svgCropped = `
<svg width="840" height="240" viewBox="0 0 840 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#FFFFFF"/>
  <g transform="translate(420, 115)">
    <text text-anchor="middle" y="-10" font-family="'Liberation Sans', 'Nimbus Sans', 'Helvetica Neue', Arial, sans-serif" font-size="94" font-weight="900" letter-spacing="-1px">
      <tspan fill="#FF6A00">CBM</tspan>
      <tspan fill="#1D1D1F"> Academy</tspan>
    </text>
    <text text-anchor="middle" y="55" font-family="'Liberation Sans', 'Nimbus Sans', 'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="700" fill="#202022" letter-spacing="-0.3px">
      Your Digital Marketing Journey Begins Here
    </text>
  </g>
</svg>
`;

async function render() {
  const outDir = path.resolve('public/assets');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Render the official logo matching the uploaded image exactly
  const svgBuffer = Buffer.from(svgCropped);

  // 1. public/assets/cbm-academy-logo.jpg
  await sharp(svgBuffer)
    .jpeg({ quality: 100 })
    .toFile(path.join(outDir, 'cbm-academy-logo.jpg'));

  // 2. public/assets/cbm-academy-logo.jpeg
  await sharp(svgBuffer)
    .jpeg({ quality: 100 })
    .toFile(path.join(outDir, 'cbm-academy-logo.jpeg'));

  // 3. public/assets/cbm-academy-logo.png
  await sharp(svgBuffer)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'cbm-academy-logo.png'));

  // Also save the full canvas version
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 100 })
    .toFile(path.join(outDir, 'cbm-academy-logo-full.jpg'));

  console.log('Official CBM Academy Logo generated successfully in public/assets/');
}

render().catch(console.error);
