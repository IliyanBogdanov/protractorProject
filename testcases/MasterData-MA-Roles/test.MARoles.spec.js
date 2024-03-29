var loginPage = require('../REMILogin/login.page.js');
var monitoringAttrubutesPage = require('../MasterData-MonitoringAttributes/monitoringAttributes.page.js');
var bdePage = require('../BatchDataEntry/bde.page.js');
var MARoles = require('./MARoles.page.js');
var helperFile = require('./../Helpers/Helper.js');
var random = helperFile.createARandomValue();
var attributeName = '';
var runNumber = '';
describe('When user opens the Remis App with different roles , he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
    });

    it ('Should be able to Login as Regular user.', function (){
        helperFile.loginREMIRole('OCNREGULARUSER');
        helperFile.verifyLoginSingleRole('OCN_REGULAR_USER');
        helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/attributes/monitoring');
        helperFile.verifyAddButton('attributes-grid', 'Add New Monitoring Attribute', 0);
    });

    it ('Should be able to Login as Read Only user.', function (){
        helperFile.loginREMIRole('OCNREADONLYUSER');
        helperFile.verifyLoginSingleRole('OCN_READONLY_USER');
        helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/attributes/monitoring');
        helperFile.verifyAddButton('attributes-grid', 'Add New Monitoring Attribute', 0);
    });

    it ('Should be able to Login as Masterdata Entry user.', function (){
        helperFile.loginREMIRole('OCNMASTERENTRY');
        helperFile.verifyLoginSingleRole('OCN_MASTERDATA_ENTRY');
        helperFile.verifyAddButton('attributes-grid', 'Add New Monitoring Attribute', 1);
    });


    it('Should be able to create a new MA record.', function () {
        helperFile.loginREMIRole('OCNMASTERENTRY');
        monitoringAttrubutesPage.clickOnAddMonitoringAttributeButton();
        //Step 1 - product details
        //helperFile.enterSiteValue('1');
        //helperFile.enterVenueValue('0');
        helperFile.enterProductFamilyValue('1');
        helperFile.clickNextButtonWzNext('vm.showValidateAlert(\'product-details\')');
        //Step 2 - attribute details
        monitoringAttrubutesPage.enterAttributeType();
        monitoringAttrubutesPage.enterUoM();
        attributeName = monitoringAttrubutesPage.enterNameForMonitoringAttribute();
        monitoringAttrubutesPage.enterDescription();
        monitoringAttrubutesPage.enterMoM();
        monitoringAttrubutesPage.enterEffectiveDate();
        monitoringAttrubutesPage.enterDecimalPoints();
        helperFile.clickNextButtonNgClick('vm.showValidateAlert(\'attribute-details\')');
        //Step 3 - control limits
        helperFile.clickButtonByText('Create New Control Limit');
        monitoringAttrubutesPage.populateControlLimitValues();
        monitoringAttrubutesPage.clickCreateButton();
        monitoringAttrubutesPage.clickNextButton3rdStep();
        //Step 4 - summary
        helperFile.clickButtonByText('Create');
        helperFile.clickButtonByText('Finish');
        //Verification that the record is created
        monitoringAttrubutesPage.filterTable(attributeName);
        helperFile.verifyThatRecordIsCreated('#attributes-grid');
    });

    it('Should be able to update a MA record.', function () {
        var newAttributeName = 'UPDATE-' + random;
        helperFile.loginREMIRole('OCNMASTERENTRY');
        //Filter table to get the last added record from the test
        monitoringAttrubutesPage.filterTable(attributeName);
        //Enter edit mode
        helperFile.clickEditButton('.icon-small-edit.roche_grey_7');
        //Navigate to second step of the wizard
        //browser.waitForAngular(false);
        helperFile.clickNextButtonWzNext('vm.showValidateAlert(\'product-details\')');
        //browser.waitForAngular(true);
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

    it('Should be able to delete a MA record.', function () {
        helperFile.loginREMIRole('OCNMASTERENTRY');
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

    it ('Should be able to Login as Masterdata Approve user.', function (){
        helperFile.loginREMIRole('OCNMASTERAPPROVE');
        helperFile.verifyLoginSingleRole('OCN_MASTERDATA_APPROVE');
        helperFile.verifyAddButton('attributes-grid', 'Add New Monitoring Attribute', 0);
    });

    it ('Should be able to Login as GMP Entry user.', function (){
        helperFile.loginREMIRole('OCNGMPENTRY');
        helperFile.verifyLoginSingleRole('OCN_GMPDATA_ENTRY');
        helperFile.verifyAddButton('dataEntry-grid', 'Add New Batch Data Entry', 1);
    });

    it('Should be able to create a new BDE record.', function(){
        helperFile.loginREMIRole('OCNGMPENTRY');
        //Step 1 - details
        bdePage.addNewBDEbuttonClick();
        //bdePage.siteDropDownSelectRSTO();
        //bdePage.selectVenueB10();
        bdePage.productFamilyDropDownSelect();
        bdePage.materialNumberDropDownSelect();
        runNumber = bdePage.runNumberEnterTextInput();
        bdePage.campaignNameTextInput();
        bdePage.lotNumberEnterTextInput();
        bdePage.runStartDateEntry();
        bdePage.runEndDateEntry();
        bdePage.thawIDTextInput();
        bdePage.thawIDDateEntry();
        bdePage.harvestDateEntry();
        helperFile.clickNextButtonWzNext("vm.showValidateAlert('run-details')");
        //Step 2 - parameter values
        bdePage.populateParameterValues();
        helperFile.clickNextButtonWzNext('');
        helperFile.clickButtonByText('Create');
        helperFile.clickButtonByText('OK');
        //Verification
        bdePage.filterTableBDE();
        helperFile.verifyThatRecordIsCreated('#dataEntry-grid');
    });

    it('Should be able to update a BDE record.', function(){
        helperFile.loginREMIRole('OCNGMPENTRY');
        var newRunNumber = 'UPDATE-' + random;
        bdePage.filterTableBDE(runNumber);
        helperFile.clickEditButton('.icon-small-edit.roche_grey_7');
        bdePage.clearRunNumberInput();
        runNumber = bdePage.runNumberEnterTextInput(newRunNumber);
        helperFile.clickNextButtonWzNext("vm.showValidateAlert('run-details')");
        helperFile.clickNextButtonWzNext('');
        helperFile.clickButtonByText('Update');
        helperFile.clickButtonByText('OK');
        //Verification
        bdePage.filterTableBDE(newRunNumber);
        helperFile.verifyThatRecordIsCreated('#dataEntry-grid');
    });

    it('Should be able to delete a BDE record.', function() {
        helperFile.loginREMIRole('OCNGMPENTRY');
        bdePage.filterTableBDE(runNumber);
        helperFile.clickDeleteButton('.icon-small-clear.roche_grey_7');
        helperFile.clickButtonByText('Delete');
        helperFile.clickButtonByText('Finish');
        //Verification
        bdePage.filterTableBDE(runNumber);
        helperFile.verifyThatRecordIsDeleted('#dataEntry-grid');
    });



    it ('Should be able to Login as GMP Approve user.', function (){
        helperFile.loginREMIRole('OCNGMPAPPROVE');
        helperFile.verifyLoginSingleRole('OCN_GMPDATA_APPROVE');
        helperFile.verifyAddButton('dataEntry-grid', 'Add New Batch Data Entry', 0);
    });
});
