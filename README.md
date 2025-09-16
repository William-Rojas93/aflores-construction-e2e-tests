# aflores-construction-e2e-tests
End-to-end tests for Aflores Construction website using WebdriverIO
# aflores-construction-e2e-tests

End-to-end test automation project using [WebdriverIO](https://webdriver.io/).

## Setup
1. Clone the repository
   ```bash
   git clone https://github.com/William-Rojas93/aflores-construction-e2e-tests.git
   cd aflores-construction-e2e-tests

2. Install dependancies 
    npm install

3. Run WebdriverIO configuration setup
    npx wdio config

4. Run tests
    npx wdio run wdio.conf.js

5. Notes

Make sure you have Google Chrome installed.

Tests are configured to run locally using the DevTools service (no Chromedriver setup required).

Add additional tests under tests/specs/ to expand coverage.