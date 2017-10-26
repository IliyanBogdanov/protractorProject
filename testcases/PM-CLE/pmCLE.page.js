var helper = require('./../Helpers/Helper.js');
var EC = protractor.ExpectedConditions;

var CLEPage = function(){

    /*
     * Navigate to Violation Categories
     */
    this.navigateToCLE = function() {
        // browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(1) > a > i')), 10000);
        // element(by.css('#sidebar-menu > ul > li:nth-child(1) > a > i')).click();
    };

    this.setSiteValue = function() {
        //Open Site menu
        element(by.className('k-select')).click();
        //Select HTO value
        browser.sleep(1000);
        element(by.css('#filter-site_listbox > li:nth-child(2)')).click();
    };

    this.setProductFamilyValue = function() {
        //Open Product Family Menu
        element(by.css('#aside-filter > div.container.filter-container > div > div > div.productFamilyFilter.form-group.filter-element.col-xs-12.col-sm-3.col-lg-2 > span > span > span')).click();
        //Select ACTEMRA 162 MG TOCILIZUMAB
        var productFamilyValue = element(by.css('#filter-productFamily_listbox > li:nth-child(1)'));
        browser.sleep(1000);
        productFamilyValue.click();
    };

    this.clickOnCLE = function() {
        var self = this;
        browser.wait(EC.elementToBeClickable($('a.change-specifications-limits')), 10000, 'Wait for clickOnCLE has failed.');
        element(by.css('i.fa-line-chart')).click();
    };


    this.saveNewCLE = function() {
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
            var elementBtn = element(by.buttonText('Save Limits to Master Data'));
            browser.wait(EC.elementToBeClickable(elementBtn), 10000);
            //recalculate CL
            browser.executeScript('var data = $("#control-limit-rationale").data("kendoDropDownList");' +
                'data.value(2); data.trigger("change");');
            browser.executeScript('var data = $("#DecimalPoints").data("kendoNumericTextBox");' +
                'data.value(5); data.trigger("change");');
            var elementBtnRecalculate = element(by.buttonText('Recalculate'));
            browser.wait(EC.elementToBeClickable(elementBtnRecalculate), 10000);
            elementBtnRecalculate.click();
            browser.wait(EC.elementToBeClickable(elementBtn), 10000);
            var mrChart = element.all(by.css('#MRChart'));
            expect(mrChart.count()).toEqual(0);
            //Save CL
            elementBtn.click();
            browser.executeScript("var datepicker = $(\"#effective-from\").data(\"kendoDatePicker\");" +
                "datepicker.value(new Date());" +
                "datepicker.trigger(\"change\");");
            var elementSaveBtn = element(by.buttonText('Save'));
            browser.wait(EC.elementToBeClickable(elementSaveBtn), 10000, 'Wait for elementSaveBtn has failed.');
            element(by.buttonText('Save')).click();
            browser.wait(EC.elementToBeClickable(elementBtn), 10000, 'Wait for elementBtn has failed.');
            var toastList = element.all(by.css('.toast-success'));
            expect(toastList.count()).toEqual(1);
        });
    };
};
module.exports = new CLEPage();