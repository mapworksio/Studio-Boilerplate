window.customWidget = function(map){
	var toolbar = map.getControl('toolbar');
	var _ = Studio._;
	var Backbone = Studio.Backbone;

	// Add logo
	map.getControlRegion('bottomRight')
	.prepend('<img src="./mapworks.png"></img>');

	var TabModel = Studio.app.component.panel.tab.Model;

	// Create custom view
	const MyView = Backbone.View.extend({
		template: '<div class="widget-container">Custom Widget!</div>',
		render: function() {
			this.$el.html(this.template);
			return this;
		},
	});

	// Add it to toolbar
	toolbar.collection.add(
		new TabModel({
			id: 'widget',
			title: 'Widget',
			iconClass: 'glyphicon glyphicon-ice-lolly',
			view: new MyView().render(),
		}),
		{ at: 3 }
	);

	// Remove settings tool
	toolbar.collection.remove(toolbar.collection.get('settings'));

	// Remove bottom tab
	toolbar.setNumberBottomTabs(0);
};
