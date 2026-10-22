import { mkdir } from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = 'http://127.0.0.1:4521/security-governance-command-center';
const outDir = new URL('../docs/screenshots/', import.meta.url);

const pages = [
  { path: '#/', file: '00-landing.png' },
  { path: '#/dashboard', file: '01-dashboard.png' },
  { path: '#/controls', file: '02-controls.png' },
  { path: '#/controls?tab=testing', file: '03-sox.png' },
  { path: '#/client-trust', file: '04-client-trust.png' },
  { path: '#/vendor-risk', file: '05-vendor-risk.png' },
  { path: '#/dashboard#register', file: '06-risk-register.png' },
  { path: '#/parent-alignment', file: '07-parent-alignment.png' },
  { path: '#/30-60-90', file: '08-30-60-90.png' },
  { path: '#/about', file: '09-about.png' },
];

await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

for (const item of pages) {
  await page.goto(`${base}/${item.path}`, { waitUntil: 'networkidle0' });
  await page.waitForSelector('h1');
  await new Promise((resolve) => setTimeout(resolve, 400));
  await page.screenshot({
    path: new URL(item.file, outDir),
    fullPage: true,
    type: 'png',
  });
  console.log(`wrote ${item.file}`);
}

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto(`${base}/#/dashboard`, { waitUntil: 'networkidle0' });
await page.waitForSelector('h1');
await page.click('.nav-toggle');
await new Promise((resolve) => setTimeout(resolve, 300));
await page.screenshot({
  path: new URL('10-dashboard-mobile.png', outDir),
  fullPage: true,
  type: 'png',
});
console.log('wrote 10-dashboard-mobile.png');

await browser.close();
