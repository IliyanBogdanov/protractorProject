var loginPage = require('../REMILogin/login.page.js');
var MDProductFamilyPage = require('./productFamilies.page.js');
var helperFile = require('./../Helpers/Helper.js');
var productFamilyVersion = '';

describe('When user opens the Product families module, he...', function() {

    beforeEach(function () {
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
        MDProductFamilyPage.navigateMDProductFamilySection();
    });

    it('Should be able to create a new record.', function(){
        MDProductFamilyPage.clickOnAddPFButton();
        MDProductFamilyPage.enterSiteValue();
        MDProductFamilyPage.enterVenueValue();
        MDProductFamilyPage.enterCommercialProductValue();
        MDProductFamilyPage.enterConfigDossageValue();
        productFamilyVersion = MDProductFamilyPage.enterVersionValue();
        MDProductFamilyPage.clickOnAddMaterialNumberButton();
        MDProductFamilyPage.enterMaterialNumberValue();
        MDProductFamilyPage.clickOnAddProcessStepButton();
        MDProductFamilyPage.enterProcessStepValue();
        MDProductFamilyPage.clickOnCreateButton();
        MDProductFamilyPage.clickOnFinishButton();
        //Verification 
        MDProductFamilyPage.filterTable();
        MDProductFamilyPage.verifyThatRecordIsCreated();
    });

    it('Should be able to update a new record.', function(){
        var newproductFamilyVersion = 'UPDATE-' + productFamilyVersion;
        MDProductFamilyPage.filterTable(productFamilyVersion);
        helperFile.clickEditButton('.icon-small-edit');
        MDProductFamilyPage.enterSiteValue();
        MDProductFamilyPage.enterVenueValue();
        MDProductFamilyPage.enterCommercialProductValue();
        MDProductFamilyPage.enterConfigDossageValue();
        productFamilyVersion = MDProductFamilyPage.enterVersionValue(newproductFamilyVersion);
        MDProductFamilyPage.clickOnUpdateButton();
        MDProductFamilyPage.clickOnFinishButton();
        //Verification 
        MDProductFamilyPage.filterTable(productFamilyVersion);
        MDProductFamilyPage.verifyThatRecordIsCreated();
    });

    it('Should be able to delete a record.', function() {
        MDProductFamilyPage.filterTable(productFamilyVersion);
        helperFile.clickEditButton('.icon-small-clear');
        MDProductFamilyPage.clickOnDeleteButton();
        MDProductFamilyPage.clickOnFinishButton();
        //Verification 
        MDProductFamilyPage.filterTable(productFamilyVersion);
        MDProductFamilyPage.verifyThatRecordIsDeleted();
    });
});