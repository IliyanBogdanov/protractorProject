var loginPage = require('../REMILogin/login.page.js');
var monitoringAttrubutesPage = require('../MasterData-MonitoringAttributes/monitoringAttributes.page.js');
var MARoles = require('./MARoles.page.js');
var helperFile = require('./../Helpers/Helper.js');

describe('When user opens the Remis App with different roles , he...', function() {
    
    beforeEach(function () {
        loginPage.navigateToRemisDev();
    });

    it ('Should be able to Login as Regular user.', function (){
        MARoles.loginREMIRole('OCNREGULARUSER');
        MARoles.verifyLogin('OCN_REGULAR_USER');
        monitoringAttrubutesPage.navigateToMonitoringAttributesSection();
        MARoles.verifyReadOnly();
    });
});
