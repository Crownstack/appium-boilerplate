const wd = require('wd');
const appiumConfig = require('./appium.config');

const APPIUM_SERVER_URL = process.env.APPIUM_SERVER_URL || 'http://localhost:4723/wd/hub';

async function initDriver() {
  const driver = wd.promiseChainRemote(APPIUM_SERVER_URL);
  await driver.init(appiumConfig);
  return driver;
}

module.exports = { initDriver, wd };
