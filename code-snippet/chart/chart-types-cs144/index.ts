


import { Chart, StackingLineSeries } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(StackingLineSeries);

let chart: Chart = new Chart({
    series:[{
        dataSource: numData,
        //fill for chart series
        fill: 'red',
        //line width as 4 for chart series
        width:4,
        //dash array value as 5,5
        dashArray: '5,5',
        xName: 'x', yName: 'y',
        marker:{ visible: true, isFilled: true, height: 10, width:10}
        type: 'StackingLine'
    }],
}, '#element');



