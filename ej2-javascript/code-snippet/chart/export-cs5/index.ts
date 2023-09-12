

import { Chart, ColumnSeries, Category, Legend, Export, ExportType } from '@syncfusion/ej2-charts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
Chart.Inject(ColumnSeries, Category, Legend, Export);
import { EmitType } from '@syncfusion/ej2-base';

let chart: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        title: 'Manager',
        valueType: 'Category',
        majorGridLines: { width: 0 }

    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        title: 'Sales',
        minimum: 0,
        maximum: 20000,
        majorGridLines: { width: 0 }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Column',
            dataSource: [{ x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
            { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }],
            xName: 'x', width: 2,
            yName: 'y'
        }
    ],
    //Initializing Chart title
    title: 'Sales Comparision',
}, '#element');


let mode: DropDownList = new DropDownList({
    index: 0,
    width: 90
});
mode.appendTo('#mode');
document.getElementById('print').onclick = () => {
    let fileName: string = (<HTMLInputElement>(document.getElementById('fileName'))).value;
    chart.exportModule.export(<ExportType>mode.value, fileName);
};