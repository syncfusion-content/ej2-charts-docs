var range = new ej.charts.RangeNavigator({
    majorTickLines: {
        width: 3,
        color: 'red'
    },
    value: [25, 40],
    series: [{
        dataSource: [
            { xData: 10, yData: 35 }, { xData: 20, yData: 28 },
            { xData: 30, yData: 34 }, { xData: 40, yData: 32 },
            { xData: 50, yData: 40 }
        ],
        xName: 'xData', yName: 'yData', type: 'StepLine', width: 2,
    }],
});
range.appendTo('#element');

