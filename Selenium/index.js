const assert = require('chai').assert;
const { Builder, By, Key } = require('selenium-webdriver');

async function SearchSingerTest() {
  let driver = await new Builder()
    .forBrowser('MicrosoftEdge')
    .build();

  let TestResult = true;

  try {
    await driver.get('https://soundcloud.com/discover');

    await driver.findElement(
      By.className('onetrust-accept-btn-handler'))
      .click();
    await driver.findElement(
      By.className('headerSearch__input sc-input g-all-transitions-300'))
      .click()
      .sendKeys('RHCP');
    await driver.findElement(
      By.className('headerSearch__submit sc-ir'))
      .click();

    try {
      let elem = await driver.findElement(By.linkText("Red Hot Chili Peppers"));

      if (elem) {
        TestResult = true;
      }
    }
    catch { }

  } finally {
    await driver.quit();
    return TestResult;
  }
};

describe('SoundCloud Tests', function () {

  this.timeout(45000);

  it('Search Successful', async () => {
    let result = await SearchSingerTest();
    assert.isTrue(result, 'the search result is correct');
  });

});
