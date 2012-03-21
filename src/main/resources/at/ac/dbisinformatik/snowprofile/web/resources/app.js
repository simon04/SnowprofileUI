Ext.require([ 
    'Ext.layout.container.*', 
]);

Ext.application({
    name: 'LWD',

    appFolder: 'app',
    
    controllers: [
        'Schneeprofil',
        'GoogleMaps',
        'Graph',
        'Menu',
        'Users'
    ],
    
    launch: function() {
        Ext.create('Ext.Viewport', {
        	layout:'fit',
        	items: [ 
        		{
        			xtype: 'panel',
                    items: [
                        {
                        	xtype: 'menu',
                        	border: false
                        },
                        {
                        	xtype: 'panel',
                        	layout: 'column',
                            defaults: {
                                layout: 'anchor',
                                defaults: {
                                    anchor: '100%',
                                }
                            },
                	    	items: [{
                                columnWidth: 1/2,
                                baseCls:'x-plain',
                                items: [
                                    {
                                    	xtype: 'tabpanel',
                                    	activeTab: 0, // index or id
                                    	height: '50%',
                                    	items:[
                                    	    {
	                                    		title: 'Kopf',
	                                    		autoScroll: true,
	                                    		items: [
	                                		        {
	                                		        	xtype: 'kopf',
	                                		        	border: false
	                                		        }
	                                    		]
	                                    	},
	                                    	{
	                                    	    title: 'Karte',
	                                    	    items: [
                                    	            {
                                    	            	xtype: 'googlemaps',
                                    	            	height: '100%',
                                    	            }
                                   	            ]
	                                    	}
                                    	]
                                    },
                                    {
                                    	xtype: 'tabpanel',
                                    	activeTab: 0,
                                    	height: '50%',
                                    	items: [
                                	        {
                                	        	title: 'Schichtprofil',
                                	        	items: [
	                                		        {
	                                		        	xtype: 'schichtprofillist',
	                                		        	border: false
	                                		        }
	                                    		]
                                	        },
                                	        {
                                	        	title: 'Schneetemperatur'
                                	        },
                                	        {
                                	        	title: 'Schwachschicht'
                                	        },
                                	        {
                                	        	title: 'Rutschblocktest'
                                	        },
                                	        {
                                	        	title: 'Kompressionstest'
                                	        },
                                	        {
                                	        	title: 'Rammwiderstand'
                                	        },
                                	        {
                                	        	title: 'Dichte'
                                	        },
                                	        {
                                	        	title: 'F&auml;den'
                                	        },
                                    	]
                                    }
                                ]
                            },{
                                columnWidth: 1/2,
                                baseCls:'x-plain',
                                items: [
                                    {
                                    	xtype: 'panel',
                                    	layout: 'fit',
                                    	height: '100%',
                                    	autoScroll: true,
                                    	border: true,
                                    	html: '<img src="/lwd/static/1.0.0.0/data/img/test.gif" title="Test-Bild" style="width:100%" />'
                                    }
                                ]
                            }]
                        }
                    ]
        		}
        	]
        });
    }
    
});