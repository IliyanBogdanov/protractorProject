var loginPage = require('./login.page.js');

describe('When user is openning the login page, he...', function(){

    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://remisdev.demos.bgosoftware.com/remisservice');
        browser.waitForAngularEnabled(true);
        browser.get('http://remisdev.demos.bgosoftware.com/login/');
    });

    it('Should be able to log into the system.', function(){
        loginPage.enterDomainValue();
        loginPage.enterUsernameValue();
        loginPage.enterPasswordValue();
        loginPage.clickLogin();
    });

    it('Should be able to logout of the system.', function(){
        loginPage.loginREMI();
        loginPage.logoutREMI();
    });

})