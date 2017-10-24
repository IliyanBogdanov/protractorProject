var loginPage = require('../REMILogin/login.page.js');
var monitoringAttrubutesPage = require('../MasterData-MonitoringAttributes/monitoringAttributes.page.js');
var MARoles = require('./MARoles.page.js');
var helperFile = require('./../Helpers/Helper.js');
var attributeName = '';
describe('When user opens the Remis App with different roles , he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
    });

    it ('Should be able to Login as Regular user.', function (){
        helperFile.loginREMIRole('OCNREGULARUSER');
        helperFile.verifyLoginSingleRole('OCN_REGULAR_USER');
        monitoringAttrubutesPage.navigateToMonitoringAttributesSection();
        helperFile.verifyAddButton('attributes-grid', 'Add New Monitoring Attribute', 0);
    });

    it ('Should be able to Login as Read Only user.', function (){
        helperFile.loginREMIRole('OCNREADONLYUSER');
        helperFile.verifyLoginSingleRole('OCN_READONLY_USER');
        monitoringAttrubutesPage.navigateToMonitoringAttributesSection();
        helperFile.verifyAddButton('attributes-grid', 'Add New Monitoring Attribute', 0);
    });

    it ('Should be able to Login as Masterdata Entry user.', function (){
        helperFile.loginREMIRole('OCNMASTERENTRY');
        helperFile.verifyLoginSingleRole('OCN_MASTERDATA_ENTRY');
        helperFile.verifyAddButton('attributes-grid', 'Add New Monitoring Attribute', 1);
    });


    it('Should be able to create a new record.', function () {
        helperFile.loginREMIRole('OCNMASTERENTRY');
        monitoringAttrubutesPage.clickOnAddMonitoringAttributeButton();
        //Step 1 - product details
        //monitoringAttrubutesPage.enterSiteValue(1);
        //monitoringAttrubutesPage.enterVenueValue(0);
        monitoringAttrubutesPage.enterPFValue('select', 1);
        helperFile.clickNextButton('vm.showValidateAlert(\'product-details\')');
        //Step 2 - attribute details
        monitoringAttrubutesPage.enterAttributeType();
        monitoringAttrubutesPage.enterUoM();
        attributeName = monitoringAttrubutesPage.enterNameForMonitoringAttribute();
        monitoringAttrubutesPage.enterDescription();
        monitoringAttrubutesPage.enterMoM();
        monitoringAttrubutesPage.enterEffectiveDate();
        monitoringAttrubutesPage.enterDecimalPoints();
        helperFile.clickNextButton2ndStep('vm.showValidateAlert(\'attribute-details\')');
        //Step 3 - control limits
        helperFile.clickButtonByText('Create New Control Limit');
        monitoringAttrubutesPage.populateContrlLimitValues();
        monitoringAttrubutesPage.clickCreateButton();
        monitoringAttrubutesPage.clickNextButton3rdStep();
        //Step 4 - summary
        helperFile.clickButtonByText('Create');
        helperFile.clickButtonByText('Finish');
        //Verification that the record is created
        monitoringAttrubutesPage.filterTable(attributeName);
        helperFile.verifyThatRecordIsCreated('#attributes-grid');
    });

    it('Should be able to update a record.', function () {
        var newAttributeName = 'UPDATE-' + attributeName;
        helperFile.loginREMIRole('OCNMASTERENTRY');
        //Filter table to get the last added record from the test
        monitoringAttrubutesPage.filterTable(attributeName);
        //Enter edit mode
        helperFile.clickEditButton('.icon-small-edit');
        //Navigate to second step of the wizard
        helperFile.clickNextButton('vm.showValidateAlert(\'product-details\')');
        attributeName = monitoringAttrubutesPage.enterNameForMonitoringAttribute(newAttributeName);
        //Process to the last tab
        helperFile.clickNextButton2ndStep('vm.showValidateAlert(\'attribute-details\')');
        monitoringAttrubutesPage.clickNextButton3rdStep();
        //Confirm the update of the entry
        helperFile.clickButtonByText('Update');
        helperFile.clickButtonByText('Finish');
        //Verification that the record is updated
        monitoringAttrubutesPage.filterTable(newAttributeName);
        helperFile.verifyThatRecordIsCreated('#attributes-grid');
    });

    it('Should be able to delete a record.', function () {
        helperFile.loginREMIRole('OCNMASTERENTRY');
        //Filter table to get the last added/updated record from the test
        monitoringAttrubutesPage.filterTable(attributeName);
        //Click the delete icon
        helperFile.clickDeleteButton('.icon-small-clear');
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

    it ('Should be able to Login as GMP Approve user.', function (){
        helperFile.loginREMIRole('OCNGMPAPPROVE');
        helperFile.verifyLoginSingleRole('OCN_GMPDATA_APPROVE');
        helperFile.verifyAddButton('dataEntry-grid', 'Add New Batch Data Entry', 0);
    });
});
