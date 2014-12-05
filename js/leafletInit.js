var map = L.map('leafletMap', {
    maxZoom: 19
}).setView([56.123578,47.239479], 10);
L.tileLayer('http://gwosm.cloudapp.net/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OSM</a> contributors',
    maxZoom: 19
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: 'http://leafletjs.com/docs/images/leaf-green.png',
    shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
//var marker = L.marker([56.123578,47.239479], {icon: greenIcon}).addTo(map);
// var marker = L.marker([56.123578,47.239479]).addTo(map);
var iconO = ['leaf-orange', 'leaf-red', 'leaf-green'];
for(var i = 0; i < 100; i++){
	var rndX = Math.random() * (57 - 54) + 54,
		rndY = Math.random() * (48 - 46) + 46;
	var iconNum = Math.random() * (2);
	/*
	var Icon = L.icon({
	    iconUrl: 'http://leafletjs.com/docs/images/' + iconO[iconNum.toFixed()] + '.png',
	    shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',

	    iconSize:     [38, 95], // size of the icon
	    shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});
	*/
	var Icon = L.divIcon({
		className: 'my-div-icon',
		html: '+'
	});
	L.marker([rndX.toFixed(4),rndY.toFixed(4)], {icon: Icon}).bindPopup("I am a happy yellow marker )...").addTo(map); 
}