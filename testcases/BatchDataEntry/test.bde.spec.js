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
        //verify 
        bdePage.filterTableBDE();
        bdePage.verifyThatRecordIsCreated();
        loginPage.logoutREMI();
    });

    it('Should be able to update a new record.', function(){
        var newRunNumber = 'UPDATE';
        bdePage.openBDEpage();
        //Filter table to get the last added record from the test
        bdePage.filterTableBDE(runNumber);
        //Click the edit button
        bdePage.clickEditButton('icon-small-edit');
        browser.sleep(3000);
        //Enter new run number value
        bdePage.clearRunNumberInput();
        runNumber = bdePage.runNumberEnterTextInput(newRunNumber);
        //Click next button
        bdePage.clickNextButton("vm.showValidateAlert('run-details')");
        //Click next button
        bdePage.clickNextButton('');
        //Click update button
        bdePage.clickButtonByText('Update');
        //Click finish button
        bdePage.clickButtonByText('OK');
        //Verify that the record has been updated
        bdePage.filterTableBDE(newRunNumber);
        bdePage.verifyThatRecordIsCreated();
    });


});