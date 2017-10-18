var BGO = require('./../BGOFile/BGO.js').init();
var inspectionLotNumber = "Test-Liquid-" + BGO.utils.random();
var totalVials = 10;
var ideLiquidPage;
ideLiquidPage = function () {
    /*
     * Click the next button
     */
    this.clickNextButton = function (selector) {
        element(by.css('button[wz-next="' + selector + '"]')).click();
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
        browser.sleep(1000);
        element(by.css('.' + selector)).click();
    };
    /*
     * Verify create
     */
    this.filterTable = function(numberValue) {
        if (typeof numberValue !== 'undefined') {
            inspectionLotNumber = numberValue;
        }
        browser.executeScript("var product = $('#hto-grid-liquid').data('kendoGrid');" +
            "product.dataSource.filter({field: \"General_LotNumber\", operator: \"eq\", value: \""+inspectionLotNumber+"\" });");
    };
    this.verifyThatRecordIsCreated = function() {
        var list = element.all(by.css('#hto-grid-liquid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(1);
    };

    this.verifyThatRecordIsDeleted = function() {
        var list = element.all(by.css('#hto-grid-liquid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(0);
    };

    /*
     *  Navigate to IDE-Liquid
     */
    this.navigateToIDELiquidSection = function () {
        element(by.css('#sidebar-menu > ul > li:nth-child(4) > a > i')).click();
        element(by.css('#sidebar-menu > ul > li:nth-child(4) > ul > li:nth-child(1) > a')).click();
    };

    /*
     STEP ONE
     */

    /*
     *  Click on "Add New IDE" button
     */
    this.clickOnAddIDEButton = function () {

        element(by.css('a.btn[href="/hto/create/Liquid"]')).click();
    };
    /*
     *  Select Product
     */
    this.enterCompanyValue = function () {
        browser.executeScript("var product = $('#product').data('kendoDropDownList');" +
            "product.select(1);product.trigger('change');");
    };
    /*
     *  Set Total Vials
     */
    this.enterTotalVials = function (vials) {
        if (typeof vials !== 'undefined') {
            totalVials = vials;
        }
        browser.executeScript("var vials = $('#total-number-of-vials').data('kendoNumericTextBox');" +
            "vials.value(" + totalVials + ");vials.trigger('change');");
    };
    /*
     *  Select Facility
     */
    this.enterFacilityValue = function () {
        browser.executeScript("var facility = $('#facility-fill-line').data('kendoDropDownList');" +
            "facility.select(1);facility.trigger('change');");
    };
    /*
     *  Select Action Limit Exceeded
     */
    this.enterALEValue = function () {
        browser.executeScript("var ale = $('#action-limit-exceeded').data('kendoDropDownList');" +
            "ale.select(1);ale.trigger('change');");
    };
    /*
     *  Select Inspection Start Date
     */
    this.enterInspectionStartDate = function () {
        var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
        browser.executeScript("var isd = $('#sap-start-date').data('kendoDatePicker');" +
            "isd.value(new Date(new Date().setDate(new Date().getDate()-1)));isd.trigger('change');");
    };
    /*
     *  Set Inspection Lot Number
     */
    this.enterInspectionLotNumber = function (newLotNumber) {
        if (typeof newLotNumber !== 'undefined') {
            inspectionLotNumber = newLotNumber;
        }
        browser.executeScript("var iln = $('#genentech-lot-number').data('kendoMaskedTextBox');" +
            "iln.value('" + inspectionLotNumber + "');iln.trigger('change');");

        return inspectionLotNumber;
    };
    /*
     *  Set Comments
     */
    this.enterComments = function () {
        browser.executeScript("var comments = $('#comments').data('kendoMaskedTextBox');" +
            "comments.value('New comment QA');comments.trigger('change');");
    };
    /*
     *  Set Inspection
     */
    this.enterInspection = function () {
        element(by.model('vm.htoDataLiquid.General_Inspection')).click();
    };

    /*
     STEP ENTER VIOLATIONS
     */

    this.addVials = function (value) {
        if (typeof value === 'undefined') {
            value = 2;
        }
        // value.id !== 'total-number-of-vials' &&
        // value.id !== 'genentech-lot-number'
        browser.executeScript('$("input[kendo-numeric-text-box]").each(function( index ) {' +
            'if ($(this).attr("id") !== "total-number-of-vials" && $(this).attr("id") !== "genentech-lot-number") {' +
            'var data = $(this).data("kendoNumericTextBox"); ' +
            'data.value('+ value +'); data.trigger("change");' +
            '}' +
            '})');
    }


};

module.exports = new ideLiquidPage();