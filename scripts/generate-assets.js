const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateAssets() {
  const iconsDir = path.join(__dirname, '../public/icons');
  const imagesDir = path.join(__dirname, '../public/images');

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // 1. Icon 512x512 SVG
  const icon512Svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <rect width="512" height="512" rx="110" fill="#202323"/>
    <circle cx="256" cy="256" r="220" fill="none" stroke="#FF6B35" stroke-width="6" opacity="0.2"/>
    <g transform="translate(106, 126)">
      <!-- Left Angle Bracket < -->
      <path d="M 90 40 L 20 130 L 90 220" fill="none" stroke="#FFFFFF" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Right Angle Bracket > -->
      <path d="M 210 40 L 280 130 L 210 220" fill="none" stroke="#FF6B35" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Center Slash / -->
      <path d="M 180 30 L 120 230" fill="none" stroke="#FF6B35" stroke-width="32" stroke-linecap="round"/>
    </g>
  </svg>
  `;

  // 2. Icon 192x192 SVG
  const icon192Svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
    <rect width="192" height="192" rx="42" fill="#202323"/>
    <g transform="translate(40, 48)">
      <path d="M 34 16 L 8 48 L 34 80" fill="none" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M 78 16 L 104 48 L 78 80" fill="none" stroke="#FF6B35" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M 68 12 L 44 84" fill="none" stroke="#FF6B35" stroke-width="12" stroke-linecap="round"/>
    </g>
  </svg>
  `;

  // 3. Apple Touch Icon (180x180)
  const appleTouchSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
    <rect width="180" height="180" fill="#202323"/>
    <g transform="translate(38, 45)">
      <path d="M 32 15 L 8 45 L 32 75" fill="none" stroke="#FFFFFF" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M 72 15 L 96 45 L 72 75" fill="none" stroke="#FF6B35" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M 62 12 L 42 78" fill="none" stroke="#FF6B35" stroke-width="11" stroke-linecap="round"/>
    </g>
  </svg>
  `;

  // 4. OpenGraph 1200x630 Image SVG
  const ogImageSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#151717" />
        <stop offset="60%" stop-color="#202323" />
        <stop offset="100%" stop-color="#2A2E2E" />
      </linearGradient>
      <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FF6B35" />
        <stop offset="100%" stop-color="#FFA26B" />
      </linearGradient>
      <radialGradient id="glowOrange" cx="85%" cy="20%" r="50%">
        <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#FF6B35" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="glowCyan" cx="15%" cy="85%" r="50%">
        <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    
    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bgGrad)"/>
    <rect width="1200" height="630" fill="url(#glowOrange)"/>
    <rect width="1200" height="630" fill="url(#glowCyan)"/>

    <!-- Subtle Grid Lines -->
    <g opacity="0.1" stroke="#FFFFFF" stroke-width="1">
      <line x1="100" y1="0" x2="100" y2="630"/>
      <line x1="300" y1="0" x2="300" y2="630"/>
      <line x1="600" y1="0" x2="600" y2="630"/>
      <line x1="900" y1="0" x2="900" y2="630"/>
      <line x1="1100" y1="0" x2="1100" y2="630"/>
      <line x1="0" y1="150" x2="1200" y2="150"/>
      <line x1="0" y1="315" x2="1200" y2="315"/>
      <line x1="0" y1="480" x2="1200" y2="480"/>
    </g>

    <!-- Content Container -->
    <g transform="translate(100, 85)">
      <!-- Eyebrow Pill -->
      <rect x="0" y="0" width="380" height="42" rx="21" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.15"/>
      <circle cx="24" cy="21" r="6" fill="#FF6B35"/>
      <text x="42" y="27" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" letter-spacing="1">ENTERPRISE DIGITAL ENGINEERING</text>

      <!-- Main Headline -->
      <text x="0" y="125" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" letter-spacing="-1">
        Building Digital Solutions
      </text>
      <text x="0" y="195" fill="url(#brandGrad)" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" letter-spacing="-1">
        That Help Your Business Grow
      </text>

      <!-- Subtitle Description -->
      <text x="0" y="265" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400">
        Full-stack web applications, native &amp; cross-platform mobile apps,
      </text>
      <text x="0" y="300" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400">
        multi-tenant SaaS platforms, and enterprise cloud architecture.
      </text>

      <!-- Metrics Badges -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="190" height="75" rx="16" fill="#FFFFFF" fill-opacity="0.06" stroke="#FFFFFF" stroke-opacity="0.1"/>
        <text x="24" y="38" fill="#FF6B35" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800">70+</text>
        <text x="24" y="60" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600">Projects Delivered</text>

        <rect x="210" y="0" width="190" height="75" rx="16" fill="#FFFFFF" fill-opacity="0.06" stroke="#FFFFFF" stroke-opacity="0.1"/>
        <text x="234" y="38" fill="#38BDF8" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800">70+</text>
        <text x="234" y="60" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600">Happy Clients</text>

        <rect x="420" y="0" width="220" height="75" rx="16" fill="#FFFFFF" fill-opacity="0.06" stroke="#FFFFFF" stroke-opacity="0.1"/>
        <text x="444" y="38" fill="#34D399" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800">99.99%</text>
        <text x="444" y="60" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600">Uptime &amp; Quality SLA</text>
      </g>
    </g>

    <!-- Company Branding Logo Bottom Right -->
    <g transform="translate(860, 485)">
      <rect x="0" y="0" width="240" height="58" rx="14" fill="#1A1D1D" stroke="#FFFFFF" stroke-opacity="0.15"/>
      <!-- Logo Symbol -->
      <g transform="translate(18, 14)">
        <path d="M 9 6 L 3 15 L 9 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 21 6 L 27 15 L 21 24" fill="none" stroke="#FF6B35" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M 17 4 L 13 26" fill="none" stroke="#FF6B35" stroke-width="2.5" stroke-linecap="round"/>
      </g>
      <text x="56" y="34" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800">Flipcode Solutions</text>
    </g>
  </svg>
  `;

  // Render PNG / JPG files with sharp
  await sharp(Buffer.from(icon512Svg))
    .png()
    .toFile(path.join(iconsDir, 'icon-512x512.png'));

  await sharp(Buffer.from(icon192Svg))
    .png()
    .toFile(path.join(iconsDir, 'icon-192x192.png'));

  await sharp(Buffer.from(appleTouchSvg))
    .png()
    .toFile(path.join(iconsDir, 'apple-touch-icon.png'));

  await sharp(Buffer.from(appleTouchSvg))
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  await sharp(Buffer.from(ogImageSvg))
    .jpeg({ quality: 90 })
    .toFile(path.join(imagesDir, 'og-image.jpg'));

  await sharp(Buffer.from(ogImageSvg))
    .png()
    .toFile(path.join(imagesDir, 'og-image.png'));

  console.log('✅ Generated all icons and OpenGraph images successfully!');
}

generateAssets().catch(console.error);
