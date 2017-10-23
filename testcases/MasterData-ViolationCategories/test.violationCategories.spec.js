var loginPage = require('../REMILogin/login.page.js');
var violationCategoriesPage = require('./violationCategories.page.js');
var helperFile = require('./../Helpers/Helper.js');
var violationCategoryName = '';

describe('When user opens the Violation Categories module, he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
        violationCategoriesPage.navigateToViolationCategories();
    });

    it ('Should be able to create a new record.', function (){
        violationCategoriesPage.clickOnAddNewViolationCategoryButton();
        violationCategoryName = violationCategoriesPage.enterNameForViolationCategory();
        violationCategoriesPage.checkPQIcheckbox();
        violationCategoriesPage.checkActiveCheckbox();
        violationCategoriesPage.selectSiteValue();
        violationCategoriesPage.clickUpdateButton();
        //Verification
        violationCategoriesPage.filterTable();
        helperFile.verifyThatRecordIsCreated('#categoriesTreeList');
    });

    it ('Should be able to update a record.', function (){
        var newViolationCategoryName = "UPDATE-" + violationCategoryName;
        violationCategoriesPage.filterTable(violationCategoryName);
        helperFile.clickEditButton('.icon-small-edit');
        violationCategoryName = violationCategoriesPage.enterNameForViolationCategory(newViolationCategoryName);
        violationCategoriesPage.saveRow();
        //Verification
        violationCategoriesPage.filterTable(violationCategoryName);
        browser.ignoreSynchronization = true;
        helperFile.verifyThatRecordIsCreated('#categoriesTreeList');
        browser.ignoreSynchronization = false;
    });
});


