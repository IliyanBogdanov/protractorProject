var incorrectLoginPage = require('./incorrectLogin.page.js');
var loginPage = require('./../login.page.js');

describe('Incorrect Login details, asserts for validation messages', function () {
  
  beforeEach(function(){
      browser.waitForAngularEnabled(false);
      browser.get('http://remisdev.demos.bgosoftware.com/remisservice');
      browser.waitForAngularEnabled(true);
      browser.get('http://remisdev.demos.bgosoftware.com/login/');
  });

  it('Empty Domain', function () {
    incorrectLoginPage.enterEmptyDomainValue();
    loginPage.enterUsernameValue('martouser1');
    loginPage.enterPasswordValue('25Kukuvici');
    loginPage.clickLogin();
    incorrectLoginPage.verifyValidationMessageDomain();
  });

  it('Empty Username', function () {
    loginPage.enterDomainValue();
    loginPage.enterUsernameValue('');
    loginPage.enterPasswordValue('25Kukuvici');
    loginPage.clickLogin();
    incorrectLoginPage.verifyValidationMessageUsername();  
  });

  it('Empty Password', function () {
    loginPage.enterDomainValue();
    loginPage.enterUsernameValue('martouser1');
    loginPage.enterPasswordValue('');
    loginPage.clickLogin();
    incorrectLoginPage.verifyValidationMessagePassword();
  });

  it('Correct Username ; Wrong Password', function () {
    loginPage.enterDomainValue();
    loginPage.enterUsernameValue('martouser1');
    loginPage.enterPasswordValue('wrongpassword');
    loginPage.clickLogin();
    incorrectLoginPage.verifyValidationMessageWrongPassword();
  });

  it('Wrong Username ; Correct Password', function () {
    loginPage.enterDomainValue();
    loginPage.enterUsernameValue('wrongusername');
    loginPage.enterPasswordValue('25Kukuvici');
    loginPage.clickLogin();
    incorrectLoginPage.verifyValidationMessageWrongUsername();
  });

});

