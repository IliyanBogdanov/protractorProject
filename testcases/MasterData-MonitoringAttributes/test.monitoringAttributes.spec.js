var loginPage = require('../REMILogin/login.page.js');
var monitoringAttrubutesPage = require('./monitoringAttributes.page.js');
var attributeName = '';

describe(' When user opens the Master Data module, he ... ', function () {
  
  beforeEach(function () {
    loginPage.navigateToRemisDev();
    loginPage.loginREMI();
  });

  it('Should be able to create a new record.', function () {
    monitoringAttrubutesPage.navigateToMonitoringAttributesSection();
    monitoringAttrubutesPage.clickOnClearButton();
    monitoringAttrubutesPage.clickOnAddMonitoringAttributeButton();
    //Step 1 - product details
    monitoringAttrubutesPage.enterSiteValue();
    monitoringAttrubutesPage.enterVenueValue();
    monitoringAttrubutesPage.enterPFValue();
    monitoringAttrubutesPage.clickNextButton('vm.showValidateAlert(\'product-details\')');
    //Step 2 - attribute details
    monitoringAttrubutesPage.enterAttributeType();
    monitoringAttrubutesPage.enterUoM();
    attributeName = monitoringAttrubutesPage.enterNameForMonitoringAttribute();
    monitoringAttrubutesPage.enterDescription();
    monitoringAttrubutesPage.enterMoM();
    monitoringAttrubutesPage.enterEffectiveDate();
    monitoringAttrubutesPage.enterDecimalPoints();
    monitoringAttrubutesPage.clickNextButton2ndStep('vm.showValidateAlert(\'attribute-details\')');
    //Step 3 - control limits
    monitoringAttrubutesPage.clickButtonByText('Create New Control Limit');
    monitoringAttrubutesPage.populateContrlLimitValues();
    monitoringAttrubutesPage.clickCreateButton();
    monitoringAttrubutesPage.clickNextButton3rdStep();
    //Step 4 - summary
    monitoringAttrubutesPage.clickButtonByText('Create');
    monitoringAttrubutesPage.clickButtonByText('Finish');
    //Verification that the record is created
    monitoringAttrubutesPage.filterTable();
    monitoringAttrubutesPage.verifyThatRecordIsCreated();
  });

  it('Should be able to update a record.', function () {
    var newAttributeName = 'UPDATE';
    monitoringAttrubutesPage.navigateToMonitoringAttributesSection();
    //Filter table to get the last added record from the test
    monitoringAttrubutesPage.filterTable(attributeName);
    //Enter edit mode
    monitoringAttrubutesPage.clickEditButton('icon-small-edit');
    //Navigate to second step of the wizard
    monitoringAttrubutesPage.clickNextButton('vm.showValidateAlert(\'product-details\')');
    attributeName = monitoringAttrubutesPage.enterNameForMonitoringAttribute(newAttributeName);
    //Process to the last tab
    monitoringAttrubutesPage.clickNextButton2ndStep('vm.showValidateAlert(\'attribute-details\')');
    monitoringAttrubutesPage.clickNextButton3rdStep();
    //Confirm the update of the entry
    monitoringAttrubutesPage.clickButtonByText('Update');
    monitoringAttrubutesPage.clickButtonByText('Finish');
    //Verification that the record is updated
    monitoringAttrubutesPage.filterTable(newAttributeName);
    monitoringAttrubutesPage.verifyThatRecordIsCreated();
  });

  it('Should be able to delete a record.', function () {
    monitoringAttrubutesPage.navigateToMonitoringAttributesSection();
    //Filter table to get the last added/updated record from the test
    monitoringAttrubutesPage.filterTable(attributeName);
    //Click the delete icon
    monitoringAttrubutesPage.clickDeleteButton('icon-small-clear');
    //Confirm that the record will be deleted
    monitoringAttrubutesPage.clickButtonByText('Delete');
    monitoringAttrubutesPage.clickButtonByText('Finish');
    //Filter the table 
    monitoringAttrubutesPage.filterTable(attributeName);
    //Verification that the record is deleted
    monitoringAttrubutesPage.verifyThatRecordIsDeleted();
  });
});