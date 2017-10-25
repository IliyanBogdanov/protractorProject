var loginPage = require('./login.page.js');

describe('When user is openning the login page, he...', function(){

    beforeEach(function(){
        loginPage.navigateToRemisDev();
    });

    it('Should be able to log into the system.', function(){
        loginPage.enterDomainValue();
        loginPage.enterUsernameValue('martouser1');
        loginPage.enterPasswordValue('25Kukuvici');
        loginPage.clickLogin();
        loginPage.verifyThatTestPasses();
    });

    it('Should be able to logout of the system.', function(){
        loginPage.loginREMI();
        loginPage.logoutREMI();
        loginPage.verifyThatTestPasses();
    });

})