var helper = require('./../Helpers/Helper.js');
var EC = protractor.ExpectedConditions;

var detailsPage = function(){
    /*
     * Clicks on the Details button and opens the Details module (ensure that the respective attribute has violations assigned to it)
     */
    this.clickOnDetails = function() {
        browser.wait(EC.elementToBeClickable($('a.change-specifications-limits')), 10000, 'Wait for clickOnDetails has failed.');
        element(by.css('i.fa-file-o')).click();
    };
    /*
     * Switch to Details window
     */
    this.switchToDetails = function(param) {
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[param]);
     });   
    };  
     /*
     * Click on a violation row
     */
    this.clickOnGridRow = function(gridIDname) {
        browser.wait(EC.visibilityOf($(gridIDname + " .k-grid-content table tbody tr")), 10000, 'Wait for clickOnGridRow has failed.');
        var gridRow = element(by.css(gridIDname + " .k-grid-content table tbody tr"));
        gridRow.click();          
    };  
    /*
     * Enter Evaluation Comment
     */
    this.enterEvalComment = function(text) {
        var evalCommentBox = element(by.id('evaluation'));
        browser.wait(EC.elementToBeClickable(evalCommentBox), 10000, 'Wait for enterEvalComment has failed.');
        evalCommentBox.clear();
        evalCommentBox.sendKeys(text);
    };  
    /*
     * Enter Conclusion Comment
     */
    this.enterConclComment = function(text) {
        var conclCommentBox = element(by.id('conclusion'));
        browser.wait(EC.elementToBeClickable(conclCommentBox), 10000, 'Wait for enterConclComment has failed.');
        conclCommentBox.clear();
        conclCommentBox.sendKeys(text);
    };  
    /*
     * Select a violation category from the dropdown
     */
    this.selectCategory = function() {
        var selectCategoryDropdown = element(by.css('.k-input.ng-scope'));
        browser.wait(EC.elementToBeClickable(selectCategoryDropdown), 10000, 'Wait for selectCategory has failed.');
        selectCategoryDropdown.click();
        
        var selectFirstCategory = element(by.css('li[data-offset-index="0"]'));
        browser.wait(EC.elementToBeClickable(selectFirstCategory), 10000, 'Wait for selectFirstCategory has failed.');
        selectFirstCategory.click();  
    };  
    /*
     * Check a DMS ID record - DMSs are not currently available on http://remisdev.demos.bgosoftware.com/
     */

    /*
     * Verify that the comment is saved
     */
    this.verifyThatCommentIsSaved = function() {
        var toastList = element.all(by.css('.toast-success'));
        expect(toastList.count()).toEqual(1);    
    };

    /*
     * Verify that the comment is deleted
     */
    this.verifyThatCommentIsDeleted = function() {
        var toastList = element.all(by.css('.toast-success'));
        expect(toastList.count()).toEqual(0);    
    };

};
module.exports = new detailsPage();