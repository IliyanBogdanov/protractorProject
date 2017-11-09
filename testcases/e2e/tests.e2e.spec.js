var loginPage = require('../REMILogin/login.page.js');
var productFamilyPage = require('../MasterData-ProductFamilies/productFamilies.page.js');
var helperFile = require('../Helpers/Helper.js');
var random = helperFile.createARandomValue();
var e2ePage = require('./e2e.page.js');

describe('When user opens the REMIS app, he...', function(){
    
        beforeEach(function(){
            loginPage.navigateToRemisDev();
            loginPage.loginREMI('testuser1', '25Kukuvici');
        });

        it('Should be able to create a new PF record and approve it.', function(){
            productFamilyPage.navigateMDProductFamilySection();
            productFamilyPage.clickOnAddPFButton();
            productFamilyPage.enterSiteValue();
            productFamilyPage.enterVenueValue();
            productFamilyPage.enterCommercialProductValue();
            productFamilyPage.enterConfigDossageValue();
            productFamilyVersion = productFamilyPage.enterVersionValue() + random;
            productFamilyPage.clickOnAddMaterialNumberButton();
            productFamilyPage.enterMaterialNumberValue();
            productFamilyPage.clickOnAddProcessStepButton();
            productFamilyPage.enterProcessStepValue();
            helperFile.clickButtonByText('Create');
            helperFile.clickButtonByText('Finish');
            productFamilyPage.filterTable();
            helperFile.verifyThatRecordIsCreated('#product-family-grid');
            loginPage.logoutREMI();
            loginPage.navigateToRemisDev();
            loginPage.loginREMI('martouser1' , '25Kukuvici');
            productFamilyPage.navigateMDProductFamilySection();
            productFamilyPage.filterTable();
            helperFile.clickApproveButton('.icon-small-approved.roche_grey_7');
            helperFile.clickNextButton2ndStep("vm.openActionModal('approve')");
            helperFile.signUpApprovalForm('martouser1' , '25Kukuvici');
            helperFile.clickButtonByText('OK');
            helperFile.clickButtonByText('Finish');
            e2ePage.verifyThatTestPasses();
        });
    
        it('Should be able to find the approved PF in the filter and apply it.', function() {
            productFamilyPage.navigateMDProductFamilySection();
            helperFile.setSiteValue('0');
            helperFile.setVenueValue('0');
            helperFile.setProductFamilyValue('10'); //please change that to take the parameter set when creating the PF
            helperFile.clickOnApplyButton();
            e2ePage.verifyThatTestPasses();
        });

        it('Should be able to create a MA record and approve it (using the same PF record).', function() {
            e2ePage.verifyThatTestPasses();        
        });

    }); 