const map = L.map('map').setView([59.42, 24.79], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

omnivore.kml('../data/map.kml')
    .on('ready', function () {
        map.fitBounds(this.getBounds());
    })
    .addTo(map);
