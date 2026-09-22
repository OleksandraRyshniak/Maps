Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IldYNHQ5MVZUS2d2NUQ2STciLCJqdGkiOiIzZDBkM2Q2Ni0xZTlhLTQ4NjYtYThlZi0yZGZlYjg3NzE3ZWEiLCJpZCI6NTA0Mzg3LCJzdWIiOiJzYXNoYV9yeXNobmlhayIsImlzcyI6Imh0dHBzOi8vYXBpLmNlc2l1bS5jb20iLCJhdWQiOiJrbWwiLCJpYXQiOjE3OTAwNjUxNTd9.ydVmDbtc874t_sNnD-BXizBmkridYyG1EYI3qk5M27E";

const viewer = new Cesium.Viewer("cesiumContainer", {
    baseLayerPicker: false,
    geocoder: false
});

const kmlDataSource = Cesium.KmlDataSource.load("../data/map.kml", {
    camera: viewer.scene.camera,
    canvas: viewer.scene.canvas
});

viewer.dataSources.add(kmlDataSource).then(function (dataSource) {
    viewer.flyTo(dataSource);
});