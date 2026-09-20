const map = L.map('map').setView([59.42, 24.79], 12);

const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const satelliit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

const kml = omnivore.kml('../data/map.kml')
    .on('ready', function () {
        map.fitBounds(this.getBounds());
    })
    .addTo(map);

L.control.layers(
    { 'Kaart': osm, 'Satelliit': satelliit },
    { 'KML': kml }
).addTo(map);

L.control.scale().addTo(map);
