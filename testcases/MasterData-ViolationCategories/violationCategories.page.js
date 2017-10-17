var BGO = require('./../BGOFile/BGO.js').init();
var violationCategoryName = "Test-VC-" + BGO.utils.random();

var violationCategoriesPage = function(){

    this.navigateToViolationCategories = function() {
    //Navigate to Violation Categories
    element(by.css('#sidebar-menu > ul > li:nth-child(2) > a > i')).click();
    element(by.css('#sidebar-menu > ul > li:nth-child(2) > ul > li:nth-child(3) > a')).click();
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
        //Enter name for the violation category
        if (typeof newViolationCategoryName !== 'undefined') {
            violationCategoryName = newViolationCategoryName;
        }
        element(by.css('input[name="Name"]')).sendKeys(" "+ violationCategoryName + " ");
     
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
        element(by.css('a[class="k-button k-button-icontext k-primary k-grid-update"]')).click();
    };

    this.filterTable = function(numberValue) {
        //Filter table by the respective attribute name column
        if (typeof numberValue !== 'undefined') {
            violationCategoryName = numberValue;
        }
        console.log(violationCategoryName);
        
        browser.executeScript("var name = $('#categoriesTreeList').data('kendoGrid');" +
            "name.dataSource.filter({field: 'Name', operator: 'eq', value: '" + violationCategoryName + "'});");
        browser.sleep(1000);    
    };
    
    




    
};
module.exports = new violationCategoriesPage();