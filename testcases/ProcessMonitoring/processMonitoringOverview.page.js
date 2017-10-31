var EC = protractor.ExpectedConditions;

var processMonitoringOverviewPage = function(){
    /*
     * Verify that filter has been applied correctly (to the corresponding product family)
     */
    this.verifyThatFilterHasBeenAppliedCorrectly = function() {
        expect(element(by.css('#process-monitoring-overview > div.row > div > div.breadcrumb-wrapper.pull-left > div > div > div > ol > li:nth-child(3) > a')).getAttribute('innerHTML')).toEqual('ACTEMRA 162 mg vTest1');
    };
    /*
     * Open Latest Data Points Menu, enter a custom date range and click on Previous 180 days
     */
    this.setDataPointsValues = function() {
        //Open Latest Data Points Menu
        browser.wait(EC.elementToBeClickable($('#range-filter > span'), 10000, 'Wait for setDataPointsValues has failed.'));
        element(by.css('#range-filter > span')).click();
        //Enter a custom date range
        var dateRadioButton = element(by.css('#date-filter-selector'));
        browser.sleep(1000);
        dateRadioButton.click();
        //Click on Previous 180 days
        var previous180Days = element(by.css('#range-filter > div.dates-selectors > div.row.radio-group-holder > div:nth-child(3) > div > label'));
        browser.wait(EC.elementToBeClickable(previous180Days, 10000, 'Wait for previous180Days has failed.'));
        previous180Days.click();
    };
    /*
     * Verify that date filter is applied correctly
     */
    this.verifyThatDateFilterIsAppliedCorrectly = function() {
        expect(element(by.css('#range-filter > div.range-data.k-input.text-center > div > div')).getAttribute('innerHTML')).not.toEqual('LATEST 30 DATA POINTS');
    };
    /*
     * Verify that clear button has cleared the filter criterion
     */
    this.verifyThatClearButtonHasClearedFilterInput = function() {
    expect(element(by.css('#process-monitoring-overview > div.alert.roche_yellow_bg.text-white.ng-scope > strong')).getAttribute('innerHTML')).toEqual('Please select a Product Family');
    };

};

module.exports = new processMonitoringOverviewPage();