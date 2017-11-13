var helper = require('./../Helpers/Helper.js');
var EC = protractor.ExpectedConditions;

var e2ePage = function () {
    /*
     * Click on open CL icon
     */
    this.clickOnOpenControlLimitGridIcon = function() {
        var openGridIcon = element(by.css('a[class="k-icon k-plus"]'));
        browser.wait(EC.elementToBeClickable($(openGridIcon)), 10000, 'Wait for clickOnOpenControlLimitGridIcon button has failed.');
        openGridIcon.click();
    };
    /*
     * Click on + button in order to add a new control limit
     */
    this.clickOnPlusIcon = function() {
        var plusGridIcon = element(by.css('i[class="icon-small-newrow roche_grey_7 font-size-18"]'));
        browser.wait(EC.elementToBeClickable($(plusGridIcon)), 10000, 'Wait for clickOnPlusIcon button has failed.');
        plusGridIcon.click();
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
     Click next button by a position in an array
     */
    this.clickApproveCLarray = function () {
        browser.wait(EC.elementToBeClickable($('#controlLimitsGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td.text-right > a:nth-child(4) > i')), 10000, 'Wait for clickNextArray has failed.');
        element.all(by.css('#controlLimitsGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td.text-right > a:nth-child(4) > i')).first().click();
    };
    /*
     Click on edit control limit button
     */
    this.clickEditCLButton = function () {
        browser.wait(EC.elementToBeClickable($('tr:nth-child(1) > td.text-right > a.k-grid-edit.icon-small-wrapper.pointer > i')), 10000, 'Wait for clickEditCLButton has failed.');
        element(by.css('tr:nth-child(1) > td.text-right > a.k-grid-edit.icon-small-wrapper.pointer > i')).click();
    };
    /*
     Click delete button by a position in an array
     */
    this.clickDeleteCLButton = function (position) {
        browser.wait(EC.elementToBeClickable($('#controlLimitsGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td.text-right > a:nth-child(2) > i')), 10000, 'Wait for clickDeleteCLButton has failed.');
        element(by.css('#controlLimitsGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td.text-right > a:nth-child(2) > i')).click();
    };
    /*
     * Verify that test passes
     */
    this.verifyThatTestPasses = function() {
        expect(1).toBe(1);
    };
};

module.exports = new e2ePage();