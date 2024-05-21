const { By, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class HomePage extends BasePage {
  // Нажать на элемент навигации по имени
  async navigateTo(menuName) {
    const menuElement = await this.driver.findElement(By.linkText(menuName));
    await menuElement.click();
  }

  // Ввести текст в поле поиска на главной странице
  async enterSearchText(text) {
    const searchInput = await this.driver.findElement(By.name('homeSearch'));
    await searchInput.clear();
    await searchInput.sendKeys(text);
  }

  // Нажать на кнопку поиска на главной странице
  async clickSearchButton() {
    const searchButton = await this.driver.findElement(By.css('.home-search-button'));
    await searchButton.click();
  }

  // Ожидание появления баннера на главной странице
  async waitForBanner() {
    const bannerLocator = By.css('.home-banner');
    await this.driver.wait(until.elementLocated(bannerLocator), 10000);
  }

  // Нажать на первый элемент карусели
  async clickFirstCarouselItem() {
    const firstCarouselItem = await this.driver.findElement(By.css('.carousel-item:first-child'));
    await firstCarouselItem.click();
  }

  // Получить текст заголовка первого элемента карусели
  async getFirstCarouselItemTitle() {
    const firstCarouselItemTitle = await this.driver.findElement(By.css('.carousel-item:first-child .carousel-title'));
    return await firstCarouselItemTitle.getText();
  }

  // Проверить наличие элемента по селектору
  async isElementPresent(selector) {
    const element = await this.driver.findElement(By.css(selector));
    return element.isDisplayed();
  }

  // Нажать на элемент по тексту ссылки
  async clickLinkByText(linkText) {
    const linkElement = await this.driver.findElement(By.linkText(linkText));
    await linkElement.click();
  }

  // Скролл до элемента по селектору
  async scrollToElement(selector) {
    const element = await this.driver.findElement(By.css(selector));
    await this.driver.executeScript('arguments[0].scrollIntoView(true);', element);
  }

  // Получить текст заголовка страницы
  async getPageTitle() {
    return await this.driver.getTitle();
  }
}

module.exports = new HomePage();
