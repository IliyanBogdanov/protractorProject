var BGO = require('./../BGOFile/BGO.js').init();
var attributeName = "Test-MonAttr" + BGO.utils.random();

var monitoringAttributesPage = function(){
    
    this.navigateToMonitoringAttributesSection = function() {
        browser.sleep(1000);
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(1) > a')).click();
    };

    this.clickOnClearButton = function() {
        //Click on the Clear button
        element(by.css('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary')).click();
    };

    this.clickOnAddMonitoringAttributeButton = function() {
        //Click on "Add New Monitoring Attribute" button
        element(by.css('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')).click(); 

    };

    // this.enterCompanyValue = function() {
    //     //Enter Company value 
    //     browser.executeScript("var company = $('#company').data('kendoDropDownList');company.value(1);company.trigger('change');");      
    // };

    this.enterSiteValue = function() {
        //Enter Site value 
        browser.executeScript("var site = $('#site').data('kendoDropDownList');site.value(2);site.trigger('change');");
    };

    this.enterVenueValue = function() {
        //Eneter Venue value 
        browser.executeScript("var venue = $('#venue').data('kendoDropDownList');venue.value(1);venue.trigger('change');");
        
    };
    this.enterPFValue = function() {
        //Eneter product family value 
        browser.executeScript("var pf = $('#productgroup').data('kendoDropDownList');pf.value(305);pf.trigger('change');");
        
    };


    this.clickNextButton = function (selector) {
        element(by.css('button[wz-next="' + selector + '"]')).click();
    };

    this.clickNextButton2ndStep = function (selector) {
        element(by.css('button[ng-click="' + selector + '"]')).click();
    };


    this.enterAttributeType = function() {
        //Enter an attribute type - KPI
        browser.executeScript("var type = $('#type').data('kendoDropDownList');type.value(1);type.trigger('change');");      
    };

    this.enterUoM = function() {
        //Enter an UoM - x 10e2 U/mg
        browser.executeScript("var UoM = $('#uom').data('kendoDropDownList');UoM.value(7);UoM.trigger('change');");      
    };

    this.enterNameForMonitoringAttribute = function(newAttributeName) {
        if (typeof newAttributeName !== 'undefined') {
            attributeName = newAttributeName;
        }
        browser.executeScript("var monAttr = $('#name').data('kendoMaskedTextBox');" +
            "monAttr.value('" + attributeName + "');monAttr.trigger('change');");

        return attributeName;

    };

    this.enterDescription = function() {
        //Enter description for the monitoring attribute
        element(by.id("description")).sendKeys('New Description for KPI attribute');    
    };

    this.enterMoM = function() {
        //Enter MoM for the monitoring attribute        
        element(by.id("mom")).sendKeys("New Method of Measurement For Test Attribute KPI");   
    };

    this.enterEffectiveDate = function() {
        //Enter effective date         
        browser.executeScript("var effectiveDate = $('#effective-from').data('kendoDatePicker');effectiveDate.value(new Date(2016, 10, 1));effectiveDate.trigger('change');");   
    };

    this.enterDecimalPoints = function() {
        //Enter decimal points        
        browser.executeScript("var decimalPointsInput = $('#decimal-points').data('kendoNumericTextBox');decimalPointsInput.value(10);decimalPointsInput.trigger('change');");
    };

    this.clickButtonByText = function(text) {
        //Click the create new control limit button
        element(by.buttonText(text)).click();
    };

    this.populateContrlLimitValues = function() {
        //Populate control limit values
        element(by.css('input[name="LCL"]')).sendKeys(10.7);
        browser.sleep(500);
        element(by.css('input[name="Center"]')).sendKeys(11.52);
        browser.sleep(500);
        element(by.css('input[name="UCL"]')).sendKeys(13.413);
        browser.sleep(500);
    };

    this.clickCreateButton = function(text) {
        //Click button by its button text value
        element(by.css('a[class="k-button k-button-icontext k-primary k-grid-update"]')).click();
    };

    this.clickNextButton3rdStep = function(text) {
        //Click button by its button text value
        browser.sleep(1000);
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[3]/div/div[2]/div/button[2]')).click();
    };

    this.filterTable = function(numberValue) {
        //Filter table by the respective attribute name column
        if (typeof numberValue !== 'undefined') {
            attributeName = numberValue;
        }
        browser.executeScript("var product = $('#attributes-grid').data('kendoGrid');" +
            "product.dataSource.filter({field: \"Name\", operator: \"eq\", value: \""+attributeName+"\" });");
        browser.sleep(1000);    
    };

    this.verifyThatRecordIsCreated = function() {
        //Verification that the record is created
        var list = element.all(by.css('#attributes-grid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(1);
    };
    
    this.clickEditButton = function (selector) {
        //Click edit button by provided selector
        element(by.css('.' + selector)).click();
    };

    this.clickDeleteButton = function (selector) {
        //Click delete button by provided selector
        element(by.css('.' + selector)).click();
    };

    this.verifyThatRecordIsDeleted = function() {
        //Verification that the record is deleted
        var list = element.all(by.css('#attributes-grid .k-grid-content table tbody tr'));
        expect(list.count()).toBe(0);
    };
};

module.exports = new monitoringAttributesPage();