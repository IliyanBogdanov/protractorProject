var BGO = require('./../BGOFile/BGO.js').init();
var categoryName = BGO.utils.random();
var deferred = protractor.promise.defer();
var promise = deferred.promise;

var violationCategoriesPage = function(){

    this.navigateToViolationCategories = function() {
    //Navigate to Violation Categories
    browser.executeScript(BGO.utils.navigateToViolationCategories);
    //Clear filters
    browser.executeScript(BGO.violationCategories.clearFilter);
    };

    this.createNewViolationRecord = function() {
    //Create a new Violation categories record
    browser.executeScript(BGO.violationCategories.add, categoryName, true);
    browser.sleep(4000);
    };

    this.checkExistingRecord = function() {
    //Check existing record
    browser.executeScript(BGO.violationCategories.getFirstColumnResults, categoryName);
    };

    this.logoutREMI = function() {
    browser.executeScript(BGO.utils.logout);
    };

    this.logoutREMI = function() {
    browser.executeScript(BGO.utils.logout);
    };
    this.editViolationRecord = function() {
    browser.executeScript(BGO.violationCategories.editViolationCategoryRecord, categoryName);
    };
    
};
module.exports = new violationCategoriesPage();