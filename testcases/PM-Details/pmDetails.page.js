var helper = require('./../Helpers/Helper.js');
var EC = protractor.ExpectedConditions;

var detailsPage = function(){
    /*
     * Clicks on the Details button and opens the Details module (ensure that the respective attribute has violations assigned to it)
     */
    this.clickOnDetails = function() {
        var self = this;
        browser.wait(EC.elementToBeClickable($('')), 10000, 'Wait for clickOnDetails has failed.');
        element(by.css('')).click();
    };
    /*
     * Switch to Details window
     */

     /*
     * Click on a violation row
     */

    /*
     * Click on a violation row
     */ 

    /*
     * Click on a comment button
     */  
    
    /*
     * Enter Evaluation Comment
     */
    
    /*
     * Enter Conclusion Comment
     */

    /*
     * Select a violation category from the dropdown
     */
    
    /*
     * Check a DMS ID record
     */
    
    /*
     * Click the Save button
     */
    
    /*
     * Verify that the comment is saved
     */
    
     
    
     

};
module.exports = new detailsPage();