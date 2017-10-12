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
         element(by.cssContainingText('span.k-input.ng-scope', 'Select a site...')).click();
         browser.sleep(1000);
         element(by.cssContainingText('#site_listbox > li.k-item.ng-scope.k-state-hover','RSTO')).click();
    };

    this.selectVenueB10 = function() {         
        element(by.cssContainingText('span.k-input.ng-scope', 'Select a venue...')).click();
        browser.sleep(1000);
        element(by.css('#venue_listbox > li.k-item.ng-scope.k-state-hover')).click();
    };

    this.productFamilyDropDownSelect = function() {
        element(by.cssContainingText('body > div.modal.fade.ng-isolate-scope.modal-warning.remis-modal.in > div > div > div.modal-body.warnings-body.remis-wizard.batch-wizard.ng-scope > div > div > section.step.ng-scope.ng-isolate-scope.current > div > form > div.form-group.row > div:nth-child(4) > div:nth-child(1) > div > span > span > span.k-input.ng-scope', 'Select a product family...')).click();
        browser.sleep(1000);
        element(by.xpath('//*[@id="productFamily_listbox"]/li[1]')).click();
    }; 
    
    this.materialNumberDropDownSelect = function() {
        element(by.cssContainingText('body > div.modal.fade.ng-isolate-scope.modal-warning.remis-modal.in > div > div > div.modal-body.warnings-body.remis-wizard.batch-wizard.ng-scope > div > div > section.step.ng-scope.ng-isolate-scope.current > div > form > div.form-group.row > div:nth-child(5) > div:nth-child(1) > div > span > span > span.k-input.ng-scope', 'Select a product...')).click();
        browser.sleep(1000);
        element(by.xpath('//*[@id="product_listbox"]/li[1]')).click();
    }; 

    this.batchLotNumberEnterTextInput = function() {
        element(by.model('vm.dataEntryData.BatchNumber')).sendKeys('3123123124');
        browser.sleep(1000);
    }; 

    this.orderNumberEnterTextInput = function() {
        var orderNumber = element(by.model('vm.dataEntryData.OrderNumber')).sendKeys('1253871235');
        browser.sleep(1000);
    };
    
    this.batchStartTimeEntry = function() {
        browser.executeScript("var batchStartTime = $('#batchStartTime').data('kendoDatePicker');batchStartTime.value(new Date(2017, 9, 6));batchStartTime.trigger('change');");
        browser.sleep(1000);
    };
    
    this.batchEndTimeEntry = function() {
        browser.executeScript("var batchEndTime = $('#batchEndTime').data('kendoDatePicker');batchEndTime.value(new Date(2017, 9, 7));batchEndTime.trigger('change');");
    };

    this.nextButton = function() {
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[1]/div/form/div[2]/div/button[1]')).click();
    };

    this.populateParameterValues = function() {
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[2]/div/div/div[1]/div/ul[1]/li[1]/div[2]/span/span/input[1]')).sendKeys('111.4');
        browser.sleep(1000);
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[2]/div/div/div[1]/div/ul[1]/li[2]/div[2]/span/span/input[1]')).sendKeys('768.7');
        browser.sleep(1000);
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[2]/div/div/div[1]/div/ul[2]/li/div[2]/span/span/input[1]')).sendKeys('332.5');
        browser.sleep(1000);

    };

    this.nextButton2 = function() {
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div/div/section[2]/div/div/div[2]/div/button[2]')).click();
        browser.sleep(1000);
    };

    this.createButton = function() {
        element(by.buttonText('Create')).click();
    };

    this.okButton = function() {
        element(by.buttonText('OK')).click();
        browser.sleep(1000);
    };

    this.verifyThatRecordIsCreated = function() {
        //expect(element(by.xpath('//*[@id="dataEntry-grid"]/div[2]/table/tbody/tr[1]/td[3]')).getAttribute('innerHTML')).toEqual('' + orderNumber + '');
        //browser.sleep(1000);
    };











    


    
    

};

module.exports = new bdePage();