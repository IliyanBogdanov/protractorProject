var incorrectLoginPage = require('./incorrectLogin.page.js');
var loginPage = require('./../login.page.js');

describe('Incorrect Login details, asserts for validation messages', function () {
  
  beforeEach(function(){
      browser.waitForAngularEnabled(false);
      browser.get('http://remisdev.demos.bgosoftware.com/remisservice');
      browser.waitForAngularEnabled(true);
      browser.get('http://remisdev.demos.bgosoftware.com/login/');
  });

  xit('Empty Domain', function () {
    incorrectLoginPage.enterEmptyDomainValue();
    loginPage.enterUsernameValue();
    loginPage.enterPasswordValue();
    incorrectLoginPage.verifyValidationMessageDomain();
  });

  xit('Empty Username', function () {
    loginPage.enterDomainValue();
    incorrectLoginPage.enterEmptyUsernameValue();
    loginPage.enterPasswordValue();
    incorrectLoginPage.verifyValidationMessageUsername();  
  });

  xit('Empty Password', function () {
    loginPage.enterDomainValue();
    loginPage.enterUsernameValue();
    incorrectLoginPage.enterEmptyPasswordValue();
    incorrectLoginPage.verifyValidationMessagePassword();
  });

  fit('Correct Username ; Wrong Password', function () {
    loginPage.enterDomainValue();
    loginPage.enterUsernameValue();
    loginPage.enter('blablabla');
    //Function that populates domain , correct username and wrong password fields and clicks on login button
    //browser.executeScript(BGO.utils.login, 'ad.bgosoftware.com', 'martouser1', 'wrongpassword');
    //browser.sleep(1000);
    //Check validation message for domain that is not selected
    //var domainValidationMessage = element(by.css('.toast-error'));
    //expect(domainValidationMessage.isDisplayed()).toBe(true);
  });

  xit('Wrong Username ; Correct Password', function () {
    //Function that populates domain , wrong username and correct password fields and clicks on login button
    browser.executeScript(BGO.utils.login, 'ad.bgosoftware.com', 'wrongusername', '25Kukuvici');
    //browser.waitForAngular();
    browser.sleep(1000);
    //Check validation message for password that is not entered
    var domainValidationMessage = element(by.css('.toast-error'));
    expect(domainValidationMessage.isDisplayed()).toBe(true);
  });

});

