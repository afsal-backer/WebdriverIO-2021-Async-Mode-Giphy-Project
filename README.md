A WebdriverIO (async mode - 2021) front-end test automation framework using Javascript and Mocha, designed to be as simple as possible following Page Object Model design pattern.


Prerequisites
-------------

Node - install the latest stable version of node


Instructions
-------------
1. Clone the project
2. Open Terminal, CD into the the project root directory
3. To install dependencies, execute: "npm install"
4. To run the test, execute: "npm run test"
5. To generate a report of the test, execute: "npx allure generate allure-results --clean && npx allure open"


Platform Stack
---------------

Website under test: https://giphy.com/

Test framework: https://webdriver.io

Assertion library: https://mochajs.org/

Javascript compiler: https://babeljs.io/

Reporter: https://docs.qameta.io/allure/

Code analyser: https://eslint.org/ 

Browser: Chrome


Test Cases
----------

- Make sure a trending section exists
- Make sure search works
  -- A search field exists
  -- Can type text into search field
  -- Results are displayed after a search
- Click on a gif in trending section
  -- It goes to a page that shows the clicked on gif



