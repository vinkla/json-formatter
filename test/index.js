import test from 'ava';
import { chromium } from 'playwright';

test('testing', async (t) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.addInitScript({ path: './build/bason.js' });

  await page.goto('https://api.chucknorris.io/jokes/random');

  const elements = await page.$$('a');

  t.is(elements.length, 2);

  await page.close();
  await browser.close();
});
