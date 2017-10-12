var loginPage = function(){
    
    this.enterDomainValue = function() {
        browser.sleep(1000);
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(4);test.trigger('change');"); 
    };

    this.enterUsernameValue = function(username) {
        element(by.id('remis-login-username')).click().sendKeys(username);
    };

    this.enterPasswordValue = function(password) {
        element(by.id('remis-login-password')).click().sendKeys(password);
    };

    this.clickLogin = function() {
        element(by.css('button[type="button"]')).click();
    };

    this.navigateToRemisDev = function() {
        browser.get('http://remisdev.demos.bgosoftware.com/login/');
    };

    this.loginREMI = function() {
        browser.sleep(1000);
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(4);test.trigger('change');");
        element(by.id('remis-login-username')).click().sendKeys('martouser1');
        element(by.id('remis-login-password')).click().sendKeys('25Kukuvici');
        element(by.css('button[type="button"]')).click();
    };

    this.logoutREMI = function() {
        element(by.css('#wrapper > div > div > header > nav > div > ul > li:nth-child(2) > a > i')).click();
        element(by.buttonText('Yes')).click();  
    };



};

module.exports = new loginPage();

