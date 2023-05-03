var chartData = [
    { x: 2007, y: 453, y1: 876, y2: 356, y3: 122 }, { x: 2008, y: 354, y1: 564, y2: 876, y3: 444 },
    { x: 2009, y: 282, y1: 242, y2: 898, y3: 222 }, { x: 2010, y: 321, y1: 121, y2: 567, y3: 231 },
    { x: 2011, y: 333, y1: 343, y2: 456, y3: 122 }, { x: 2012, y: 351, y1: 451, y2: 345, y3: 333 },
    { x: 2013, y: 403, y1: 203, y2: 543, y3: 354 }, { x: 2014, y: 421, y1: 431, y2: 654, y3: 100 }
];
var chart = new ej.charts.Chart({
        primaryXAxis: {
            title: 'Year',
            minimum:2006,
            maximum:2015,
            interval:1
        },
        primaryYAxis:
        {
            title: 'Sales Percentage(%)'
        },
        series: [
            {
                type: 'StackingBar', name: 'John',
                //Stacking group for stacked bar
                stackingGroup: 'JohnAndAndrew',
                dataSource: chartData, xName: 'x', yName: 'y'
            }, {
                type: 'StackingBar', name: 'Andrew', stackingGroup: 'JohnAndAndrew',
                dataSource: chartData, xName: 'x', yName: 'y1'
            }, {
               type: 'StackingBar', name: 'Thomas', stackingGroup: 'ThomasAndMichael',
                dataSource: chartData, xName: 'x', yName: 'y2'
            }, {
               type: 'StackingBar', name: 'Michael', stackingGroup: 'ThomasAndMichael',
                dataSource: chartData, xName: 'x', yName: 'y3'
            }
        ],
        title: 'Sales by year'
}, '#element');

