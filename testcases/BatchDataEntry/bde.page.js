var bdePage = function(){

    this.openBDEpage = function() {
        browser.sleep(1000);
        element(by.css('a[ui-sref="dataEntry.home"]')).click();
        element(by.css('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary')).click();
    };

    this.addNewBDEbuttonClick = function() {
        element(by.css('button[ng-click="vm.openEditModal()"]')).click();
    };

    this.siteDropDownSelectRSTO = function() {         
        browser.executeScript("var site = $('#site').data('kendoDropDownList');site.select(1);site.trigger('change');");
    };

    this.selectVenueB10 = function() {         
        browser.executeScript("var venue = $('#venue').data('kendoDropDownList');venue.select(1);venue.trigger('change');");
    };

    this.productFamilyDropDownSelect = function() {
        browser.executeScript("var productFamily = $('#productFamily').data('kendoDropDownList');productFamily.select(1);productFamily.trigger('change');");
    }; 
    
    this.materialNumberDropDownSelect = function() {
        browser.executeScript("var product = $('#product').data('kendoDropDownList');product.select(1);product.trigger('change');");
    }; 

    this.runNumberEnterTextInput = function() {
        element(by.model('vm.dataEntryData.RunNumber')).sendKeys('3123123124Run');
    }; 

    this.campaignNameTextInput = function() {
        var orderNumber = element(by.model('vm.dataEntryData.CampaignName')).sendKeys('My New Campaign');
    };

    this.lotNumberEnterTextInput = function() {
        element(by.model('vm.dataEntryData.BatchNumber')).sendKeys('3123123124Lot');
    }; 
    
    this.runStartDateEntry = function() {
        browser.executeScript("var runStartTime = $('#runStartTime').data('kendoDatePicker');runStartTime.value(new Date(2017, 1, 1));runStartTime.trigger('change');");
    };

    this.runEndDateEntry = function() {
        browser.executeScript("var runEndTime = $('#runEndTime').data('kendoDatePicker');runEndTime.value(new Date(2017, 2, 2));runEndTime.trigger('change');");
    };
    
    this.thawIDTextInput = function() {
        element(by.model('vm.dataEntryData.ThawID')).sendKeys('17264871246ThawID');
    };

    this.thawIDDateEntry = function() {
        browser.executeScript("var thawDate = $('#thawDate').data('kendoDatePicker');thawDate.value(new Date(2017, 3, 3));thawDate.trigger('change');");
    };

    this.harvestDateEntry = function() {
        browser.executeScript("var harvestDate = $('#harvestDate').data('kendoDatePicker');harvestDate.value(new Date(2017, 4, 4));harvestDate.trigger('change');");
    };

    this.clickNextButton = function (selector) {
        element(by.css('button[wz-next="' + selector + '"]')).click();
    };

    this.populateParameterValues = function() {
        browser.executeScript("var param =$('input[kendo-bgo-numeric-text-box]'); param.css('display', 'block');");
        element.all(by.css('input[kendo-bgo-numeric-text-box]')).each(function(element, index) {
            // Will print 0 First, 1 Second, 2 Third.
            element.sendKeys(10);
        });
        browser.executeScript("var param =$('input[kendo-bgo-numeric-text-box]'); param.css('display', 'none');");
    };

    this.createButtonClick = function() {
        element(by.buttonText('Create')).click();
    };

    this.okButtonClick = function() {
        element(by.buttonText('OK')).click();
        browser.sleep(1000);
    };

    this.verifyThatRecordIsCreated = function() {
        
    };

};

module.exports = new bdePage();