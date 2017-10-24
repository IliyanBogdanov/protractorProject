var helper = require('./../Helpers/Helper.js');
var attributeName = "Test-MonAttr" + helper.createARandomValue();
var EC = protractor.ExpectedConditions;

var monitoringAttributesPage = function() {
    /*
     * Navigates to the module Master Data - Monitoring Attributes
     */
    this.navigateToMonitoringAttributesSection = function() {
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > a > i')), 10000, 'Wait for navigateToMonitoringAttributesSection has failed.');
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
        browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(1) > a')), 10000, 'Wait for navigateToMonitoringAttributesSection has failed.');
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(1) > a')).click();
    };
    /*
     * Clicks on "Add New Monitoring Attribute" button
     */
    this.clickOnAddMonitoringAttributeButton = function() {
        browser.wait(EC.elementToBeClickable($('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')), 10000);
        element(by.css('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')).click(); 
    };
    /*
     * Enters Site value 
     */
    this.enterSiteValue = function() {
        browser.executeScript("var site = $('#site').data('kendoDropDownList');site.value(2);site.trigger('change');");
    };
    /*
     * Enters Venue value 
     */
    this.enterVenueValue = function() {
        browser.executeScript("var venue = $('#venue').data('kendoDropDownList');venue.value(1);venue.trigger('change');");   
    };
    /*
     * Enters product family value 
     */
    this.enterPFValue = function() { 
        browser.executeScript("var pf = $('#productgroup').data('kendoDropDownList');pf.value(305);pf.trigger('change');");
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
        browser.wait(EC.presenceOf($('#description')), 10000, 'Wait for enterDescription has failed.');
        element(by.id("description")).sendKeys('New Description for KPI attribute');    
    };
    /*
     * Enters MoM for the monitoring attribute
     */
    this.enterMoM = function() {       
        browser.wait(EC.presenceOf($('#mom')), 10000, 'Wait for enterMoM has failed.');
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
        browser.wait(EC.presenceOf($('input[name="LCL"]')), 10000, 'Wait for populateContrlLimitValues has failed.');
        element(by.css('input[name="LCL"]')).sendKeys(10.7);
        browser.wait(EC.presenceOf($('input[name="Center"]')), 10000, 'Wait for populateContrlLimitValues has failed.');
        element(by.css('input[name="Center"]')).sendKeys(11.52);
        browser.wait(EC.presenceOf($('input[name="UCL"]')), 10000, 'Wait for populateContrlLimitValues has failed.');
        element(by.css('input[name="UCL"]')).sendKeys(13.413);
    };
    /*
     * Clicks create button
     */
    this.clickCreateButton = function(text) {
        browser.wait(EC.elementToBeClickable($('a[class="k-button k-button-icontext k-primary k-grid-update"]')), 10000, 'Wait for clickCreateButton has failed.');
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
        browser.executeScript("var product = $('#attributes-grid').data('kendoGrid');" +
            "product.dataSource.filter({field: \"Name\", operator: \"eq\", value: \""+attributeName+"\" });");
        browser.wait(EC.visibilityOf($('#attributes-grid')), 10000, 'Wait for filterTable has failed.');       
    };
};

module.exports = new monitoringAttributesPage();