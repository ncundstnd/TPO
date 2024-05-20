const { By } = require('selenium-webdriver')
const driver = require('../driver/driver')

class BasePage {
  constructor() {
    global.driver = driver;
  }

  async openThePage(URL) {
    return await driver.get(URL);
  }

  async findElement(elementInformation, method) {
    if (method === 'className') {
      return await driver.findElement(By.className(elementInformation));
    } else if (method === 'id') {
      return await driver.findElement(By.id(elementInformation));
    } else if (method === 'link') {
      return await driver.findElement(By.linkText(elementInformation));
    } else if (method === 'css') {
      return await driver.findElement(By.css(elementInformation));
    } else if (method === 'xpath') {
      return await driver.findElement(By.xpath(elementInformation));
    }
  }

  async findChildElement(parentElement, elementInformation, method) {
    if (method === 'className') {
      return await parentElement.findElement(By.className(elementInformation));
    } else if (method === 'link') {
      return await parentElement.findElement(By.linkText(elementInformation));
    } else if (method === 'css') {
      return await parentElement.findElement(By.css(elementInformation));
    }
  }

  async closeBrowser() {
    return await driver.quit();
  }
}

module.exports = BasePage;