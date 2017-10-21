({
    handleRecordUpdated : function(cmp, event, helper){
        //enable the button. Everything should stay in synce on its own
        console.log("Gonna enable the button");
        
        var changeType = event.getParam("changeType");
        if(changeType === "LOADED" || changeType === "CHANGED"){
            //get the values from the existing record to prepopulate the new record
            //doing this in record update so we can repopulate if values change
            var fieldValueMap = helper.getFieldValueMapFromDeclarativeInput(cmp);
            
            /** -------- **/
            /** TODO: Put the complex logic that might need to go here **/
            /** -------- **/
            
            console.log("Field value map = ", fieldValueMap);
            
            cmp.set("v.fieldValueMap", fieldValueMap);
            cmp.find("button").set("v.disabled", false);
        } else if(changeType === "REMOVED"){
            //we can't use the current record anymore! Disable the button!
            cmp.find("button").set("v.disabled", true);
        }
    },
    
    init : function(cmp, event, helper){
        //get the fields the admin asked for in dynamicFieldMap
        var fields = helper.getFieldsToSelectFromDeclarativeInput(cmp);
        var frd = cmp.find("frd");
        //set this to the force:recordData's fields property and recordId
        frd.set("v.fields", fields);
        frd.set("v.recordId", cmp.get("v.recordId"));
        frd.reloadRecord();
    },
    
    handleClick : function(cmp, event, helper){
        //Go ahead and fire the createRecord event!
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": cmp.get("v.newRecordEntityName"),
            "defaultFieldValues": cmp.get("v.fieldValueMap")
        });
        createRecordEvent.fire();
    }
})