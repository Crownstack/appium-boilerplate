module.exports = {
  platformName: 'iOS',
  platformVersion: process.env.IOS_VERSION || '16.0',
  deviceName: process.env.IOS_DEVICE || 'iPhone 14',
  app: process.env.IOS_APP_PATH || '/path/to/your/ios/app.app',
  bundleId: process.env.APP_BUNDLE_ID || 'com.example.app',
  automationName: 'XCUITest',
  noReset: true,
  fullReset: false,
  newCommandTimeout: 300
};