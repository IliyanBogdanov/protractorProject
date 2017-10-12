var loginPage = require('../REMILogin/login.page.js');
var violationCategoriesPage = require('./violationCategories.page.js')

describe('When user opens the Violation Categories module, he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });

    fit ('should be able to create a new Violation Categories record.', function (){
        violationCategoriesPage.navigateToViolationCategories();
        violationCategoriesPage.createNewViolationRecord();
        violationCategoriesPage.checkExistingRecord();
        violationCategoriesPage.logoutREMI();
    });

    xit ('should be able to update an existing Violation Categories record.', function (){
        violationCategoriesPage.navigateToViolationCategories();
        violationCategoriesPage.createNewViolationRecord();
        violationCategoriesPage.checkExistingRecord();
        violationCategoriesPage.editViolationRecord();
        violationCategoriesPage.logoutREMI();
    });


});


