var range = new ej.charts.RangeNavigator({
    labelFormat: 'n1',
    value: [12, 30],
    series: [{
        dataSource: double,
        xName: 'x', yName: 'y', type: 'StepLine', width: 2,
    }],
});
range.appendTo('#element');

