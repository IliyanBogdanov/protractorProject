var loginPage = require('../REMILogin/login.page.js');
var ideLyophilizationPage = require('./ideLyophilization.page.js');
var inspectionLotNumber = '';
describe('When user opens the IDE-Lyophilization module, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });
    it('Should be able to create a new record.', function(){
        ideLyophilizationPage.navigateToIDELyophilizationSection();
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
        ideLyophilizationPage.clickNextButton("vm.showValidateAlert('lot-information')");
        ideLyophilizationPage.addVials();
        //step3
        ideLyophilizationPage.clickNextButton("vm.showValidateAlert('critical')");
        ideLyophilizationPage.addVials();
        //step4
        ideLyophilizationPage.clickNextButton("vm.showValidateAlert('major')");
        ideLyophilizationPage.addVials();
        //step5
        ideLyophilizationPage.clickNextButton("vm.showValidateAlert('minor')");
        ideLyophilizationPage.addVials();
        //summary
        ideLyophilizationPage.clickButtonByText('Create');
        ideLyophilizationPage.clickButtonByText('Finish');
        //verify
        ideLyophilizationPage.filterTable();
        browser.sleep(3000);
        ideLyophilizationPage.verifyThatRecordIsCreated();
    });

    it('Should be able to update a record.', function() {
        var newInspectionLotNumber = 'UPDATE-' + inspectionLotNumber;
        ideLyophilizationPage.navigateToIDELyophilizationSection();
        //Filter table to get the last added record from the test
        ideLyophilizationPage.filterTable(inspectionLotNumber);
        ideLyophilizationPage.clickEditButton('icon-small-edit');
        browser.sleep(3000);
        inspectionLotNumber = ideLyophilizationPage.enterInspectionLotNumber(newInspectionLotNumber);
        ideLyophilizationPage.enterTotalVials(11);
        //step2
        ideLyophilizationPage.clickNextButton("vm.showValidateAlert('lot-information')");
        ideLyophilizationPage.addVials(3);
        //step3
        ideLyophilizationPage.clickNextButton("vm.showValidateAlert('critical')");
        ideLyophilizationPage.addVials(3);
        //step4
        ideLyophilizationPage.clickNextButton("vm.showValidateAlert('major')");
        ideLyophilizationPage.addVials(3);
        //step5
        ideLyophilizationPage.clickNextButton("vm.showValidateAlert('minor')");
        ideLyophilizationPage.addVials(3);
        //summary
        ideLyophilizationPage.clickButtonByText('Update');
        ideLyophilizationPage.clickButtonByText('Finish');
        //verify
        ideLyophilizationPage.filterTable(newInspectionLotNumber);
        ideLyophilizationPage.verifyThatRecordIsCreated();
    });

    it('Should be able to delete a record.', function() {
        ideLyophilizationPage.navigateToIDELyophilizationSection();
        //Filter table to get the last added/updated record from the test
        ideLyophilizationPage.filterTable(inspectionLotNumber);
        ideLyophilizationPage.clickEditButton('icon-small-clear');
        ideLyophilizationPage.clickButtonByText('Delete');
        ideLyophilizationPage.clickButtonByText('Finish');
        ideLyophilizationPage.filterTable(inspectionLotNumber);
        ideLyophilizationPage.verifyThatRecordIsDeleted();
    });


});