'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var init = function remote() {

    return {
        utils: utils(),
        violationCategories : violationCategories(),
        
    }

    /// Generic functionality
    function utils()
    {
        return {
            navigateToViolationCategories: navigateToViolationCategories,
            navigateToMonitoringAttributes: navigateToMonitoringAttributes,
            navigateToMenuItem: navigateToMenuItem,
            login: login,
            logout: logout,
            random: random,
        }

        function random(){
            return Math.random().toString(36).substring(10, 13);
        };

        function navigateToViolationCategories(){
            $("#sidebar-menu a[ui-sref='violation.data']").click();
        };

        function navigateToMonitoringAttributes(){
            $("#sidebar-menu a[ui-sref='attributes.monitoring']").click();
        };

        function login(domain, username, password){
            

  
setTimeout(function(){
          var domainDDL = $('#remis-login-domain').getKendoDropDownList();
           domainDDL.value(domain);
           domainDDL.trigger('change');
 }, 400);

setTimeout(function(){
                       $("#remis-login-username").val(username);
                        $("#remis-login-username").change();
                 }, 500);

         
setTimeout(function(){
                       $("#remis-login-password").val(password);
                       $("#remis-login-password").change();
                 }, 600);
          
           

          //  $("#remis-login-form button").click();

setTimeout(function(){
           $("#remis-login-form button").click();
                 }, 800);
        };

        function logout(){
            $('#wrapper > div > div > header > nav > div > ul > li:nth-child(2) > a > i').click();
            setTimeout(function(){
                $('body > div.modal.fade.ng-isolate-scope.modal-warning.remis-modal.modal-logout-confirm.in > div > div > div.row.buttons-row.ng-scope > div > button.k-primary.k-button').click();
            }, 500);
        };

        /// Navigates to menu item using Left-hand menu
        /// Expects ui-sref as parameter (taken from <a ui-sref='hto.monitoring({htoType: 'Liquid'})'>)
        function navigateToMenuItem(sref){
            $("#sidebar-menu a[ui-sref='" + sref + "']").click();
        };        
    }
    /// violationCategories functionality
    function violationCategories()
    {
        return {
            add: addNewViolationCategory,
            getFirstColumnResults: getFirstColumnResults,
            editViolationCategory: editViolationCategory,
            clearFilter: clearFilter
        }


        function addNewViolationCategory(name, impact, active, site){
            var isImpactClicked = false,
                isNameAdded = false,
                isActiveClicked = false,
                isSiteSelected = false,
                resultObject = {};

            $("[ng-click='vm.addNewRow()']").click();
            $("#categoriesTreeList tr[data-role='editable'] input[data-bind='checked: ProductQAImpact']").on('click', function() {
                isImpactClicked = true;
            });
            $("#categoriesTreeList tr[data-role='editable'] input[data-bind='checked: Active']").on('click', function() {
                isActiveClicked = true;
            });
            $("#categoriesTreeList tr[data-role='editable'] input[name='Name']").on('change', function() {
                isNameAdded = true;
            });
            $("input[data-role=\"dropdownlist\"]").on('chnage', function() {
                isSiteSelected = true;
            });
            $("#categoriesTreeList tr[data-role='editable'] input[name='Name']").val(name).trigger('change');
            $("#categoriesTreeList tr[data-role='editable'] input[data-bind='checked: ProductQAImpact']").click();
            $("#categoriesTreeList tr[data-role='editable'] input[data-bind='checked: Active']").click();
            $("input[data-role=\"dropdownlist\"]").data('kendoDropDownList').select(2);
            $("input[data-role=\"dropdownlist\"]").data('kendoDropDownList').trigger('change');
            setTimeout(function() {
                $(".k-grid-update").click(); 
            }, 1000);
            resultObject = {
                isImpactClicked: isImpactClicked,
                isActiveClicked: isActiveClicked,
                isNameAdded: isNameAdded,
                isSiteSelected: isSiteSelected
            }
            return resultObject;   
        }

        function getFirstColumnResults(name){
// както е в момента търси в масив
            var finalResult = []; 
            $("#categoriesTreeList").each(function(i) {
            finalResult.push($(this).find("td:first").text());
            });
            var isExist = finalResult.indexOf(name);
            console.log(isExist > -1);
            return isExist > -1;
        }

        function editViolationCategory(name){
            result = js.ExecuteScript("var a = $('div#categoriesTreeList .k-grid-content table tr td span:contains(" + name + ")').parent().parent().find(\"td a[title = 'Edit']\");" + 
                            "if (a.length > 1) return 'Exception: more than one objects found';" + 
                            "a.trigger('click');" +
                            "return 'Success'").ToString();
              if (result.StartsWith("Exception:"))
              throw new Exception(result);
        }
            
            function clearFilter(){
            $('#aside-filter > div.filter-buttons > button.btn.roche_red_bg.waves-effect.waves-primary').click();
        }
    }

};

exports.init = init;
