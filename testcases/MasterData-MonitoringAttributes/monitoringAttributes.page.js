var helper = require('./../Helpers/Helper.js');
var attributeName = "Test-MonAttr" + helper.createARandomValue();
var EC = protractor.ExpectedConditions;

var monitoringAttributesPage = function() {
    /*
     * Navigates to the module Master Data - Monitoring Attributes
     */
    this.navigateToMonitoringAttributesSection = function() {
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > a > i')), 5000);
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(1) > a')), 5000);
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(1) > a')).click();
    };
    /*
     * Clicks on "Add New Monitoring Attribute" button
     */
    this.clickOnAddMonitoringAttributeButton = function() {
        browser.wait(EC.elementToBeClickable($('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')), 5000);
        element(by.css('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')).click(); 
    };
    /*
     * Enters Site value 
     */
    this.enterSiteValue = function(site) {
        site = (typeof site !== 'undefined') ? site : 2;
        browser.executeScript("var site = $('#site').data('kendoDropDownList');site.value(" + site + ");site.trigger('change');");
    };
    /*
     * Enters Venue value 
     */
    this.enterVenueValue = function(venue) {
        venue = (typeof venue !== 'undefined') ? venue : 1;
        browser.executeScript("var venue = $('#venue').data('kendoDropDownList');venue.value(" + venue + ");venue.trigger('change');");
    };
    /*
     * Enters product family value 
     */
    this.enterPFValue = function(type, value) {
        value = (typeof value !== 'undefined') ? value : 305;
        type = (typeof type !== 'undefined') ? type : 'value';
        if(value === 'value') {
            browser.executeScript("var pf = $('#productgroup').data('kendoDropDownList');pf.value(" + value + ");pf.trigger('change');");
        } else {
            browser.executeScript("var pf = $('#productgroup').data('kendoDropDownList');pf.select(" + value + ");pf.trigger('change');");
        }

    };
    /*
     * Enters an attribute type 
     */
    this.enterAttributeType = function() {
        browser.executeScript("var type = $('#type').data('kendoDropDownList');type.value(1);type.trigger('change');");      
    };
    /*
     * Enters an UoM 
     */
    this.enterUoM = function() {
        browser.executeScript("var UoM = $('#uom').data('kendoDropDownList');UoM.value(7);UoM.trigger('change');");      
    };
    /*
     * Enters name for the monitoring attribute ("Test-MonAttr" + random value)
     */
    this.enterNameForMonitoringAttribute = function(newAttributeName) {
        if (typeof newAttributeName !== 'undefined') {
            attributeName = newAttributeName;
        }
        browser.executeScript("var monAttr = $('#name').data('kendoMaskedTextBox');" +
            "monAttr.value('" + attributeName + "');monAttr.trigger('change');");

        return attributeName;
    };
    /*
     * Enters description for the monitoring attribute
     */
    this.enterDescription = function() {
        browser.wait(EC.presenceOf($('#description')), 5000);
        element(by.id("description")).sendKeys('New Description for KPI attribute');    
    };
    /*
     * Enters MoM for the monitoring attribute
     */
    this.enterMoM = function() {       
        browser.wait(EC.presenceOf($('#mom')), 5000);
        element(by.id("mom")).sendKeys("New Method of Measurement For Test Attribute KPI");   
    };
    /*
     * Enters effective date
     */
    this.enterEffectiveDate = function() {  
        browser.executeScript("var effectiveDate = $('#effective-from').data('kendoDatePicker');effectiveDate.value(new Date(2016, 10, 1));effectiveDate.trigger('change');");   
    };
    /*
     * Enters decimal points 
     */
    this.enterDecimalPoints = function() {       
        browser.executeScript("var decimalPointsInput = $('#decimal-points').data('kendoNumericTextBox');decimalPointsInput.value(10);decimalPointsInput.trigger('change');");
    };
    /*
     * Populates control limit values
     */
    this.populateContrlLimitValues = function() {
        browser.wait(EC.presenceOf($('input[name="LCL"]')), 5000);
        element(by.css('input[name="LCL"]')).sendKeys(10.7);
        browser.wait(EC.presenceOf($('input[name="Center"]')), 5000);
        element(by.css('input[name="Center"]')).sendKeys(11.52);
        browser.wait(EC.presenceOf($('input[name="UCL"]')), 5000);
        element(by.css('input[name="UCL"]')).sendKeys(13.413);
    };
    /*
     * Clicks create button
     */
    this.clickCreateButton = function(text) {
        browser.wait(EC.elementToBeClickable($('a[class="k-button k-button-icontext k-primary k-grid-update"]')), 5000);
        element(by.css('a[class="k-button k-button-icontext k-primary k-grid-update"]')).click();
    };
    /*
     * Clicks button by its button text value
     */
    this.clickNextButton3rdStep = function(text) {
        browser.sleep(1000);
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[3]/div/div[2]/div/button[2]')).click();
    };
    /*
     * Filters table by the respective attribute name column
     */
    this.filterTable = function(numberValue) {
        if (typeof numberValue !== 'undefined') {
            attributeName = numberValue;
        }
        browser.wait(EC.visibilityOf($('#attributes-grid')), 5000);
        browser.executeScript("var product = $('#attributes-grid').data('kendoGrid');" +
            "product.dataSource.filter({field: \"Name\", operator: \"eq\", value: \""+attributeName+"\" });");

    };
};

module.exports = new monitoringAttributesPage();