var loginPage = require('../REMILogin/login.page.js');
var detailsPage = require('./pmDetails.page.js');
var helperFile = require('./../Helpers/Helper.js');

describe('When user opens the Details module, he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
        loginPage.loginREMI();
    });

    it ('Should be able to create a new violation comment.', function (){
        helperFile.setSiteValue();
        helperFile.setProductFamilyValue();
        helperFile.clickOnApplyButton();
        detailsPage.clickOnDetails();
        detailsPage.switchToDetails('1');
        detailsPage.clickOnGridRow('#violations-grid');
        helperFile.clickButtonByText('Comment');
        detailsPage.enterEvalComment('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' + 
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.');
        detailsPage.enterConclComment('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' + 
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.');
        detailsPage.selectCategory();
        helperFile.clickButtonByText('Save');
        detailsPage.verifyThatCommentIsSaved();
    });

    it ('Should be able to update the violation comment.', function (){
        helperFile.setSiteValue();
        helperFile.setProductFamilyValue();
        helperFile.clickOnApplyButton();
        detailsPage.clickOnDetails();
        detailsPage.switchToDetails('2');
        detailsPage.clickOnGridRow('#violations-grid');
        helperFile.clickButtonByText('Comment');
        detailsPage.enterEvalComment('This is the updated evaluation comment.');
        detailsPage.enterConclComment('This is the updated conclusion comment.');
        detailsPage.selectCategory();
        helperFile.clickButtonByText('Save');
        detailsPage.verifyThatCommentIsSaved();
    });

    it ('Should be able to delete the violation comment.', function (){
        helperFile.setSiteValue();
        helperFile.setProductFamilyValue();
        helperFile.clickOnApplyButton();
        detailsPage.clickOnDetails();
        detailsPage.switchToDetails('3');
        detailsPage.clickOnGridRow('#violations-grid');
        helperFile.clickButtonByText('Delete');
        helperFile.clickButtonByText('Confirm');
        helperFile.clickButtonByText('Finish');
        detailsPage.verifyThatCommentIsDeleted();
    });

    afterAll(function () {
        browser.restart();
        browser.manage().window().maximize();
    });

});