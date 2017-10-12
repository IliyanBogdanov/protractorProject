var BGO = require('./../BGOFile/BGO.js').init();
var monAttrName = BGO.utils.random();

var monitoringAttributesPage = function(){
    
    this.navigateToMonitoringAttributesSection = function() {
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
        element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(1) > a')).click();
    };

    this.clickOnAddMonitoringAttributeButton = function() {
        //Click on "Add New Monitoring Attribute" button
        element(by.css('#monitoringAttributesPage > div > div.panel-heading > div.header-right-panel.pull-right > div > button')).click();     
    };

    this.enterCompanyValue = function() {
        //Enter Company value 
        browser.executeScript("var company = $('#company').data('kendoDropDownList');company.value(1);company.trigger('change');");      
    };

    this.enterSiteValue = function() {
        //Enter Site value 
        browser.executeScript("var site = $('#site').data('kendoDropDownList');site.value(2);site.trigger('change');");
    };

    this.enterVenueValue = function() {
        //Eneter Venue value 
        browser.executeScript("var venue = $('#venue').data('kendoDropDownList');venue.value(3);venue.trigger('change');");
        //Select Product Family - automatically
    };

    this.clickNextButton = function() {
        //Click next button
        element(by.buttonText('Next')).click();
    };

    this.enterAttributeType = function() {
        //Enter an attribute type - KPI
        browser.executeScript("var type = $('#type').data('kendoDropDownList');type.value(1);type.trigger('change');");      
    };

    this.enterUoM = function() {
        //Enter an UoM - x 10e2 U/mg
        browser.executeScript("var UoM = $('#uom').data('kendoDropDownList');UoM.value(7);UoM.trigger('change');");      
    };

    this.enterNameForMonitoringAttribute = function() {
        //Enter name for the monitoring attribute
        element(by.id("name")).sendKeys(monAttrName);    
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

    this.clickNextButtonByXpath1 = function() {
        //Click on next button        
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[2]/div/form/div[2]/div/button[2]')).click();
    };

    this.clickNextButtonByXpath2 = function() {
        //Click on next button        
    element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[3]/div/div[2]/div/button[2]')).click();
    };

    this.clickCreateButtonByXpath = function() {
        //Click on create button        
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[4]/div/form/div[4]/div/button[2]')).click(); 
    };

    this.clickOnFinishButton = function() {
        //Click on finish button
        browser.sleep(1000);        
        browser.executeScript("var finishButton = $(\"button:contains('Finish')\").click();");
    };

    this.clickOnClearButton = function() {
        //Click on the Clear button
        browser.sleep(1000);
        element(by.css('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary')).click();
        browser.sleep(1000);
    };

    this.verifyThatRecordIsCreated = function() {
         //Verify that record is created
        expect(element(by.xpath('//*[@id="attributes-grid"]/div[2]/table/tbody/tr[1]/td[6]')).getAttribute('innerHTML')).toEqual(' ' + monAttrName + ' ');
    };

    this.deleteTheRecord = function() {
        //Delete the record 
        browser.sleep(1000);
        var deleteButton = element(by.xpath('//*[@id="attributes-grid"]/div[2]/table/tbody/tr[1]/td[10]/a[3]/i'));
        deleteButton.click();
        element(by.buttonText('Delete')).click();
        element(by.buttonText('Finish')).click();
    };

};

module.exports = new monitoringAttributesPage();