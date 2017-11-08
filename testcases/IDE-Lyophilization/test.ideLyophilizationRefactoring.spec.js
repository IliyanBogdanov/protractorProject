var loginPage = require('../REMILogin/login.page.js');
var ideLyophilizationPage = require('./ideLyophilization.page.js');
var helperFile = require('./../Helpers/Helper.js');
var inspectionLotNumber = '';
describe('When user opens the IDE-Lyophilization module, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
        ideLyophilizationPage.navigateToIDELyophilizationSection();
    });
    it('Should be able to create a new record.', function(){
        ideLyophilizationPage.clickOnAddIDEButton();
        ideLyophilizationPage.enterCompanyValue();
        ideLyophilizationPage.enterTotalVials();
        ideLyophilizationPage.enterInspection();
        ideLyophilizationPage.enterFacilityValue();
        ideLyophilizationPage.enterALEValue();
        ideLyophilizationPage.enterInspectionStartDate();
        inspectionLotNumber = ideLyophilizationPage.enterInspectionLotNumber();
        ideLyophilizationPage.enterComments();
        //step2
        helperFile.clickNextButton("vm.showValidateAlert('lot-information')");
        ideLyophilizationPage.addVials();
        //step3
        helperFile.clickNextArray(0);
        ideLyophilizationPage.addVials();
        //step4
        helperFile.clickNextArray(1);
        ideLyophilizationPage.addVials();
        //step5
        helperFile.clickNextArray(2);
        ideLyophilizationPage.addVials();
        //summary
        helperFile.clickButtonByText('Create');
        helperFile.clickButtonByText('Finish');
        //verify
        ideLyophilizationPage.filterTable();
        helperFile.verifyThatRecordIsCreated('#hto-grid-lyophilization');
    });

    it('Should be able to update a record.', function() {
        var newInspectionLotNumber = 'UPDATE-' + inspectionLotNumber;
        ideLyophilizationPage.filterTable(inspectionLotNumber);
        helperFile.clickEditButton('.icon-small-edit.roche_grey_7');
        browser.sleep(3000);
        inspectionLotNumber = ideLyophilizationPage.enterInspectionLotNumber(newInspectionLotNumber);
        ideLyophilizationPage.enterTotalVials(11);
        //step2
        helperFile.clickNextButton("vm.showValidateAlert('lot-information')");
        ideLyophilizationPage.addVials(3);
        //step3
        helperFile.clickNextArray(0);
        ideLyophilizationPage.addVials(3);
        //step4
        helperFile.clickNextArray(1);
        ideLyophilizationPage.addVials(3);
        //step5
        helperFile.clickNextArray(2);
        ideLyophilizationPage.addVials(3);
        //summary
        helperFile.clickButtonByText('Update');
        helperFile.clickButtonByText('Finish');
        //verify
        ideLyophilizationPage.filterTable(newInspectionLotNumber);
        helperFile.verifyThatRecordIsCreated('#hto-grid-lyophilization');
    });

    it('Should be able to delete a record.', function() {
        ideLyophilizationPage.filterTable(inspectionLotNumber);
        helperFile.clickEditButton('.icon-small-clear.roche_grey_7');
        helperFile.clickButtonByText('Delete');
        helperFile.clickButtonByText('Finish');
        ideLyophilizationPage.filterTable(inspectionLotNumber);
        helperFile.verifyThatRecordIsDeleted('#hto-grid-lyophilization');
    });


});