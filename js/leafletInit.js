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

var markerColors = ['redMarker', 'yellowMarker', 'blueMarker'];
var markerIcons = ['auto', 'star', 'snow'];
for(var i = 0; i < 100; i++){
	var rndX = Math.random() * (57 - 54) + 54,
		rndY = Math.random() * (48 - 46) + 46;
	var markerColorNum = Math.floor(Math.random() * (3));
	var markerIconNum = Math.floor(Math.random() * (3));

	var Icon = L.divIcon({
		className: 'leafletIconWr ' + markerColors[markerColorNum],
		iconSize: null,
		html: '<div class="'  + markerIcons[markerIconNum] + 'Icon"></div>'
	});
	L.marker([rndX.toFixed(4),rndY.toFixed(4)], {icon: Icon}).bindPopup("I am a happy " + markerIcons[markerIconNum] + " " + markerColors[markerColorNum]  + " :)...").addTo(map); 
}
/*
var Icon = L.divIcon({
		className: 'leafletIconWr blueMarker',
		iconSize: null,
		html: '<div class="snowIcon"></div>'
	});
L.marker([56.123578,47.239479], {icon: Icon}).bindPopup("I am a happy marker :)...").addTo(map);
*/