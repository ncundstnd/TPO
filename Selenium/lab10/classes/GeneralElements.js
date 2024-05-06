const BasePage = require('./Basepage');
const { By } = require('selenium-webdriver');

class GeneralElements extends BasePage {
  async acceptCookies() {
    return await driver.findElement(By.id('onetrust-accept-btn-handler')).click();
  }

  async inputSearchString(searchString) {
    return await driver.findElement(By.className('headerSearch__input')).sendKeys(searchString);
  }

  async submitSearch() {
    return await driver.findElement(By.className('headerSearch__submit')).click();
  }
}

module.exports = new GeneralElements();
