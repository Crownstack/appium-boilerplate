const wd = require('wd');
const chai = require('chai');
const testData = require('../testData/loginTestData.json');
const appiumConfig = require('../appium.config');
const { initDriver } = require('../utils/driver');
const LoginPage = require('../pageObjects/LoginPage');
const { loadEnvConfig } = require('./utils/envLoader');

// Load env based on CLI variable TEST_ENV (default: 'qa')
const TEST_ENV = process.env.TEST_ENV || 'qa';
loadEnvConfig(TEST_ENV);

module.exports = {
  wd,
  chai,
  testData,
  appiumConfig,
  initDriver,
  LoginPage,
    env: {
    mobileNumber: process.env.MOBILE_NUMBER,
    otp: process.env.OTP,
    appPackage: process.env.APP_PACKAGE
  }
};
