var helper = require('./../Helpers/Helper.js');
var runNumber = 'BDE-'+ helper.createARandomValue();
var lotNumber = 'Lot'+ helper.createARandomValue();
var EC = protractor.ExpectedConditions;

var bdePage = function() {
    /*
     * Open BDE module
     */
    this.navigateToBDESection = function() {
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(3) > a > i')), 5000);
        element(by.css('#sidebar-menu > ul > li:nth-child(3) > a > i')).click();
        browser.wait(EC.elementToBeClickable($('#wrapper > div > div > main > div.content > ui-view > ui-view > div > div.page-container > div > div.panel-heading > div.header-right-panel.pull-right > div > button')), 5000);
    };
    /*
     * Click the add new button
     */
    this.addNewBDEbuttonClick = function() {
        browser.wait(EC.elementToBeClickable($('#wrapper > div > div > main > div.content > ui-view > ui-view > div > div.page-container > div > div.panel-heading > div.header-right-panel.pull-right > div > button')), 5000);
        element(by.css('#wrapper > div > div > main > div.content > ui-view > ui-view > div > div.page-container > div > div.panel-heading > div.header-right-panel.pull-right > div > button')).click();
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
        var runNumberInput = element(by.model('vm.dataEntryData.RunNumber'));
        browser.wait(EC.elementToBeClickable(runNumberInput), 10000, 'Wait for runNumberInput has failed.');
        runNumberInput.sendKeys(runNumber);
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
        element(by.model('vm.dataEntryData.BatchNumber')).sendKeys(lotNumber);
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
     * Populate the parameter values on the second step of the wizard
     */
    this.populateParameterValues = function() {
        browser.wait(EC.presenceOf($('input[kendo-bgo-numeric-text-box]')), 5000), 'Parameters input box wait has failed';
        browser.executeScript("var param =$('input[kendo-bgo-numeric-text-box]'); param.css('display', 'block');");
        element.all(by.css('input[kendo-bgo-numeric-text-box]')).each(function(element, index) {
            // Will print 0 First, 1 Second, 2 Third.
        browser.wait(EC.presenceOf(element, 5000, 'Parameters input box wait has failed'));    
            element.sendKeys(10);
        });
        browser.wait(EC.presenceOf($('input[kendo-bgo-numeric-text-box]')), 5000, 'Parameters input box wait has failed');
        browser.executeScript("var param =$('input[kendo-bgo-numeric-text-box]'); param.css('display', 'none');");
    };
    /*
     * Filter table by the newly created record
     */
    this.filterTableBDE = function(numberValueBDE) {
        if (typeof numberValueBDE !== 'undefined') {
            runNumber = numberValueBDE;
        }
        browser.wait(EC.visibilityOf($('#dataEntry-grid')), 5000);
        browser.executeScript("var bdeGrid = $('#dataEntry-grid').data('kendoGrid');" +
        "bdeGrid.dataSource.filter({field: \"RunNumber\", operator: \"eq\", value: \""+runNumber+"\" });");

    };

};

module.exports = new bdePage();