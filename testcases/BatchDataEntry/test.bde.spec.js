var loginPage = require('../REMILogin/login.page.js');
var bdePage = require('./bde.page.js');
var runNumber = '';

describe('When user opens the BDE module, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });
    
    it('Should be able to create a new record.', function(){
        //step1
        bdePage.openBDEpage();
        bdePage.addNewBDEbuttonClick();
        bdePage.siteDropDownSelectRSTO();
        bdePage.selectVenueB10();
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
        bdePage.clickNextButton("vm.showValidateAlert('run-details')");
        //step2
        bdePage.populateParameterValues();
        bdePage.clickNextButton('');
        bdePage.createButtonClick();
        bdePage.clickButtonByText('OK');
        //Verify that the record has been created
        bdePage.filterTableBDE();
        bdePage.verifyThatRecordIsCreated();
    });

    it('Should be able to update a record.', function(){
        var newRunNumber = 'UPDATE';
        bdePage.openBDEpage();
        //Filter table to get the last added record from the test
        bdePage.filterTableBDE(runNumber);
        //Click the edit button
        bdePage.clickEditButton('icon-small-edit');
        browser.sleep(2000);
        //Enter new run number value
        bdePage.clearRunNumberInput();
        runNumber = bdePage.runNumberEnterTextInput(newRunNumber);
        bdePage.clickNextButton("vm.showValidateAlert('run-details')");
        bdePage.clickNextButton('');
        bdePage.clickButtonByText('Update');
        bdePage.clickButtonByText('OK');
        //Verify that the record has been updated
        bdePage.filterTableBDE(newRunNumber);
        bdePage.verifyThatRecordIsCreated();
    });

    it('Should be able to delete a record.', function() {
        bdePage.openBDEpage();
        //Filter table to get the last added/updated record from the test
        bdePage.filterTableBDE(runNumber);
        bdePage.clickEditButton('icon-small-clear');
        bdePage.clickButtonByText('Delete');
        bdePage.clickButtonByText('Finish');
        bdePage.filterTableBDE(runNumber);
        browser.sleep(1000);
        bdePage.verifyThatRecordIsDeleted();
    });


});