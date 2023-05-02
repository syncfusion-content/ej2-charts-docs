


import { AccumulationChart, AccumulationLegend, PieSeries, AccumulationDataLabel } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationChart, AccumulationLegend, PieSeries, AccumulationDataLabel );

let piechart: AccumulationChart = new AccumulationChart({
   series: [
            {

                dataSource: [
                    { x: 'Argentina', y: 505370, r: '100' },
                    { x: 'Belgium', y: 551500, r: '118.7' },
                    { x: 'Cuba', y: 312685, r: '124.6' },
                    { x: 'Dominican Republic', y: 350000, r: '137.5' },
                    { x: 'Egypt', y: 301000, r: '150.8' },
                    { x: 'Kazakhstan', y: 300000, r: '155.5' },
                    { x: 'Somalia', y: 357022, r: '160.6' }

                ],
                dataLabel: {
                    visible: true, position: 'Outside',
                    name: 'x'

                },
                radius: 'r', xName: 'x',
                yName: 'y', innerRadius: '20%'
            },

        ],
        enableSmartLabels: true,
        legendSettings: {
            visible: true,
        },
        enableAnimation: true,
        title: 'Countries compared by population density and total area'
}, '#element');



