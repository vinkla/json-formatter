const test = require('ava');
const fs = require('fs');
const puppeteer = require('puppeteer');

test('testing', async (t) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.evaluateOnNewDocument(fs.readFileSync('./build/bason.js', 'utf8'));

  await page.goto('https://api.chucknorris.io/jokes/random');

  const elements = await page.$$('a');

  t.is(elements.length, 2);

  await page.close();
  await browser.close();
});
