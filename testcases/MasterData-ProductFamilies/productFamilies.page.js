var BGO = require('./../BGOFile/BGO.js').init();
var displayName = 'Test-PF-' + BGO.utils.random();
var materialNumber = 'test101';
MDProductFamiliesPage = function () {
    /*
     *  Click on "Add New PF" button
     */
    this.clickOnAddPFButton = function () {

        element(by.css('.btn[ng-click="vm.openEditModal()"]')).click();
    };
    /*
         * Click the create button
         */
    this.clickButtonByText = function (text) {
        element(by.buttonText(text)).click();
    };

    /*
     * Click the edit IDE button
     */
    this.clickEditButton = function (selector) {
        element(by.css('.' + selector)).click();
    };
    /*
     * Verify create
     */
    this.filterTable = function(numberValue) {
        if (typeof numberValue !== 'undefined') {
            inspectionLotNumber = numberValue;
        }
        browser.executeScript("var product = $('#product-family-grid').data('kendoGrid');" +
            "product.dataSource.filter({field: \"Version\", operator: \"eq\", value: \""+displayName+"\" });");
    };
    this.verifyThatRecordIsCreated = function() {
        var list = element.all(by.css('#product-family-grid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(1);
    };

    this.verifyThatRecordIsDeleted = function() {
        var list = element.all(by.css('#product-family-grid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(0);
    };

    /*
     *  Navigate to MD-PF
     */
    this.navigateMDProductFamilySection = function () {
        element(by.css('.icon-menu-masterdata')).click();
        element(by.css('a[ui-sref="productfamily.monitoring"]')).click();
    };


    this.enterSiteValue = function() {
        browser.executeScript("var site = $('#site').data('kendoDropDownList');site.select(1);site.trigger('change');");
    };

    this.enterConfigDossageValue = function() {
        browser.executeScript("var af = $('#administration-form').data('kendoDropDownList');" +
            "if(typeof af !== 'undefined'){af.select(1);af.trigger('change');}");
        browser.executeScript("var af = $('#dosage').data('kendoDropDownList');" +
            "if(typeof af !== 'undefined'){ af.select(1);af.trigger('change'); }");
    };

    this.enterVenueValue = function() {
        browser.executeScript("var venue = $('#venue').data('kendoDropDownList');venue.select(1);venue.trigger('change');");
    };

    this.enterCommercialProductValue = function() {
        browser.executeScript("var cm = $('#commercial-product').data('kendoDropDownList');cm.select(1);cm.trigger('change');");
    };

    this.enterVersionValue = function() {
        element(by.model('vm.productFamilyData.Version')).sendKeys(displayName);
        return displayName;
    };

    this.enterMaterialNumberValue = function() {
        browser.executeScript("var cm = $('.k-numerictextbox > .k-numeric-wrap > input.k-formatted-value');" +
            "cm.css('display', 'inline-block')");
        element(by.css('.k-numerictextbox > .k-numeric-wrap > input.k-formatted-value'))
            .sendKeys(1);
        browser.executeScript("var cm = $('.k-numerictextbox > .k-numeric-wrap > input.k-formatted-value');" +
            "cm.css('display', 'none')");
    };


    this.enterProcessStepValue = function() {
        browser.executeScript("var cm = $('.k-grid-edit-row > .k-edit-cell > input.k-textbox');" +
            "cm.css('display', 'inline-block')");
        element(by.css('.k-grid-edit-row > .k-edit-cell > input.k-textbox'))
            .sendKeys('PS1');
        browser.executeScript("var cm = $('.k-grid-edit-row > .k-edit-cell > input.k-textbox');" +
            "cm.css('display', 'none')");
    };

}

module.exports = new MDProductFamiliesPage();