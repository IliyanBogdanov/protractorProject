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
        browser.sleep(5000);
    })
});