var loginPage = require('../REMILogin/login.page.js');
var productFamilyPage = require('../MasterData-ProductFamilies/productFamilies.page.js');
var monitoringAttributesPage = require('../MasterData-MonitoringAttributes/monitoringAttributes.page.js');
var bdePage = require('../BatchDataEntry/bde.page.js');
var helperFile = require('../Helpers/Helper.js');
var random = helperFile.createARandomValue();
var e2ePage = require('./e2e.page.js');

describe('When user opens the REMIS app, he...', function(){
    
        beforeEach(function(){
            loginPage.navigateToRemisDev();
            loginPage.loginREMI('testuser1', '25Kukuvici');
        });

        it('Should be able to create a new PF record and approve it.', function(){
            helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/productfamily/monitoring');
            productFamilyPage.clickOnAddPFButton();
            helperFile.enterSiteValue('1');
            helperFile.enterVenueValue('1');
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
            helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/productfamily/monitoring');
            productFamilyPage.filterTable();
            helperFile.clickApproveButton();
            helperFile.clickNextButtonNgClick("vm.openActionModal('approve')");
            helperFile.signUpApprovalForm('martouser1' , '25Kukuvici');
            helperFile.clickButtonByText('OK');
            helperFile.clickButtonByText('Finish');
            e2ePage.verifyThatTestPasses();
        });
    
        it('Should be able to find the approved PF in the filter and apply it.', function() {
            helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/productfamily/monitoring');
            helperFile.setSiteValue('0');
            helperFile.setVenueValue('0');
            helperFile.setProductFamilyValue('10'); //please change that to take the parameter set when creating the PF
            helperFile.clickOnApplyButton();
            e2ePage.verifyThatTestPasses();
        });

        it('Should be able to create a MA record and approve it (using the same PF record).CRUD of a CL in the grid are also checked.', function() {
            helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/attributes/monitoring');
            monitoringAttributesPage.clickOnAddMonitoringAttributeButton();
            helperFile.enterSiteValue('1');
            helperFile.enterVenueValue('1');
            helperFile.enterProductFamilyValue('2198'); //please change that to take the parameter set when creating the PF
            helperFile.clickNextButtonWzNext('vm.showValidateAlert(\'product-details\')');
            monitoringAttributesPage.enterAttributeType();
            monitoringAttributesPage.enterUoM();
            attributeName = monitoringAttributesPage.enterNameForMonitoringAttribute();
            monitoringAttributesPage.enterDescription();
            monitoringAttributesPage.enterMoM();
            monitoringAttributesPage.enterEffectiveDate();
            monitoringAttributesPage.enterDecimalPoints();
            helperFile.clickNextButtonNgClick('vm.showValidateAlert(\'attribute-details\')');
            helperFile.clickButtonByText('Create New Control Limit');
            monitoringAttributesPage.populateControlLimitValues();
            monitoringAttributesPage.clickCreateButton();
            monitoringAttributesPage.clickNextButton3rdStep();
            helperFile.clickButtonByText('Create');
            helperFile.clickButtonByText('Finish');
            monitoringAttributesPage.filterTable();
            e2ePage.clickOnOpenControlLimitGridIcon();
            e2ePage.clickOnPlusIcon();
            e2ePage.populateControlLimitValues('12345.12345','123456.123456','1234567.1234567');
            e2ePage.clickCreateButton();
            helperFile.clickButtonByText('Finish');
            e2ePage.clickEditCLButton();
            e2ePage.clearCLinputAndEnterNewValues();
            e2ePage.clickCreateButton();
            helperFile.clickButtonByText('Finish');
            e2ePage.clickDeleteCLButton();
            helperFile.clickButtonByText('Delete');
            helperFile.clickButtonByText('Finish');
            loginPage.logoutREMI();
            loginPage.navigateToRemisDev();
            loginPage.loginREMI('martouser1', '25Kukuvici');
            helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/attributes/monitoring');
            monitoringAttributesPage.filterTable();
            helperFile.clickApproveButton();
            helperFile.clickNextButtonNgClick("vm.openActionModal('approve')");
            helperFile.signUpApprovalForm('martouser1', '25Kukuvici');
            helperFile.clickButtonByText('OK');
            helperFile.clickButtonByText('Finish');
            e2ePage.verifyThatTestPasses();
        });

        it('Should be able to approve the newly created control limits.', function() {            
            loginPage.navigateToRemisDev();
            loginPage.loginREMI('martouser1', '25Kukuvici');
            helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/attributes/monitoring');
            monitoringAttributesPage.filterTable();
            e2ePage.clickOnOpenControlLimitGridIcon();
            e2ePage.clickApproveCL();
            helperFile.signUpApprovalForm('martouser1', '25Kukuvici');
            helperFile.clickButtonByText('OK');
            helperFile.clickButtonByText('Finish');
            e2ePage.verifyThatTestPasses();
        });
        
        it('Should be able to create and approve a BDE record.', function() {            
            loginPage.navigateToRemisDev();
            loginPage.loginREMI('martouser1', '25Kukuvici');
            helperFile.navigateTo('.menu-icon.icon-menu-dataentry', '/products/dataEntry');
            bdePage.addNewBDEbuttonClick();
            bdePage.siteDropDownSelectRSTO();
            bdePage.selectVenueB10();
            bdePage.productFamilyDropDownSelect(); 
            bdePage.materialNumberDropDownSelect();
            runNumber = bdePage.runNumberEnterTextInput();
            bdePage.campaignNameTextInput();
            bdePage.lotNumberEnterTextInput();
            bdePage.runStartDateEntry();
            bdePage.runEndDateEntry();
            bdePage.thawIDTextInput();
            bdePage.thawIDDateEntry();
            bdePage.harvestDateEntry();
            helperFile.clickNextButtonWzNext("vm.showValidateAlert('run-details')");
            bdePage.populateParameterValues();
            helperFile.clickNextButtonWzNext('');
            helperFile.clickButtonByText('Create');
            helperFile.clickButtonByText('OK');
            loginPage.navigateToRemisDev();
            loginPage.loginREMI('testuser1', '25Kukuvici');
            helperFile.navigateTo('.menu-icon.icon-menu-dataentry', '/products/dataEntry');
            bdePage.filterTableBDE();
            e2ePage.clickApproveBDE();
            helperFile.clickButtonByText('Compliance Check & Sign');
            helperFile.signUpApprovalForm('testuser1', '25Kukuvici');
            helperFile.clickButtonByText('OK');
            e2ePage.verifyThatTestPasses();
        });    

    }); 