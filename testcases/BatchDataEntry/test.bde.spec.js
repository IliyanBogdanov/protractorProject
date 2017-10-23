var loginPage = require('../REMILogin/login.page.js');
var bdePage = require('./bde.page.js');
var helperFile = require('./../Helpers/Helper.js');
var runNumber = '';

describe('When user opens the BDE module, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });
    
    it('Should be able to create a new record.', function(){
        //Step 1 - details
        bdePage.navigateToBDESection();
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
        helperFile.clickNextButton("vm.showValidateAlert('run-details')");
        //Step 2 - parameter values
        bdePage.populateParameterValues();
        helperFile.clickNextButton('');
        bdePage.clickCreateButton();
        bdePage.clickOKbutton();
        //Verification
        bdePage.filterTableBDE();
        bdePage.verifyThatRecordIsCreated();
    });

    it('Should be able to update a record.', function(){
        var newRunNumber = 'UPDATE';
        bdePage.navigateToBDESection();
        bdePage.filterTableBDE(runNumber);
        helperFile.clickEditButton('.icon-small-edit');
        bdePage.clearRunNumberInput();
        runNumber = bdePage.runNumberEnterTextInput(newRunNumber);
        helperFile.clickNextButton("vm.showValidateAlert('run-details')");
        helperFile.clickNextButton('');
        bdePage.clickUpdateButton();
        bdePage.clickOKbutton();
        //Verification
        bdePage.filterTableBDE(newRunNumber);
        bdePage.verifyThatRecordIsCreated();
    });

    it('Should be able to delete a record.', function() {
        bdePage.navigateToBDESection();
        bdePage.filterTableBDE(runNumber);
        helperFile.clickDeleteButton('icon-small-clear');
        bdePage.clickButtonByText();
        bdePage.clickFinishButton();
        //Verification
        bdePage.filterTableBDE(runNumber);
        //browser.sleep(1000);
        bdePage.verifyThatRecordIsDeleted();
    });


});