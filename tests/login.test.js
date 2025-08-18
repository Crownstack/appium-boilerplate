const { chai, initDriver, LoginPage, env, testData } = require('../fixtures.js');
const { expect } = chai;

/*
 * Test Case: L_100
 * Description: Verify the Login Functionality
 * Elements verified:
 * - Valid Login
 * - Invalid Login
 */

describe("Login Functionality", function () {
  this.timeout(300000);
  let driver;
  let loginPage;

  before(async () => {
    driver = await initDriver();
    loginPage = new LoginPage(driver);
  });

  beforeEach(async () => {
    await driver.execute('mobile: terminateApp', { appId: env.appPackage });
    await driver.execute('mobile: activateApp', { appId: env.appPackage });
  });

  it("L101_ User should login with valid credentials", async () => {
    await loginPage.enterUsername(env.username);
    await loginPage.enterPassword(env.password);
    await loginPage.tapLogin();

    const isSuccess = await loginPage.validateLoginSuccess("Welcome");
    expect(isSuccess).to.be.true;
  });

  it("L102_ User should not login with invalid credentials", async () => {
    await loginPage.enterUsername(testData.invalidUserName);
    await loginPage.enterPassword(testData.invalidPassword);
    await loginPage.tapLogin();

    const isError = await loginPage.validateLoginFailure("Invalid username or password");
    expect(isError).to.be.true;
  });

  after(async () => {
    await driver.quit();
  });
});
