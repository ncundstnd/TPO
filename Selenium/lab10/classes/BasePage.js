const { Builder, By } = require('selenium-webdriver')
const chrome = require("selenium-webdriver/chrome");
let options = new chrome.Options();

options.addArguments("user-data-dir=C:\\Users\\Ignat\\AppData\\Local\\Google\\Chrome\\User Data")
options.addArguments("profile-directory=Default")

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()

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