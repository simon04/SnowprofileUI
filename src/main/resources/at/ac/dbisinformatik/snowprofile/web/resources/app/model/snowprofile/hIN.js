Ext.define('LWD.model.snowprofile.hIN', {
	extend: 'Ext.data.Model',
	fields: [
        'dateTimeCleared'
    ],
    associations: [
       {type: 'hasMany', model: 'LWD.model.snowprofile.Components', name: 'Components', associationKey:'Components'}
    ],
    belongsTo: 'LWD.model.snowprofile.SnowProfileMeasurements'
});