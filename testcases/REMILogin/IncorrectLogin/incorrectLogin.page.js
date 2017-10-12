var incorrectLoginPage = function(){

    this.enterEmptyDomainValue = function() {
        browser.sleep(1000);
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(0);test.trigger('change');"); 
    };

    this.verifyValidationMessageDomain = function() {
        var validationMessageDomain = element(by.css('#remis-login-form > div:nth-child(1) > div > div > div'));
        expect(validationMessageDomain.getAttribute('innerHTML')).toEqual('Please select Domain'); 
    };

    this.enterEmptyUsernameValue = function() {
        element(by.id('remis-login-username')).click().sendKeys(''); 
    };

    this.verifyValidationMessageUsername = function() {
        var validationMessageUsername = element(by.css('#remis-login-form > div:nth-child(2) > div > div > div'));
        expect(validationMessageUsername.getAttribute('innerHTML')).toEqual('Please enter your Username');
    };

    this.enterEmptyPasswordValue = function() {
        element(by.id('remis-login-password')).click().sendKeys('');
    };

    this.verifyValidationMessagePassword = function() {
        var validationMessagePassword = element(by.css('#remis-login-form > div:nth-child(3) > div > div > div'));
        expect(validationMessagePassword.getAttribute('innerHTML')).toEqual('Please enter your Password');
    };

    this.enterWrongPasswordValue = function(wrongpassword) {
        var wrongpassword = element(by.id('remis-login-password')).click();
        wrongpassword.sendKeys();
    };





    

};
module.exports = new incorrectLoginPage();
