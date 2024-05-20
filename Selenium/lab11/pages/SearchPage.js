const { By } = require('selenium-webdriver');
const BasePage = require('./Basepage');

class SearchPage extends BasePage {
  async findContent(contentType) {
    return await driver.findElement(By.className(`g-nav-item g-nav-item-sets searchOptions__navigation-${contentType} searchOptions__navigationItem`)).click();
  }
}

module.exports = new SearchPage();