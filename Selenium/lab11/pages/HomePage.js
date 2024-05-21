const { By, until } = require('selenium-webdriver');
const BasePage = require('./Basepage');

class HomePage extends BasePage {
  async navigateTo(menuName) {
    const menuElement = await this.driver.findElement(By.linkText(menuName));
    await menuElement.click();
  }

  async enterSearchText(text) {
    const searchInput = await this.driver.findElement(By.name('homeSearch'));
    await searchInput.clear();
    await searchInput.sendKeys(text);
  }

  async clickSearchButton() {
    const searchButton = await this.driver.findElement(By.css('.home-search-button'));
    await searchButton.click();
  }

  async waitForBanner() {
    const bannerLocator = By.css('.home-banner');
    await this.driver.wait(until.elementLocated(bannerLocator), 10000);
  }

  async clickFirstCarouselItem() {
    const firstCarouselItem = await this.driver.findElement(By.css('.carousel-item:first-child'));
    await firstCarouselItem.click();
  }

  async getFirstCarouselItemTitle() {
    const firstCarouselItemTitle = await this.driver.findElement(By.css('.carousel-item:first-child .carousel-title'));
    return await firstCarouselItemTitle.getText();
  }

  async isElementPresent(selector) {
    const element = await this.driver.findElement(By.css(selector));
    return element.isDisplayed();
  }

  async clickLinkByText(linkText) {
    const linkElement = await this.driver.findElement(By.linkText(linkText));
    await linkElement.click();
  }

  async scrollToElement(selector) {
    const element = await this.driver.findElement(By.css(selector));
    await this.driver.executeScript('arguments[0].scrollIntoView(true);', element);
  }

  async getPageTitle() {
    return await this.driver.getTitle();
  }
}

module.exports = new HomePage();
