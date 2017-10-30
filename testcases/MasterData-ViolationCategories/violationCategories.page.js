var helper = require('./../Helpers/Helper.js');
var violationCategoryName = " Test-VC-" + helper.createARandomValue();
var EC = protractor.ExpectedConditions;

var violationCategoriesPage = function(){

    /*
     * Navigate to Violation Categories
     */
    this.navigateToViolationCategories = function() {
    browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > a > i')), 10000, 'Main menu wait for element has failed.');    
    element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
    browser.wait(EC.elementToBeClickable($('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(3) > a')), 10000, 'Main menu wait for element has failed.');
    element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(3) > a')).click();
    };
    /*
     * Clicks the add new violation category button
     */
    this.clickOnAddNewViolationCategoryButton = function() {
        browser.wait(EC.elementToBeClickable($('button[ng-click="vm.addNewRow()"]')), 10000,'Wait for clickOnAddNewViolationCategoryButton element has failed.');
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
        browser.wait(EC.presenceOf($('input[data-bind="checked: ProductQAImpact"]')), 10000, 'Wait for checkPQIcheckbox element has failed.');
        element(by.css('input[data-bind="checked: ProductQAImpact"]')).click(); 
    };
    /*
     * Checks the active checkbox
     */
    this.checkActiveCheckbox = function() {
        browser.wait(EC.presenceOf($('input[data-bind="checked: Active"]')), 10000, 'Wait for checkActiveCheckbox element has failed.');
        element(by.css('input[data-bind="checked: Active"]')).click(); 
    };
    /*
     * Selects the site value
     */
    this.selectSiteValue = function() {  
        browser.executeScript("$('span[role=\"listbox\"]').click()" );
        browser.executeScript("$('li[data-offset-index=\"2\"]').click()" );
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
        browser.wait(EC.visibilityOf($('#categoriesTreeList')), 10000, 'Wait for #categoriesTreeList has failed.');
        browser.executeScript("var product = $('#categoriesTreeList').data('kendoGrid');" +
        "product.dataSource.filter({field: \"Name\", operator: \"eq\", value: \""+violationCategoryName+"\" });");
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
     * Save the row changes to the grid
     */
    this.saveRow = function() {
        browser.executeScript("var product = $('#categoriesTreeList').data('kendoGrid');" +
            "product.saveChanges();" +
            "product.refresh();" );
    };
    /*
     * Verify that test passes
     */
    this.verifyThatTestPasses = function() {
        expect(1).toBe(1);
    };
 
};
module.exports = new violationCategoriesPage();