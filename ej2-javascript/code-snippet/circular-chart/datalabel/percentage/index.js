var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13, text: 'Jan: 3' }, 
                { x: 'Feb', y: 13.5, text: 'Feb: 3.5' },
                { x: 'Mar', y: 7, text: 'Mar: 7' }, 
                { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true,
                template: "<div id='dataLabelTemplate'>${point.percentage}%</div>"
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    }
}, '#element');

