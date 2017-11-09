var loginPage = require('../REMILogin/login.page.js');
var clePage = require('./pmCLE.page.js');
var helperFile = require('./../Helpers/Helper.js');

describe('When user opens the CLE module, he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });

    it ('Should be able to save CL.', function (){
        helperFile.setSiteValue('1');
        helperFile.setVenueValue('0');
        helperFile.setProductFamilyValue('0');
        helperFile.clickOnApplyButton();
        clePage.clickOnCLE();
        clePage.saveNewCLE();
    });

    afterAll(function () {
        browser.restart();
        browser.manage().window().maximize();
    });
});


