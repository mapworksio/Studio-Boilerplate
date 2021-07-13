import { customWidget } from './custom.js';

document.addEventListener('DOMContentLoaded', function(event){
	const { Studio } = window;
	const { id = 'AVLi4IKVzzDc1QqSK-km' } = Studio._.urlParamObj();

	const config = {
		map: id,
		mapworksPath: 'https://app.dev.mapworks.io',
		access: Studio.core.Map.Access.ANONYMOUS,
		navigationControl: false,
		scaleControl: true,
		toolbarControl: true,
		zoomControl: false,
		mapworksLoginProvider: {
			client_id: '4td941kup5d7pq38rq7gq6utu',
			popup_redirect_uri: 'http://localhost:8080/openId.html',
			anonymousIdp: 'public-anonymous'
		}
	}

	const map = window.map = new Studio.core.Map('#embed1', config);
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
	.once('ready', function(){
		map.off('fetch:failed');
		// Initialise app components
		Studio.app.App.init(Studio, map, config);

		customWidget(map);
	})
	.once('fetch:failed', function(response){
		alert(`fetch failed! ${response.statusText}`);
	});

});
