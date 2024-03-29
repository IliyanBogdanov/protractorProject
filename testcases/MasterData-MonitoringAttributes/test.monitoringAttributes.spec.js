var loginPage = require('../REMILogin/login.page.js');
var monitoringAttrubutesPage = require('./monitoringAttributes.page.js');
var helperFile = require('./../Helpers/Helper.js');
var random = helperFile.createARandomValue();
var attributeName = '';

describe(' When user opens the Monitoring Attributes module, he ... ', function () {
  
  beforeEach(function () {
    loginPage.navigateToRemisDev();
    loginPage.loginREMI();
    helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/attributes/monitoring');
  });

  it('Should be able to create a new record.', function () {
    monitoringAttrubutesPage.clickOnAddMonitoringAttributeButton();
    helperFile.enterSiteValue('1');
    helperFile.enterVenueValue('1');
    helperFile.enterProductFamilyValue('305');
    helperFile.clickNextButtonWzNext('vm.showValidateAlert(\'product-details\')');
    monitoringAttrubutesPage.enterAttributeType();
    monitoringAttrubutesPage.enterUoM();
    attributeName = monitoringAttrubutesPage.enterNameForMonitoringAttribute();
    monitoringAttrubutesPage.enterDescription();
    monitoringAttrubutesPage.enterMoM();
    monitoringAttrubutesPage.enterEffectiveDate();
    monitoringAttrubutesPage.enterDecimalPoints();
    helperFile.clickNextButtonNgClick('vm.showValidateAlert(\'attribute-details\')');
    helperFile.clickButtonByText('Create New Control Limit');
    monitoringAttrubutesPage.populateControlLimitValues();
    monitoringAttrubutesPage.clickCreateButton();
    monitoringAttrubutesPage.clickNextButton3rdStep();
    helperFile.clickButtonByText('Create');
    helperFile.clickButtonByText('Finish');
    monitoringAttrubutesPage.filterTable();
    helperFile.verifyThatRecordIsCreated('#attributes-grid');
  });

  it('Should be able to update a record.', function () {
    var newAttributeName = 'UPDATE-' + random;
    //Filter table to get the last added record from the test
    monitoringAttrubutesPage.filterTable(attributeName);
    //Enter edit mode
    helperFile.clickEditButton('.icon-small-edit.roche_grey_7');
    //Navigate to second step of the wizard
    helperFile.clickNextButtonWzNext('vm.showValidateAlert(\'product-details\')');
    attributeName = monitoringAttrubutesPage.enterNameForMonitoringAttribute(newAttributeName);
    //Process to the last tab
    helperFile.clickNextButtonNgClick('vm.showValidateAlert(\'attribute-details\')');
    monitoringAttrubutesPage.clickNextButton3rdStep();
    //Confirm the update of the entry
    helperFile.clickButtonByText('Update');
    helperFile.clickButtonByText('Finish');
    //Verification that the record is updated
    monitoringAttrubutesPage.filterTable(newAttributeName);
    helperFile.verifyThatRecordIsCreated('#attributes-grid');
  });

  it('Should be able to delete a record.', function () {
    //Filter table to get the last added/updated record from the test
    monitoringAttrubutesPage.filterTable(attributeName);
    //Click the delete icon
    helperFile.clickDeleteButton('.icon-small-clear.roche_grey_7');
    //Confirm that the record will be deleted
    helperFile.clickButtonByText('Delete');
    helperFile.clickButtonByText('Finish');
    //Filter the table 
    monitoringAttrubutesPage.filterTable(attributeName);
    //Verification that the record is deleted
    helperFile.verifyThatRecordIsDeleted('#attributes-grid');
  });

});