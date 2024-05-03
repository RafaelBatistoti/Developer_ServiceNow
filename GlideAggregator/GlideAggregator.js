
var agg = new GlideAggregate('incident');
agg.addAggregate('COUNT')
agg.query();
var countIncidents = 0;
while(agg.next()){
    countIncidents = agg.getAggregate('COUNT');
}
gs.info('You have: ' + countIncidents + 'incidents in the table');

//******************************************************

var agg = new GlideAggregate('incident');
agg.addEncodedQuery('caller_id=5137153cc611227c000bbd1bd8cd2005')
agg.addAggregate('COUNT')
agg.query();
var incidentCallerCount = 0
if(agg.next()){
    incidentCallerCount = agg.getAggregate('COUNT')
}
gs.info(incidentCallerCount);

//******************************************************

var agg = new GlideAggregate('incident');
agg.addNotNullQuery('assigned_to');
agg.addAggregate('COUNT');
agg.query()
var incidentAssignedNotNull = 0;
if(agg.next()){
    incidentAssignedNotNull = agg.getAggregate('COUNT')
}
gs.info(incidentAssignedNotNull)

//******************************************************

var agg = new GlideAggregate('incident');
agg.addNullQuery('assigned_to');
agg.addAggregate('COUNT');
agg.query()
var incidentAssignedNotNull = 0;
if(agg.next()){
    incidentAssignedNotNull = agg.getAggregate('COUNT')
}
gs.info(incidentAssignedNotNull)

//******************************************************

var incidentGA = new GlideAggregate('incident');
incidentGA.query();
gs.info(incidentGA.getRowCount());

//******************************************************

var incidentGA = new GlideAggregate('incident');
incidentGA.addQuery('active', false);
incidentGA.query();
gs.print(incidentGA.getRowCount())

//******************************************************

var incidentGA = new GlideAggregate('incident');
incidentGA.addAggregate('COUNT');
incidentGA.orderBy('category');
incidentGA.query();
while(incidentGA.next()){
    var result = incidentGA.getDisplayValue('category') + ' :: ' + incidentGA.getAggregate('COUNT')
    gs.info(result)
}

//******************************************************

var incidentGA = new GlideAggregate('cmdb_ci');
incidentGA.addAggregate('SUM', 'cost');
incidentGA.addEncodedQuery('nameLIKElinux')
incidentGA.setGroup('false')
incidentGA.query();
while(incidentGA.next()){
    var soma = incidentGA.getAggregate('SUM','cost');
    gs.info(soma)  
}

//******************************************************

var agg = new GlideAggregate('cmdb_ci');
agg.addAggregate('SUM', 'cost');
agg.orderBy('category')
agg.query();
while(agg.next()){
    var result = agg.getValue('category') + ' :: ' + agg.getAggregate('SUM', 'cost')
    gs.info(result)
}