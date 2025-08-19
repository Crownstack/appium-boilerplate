const chai = require('chai');
const testData = require('./testData/loginTestData.json');
const { initDriver, wd } = require('./utils/driver');
const LoginPage = require('./pageObjects/LoginPage');
const { loadEnvConfig } = require('./utils/envloader');

// Load env based on CLI variable TEST_ENV (default: 'qa')
const TEST_ENV = process.env.TEST_ENV || 'qa';
try {
  loadEnvConfig(TEST_ENV);
} catch (error) {
  console.warn(`⚠️  Warning: ${error.message}`);
  console.log('🔄 Continuing with existing environment variables...');
}

// Validate required environment variables
const requiredEnvVars = ['MOBILE_NUMBER', 'OTP', 'APP_PACKAGE'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingVars.join(', '));
  console.log('💡 Make sure your .env file contains these variables or set them manually');
}

module.exports = {
  wd,
  chai,
  testData,
  initDriver,
  LoginPage,
  env: {
    mobileNumber: process.env.MOBILE_NUMBER,
    otp: process.env.OTP,
    appPackage: process.env.APP_PACKAGE
  }
};
