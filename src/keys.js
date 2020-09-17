const bingKey = 'AsiYxGL4X9eXHFPVBnwN5UT60QwzjjL7KEp0C38uscjQmSOEypY0aaeT3A0sUBQR'

const mapSettings = {
    center: [31.955075, 34.814135],
    defaultBaseMap: 'OpenStreetMap',
    zoom: 3,
    tileLayerUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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

export default { bingKey, mapSettings, measureOptions };