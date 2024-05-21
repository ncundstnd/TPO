const { By, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class SearchPage extends BasePage {
  // Навигация
  async findContent(contentType) {
    return await driver.findElement(By.className(`g-nav-item g-nav-item-sets searchOptions__navigation-${contentType} searchOptions__navigationItem`)).click();
  }

  // Ввод текста в поле поиска
  async enterSearchQuery(query) {
    const searchBox = await driver.findElement(By.id('search-box'));
    await searchBox.clear();
    return await searchBox.sendKeys(query);
  }

  // Нажатие кнопки поиска
  async clickSearchButton() {
    return await driver.findElement(By.id('search-button')).click();
  }

  // Ожидание результатов поиска
  async waitForSearchResults() {
    return await driver.wait(until.elementLocated(By.className('search-results')), 5000);
  }

  // Получение текста первого результата поиска
  async getFirstResultText() {
    const firstResult = await driver.findElement(By.css('.search-results .result-item:first-child'));
    return await firstResult.getText();
  }

  // Проверка отображения сообщения об ошибке поиска
  async isErrorDisplayed() {
    const errorMessage = await driver.findElement(By.id('error-message'));
    return await errorMessage.isDisplayed();
  }

  // Получение списка всех результатов поиска
  async getAllResults() {
    return await driver.findElements(By.css('.search-results .result-item'));
  }

  // Получение текста определенного результата поиска по индексу
  async getResultTextByIndex(index) {
    const results = await this.getAllResults();
    if (index < results.length) {
      return await results[index].getText();
    } else {
      throw new Error('Index out of bounds');
    }
  }

  // Проверка наличия результатов поиска
  async hasResults() {
    const results = await this.getAllResults();
    return results.length > 0;
  }
}

module.exports = new SearchPage();
