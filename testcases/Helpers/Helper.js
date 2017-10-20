var EC = protractor.ExpectedConditions;

var helperFile = function() {
    
    /*
 	 * Function that generates a random value
     */
    this.createARandomValue = function (){
        return Math.random().toString(36).substring(10, 13);
    };
    /*
 	 * Click next button in case of wz-next property 
     */
	this.clickNextButton = function (selector) {
		browser.wait(EC.elementToBeClickable($('button[wz-next="' + selector + '"]')), 5000);
		element(by.css('button[wz-next="' + selector + '"]')).click();
	};
	/*
 	 * Click next button in case of ng-click property 
     */
    this.clickNextButton2ndStep = function (selector) {
        browser.wait(EC.elementToBeClickable($('button[ng-click="' + selector + '"]')), 5000);
		element(by.css('button[ng-click="' + selector + '"]')).click();
    };
	/*
     * Click the edit button
     */
    this.clickEditButton = function (selector) {
       	browser.wait(EC.elementToBeClickable($(selector)), 5000);
        element(by.css(selector)).click();
    };
	/*
     * Click the delete BDE button
     */
    this.clickDeleteButton = function (selector) {
        browser.wait(EC.elementToBeClickable($(selector)), 5000);
        element(by.css(selector)).click();
    };
	/*
	 * Click on the Clear filter button
 	 */
	this.clickOnClearButton = function() {
        browser.wait(EC.elementToBeClickable($('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary')), 5000);
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
        browser.wait(EC.presenceOf($('#remis-login-username')), 5000);
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(" + domain + ");test.trigger('change');");
        element(by.id('remis-login-username')).click().sendKeys(username);
        element(by.id('remis-login-password')).click().sendKeys(password);
        element(by.css('button[type="button"]')).click();
    };


        

        

  




         

          
           



     




 
 

};
module.exports = new helperFile();
