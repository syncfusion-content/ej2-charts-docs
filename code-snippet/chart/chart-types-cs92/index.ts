


import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        // Series type as column series
        type: 'Column', fill: 'red', border:{ width: 2, color: 'black'}
    }],

}, '#element');



