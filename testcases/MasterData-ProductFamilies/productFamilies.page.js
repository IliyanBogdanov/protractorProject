var helper = require('./../Helpers/Helper.js');
var displayName = 'Test-PF-' + helper.createARandomValue();
var EC = protractor.ExpectedConditions;
var materialNumber = 'test101';

var MDProductFamiliesPage = function () {
    /*
     *  Clicks on "Add New PF" button
     */
    this.clickOnAddPFButton = function () {
        browser.wait(EC.elementToBeClickable($('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')), 5000);
        element(by.css('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')).click();
    };
    /*
     *  Clicks the finish button
     */
    this.clickOnFinishButton = function () {
        browser.wait(EC.elementToBeClickable($('body > div.modal.fade.ng-isolate-scope.modal-warning.remis-modal.in > div > div > form > div.modal-footer-wrapper.msg-footer > div > button')), 5000);
        element(by.css('body > div.modal.fade.ng-isolate-scope.modal-warning.remis-modal.in > div > div > form > div.modal-footer-wrapper.msg-footer > div > button')).click();
    };
    /*
     * Clicks the create button
     */
    this.clickOnCreateButton = function () {
        browser.wait(EC.elementToBeClickable($('body > div.modal.fade.ng-isolate-scope.modal-warning.remis-modal.in > div > div > form > div.row.buttons-row > div > button.k-button.k-primary.waves-effect.waves-primary.ng-binding')), 5000);
        element(by.css('body > div.modal.fade.ng-isolate-scope.modal-warning.remis-modal.in > div > div > form > div.row.buttons-row > div > button.k-button.k-primary.waves-effect.waves-primary.ng-binding')).click();
    };
    /*
     * Clicks the update button
     */
    this.clickOnUpdateButton = function () {
        browser.wait(EC.elementToBeClickable($('body > div.modal.fade.ng-isolate-scope.modal-warning.remis-modal.in > div > div > form > div.row.buttons-row > div > button.k-button.k-primary.waves-effect.waves-primary.ng-binding')), 5000);
        element(by.css('body > div.modal.fade.ng-isolate-scope.modal-warning.remis-modal.in > div > div > form > div.row.buttons-row > div > button.k-button.k-primary.waves-effect.waves-primary.ng-binding')).click();
    };
    /*
     * Clicks the delete button
     */
    this.clickOnDeleteButton = function () {
        browser.wait(EC.elementToBeClickable($('.btn[ng-click="vm.callFunction(vm.successFunction)"]')), 5000);
        element(by.css('.btn[ng-click="vm.callFunction(vm.successFunction)"]')).click();
    };
    /*
     * Clicks add material number button
     */
    this.clickOnAddMaterialNumberButton = function () {
        browser.wait(EC.elementToBeClickable($('#products-grid > div.k-header.k-grid-toolbar.ng-scope > button')), 5000);
        element(by.css('#products-grid > div.k-header.k-grid-toolbar.ng-scope > button')).click();
    };
    /*
     * Clicks add process step button
     */
    this.clickOnAddProcessStepButton = function () {
        browser.wait(EC.elementToBeClickable($('#process-step-grid > div.k-header.k-grid-toolbar.ng-scope > button')), 5000);
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
        browser.wait(EC.visibilityOf($('#product-family-grid')), 5000);
    };
    /*
     * Verifies create
     */
    this.verifyThatRecordIsCreated = function() {
        var list = element.all(by.css('#product-family-grid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(1);
    };
    /*
     * Verifies delete
     */
    this.verifyThatRecordIsDeleted = function() {
        var list = element.all(by.css('#product-family-grid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(0);
    };
    /*
     *  Navigates to MD-PF
     */
    this.navigateMDProductFamilySection = function () {
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > a > i')), 5000);
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(2) > a')), 5000);
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(2) > a')).click();
    };
    /*
     *  Enters site value
     */
    this.enterSiteValue = function() {
        browser.executeScript("var site = $('#site').data('kendoDropDownList');site.select(1);site.trigger('change');");
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
     *  Enters venue value
     */
    this.enterVenueValue = function() {
        browser.executeScript("var venue = $('#venue').data('kendoDropDownList');venue.select(1);venue.trigger('change');");
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
        //element(by.model('vm.productFamilyData.Version')).sendKeys();
        element(by.model('vm.productFamilyData.Version')).sendKeys(displayName);
        return displayName;
    };
    /*
     *  Enters material number value
     */
    this.enterMaterialNumberValue = function() {
        browser.executeScript("var cm = $('.k-numerictextbox > .k-numeric-wrap > input.k-formatted-value');" +
            "cm.css('display', 'inline-block')");
        browser.wait(EC.presenceOf($('.k-numerictextbox > .k-numeric-wrap > input.k-formatted-value')), 5000);
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
        browser.wait(EC.presenceOf($('.k-grid-edit-row > .k-edit-cell > input.k-textbox')), 5000);
        element(by.css('.k-grid-edit-row > .k-edit-cell > input.k-textbox')).sendKeys('PS1');
        browser.executeScript("var cm = $('.k-grid-edit-row > .k-edit-cell > input.k-textbox');" +
            "cm.css('display', 'none')");
    };

}

module.exports = new MDProductFamiliesPage();