var loginPage = require('../REMILogin/login.page.js');
var MDProductFamilyPage = require('./productFamilies.page.js');
var helperFile = require('./../Helpers/Helper.js');
var random = helperFile.createARandomValue();
var productFamilyVersion = '';

describe('When user opens the Product families module, he...', function() {

    beforeEach(function () {
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
        MDProductFamilyPage.navigateMDProductFamilySection();
    });

    it('Should be able to create a new record.', function(){
        MDProductFamilyPage.clickOnAddPFButton();
        helperFile.enterSiteValue('1');
        helperFile.enterVenueValue('1');
        MDProductFamilyPage.enterCommercialProductValue();
        MDProductFamilyPage.enterConfigDossageValue();
        productFamilyVersion = MDProductFamilyPage.enterVersionValue();
        MDProductFamilyPage.clickOnAddMaterialNumberButton();
        MDProductFamilyPage.enterMaterialNumberValue();
        MDProductFamilyPage.clickOnAddProcessStepButton();
        MDProductFamilyPage.enterProcessStepValue();
        helperFile.clickButtonByText('Create');
        helperFile.clickButtonByText('Finish');
        //Verification 
        MDProductFamilyPage.filterTable();
        helperFile.verifyThatRecordIsCreated('#product-family-grid');
    });

    it('Should be able to update a new record.', function(){
        var newproductFamilyVersion = 'UPDATE-' + random;
        MDProductFamilyPage.filterTable(productFamilyVersion);
        helperFile.clickEditButton('.icon-small-edit.roche_grey_7');
        helperFile.enterSiteValue('1');
        helperFile.enterVenueValue('1');
        MDProductFamilyPage.enterCommercialProductValue();
        MDProductFamilyPage.enterConfigDossageValue();
        productFamilyVersion = MDProductFamilyPage.enterVersionValue(newproductFamilyVersion);
        helperFile.clickButtonByText('Update');
        helperFile.clickButtonByText('Finish');
        //Verification 
        MDProductFamilyPage.filterTable(productFamilyVersion);
        helperFile.verifyThatRecordIsCreated('#product-family-grid');
    });

    it('Should be able to delete a record.', function() {
        MDProductFamilyPage.filterTable(productFamilyVersion);
        helperFile.clickEditButton('.icon-small-clear.roche_grey_7');
        helperFile.clickButtonByText('Delete');
        helperFile.clickButtonByText('Finish');
        //Verification 
        MDProductFamilyPage.filterTable(productFamilyVersion);
        helperFile.verifyThatRecordIsDeleted('#product-family-grid');
    });
});