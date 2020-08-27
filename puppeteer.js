const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: [ '--disable-gpu', '--no-sandbox' ] });
  //const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log('start');

  await page.goto('https://example.com');
  console.log('goto');

  await page.screenshot({path: 'example.png'});
  console.log('screenshot');

  await browser.close();
  console.log('closed');
})();
