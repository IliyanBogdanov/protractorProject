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
        browser.wait(EC.elementToBeClickable($('button[type="button"]')), 5000);
        element(by.css('button[type="button"]')).click();
    };

    this.navigateToRemisDev = function() {
        browser.get('http://remisdev.demos.bgosoftware.com/login/');
        browser.wait(EC.elementToBeClickable($('button[type="button"]')), 5000);
    };

    this.loginREMI = function(username, passowrd) {
        var setUsername = (username) ? username : 'martouser1';
        var setPassword = (passowrd) ? passowrd : '25Kukuvici';
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(4);test.trigger('change');");
        browser.wait(EC.elementToBeClickable($('#remis-login-username')), 5000);
        element(by.id('remis-login-username')).click().sendKeys(setUsername);
        browser.wait(EC.elementToBeClickable($('#remis-login-password')), 5000);
        element(by.id('remis-login-password')).click().sendKeys(setPassword);
        browser.wait(EC.elementToBeClickable($('button[type="button"]')), 5000);
        element(by.css('button[type="button"]')).click();
    };

    this.logoutREMI = function() {
        browser.wait(EC.elementToBeClickable($('#wrapper > div > div > header > nav > div > ul > li:nth-child(2) > a > i')), 5000);
        element(by.css('#wrapper > div > div > header > nav > div > ul > li:nth-child(2) > a > i')).click();
        element(by.buttonText('Yes')).click();  
    };
};

module.exports = new loginPage();

