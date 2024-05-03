var stateField = g_form.getValue('state');
alert(stateField);

//********************************************

g_form.setValue('state', 'New')

//********************************************

g_form.clearValue('number');

//********************************************

g_form.save();

//********************************************

g_form.setDisabled('category',true)

//********************************************

g_form.hideRelatedLists()
g_form.showRelatedLists()

//********************************************

alert(g_form.isMandatory('category')) - False
alert(g_form.isMandatory('caller_id')) - True

//********************************************

var newRecorde = g_form.isNewRecord();
alert(newRecorde)

//********************************************

g_form.addErrorMessage('This is an error message')
g_form.addInfoMessage('This is an info message')

//********************************************

g_form.clearMessages()

//********************************************

alert(g_form.getLabelOf('opened_by'));

//********************************************

alert(g_form.getTableName())