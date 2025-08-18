# 📱 Appium Boilerplate Project (JavaScript + Page Object Model)

This is a beginner-friendly **Appium automation framework** using **JavaScript**, structured with:

- ✅ Page Object Model (POM)
- ✅ Environment variables for login credentials (`.env`)
- ✅ External test data file (`testData.json`)
- ✅ Centralized fixture file for all imports
- ✅ Mocha for running test cases
- ✅ Chai for assertions
- ✅ Mochawesome reporter for test results
- ✅ Explicit waits for stable element interaction
- ✅ Cross-platform support (Android & iOS)
- ✅ Environment-based app configuration (dev, qa, stg)
- ✅ Appium Inspector Debugger Alternative via `debugger` and `console.log()`


---

## 📁 Folder Structure

```
appium-project/
│
├── .env.example                # Template file for environment variables (do not commit .env)
├── .gitignore                  # Ensures sensitive files like .env are not committed
├── package.json                # Project dependencies and scripts
├── testData.json               # Test data (invalid login, etc.)
│
├── fixtures/
│   └── fixtures.js             # Centralized imports and configs
│
├── pageObjects/
│   └── LoginPage.js            # Login screen logic and assertions
│
├── tests/
│   └── login.test.js           # Test cases (valid & invalid login)
│
├── utils/
│   ├── driver.js               # Driver initialization (Appium WebDriver)
│   ├── config.android.js       # Android-specific config
│   ├── config.ios.js           # iOS-specific config
│   ├── appium.config.js        # Setup the appium config
│   └──  envloader.js            # Load the env files according to entered environment
│   
└── mochawesome-report/         # Auto-generated test reports
```

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <Repo url>
cd appium-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file from the template:

```bash
cp .env.example .env
```

Edit `.env`:

```env
USERNAME="ValidUserName"
PASSWORD="ValidPassword"
ENV="dev"
```

> 🔐 `.env` is ignored by Git — see `.gitignore`.

### 4. Configure Platform & App Info

Edit the platform-specific and environment config files:

```js
// Example: utils/config.android.js
module.exports = {
  platformName: 'Android',
  platformVersion: '13',
  deviceName: 'emulator-5554',
  app: require('./config.dev').appPath,
  automationName: 'UiAutomator2'
};
```

---

## 🚀 Running the Tests

### 1. Start Appium Server

```bash
npx appium
```

### 2. Run Tests with Reporter

```bash
npm test
```

or manually:

```bash
npx mocha tests --reporter mochawesome
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

## ⚙️ Scripts in `package.json`

```json
  "scripts": {
  "test:dev": "TEST_ENV=dev mocha tests/*.js",
  "test:qa": "TEST_ENV=qa mocha tests/*.js",
  "test:stg": "TEST_ENV=stg mocha tests/*.js"
}
```

Use the correct `PLATFORM` and `ENV` to load desired capability and config files.

---

## 🧱 Architecture Highlights

- ✅ POM for cleaner test logic
- ✅ `.env` for secure credentials
- ✅ Cross-platform support (Android/iOS)
- ✅ Explicit waits for stable interaction
- ✅ Externalized test data and configs
- ✅ Rich HTML reporting with Mochawesome
- ✅ Environment-based app configuration
- ✅ Appium debugging via `debugger` and logs
- ✅ Character-by-character typing for input fields

---


## 📌 To-Do / Upcoming

- [ ] Add GitHub Actions or Jenkins CI
- [ ] Add reusable utilities (e.g., common gestures)
- [ ] Expand test coverage to new screens
- [ ] Optional: Add parameterized locators in Page Objects

---

## 🤝 Contributing

Contributions are welcome! Raise issues or PRs to improve functionality and structure.