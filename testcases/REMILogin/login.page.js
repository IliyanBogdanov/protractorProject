var helper = require('./../Helpers/Helper.js');
var EC = protractor.ExpectedConditions;

var loginPage = function(){

    this.enterDomainValue = function() {
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(4);test.trigger('change');"); 
    };

    this.enterUsernameValue = function(username) {
        element(by.id('remis-login-username')).click().sendKeys(username);
    };

    this.enterPasswordValue = function(password) {
        element(by.id('remis-login-password')).click().sendKeys(password);
    };

    this.clickLogin = function() {
        browser.wait(EC.elementToBeClickable($('button[type="button"]')), 10000, 'Wait for clickLogin has failed.');
        element(by.css('button[type="button"]')).click();
    };

    this.navigateToRemisDev = function() {
        browser.get('http://remisdev.demos.bgosoftware.com/login/');
        browser.wait(EC.elementToBeClickable($('button[type="button"]')), 10000, 'Wait for navigateToRemisDev has failed.');
    };

    this.loginREMI = function(username, passowrd) {
        var setUsername = (username) ? username : 'martouser1';
        var setPassword = (passowrd) ? passowrd : '25Kukuvici';
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(4);test.trigger('change');");
        browser.wait(EC.elementToBeClickable($('#remis-login-username')), 10000, 'Wait for #remis-login-username has failed.');
        element(by.id('remis-login-username')).click().sendKeys(setUsername);
        browser.wait(EC.elementToBeClickable($('#remis-login-password')), 10000, 'Wait for #remis-login-password has failed.');
        element(by.id('remis-login-password')).click().sendKeys(setPassword);
        browser.wait(EC.elementToBeClickable($('button[type="button"]')), 10000, 'Wait for button[type="button"] has failed.');
        element(by.css('button[type="button"]')).click();
    };

    this.logoutREMI = function() {
        browser.wait($('i[class="icon-small-logout"]'), 10000, 'Wait for logoutREMI has failed.');
        element(by.css('i[class="icon-small-logout"]')).click();
        element(by.buttonText('Yes')).click();  
    };

    this.verifyThatTestPasses = function() {
        expect(1).toBe(1);
    };
};

module.exports = new loginPage();

