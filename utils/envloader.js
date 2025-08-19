const dotenv = require('dotenv');
const path = require('path');

/**
 * Loads environment configuration from .env file
 * @param {string} environment - Environment name (dev, qa, stg)
 */
function loadEnvConfig(environment = 'qa') {
  // Look for .env file in project root
  const envPath = path.resolve(__dirname, '../.env');
  
  const result = dotenv.config({ path: envPath });

  if (result.error) {
    throw new Error(`Failed to load .env file from ${envPath}: ${result.error.message}`);
  }

  console.log(`Loaded environment variables from .env (${environment} environment)`);
}

module.exports = { loadEnvConfig };