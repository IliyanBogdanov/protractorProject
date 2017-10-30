var loginPage = require('../REMILogin/login.page.js');
var clePage = require('./pmDetails.page.js');
var helperFile = require('./../Helpers/Helper.js');

describe('When user opens the Details module, he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });

    it ('Should be able to save a new violation comment.', function (){
        helperFile.setSiteValue();
        helperFile.setProductFamilyValue();
        helperFile.clickOnApplyButton();
        
    });
});