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
        bdePage.batchLotNumberEnterTextInput();
        bdePage.orderNumberEnterTextInput();
        bdePage.batchStartTimeEntry();
        bdePage.batchEndTimeEntry();
        bdePage.nextButton();
        bdePage.populateParameterValues();
        bdePage.nextButton2();
        bdePage.createButton();
        bdePage.okButton();

    
        browser.sleep(5000);
        
        
    });
});