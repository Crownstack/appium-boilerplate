const { chai, initDriver, LoginPage, env, testData } = require('../fixture.js');
const { expect } = chai;

/**
 * Test Suite: Login Functionality
 * Test Case ID: L_100
 * Description: Comprehensive login functionality testing
 * 
 * Test Cases:
 * - L101: Valid login credentials
 * - L102: Invalid login credentials
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
    try {
      console.log('🔄 Restarting app for fresh test state...');
      const appId = env.appPackage || process.env.APP_BUNDLE_ID;
      await driver.execute('mobile: terminateApp', { appId });
      await driver.execute('mobile: activateApp', { appId });
      // Wait for app to fully load
      await driver.sleep(3000);
      console.log('App restarted successfully');
    } catch (error) {
      console.warn('App restart failed:', error.message);
      console.log('Continuing with current app state...');
    }
  });

  it("L101_ User should login with valid credentials", async () => {
    console.log('Testing valid login credentials...');
    await loginPage.enterUsername(env.mobileNumber);
    await loginPage.enterPassword(env.otp);
    await loginPage.tapLogin();

    const isSuccess = await loginPage.validateLoginSuccess("Welcome");
    expect(isSuccess, 'Login should succeed with valid credentials').to.be.true;
    console.log('Valid login test passed');
  });

  it("L102_ User should not login with invalid credentials", async () => {
    console.log('Testing invalid login credentials...');
    await loginPage.enterUsername(testData.invalidUserName);
    await loginPage.enterPassword(testData.invalidPassword);
    await loginPage.tapLogin();

    const isError = await loginPage.validateLoginFailure("Invalid username or password");
    expect(isError, 'Login should fail with invalid credentials').to.be.true;
    console.log('Invalid login test passed');
  });

  after(async () => {
    console.log('🔚 Cleaning up test session...');
    if (driver) {
      await driver.quit();
      console.log('Driver session ended successfully');
    }
  });
});
