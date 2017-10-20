var helper = require('./../Helpers/Helper.js');
var violationCategoryName = " Test-VC-" + helper.createARandomValue();
var EC = protractor.ExpectedConditions;

var violationCategoriesPage = function(){

    /*
     * Navigate to Violation Categories
     */
    this.navigateToViolationCategories = function() {
    browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > a > i')), 5000);    
    element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
    browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(3) > a')), 5000);
    element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(3) > a')).click();
    };
    /*
     * Clicks the add new violation category button
     */
    this.clickOnAddNewViolationCategoryButton = function() {
        browser.wait(EC.elementToBeClickable($('button[ng-click="vm.addNewRow()"]')), 5000);
        element(by.css('button[ng-click="vm.addNewRow()"]')).click(); 
    };
    /*
     * Enters name for the violation category
     */
    this.enterNameForViolationCategory = function(newViolationCategoryName) {
        if (typeof newViolationCategoryName !== 'undefined') {
            violationCategoryName = newViolationCategoryName;
        }
        browser.executeScript("$('input[name=\"Name\"]').val('"+violationCategoryName+"').change();" );
        return violationCategoryName;
    };
    /*
     * Checks the product quality impact checkbox
     */
    this.checkPQIcheckbox = function() {
        browser.wait(EC.presenceOf($('input[data-bind="checked: ProductQAImpact"]')), 5000);
        element(by.css('input[data-bind="checked: ProductQAImpact"]')).click(); 
    };
    /*
     * Checks the active checkbox
     */
    this.checkActiveCheckbox = function() {
        browser.wait(EC.presenceOf($('input[data-bind="checked: Active"]')), 5000);
        element(by.css('input[data-bind="checked: Active"]')).click(); 
    };
    /*
     * Selects the site value
     */
    this.selectSiteValue = function() {
        browser.wait(EC.elementToBeClickable($('span[role=\"listbox\"]')), 5000);
        var site = $('span[role=\"listbox\"]').click();
        browser.wait(EC.elementToBeClickable($('li[class=\"k-item k-state-focused\"]')), 5000);
        var rstoValue = $('li[class=\"k-item k-state-focused\"]').click();
    };
    /*
     * Clicks the create new control limit button
     */
    this.clickUpdateButton = function(text) {
        browser.executeScript("$('.k-grid-update').click();" );
    };
    /*
     * Filters table by the respective attribute name column
     */
    this.filterTable = function(numberValue) {
        if (typeof numberValue !== 'undefined') {
            violationCategoryName = numberValue;
        }
        browser.executeScript("var product = $('#categoriesTreeList').data('kendoGrid');" +
        "product.dataSource.filter({field: \"Name\", operator: \"eq\", value: \""+violationCategoryName+"\" });");
        //browser.wait(EC.visibilityOf($('#categoriesTreeList')), 5000); - does not work ?
    };
    /*
     * Resets the filter table settings
     */
    this.resetFilterTable = function() {
        browser.executeScript("var product = $('#categoriesTreeList').data('kendoGrid');" +
            "product.dataSource.filter({});" +
            "product.refresh();");
    };
    /*
     * Verifies that the record is created
     */   
    this.verifyThatRecordIsCreated = function() {
        var list = element.all(by.css('#categoriesTreeList .k-grid-content table tbody tr'));
        expect(list.count()).toBe(1);
    };
    /*
     * Save the row changes to the grid
     */
    this.saveRow = function() {
        browser.executeScript("var product = $('#categoriesTreeList').data('kendoGrid');" +
            "product.saveChanges();" +
            "product.refresh();" );
    };
 
};
module.exports = new violationCategoriesPage();