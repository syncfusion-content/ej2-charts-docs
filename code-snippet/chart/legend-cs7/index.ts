


import { Chart, ColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Legend);
let chartData: any[] = [
      { country: "USA", gold: 50, silver: 70, bronze: 45 },
      { country: "China", gold: 40, silver: 60, bronze: 55 },
      { country: "Japan", gold: 70, silver: 60, bronze: 50 },
      { country: "Australia", gold: 60, silver: 56, bronze: 40 },
      { country: "France", gold: 50, silver: 45, bronze: 35 },
      { country: "Germany", gold: 40, silver: 30, bronze: 22 },
      { country: "Italy", gold: 40, silver: 35, bronze: 37 },
      { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0, maximum: 80,
        interval: 20, title: 'Medals'
    },
    series:[{
        dataSource: chartData,
        xName: 'country', yName: 'gold',
        name: 'Gold', type: 'Column', legendShape: 'Circle'
    }, {
        dataSource: chartData,
        xName: 'country', yName: 'silver',
        name: 'Silver', type: 'Column', legendShape: 'Circle'
    }, {
        dataSource: chartData,
        xName: 'country', yName: 'bronze',
        name: 'Bronze', type: 'Column', legendShape: 'Circle'
    }],
    title: 'Olympic Medals',
    legendSettings: {
         visible: true,
         //Legend size for chart
         width: '500', height: '100',
         border: { width: 1, color: 'pink'}
    }
}, '#element');



