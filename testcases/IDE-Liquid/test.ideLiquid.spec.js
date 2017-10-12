var loginPage = require('../REMILogin/login.page.js');
var ideLiquidPage = require('./ideLiquid.page.js');

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
        ideLiquidPage.enterInspectionLotNumber();
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
        ideLiquidPage.clickCreateButton();
        ideLiquidPage.clickFinishButton();
        //verify
        ideLiquidPage.filterTable();
        ideLiquidPage.verifyThatRecordIsCreated();

        browser.sleep(10000);
    });


});