var chartData = [
      { country: "USA", gold: 50 },
      { country: "China", gold: 40 },
      { country: "Japan", gold: 70 },
      { country: "Australia", gold: 60 },
      { country: "France", gold: 50 },
      { country: "Germany", gold: 40 },
      { country: "Italy", gold: 40 },
      { country: "Sweden", gold: 30 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0, maximum: 80,
        interval: 20, title: 'Medals'
    },
    series:[{
        dataSource: chartData,
        xName: 'country', yName: 'gold',
        //fill for column series
        fill: 'green',
        //border width and color for column series
        border: {
            width: '2',
            color: 'red'
        },
		columnSpacing: 0.5,
		columnWidth: 0.5,
        name: 'Gold',
        //series type as column series
        type: 'Column'
    }],
    title: 'Olympic Medals'
}, '#element');
