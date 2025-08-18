
const androidConfig = require('./utils/config.android');
const iosConfig = require('./utils/config.ios');

const isIOS = process.env.PLATFORM === 'ios';

module.exports = isIOS ? iosConfig : androidConfig;