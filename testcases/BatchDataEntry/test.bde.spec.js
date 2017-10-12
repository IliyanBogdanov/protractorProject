var loginPage = require('../REMILogin/login.page.js');
var bdePage = require('./bde.page.js');

describe('When user opens the BDE module, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });
    
    it('Should be able to create a new record.', function(){
        bdePage.openBDEpage();
        bdePage.addNewBDEbuttonClick();
        bdePage.siteDropDownSelectRSTO();
        bdePage.selectVenueB10();
        bdePage.productFamilyDropDownSelect(); 
        bdePage.materialNumberDropDownSelect();
        bdePage.runNumberEnterTextInput();
        bdePage.campaignNameTextInput();
        bdePage.lotNumberEnterTextInput();
        bdePage.runStartDateEntry();
        bdePage.runEndDateEntry();
        bdePage.thawIDTextInput();
        bdePage.thawIDDateEntry();
        bdePage.harvestDateEntry();
        bdePage.clickNextButton("vm.showValidateAlert('run-details')");
        browser.sleep(3000);
        //step2
        bdePage.populateParameterValues();
        //bdePage.clickNextButton('class="k-primary waves-effect waves-primary ng-binding k-button"');

        
    });
});