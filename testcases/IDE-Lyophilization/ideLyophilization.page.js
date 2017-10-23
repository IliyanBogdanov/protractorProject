var helper = require('./../Helpers/Helper.js');
var inspectionLotNumber = "Test-Lyophilization-" + helper.createARandomValue();
var EC = protractor.ExpectedConditions;
var totalVials = 10;

var ideLyophilizationPage = function () {

    /*
     * Verify create
     */
    this.filterTable = function(numberValue) {
        if (typeof numberValue !== 'undefined') {
            inspectionLotNumber = numberValue;
        }
        browser.executeScript("var product = $('#hto-grid-lyophilization').data('kendoGrid');" +
            "product.dataSource.filter({field: \"Lot_Number\", operator: \"eq\", value: \""+inspectionLotNumber+"\" });");
            browser.wait(EC.visibilityOf($('#hto-grid-lyophilization')), 10000,'#hto-grid-lyophilization wait has failed.');    
    };
    /*
     *  Navigate to IDE-Lyophilization
     */
    this.navigateToIDELyophilizationSection = function () {
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(4) > a > i')), 10000,'Main menu wait for element has failed.');
        element(by.css('#sidebar-menu > ul > li:nth-child(4) > a > i')).click();
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(4) > ul > li:nth-child(2) > a')), 10000, 'Main menu wait for element has failed.');
        element(by.css('#sidebar-menu > ul > li:nth-child(4) > ul > li:nth-child(2) > a')).click();
    };
    /*
     STEP ONE
     */

    /*
     *  Click on "Add New IDE" button
     */
    this.clickOnAddIDEButton = function () {
        browser.wait(EC.elementToBeClickable($('a.btn[href="/hto/create/Lyophilization"]')), 10000, 'Wait for IDE button has failed.');
        element(by.css('a.btn[href="/hto/create/Lyophilization"]')).click();
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
        browser.wait(EC.visibilityOf($('#genentech-lot-number')), 10000, 'Wait for InspectionLotNumber has failed.');
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
        element(by.model('vm.htoDataLyophilization.General_Inspection')).click();
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
    };

};

module.exports = new ideLyophilizationPage();