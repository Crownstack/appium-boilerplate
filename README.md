# 📱 Appium Boilerplate Project

A clean and comprehensive **Appium automation framework** using **JavaScript** with modern best practices:

## ✨ Features

- 🎯 **Page Object Model (POM)** - Clean separation of concerns
- 🔧 **Environment Configuration** - `.env` file support with example template
- 📊 **Test Data Management** - External JSON test data files
- 🔄 **Centralized Fixture** - Single import point for all dependencies
- 🧪 **Mocha Test Runner** - Robust test execution framework
- ✅ **Chai Assertions** - Expressive assertion library
- 📈 **Mochawesome Reports** - Beautiful HTML test reports
- ⏱️ **Smart Waits** - Explicit waits for stable interactions
- 🌐 **Cross-Platform** - Support for both Android & iOS
- 🏗️ **Environment-Based** - Multi-environment support (dev, qa, stg)
- 🐛 **Enhanced Logging** - Comprehensive console logging for debugging
- 🔄 **No Circular Dependencies** - Clean architecture design


---

## 📁 Project Structure

```
appium-boilerplate/
│
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore patterns
├── package.json                # Dependencies and npm scripts
├── fixture.js                  # Centralized imports and configuration
│
├── pageObjects/
│   └── LoginPage.js            # Login page object with cross-platform support
│
├── testData/
│   └── loginTestData.json      # Test data for login scenarios
│
├── tests/
│   └── login.test.js           # Login functionality test suite
│
├── utils/
│   ├── appium.config.js        # Platform-specific configuration selector
│   ├── config.android.js       # Android capabilities and settings
│   ├── config.ios.js           # iOS capabilities and settings
│   ├── driver.js               # WebDriver initialization
│   └── envloader.js            # Environment configuration loader
│
└── mochawesome-report/         # Generated HTML test reports (auto-created)
```

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd appium-boilerplate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create your `.env` file from the template:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```env
# Test Environment
TEST_ENV=qa
PLATFORM=android

# Login Credentials
USERNAME=your_valid_username
PASSWORD=your_valid_password

# Android Configuration
ANDROID_APP_PATH=/path/to/your/app.apk
APP_PACKAGE=com.yourapp.package
APP_ACTIVITY=com.yourapp.MainActivity

# iOS Configuration (if testing iOS)
IOS_APP_PATH=/path/to/your/app.app
APP_BUNDLE_ID=com.yourapp.bundleid
```

> 🔐 The `.env` file is ignored by Git for security

### 4. Start Appium Server

```bash
npm run start:appium
# or manually: npx appium
```

---

## 🚀 Running Tests

### Basic Test Execution

```bash
# Run all tests with default settings (Android, QA environment)
npm test

# Run tests for specific environment
npm run test:dev
npm run test:qa
npm run test:stg

# Run tests for specific platform
npm run test:android
npm run test:ios
```

### Advanced Test Execution

```bash
# Run with custom environment variables
TEST_ENV=dev PLATFORM=ios npm test

# Clean previous reports before running
npm run clean:reports && npm test
```

### Manual Execution

```bash
# Run tests manually with Mocha
npx mocha tests/*.js --reporter mochawesome

# Run specific test file
npx mocha tests/login.test.js --reporter mochawesome
```

---

## 🧪 Test Cases

- ✅ **Valid Login**  
  Uses credentials from `.env` and checks successful login.

- ✅ **Invalid Login**  
  Uses test data from `testData.json` and validates error message.

---

## 📦 Dependencies Explained

| Package         | Purpose                                      |
|----------------|----------------------------------------------|
| `dotenv`        | Loads `.env` variables                       |
| `appium`        | Automation engine                            |
| `wd`            | WebDriver client for Appium                 |
| `mocha`         | Test runner                                  |
| `chai`          | Assertion library                            |
| `mochawesome`   | Generates rich HTML test reports             |

Install them with:

```bash
npm install dotenv appium wd chai mocha mochawesome --save-dev
```

---

## 📊 Test Reporting (Mochawesome)

Test results are saved in `mochawesome-report/` as a beautiful HTML report.

### View the Report:

1. Run tests:

    ```bash
    npm test
    ```

2. Open the generated file:

    ```
    mochawesome-report/mochawesome.html
    ```

---

## ⚙️ Available NPM Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run all tests with Mochawesome reporter |
| `npm run test:dev` | Run tests in development environment |
| `npm run test:qa` | Run tests in QA environment |
| `npm run test:stg` | Run tests in staging environment |
| `npm run test:android` | Run tests specifically for Android |
| `npm run test:ios` | Run tests specifically for iOS |
| `npm run start:appium` | Start Appium server |
| `npm run clean:reports` | Clean previous test reports |

### Environment Variables

- `TEST_ENV`: Environment to run tests against (`dev`, `qa`, `stg`)
- `PLATFORM`: Target platform (`android`, `ios`)

These can be combined: `TEST_ENV=dev PLATFORM=ios npm test`

---

## 🏗️ Architecture Highlights

### Design Patterns & Best Practices

- 🎯 **Page Object Model** - Maintainable and reusable page interactions
- 🔄 **No Circular Dependencies** - Clean import structure
- 🔧 **Environment-Driven Configuration** - Flexible multi-environment support
- 📊 **Centralized Test Data** - External JSON data management
- 🔐 **Secure Credential Management** - `.env` file with example template

### Technical Features

- 🌐 **Cross-Platform Support** - Single codebase for Android & iOS
- ⏱️ **Smart Element Handling** - XPath and ID locator support
- 🎨 **Enhanced Logging** - Comprehensive console output with emojis
- 📈 **Rich HTML Reports** - Beautiful Mochawesome test reports
- 🔄 **App State Management** - Automatic app restart between tests
- ⚡ **Configurable Timeouts** - Optimized wait strategies

---

## 🤝 Contributing

Contributions are welcome! Raise issues or PRs to improve functionality and structure.