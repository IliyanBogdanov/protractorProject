var EC = protractor.ExpectedConditions;

var helperFile = function() {
    
    /*
 	 * Function that generates a random value
     */
    this.createARandomValue = function (){
        return Math.random().toString(36).substring(10, 13);
    };
    /*
     * Clicks button by text
     */
    this.clickButtonByText = function(text) {
        var button = element(by.buttonText(text));
        browser.wait(EC.elementToBeClickable(button), 10000, 'Wait for '+ text +' button has failed.');
        button.click();
    };
    /*
 	 * Click next button in case of wz-next property 
     */
	this.clickNextButton = function (selector) {
		browser.wait(EC.elementToBeClickable($('button[wz-next="' + selector + '"]')), 10000, 'Wait for clickNextButton button has failed.');
		element(by.css('button[wz-next="' + selector + '"]')).click();
	};
	/*
 	 * Click next button in case of ng-click property 
     */
    this.clickNextButton2ndStep = function (selector) {
        browser.wait(EC.elementToBeClickable($('button[ng-click="' + selector + '"]')), 10000, 'Wait for clickNextButton2ndStep button has failed.');
		element(by.css('button[ng-click="' + selector + '"]')).click();
    };
	/*
     * Click the edit button
     */
    this.clickEditButton = function (selector) {
       	browser.wait(EC.elementToBeClickable($(selector)), 10000, 'Wait for clickEditButton button has failed.');
        element(by.css(selector)).click();
    };
	/*
     * Click the delete BDE button
     */
    this.clickDeleteButton = function (selector) {
        browser.wait(EC.elementToBeClickable($(selector)), 10000, 'Wait for clickDeleteButton button has failed.');
        element(by.css(selector)).click();
    };
	/*
	 * Click on the Clear filter button
 	 */
	this.clickOnClearButton = function() {
        browser.wait(EC.elementToBeClickable($('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary')), 10000, 'Wait for clickOnClearButton button has failed.');
        element(by.css('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary')).click();
    };
	/*
	 * Navigate to specific environment
 	 */
	this.navigateToRequiredEnv = function(environmentURL) {
        browser.get(environmentURL);
    };
	/*
	 * Log in REMIS with a specific credentials
 	 */
	this.loginREMIwithSpecificCredentials = function(username, password, domain) {
        browser.wait(EC.presenceOf($('#remis-login-username')), 10000, 'Wait for #remis-login-username button has failed.');
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(" + domain + ");test.trigger('change');");
        element(by.id('remis-login-username')).click().sendKeys(username);
        element(by.id('remis-login-password')).click().sendKeys(password);
        element(by.css('button[type="button"]')).click();
    };
    /*
     * Verify that the record is created
     */
    this.verifyThatRecordIsCreated = function(gridIDname) {
        var list = element.all(by.css(""+gridIDname+" .k-grid-content table tbody tr"));
        expect(list.count()).toBe(1);
    };
    /*
     * Verify that the record is deleted
     */
    this.verifyThatRecordIsDeleted = function(gridIDname) {
        var list = element.all(by.css(""+gridIDname+" .k-grid-content table tbody tr"));
        expect(list.count()).toBe(0);
    };


        

        

  




         

          
           



     




 
 

};
module.exports = new helperFile();
