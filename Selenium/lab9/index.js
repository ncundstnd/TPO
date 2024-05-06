const assert = require('chai').assert;
const { Builder, By, Key } = require('selenium-webdriver');

async function SearchSingerTest() {
  let driver = await new Builder()
    .forBrowser('MicrosoftEdge')
    .build();

  let TestResult = true;

  try {
    console.log("Opening SoundCloud...");
    await driver.get('https://soundcloud.com/discover');

    console.log("Accepting cookies...");
    await driver.findElement(
      By.id('onetrust-accept-btn-handler'))
      .click();

    console.log("Enter search prompt...");
    await driver.findElement(
      By.className('headerSearch__input'))
      .sendKeys('RHCP');

    console.log("Searching for RHCP...");
    await driver.findElement(
      By.className('headerSearch__submit'))
      .click();

    await delay(2500);

    console.log("Checking search result...");
    let elem = await driver.findElement(By.linkText("Red Hot Chili Peppers"));

    if (elem) {
      TestResult = true;
    }

  } finally {
    console.log("Closing browser...");
    await driver.quit();
    return TestResult;
  }
};

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('SoundCloud Tests', function () {

  this.timeout(45000);

  it('Search Successful', async () => {
    let result = await SearchSingerTest();
    assert.isTrue(result, 'the search result is correct');
  });

});
