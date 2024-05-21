const { By, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class LibraryPage extends BasePage {
  // Нажать на элемент категории в библиотеке
  async selectCategory(categoryName) {
    const categoryElement = await this.driver.findElement(By.xpath(`//div[@class='library-category' and text()='${categoryName}']`));
    await categoryElement.click();
  }

  // Ввести текст в поле поиска в библиотеке
  async enterSearchText(text) {
    const searchInput = await this.driver.findElement(By.name('librarySearch'));
    await searchInput.clear();
    await searchInput.sendKeys(text);
  }

  // Нажать на кнопку поиска в библиотеке
  async clickSearchButton() {
    const searchButton = await this.driver.findElement(By.css('.library-search-button'));
    await searchButton.click();
  }

  // Ожидание загрузки результатов поиска
  async waitForResults() {
    const resultsLocator = By.css('.library-results');
    await this.driver.wait(until.elementLocated(resultsLocator), 10000);
  }

  // Получить текст первого результата поиска
  async getFirstResultText() {
    const firstResult = await this.driver.findElement(By.css('.library-result-item:first-child .result-title'));
    return await firstResult.getText();
  }

  // Проверить наличие элемента с текстом
  async isElementWithTextPresent(text) {
    const element = await this.driver.findElement(By.xpath(`//*[contains(text(),'${text}')]`));
    return element.isDisplayed();
  }

  // Нажать на элемент фильтра по названию
  async selectFilter(filterName) {
    const filterElement = await this.driver.findElement(By.xpath(`//button[contains(text(),'${filterName}')]`));
    await filterElement.click();
  }

  // Очистить поле поиска
  async clearSearchField() {
    const searchInput = await this.driver.findElement(By.name('librarySearch'));
    await searchInput.clear();
  }

  // Нажать на элемент пагинации
  async clickPagination(pageNumber) {
    const paginationElement = await this.driver.findElement(By.xpath(`//a[@class='pagination-link' and text()='${pageNumber}']`));
    await paginationElement.click();
  }

  // Ожидание загрузки библиотеки
  async waitForLibraryLoad() {
    const libraryLocator = By.css('.library-content');
    await this.driver.wait(until.elementLocated(libraryLocator), 10000);
  }

  // Получить заголовок страницы библиотеки
  async getPageTitle() {
    return await this.driver.getTitle();
  }
}

module.exports = new LibraryPage();
