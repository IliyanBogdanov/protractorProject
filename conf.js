var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  multiCapabilities: [{
    browserName: 'chrome' //chrome, firefox, internet explorer
  }],
  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
        loginTests: ['./testcases/REMILogin/test.login.spec.js'],
        incorrectLoginTests: ['./testcases/REMILogin/IncorrectLogin/test.incorrectLogin.spec.js'],
        processMonitoringTests: ['./testcases/ProcessMonitoring/test.processMonitoring.spec.js'],
        cleTests: ['./testcases/PM-CLE/test.pmCLE.spec.js'],
        detailsTests: ['./testcases/PM-Details/test.pmDetails.spec.js'],
        maRolesTests: ['./testcases/MasterData-MA-Roles/test.MARoles.spec.js'],
        monitoringAttributesTests: ['./testcases/MasterData-MonitoringAttributes/test.monitoringAttributes.spec.js'],
        productFamiliesTests:['./testcases/MasterData-ProductFamilies/test.productFamilies.spec.js'],
        violationCategoriesTests: ['./testcases/MasterData-ViolationCategories/test.violationCategories.spec.js'],
        masterDataTests:['./testcases/MasterData-MonitoringAttributes/test.monitoringAttributes.spec.js',
                        './testcases/MasterData-ProductFamilies/test.productFamilies.spec.js',
                        './testcases/MasterData-ViolationCategories/test.violationCategories.spec.js'],
        bdeTests: ['./testcases/BatchDataEntry/test.bde.spec.js'],
        liquidTests: ['./testcases/IDE-Liquid/test.ideLiquid.spec.js'],
        lyophilizationTests: ['./testcases/IDE-Lyophilization/test.ideLyophilization.spec.js'],
        ideTests:['./testcases/IDE-Liquid/test.ideLiquid.spec.js',
                './testcases/IDE-Lyophilization/test.ideLyophilization.spec.js'],
        allTests: ['./testcases/REMILogin/test.login.spec.js', 
                    './testcases/REMILogin/IncorrectLogin/test.incorrectLogin.spec.js', 
                    './testcases/ProcessMonitoring/test.processMonitoring.spec.js', 
                    './testcases/PM-CLE/test.pmCLE.spec.js',
                    './testcases/PM-Details/test.pmDetails.spec.js',
                    './testcases/MasterData-MA-Roles/test.MARoles.spec.js', 
                    './testcases/MasterData-ProductFamilies/test.productFamilies.spec.js',
                    './testcases/MasterData-ViolationCategories/test.violationCategories.spec.js',
                    './testcases/IDE-Liquid/test.ideLiquid.spec.js',
                    './testcases/IDE-Lyophilization/test.ideLyophilization.spec.js'],
        basicCRUDTests: ['./testcases/PM-CLE/test.pmCLE.spec.js',
                        './testcases/PM-Details/test.pmDetails.spec.js',
                        './testcases/MasterData-MA-Roles/test.MARoles.spec.js',
                        './testcases/MasterData-ProductFamilies/test.productFamilies.spec.js',]            
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
