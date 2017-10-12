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
    this.clickCreateButton = function (selector) {
        element(by.buttonText('Create')).click();
    };
    /*
     * Click the finish button
     */
    this.clickFinishButton = function (selector) {
        element(by.buttonText('Finish')).click();
    };

    /*
     * Verify create
     */
    this.filterTable = function() {
        browser.executeScript("var product = $('#hto-grid-liquid').data('kendoGrid');" +
            "product.dataSource.filter({field: \"General_LotNumber\", operator: \"eq\", value: \""+inspectionLotNumber+"\" });");
    };

    this.verifyThatRecordIsCreated = function() {
        var list = element.all(by.css('#hto-grid-liquid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(1);
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
    this.enterTotalVials = function () {
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
    this.enterInspectionLotNumber = function () {
        browser.executeScript("var iln = $('#genentech-lot-number').data('kendoMaskedTextBox');" +
            "iln.value('" + inspectionLotNumber + "');iln.trigger('change');");
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
        //browser.executeScript("var inspection = $('#Inspection1st');inspection.prop('checked', true);inspection.click();");
        element(by.model('vm.htoDataLiquid.General_Inspection')).click();
    };

    /*
     STEP ENTER VIOLATIONS
     */

    this.addVials = function () {
        browser.executeScript('$("input[kendo-numeric-text-box]").each(function( index ) {var data = $(this).data("kendoNumericTextBox"); data.value(2); data.trigger("change");})');
    }
};

module.exports = new ideLiquidPage();