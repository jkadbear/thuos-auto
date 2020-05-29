const { firefox } = require('playwright');

(async () => {
    const browser = await firefox.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://thos.tsinghua.edu.cn/');
    await page.fill('#i_user', 'USERID');
    await page.fill('#i_pass', 'PASSWORD');
    page.click('a[type="button"]');
    page.click('div[name="【日报】学生健康和出行情况报告"]');
    await page.waitForSelector('#loadingForm');
    await page.waitForSelector('#loadingForm', {state: 'hidden'});
    // dont know why, we have to wait browser for 500ms
    await page.waitForTimeout(500);
    page.click('#commit');
    // wait 2000ms to view the success feedback
    await page.waitForTimeout(2000);
    await browser.close();
   }
 )();
