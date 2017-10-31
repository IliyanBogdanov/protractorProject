var incorrectLoginPage = function(){

    this.enterEmptyDomainValue = function() {
        browser.sleep(1000);
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(0);test.trigger('change');"); 
    };

    this.verifyValidationMessageDomain = function() {
        var validationMessageDomain = element.all(by.css('div[ng-message="required"]'));
        expect(validationMessageDomain.count()).toEqual(1);  
    };


    this.verifyValidationMessageUsername = function() {
        var validationMessageUsername = element.all(by.css('div[ng-message="required"]'));
        expect(validationMessageUsername.count()).toEqual(1);
    };

    this.verifyValidationMessagePassword = function() {
        var validationMessagePassword = element.all(by.css('div[ng-message="required"]'));
        expect(validationMessagePassword.count()).toEqual(1);
    };

    this.verifyValidationMessageWrongPassword = function() {
        var validationMessageWrongPassword = element.all(by.css('.toast-message'));
        expect(validationMessageWrongPassword.count()).toEqual(1);
    };

    this.verifyValidationMessageWrongUsername = function() {
        var verifyValidationMessageWrongUsername = element.all(by.css('.toast-message'));
        expect(verifyValidationMessageWrongUsername.count()).toEqual(1);
    };

};
module.exports = new incorrectLoginPage();
