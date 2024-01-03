


import {Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);

let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        pointColorMapping: "color",
        dataSource: [
            { x: 'Jan', y: 6.96, color: "#ed4c40" },
            { x: 'Feb', y: 8.9, color: "#3285f3"},
            { x: 'Mar', y: 12, color: "#1dd7f3"},
            { x: 'Apr', y: 17.5, color: "#fe1684" },
            { x: 'May', y: 22.1, color: "#4633f2" }
        ], xName: 'x', yName: 'y', type: 'Column',
    }],
    title: 'Olympic Medals',
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');



