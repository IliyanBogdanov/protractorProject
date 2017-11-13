var loginPage = require('../REMILogin/login.page.js');
var violationCategoriesPage = require('./violationCategories.page.js');
var helperFile = require('./../Helpers/Helper.js');
var violationCategoryName = '';

describe('When user opens the Violation Categories module, he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
        helperFile.navigateTo('.menu-icon.icon-menu-masterdata', '/violation/data');
    });

    it ('Should be able to create a new record.', function (){
        helperFile.clickOnClearButton();
        violationCategoriesPage.clickOnAddNewViolationCategoryButton();
        violationCategoryName = violationCategoriesPage.enterNameForViolationCategory();
        violationCategoriesPage.checkPQIcheckbox();
        violationCategoriesPage.checkActiveCheckbox(); 
        violationCategoriesPage.selectSiteValue();
        violationCategoriesPage.clickUpdateButton();
        violationCategoriesPage.filterTable();
        helperFile.verifyThatRecordIsCreated('#categoriesTreeList');
    });

    it ('Should be able to update a record.', function (){
        var newViolationCategoryName = "UPDATE-" + violationCategoryName;
        violationCategoriesPage.filterTable(violationCategoryName);
        helperFile.clickEditButton('.k-grid-edit');
        violationCategoryName = violationCategoriesPage.enterNameForViolationCategory(newViolationCategoryName);
        violationCategoriesPage.saveRow();
        violationCategoriesPage.verifyThatTestPasses();
    });

    it ('Should be verify  update a record.', function (){
        violationCategoriesPage.filterTable(violationCategoryName);
        helperFile.verifyThatRecordIsCreated('#categoriesTreeList');
    });
});


