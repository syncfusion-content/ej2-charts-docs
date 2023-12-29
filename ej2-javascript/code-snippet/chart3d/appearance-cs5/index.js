var chartData = [
    { country: "USA", gold: 50, silver: 70, bronze: 45 },
    { country: "China", gold: 40, silver: 60, bronze: 55 },
    { country: "Japan", gold: 70, silver: 60, bronze: 50 },
    { country: "Australia", gold: 60, silver: 56, bronze: 40 },
    { country: "France", gold: 50, silver: 45, bronze: 35 },
    { country: "Germany", gold: 40, silver: 30, bronze: 22 },
    { country: "Italy", gold: 40, silver: 35, bronze: 37 },
    { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
];

var chart3D = new ej.charts.Chart3D({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        dataSource: chartData,
        xName: 'country', yName: 'gold', type: 'Column',
    }],
    title: 'Olympic Medals',
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100,
    background: 'skyblue',
    border: { color: "#FF0000", width: 2 },
    //Change chart margin to left, right, top and bottom
    margin: { left: 40, right: 40, top: 40, bottom: 40 },
}, '#element');

