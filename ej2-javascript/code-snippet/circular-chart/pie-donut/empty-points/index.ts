


import { CircularChart3D, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D);
let circularchart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, 
                { x: 'Mar', y: undefined }, { x: 'Apr', y: 13.5 },
                { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, 
                { x: 'Jul', y: null }, { x: 'Aug', y: 25 },
                { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }
            ],
            xName: 'x',
            yName: 'y',
            emptyPointSettings: { mode: 'Zero' },
            dataLabel: {
                visible: true,
                position: 'Outside'
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    }
}, '#element');


