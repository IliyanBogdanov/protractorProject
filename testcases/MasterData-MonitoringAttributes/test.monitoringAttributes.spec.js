var loginPage = require('../REMILogin/login.page.js');
var monitoringAttrubutesPage = require('./monitoringAttributes.page.js')

describe(' When user clicks on the "Add New Monitoring Attribute" button, he ... ', function () {
  
  beforeEach(function () {
    loginPage.navigateToRemisDev();
    loginPage.loginREMI();
  });

  it('User should be able to complete the sequence and create a new monitoring attributes record', function () {
    monitoringAttrubutesPage.navigateToMonitoringAttributesSection();
    monitoringAttrubutesPage.clickOnAddMonitoringAttributeButton();
    monitoringAttrubutesPage.enterCompanyValue();
    monitoringAttrubutesPage.enterSiteValue();
    monitoringAttrubutesPage.enterVenueValue();
    monitoringAttrubutesPage.clickNextButton();
    monitoringAttrubutesPage.enterAttributeType();
    monitoringAttrubutesPage.enterUoM();
    monitoringAttrubutesPage.enterNameForMonitoringAttribute();
    monitoringAttrubutesPage.enterDescription();
    monitoringAttrubutesPage.enterMoM();
    monitoringAttrubutesPage.enterEffectiveDate();
    monitoringAttrubutesPage.enterDecimalPoints();
    monitoringAttrubutesPage.clickNextButtonByXpath1();
    monitoringAttrubutesPage.clickNextButtonByXpath2();
    monitoringAttrubutesPage.clickCreateButtonByXpath();
    monitoringAttrubutesPage.clickOnFinishButton();
    monitoringAttrubutesPage.clickOnClearButton();
    monitoringAttrubutesPage.verifyThatRecordIsCreated();
    });

});