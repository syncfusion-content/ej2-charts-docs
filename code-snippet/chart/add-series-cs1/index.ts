


import { Chart, ColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Legend);
import { Button } from '@syncfusion/ej2-buttons';
import { EmitType } from '@syncfusion/ej2-base';

let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Manager',
            valueType: 'Category',

        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Sales',
            minimum: 0,
            maximum: 20000,
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

    document.getElementById('add').onclick = () => {
        chart.addSeries([{
                type: 'Column',
                dataSource: [{ x: 'John', y: 11000 }, { x: 'Jake', y: 16000 }, { x: 'Peter', y: 19000 },
                { x: 'James', y: 12000 }, { x: 'Mary', y: 10700 }],
                xName: 'x', width: 2,
                yName: 'y'
            }]);
    };
     document.getElementById('remove').onclick = () => {
        chart.removeSeries(1);
    };


{%endtab%}

## Customize the series points by using patterns

You can customize the series points with patterns by using the `pointColorMapping` property.

To customize the series point colors, follow the given steps:

**Step 1**:

Define the patterns and map the pattern URL to the series point using `pointColorMapping` property in series.

{% tab template= "chart/pattern-point" %}



import { Chart, ColumnSeries, Category, DataLabel, Tooltip } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DataLabel, Category, Tooltip);
import { EmitType } from '@syncfusion/ej2-base';

    let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            minimum: 0, maximum: 250, interval: 50
        },

        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', pointColorMapping: 'color',
                dataSource: [
                    { x: 'BGD', y: 106, text: 'Bangaladesh', color:  'url(#chess)' },
                    { x: 'BTN', y: 103, text: 'Bhutn',  color:  'url(#cross)' },
                    { x: 'NPL', y: 198, text: 'Nepal',  color: 'url(#circle)' },
                    { x: 'THA', y: 189, text: 'Thiland',  color:  'url(#rectangle)' },
                    { x: 'MYS', y: 230, text: 'Malaysia',  color: 'url(#line)' }
                ], name: 'Tiger',
                cornerRadius: {
                    bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10
                }
            }
        ],
        legendSettings: { visible: false },
        //Initializing Chart title
        title: 'Tiger Population - 2016',
    width:'650px',
    height: '300px'
    },'#element');


{%endtab%}

## Show the total value for stacking series in data label

By using the `annotation`, you can show any element in desired view.

To show the total value in data points, follow the given steps:

**Step 1**:

Define annotation for each x point in chart, now change the annotation value in chart by usingthe [`annotationRender`](https://ej2.syncfusion.c om/documentation/api/chart/iAnnotationRenderEventArgs/) event.
In this event, assign the stacked value of the last series to the annotation to show the total value of the
stacking series.

{% tab template= "chart/how-to" %}



import { ChartAnnotation, Chart, StackingColumnSeries, Category, DataLabel, Tooltip, ILoadedEventArgs,IAnnotationRenderEventArgs, Points } from '@syncfusion/ej2-charts';
Chart.Inject(StackingColumnSeries, ChartAnnotation, DataLabel, Category, Tooltip);
import { EmitType } from '@syncfusion/ej2-base';
    let i: number = 0;
    let chart: Chart = new Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1
        },
        // Initialize the chart series
        series: [
            {
                type: 'StackingColumn', xName: 'x', width: 2, yName: 'y', name: 'Apple', animation: {enable: false},
                dataSource: [{ x: 'Jamesh', y: 5 }, { x: 'Michael', y: 4 }, { x: 'John', y: 5 }],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            }, {
                type: 'StackingColumn', xName: 'x', width: 2, yName: 'y', name: 'Orange',  animation: {enable: false},
                dataSource: [{ x: 'Jamesh', y: 4 }, { x: 'Michael', y: 3 }, { x: 'John', y: 4 }],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            },
            {
                type: 'StackingColumn', xName: 'x', width: 2, yName: 'y', name: 'Grapes', animation: {enable: false},
                dataSource: [{ x: 'Jamesh', y: 1 }, { x: 'Michael', y: 2 }, { x: 'John', y: 2 }],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            }
        ],
        annotations:[
            {
               content: '<div id="point1" style="font-size:11px;font-weight:bold;color:gray;fill:gray;"><span>12</span></div>',
               x: 'Jamesh', y: '11', coordinateUnits: 'Point', region: 'Series'
            },
            {
               content: '<div id="point1" style="font-size:11px;font-weight:bold;color:gray;fill:gray;"><span>12</span></div>',
               x: 'Michael', y: '10', coordinateUnits: 'Point', region: 'Series'
            },
            {
               content: '<div id="point1" style="font-size:11px;font-weight:bold;color:gray;fill:gray;"><span>12</span></div>',
               x: 'John', y: '12', coordinateUnits: 'Point', region: 'Series'
            }
        ],
        // Initialize the chart title
        title: 'Fruit Consumption', tooltip: { enable: true, shared: true },
        annotationRender: (args: IAnnotationRenderEventArgs) => {
          let length = chart.series.length - 1;
          let value = chart.series[length].stackedValues.endValues[i];
          i += (i == length) ? -length : 1;
          args.content.children[0].children[0].innerHTML = value;
        }
    width:'650px',
    height: '350px'
    });
    chart.appendTo('#element');


