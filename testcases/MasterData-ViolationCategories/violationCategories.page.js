var helper = require('./../Helpers/Helper.js').init();
var violationCategoryName = " Test-VC-" + helper.utils.random();

var violationCategoriesPage = function(){

    this.navigateToViolationCategories = function() {
    //Navigate to Violation Categories
    element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
    element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(3) > a')).click();
    };

    this.clickButtonByText = function (text) {
        element(by.buttonText(text)).click();
    };

    this.clickOnClearButton = function() {
        //Click on the Clear button
        element(by.css('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary')).click();
    };

    this.clickOnAddNewViolationCategoryButton = function() {
        //Click on "Add New Violation Category" button
        element(by.css('button[ng-click="vm.addNewRow()"]')).click(); 
    };

    this.enterNameForViolationCategory = function(newViolationCategoryName) {
        if (typeof newViolationCategoryName !== 'undefined') {
            violationCategoryName = newViolationCategoryName;
        }
        browser.executeScript("$('input[name=\"Name\"]').val('"+violationCategoryName+"').change();" );
        //element(by.css('input[type="text"][name="Name"]')).sendKeys(violationCategoryName);
        return violationCategoryName;

    };

    this.checkPQIcheckbox = function() {
        //Check product quality impact checkbox
        element(by.css('input[data-bind="checked: ProductQAImpact"]')).click(); 
    };

    this.checkActiveCheckbox = function() {
        //Check active checkbox
        element(by.css('input[data-bind="checked: Active"]')).click(); 
    };

    this.selectSiteValue = function() {
        //Select site value
        var site = $('span[role=\"listbox\"]').click();
        browser.sleep(500);
        var rstoValue = $('li[class=\"k-item k-state-focused\"]').click();
    };

    this.clickUpdateButton = function(text) {
        //Click the create new control limit button
        browser.executeScript("$('.k-grid-update').click();" );
        //element(by.css('a.k-grid-update')).click();
    };

    this.filterTable = function(numberValue) {
        //Filter table by the respective attribute name column
        if (typeof numberValue !== 'undefined') {
            violationCategoryName = numberValue;
        }
        browser.executeScript("var product = $('#categoriesTreeList').data('kendoGrid');" +
        "product.dataSource.filter({field: \"Name\", operator: \"eq\", value: \""+violationCategoryName+"\" });");
        browser.sleep(1000);    
    };

    this.resetFilterTable = function() {
        browser.executeScript("var product = $('#categoriesTreeList').data('kendoGrid');" +
            "product.dataSource.filter({});" +
            "product.refresh();");
        browser.sleep(1000);
    };

    this.verifyThatRecordIsCreated = function() {
        //Verification that the record is created
        var list = element.all(by.css('#categoriesTreeList .k-grid-content table tbody tr'));
        expect(list.count()).toBe(1);
    };

    this.clickEditButton = function (selector) {
        //Click edit button by provided selector
        element(by.css('.' + selector)).click();
    };

    this.saveRow = function() {
        //Click the create new control limit button
        browser.executeScript("var product = $('#categoriesTreeList').data('kendoGrid');" +
            "product.saveChanges();" +
            "product.refresh();" );

    };

 
};
module.exports = new violationCategoriesPage();