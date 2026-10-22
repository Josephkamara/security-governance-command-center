import puppeteer from 'puppeteer-core';

const base = 'http://127.0.0.1:4521/security-governance-command-center';
const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
const failures = [];

async function check(name, fn) {
  try {
    await fn();
    console.log(`ok  ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
    console.error(`fail ${name}: ${error.message}`);
  }
}

await check('landing heading', async () => {
  await page.goto(`${base}/#/`, { waitUntil: 'networkidle0' });
  const text = await page.$eval('h1', (el) => el.textContent);
  if (!text.includes('Joseph Kamara')) throw new Error(text);
  const html = await page.content();
  if (!html.includes('Start the 3-minute tour')) throw new Error('expected tour button');
  if (!html.includes('One control set, one risk register, one page for leadership')) {
    throw new Error('expected value statement');
  }
});

await check('dashboard heading', async () => {
  await page.goto(`${base}/#/dashboard`, { waitUntil: 'networkidle0' });
  const text = await page.$eval('h1', (el) => el.textContent);
  if (!text.includes('Leadership dashboard')) throw new Error(text);
  const html = await page.content();
  if (!html.includes('indicators on target')) throw new Error('expected computed status line');
});

await check('control search filters to MFA', async () => {
  await page.goto(`${base}/#/controls`, { waitUntil: 'networkidle0' });
  await page.type('input[type="search"]', 'MFA');
  const shown = await page.$$eval('tbody tr', (rows) => rows.length);
  if (shown !== 1) throw new Error(`expected 1 MFA row, got ${shown}`);
});

await check('SOX exception selection', async () => {
  await page.goto(`${base}/#/sox`, { waitUntil: 'networkidle0' });
  await page.waitForSelector('.select-list button');
  const buttons = await page.$$('.select-list button');
  await buttons[1].click();
  const body = await page.$eval('.workflow', (el) => el.textContent);
  if (!body.includes('EX-03')) throw new Error(body.slice(0, 80));
});

await check('trust center SLA tab', async () => {
  await page.goto(`${base}/#/client-trust`, { waitUntil: 'networkidle0' });
  const tabs = await page.$$('.tab');
  await tabs[1].click();
  const body = await page.$eval('#main', (el) => el.textContent);
  if (!body.includes('Turnaround SLA tracker')) throw new Error('SLA section missing');
});

await check('vendor scorer moves to Tier 1', async () => {
  await page.goto(`${base}/#/vendor-risk`, { waitUntil: 'networkidle0' });
  const radios = await page.$$('input[type="radio"]');
  for (const index of [2, 5, 8, 11, 14, 17]) {
    await radios[index].click();
  }
  const result = await page.$eval('.score-result', (el) => el.textContent);
  if (!result.includes('Tier 1')) throw new Error(result);
});

await check('about uses Joseph', async () => {
  await page.goto(`${base}/#/about`, { waitUntil: 'networkidle0' });
  const text = await page.$eval('h1', (el) => el.textContent);
  if (!text.includes('Joseph Kamara')) throw new Error(text);
  const html = await page.content();
  if (!html.includes('enterprise standards')) {
    throw new Error('expected enterprise-standards wording');
  }
  if (!html.includes('First-90-days roadmap')) {
    throw new Error('expected roadmap link');
  }
});

await browser.close();
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('all smoke checks passed');
