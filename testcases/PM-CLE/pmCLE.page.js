var helper = require('./../Helpers/Helper.js');
var EC = protractor.ExpectedConditions;

var CLEPage = function(){
    /*
     * Clicks on the CLE button and opens the CLE module
     */
    this.clickOnCLE = function() {
        browser.wait(EC.elementToBeClickable($('a.change-specifications-limits')), 10000, 'Wait for clickOnCLE has failed.');
        element(by.css('i.fa-line-chart')).click();
    };
    /*
     * Recalculates and saves the CLE input
     */
    this.saveNewCLE = function() {
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
            var elementBtn = element(by.buttonText('Save Limits to Master Data'));
            browser.wait(EC.elementToBeClickable(elementBtn), 10000, 'Wait for elementBtn has failed.');
            //recalculate CL
            browser.executeScript('var data = $("#control-limit-rationale").data("kendoDropDownList");' +
                'data.value(2); data.trigger("change");');
            browser.executeScript('var data = $("#DecimalPoints").data("kendoNumericTextBox");' +
                'data.value(5); data.trigger("change");');
            var elementBtnRecalculate = element(by.buttonText('Recalculate'));
            browser.wait(EC.elementToBeClickable(elementBtnRecalculate), 10000, 'Wait for elementBtnRecalculate has failed.');
            elementBtnRecalculate.click();
            browser.wait(EC.elementToBeClickable(elementBtn), 10000, 'Wait for elementBtn has failed.');
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