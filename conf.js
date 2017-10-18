var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }],
  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
    loginTests: ['./testcases/REMILogin/test.login.spec.js'],
    incorrectLoginTests: ['./testcases/REMILogin/IncorrectLogin/test.incorrectLogin.spec.js'],
    processMonitoringTests: ['./testcases/ProcessMonitoring/test.processMonitoring.spec.js'],
    monitoringAttributesTests: ['./testcases/MasterData-MonitoringAttributes/test.monitoringAttributes.spec.js'],
    productFamiliesTests:['./testcases/MasterData-ProductFamilies/test.productFamilies.spec.js'],
    violationCategoriesTests: ['./testcases/MasterData-ViolationCategories/test.violationCategories.spec.js'],
    bdeTests: ['./testcases/BatchDataEntry/test.bde.spec.js'],
    liquidTests: ['./testcases/IDE-Liquid/test.ideLiquid.spec.js'],
    lyophilizationTests: ['./testcases/IDE-Lyophilization/test.ideLyophilization.spec.js'],
    ideTests:['./testcases/IDE-Liquid/test.ideLiquid.spec.js','./testcases/IDE-Lyophilization/test.ideLyophilization.spec.js'],
    masterDataTests:['./testcases/MasterData-MonitoringAttributes/test.monitoringAttributes.spec.js',
    './testcases/MasterData-ProductFamilies/test.productFamilies.spec.js','./testcases/MasterData-ViolationCategories/test.violationCategories.spec.js'],
  },

  onPrepare: function() {
      browser.manage().window().maximize();
      jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
          })
      );
   },



}
