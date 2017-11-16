var loginPage = require('../REMILogin/login.page.js');
var helperFile = require('./../Helpers/Helper.js');
var processMonitoringOverviewPage = require('./processMonitoringOverview.page.js')



describe('When user opens Process Monitoring Overview, he ...', function () {
  
  beforeEach(function () {
    // loginPage.navigateToRemisDev();
    // loginPage.loginREMI();
    // helperFile.setSiteValue('1');
    // helperFile.setVenueValue('0')
    // helperFile.setProductFamilyValue('0');

  });

  it('Should be able to set a filter criterion successfully', function () {
    helperFile.clickOnApplyButton();
    processMonitoringOverviewPage.verifyThatFilterHasBeenAppliedCorrectly();
    
  });

  it('Should be able to set a custom date search option (Previous 180 days) of the filter successfully', function () {
    processMonitoringOverviewPage.setDataPointsValues();
    helperFile.clickOnApplyButton();
    processMonitoringOverviewPage.verifyThatDateFilterIsAppliedCorrectly();
  });

  it('Should be able to clear the filter settings successfully', function () {
    helperFile.clickOnApplyButton();
    helperFile.clickOnClearButton();
    processMonitoringOverviewPage.verifyThatClearButtonHasClearedFilterInput();
  });

  fit('Should be able to see the persisted filter after logout, login', function () {
    loginPage.navigateToRemisDev();
    loginPage.loginREMI();
    helperFile.setSiteValue('1');
    helperFile.setVenueValue('0')
    helperFile.setProductFamilyValue('0');
    helperFile.clickOnApplyButton();
    loginPage.logoutREMI();
    loginPage.loginREMI();
    processMonitoringOverviewPage.verifyThatPFSettingIsPersisted();
  });

});

