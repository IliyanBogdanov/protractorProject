var loginPage = require('../REMILogin/login.page.js');
var ideLiquidPage = require('./ideLiquid.page.js');
var inspectionLotNumber = '';
describe('When user opens the IDE-Liquid module, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });
    it('Should be able to create a new record.', function(){
        ideLiquidPage.navigateToIDELiquidSection();
        ideLiquidPage.clickOnAddIDEButton();
        ideLiquidPage.enterCompanyValue();
        ideLiquidPage.enterTotalVials();
        ideLiquidPage.enterInspection();
        ideLiquidPage.enterFacilityValue();
        ideLiquidPage.enterALEValue();
        ideLiquidPage.enterInspectionStartDate();
        inspectionLotNumber = ideLiquidPage.enterInspectionLotNumber();
        ideLiquidPage.enterComments();
        //step2
        ideLiquidPage.clickNextButton("vm.showValidateAlert('lot-information')");
        ideLiquidPage.addVials();
        //step3
        ideLiquidPage.clickNextButton("vm.showValidateAlert('critical')");
        ideLiquidPage.addVials();
        //step4
        ideLiquidPage.clickNextButton("vm.showValidateAlert('major')");
        ideLiquidPage.addVials();
        //step5
        ideLiquidPage.clickNextButton("vm.showValidateAlert('minor')");
        ideLiquidPage.addVials();
        //step5
        ideLiquidPage.clickNextButton("vm.showValidateAlert('aim')");
        ideLiquidPage.addVials();
        //summary
        ideLiquidPage.clickButtonByText('Create');
        ideLiquidPage.clickButtonByText('Finish');
        //verify
        ideLiquidPage.filterTable();
        ideLiquidPage.verifyThatRecordIsCreated();
    });

    it('Should be able to update a record.', function() {
        var newInspectionLotNumber = 'UPDATE-' + inspectionLotNumber;
        ideLiquidPage.navigateToIDELiquidSection();
        //Filter table to get the last added record from the test
        ideLiquidPage.filterTable(inspectionLotNumber);
        ideLiquidPage.clickEditButton('icon-small-edit');
        browser.sleep(3000);
        inspectionLotNumber = ideLiquidPage.enterInspectionLotNumber(newInspectionLotNumber);
        ideLiquidPage.enterTotalVials(11);
        //step2
        ideLiquidPage.clickNextButton("vm.showValidateAlert('lot-information')");
        ideLiquidPage.addVials(3);
        //step3
        ideLiquidPage.clickNextButton("vm.showValidateAlert('critical')");
        ideLiquidPage.addVials(3);
        //step4
        ideLiquidPage.clickNextButton("vm.showValidateAlert('major')");
        ideLiquidPage.addVials(3);
        //step5
        ideLiquidPage.clickNextButton("vm.showValidateAlert('minor')");
        ideLiquidPage.addVials(3);
        //step5
        ideLiquidPage.clickNextButton("vm.showValidateAlert('aim')");
        ideLiquidPage.addVials(3);
        //summary
        ideLiquidPage.clickButtonByText('Update');
        ideLiquidPage.clickButtonByText('Finish');
        //verify
        ideLiquidPage.filterTable(newInspectionLotNumber);
        ideLiquidPage.verifyThatRecordIsCreated();
    });

    it('Should be able to delete a record.', function() {
        ideLiquidPage.navigateToIDELiquidSection();
        //Filter table to get the last added/updated record from the test
        ideLiquidPage.filterTable(inspectionLotNumber);
        ideLiquidPage.clickEditButton('icon-small-clear');
        ideLiquidPage.clickButtonByText('Delete');
        ideLiquidPage.clickButtonByText('Finish');
        ideLiquidPage.filterTable(inspectionLotNumber);
        ideLiquidPage.verifyThatRecordIsDeleted();
    });


});