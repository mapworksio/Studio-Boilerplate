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

	const map = Studio.init('#embed1', config)
	.once('ready', function(){
		customWidget(map);
	});
});
