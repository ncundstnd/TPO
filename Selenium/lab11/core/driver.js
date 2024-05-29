const { Builder } = require('selenium-webdriver')
const chrome = require("selenium-webdriver/chrome");
let options = new chrome.Options();

options.addArguments('headless');
options.addArguments('disable-gpu');
options.addArguments('no-sandbox');
options.addArguments('disable-dev-shm-usage');
options.addArguments("user-data-dir=C:\\Users\\Ignat\\AppData\\Local\\Google\\Chrome\\User Data");
options.addArguments("profile-directory=Default");

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()

module.exports = driver;