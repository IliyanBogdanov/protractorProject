var loginPage = require('../REMILogin/login.page.js');
var processMonitoringOverviewPage = require('./processMonitoringOverview.page.js')


describe('When user opens Process Monitoring Overview, he ...', function () {
  
  beforeEach(function () {
    loginPage.navigateToRemisDev();
    loginPage.loginREMI();
    processMonitoringOverviewPage.setSiteValue();
    processMonitoringOverviewPage.setProductFamilyValue();
  });

  it('Should be able to set a filter criterion successfully', function () {
    processMonitoringOverviewPage.clickOnApplyButton();
    processMonitoringOverviewPage.verifyThatFilterHasBeenAppliedCorrectly();
    
  });

  it('Should be able to set a custom date search option (Previous 180 days) of the filter successfully', function () {
    processMonitoringOverviewPage.setDataPointsValues();
    processMonitoringOverviewPage.clickOnApplyButton();
    processMonitoringOverviewPage.verifyThatDateFilterIsAppliedCorrectly();
  });

  it('Should be able to clear the filter settings successfully', function () {
    processMonitoringOverviewPage.clickOnApplyButton();
    processMonitoringOverviewPage.clickOnClearButton();
    processMonitoringOverviewPage.verifyThatClearButtonHasClearedFilterInput();
  });

});

