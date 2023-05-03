var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3, text: 'Feb: 3.5' },
                { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13, text: 'Apr: 13.5' },
                { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23, text: 'Jun: 23.5' },
                { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
                { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' }],
            dataLabel: { visible: true, position: 'Outside' , format: 'n2' },
            startAngle: 270,
            endAngle: 90,
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');

