var incorrectLoginPage = function(){

    this.enterEmptyDomainValue = function() {
        browser.sleep(1000);
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(0);test.trigger('change');"); 
    };

    this.verifyValidationMessageDomain = function() {
        var validationMessageDomain = element(by.css('#remis-login-form > div:nth-child(1) > div > div > div'));
        expect(validationMessageDomain.getAttribute('innerHTML')).toEqual('Please select Domain'); 
    };


    this.verifyValidationMessageUsername = function() {
        var validationMessageUsername = element(by.css('#remis-login-form > div:nth-child(2) > div > div > div'));
        expect(validationMessageUsername.getAttribute('innerHTML')).toEqual('Please enter your Username');
    };

    this.verifyValidationMessagePassword = function() {
        var validationMessagePassword = element(by.css('#remis-login-form > div:nth-child(3) > div > div > div'));
        expect(validationMessagePassword.getAttribute('innerHTML')).toEqual('Please enter your Password');
    };

    this.verifyValidationMessageWrongPassword = function() {
        var validationMessageWrongPassword = element(by.css('.toast-message'));
        expect(validationMessageWrongPassword.isDisplayed()).toBe(true);
    };

    this.verifyValidationMessageWrongUsername = function() {
        var verifyValidationMessageWrongUsername = element(by.css('.toast-message'));
        expect(verifyValidationMessageWrongUsername.isDisplayed()).toBe(true);
    };




    

};
module.exports = new incorrectLoginPage();
