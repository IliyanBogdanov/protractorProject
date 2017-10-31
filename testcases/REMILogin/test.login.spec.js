var loginPage = require('./login.page.js');
var loginCredentials = require('./../Helpers/login.json');

describe('When user is openning the login page, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
    });

    it('Should be able to log into the system.', function(){
        var credentials = loginCredentials[0]['ADMIN'];
        loginPage.enterDomainValue();
        loginPage.enterUsernameValue(credentials.username);
        loginPage.enterPasswordValue(credentials.password);
        loginPage.clickLogin();
        loginPage.verifyThatTestPasses();
    });

    it('Should be able to logout of the system.', function(){
        loginPage.loginREMI();
        loginPage.logoutREMI();
        loginPage.verifyThatTestPasses();
    });

})