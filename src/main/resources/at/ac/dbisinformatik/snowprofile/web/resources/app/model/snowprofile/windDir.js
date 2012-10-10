Ext.define('LWD.model.snowprofile.windDir', {
	extend: 'Ext.data.Model',
	associations: [
       {type: 'hasOne', model: 'LWD.model.snowprofile.AspectPosition', name: 'AspectPosition', associationKey:'AspectPosition'}
    ],
    belongsTo: 'LWD.model.snowprofile.SnowProfileMeasurements'
});