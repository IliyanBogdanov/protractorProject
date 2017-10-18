var loginPage = require('../REMILogin/login.page.js');
var violationCategoriesPage = require('./violationCategories.page.js');
var violationCategoryName = '';

describe('When user opens the Violation Categories module, he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });

    it ('Should be able to create a new record.', function (){
        //Open violation categories module
        violationCategoriesPage.navigateToViolationCategories();
        //Clear filter settings
        violationCategoriesPage.clickOnClearButton();
        //Click the add new violation category button
        violationCategoriesPage.clickOnAddNewViolationCategoryButton();
        //Enter name for the violation category
        violationCategoryName = violationCategoriesPage.enterNameForViolationCategory();
        //Check poduct quality impact checkbox
        violationCategoriesPage.checkPQIcheckbox();
        //Check active checkbox
        violationCategoriesPage.checkActiveCheckbox();
        //Select a site value from the dropdown
        violationCategoriesPage.selectSiteValue();
        //Create the new violation category record
        violationCategoriesPage.clickUpdateButton();
        //Verify that the record is created
        violationCategoriesPage.filterTable();
        violationCategoriesPage.verifyThatRecordIsCreated();
    });

    it ('Should be able to update a record.', function (){
        var newViolationCategoryName = "UPDATE-" + violationCategoryName;
        //Open violation categories module
        violationCategoriesPage.navigateToViolationCategories();
        //Clear filter settings
        violationCategoriesPage.clickOnClearButton();
        //Filter table to get the last added record from the test
        //violationCategoriesPage.filterTable(violationCategoryName);
        browser.sleep(1000);
        //Click the edit icon
        violationCategoriesPage.clickEditButton('icon-small-edit');
        browser.sleep(1000);
        //Change the name of the violation category
        violationCategoryName = violationCategoriesPage.enterNameForViolationCategory('UPDATE');
        //Save the updated record
        violationCategoriesPage.clickUpdateButton();
        browser.sleep(2000);
        //Verify that the record is updated
        violationCategoriesPage.filterTable(violationCategoriesPage);
        violationCategoriesPage.verifyThatRecordIsCreated();
    });
});


