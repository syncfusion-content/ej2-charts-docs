import { Chart, AreaSeries, LineSeries, DateTime, DataLabel, Tooltip, Highlight, Crosshair, Zoom, ZoomSettings, IZoomCompleteEventArgs, Legend, Selection, ISelectionCompleteEventArgs, IMouseEventArgs, ITooltipRenderEventArgs, ILegendClickEventArgs } from '@syncfusion/ej2-charts';
Chart.Inject(AreaSeries, LineSeries, DataLabel, DateTime, Tooltip, Zoom, Highlight, Legend, Selection, Crosshair);
import { Browser } from '@syncfusion/ej2-base';
import { synchronizedData } from './datasource.ts';
import { Axis } from '@syncfusion/ej2/charts';

let charts: Chart[] = [];
let zoomFactor: number = 0;
let zoomPosition: number = 0;
let count: number = 0;

let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: new Date(2023, 1, 18),
        maximum: new Date(2023, 7, 18),
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
        labelRotation: Browser.isDevice ? -45 : 0,
        interval: Browser.isDevice ? 2 : 1
    },

    primaryYAxis: {
        labelFormat: 'n2',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 0.86,
        maximum: 0.96,
        interval: 0.025
    },
    chartArea: { border: { width: 0 } },

    series: [
        {
            type: 'Line', dataSource: synchronizedData, xName: 'USD', width: 2, yName: 'EUR', emptyPointSettings: { mode: 'Drop' }
        }
    ],
    zoomSettings: {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableScrollbar: false,
        enableDeferredZooming: false,
        enableSelectionZooming: true,
        enablePan: true,
        mode: 'X',
        toolbarItems: ['Pan', 'Reset']
    },
    zoomComplete: (args: IZoomCompleteEventArgs) => {
        if (args.axis.name === 'primaryXAxis') {
            zoomFactor = args.currentZoomFactor;
            zoomPosition = args.currentZoomPosition;
            zoomCompleteFunction(args);
        }
    },
    chartMouseLeave: (args: IMouseEventArgs) => {
        chart1.hideCrosshair();
        chart1.hideTooltip();
    },
    chartMouseMove: (args: IMouseEventArgs) => {
        if ((!Browser.isDevice && !chart.isTouch && !chart.isChartDrag) || chart.startMove) {
            chart1.startMove = chart.startMove;
            chart1.showTooltip(args.x, args.y);
            chart1.showCrosshair(args.x, args.y);
        }
    },
    chartMouseUp: function (args: IMouseEventArgs) {
        if (Browser.isDevice && chart.startMove) {
            chart1.hideCrosshair();
            chart1.hideTooltip();
        }
    },
    selectionComplete: function (args: ISelectionCompleteEventArgs | any) {
        selectionCompleteFunction(args);
    },
    selectionPattern: 'Box',
    selectionMode: 'Point',
    title: 'US to EURO',
    titleStyle: { textAlignment: 'Near' },
    tooltip: { enable: true, fadeOutDuration: Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>€${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
    crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' }
});
chart.appendTo('#container1');
charts.push(chart);

let chart1: Chart = new Chart({
    primaryXAxis: {
        minimum: new Date(2023, 1, 18),
        maximum: new Date(2023, 7, 18),
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
        labelRotation: Browser.isDevice ? -45 : 0,
        interval: Browser.isDevice ? 2 : 1
    },
    primaryYAxis: {
        labelFormat: 'n1',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 79,
        maximum: 85,
        interval: 1.5
    },
    chartArea: { border: { width: 0 } },
    series: [
        {
            type: 'Area', dataSource: synchronizedData, xName: 'USD', width: 2, yName: 'INR', opacity: 0.6, border: { width: 2 }
        }
    ],
    zoomSettings: {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableScrollbar: false,
        enableDeferredZooming: false,
        enableSelectionZooming: true,
        enablePan: true,
        mode: 'X',
        toolbarItems: ['Pan', 'Reset']
    },
    zoomComplete: (args: IZoomCompleteEventArgs) => {
        if (args.axis.name === 'primaryXAxis') {
            zoomFactor = args.currentZoomFactor;
            zoomPosition = args.currentZoomPosition;
            zoomCompleteFunction(args);
        }
    },
    chartMouseMove: (args: IMouseEventArgs) => {
        if (!Browser.isDevice || chart1.startMove) {
            chart.startMove = chart1.startMove;
            chart.showTooltip(args.x, args.y);
            chart.showCrosshair(args.x, args.y);
        }
    },
    chartMouseLeave: (args: IMouseEventArgs) => {
        chart.hideCrosshair();
        chart.hideTooltip();
    },
    chartMouseUp: function (args: IMouseEventArgs) {
        if ((!Browser.isDevice && !chart1.isTouch && !chart1.isChartDrag) || chart1.startMove) {
            chart.hideCrosshair();
            chart.hideTooltip();
        }
    },
    selectionComplete: function (args: ISelectionCompleteEventArgs | any) {
        selectionCompleteFunction(args);
    },
    selectionPattern: 'Box',
    selectionMode: 'Point',
    title: 'US to INR',
    titleStyle: { textAlignment: 'Near' },
    tooltip: { enable: true, fadeOutDuration: Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>₹${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
    crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' }
});
chart1.appendTo('#container2');
charts.push(chart1);
function zoomCompleteFunction(args: IZoomCompleteEventArgs): void {
    for (let i: number = 0; i < charts.length; i++) {
        if ((args.axis as Axis).series[0].chart.element.id !== charts[i].element.id) {
            charts[i].primaryXAxis.zoomFactor = zoomFactor;
            charts[i].primaryXAxis.zoomPosition = zoomPosition;
            charts[i].zoomModule.isZoomed = (args.axis as Axis).series[0].chart.zoomModule.isZoomed;
            charts[i].zoomModule.isPanning = (args.axis as Axis).series[0].chart.zoomModule.isPanning;
        }
    }
}

function selectionCompleteFunction(args: ISelectionCompleteEventArgs | any): void {
    if (count == 0) {
        for (var j = 0; j < args.selectedDataValues.length; j++) {
            args.selectedDataValues[j].point = args.selectedDataValues[j].pointIndex;
            args.selectedDataValues[j].series = args.selectedDataValues[j].seriesIndex;
        }
        for (var i = 0; i < charts.length; i++) {
            if (args.chart.element.id !== charts[i].element.id) {
                charts[i].selectedDataIndexes = args.selectedDataValues;
                count += 1;
                charts[i].dataBind();
            }
        }
        count = 0;
    }
}