class LoginPage {
    constructor(driver) {
      this.driver = driver;
  
      this.locators = {
        usernameInput: "com.example:id/username",
        passwordInput: "com.example:id/password",
        loginButton: "com.example:id/loginBtn",
        homeTitle: "com.example:id/homeScreenTitle",
        errorMessage: "com.example:id/errorText"
      };
    }
  
    async enterUsername(username) {
      const field = await this.driver.elementById(this.locators.usernameInput);
      await field.clear();
      await field.sendKeys(username);
    }
  
    async enterPassword(password) {
      const field = await this.driver.elementById(this.locators.passwordInput);
      await field.clear();
      await field.sendKeys(password);
    }
  
    async tapLogin() {
      const btn = await this.driver.elementById(this.locators.loginButton);
      await btn.click();
    }
  
    async validateLoginSuccess(expectedText) {
      try {
        const element = await this.driver.elementById(this.locators.homeTitle);
        const actualText = await element.text();
        return actualText.includes(expectedText);
      } catch {
        return false;
      }
    }
  
    async validateLoginFailure(expectedErrorText) {
      try {
        const element = await this.driver.elementById(this.locators.errorMessage);
        const actualText = await element.text();
        return actualText.includes(expectedErrorText);
      } catch {
        return false;
      }
    }
  }
  
  module.exports = LoginPage;
  