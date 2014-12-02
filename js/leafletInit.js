var map = L.map('leafletMap', {
    maxZoom: 19
}).setView([56.123578,47.239479], 13);
L.tileLayer('http://gwosm.cloudapp.net/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OSM</a> contributors',
    maxZoom: 19
}).addTo(map);
