import {Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D, I3DAxisLabelRenderEventArgs } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);

let series1: Object[] = [];
let point1: Object;
let value: number = 80;
let i: number;
for (i = 1; i < 50; i++) {
    if (Math.random() > .5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    point1 = { x: i, y: value.toFixed(1) };
    series1.push(point1);
}

let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        title: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        maximumLabels: 1,
    },

    //Initializing Primary Y Axis
    primaryYAxis:
    {
        title: 'Profit ($)',
        rangePadding: 'None',
        majorTickLines: { width: 0 }
    },    
    series: [
        {
            type: 'Column',
            dataSource: series1,
            name: 'Product X',
            xName: 'x',
            yName: 'y',
            animation: { enable: false }
        },
    ],
    title: 'Sales History of Product X',
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');



