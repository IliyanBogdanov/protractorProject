var helper = require('./../Helpers/Helper.js');
var EC = protractor.ExpectedConditions;

var e2ePage = function () {
    /*
     * Verify that test passes
     */
    this.verifyThatTestPasses = function() {
        expect(1).toBe(1);
    };
};

module.exports = new e2ePage();