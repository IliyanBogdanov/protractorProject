var helperFile = require('./../Helpers/Helper.js');
var displayName = helperFile.createARandomValue();
var EC = protractor.ExpectedConditions;

var MDProductFamiliesPage = function () {
    /*
     *  Clicks on "Add New PF" button
     */
    this.clickOnAddPFButton = function () {
        browser.wait(EC.elementToBeClickable($('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')), 10000, 'Wait for clickOnAddPFButton has failed.');
        element(by.css('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')).click();
    };
    /*
     * Clicks add material number button
     */
    this.clickOnAddMaterialNumberButton = function () {
        browser.wait(EC.elementToBeClickable($('#products-grid > div.k-header.k-grid-toolbar.ng-scope > button')), 10000, 'Wait for clickOnAddMaterialNumberButton has failed.');
        element(by.css('#products-grid > div.k-header.k-grid-toolbar.ng-scope > button')).click();
    };
    /*
     * Clicks add process step button
     */
    this.clickOnAddProcessStepButton = function () {
        browser.wait(EC.elementToBeClickable($('#process-step-grid > div.k-header.k-grid-toolbar.ng-scope > button')), 10000, 'Wait for clickOnAddProcessStepButton has failed.');
        element(by.css('#process-step-grid > div.k-header.k-grid-toolbar.ng-scope > button')).click();
    };
 
    /*
     * Filters table
     */
    this.filterTable = function(numberValue) {
        if (typeof numberValue !== 'undefined') {
            inspectionLotNumber = numberValue;
        }
        browser.executeScript("var product = $('#product-family-grid').data('kendoGrid');" +
            "product.dataSource.filter({field: \"Version\", operator: \"eq\", value: \""+displayName+"\" });");
        browser.wait(EC.visibilityOf($('#product-family-grid')), 10000, 'Wait for filterTable has failed.');
    };
    /*
     *  Navigates to MD-PF
     */
    this.navigateMDProductFamilySection = function () {
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > a > i')), 10000, 'Wait for navigateMDProductFamilySection has failed.');
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(2) > a')), 10000, 'Wait for navigateMDProductFamilySection has failed.');
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(2) > a')).click();
    };
    /*
     *  Enters config dosage value
     */
    this.enterConfigDossageValue = function() {
        browser.executeScript("var af = $('#administration-form').data('kendoDropDownList');" +
            "if(typeof af !== 'undefined'){af.select(1);af.trigger('change');}");
        browser.executeScript("var af = $('#dosage').data('kendoDropDownList');" +
            "if(typeof af !== 'undefined'){ af.select(1);af.trigger('change'); }");
    };
    /*
     *  Enters commercial product value
     */
    this.enterCommercialProductValue = function() {
        browser.executeScript("var cm = $('#commercial-product').data('kendoDropDownList');cm.select(1);cm.trigger('change');");
    };
    /*
     *  Enters version value
     */
    this.enterVersionValue = function(newName) {
        if(typeof newName !== 'undefined') {
            displayName = newName
        }
        browser.executeScript("$('input[ng-model=\"vm.productFamilyData.Version\"').val('');");
        element(by.model('vm.productFamilyData.Version')).sendKeys(displayName);
        return displayName;
        console.log(displayName);
    };
    /*
     *  Enters material number value
     */
    this.enterMaterialNumberValue = function() {
        browser.executeScript("var cm = $('.k-numerictextbox > .k-numeric-wrap > input.k-formatted-value');" +
            "cm.css('display', 'inline-block')");
        browser.wait(EC.presenceOf($('.k-numerictextbox > .k-numeric-wrap > input.k-formatted-value')), 10000, 'Wait for enterMaterialNumberValue has failed.');
        element(by.css('.k-numerictextbox > .k-numeric-wrap > input.k-formatted-value')).sendKeys(1);
        browser.executeScript("var cm = $('.k-numerictextbox > .k-numeric-wrap > input.k-formatted-value');" +
            "cm.css('display', 'none')");
    };
    /*
     *  Enters process step value
     */
    this.enterProcessStepValue = function() {
        browser.executeScript("var cm = $('.k-grid-edit-row > .k-edit-cell > input.k-textbox');" +
            "cm.css('display', 'inline-block')");
        browser.wait(EC.presenceOf($('.k-grid-edit-row > .k-edit-cell > input.k-textbox')), 10000, 'Wait for enterProcessStepValue has failed.');
        element(by.css('.k-grid-edit-row > .k-edit-cell > input.k-textbox')).sendKeys('PS1');
        browser.executeScript("var cm = $('.k-grid-edit-row > .k-edit-cell > input.k-textbox');" +
            "cm.css('display', 'none')");
    };

}

module.exports = new MDProductFamiliesPage();