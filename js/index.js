Studio.$(document)
.ready(function(){
	var $ = Studio.$;
	var _ = Studio._;
	var mapId = _.urlParam('map');
	var apiKey = _.urlParam('apiKey');

	var config = {
		apiKey: apiKey,
		map: mapId || 'AVLi4IKVzzDc1QqSK-km',
		mapworksPath: 'https://app.dev.mapworks.io',
		resourcesPath: 'https://api.dev.mapworks.io/resources',
		mapPath: 'https://api.dev.mapworks.io/maps/latest',
		studioPath: 'https://api.dev.mapworks.io/studio/latest',
		mapworksSessionPath: 'https://app.dev.mapworks.io/users/plugins/mapworks/getLoginStatus.php',
		authentication: {
			header: 'authorization',
			realm: 'Mapworks',
			scheme: 'mapworks'
		},
		navigationControl: false,
		scaleControl: true,
		toolbarControl: true,
		zoomControl: false,
	}

	var mapFetchFail = function(response) {
		alert('fetch failed! ' + response.statusText);
	};

	var map = window.map = new Studio.core.Map('#embed1', config);
	map.load(function(err, map) {
		if (err) {
			Studio.app.component.dialogue.Dialogue.alert({
				title: 'Error loading map',
				message: err
			});
		} else {
			console.log("Map Load");
		}
	})
	.once('ready', function() {
		map.off('fetch:failed');
		// Initialise app components
		Studio.app.App.init(Studio, map, config);

		customWidget(map);
	});
	map.once('fetch:failed', mapFetchFail);
});
