const kmlSource = new ol.source.Vector({
    url: '../data/map.kml',
    format: new ol.format.KML({ extractStyles: false }),
});

const pointStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({ color: '#e53935' }),
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
    }),
});

const lineStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({ color: '#1976d2', width: 4 }),
});

const polygonStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({ color: '#fbc02d', width: 2 }),
    fill: new ol.style.Fill({ color: 'rgba(251, 192, 45, 0.3)' }),
});

const kmlLayer = new ol.layer.Vector({
    source: kmlSource,
    style: function (feature) {
        const type = feature.getGeometry().getType();
        if (type === 'Point') return pointStyle;
        if (type === 'LineString') return lineStyle;
        if (type === 'Polygon') return polygonStyle;
        return null;
    },
});

const baseLayer = new ol.layer.Tile({
    source: new ol.source.OSM(),
});

const map = new ol.Map({
    target: 'map',
    layers: [baseLayer, kmlLayer],
    view: new ol.View({
        center: ol.proj.fromLonLat([24.79, 59.42]),
        zoom: 12,
    }),
});

kmlSource.once('featuresloadend', function () {
    map.getView().fit(kmlSource.getExtent(), { padding: [50, 50, 50, 50] });
});