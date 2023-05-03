


import { AccumulationChart, AccumulationAnnotation } from '@syncfusion/ej2-charts';
import { labelData } from './datasource.ts';
AccumulationChart.Inject(AccumulationAnnotation);
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y'
        }
    ],
    annotations:[{
        content:'<div style="border: 1px solid black;background-color:#f5f5f5; padding: 5px 5px 5px 5px">13.5</div>',
        region: 'Chart',
        coordinateUnits: 'Pixel',
        x: 150,
        y: 150
    }],

}, '#element');



