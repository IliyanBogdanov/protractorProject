var loginCredentials = require('./login.json');
var EC = protractor.ExpectedConditions;

var helperFile = function() {
    /*
 	 * Function that generates a random value
     */
    this.createARandomValue = function (){
        return Math.random().toString(36).substring(10, 13);
    };
    /*
 	 * Function that waits element to be presented
     */
    this.waitElement = function (selector){
        var elementWait = element(by.css(selector))
        browser.wait(EC.visibilityOf(elementWait), 10000, 'Wait for element to be presented.');
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
        var elementBtn = element(by.css(selector));
       	browser.wait(EC.elementToBeClickable(elementBtn), 10000, 'Wait for clickEditButton button has failed.');
        elementBtn.click();
    };
	/*
     * Click the delete BDE button
     */
    this.clickDeleteButton = function (selector) {
        browser.wait(EC.elementToBeClickable($(selector)), 10000, 'Wait for clickDeleteButton button has failed.');
        element(by.css(selector)).click();
    };
    /*
	 * Click on the Apply filter button
 	 */
      this.clickOnApplyButton = function() {
        browser.wait(EC.elementToBeClickable($('.btn.roche_green_bg.waves-effect.waves-primary')), 10000, 'Wait for clickOnApplyButton button has failed.');
        element(by.css('.btn.roche_green_bg.waves-effect.waves-primary')).click();   
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
        var setUsername = (username) ? username : 'martouser1';
        var setPassword = (password) ? password : '25Kukuvici';
        var setDomain = (domain) ? domain : 4;
        browser.executeScript("var test = $('#remis-login-domain').data('kendoDropDownList');test.select(" + setDomain + ");test.trigger('change');");
        browser.wait(EC.elementToBeClickable($('#remis-login-username')), 10000 , 'Wait for #remis-login-username has failed.');
        element(by.id('remis-login-username')).click().sendKeys(setUsername);
        browser.wait(EC.elementToBeClickable($('#remis-login-password')), 10000 , 'Wait for #remis-login-password has failed.');
        element(by.id('remis-login-password')).click().sendKeys(setPassword);
        browser.wait(EC.elementToBeClickable($('button[ng-click="vm.validate()"]')), 10000 , 'Wait for loginButton has failed.');
        element(by.css('button[ng-click="vm.validate()"]')).click();
    };
    /*
     * Log in REMIS with a specific role
      */
    this.loginREMIRole = function(role) {
        var credentials = loginCredentials[0][role];
        this.loginREMIwithSpecificCredentials(credentials.username, credentials.password);
    }
    /*
     * Verify that the record is created
     */
    this.verifyThatRecordIsCreated = function(gridIDname) {
        browser.wait(EC.visibilityOf($(gridIDname + " .k-grid-content table tbody tr")), 10000, 'Wait for verifyThatRecordIsCreated has failed.');
        var list = element.all(by.css(gridIDname + " .k-grid-content table tbody tr"));
        expect(list.count()).toBe(1);
    };
    /*
     * Verify that the record is deleted
     */
    this.verifyThatRecordIsDeleted = function(gridIDname) {
        var list = element.all(by.css(""+gridIDname+" .k-grid-content table tbody tr"));
        expect(list.count()).toBe(0);
    };
    /*
     * Verify that the login with role
     */
    this.verifyLoginSingleRole = function(type) {
        var rolesList = element.all(by.css('.' + type));
        expect(rolesList.count()).toEqual(1);
    };
    /*
     * Verify that the read only role
     */
    this.verifyAddButton = function(gridIDname, addButtonText, count) {
        var attributesGrid = element(by.css('#' + gridIDname));
        browser.wait(EC.elementToBeClickable(attributesGrid), 10000 , 'Wait for attributesGrid has failed.');
        var addButton = element.all(by.buttonText(addButtonText));
        expect(addButton.count()).toEqual(count);
    };
    /*
     * Open Site menu and select HTO value
     */
    this.setSiteValue = function() {
        //Open Site menu
        browser.wait(EC.elementToBeClickable($('.k-select')), 10000, 'Wait for setSiteValue has failed.');
        element(by.className('k-select')).click();
        //Select HTO value
        browser.wait(EC.elementToBeClickable($('#filter-site_listbox > li:nth-child(2)')), 10000, 'Wait for setSiteValue has failed.');
        element(by.css('#filter-site_listbox > li:nth-child(2)')).click();
    };
    /*
     * Open Product Family Menu and select ACTEMRA 162 MG TOCILIZUMAB
     */
    this.setProductFamilyValue = function() {
        //Open Product Family Menu
        browser.wait(EC.elementToBeClickable($('#aside-filter > div.container.filter-container > div > div > div.productFamilyFilter.form-group.filter-element.col-xs-12.col-sm-3.col-lg-2 > span > span > span')), 10000, 'Wait for setProductFamilyValue has failed.');
        element(by.css('#aside-filter > div.container.filter-container > div > div > div.productFamilyFilter.form-group.filter-element.col-xs-12.col-sm-3.col-lg-2 > span > span > span')).click();
        //Select ACTEMRA 162 MG TOCILIZUMAB
        var productFamilyValue = element(by.css('#filter-productFamily_listbox > li:nth-child(1)'));
        browser.wait(EC.elementToBeClickable(productFamilyValue, 10000, 'Wait for productFamilyValue has failed.'));
        productFamilyValue.click();     
    };
     /*
     Click next button by a position in an array
     */
    this.clickNextArray = function (text) {
        //browser.wait(EC.visibilityOf($('button[wz-next="$ctrl.onNext()"]')), 10000, 'Wait for clickNextArray has failed.');
        element.all(by.css('button[wz-next="$ctrl.onNext()"]')).get(text).click();
    };
};
module.exports = new helperFile();
