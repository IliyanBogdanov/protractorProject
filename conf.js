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
    loginTests: ['./Тestcases/0.REMILogin/test.login.spec.js'],
    incorrectLoginTests: ['./Тestcases/0.REMILogin/IncorrectLogin/test.incorrectLogin.spec.js'],
    processMonitoringTests: ['./Тestcases/1.ProcessMonitoring/test.processMonitoring.spec.js'],
    monitoringAttributesTests: ['./Тestcases/2.MasterData-MonitoringAttributes/test.monitoringAttributes.spec.js'],
    violationCategoriesTests: ['./Тestcases/2.MasterData-ViolationCategories/test.violationCategories.spec.js'],
    bdeTests: ['./Тestcases/3.BatchDataEntry/test.bde.spec.js'],
    liquidTests: ['./Тestcases/4.IDE-Liquid/test.ideLiquid.spec.js'],
  },

  onPrepare: function() {
      browser.manage().window().maximize();
   }

   

}
