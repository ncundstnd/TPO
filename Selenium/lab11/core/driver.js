const { Builder } = require('selenium-webdriver')
const chrome = require("selenium-webdriver/chrome");
let options = new chrome.Options();

options.addArguments("user-data-dir=C:\\Users\\Ignat\\AppData\\Local\\Google\\Chrome\\User Data");
options.addArguments("profile-directory=Default");

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build()

module.exports = driver;