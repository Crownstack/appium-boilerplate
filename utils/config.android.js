module.exports = {
  platformName: 'Android',
  platformVersion: process.env.ANDROID_VERSION || '13',
  deviceName: process.env.ANDROID_DEVICE || 'emulator-5554',
  app: process.env.ANDROID_APP_PATH || '/path/to/your/android/app.apk',
  appPackage: process.env.APP_PACKAGE || 'com.example.app',
  appActivity: process.env.APP_ACTIVITY || 'com.example.MainActivity',
  automationName: 'UiAutomator2',
  noReset: true,
  fullReset: false,
  newCommandTimeout: 300
};