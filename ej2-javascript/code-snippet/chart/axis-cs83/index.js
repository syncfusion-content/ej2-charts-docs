var chartData = [
    { x: 1, y: 7 }, { x: 2, y: 1 }, { x: 3, y: 1 },
    { x: 4, y: 14 }, { x: 5, y: 1 }, { x: 6, y: 10 },
    { x: 7, y: 8 }, { x: 8, y: 6 }, { x: 9, y: 10 },
    { x: 10, y: 10 }, { x: 11, y: 16 }, { x: 12, y: 6 },
    { x: 13, y: 14 }, { x: 14, y: 7 }, { x: 15, y: 5 },
    { x: 16, y: 2 }, { x: 17, y: 14 }, { x: 18, y: 7 },
    { x: 19, y: 7 }, { x: 20, y: 10 }];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Double',
        // Numeric axis range
        minimum: 1,
        maximum: 20,
        interval: 5,
        title: 'Overs'
    },
    primaryYAxis: {
        title: 'Runs',
        minimum: 0,
        maximum: 20,
        interval: 10
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'England', type: 'Area'
    }],
    title: 'England - Run Rate'
}, '#element');

