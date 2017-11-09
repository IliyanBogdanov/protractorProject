var loginPage = require('../REMILogin/login.page.js');
var bdePage = require('./bde.page.js');
var helperFile = require('./../Helpers/Helper.js');
var random = helperFile.createARandomValue();
var runNumber = '';

describe('When user opens the BDE module, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
        bdePage.navigateToBDESection();
    });
    
    it('Should be able to create a new record.', function(){
        //Step 1 - details
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
        helperFile.clickButtonByText('Create');
        helperFile.clickButtonByText('OK');
        //Verification
        bdePage.filterTableBDE();
        helperFile.verifyThatRecordIsCreated('#dataEntry-grid');
    });

    it('Should be able to update a record.', function(){
        var newRunNumber = 'UPDATE-' + random;
        bdePage.filterTableBDE(runNumber);
        helperFile.clickEditButton('.icon-small-edit.roche_grey_7');
        bdePage.clearRunNumberInput();
        runNumber = bdePage.runNumberEnterTextInput(newRunNumber);
        helperFile.clickNextButton("vm.showValidateAlert('run-details')");
        helperFile.clickNextButton('');
        helperFile.clickButtonByText('Update');
        helperFile.clickButtonByText('OK');
        //Verification
        bdePage.filterTableBDE(newRunNumber);
        helperFile.verifyThatRecordIsCreated('#dataEntry-grid');
    });

    it('Should be able to delete a record.', function() {
        bdePage.filterTableBDE(runNumber);
        helperFile.clickDeleteButton('.icon-small-clear.roche_grey_7');
        helperFile.clickButtonByText('Delete');
        helperFile.clickButtonByText('Finish');
        //Verification
        bdePage.filterTableBDE(runNumber);
        helperFile.verifyThatRecordIsDeleted('#dataEntry-grid');
    });


});