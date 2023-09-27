var charts = [];

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
        interval: ej.base.Browser.isDevice ? 2 : 1,
        crosshairTooltip: { enable: true }
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
            type: 'Spline', dataSource: synchronizedData, xName: 'USD', width: 2, yName: 'EUR', emptyPointSettings: { mode: 'Drop' }
        }
    ],
    chartMouseLeave: function (args) {
        chart1.hideCrosshair();
    },
    chartMouseMove: function (args) {
        if ((!ej.base.Browser.isDevice && !chart.isTouch && !chart.isChartDrag) || chart.startMove) {
            chart1.startMove = chart.startMove;
            chart1.showCrosshair(args.x, args.y);
        }
    },
    chartMouseUp: function (args) {
        if (ej.base.Browser.isDevice && chart.startMove) {
            chart1.hideCrosshair();
        }
    },
    title: 'US to EURO',
    titleStyle: { textAlignment: 'Near' },
    crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' }
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
        interval: ej.base.Browser.isDevice ? 2 : 1,
        crosshairTooltip: { enable: true }
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
    chartMouseMove: function (args) {
        if ((!ej.base.Browser.isDevice && !chart1.isTouch && !chart1.isChartDrag) || chart1.startMove) {
            chart.startMove = chart1.startMove;
            chart.showCrosshair(args.x, args.y);
        }
    },
    chartMouseLeave: function (args) {
        chart.hideCrosshair();
    },
    chartMouseUp: function (args) {
        if (ej.base.Browser.isDevice && chart1.startMove) {
            chart.hideCrosshair();
        }
    },
    title: 'US to INR',
    titleStyle: { textAlignment: 'Near' },
    crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' },
});
chart1.appendTo('#container2');
charts.push(chart1);