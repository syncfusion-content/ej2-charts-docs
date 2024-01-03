var chartData = [
    { x: new Date(2017, 11, 20), y: 21 }, { x: new Date(2017, 11, 21), y: 24 },
    { x: new Date(2017, 11, 22), y: 24 }, { x: new Date(2017, 11, 26), y: 70 },
    { x: new Date(2017, 11, 27), y: 75 }, { x: new Date(2018, 0, 2), y: 82 },
    { x: new Date(2018, 0, 3), y: 53 }, { x: new Date(2018, 0, 4), y: 54 },
    { x: new Date(2018, 0, 5), y: 53 }, { x: new Date(2018, 0, 8), y: 45 }
];
var chart3D = new ej.charts.Chart3D({
    primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'yMd'
    },
    series: [
        {
            type: 'Column', xName: 'x', yName: 'y',
            dataSource: chartData
        }
    ],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');

