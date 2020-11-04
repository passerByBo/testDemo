const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.baidu.com/');
    await driver.findElement(By.name('wd')).sendKeys('特朗普拜登', Key.RETURN);
    await driver.wait(until.titleIs('快讯 | 六大摇摆州：特朗普赢两州 拜登赢一州 余下三州特朗普均大幅领先_宾夕法尼亚'), 1000);
  } finally {
    await driver.quit();
  }
})();