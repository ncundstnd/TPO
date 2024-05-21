const { By, until } = require('selenium-webdriver');
const BasePage = require('./Basepage');

class LibraryPage extends BasePage {
  async selectCategory(categoryName) {
    const categoryElement = await this.driver.findElement(By.xpath(`//div[@class='library-category' and text()='${categoryName}']`));
    await categoryElement.click();
  }

  async enterSearchText(text) {
    const searchInput = await this.driver.findElement(By.name('librarySearch'));
    await searchInput.clear();
    await searchInput.sendKeys(text);
  }

  async clickSearchButton() {
    const searchButton = await this.driver.findElement(By.css('.library-search-button'));
    await searchButton.click();
  }

  async waitForResults() {
    const resultsLocator = By.css('.library-results');
    await this.driver.wait(until.elementLocated(resultsLocator), 10000);
  }

  async getFirstResultText() {
    const firstResult = await this.driver.findElement(By.css('.library-result-item:first-child .result-title'));
    return await firstResult.getText();
  }

  async isElementWithTextPresent(text) {
    const element = await this.driver.findElement(By.xpath(`//*[contains(text(),'${text}')]`));
    return element.isDisplayed();
  }

  async selectFilter(filterName) {
    const filterElement = await this.driver.findElement(By.xpath(`//button[contains(text(),'${filterName}')]`));
    await filterElement.click();
  }

  async clearSearchField() {
    const searchInput = await this.driver.findElement(By.name('librarySearch'));
    await searchInput.clear();
  }

  async clickPagination(pageNumber) {
    const paginationElement = await this.driver.findElement(By.xpath(`//a[@class='pagination-link' and text()='${pageNumber}']`));
    await paginationElement.click();
  }

  async waitForLibraryLoad() {
    const libraryLocator = By.css('.library-content');
    await this.driver.wait(until.elementLocated(libraryLocator), 10000);
  }

  async getPageTitle() {
    return await this.driver.getTitle();
  }
}

module.exports = new LibraryPage();
