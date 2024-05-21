const { By, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class ProfilePage extends BasePage {
  // Нажать на кнопку редактирования профиля
  async clickEditProfile() {
    const editButton = await this.driver.findElement(By.css('.profile-edit-button'));
    await editButton.click();
  }

  // Ввести текст в поле имени пользователя
  async enterUserName(userName) {
    const nameInput = await this.driver.findElement(By.name('username'));
    await nameInput.clear();
    await nameInput.sendKeys(userName);
  }

  // Ввести текст в поле email
  async enterEmail(email) {
    const emailInput = await this.driver.findElement(By.name('email'));
    await emailInput.clear();
    await emailInput.sendKeys(email);
  }

  // Ввести текст в поле пароля
  async enterPassword(password) {
    const passwordInput = await this.driver.findElement(By.name('password'));
    await passwordInput.clear();
    await passwordInput.sendKeys(password);
  }

  // Нажать на кнопку сохранения изменений
  async clickSaveChanges() {
    const saveButton = await this.driver.findElement(By.css('.profile-save-button'));
    await saveButton.click();
  }

  // Ожидание загрузки страницы профиля
  async waitForProfileLoad() {
    const profileLocator = By.css('.profile-content');
    await this.driver.wait(until.elementLocated(profileLocator), 10000);
  }

  // Получить текст уведомления об успешном обновлении профиля
  async getSuccessMessage() {
    const successMessage = await this.driver.findElement(By.css('.profile-success-message'));
    return await successMessage.getText();
  }

  // Проверить наличие элемента с текстом
  async isElementWithTextPresent(text) {
    const element = await this.driver.findElement(By.xpath(`//*[contains(text(),'${text}')]`));
    return element.isDisplayed();
  }

  // Нажать на кнопку выхода из профиля
  async clickLogout() {
    const logoutButton = await this.driver.findElement(By.css('.profile-logout-button'));
    await logoutButton.click();
  }

  // Получить текст заголовка страницы профиля
  async getPageTitle() {
    return await this.driver.getTitle();
  }

  // Получить текст текущего имени пользователя
  async getCurrentUserName() {
    const userNameElement = await this.driver.findElement(By.css('.profile-username'));
    return await userNameElement.getText();
  }

  // Проверить, отображается ли аватар пользователя
  async isAvatarDisplayed() {
    const avatarElement = await this.driver.findElement(By.css('.profile-avatar'));
    return avatarElement.isDisplayed();
  }
}

module.exports = new ProfilePage();
