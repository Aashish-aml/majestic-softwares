import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../public/images');
mkdirSync(outDir, { recursive: true });

const team = [
  { id: '01', name: 'Aria Chen', hue: 168 },
  { id: '02', name: 'Marcus Webb', hue: 210 },
  { id: '03', name: 'Sofia Alvarez', hue: 24 },
  { id: '04', name: 'Jonah Park', hue: 280 },
  { id: '05', name: 'Elena Volkov', hue: 340 },
  { id: '06', name: 'Dev Patel', hue: 145 },
  { id: '07', name: 'Maya Okonkwo', hue: 45 },
  { id: '08', name: 'Liam OBrien', hue: 195 },
  { id: '09', name: 'Priya Nair', hue: 320 },
  { id: '10', name: 'Noah Kim', hue: 90 },
  { id: '11', name: 'Clara Jensen', hue: 255 },
  { id: '12', name: 'Hassan Rahman', hue: 12 },
  { id: '13', name: 'Yuki Tanaka', hue: 175 },
  { id: '14', name: 'Amelia Brooks', hue: 300 },
  { id: '15', name: 'Carlos Mendes', hue: 55 },
  { id: '16', name: 'Nina Kowalski', hue: 220 },
  { id: '17', name: 'Omar Farouk', hue: 130 },
  { id: '18', name: 'Isla Murray', hue: 350 },
];

const projects = [
  { id: 'northline', title: 'Northline Commerce', hue: 200 },
  { id: 'pulsehealth', title: 'PulseHealth', hue: 160 },
  { id: 'ledgerly', title: 'Ledgerly', hue: 40 },
  { id: 'orbitfm', title: 'Orbit FM', hue: 280 },
  { id: 'havenstay', title: 'HavenStay', hue: 15 },
  { id: 'vectorlab', title: 'Vector Lab', hue: 120 },
];

function hsl(h, s, l, a = 1) {
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

async function writeSvgWebp(filename, svg, width, height) {
  await sharp(Buffer.from(svg))
    .webp({ quality: 86 })
    .toFile(join(outDir, filename));
  console.log('wrote', filename, `${width}x${height}`);
}

async function teamPortrait({ id, name, hue }) {
  const w = 640;
  const h = 800;
  const ini = initials(name);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${hsl(hue, 35, 18)}"/>
      <stop offset="55%" stop-color="${hsl(hue + 20, 28, 12)}"/>
      <stop offset="100%" stop-color="${hsl(hue - 15, 40, 8)}"/>
    </linearGradient>
    <radialGradient id="glow" cx="35%" cy="30%" r="55%">
      <stop offset="0%" stop-color="${hsl(hue, 55, 48, 0.45)}"/>
      <stop offset="100%" stop-color="${hsl(hue, 40, 20, 0)}"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <circle cx="480" cy="620" r="220" fill="${hsl(hue, 40, 22, 0.35)}"/>
  <circle cx="160" cy="140" r="90" fill="${hsl(hue + 30, 50, 55, 0.18)}"/>
  <text x="50%" y="48%" text-anchor="middle" dominant-baseline="middle"
    font-family="Georgia, 'Times New Roman', serif" font-size="140" font-weight="600"
    fill="${hsl(hue, 20, 88)}" letter-spacing="8">${ini}</text>
  <rect x="48" y="${h - 96}" width="${w - 96}" height="2" fill="${hsl(hue, 35, 55, 0.5)}"/>
</svg>`;
  await writeSvgWebp(`team-${id}.webp`, svg, w, h);
}

async function projectCover({ id, title, hue }) {
  const w = 1200;
  const h = 800;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${hsl(hue, 42, 16)}"/>
      <stop offset="100%" stop-color="${hsl(hue + 40, 30, 8)}"/>
    </linearGradient>
    <linearGradient id="band" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${hsl(hue, 60, 52, 0)}"/>
      <stop offset="40%" stop-color="${hsl(hue, 55, 55, 0.55)}"/>
      <stop offset="100%" stop-color="${hsl(hue + 20, 50, 45, 0)}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect x="0" y="280" width="${w}" height="120" fill="url(#band)"/>
  <circle cx="980" cy="180" r="160" fill="${hsl(hue, 45, 40, 0.2)}"/>
  <circle cx="220" cy="560" r="200" fill="${hsl(hue + 50, 35, 30, 0.18)}"/>
  <text x="72" y="700" font-family="Georgia, serif" font-size="54" fill="#f4efe6">${title}</text>
</svg>`;
  await writeSvgWebp(`work-${id}.webp`, svg, w, h);
}

async function heroImage() {
  const w = 1920;
  const h = 1080;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stop-color="#0b1218"/>
      <stop offset="45%" stop-color="#122018"/>
      <stop offset="100%" stop-color="#081018"/>
    </linearGradient>
    <radialGradient id="a" cx="72%" cy="38%" r="42%">
      <stop offset="0%" stop-color="hsla(158,55%,42%,0.55)"/>
      <stop offset="100%" stop-color="hsla(158,40%,20%,0)"/>
    </radialGradient>
    <radialGradient id="b" cx="18%" cy="70%" r="40%">
      <stop offset="0%" stop-color="hsla(28,60%,48%,0.28)"/>
      <stop offset="100%" stop-color="hsla(28,40%,20%,0)"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#a)"/>
  <rect width="${w}" height="${h}" fill="url(#b)"/>
  <g opacity="0.35" stroke="hsla(158,40%,70%,0.35)" fill="none" stroke-width="1.5">
    <path d="M120 820 C420 620, 780 920, 1100 640 S1600 520, 1800 300"/>
    <path d="M80 640 C360 520, 700 780, 1040 500 S1500 380, 1840 220"/>
  </g>
  <circle cx="1480" cy="320" r="8" fill="#7dcea0"/>
  <circle cx="420" cy="680" r="5" fill="#e0b27a"/>
</svg>`;
  await writeSvgWebp('hero.webp', svg, w, h);
}

async function aboutImage() {
  const w = 1400;
  const h = 1000;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#101820"/>
      <stop offset="100%" stop-color="#0a1412"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect x="80" y="80" width="560" height="840" fill="#15222a"/>
  <rect x="720" y="160" width="560" height="360" fill="#1a2e28"/>
  <rect x="720" y="560" width="260" height="360" fill="#243038"/>
  <rect x="1020" y="560" width="260" height="360" fill="#2a3c28"/>
  <text x="120" y="160" font-family="Georgia, serif" font-size="42" fill="#d8c7a6">Studio</text>
</svg>`;
  await writeSvgWebp('about.webp', svg, w, h);
}

async function ogImage() {
  const w = 1200;
  const h = 630;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#0a1014"/>
  <circle cx="980" cy="180" r="220" fill="hsla(158,45%,40%,0.25)"/>
  <text x="72" y="300" font-family="Georgia, serif" font-size="64" fill="#f2ebe3">MajesticSoftwares</text>
  <text x="72" y="380" font-family="Arial, sans-serif" font-size="28" fill="#9eb5a8">Product-minded engineering studio</text>
</svg>`;
  await writeSvgWebp('og-image.webp', svg, w, h);
}

async function serviceIcon(id, hue) {
  const w = 640;
  const h = 480;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${hsl(hue, 30, 14)}"/>
      <stop offset="100%" stop-color="${hsl(hue, 25, 8)}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" rx="0" fill="url(#bg)"/>
  <rect x="80" y="120" width="200" height="240" fill="${hsl(hue, 40, 35, 0.35)}"/>
  <rect x="320" y="80" width="240" height="140" fill="${hsl(hue + 20, 45, 45, 0.28)}"/>
  <rect x="320" y="260" width="240" height="160" fill="${hsl(hue - 10, 35, 30, 0.3)}"/>
</svg>`;
  await writeSvgWebp(`service-${id}.webp`, svg, w, h);
}

await heroImage();
await aboutImage();
await ogImage();
for (const t of team) await teamPortrait(t);
for (const p of projects) await projectCover(p);
for (const [i, hue] of [158, 200, 40, 280, 15, 120, 90].entries()) {
  await serviceIcon(String(i + 1).padStart(2, '0'), hue);
}
console.log('done');
