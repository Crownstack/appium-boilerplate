
const androidConfig = require('./config.android');
const iosConfig = require('./config.ios');

/**
 * Returns the appropriate configuration based on PLATFORM environment variable
 * Defaults to Android if PLATFORM is not specified
 */
const isIOS = process.env.PLATFORM === 'ios';
const config = isIOS ? iosConfig : androidConfig;

console.log(`📱 Using ${isIOS ? 'iOS' : 'Android'} configuration`);

module.exports = config;