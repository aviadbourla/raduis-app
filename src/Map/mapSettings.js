const mapSettings = {
    center: [31.955075, 34.814135],
    defaultBaseMap: 'OpenStreetMap',
    zoom: 3,
    tileLayerUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: 0,
}

const measureOptions = {
    position: 'topleft',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'acres',
    activeColor: '#db4a29',
    completedColor: '#9b2d14',
    center: [31.48649332452159, 34.94201626628637]
};

export default { mapSettings, measureOptions };