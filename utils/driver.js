const { wd, appiumConfig } = require('../fixture.js');

const driver = wd.promiseChainRemote("http://localhost:4723/wd/hub");

async function initDriver() {
  await driver.init(appiumConfig);
  return driver;
}

module.exports = { initDriver };
