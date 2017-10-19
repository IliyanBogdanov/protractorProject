function doAction(objectInstance, action, param) {
	console.log('objectInstance', objectInstance.type, objectInstance.isKendo);
	console.log('action');

	if(objectInstance.isKendo) {
		//remap the ivoked action according to the Kendo rules
		switch(objectInstance.type) {
			case 'kendoDropDownList':
				//@TODO - extract all Kendo component actions to a separate function
				if(action == 'val') {
					objectInstance.select(param);
					objectInstance.trigger('change');
				}
			break;
			case 'kendoDatePicker':
				//@TODO - extract all Kendo component actions to a separate function
				if(action == 'val') {
					objectInstance.value(param);
					objectInstance.trigger('change');
				}
			break;
		}
	}
	else {
		//@TODO - handle not Kendo objects
		// objectInstance.action(param);
	}
}

function translateSelector(selector)
{
	//check wheter the secletor points to a Kendo element
	var isKendo = false;
	var kendoSelector = '';
	var kendoElementType = '';
	var objectInstance;

	$(selector).each(function() {
    	$.each(this.attributes, function(idex, attribute) {
        	// console.log(index, attribute.name, attribute.value)
			if(a.name.indexOf('kendo') != -1) {
				isKendo = true;
				kendoSelector = attribute.name;
				return;
			}
        })
    });

    if(isKendo) {
    	//transform the kendo-element-type to kendoElementType
    	kendoElementType 		= toCamelCase(kendoSelector)
    	objectInstance			= $(selector).data(kendoElementType);
    	objectInstance.isKendo	= true;
    	objectInstance.type 	= kendoElementType;
    }
    else {
    	objectInstance 			= $(selector);
    	objectInstance.isKendo 	= false;
    	objectInstance.type 	= null;
    }

    console.log('isKendo: ' + isKendo, 'kendoSelector: ' + kendoSelector);

    return objectInstance;
}

function toCamelCase(str) {
	str = str.replace(/(?:^|-)\w/g, function(match) {
        return match.toUpperCase().replace('-', '');
    });

    //fix the first capital letter
    str = str.charAt(0).toLowerCase() + str.substr(1)
	
    return str;
}
