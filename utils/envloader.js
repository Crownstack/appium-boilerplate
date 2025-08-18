const dotenv = require('dotenv');
const path = require('path');

function loadEnvConfig(env) {
  const envPath = path.resolve(__dirname, `../../.env.${env}`);
  const result = dotenv.config({ path: envPath });

  if (result.error) {
    throw new Error(`Failed to load .env.${env}: ${result.error}`);
  }

  console.log(`✅ Loaded environment variables from .env.${env}`);
}

module.exports = { loadEnvConfig };
