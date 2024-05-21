const { By, until } = require('selenium-webdriver');
const BasePage = require('./Basepage');

class ProfilePage extends BasePage {
  async clickEditProfile() {
    const editButton = await this.driver.findElement(By.css('.profile-edit-button'));
    await editButton.click();
  }

  async enterUserName(userName) {
    const nameInput = await this.driver.findElement(By.name('username'));
    await nameInput.clear();
    await nameInput.sendKeys(userName);
  }

  async enterEmail(email) {
    const emailInput = await this.driver.findElement(By.name('email'));
    await emailInput.clear();
    await emailInput.sendKeys(email);
  }

  async enterPassword(password) {
    const passwordInput = await this.driver.findElement(By.name('password'));
    await passwordInput.clear();
    await passwordInput.sendKeys(password);
  }

  async clickSaveChanges() {
    const saveButton = await this.driver.findElement(By.css('.profile-save-button'));
    await saveButton.click();
  }

  async waitForProfileLoad() {
    const profileLocator = By.css('.profile-content');
    await this.driver.wait(until.elementLocated(profileLocator), 10000);
  }

  async getSuccessMessage() {
    const successMessage = await this.driver.findElement(By.css('.profile-success-message'));
    return await successMessage.getText();
  }

  async isElementWithTextPresent(text) {
    const element = await this.driver.findElement(By.xpath(`//*[contains(text(),'${text}')]`));
    return element.isDisplayed();
  }

  async clickLogout() {
    const logoutButton = await this.driver.findElement(By.css('.profile-logout-button'));
    await logoutButton.click();
  }
}

module.exports = new ProfilePage();
