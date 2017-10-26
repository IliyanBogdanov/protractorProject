# QA - automation

This is Roche Remis Automated QA tests project

##Pre-requirements

 - Protractor - http://www.protractortest.org/#/
 - webdriver-manager - follow the instruction from the protractor installation guide or https://github.com/angular/webdriver-manager

## Start server

Run `webdriver-manager start` in a CMD/Console.


## Run tests

Run `protractor conf.js --suite [name of the suite]`

## Cross browser

In the configuration file `conf.js` change the property of `browserName`.
---
if you want to test on IE follow the steps from this post https://stackoverflow.com/questions/37456099/protractor-test-in-ie
!This is one time configuration!
---