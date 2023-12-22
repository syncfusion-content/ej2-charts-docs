import {Chart3D, Category3D, Legend3D, StackingColumnSeries3D, Tooltip3D, Highlight3D, Chart3DLoadedEventArgs } from '@syncfusion/ej2-charts';
Chart3D.Inject(StackingColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);

let stackedData: object[] = [
    { x: 2000, y: 0.61, y1: 0.03, y2: 0.48},{ x: 2001, y: 0.81, y1: 0.05, y2: 0.53 },
    { x: 2002, y: 0.91, y1: 0.06, y2: 0.57 },{ x: 2003, y: 1, y1: 0.09, y2: 0.61 }, { x: 2004, y: 1.19, y1: 0.14, y2: 0.63 },
    { x: 2005, y: 1.47, y1: 0.20, y2: 0.64 },{ x: 2006, y: 1.74, y1: 0.29, y2: 0.66 }, { x: 2007, y: 1.98, y1: 0.46, y2: 0.76 },
    { x: 2008, y: 1.99, y1: 0.64, y2: 0.77 },{ x: 2009, y: 1.70, y1: 0.75, y2: 0.55 }
];
let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'Category',
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            //Series type as stacked column
            type: 'StackingColumn', fill: "green"
        }, {
            dataSource: stackedData, xName: 'x', yName: 'y1',
             type: 'StackingColumn', fill: "red"
        }, {
            dataSource: stackedData, xName: 'x', yName: 'y2',
             type: 'StackingColumn', fill: "yellow"

        }
      ],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');



