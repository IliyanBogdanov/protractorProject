var loginCredentials = require('./login.json');
var EC = protractor.ExpectedConditions;

var helperFile = function() {
    /*
 	 * NavigateTo section ; module function 
     */
    this.navigateTo = function (sectionClassName, moduleUiSrefName){
        //Use the class name of the section - ex. class="menu-icon icon-menu-masterdata"
        var navigateToFunctionSection = element(by.css(''+ sectionClassName +''));
        browser.wait(EC.elementToBeClickable(navigateToFunctionSection), 10000, 'Wait for '+ navigateToFunctionSection +' button has failed.');
        navigateToFunctionSection.click();
        //Use the ui-sref name of the module - ex. href="/hto/monitoring/Liquid"
        var navigateToModule = element(by.css('a[href="'+ moduleUiSrefName+'"]'));
        browser.wait(EC.elementToBeClickable(navigateToModule), 10000, 'Wait for '+ navigateToModule +' button has failed.');
        navigateToModule.click();
    };
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
	this.clickNextButtonWzNext = function (selector) {
		browser.wait(EC.elementToBeClickable($('button[wz-next="' + selector + '"]')), 10000, 'Wait for clickNextButton button has failed.');
		element(by.css('button[wz-next="' + selector + '"]')).click();
	};
	/*
 	 * Click next button in case of ng-click property 
     */
    this.clickNextButtonNgClick = function (selector) {
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
     * Open Site menu and set site value
     */
    this.setSiteValue = function(siteNamePosition) {
        browser.wait(EC.presenceOf($('#filter-site')), 10000, 'Wait for #filter-site has failed.');
        browser.executeScript("var site = $('#filter-site').data('kendoComboBox');site.focus();site.select("+siteNamePosition+");site.trigger('change');");
    };
    /*
     * Open Venue menu and set a venue value
     */
    this.setVenueValue = function(venueNamePosition) {
        browser.wait(EC.presenceOf($('#filter-venue')), 10000, 'Wait for #filter-venue has failed.');
        browser.executeScript("var venue = $('#filter-venue').data('kendoComboBox');venue.focus();venue.select("+venueNamePosition+");venue.trigger('change');");
    };
    /*
     * Open Product Family Menu and set a pf value
     */
    this.setProductFamilyValue = function(productFamilyPosition) {
        browser.wait(EC.presenceOf($('#filter-productFamily')), 10000, 'Wait for #filter-productFamily has failed.');
        browser.executeScript("var pf = $('#filter-productFamily').data('kendoComboBox');pf.focus();pf.select("+productFamilyPosition+");pf.trigger('change');");  
    };
    /*
     Click next button by a position in an array
     */
    this.clickNextArray = function (text) {
        browser.wait(EC.presenceOf($('button[wz-next="$ctrl.onNext()"]')), 10000, 'Wait for clickNextArray has failed.');
        element.all(by.css('button[wz-next="$ctrl.onNext()"]')).get(text).click();
    };
    /*
     Click approve button 
     */
    this.clickApproveButton = function (selector) {
        var approveBtn = element(by.css(selector));
        browser.wait(EC.elementToBeClickable(approveBtn), 10000, 'Wait for clickApproveButton button has failed.');
        approveBtn.click();
    };
    /*
     *  Sign up approval form with credentials
     */
    this.signUpApprovalForm = function(username , password) {
        browser.wait(EC.elementToBeClickable($('#username')), 10000, 'Wait for #username has failed.');
        element(by.id('username')).click().sendKeys(username);
        browser.wait(EC.elementToBeClickable($('#password')), 10000, 'Wait for #password has failed.');
        element(by.id('password')).click().sendKeys(password);
    };
     /*
     *  Enter company value
     */
    this.enterCompanyValue = function () {
        browser.wait(EC.presenceOf($('#product')), 10000 , 'Wait for enterCompanyValue has failed.');
        browser.executeScript("var company = $('#product').data('kendoDropDownList');company.select(1);company.trigger('change');");
    };
    /*
     *  Enters site value
     */
    this.enterSiteValue = function(siteValueArrayPosition) {
        browser.wait(EC.presenceOf($('#site')), 10000 , 'Wait for enterSiteValue has failed.');
        browser.executeScript("var site = $('#site').data('kendoDropDownList');site.select("+siteValueArrayPosition+");site.trigger('change');");
    };
       /*
     * Enters venue value 
     */
    this.enterVenueValue = function(venueValueArrayPosition) {
        browser.wait(EC.presenceOf($('#venue')), 10000 , 'Wait for enterVenueValue has failed.');
        browser.executeScript("var venue = $('#venue').data('kendoDropDownList');venue.value("+venueValueArrayPosition+");venue.trigger('change');");
    };
    /*
     * Enters product family value 
     */
    this.enterProductFamilyValue = function(productFamilyValueArrayPosition) {
        browser.wait(EC.presenceOf($('#productgroup')), 10000 , 'Wait for enterProductFamilyValue has failed.');
        browser.executeScript("var pf = $('#productgroup').data('kendoDropDownList');pf.value("+productFamilyValueArrayPosition+");pf.trigger('change');");
    };

};
module.exports = new helperFile();

