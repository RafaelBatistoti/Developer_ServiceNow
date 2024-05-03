var helloWorld = 'Hello World!!';
gs.print(helloWorld)

// ************************************************

gs.log('log message', 'RafaelBatistoti');

// ************************************************

gs.error('err log message'); 

// ************************************************

gs.warn('warning log message'); 

// ************************************************

gs.addInfoMessage('This incident was updated');

// ************************************************

gs.addErrorMessage('Has something wrong with this incident');

// ************************************************

gs.print(gs.beginningOfLastMonth());

// ************************************************

gs.print(gs.generateGUID());

// ************************************************

gs.print(gs.getMessage('ago'));

// ************************************************

gs.print('Hello ' + gs.getProperty('Developement.ServiceNow.201'))

// ************************************************

gs.setProperty('Developement.ServiceNow.201', 'Rafael');

// ************************************************

gs.print(gs.getUser());
.getDisplayName()
.getFirstName()
.getLocation()
.getUserRole()

// ************************************************

gs.print(gs.getUserID());

// Use case
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('caller_id', gs.getUserID())
incidentGR.query()
while(incidentGR.next()){
    gs.print('Incident' + ' :: ' + incidentGR.number)
}

// ************************************************

if(gs.hasRole('itil') || gs.hasRole('admin')){
    gs.print('I have access as itil or admin')
}

// ************************************************

gs.print(gs.getSession())
.isLoggedIn (boolean)

// ************************************************

gs.nil()

//Use case
var incidentGR = new GlideRecord('incident');
incidentGR.query();
while(incidentGR.next()){
    if(gs.nil(incidentGR.short_description)){
        gs.print('This incident: ' + incidentGR.number + ' there is no short description: ' + incidentGR.short_description);
    }
}

// ************************************************

gs.print(gs.tableExists('incident'));

// ***********************************************

gs.xmlToJSON()

//Use Case
var xmlDemo = '<root><test>Teste XML 1 </test><test1>Teste XML 1</test1></root>';
var json = gs.xmlToJSON(xmlDemo);
gs.print(json.root.test);

// ***********************************************
