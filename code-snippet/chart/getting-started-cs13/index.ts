


import { Chart, LineSeries, Category } from '@syncfusion/ej2-charts';
import { Legend } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Legend, Category);
let chartData: any[] = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
let chart: Chart = new Chart({
    // Legend for chart
    legendSettings: {
        visible: true
    },
    primaryXAxis: {
        valueType: 'Category',
    },
    primaryYAxis: {
        labelFormat: '${value}K'
    },
    series:[{
        dataSource: chartData,
        name:'Sales',
        xName: 'month',
        yName: 'sales',
        type: 'Line'
    }],
    title: 'Sales Analysis'
}, '#element');



