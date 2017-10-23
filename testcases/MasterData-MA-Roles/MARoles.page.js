var helper = require('./../Helpers/Helper.js');
var EC = protractor.ExpectedConditions;

var MARoles = function(){
    this.loginREMIRole = function(role) {
        var credentials = helper.usersByRole[role];
        helper.loginREMIwithSpecificCredentials(credentials.username, credentials.password);
    }

    this.verifyLogin = function(type) {
        var rolesList = element.all(by.css('.' + type));
        expect(rolesList.count()).toEqual(1);
    }

    this.verifyReadOnly = function() {
        var attributesGrid = element(by.css('#attributes-grid'));
        browser.wait(EC.elementToBeClickable(attributesGrid), 10000);
        var addButton = element.all(by.buttonText('Add New Monitoring Attribute'));
        expect(addButton.count()).toEqual(0);
    }
};
module.exports = new MARoles();