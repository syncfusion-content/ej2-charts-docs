


import { CircularChart3D, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D, CircularChart3DTextRenderEventArgs } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D);
let circularchart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13 }, 
                { x: 'Feb', y: 13.5 },
                { x: 'Mar', y: 7 }, 
                { x: 'Apr', y: 13.5 }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    },
    textRender: (args: CircularChart3DTextRenderEventArgs) => {
        args.text = args.point.percentage + "%";
    }
}, '#element');



