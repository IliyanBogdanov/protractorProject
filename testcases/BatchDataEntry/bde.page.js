var BGO = require('./../BGOFile/BGO.js').init();
var runNumber = 'BDE-'+ BGO.utils.random();

var bdePage = function(){
    /*
     * Open BDE module
     */
    this.openBDEpage = function() {
        browser.sleep(1000);
        element(by.css('a[ui-sref="dataEntry.home"]')).click();
        element(by.css('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary')).click();
    };
    /*
     * Click the add new button
     */
    this.addNewBDEbuttonClick = function() {
        element(by.css('button[ng-click="vm.openEditModal()"]')).click();
    };
    /*
     * Select a site
     */
    this.siteDropDownSelectRSTO = function() {         
        browser.executeScript("var site = $('#site').data('kendoDropDownList');site.select(1);site.trigger('change');");
    };
    /*
     * Select a venue
     */
    this.selectVenueB10 = function() {         
        browser.executeScript("var venue = $('#venue').data('kendoDropDownList');venue.select(1);venue.trigger('change');");
    };
    /*
     * Select a product family
     */
    this.productFamilyDropDownSelect = function() {
        browser.executeScript("var productFamily = $('#productFamily').data('kendoDropDownList');productFamily.select(1);productFamily.trigger('change');");
    }; 
    /*
     * Select a material number
     */
    this.materialNumberDropDownSelect = function() {
        browser.executeScript("var product = $('#product').data('kendoDropDownList');product.select(1);product.trigger('change');");
    }; 
    /*
     * Enter run number
     */
    this.runNumberEnterTextInput = function(newRunNumber) {
        if (typeof newRunNumber !== 'undefined') {
            runNumber = newRunNumber;
        }
        element(by.model('vm.dataEntryData.RunNumber')).sendKeys(runNumber);
        return runNumber;
    };
    /*
     * Clear run number input field 
     */
    this.clearRunNumberInput = function(newRunNumber) {
        element(by.model('vm.dataEntryData.RunNumber')).clear();
    };
    

    /*
     * Enter campaign name
     */
    this.campaignNameTextInput = function() {
        var orderNumber = element(by.model('vm.dataEntryData.CampaignName')).sendKeys('My New Campaign');
    };
    /*
     * Enter lot number 
     */
    this.lotNumberEnterTextInput = function() {
        element(by.model('vm.dataEntryData.BatchNumber')).sendKeys('Lot3123123124');
    }; 
    /*
     * Enter run start date
     */
    this.runStartDateEntry = function() {
        browser.executeScript("var runStartTime = $('#runStartTime').data('kendoDatePicker');runStartTime.value(new Date(2017, 1, 1));runStartTime.trigger('change');");
    };
    /*
     * Enter run end date
     */
    this.runEndDateEntry = function() {
        browser.executeScript("var runEndTime = $('#runEndTime').data('kendoDatePicker');runEndTime.value(new Date(2017, 2, 2));runEndTime.trigger('change');");
    };
    /*
     * Enter twaw ID value
     */
    this.thawIDTextInput = function() {
        element(by.model('vm.dataEntryData.ThawID')).sendKeys('17264871246ThawID');
    };
    /*
     * Enter thaw ID date
     */
    this.thawIDDateEntry = function() {
        browser.executeScript("var thawDate = $('#thawDate').data('kendoDatePicker');thawDate.value(new Date(2017, 3, 3));thawDate.trigger('change');");
    };
    /*
     * Enter harvest date
     */
    this.harvestDateEntry = function() {
        browser.executeScript("var harvestDate = $('#harvestDate').data('kendoDatePicker');harvestDate.value(new Date(2017, 4, 4));harvestDate.trigger('change');");
    };
    /*
     * Click next button
     */
    this.clickNextButton = function (selector) {
        element(by.css('button[wz-next="' + selector + '"]')).click();
    };
    /*
     * Populate the parameter values on the second step of the wizard
     */
    this.populateParameterValues = function() {
        browser.executeScript("var param =$('input[kendo-bgo-numeric-text-box]'); param.css('display', 'block');");
        element.all(by.css('input[kendo-bgo-numeric-text-box]')).each(function(element, index) {
            // Will print 0 First, 1 Second, 2 Third.
            element.sendKeys(10);
        });
        browser.executeScript("var param =$('input[kendo-bgo-numeric-text-box]'); param.css('display', 'none');");
    };
    /*
     * Click create button 
     */
    this.createButtonClick = function() {
        browser.sleep(1000);
        element(by.buttonText('Create')).click();
        browser.sleep(1000);
    };
    /*
     * Click the edit BDE button
     */
    this.clickEditButton = function (selector) {
        element(by.css('.' + selector)).click();
    };
    /*
     * Click button by its text value
     */
    this.clickButtonByText = function (text) {
        browser.sleep(1000);
        element(by.buttonText(text)).click();
    };
    /*
     * Filter table by the newly created record
     */
    this.filterTableBDE = function(numberValueBDE) {
        if (typeof numberValueBDE !== 'undefined') {
            runNumber = numberValueBDE;
        }
        browser.executeScript("var bdeGrid = $('#dataEntry-grid').data('kendoGrid');" +
            "bdeGrid.dataSource.filter({field: \"RunNumber\", operator: \"eq\", value: \""+runNumber+"\" });");
    };
    /*
     * Verify that the record is created
     */
    this.verifyThatRecordIsCreated = function() {
        var list = element.all(by.css('#dataEntry-grid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(1);
    };
    /*
     * Verify that the record is deleted
     */
    this.verifyThatRecordIsDeleted = function() {
        var list = element.all(by.css('#dataEntry-grid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(0);
    };

};

module.exports = new bdePage();