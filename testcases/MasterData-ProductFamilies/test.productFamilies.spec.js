var loginPage = require('../REMILogin/login.page.js');
var MDProductFamilyPage = require('./productFamilies.page.js');
var productFamilyVersion = '';

describe('When user opens the MD Product families module, he...', function() {

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
//Add Material Number
        MDProductFamilyPage.clickButtonByText('Add Material Number');
        MDProductFamilyPage.enterMaterialNumberValue();
        MDProductFamilyPage.clickButtonByText('Add Process Step');
        MDProductFamilyPage.enterProcessStepValue();
        //Add Process Step
        MDProductFamilyPage.clickButtonByText('Create');
        browser.sleep(2000);
        MDProductFamilyPage.clickButtonByText('Finish');
        //verify
        MDProductFamilyPage.filterTable();
        MDProductFamilyPage.verifyThatRecordIsCreated();
    })

    it('Should be able to update a new record.', function(){
        var newproductFamilyVersion = 'UPDATE-' + productFamilyVersion;
        MDProductFamilyPage.filterTable(productFamilyVersion);
        browser.sleep(1000);
        MDProductFamilyPage.clickEditButton('icon-small-edit');
        browser.sleep(1000);
        MDProductFamilyPage.enterSiteValue();
        MDProductFamilyPage.enterVenueValue();
        MDProductFamilyPage.enterCommercialProductValue();
        MDProductFamilyPage.enterConfigDossageValue();
        productFamilyVersion = MDProductFamilyPage.enterVersionValue(newproductFamilyVersion);
        //Add Process Step
        MDProductFamilyPage.clickButtonByText('Update');
        browser.sleep(2000);
        MDProductFamilyPage.clickButtonByText('Finish');
        //verify
        MDProductFamilyPage.filterTable(productFamilyVersion);
        MDProductFamilyPage.verifyThatRecordIsCreated();
    })

    it('Should be able to delete a record.', function() {
        //Filter table to get the last added/updated record from the test
        MDProductFamilyPage.filterTable(productFamilyVersion);
        browser.sleep(2000);
        MDProductFamilyPage.clickEditButton('icon-small-clear');
        MDProductFamilyPage.clickButtonByText('Delete');
        MDProductFamilyPage.clickButtonByText('Finish');
        MDProductFamilyPage.filterTable(productFamilyVersion);
        MDProductFamilyPage.verifyThatRecordIsDeleted();
    });
});