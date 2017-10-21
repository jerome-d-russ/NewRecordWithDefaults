
All thanks go to Carolyn Grabill @CarolynCodes and Marcus Toress @mtorres_tweet
for presenting 'Simplify Lightning Component Development with Lightning Data
Service' at TrailheaDX.  

Video: https://www.youtube.com/watch?v=nHYnt0t0_NI

This is my take on the component they demonstrated in that presentation.

# The Use Case
A Lightning Component that allows you to create a Record based on values in an
existing record, configurable in the Lightning App Builder.

# Lightning App Builder Setup
New Record Entity - Object for the new Record  
Button Label - The text that appears on the Button  
SLDS Styles To Apply - SLDS styles which get applied to the container of the Button
- The format is space-delimited "slds-border--bottom slds-border--top"  

Dynamic Field Map - The list of fields to set the initial values of the new Record
- The format is "FromField,To Field;FromField2,To Field 2;..."  

Static Field Map - The list of fields and the text to set for the initial values of the new Record
- The format is "ToField1,The Initial Text;ToField2,More Initial Text"  

![Setup Screen](./images/Setup.png?raw=true "Setup Screen")

# The Button!
Once you place the Component on a Record Page and set the values, the button
will be displayed.  
If there is an issue, the button will be disabled.

![Click Me Button](./images/ClickMe.png?raw=true "Click Me Button!")

# The New Record
When the button is clicked, the new Record modal will be displayed with the
initial values already populated.  
Static values are populated first and Dynamic values are only populated if
there is an actual value (!= null, != undefined, .length > 0).  
This means you can use the Static values as defaults and use the Dynamic values
to overlay those defaults, if present on the record you are viewing.

![Click Me Button](./images/NewRecordModal.png?raw=true "Click Me Button!")
