


import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { labelData } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y'
        }
    ],
    legendSettings:{ position:'Top' ,alignment:'Near'}
}, '#element');



