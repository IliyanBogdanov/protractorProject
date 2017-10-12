var processMonitoringOverviewPage = function(){
    
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
        var productFamilyValue = element(by.css('#filter-productFamily_listbox > li:nth-child(2)'));
        browser.sleep(1000);
        productFamilyValue.click();     
    };

    this.clickOnApplyButton = function() {
         //Click on Apply button
        element(by.css('.btn.roche_green_bg.waves-effect.waves-primary')).click();   
    };

    this.verifyThatFilterHasBeenAppliedCorrectly = function() {
        //Verify that filter has been applied correctly (to the corresponding product family)
        expect(element(by.css('#process-monitoring-overview > div.row > div > div.breadcrumb-wrapper.pull-left > div > div > div > ol > li:nth-child(3) > a')).getAttribute('innerHTML')).toEqual('ACTEMRA 162 mg TOCILIZUMAB');
    };

    this.setDataPointsValues = function() {
        //Open Latest Data Points Menu
        element(by.css('#range-filter > span')).click();
        //Enter a custom date range
        var dateRadioButton = element(by.id('date-filter-selector'));
        browser.sleep(1000);
        dateRadioButton.click();
        //Click on Previous 180 days
        var previous180Days = element(by.css('#range-filter > div.dates-selectors > div.row.radio-group-holder > div:nth-child(3) > div > label'));
        browser.sleep(1000);
        previous180Days.click();
    };

    this.verifyThatDateFilterIsAppliedCorrectly = function() {
        //Verify that date filter is applied correctly
        expect(element(by.css('#range-filter > div.range-data.k-input.text-center > div > div')).getAttribute('innerHTML')).not.toEqual('LATEST 30 DATA POINTS');
    };
    
    this.clickOnClearButton = function() {
        //Click on the Clear button
        element(by.css('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary')).click();
        browser.sleep(2000);
    };

    this.verifyThatClearButtonHasClearedFilterInput = function() {
        //Verify that clear button has cleared the filter criterion
    expect(element(by.css('#process-monitoring-overview > div.alert.roche_yellow_bg.text-white.ng-scope > strong')).getAttribute('innerHTML')).toEqual('Please select a Product Family');
    };

};

module.exports = new processMonitoringOverviewPage();