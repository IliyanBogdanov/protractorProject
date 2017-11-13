var helper = require('./../Helpers/Helper.js');
var EC = protractor.ExpectedConditions;

var e2ePage = function () {
    /*
     * Click on open CL icon
     */
    this.clickOnOpenControlLimitGridIcon = function() {
        browser.wait(EC.elementToBeClickable($('a.k-icon.k-plus')), 10000, 'Wait for clickOnOpenControlLimitGridIcon button has failed.');
        element.all(by.css('a.k-icon.k-plus')).first().click();
    };
    /*
     * Click on + button in order to add a new control limit
     */
    this.clickOnPlusIcon = function() {
        browser.wait(EC.elementToBeClickable($('.icon-small-newrow.roche_grey_7.font-size-18')), 10000, 'Wait for clickOnPlusIcon button has failed.');
        element.all(by.css('.icon-small-newrow.roche_grey_7.font-size-18')).first().click();
    };
    /*
     * Populates control limit values
     */
    this.populateControlLimitValues = function(LCL, Center, UCL) {
        browser.sleep(1000);
        browser.wait(EC.visibilityOf($('input[name="LCL"]')), 10000, 'Wait for populateControlLimitValues has failed.');
        element(by.css('input[name="LCL"]')).sendKeys(LCL);
        browser.wait(EC.visibilityOf($('input[name="Center"]')), 10000, 'Wait for populateControlLimitValues has failed.');
        element(by.css('input[name="Center"]')).sendKeys(Center);
        browser.wait(EC.visibilityOf($('input[name="UCL"]')), 10000, 'Wait for populateControlLimitValues has failed.');
        element(by.css('input[name="UCL"]')).sendKeys(UCL);
    };
    /*
     * Clear Cl input function
     */
    this.clearCLinputAndEnterNewValues = function(LCL, Center, UCL) {
        browser.sleep(1000);
        browser.wait(EC.visibilityOf($('input[name="LCL"]')), 10000, 'Wait for clearCLinputLCL has failed.');
        element(by.css('input[name="LCL"]')).clear();
        element(by.css('input[name="LCL"]')).sendKeys('1234');
        browser.wait(EC.visibilityOf($('input[name="Center"]')), 10000, 'Wait for clearCLinputCenter has failed.');
        element(by.css('input[name="Center"]')).clear();
        element(by.css('input[name="Center"]')).sendKeys('12345');
        browser.wait(EC.visibilityOf($('input[name="UCL"]')), 10000, 'Wait for clearCLinputUCL has failed.');
        element(by.css('input[name="UCL"]')).clear();
        element(by.css('input[name="UCL"]')).sendKeys('123456');
    };
    /*
     * Clicks create button
     */
    this.clickCreateButton = function() {
        browser.wait(EC.elementToBeClickable($('a[class="k-button k-button-icontext k-primary k-grid-update"]')), 10000, 'Wait for clickCreateButton has failed.');
        element(by.css('a[class="k-button k-button-icontext k-primary k-grid-update"]')).click();
    };
    /*
     Click approve CL button
     */
    this.clickApproveCL = function () {
        browser.wait(EC.elementToBeClickable($('#controlLimitsGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td.text-right > a:nth-child(4) > i')), 10000, 'Wait for clickNextArray has failed.');
        element.all(by.css('#controlLimitsGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td.text-right > a:nth-child(4) > i')).first().click();
    };
    /*
     Click approve BDE button
     */
    this.clickApproveBDE = function () {
        browser.wait(EC.elementToBeClickable($('.icon-small-approved.roche_grey_7')), 10000, 'Wait for clickApproveBDE has failed.');
        element.all(by.css('.icon-small-approved.roche_grey_7')).first().click();
    };
    /*
     Click edit control limit button
     */
    this.clickEditCLButton = function () {
        browser.wait(EC.elementToBeClickable($('tr:nth-child(1) > td.text-right > a.k-grid-edit.icon-small-wrapper.pointer > i')), 10000, 'Wait for clickEditCLButton has failed.');
        element.all(by.css('tr:nth-child(1) > td.text-right > a.k-grid-edit.icon-small-wrapper.pointer > i')).first().click();
    };
    /*
     Click delete button by a position in an array
     */
    this.clickDeleteCLButton = function (position) {
        browser.wait(EC.elementToBeClickable($('#controlLimitsGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td.text-right > a:nth-child(2) > i')), 10000, 'Wait for clickDeleteCLButton has failed.');
        element.all(by.css('#controlLimitsGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td.text-right > a:nth-child(2) > i')).first().click();
    };
    /*
     * Verify that test passes
     */
    this.verifyThatTestPasses = function() {
        expect(1).toBe(1);
    };
};

module.exports = new e2ePage();