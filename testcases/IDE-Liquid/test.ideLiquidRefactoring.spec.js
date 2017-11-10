var loginPage = require('../REMILogin/login.page.js');
var ideLiquidPage = require('./ideLiquid.page.js');
var helperFile = require('./../Helpers/Helper.js');
var random = helperFile.createARandomValue();
var inspectionLotNumber = '';

describe('When user opens the IDE-Liquid module, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
        ideLiquidPage.navigateToIDELiquidSection();
    });
    it('Should be able to create a new record.', function(){
        ideLiquidPage.clickOnAddIDEButton();
        helperFile.enterCompanyValue();
        ideLiquidPage.enterTotalVials();
        ideLiquidPage.enterInspection();
        ideLiquidPage.enterFacilityValue();
        ideLiquidPage.enterALEValue();
        ideLiquidPage.enterInspectionStartDate();
        inspectionLotNumber = ideLiquidPage.enterInspectionLotNumber();
        ideLiquidPage.enterComments();
        //step2
        helperFile.clickNextArray(0);
        ideLiquidPage.addVials();
        //step3
        helperFile.clickNextArray(1);
        ideLiquidPage.addVials();
        //step4
        helperFile.clickNextArray(2);
        ideLiquidPage.addVials();
        //step5
        helperFile.clickNextArray(3);
        ideLiquidPage.addVials();
        //step5
        helperFile.clickNextArray(4);
        ideLiquidPage.addVials();
        //summary
        helperFile.clickButtonByText('Create');
        helperFile.clickButtonByText('Finish');
        //verify
        ideLiquidPage.filterTable();
        helperFile.verifyThatRecordIsCreated('#hto-grid-liquid');
    });

    it('Should be able to update a record.', function() {
        var newInspectionLotNumber = 'UPDATE-' + random;
        ideLiquidPage.filterTable(inspectionLotNumber);
        helperFile.clickEditButton('.icon-small-edit.roche_grey_7');
        inspectionLotNumber = ideLiquidPage.enterInspectionLotNumber(newInspectionLotNumber);
        ideLiquidPage.enterTotalVials(11);
        //step2
        helperFile.clickNextArray(0);
        ideLiquidPage.addVials(3);
        //step3
        helperFile.clickNextArray(1);
        ideLiquidPage.addVials(3);
        //step4
        helperFile.clickNextArray(2);
        ideLiquidPage.addVials(3);
        //step5
        helperFile.clickNextArray(3);
        ideLiquidPage.addVials(3);
        //step5
        helperFile.clickNextArray(4);
        ideLiquidPage.addVials(3);
        //summary
        helperFile.clickButtonByText('Update');
        helperFile.clickButtonByText('Finish');
        //verify
        ideLiquidPage.filterTable(newInspectionLotNumber);
        helperFile.verifyThatRecordIsCreated('#hto-grid-liquid');
    });

    it('Should be able to delete a record.', function() {
        ideLiquidPage.filterTable(inspectionLotNumber);
        helperFile.clickEditButton('.icon-small-clear.roche_grey_7');
        helperFile.clickButtonByText('Delete');
        helperFile.clickButtonByText('Finish');
        ideLiquidPage.filterTable(inspectionLotNumber);
        helperFile.verifyThatRecordIsDeleted('#hto-grid-liquid');
    });

});