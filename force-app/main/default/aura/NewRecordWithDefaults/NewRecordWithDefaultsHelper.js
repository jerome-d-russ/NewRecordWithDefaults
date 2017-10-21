({
	getFieldValueMapFromDeclarativeInput : function(cmp) {
        //returns an object to match the e.force:createRecord's defaultFieldValues parameter {"fieldName": value}
        var valueMap = {};

        //Load fields in the valueMap with the Static values (from the Declarative Input)
        var fieldPairs = cmp.get("v.staticFields").split(";");
        for(var fieldPair in fieldPairs){
            var field = fieldPairs[fieldPair].split(",");
            valueMap[field[0]] = field[1];
        }

        //Load fields in the valueMap with the Dynamic values (from the record)
        var r = cmp.get("v.record");
        var fieldPairs = cmp.get("v.dynamicFields").split(";");
        for(var fieldPair in fieldPairs){
            var field = fieldPairs[fieldPair].split(",");
            if(r[field[0]] != null && r[field[0]] != undefined && r[field[0]].length > 0){
                valueMap[field[1]] = r[field[0]];
            }
        }

        return valueMap;
	},
	getFieldsToSelectFromDeclarativeInput : function(cmp) {
        //returns an array to match the force:recordData's fields attribute ["fieldName","fieldName"];
        var fields = [];
        //Load fields in the array with the Declarative Input's From fields
        var dynamicFields = cmp.get("v.dynamicFields");
        var fieldPairs = dynamicFields.split(";");
        for(var fieldPair in fieldPairs){
            var fieldName = fieldPairs[fieldPair].split(",")[0];
            if(fieldName != null && fieldName != undefined && fieldName.length > 0){
            	fields.push(fieldName);
            }
        }
        return fields;
	}
})
