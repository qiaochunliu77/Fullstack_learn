const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/');
  let input = await page.$('#kw');
  await input.focus();
  await page.keyboard.type('大众点评')
  let btn = await page.$('#su');
  await btn.click();
  setTimeout(async () => {
    await page.pdf({path: 'hn.pdf', format: 'A4'});
    await browser.close();
  },2000)

})();