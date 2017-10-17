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
        violationCategoriesPage.enterNameForViolationCategory();
        //Check poduct quality impact checkbox
        violationCategoriesPage.checkPQIcheckbox();
        //Check active checkbox
        violationCategoriesPage.checkActiveCheckbox();
        //Select a site value from the dropdown
        
        browser.sleep(3000);

   
    });

    xit ('Should be able to update a record.', function (){
        violationCategoriesPage.navigateToViolationCategories();

       
    });


});


