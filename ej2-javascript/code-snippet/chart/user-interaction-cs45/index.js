var charts = [];
var zoomFactor = 0;
var zoomPosition = 0;
var count = 0;

var chart = new ej.charts.Chart({
    primaryXAxis: {
        minimum: new Date(2023, 1, 18),
        maximum: new Date(2023, 7, 18),
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: ej.base.Browser.isDevice ? 'None' : 'Shift',
        labelRotation: ej.base.Browser.isDevice ? -45 : 0,
        interval: ej.base.Browser.isDevice ? 2 : 1
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
    zoomComplete: function (args) {
        if (args.axis.name === 'primaryXAxis') {
            zoomFactor = args.currentZoomFactor;
            zoomPosition = args.currentZoomPosition;
            zoomCompleteFunction(args);
        }
    },
    chartMouseLeave: function (args) {
        chart1.hideCrosshair();
        chart1.hideTooltip();
    },
    chartMouseMove: function (args) {
        if ((!ej.base.Browser.isDevice && !chart.isTouch && !chart.isChartDrag) || chart.startMove) {
            chart1.startMove = chart.startMove;
            chart1.showTooltip(args.x, args.y);
            chart1.showCrosshair(args.x, args.y);
        }
    },
    chartMouseUp: function (args) {
        if (ej.base.Browser.isDevice && chart.startMove) {
            chart1.hideCrosshair();
            chart1.hideTooltip();
        }
    },
    selectionComplete: function (args) {
        selectionCompleteFunction(args);
    },
    selectionPattern: 'Box',
    selectionMode: 'Point',
    title: 'US to EURO',
    titleStyle: { textAlignment: 'Near' },
    tooltip: { enable: true, fadeOutDuration: ej.base.Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>€${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
    crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' },
    load: load
});
chart.appendTo('#container1');
charts.push(chart);

var chart1 = new ej.charts.Chart({
    primaryXAxis: {
        minimum: new Date(2023, 1, 18),
        maximum: new Date(2023, 7, 18),
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: ej.base.Browser.isDevice ? 'None' : 'Shift',
        labelRotation: ej.base.Browser.isDevice ? -45 : 0,
        interval: ej.base.Browser.isDevice ? 2 : 1
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
    zoomComplete: function (args) {
        if (args.axis.name === 'primaryXAxis') {
            zoomFactor = args.currentZoomFactor;
            zoomPosition = args.currentZoomPosition;
            zoomCompleteFunction(args);
        }
    },
    chartMouseMove: function (args) {
        if ((!ej.base.Browser.isDevice && !chart1.isTouch && !chart1.isChartDrag) || chart1.startMove) {
            chart.startMove = chart1.startMove;
            chart.showTooltip(args.x, args.y);
            chart.showCrosshair(args.x, args.y);
        }
    },
    chartMouseLeave: function (args) {
        chart.hideCrosshair();
        chart.hideTooltip();
    },
    chartMouseUp: function (args) {
        if (ej.base.Browser.isDevice && chart4.startMove) {
            chart.hideCrosshair();
            chart.hideTooltip();
        }
    },
    selectionComplete: function (args) {
        selectionCompleteFunction(args);
    },
    selectionPattern: 'Box',
    selectionMode: 'Point',
    title: 'US to INR',
    titleStyle: { textAlignment: 'Near' },
    tooltip: { enable: true, fadeOutDuration: ej.base.Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>₹${point.y}</b> <br> ${point.x} 2023', enableMarker: false },
    crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' },
});
chart1.appendTo('#container2');
charts.push(chart1);

function zoomCompleteFunction(args) {
    for (var i = 0; i < charts.length; i++) {
        if (args.axis.series[0].chart.element.id !== charts[i].element.id) {
            charts[i].primaryXAxis.zoomFactor = zoomFactor;
            charts[i].primaryXAxis.zoomPosition = zoomPosition;
            charts[i].zoomModule.isZoomed = args.axis.series[0].chart.zoomModule.isZoomed;
            charts[i].zoomModule.isPanning = args.axis.series[0].chart.zoomModule.isPanning;
        }
    }
}

function selectionCompleteFunction(args) {
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